# Documentación del Proyecto — Guías de Estudio Dinámicas

> Documento de referencia técnica y de diseño. Objetivo: dejar registrado el estado actual del sitio (estructura, estilos, paletas y arquitectura de las guías) para poder auditarlo y priorizar mejoras a futuro.

**Repositorio:** https://github.com/WaltherMoraRivera/Next_Level
**Hosting:** GitHub Pages (rama `main`, carpeta raíz `/`)
**Última actualización de este documento:** reestructuración según `PROPUESTA_REDISENO.md` — motor común (`shared/`), nuevo flujo de 8 momentos, landing data-driven, gamificación ligera, Inglés migrado al motor común.

> Ver también [`PROPUESTA_REDISENO.md`](PROPUESTA_REDISENO.md): auditoría, justificación pedagógica y roadmap que originó esta arquitectura.

---

## 1. Estructura de carpetas

```
guias-estudio/
├── index.html                              # Landing principal (data-driven, ver §2)
├── shared/
│   ├── engine.css                          # Tokens + componentes UI comunes a toda guía
│   ├── engine.js                           # Motor genérico: fases, puntaje, persistencia
│   └── guides-manifest.js                  # Índice central de guías (ver §2.5)
├── lenguaje/
│   ├── guia1-mapa-relojero/                # Narrativo · Misterio
│   │   ├── index.html                      # Loader mínimo (~10 líneas)
│   │   └── data.js                         # Contenido puro del bloque
│   ├── guia2-pulpo-inteligencia/           # Científico / Divulgativo
│   └── guia3-tesla-visionario/             # Biográfico / Histórico
├── ingles/
│   └── unidad2-countries-cultures/         # Ya migrada al motor común (ver §5)
└── assets/                                 # Carpeta creada, actualmente vacía
```

No existe build system (no hay `npm`, `package.json`, bundlers ni preprocesadores). El motor (`shared/engine.css` + `engine.js`) se referencia con rutas relativas normales (`<link>`/`<script src>`), sin CDNs ni dependencias externas — sigue funcionando 100% offline y en GitHub Pages sin ningún paso de compilación.

**Cada guía es ahora un archivo de datos, no una aplicación completa.** Antes cada guía duplicaba ~700 líneas de CSS/JS; ahora un `index.html` de guía se ve así:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>...</title>
<link rel="stylesheet" href="../../shared/engine.css">
<div id="app"></div>
<script src="../../shared/engine.js"></script>
<script src="./data.js"></script>
<script>Engine.init(GUIDE_DATA);</script>
```

Todo lo específico de la guía vive en `data.js` como un objeto `GUIDE_DATA` (ver §3.2).

---

## 2. Landing principal (`index.html`)

### 2.1 Filosofía de diseño
Tema oscuro fijo (no depende de `prefers-color-scheme`), inspirado en aplicaciones como Notion/Discord/GitHub. No tiene modo claro.

### 2.2 Tokens de color (variables CSS en `:root`)

**Superficies (fijas, tema oscuro único):**
| Variable | Valor | Uso |
|---|---|---|
| `--bg` | `#0D0E14` | Fondo general de la página |
| `--bg-soft` | `#12131C` | Fondo de elementos internos (guide-link, empty-cat) |
| `--surface` | `#171923` | Fondo de tarjetas |
| `--surface-hover` | `#1C1F2B` | Fondo de tarjeta en hover |
| `--ink` | `#F1F2F6` | Texto principal |
| `--ink-mid` | `#A6ABBD` | Texto secundario |
| `--ink-muted` | `#6E7284` | Texto terciario / metadatos |
| `--border` / `--border-soft` | `#262A38` / `#1E212C` | Bordes |
| `--focus-ring` | `#8B93FF` | Anillo de foco (accesibilidad teclado) |

**Paleta por materia** (variables reutilizables en toda la interfaz, y espejadas en `shared/engine.css` vía `[data-subject="..."]` para que cada guía adopte el color de su materia):
| Variable | Valor | Materia |
|---|---|---|
| `--subject-language` | `#EF4444` | Lenguaje (rojo moderno) |
| `--subject-english` | `#FB7185` / `#E11D48` | Inglés (coral suave) |
| `--subject-history` | `#FBBF24` | Historia (dorado/ámbar) |
| `--subject-science` | `#34D399` | Ciencias (verde menta) |
| `--subject-math` | `#60A5FA` | Matemáticas (azul cielo) |

Cada tarjeta de materia setea `--cat-color` inline y el CSS deriva tintes con `color-mix()` para: borde superior, icono, badge, hover del enlace y flecha.

### 2.3 Iconografía
Iconos SVG inline estilo **Lucide** (stroke `2px`, `round`, viewBox `24×24`). Iconos actuales: `BookOpen` (Lenguaje), `Languages` (Inglés), `Landmark` (Historia), `FlaskConical` (Ciencias), `Calculator` (Matemáticas).

### 2.4 Layout y responsive
- Grid `repeat(auto-fill, minmax(300px, 1fr))`, 1 columna bajo 600px.
- Hero con título en gradiente multicolor que recorre las 5 paletas de materia.
- Animación de entrada de tarjetas escalonada; respeta `prefers-reduced-motion`.
- Objetivos táctiles ≥44px de alto en enlaces de guía; `:focus-visible` en todo elemento interactivo.

### 2.5 Landing data-driven (`shared/guides-manifest.js`)
El landing ya **no tiene las tarjetas hardcodeadas**. `index.html` carga `shared/guides-manifest.js` — un array `[{id, subject, title, genre, file, minutes}]` — y renderiza las 5 tarjetas de materia dinámicamente vía JS (`renderGrid()`), filtrando el manifest por `subject`. Agregar una guía nueva es: crear su carpeta (`index.html` + `data.js`) y agregar una entrada al manifest. El landing nunca más necesita editarse a mano para esto.

### 2.6 Progreso y gamificación en el landing
El landing lee `localStorage` (claves `progreso_<id>`, escritas por el motor al completar una guía — ver §3.5) para:
- Mostrar un chip `✓ NN%` junto a cada guía ya completada.
- Mostrar una fila de insignias globales (`renderStats()`): racha de guías completadas (`🔥`), constancia (`📚`, ≥3 guías) y dominio alto (`🏆`, alguna guía ≥85%). Solo aparece si hay al menos una guía completada.

---

## 3. Motor común (`shared/engine.css` + `shared/engine.js`)

### 3.1 Filosofía
Una sola implementación del "motor" de guía (header, fases, quiz, drag & drop, reporte, persistencia) compartida por **todas** las materias. Cada materia adopta su color vía `[data-subject="lenguaje|ingles|historia|ciencias|matematicas"]` en `engine.css` (tokens `--accent*` redefinidos por materia). El motor es agnóstico de contenido: todo lo específico de una guía vive en su `data.js`.

### 3.2 Modelo de datos de una guía
```js
const GUIDE_DATA = {
  id, subject, subjectLabel, subjectIcon, title, examRef, nextGuideHint,
  blocks: [ {type:'hook'|'goal'|'teach'|'guided-practice'|'quiz'|'open'|
                  'dnd-sequence'|'dnd-classify'|'match-pairs'|'error-spot'|
                  'flip-cards'|'challenge'|'reflect'|'report', ...} ]
}
```
`Engine.init(GUIDE_DATA)` arranca una máquina de estados simple sobre el array `blocks`: cada bloque se dibuja en `#app`, el header sticky (`.g-header`) muestra un punto de progreso por bloque, el nombre de la fase actual y el tiempo total estimado (`~NN min`, suma de `minutes` de todos los bloques).

### 3.3 Los 8 momentos pedagógicos (reemplaza las 9 "fases" originales)
El flujo ya no es una secuencia fija de nombres de fase, sino tipos de bloque que se combinan libremente por guía, siguiendo el modelo de 8 momentos de `PROPUESTA_REDISENO.md` (Parte 6):

| Tipo de bloque | Función pedagógica |
|---|---|
| `hook` | Enganche: activa conocimientos previos, genera curiosidad. Incluye botón "ver reflexión" opcional. |
| `goal` | Objetivo de la sesión: transparencia metacognitiva ("hoy vas a aprender a..."). |
| `teach` | Enseñanza: lectura o explicación. Si declara `vocab`, el vocabulario se refuerza **inmediatamente después de leer**, antes de cualquier evaluación (corrige el defecto del diseño original, donde el vocabulario aparecía al final). |
| `guided-practice` | Práctica con apoyo: preguntas de opción múltiple con **pista opcional** por pregunta (`hint`), feedback siempre explicado. |
| `quiz` | Práctica independiente: mismo motor que `guided-practice` pero sin pistas — mide dominio real. |
| `open` | Pregunta abierta con respuesta modelo revelable + autoevaluación del estudiante (Muy completa / Parcial / Me faltó argumentar). Soporta un `calloutTitle`/`calloutText` opcional (usado para la ironía en la Guía 3 de Lenguaje). |
| `dnd-sequence` | Ordenar elementos (línea de tiempo, secuencia de eventos). Drag & drop **o** clic-seleccionar + clic-colocar (alternativa táctil obligatoria). |
| `dnd-classify` | Clasificar elementos en 2 columnas (ej. idea principal / secundaria). Mismo mecanismo de arrastre + alternativa de clic. |
| `match-pairs` | 🆕 Emparejar (causa-efecto, término-definición): clic en un ítem izquierdo y su pareja derecha; par incorrecto destella en rojo y se libera, contabiliza como error. |
| `error-spot` | 🆕 Detectar el error: se listan líneas/afirmaciones, una es falsa; el estudiante hace clic en la que cree incorrecta. |
| `flip-cards` | 🆕 Tarjetas de volteo (`.flip-outer`/`.flip-inner`, transform 3D) para vocabulario o repaso rápido — **sin puntaje**, es una actividad de exposición libre. |
| `challenge` | Desafío de pensamiento/creación: escritura abierta + ejemplo modelo, sin autoevaluación forzosa. |
| `reflect` | Auto-reflexión de cierre (1–2 preguntas libres) antes del informe — metacognición barata de implementar, alto valor pedagógico. |
| `report` | Informe final (ver §3.4). |

### 3.4 Sistema de puntaje y reporte (`computeReport()`)
El puntaje ya no es un total plano: se agrega **por `skillTag`** (ej. `literal`, `inferencial`, `vocabulario`, `organizacion`, `argumentacion`, `critica`, o un tag propio de materia como `gramatica`). Reglas de puntaje por tipo de bloque:
- `guided-practice` / `quiz`: 2 pts por pregunta correcta.
- `teach` con `vocab`: 1 pt por palabra acertada al primer intento.
- `open`: 2 / 1 / 0 pts según autoevaluación del estudiante.
- `dnd-sequence` / `dnd-classify` / `match-pairs`: 4 pts si queda perfecto, 2 pts si supera un umbral parcial, 0 si no.
- `error-spot`: 4 pts si acierta la línea errónea al primer intento, 0 si no.
- `flip-cards`: no puntúa (actividad de repaso, no de evaluación).

El informe final (`report`) muestra: anillo de progreso animado (SVG), **barras de dominio por habilidad** (una por `skillTag`, no solo un % global), nivel estimado (`Avanzado/Intermedio alto/Intermedio/En desarrollo`), fortalezas (`≥70%`) y áreas a trabajar (`<70%`), recomendación para la siguiente guía (`nextGuideHint`), y la fila de insignias de gamificación (ver §3.5).

### 3.5 Persistencia y gamificación (`localStorage`)
Al llegar al bloque `report`, el motor guarda automáticamente:
```
key:   progreso_<GUIDE_DATA.id>
value: { completado, total, max, pct, skills:{tag:pct,...}, fecha }
```
`Engine.globalStats()` recorre todas las claves `progreso_*` de este navegador para calcular: guías completadas en total y mejor puntaje histórico — usado tanto en el informe de cada guía como en el landing (§2.6) para las insignias. **No hay backend**: todo el seguimiento vive en el navegador del estudiante; cambiar de dispositivo o borrar datos del sitio reinicia el progreso.

---

## 4. Encoding y metadatos
Cada `index.html` de guía debe incluir `<meta charset="UTF-8">` y `<meta name="viewport">` explícitos — esto ya causó un bug real de mojibake (tildes corruptas) al migrar contenido, corregido y ahora parte de la plantilla estándar de loader (§1).

---

## 5. Guía de Inglés — ya migrada al motor común
`ingles/unidad2-countries-cultures/` fue migrada desde su formato original (scroll largo + acordeones, tema claro fijo, quiz aparte) al motor común. Decisiones de la migración:
- Las 8 secciones gramaticales del temario original (plenty of, ordinales, comparativos, sufijos -er/-est, tiempo, expresiones, conectores, pronunciación /w/) se convirtieron en bloques `teach` secuenciales.
- Las **expresiones clave** y el **vocabulario de pronunciación /w/** usan el nuevo tipo `flip-cards` — una mecánica distinta a la de Lenguaje, como pide el estándar por asignatura de `PROPUESTA_REDISENO.md` (Parte 5).
- El quiz original (6 preguntas, difícultad fácil/media/difícil) se dividió en `guided-practice` (2 preguntas fáciles, con pista) + `quiz` (4 preguntas medias/difíciles, independiente).
- Se agregó un bloque `challenge` (escribir 3 oraciones combinando comparativos, conectores y preposiciones de tiempo) que no existía en el original, para cubrir "uso práctico del idioma" del estándar de Inglés.
- Ahora comparte tema claro/oscuro automático con el resto de las guías (antes era claro fijo).

Con esto, **las cuatro guías existentes (3 de Lenguaje + 1 de Inglés) comparten arquitectura**; ya no hay una implementación aparte que mantener.

---

## 6. Estándares por asignatura (definidos, pendientes de contenido)
`PROPUESTA_REDISENO.md` (Parte 5) define mecánicas específicas para Matemáticas (resolución paso a paso, escalera de pistas, error frecuente, ejercicios progresivos), Ciencias (observación → hipótesis → contraste) e Historia (contexto previo, análisis de fuente, `match-pairs` para causa-efecto). El motor ya soporta genéricamente `match-pairs` y `error-spot` (§3.3); faltan **StepSolver** y **HintLadder** como componentes dedicados de Matemáticas, y contenido real de temario para las tres materias — actualmente son carpetas vacías en el landing ("Próximamente").

---

## 7. Puntos de mejora — estado actualizado

| # | Área | Estado |
|---|---|---|
| 1 | Duplicación de código | ✅ Resuelto — motor extraído a `shared/engine.css` + `engine.js`. |
| 2 | Sin persistencia | ✅ Resuelto — `localStorage` por guía + insignias globales. |
| 3 | Adaptación dinámica simulada | ⚠️ Parcial — el reporte ahora calcula dominio real por habilidad (`skills`), pero la guía *siguiente* sigue sin ajustarse automáticamente; el `nextGuideHint` es texto, no una regla ejecutable. |
| 4 | Inconsistencia de tema | ⚠️ Parcial — todas las guías (incluida Inglés) ya comparten claro/oscuro automático; el landing sigue siendo oscuro fijo por decisión de diseño. |
| 5 | Nomenclatura de variables desalineada | ✅ Resuelto — el motor común usa `--accent*` genérico, sin nombres de color hardcodeados por materia. |
| 6 | Arquitectura de Inglés distinta | ✅ Resuelto — migrada al motor común (§5). |
| 7 | Sin pruebas automatizadas | ❌ Sigue pendiente — todo el QA de esta reestructuración fue manual en navegador. |
| 8 | Accesibilidad parcial | ❌ Sigue pendiente — sin verificación con lector de pantalla real ni `aria-live` en feedback dinámico. |
| 9 | Sin analítica ni seguimiento real | ⚠️ Parcial — ahora hay persistencia local y perfil de dominio por habilidad, pero no hay forma de comparar progreso entre dispositivos (no hay backend). |
| 10 | Carpeta `assets/` vacía | ❌ Sigue sin uso. |
| 11 | Matemáticas/Ciencias/Historia sin contenido | 🆕 Los estándares están definidos (§6) pero no hay guías reales — pendiente de temario oficial. |

---

## 8. Convenciones actuales a mantener
- Motor común (`shared/`) para toda guía nueva — nunca volver a duplicar CSS/JS de guía en guía.
- Cada guía = carpeta con `index.html` (loader) + `data.js` (contenido), registrada en `shared/guides-manifest.js`.
- Paleta de color por materia vía `[data-subject]` en `engine.css`, nunca hardcodeada en un bloque de datos.
- Todo texto de feedback debe explicar *por qué*, citando la fuente — nunca un simple "✅/✘".
- Las preguntas abiertas siempre incluyen una respuesta modelo revelable, nunca corrección automática rígida.
- El vocabulario/glosario de una guía se refuerza **inmediatamente después** de la enseñanza (bloque `teach`), nunca al final.
- Cada `index.html` de guía debe incluir `<meta charset="UTF-8">` y `<meta name="viewport">` explícitos (ver §4).
- Cada bloque puntuable declara `skillTag` para alimentar el perfil de dominio del informe final.

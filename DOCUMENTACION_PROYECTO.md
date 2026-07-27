# Documentación del Proyecto — Guías de Estudio Dinámicas

> Documento de referencia técnica y de diseño. Objetivo: dejar registrado el estado actual del sitio (estructura, estilos, paletas y arquitectura de las guías) para poder auditarlo y priorizar mejoras a futuro.

**Repositorio:** https://github.com/WaltherMoraRivera/Next_Level
**Hosting:** GitHub Pages (rama `main`, carpeta raíz `/`)
**Última actualización de este documento:** Historia lleva 4 de 7 guías construidas (Unidad 3 completa); el foco cambia ahora a Ciencias, que arranca con la Guía 1 (OA8, cargas eléctricas y electrostática), primera guía en usar `dnd-classify` en producción (ver §6.4).

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
├── historia/
│   ├── guia1-ilustracion-antiguo-regimen/  # Unidad 3, OA14 (1 de 7 guías del plan, ver §6.3)
│   ├── guia2-revoluciones-eeuu-francia/    # Unidad 3, OA15 (2 de 7)
│   ├── guia3-declaracion-derechos/         # Unidad 3, OA18 (3 de 7) — estrena source-compare
│   └── guia4-independencia-america/        # Unidad 3, OA16 parte América (4 de 7)
├── ciencias/
│   └── guia1-cargas-electricas/            # Unidad 3, OA8 (1 de 8 guías del plan, ver §6.4)
└── assets/                                 # Carpeta creada, actualmente vacía
```

No existe build system (no hay `npm`, `package.json`, bundlers ni preprocesadores). El motor (`shared/engine.css` + `engine.js`) se referencia con rutas relativas normales (`<link>`/`<script src>`), sin CDNs ni dependencias externas — sigue funcionando 100% offline y en GitHub Pages sin ningún paso de compilación.

**Cada guía es ahora un archivo de datos, no una aplicación completa.** Antes cada guía duplicaba ~700 líneas de CSS/JS; ahora un `index.html` de guía se ve así:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>...</title>
<link rel="stylesheet" href="../../shared/engine.css?v=2">
<div id="app"></div>
<script src="../../shared/engine.js?v=2"></script>
<script src="./data.js"></script>
<script>Engine.init(GUIDE_DATA);</script>
```

Todo lo específico de la guía vive en `data.js` como un objeto `GUIDE_DATA` (ver §3.2). El `?v=N` en `engine.css`/`engine.js` es un cache-buster manual: como no hay build system, los navegadores pueden cachear agresivamente estos archivos por ruta; al cambiar el motor de forma visible, se sube el número de versión en **todas** las guías existentes para forzar la recarga. `index.html` aplica el mismo cache-buster a `shared/guides-manifest.js?v=N` — si una guía nueva no aparece en el landing tras agregarla al manifest, subir ese número es la primera causa a revisar.

---

## 2. Landing principal (`index.html`)

### 2.1 Filosofía de diseño
Tema oscuro fijo (no depende de `prefers-color-scheme`), inspirado en aplicaciones como Notion/Discord/GitHub. No tiene modo claro. Comparte exactamente la misma escala neutra y paleta por materia que las guías (ver §3.6) — landing y guías son, visualmente, la misma plataforma.

### 2.2 Tokens de color (variables CSS en `:root`, alineados con `shared/engine.css`)

**Superficies neutras:**
| Variable | Valor | Uso |
|---|---|---|
| `--bg` | `#0E1013` | Fondo general de la página |
| `--bg-soft` / `--surface` | `#16181D` | Fondo de tarjetas y elementos internos |
| `--surface-hover` | `#22252D` | Hover de tarjeta/enlace |
| `--ink` | `#EDEEF1` | Texto principal |
| `--ink-mid` | `#AEB2BC` | Texto secundario |
| `--ink-muted` | `#787E8A` | Texto terciario / metadatos |
| `--border` / `--border-soft` | `#2A2E37` | Bordes |
| `--focus-ring` | `#3AA3E0` | Anillo de foco (mismo azul "info" del sistema de roles, ver §3.6) |

**Paleta por materia** (variables reutilizables en toda la interfaz, y espejadas en `shared/engine.css` vía `[data-subject="..."]` para que cada guía adopte el color de su materia):
| Variable | Valor | Materia |
|---|---|---|
| `--subject-language` | `#DC2626` | Lenguaje (rojo) |
| `--subject-english` | `#EC4899` | Inglés (rosa) |
| `--subject-history` | `#F59E0B` | Historia (ámbar) |
| `--subject-science` | `#10B981` | Ciencias (verde) |
| `--subject-math` | `#3B82F6` | Matemáticas (azul) |

Cada tarjeta de materia setea `--cat-color` inline y el CSS deriva tintes con `color-mix()` para: borde superior, icono, badge, hover del enlace y flecha. **Estos valores son intencionalmente idénticos a los `--accent` de `shared/engine.css`** (ver §3.6) — antes del Design System, landing y guías usaban tonos de materia ligeramente distintos entre sí (ej. Lenguaje `#EF4444` en landing vs `#DC2626` en las guías); ahora es un solo valor por materia en toda la plataforma.

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
`Engine.init(GUIDE_DATA)` arranca una máquina de estados simple sobre el array `blocks`: cada bloque se dibuja en `#app`, el header sticky (`.g-header`) muestra un punto de progreso por bloque, el nombre de la fase actual, el tiempo total estimado (`~NN min`, suma de `minutes` de todos los bloques) y un enlace **"🏠 NextLevel · Volver al Menú"** (`../../index.html`, asumiendo la convención de 2 niveles de profundidad `<materia>/<guia>/index.html`) para que el estudiante nunca quede "atrapado" dentro de una guía — visible en todo momento, no solo en el informe final. El mismo enlace se repite como botón junto a "Reiniciar guía" en la pantalla de informe.

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
| `source-analysis` | 🆕🏛️ Análisis de una fuente histórica: tarjeta `.source-card` (tipo, autor, año, cita) seguida de preguntas de opción múltiple sin pistas y una pregunta abierta con respuesta modelo. Flujo interno de 3 etapas (`source` → `mc` → `open`) dentro de un solo bloque. |
| `source-compare` | 🆕🏛️ Igual que `source-analysis` pero con **dos fuentes lado a lado** (`.source-grid`), pensado para comparar perspectivas o documentos (ej. dos declaraciones de derechos). Mismo flujo interno y mismo `skillTag: 'analisis-fuentes'`. |
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
- `source-analysis` / `source-compare`: 2 pts por pregunta de opción múltiple correcta + 2/1/0 pts por la pregunta abierta según autoevaluación (mismo criterio que `open`).
- `flip-cards`: no puntúa (actividad de repaso, no de evaluación).

El informe final (`report`) muestra: anillo de progreso animado (SVG), **barras de dominio por habilidad** (una por `skillTag`, no solo un % global), nivel estimado (`Avanzado/Intermedio alto/Intermedio/En desarrollo`), fortalezas (`≥70%`) y áreas a trabajar (`<70%`), recomendación para la siguiente guía (`nextGuideHint`), y la fila de insignias de gamificación (ver §3.5).

### 3.5 Persistencia y gamificación (`localStorage`)
Al llegar al bloque `report`, el motor guarda automáticamente:
```
key:   progreso_<GUIDE_DATA.id>
value: { completado, total, max, pct, skills:{tag:pct,...}, time:{totalReal,totalExpected}, fecha }
```
`Engine.globalStats()` recorre todas las claves `progreso_*` de este navegador para calcular: guías completadas en total y mejor puntaje histórico — usado tanto en el informe de cada guía como en el landing (§2.6) para las insignias. **No hay backend**: todo el seguimiento vive en el navegador del estudiante; cambiar de dispositivo o borrar datos del sitio reinicia el progreso.

**Cronómetro por sección (informativo para padres).** El motor mide, en milisegundos reales, cuánto tiempo pasa el estudiante en cada bloque (`trackEnter()` se llama al inicio de cada `render()`, acumulando el tiempo del bloque anterior cuando `blockIndex` cambia). El conteo **se pausa automáticamente** cuando la pestaña pierde el foco (`document.visibilitychange` / `document.hidden`), para que el dato no se infle si el estudiante deja la guía abierta de fondo — sin esto, el tiempo total no sería confiable. El informe final agrega una sección "⏱️ Tiempo de dedicación" que compara, bloque por bloque, el tiempo real contra el `minutes` estimado de cada uno, marcando en ámbar (⚡) cualquier bloque de ≥2 min esperados donde el tiempo real fue menor al 35% de lo esperado — la señal que permite a un padre notar si el estudiante "solo dio clic a Continuar" sin leer. El detalle completo (`time.totalReal` / `time.totalExpected`) también queda en `localStorage` junto al resto del progreso.

### 3.6 Design System — roles de color (reemplaza la paleta "teñida" original)
Antes de esta versión, cada guía redefinía `--bg`/`--surface`/`--border`/`--ink*` completos por materia (ej. Lenguaje usaba tonos rojizos hasta en el fondo de página), lo que producía exceso de color dominante y poca jerarquía visual. El sistema actual separa dos capas de tokens en `shared/engine.css`, que **nunca se mezclan**:

**a) Neutros — fijos, iguales en las 5 materias:**
`--n-bg`, `--n-surface`, `--n-surface-2`, `--n-surface-hover`, `--n-border`, `--n-border-strong`, `--n-text`, `--n-text-2`, `--n-text-3`. Definen fondo, tarjetas, paneles internos e inputs. Con tema oscuro/claro vía `prefers-color-scheme` + overrides `[data-theme]`, igual que antes.

**b) Acento de materia — el único color que cambia con `[data-subject]`:**
`--accent`, `--accent-hover`, `--accent-soft`, `--accent-border`, `--accent-text`. Se aplican **solo** a: header (`.g-header`), botón primario (`.btn-p`), barra de progreso (`.qz-bar`, `.skill-bar-fill`, `.ring-fill`), badges ganados (`.badge.earned`), tarjetas de vocabulario/D&D y enlaces/íconos activos. Nunca al fondo de página ni al texto general.

**c) Semánticos — fijos, independientes de la materia:**
| Rol | Variables | Uso |
|---|---|---|
| Éxito | `--success`, `--success-bg`, `--success-text` (verde) | Respuesta correcta, logro |
| Error | `--error`, `--error-bg`, `--error-text` (rojo carmesí) | Respuesta incorrecta |
| Advertencia | `--warning`, `--warning-bg`, `--warning-text` (ámbar) | Pistas, avisos, racha |
| Info | `--info`, `--info-bg`, `--info-text` (celeste) | Callouts neutrales (ej. caja de ironía), foco de teclado |

Nota de diseño: en Lenguaje el acento es rojo y el error semántico también es rojo (`--error: #E5484D` vs `--accent: #DC2626` de Lenguaje). Se distinguen por tono y, sobre todo, **nunca dependen solo del color** — todo estado correcto/incorrecto va siempre acompañado de ✅/❌ y texto explicativo, cumpliendo el criterio de accesibilidad de no transmitir información únicamente por color.

**Escalas de soporte** (también en `shared/engine.css`): espaciado en base 4px (`--sp-1` a `--sp-8`: 4/8/12/16/24/32/48/64px), radios (`--r-sm 6px`, `--r-md 10px`, `--r-lg 14px`, `--r-full` píldora) y elevación de 2 niveles (`--shadow-sm` tarjeta en reposo, `--shadow-md` hover/modal — nunca más de 2 simultáneos en pantalla).

Este sistema está documentado en detalle, con la auditoría de problemas visuales que lo motivó (jerarquía, contraste, fatiga visual en sesiones de 45 min), en el plan de rediseño aprobado — ver historial de la conversación del proyecto.

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

## 6. Estándares por asignatura (definidos, contenido ahora disponible)
`PROPUESTA_REDISENO.md` (Parte 5) define mecánicas específicas para Matemáticas (resolución paso a paso, escalera de pistas, error frecuente, ejercicios progresivos), Ciencias (observación → hipótesis → contraste) e Historia (contexto previo, análisis de fuente, `match-pairs` para causa-efecto). El motor ya soporta `match-pairs`, `error-spot` y, desde esta versión, **`source-analysis`/`source-compare`** (análisis de fuentes históricas, ver §3.3) — ya pulida como componente de primera clase, no como combinación improvisada de bloques genéricos. Sigue faltando **StepSolver** y **HintLadder** como componentes dedicados de Matemáticas.

### 6.1 Programas de Estudio oficiales (`Programas_de_estudio/octavo_basico/`)
Se incorporaron los 5 Programas de Estudio MINEDUC de 8° básico (Bases Curriculares 2013/2015, confirmadas vigentes por el usuario): `Lenguaje.pdf`, `Ingles.pdf`, `Historia.pdf`, `Ciencias.pdf`, `Matematicas.pdf`. Los cinco comparten estructura editorial (Propósito → Conocimientos previos → Palabras clave → Objetivos de Aprendizaje con Indicadores de Evaluación → Ejemplos de Actividades ya resueltos), lo que permite mapear directamente: Indicadores de Evaluación → `skillTag`, Ejemplos de Actividades → preguntas de `quiz`/`guided-practice`/`error-spot`, Palabras clave → `vocab`/`flip-cards`.

Como el curso está en **segundo semestre**, las unidades relevantes para nuevo contenido son:

| Materia | Unidad 3 (2° sem.) | Unidad 4 (2° sem.) |
|---|---|---|
| Lenguaje | Relatos de misterio | Naturaleza *(además: U5 La comedia, U6 El mundo descabellado, U7 Medios de comunicación — 5 unidades en total en el 2° semestre)* |
| Inglés | Going places | Future matters |
| Historia | Ilustración, revolución e independencia | Sociedad y territorio: la región en Chile y América |
| Ciencias | Electricidad y calor | Estudio y organización de la materia |
| Matemáticas | Área de superficie y volumen de prismas/cilindros (+ transformaciones isométricas) | Estadística: medidas de posición, percentiles/cuartiles, principio combinatorio |

La guía de Inglés ya publicada (`ingles/unidad2-countries-cultures/`) corresponde, por coincidencia, a la **Unidad 2 oficial del segundo semestre** — quedó correctamente alineada sin haberlo planeado así.

### 6.2 Refuerzo vs. unidad oficial (`track` en el manifest)
Las 3 guías de Lenguaje ya construidas (`guia1-mapa-relojero`, `guia2-pulpo-inteligencia`, `guia3-tesla-visionario`) se crearon **antes** de tener los Programas de Estudio oficiales en mano, con temas inventados como ejemplos de género literario. No corresponden a ninguna unidad real del temario de Lenguaje (que para el 2° semestre es: Relatos de misterio → Naturaleza → La comedia → El mundo descabellado → Medios de comunicación). Decisión del usuario: **se mantienen como material de refuerzo transversal de comprensión lectora**, adicional a las guías nuevas que sí estarán alineadas a una unidad oficial específica.

Esto se registra en `shared/guides-manifest.js` con el campo `track`:
- `track: 'refuerzo'` — no atada a una unidad oficial (las 3 guías de Lenguaje).
- `track: 'unidad'` + `unit: 'Unidad N · semestre'` — alineada a una unidad oficial del programa (la guía de Inglés, y todo lo que se construya de aquí en adelante).

### 6.3 Plan de cobertura — Historia, 2° semestre (7 guías aprobadas)
La Unidad 3 (Ilustración, revolución e independencia — OA 14, 15, 16, 18, 19) y la Unidad 4 (Sociedad y territorio — OA 20, 21, 22) se cubren con 7 guías de 45 min:

| # | Guía | OA | Tipo de bloque distintivo |
|---|---|---|---|
| 1 ✅ | La Ilustración: la razón contra el Antiguo Régimen | OA14 | `teach` + `flip-cards` (vocabulario denso) — **construida** (`historia/guia1-ilustracion-antiguo-regimen/`) |
| 2 ✅ | De las ideas a la acción: revoluciones de EE.UU. y Francia | OA15 | `dnd-sequence` (línea de tiempo de 6 hitos entrelazando ambas revoluciones) — **construida** (`historia/guia2-revoluciones-eeuu-francia/`) |
| 3 ✅ | La Declaración de los Derechos del Hombre y su vigencia hoy | OA18 | `source-compare` (Declaración 1789 vs. de Gouges, con la Declaración de 1948 integrada en el `teach`) — **construida** (`historia/guia3-declaracion-derechos/`) |
| 4 ✅ | La independencia de América: un proceso continental | OA16 (América) | `dnd-sequence` + `match-pairs` (causa↔consecuencia) — **construida** (`historia/guia4-independencia-america/`). Primera guía en usar ambos `skillTag:'organizacion'` a la vez, confirmando que el informe promedia correctamente el dominio combinado de las dos actividades. |
| 5 | La independencia de Chile y el nuevo orden republicano | OA16 (Chile) + OA19 | `source-analysis` + `open` evaluativo (cambio/continuidad) |
| 6 | ¿Qué es una región? Criterios y tipos en Chile y América | OA20 | `dnd-classify` (tipos de región) |
| 7 | Conexión, aislamiento y desarrollo: los desafíos de las regiones | OA21 + OA22 | `error-spot` / `open` crítico (evaluar políticas regionales) |

Este plan asume ~4 guías equivalentes para Matemáticas por el segundo semestre (unidad más corta en ese programa), aunque eso se confirmará al revisar esa unidad en detalle al construir su contenido.

El landing muestra este campo como etiqueta junto a cada guía (`Refuerzo` / `Unidad N · 2° semestre`) para que también sea visible para el estudiante, no solo información interna.

### 6.4 Plan de cobertura — Ciencias Naturales, 2° semestre (8 guías aprobadas)
La Unidad 3 (Física: Electricidad y calor — OA 8, 9, 10, 11) y la Unidad 4 (Química: Estudio y organización de la materia — OA 12, 13, 14, 15) se cubren con 8 guías de 45 min, una por OA:

| # | Guía | OA | Tipo de bloque distintivo |
|---|---|---|---|
| 1 ✅ | Cargas eléctricas y electrostática | OA8 | `dnd-classify` (conductores vs. aislantes) + `match-pairs` (métodos de electrización ↔ descripción) — **construida** (`ciencias/guia1-cargas-electricas/`). Primera guía en usar `dnd-classify` en producción; confirmado que el informe promedia correctamente el dominio combinado de `organizacion` entre ambas actividades (75% = 100% en clasificación + 50% en emparejar, con 2 intentos fallidos). |
| 2 | ¿Cómo generamos electricidad? | OA9 | `match-pairs` (tecnología ↔ fuente de energía: pilas, paneles fotovoltaicos, generadores) |
| 3 | Circuitos en serie y en paralelo | OA10 | `error-spot` sobre esquemas de circuito + `guided-practice` numérica |
| 4 | Calor y temperatura | OA11 | `teach` + quiz + `open` (explicar un fenómeno cotidiano de transferencia de calor) |
| 5 | La evolución de los modelos atómicos | OA12 | `dnd-sequence` (línea de tiempo Dalton → Thomson → Rutherford → Bohr) |
| 6 | Átomos, partículas y sustancias | OA13 | `guided-practice` + quiz conceptual |
| 7 | La tabla periódica como modelo | OA14 | `match-pairs` o `dnd-classify` (metales/no metales/metaloides) |
| 8 | Los elementos de la vida (C, H, O, N) | OA15 | `source-analysis` (dato curioso + pregunta crítica) |

---

## 7. Puntos de mejora — estado actualizado

| # | Área | Estado |
|---|---|---|
| 1 | Duplicación de código | ✅ Resuelto — motor extraído a `shared/engine.css` + `engine.js`. |
| 2 | Sin persistencia | ✅ Resuelto — `localStorage` por guía + insignias globales. |
| 3 | Adaptación dinámica simulada | ⚠️ Parcial — el reporte ahora calcula dominio real por habilidad (`skills`), pero la guía *siguiente* sigue sin ajustarse automáticamente; el `nextGuideHint` es texto, no una regla ejecutable. |
| 4 | Inconsistencia de tema | ⚠️ Parcial — todas las guías (incluida Inglés) ya comparten claro/oscuro automático; el landing sigue siendo oscuro fijo por decisión de diseño. |
| 5 | Nomenclatura de variables desalineada / exceso de color dominante | ✅ Resuelto — Design System con neutros fijos + acento de materia acotado a componentes específicos (ver §3.6). Los valores de materia son ahora idénticos entre landing y guías. |
| 6 | Arquitectura de Inglés distinta | ✅ Resuelto — migrada al motor común (§5). |
| 7 | Sin pruebas automatizadas | ❌ Sigue pendiente — todo el QA de esta reestructuración fue manual en navegador. |
| 8 | Accesibilidad parcial | ❌ Sigue pendiente — sin verificación con lector de pantalla real ni `aria-live` en feedback dinámico. |
| 9 | Sin analítica ni seguimiento real | ⚠️ Parcial — ahora hay persistencia local y perfil de dominio por habilidad, pero no hay forma de comparar progreso entre dispositivos (no hay backend). |
| 10 | Carpeta `assets/` vacía | ❌ Sigue sin uso. |
| 11 | Matemáticas/Ciencias/Historia sin contenido | ⚠️ Parcial — los estándares están definidos (§6) y ya se cuenta con el temario oficial completo (§6.1); falta construir las guías propiamente tal. |
| 12 | Sistema de colores "teñía" toda la interfaz | ✅ Resuelto — ver §3.6 (Design System, roles de color). |

**Bugs corregidos en esta versión:**
1. Los botones "Ver reflexión", "Ver respuesta modelo" y "Ver ejemplo" no revelaban su contenido. Causa: el botón vive dentro de su propio `.btn-row`, por lo que `this.nextElementSibling` (con `this` = botón) apuntaba a `null` en vez del bloque a revelar, que es hermano de `.btn-row`, no del botón. Corregido a `this.parentElement.nextElementSibling` en `shared/engine.js`.
2. El botón "Continuar" de un bloque `teach` **sin** `vocab` no hacía nada (afectaba sobre todo a Inglés, donde la mayoría de los bloques `teach` no llevan vocabulario). Causa: el botón llamaba siempre a `Engine._teachStage('vocab')`, que al detectar vocabulario vacío intentaba autosaltar llamando de nuevo a sí mismo, entrando en recursión infinita. Corregido para que el botón llame a `Engine.next()` directamente cuando `b.vocab` está vacío.

Ambos fixes viven en el motor común, por lo que aplican a las 4 guías existentes a la vez. Lección para bloques futuros: cualquier botón de "revelar" o "avanzar" debe probarse manualmente con clic real en navegador (no solo invocando las funciones desde consola), ya que la consola puede enmascarar bugs de recorrido del DOM o de flujo de estados.

---

## 8. Convenciones actuales a mantener
- Motor común (`shared/`) para toda guía nueva — nunca volver a duplicar CSS/JS de guía en guía.
- Cada guía = carpeta con `index.html` (loader) + `data.js` (contenido), registrada en `shared/guides-manifest.js`.
- Paleta de color por materia vía `[data-subject]` en `engine.css`, nunca hardcodeada en un bloque de datos.
- Los neutros (`--n-*`) nunca cambian por materia; el acento (`--accent*`) solo se aplica a header, botón primario, progreso, badges e íconos activos (ver §3.6). Nunca teñir fondo de página ni texto general con el color de una materia.
- Los estados correcto/incorrecto/aviso/info usan siempre los mismos colores semánticos (`--success`/`--error`/`--warning`/`--info`), sin importar la materia.
- Al modificar `shared/engine.css` o `engine.js` de forma visible, subir el número de versión en el query string (`?v=N`) de **todas** las guías existentes (ver §1) para evitar que el caché del navegador oculte el cambio.
- **La alternativa correcta de cada pregunta de opción múltiple debe distribuirse de forma pareja entre A/B/C/D dentro de cada guía** (idealmente ~25% cada una, nunca una letra dominando). Antes de esta convención, guías completas llegaron a tener el 100% de sus respuestas correctas en la opción B — un patrón que un estudiante puede explotar sin leer el contenido. Al escribir una guía nueva, verificar la distribución con `grep -oE "c:[0-9]," data.js | sort | uniq -c` antes de darla por terminada.
- Todo texto de feedback debe explicar *por qué*, citando la fuente — nunca un simple "✅/✘".
- Las preguntas abiertas siempre incluyen una respuesta modelo revelable, nunca corrección automática rígida.
- El vocabulario/glosario de una guía se refuerza **inmediatamente después** de la enseñanza (bloque `teach`), nunca al final.
- Cada `index.html` de guía debe incluir `<meta charset="UTF-8">` y `<meta name="viewport">` explícitos (ver §4).
- Cada bloque puntuable declara `skillTag` para alimentar el perfil de dominio del informe final.

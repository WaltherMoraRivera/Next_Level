# Documentación del Proyecto — Guías de Estudio Dinámicas

> Documento de referencia técnica y de diseño. Objetivo: dejar registrado el estado actual del sitio (estructura, estilos, paletas y arquitectura de las guías) para poder auditarlo y priorizar mejoras a futuro.

**Repositorio:** https://github.com/WaltherMoraRivera/Next_Level
**Hosting:** GitHub Pages (rama `main`, carpeta raíz `/`)
**Última actualización de este documento:** guías de Lenguaje 1–3 + landing rediseñado (tema oscuro)

---

## 1. Estructura de carpetas

```
guias-estudio/
├── index.html                          # Landing principal
├── lenguaje/
│   ├── guia1-mapa-relojero.html        # Narrativo · Misterio
│   ├── guia2-pulpo-inteligencia.html   # Científico / Divulgativo
│   └── guia3-tesla-visionario.html     # Biográfico / Histórico
├── ingles/
│   └── unidad2-countries-cultures.html # Unidad temática (formato distinto, ver §5)
└── assets/                             # Carpeta creada, actualmente vacía
```

No existe build system (no hay `npm`, `package.json`, bundlers ni preprocesadores). Cada archivo `.html` es autocontenido: incluye su propio `<style>` y `<script>` inline, sin dependencias externas ni CDNs. Esto es intencional (evita cargas externas y funciona directamente en GitHub Pages), pero implica que **todo el CSS/JS de cada guía está duplicado entre archivos** (ver §6, punto de mejora).

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

**Paleta por materia** (variables reutilizables en toda la interfaz):
| Variable | Valor | Materia |
|---|---|---|
| `--subject-language` | `#EF4444` | Lenguaje (rojo moderno) |
| `--subject-english` | `#FB7185` | Inglés (coral suave) |
| `--subject-history` | `#FBBF24` | Historia (dorado/ámbar) |
| `--subject-science` | `#34D399` | Ciencias (verde menta) |
| `--subject-math` | `#60A5FA` | Matemáticas (azul cielo) |

Cada tarjeta de materia setea `--cat-color` inline (`style="--cat-color:var(--subject-x)"`) y el CSS deriva automáticamente tintes con `color-mix(in srgb, var(--cat-color) X%, transparent)` para: borde superior, icono, badge de disponibilidad, hover del enlace interno y flecha. Esto significa que **agregar una nueva materia solo requiere una variable de color nueva + un ícono**, sin tocar el resto del CSS.

### 2.3 Iconografía
Iconos SVG inline estilo **Lucide** (stroke `2px`, `stroke-linecap/linejoin: round`, viewBox `24×24`), sin depender de ninguna librería externa (evita el bloqueo de CDNs). Iconos actuales: `BookOpen` (Lenguaje), `Languages` (Inglés), `Landmark` (Historia), `FlaskConical` (Ciencias), `Calculator` (Matemáticas).

### 2.4 Layout y responsive
- Grid `repeat(auto-fill, minmax(300px, 1fr))`, 1 columna bajo 600px.
- Hero con título en gradiente multicolor (`background-clip:text`) que recorre las 5 paletas de materia.
- Animación de entrada de tarjetas (`fade + translateY`) escalonada con `--delay` por tarjeta; respeta `prefers-reduced-motion`.
- Objetivos táctiles ≥44px de alto en enlaces de guía.
- `:focus-visible` con anillo visible en todos los elementos interactivos.

---

## 3. Arquitectura de las guías de Lenguaje (Guías 1, 2 y 3)

Las tres guías de Lenguaje comparten **el mismo motor de aplicación** (misma estructura de JS, distinto contenido de datos). Es una SPA de una sola página por guía, sin router, basada en una máquina de estados simple.

### 3.1 Fases (`PHASES`)
Toda guía recorre 9 fases fijas, mostradas como puntos de progreso en el header sticky:

1. `activation` — Activación (5 min): pregunta reflexiva + botón "ver reflexión" con tip lector.
2. `reading` — Lectura principal (10–15 min): texto original con palabras clave subrayadas (`.vhl`, con `title` como tooltip).
3. `literal` — Comprensión literal: 3 preguntas de opción múltiple, feedback explicado (nunca solo "correcto/incorrecto").
4. `inferential` — Comprensión inferencial: 3 preguntas de opción múltiple (causa-efecto, inferencia de personaje, ironía según la guía).
5. `critical` — Comprensión crítica: 1 pregunta abierta (`<textarea>`) + botón "ver respuesta modelo" + autoevaluación del propio estudiante (Muy completa / Parcial / Me faltó argumentar).
6. `vocabulary` — Vocabulario: 6 palabras, formato "adivina antes de ver" (opción múltiple → revela definición, sinónimo, antónimo, ejemplo).
7. `organization` — Actividad de organización con drag & drop (distinta en cada guía, ver §3.3).
8. `challenge` — Desafío de pensamiento: escritura creativa abierta + ejemplo modelo (sin autoevaluación forzosa).
9. `report` — Informe final: anillo de progreso animado (SVG `stroke-dashoffset`), puntaje desglosado por sección, nivel estimado, fortalezas/debilidades y recomendaciones para la siguiente guía.

### 3.2 Sistema de puntaje (`calcScore()`)
Puntaje sobre 24 puntos totales, igual en las tres guías:
- Literal: 3 preguntas × 2 pts = 6 pts
- Inferencial: 3 preguntas × 2 pts = 6 pts
- Vocabulario: 6 palabras × 1 pt = 6 pts
- Organización: 4 pts si el ejercicio queda 100% correcto, 2 pts si supera un umbral parcial (≥4/6 o ≥3/5 según la guía), 0 si no
- Crítica: autoevaluación del estudiante (2 / 1 / 0 pts, sin verificación automática real ya que es una respuesta abierta)

El informe final usa el % total para asignar un nivel (`Avanzado / Intermedio alto / Intermedio / En desarrollo`) con umbrales en 85%, 67% y 50%, siguiendo la lógica de adaptación dinámica pedida originalmente (aunque **la adaptación real solo ocurre como mensaje/recomendación textual**, no ajusta automáticamente la dificultad de la guía siguiente — ver §6).

### 3.3 Actividad de organización (varía por guía — progresión de dificultad)
| Guía | Tipo de actividad | Mecánica |
|---|---|---|
| 1 — El mapa del relojero | Ordenar 5 eventos en secuencia | Slots numerados 1–5, drag & drop o clic-seleccionar + clic-colocar |
| 2 — El pulpo | Clasificar 6 ideas en 2 columnas | Columnas "Idea Principal" / "Idea Secundaria", mismo mecanismo de arrastre |
| 3 — Nikola Tesla | Construir línea de tiempo de 6 eventos | Igual a la Guía 1, pero con 6 slots (mayor carga cognitiva) |

Todas soportan **dos modos de interacción**: arrastrar con el mouse (`draggable`, eventos `dragstart/dragover/drop`) o hacer clic para seleccionar un ítem y luego clic en el destino — pensado para uso en tablet/móvil donde el drag nativo es menos confiable.

### 3.4 Paleta de color por guía
Las tres guías de Lenguaje comparten el **mismo sistema de tokens y la misma paleta roja** (`--red:#DC2626`, `--red-md:#EF4444`, etc.), consistente con `--subject-language` del landing. Cada guía define:
- Tokens de superficie propios (`--bg`, `--surface`, `--border`) en tono rojizo muy claro (modo claro) y muy oscuro (modo oscuro)
- Un color de error separado: `--rd` / `--rd-light`, distinto del rojo de marca (`--red`), para que los estados "respuesta incorrecta" no se confundan visualmente con el color de la materia

Cada guía también soporta modo claro/oscuro independiente del landing (vía `prefers-color-scheme` + overrides `[data-theme]`), a diferencia del landing que es oscuro fijo. **Esto es una inconsistencia de producto**: el landing no ofrece modo claro pero las guías sí (ver §6).

> Nota histórica: la Guía 1 se construyó originalmente con una paleta morada/violeta (`--purple:#6D28D9`) antes de que se definiera oficialmente el rojo (`#EF4444`) como color de Lenguaje. Se corrigió post-hoc reasignando los valores hex de las mismas variables (`--purple*` → tonos rojos) para no tener que renombrar clases, y renombrando el antiguo `--red` (error) a `--rd` para evitar colisión. El nombre interno de las variables (`--purple-dk`, `--purple-md`, etc.) **quedó desalineado con su color real** — funciona, pero es confuso para mantenimiento futuro.

### 3.5 Componentes reutilizados dentro de cada guía
- `.card` — contenedor blanco/oscuro con animación de entrada (`fade + translateY`), usado para cada fase.
- `.qz-*` — motor de quiz de opción múltiple genérico (`rQuiz()`), reutilizado para literal e inferencial.
- `.vcard` / `.vopt` — tarjeta de vocabulario con revelado progresivo.
- `.omodel` — bloque de "respuesta modelo" para preguntas abiertas (crítica y desafío).
- `.ring-wrap` — anillo de progreso SVG animado en el informe final.
- Header sticky (`.g-header`) con badge de materia+número de guía, puntos de progreso (`.g-dot`) y nombre de fase activa.

---

## 4. Encoding y metadatos
Cada archivo de guía debe incluir `<meta charset="UTF-8">` y `<meta name="viewport" ...>` **explícitamente al inicio**, ya que las guías no usan `<html><head>` completos (empiezan directo con `<meta>`/`<title>`/`<style>`, confiando en que el navegador interprete el resto del documento como HTML5 implícito). **Esto ya causó un bug real**: la Guía 2 se creó sin `<meta charset="UTF-8">` y los tildes/eñes se veían corruptos (mojibake) al abrirla como archivo estático; se corrigió agregando el meta tag, y se auditó retroactivamente la Guía 1 (tenía el mismo problema). La guía de Inglés y el `index.html` sí incluyen la estructura `<!DOCTYPE html><html><head>` completa desde el inicio y no tuvieron este problema.

---

## 5. Guía de Inglés (arquitectura distinta — punto de atención)
`ingles/unidad2-countries-cultures.html` fue construida **antes** de definirse el motor de 9 fases y **no comparte arquitectura** con las guías de Lenguaje:
- Es una página larga de scroll único con navegación sticky tipo tabla de contenidos (`nav.toc`), no una máquina de estados de fase-por-fase.
- Usa acordeones (`<details class="acc">`) para contenido expandible en vez de revelado vía JS.
- Tema claro fijo (paleta roja `#e63946` / azul `#457b9d`), **sin soporte de modo oscuro** (no tiene bloque `@media (prefers-color-scheme: dark)` ni tokens `[data-theme]`).
- El quiz final sí es dinámico (pregunta por pregunta, con progreso y animaciones) pero es una implementación aparte, no reutiliza `rQuiz()`.

Esto no es un error, pero si se agregan más guías de Inglés a futuro conviene decidir si se migran al motor común de 9 fases (más consistencia, más fácil de mantener) o si se mantiene el formato largo tipo "apunte" (más adecuado si el contenido de Inglés es más extenso/gramatical que narrativo).

---

## 6. Puntos de mejora identificados (para revisión futura)

| # | Área | Descripción | Impacto |
|---|---|---|---|
| 1 | Duplicación de código | Cada guía repite ~700 líneas de CSS/JS del motor común. Un cambio de diseño (ej. nuevo estilo de botón) debe aplicarse manualmente en cada archivo. | Alto — mantenibilidad |
| 2 | Sin persistencia | El progreso de una guía no se guarda (`localStorage`); si se recarga la página, se pierde todo el avance. | Medio — experiencia de usuario |
| 3 | Adaptación dinámica simulada | El informe final *recomienda* dificultad para la siguiente guía en texto, pero no existe ningún mecanismo real que ajuste el contenido de la guía siguiente según el desempeño (eso lo hace Claude manualmente al crear la próxima guía). | Medio — fidelidad al diseño pedagógico original |
| 4 | Inconsistencia de tema | El landing es de tema oscuro fijo; las guías de Lenguaje soportan claro/oscuro; la guía de Inglés es solo clara. No hay una decisión de producto unificada sobre modo claro/oscuro. | Medio — consistencia de marca |
| 5 | Nomenclatura de variables desalineada | En las guías de Lenguaje, variables como `--purple`, `--purple-dk` contienen en realidad valores rojos (ver §3.4). Confuso para futuras ediciones. | Bajo-medio — legibilidad de código |
| 6 | Arquitectura de Inglés distinta | Ver §5. Si crece el catálogo de Inglés, definir si se migra al motor común. | Medio — a decidir |
| 7 | Sin pruebas automatizadas | No hay tests (ni siquiera manuales documentados) que verifiquen que el cálculo de puntaje, el drag & drop o el quiz funcionen tras un cambio. Todo QA se hizo manualmente en el navegador durante el desarrollo. | Medio — riesgo de regresiones silenciosas |
| 8 | Accesibilidad parcial | Hay `:focus-visible` y buen contraste, pero no se ha verificado con lector de pantalla real, ni hay `aria-live` para anunciar feedback dinámico del quiz (respuesta correcta/incorrecta) a usuarios con lector de pantalla. | Medio — accesibilidad |
| 9 | Sin analítica ni seguimiento real | El "informe final" es informativo pero no se guarda en ningún lado (no hay backend); si el objetivo es hacer seguimiento del progreso de los hermanos a través de varias sesiones, hoy no hay forma de comparar Guía 1 vs Guía 3 automáticamente. | Alto si se quiere seguimiento longitudinal real |
| 10 | Carpeta `assets/` vacía | Se creó al iniciar el repo pero no se usa. Se podría aprovechar para imágenes compartidas, un favicon del sitio, o un futuro CSS/JS común (ver punto 1). | Bajo |

---

## 7. Convenciones actuales a mantener
- Un archivo `.html` autocontenido por guía (sin dependencias externas ni CDNs) — clave para que funcione offline y en GitHub Pages sin build.
- Paleta de color por materia definida como variable CSS, nunca hardcodeada en componentes.
- Todo texto de feedback (correcto/incorrecto) debe explicar *por qué*, citando el texto fuente — nunca un simple "✅/❌".
- Las preguntas abiertas (crítica y desafío) siempre incluyen una respuesta modelo revelable, nunca corrección automática rígida.
- Cada guía nueva debe incluir `<meta charset="UTF-8">` y `<meta name="viewport">` explícitos al inicio del archivo (ver §4).

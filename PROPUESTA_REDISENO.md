# Propuesta de Rediseño — Plataforma de Guías de Estudio

> Informe de auditoría y rediseño estratégico. Fuente de verdad del estado actual: [`DOCUMENTACION_PROYECTO.md`](DOCUMENTACION_PROYECTO.md). Este documento no reemplaza esa documentación — la cuestiona, la extiende y propone una versión 2 de la arquitectura.

**Restricciones respetadas en toda propuesta:** HTML/CSS/JS puro, cero frameworks, cero CDN, cero dependencias externas, 100% funcional offline, compatible con GitHub Pages (solo archivos estáticos con rutas relativas).

**Pregunta que filtra cada decisión de este documento:** *¿esto ayuda realmente a aprender mejor?*

---

## Parte 1 — Auditoría completa

### Landing
Fortalezas: sistema de tokens de color sólido (`color-mix()` por materia), iconografía consistente (estilo Lucide inline), responsive correcto, accesibilidad de foco cuidada.
Debilidades: el hero es genérico y no transmite propósito de examen ni urgencia real de estudio; las materias vacías ("Próximamente") compiten visualmente por atención con las que sí tienen contenido; no existe forma de "continuar donde quedé"; el landing es 100% estático — cada guía nueva exige editar `index.html` a mano, lo que no escala a cientos de guías.

### Arquitectura de guía (motor de 9 fases)
Fortalezas: feedback siempre explicado (nunca solo ✅/✘), quiz con progreso visual, drag & drop con alternativa de clic (buena decisión táctil), informe final con fortalezas/debilidades.
Debilidades — esta es la parte más importante de la auditoría:
- **El flujo actual es más una evaluación que una sesión de enseñanza.** Se pasa de "leer una vez" directo a "responder preguntas de literal e inferencial". No existe una fase real de *enseñanza/modelado* separada de la lectura — se asume que leer una vez basta para aprender, cuando el diseño instruccional recomienda explicar, modelar y luego evaluar.
- **El vocabulario está mal ubicado.** Hoy aparece *después* de las preguntas de comprensión literal, inferencial y crítica. Si el estudiante no conocía una palabra clave, ya fue evaluado sin ese apoyo. El vocabulario debería reforzarse *durante o inmediatamente después* de la lectura, no al final.
- **Poca variedad real de mecánicas.** El 90% de las preguntas son de opción múltiple. Solo existe una actividad de arrastre (organización) y dos preguntas abiertas.
- **El "informe final" es un puntaje, no un perfil de dominio.** Reporta fortalezas/debilidades de *esa* sesión, pero no acumula datos entre guías (no se puede ver cómo evolucionó la comprensión inferencial entre la Guía 1 y la Guía 3).
- **La "adaptación dinámica" es solo un mensaje de texto** ("la próxima guía aumentará la dificultad..."), no un dato estructurado que un sistema (o Claude, generando la próxima guía) pueda leer automáticamente.

### Estándares por asignatura
Solo Lenguaje tiene una estructura probada (3 guías). Inglés usa una arquitectura completamente distinta y más antigua (scroll largo + acordeones, tema claro fijo, sin el motor de 9 fases). Historia, Ciencias y Matemáticas no tienen ninguna estructura definida — son carpetas vacías con una promesa ("Próximamente"). Usar la misma estructura de Lenguaje para Matemáticas sería un error pedagógico grave: Lenguaje evalúa interpretación de texto, Matemáticas requiere resolución paso a paso, andamiaje y manejo del error — mecánicas que hoy no existen en ningún archivo del proyecto.

### Código y mantenibilidad
Cada guía duplica ~700 líneas de CSS/JS del motor. No existe ningún archivo compartido pese a existir una carpeta `assets/` vacía desde el inicio. Esto ya causó un costo real: corregir el color de marca de Lenguaje (morado → rojo) y el bug de encoding (`meta charset`) exigió tocar cada guía por separado.

---

## Parte 2 — Problemas detectados (consolidado)

| # | Categoría | Problema |
|---|---|---|
| P1 | Pedagógico | No existe fase de enseñanza/modelado separada de la lectura |
| P2 | Pedagógico | Vocabulario ubicado después de la evaluación, no antes/durante |
| P3 | Pedagógico | Baja variedad de tipos de actividad (casi todo opción múltiple) |
| P4 | Pedagógico | Sin perfil de dominio por habilidad persistente entre guías |
| P5 | Pedagógico | Adaptación dinámica es texto, no dato estructurado accionable |
| P6 | UX/Landing | Hero no comunica propósito de examen ni urgencia |
| P7 | UX/Landing | Materias vacías compiten visualmente con materias activas |
| P8 | UX/Landing | Sin "continuar donde quedé" (no hay persistencia) |
| P9 | UX/Landing | Landing 100% hardcodeado — no escala a cientos de guías |
| P10 | Arquitectura | Motor completo duplicado en cada archivo de guía |
| P11 | Arquitectura | Theming inconsistente: landing (oscuro fijo), Lenguaje (claro/oscuro), Inglés (claro fijo) |
| P12 | Arquitectura | Deuda de nombres: variables `--purple*` contienen valores rojos en Guía 1 |
| P13 | Arquitectura | Inglés no comparte motor con el resto — sin plan de convergencia |
| P14 | Escalabilidad | Sin manifest/índice de datos de guías |
| P15 | Escalabilidad | Sin convención de nombres de archivo pensada para cientos de guías |
| P16 | Materias | Matemáticas, Ciencias e Historia no tienen ninguna mecánica propia definida |

---

## Parte 3 — Priorización (impacto × esfuerzo)

| Mejora | Impacto | Esfuerzo | Prioridad |
|---|---|---|---|
| Reordenar vocabulario antes de la evaluación | Alto | Bajo | 🔴 Inmediata |
| Agregar fase "objetivo de la sesión" | Medio | Bajo | 🔴 Inmediata |
| Agregar auto-reflexión de cierre | Medio | Bajo | 🔴 Inmediata |
| Extraer motor común (`/shared/engine.css` + `.js`) | Alto | Medio | 🟠 Próxima |
| Persistencia de progreso (localStorage) + "continuar" | Alto | Medio | 🟠 Próxima |
| Informe de dominio por habilidad (visual, no solo %) | Alto | Medio | 🟠 Próxima |
| Estándar completo de Matemáticas (contenido + mecánicas) | Alto | Alto | 🟠 Próxima |
| Gamificación ligera (rachas, insignias de dominio) | Medio | Medio | 🟡 Media |
| Manifest de guías para landing dinámico | Alto | Medio | 🟡 Media |
| Migrar Inglés al motor común | Medio | Alto | 🟢 Futura |
| Sistema de skills profile cross-guía con recomendación real | Alto | Alto | 🟢 Futura |
| Nuevas mecánicas reutilizables (emparejar, detectar error, resolver paso a paso) | Alto | Alto | 🟢 Futura |

---

## Parte 4 — Nueva arquitectura propuesta

**Principio rector:** una guía deja de ser "un archivo monolítico" y pasa a ser **motor común + datos de la guía**. El motor vive una sola vez; cada guía nueva es, en esencia, contenido.

```
guias-estudio/
├── index.html
├── shared/
│   ├── engine.css          # Tokens base + componentes UI reutilizables (header, card, quiz, dnd, report...)
│   ├── engine.js           # Máquina de estados genérica: fases, puntaje, persistencia, render
│   ├── subjects/
│   │   ├── lenguaje.js     # Renderers propios de Lenguaje (ya existentes: dnd secuencia/clasificación/timeline)
│   │   ├── matematicas.js  # Renderers propios: step-solver, escalera de pistas, error frecuente
│   │   ├── ciencias.js     # Renderers propios: hipótesis, interpretación de gráfico
│   │   ├── historia.js     # Renderers propios: análisis de fuente, causa-efecto emparejado
│   │   └── ingles.js       # Renderers propios: flip cards, diálogo/role-play
│   └── guides-manifest.js  # Índice de todas las guías (id, materia, título, dificultad, tiempo, archivo)
├── lenguaje/
│   ├── guia1-mapa-relojero/
│   │   └── data.js         # Solo el contenido: texto, preguntas, vocabulario, actividad
│   └── ... (una carpeta por guía)
├── matematicas/
├── ciencias/
├── historia/
└── ingles/
```

Cada guía es un HTML mínimo:
```html
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../../shared/engine.css">
<title>...</title>
<div id="app"></div>
<script src="../../shared/engine.js"></script>
<script src="../../shared/subjects/lenguaje.js"></script>
<script src="./data.js"></script>
<script>Engine.init(GUIDE_DATA)</script>
```

Esto es HTML/CSS/JS puro, cero build step, cero dependencia externa — sigue funcionando abriendo el archivo directamente o vía GitHub Pages, solo que ahora las rutas son locales relativas en vez de todo estar inline. **Reduce la duplicación de ~700 líneas por guía a 0.**

**Modelo de datos de una guía (`data.js`):**
```js
const GUIDE_DATA = {
  id: 'lenguaje-g3-tesla',
  subject: 'lenguaje',
  title: 'Nikola Tesla, el genio que iluminó el mundo',
  estimatedMinutes: 45,
  examRef: 'Prueba Unidad 3 - Biografías',       // trazabilidad al temario oficial
  blocks: [
    { type:'hook', ... },
    { type:'goal', ... },                        // NUEVO — ver Parte 6
    { type:'teach', text:'...', vocab:[...] },    // vocabulario integrado aquí — ver P2
    { type:'guided-practice', questions:[...] },  // NUEVO — con pistas, ver Parte 6
    { type:'quiz', skillTag:'literal', questions:[...] },
    { type:'quiz', skillTag:'inferencial', questions:[...] },
    { type:'open', skillTag:'critica', ... },
    { type:'dnd-timeline', skillTag:'organizacion', ... },
    { type:'challenge', ... },
    { type:'reflect' },                           // NUEVO — ver Parte 9
    { type:'report' }
  ]
}
```
Cada bloque declara `skillTag` → esto es lo que permite un **perfil de dominio real** (Parte 8 del roadmap) en vez de un puntaje suelto.

**Persistencia (localStorage):**
```
key: "progreso_<subject>_<guideId>"
value: { completado: bool, puntajePorSkill: {literal:0.8, inferencial:0.6,...}, intentos, fecha }
```
El landing lee estas claves para mostrar "Continuar" o una insignia de dominio por guía, sin backend.

**Manifest para landing dinámico:**
`shared/guides-manifest.js` declara un array `[{id, subject, title, file, difficulty, minutes}]`. El landing itera ese array para pintar las tarjetas — agregar una guía nueva ya no exige tocar `index.html`.

---

## Parte 5 — Nuevo estándar por asignatura

### 📖 Lenguaje (evoluciona el estándar actual, no lo reemplaza)
Se mantiene: lectura original, vocabulario en contexto, literal/inferencial/crítica, actividad de organización marca de la casa (secuencia → clasificación → línea de tiempo, ya validado en 3 guías), desafío creativo.
Se corrige: vocabulario se mueve a inmediatamente después de la lectura (antes del quiz). Se agrega actividad nueva: **"detecta el error"** — una afirmación que contradice sutilmente al texto, el estudiante debe identificar y corregir el dato falso (refuerza la vuelta al texto como evidencia).

### 📐 Matemáticas (estándar nuevo, no debe parecerse a Lenguaje)
Objetivo: razonamiento lógico, procedimiento, manejo del error.
- **Enseñanza paso a paso:** un ejercicio resuelto se muestra paso por paso; antes de revelar cada paso, el estudiante predice qué sigue (opción múltiple corta). Esto es modelado activo, no lectura pasiva.
- **Escalera de pistas:** cada ejercicio de práctica ofrece 3 niveles de ayuda opcionales (pista conceptual → pista de método → paso resuelto), cada una pedida reduce el puntaje posible de forma transparente — enseña autorregulación, no solo la respuesta.
- **Error frecuente:** se muestra un ejercicio ya "resuelto" con un error típico (ej. signo mal aplicado); el estudiante debe encontrarlo y explicar por qué está mal — desarrolla metacognición matemática.
- **Ejercicios progresivos con mini-adaptación real:** 3 niveles de dificultad ascendente del mismo tipo de problema; si el estudiante acierta ≥2/3 en el nivel actual avanza, si no, recibe un ejercicio guiado adicional del mismo nivel antes de continuar. Esta es adaptación *real dentro de la sesión*, no solo un mensaje para la próxima guía.
- **Desafío final** sin pistas, que integra todo lo practicado.
- Reemplaza "vocabulario" por **glosario de símbolos/fórmulas** con el mismo mecanismo deducir-antes-de-revelar.
- El drag & drop no clasifica ideas: ordena los **pasos de un procedimiento** (ej. orden correcto para resolver una ecuación).

### 🔬 Ciencias (estándar nuevo — se siente como investigación)
Objetivo: comprender fenómenos, formular hipótesis, interpretar información.
Secuencia propia: **Observación** (fenómeno o dato presentado) → **Formular hipótesis** (elegir entre opciones plausibles o escribir la propia) → Lectura informativa → **Contrastar con la hipótesis** ("¿tu hipótesis era correcta? ¿por qué?") → preguntas de causa-efecto → clasificación de datos experimentales (reutiliza el mecanismo de D&D ya construido, reencuadrado) → **Diseña un experimento simple** como desafío final. Incluye interpretación de un gráfico o esquema simple (SVG inline) como actividad de "leer información visual", habilidad propia de Ciencias que hoy no existe en el proyecto.

### 🏛️ Historia (estándar nuevo)
Objetivo: procesos históricos, causa-efecto, análisis de fuentes, líneas de tiempo, contexto.
Se mantiene la línea de tiempo (ya validada en la Guía 3 de Lenguaje, pero es una mecánica naturalmente más "de Historia" — a futuro Historia hereda ese componente). Se agrega: **fase de contexto** antes de la lectura (breve ubicación temporal/espacial), **análisis de fuente** (fragmento de fuente primaria ficticia pero verosímil: ¿qué tipo de fuente es? ¿qué perspectiva representa? ¿qué tan confiable es?), y **emparejar causa-efecto** como actividad propia (mecánica nueva "relacionar pares", distinta del D&D de secuencia).

### 🇬🇧 Inglés (estándar nuevo, distinto al resto por diseño)
Objetivo: vocabulario, comprensión, gramática, uso práctico.
Mecánicas propias: **flip cards** de vocabulario (volteo en vez de opción-múltiple-y-revelar, variedad sensorial y de interacción), **fill-in-the-blank** interactivo sobre gramática, **diálogo/role-play** (elegir la respuesta pragmáticamente apropiada en una conversación simulada, no solo gramaticalmente correcta). Migra eventualmente al motor común (`shared/subjects/ingles.js`) conservando estas mecánicas como módulo propio.

---

## Parte 6 — Nueva estructura de una guía de 45 minutos

Se reemplaza el modelo actual (9 fases lineales orientadas a evaluación) por un modelo de **8 momentos con función cognitiva explícita**:

| # | Momento | Tiempo | Objetivo | Carga cognitiva | Concentración esperada |
|---|---|---|---|---|---|
| 1 | Enganche (hook) | 3 min | Activar conocimientos previos, generar curiosidad | Baja | Media (arranque) |
| 2 | Objetivo de la sesión *(nuevo)* | 1 min | Transparencia metacognitiva: "hoy vas a aprender a..." | Muy baja | Media |
| 3 | Enseñanza / lectura modelada | 9 min | Contenido central + vocabulario integrado en línea | Media-alta | Alta (pico de atención) |
| 4 | Práctica guiada *(nuevo, con apoyo/pistas)* | 8 min | Primeros ejercicios con feedback rico y ayuda disponible | Media | Alta |
| 5 | Práctica independiente / evaluación | 8 min | Preguntas sin apoyo (literal + inferencial + propias de la materia) | Alta | Alta (mide dominio real) |
| 6 | Consolidación (actividad marca de la materia) | 6 min | Reestructurar la información (D&D, emparejar, clasificar) | Media | Media (baja controlada tras el pico) |
| 7 | Transferencia / pensamiento crítico | 6 min | Opinión, aplicación o creación personal | Alta pero motivacional | Media-alta |
| 8 | Cierre: reflexión + informe de dominio | 4 min | Auto-reflexión + mapa de fortalezas/debilidades, no solo puntaje | Baja | Baja (cierre "peak-end" positivo) |

**Total: 45 min.** Cambios clave respecto al modelo actual: se separa "enseñanza" de "evaluación" (antes estaban fusionadas), el vocabulario se integra en el momento 3 en vez de aparecer tarde, se agrega un momento de "práctica guiada con apoyo" antes de la evaluación real (andamiaje), y el cierre ahora incluye auto-reflexión, no solo el reporte de puntaje.

---

## Parte 7 — Nuevos componentes reutilizables (`shared/engine.js` + `engine.css`)

| Componente | Función | Ya existe (reutilizar) | Nuevo |
|---|---|---|---|
| `Engine.Header` | Progreso de fases + badge de materia | ✅ (extraer tal cual) | |
| `Engine.Card` | Contenedor con animación de entrada | ✅ | |
| `Engine.MultipleChoice` | Motor de quiz genérico | ✅ (`rQuiz()`) | |
| `Engine.OpenResponse` | Pregunta abierta + respuesta modelo + autoevaluación | ✅ | |
| `Engine.DragSequence` | Ordenar elementos (secuencia/línea de tiempo) | ✅ | |
| `Engine.DragClassify` | Clasificar en columnas | ✅ | |
| `Engine.MatchPairs` | Emparejar tarjetas (causa-efecto, término-definición) | | 🆕 |
| `Engine.FillBlank` | Completar espacios en un texto | | 🆕 |
| `Engine.ErrorSpot` | Detectar y explicar un error en un ejemplo dado | | 🆕 |
| `Engine.StepSolver` | Resolución paso a paso con predicción | | 🆕 (Matemáticas) |
| `Engine.HintLadder` | Escalera de pistas con costo transparente | | 🆕 (Matemáticas, reutilizable) |
| `Engine.FlipCard` | Tarjeta de vocabulario con volteo | | 🆕 (Inglés, reutilizable) |
| `Engine.ProgressBar` | Barra de progreso de pregunta/actividad | ✅ | |
| `Engine.SkillReport` | Reporte visual de dominio por habilidad (barras, no solo %) | parcial | 🆕 mejora |
| `Engine.Streak` / `Engine.Badge` | Gamificación ligera | | 🆕 |
| `Engine.Timer` | Cronómetro suave, no punitivo (solo referencia de tiempo) | | 🆕 opcional |
| `Engine.Footer` | Pie de guía consistente | | 🆕 |

Cada componente se documenta con: forma de los datos que recibe, materias que lo usan, y ejemplo mínimo — esto va en un futuro `shared/COMPONENTES.md` cuando se implemente.

---

## Parte 8 — Mejoras visuales

**Landing:**
- Hero reformulado para comunicar propósito de estudio real (ej. mostrar la próxima prueba/temario asociado si se conoce, no solo "guías dinámicas").
- Materias vacías se agrupan visualmente aparte (ej. sección "Próximamente" separada y más discreta) para no competir con las materias activas.
- Cada enlace de guía en el landing muestra chip de tiempo estimado + dificultad, y si hay progreso guardado, un indicador de dominio o "Continuar".
- Tipografía: formalizar una escala tipográfica como tokens (`--fs-xs` a `--fs-2xl`) en vez de valores sueltos repetidos.

**Guías:**
- Reemplazar los "score pills" planos del informe por una mini barra horizontal por habilidad (visual, no solo numérico) — esto es también mejora pedagógica (Parte 9).
- Micro-interacciones sutiles: escala al presionar un botón, transición de color en respuestas, sin caer en infantilismo (nada de confeti ni mascotas — apropiado para 13 años).
- Header de guía muestra tiempo estimado restante de forma suave (no cronómetro ansioso).

---

## Parte 9 — Mejoras pedagógicas

1. **Enseñanza explícita antes de práctica** (worked examples), especialmente crítico en Matemáticas, donde hoy no existe ninguna guía.
2. **Vocabulario integrado en el momento de la lectura**, no relegado al final — se evalúa comprensión ya con el apoyo dado, no a pesar de su ausencia.
3. **Pistas graduales con costo transparente**, generalizable más allá de Matemáticas como mecanismo de "ayuda opcional" en cualquier materia.
4. **Perfil de dominio por habilidad persistente** (no solo puntaje de la sesión) — permite ver evolución real entre guías de la misma materia.
5. **Auto-reflexión de cierre** ("¿qué fue lo más difícil hoy? ¿qué harás distinto la próxima vez?") — bajo costo de implementación, alto valor en aprendizaje autorregulado.
6. **Adaptación dentro de la misma sesión** (no solo de una guía a la siguiente): ejercicios progresivos que se ajustan según el desempeño en tiempo real (ver Matemáticas, Parte 5).
7. **Repetición espaciada ligera**: el informe puede sugerir "repasa esta palabra en 2 días" usando `localStorage` + fecha, sin necesidad de backend.

---

## Parte 10 — Roadmap de implementación

### 🔴 Mejoras rápidas (bajo esfuerzo, impacto alto/medio)
- Reordenar el bloque de vocabulario para que aparezca inmediatamente después de la lectura, antes del quiz (aplica a Guías 1–3 existentes).
- Agregar un bloque breve de "objetivo de la sesión" al inicio de cada guía.
- Agregar una pregunta de auto-reflexión de cierre antes del informe final.
- Corregir la deuda de nombres `--purple*` en la Guía 1 (cosmético, bajo riesgo).
- Documentar convención de nombres de archivo/carpeta pensada para escalar (aunque aún no haya cientos de guías).

### 🟠 Mejoras medias (esfuerzo medio, impacto alto)
- Extraer el motor común a `shared/engine.css` + `shared/engine.js` y migrar las Guías 1–3 de Lenguaje a consumirlo (elimina la duplicación de ~700 líneas × 3).
- Implementar persistencia con `localStorage`: progreso por guía + "Continuar donde quedé" en el landing.
- Rediseñar el informe final como perfil de dominio por habilidad (barras visuales), no solo puntaje total.
- Construir el primer estándar completo de Matemáticas (contenido + mecánicas nuevas: step-solver, escalera de pistas, error frecuente) con una guía piloto.
- Gamificación ligera: racha de guías completadas + insignia de dominio ≥85% por habilidad.
- Manifest de guías (`guides-manifest.js`) para que el landing deje de estar hardcodeado.

### 🟢 Mejoras grandes (esfuerzo alto, impacto transformador)
- Migrar Inglés al motor común preservando sus mecánicas propias (flip cards, role-play) como módulo de materia.
- Sistema de "skills profile" cross-guía con recomendación real y estructurada (no solo texto) para la siguiente guía a generar.
- Construir las mecánicas nuevas reutilizables (`MatchPairs`, `ErrorSpot`, `StepSolver`, `HintLadder`, `FlipCard`) como componentes genéricos del motor, disponibles para cualquier materia futura.
- Preparar la plataforma para escalar de unas pocas guías a cientos: convención de carpetas por materia + manifest + posible generador de landing 100% automático a partir del manifest, sin perder consistencia visual ni pedagógica.

---

## Filosofía que guía esta propuesta

El proyecto no busca reemplazar al profesor: busca ser el mejor compañero de estudio posible para un estudiante de 13 años. Cada guía debe lograr que el estudiante comprenda, practique, se equivoque, reciba retroalimentación real, vuelva a intentarlo, y termine con más dominio del que tenía al empezar. Cada decisión de este documento — visual, técnica o de contenido — se justifica desde esa premisa, no desde la estética ni la conveniencia de programación.

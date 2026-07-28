/* ══════════════════════════════════════════════════════════
   GUIDES-MANIFEST.JS — Índice central de guías disponibles
   Ver PROPUESTA_REDISENO.md (Parte 4). El landing (index.html)
   lee este archivo para renderizar las tarjetas de materia sin
   necesidad de editar el HTML cada vez que se agrega una guía.

   Agregar una guía nueva = agregar una entrada aquí + crear su
   carpeta con index.html + data.js (o su propio archivo, como
   en el caso de Inglés, que aún no usa el motor común).

   Campo `track`:
   - 'unidad'   → guía alineada a una unidad oficial del Programa
                  de Estudio MINEDUC vigente (ver Programas_de_estudio/).
   - 'refuerzo' → guía de refuerzo transversal, no atada a una unidad
                  oficial específica (ej. las 3 guías iniciales de
                  Lenguaje, creadas antes de tener los programas
                  oficiales en mano — se mantienen como material
                  adicional de comprensión lectora).
   ══════════════════════════════════════════════════════════ */

const GUIDES_MANIFEST = [
  {
    id: 'lenguaje-g1-mapa-relojero',
    subject: 'lenguaje',
    title: 'El mapa del relojero',
    genre: 'Narrativo',
    track: 'refuerzo',
    file: 'lenguaje/guia1-mapa-relojero/index.html',
    minutes: 45
  },
  {
    id: 'lenguaje-g2-pulpo-inteligencia',
    subject: 'lenguaje',
    title: 'El pulpo, el genio de los ocho brazos',
    genre: 'Científico',
    track: 'refuerzo',
    file: 'lenguaje/guia2-pulpo-inteligencia/index.html',
    minutes: 45
  },
  {
    id: 'lenguaje-g3-tesla-visionario',
    subject: 'lenguaje',
    title: 'Nikola Tesla, el genio que iluminó el mundo',
    genre: 'Biográfico',
    track: 'refuerzo',
    file: 'lenguaje/guia3-tesla-visionario/index.html',
    minutes: 45
  },
  {
    id: 'ingles-unidad2-countries',
    subject: 'ingles',
    title: 'Unidad 2: Countries, Cultures and Customs',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 2 · 2° semestre',
    file: 'ingles/unidad2-countries-cultures/index.html',
    minutes: 45
  },
  {
    id: 'historia-g1-ilustracion',
    subject: 'historia',
    title: 'La Ilustración: la razón contra el Antiguo Régimen',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (1/4) · 2° semestre',
    file: 'historia/guia1-ilustracion-antiguo-regimen/index.html',
    minutes: 45
  },
  {
    id: 'historia-g2-revoluciones',
    subject: 'historia',
    title: 'De las ideas a la acción: revoluciones de EE.UU. y Francia',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (2/4) · 2° semestre',
    file: 'historia/guia2-revoluciones-eeuu-francia/index.html',
    minutes: 45
  },
  {
    id: 'historia-g3-declaracion-derechos',
    subject: 'historia',
    title: 'La Declaración de los Derechos del Hombre y su vigencia hoy',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (3/4) · 2° semestre',
    file: 'historia/guia3-declaracion-derechos/index.html',
    minutes: 45
  },
  {
    id: 'historia-g4-independencia-america',
    subject: 'historia',
    title: 'La independencia de América: un proceso continental',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (4/4) · 2° semestre',
    file: 'historia/guia4-independencia-america/index.html',
    minutes: 45
  },
  {
    id: 'ciencias-g1-cargas-electricas',
    subject: 'ciencias',
    title: 'Cargas eléctricas y electrostática',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (1/4) · 2° semestre',
    file: 'ciencias/guia1-cargas-electricas/index.html',
    minutes: 45
  },
  {
    id: 'ciencias-g2-generacion-electrica',
    subject: 'ciencias',
    title: '¿Cómo generamos electricidad?',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (2/4) · 2° semestre',
    file: 'ciencias/guia2-generacion-electrica/index.html',
    minutes: 45
  },
  {
    id: 'ciencias-g3-circuitos-serie-paralelo',
    subject: 'ciencias',
    title: 'Circuitos en serie y en paralelo',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (3/4) · 2° semestre',
    file: 'ciencias/guia3-circuitos-serie-paralelo/index.html',
    minutes: 45
  },
  {
    id: 'ciencias-g4-calor-temperatura',
    subject: 'ciencias',
    title: 'Calor y temperatura',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (4/4) · 2° semestre',
    file: 'ciencias/guia4-calor-temperatura/index.html',
    minutes: 45
  },
  {
    id: 'matematicas-g1-area-volumen-prismas-cilindros',
    subject: 'matematicas',
    title: 'Área de superficie y volumen de prismas y cilindros',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (1/4) · 2° semestre',
    file: 'matematicas/guia1-area-volumen-prismas-cilindros/index.html',
    minutes: 45
  },
  {
    id: 'matematicas-g2-teorema-pitagoras',
    subject: 'matematicas',
    title: 'El teorema de Pitágoras',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (2/4) · 2° semestre',
    file: 'matematicas/guia2-teorema-pitagoras/index.html',
    minutes: 45
  },
  {
    id: 'matematicas-g3-traslaciones-rotaciones-reflexiones',
    subject: 'matematicas',
    title: 'Traslaciones, rotaciones y reflexiones',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (3/4) · 2° semestre',
    file: 'matematicas/guia3-traslaciones-rotaciones-reflexiones/index.html',
    minutes: 45
  },
  {
    id: 'matematicas-g4-componiendo-transformaciones',
    subject: 'matematicas',
    title: 'Componiendo transformaciones: simetría de polígonos',
    genre: null,
    track: 'unidad',
    unit: 'Unidad 3 (4/4) · 2° semestre',
    file: 'matematicas/guia4-componiendo-transformaciones/index.html',
    minutes: 45
  },
  {
    id: 'matematicas-repaso1-operatoria-algebraica',
    subject: 'matematicas',
    title: 'Operatoria de expresiones algebraicas',
    genre: null,
    track: 'unidad',
    unit: 'Repaso · Unidad 2 · Prueba de álgebra',
    file: 'matematicas/repaso1-operatoria-algebraica/index.html',
    minutes: 60
  },
  {
    id: 'matematicas-repaso2-factorizacion-algebraica',
    subject: 'matematicas',
    title: 'Factorización de expresiones algebraicas',
    genre: null,
    track: 'unidad',
    unit: 'Repaso · Unidad 2 · Prueba de álgebra',
    file: 'matematicas/repaso2-factorizacion-algebraica/index.html',
    minutes: 60
  }
];

/* ══════════════════════════════════════════════════════════
   GUIDES-MANIFEST.JS — Índice central de guías disponibles
   Ver PROPUESTA_REDISENO.md (Parte 4). El landing (index.html)
   lee este archivo para renderizar las tarjetas de materia sin
   necesidad de editar el HTML cada vez que se agrega una guía.

   Agregar una guía nueva = agregar una entrada aquí + crear su
   carpeta con index.html + data.js (o su propio archivo, como
   en el caso de Inglés, que aún no usa el motor común).
   ══════════════════════════════════════════════════════════ */

const GUIDES_MANIFEST = [
  {
    id: 'lenguaje-g1-mapa-relojero',
    subject: 'lenguaje',
    title: 'El mapa del relojero',
    genre: 'Narrativo',
    file: 'lenguaje/guia1-mapa-relojero/index.html',
    minutes: 45
  },
  {
    id: 'lenguaje-g2-pulpo-inteligencia',
    subject: 'lenguaje',
    title: 'El pulpo, el genio de los ocho brazos',
    genre: 'Científico',
    file: 'lenguaje/guia2-pulpo-inteligencia/index.html',
    minutes: 45
  },
  {
    id: 'lenguaje-g3-tesla-visionario',
    subject: 'lenguaje',
    title: 'Nikola Tesla, el genio que iluminó el mundo',
    genre: 'Biográfico',
    file: 'lenguaje/guia3-tesla-visionario/index.html',
    minutes: 45
  },
  {
    id: 'ingles-unidad2-countries',
    subject: 'ingles',
    title: 'Unidad 2: Countries, Cultures and Customs',
    genre: null,
    file: 'ingles/unidad2-countries-cultures.html',
    minutes: 45
  }
];

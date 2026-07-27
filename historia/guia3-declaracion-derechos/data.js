const GUIDE_DATA = {
  id: 'historia-g3-declaracion-derechos',
  subject: 'historia',
  subjectLabel: 'Historia',
  subjectIcon: '🏛️',
  title: 'La Declaración de los Derechos del Hombre y su vigencia hoy',
  examRef: 'Unidad 3 · OA18 · 2° semestre',
  nextGuideHint: 'Próxima guía: La independencia de América como un proceso continental, con línea de tiempo y relaciones de causa-efecto.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'⚖️ Si tuvieras que escribir hoy una lista de derechos que TODAS las personas deberían tener, sin excepción, ¿qué incluirías?',
      subPrompt:'Piensa en 2 o 3 derechos y guárdalos en mente: vas a compararlos con lo que se escribió hace más de 200 años.',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        En 1789, en medio de la Revolución Francesa, se escribió uno de los documentos más influyentes de la historia: la Declaración de los Derechos del Hombre y del Ciudadano. Sonaba universal... pero, como vas a descubrir, no incluía a todos por igual.<br><br>
        <em>💡 Tip lector:</em> Cuando leas un documento histórico que declara derechos "para todos", pregúntate siempre: <strong>¿a quién realmente incluye ese "todos"? ¿A quién podría estar dejando fuera?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a explicar el concepto de <strong>Derechos del Hombre y del Ciudadano</strong> difundido por la Ilustración y la Revolución Francesa, y a reconocer su <strong>vigencia actual</strong> en los derechos humanos.'
    },
    {
      type:'teach',
      minutes:7,
      title:'La Declaración de los Derechos del Hombre y su legado',
      genre:'Histórico · Conceptual',
      wordCount:'~300 palabras',
      html:`
        <h3>La Declaración de los Derechos del Hombre y su legado</h3>
        <p>En agosto de 1789, poco después de la toma de la Bastilla, la Asamblea Nacional francesa aprobó uno de los documentos más influyentes de la historia moderna: la Declaración de los Derechos del Hombre y del Ciudadano. En sus 17 artículos, el documento proclamaba que todos los seres humanos nacen libres e iguales en derechos, y reconocía garantías como la libertad, la propiedad, la seguridad y la resistencia a la <span class="vhl" title="Situación de abuso de poder o control injusto ejercido sobre alguien">opresión</span>. También establecía que la ley debía ser igual para todos, y que ningún ciudadano podía ser detenido de forma <span class="vhl" title="Que se hace sin seguir una ley o razón justa">arbitraria</span>.</p>
        <p>Sin embargo, a pesar de hablar de derechos "universales", la declaración tenía un límite importante: en la práctica, sus derechos se aplicaban solo a los hombres. Las mujeres no podían votar, ocupar cargos públicos ni participar plenamente en la vida política. En 1791, la escritora y activista Olympe de Gouges respondió a esta exclusión redactando la Declaración de los Derechos de la Mujer y de la Ciudadana, un documento que calcaba la estructura del original pero extendía explícitamente cada derecho a las mujeres. Gouges pagó un precio muy alto por su activismo: fue ejecutada en 1793, durante uno de los periodos más radicales de la revolución.</p>
        <p>Con el paso del tiempo, muchos de los principios planteados en 1789 —libertad, igualdad, seguridad— se convirtieron en la base de un documento aún más amplio: la Declaración <span class="vhl" title="Que aplica o pertenece a todas las personas, sin excepción">Universal</span> de los Derechos Humanos, aprobada por las Naciones Unidas en 1948, tras la Segunda Guerra Mundial. A diferencia del documento francés, esta declaración reconoce explícitamente que los derechos pertenecen a "todos los seres humanos", sin distinción de sexo, raza, religión u opinión política.</p>
        <p>La historia de estos documentos muestra algo importante: declarar un derecho en un papel no garantiza automáticamente que se cumpla en la práctica. Cada generación ha tenido que luchar para que esos derechos "universales" realmente incluyan a todas las personas.</p>`,
      vocab:[
        { word:'opresión', ctx:'"...la resistencia a la opresión."',
          opts:['Situación de abuso de poder o control injusto ejercido sobre alguien','Un tipo de impuesto muy alto','Una celebración religiosa','Un cargo político electo'], c:0,
          def:'Situación en la que se ejerce un abuso de poder o control injusto sobre una persona o grupo.', syn:'abuso, sometimiento, tiranía', ant:'libertad, justicia',
          ex:'El pueblo se levantó contra la opresión del gobierno que les impedía expresarse libremente.' },
        { word:'arbitraria', ctx:'"ningún ciudadano podía ser detenido de forma arbitraria."',
          opts:['Que sigue estrictamente la ley escrita','Que se hace sin seguir una ley o razón justa, según el capricho de quien decide','Que ocurre una sola vez en la historia','Que beneficia a toda la sociedad por igual'], c:1,
          def:'Que se hace o decide sin seguir una ley, regla o razón justa, según el capricho de quien tiene el poder.', syn:'injusta, caprichosa, sin fundamento', ant:'justificada, legal, fundamentada',
          ex:'La detención fue arbitraria porque no existía ninguna prueba ni orden judicial que la respaldara.' },
        { word:'universal', ctx:'"la Declaración Universal de los Derechos Humanos."',
          opts:['Que solo aplica a un país en particular','Que solo pertenece a quienes tienen un cargo público','Que aplica o pertenece a todas las personas, sin excepción','Que cambia según la época histórica'], c:2,
          def:'Que aplica, pertenece o incluye a todas las personas o cosas, sin excepción.', syn:'general, para todos, sin exclusiones', ant:'particular, limitado, exclusivo',
          ex:'El acceso al agua potable debería considerarse un derecho universal, sin importar el país donde se viva.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:7,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿En qué año se aprobó la Declaración de los Derechos del Hombre y del Ciudadano?',
          opts:['1776','1793','1948','1789'], c:3,
          hint:'Aparece en la primera línea del texto, justo después de mencionar la toma de la Bastilla.',
          fb_ok:'✅ Correcto. El texto dice: "En agosto de 1789... la Asamblea Nacional francesa aprobó... la Declaración de los Derechos del Hombre y del Ciudadano."',
          fb_no:'❌ No es esa. El texto dice: "En agosto de 1789... la Asamblea Nacional francesa aprobó" el documento. La respuesta correcta era la opción D.' },
        { q:'Según el texto, ¿qué grupo quedó excluido en la práctica de los derechos declarados en 1789?',
          opts:['Las mujeres','Los comerciantes','Los científicos','Los soldados'], c:0,
          hint:'Aparece en el segundo párrafo, justo después de mencionar la palabra "universales".',
          fb_ok:'✅ Exacto. El texto dice: "en la práctica, sus derechos se aplicaban solo a los hombres. Las mujeres no podían votar, ocupar cargos públicos..."',
          fb_no:'❌ Revisa el segundo párrafo: "las mujeres no podían votar, ocupar cargos públicos ni participar plenamente en la vida política." La correcta era la opción A.' },
        { q:'¿En qué año fue aprobada la Declaración Universal de los Derechos Humanos por la ONU?',
          opts:['1789','1948','1791','1793'], c:1,
          hint:'Aparece en el tercer párrafo, al mencionar a las Naciones Unidas.',
          fb_ok:'✅ Bien leído. El texto dice: "la Declaración Universal de los Derechos Humanos, aprobada por las Naciones Unidas en 1948."',
          fb_no:'❌ El texto lo indica claramente: "aprobada por las Naciones Unidas en 1948." La respuesta correcta era la opción B.' }
      ]
    },
    {
      type:'quiz',
      minutes:7,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué crees que Olympe de Gouges decidió calcar la estructura del documento original en su propia declaración?',
          opts:['Porque no se le ocurrió otra forma de escribir un documento','Porque quería copiar el estilo literario del texto original','Porque al usar la misma estructura, evidenciaba de forma directa que las mujeres estaban siendo excluidas de esos mismos derechos','Porque el gobierno se lo exigió por ley'], c:2,
          fb_ok:'✅ Excelente razonamiento. Al escribir artículo por artículo casi lo mismo pero para las mujeres, Gouges hacía imposible ignorar que la exclusión no era casualidad, sino una decisión.',
          fb_no:'❌ Piensa en el efecto de comparar dos textos casi idénticos: al calcar la estructura, Gouges mostraba de forma directa que las mujeres habían sido excluidas de los mismos derechos. La respuesta correcta era la C.' },
        { q:'¿Qué relación existe entre la Declaración de 1789 y la Declaración Universal de 1948?',
          opts:['No existe ninguna relación entre ambos documentos','La declaración de 1948 rechaza por completo los principios de 1789','La declaración de 1789 ya incluía a todas las personas sin excepción','La declaración de 1948 amplía y universaliza principios ya presentes en 1789, corrigiendo sus exclusiones'], c:3,
          fb_ok:'✅ Muy bien. La Declaración de 1948 retoma libertad, igualdad y seguridad de 1789, pero corrige su gran falla: ahora se aplican explícitamente a "todos los seres humanos", sin distinción de sexo.',
          fb_no:'❌ La declaración de 1948 no rechaza los principios de 1789: los retoma y los amplía, corrigiendo la exclusión de las mujeres y otros grupos. La respuesta correcta era la D.' },
        { q:'¿Qué nos enseña la historia de Olympe de Gouges sobre la lucha por los derechos?',
          opts:['Que declarar un derecho no garantiza que se cumpla, y ha sido necesario luchar para expandirlo a todas las personas','Que los derechos siempre se cumplen apenas se escriben en un papel','Que Gouges se equivocó al pedir derechos para las mujeres','Que ningún cambio social es posible a través de la escritura'], c:0,
          fb_ok:'✅ Correcto. El texto concluye exactamente esta idea: "declarar un derecho en un papel no garantiza automáticamente que se cumpla en la práctica." Gouges tuvo que luchar activamente, incluso a costa de su vida.',
          fb_no:'❌ El texto lo dice explícitamente: "declarar un derecho en un papel no garantiza automáticamente que se cumpla en la práctica." La respuesta correcta era la A.' }
      ]
    },
    {
      type:'source-compare',
      minutes:10,
      skillTag:'analisis-fuentes',
      label:'Análisis de fuentes',
      title:'Dos declaraciones, dos realidades',
      instructions:'Lee ambos fragmentos con atención. Son casi idénticos en estructura, pero fueron escritos con dos años de diferencia y por autores muy distintos.',
      sourceA:{ type:'Fuente primaria', author:'Asamblea Nacional Francesa', year:'1789',
        label:'Declaración de los Derechos del Hombre y del Ciudadano — Artículo 1',
        citation:'Los hombres nacen y permanecen libres e iguales en derechos. Las distinciones sociales solo pueden fundarse en la utilidad común.' },
      sourceB:{ type:'Fuente primaria', author:'Olympe de Gouges', year:'1791',
        label:'Declaración de los Derechos de la Mujer y de la Ciudadana — Artículo 1',
        citation:'La mujer nace libre y permanece igual al hombre en derechos. Las distinciones sociales solo pueden fundarse en la utilidad común.' },
      questions:[
        { q:'¿Qué diferencia principal hay entre el Artículo 1 de la Declaración de 1789 y el de Olympe de Gouges?',
          opts:['No hay ninguna diferencia real entre ambos textos','El de Gouges extiende explícitamente el mismo derecho a las mujeres, mientras el original habla solo de "los hombres"','El de Gouges elimina por completo el derecho a la igualdad','El original de 1789 ya incluía a las mujeres de forma expresa'], c:1,
          fb_ok:'✅ Correcto. Gouges usa exactamente la misma estructura y el mismo derecho, pero cambia el sujeto de "los hombres" a "la mujer", visibilizando la exclusión original.',
          fb_no:'❌ La diferencia clave es que Gouges extiende explícitamente el mismo derecho a las mujeres, usando la misma estructura que el original para hacer evidente la exclusión. La respuesta correcta era la B.' }
      ],
      openQuestion:{
        question:'¿Por qué crees que Olympe de Gouges consideró necesario escribir una segunda declaración casi idéntica, pero dirigida a las mujeres?',
        placeholder:'Escribe tu respuesta aquí...',
        modelAnswer:'Porque, aunque la Declaración de 1789 hablaba de derechos "universales", en la práctica solo se aplicaban a los hombres. Gouges quiso demostrar, con un documento paralelo, que las mujeres merecían exactamente los mismos derechos, y que su exclusión no era un descuido, sino una decisión que debía corregirse.'
      }
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'¿Crees que basta con declarar un derecho por escrito para que se cumpla en la práctica? Justifica tu respuesta con un ejemplo de la guía.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que no basta porque...' o 'En parte, porque...'",
      modelAnswer:`No hay una sola respuesta correcta, pero una buena respuesta usa <strong>un ejemplo concreto de la guía</strong>.<br><br>
        <em>"Creo que no basta con declararlo por escrito, porque la Declaración de 1789 decía que los derechos eran para 'todos' pero, en la práctica, las mujeres quedaron excluidas durante décadas. Hizo falta que personas como Olympe de Gouges lucharan activamente para que ese derecho se ampliara de verdad."</em><br><br>
        ⚠️ Una respuesta como <em>"No, porque no"</em> no tiene suficiente fundamento — siempre usa un dato concreto de la guía.`
    },
    {
      type:'challenge',
      minutes:4,
      title:'¡Ahora tú redactas un nuevo artículo!',
      intro:'Este ejercicio te invita a pensar qué derechos, importantes hoy, no existían (ni se imaginaban) en 1789.',
      prompt:'✍️ Escribe un artículo breve (2-3 líneas) para una declaración de derechos actualizada, sobre un derecho que no existía en 1789 — por ejemplo, acceso a internet, un medio ambiente sano, o la protección de datos personales. Usa un estilo formal, parecido al de los artículos que leíste.',
      hint:'Recuerda el estilo de los artículos originales: "Toda persona tiene derecho a..."',
      placeholder:'Artículo: Toda persona tiene derecho a...',
      example:`<em>"Artículo: Toda persona tiene derecho a acceder a información veraz a través de internet, sin que ningún gobierno o empresa pueda impedirlo arbitrariamente ni vigilar sus comunicaciones sin justificación legal."</em><br><br>
        ¿Notaste cómo este artículo sigue el mismo estilo formal, pero aborda un problema que no existía en el siglo XVIII? Eso es pensar históricamente hacia el presente.`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te sorprendió de la historia de Olympe de Gouges?',
        '¿Qué derecho crees que todavía falta por reconocerse plenamente hoy en día?'
      ]
    },
    { type:'report' }
  ]
};

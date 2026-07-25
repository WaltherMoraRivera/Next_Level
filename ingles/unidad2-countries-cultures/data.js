const GUIDE_DATA = {
  id: 'ingles-unidad2-countries',
  subject: 'ingles',
  subjectLabel: 'Inglés',
  subjectIcon: '🌐',
  title: 'Countries, Cultures and Customs',
  examRef: 'Unidad 2 · 8° Básico',
  nextGuideHint: 'Sigue practicando: repasa las tarjetas de expresiones y de pronunciación /w/ antes de la próxima guía.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🌍 Si tuvieras que describir tu país a alguien de otro continente, ¿qué comparaciones harías? ("Es más grande que...", "Es el más...")',
      subPrompt:'Piensa en 2 o 3 comparaciones antes de continuar.',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Comparar, enumerar y preguntar por el tiempo son herramientas del lenguaje que usamos todos los días, en cualquier idioma. En esta guía vas a aprender a hacer exactamente eso en inglés, usando países y culturas como excusa.<br><br>
        <em>💡 Tip:</em> No necesitas memorizar reglas de memoria pura — fíjate en el <strong>patrón</strong> de cada ejemplo. El patrón es lo que se repite.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a practicar cómo <strong>expresar cantidades</strong>, <strong>ordenar elementos</strong>, <strong>comparar cosas</strong>, <strong>preguntar por el tiempo</strong> y <strong>conectar ideas</strong> en inglés — todo aplicado a describir países y culturas.'
    },
    {
      type:'teach',
      minutes:3,
      title:'📊 Expresar cantidades: plenty of',
      genre:'Gramática',
      html:`
        <p>Cuando queremos decir que hay <strong>mucho/a(s)</strong> de algo, usamos <strong>plenty of</strong>. Funciona tanto para cosas contables como incontables.</p>
        <p><strong>Estructura:</strong> <em>There is / There are + plenty of + sustantivo</em></p>
        <p>💡 <strong>Analogía:</strong> Imagina que sobraron empanadas para el 18 y alcanzan para todos: <em>"There is plenty of food!"</em></p>
        <p>➜ <em>There is plenty of water in the bottle.</em> — Hay bastante agua en la botella.<br>
        ➜ <em>There are plenty of students in the classroom.</em> — Hay muchos estudiantes en la sala.<br>
        ➜ <em>Don't worry, we have plenty of time!</em> — ¡No te preocupes, tenemos bastante tiempo!</p>
        <p>🔑 <strong>Truco:</strong> ¿Puedes contar eso de 1 en 1? Si sí → <strong>ARE</strong> (books, students). Si no → <strong>IS</strong> (water, money, time).</p>`
    },
    {
      type:'teach',
      minutes:3,
      title:'🔢 Enumerar: números ordinales',
      genre:'Gramática',
      html:`
        <p>Los números ordinales indican la <strong>posición</strong> de algo en una lista: primero, segundo, tercero...</p>
        <p>La mayoría se forman agregando <strong>-th</strong> al número cardinal, pero los tres primeros son irregulares y hay que memorizarlos: <strong>first, second, third</strong>. Del 4 en adelante: fourth, fifth, sixth, seventh, eighth, ninth, tenth.</p>
        <p>🧠 <strong>Tip:</strong> "one → first / two → second / three → third". ¡Solo esos tres cambian radicalmente!</p>
        <p>➜ <em>She is the <strong>first</strong> to arrive.</em> — Ella es la primera en llegar.<br>
        ➜ <em>He finished in <strong>third</strong> place.</em> — Él terminó en tercer lugar.<br>
        ➜ <em>Today is the <strong>fifth</strong> of June.</em> — Hoy es cinco de junio.</p>`
    },
    {
      type:'teach',
      minutes:4,
      title:'📏 Comparar: comparativos y superlativos',
      genre:'Gramática',
      html:`
        <p><strong>Comparativo:</strong> compara dos cosas, siempre con <strong>than</strong> (que). <em>"He is taller than Tom."</em> — Él es más alto que Tom.</p>
        <p><strong>Superlativo:</strong> indica el máximo dentro de un grupo, siempre con <strong>the</strong>. <em>"This is the cheapest store."</em> — Esta es la tienda más barata.</p>
        <p>🔑 <strong>Regla clave:</strong> adjetivos <strong>cortos</strong> (1–2 sílabas) agregan <strong>-er / -est</strong> (tall→taller/tallest, big→bigger/biggest). Adjetivos <strong>largos</strong> (3+ sílabas) usan <strong>more / the most</strong> (expensive→more expensive/the most expensive, beautiful→more beautiful/the most beautiful).</p>
        <p>💡 <strong>Analogía:</strong> los adjetivos cortos "cargan" el sufijo ellos solos; los largos son tan pesados que necesitan ayuda de "more"/"most" adelante.</p>
        <p>➜ <em>This supermarket is <strong>the cheapest</strong> in the city.</em><br>
        ➜ <em>This supermarket is <strong>the most expensive</strong> in the city.</em></p>`
    },
    {
      type:'teach',
      minutes:3,
      title:'🔤 Sufijos: -er y -est',
      genre:'Gramática',
      html:`
        <p>Un <strong>sufijo</strong> es una terminación que se agrega al final de una palabra para cambiar su significado. <strong>tall + er → taller</strong> (comparativo) · <strong>tall + est → tallest</strong> (siempre con "the").</p>
        <p>⚠️ <strong>Reglas de ortografía especiales:</strong></p>
        <p>• Termina en <strong>-e</strong>: solo agrega r/st → <em>nice → nicer / the nicest</em><br>
        • Consonante+vocal+consonante: dobla la última consonante → <em>big → bigger / the biggest</em><br>
        • Termina en <strong>-y</strong>: cambia y→i → <em>happy → happier / the happiest</em></p>
        <p>🧠 Recuerda: -er/-est solo con adjetivos cortos. Para "expensive" o "beautiful" (largos), usa more/the most.</p>`
    },
    {
      type:'teach',
      minutes:4,
      title:'🕐 Preguntar y dar información sobre el tiempo',
      genre:'Gramática',
      html:`
        <p>Para preguntar <strong>cuándo</strong>: <em>When + is/are + sujeto?</em> Para preguntar <strong>a qué hora</strong>: <em>What time + is/are + sujeto?</em></p>
        <p>➜ <em>When is the party?</em> — ¿Cuándo es la fiesta?<br>
        ➜ <em>On Saturday, at 10:00 o'clock.</em> — El sábado, a las 10:00.</p>
        <p>📌 <strong>Preposiciones de tiempo:</strong></p>
        <p>• <strong>AT</strong> + hora exacta → <em>at 3:00, at noon, at midnight</em><br>
        • <strong>ON</strong> + día o fecha → <em>on Monday, on June 5th</em><br>
        • <strong>IN</strong> + mes, año o estación → <em>in June, in 2024, in summer</em></p>
        <p>🧠 <strong>Truco:</strong> AT = un punto exacto en el tiempo · ON = un día (superficie de calendario) · IN = un período largo (estás "dentro" del mes o año).</p>
        <p>🕐 <strong>Decir la hora:</strong> 10:15 = <em>ten fifteen / quarter past ten</em> · 10:30 = <em>ten thirty / half past ten</em> · 10:45 = <em>ten forty-five / quarter to eleven</em> · 12:00 día = <em>noon</em> · 12:00 noche = <em>midnight</em>.</p>`
    },
    {
      type:'flip-cards',
      minutes:3,
      label:'Vocabulario · Expresiones clave',
      title:'💬 Expresarse con claridad',
      instructions:'Estas frases se usan todo el tiempo en inglés cotidiano y no siempre se traducen palabra por palabra. Haz clic en cada tarjeta para ver su significado.',
      cards:[
        {front:"let's", back:'¡vamos! / hagamos — "Let\'s go to the park!"'},
        {front:'arrive at', back:'llegar a (un lugar) — "We arrive at the station."'},
        {front:'of course', back:'por supuesto'},
        {front:'right now', back:'ahora mismo'},
        {front:'excuse me', back:'disculpa / permiso'}
      ]
    },
    {
      type:'teach',
      minutes:2,
      title:'🔗 Conectores: and y then',
      genre:'Gramática',
      html:`
        <p><strong>AND</strong> ("y") une dos ideas al mismo nivel, sin orden temporal: <em>"I have a cat and a dog."</em></p>
        <p><strong>THEN</strong> ("luego/entonces") indica que algo ocurre después, marca secuencia: <em>"I ate, then I slept."</em></p>
        <p>🎉 <strong>"And then"</strong> juntos son muy comunes para narrar una secuencia: <em>"We went to the mall, and then we had lunch, and then we went home."</em></p>
        <p>⚠️ No abuses de "and then" en escritura formal, pero en conversación está perfecto.</p>`
    },
    {
      type:'flip-cards',
      minutes:3,
      label:'Pronunciación · el sonido /w/',
      title:'🔊 El sonido /w/',
      instructions:'El sonido /w/ no existe exactamente en español: redondea los labios como para decir "u", suelta el aire suavemente y pasa rápido a la vocal siguiente. Practica diciendo "ua-ua-ua" rápido — ¡ese es el sonido! Haz clic en cada tarjeta para ver su significado.',
      cards:[
        {front:'week /wiːk/', back:'semana'},
        {front:'when /wɛn/', back:'cuándo'},
        {front:'where /wɛr/', back:'dónde'},
        {front:'water /ˈwɔːtər/', back:'agua'},
        {front:'watch /wɒtʃ/', back:'mirar'},
        {front:'world /wɜːrld/', back:'mundo'},
        {front:'write (¡w muda!)', back:'escribir — se pronuncia "rait", la w antes de r al inicio siempre es muda'},
        {front:'wrong (¡w muda!)', back:'incorrecto — se pronuncia "rong"'}
      ]
    },
    {
      type:'guided-practice',
      minutes:4,
      skillTag:'gramatica',
      title:'Repasemos lo básico (con pistas disponibles)',
      questions:[
        { q:'¿Qué significa "plenty of" en español?',
          opts:['Poco / poca','Mucho/a(s) o bastante(s)','Ninguno/a','Más o menos'], c:1,
          hint:'Piensa en la definición dada al inicio: se usa para una cantidad grande y suficiente.',
          fb_ok:'✅ Correcto. "Plenty of" significa "mucho/a(s)" o "bastante(s)". Ejemplo: "There is plenty of water." → Hay bastante agua.',
          fb_no:'❌ "Plenty of" significa "mucho/a(s)" o "bastante(s)", indica una cantidad grande y suficiente. La respuesta correcta era la B.' },
        { q:'¿Cuál es el número ordinal correcto para el número 3?',
          opts:['threeth','thirdth','third','three'], c:2,
          hint:'Es uno de los tres ordinales irregulares: first, second, third.',
          fb_ok:'✅ Correcto. El ordinal de 3 es "third", uno de los tres irregulares (first, second, third). Del 4 en adelante casi siempre se agrega -th.',
          fb_no:'❌ El ordinal de 3 es "third" — es irregular, no sigue la regla de agregar "-th". La respuesta correcta era la C.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'gramatica',
      title:'Ahora sin ayuda: aplica lo aprendido',
      questions:[
        { q:'¿Cuál de estas oraciones usa correctamente el comparativo?',
          opts:['She is more tall than her sister.','She is tallest than her sister.','She is taller than her sister.','She is the taller than her sister.'], c:2,
          fb_ok:'✅ Correcto. "Taller than" es la forma correcta: "tall" es un adjetivo corto (1 sílaba), usa el sufijo -er + "than".',
          fb_no:'❌ "Taller than" es la forma correcta. "Tall" es corto (1 sílaba) y usa -er + than. "More tall" es incorrecto para adjetivos cortos, y "tallest" es superlativo, no comparativo. La correcta era la C.' },
        { q:'¿Qué preposición de tiempo completa correctamente: "The concert is ___ Friday ___ 8:00 o\'clock."?',
          opts:['in / in','on / at','at / on','in / at'], c:1,
          fb_ok:'✅ Correcto. Se usa ON para días (on Friday) y AT para horas exactas (at 8:00).',
          fb_no:'❌ Se usa ON para días (on Friday) y AT para horas exactas (at 8:00). La respuesta correcta era la B.' },
        { q:'"Expensive" tiene 3 sílabas. ¿Cuál es su superlativo correcto y por qué?',
          opts:['"expensivest" — todos los adjetivos llevan -est.','"most expensive" — se pone "most" sin importar nada más.','"the most expensive" — los adjetivos largos usan "the most" en lugar de -est.','"the expensivest" — el superlativo siempre lleva "the" + sufijo -est.'], c:2,
          fb_ok:'✅ Correcto. Los adjetivos de 3+ sílabas no usan -est: se coloca "the most" delante. Ej: "This is the most expensive restaurant in the city."',
          fb_no:'❌ Los adjetivos de 3 o más sílabas no usan el sufijo -est; se usa "the most" delante. "Expensivest" no existe. La correcta era la C.' },
        { q:'Elige la opción que une correctamente: "Llegamos a la estación → Tomamos el tren → Llegamos a casa."',
          opts:['We arrived at the station then we took the train then we arrived home.','We arrived at the station, and then we took the train, and then we arrived home.','We arrived at the station and we took the train then arrived home.','Then we arrived at the station and then took the train, and we arrived home.'], c:1,
          fb_ok:'✅ Correcto. La opción B usa "and then" con comas para separar eventos en orden cronológico, y "arrive at + lugar" correctamente.',
          fb_no:'❌ La opción correcta usa "and then" con comas para separar los eventos en secuencia, y "arrive at + lugar". La correcta era la B.' }
      ]
    },
    {
      type:'challenge',
      minutes:4,
      title:'¡Ahora tú describes tu país!',
      intro:'Este ejercicio integra todo lo practicado: cantidades, comparativos, tiempo y conectores.',
      prompt:'✍️ Escribe 3 oraciones en inglés describiendo tu país o ciudad. Usa al menos <strong>un comparativo o superlativo</strong>, <strong>una expresión de tiempo (on/at/in)</strong> y <strong>un conector (and/then)</strong>.',
      hint:'Ejemplo de estructura: "My country has plenty of... It is bigger/more beautiful than... and then..."',
      placeholder:'Write your 3 sentences here...',
      example:`<em>"My country has plenty of mountains. It is more beautiful than many other countries, and I visit the coast on weekends. In summer, the beaches are the most crowded."</em><br><br>
        ¿Notaste cómo esta respuesta combina "plenty of", un superlativo, una preposición de tiempo y un conector? Esa integración es justamente lo que se busca.`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué regla gramatical te costó más — comparativos, ordinales o preposiciones de tiempo?',
        '¿Qué harás para practicarla antes de la próxima guía?'
      ]
    },
    { type:'report' }
  ]
};

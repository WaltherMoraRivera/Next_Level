const GUIDE_DATA = {
  id: 'lenguaje-g2-pulpo-inteligencia',
  subject: 'lenguaje',
  subjectLabel: 'Lenguaje',
  subjectIcon: '📖',
  title: 'El pulpo, el genio de los ocho brazos',
  examRef: 'Comprensión lectora · Científico/Divulgativo',
  nextGuideHint: 'Próxima guía: Texto Biográfico/Histórico → línea de tiempo, interpretación de personajes reales, argumentación.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🐙 ¿Qué animal considerarías el más inteligente del reino animal, además de los humanos? ¿Por qué?',
      subPrompt:'Piensa: ¿qué comportamientos hacen que un animal parezca "inteligente"?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Solemos asociar la inteligencia animal con delfines, perros o chimpancés. Sin embargo, existe un animal marino sin huesos, sin columna vertebral y con una vida muy corta que sorprende cada vez más a los científicos por su capacidad de resolver problemas.<br><br>
        El texto que leerás a continuación es un <strong>artículo científico-divulgativo</strong>: su propósito es informar y explicar un tema con datos reales, a diferencia de un cuento, que busca entretener con una historia inventada.<br><br>
        <em>💡 Tip lector:</em> En los textos informativos, presta atención a los <strong>datos, cifras y explicaciones causales</strong> (por qué ocurre algo), ya que suelen contener las ideas más importantes.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a practicar <strong>identificar ideas principales y secundarias</strong> en un texto científico, establecer <strong>relaciones de causa-efecto</strong>, y ampliar tu <strong>vocabulario técnico</strong>.'
    },
    {
      type:'teach',
      minutes:9,
      title:'El pulpo, el genio de los ocho brazos',
      genre:'Científico / Divulgativo',
      wordCount:'~340 palabras',
      html:`
        <h3>El pulpo, el genio de los ocho brazos</h3>
        <p>Entre todos los animales marinos, pocos generan tanta fascinación en los científicos como el pulpo. A pesar de ser un <span class="vhl" title="Animal sin columna vertebral">invertebrado</span> —es decir, un animal sin columna vertebral—, posee un sistema nervioso tan complejo que algunos investigadores lo consideran uno de los animales más inteligentes del planeta.</p>
        <p>Una de sus habilidades más sorprendentes es el <span class="vhl" title="Capacidad de imitar el entorno para ocultarse">camuflaje</span>. Gracias a células especiales en su piel llamadas cromatóforos, el pulpo puede cambiar de color y textura en cuestión de segundos para imitar el fondo marino, una roca o incluso un alga. Esta capacidad no es solo un truco estético: es una respuesta evolutiva ante la gran cantidad de depredadores que amenazan su supervivencia, como tiburones, morenas y aves marinas. Sin caparazón ni espinas para defenderse, el pulpo depende casi exclusivamente de su <span class="vhl" title="Discreción y cautela para pasar desapercibido">sigilo</span> para sobrevivir.</p>
        <p>Pero el camuflaje no es su único recurso. Cuando un depredador lo detecta, el pulpo puede liberar una nube de tinta oscura que confunde y desorienta al atacante, ganando así segundos preciosos para escapar. Además, su cuerpo blando —sin huesos— le permite <span class="vhl" title="Reducirse de tamaño apretándose">comprimirse</span> y deslizarse por grietas diminutas, incluso más pequeñas que una moneda.</p>
        <p>Los científicos también han documentado comportamientos que parecen indicar razonamiento. En experimentos de laboratorio, pulpos en cautiverio han logrado abrir frascos con tapa de rosca para alcanzar comida en su interior, recordar soluciones a problemas después de varios días, e incluso —según reportan algunos cuidadores de acuarios— desarmar equipos de filtración solo por curiosidad.</p>
        <p>Sin embargo, esta inteligencia convive con una existencia breve: la mayoría de las especies de pulpo viven entre uno y dos años. Tras reproducirse, muchas hembras entran en un estado de <span class="vhl" title="Estado de inactividad y bajo funcionamiento del cuerpo">letargo</span>, dejan de alimentarse y mueren poco después de que sus huevos eclosionan, dedicando sus últimas fuerzas a protegerlos.</p>
        <p>El pulpo sigue siendo, para la ciencia, un animal <span class="vhl" title="Extraordinario, poco común o diferente al resto">singular</span>: frágil en apariencia, pero extraordinario en ingenio.</p>`,
      vocab:[
        { word:'invertebrado', ctx:'"A pesar de ser un invertebrado —es decir, un animal sin columna vertebral—."',
          opts:['Animal con esqueleto interno de huesos','Animal sin columna vertebral','Animal que vive exclusivamente en el mar','Animal de sangre fría'], c:1,
          def:'Animal que no tiene columna vertebral ni esqueleto interno de huesos.', syn:'sin espina dorsal, sin esqueleto óseo', ant:'vertebrado',
          ex:'Los insectos, las medusas y los pulpos son ejemplos de animales invertebrados.' },
        { word:'camuflaje', ctx:'"Una de sus habilidades más sorprendentes es el camuflaje."',
          opts:['Una técnica de caza en grupo','La capacidad de imitar el entorno para pasar desapercibido','Un tipo de armadura natural muy resistente','La producción de tinta para defenderse'], c:1,
          def:'Capacidad de cambiar de apariencia para confundirse con el entorno y pasar desapercibido.', syn:'mimetismo, disfraz natural', ant:'exhibición, exposición',
          ex:'El camaleón usa el camuflaje para esconderse entre las hojas verdes del árbol.' },
        { word:'sigilo', ctx:'"El pulpo depende casi exclusivamente de su sigilo para sobrevivir."',
          opts:['Velocidad extrema al nadar','Discreción y cautela para pasar desapercibido','Fuerza física para enfrentar a otros animales','Curiosidad por explorar su entorno'], c:1,
          def:'Cautela y discreción con la que se hace algo para no ser notado.', syn:'cautela, discreción', ant:'torpeza, estridencia',
          ex:'El gato caminó con sigilo por el pasillo para no despertar a sus dueños.' },
        { word:'comprimirse', ctx:'"Su cuerpo blando le permite comprimirse y deslizarse por grietas diminutas."',
          opts:['Expandirse y ocupar más espacio del habitual','Reducirse de tamaño apretándose o encogiéndose','Cambiar de color rápidamente','Moverse a una velocidad muy alta'], c:1,
          def:'Reducir su tamaño o volumen apretándose o encogiéndose.', syn:'encogerse, apretarse', ant:'expandirse, dilatarse',
          ex:'La esponja puede comprimirse hasta quedar muy pequeña y luego recuperar su forma original.' },
        { word:'letargo', ctx:'"Muchas hembras entran en un estado de letargo, dejan de alimentarse."',
          opts:['Un tipo de enfermedad contagiosa','Estado de inactividad y bajo funcionamiento del cuerpo','Una fase de crecimiento acelerado','Un comportamiento agresivo hacia otros animales'], c:1,
          def:'Estado de inactividad y funcionamiento reducido del cuerpo, similar a un sueño profundo y prolongado.', syn:'inactividad, aletargamiento', ant:'actividad, vigor',
          ex:'Algunos animales entran en letargo durante el invierno para ahorrar energía.' },
        { word:'singular', ctx:'"El pulpo sigue siendo, para la ciencia, un animal singular."',
          opts:['Común y totalmente esperado','Extraordinario, poco común o diferente al resto','Peligroso y agresivo por naturaleza','Antiguo y de origen primitivo'], c:1,
          def:'Que se destaca por ser poco común, extraordinario o diferente al resto.', syn:'excepcional, particular', ant:'común, ordinario',
          ex:'Tiene un talento singular para la música que sorprende a todos los que la escuchan.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:7,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Qué son los cromatóforos y qué función cumplen en la piel del pulpo?',
          opts:['Son órganos que producen la tinta oscura para escapar','Son células especiales que le permiten cambiar de color y textura','Son ventosas que usa para sujetarse a las rocas','Son receptores que detectan la presencia de depredadores'], c:1,
          hint:'Revisa el segundo párrafo, donde se explica qué son los cromatóforos.',
          fb_ok:'✅ Correcto. El texto lo dice de forma explícita: "Gracias a células especiales en su piel llamadas cromatóforos, el pulpo puede cambiar de color y textura en cuestión de segundos". Esta es información literal.',
          fb_no:'❌ No es esa. Revisa el segundo párrafo: "Gracias a células especiales en su piel llamadas cromatóforos, el pulpo puede cambiar de color y textura en cuestión de segundos". La respuesta correcta era la opción B.' },
        { q:'Según el texto, ¿qué hace el pulpo cuando un depredador lo detecta, además de camuflarse?',
          opts:['Se entierra en la arena del fondo marino','Cambia el color de sus ojos para intimidarlo','Libera una nube de tinta oscura que confunde al atacante','Emite un sonido de alta frecuencia para asustarlo'], c:2,
          hint:'Piensa en qué hace el pulpo cuando ya fue detectado, más allá del camuflaje.',
          fb_ok:'✅ Exacto. El texto explica: "el pulpo puede liberar una nube de tinta oscura que confunde y desorienta al atacante, ganando así segundos preciosos para escapar."',
          fb_no:'❌ Vuelve al tercer párrafo. El texto dice: "el pulpo puede liberar una nube de tinta oscura que confunde y desorienta al atacante". La correcta era la opción C.' },
        { q:'¿Cuánto tiempo viven, en promedio, la mayoría de las especies de pulpo?',
          opts:['Entre 10 y 15 años','Entre 5 y 8 años','Menos de un año','Entre uno y dos años'], c:3,
          hint:'El dato exacto aparece en el último párrafo del texto.',
          fb_ok:'✅ Bien leído. El texto es directo: "la mayoría de las especies de pulpo viven entre uno y dos años." Este dato contrasta a propósito con lo inteligentes que son.',
          fb_no:'❌ El texto lo indica claramente: "la mayoría de las especies de pulpo viven entre uno y dos años." La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:7,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué el pulpo depende casi exclusivamente del sigilo y no de defensas físicas como espinas o caparazón?',
          opts:['Porque es un animal territorial que prefiere evitar el conflicto','Porque su cuerpo blando y sin protecciones externas lo obliga a evitar el enfrentamiento directo','Porque los científicos lo han entrenado en cautiverio para camuflarse','Porque vive en aguas donde no existen depredadores naturales'], c:1,
          fb_ok:'✅ Excelente razonamiento. El texto conecta dos ideas: "Sin caparazón ni espinas para defenderse, el pulpo depende casi exclusivamente de su sigilo para sobrevivir." Es una relación causa-efecto.',
          fb_no:'❌ Piensa en la relación causa-efecto: "Sin caparazón ni espinas para defenderse, el pulpo depende casi exclusivamente de su sigilo para sobrevivir." La respuesta correcta era la B.' },
        { q:'¿Qué se puede inferir sobre la inteligencia del pulpo a partir del hecho de que recuerde soluciones a problemas después de varios días?',
          opts:['Que actúa completamente por instinto, sin ningún tipo de memoria','Que posee una forma de memoria y aprendizaje, no solo reacciones automáticas','Que los pulpos en cautiverio se vuelven más lentos con el tiempo','Que solo puede resolver el mismo problema una única vez'], c:1,
          fb_ok:'✅ Muy bien. Si recuerda una solución después de varios días, eso implica memoria a largo plazo y capacidad de aprendizaje, no solo reflejos automáticos.',
          fb_no:'❌ Si el pulpo "recuerda soluciones a problemas después de varios días", eso no puede ser solo instinto: implica memoria y aprendizaje real. La respuesta correcta era la B.' },
        { q:'¿Por qué crees que las hembras de pulpo dejan de alimentarse y entran en letargo después de que sus huevos eclosionan?',
          opts:['Porque enferman a causa del esfuerzo de poner los huevos','Porque dedican sus últimas energías a proteger a sus crías antes de morir','Porque pierden el instinto de búsqueda de alimento por error genético','Porque los depredadores las atacan justo en ese momento'], c:1,
          fb_ok:'✅ Correcto. El texto lo sugiere con la frase final: "dedicando sus últimas fuerzas a protegerlos." Es un sacrificio final orientado a proteger a las crías, no una falla.',
          fb_no:'❌ El texto da la pista en su última frase: la hembra dedica "sus últimas fuerzas a protegerlos". Sugiere protección antes de morir, no una enfermedad. La respuesta correcta era la B.' }
      ]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'El texto explica que los científicos mantienen pulpos en cautiverio para estudiar su inteligencia mediante experimentos como abrir frascos. ¿Crees que esto es correcto? Justifica tu respuesta usando al menos un detalle del texto.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que... porque el texto dice que...' o 'No estoy de acuerdo porque...'",
      modelAnswer:`No hay una sola respuesta correcta, pero una buena respuesta tiene <strong>posición + argumento con evidencia del texto</strong>.<br><br>
        <strong>Si argumentas que SÍ es correcto:</strong> <em>"Es correcto porque el texto muestra que gracias a estos estudios sabemos que el pulpo tiene memoria y capacidad de aprendizaje, algo que no sabríamos de otra forma."</em><br><br>
        <strong>Si argumentas que NO es correcto:</strong> <em>"No me parece correcto porque el pulpo depende del sigilo y la libertad para sobrevivir, y mantenerlo en cautiverio contradice su naturaleza."</em><br><br>
        ⚠️ Una respuesta como <em>"Sí, porque es interesante"</em> no tiene suficiente fundamento.`
    },
    {
      type:'dnd-classify',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Clasifica: idea principal o idea secundaria',
      instructions:'Arrastra cada tarjeta a la columna correcta según si representa una idea principal (una afirmación central del texto) o una idea secundaria (un dato que la respalda). También puedes hacer clic en una tarjeta y luego en una columna para colocarla.',
      colA:{label:'Idea Principal'}, colB:{label:'Idea Secundaria'},
      items:[
        {t:'El pulpo es un invertebrado con un sistema nervioso muy complejo.', cat:'a'},
        {t:'Los cromatóforos son células que cambian de color y textura en la piel.', cat:'b'},
        {t:'El pulpo usa el camuflaje y la tinta para escapar de sus depredadores.', cat:'a'},
        {t:'El cuerpo blando del pulpo le permite pasar por grietas muy pequeñas.', cat:'b'},
        {t:'Estudios de laboratorio muestran comportamientos que parecen indicar razonamiento.', cat:'a'},
        {t:'Los pulpos en cautiverio han logrado abrir frascos con tapa de rosca.', cat:'b'}
      ],
      order:[2,0,4,1,5,3]
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Ahora tú eres el periodista científico!',
      intro:'Este ejercicio desarrolla tu capacidad de síntesis: tomar información compleja y comunicarla de forma breve y clara. No hay respuesta incorrecta, pero sí respuestas más elaboradas que otras.',
      prompt:'✍️ Escribe una breve noticia (un titular + 2 o 3 líneas) anunciando el hallazgo de que los pulpos pueden abrir frascos y recordar soluciones. Imagina que la noticia es para estudiantes de tu edad.',
      hint:'Recuerda: una buena noticia responde qué pasó, por qué es importante y usa un lenguaje claro y atractivo para el lector.',
      placeholder:'Escribe aquí tu titular y noticia...',
      example:`<em>"¡Los pulpos piensan más de lo que creíamos! Científicos descubrieron que estos animales marinos pueden abrir frascos con tapa de rosca y recordar cómo hacerlo días después. El hallazgo sorprende porque el pulpo no tiene huesos ni columna vertebral, pero su cerebro es capaz de aprender y recordar."</em><br><br>
        ¿Notaste cómo ese ejemplo explica el dato, agrega el "por qué sorprende" y usa un tono cercano?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo más difícil de esta guía para ti?',
        '¿Qué estrategia usarás la próxima vez para mejorar en eso?'
      ]
    },
    { type:'report' }
  ]
};

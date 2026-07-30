const GUIDE_DATA = {
  id: 'ciencias-repaso1-teoria-celular',
  subject: 'ciencias',
  subjectLabel: 'Ciencias Naturales',
  subjectIcon: '⚡',
  title: 'Teoría celular y la célula eucarionte',
  examRef: 'Unidad 2 · OA1 · Repaso para prueba',
  nextGuideHint: 'Sigue repasando con tus apuntes de clase antes de la prueba. ¡Mucho éxito!',

  reference:{
    title:'Datos de teoría celular',
    html:`
      <h3>Los 4 postulados de la teoría celular</h3>
      <div class="formula">1. Todo ser vivo está formado por una o más células.</div>
      <div class="formula">2. La célula es la unidad básica de estructura y función de los seres vivos.</div>
      <div class="formula">3. Toda célula proviene de una célula preexistente (por división celular).</div>
      <div class="formula">4. Las células contienen material hereditario (ADN) que se transmite a las células hijas.</div>

      <h3>Los 4 científicos y su aporte</h3>
      <div class="formula">Robert Hooke → observó corcho al microscopio y acuñó la palabra "célula" (1665).</div>
      <div class="formula">Matthias Schleiden → concluyó que todas las plantas están hechas de células.</div>
      <div class="formula">Theodor Schwann → concluyó que todos los animales están hechos de células.</div>
      <div class="formula">Rudolf Virchow → concluyó que toda célula proviene de una célula preexistente.</div>

      <h3>Las 4 estructuras básicas de la célula eucarionte</h3>
      <div class="formula">Núcleo → contiene el material genético (ADN) y controla las actividades celulares.</div>
      <div class="formula">Membrana plasmática → regula qué sustancias entran y salen de la célula.</div>
      <div class="formula">Citoplasma → medio donde ocurren las reacciones celulares y se ubican los demás organelos.</div>
      <div class="formula">Mitocondria → genera la energía que la célula necesita para funcionar.</div>
    `
  },

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🔬 En 1665, Robert Hooke miró un trozo de corcho bajo un microscopio y vio pequeños espacios vacíos que le recordaron las celdas de un panal de abejas... pero lo que observó en realidad eran células muertas, no organismos vivos. ¿Por qué crees que, aun así, su descubrimiento fue tan importante para la ciencia?',
      subPrompt:'Piensa: ¿fue el primer aporte de muchos, o la teoría celular completa surgió de una sola persona?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        El aporte de Hooke fue importante porque le dio nombre a la "célula" y abrió el camino para que, casi 200 años después, otros científicos completaran la teoría celular con sus propios descubrimientos. Ningún científico solo construyó toda la teoría: fue un trabajo acumulado a lo largo del tiempo.<br><br>
        <em>💡 Tip para la prueba:</em> Si necesitas repasar un postulado, un científico o una estructura exacta, usa el botón <strong>📖 Datos</strong> arriba — puedes consultarlo cuantas veces quieras y siempre volverás exactamente al ejercicio donde estabas.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a <strong>repasar y practicar</strong> los 4 postulados de la teoría celular, los aportes de 4 científicos clave, y las 4 estructuras básicas de la célula eucarionte.'
    },
    {
      type:'teach',
      minutes:6,
      title:'Repaso: teoría celular y célula eucarionte antes de la prueba',
      genre:'Científico · Repaso',
      wordCount:'~260 palabras',
      html:`
        <h3>Repaso: teoría celular y célula eucarionte antes de la prueba</h3>
        <p>La <span class="vhl" title="Teoría que establece que la célula es la unidad fundamental de todos los seres vivos">teoría celular</span> es una de las ideas más importantes de la biología: establece que la célula es la unidad fundamental de todos los seres vivos. No siempre se supo esto: la teoría se construyó gracias al trabajo de varios científicos a lo largo de casi 200 años.</p>
        <p>Robert Hooke fue el primero en observar células, en 1665, al mirar un trozo de corcho bajo un microscopio rudimentario: lo que vio eran en realidad paredes de células muertas, pero fue él quien acuñó la palabra "célula". Casi dos siglos después, Matthias Schleiden concluyó que todas las plantas están formadas por células, y poco después Theodor Schwann llegó a la misma conclusión para los animales: juntos, establecieron que todos los seres vivos están hechos de células. Más tarde, Rudolf Virchow agregó una idea clave: toda célula proviene de una célula preexistente, mediante división celular.</p>
        <p>Estos aportes, sumados a un cuarto <span class="vhl" title="Cada una de las afirmaciones centrales que forman una teoría científica">postulado</span> sobre el material hereditario, forman los 4 postulados de la teoría celular actual.</p>
        <p>En esta guía nos enfocamos en la <span class="vhl" title="Célula que tiene núcleo definido, presente tanto en animales como en plantas">célula eucarionte</span>. Sus estructuras básicas incluyen el núcleo (contiene el material genético y controla las actividades celulares), la <span class="vhl" title="Estructura que regula qué sustancias entran y salen de la célula">membrana plasmática</span> (regula qué entra y sale de la célula), el citoplasma (medio donde ocurren las reacciones celulares) y la <span class="vhl" title="Organelo que genera la energía que la célula necesita para funcionar">mitocondria</span> (genera la energía que la célula necesita para funcionar).</p>
        <p>Si necesitas repasar los postulados, los científicos o las estructuras exactas, puedes revisarlos en cualquier momento tocando el botón 📖 Datos, arriba.</p>`,
      vocab:[
        { word:'célula eucarionte', ctx:'"En esta guía nos enfocamos en la célula eucarionte."',
          opts:['Célula que tiene núcleo definido, presente tanto en animales como en plantas','Un tipo de científico que estudia células','La primera célula observada por Hooke','Otro nombre para el citoplasma'], c:0,
          def:'Célula que tiene núcleo definido, presente tanto en animales como en plantas.', syn:'célula con núcleo', ant:'célula procarionte',
          ex:'Las células de los animales y las plantas son células eucariontes.' },
        { word:'membrana plasmática', ctx:'"la membrana plasmática (regula qué entra y sale de la célula)"',
          opts:['Estructura que regula qué sustancias entran y salen de la célula','El organelo que genera energía para la célula','El material genético de la célula','El medio donde ocurren las reacciones celulares'], c:0,
          def:'Estructura que regula qué sustancias entran y salen de la célula.', syn:'membrana celular', ant:'núcleo',
          ex:'Sin la membrana plasmática, la célula no podría controlar qué sustancias entran o salen.' },
        { word:'mitocondria', ctx:'"la mitocondria (genera la energía que la célula necesita para funcionar)"',
          opts:['La estructura que contiene el material genético','El medio donde se ubican los demás organelos','Organelo que genera la energía que la célula necesita para funcionar','Otro nombre para la membrana plasmática'], c:2,
          def:'Organelo que genera la energía que la célula necesita para funcionar.', syn:'central energética de la célula', ant:'núcleo',
          ex:'Las células con mayor actividad, como las musculares, tienen muchas mitocondrias.' },
        { word:'postulado', ctx:'"forman los 4 postulados de la teoría celular actual"',
          opts:['El nombre de un científico famoso','Cada una de las afirmaciones centrales que forman una teoría científica','Un tipo de célula','Un instrumento de observación como el microscopio'], c:1,
          def:'Cada una de las afirmaciones centrales que forman una teoría científica.', syn:'principio, enunciado central', ant:'ejemplo puntual',
          ex:'Uno de los postulados de la teoría celular es que toda célula proviene de una célula preexistente.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:15,
      skillTag:'literal',
      title:'Practica con pistas disponibles: responde cada pregunta',
      questions:[
        { q:'¿Quién acuñó la palabra "célula" al observar corcho bajo un microscopio?',
          opts:['Theodor Schwann','Matthias Schleiden','Rudolf Virchow','Robert Hooke'], c:3,
          hint:'Fue el primer científico mencionado en el texto, en 1665.',
          fb_ok:'✅ Correcto. Robert Hooke observó corcho en 1665 y acuñó la palabra "célula".',
          fb_no:'❌ Fue Robert Hooke, en 1665, al observar corcho bajo el microscopio. La respuesta correcta era la opción D.' },
        { q:'¿Qué científico concluyó que todas las plantas están formadas por células?',
          opts:['Matthias Schleiden','Rudolf Virchow','Robert Hooke','Theodor Schwann'], c:0,
          hint:'Aparece justo antes de mencionar a Theodor Schwann en el texto.',
          fb_ok:'✅ Correcto. Matthias Schleiden concluyó esto para las plantas.',
          fb_no:'❌ Fue Matthias Schleiden quien llegó a esa conclusión para las plantas. La respuesta correcta era la opción A.' },
        { q:'¿Qué científico llegó a la misma conclusión que Schleiden, pero para los animales?',
          opts:['Robert Hooke','Rudolf Virchow','Matthias Schleiden','Theodor Schwann'], c:3,
          hint:'Aparece justo después de mencionar a Schleiden en el texto.',
          fb_ok:'✅ Correcto. Theodor Schwann llegó a la misma conclusión para los animales.',
          fb_no:'❌ Fue Theodor Schwann quien concluyó lo mismo para los animales. La respuesta correcta era la opción D.' },
        { q:'¿Qué aportó Rudolf Virchow a la teoría celular?',
          opts:['Que las plantas están hechas de células','Que toda célula proviene de una célula preexistente','El nombre "célula"','Que los animales están hechos de células'], c:1,
          hint:'Aparece al final del segundo párrafo del texto.',
          fb_ok:'✅ Correcto. Virchow concluyó que toda célula proviene de una célula preexistente.',
          fb_no:'❌ Virchow aportó la idea de que toda célula proviene de una célula preexistente. La respuesta correcta era la opción B.' },
        { q:'¿Qué estructura de la célula eucarionte contiene el material genético?',
          opts:['La mitocondria','La membrana plasmática','El núcleo','El citoplasma'], c:2,
          hint:'Aparece primero en la lista de estructuras del cuarto párrafo.',
          fb_ok:'✅ Correcto. El núcleo contiene el material genético y controla las actividades celulares.',
          fb_no:'❌ El núcleo es la estructura que contiene el material genético. La respuesta correcta era la opción C.' },
        { q:'¿Qué estructura genera la energía que la célula necesita para funcionar?',
          opts:['El citoplasma','El núcleo','La membrana plasmática','La mitocondria'], c:3,
          hint:'Aparece al final de la lista de estructuras del cuarto párrafo.',
          fb_ok:'✅ Correcto. La mitocondria genera la energía que la célula necesita.',
          fb_no:'❌ La mitocondria es la estructura que genera esa energía. La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:15,
      skillTag:'inferencial',
      title:'Ahora sin pistas: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué se dice que Hooke observó "células muertas" y no las primeras células vivas?',
          opts:['Porque el corcho es un tejido vegetal muerto, y solo mostraba las paredes celulares vacías','Porque Hooke usó un microscopio defectuoso','Porque en 1665 no existían células vivas','Porque el corcho nunca tuvo células'], c:0,
          fb_ok:'✅ Excelente razonamiento. El corcho es tejido vegetal muerto: Hooke solo pudo ver las paredes celulares vacías que quedaban, no organismos vivos.',
          fb_no:'❌ El corcho es tejido vegetal muerto, por lo que Hooke solo vio las paredes celulares vacías. La respuesta correcta era la A.' },
        { q:'¿Qué función cumple el citoplasma en la célula, según el texto?',
          opts:['Contener el material genético','Generar energía para la célula','Ser el medio donde ocurren las reacciones celulares y se ubican los demás organelos','Regular qué entra y sale de la célula'], c:2,
          fb_ok:'✅ Correcto. El citoplasma es el medio donde ocurren las reacciones celulares y donde se ubican los demás organelos.',
          fb_no:'❌ El citoplasma es el medio donde ocurren las reacciones celulares y se ubican los demás organelos. La respuesta correcta era la C.' },
        { q:'Si una célula pierde su membrana plasmática, ¿qué esperarías que ocurra?',
          opts:['Nada, la célula seguiría funcionando exactamente igual','Generaría más energía de la habitual','No podría controlar qué sustancias entran o salen, arriesgando su equilibrio interno','Su núcleo se duplicaría automáticamente'], c:2,
          fb_ok:'✅ Muy bien. Sin membrana plasmática, la célula perdería la capacidad de regular qué sustancias entran y salen, poniendo en riesgo su equilibrio interno.',
          fb_no:'❌ Sin membrana plasmática, la célula no podría regular qué entra y sale, arriesgando su equilibrio interno. La respuesta correcta era la C.' },
        { q:'¿Qué relación existe entre el aporte de Virchow y el tercer postulado de la teoría celular ("toda célula proviene de una célula preexistente")?',
          opts:['No tienen ninguna relación entre sí','Virchow se opuso a ese postulado','Ese postulado fue anterior a Virchow y él lo contradijo','Son la misma idea: ese postulado se basa directamente en la conclusión de Virchow'], c:3,
          fb_ok:'✅ Correcto. El tercer postulado es exactamente la conclusión a la que llegó Virchow.',
          fb_no:'❌ Ese postulado es la misma idea que aportó Virchow. La respuesta correcta era la D.' },
        { q:'¿Por qué se considera que Schleiden y Schwann, en conjunto, establecieron uno de los postulados centrales de la teoría celular?',
          opts:['Porque trabajaron juntos en el mismo laboratorio toda su vida','Porque cada uno estudió un reino distinto (plantas y animales) y llegaron a la misma conclusión, generalizándola a todos los seres vivos','Porque ambos inventaron el microscopio','Porque uno corrigió los errores del otro'], c:1,
          fb_ok:'✅ Excelente. Al llegar a la misma conclusión estudiando reinos distintos, generalizaron la idea de que todos los seres vivos están hechos de células.',
          fb_no:'❌ Cada uno estudió un reino distinto y llegaron a la misma conclusión, generalizándola. La respuesta correcta era la B.' },
        { q:'¿Cuál de las siguientes NO es una de las 4 estructuras básicas de la célula eucarionte mencionadas en esta guía?',
          opts:['Núcleo','Pared celular','Membrana plasmática','Mitocondria'], c:1,
          fb_ok:'✅ Correcto. La pared celular no fue parte de las 4 estructuras básicas estudiadas en esta guía (núcleo, membrana plasmática, citoplasma y mitocondria).',
          fb_no:'❌ Las 4 estructuras estudiadas fueron núcleo, membrana plasmática, citoplasma y mitocondria; la pared celular no. La respuesta correcta era la B.' }
      ]
    },
    {
      type:'match-pairs',
      minutes:8,
      skillTag:'organizacion',
      label:'Científicos y sus aportes',
      title:'Relaciona cada científico con su aporte a la teoría celular',
      instructions:'Haz clic en un científico (izquierda) y luego en su aporte (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        'Robert Hooke',
        'Matthias Schleiden',
        'Theodor Schwann',
        'Rudolf Virchow'
      ],
      right:[
        'Concluyó que todos los animales están hechos de células',
        'Concluyó que toda célula proviene de una célula preexistente',
        'Observó corcho y acuñó la palabra "célula"',
        'Concluyó que todas las plantas están hechas de células'
      ],
      pairs:[[0,2],[1,3],[2,0],[3,1]]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Explica con tus palabras por qué se dice que la teoría celular es el resultado del trabajo de varios científicos a lo largo del tiempo, y no del descubrimiento de una sola persona.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que esto se debe a que...' o 'Cada científico aportó...'",
      modelAnswer:`No hay una única forma de redactarlo, pero una buena respuesta debe mencionar a más de un científico y su aporte específico.<br><br>
        <em>"Creo que esto se debe a que cada científico aportó una pieza distinta: Hooke le dio nombre a la célula, Schleiden y Schwann demostraron que plantas y animales están hechos de células, y Virchow agregó que las células provienen de otras células. Ninguno de ellos, por sí solo, tenía toda la teoría completa; se fue construyendo con los aportes de todos, a lo largo de casi 200 años."</em><br><br>
        Una buena respuesta debe mencionar al menos dos científicos distintos y qué aportó cada uno, mostrando que la teoría se construyó de forma acumulativa.`
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Ahora tú explicas una estructura con tus propias palabras!',
      intro:'Este ejercicio te pide traducir una estructura celular a un lenguaje simple, usando una analogía propia.',
      prompt:'🏠 Elige una de las 4 estructuras básicas de la célula eucarionte (núcleo, membrana plasmática, citoplasma o mitocondria) y explica su función usando una analogía de tu elección (por ejemplo, comparándola con una parte de una casa o una fábrica).',
      hint:'Recuerda que una buena analogía debe reflejar la función real de la estructura, no solo su forma o ubicación.',
      placeholder:'Elegí: ... Mi analogía es que esta estructura es como... porque...',
      example:`<em>"Elegí la mitocondria. Mi analogía es que la mitocondria es como la planta eléctrica de una fábrica: así como una planta eléctrica genera la energía que necesitan todas las máquinas para funcionar, la mitocondria genera la energía que la célula necesita para realizar todas sus actividades."</em><br><br>
        ¿Notaste que la analogía no solo compara objetos parecidos, sino que refleja exactamente la función real de la estructura (generar energía)?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué científico o aporte sientes que todavía necesitas repasar más antes de la prueba?',
        '¿Qué estrategia usarás para recordar la diferencia entre las 4 estructuras básicas de la célula eucarionte?'
      ]
    },
    { type:'report' }
  ]
};

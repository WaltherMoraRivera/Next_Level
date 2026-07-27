const GUIDE_DATA = {
  id: 'ciencias-g1-cargas-electricas',
  subject: 'ciencias',
  subjectLabel: 'Ciencias Naturales',
  subjectIcon: '⚡',
  title: 'Cargas eléctricas y electrostática',
  examRef: 'Unidad 3 · OA8 · 2° semestre',
  nextGuideHint: 'Próxima guía: ¿Cómo generamos electricidad? — pilas, paneles solares y generadores.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'⚡ Seguro te ha pasado: caminas sobre una alfombra y, al tocar el pomo metálico de una puerta, sientes una pequeña descarga. O frotas un globo contra tu pelo y tu cabello se levanta solo. ¿Por qué ocurre esto si ni la alfombra ni el globo están conectados a ningún enchufe?',
      subPrompt:'Piensa: ¿de dónde puede salir electricidad si no hay cables ni pilas de por medio?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Lo que sientes en esos momentos es <strong>electricidad estática</strong>: cargas eléctricas que se acumulan en la superficie de un objeto sin necesidad de circuitos ni cables. En esta guía vas a entender de dónde salen esas cargas, cómo se transfieren de un objeto a otro, y por qué algunos materiales las retienen mejor que otros.<br><br>
        <em>💡 Tip científico:</em> En electrostática, casi todo se explica con una sola pregunta: <strong>¿el objeto ganó o perdió electrones?</strong></p>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a analizar las <strong>fuerzas eléctricas</strong>, explicando cuándo un cuerpo está <strong>cargado o neutro</strong>, diferenciando los <strong>métodos de electrización</strong> (fricción, contacto e inducción) y distinguiendo entre <strong>conductores y aislantes</strong>.'
    },
    {
      type:'teach',
      minutes:8,
      title:'Cargas eléctricas: la electricidad que no viaja por cables',
      genre:'Científico · Conceptual',
      wordCount:'~380 palabras',
      html:`
        <h3>Cargas eléctricas: la electricidad que no viaja por cables</h3>
        <p>¿Alguna vez, al tocar el pomo metálico de una puerta después de caminar sobre una alfombra, sentiste una pequeña descarga? ¿O notaste que un globo frotado contra tu cabello hace que este se erice? Ambos fenómenos son ejemplos de <strong>electrostática</strong>: cargas eléctricas que se acumulan en la superficie de un objeto, sin fluir de manera continua como en un circuito.</p>
        <p>Toda la materia está formada por átomos, y estos contienen partículas con carga eléctrica: los protones (carga positiva) y los <span class="vhl" title="Partículas con carga eléctrica negativa que pueden transferirse de un material a otro">electrones</span> (carga negativa). En condiciones normales, un objeto tiene la misma cantidad de cargas positivas y negativas, por lo que decimos que está eléctricamente neutro. Sin embargo, cuando un objeto gana o pierde electrones, queda cargado: si gana electrones, su carga neta es negativa; si los pierde, su carga neta es positiva. A este proceso de cargar un objeto se le llama <span class="vhl" title="Proceso mediante el cual un objeto neutro adquiere carga eléctrica, ganando o perdiendo electrones">electrización</span>.</p>
        <p>Existen tres métodos principales de electrización. Por <strong>frotación</strong> (o fricción): al frotar dos materiales distintos, como un globo y un paño de lana, los electrones se transfieren de un material a otro. Por <strong>contacto</strong>: cuando un objeto cargado toca a otro neutro, parte de su carga se transfiere directamente al segundo objeto. Por <strong>inducción</strong>: un objeto cargado se acerca a otro (sin tocarlo), y provoca que las cargas internas del segundo objeto se reorganicen, aunque no haya transferencia directa de electrones.</p>
        <p>Una vez que un objeto está cargado, sigue una regla fundamental: la <strong>ley de atracción y repulsión</strong>. Cargas del mismo signo se repelen (positivo con positivo, o negativo con negativo), mientras que cargas de signo distinto se atraen (positivo con negativo). Esta ley explica por qué el globo cargado atrae trocitos de papel neutros, o por qué los mechones de tu cabello, cargados todos con el mismo signo tras frotarse con el globo, se separan entre sí.</p>
        <p>No todos los materiales se electrizan ni conducen la electricidad de la misma forma. Los <span class="vhl" title="Material que permite que los electrones se muevan con facilidad a través de él, como los metales">conductores</span>, como los metales, permiten que los electrones se muevan con facilidad, por lo que rara vez retienen una carga localizada: esta se distribuye o se escapa hacia tierra. Los <span class="vhl" title="Material que dificulta el movimiento de los electrones, permitiendo que la carga se acumule en un punto específico">aislantes</span>, como el plástico, el vidrio o la goma, dificultan ese movimiento, lo que permite que las cargas se acumulen en un punto. Por eso los experimentos de electrostática suelen hacerse con materiales aislantes: retienen mucho mejor la carga.</p>`,
      vocab:[
        { word:'electrones', ctx:'"cuando un objeto gana o pierde electrones, queda cargado"',
          opts:['Partículas con carga eléctrica positiva ubicadas en el núcleo','Partículas con carga eléctrica negativa que pueden transferirse de un material a otro','Un tipo de material aislante','La unidad de medida de la corriente eléctrica'], c:1,
          def:'Partículas subatómicas con carga eléctrica negativa que pueden transferirse de un material a otro durante la electrización.', syn:'partículas de carga negativa', ant:'protones',
          ex:'Al frotar el globo contra la lana, millones de electrones se transfieren de un material al otro.' },
        { word:'electrización', ctx:'"A este proceso de cargar un objeto se le llama electrización."',
          opts:['El proceso de fabricar pilas y baterías','El movimiento de un imán cerca de un cable','Proceso mediante el cual un objeto neutro adquiere carga eléctrica','La medición de la temperatura de un objeto'], c:2,
          def:'Proceso mediante el cual un objeto neutro adquiere carga eléctrica, ganando o perdiendo electrones.', syn:'carga de un objeto, proceso de carga eléctrica', ant:'neutralización',
          ex:'La electrización por fricción es la más fácil de observar en la vida cotidiana.' },
        { word:'conductores', ctx:'"Los conductores, como los metales, permiten que los electrones se muevan con facilidad"',
          opts:['Materiales que dificultan el paso de la corriente eléctrica','Materiales que solo existen en estado líquido','Instrumentos para medir la carga eléctrica','Materiales que permiten que los electrones se muevan con facilidad a través de ellos'], c:3,
          def:'Materiales, como los metales, que permiten que los electrones se muevan con facilidad a través de ellos.', syn:'materiales conductivos', ant:'aislantes',
          ex:'El cobre es un excelente conductor, por eso se usa en los cables eléctricos.' },
        { word:'aislantes', ctx:'"Los aislantes, como el plástico, el vidrio o la goma, dificultan ese movimiento"',
          opts:['Materiales que dificultan el movimiento de los electrones, permitiendo que la carga se acumule','Materiales que generan electricidad por sí solos','Otro nombre para los metales','Materiales que solo se cargan por inducción'], c:0,
          def:'Materiales que dificultan el movimiento de los electrones, lo que permite que la carga eléctrica se acumule en un punto específico.', syn:'materiales no conductores', ant:'conductores',
          ex:'La goma de los mangos de las herramientas eléctricas es un aislante que protege de descargas.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Qué partícula del átomo tiene carga eléctrica negativa?',
          opts:['Los protones','Los electrones','Los neutrones','El núcleo completo'], c:1,
          hint:'Aparece en el segundo párrafo, cuando se explica de qué está formada la materia.',
          fb_ok:'✅ Correcto. El texto dice: "los electrones (carga negativa)".',
          fb_no:'❌ Revisa el segundo párrafo: "los electrones (carga negativa)". La respuesta correcta era la opción B.' },
        { q:'¿Cómo se llama el método de electrización en que se frotan dos materiales distintos entre sí?',
          opts:['Por inducción','Por contacto','Por conducción','Por frotación (fricción)'], c:3,
          hint:'Aparece en el tercer párrafo, es el primero de los tres métodos que se explican.',
          fb_ok:'✅ Exacto. El texto dice: "Por frotación (o fricción): al frotar dos materiales distintos... los electrones se transfieren."',
          fb_no:'❌ El texto lo indica así: "Por frotación (o fricción): al frotar dos materiales distintos... los electrones se transfieren." La correcta era la opción D.' },
        { q:'Según el texto, ¿qué ocurre cuando un objeto cargado se acerca a otro sin tocarlo?',
          opts:['No ocurre ningún efecto sobre el segundo objeto','El segundo objeto se vuelve automáticamente conductor','Las cargas internas del segundo objeto se reorganizan (inducción)','El primer objeto pierde toda su carga de inmediato'], c:2,
          hint:'Aparece en el tercer párrafo, en la descripción del método de inducción.',
          fb_ok:'✅ Bien leído. El texto dice: "un objeto cargado se acerca a otro (sin tocarlo), y provoca que las cargas internas del segundo objeto se reorganicen."',
          fb_no:'❌ El texto lo explica así: "un objeto cargado se acerca a otro (sin tocarlo), y provoca que las cargas internas del segundo objeto se reorganicen." La respuesta correcta era la opción C.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué los experimentos de electrostática suelen hacerse con materiales aislantes y no con conductores?',
          opts:['Porque los aislantes retienen la carga en un punto, mientras que en los conductores esta se distribuye o se escapa','Porque los conductores no pueden cargarse nunca','Porque los aislantes generan electricidad por sí mismos','Porque los conductores son siempre más pesados'], c:0,
          fb_ok:'✅ Excelente razonamiento. Como los conductores permiten que los electrones se muevan libremente, la carga se dispersa; los aislantes, en cambio, la mantienen concentrada donde se generó.',
          fb_no:'❌ Piensa en la diferencia entre conductor y aislante: en un conductor la carga se distribuye o escapa, en un aislante se queda concentrada. La respuesta correcta era la A.' },
        { q:'Si frotas dos globos con el mismo paño de lana y luego los acercas entre sí sin que se toquen, ¿qué esperarías que ocurra?',
          opts:['Que se atraigan fuertemente','Que se repelan, porque quedaron cargados con el mismo signo','Que no ocurra ningún efecto entre ellos','Que se vuelvan conductores automáticamente'], c:1,
          fb_ok:'✅ Correcto. Al frotarse con el mismo material, ambos globos ganan (o pierden) electrones de forma similar, quedando cargados con el mismo signo, y por la ley de atracción y repulsión, cargas iguales se repelen.',
          fb_no:'❌ Ambos globos se cargan con el mismo signo al frotarse con el mismo paño, y según la ley de atracción y repulsión, cargas iguales se repelen. La respuesta correcta era la B.' },
        { q:'¿Por qué tocar un pomo metálico después de caminar sobre una alfombra puede producir una pequeña descarga?',
          opts:['Porque el pomo genera electricidad por sí solo','Porque el metal siempre está cargado negativamente','Porque la alfombra transmite corriente eléctrica de la red domiciliaria','Porque tu cuerpo se cargó por fricción con la alfombra, y al tocar el conductor metálico la carga se transfiere de golpe'], c:3,
          fb_ok:'✅ Muy bien. Caminar sobre la alfombra (un aislante) electriza tu cuerpo por fricción; al tocar un conductor como el metal, esa carga acumulada se transfiere súbitamente, lo que sientes como una pequeña descarga.',
          fb_no:'❌ Caminar sobre la alfombra te electriza por fricción, y al tocar el metal (conductor) la carga se transfiere de golpe. La respuesta correcta era la D.' }
      ]
    },
    {
      type:'dnd-classify',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Clasifica los materiales según su comportamiento eléctrico',
      instructions:'Arrastra cada material (o haz clic y luego clic en la columna) según si es conductor o aislante de la electricidad.',
      colA:{label:'⚡ Conductores', key:'a'},
      colB:{label:'🛡️ Aislantes', key:'b'},
      items:[
        {t:'Cobre', cat:'a'},
        {t:'Plástico', cat:'b'},
        {t:'Vidrio', cat:'b'},
        {t:'Aluminio', cat:'a'},
        {t:'Agua con sales disueltas', cat:'a'},
        {t:'Madera seca', cat:'b'},
        {t:'Goma (caucho)', cat:'b'},
        {t:'Hierro', cat:'a'}
      ],
      order:[3,0,5,1,6,2,7,4]
    },
    {
      type:'match-pairs',
      minutes:6,
      skillTag:'organizacion',
      label:'Métodos de electrización',
      title:'Relaciona cada concepto con su descripción correcta',
      instructions:'Haz clic en un concepto (izquierda) y luego en la descripción que le corresponde (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        'Electrización por frotación',
        'Electrización por contacto',
        'Electrización por inducción',
        'Ley de atracción y repulsión'
      ],
      right:[
        'Un objeto cargado toca a otro neutro, transfiriéndole parte de su carga eléctrica',
        'Cargas del mismo signo se repelen y cargas de signo distinto se atraen',
        'Se transfieren electrones entre dos materiales distintos al frotarlos entre sí',
        'Un objeto cargado se acerca a otro sin tocarlo, reordenando sus cargas internas'
      ],
      pairs:[[0,2],[1,0],[2,3],[3,1]]
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Explica, usando al menos dos conceptos de esta guía (por ejemplo: electrones, electrización, conductor, aislante), por qué a veces sientes una pequeña descarga al tocar un pomo metálico en un día seco, pero casi nunca en un día lluvioso.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Esto ocurre porque...' o 'La diferencia entre un día seco y uno lluvioso es que...'",
      modelAnswer:`No hay una única respuesta correcta, pero una buena respuesta conecta al menos dos ideas de la guía.<br><br>
        <em>"En un día seco, el aire actúa casi como un aislante, por lo que las cargas que gano al caminar sobre la alfombra (electrización por fricción) no se escapan fácilmente y se acumulan en mi cuerpo. Al tocar un pomo metálico (un conductor), esa carga se transfiere de golpe por contacto, y siento la descarga. En un día lluvioso, el aire húmedo conduce mejor la electricidad, así que las cargas se van disipando poco a poco antes de acumularse."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe explicar el mecanismo (fricción + acumulación + transferencia por contacto), no solo describir el fenómeno.`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú diseñas un experimento!',
      intro:'Este ejercicio te pide aplicar lo aprendido a una situación experimental simple, tal como lo haría un científico.',
      prompt:'🎈 Diseña un experimento breve (3-4 líneas) usando un globo y trocitos pequeños de papel para demostrar la electrización por frotación. Describe qué materiales usarías, qué harías, y qué esperarías observar.',
      hint:'Recuerda: necesitas un material para frotar el globo (por ejemplo, tu cabello o un paño de lana), y debes explicar qué relación tiene con la transferencia de electrones.',
      placeholder:'Materiales: ... Procedimiento: ... Resultado esperado: ...',
      example:`<em>"Materiales: un globo inflado y un trozo de lana. Procedimiento: froto el globo contra la lana durante unos segundos y luego lo acerco, sin tocarlos, a varios trocitos pequeños de papel sobre una mesa. Resultado esperado: los trocitos de papel serán atraídos hacia el globo, porque al frotarlo este ganó electrones y quedó cargado negativamente, atrayendo el papel neutro."</em><br><br>
        ¿Notaste que el experimento usa exactamente los mismos conceptos que estudiaste: frotación, transferencia de electrones y ley de atracción?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te sorprendió sobre cómo funciona la electricidad estática?',
        '¿Qué estrategia usarás para recordar la diferencia entre conductor y aislante?'
      ]
    },
    { type:'report' }
  ]
};

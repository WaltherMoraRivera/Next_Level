const GUIDE_DATA = {
  id: 'matematicas-g3-traslaciones-rotaciones-reflexiones',
  subject: 'matematicas',
  subjectLabel: 'Matemática',
  subjectIcon: '📐',
  title: 'Traslaciones, rotaciones y reflexiones',
  examRef: 'Unidad 3 · OA13 · 2° semestre',
  nextGuideHint: 'Próxima guía: Componiendo transformaciones — simetría de polígonos y poliedros.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🪞 Mira un mosaico, una reja decorativa o el diseño de un piso ajedrezado: casi siempre están formados por una misma figura repetida una y otra vez, a veces deslizada, a veces girada, a veces reflejada como en un espejo. ¿Cómo describirías matemáticamente cada uno de esos movimientos, para que alguien pudiera reproducir exactamente el mismo patrón?',
      subPrompt:'Piensa: ¿deslizar una figura, girarla y reflejarla como un espejo son en realidad el mismo movimiento, o son movimientos distintos?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Deslizar, girar y reflejar una figura son tres movimientos distintos, cada uno con su propia herramienta matemática: la <strong>traslación</strong> se describe con un vector, la <strong>rotación</strong> con un centro y un ángulo, y la <strong>reflexión</strong> con un eje. En esta guía vas a aprender a identificar y describir cada uno con precisión.<br><br>
        <em>💡 Tip matemático:</em> Antes de describir un movimiento, pregúntate: <strong>¿la figura se deslizó, giró alrededor de un punto, o se volteó como en un espejo?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a describir la <strong>posición y el movimiento</strong> de figuras 2D, utilizando <strong>vectores para la traslación</strong>, <strong>puntos del plano para las rotaciones</strong>, y los <strong>ejes cartesianos como ejes de reflexión</strong>.'
    },
    {
      type:'teach',
      minutes:8,
      title:'Traslaciones, rotaciones y reflexiones: tres formas de mover una figura',
      genre:'Matemático · Conceptual',
      wordCount:'~360 palabras',
      html:`
        <h3>Traslaciones, rotaciones y reflexiones: tres formas de mover una figura</h3>
        <p>Cuando mueves una figura geométrica en el plano sin cambiar su forma ni su tamaño, existen tres movimientos básicos que puedes aplicar: traslación, rotación y reflexión. Cada uno se describe con una herramienta matemática distinta.</p>
        <p>La <span class="vhl" title="Movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación">traslación</span> es el movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación, manteniendo la misma distancia y dirección en todos sus puntos. Para describir una traslación con precisión, se usa un <span class="vhl" title="Herramienta matemática, representada como una flecha, que indica la dirección y la distancia exacta de un desplazamiento">vector</span>: una flecha que indica tanto la dirección como la distancia exacta del desplazamiento. Por ejemplo, el vector (5, 3) traslada cada punto de una figura 5 unidades hacia la derecha y 3 unidades hacia arriba.</p>
        <p>La <span class="vhl" title="Movimiento en que una figura gira alrededor de un punto fijo, describiendo un cierto ángulo">rotación</span> es el movimiento en que una figura gira alrededor de un punto fijo, llamado centro de rotación, describiendo un cierto ángulo (por ejemplo, 90°, 180° o 270°). A diferencia de la traslación, en la rotación cada punto de la figura mantiene la misma distancia al centro de rotación, pero cambia de posición angular alrededor de él. Los puntos del plano cartesiano permiten indicar con precisión cuál será el centro de una rotación.</p>
        <p>La <span class="vhl" title="Movimiento que produce una imagen espejo de la figura original respecto a un eje">reflexión</span>, en cambio, es el movimiento que produce una imagen espejo de la figura original, como si la reflejáramos en un espejo colocado sobre una línea llamada eje de reflexión. En el plano cartesiano, los ejes X e Y se usan frecuentemente como ejes de reflexión: al reflejar una figura sobre el eje Y, por ejemplo, cada punto conserva su misma altura, pero invierte su posición horizontal respecto al eje.</p>
        <p>Estas tres transformaciones se llaman isometrías, porque conservan tanto el tamaño como la forma de la figura original: solo cambia su posición u orientación en el plano. Se utilizan constantemente en el diseño de patrones decorativos, logotipos, mosaicos y obras de arte, donde la repetición ordenada de una misma figura mediante traslaciones, rotaciones y reflexiones genera composiciones visualmente armoniosas.</p>`,
      vocab:[
        { word:'traslación', ctx:'"La traslación es el movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación"',
          opts:['Movimiento que gira una figura alrededor de un punto fijo','Imagen espejo de una figura respecto a un eje','Una figura que conserva su tamaño pero no su forma','Movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación'], c:3,
          def:'Movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación, manteniendo la misma distancia y dirección en todos sus puntos.', syn:'desplazamiento', ant:'rotación',
          ex:'El vector (5, 3) describe una traslación de 5 unidades a la derecha y 3 hacia arriba.' },
        { word:'rotación', ctx:'"La rotación es el movimiento en que una figura gira alrededor de un punto fijo, llamado centro de rotación"',
          opts:['Movimiento en que una figura se desliza en línea recta','Movimiento que gira una figura alrededor de un punto fijo, describiendo un cierto ángulo','Una flecha que indica dirección y distancia','El eje sobre el cual se refleja una figura'], c:1,
          def:'Movimiento en que una figura gira alrededor de un punto fijo (centro de rotación), describiendo un cierto ángulo.', syn:'giro', ant:'traslación',
          ex:'Una rotación de 90° alrededor del origen cambia la orientación de la figura sin desplazarla.' },
        { word:'reflexión', ctx:'"La reflexión... es el movimiento que produce una imagen espejo de la figura original"',
          opts:['Movimiento que produce una imagen espejo de la figura original respecto a un eje','Movimiento que desliza una figura sin girarla','El centro alrededor del cual gira una figura','Una unidad de medida de ángulos'], c:0,
          def:'Movimiento que produce una imagen espejo de la figura original, respecto a una línea llamada eje de reflexión.', syn:'simetría axial', ant:'traslación',
          ex:'Al reflejar una figura sobre el eje Y, cada punto conserva su altura pero invierte su posición horizontal.' },
        { word:'vector', ctx:'"se usa un vector: una flecha que indica tanto la dirección como la distancia exacta del desplazamiento"',
          opts:['El punto fijo alrededor del cual gira una figura','El eje sobre el cual se refleja una figura','Herramienta matemática, representada como una flecha, que indica dirección y distancia de un desplazamiento','El ángulo que describe una rotación'], c:2,
          def:'Herramienta matemática, representada como una flecha, que indica la dirección y la distancia exacta de un desplazamiento.', syn:'flecha de desplazamiento', ant:'punto fijo',
          ex:'El vector (5, 3) traslada cada punto de una figura 5 unidades a la derecha y 3 hacia arriba.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'Según el texto, ¿qué es una traslación?',
          opts:['El movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación','Un movimiento que gira una figura alrededor de un punto','Una imagen espejo de la figura original','Un cambio en el tamaño de la figura'], c:0,
          hint:'Aparece en el segundo párrafo, en la definición de traslación.',
          fb_ok:'✅ Correcto. El texto dice: "el movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación".',
          fb_no:'❌ El texto lo define así: "el movimiento en que una figura se desliza en línea recta, sin girar ni cambiar de orientación". La respuesta correcta era la opción A.' },
        { q:'¿Qué herramienta matemática se usa para describir una traslación con precisión?',
          opts:['Un eje de reflexión','Un centro de rotación','Un ángulo de giro','Un vector'], c:3,
          hint:'Aparece en el segundo párrafo, justo después de definir la traslación.',
          fb_ok:'✅ Exacto. El texto dice: "se usa un vector: una flecha que indica tanto la dirección como la distancia exacta del desplazamiento".',
          fb_no:'❌ El texto lo señala así: "se usa un vector: una flecha que indica tanto la dirección como la distancia exacta del desplazamiento". La correcta era la opción D.' },
        { q:'Según el texto, ¿alrededor de qué gira una figura al aplicar una rotación?',
          opts:['Alrededor de otra figura idéntica','Alrededor de un punto fijo llamado centro de rotación','Alrededor de un eje de reflexión','Alrededor de un vector de traslación'], c:1,
          hint:'Aparece en el tercer párrafo, en la definición de rotación.',
          fb_ok:'✅ Bien leído. El texto dice: "una figura gira alrededor de un punto fijo, llamado centro de rotación".',
          fb_no:'❌ El texto lo explica así: "una figura gira alrededor de un punto fijo, llamado centro de rotación". La respuesta correcta era la opción B.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'Si aplicas el vector (2, -4) a una figura, ¿qué le ocurre?',
          opts:['Gira 2° alrededor de un punto fijo','Se refleja sobre el eje X','Se desplaza 2 unidades a la derecha y 4 unidades hacia abajo','No le ocurre ningún cambio de posición'], c:2,
          fb_ok:'✅ Correcto. Un vector (x, y) indica un desplazamiento horizontal de x unidades y vertical de y unidades; con y negativo, el desplazamiento vertical es hacia abajo.',
          fb_no:'❌ Un vector (x, y) indica desplazamiento horizontal y vertical; con (2, -4), la figura se desplaza 2 unidades a la derecha y 4 hacia abajo. La respuesta correcta era la C.' },
        { q:'¿Por qué la traslación, la rotación y la reflexión se llaman "isometrías"?',
          opts:['Porque siempre producen figuras más grandes que la original','Porque conservan el tamaño y la forma de la figura original, solo cambia su posición u orientación','Porque solo se pueden aplicar a triángulos','Porque requieren el uso de un compás y una regla'], c:1,
          fb_ok:'✅ Excelente. El texto explica que estas transformaciones "conservan tanto el tamaño como la forma de la figura original: solo cambia su posición u orientación en el plano".',
          fb_no:'❌ El texto explica que conservan el tamaño y la forma de la figura, solo cambia su posición u orientación. La respuesta correcta era la B.' },
        { q:'Si reflejas un punto sobre el eje Y, ¿qué le ocurre a su posición, según lo explicado en el texto?',
          opts:['Pierde su altura original y se mueve al centro del plano','Gira 90° alrededor del origen','Se desplaza siguiendo un vector de traslación','Conserva su misma altura, pero invierte su posición horizontal respecto al eje'], c:3,
          fb_ok:'✅ Muy bien. El texto explica que "al reflejar una figura sobre el eje Y... cada punto conserva su misma altura, pero invierte su posición horizontal respecto al eje".',
          fb_no:'❌ El texto explica que al reflejar sobre el eje Y, cada punto conserva su altura pero invierte su posición horizontal. La respuesta correcta era la D.' }
      ]
    },
    {
      type:'match-pairs',
      minutes:6,
      skillTag:'organizacion',
      label:'Transformaciones isométricas',
      title:'Relaciona cada concepto con su descripción correcta',
      instructions:'Haz clic en un concepto (izquierda) y luego en la descripción que le corresponde (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        'Traslación',
        'Rotación',
        'Reflexión',
        'Vector'
      ],
      right:[
        'Movimiento que gira una figura alrededor de un punto fijo',
        'Herramienta que indica dirección y distancia de un desplazamiento',
        'Movimiento que desliza una figura en línea recta sin girarla',
        'Imagen espejo de una figura respecto a un eje'
      ],
      pairs:[[0,2],[1,0],[2,3],[3,1]]
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Piensa en un mosaico, una reja decorativa o un patrón textil que hayas visto. Explica qué transformación o transformaciones (traslación, rotación o reflexión) crees que se usaron para crear ese patrón, y por qué.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que se usó una traslación porque...' o 'También podría ser una rotación porque...'",
      modelAnswer:`No hay una única respuesta correcta, pero una buena respuesta debe justificar la elección con una característica visual del patrón.<br><br>
        <em>"Pensé en las rejas de las ventanas de mi casa: tienen la misma figura de metal repetida horizontalmente muchas veces, siempre a la misma distancia y sin cambiar de orientación. Creo que se usó una traslación, porque cada copia de la figura se ve exactamente igual a la anterior, solo desplazada hacia el lado."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe conectar una transformación específica con una característica observable del patrón elegido (se repite sin girar → traslación; se repite girada → rotación; aparece invertida como espejo → reflexión).`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú diseñas un movimiento completo!',
      intro:'Este ejercicio te pide aplicar las tres transformaciones a una misma figura imaginaria, tal como lo haría un diseñador de patrones.',
      prompt:'🔺 Imagina un triángulo simple dibujado en el plano cartesiano. Describe: (1) un vector de traslación que podrías aplicarle, (2) un centro y un ángulo de rotación, y (3) un eje de reflexión, explicando brevemente qué le ocurriría al triángulo en cada caso.',
      hint:'Recuerda: la traslación necesita un vector (x, y), la rotación necesita un centro y un ángulo, y la reflexión necesita un eje (por ejemplo, el eje X o el eje Y).',
      placeholder:'Traslación: vector (...). Rotación: centro (...) y ángulo (...). Reflexión: eje (...).',
      example:`<em>"Traslación: aplicaría el vector (4, 2), por lo que el triángulo se desplazaría 4 unidades a la derecha y 2 hacia arriba, sin cambiar su forma ni orientación. Rotación: usaría como centro el origen (0,0) y un ángulo de 90°, con lo que el triángulo giraría un cuarto de vuelta alrededor de ese punto. Reflexión: usaría el eje Y, por lo que el triángulo aparecería como una imagen espejo, conservando su altura pero invirtiendo su posición horizontal."</em><br><br>
        ¿Notaste que cada transformación necesitó exactamente la herramienta que estudiaste: vector, centro más ángulo, y eje?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te costó distinguir entre traslación, rotación y reflexión?',
        '¿Qué estrategia usarás para recordar qué herramienta matemática corresponde a cada transformación?'
      ]
    },
    { type:'report' }
  ]
};

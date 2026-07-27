const GUIDE_DATA = {
  id: 'matematicas-g4-componiendo-transformaciones',
  subject: 'matematicas',
  subjectLabel: 'Matemática',
  subjectIcon: '📐',
  title: 'Componiendo transformaciones: simetría de polígonos',
  examRef: 'Unidad 3 · OA14 · 2° semestre',
  nextGuideHint: 'Próxima guía: Percentiles y cuartiles — cómo describir la posición de un dato dentro de un conjunto.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🕌 Observa un mandala, un mosaico árabe o el logo de una empresa con forma de estrella o flor: muchos de estos diseños se ven exactamente igual aunque los gires un cierto ángulo, o aunque los reflejes como en un espejo. ¿Cómo describirías matemáticamente esa propiedad de "verse igual" después de transformarlo?',
      subPrompt:'Piensa: ¿un diseño puede tener más de un tipo de simetría al mismo tiempo?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Esa propiedad de "verse igual" tiene nombre: <strong>simetría</strong>. Una figura puede tener simetría axial (se ve igual al reflejarla) y simetría rotacional (se ve igual al girarla un cierto ángulo) al mismo tiempo. En esta guía vas a aprender a identificar ambos tipos, y a componer transformaciones para entender diseños más complejos.<br><br>
        <em>💡 Tip matemático:</em> Antes de analizar una figura, pregúntate: <strong>¿existe una línea que la divida en mitades espejo? ¿Existe un ángulo de giro que la deje igual?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a componer <strong>rotaciones, traslaciones y reflexiones</strong> en el plano cartesiano, y a aplicar estas ideas a las <strong>simetrías de polígonos y poliedros</strong>, y a problemas geométricos relacionados con el arte.'
    },
    {
      type:'teach',
      minutes:8,
      title:'Componer transformaciones: cuando un movimiento no es suficiente',
      genre:'Matemático · Conceptual',
      wordCount:'~370 palabras',
      html:`
        <h3>Componer transformaciones: cuando un movimiento no es suficiente</h3>
        <p>Hasta ahora has visto la traslación, la rotación y la reflexión como movimientos independientes. Pero en el diseño de patrones, logotipos y obras de arte, es común aplicar más de una transformación seguida sobre la misma figura, para lograr efectos más complejos. A esto se le llama <span class="vhl" title="Aplicar una transformación sobre el resultado de otra transformación previa">componer transformaciones</span>: aplicar una transformación sobre el resultado de otra.</p>
        <p>Por ejemplo, si a un triángulo le aplicas primero una rotación de 90° alrededor del origen, y luego reflejas el resultado sobre el eje X, obtienes una figura final distinta a la que obtendrías si aplicaras esas mismas transformaciones en el orden inverso. Esto es clave: el orden en que se componen las transformaciones puede cambiar el resultado final, aunque la figura final siempre conserve el mismo tamaño y forma que la original, ya que cada transformación individual es una isometría.</p>
        <p>Componer transformaciones también permite entender la simetría de una figura. Se dice que un polígono tiene <span class="vhl" title="Propiedad de una figura que coincide exactamente consigo misma al reflejarla sobre una línea llamada eje de simetría">simetría axial</span> (o de reflexión) cuando existe al menos una línea —llamada eje de simetría— tal que, al reflejar la figura sobre esa línea, el resultado coincide exactamente con la figura original. Un cuadrado, por ejemplo, tiene cuatro ejes de simetría distintos.</p>
        <p>También existe la <span class="vhl" title="Propiedad de una figura que coincide exactamente consigo misma al rotarla un cierto ángulo menor a 360° alrededor de su centro">simetría rotacional</span>: una figura tiene este tipo de simetría cuando, al rotarla un cierto ángulo (menor a 360°) alrededor de su centro, el resultado coincide exactamente con la figura original. Un polígono regular de n lados siempre tiene simetría rotacional de 360°/n: un hexágono regular, por ejemplo, coincide consigo mismo cada 60° de rotación.</p>
        <p>Estas ideas no se limitan a figuras planas. Los <span class="vhl" title="Cuerpo geométrico tridimensional formado por caras poligonales, como el cubo o la pirámide">poliedros</span> —cuerpos geométricos tridimensionales formados por caras poligonales, como el cubo o la pirámide— también pueden tener ejes y planos de simetría, que se estudian componiendo transformaciones en el espacio de la misma forma en que se hace en el plano.</p>
        <p>El arte y el diseño aprovechan estas ideas constantemente: los mandalas, los mosaicos árabes y muchos logotipos modernos se construyen componiendo rotaciones y reflexiones repetidas veces, generando patrones con alta simetría que resultan visualmente armoniosos.</p>`,
      vocab:[
        { word:'transformación compuesta', ctx:'"A esto se le llama componer transformaciones: aplicar una transformación sobre el resultado de otra."',
          opts:['Una transformación que solo se puede aplicar a triángulos','El nombre de un polígono con muchos lados','Un tipo de eje de simetría','Aplicar una transformación sobre el resultado de otra transformación previa'], c:3,
          def:'Resultado de aplicar una transformación (traslación, rotación o reflexión) sobre el resultado de otra transformación previa.', syn:'composición de movimientos', ant:'transformación simple',
          ex:'Rotar un triángulo y luego reflejarlo es un ejemplo de transformación compuesta.' },
        { word:'simetría axial', ctx:'"Se dice que un polígono tiene simetría axial (o de reflexión) cuando existe al menos una línea... eje de simetría"',
          opts:['Propiedad de una figura que coincide exactamente consigo misma al reflejarla sobre un eje','Propiedad de una figura que coincide consigo misma al rotarla','El nombre del centro de una rotación','Una figura que no tiene ningún tipo de simetría'], c:0,
          def:'Propiedad de una figura que coincide exactamente consigo misma al reflejarla sobre una línea llamada eje de simetría.', syn:'simetría de reflexión', ant:'simetría rotacional',
          ex:'Un cuadrado tiene cuatro ejes de simetría axial.' },
        { word:'simetría rotacional', ctx:'"También existe la simetría rotacional: una figura tiene este tipo de simetría cuando, al rotarla un cierto ángulo... coincide exactamente con la figura original"',
          opts:['El nombre de un polígono irregular','Propiedad de una figura que coincide exactamente consigo misma al rotarla un cierto ángulo menor a 360°','Otro nombre para el eje de simetría','La cantidad de lados de un polígono regular'], c:1,
          def:'Propiedad de una figura que coincide exactamente consigo misma al rotarla un cierto ángulo (menor a 360°) alrededor de su centro.', syn:'simetría de giro', ant:'simetría axial',
          ex:'Un hexágono regular tiene simetría rotacional cada 60°.' },
        { word:'poliedros', ctx:'"Los poliedros —cuerpos geométricos tridimensionales formados por caras poligonales, como el cubo o la pirámide—"',
          opts:['Un tipo de transformación compuesta','Otro nombre para los polígonos regulares','Cuerpo geométrico tridimensional formado por caras poligonales','El eje de simetría de una figura 3D'], c:2,
          def:'Cuerpo geométrico tridimensional formado por caras poligonales, como el cubo o la pirámide.', syn:'cuerpo geométrico 3D', ant:'polígono (figura 2D)',
          ex:'El cubo es un poliedro con varios planos de simetría.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'Según el texto, ¿qué significa "componer transformaciones"?',
          opts:['Dibujar una figura desde cero','Aplicar una transformación sobre el resultado de otra','Medir el tamaño de una figura','Calcular el área de un polígono'], c:1,
          hint:'Aparece en el segundo párrafo, en la definición de transformación compuesta.',
          fb_ok:'✅ Correcto. El texto dice: "componer transformaciones: aplicar una transformación sobre el resultado de otra".',
          fb_no:'❌ El texto lo define así: "componer transformaciones: aplicar una transformación sobre el resultado de otra". La respuesta correcta era la opción B.' },
        { q:'¿Cuántos ejes de simetría tiene un cuadrado, según el texto?',
          opts:['Dos','Tres','Cuatro','Ninguno'], c:2,
          hint:'Aparece en el tercer párrafo, como ejemplo de simetría axial.',
          fb_ok:'✅ Exacto. El texto dice: "Un cuadrado, por ejemplo, tiene cuatro ejes de simetría distintos".',
          fb_no:'❌ El texto lo señala así: "Un cuadrado, por ejemplo, tiene cuatro ejes de simetría distintos". La correcta era la opción C.' },
        { q:'Según el texto, ¿cada cuántos grados de rotación un hexágono regular coincide consigo mismo?',
          opts:['30°','90°','120°','60°'], c:3,
          hint:'Aparece en el cuarto párrafo, como ejemplo de simetría rotacional.',
          fb_ok:'✅ Bien leído. El texto dice: "un hexágono regular, por ejemplo, coincide consigo mismo cada 60° de rotación".',
          fb_no:'❌ El texto lo explica así: "un hexágono regular... coincide consigo mismo cada 60° de rotación". La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué el orden en que se componen dos transformaciones puede cambiar el resultado final?',
          opts:['Porque cada transformación se aplica sobre el resultado de la anterior, así que cambiar el orden cambia sobre qué figura se aplica la segunda transformación','Porque las transformaciones dejan de ser isometrías si se cambia el orden','Porque solo la reflexión depende del orden en que se aplique','En realidad el orden nunca afecta el resultado final'], c:0,
          fb_ok:'✅ Excelente razonamiento. Como cada transformación se aplica sobre el resultado de la anterior, invertir el orden cambia la figura intermedia sobre la que actúa la segunda transformación, cambiando el resultado final.',
          fb_no:'❌ Cada transformación se aplica sobre el resultado de la anterior, así que cambiar el orden cambia la figura intermedia y, con ella, el resultado final. La respuesta correcta era la A.' },
        { q:'Si un polígono regular tiene 8 lados (octógono regular), ¿cada cuántos grados de rotación coincidirá consigo mismo?',
          opts:['22,5°','90°','36°','45°'], c:3,
          fb_ok:'✅ Correcto. Aplicando 360° ÷ 8 lados = 45°, el octógono regular coincide consigo mismo cada 45° de rotación.',
          fb_no:'❌ Aplicando 360° ÷ 8 lados = 45°. La respuesta correcta era la D.' },
        { q:'¿Por qué, aunque compongas varias transformaciones seguidas, la figura final sigue teniendo el mismo tamaño y forma que la figura original?',
          opts:['Porque el tamaño y la forma nunca cambian en ningún tipo de figura geométrica','Porque cada transformación individual (traslación, rotación, reflexión) es una isometría, y componer isometrías produce otra isometría','Porque las transformaciones compuestas solo se pueden aplicar a polígonos regulares','Porque la simetría rotacional cancela cualquier cambio de tamaño'], c:1,
          fb_ok:'✅ Muy bien. Como cada transformación individual conserva tamaño y forma (isometría), componer varias de ellas también produce una isometría, conservando ambas propiedades en el resultado final.',
          fb_no:'❌ Cada transformación individual es una isometría, y componer isometrías produce otra isometría, conservando tamaño y forma. La respuesta correcta era la B.' }
      ]
    },
    {
      type:'dnd-sequence',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Ordena los pasos para componer dos transformaciones',
      instructions:'Ordena estos pasos para aplicar correctamente una rotación de 90° seguida de una reflexión sobre el eje X a un triángulo. Arrastra cada tarjeta o haz clic para seleccionarla y luego clic en el espacio.',
      items:[
        'Ubicar el triángulo original en el plano cartesiano',
        'Aplicar la rotación de 90° alrededor del origen, obteniendo una figura intermedia',
        'Tomar esa figura intermedia (ya rotada) como punto de partida para el siguiente paso',
        'Aplicar la reflexión sobre el eje X a la figura intermedia, obteniendo la figura final',
        'Comparar la figura final con la original para verificar que conservó su tamaño y forma'
      ],
      order:[3,1,4,0,2]
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Piensa en un mandala, un logotipo o un mosaico con alta simetría que hayas visto. Explica si crees que tiene simetría axial, simetría rotacional, o ambas al mismo tiempo, y por qué.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que tiene simetría axial porque...' o 'También tiene simetría rotacional porque...'",
      modelAnswer:`No hay una única respuesta correcta, pero una buena respuesta debe justificar cada tipo de simetría con una observación concreta del diseño elegido.<br><br>
        <em>"Pensé en un mandala con forma de flor de 6 pétalos. Creo que tiene simetría rotacional, porque si lo giro 60° (360° dividido en 6 pétalos), se ve exactamente igual. También creo que tiene simetría axial, porque puedo trazar una línea que pase por el centro de cada pétalo y su opuesto, y ambos lados se ven como reflejo uno del otro."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe explicar por separado por qué existe (o no) cada tipo de simetría en el diseño elegido.`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú analizas la simetría de un polígono!',
      intro:'Este ejercicio te pide aplicar el análisis de simetría a un polígono regular de tu elección, tal como lo haría un diseñador o un matemático.',
      prompt:'⭐ Elige un polígono regular (triángulo equilátero, cuadrado, pentágono regular o hexágono regular). Determina cuántos ejes de simetría tiene y cada cuántos grados tiene simetría rotacional. Muestra tu razonamiento.',
      hint:'Recuerda: un polígono regular de n lados tiene n ejes de simetría, y simetría rotacional de 360°/n.',
      placeholder:'Elegí: ... Ejes de simetría: ... Simetría rotacional: ...',
      example:`<em>"Elegí el pentágono regular (5 lados). Ejes de simetría: tiene 5 ejes de simetría, uno por cada vértice hacia el punto medio del lado opuesto. Simetría rotacional: aplicando 360° ÷ 5 = 72°, el pentágono regular coincide consigo mismo cada 72° de rotación."</em><br><br>
        ¿Notaste que el razonamiento sigue la misma regla que la guía: n ejes de simetría y 360°/n de simetría rotacional para cualquier polígono regular de n lados?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te costó entender sobre componer transformaciones o sobre la simetría de una figura?',
        '¿Qué estrategia usarás para recordar la diferencia entre simetría axial y simetría rotacional?'
      ]
    },
    { type:'report' }
  ]
};

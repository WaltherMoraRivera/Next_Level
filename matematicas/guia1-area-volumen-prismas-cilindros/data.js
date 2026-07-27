const GUIDE_DATA = {
  id: 'matematicas-g1-area-volumen-prismas-cilindros',
  subject: 'matematicas',
  subjectLabel: 'Matemática',
  subjectIcon: '📐',
  title: 'Área de superficie y volumen de prismas y cilindros',
  examRef: 'Unidad 3 · OA11 · 2° semestre',
  nextGuideHint: 'Próxima guía: El teorema de Pitágoras — cómo calcular lados desconocidos en triángulos rectángulos.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🎁 Cuando piensas en una caja de regalo, puedes hacerte dos preguntas muy distintas: ¿cuánto papel de regalo necesito para forrarla completamente? y ¿cuánta agua, arroz o cualquier otro material cabría dentro de ella? Aunque hablamos de la misma caja, estas dos preguntas no se responden con el mismo cálculo. ¿Por qué?',
      subPrompt:'Piensa: ¿una pregunta se refiere a la superficie externa, y la otra al espacio interior?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Forrar la caja depende del <strong>área de superficie</strong> (la suma de las áreas de todas sus caras); llenarla depende del <strong>volumen</strong> (el espacio que ocupa por dentro). Son cálculos relacionados, pero conceptualmente distintos, y en esta guía vas a aprender a calcular ambos para prismas y cilindros.<br><br>
        <em>💡 Tip matemático:</em> Antes de resolver cualquier problema de este tipo, pregúntate primero: <strong>¿me piden forrar (área) o llenar (volumen)?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a desarrollar y aplicar las <strong>fórmulas para calcular el área de superficie y el volumen</strong> de prismas rectos con diferentes bases y de cilindros, resolviendo problemas geométricos y de la vida diaria.'
    },
    {
      type:'teach',
      minutes:8,
      title:'Área de superficie y volumen: dos preguntas distintas sobre una misma figura',
      genre:'Matemático · Conceptual',
      wordCount:'~370 palabras',
      html:`
        <h3>Área de superficie y volumen: dos preguntas distintas sobre una misma figura</h3>
        <p>Cuando piensas en una caja de regalo, puedes hacerte dos preguntas muy distintas: ¿cuánto papel de regalo necesito para forrarla completamente? y ¿cuánta agua, arroz o cualquier otro material cabe dentro de ella? La primera pregunta se refiere al área de superficie; la segunda, al volumen.</p>
        <p>El <span class="vhl" title="Suma de las áreas de todas las caras o superficies externas de un cuerpo geométrico">área de superficie</span> de un cuerpo geométrico es la suma de las áreas de todas sus caras o superficies externas. Para calcularla en un prisma recto, resulta muy útil imaginar su <span class="vhl" title="Figura que resulta de desplegar todas las caras de un cuerpo geométrico sobre un plano">red</span>: si desplegamos todas las caras del prisma sobre un plano, como si lo abriéramos y lo aplanáramos, podemos calcular el área de cada cara por separado y luego sumarlas. Por ejemplo, un prisma rectangular tiene 6 caras rectangulares (agrupadas en 3 pares iguales), mientras que un cilindro, al desplegarse, muestra dos círculos (las bases) y un rectángulo (la superficie lateral, cuyo ancho es la circunferencia de la base).</p>
        <p>El <span class="vhl" title="Medida del espacio que ocupa un cuerpo en su interior">volumen</span>, en cambio, mide cuánto espacio ocupa el cuerpo en su interior. Para prismas rectos y cilindros, el volumen siempre se calcula multiplicando el <span class="vhl" title="Área de la base de un prisma o cilindro, usada para calcular su volumen">área basal</span> (el área de la base) por la altura del cuerpo: Volumen = Área basal × altura. Esta fórmula funciona para cualquier prisma recto, sin importar la forma de su base (rectangular, triangular, etc.), y también para el cilindro, cuya base es un círculo, por lo que su área basal se calcula como π por el radio al cuadrado.</p>
        <p>Esta idea de "área basal por altura" tiene su origen en el cubo: si apilas capas idénticas de cubos pequeños hasta llegar a la altura deseada, el volumen total es exactamente el área de una capa (la base) multiplicada por el número de capas (la altura). Esa misma lógica se extiende a cualquier prisma o cilindro, sin importar cuán compleja sea la forma de su base.</p>
        <p>Estas fórmulas no son solo ejercicios de papel: se usan para calcular cuánta pintura se necesita para cubrir un estanque cilíndrico, cuánto material se necesita para fabricar un envase, o cuánta agua cabe en una piscina con forma de prisma rectangular.</p>`,
      vocab:[
        { word:'área de superficie', ctx:'"El área de superficie de un cuerpo geométrico es la suma de las áreas de todas sus caras o superficies externas."',
          opts:['El espacio que ocupa un cuerpo en su interior','Suma de las áreas de todas las caras o superficies externas de un cuerpo geométrico','La altura de un prisma o cilindro','El radio de la base de un cilindro'], c:1,
          def:'Suma de las áreas de todas las caras o superficies externas de un cuerpo geométrico.', syn:'superficie total', ant:'volumen',
          ex:'Para saber cuánto papel de regalo necesitas, debes calcular el área de superficie de la caja.' },
        { word:'red', ctx:'"resulta muy útil imaginar su red: si desplegamos todas las caras del prisma sobre un plano"',
          opts:['El nombre de la fórmula del volumen','Otro nombre para el área basal','Figura que resulta de desplegar todas las caras de un cuerpo geométrico sobre un plano','La cantidad de caras que tiene un prisma'], c:2,
          def:'Figura que resulta de desplegar todas las caras de un cuerpo geométrico sobre un plano, útil para calcular su área de superficie.', syn:'despliegue, desarrollo plano', ant:'cuerpo geométrico armado',
          ex:'Al dibujar la red de un cilindro, aparecen dos círculos y un rectángulo.' },
        { word:'volumen', ctx:'"El volumen... mide cuánto espacio ocupa el cuerpo en su interior."',
          opts:['La suma de las áreas de las caras de un cuerpo','La cantidad de vértices de un prisma','Medida del espacio que ocupa un cuerpo en su interior','El perímetro de la base de un prisma'], c:2,
          def:'Medida del espacio que ocupa un cuerpo geométrico en su interior.', syn:'capacidad, espacio interior', ant:'área de superficie',
          ex:'El volumen de una piscina indica cuánta agua puede contener.' },
        { word:'área basal', ctx:'"el volumen siempre se calcula multiplicando el área basal (el área de la base) por la altura"',
          opts:['El área de la base de un prisma o cilindro, usada para calcular su volumen','El área total de todas las caras laterales','La distancia entre las dos bases de un prisma','El área de superficie de un cilindro'], c:0,
          def:'Área de la base de un prisma o cilindro, usada junto con la altura para calcular su volumen.', syn:'área de la base', ant:'área lateral',
          ex:'En un cilindro, el área basal se calcula como π por el radio al cuadrado.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Qué mide el área de superficie de un cuerpo geométrico?',
          opts:['El espacio que ocupa el cuerpo por dentro','La suma de las áreas de todas sus caras o superficies externas','Solo el área de la base del cuerpo','La altura del cuerpo geométrico'], c:1,
          hint:'Aparece en el segundo párrafo, en la definición de área de superficie.',
          fb_ok:'✅ Correcto. El texto dice: "es la suma de las áreas de todas sus caras o superficies externas".',
          fb_no:'❌ El texto lo define así: "es la suma de las áreas de todas sus caras o superficies externas". La respuesta correcta era la opción B.' },
        { q:'Según el texto, ¿qué fórmula general sirve para calcular el volumen de cualquier prisma recto o cilindro?',
          opts:['Volumen = perímetro × altura','Volumen = área de superficie × 2','Volumen = radio × altura','Volumen = área basal × altura'], c:3,
          hint:'Aparece en el tercer párrafo, en la fórmula general del volumen.',
          fb_ok:'✅ Exacto. El texto dice: "Volumen = Área basal × altura".',
          fb_no:'❌ El texto lo indica así: "Volumen = Área basal × altura". La correcta era la opción D.' },
        { q:'Un prisma rectangular tiene un área basal de 20 cm² y una altura de 5 cm. Aplicando la fórmula del texto, ¿cuál es su volumen?',
          opts:['25 cm³','15 cm³','4 cm³','100 cm³'], c:3,
          hint:'Recuerda la fórmula: Volumen = Área basal × altura. Multiplica 20 × 5.',
          fb_ok:'✅ Bien calculado. Volumen = 20 cm² × 5 cm = 100 cm³.',
          fb_no:'❌ Aplicando Volumen = Área basal × altura: 20 cm² × 5 cm = 100 cm³. La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'Un cilindro tiene un área basal de 12,56 cm² y una altura de 10 cm. ¿Cuál es su volumen?',
          opts:['22,56 cm³','1,256 cm³','12,56 cm³','125,6 cm³'], c:3,
          fb_ok:'✅ Correcto. Volumen = área basal × altura = 12,56 cm² × 10 cm = 125,6 cm³.',
          fb_no:'❌ Volumen = área basal × altura = 12,56 cm² × 10 cm = 125,6 cm³. La respuesta correcta era la D.' },
        { q:'¿Por qué la fórmula "Volumen = área basal × altura" funciona tanto para un prisma de base triangular como para un cilindro, a pesar de que sus bases tienen formas distintas?',
          opts:['Porque cualquier cuerpo se puede pensar como capas apiladas iguales a su base, multiplicadas por la cantidad de capas (la altura), sin importar la forma de esa base','Porque en realidad todas las bases son círculos disfrazados','Porque el volumen no depende realmente de la forma de la base','Porque la fórmula solo es una aproximación que no siempre es exacta'], c:0,
          fb_ok:'✅ Excelente razonamiento. Como el texto explica con el ejemplo del cubo, cualquier prisma o cilindro puede pensarse como capas idénticas a su base apiladas hasta la altura deseada, sin importar la forma de esa base.',
          fb_no:'❌ Cualquier cuerpo puede pensarse como capas iguales a su base, apiladas hasta la altura deseada, sin importar la forma de la base. La respuesta correcta era la A.' },
        { q:'Si quieres calcular cuánto papel de regalo necesitas para forrar completamente una caja, ¿qué debes calcular: el área de superficie o el volumen?',
          opts:['El volumen, porque el papel debe cubrir todo el interior','El área de superficie, porque el papel cubre las caras externas de la caja','Ambos por igual, ya que son el mismo cálculo','Ninguno de los dos; el papel de regalo no se calcula matemáticamente'], c:1,
          fb_ok:'✅ Correcto. El papel de regalo cubre la superficie externa de la caja, por lo que corresponde calcular el área de superficie.',
          fb_no:'❌ El papel de regalo cubre las caras externas, por lo que corresponde el área de superficie, no el volumen. La respuesta correcta era la B.' }
      ]
    },
    {
      type:'match-pairs',
      minutes:6,
      skillTag:'organizacion',
      label:'Fórmulas y conceptos',
      title:'Relaciona cada concepto con su descripción correcta',
      instructions:'Haz clic en un concepto (izquierda) y luego en la descripción que le corresponde (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        'Área de superficie de un prisma',
        'Volumen de un prisma o cilindro',
        'Red de un cilindro desplegado',
        'Área basal de un cilindro'
      ],
      right:[
        'Se calcula como área basal × altura',
        'Muestra dos círculos y un rectángulo',
        'Es la suma de las áreas de todas las caras del cuerpo',
        'Se calcula como π por el radio al cuadrado'
      ],
      pairs:[[0,2],[1,0],[2,1],[3,3]]
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Imagina que quieres calcular cuánta agua cabe en un balde de forma cilíndrica. Explica qué medidas necesitarías tomar y qué fórmula usarías, sin necesidad de hacer el cálculo exacto.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Primero mediría...' o 'Luego usaría la fórmula...'",
      modelAnswer:`No hay una única forma de redactarlo, pero una buena respuesta debe mencionar las medidas correctas y la fórmula adecuada.<br><br>
        <em>"Primero mediría el radio de la base circular del balde y también su altura. Con el radio, calcularía el área basal usando π por el radio al cuadrado. Finalmente, aplicaría la fórmula Volumen = área basal × altura para saber cuánta agua cabe dentro del balde."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe mencionar radio y altura como las medidas necesarias, y la fórmula área basal × altura.`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú aplicas la fórmula a un objeto real!',
      intro:'Este ejercicio te pide aplicar lo aprendido a un objeto real que puedas observar, tal como lo haría un ingeniero al estimar materiales.',
      prompt:'📦 Elige un objeto de tu casa con forma de prisma o cilindro (una caja de cereal, un tarro de conservas, etc.). Estima sus medidas aproximadas (en centímetros) y calcula su volumen aproximado, mostrando tu procedimiento.',
      hint:'Recuerda identificar primero la forma de la base (rectangular, circular, etc.) y luego aplicar Volumen = área basal × altura.',
      placeholder:'Elegí: ... Medidas estimadas: ... Cálculo: ... Volumen aproximado: ...',
      example:`<em>"Elegí un tarro de conservas cilíndrico. Estimé un radio de 4 cm y una altura de 11 cm. Primero calculé el área basal: π × 4² ≈ 3,14 × 16 ≈ 50,24 cm². Luego apliqué Volumen = área basal × altura: 50,24 cm² × 11 cm ≈ 552,64 cm³. Es decir, el tarro contiene aproximadamente 552,64 cm³ (o mililitros) de producto."</em><br><br>
        ¿Notaste que el procedimiento sigue exactamente los mismos pasos que la guía: identificar la base, calcular el área basal, y multiplicarla por la altura?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te costó entender sobre la diferencia entre área de superficie y volumen?',
        '¿Qué estrategia usarás para recordar la fórmula "Volumen = área basal × altura"?'
      ]
    },
    { type:'report' }
  ]
};

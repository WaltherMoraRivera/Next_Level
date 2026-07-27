const GUIDE_DATA = {
  id: 'matematicas-g2-teorema-pitagoras',
  subject: 'matematicas',
  subjectLabel: 'Matemática',
  subjectIcon: '📐',
  title: 'El teorema de Pitágoras',
  examRef: 'Unidad 3 · OA12 · 2° semestre',
  nextGuideHint: 'Próxima guía: Traslaciones, rotaciones y reflexiones — cómo describir el movimiento de figuras en el plano.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🪜 Imagina que necesitas apoyar una escalera contra una pared para llegar a una ventana, pero no puedes medir directamente la longitud de la escalera. Solo sabes que la base está a 3 metros de la pared, y que la ventana está a 4 metros de altura. ¿Cómo podrías calcular la longitud exacta de la escalera sin medirla directamente?',
      subPrompt:'Piensa: ¿la base, la pared y la escalera forman una figura geométrica conocida?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        La base, la pared y la escalera forman un <strong>triángulo rectángulo</strong>, y existe una relación matemática exacta entre sus tres lados: el <strong>teorema de Pitágoras</strong>. En esta guía vas a aprender a usarlo para calcular longitudes que no puedes medir directamente.<br><br>
        <em>💡 Tip matemático:</em> Antes de aplicar el teorema, identifica siempre primero cuál de los tres lados es la <strong>hipotenusa</strong> (el más largo, opuesto al ángulo recto).`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a explicar, de manera concreta, pictórica y simbólica, la <strong>validez del teorema de Pitágoras</strong> y a aplicarlo a la resolución de problemas geométricos y de la vida cotidiana.'
    },
    {
      type:'teach',
      minutes:8,
      title:'El teorema de Pitágoras: la relación secreta de los triángulos rectángulos',
      genre:'Matemático · Conceptual',
      wordCount:'~380 palabras',
      html:`
        <h3>El teorema de Pitágoras: la relación secreta de los triángulos rectángulos</h3>
        <p>Imagina que necesitas apoyar una escalera contra una pared para llegar a una ventana, pero no puedes medir directamente la distancia entre la base de la escalera y la pared, ni la altura exacta de la ventana. ¿Cómo podrías calcular la longitud exacta de la escalera que necesitas? La respuesta está en uno de los resultados más útiles de la geometría: el teorema de Pitágoras.</p>
        <p>Este teorema se aplica únicamente a los <span class="vhl" title="Triángulo que tiene un ángulo de 90°">triángulos rectángulos</span>: aquellos que tienen un ángulo recto (de 90°). En un triángulo rectángulo, los dos lados que forman el ángulo recto se llaman <span class="vhl" title="Los dos lados que forman el ángulo recto en un triángulo rectángulo">catetos</span>, y el lado opuesto a ese ángulo, siempre el más largo de los tres, se llama <span class="vhl" title="Lado más largo de un triángulo rectángulo, opuesto al ángulo recto">hipotenusa</span>.</p>
        <p>El <span class="vhl" title="Fórmula a² + b² = c², que relaciona los tres lados de un triángulo rectángulo">teorema de Pitágoras</span> establece que, en cualquier triángulo rectángulo, el cuadrado de la longitud de la hipotenusa es igual a la suma de los cuadrados de las longitudes de los catetos. Esto se escribe como la fórmula a² + b² = c², donde a y b representan los catetos, y c representa la hipotenusa. Esta relación es válida siempre que el triángulo tenga un ángulo recto, sin importar cuán grande o pequeño sea.</p>
        <p>Volviendo al ejemplo de la escalera: si la base de la escalera está a 3 metros de la pared, y la ventana está a 4 metros de altura, esos dos valores son los catetos del triángulo rectángulo que se forma. Aplicando el teorema, la hipotenusa (la longitud de la escalera) sería la raíz cuadrada de (3² + 4²), es decir, la raíz cuadrada de 25, que es exactamente 5 metros.</p>
        <p>El teorema de Pitágoras no solo sirve para resolver problemas geométricos abstractos: se usa constantemente en situaciones cotidianas, como calcular la diagonal de una pantalla de televisor a partir de su ancho y su alto, verificar si una esquina de una construcción forma realmente un ángulo recto, o calcular la distancia más corta entre dos puntos que no están alineados horizontal ni verticalmente.</p>`,
      vocab:[
        { word:'triángulo rectángulo', ctx:'"Este teorema se aplica únicamente a los triángulos rectángulos: aquellos que tienen un ángulo recto (de 90°)."',
          opts:['Triángulo que tiene un ángulo de 90°','Un triángulo con sus tres lados de igual longitud','Un triángulo sin ningún ángulo recto','El nombre del lado más largo de un triángulo'], c:0,
          def:'Triángulo que tiene un ángulo de 90° (ángulo recto).', syn:'triángulo con ángulo recto', ant:'triángulo oblicuángulo',
          ex:'La base, la pared y la escalera forman un triángulo rectángulo.' },
        { word:'catetos', ctx:'"los dos lados que forman el ángulo recto se llaman catetos"',
          opts:['El lado más largo de un triángulo rectángulo','Cualquiera de los tres lados de un triángulo','Los dos lados que forman el ángulo recto en un triángulo rectángulo','El nombre del ángulo recto en sí mismo'], c:2,
          def:'Los dos lados que forman el ángulo recto en un triángulo rectángulo.', syn:'lados menores del triángulo rectángulo', ant:'hipotenusa',
          ex:'En el ejemplo de la escalera, los catetos miden 3 y 4 metros.' },
        { word:'hipotenusa', ctx:'"el lado opuesto a ese ángulo, siempre el más largo de los tres, se llama hipotenusa"',
          opts:['Cualquiera de los dos lados que forman el ángulo recto','Lado más largo de un triángulo rectángulo, opuesto al ángulo recto','El ángulo recto de un triángulo rectángulo','La suma de los dos catetos'], c:1,
          def:'Lado más largo de un triángulo rectángulo, opuesto al ángulo recto.', syn:'lado mayor del triángulo rectángulo', ant:'cateto',
          ex:'En el ejemplo de la escalera, la hipotenusa (la escalera) mide 5 metros.' },
        { word:'teorema de Pitágoras', ctx:'"El teorema de Pitágoras establece que... el cuadrado de la longitud de la hipotenusa es igual a la suma de los cuadrados de las longitudes de los catetos."',
          opts:['Una regla que solo se aplica a triángulos equiláteros','El nombre de un tipo de ángulo','Un método para medir ángulos con transportador','Fórmula a² + b² = c², que relaciona los tres lados de un triángulo rectángulo'], c:3,
          def:'Relación matemática (a² + b² = c²) entre los tres lados de un triángulo rectángulo, donde a y b son los catetos y c es la hipotenusa.', syn:'relación pitagórica', ant:'-',
          ex:'Gracias al teorema de Pitágoras, se puede calcular la diagonal de una pantalla de televisor.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Qué nombre reciben los dos lados que forman el ángulo recto en un triángulo rectángulo?',
          opts:['Hipotenusas','Vértices','Catetos','Diagonales'], c:2,
          hint:'Aparece en el segundo párrafo, justo después de definir el triángulo rectángulo.',
          fb_ok:'✅ Correcto. El texto dice: "los dos lados que forman el ángulo recto se llaman catetos".',
          fb_no:'❌ El texto lo indica así: "los dos lados que forman el ángulo recto se llaman catetos". La respuesta correcta era la opción C.' },
        { q:'Según el texto, ¿cuál es la fórmula del teorema de Pitágoras?',
          opts:['a² + b² = c²','a + b = c','a × b = c','a² - b² = c²'], c:0,
          hint:'Aparece en el tercer párrafo, cuando se explica el teorema.',
          fb_ok:'✅ Exacto. El texto dice: "Esto se escribe como la fórmula a² + b² = c²".',
          fb_no:'❌ El texto lo señala así: "Esto se escribe como la fórmula a² + b² = c²". La correcta era la opción A.' },
        { q:'En el ejemplo de la escalera del texto, si los catetos miden 3 y 4 metros, ¿cuánto mide la hipotenusa?',
          opts:['7 metros','12 metros','25 metros','5 metros'], c:3,
          hint:'Aparece en el cuarto párrafo: la raíz cuadrada de (3² + 4²) es la raíz cuadrada de 25.',
          fb_ok:'✅ Bien leído. El texto dice: "la hipotenusa... sería la raíz cuadrada de (3² + 4²), es decir, la raíz cuadrada de 25, que es exactamente 5 metros".',
          fb_no:'❌ El texto lo explica así: la raíz cuadrada de (3² + 4²) = raíz cuadrada de 25 = 5 metros. La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'Si los catetos de un triángulo rectángulo miden 6 cm y 8 cm, ¿cuánto mide la hipotenusa?',
          opts:['14 cm','10 cm','48 cm','100 cm'], c:1,
          fb_ok:'✅ Correcto. Aplicando el teorema: 6² + 8² = 36 + 64 = 100, y la raíz cuadrada de 100 es 10 cm.',
          fb_no:'❌ Aplicando el teorema: 6² + 8² = 36 + 64 = 100, y la raíz cuadrada de 100 es 10 cm. La respuesta correcta era la B.' },
        { q:'Si la hipotenusa de un triángulo rectángulo mide 13 cm y uno de sus catetos mide 5 cm, ¿cuánto mide el otro cateto?',
          opts:['18 cm','8 cm','144 cm','12 cm'], c:3,
          fb_ok:'✅ Excelente. Despejando el teorema: 13² - 5² = 169 - 25 = 144, y la raíz cuadrada de 144 es 12 cm.',
          fb_no:'❌ Despejando el teorema: 13² - 5² = 169 - 25 = 144, y la raíz cuadrada de 144 es 12 cm. La respuesta correcta era la D.' },
        { q:'¿Por qué el teorema de Pitágoras solo se puede aplicar a triángulos rectángulos, y no a cualquier triángulo?',
          opts:['Porque los triángulos rectángulos son los únicos que tienen tres lados','Porque la fórmula a² + b² = c² depende específicamente de que exista un ángulo recto entre los catetos; en triángulos sin ángulo recto esa relación no se cumple','Porque el teorema en realidad funciona igual para cualquier tipo de triángulo','Porque los triángulos rectángulos son siempre más pequeños que los demás'], c:1,
          fb_ok:'✅ Muy bien. La relación a² + b² = c² es una consecuencia geométrica directa de tener un ángulo de 90° entre los dos catetos; sin ese ángulo recto, la relación deja de cumplirse.',
          fb_no:'❌ La fórmula a² + b² = c² depende de que exista un ángulo recto entre los catetos; sin él, la relación no se cumple. La respuesta correcta era la B.' }
      ]
    },
    {
      type:'match-pairs',
      minutes:6,
      skillTag:'organizacion',
      label:'Conceptos del teorema',
      title:'Relaciona cada concepto con su descripción correcta',
      instructions:'Haz clic en un concepto (izquierda) y luego en la descripción que le corresponde (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        'Catetos',
        'Hipotenusa',
        'Teorema de Pitágoras',
        'Triángulo rectángulo'
      ],
      right:[
        'Triángulo que tiene un ángulo de 90°',
        'Los dos lados que forman el ángulo recto',
        'Lado más largo, opuesto al ángulo recto',
        'Fórmula a² + b² = c² que relaciona los tres lados'
      ],
      pairs:[[0,1],[1,2],[2,3],[3,0]]
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Quieres comprar un televisor y solo conoces su ancho (80 cm) y su alto (45 cm), pero las tiendas anuncian el tamaño de las pantallas según la medida de su diagonal. Explica cómo usarías el teorema de Pitágoras para calcular esa diagonal, sin necesidad de dar el resultado exacto.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Primero identificaría...' o 'Luego aplicaría la fórmula...'",
      modelAnswer:`No hay una única forma de redactarlo, pero una buena respuesta debe identificar correctamente qué representa cada medida.<br><br>
        <em>"Primero identificaría que el ancho (80 cm) y el alto (45 cm) de la pantalla son los catetos del triángulo rectángulo que forma la diagonal, y que la diagonal misma es la hipotenusa. Luego aplicaría el teorema de Pitágoras: elevaría al cuadrado el ancho y el alto, sumaría esos dos resultados, y calcularía la raíz cuadrada de esa suma para obtener la medida de la diagonal."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe identificar el ancho y el alto como catetos, y la diagonal como hipotenusa.`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú aplicas el teorema a una situación real!',
      intro:'Este ejercicio te pide aplicar el teorema de Pitágoras a una situación real que puedas observar o imaginar en tu entorno.',
      prompt:'📏 Piensa en una situación real de tu casa o barrio donde se forme un triángulo rectángulo (una escalera apoyada en una pared, un cable tensor, un terreno en esquina, etc.). Describe las medidas que usarías y calcula la medida desconocida, mostrando tu procedimiento.',
      hint:'Recuerda identificar primero cuáles son los catetos y cuál es la hipotenusa antes de aplicar la fórmula a² + b² = c².',
      placeholder:'Situación: ... Catetos conocidos: ... Cálculo: ... Resultado: ...',
      example:`<em>"Situación: un cable tensor sostiene un poste, y está anclado en el suelo a 6 metros de la base del poste. El poste mide 8 metros de altura. Catetos: 6 m y 8 m. Cálculo: 6² + 8² = 36 + 64 = 100, y la raíz cuadrada de 100 es 10. Resultado: el cable tensor mide 10 metros."</em><br><br>
        ¿Notaste que el procedimiento sigue los mismos pasos que la guía: identificar los catetos, elevarlos al cuadrado, sumarlos y calcular la raíz cuadrada?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te costó entender sobre el teorema de Pitágoras?',
        '¿Qué estrategia usarás para recordar cuál lado es la hipotenusa y cuáles son los catetos?'
      ]
    },
    { type:'report' }
  ]
};

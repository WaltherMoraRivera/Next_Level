const GUIDE_DATA = {
  id: 'matematicas-repaso1-operatoria-algebraica',
  subject: 'matematicas',
  subjectLabel: 'Matemática',
  subjectIcon: '📐',
  title: 'Operatoria de expresiones algebraicas',
  examRef: 'Unidad 2 · OA6 · Repaso para prueba',
  nextGuideHint: 'Próxima guía de repaso: Factorización de expresiones algebraicas.',

  reference:{
    title:'Fórmulas de operatoria algebraica',
    html:`
      <h3>Términos semejantes</h3>
      <p>Se suman o restan cuando tienen la misma parte literal y el mismo exponente. Solo se opera con los coeficientes.</p>
      <div class="formula">5x² + 3x² = 8x²&nbsp;&nbsp;&nbsp;&nbsp;7xy − 2xy = 5xy</div>

      <h3>Multiplicación de monomios</h3>
      <p>Se multiplican los coeficientes y se suman los exponentes de las bases iguales.</p>
      <div class="formula">(3x)(4x) = 12x²&nbsp;&nbsp;&nbsp;&nbsp;(2x)(3x²y) = 6x³y</div>

      <h3>Propiedad distributiva (monomio × binomio)</h3>
      <div class="formula">a(b + c) = ab + ac</div>
      <div class="formula">2x(x + 5) = 2x² + 10x</div>

      <h3>Multiplicación de binomios</h3>
      <p>Cada término del primer binomio multiplica a cada término del segundo.</p>
      <div class="formula">(x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10</div>

      <h3>Productos notables</h3>
      <div class="formula">(a + b)² = a² + 2ab + b²</div>
      <div class="formula">(a − b)² = a² − 2ab + b²</div>
      <div class="formula">(a + b)(a − b) = a² − b²</div>

      <h3>Relación con el área</h3>
      <p>(a + b)² es el área de un cuadrado de lado (a + b): se descompone en un cuadrado de lado a (área a²), un cuadrado de lado b (área b²), y dos rectángulos de lados a y b (área ab cada uno) → a² + 2ab + b².</p>
    `
  },

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'✏️ Repaso rápido antes de tu prueba de álgebra: si alguien te dice que (x + 3)² es lo mismo que x² + 9, ¿le creerías? Al final de esta guía vas a poder explicar exactamente por qué eso es un error muy común, y a resolver muchos ejercicios similares con seguridad.',
      subPrompt:'Piensa: ¿qué significa realmente elevar un binomio al cuadrado?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        (x + 3)² <strong>no</strong> es x² + 9: es x² + 6x + 9. Este es uno de los errores más comunes en álgebra, y esta guía está diseñada para que practiques hasta dominarlo, junto con el resto de la operatoria algebraica que entra en tu prueba.<br><br>
        <em>💡 Tip para la prueba:</em> Si en algún ejercicio necesitas revisar una fórmula exacta, usa el botón <strong>📖 Fórmulas</strong> arriba — puedes consultarlo cuantas veces quieras y siempre volverás exactamente al ejercicio donde estabas.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a <strong>repasar y practicar</strong> las operaciones con expresiones algebraicas: reducir términos semejantes, multiplicar monomios y binomios, aplicar productos notables, y relacionarlos con el área de figuras.'
    },
    {
      type:'teach',
      minutes:6,
      title:'Repaso: expresiones algebraicas antes de la prueba',
      genre:'Matemático · Repaso',
      wordCount:'~210 palabras',
      html:`
        <h3>Repaso: expresiones algebraicas antes de la prueba</h3>
        <p>En una expresión algebraica combinamos números y letras (variables) mediante operaciones. Un término algebraico como 3x² tiene un coeficiente (3), una parte literal (x) y un exponente (2). Dos términos son <span class="vhl" title="Términos que tienen exactamente la misma parte literal y el mismo exponente">términos semejantes</span> cuando tienen exactamente la misma parte literal con el mismo exponente, como 5x² y -2x²: solo estos se pueden sumar o restar directamente entre sí, sumando o restando sus coeficientes.</p>
        <p>Un <span class="vhl" title="Expresión algebraica de un solo término">monomio</span> es una expresión algebraica de un solo término, como 4xy. Al multiplicar dos monomios, multiplicamos los coeficientes y sumamos los exponentes de las bases iguales. Al multiplicar un monomio por un <span class="vhl" title="Expresión algebraica de dos términos">binomio</span> (una expresión de dos términos), aplicamos la propiedad distributiva: el monomio multiplica a cada término del binomio por separado.</p>
        <p>Cuando multiplicamos dos binomios entre sí, cada término del primero debe multiplicar a cada término del segundo. Algunos de estos productos aparecen tan seguido que reciben un nombre especial: <span class="vhl" title="Producto entre expresiones algebraicas que sigue un patrón fijo y reconocible, como el cuadrado de un binomio">productos notables</span>, como el cuadrado de un binomio o la suma por su diferencia. Estas expresiones también se pueden representar como el área de un cuadrado o un rectángulo, lo que ayuda a visualizar por qué la fórmula funciona.</p>
        <p>Si en algún ejercicio necesitas recordar una fórmula exacta, puedes revisarla en cualquier momento tocando el botón 📖 Fórmulas, arriba, sin perder tu lugar en los ejercicios.</p>`,
      vocab:[
        { word:'términos semejantes', ctx:'"Dos términos son términos semejantes cuando tienen exactamente la misma parte literal con el mismo exponente"',
          opts:['Cualquier par de términos algebraicos','Un tipo de producto notable','Los términos de un binomio','Términos que tienen exactamente la misma parte literal y el mismo exponente'], c:3,
          def:'Términos que tienen exactamente la misma parte literal y el mismo exponente, por lo que se pueden sumar o restar directamente.', syn:'términos análogos', ant:'términos distintos',
          ex:'5x² y -2x² son términos semejantes; 5x² y 5x no lo son.' },
        { word:'monomio', ctx:'"Un monomio es una expresión algebraica de un solo término, como 4xy."',
          opts:['Una expresión de dos términos','El resultado de un producto notable','Una ecuación con una incógnita','Expresión algebraica de un solo término'], c:3,
          def:'Expresión algebraica de un solo término, como 4xy o 3x².', syn:'término algebraico único', ant:'binomio',
          ex:'4xy es un monomio con coeficiente 4 y parte literal xy.' },
        { word:'binomio', ctx:'"Al multiplicar un monomio por un binomio (una expresión de dos términos)"',
          opts:['Una expresión algebraica de dos términos','Un monomio elevado al cuadrado','El área de un cuadrado','Un tipo de coeficiente'], c:0,
          def:'Expresión algebraica formada por dos términos, como (x + 5).', syn:'expresión de dos términos', ant:'monomio',
          ex:'(x + 5) es un binomio con términos x y 5.' },
        { word:'producto notable', ctx:'"reciben un nombre especial: productos notables, como el cuadrado de un binomio o la suma por su diferencia"',
          opts:['Cualquier multiplicación entre números enteros','Producto entre expresiones algebraicas que sigue un patrón fijo y reconocible','Un tipo de término semejante','El resultado de reducir una expresión'], c:1,
          def:'Producto entre expresiones algebraicas que sigue un patrón fijo y reconocible, como (a+b)² o (a+b)(a-b).', syn:'producto especial', ant:'producto genérico',
          ex:'(x+3)² es un producto notable que se desarrolla como x² + 6x + 9.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:15,
      skillTag:'literal',
      title:'Practica con pistas disponibles: resuelve cada ejercicio',
      questions:[
        { q:'Reduce: 5x² + 3x² = ?',
          opts:['8x⁴','8x²','15x²','8x'], c:1,
          hint:'Son términos semejantes: suma solo los coeficientes (5 + 3) y conserva la parte literal x².',
          fb_ok:'✅ Correcto. 5x² + 3x² = (5+3)x² = 8x².',
          fb_no:'❌ Al sumar términos semejantes, solo se suman los coeficientes: 5x² + 3x² = 8x². La respuesta correcta era la opción B.' },
        { q:'Reduce: 7xy − 2xy = ?',
          opts:['9xy','5x²y²','5','5xy'], c:3,
          hint:'Son términos semejantes: resta los coeficientes (7 − 2) y conserva la parte literal xy.',
          fb_ok:'✅ Correcto. 7xy − 2xy = (7−2)xy = 5xy.',
          fb_no:'❌ Al restar términos semejantes, solo se restan los coeficientes: 7xy − 2xy = 5xy. La respuesta correcta era la opción D.' },
        { q:'Multiplica: (3x)(4x) = ?',
          opts:['7x','12x','12x²','7x²'], c:2,
          hint:'Multiplica los coeficientes (3×4) y suma los exponentes de x (1+1).',
          fb_ok:'✅ Correcto. (3x)(4x) = (3×4)(x¹⁺¹) = 12x².',
          fb_no:'❌ Multiplica los coeficientes y suma los exponentes: (3x)(4x) = 12x². La respuesta correcta era la opción C.' },
        { q:'Aplica la propiedad distributiva: 2x(x + 5) = ?',
          opts:['2x² + 5','2x + 10x','2x² + 10x','3x + 5'], c:2,
          hint:'El monomio 2x multiplica a cada término del binomio por separado: 2x·x y 2x·5.',
          fb_ok:'✅ Correcto. 2x(x + 5) = 2x·x + 2x·5 = 2x² + 10x.',
          fb_no:'❌ Aplica la distributiva a cada término: 2x·x + 2x·5 = 2x² + 10x. La respuesta correcta era la opción C.' },
        { q:'Desarrolla usando el producto notable (a+b)²: (x + 3)² = ?',
          opts:['x² + 9','x² + 6x + 9','x² + 3x + 9','2x + 6'], c:1,
          hint:'Usa la fórmula (a+b)² = a² + 2ab + b², con a=x y b=3. Puedes revisarla en 📖 Fórmulas.',
          fb_ok:'✅ Correcto. (x+3)² = x² + 2(x)(3) + 3² = x² + 6x + 9.',
          fb_no:'❌ Aplicando (a+b)² = a² + 2ab + b²: x² + 2(x)(3) + 9 = x² + 6x + 9. La respuesta correcta era la opción B.' },
        { q:'Desarrolla usando el producto notable (a+b)(a−b): (x − 2)(x + 2) = ?',
          opts:['x² − 4','x² + 4','x² − 4x + 4','x² − 2x − 4'], c:0,
          hint:'Usa la fórmula (a+b)(a−b) = a² − b², con a=x y b=2. Puedes revisarla en 📖 Fórmulas.',
          fb_ok:'✅ Correcto. (x−2)(x+2) = x² − 2² = x² − 4.',
          fb_no:'❌ Aplicando (a+b)(a−b) = a² − b²: x² − 2² = x² − 4. La respuesta correcta era la opción A.' }
      ]
    },
    {
      type:'quiz',
      minutes:15,
      skillTag:'inferencial',
      title:'Ahora sin pistas: ejercicios de mayor dificultad',
      questions:[
        { q:'Reduce y simplifica: 4x² + 3x − 2x² + 5x = ?',
          opts:['2x² + 8x','2x² + 2x','6x² + 8x','2x + 8x²'], c:0,
          fb_ok:'✅ Correcto. Agrupando términos semejantes: (4x²−2x²) + (3x+5x) = 2x² + 8x.',
          fb_no:'❌ Agrupa por separado los términos en x² y los términos en x: (4x²−2x²) + (3x+5x) = 2x² + 8x. La respuesta correcta era la A.' },
        { q:'Multiplica: (2x)(3x²y) = ?',
          opts:['5x³y','6x²y','5x²y','6x³y'], c:3,
          fb_ok:'✅ Correcto. (2x)(3x²y) = (2×3)(x¹⁺²)(y) = 6x³y.',
          fb_no:'❌ Multiplica coeficientes y suma exponentes de x: (2×3)(x¹⁺²)y = 6x³y. La respuesta correcta era la D.' },
        { q:'Desarrolla: 3x(2x² − 4x + 1) = ?',
          opts:['6x³ − 12x² + 3x','6x² − 12x + 3x','5x³ − 7x² + 3x','6x³ − 4x + 1'], c:0,
          fb_ok:'✅ Correcto. 3x multiplica a cada término: 3x·2x² − 3x·4x + 3x·1 = 6x³ − 12x² + 3x.',
          fb_no:'❌ Aplica la distributiva a los tres términos: 6x³ − 12x² + 3x. La respuesta correcta era la A.' },
        { q:'Desarrolla usando producto notable: (2x + 5)² = ?',
          opts:['4x² + 25','4x² + 20x + 25','2x² + 20x + 25','4x² + 10x + 25'], c:1,
          fb_ok:'✅ Correcto. (2x+5)² = (2x)² + 2(2x)(5) + 5² = 4x² + 20x + 25.',
          fb_no:'❌ Aplicando (a+b)² = a² + 2ab + b² con a=2x, b=5: 4x² + 20x + 25. La respuesta correcta era la B.' },
        { q:'Desarrolla: (x − 7)(x + 7) = ?',
          opts:['x² − 14x + 49','x² + 49','x² − 49','x² − 14'], c:2,
          fb_ok:'✅ Correcto. (x−7)(x+7) = x² − 7² = x² − 49.',
          fb_no:'❌ Aplicando (a+b)(a−b) = a² − b²: x² − 49. La respuesta correcta era la C.' },
        { q:'¿Qué expresión algebraica representa el área de un cuadrado de lado (x + 4)?',
          opts:['x² + 16','x + 4','x² + 8x + 16','x² + 4x + 16'], c:2,
          fb_ok:'✅ Correcto. El área de un cuadrado de lado (x+4) es (x+4)² = x² + 8x + 16.',
          fb_no:'❌ El área es (x+4)² = x² + 2(x)(4) + 4² = x² + 8x + 16. La respuesta correcta era la C.' }
      ]
    },
    {
      type:'match-pairs',
      minutes:8,
      skillTag:'organizacion',
      label:'Productos notables',
      title:'Relaciona cada expresión con su forma desarrollada',
      instructions:'Haz clic en una expresión (izquierda) y luego en su forma desarrollada (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        '(a + b)²',
        '(a − b)²',
        '(a + b)(a − b)',
        'a(b + c)'
      ],
      right:[
        'ab + ac',
        'a² − 2ab + b²',
        'a² − b²',
        'a² + 2ab + b²'
      ],
      pairs:[[0,3],[1,1],[2,2],[3,0]]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Usando el modelo de área de un cuadrado, explica por qué (x + 3)² NO es igual a x² + 9 (un error muy común), sino que es x² + 6x + 9.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Si dibujo un cuadrado de lado (x+3)...' o 'El área total se divide en...'",
      modelAnswer:`No hay una única forma de redactarlo, pero una buena respuesta debe usar la idea de área.<br><br>
        <em>"Si dibujo un cuadrado de lado (x+3), su área total no es solo un cuadrado de lado x (área x²) y uno de lado 3 (área 9): entre ambos quedan dos rectángulos de lados x y 3 (área 3x cada uno), que también forman parte del cuadrado grande. Por eso el resultado correcto suma esos dos rectángulos: x² + 3x + 3x + 9 = x² + 6x + 9, y no solo x² + 9."</em><br><br>
        Una buena respuesta debe mencionar que faltan los dos rectángulos intermedios (el término 2ab), no solo los dos cuadrados de las esquinas.`
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Ahora tú resuelves un ejercicio completo!',
      intro:'Este ejercicio combina varias operaciones seguidas, tal como podría aparecer en tu prueba.',
      prompt:'🧮 Resuelve mostrando todo tu procedimiento: desarrolla y simplifica (2x − 3)(x + 5) − (x − 1)².',
      hint:'Desarrolla cada producto por separado primero, y recién al final resta los resultados y reduce términos semejantes.',
      placeholder:'Paso 1: desarrollar (2x-3)(x+5) = ... Paso 2: desarrollar (x-1)² = ... Paso 3: restar y simplificar = ...',
      example:`<em>"Paso 1: (2x−3)(x+5) = 2x² + 10x − 3x − 15 = 2x² + 7x − 15. Paso 2: (x−1)² = x² − 2x + 1. Paso 3: (2x² + 7x − 15) − (x² − 2x + 1) = 2x² + 7x − 15 − x² + 2x − 1 = x² + 9x − 16."</em><br><br>
        ¿Notaste que el paso más importante es cambiar el signo de cada término del segundo paréntesis antes de reducir?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué tipo de ejercicio de esta guía sientes que todavía necesitas practicar más antes de la prueba?',
        '¿Qué fórmula te costó más recordar, y qué harás para memorizarla mejor?'
      ]
    },
    { type:'report' }
  ]
};

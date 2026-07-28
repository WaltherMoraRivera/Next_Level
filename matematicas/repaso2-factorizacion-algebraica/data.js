const GUIDE_DATA = {
  id: 'matematicas-repaso2-factorizacion-algebraica',
  subject: 'matematicas',
  subjectLabel: 'Matemática',
  subjectIcon: '📐',
  title: 'Factorización de expresiones algebraicas',
  examRef: 'Unidad 2 · OA6 · Repaso para prueba',
  nextGuideHint: 'Sigue repasando con tus apuntes de clase antes de la prueba. ¡Mucho éxito!',

  reference:{
    title:'Fórmulas de factorización',
    html:`
      <h3>1. Factor común</h3>
      <p>Si todos los términos comparten un mismo factor, se extrae fuera de un paréntesis.</p>
      <div class="formula">ax + ay = a(x + y)</div>
      <div class="formula">6x + 9 = 3(2x + 3)&nbsp;&nbsp;&nbsp;&nbsp;4x² + 8x = 4x(x + 2)</div>

      <h3>2. Diferencia de cuadrados</h3>
      <p>Un binomio de la forma a² − b² se factoriza como el producto de la suma por la diferencia.</p>
      <div class="formula">a² − b² = (a + b)(a − b)</div>
      <div class="formula">x² − 25 = (x + 5)(x − 5)&nbsp;&nbsp;&nbsp;&nbsp;9x² − 4 = (3x + 2)(3x − 2)</div>

      <h3>3. Trinomio cuadrado perfecto</h3>
      <p>El primer y el último término deben ser cuadrados perfectos, y el término del medio debe ser el doble producto de sus raíces.</p>
      <div class="formula">a² + 2ab + b² = (a + b)²</div>
      <div class="formula">a² − 2ab + b² = (a − b)²</div>
      <div class="formula">x² + 8x + 16 = (x + 4)²&nbsp;&nbsp;&nbsp;&nbsp;x² − 6x + 9 = (x − 3)²</div>

      <h3>Estrategia general</h3>
      <p>1) Busca primero un factor común en todos los términos. 2) Si quedan 2 términos con signo negativo entre cuadrados perfectos → diferencia de cuadrados. 3) Si quedan 3 términos y el del medio es el doble producto de las raíces del primero y el último → trinomio cuadrado perfecto.</p>
    `
  },

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🔍 x² + 5x + 6 se parece mucho a un trinomio cuadrado perfecto, pero no lo es. ¿Sabrías explicar por qué, y cómo se factoriza correctamente entonces? Al final de esta guía vas a poder reconocer con seguridad qué tipo de factorización aplicar en cada ejercicio.',
      subPrompt:'Piensa: ¿qué condición exacta debe cumplir el término del medio de un trinomio cuadrado perfecto?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        x² + 5x + 6 no es un trinomio cuadrado perfecto porque su término del medio (5x) no es el doble producto de las raíces de x² y 6 (que no es ni siquiera un cuadrado perfecto). Sin embargo, sí se puede factorizar de otra forma: (x+2)(x+3). Esta guía te va a ayudar a distinguir con seguridad los tres tipos de factorización que entran en tu prueba.<br><br>
        <em>💡 Tip para la prueba:</em> Si necesitas revisar una fórmula exacta, usa el botón <strong>📖 Fórmulas</strong> arriba — puedes consultarlo cuantas veces quieras y siempre volverás exactamente al ejercicio donde estabas.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a <strong>repasar y practicar</strong> la factorización de expresiones algebraicas: factor común, diferencia de cuadrados y trinomio cuadrado perfecto.'
    },
    {
      type:'teach',
      minutes:6,
      title:'Repaso: factorización antes de la prueba',
      genre:'Matemático · Repaso',
      wordCount:'~230 palabras',
      html:`
        <h3>Repaso: factorización antes de la prueba</h3>
        <p><span class="vhl" title="Proceso de encontrar los factores que, multiplicados, generan una expresión algebraica dada">Factorizar</span> una expresión algebraica es el proceso inverso a multiplicarla: en vez de partir de factores y llegar a un resultado desarrollado, partimos del resultado y buscamos qué factores lo generan.</p>
        <p>El primer paso siempre es buscar un <span class="vhl" title="Factor que comparten todos los términos de una expresión y que se puede extraer fuera de un paréntesis">factor común</span>: si todos los términos de la expresión comparten un mismo factor (un número, una variable, o ambos), se puede "sacar" ese factor fuera de un paréntesis. Por ejemplo, en 6x + 9, ambos términos son múltiplos de 3, así que se factoriza como 3(2x + 3).</p>
        <p>Si la expresión tiene la forma de una <span class="vhl" title="Binomio de la forma a²−b², que se factoriza como (a+b)(a−b)">diferencia de cuadrados</span> (a² − b²), se factoriza directamente como (a + b)(a − b): es el proceso inverso del producto notable (a+b)(a−b) = a² − b².</p>
        <p>Si la expresión tiene la forma de un <span class="vhl" title="Expresión de tres términos de la forma a²+2ab+b² o a²-2ab+b², que se factoriza como (a+b)² o (a-b)²">trinomio cuadrado perfecto</span> (a² + 2ab + b², o a² − 2ab + b²), se factoriza como (a + b)² o (a − b)² respectivamente: reconocer este patrón requiere verificar que el primer y el último término sean cuadrados perfectos, y que el término del medio sea el doble producto de sus raíces.</p>
        <p>Antes de decidir qué tipo de factorización aplicar, siempre revisa primero si existe un factor común; después, observa la cantidad de términos y su forma para identificar si es una diferencia de cuadrados o un trinomio cuadrado perfecto. Si necesitas repasar una fórmula exacta, puedes revisarla en cualquier momento tocando el botón 📖 Fórmulas, arriba.</p>`,
      vocab:[
        { word:'factorizar', ctx:'"Factorizar una expresión algebraica es el proceso inverso a multiplicarla"',
          opts:['Proceso de encontrar los factores que, multiplicados, generan una expresión dada','Sumar dos expresiones algebraicas','Reemplazar una variable por un número','Elevar una expresión al cuadrado'], c:0,
          def:'Proceso de encontrar los factores que, multiplicados entre sí, generan una expresión algebraica dada.', syn:'descomponer en factores', ant:'desarrollar (multiplicar)',
          ex:'Factorizar 6x + 9 da como resultado 3(2x + 3).' },
        { word:'factor común', ctx:'"El primer paso siempre es buscar un factor común: si todos los términos... comparten un mismo factor"',
          opts:['Factor que comparten todos los términos de una expresión y que se puede extraer fuera de un paréntesis','El resultado final de una factorización','El primer término de un binomio','Otro nombre para la diferencia de cuadrados'], c:0,
          def:'Factor que comparten todos los términos de una expresión, y que se puede extraer fuera de un paréntesis.', syn:'factor compartido', ant:'término independiente',
          ex:'En 4x² + 8x, el factor común es 4x, quedando 4x(x + 2).' },
        { word:'diferencia de cuadrados', ctx:'"Si la expresión tiene la forma de una diferencia de cuadrados (a² − b²)"',
          opts:['Un trinomio de tres términos positivos','Binomio de la forma a²−b², que se factoriza como (a+b)(a−b)','El cuadrado de un binomio','El resultado de sumar dos cuadrados perfectos'], c:1,
          def:'Binomio de la forma a² − b², que se factoriza como (a + b)(a − b).', syn:'resta de cuadrados', ant:'suma de cuadrados',
          ex:'x² − 25 es una diferencia de cuadrados que se factoriza como (x+5)(x−5).' },
        { word:'trinomio cuadrado perfecto', ctx:'"Si la expresión tiene la forma de un trinomio cuadrado perfecto (a² + 2ab + b²...)"',
          opts:['Cualquier expresión con tres términos','Un binomio elevado al cubo','Expresión de tres términos que se factoriza como (a+b)² o (a-b)²','Otro nombre para el factor común'], c:2,
          def:'Expresión de tres términos de la forma a²+2ab+b² o a²-2ab+b², que se factoriza como (a+b)² o (a-b)².', syn:'cuadrado de un binomio desarrollado', ant:'diferencia de cuadrados',
          ex:'x² + 8x + 16 es un trinomio cuadrado perfecto que se factoriza como (x+4)².' }
      ]
    },
    {
      type:'guided-practice',
      minutes:15,
      skillTag:'literal',
      title:'Practica con pistas disponibles: factoriza cada expresión',
      questions:[
        { q:'Factoriza extrayendo el factor común: 6x + 9 = ?',
          opts:['3(2x + 3)','2(3x + 4)','3(2x + 9)','6(x + 9)'], c:0,
          hint:'Busca el mayor número que divida a 6 y a 9 (es 3), y sácalo fuera del paréntesis.',
          fb_ok:'✅ Correcto. El factor común de 6x y 9 es 3: 6x + 9 = 3(2x + 3).',
          fb_no:'❌ El factor común de 6x y 9 es 3, así que 6x + 9 = 3(2x + 3). La respuesta correcta era la opción A.' },
        { q:'Factoriza extrayendo el factor común: 4x² + 8x = ?',
          opts:['4(x² + 2x)','4x(x + 2)','2x(2x + 4)','x(4x + 8)'], c:1,
          hint:'Busca el mayor factor común entre 4x² y 8x (incluyendo la variable x).',
          fb_ok:'✅ Correcto. El factor común de 4x² y 8x es 4x: 4x² + 8x = 4x(x + 2).',
          fb_no:'❌ El factor común de 4x² y 8x es 4x, así que 4x² + 8x = 4x(x + 2). La respuesta correcta era la opción B.' },
        { q:'Factoriza la diferencia de cuadrados: x² − 25 = ?',
          opts:['(x + 25)(x − 1)','(x − 5)²','(x + 5)(x − 5)','(x + 5)²'], c:2,
          hint:'Usa (a+b)(a−b) = a² − b², con a=x y b=5. Puedes revisarla en 📖 Fórmulas.',
          fb_ok:'✅ Correcto. x² − 25 = x² − 5² = (x + 5)(x − 5).',
          fb_no:'❌ Aplicando a² − b² = (a+b)(a−b) con a=x, b=5: (x+5)(x−5). La respuesta correcta era la opción C.' },
        { q:'Factoriza la diferencia de cuadrados: 9x² − 4 = ?',
          opts:['(3x + 4)(3x − 1)','(3x − 2)²','(9x + 2)(x − 2)','(3x + 2)(3x − 2)'], c:3,
          hint:'Identifica las raíces: √9x² = 3x, y √4 = 2. Aplica (a+b)(a−b).',
          fb_ok:'✅ Correcto. 9x² − 4 = (3x)² − 2² = (3x + 2)(3x − 2).',
          fb_no:'❌ Las raíces son 3x y 2: (3x)² − 2² = (3x + 2)(3x − 2). La respuesta correcta era la opción D.' },
        { q:'Factoriza el trinomio cuadrado perfecto: x² + 8x + 16 = ?',
          opts:['(x + 8)(x + 2)','(x + 16)²','(x + 4)(x − 4)','(x + 4)²'], c:3,
          hint:'Verifica: √x² = x, √16 = 4, y el doble producto 2(x)(4) = 8x coincide con el término del medio.',
          fb_ok:'✅ Correcto. x² + 8x + 16 = x² + 2(x)(4) + 4² = (x + 4)².',
          fb_no:'❌ Como √x²=x, √16=4, y 2(x)(4)=8x coincide con el término del medio: (x+4)². La respuesta correcta era la opción D.' },
        { q:'Factoriza el trinomio cuadrado perfecto: x² − 6x + 9 = ?',
          opts:['(x − 9)²','(x − 3)(x + 3)','(x + 3)²','(x − 3)²'], c:3,
          hint:'Verifica: √x² = x, √9 = 3, y el doble producto 2(x)(3) = 6x coincide (con signo negativo) con el término del medio.',
          fb_ok:'✅ Correcto. x² − 6x + 9 = x² − 2(x)(3) + 3² = (x − 3)².',
          fb_no:'❌ Como √x²=x, √9=3, y el término del medio es negativo: (x−3)². La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:15,
      skillTag:'inferencial',
      title:'Ahora sin pistas: ejercicios de mayor dificultad',
      questions:[
        { q:'Factoriza: 5x² + 15x = ?',
          opts:['5(x² + 3x)','5x(x + 3)','x(5x + 15)','5x(x + 15)'], c:1,
          fb_ok:'✅ Correcto. El factor común de 5x² y 15x es 5x: 5x² + 15x = 5x(x + 3).',
          fb_no:'❌ El factor común es 5x: 5x² + 15x = 5x(x + 3). La respuesta correcta era la B.' },
        { q:'Factoriza: 16x² − 49 = ?',
          opts:['(4x − 7)²','(16x + 49)(x − 1)','(4x + 7)(4x − 7)','(8x + 7)(2x − 7)'], c:2,
          fb_ok:'✅ Correcto. 16x² − 49 = (4x)² − 7² = (4x + 7)(4x − 7).',
          fb_no:'❌ Las raíces son 4x y 7: (4x)² − 7² = (4x + 7)(4x − 7). La respuesta correcta era la C.' },
        { q:'Factoriza: 4x² + 12x + 9 = ?',
          opts:['(4x + 9)²','(2x + 3)(2x − 3)','(2x + 9)²','(2x + 3)²'], c:3,
          fb_ok:'✅ Correcto. 4x² + 12x + 9 = (2x)² + 2(2x)(3) + 3² = (2x + 3)².',
          fb_no:'❌ Como √4x²=2x, √9=3, y 2(2x)(3)=12x coincide con el término del medio: (2x+3)². La respuesta correcta era la D.' },
        { q:'Factoriza completamente (requiere dos pasos): 2x² − 8 = ?',
          opts:['2(x + 2)(x − 2)','(2x + 4)(x − 2)','2(x − 4)²','(2x + 8)(x − 1)'], c:0,
          fb_ok:'✅ Correcto. Primero factor común: 2x² − 8 = 2(x² − 4); luego diferencia de cuadrados: 2(x + 2)(x − 2).',
          fb_no:'❌ Primero factor común: 2(x² − 4); luego diferencia de cuadrados: 2(x + 2)(x − 2). La respuesta correcta era la A.' },
        { q:'¿Cuál de estas expresiones NO es un trinomio cuadrado perfecto?',
          opts:['x² + 6x + 9','x² + 5x + 6','x² + 10x + 25','x² + 4x + 4'], c:1,
          fb_ok:'✅ Correcto. En x² + 5x + 6, el término del medio (5x) no es el doble producto de las raíces de x² y 6 (que ni siquiera es un cuadrado perfecto), por lo que no es un trinomio cuadrado perfecto.',
          fb_no:'❌ En x² + 5x + 6, el 5x no es el doble producto de las raíces de x² y 6 (que no es un cuadrado perfecto). La respuesta correcta era la B.' },
        { q:'Factoriza: x² − 100 = ?',
          opts:['(x − 10)²','(x + 100)(x − 1)','(x + 10)(x − 10)','(x + 50)(x − 2)'], c:2,
          fb_ok:'✅ Correcto. x² − 100 = x² − 10² = (x + 10)(x − 10).',
          fb_no:'❌ Las raíces son x y 10: x² − 10² = (x + 10)(x − 10). La respuesta correcta era la C.' }
      ]
    },
    {
      type:'dnd-classify',
      minutes:8,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Clasifica cada expresión según su tipo de factorización',
      instructions:'Arrastra cada expresión (o haz clic y luego clic en la columna) según si corresponde a una diferencia de cuadrados o a un trinomio cuadrado perfecto.',
      colA:{label:'➖ Diferencia de cuadrados', key:'a'},
      colB:{label:'🔲 Trinomio cuadrado perfecto', key:'b'},
      items:[
        {t:'x² − 16', cat:'a'},
        {t:'x² + 10x + 25', cat:'b'},
        {t:'4x² − 9', cat:'a'},
        {t:'x² − 8x + 16', cat:'b'},
        {t:'9x² − 1', cat:'a'},
        {t:'x² + 12x + 36', cat:'b'},
        {t:'25x² − 4', cat:'a'},
        {t:'x² − 2x + 1', cat:'b'}
      ],
      order:[4,1,6,0,3,2,7,5]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Explica por qué x² + 5x + 6 NO se puede factorizar como un trinomio cuadrado perfecto de la forma (x+a)². ¿Cómo se factoriza correctamente entonces?',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'No es un trinomio cuadrado perfecto porque...' o 'Se factoriza correctamente como...'",
      modelAnswer:`No hay una única forma de redactarlo, pero una buena respuesta debe explicar la condición que falla.<br><br>
        <em>"No es un trinomio cuadrado perfecto porque para serlo, el término del medio debería ser el doble producto de las raíces del primer y el último término. Aquí la raíz de x² es x, pero 6 no es un cuadrado perfecto (no tiene raíz exacta), así que no se cumple la condición. Sin embargo, sí se puede factorizar buscando dos números que multiplicados den 6 y sumados den 5: esos números son 2 y 3, por lo que x² + 5x + 6 = (x+2)(x+3)."</em><br><br>
        Una buena respuesta debe explicar por qué falla la condición de trinomio cuadrado perfecto y mostrar la factorización correcta (x+2)(x+3).`
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Ahora tú resuelves un ejercicio completo!',
      intro:'Este ejercicio requiere aplicar dos tipos de factorización en el orden correcto, tal como podría aparecer en tu prueba.',
      prompt:'🧮 Factoriza completamente, mostrando todo tu procedimiento: 3x² − 27.',
      hint:'Primero busca el factor común de ambos términos; lo que quede dentro del paréntesis, revisa si es una diferencia de cuadrados.',
      placeholder:'Paso 1: factor común = ... Paso 2: factorizar lo que queda dentro del paréntesis = ...',
      example:`<em>"Paso 1: el factor común de 3x² y 27 es 3, así que 3x² − 27 = 3(x² − 9). Paso 2: x² − 9 es una diferencia de cuadrados (x² − 3²), que se factoriza como (x+3)(x−3). Resultado final: 3x² − 27 = 3(x+3)(x−3)."</em><br><br>
        ¿Notaste que muchos ejercicios de factorización requieren aplicar más de un tipo, en el orden correcto: primero factor común, después el resto?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué tipo de factorización sientes que todavía necesitas practicar más antes de la prueba?',
        '¿Qué estrategia usarás para decidir rápidamente qué tipo de factorización aplicar en un ejercicio?'
      ]
    },
    { type:'report' }
  ]
};

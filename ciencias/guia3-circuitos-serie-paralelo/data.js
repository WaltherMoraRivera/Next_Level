const GUIDE_DATA = {
  id: 'ciencias-g3-circuitos-serie-paralelo',
  subject: 'ciencias',
  subjectLabel: 'Ciencias Naturales',
  subjectIcon: '⚡',
  title: 'Circuitos en serie y en paralelo',
  examRef: 'Unidad 3 · OA10 · 2° semestre',
  nextGuideHint: 'Próxima guía: Calor y temperatura — cómo se transfiere la energía térmica entre los cuerpos.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🎄 ¿Sabías que en las antiguas guirnaldas navideñas, si se quemaba una sola ampolleta, todas las demás se apagaban? En cambio, si hoy se quema una ampolleta de tu casa, el resto de las habitaciones sigue funcionando normalmente. ¿Por qué una falla se comporta de forma tan distinta en cada caso?',
      subPrompt:'Piensa: ¿tiene que ver con cómo están conectados los componentes entre sí, más que con el tipo de ampolleta?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        La diferencia no está en las ampolletas, sino en cómo están <strong>conectadas entre sí</strong>: en serie (un solo camino para la corriente) o en paralelo (varios caminos independientes). En esta guía vas a entender por qué esa diferencia de conexión cambia por completo el comportamiento de un circuito.<br><br>
        <em>💡 Tip científico:</em> Antes de analizar cualquier circuito, pregúntate siempre: <strong>¿hay un solo camino para la corriente, o varios?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a analizar el <strong>circuito eléctrico domiciliario</strong> y comparar experimentalmente los circuitos en <strong>serie y en paralelo</strong>, en relación con la energía eléctrica, la diferencia de potencial, la intensidad de corriente y la resistencia eléctrica.'
    },
    {
      type:'teach',
      minutes:8,
      title:'Circuitos en serie y en paralelo: dos formas de conectar la electricidad',
      genre:'Científico · Conceptual',
      wordCount:'~390 palabras',
      html:`
        <h3>Circuitos en serie y en paralelo: dos formas de conectar la electricidad</h3>
        <p>Cuando conectas varios dispositivos eléctricos a una misma fuente de energía, existen dos formas básicas de conectarlos entre sí: en serie o en paralelo. Ambas formas afectan de manera muy distinta cómo se comporta la corriente eléctrica, el voltaje y la resistencia del circuito completo.</p>
        <p>En un <span class="vhl" title="Conexión donde los componentes forman un único camino para la corriente, por lo que si uno falla, se interrumpe todo el circuito">circuito en serie</span>, los componentes se conectan uno después del otro, formando un solo camino para la corriente. Esto significa que la misma intensidad de corriente circula por todos los componentes, pero el voltaje total se reparte entre ellos. Una consecuencia importante: si un componente falla o se desconecta, se interrumpe el único camino disponible, y todo el circuito deja de funcionar. Por eso, en las antiguas guirnaldas navideñas conectadas en serie, si una ampolleta se quemaba, todas las demás se apagaban también.</p>
        <p>En un <span class="vhl" title="Conexión donde los componentes forman varios caminos independientes para la corriente, alimentados por el mismo voltaje">circuito en paralelo</span>, en cambio, los componentes se conectan formando varios caminos distintos para la corriente, todos alimentados por el mismo voltaje. Aquí, si un componente falla, los demás caminos siguen funcionando con normalidad, porque la corriente puede seguir fluyendo por las otras rutas. Por esta razón, las instalaciones eléctricas domiciliarias modernas usan conexiones en paralelo: si una ampolleta se quema en una habitación, el resto de la casa sigue con electricidad.</p>
        <p>La <span class="vhl" title="Oposición que un componente ofrece al paso de la corriente eléctrica">resistencia eléctrica</span> también se comporta de manera opuesta en ambos casos. En un circuito en serie, la resistencia total del circuito es la suma de las resistencias individuales de cada componente, lo que hace que la corriente total disminuya. En un circuito en paralelo, en cambio, la resistencia total del circuito disminuye a medida que se agregan más componentes, porque cada nuevo camino ofrece una ruta adicional para que la corriente fluya, aumentando así la corriente total que entrega la fuente.</p>
        <p>En el circuito eléctrico domiciliario, ambos tipos de conexión conviven: los distintos enchufes e interruptores de una casa están conectados en paralelo entre sí (para que cada uno funcione de forma independiente), mientras que ciertos dispositivos de seguridad, como los interruptores automáticos o <span class="vhl" title="Dispositivo de seguridad que corta el flujo eléctrico del circuito completo ante una falla, protegiendo a las personas y la instalación">diferenciales</span>, se conectan en serie con el resto del circuito, de modo que puedan cortar el flujo completo de electricidad ante una falla.</p>`,
      vocab:[
        { word:'circuito en serie', ctx:'"En un circuito en serie, los componentes se conectan uno después del otro, formando un solo camino para la corriente."',
          opts:['Conexión donde los componentes forman un único camino para la corriente, por lo que si uno falla, se interrumpe todo el circuito','Conexión donde cada componente recibe electricidad de una pila distinta','Un tipo de resistencia usada solo en centrales hidroeléctricas','La forma en que se conectan los paneles fotovoltaicos entre sí'], c:0,
          def:'Conexión donde los componentes forman un único camino para la corriente eléctrica, por lo que si uno falla, se interrumpe todo el circuito.', syn:'conexión en cadena, conexión en línea', ant:'circuito en paralelo',
          ex:'Las antiguas guirnaldas navideñas eran un circuito en serie: si una ampolleta fallaba, todas se apagaban.' },
        { word:'circuito en paralelo', ctx:'"En un circuito en paralelo... los componentes se conectan formando varios caminos distintos para la corriente"',
          opts:['Una forma antigua de generar electricidad por fricción','Un tipo de pila de mayor duración','Conexión donde los componentes forman varios caminos independientes para la corriente, alimentados por el mismo voltaje','El nombre técnico de un interruptor diferencial'], c:2,
          def:'Conexión donde los componentes forman varios caminos independientes para la corriente, todos alimentados por el mismo voltaje.', syn:'conexión en derivación', ant:'circuito en serie',
          ex:'Gracias a la conexión en paralelo, si se quema una ampolleta en tu casa, el resto sigue funcionando.' },
        { word:'resistencia eléctrica', ctx:'"La resistencia eléctrica también se comporta de manera opuesta en ambos casos."',
          opts:['La cantidad total de electricidad almacenada en una pila','Oposición que un componente ofrece al paso de la corriente eléctrica','El tiempo que tarda un circuito en encenderse','Otro nombre para el efecto fotovoltaico'], c:1,
          def:'Oposición que un componente ofrece al paso de la corriente eléctrica a través de él.', syn:'oposición al flujo de corriente', ant:'conductividad',
          ex:'La resistencia eléctrica total de un circuito en serie es la suma de las resistencias de cada componente.' },
        { word:'diferenciales', ctx:'"ciertos dispositivos de seguridad, como los interruptores automáticos o diferenciales, se conectan en serie"',
          opts:['Cables especiales usados solo en centrales nucleares','Otro nombre para los paneles fotovoltaicos','Un tipo de resistencia que solo existe en circuitos en paralelo','Dispositivo de seguridad que corta el flujo eléctrico del circuito completo ante una falla'], c:3,
          def:'Dispositivos de seguridad que cortan el flujo eléctrico de todo el circuito ante una falla, protegiendo a las personas y la instalación.', syn:'interruptores de seguridad', ant:'enchufe común',
          ex:'El interruptor diferencial de tu casa corta la electricidad automáticamente si detecta una fuga de corriente.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'En un circuito en serie, ¿qué ocurre si uno de los componentes falla o se desconecta?',
          opts:['No pasa nada, el resto sigue funcionando','Se interrumpe el único camino disponible y todo el circuito deja de funcionar','Solo se apaga ese componente','La resistencia total del circuito disminuye'], c:1,
          hint:'Aparece en el segundo párrafo, en la descripción del circuito en serie.',
          fb_ok:'✅ Correcto. El texto dice: "si un componente falla o se desconecta, se interrumpe el único camino disponible, y todo el circuito deja de funcionar."',
          fb_no:'❌ El texto lo explica así: "si un componente falla o se desconecta, se interrumpe el único camino disponible, y todo el circuito deja de funcionar." La respuesta correcta era la opción B.' },
        { q:'¿Por qué las instalaciones eléctricas domiciliarias modernas usan conexiones en paralelo?',
          opts:['Porque gastan menos cable','Porque si un componente falla, los demás caminos siguen funcionando con normalidad','Porque generan más electricidad por sí solas','Porque no necesitan interruptores de seguridad'], c:1,
          hint:'Aparece en el tercer párrafo, en la descripción del circuito en paralelo.',
          fb_ok:'✅ Exacto. El texto dice: "si un componente falla, los demás caminos siguen funcionando con normalidad".',
          fb_no:'❌ El texto lo señala así: "si un componente falla, los demás caminos siguen funcionando con normalidad". La correcta era la opción B.' },
        { q:'Según el texto, ¿cómo se conectan los interruptores automáticos o diferenciales respecto al resto del circuito domiciliario?',
          opts:['En paralelo, igual que los enchufes','De forma independiente, sin conexión al resto','En serie, para poder cortar el flujo completo de electricidad ante una falla','Solo se conectan durante una emergencia'], c:2,
          hint:'Aparece en el último párrafo, sobre el circuito eléctrico domiciliario.',
          fb_ok:'✅ Bien leído. El texto dice: "se conectan en serie con el resto del circuito, de modo que puedan cortar el flujo completo de electricidad ante una falla."',
          fb_no:'❌ El texto lo explica así: "se conectan en serie con el resto del circuito, de modo que puedan cortar el flujo completo de electricidad ante una falla." La respuesta correcta era la opción C.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'Si agregas más ampolletas conectadas en paralelo a un circuito con voltaje fijo, ¿qué le ocurre a la resistencia total del circuito?',
          opts:['Aumenta, porque hay más componentes','Se mantiene igual, no depende de la cantidad de componentes','Se vuelve infinita','Disminuye, porque cada ampolleta agrega un camino adicional para la corriente'], c:3,
          fb_ok:'✅ Excelente razonamiento. En paralelo, cada nuevo componente agrega una ruta adicional para la corriente, lo que hace que la resistencia total del circuito disminuya.',
          fb_no:'❌ En paralelo, cada nuevo componente agrega una ruta adicional para la corriente, disminuyendo la resistencia total. La respuesta correcta era la D.' },
        { q:'¿Por qué en un circuito en serie el voltaje se reparte entre los componentes, pero en uno en paralelo cada componente recibe el voltaje completo?',
          opts:['Porque en serie hay un solo camino, así que el voltaje se divide entre las caídas de cada componente; en paralelo cada camino está conectado directamente a los dos polos de la fuente','Porque los circuitos en paralelo generan más energía por sí solos','Porque en serie los componentes son siempre más grandes','No hay ninguna diferencia real entre ambos casos'], c:0,
          fb_ok:'✅ Muy bien. En serie, el voltaje de la fuente se distribuye entre los componentes del único camino; en paralelo, cada camino conecta directamente ambos polos de la fuente, recibiendo el voltaje completo.',
          fb_no:'❌ En serie, el voltaje se reparte porque hay un solo camino; en paralelo, cada camino está conectado directamente a los polos de la fuente. La respuesta correcta era la A.' },
        { q:'Si dos ampolletas idénticas están conectadas en serie a una pila de 9V, y cada una consume la mitad del voltaje total, ¿cuántos volts recibe cada ampolleta?',
          opts:['9 V','0 V','18 V','4,5 V'], c:3,
          fb_ok:'✅ Correcto. Como el voltaje total (9V) se reparte entre los dos componentes del único camino, cada ampolleta recibe la mitad: 4,5 V.',
          fb_no:'❌ El voltaje total (9V) se reparte entre los dos componentes en serie, así que cada uno recibe la mitad: 4,5 V. La respuesta correcta era la D.' }
      ]
    },
    {
      type:'error-spot',
      minutes:6,
      skillTag:'critica',
      label:'Detecta el error',
      title:'Una de estas afirmaciones sobre el circuito domiciliario es incorrecta',
      instructions:'Lee cada afirmación sobre cómo funciona el circuito eléctrico de una casa. Una de ellas contiene un error conceptual. Haz clic en la línea que crees que está equivocada.',
      lines:[
        'Los enchufes de las distintas habitaciones de una casa están conectados en paralelo entre sí.',
        'Si se funde una ampolleta en el living, el resto de la casa sigue funcionando con normalidad.',
        'El interruptor diferencial se conecta en paralelo para poder cortar el flujo completo de electricidad ante una falla.',
        'En un circuito en paralelo, cada camino recibe el mismo voltaje que entrega la fuente.',
        'Agregar más dispositivos en paralelo aumenta la corriente total que entrega la fuente.'
      ],
      errorIndex:2,
      explanation:'El interruptor diferencial se conecta en serie con el resto del circuito, no en paralelo. Solo una conexión en serie permite que, al detectar una falla, se interrumpa el único camino y se corte la electricidad de todo el circuito de una sola vez.'
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Imagina que todos los enchufes de tu casa estuvieran conectados en serie en vez de en paralelo, como lo están hoy. Explica qué problemas traería esto, usando al menos dos conceptos de esta guía.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Si todos los enchufes estuvieran en serie...' o 'El principal problema sería...'",
      modelAnswer:`No hay una única respuesta correcta, pero una buena respuesta conecta al menos dos ideas de la guía.<br><br>
        <em>"Si todos los enchufes estuvieran conectados en serie, formarían un solo camino para la corriente. Esto significa que si un solo aparato se desconecta o falla —por ejemplo, si apagas el refrigerador—, se interrumpiría el único camino disponible y toda la casa se quedaría sin electricidad al mismo tiempo. Además, el voltaje se repartiría entre todos los aparatos conectados, por lo que ninguno recibiría el voltaje completo que necesita para funcionar bien."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe mencionar tanto la interrupción total del circuito como el reparto del voltaje.`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú explicas un cambio tecnológico!',
      intro:'Este ejercicio te pide aplicar lo aprendido para explicar por qué cambió una tecnología cotidiana.',
      prompt:'💡 Explica, en 3-4 líneas, por qué las guirnaldas navideñas modernas (de luces LED) usan conexión en paralelo en vez de conexión en serie como las antiguas, aunque cablearlas en paralelo sea un poco más caro y complejo.',
      hint:'Piensa en qué le pasaba a una guirnalda antigua en serie cuando una sola ampolleta se quemaba, y compáralo con lo que pasa hoy.',
      placeholder:'Las guirnaldas modernas usan conexión en paralelo porque...',
      example:`<em>"Las guirnaldas modernas usan conexión en paralelo porque, si conectaran las luces en serie como antes, bastaría con que una sola luz LED fallara para que toda la guirnalda se apagara de inmediato, obligando a revisar luz por luz para encontrar la falla. En paralelo, cada luz forma su propio camino, así que si una falla, las demás siguen encendidas con normalidad, y es mucho más fácil identificar cuál falló."</em><br><br>
        ¿Notaste que la explicación usa exactamente el mismo argumento que la guía: un solo camino (serie) versus varios caminos independientes (paralelo)?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te sorprendió sobre cómo funcionan los circuitos en serie y en paralelo?',
        '¿Qué estrategia usarás para recordar la diferencia entre ambos tipos de circuito?'
      ]
    },
    { type:'report' }
  ]
};

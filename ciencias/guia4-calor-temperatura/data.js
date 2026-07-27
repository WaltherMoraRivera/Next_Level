const GUIDE_DATA = {
  id: 'ciencias-g4-calor-temperatura',
  subject: 'ciencias',
  subjectLabel: 'Ciencias Naturales',
  subjectIcon: '⚡',
  title: 'Calor y temperatura',
  examRef: 'Unidad 3 · OA11 · 2° semestre',
  nextGuideHint: 'Próxima guía: La evolución de los modelos atómicos — de Dalton a Bohr.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🌡️ En un día muy caluroso, si te metes a una piscina, sientes que el agua "te quita el calor" de encima, aunque la piscina tenga menos temperatura que tú. Y si tocas el pomo metálico de una puerta y luego la madera de esa misma puerta, el metal se siente más frío, aunque ambos estén exactamente a la misma temperatura. ¿Cómo puede ser esto posible?',
      subPrompt:'Piensa: ¿será que "calor" y "temperatura" no significan exactamente lo mismo?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Aunque usamos "calor" y "temperatura" como sinónimos en el día a día, en ciencias son conceptos distintos: la temperatura describe qué tan caliente está algo, mientras que el calor es la <strong>energía que se transfiere</strong> entre dos cuerpos. El metal se siente más frío que la madera porque conduce el calor de tu mano mucho más rápido, no porque esté realmente a menor temperatura.<br><br>
        <em>💡 Tip científico:</em> Cada vez que sientas "frío" o "calor" al tocar algo, pregúntate: <strong>¿es la temperatura del objeto, o qué tan rápido transfiere calor desde o hacia mi mano?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a desarrollar modelos e investigaciones que expliquen el <strong>calor</strong> como un proceso de transferencia de energía térmica, sus <strong>formas de propagación</strong> (conducción, convección y radiación), sus <strong>efectos</strong>, y su diferencia con la <strong>temperatura</strong>.'
    },
    {
      type:'teach',
      minutes:8,
      title:'Calor y temperatura: por qué no son lo mismo',
      genre:'Científico · Conceptual',
      wordCount:'~400 palabras',
      html:`
        <h3>Calor y temperatura: por qué no son lo mismo</h3>
        <p>En el lenguaje cotidiano usamos las palabras "calor" y "temperatura" como si fueran sinónimos, pero en ciencias tienen significados distintos. La <span class="vhl" title="Medida relacionada con el movimiento de las partículas de un cuerpo; a mayor movimiento, mayor temperatura">temperatura</span> es una medida de qué tan caliente o frío está un cuerpo, relacionada con el movimiento de sus partículas: mientras más rápido se mueven, mayor es la temperatura. El calor, en cambio, es la energía que se transfiere entre dos cuerpos que están a temperaturas distintas, siempre desde el cuerpo más caliente hacia el más frío, hasta que ambos alcanzan la misma temperatura (equilibrio térmico).</p>
        <p>Esta transferencia de calor puede ocurrir de tres formas distintas. La <span class="vhl" title="Forma de transferencia de calor mediante el contacto directo entre partículas">conducción</span> ocurre cuando el calor se transmite directamente entre partículas que están en contacto, como cuando el mango de una cuchara metálica se calienta al dejarla dentro de una olla con sopa hirviendo. La <span class="vhl" title="Forma de transferencia de calor mediante corrientes que se forman en líquidos o gases al variar su densidad con la temperatura">convección</span> ocurre en líquidos y gases, cuando las partes más calientes (menos densas) suben y las más frías (más densas) bajan, generando corrientes que distribuyen el calor, como el aire caliente que sube desde un radiador. La <span class="vhl" title="Forma de transferencia de calor mediante ondas, sin necesidad de un medio material">radiación</span>, en cambio, no necesita un medio material para propagarse: el calor viaja en forma de ondas, como ocurre con el calor del Sol que llega hasta la Tierra atravesando el espacio vacío.</p>
        <p>El calor puede producir distintos efectos sobre un cuerpo. El más común es el cambio de temperatura, pero también puede provocar cambios de estado (como cuando el hielo se derrite al recibir calor) o deformaciones, como la dilatación de los rieles de un tren en un día muy caluroso.</p>
        <p>Para medir la temperatura usamos termómetros, con distintas escalas según el contexto. La escala Celsius es la más usada en Chile y gran parte del mundo, y ubica el punto de congelación del agua en 0° y su punto de ebullición en 100°. La escala Fahrenheit, usada principalmente en Estados Unidos, ubica esos mismos puntos en 32° y 212°. La escala Kelvin, en cambio, es la que usan los científicos, porque su punto de partida (0 K) corresponde al cero absoluto, la temperatura más baja posible en la naturaleza, donde las partículas prácticamente dejan de moverse.</p>
        <p>Por último, muchos objetos tecnológicos están diseñados para proteger a los seres vivos de temperaturas extremas: desde termos que retardan la pérdida o ganancia de calor, hasta trajes especiales para trabajar en ambientes con calor o frío intenso.</p>`,
      vocab:[
        { word:'temperatura', ctx:'"La temperatura es una medida de qué tan caliente o frío está un cuerpo, relacionada con el movimiento de sus partículas"',
          opts:['La energía que se transfiere entre dos cuerpos','Medida relacionada con el movimiento de las partículas de un cuerpo','Un tipo de escala usada solo por científicos','El nombre técnico de un termómetro'], c:1,
          def:'Medida relacionada con el movimiento de las partículas de un cuerpo; a mayor movimiento, mayor temperatura.', syn:'grado de calor de un cuerpo', ant:'calor (energía transferida)',
          ex:'Aunque el metal y la madera de una puerta están a la misma temperatura, el metal se siente más frío al tacto.' },
        { word:'conducción', ctx:'"La conducción ocurre cuando el calor se transmite directamente entre partículas que están en contacto"',
          opts:['Forma de transferencia de calor mediante ondas, sin necesidad de un medio material','Forma de transferencia de calor mediante corrientes en líquidos o gases','Forma de transferencia de calor mediante el contacto directo entre partículas','Un tipo de escala de temperatura'], c:2,
          def:'Forma de transferencia de calor que ocurre mediante el contacto directo entre partículas de un cuerpo o entre dos cuerpos.', syn:'transferencia por contacto', ant:'radiación',
          ex:'El mango de una cuchara metálica se calienta por conducción al dejarla en una olla con sopa hirviendo.' },
        { word:'convección', ctx:'"La convección ocurre en líquidos y gases, cuando las partes más calientes... suben y las más frías... bajan"',
          opts:['Forma de transferencia de calor mediante corrientes que se forman en líquidos o gases al variar su densidad con la temperatura','El proceso de medir la temperatura con un termómetro','Forma de transferencia de calor mediante el contacto directo','Otro nombre para el cero absoluto'], c:0,
          def:'Forma de transferencia de calor mediante corrientes que se forman en líquidos o gases cuando su densidad varía con la temperatura.', syn:'corrientes térmicas', ant:'conducción',
          ex:'El aire caliente que sube desde un radiador se mueve por convección.' },
        { word:'radiación', ctx:'"La radiación... no necesita un medio material para propagarse: el calor viaja en forma de ondas"',
          opts:['Forma de transferencia de calor que solo ocurre en líquidos','Otro nombre para la escala Kelvin','Un instrumento para medir la temperatura','Forma de transferencia de calor mediante ondas, sin necesidad de un medio material'], c:3,
          def:'Forma de transferencia de calor mediante ondas, que no necesita un medio material para propagarse.', syn:'transferencia por ondas', ant:'conducción',
          ex:'El calor del Sol llega a la Tierra por radiación, atravesando el espacio vacío.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'Según el texto, ¿qué es la temperatura?',
          opts:['La energía que se transfiere entre dos cuerpos','Una medida relacionada con el movimiento de las partículas de un cuerpo','El nombre de una de las tres formas de propagación del calor','Un tipo de termómetro especial'], c:1,
          hint:'Aparece en el primer párrafo, al inicio del texto.',
          fb_ok:'✅ Correcto. El texto dice: "La temperatura es una medida... relacionada con el movimiento de sus partículas".',
          fb_no:'❌ El texto lo indica así: "La temperatura es una medida... relacionada con el movimiento de sus partículas". La respuesta correcta era la opción B.' },
        { q:'¿Cómo se llama la forma de transferencia de calor que ocurre por contacto directo entre partículas?',
          opts:['Radiación','Convección','Evaporación','Conducción'], c:3,
          hint:'Aparece en el segundo párrafo, es la primera de las tres formas explicadas.',
          fb_ok:'✅ Exacto. El texto dice: "La conducción ocurre cuando el calor se transmite directamente entre partículas que están en contacto".',
          fb_no:'❌ El texto lo señala así: "La conducción ocurre cuando el calor se transmite directamente entre partículas que están en contacto". La correcta era la opción D.' },
        { q:'¿Qué escala de temperatura ubica el cero absoluto como su punto de partida?',
          opts:['La escala Celsius','La escala Fahrenheit','La escala Kelvin','No se menciona ninguna escala con esa característica'], c:2,
          hint:'Aparece en el cuarto párrafo, en la descripción de las escalas de temperatura.',
          fb_ok:'✅ Bien leído. El texto dice: "La escala Kelvin... su punto de partida (0 K) corresponde al cero absoluto".',
          fb_no:'❌ El texto lo explica así: "La escala Kelvin... su punto de partida (0 K) corresponde al cero absoluto". La respuesta correcta era la opción C.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué el aire caliente que sale de un radiador sube en vez de quedarse cerca del suelo?',
          opts:['Porque el aire caliente es menos denso y sube, generando una corriente de convección','Porque el aire caliente pesa más y necesita subir para enfriarse','Porque los radiadores siempre se instalan en el techo','Porque el calor viaja únicamente por conducción'], c:0,
          fb_ok:'✅ Excelente razonamiento. El aire caliente es menos denso que el aire frío, por lo que sube, generando una corriente de convección que distribuye el calor por la habitación.',
          fb_no:'❌ El aire caliente es menos denso y por eso sube, generando una corriente de convección. La respuesta correcta era la A.' },
        { q:'¿Por qué el calor del Sol logra llegar a la Tierra, si el espacio entre ambos no tiene aire ni ningún otro material?',
          opts:['Porque en realidad el espacio sí tiene un poco de aire','Porque el calor viaja por radiación, que no necesita un medio material para propagarse','Porque el calor viaja por conducción a través del vacío','Porque el Sol calienta directamente por contacto con la Tierra'], c:1,
          fb_ok:'✅ Correcto. La radiación es la única forma de transferencia de calor que no necesita un medio material, por eso puede atravesar el espacio vacío.',
          fb_no:'❌ La radiación no necesita un medio material para propagarse, por eso el calor del Sol puede atravesar el espacio vacío. La respuesta correcta era la B.' },
        { q:'Si pones un cubo de hielo dentro de un vaso con agua tibia, ¿en qué dirección fluye el calor y hasta cuándo?',
          opts:['Del hielo hacia el agua tibia, hasta que el agua se congele por completo','No hay transferencia de calor porque el hielo es sólido','Del agua tibia hacia el hielo, hasta que ambos alcancen la misma temperatura','El calor fluye en ambas direcciones al mismo tiempo y en igual cantidad'], c:2,
          fb_ok:'✅ Muy bien. El calor siempre fluye del cuerpo más caliente (el agua tibia) hacia el más frío (el hielo), hasta que ambos alcanzan la misma temperatura, es decir, el equilibrio térmico.',
          fb_no:'❌ El calor fluye del cuerpo más caliente al más frío, hasta que ambos alcanzan la misma temperatura (equilibrio térmico). La respuesta correcta era la C.' }
      ]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'Explica, usando al menos dos de los tres mecanismos de transferencia de calor (conducción, convección o radiación), por qué una taza metálica con café caliente se siente caliente al tocar su superficie externa, y por qué además sientes tibieza en el aire si acercas la mano por encima de la taza sin tocarla.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'La taza se siente caliente por...' o 'El aire tibio de arriba se debe a...'",
      modelAnswer:`No hay una única respuesta correcta, pero una buena respuesta debe usar al menos dos mecanismos distintos de forma correcta.<br><br>
        <em>"La taza se siente caliente al tocarla porque el calor del café se transmite por conducción a través del metal, que conduce el calor muy bien, hasta llegar a mi mano. Además, si acerco la mano por encima de la taza sin tocarla, siento tibieza porque el aire que está justo sobre el café se calienta y, al ser menos denso, sube por convección, llevando ese calor hacia arriba, donde está mi mano."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe distinguir correctamente qué mecanismo explica cada parte del fenómeno (la taza caliente por conducción, el aire tibio por convección).`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú explicas la diferencia a alguien más!',
      intro:'Este ejercicio te pide traducir la diferencia entre calor y temperatura a un ejemplo cotidiano propio, distinto al de la guía.',
      prompt:'🧊 Explica en un lenguaje simple, con un ejemplo cotidiano de tu elección (que no sea el de la piscina ni el de la puerta metálica), la diferencia entre "calor" y "temperatura".',
      hint:'Recuerda: la temperatura describe qué tan caliente está algo; el calor es la energía que se transfiere de un cuerpo a otro.',
      placeholder:'Un ejemplo de esto es cuando...',
      example:`<em>"Un ejemplo de esto es cuando tocas la arena de la playa y el agua del mar al mismo tiempo, en un día caluroso: la arena se siente mucho más caliente que el agua, aunque ambas hayan recibido la misma cantidad de horas de sol. Esto pasa porque la arena alcanza una temperatura más alta con la misma energía recibida, mientras que el agua necesita mucha más energía (calor) para subir su temperatura la misma cantidad de grados."</em><br><br>
        ¿Notaste que el ejemplo distingue con claridad la temperatura (qué tan caliente está cada superficie) del calor (la energía necesaria para cambiar esa temperatura)?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te sorprendió sobre la diferencia entre calor y temperatura?',
        '¿Qué estrategia usarás para recordar las tres formas de transferencia de calor (conducción, convección, radiación)?'
      ]
    },
    { type:'report' }
  ]
};

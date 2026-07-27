const GUIDE_DATA = {
  id: 'ciencias-g2-generacion-electrica',
  subject: 'ciencias',
  subjectLabel: 'Ciencias Naturales',
  subjectIcon: '⚡',
  title: '¿Cómo generamos electricidad?',
  examRef: 'Unidad 3 · OA9 · 2° semestre',
  nextGuideHint: 'Próxima guía: Circuitos en serie y en paralelo — cómo analizar y comparar circuitos eléctricos.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🔋 Cada vez que cargas tu celular, prendes una ampolleta o ves televisión, estás usando electricidad que tuvo que generarse en algún lugar. Pero una pila, un panel solar y una represa hidroeléctrica no tienen nada en común a simple vista... ¿cómo pueden los tres producir el mismo tipo de electricidad?',
      subPrompt:'Piensa: ¿qué tienen que hacer todas estas tecnologías, sin importar su forma, para lograr el mismo resultado final?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Aunque una pila, un panel solar y una represa parecen no tener nada en común, todas terminan haciendo lo mismo: <strong>poner electrones en movimiento</strong> a través de un circuito. Lo que cambia es de dónde sacan la energía para lograrlo: reacciones químicas, luz solar, o el movimiento del agua y el viento.<br><br>
        <em>💡 Tip científico:</em> Cuando compares tecnologías de generación eléctrica, pregúntate siempre: <strong>¿de dónde viene la energía, y cómo la convierten en movimiento de electrones?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a investigar y explicar las <strong>tecnologías que generan energía eléctrica</strong> —pilas, paneles fotovoltaicos y generadores (eólicos, hidroeléctricos, térmicos y nucleares)— y a evaluar sus <strong>ventajas y desventajas</strong>.'
    },
    {
      type:'teach',
      minutes:8,
      title:'¿Cómo generamos la electricidad que usamos todos los días?',
      genre:'Científico · Conceptual',
      wordCount:'~390 palabras',
      html:`
        <h3>¿Cómo generamos la electricidad que usamos todos los días?</h3>
        <p>Cada vez que cargas tu celular, prendes una ampolleta o ves televisión, estás usando electricidad que tuvo que generarse en algún lugar, mediante tecnologías muy distintas entre sí. A diferencia de la electrostática, aquí no hablamos de cargas acumuladas en la superficie de un objeto, sino de un flujo continuo de electrones: la corriente eléctrica.</p>
        <p>Las pilas y baterías generan electricidad mediante reacciones químicas internas. Dentro de una pila hay sustancias que reaccionan entre sí, liberando electrones en un extremo (el polo negativo) y absorbiéndolos en el otro (el polo positivo); esa diferencia hace que los electrones fluyan por un circuito externo, generando corriente. Cuando esas sustancias se agotan, la pila deja de funcionar.</p>
        <p>Los paneles fotovoltaicos, en cambio, generan electricidad a partir de la luz del sol. Están hechos de materiales especiales (como el silicio) que, al recibir luz, liberan electrones de sus átomos: es el llamado <span class="vhl" title="Fenómeno en que un material especial libera electrones al recibir luz, generando corriente eléctrica">efecto fotovoltaico</span>. Estos electrones liberados son capturados y dirigidos hacia un circuito, generando corriente eléctrica mientras haya luz incidiendo sobre el panel.</p>
        <p>Los generadores eléctricos funcionan de una manera distinta: aprovechan el movimiento mecánico para producir electricidad, mediante un fenómeno llamado <span class="vhl" title="Fenómeno en que el movimiento de un imán cerca de una bobina de cable genera corriente eléctrica en ese cable">inducción electromagnética</span>. En los generadores eólicos, el viento mueve enormes aspas conectadas a un generador; en los hidroeléctricos, es la caída del agua la que hace girar una <span class="vhl" title="Máquina con aspas que gira impulsada por agua, vapor o viento, y que hace funcionar un generador">turbina</span> conectada al generador; en las centrales térmicas y nucleares, el calor (de quemar combustibles fósiles o de reacciones nucleares) se usa para calentar agua y producir vapor a presión, que también mueve una turbina.</p>
        <p>Cada una de estas tecnologías tiene ventajas y desventajas. Las fuentes <span class="vhl" title="Fuente de energía que no se agota con el uso porque se renueva naturalmente, como el viento, el sol o el agua">renovables</span> —como la eólica, la solar y la hidroeléctrica— no se agotan con el uso y generan menos contaminación directa, pero dependen de condiciones naturales (viento, sol, agua) que no siempre están disponibles. Las fuentes no renovables, como el carbón, el petróleo, el gas natural y el uranio (usado en centrales nucleares), existen en cantidades limitadas en la Tierra y su extracción o uso suele generar mayor impacto ambiental.</p>`,
      vocab:[
        { word:'efecto fotovoltaico', ctx:'"es el llamado efecto fotovoltaico"',
          opts:['La reacción química que ocurre dentro de una pila','Fenómeno en que un material especial libera electrones al recibir luz, generando corriente eléctrica','El movimiento de las aspas de un generador eólico','La combustión de carbón para producir vapor'], c:1,
          def:'Fenómeno físico en que un material especial (como el silicio) libera electrones al recibir luz, generando corriente eléctrica.', syn:'generación fotovoltaica', ant:'generación química (pilas)',
          ex:'Gracias al efecto fotovoltaico, un panel solar puede cargar una batería usando solo la luz del sol.' },
        { word:'inducción electromagnética', ctx:'"un fenómeno llamado inducción electromagnética"',
          opts:['El proceso de cargar un objeto por fricción','La reacción química que ocurre en una pila','Fenómeno en que el movimiento de un imán cerca de una bobina de cable genera corriente eléctrica','La transferencia de calor entre dos cuerpos'], c:2,
          def:'Fenómeno en que el movimiento relativo entre un imán y una bobina de cable genera corriente eléctrica en ese cable.', syn:'generación por inducción', ant:'generación fotovoltaica',
          ex:'Los generadores eólicos e hidroeléctricos funcionan gracias a la inducción electromagnética.' },
        { word:'turbina', ctx:'"hace girar una turbina conectada al generador"',
          opts:['Un tipo de pila de larga duración','Un panel hecho de silicio','Un cable especial para transmitir electricidad','Máquina con aspas que gira impulsada por agua, vapor o viento, y que hace funcionar un generador'], c:3,
          def:'Máquina con aspas que gira impulsada por agua, vapor o viento, conectada a un generador para producir electricidad.', syn:'rotor de generación', ant:'panel fotovoltaico',
          ex:'En una represa, el agua que cae hace girar la turbina a gran velocidad.' },
        { word:'renovables', ctx:'"Las fuentes renovables —como la eólica, la solar y la hidroeléctrica— no se agotan con el uso"',
          opts:['Fuente de energía que no se agota con el uso porque se renueva naturalmente','Otro nombre para las centrales nucleares','Un tipo de pila recargable','El material del que están hechos los paneles solares'], c:0,
          def:'Fuentes de energía que no se agotan con el uso porque se renuevan naturalmente, como el viento, el sol o el agua.', syn:'energías limpias, energías inagotables', ant:'no renovables',
          ex:'Chile ha invertido fuertemente en energías renovables como la solar y la eólica.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Cómo generan electricidad las pilas y baterías?',
          opts:['Mediante el efecto fotovoltaico','Mediante reacciones químicas internas','Mediante inducción electromagnética','Mediante la combustión de carbón'], c:1,
          hint:'Aparece en el segundo párrafo, al inicio.',
          fb_ok:'✅ Correcto. El texto dice: "Las pilas y baterías generan electricidad mediante reacciones químicas internas."',
          fb_no:'❌ El texto lo indica así: "Las pilas y baterías generan electricidad mediante reacciones químicas internas." La respuesta correcta era la opción B.' },
        { q:'¿Qué material se menciona como ejemplo del que están hechos los paneles fotovoltaicos?',
          opts:['El cobre','El plástico','El silicio','El hierro'], c:2,
          hint:'Aparece en el tercer párrafo, cuando se describe el efecto fotovoltaico.',
          fb_ok:'✅ Exacto. El texto dice: "Están hechos de materiales especiales (como el silicio)".',
          fb_no:'❌ El texto lo señala así: "Están hechos de materiales especiales (como el silicio)". La correcta era la opción C.' },
        { q:'Según el texto, ¿qué hace girar la turbina en una central hidroeléctrica?',
          opts:['El calor de la combustión de carbón','La luz del sol','El viento','La caída del agua'], c:3,
          hint:'Aparece en el cuarto párrafo, en la descripción de los generadores hidroeléctricos.',
          fb_ok:'✅ Bien leído. El texto dice: "en los hidroeléctricos, es la caída del agua la que hace girar una turbina".',
          fb_no:'❌ El texto lo explica así: "en los hidroeléctricos, es la caída del agua la que hace girar una turbina". La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué las centrales térmicas y nucleares también usan turbinas, si su fuente de energía es tan distinta a la de una central hidroeléctrica?',
          opts:['Porque todas las centrales eléctricas son idénticas por dentro','Porque ambas usan el mismo principio: algo hace girar una turbina conectada a un generador, solo cambia qué produce ese movimiento','Porque las turbinas solo funcionan con calor','Porque el agua siempre está presente en cualquier central eléctrica'], c:1,
          fb_ok:'✅ Excelente razonamiento. Ya sea agua, viento o vapor producido por calor, el principio final es el mismo: mover una turbina conectada a un generador mediante inducción electromagnética.',
          fb_no:'❌ Aunque la fuente de energía cambia (agua, viento, calor), el principio final es el mismo: mover una turbina conectada a un generador. La respuesta correcta era la B.' },
        { q:'Si un panel fotovoltaico deja de recibir luz, por ejemplo durante la noche, ¿qué esperarías que ocurra con su generación de electricidad?',
          opts:['Seguiría generando electricidad igual, usando el calor almacenado','Generaría el doble de electricidad','Se convertiría automáticamente en un generador eólico','Se detendría, porque el efecto fotovoltaico depende de la luz incidente'], c:3,
          fb_ok:'✅ Correcto. El efecto fotovoltaico depende directamente de que el material reciba luz; sin luz, no hay electrones liberados y la generación se detiene.',
          fb_no:'❌ El efecto fotovoltaico depende de recibir luz; sin ella, no se liberan electrones y la generación se detiene. La respuesta correcta era la D.' },
        { q:'¿Por qué se dice que las fuentes no renovables "tienen un límite", mientras que las renovables no?',
          opts:['Porque las no renovables provienen de recursos finitos que se agotan con el uso, mientras que el viento, el sol y el agua se renuevan naturalmente','Porque las renovables son más baratas de producir','Porque las no renovables generan más electricidad por segundo','Porque las renovables nunca se han usado a gran escala'], c:0,
          fb_ok:'✅ Muy bien. El carbón, el petróleo y el uranio existen en cantidades limitadas en la Tierra; en cambio, el viento, el sol y el agua se renuevan de forma natural y continua.',
          fb_no:'❌ Las fuentes no renovables provienen de recursos finitos (carbón, petróleo, uranio); las renovables se renuevan naturalmente. La respuesta correcta era la A.' }
      ]
    },
    {
      type:'match-pairs',
      minutes:6,
      skillTag:'organizacion',
      label:'Tecnologías de generación',
      title:'Relaciona cada tecnología con cómo genera electricidad',
      instructions:'Haz clic en una tecnología (izquierda) y luego en la descripción que le corresponde (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        'Pilas y baterías',
        'Paneles fotovoltaicos',
        'Generadores eólicos',
        'Centrales hidroeléctricas'
      ],
      right:[
        'La luz del sol libera electrones de un material especial mediante el efecto fotovoltaico',
        'Reacciones químicas internas liberan electrones que fluyen por un circuito',
        'La caída del agua hace girar una turbina conectada a un generador',
        'El viento mueve aspas conectadas a un generador'
      ],
      pairs:[[0,1],[1,0],[2,3],[3,2]]
    },
    {
      type:'dnd-classify',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Clasifica las fuentes de energía según su tipo',
      instructions:'Arrastra cada fuente de energía (o haz clic y luego clic en la columna) según si es renovable o no renovable.',
      colA:{label:'♻️ Renovables', key:'a'},
      colB:{label:'⛏️ No renovables', key:'b'},
      items:[
        {t:'Energía eólica', cat:'a'},
        {t:'Carbón', cat:'b'},
        {t:'Energía solar', cat:'a'},
        {t:'Petróleo', cat:'b'},
        {t:'Energía hidroeléctrica', cat:'a'},
        {t:'Gas natural', cat:'b'},
        {t:'Energía geotérmica', cat:'a'},
        {t:'Uranio (nuclear)', cat:'b'}
      ],
      order:[4,1,6,0,3,2,7,5]
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'¿Por qué crees que Chile ha invertido fuertemente en energía solar en el desierto de Atacama y en energía eólica en el sur del país? Justifica tu respuesta con al menos un concepto de la guía.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que esto se debe a...' o 'Esto tiene sentido porque...'",
      modelAnswer:`No hay una única respuesta correcta, pero una buena respuesta conecta el lugar con la tecnología usada.<br><br>
        <em>"Creo que esto se debe a que las energías renovables dependen de las condiciones naturales del lugar: el desierto de Atacama tiene altísima radiación solar casi todo el año, ideal para paneles fotovoltaicos, mientras que el sur de Chile tiene vientos fuertes y constantes, ideales para generadores eólicos. Cada tecnología se instala donde su fuente de energía es más abundante."</em><br><br>
        Una buena respuesta no necesita ser idéntica a esta, pero sí debe explicar que cada fuente renovable depende de una condición natural específica del territorio.`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú explicas ciencia a alguien más!',
      intro:'Este ejercicio te pide traducir un concepto técnico a un lenguaje simple, tal como lo haría un buen divulgador científico.',
      prompt:'☀️ Explica de forma simple (como para alguien que no sabe nada de ciencias) cómo un panel fotovoltaico convierte la luz del sol en la electricidad que carga tu celular.',
      hint:'Recuerda usar el concepto de "efecto fotovoltaico" y explicar qué le pasa a los electrones del material cuando reciben luz.',
      placeholder:'Un panel solar funciona así...',
      example:`<em>"Un panel solar está hecho de un material especial que 'atrapa' la luz del sol. Cuando la luz llega a ese material, empuja a algunos de sus electrones y los hace moverse. Ese movimiento de electrones es justo lo que necesitamos para generar electricidad: mientras más luz reciba el panel, más electrones se mueven, y más electricidad se genera para cargar tu celular."</em><br><br>
        ¿Notaste que la explicación evita palabras técnicas complejas, pero mantiene la idea central correcta: luz → electrones en movimiento → electricidad?`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te sorprendió sobre cómo se genera la electricidad que usas todos los días?',
        '¿Qué estrategia usarás para recordar la diferencia entre fuentes renovables y no renovables?'
      ]
    },
    { type:'report' }
  ]
};

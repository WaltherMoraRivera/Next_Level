const GUIDE_DATA = {
  id: 'historia-g2-revoluciones',
  subject: 'historia',
  subjectLabel: 'Historia',
  subjectIcon: '🏛️',
  title: 'De las ideas a la acción: las revoluciones de Estados Unidos y Francia',
  examRef: 'Unidad 3 · OA15 · 2° semestre',
  nextGuideHint: 'Próxima guía: La Declaración de los Derechos del Hombre y su vigencia hoy — comparando dos declaraciones de derechos con la mecánica de análisis de fuentes.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'⚡ En la guía anterior conociste las ideas de la Ilustración: separación de poderes, soberanía popular, igualdad ante la ley. ¿Qué crees que pasa cuando un pueblo entero empieza a creer en esas ideas y su gobernante se niega a cambiar?',
      subPrompt:'Piensa: ¿las ideas por sí solas cambian un país, o hace falta algo más?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Las ideas de la Ilustración no se quedaron en los libros. En menos de veinte años, inspiraron dos procesos que cambiaron el mundo: la independencia de Estados Unidos (1776) y la Revolución Francesa (1789). En esta guía vas a ver cómo esas mismas ideas se transformaron en acción, y a comparar dos procesos que ocurrieron casi al mismo tiempo, pero de forma muy distinta.<br><br>
        <em>💡 Tip lector:</em> Cuando compares dos procesos históricos, pregúntate siempre: <strong>¿qué tuvieron en común? ¿en qué se diferenciaron?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a analizar cómo las <strong>ideas ilustradas</strong> se manifestaron en la <strong>independencia de Estados Unidos</strong> y en la <strong>Revolución Francesa</strong>, reconociendo elementos de <strong>secuencia y simultaneidad</strong> entre ambos procesos.'
    },
    {
      type:'teach',
      minutes:9,
      title:'De las ideas a la acción: las revoluciones de Estados Unidos y Francia',
      genre:'Histórico · Narrativo-conceptual',
      wordCount:'~390 palabras',
      html:`
        <h3>De las ideas a la acción: las revoluciones de Estados Unidos y Francia</h3>
        <p>Para 1776, las trece colonias inglesas en América del Norte llevaban años reclamando contra la corona británica: debían pagar impuestos a un Parlamento en Londres donde no tenían ningún representante. Inspirados en las ideas de la Ilustración —especialmente en la de que el poder legítimo nace del consentimiento del pueblo—, los colonos redactaron la Declaración de Independencia, un documento que afirmaba que todos los hombres tienen derechos naturales: vida, libertad y búsqueda de la felicidad. Tras una guerra contra Gran Bretaña, en 1783 la independencia de Estados Unidos fue oficialmente reconocida, dando origen a la primera gran república moderna organizada con separación de poderes.</p>
        <p>En Francia, el proceso fue distinto pero no menos influido por la Ilustración. Hacia 1789, el rey Luis XVI enfrentaba una <span class="vhl" title="Estado de un gobierno que no puede pagar sus deudas">bancarrota</span> del Estado, agravada por gastos de guerra y una sociedad dividida en privilegios desiguales. Para buscar una salida, convocó a los Estados Generales, una asamblea que reunía a los tres estamentos del reino. Sin embargo, el <span class="vhl" title="Sector social sin privilegios de nobleza ni clero: campesinos, comerciantes, burguesía">Tercer Estado</span> —el pueblo común, sin privilegios— se declaró a sí mismo <span class="vhl" title="Cuerpo político que se autoproclamó representante de la nación francesa en 1789">Asamblea Nacional</span>, marcando un quiebre directo con el absolutismo. Poco después, el 14 de julio de 1789, el pueblo de París tomó la fortaleza-prisión de la Bastilla, símbolo del poder real, en un hecho que se convirtió en el ícono de la revolución.</p>
        <p>En agosto de ese mismo año se proclamó la Declaración de los Derechos del Hombre y del Ciudadano, y Francia se transformó, al menos temporalmente, en una <span class="vhl" title="Sistema donde el rey existe pero su poder está limitado por una constitución y un parlamento">monarquía constitucional</span>. Sin embargo, las tensiones no se calmaron: la resistencia del rey y la nobleza a ceder poder, sumada a las guerras contra otras monarquías europeas, llevaron a una <span class="vhl" title="Proceso en que un movimiento político se vuelve cada vez más extremo en sus medidas">radicalización</span> del proceso. En 1793, Luis XVI fue ejecutado y Francia se convirtió en una república.</p>
        <p>Ambos procesos, aunque muy distintos en su desarrollo, compartieron el mismo fundamento ilustrado: la idea de que ningún gobernante tiene un derecho absoluto e incuestionable sobre su pueblo.</p>`,
      vocab:[
        { word:'bancarrota', ctx:'"Hacia 1789, el rey Luis XVI enfrentaba una bancarrota del Estado."',
          opts:['Una celebración oficial de la corona','Un tipo de impuesto especial para la nobleza','Una alianza militar entre países','Estado de un gobierno que no puede pagar sus deudas'], c:3,
          def:'Situación en la que un gobierno o entidad no puede pagar sus deudas por falta de recursos.', syn:'quiebra financiera, insolvencia', ant:'solvencia, prosperidad económica',
          ex:'La bancarrota del Estado obligó al gobierno a buscar nuevas formas de recaudar dinero.' },
        { word:'Tercer Estado', ctx:'"El Tercer Estado se declaró a sí mismo Asamblea Nacional."',
          opts:['El pueblo común, sin privilegios de nobleza ni clero','La nobleza y la familia real','El clero y las órdenes religiosas','El ejército y las fuerzas armadas'], c:0,
          def:'Sector social formado por el pueblo común —campesinos, comerciantes, burguesía— sin los privilegios de la nobleza ni del clero.', syn:'estado llano, pueblo común', ant:'nobleza, clero',
          ex:'El Tercer Estado representaba a la gran mayoría de la población, pero tenía menos poder político que la nobleza.' },
        { word:'monarquía constitucional', ctx:'"Francia se transformó en una monarquía constitucional."',
          opts:['Un sistema sin ningún tipo de gobierno','Un sistema donde el rey gobierna sin ningún límite','Un sistema donde el poder del rey está limitado por una constitución y un parlamento','Un sistema donde el pueblo elige directamente a un nuevo rey cada año'], c:2,
          def:'Sistema político en el que el monarca continúa existiendo, pero su poder está limitado por una constitución y comparte el gobierno con un parlamento.', syn:'monarquía limitada, monarquía parlamentaria', ant:'monarquía absoluta',
          ex:'Hoy en día, varios países como España o Reino Unido son monarquías constitucionales.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:7,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Cuál era la principal queja de las trece colonias antes de independizarse?',
          opts:['Que no tenían suficientes soldados','Que debían pagar impuestos a un Parlamento donde no tenían representación','Que el rey no les permitía comerciar con Francia','Que no podían practicar su religión libremente'], c:1,
          hint:'Vuelve al primer párrafo, donde se explica el reclamo contra la corona británica.',
          fb_ok:'✅ Correcto. El texto dice: "debían pagar impuestos a un Parlamento en Londres donde no tenían ningún representante."',
          fb_no:'❌ No es esa. El texto dice: "debían pagar impuestos a un Parlamento en Londres donde no tenían ningún representante." La respuesta correcta era la opción B.' },
        { q:'¿Qué hecho simbólico marca el estallido de la Revolución Francesa, según el texto?',
          opts:['La coronación de Luis XVI','La firma de la Declaración de Independencia','La ejecución de la reina de Francia','La toma de la Bastilla el 14 de julio de 1789'], c:3,
          hint:'Aparece en el segundo párrafo, como un ícono de la revolución.',
          fb_ok:'✅ Exacto. El texto dice: "el pueblo de París tomó la fortaleza-prisión de la Bastilla... en un hecho que se convirtió en el ícono de la revolución."',
          fb_no:'❌ Revisa el segundo párrafo: "el pueblo de París tomó la fortaleza-prisión de la Bastilla". La correcta era la opción D.' },
        { q:'Según el texto, ¿en qué se convirtió Francia inmediatamente después de proclamada la Declaración de los Derechos del Hombre?',
          opts:['En una monarquía constitucional','En una república inmediatamente','En una colonia británica','En un imperio militar'], c:0,
          hint:'Aparece al inicio del tercer párrafo.',
          fb_ok:'✅ Bien leído. El texto dice: "Francia se transformó, al menos temporalmente, en una monarquía constitucional."',
          fb_no:'❌ El texto lo dice claramente: "Francia se transformó, al menos temporalmente, en una monarquía constitucional." La respuesta correcta era la opción A.' }
      ]
    },
    {
      type:'quiz',
      minutes:7,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué se puede decir que la Declaración de Independencia de Estados Unidos refleja ideas ilustradas?',
          opts:['Porque fue escrita en francés','Porque fue aprobada por el rey de Inglaterra','Porque afirma que todos los hombres tienen derechos naturales, como la vida y la libertad','Porque no menciona ningún derecho de las personas'], c:2,
          fb_ok:'✅ Excelente razonamiento. El texto dice que la declaración "afirmaba que todos los hombres tienen derechos naturales: vida, libertad y búsqueda de la felicidad" — exactamente los principios de la Ilustración que viste en la guía anterior.',
          fb_no:'❌ La clave está en que la declaración "afirmaba que todos los hombres tienen derechos naturales: vida, libertad y búsqueda de la felicidad", un principio directamente ilustrado. La respuesta correcta era la C.' },
        { q:'¿Cuál es una diferencia clave entre la independencia de Estados Unidos y la Revolución Francesa?',
          opts:['Ambas fueron exactamente iguales en todo sentido','Estados Unidos se rebeló contra un poder colonial externo, mientras Francia se rebeló contra su propio rey','Francia fue la primera en ocurrir','Estados Unidos no tuvo ninguna guerra de por medio'], c:1,
          fb_ok:'✅ Correcto. Estados Unidos luchó contra Gran Bretaña, una potencia colonial externa; Francia, en cambio, vivió un conflicto interno contra su propio sistema monárquico.',
          fb_no:'❌ La diferencia central es que Estados Unidos se rebeló contra un poder externo (Gran Bretaña), mientras que Francia vivió una revolución interna contra su propio rey. La respuesta correcta era la B.' },
        { q:'¿Por qué crees que la Revolución Francesa se fue "radicalizando" con el paso de los años, llegando a la ejecución del rey en 1793?',
          opts:['Porque el rey aceptó ceder todo su poder sin ningún conflicto','Porque Francia decidió copiar exactamente el modelo de Estados Unidos','Porque no existía ninguna tensión social en el país','Porque la resistencia del rey y la nobleza a ceder poder, sumada a las guerras externas, agravó el conflicto'], c:3,
          fb_ok:'✅ Muy bien. El texto conecta la resistencia del rey y la nobleza con las guerras contra otras monarquías para explicar por qué el proceso se volvió cada vez más extremo, en vez de estabilizarse en una monarquía constitucional.',
          fb_no:'❌ El texto sugiere que "la resistencia del rey y la nobleza a ceder poder, sumada a las guerras... llevaron a una radicalización del proceso." La respuesta correcta era la D.' }
      ]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'¿Crees que la ejecución de Luis XVI en 1793 fue una consecuencia inevitable de la Revolución Francesa, o crees que pudo haberse evitado? Justifica tu respuesta con al menos un detalle del texto.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que fue inevitable porque...' o 'Creo que pudo evitarse si...'",
      modelAnswer:`No hay una sola respuesta correcta, pero una buena respuesta tiene <strong>posición + evidencia del texto</strong>.<br><br>
        <strong>Si argumentas que fue inevitable:</strong> <em>"Creo que fue inevitable porque el texto dice que la resistencia del rey y la nobleza a ceder poder, junto con las guerras externas, fue agravando el conflicto sin que nadie cediera."</em><br><br>
        <strong>Si argumentas que pudo evitarse:</strong> <em>"Creo que pudo evitarse si el rey hubiera aceptado plenamente la monarquía constitucional en vez de resistirse, ya que el texto dice que Francia se transformó 'al menos temporalmente' en ese sistema."</em><br><br>
        ⚠️ Una respuesta como <em>"Sí, porque los reyes son malos"</em> no tiene fundamento en el texto ni en el proceso histórico real.`
    },
    {
      type:'dnd-sequence',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Construye la línea de tiempo de ambas revoluciones',
      instructions:'Estos hitos pertenecen a dos procesos distintos (Estados Unidos y Francia) que ocurrieron casi al mismo tiempo. Ordénalos cronológicamente como si fueran una sola línea de tiempo. Arrastra cada tarjeta o haz clic para seleccionarla y luego clic en el espacio.',
      items:[
        'Las trece colonias declaran su independencia de Gran Bretaña (1776)',
        'Gran Bretaña reconoce oficialmente la independencia de Estados Unidos (1783)',
        'Luis XVI convoca a los Estados Generales por la crisis financiera (mayo de 1789)',
        'El pueblo de París toma la fortaleza de la Bastilla (julio de 1789)',
        'Se proclama la Declaración de los Derechos del Hombre y del Ciudadano (agosto de 1789)',
        'Luis XVI es ejecutado y Francia se convierte en una república (1793)'
      ],
      order:[3,0,5,1,4,2]
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Ahora tú eres periodista de la época!',
      intro:'Este ejercicio te pide sintetizar un hecho histórico en un formato breve y atractivo, tal como lo haría un periodista de 1789.',
      prompt:'✍️ Escribe un titular y 2-3 líneas de noticia anunciando la toma de la Bastilla, como si fueras un periodista parisino de julio de 1789. Explica qué pasó y por qué es importante.',
      hint:'Recuerda: una buena noticia responde qué pasó, cuándo, y por qué le importa a la gente.',
      placeholder:'Escribe aquí tu titular y noticia...',
      example:`<em>"¡EL PUEBLO TOMA LA BASTILLA! Ayer, 14 de julio, cientos de parisinos asaltaron la temida fortaleza-prisión, símbolo del poder absoluto del rey. Este hecho marca el punto de no retorno: el pueblo ha demostrado que no aceptará más el Antiguo Régimen sin luchar."</em><br><br>
        ¿Notaste cómo esta noticia explica el hecho y conecta con el significado histórico más amplio (el fin del Antiguo Régimen)? Eso es lo que distingue una buena crónica histórica.`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué diferencia entre ambas revoluciones te pareció más interesante o sorprendente?',
        '¿Qué estrategia usarás para recordar el orden cronológico de estos hitos?'
      ]
    },
    { type:'report' }
  ]
};

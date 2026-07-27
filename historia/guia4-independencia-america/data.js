const GUIDE_DATA = {
  id: 'historia-g4-independencia-america',
  subject: 'historia',
  subjectLabel: 'Historia',
  subjectIcon: '🏛️',
  title: 'La independencia de América: un proceso continental',
  examRef: 'Unidad 3 · OA16 (parte América) · 2° semestre',
  nextGuideHint: 'Próxima guía: La independencia de Chile y el nuevo orden republicano — evaluando qué cambió y qué continuó tras la independencia.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🌎 Ya viste cómo las ideas ilustradas inspiraron la independencia de Estados Unidos y la Revolución Francesa. ¿Por qué crees que, pocos años después, las colonias españolas en América también empezaron a independizarse casi al mismo tiempo entre ellas?',
      subPrompt:'Piensa: ¿fueron solo las ideas, o también importaron los hechos que ocurrían en España en ese momento?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        La independencia de las colonias hispanoamericanas no fue un hecho aislado de un solo país: fue un <strong>proceso continental</strong>, que ocurrió de forma conectada en distintos territorios entre 1810 y 1824. En esta guía vas a ver que las ideas ilustradas fueron importantes, pero no explican todo: un hecho concreto en España encendió la mecha.<br><br>
        <em>💡 Tip lector:</em> En procesos históricos "continentales", busca siempre <strong>qué hecho detonante compartieron todos los territorios</strong>, y qué diferencias hubo entre ellos.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a explicar la independencia de las colonias hispanoamericanas como un <strong>proceso continental</strong>, reconociendo la <strong>crisis del sistema colonial</strong>, la <strong>apropiación de las ideas ilustradas</strong> y la opción por el <strong>modelo republicano</strong>.'
    },
    {
      type:'teach',
      minutes:8,
      title:'La independencia de América: un proceso continental',
      genre:'Histórico · Conceptual',
      wordCount:'~370 palabras',
      html:`
        <h3>La independencia de América: un proceso continental</h3>
        <p>En 1808, un hecho ocurrido a miles de kilómetros de América cambió el destino de todo el continente: Napoleón Bonaparte invadió España y forzó la <span class="vhl" title="Acto de renunciar o ser obligado a renunciar al trono">abdicación</span> del rey Fernando VII, dejando el trono español vacío. Para las colonias americanas, esto significó una crisis sin precedentes: ¿a quién debían obedecer si ya no había un rey legítimo gobernando España?</p>
        <p>Ante este vacío de poder, entre 1809 y 1810 se formaron en varias ciudades americanas —Buenos Aires, Santiago, Caracas, Bogotá— <span class="vhl" title="Cuerpo colegiado que asume el gobierno de un territorio de forma provisional">juntas de gobierno</span>. Al principio, estas juntas declaraban actuar en nombre del rey cautivo, sin proclamar la independencia todavía. Pero con el paso de los años, muchas de ellas evolucionaron hacia movimientos plenamente independentistas.</p>
        <p>Este proceso no se explica solo por la crisis en España. Durante décadas, los <span class="vhl" title="Hijos de españoles nacidos en América, con riqueza y educación pero sin acceso pleno al poder político colonial">criollos</span> —hijos de españoles nacidos en América— habían acumulado riqueza y educación, pero se les negaba el acceso a los cargos políticos más importantes, reservados casi siempre para los <span class="vhl" title="Españoles nacidos en la península ibérica que ocupaban los principales cargos políticos coloniales">peninsulares</span>. A este resentimiento se sumaron las ideas ilustradas de soberanía popular y modelo republicano, que muchos criollos habían leído y discutido, inspirados también por lo ocurrido en Estados Unidos y Francia.</p>
        <p>Entre 1814 y 1817, España intentó reconquistar varios territorios americanos, prolongando los conflictos más de lo esperado. Sin embargo, líderes como José de San Martín y Simón Bolívar organizaron campañas militares que cruzaban las fronteras de los actuales países: San Martín cruzó los Andes para liberar Chile en 1817, y más tarde impulsó la independencia de Perú. Finalmente, en 1824, la batalla de Ayacucho selló la independencia de Sudamérica continental, dando paso a una nueva generación de repúblicas.</p>`,
      vocab:[
        { word:'abdicación', ctx:'"Napoleón... forzó la abdicación del rey Fernando VII."',
          opts:['Acto de renunciar o ser obligado a renunciar al trono','Una celebración oficial de coronación','Un tipo de impuesto colonial','Un tratado firmado entre dos países'], c:0,
          def:'Acto de renunciar, o ser obligado a renunciar, al trono o a un cargo de autoridad.', syn:'renuncia al poder, deposición', ant:'coronación, ascenso al trono',
          ex:'La abdicación del rey dejó un vacío de poder que nadie sabía cómo resolver.' },
        { word:'junta de gobierno', ctx:'"...se formaron... juntas de gobierno."',
          opts:['Un ejército permanente de la corona','Cuerpo colegiado que asume el gobierno de un territorio de forma provisional','Un impuesto especial para financiar guerras','Una fiesta popular organizada por el pueblo'], c:1,
          def:'Cuerpo colegiado de personas que asume el gobierno de un territorio de forma provisional, generalmente ante la ausencia de una autoridad legítima.', syn:'gobierno provisional, cabildo gobernante', ant:'monarquía absoluta',
          ex:'La junta de gobierno de Buenos Aires se formó en 1810 mientras esperaban noticias del rey cautivo.' },
        { word:'criollos', ctx:'"los criollos... habían acumulado riqueza y educación."',
          opts:['Los indígenas originarios de América','Hijos de españoles nacidos en América, con riqueza y educación pero sin pleno poder político','Los esclavos traídos desde África','Los funcionarios enviados directamente desde España'], c:2,
          def:'Hijos de españoles nacidos en América, que solían tener riqueza y educación, pero sin acceso pleno a los cargos políticos coloniales.', syn:'americanos de origen español', ant:'peninsulares',
          ex:'Muchos líderes de la independencia, como Bolívar, eran criollos que habían estudiado en Europa.' },
        { word:'peninsulares', ctx:'"reservados casi siempre para los peninsulares."',
          opts:['Los habitantes de las islas del Caribe','Los comerciantes extranjeros no españoles','Los soldados de origen indígena','Españoles nacidos en la península ibérica que ocupaban los principales cargos coloniales'], c:3,
          def:'Españoles nacidos en la península ibérica (España) que ocupaban los principales cargos políticos y administrativos en las colonias americanas.', syn:'españoles peninsulares, funcionarios reales', ant:'criollos',
          ex:'Los altos cargos del virreinato solían estar reservados para los peninsulares, no para los criollos.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:6,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Qué hecho de 1808 desencadenó la crisis de la monarquía española?',
          opts:['Napoleón invadió España y forzó la abdicación del rey Fernando VII','El rey Fernando VII declaró la guerra a Francia','Las colonias americanas se independizaron directamente','España firmó un tratado de paz con Inglaterra'], c:0,
          hint:'Aparece en el primer párrafo, al inicio del texto.',
          fb_ok:'✅ Correcto. El texto dice: "Napoleón Bonaparte invadió España y forzó la abdicación del rey Fernando VII, dejando el trono español vacío."',
          fb_no:'❌ No es esa. El texto dice: "Napoleón Bonaparte invadió España y forzó la abdicación del rey Fernando VII." La respuesta correcta era la opción A.' },
        { q:'¿Qué formaron varias ciudades americanas entre 1809 y 1810 ante el vacío de poder?',
          opts:['Nuevos virreinatos leales al emperador francés','Juntas de gobierno','Ejércitos permanentes para invadir España','Alianzas comerciales con Inglaterra'], c:1,
          hint:'Aparece en el segundo párrafo, justo después de mencionar el vacío de poder.',
          fb_ok:'✅ Exacto. El texto dice: "se formaron en varias ciudades americanas... juntas de gobierno."',
          fb_no:'❌ Revisa el segundo párrafo: "se formaron en varias ciudades americanas... juntas de gobierno." La correcta era la opción B.' },
        { q:'¿Qué batalla selló la independencia de Sudamérica continental en 1824?',
          opts:['La batalla de Chacabuco','La toma de la Bastilla','La batalla de Ayacucho','La batalla de Trafalgar'], c:2,
          hint:'Aparece al final del último párrafo.',
          fb_ok:'✅ Bien leído. El texto dice: "en 1824, la batalla de Ayacucho selló la independencia de Sudamérica continental."',
          fb_no:'❌ El texto lo indica claramente: "en 1824, la batalla de Ayacucho selló la independencia de Sudamérica continental." La respuesta correcta era la opción C.' }
      ]
    },
    {
      type:'quiz',
      minutes:6,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué crees que las primeras juntas de gobierno de 1810 declaraban actuar "en nombre del rey cautivo" en vez de proclamar la independencia de inmediato?',
          opts:['Porque en realidad no querían ningún tipo de autogobierno','Porque presentarse como leales al rey era políticamente más seguro mientras consolidaban su propio poder','Porque el rey se los ordenó directamente desde su cautiverio','Porque no sabían que el rey había sido capturado'], c:3,
          fb_ok:'✅ Excelente razonamiento. Aunque el texto no lo dice con esas palabras exactas, declararse leales a un rey ausente les permitía gobernarse a sí mismos sin aparecer de inmediato como rebeldes, ganando tiempo y legitimidad.',
          fb_no:'❌ Piensa en la estrategia política: declararse leales a un rey cautivo permitía a las juntas gobernarse a sí mismas sin parecer rebeldes desde el principio. La respuesta correcta era la D.' },
        { q:'¿Qué relación existe entre la tensión "criollos-peninsulares" y el proceso independentista?',
          opts:['Ninguna relación; fueron procesos completamente separados','El resentimiento de los criollos por no tener poder político, pese a su riqueza y educación, fue un motor importante del proceso','Los peninsulares fueron quienes impulsaron la independencia','Los criollos preferían mantener el sistema colonial tal como estaba'], c:0,
          fb_ok:'✅ Muy bien. El texto conecta directamente el resentimiento de los criollos —con riqueza y educación pero sin acceso al poder— con la disposición a sumarse a las ideas independentistas.',
          fb_no:'❌ El texto conecta el resentimiento de los criollos —con riqueza y educación pero sin poder político— con su disposición a apoyar la independencia. La respuesta correcta era la B.' },
        { q:'¿Por qué se describe la independencia hispanoamericana como un "proceso continental"?',
          opts:['Porque solo ocurrió en un único país de América','Porque ocurrió de forma conectada y casi simultánea en distintos territorios, con líderes cuyas campañas cruzaban fronteras actuales','Porque fue organizado enteramente por el gobierno español','Porque no tuvo ninguna relación entre los distintos territorios americanos'], c:1,
          fb_ok:'✅ Correcto. El texto muestra cómo San Martín y Bolívar organizaron campañas que cruzaban las fronteras de los actuales países, conectando procesos que ocurrían casi al mismo tiempo en distintos territorios.',
          fb_no:'❌ El texto describe cómo líderes como San Martín cruzaron fronteras actuales (de Argentina a Chile, de Chile a Perú) conectando los procesos. La respuesta correcta era la B.' }
      ]
    },
    {
      type:'dnd-sequence',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Construye la línea de tiempo de la independencia americana',
      instructions:'Ordena estos hitos cronológicamente. Arrastra cada tarjeta o haz clic para seleccionarla y luego clic en el espacio.',
      items:[
        'Napoleón invade España y captura al rey Fernando VII (1808)',
        'Se forman las primeras juntas de gobierno en América, jurando fidelidad al rey cautivo (1810)',
        'España reconquista temporalmente varios territorios americanos (1814–1817)',
        'José de San Martín cruza los Andes y libera Chile en la batalla de Chacabuco (1817)',
        'San Martín impulsa la independencia del Perú (1821)',
        'La batalla de Ayacucho sella la independencia de Sudamérica continental (1824)'
      ],
      order:[2,4,0,5,1,3]
    },
    {
      type:'match-pairs',
      minutes:6,
      skillTag:'organizacion',
      label:'Causa y efecto',
      title:'Relaciona cada causa con su efecto histórico',
      instructions:'Haz clic en una causa (izquierda) y luego en el efecto que le corresponde (derecha). Si te equivocas, la tarjeta destella en rojo y puedes intentar de nuevo.',
      left:[
        'Napoleón invade España y captura al rey Fernando VII',
        'Los criollos tenían riqueza y educación pero no poder político',
        'Las ideas ilustradas de soberanía popular llegan a América',
        'España intenta reconquistar sus antiguos territorios tras 1814'
      ],
      right:[
        'Los procesos independentistas se prolongan varios años más de lo esperado',
        'Se genera un vacío de poder que las colonias aprovechan para formar juntas de gobierno',
        'Los criollos comienzan a cuestionar la legitimidad del dominio colonial español',
        'Se genera un resentimiento hacia los peninsulares que sí ocupaban los cargos de gobierno'
      ],
      pairs:[[0,1],[1,3],[2,2],[3,0]]
    },
    {
      type:'open',
      minutes:4,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'¿Crees que la independencia hispanoamericana fue impulsada principalmente por las ideas de la Ilustración, o por las circunstancias de la crisis en España? Justifica tu respuesta con al menos un detalle de la guía.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que fue principalmente por...' o 'Creo que fue una combinación de...'",
      modelAnswer:`No hay una sola respuesta correcta, pero una buena respuesta usa <strong>evidencia concreta de la guía</strong>.<br><br>
        <strong>Si argumentas que fueron las circunstancias:</strong> <em>"Creo que el detonante fue la crisis en España, porque la guía dice que todo comenzó cuando Napoleón capturó al rey en 1808, generando un vacío de poder."</em><br><br>
        <strong>Si argumentas que fueron las ideas:</strong> <em>"Creo que las ideas ilustradas fueron fundamentales, porque sin ellas los criollos no habrían cuestionado el modelo colonial, solo habrían esperado a que volviera el rey."</em><br><br>
        Una buena respuesta también puede combinar ambas causas — la guía sugiere que ninguna por sí sola explica todo el proceso.`
    },
    {
      type:'challenge',
      minutes:3,
      title:'¡Ahora tú redactas un bando de 1810!',
      intro:'Este ejercicio te pide capturar la ambigüedad histórica real: las primeras juntas no se declaraban independientes, pero tampoco querían seguir bajo control total de España.',
      prompt:'✍️ Escribe un bando breve (3-4 líneas), como si fueras parte de una junta de gobierno de 1810, anunciando el nuevo gobierno mientras juras lealtad "provisional" al rey cautivo Fernando VII.',
      hint:'Recuerda: debes sonar leal al rey, pero dejar claro que el gobierno real está ahora en manos de la junta local.',
      placeholder:'Al pueblo... Hacemos saber que...',
      example:`<em>"Al pueblo: ante la ausencia de nuestro legítimo soberano, el rey Fernando VII, cautivo en manos del usurpador francés, esta junta asume el gobierno en su nombre, para preservar el orden y los derechos de estos territorios hasta su feliz regreso al trono."</em><br><br>
        ¿Notaste cómo el bando suena leal al rey, pero en la práctica anuncia un nuevo gobierno local? Esa doble lectura fue clave en 1810.`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo que más te sorprendió del proceso de independencia hispanoamericana?',
        '¿Qué estrategia usarás para recordar la diferencia entre criollos y peninsulares?'
      ]
    },
    { type:'report' }
  ]
};

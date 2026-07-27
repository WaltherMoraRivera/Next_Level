const GUIDE_DATA = {
  id: 'lenguaje-g3-tesla-visionario',
  subject: 'lenguaje',
  subjectLabel: 'Lenguaje',
  subjectIcon: '📖',
  title: 'Nikola Tesla, el genio que iluminó el mundo',
  examRef: 'Comprensión lectora · Biográfico/Histórico',
  nextGuideHint: 'Próxima guía: Texto Periodístico/Argumentativo → análisis del punto de vista del autor y comparación entre fuentes.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'⚡ ¿Conoces a alguien que haya tenido una gran idea, pero que otra persona se haya llevado el reconocimiento? ¿Te parece justo?',
      subPrompt:'Piensa también: ¿por qué crees que a veces la historia "olvida" a personas muy importantes?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        La historia de la ciencia está llena de rivalidades, genios incomprendidos y reconocimientos tardíos. El texto que leerás a continuación es una <strong>biografía</strong>: un texto que narra la vida real de una persona, ordenando los hechos generalmente en orden cronológico.<br><br>
        <em>💡 Tip lector:</em> En las biografías, presta atención a las <strong>fechas, decisiones importantes y a cómo cambia la vida del personaje</strong> a lo largo del tiempo. Además, fíjate si el autor deja alguna idea sugerida "entre líneas" sobre cómo debemos interpretar esa vida.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a practicar la <strong>cronología de una biografía</strong>, reconocer <strong>relaciones causa-efecto históricas</strong>, identificar <strong>ironía</strong> en un texto, y <strong>argumentar tu opinión</strong> con evidencia.'
    },
    {
      type:'teach',
      minutes:9,
      title:'Nikola Tesla: el genio que iluminó el mundo y murió en la sombra',
      genre:'Biográfico / Histórico',
      wordCount:'~390 palabras',
      html:`
        <h3>Nikola Tesla: el genio que iluminó el mundo y murió en la sombra</h3>
        <p>Nikola Tesla nació en 1856 en un pequeño pueblo del Imperio Austrohúngaro, hoy parte de Croacia. Desde niño mostró ser un <span class="vhl" title="Persona con capacidades excepcionales">prodigio</span>: podía realizar cálculos matemáticos complejos de memoria y decía visualizar inventos completos en su mente antes de construirlos. Esta capacidad asombrosa lo acompañaría toda su vida.</p>
        <p>En 1884 emigró a Estados Unidos con apenas cuatro centavos en el bolsillo y una carta de recomendación para Thomas Edison, el inventor más famoso de la época. Edison lo contrató, pero pronto surgió una <span class="vhl" title="Competencia entre quienes buscan superarse mutuamente">rivalidad</span> entre ambos: Tesla defendía la corriente alterna (CA) como el sistema ideal para transportar electricidad a largas distancias, mientras Edison había invertido toda su fortuna en la corriente continua (CC). Edison se negó a reconocer las ventajas del sistema de Tesla y llegó incluso a organizar demostraciones públicas para asustar a la gente sobre los peligros de la corriente alterna.</p>
        <p>A pesar de la oposición de Edison, Tesla registró decenas de <span class="vhl" title="Documento que protege legalmente una invención">patentes</span> por sus inventos y encontró en George Westinghouse a un socio dispuesto a apostar por la corriente alterna. La llamada "guerra de las corrientes" terminó con la victoria del sistema de Tesla: hoy, casi toda la electricidad que llega a nuestras casas viaja como corriente alterna.</p>
        <p>Sin embargo, Tesla era un hombre tan <span class="vhl" title="Capaz de anticipar ideas antes que los demás">visionario</span> como <span class="vhl" title="De comportamiento inusual o extravagante">excéntrico</span>. En sus últimos años invirtió gran parte de su fortuna en la Torre Wardenclyffe, un proyecto para transmitir electricidad e información de forma inalámbrica alrededor de todo el planeta. El proyecto fracasó por falta de financiamiento, y Tesla pasó sus últimos días en un hotel de Nueva York, alimentando palomas y viviendo casi en el olvido, arruinado económicamente.</p>
        <p>Murió en 1943, solo y en la pobreza. Sin embargo, su <span class="vhl" title="Aquello que una persona deja a las siguientes generaciones">legado</span> sobrevivió mucho más que su fortuna: hoy su nombre es sinónimo de innovación, una reconocida marca de automóviles eléctricos lleva su nombre, y se le considera uno de los padres de la electricidad moderna. La historia de Tesla resulta, en cierto modo, irónica: el hombre que ayudó a iluminar al mundo entero murió casi en la oscuridad del olvido.</p>`,
      vocab:[
        { word:'prodigio', ctx:'"Desde niño mostró ser un prodigio: podía realizar cálculos matemáticos complejos de memoria."',
          opts:['Una persona con capacidades excepcionales, fuera de lo común','Una persona con problemas de aprendizaje','Una persona tímida que evita a los demás','Una persona que memoriza sin comprender'], c:0,
          def:'Persona que posee una capacidad o talento excepcional, fuera de lo común, especialmente desde temprana edad.', syn:'genio, talento excepcional', ant:'persona común, mediocre',
          ex:'Esa niña es un prodigio del ajedrez: a los ocho años ya vencía a jugadores adultos.' },
        { word:'rivalidad', ctx:'"Pronto surgió una rivalidad entre ambos: Tesla defendía la corriente alterna..."',
          opts:['Una amistad basada en la confianza mutua','Una competencia o enfrentamiento entre quienes buscan superarse mutuamente','Un acuerdo comercial firmado por escrito','Una diferencia de opiniones sin consecuencias'], c:1,
          def:'Competencia o enfrentamiento entre dos o más personas que buscan superarse o vencerse mutuamente.', syn:'competencia, enfrentamiento', ant:'alianza, colaboración',
          ex:'La rivalidad entre los dos equipos de fútbol lleva más de cincuenta años.' },
        { word:'patente', ctx:'"Tesla registró decenas de patentes por sus inventos."',
          opts:['Un premio otorgado por un gobierno extranjero','Un tipo de contrato de trabajo temporal','Un documento oficial que protege legalmente la autoría de una invención','Un diploma universitario en ingeniería'], c:2,
          def:'Documento oficial que reconoce y protege legalmente la autoría de una invención, impidiendo que otros la copien sin permiso.', syn:'registro de invención, derecho de autor técnico', ant:'(no tiene antónimo directo)',
          ex:'La empresa registró una patente para proteger su nueva tecnología de baterías.' },
        { word:'visionario', ctx:'"Tesla era un hombre tan visionario como excéntrico."',
          opts:['Una persona que solo se preocupa por el presente','Una persona que copia las ideas de otros','Una persona que rechaza cualquier tipo de cambio','Una persona capaz de imaginar o anticipar ideas y avances antes que los demás'], c:3,
          def:'Persona capaz de imaginar, anticipar o proyectar ideas, avances o el futuro antes de que los demás lo hagan.', syn:'futurista, precursor', ant:'conformista, conservador',
          ex:'Fue un visionario: imaginó los teléfonos inteligentes décadas antes de que existieran.' },
        { word:'excéntrico', ctx:'"Tesla era un hombre tan visionario como excéntrico."',
          opts:['De comportamiento inusual o extravagante, distinto a lo convencional','Extremadamente ordenado y predecible en sus rutinas','Tímido y poco sociable con otras personas','Enfocado únicamente en ganar dinero'], c:0,
          def:'Que tiene un comportamiento inusual, extravagante o fuera de lo convencional.', syn:'extravagante, peculiar', ant:'convencional, común',
          ex:'El artista era conocido por su forma excéntrica de vestir y sus ideas poco comunes.' },
        { word:'legado', ctx:'"Su legado sobrevivió mucho más que su fortuna."',
          opts:['El dinero que una persona deja a sus herederos','Aquello que una persona deja a las generaciones siguientes, como ideas u obras','Un tipo de documento legal firmado ante notario','Una deuda que queda pendiente de pago'], c:1,
          def:'Aquello (ideas, conocimientos, obras o logros) que una persona deja como herencia a las generaciones siguientes.', syn:'herencia, huella', ant:'olvido, vacío',
          ex:'El legado de esa científica sigue inspirando a nuevas generaciones de investigadoras.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:7,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Con cuánto dinero llegó Nikola Tesla a Estados Unidos en 1884?',
          opts:['Con una fortuna heredada de su familia','Con el salario adelantado por Thomas Edison','Con apenas cuatro centavos en el bolsillo','Con el dinero de la venta de sus primeras patentes'], c:2,
          hint:'La cifra exacta aparece al inicio del segundo párrafo.',
          fb_ok:'✅ Correcto. El texto lo dice de forma explícita: "emigró a Estados Unidos con apenas cuatro centavos en el bolsillo y una carta de recomendación para Thomas Edison."',
          fb_no:'❌ No es esa. El texto dice: "emigró a Estados Unidos con apenas cuatro centavos en el bolsillo". La respuesta correcta era la opción C.' },
        { q:'¿Quién fue el socio que apostó por el sistema de corriente alterna de Tesla?',
          opts:['Thomas Edison','J.P. Morgan','Alexander Graham Bell','George Westinghouse'], c:3,
          hint:'Aparece en el tercer párrafo, junto a la mención de las patentes.',
          fb_ok:'✅ Exacto. El texto explica: "Tesla... encontró en George Westinghouse a un socio dispuesto a apostar por la corriente alterna."',
          fb_no:'❌ Revisa el tercer párrafo: "Tesla... encontró en George Westinghouse a un socio dispuesto a apostar por la corriente alterna." La correcta era la opción D.' },
        { q:'Según el texto, ¿cómo pasó Tesla sus últimos días de vida?',
          opts:['Viviendo en un hotel de Nueva York, alimentando palomas y en la pobreza','Dando conferencias sobre sus inventos en universidades','Trabajando nuevamente junto a Thomas Edison','Retirado en su país natal junto a su familia'], c:0,
          hint:'Se describe en el cuarto párrafo, después de mencionar la Torre Wardenclyffe.',
          fb_ok:'✅ Bien leído. El texto es directo: "Tesla pasó sus últimos días en un hotel de Nueva York, alimentando palomas y viviendo casi en el olvido, arruinado económicamente."',
          fb_no:'❌ El texto lo indica claramente: "Tesla pasó sus últimos días en un hotel de Nueva York, alimentando palomas". La respuesta correcta era la A.' }
      ]
    },
    {
      type:'quiz',
      minutes:7,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué crees que Edison organizó demostraciones públicas para asustar a la gente sobre los peligros de la corriente alterna?',
          opts:['Porque genuinamente le preocupaba la seguridad de las personas','Porque había invertido toda su fortuna en la corriente continua y veía la CA como una amenaza a su negocio','Porque el gobierno se lo exigió por ley','Porque Tesla se lo había pedido como parte de un experimento conjunto'], c:1,
          fb_ok:'✅ Excelente razonamiento. El texto conecta dos ideas: Edison "había invertido toda su fortuna en la corriente continua" y luego "se negó a reconocer las ventajas del sistema de Tesla". La causa de su oposición era proteger su inversión económica.',
          fb_no:'❌ Piensa en la relación causa-efecto: Edison "había invertido toda su fortuna en la corriente continua". Por eso el avance de la CA amenazaba su negocio. La respuesta correcta era la B.' },
        { q:'¿Qué se puede inferir sobre la personalidad de Tesla a partir de que invirtiera gran parte de su fortuna en la Torre Wardenclyffe, un proyecto que finalmente fracasó?',
          opts:['Que era una persona cautelosa que evitaba cualquier riesgo económico','Que no entendía nada sobre cómo administrar el dinero','Que era capaz de arriesgarlo todo por una idea en la que creía profundamente','Que prefería el reconocimiento inmediato antes que la innovación'], c:2,
          fb_ok:'✅ Muy bien. Invertir "gran parte de su fortuna" en un proyecto tan ambicioso revela a una persona dispuesta a sacrificar su estabilidad económica por sus ideas.',
          fb_no:'❌ El texto dice que invirtió "gran parte de su fortuna" en un proyecto de altísimo riesgo. Eso no es cautela, sino disposición a apostar todo por una idea. La respuesta correcta era la C.' },
        { q:'El texto describe la historia de Tesla como "irónica". ¿Por qué crees que se usa esa palabra?',
          opts:['Porque Tesla nunca inventó nada importante','Porque Edison terminó siendo más pobre que Tesla','Porque la historia de Tesla es cómica y fue contada como un chiste','Porque el hombre que ayudó a iluminar el mundo con electricidad murió pobre y casi olvidado'], c:3,
          fb_ok:'✅ Correcto. La ironía aparece cuando ocurre lo contrario de lo que se esperaría: quien contribuyó a "iluminar" al mundo entero terminó sus días "en la oscuridad del olvido". Reconocer la ironía es una habilidad de lectura más avanzada.',
          fb_no:'❌ La ironía está en el contraste: Tesla ayudó a llevar electricidad al mundo entero, pero él mismo murió en el olvido y la pobreza. La respuesta correcta era la D.' }
      ]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'¿Crees que la falta de reconocimiento de Tesla en vida se debió principalmente a la mala suerte, a las decisiones de Edison, o a las propias decisiones de Tesla (como invertir toda su fortuna en la Torre Wardenclyffe)? Justifica tu respuesta usando al menos un detalle del texto.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que... porque el texto dice que...' o 'En mi opinión...'",
      modelAnswer:`No hay una sola respuesta correcta, pero una buena respuesta tiene <strong>posición + argumento con evidencia del texto</strong>.<br><br>
        <strong>Si argumentas que fue por las decisiones de Edison:</strong> <em>"Creo que gran parte de la falta de reconocimiento se debió a Edison, ya que el texto dice que 'se negó a reconocer las ventajas del sistema de Tesla'."</em><br><br>
        <strong>Si argumentas que fue por las propias decisiones de Tesla:</strong> <em>"Pienso que también influyeron sus propias decisiones, porque el texto cuenta que invirtió 'gran parte de su fortuna' en un proyecto tan riesgoso como la Torre Wardenclyffe."</em><br><br>
        Una buena respuesta incluso puede combinar ambas causas, mostrando que un hecho histórico rara vez tiene una sola explicación.`,
      calloutTitle:'🎭 Sobre la ironía:',
      calloutText:'Ya identificaste en la sección anterior por qué la historia de Tesla es irónica. La ironía ocurre cuando el resultado de una situación es opuesto a lo que se esperaría. Reconocerla te ayuda a leer "entre líneas" las intenciones del autor.'
    },
    {
      type:'dnd-sequence',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Construye la línea de tiempo de Tesla',
      instructions:'Arrastra cada tarjeta al espacio correcto para reconstruir la línea de tiempo de la vida de Tesla, en orden cronológico. También puedes hacer clic en una tarjeta y luego en un espacio para colocarla.',
      items:[
        'Tesla nace en el Imperio Austrohúngaro y muestra capacidades excepcionales desde niño',
        'Tesla emigra a Estados Unidos y comienza a trabajar junto a Thomas Edison',
        'Surge la rivalidad entre Tesla y Edison por la corriente alterna y la corriente continua',
        'Tesla se asocia con George Westinghouse y gana la "guerra de las corrientes"',
        'Tesla invierte gran parte de su fortuna en la fallida Torre Wardenclyffe',
        'Tesla muere en la pobreza en 1943, aunque su legado perdura hasta hoy'
      ],
      order:[3,0,5,1,4,2]
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Escríbele una carta a Tesla!',
      intro:'Este ejercicio desarrolla tu capacidad de conectar el pasado con el presente, y de comunicar ideas en formato de carta. No hay respuesta incorrecta, pero sí respuestas más elaboradas que otras.',
      prompt:'✍️ Escribe una breve carta dirigida a Nikola Tesla. Cuéntale cómo se usa la electricidad hoy en día gracias a su invento, y qué le dirías sobre cómo terminó su vida.',
      hint:'Recuerda: una carta suele incluir un saludo, el mensaje principal y una despedida. Intenta usar un tono cercano, como si de verdad pudiera leerla.',
      placeholder:'Estimado Nikola Tesla...',
      example:`<em>"Estimado señor Tesla: le escribo desde un futuro donde casi toda la electricidad de nuestras casas funciona gracias a su sistema de corriente alterna. Es una lástima que usted no haya podido disfrutar del reconocimiento que merecía en vida, pero quiero que sepa que hoy su nombre es sinónimo de genio e innovación. Atentamente, un estudiante agradecido."</em><br><br>
        ¿Notaste cómo esta carta conecta un dato del texto con una reflexión personal? Un buen escritor combina información real con una voz propia.`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué fue lo más difícil de esta guía para ti?',
        '¿Qué estrategia usarás la próxima vez para mejorar en eso?'
      ]
    },
    { type:'report' }
  ]
};

const GUIDE_DATA = {
  id: 'lenguaje-g1-mapa-relojero',
  subject: 'lenguaje',
  subjectLabel: 'Lenguaje',
  subjectIcon: '📖',
  title: 'El mapa del relojero',
  examRef: 'Comprensión lectora · Narrativo',
  nextGuideHint: 'Próxima guía: Texto Científico/Informativo → ideas principales vs. secundarias, causa-efecto.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'🔮 ¿Alguna vez encontraste algo inesperado en un lugar cotidiano? ¿Qué fue? ¿Qué hiciste?',
      subPrompt:'Si nunca te ha pasado: imagina que encuentras un mapa escondido en un objeto antiguo. ¿Qué harías?',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Cuando encontramos algo inesperado, nuestro primer instinto puede ser guardarlo, contárselo a alguien, o investigarlo.
        El texto que leerás a continuación explora exactamente ese dilema en una joven de tu edad.<br><br>
        Mientras lees, fíjate en <strong>cómo reacciona el personaje</strong> y pregúntate si harías lo mismo.<br><br>
        <em>💡 Tip lector:</em> Antes de leer un texto narrativo, es útil preguntarse: <strong>¿quién es el personaje principal?, ¿dónde ocurre la historia?, ¿cuál podría ser el conflicto?</strong>`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a practicar <strong>identificar información explícita e implícita</strong> en un relato, <strong>deducir el significado de palabras nuevas</strong> por el contexto, y <strong>ordenar los eventos</strong> de una historia según su secuencia.'
    },
    {
      type:'teach',
      minutes:9,
      title:'El mapa del relojero',
      genre:'Narrativo · Misterio',
      wordCount:'~310 palabras',
      html:`
        <h3>El mapa del relojero</h3>
        <p>Valentina tenía trece años y una curiosidad imposible de apagar. Aquella tarde de martes, su madre la había enviado a la relojería de don Aurelio a buscar una pila de repuesto para el reloj de cocina. Era un local <span class="vhl" title="Estrecho, de poco espacio">angosto</span> y oscuro, ubicado en el primer piso de un edificio antiguo del centro, con vitrinas llenas de relojes que tictaqueaban sin parar, como si el tiempo latiera más rápido ahí adentro.</p>
        <p>Don Aurelio no estaba en el mostrador. Valentina esperó unos minutos, mirando los engranajes expuestos en una vitrina, cuando escuchó un golpe sordo en el fondo del local. Se asomó hacia la <span class="vhl" title="Espacio detrás del mostrador de una tienda">trastienda</span> y vio que un reloj de pie antiguo —casi tan alto como ella— se había inclinado peligrosamente contra la pared. Sin pensarlo, Valentina corrió a sostenerlo.</p>
        <p>El mueble crujió. Valentina lo empujó con fuerza hacia la pared, pero sin querer presionó una <span class="vhl" title="Franja decorativa que sobresale de una superficie">moldura</span> lateral que cedió hacia adentro. Con un clic mecánico, se abrió un pequeño compartimento secreto en la base del reloj. Dentro, envuelto en un paño de <span class="vhl" title="Tela suave con pelillo corto y denso">terciopelo</span> rojo, había un tubo de cuero marrón.</p>
        <p>Valentina lo abrió despacio. Dentro encontró un papel amarillento y <span class="vhl" title="Que se rompe fácilmente por ser muy viejo">quebradizo</span>, enrollado con cuidado. Era un mapa. No tenía título, pero mostraba una red de pasillos subterráneos bajo lo que parecía ser el barrio donde ella vivía. En el centro del mapa había un símbolo: un ojo rodeado de engranajes.</p>
        <p>Escuchó pasos desde la entrada. Actuando por <span class="vhl" title="Reacción automática sin razonamiento consciente">instinto</span>, Valentina enrolló el mapa, lo guardó en su mochila y volvió al mostrador justo cuando don Aurelio aparecía desde la calle con una bolsa del supermercado.</p>
        <p>—¿Cuánto tiempo llevas esperando, muchacha? —preguntó el viejo, sin notar nada.</p>
        <p>—Solo un momento —respondió ella, sintiendo el corazón latirle en la garganta.</p>`,
      vocab:[
        { word:'angosto', ctx:'"Era un local angosto y oscuro, ubicado en el primer piso de un edificio antiguo."',
          opts:['Amplio y bien iluminado','Estrecho, de poco espacio','Antiguo y mal cuidado','Silencioso y sin clientes'], c:1,
          def:'Estrecho, que tiene poca anchura o espacio.', syn:'estrecho, reducido, exiguo', ant:'amplio, ancho, espacioso',
          ex:'El pasillo del edificio era tan angosto que dos personas apenas podían caminar juntas sin chocarse.' },
        { word:'trastienda', ctx:'"Se asomó hacia la trastienda y vio que un reloj de pie antiguo se había inclinado."',
          opts:['La vitrina principal de una tienda','La sala de espera de un local','El espacio que está detrás del área de atención al público','La bodega del piso superior'], c:2,
          def:'Habitación o espacio que está detrás del mostrador de una tienda, generalmente de uso privado del dueño.', syn:'depósito trasero, trastienda', ant:'(no tiene antónimo directo)',
          ex:'El zapatero salió de la trastienda con un par de zapatos recién reparados.' },
        { word:'moldura', ctx:'"Sin querer presionó una moldura lateral que cedió hacia adentro."',
          opts:['Una manilla o picaporte de metal','Una franja decorativa que sobresale de una superficie','Un tornillo oculto en la madera','Una bisagra disimulada en la pared'], c:1,
          def:'Elemento decorativo que sobresale ligeramente de una superficie, como un relieve o ribete en un mueble o pared.', syn:'relieve, cornisa, filete decorativo', ant:'(no tiene antónimo directo)',
          ex:'El carpintero talló una moldura delgada en el marco de la ventana para darle un aspecto más elegante.' },
        { word:'terciopelo', ctx:'"Dentro, envuelto en un paño de terciopelo rojo, había un tubo de cuero marrón."',
          opts:['Un tipo de madera fina y costosa','Una tela suave con pelillo corto y denso','Un papel grueso resistente al agua','Un metal brillante parecido al cobre'], c:1,
          def:'Tela fina con una superficie aterciopelada, formada por pelillos cortos y densos, muy suave al tacto.', syn:'felpa, raso suave', ant:'tela áspera, arpillera',
          ex:'La caja donde guardaba las joyas estaba forrada por dentro con terciopelo azul oscuro.' },
        { word:'quebradizo', ctx:'"Dentro encontró un papel amarillento y quebradizo, enrollado con cuidado."',
          opts:['Muy valioso y difícil de conseguir','Con muchos colores y dibujos','Que se rompe o hace pedazos con facilidad','Que huele a humedad y encierro'], c:2,
          def:'Que se quiebra, fractura o deshace con facilidad, especialmente por ser muy viejo o seco.', syn:'frágil, delicado, endeble', ant:'resistente, sólido, robusto',
          ex:'Las hojas secas del otoño son quebradizas: se rompen en pedazos al pisarlas.' },
        { word:'instinto', ctx:'"Actuando por instinto, Valentina enrolló el mapa y lo guardó en su mochila."',
          opts:['Un plan cuidadosamente elaborado con anticipación','Una reacción automática que no pasa por el razonamiento consciente','Un recuerdo del pasado que guía las acciones','Una orden que alguien le había dado antes'], c:1,
          def:'Impulso natural que lleva a actuar de una forma determinada sin reflexionar ni planear conscientemente.', syn:'impulso, reflejo, reacción instintiva', ant:'razonamiento, deliberación, reflexión',
          ex:'Por instinto, el gato saltó de la silla justo un segundo antes de que cayera el jarrón.' }
      ]
    },
    {
      type:'guided-practice',
      minutes:7,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'¿Con qué propósito fue enviada Valentina a la relojería de don Aurelio?',
          opts:['Entregar un paquete al local','Comprar una pila de repuesto para el reloj de cocina','Recoger un reloj que habían llevado a reparar','Buscar un regalo para su madre'], c:1,
          hint:'Vuelve al primer párrafo y busca qué le pidió comprar su madre.',
          fb_ok:'✅ Correcto. El texto dice directamente: "su madre la había enviado a la relojería de don Aurelio a buscar una pila de repuesto para el reloj de cocina". Esta es comprensión literal: la respuesta está escrita con exactitud en el texto.',
          fb_no:'❌ No es esa. Vuelve al primer párrafo: "su madre la había enviado a la relojería de don Aurelio a buscar una pila de repuesto para el reloj de cocina". La respuesta correcta era la opción B. En las preguntas literales, la clave es releer el texto buscando la información exacta.' },
        { q:'¿Qué encontró Valentina dentro del compartimento secreto del reloj de pie?',
          opts:['Una llave antigua y una nota doblada','Monedas de oro con símbolos grabados','Un tubo de cuero marrón con un mapa enrollado dentro','Un sobre sellado con cartas escritas a mano'], c:2,
          hint:'Piensa en qué envolvía el paño de terciopelo rojo.',
          fb_ok:'✅ Exacto. El texto describe: "Dentro, envuelto en un paño de terciopelo rojo, había un tubo de cuero marrón" y dentro de él "un papel amarillento y quebradizo, enrollado con cuidado. Era un mapa."',
          fb_no:'❌ Revisa el tercer párrafo con atención. El texto dice que dentro del compartimento había "un tubo de cuero marrón" que contenía "un papel amarillento y quebradizo… Era un mapa." La correcta era la opción C.' },
        { q:'¿Qué símbolo aparecía en el centro del mapa que encontró Valentina?',
          opts:['Una estrella rodeada de llamas','Un reloj con las manecillas rotas','Una brújula apuntando al sur','Un ojo rodeado de engranajes'], c:3,
          hint:'El símbolo se describe justo en el cuarto párrafo, al final.',
          fb_ok:'✅ Bien leído. El texto afirma: "En el centro del mapa había un símbolo: un ojo rodeado de engranajes." El autor destaca este detalle porque seguramente es importante para la historia.',
          fb_no:'❌ Lee con cuidado el cuarto párrafo. El texto dice explícitamente: "En el centro del mapa había un símbolo: un ojo rodeado de engranajes." La respuesta correcta era la opción D. Cuando busques detalles específicos, subraya mentalmente mientras lees.' }
      ]
    },
    {
      type:'quiz',
      minutes:7,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué crees que el compartimento secreto estaba escondido dentro del reloj de pie?',
          opts:['Era un defecto de fabricación que el reloj tenía desde la fábrica','Don Aurelio lo había construido para guardar el dinero del local','Alguien lo diseñó con cuidado para ocultar el mapa de personas que no supieran buscarlo','Valentina lo confundió con un compartimento normal de herramientas'], c:2,
          fb_ok:'✅ Excelente razonamiento. El texto no lo dice directamente, pero los detalles —la palanca oculta en la moldura, el tubo envuelto en terciopelo, el mapa con pasillos subterráneos— sugieren que alguien lo ocultó con propósito. Eso se llama inferencia: llegar a conclusiones usando las pistas que el autor dejó.',
          fb_no:'❌ Piensa en los detalles: el compartimento tenía una palanca disimulada en una moldura, el mapa estaba envuelto en terciopelo y mostraba pasillos secretos bajo el barrio. Todos estos detalles apuntan a que fue ocultado intencionalmente. La correcta era la C.' },
        { q:'¿Qué nos dice sobre el carácter de Valentina el hecho de que corriera a sostener el reloj "sin pensarlo"?',
          opts:['Que es una persona impulsiva a quien le gusta romper cosas','Que tenía miedo de que don Aurelio la culpara si se caía','Que es una persona que reacciona rápido ante situaciones de riesgo','Que quería aprovechar la oportunidad de explorar la trastienda'], c:2,
          fb_ok:'✅ Muy bien. La frase "sin pensarlo" es la clave: indica un acto instintivo, no calculado. Eso revela que Valentina tiene reflejos rápidos y actúa para proteger en situaciones de urgencia. Esto se llama caracterización indirecta.',
          fb_no:'❌ La pista está en "sin pensarlo". Cuando alguien actúa de ese modo ante un peligro, el autor nos muestra su instinto protector y su capacidad de reacción. La respuesta correcta era la C.' },
        { q:'¿Qué nos indica la frase "sintiendo el corazón latirle en la garganta" al final del texto?',
          opts:['Que Valentina estaba enferma y le costaba respirar','Que Valentina sentía nerviosismo y tensión por lo que acababa de hacer','Que Valentina estaba exhausta de haber corrido por la tienda','Que Valentina sentía alegría y emoción por la aventura'], c:1,
          fb_ok:'✅ Correcto. "Sentir el corazón en la garganta" es una expresión figurada que describe la tensión física del nerviosismo extremo. El autor usa esta metáfora para mostrar su estado emocional sin decirlo con palabras simples.',
          fb_no:'❌ "El corazón latirle en la garganta" no es literal: es una metáfora corporal que describe el nerviosismo intenso. La respuesta correcta era la B.' }
      ]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'¿Crees que Valentina tomó la decisión correcta al guardar el mapa en su mochila sin decírselo a don Aurelio? Justifica tu respuesta usando al menos un detalle del texto.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que... porque el texto dice que...' o 'No estoy de acuerdo porque...'",
      modelAnswer:`No hay una sola respuesta correcta, pero una buena respuesta tiene <strong>posición + argumento con evidencia del texto</strong>.<br><br>
        <strong>Si argumentas que NO fue correcto:</strong> <em>"Valentina no debería haber guardado el mapa porque el compartimento estaba dentro del reloj del local de don Aurelio, lo que sugiere que es propiedad del dueño."</em><br><br>
        <strong>Si argumentas que SÍ fue correcto:</strong> <em>"Valentina actuó por instinto —el texto lo dice explícitamente— y no tuvo tiempo de reflexionar. Además, el mapa podría llevar décadas olvidado."</em><br><br>
        ⚠️ Una respuesta como <em>"Sí, porque quería quedárselo"</em> no tiene suficiente fundamento.`
    },
    {
      type:'dnd-sequence',
      minutes:6,
      skillTag:'organizacion',
      label:'Organización de la información',
      title:'Ordena los eventos de la historia',
      instructions:'Arrastra cada tarjeta al espacio correcto en la secuencia. También puedes hacer clic en una tarjeta para seleccionarla y luego clic en un espacio para colocarla.',
      items:[
        'Valentina es enviada a comprar una pila para el reloj de cocina',
        'Valentina se asoma hacia la trastienda y ve el reloj inclinado',
        'Valentina presiona una moldura y descubre el compartimento secreto',
        'Valentina abre el tubo y encuentra el mapa con pasillos subterráneos',
        'Valentina esconde el mapa en su mochila antes de que entre don Aurelio'
      ],
      order:[3,1,4,0,2]
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Ahora tú eres el escritor!',
      intro:'Este ejercicio desarrolla tu creatividad y tu capacidad de ponerte en el lugar de otro personaje. No hay respuesta incorrecta, pero sí respuestas más elaboradas que otras.',
      prompt:'✍️ Escribe un párrafo corto desde el punto de vista de <strong>don Aurelio</strong>. Imagina que en realidad él <em>sí</em> notó que Valentina guardó algo, pero decidió no decir nada. ¿Qué pensamientos pasaron por su cabeza?',
      hint:'Recuerda: el texto describe a don Aurelio llegando "desde la calle con una bolsa del supermercado". Usa ese detalle para imaginar su personalidad y su vida.',
      placeholder:'Escribe aquí el párrafo de don Aurelio...',
      example:`<em>"Don Aurelio la vio guardar algo en la mochila. Sus ojos, acostumbrados a detectar el más pequeño engranaje fuera de lugar, no habían fallado. Pero no dijo nada. Llevaba cuarenta años esperando que alguien encontrara ese mapa, y esa muchacha de mirada curiosa tenía exactamente el mismo apellido que el relojero que lo había escondido."</em><br><br>
        ¿Notaste cómo ese párrafo agrega un nuevo misterio? Un buen escritor deja preguntas sin responder.`
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

const GUIDE_DATA = {
  id: 'historia-g1-ilustracion',
  subject: 'historia',
  subjectLabel: 'Historia',
  subjectIcon: '🏛️',
  title: 'La Ilustración: la razón contra el Antiguo Régimen',
  examRef: 'Unidad 3 · OA14 · 2° semestre',
  nextGuideHint: 'Próxima guía: De las ideas a la acción — las revoluciones de Estados Unidos y Francia, con una línea de tiempo de los hitos revolucionarios.',

  blocks: [
    {
      type:'hook',
      minutes:3,
      prompt:'👑 Si un rey pudiera gobernar sin que nadie —ni un parlamento, ni un tribunal— pudiera contradecirlo jamás, ¿qué problemas crees que podrían surgir?',
      subPrompt:'Piensa en ejemplos concretos: leyes injustas, castigos arbitrarios, impuestos sin límite...',
      reflection:`<strong>🧠 Para reflexionar:</strong><br><br>
        Durante siglos, gran parte de Europa vivió exactamente bajo ese tipo de gobierno: un rey con poder absoluto, sin nadie que lo controlara. En esta guía vas a conocer el movimiento de pensadores que se atrevió a cuestionar ese sistema y que sentó las bases de cómo se organizan muchos países hoy en día, incluido el nuestro.<br><br>
        <em>💡 Tip lector:</em> En los textos de Historia, presta atención a <strong>quién tenía el poder, quién lo cuestionó y por qué</strong> — esas tres preguntas ordenan casi cualquier proceso histórico.`
    },
    {
      type:'goal',
      minutes:1,
      text:'Hoy vas a aprender a <strong>caracterizar la Ilustración</strong> como corriente de pensamiento, identificar sus <strong>principales ideas</strong> (separación de poderes, soberanía popular, secularización), y <strong>fundamentar su rol</strong> en la crítica al absolutismo y en la promoción del ideario republicano.'
    },
    {
      type:'teach',
      minutes:10,
      title:'La Ilustración: la razón contra el Antiguo Régimen',
      genre:'Histórico · Conceptual',
      wordCount:'~360 palabras',
      html:`
        <h3>La Ilustración: la razón contra el Antiguo Régimen</h3>
        <p>Durante los siglos XVII y XVIII, la mayoría de los reinos europeos vivían bajo el llamado <span class="vhl" title="Sistema político previo a las revoluciones, con monarquía absoluta y sociedad dividida en estamentos">Antiguo Régimen</span>: un sistema donde el rey concentraba todo el poder político, se consideraba que su autoridad provenía directamente de Dios, y la sociedad se dividía en estamentos —nobleza, clero y pueblo— con privilegios muy desiguales. El monarca no rendía cuentas a nadie ni compartía su poder con ningún parlamento o tribunal: a esta forma de gobierno se le llama <span class="vhl" title="Forma de gobierno donde el rey concentra todo el poder, sin control de un parlamento">absolutismo</span>.</p>
        <p>A mediados del siglo XVIII, sin embargo, un grupo de pensadores comenzó a cuestionar este orden. La <span class="vhl" title="Movimiento intelectual del siglo XVIII basado en el uso de la razón">Ilustración</span> fue un movimiento intelectual que defendía el uso de la razón por sobre la tradición y la autoridad religiosa para explicar el mundo y organizar la sociedad. Filósofos como Voltaire, Montesquieu y Rousseau argumentaban que el poder no debía concentrarse en una sola persona, sino dividirse en distintos poderes del Estado —legislativo, ejecutivo y judicial— para evitar abusos.</p>
        <p>Otro principio central del pensamiento ilustrado fue la <span class="vhl" title="Principio según el cual la autoridad de un gobierno proviene del consentimiento del pueblo">soberanía popular</span>: la idea de que la autoridad de un gobierno no viene de Dios ni de la sangre real, sino del consentimiento del pueblo que es gobernado. Los ilustrados también promovían la <span class="vhl" title="Proceso de separar la vida política y social de la influencia directa de la Iglesia">secularización</span>, es decir, separar la vida política y social de la influencia directa de la Iglesia, y defendían principios de libertad e igualdad ante la ley para todos los ciudadanos, sin distinción de nacimiento.</p>
        <p>Estas ideas no se quedaron solo en libros y salones de debate. Se convirtieron en la base del llamado <span class="vhl" title="Conjunto de ideas que defienden organizar un país sin un rey absoluto, mediante instituciones representativas">ideario republicano</span>: la convicción de que un país podía y debía organizarse sin un rey absoluto, mediante instituciones representativas y leyes que limitaran el poder de cualquier gobernante. Aunque en su momento fueron consideradas peligrosas —y hasta prohibidas por varias monarquías—, estas ideas terminarían inspirando las grandes revoluciones políticas de fines del siglo XVIII.</p>`
    },
    {
      type:'flip-cards',
      minutes:5,
      label:'Palabras clave de la unidad',
      title:'📜 Vocabulario de la Ilustración',
      instructions:'Estas son palabras clave que vas a volver a encontrar en toda la unidad. Haz clic en cada tarjeta para repasar su significado antes de seguir.',
      cards:[
        {front:'Antiguo Régimen', back:'Sistema político y social previo a las revoluciones, con monarquía absoluta y sociedad dividida en estamentos con privilegios desiguales.'},
        {front:'Absolutismo', back:'Forma de gobierno en la que el rey concentra todo el poder, sin control de un parlamento ni división de poderes.'},
        {front:'Ilustración', back:'Movimiento intelectual del siglo XVIII que defendía el uso de la razón por sobre la tradición y la autoridad religiosa.'},
        {front:'Soberanía popular', back:'Principio según el cual la autoridad de un gobierno proviene del consentimiento del pueblo, no de un origen divino o hereditario.'},
        {front:'Secularización', back:'Proceso de separar la vida política y social de la influencia directa de la Iglesia.'},
        {front:'Ideario republicano', back:'Conjunto de ideas que defienden organizar un país sin un rey absoluto, mediante instituciones representativas y leyes que limitan el poder.'}
      ]
    },
    {
      type:'guided-practice',
      minutes:7,
      skillTag:'literal',
      title:'Responde según lo que dice el texto directamente (con pistas disponibles)',
      questions:[
        { q:'Según el Antiguo Régimen, ¿de dónde provenía la autoridad del rey?',
          opts:['De elecciones populares','Del apoyo del ejército','De que su autoridad provenía directamente de Dios','De un acuerdo con el parlamento'], c:2,
          hint:'Vuelve al primer párrafo, donde se explica el origen de la autoridad del rey en el Antiguo Régimen.',
          fb_ok:'✅ Correcto. El texto dice: "se consideraba que su autoridad provenía directamente de Dios". Esta idea es clave para entender por qué nadie podía cuestionar al rey.',
          fb_no:'❌ No es esa. El texto dice: "se consideraba que su autoridad provenía directamente de Dios". La respuesta correcta era la opción C.' },
        { q:'¿En qué poderes del Estado proponían dividir el gobierno los filósofos ilustrados?',
          opts:['Legislativo, ejecutivo y judicial','Solo legislativo y ejecutivo','Solo el poder judicial','Poder militar y poder religioso'], c:0,
          hint:'Revisa el segundo párrafo, donde se nombran los tres poderes.',
          fb_ok:'✅ Exacto. El texto dice: "el poder... debía... dividirse en distintos poderes del Estado —legislativo, ejecutivo y judicial— para evitar abusos."',
          fb_no:'❌ Revisa el segundo párrafo: "dividirse en distintos poderes del Estado —legislativo, ejecutivo y judicial—". La correcta era la opción A.' },
        { q:'Según el texto, ¿qué buscaba la secularización promovida por los ilustrados?',
          opts:['Aumentar el poder de la Iglesia sobre el Estado','Prohibir cualquier práctica religiosa','Unificar religión y gobierno en una sola autoridad','Separar la vida política y social de la influencia directa de la Iglesia'], c:3,
          hint:'Aparece en el tercer párrafo, justo después de mencionar la soberanía popular.',
          fb_ok:'✅ Bien leído. El texto dice: "promovían la secularización, es decir, separar la vida política y social de la influencia directa de la Iglesia."',
          fb_no:'❌ El texto lo define así: "separar la vida política y social de la influencia directa de la Iglesia." La respuesta correcta era la opción D.' }
      ]
    },
    {
      type:'quiz',
      minutes:7,
      skillTag:'inferencial',
      title:'Ahora sin ayuda: piensa más allá de lo que dice el texto',
      questions:[
        { q:'¿Por qué crees que varias monarquías de la época consideraron peligrosas las ideas ilustradas?',
          opts:['Porque proponían mejorar las técnicas agrícolas','Porque cuestionaban directamente la base del poder absoluto del rey','Porque eran ideas puramente religiosas','Porque promovían la creación de nuevas monedas'], c:1,
          fb_ok:'✅ Excelente razonamiento. Si la autoridad del rey se basaba en que venía "directamente de Dios", cualquier idea que dijera que el poder debía venir del pueblo amenazaba directamente esa base. Por eso muchas monarquías las prohibieron.',
          fb_no:'❌ Piensa en la base del poder real: si el rey gobernaba porque su autoridad venía de Dios, una idea que dice que debe venir del pueblo (soberanía popular) amenaza esa base. La respuesta correcta era la B.' },
        { q:'¿Qué relación existe entre la soberanía popular y el ideario republicano?',
          opts:['Ninguna relación entre ambas ideas','El ideario republicano rechaza por completo la soberanía popular','La soberanía popular es la base filosófica que explica por qué un país puede organizarse sin un rey absoluto','Son ideas que se contradicen entre sí'], c:2,
          fb_ok:'✅ Muy bien. Si la autoridad legítima viene del pueblo (soberanía popular) y no de un origen divino, entonces tiene sentido organizar el país sin un rey absoluto, mediante instituciones representativas: eso es exactamente el ideario republicano.',
          fb_no:'❌ La soberanía popular es la idea que permite justificar el ideario republicano: si el poder viene del pueblo, no necesita un rey absoluto para gobernar. La respuesta correcta era la C.' },
        { q:'Si un pensador ilustrado viviera hoy y viera que los gobiernos se eligen mediante votaciones, ¿qué diría probablemente?',
          opts:['Que es un ejemplo de la soberanía popular que él mismo promovía','Que eso contradice todo lo que él defendía','Que prefiere que vuelva un rey absoluto','Que no tiene ninguna relación con sus ideas'], c:0,
          fb_ok:'✅ Correcto. Votar para elegir gobierno es, en esencia, la soberanía popular en acción: la autoridad surge del consentimiento del pueblo. Un ilustrado reconocería esto como la aplicación práctica de sus propias ideas.',
          fb_no:'❌ Elegir gobernantes por votación es exactamente la soberanía popular aplicada. Un pensador ilustrado vería esto como la realización de sus ideas, no como una contradicción. La respuesta correcta era la A.' }
      ]
    },
    {
      type:'open',
      minutes:5,
      skillTag:'argumentacion',
      label:'Pensamiento crítico',
      title:'¿Qué opinas tú?',
      question:'¿Crees que los principios de la Ilustración (separación de poderes, soberanía popular, igualdad ante la ley) siguen vigentes en los gobiernos actuales? Justifica tu respuesta con al menos un ejemplo.',
      placeholder:"Escribe tu respuesta aquí. Intenta usar frases como: 'Creo que... porque en mi país...' o 'En parte, porque...'",
      modelAnswer:`No hay una sola respuesta correcta, pero una buena respuesta tiene <strong>posición + ejemplo concreto</strong>.<br><br>
        <strong>Si argumentas que sí siguen vigentes:</strong> <em>"Sí, porque en Chile existen tres poderes separados —Ejecutivo, Legislativo y Judicial— y las autoridades se eligen por votación popular, tal como proponían los ilustrados."</em><br><br>
        <strong>Si argumentas que solo en parte:</strong> <em>"En parte, porque aunque existe la separación de poderes, todavía hay países donde un solo líder concentra demasiado poder, lo que los ilustrados habrían criticado."</em><br><br>
        ⚠️ Una respuesta como <em>"Sí, porque sí"</em> no tiene suficiente fundamento. Las buenas respuestas críticas en Historia siempre incluyen un ejemplo o dato concreto.`
    },
    {
      type:'challenge',
      minutes:5,
      title:'¡Ahora tú eres un pensador ilustrado!',
      intro:'Este ejercicio te pone en el lugar de un filósofo del siglo XVIII que arriesga su seguridad al escribir contra el rey. No hay respuesta incorrecta, pero sí respuestas más elaboradas que otras.',
      prompt:'✍️ Escribe un panfleto breve (3 a 4 líneas) dirigido al pueblo, explicando con tus palabras por qué un rey no debería tener todo el poder. Usa al menos una idea de la Ilustración que aprendiste hoy.',
      hint:'Recuerda: puedes mencionar la separación de poderes, la soberanía popular o la igualdad ante la ley.',
      placeholder:'Escribe aquí tu panfleto...',
      example:`<em>"¡Pueblo! Ningún hombre nace con derecho divino a gobernar sobre otros. El poder no debe estar en las manos de uno solo, sino repartido entre distintas instituciones que se vigilen mutuamente. La verdadera autoridad nace de nosotros, del pueblo, no de una corona heredada."</em><br><br>
        ¿Notaste cómo este panfleto usa tanto la soberanía popular como la separación de poderes? Un buen panfleto ilustrado combina varias ideas para convencer.`
    },
    {
      type:'reflect',
      minutes:2,
      questions:[
        '¿Qué idea de la Ilustración te costó más entender?',
        '¿Qué estrategia usarás para repasarla antes de la próxima guía?'
      ]
    },
    { type:'report' }
  ]
};

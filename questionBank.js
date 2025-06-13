const questionBank = [
  {
    question:
      "¿Quiénes son mencionados como autores cuyas obras tenían una fuerte carga ideológica para glorificar el pasado de Roma?",
    correctAnswer: "Cicerón, Tito Livio, Dionisio de Halicarnaso.",
    distractors: [
      "Plutarco, Tácito, Suetonio.",
      "Homero, Heródoto, Tucídides.",
      "Virgilio, Ovidio, Horacio.",
    ],
  },
  {
    question:
      "¿Cuál era el objetivo de los autores como Tito Livio y Dionisio de Halicarnaso al escribir sobre la fundación de Roma?",
    correctAnswer:
      "Glorificar el pasado de Roma y presentar arquetipos morales.",
    distractors: [
      "Realizar un análisis historiográfico moderno y crítico.",
      "Documentar la vida cotidiana de los plebeyos.",
      "Crear una guía práctica para futuros gobernantes.",
    ],
  },
  {
    question:
      "Según Dionisio de Halicarnaso, ¿cuántas oleadas migratorias intentan vincular a Roma con un origen griego?",
    correctAnswer: "Cinco.",
    distractors: ["Dos.", "Tres.", "Cuatro."],
  },
  {
    question:
      "¿Cuál de los siguientes grupos no es mencionado por Dionisio de Halicarnaso como parte de las oleadas migratorias a Roma?",
    correctAnswer: "Dorios de Esparta.",
    distractors: [
      "Aborígenes de Arcadia.",
      "Pelasgos de Tesalia.",
      "Troyanos de Eneas.",
    ],
  },
  {
    question:
      "¿Qué problema cronológico existía entre la caída de Troya y la fundación de Roma?",
    correctAnswer: "Estaban separadas por 400 años.",
    distractors: [
      "La caída de Troya ocurrió después de la fundación de Roma.",
      "Las fechas no coincidían con los registros etruscos.",
      "Había una superposición de 200 años.",
    ],
  },
  {
    question:
      "¿Qué solución inventaron los analistas para rellenar el vacío cronológico entre la caída de Troya y la fundación de Roma?",
    correctAnswer: "Una dinastía de reyes en Alba Longa.",
    distractors: [
      "Una serie de emperadores temporales.",
      "La aparición milagrosa de Rómulo y Remo.",
      "Un período de anarquía total.",
    ],
  },
  {
    question: "¿Quién fundó Alba Longa, según la solución de los analistas?",
    correctAnswer: "Ascanio, hijo de Eneas.",
    distractors: ["Rómulo.", "Numa Pompilio.", "Tarquinio Prisco."],
  },
  {
    question:
      "¿Qué lugar sagrado, según la leyenda, explica el origen de Rómulo y Remo?",
    correctAnswer: "La cueva del Lupercal.",
    distractors: ["El Templo de Vesta.", "El Capitolio.", "El Foro Romano."],
  },
  {
    question:
      "¿Qué concepto político explica la leyenda de Rómulo y Remo, relacionado con el fratricidio?",
    correctAnswer: "El fratricidio como acto fundacional del poder.",
    distractors: [
      "La división del poder entre dos reyes.",
      "La importancia de la hermandad.",
      "El establecimiento de un sistema de leyes.",
    ],
  },
  {
    question:
      "¿Qué episodio legendario explica el origen de la Roca Tarpeya como lugar de ejecución para traidores?",
    correctAnswer: "El Rapto de las Sabinas.",
    distractors: [
      "La guerra contra Alba Longa.",
      "La violación de Lucrecia.",
      "El combate de los Horacios y Curiacios.",
    ],
  },
  {
    question:
      "¿Qué templo fue invocado por Rómulo para frenar una retirada durante la guerra con los sabinos?",
    correctAnswer: "Templo de Júpiter Stator.",
    distractors: [
      "Templo de Marte Vengador.",
      "Templo de Juno Moneta.",
      "Templo de Saturno.",
    ],
  },
  {
    question:
      "¿Dónde se negoció la paz tras el Rapto de las Sabinas, explicando el origen de ese lugar?",
    correctAnswer: "El Comicio.",
    distractors: ["El Circo Máximo.", "El Senado.", "El monte Palatino."],
  },
  {
    question:
      "¿De qué lugar deriva el gentilicio 'Quirites' según la leyenda del Rapto de las Sabinas?",
    correctAnswer: "Cures, la capital sabina.",
    distractors: ["Roma.", "Alba Longa.", "Tarquinia."],
  },
  {
    question:
      "¿Cuál fue la base de la ciudadanía que explica el Rapto de las Sabinas?",
    correctAnswer: "La unión de romanos y sabinos en una única civitas.",
    distractors: [
      "La exclusión de los sabinos del gobierno.",
      "La separación total de los dos pueblos.",
      "La dominación romana sobre los sabinos.",
    ],
  },
  {
    question: "¿Quién fue el rey fundador de Roma?",
    correctAnswer: "Rómulo.",
    distractors: ["Numa Pompilio.", "Tarquinio Prisco.", "Servio Tulio."],
  },
  {
    question: "¿Cuántos patres creó Rómulo para formar el Senado?",
    correctAnswer: "100.",
    distractors: ["50.", "200.", "300."],
  },
  {
    question: "¿En cuántas tribus y curias dividió Rómulo al pueblo romano?",
    correctAnswer: "3 tribus y 30 curias.",
    distractors: [
      "4 tribus y 40 curias.",
      "2 tribus y 20 curias.",
      "5 tribus y 50 curias.",
    ],
  },
  {
    question: "¿Con qué propósito Rómulo estableció un 'asilo'?",
    correctAnswer: "Para aumentar la población masculina.",
    distractors: [
      "Para albergar a los pobres.",
      "Para castigar a los criminales.",
      "Para entrenar a los soldados.",
    ],
  },
  {
    question:
      "¿Quién fue el rey sacerdote que organizó la vida religiosa en Roma?",
    correctAnswer: "Numa Pompilio.",
    distractors: ["Tulo Hostilio.", "Anco Marcio.", "Tarquinio el Soberbio."],
  },
  {
    question: "¿Qué colegios sacerdotales creó Numa Pompilio?",
    correctAnswer: "Pontífices, augures, vestales.",
    distractors: [
      "Flamines, arúspices, sacerdotes.",
      "Lupercos, salios, feciales.",
      "Quindecemviri, duoviri, decemviri.",
    ],
  },
  {
    question: "¿Qué reforma del calendario se le atribuye a Numa Pompilio?",
    correctAnswer: "Distinguir días fastos y nefastos.",
    distractors: [
      "Introducir el año bisiesto.",
      "Crear los 12 meses del año.",
      "Añadir los nombres de los dioses a los días.",
    ],
  },
  {
    question:
      "¿Qué rey guerrero fue responsable de la guerra y destrucción de Alba Longa?",
    correctAnswer: "Tulo Hostilio.",
    distractors: ["Rómulo.", "Anco Marcio.", "Tarquinio Prisco."],
  },
  {
    question:
      "¿Quiénes se enfrentaron en el combate legendario que resolvió la guerra entre Roma y Alba Longa?",
    correctAnswer: "Los Horacios (Roma) y los Curiacios (Alba).",
    distractors: ["Rómulo y Remo.", "Aníbal y Escipión.", "César y Pompeyo."],
  },
  {
    question: "¿Qué rey constructor fundó el puerto de Ostia?",
    correctAnswer: "Anco Marcio.",
    distractors: ["Servio Tulio.", "Tarquinio el Soberbio.", "Numa Pompilio."],
  },
  {
    question:
      "¿Cuál fue el primer puente sobre el Tíber, construido por Anco Marcio?",
    correctAnswer: "El Puente Sublicio.",
    distractors: [
      "El Puente Emilio.",
      "El Puente Fabricio.",
      "El Puente Milvio.",
    ],
  },
  {
    question: "¿Qué rey inicia la construcción de la Cloaca Máxima?",
    correctAnswer: "Tarquinio Prisco.",
    distractors: ["Servio Tulio.", "Tarquinio el Soberbio.", "Rómulo."],
  },
  {
    question: "¿Qué insignias de poder etruscas introduce Tarquinio Prisco?",
    correctAnswer: "Silla curul, lictores con las fasces, toga púrpura.",
    distractors: [
      "Corona de laurel, cetro, estandarte.",
      "Yelmo, armadura, escudo.",
      "Túnica blanca, sandalias, capa.",
    ],
  },
  {
    question: "¿A cuántos senadores aumenta el número Tarquinio Prisco?",
    correctAnswer: "A 300.",
    distractors: ["A 150.", "A 200.", "A 400."],
  },
  {
    question:
      "¿Qué rey es considerado el 'segundo fundador' de Roma y nació esclavo?",
    correctAnswer: "Servio Tulio.",
    distractors: ["Tarquinio el Soberbio.", "Anco Marcio.", "Numa Pompilio."],
  },
  {
    question:
      "¿Con qué criterio reorganiza la sociedad Servio Tulio a través del censo?",
    correctAnswer: "Timocrático (basado en la riqueza).",
    distractors: [
      "Heriditario (basado en el linaje).",
      "Democrático (basado en el voto popular).",
      "Militar (basado en el servicio militar).",
    ],
  },
  {
    question:
      "¿Qué nuevas unidades crea Servio Tulio que sientan las bases de los Comicios Centuriados?",
    correctAnswer: "Centurias.",
    distractors: ["Decurias.", "Tribus rusticas.", "Cohortes."],
  },
  {
    question:
      "¿Quién fue el arquetipo del tirano griego en la monarquía romana?",
    correctAnswer: "Tarquinio el Soberbio.",
    distractors: ["Tarquinio Prisco.", "Servio Tulio.", "Numa Pompilio."],
  },
  {
    question:
      "¿Cuál fue el detonante de la rebelión que puso fin a la monarquía?",
    correctAnswer: "La violación de Lucrecia por su hijo Sexto.",
    distractors: [
      "El asesinato de Servio Tulio.",
      "La imposición de nuevos impuestos.",
      "Una sequía prolongada.",
    ],
  },
  {
    question:
      "¿Quién lideró la rebelión aristocrática que expulsó a los Tarquinios?",
    correctAnswer: "Junio Bruto y Colatino.",
    distractors: [
      "Cayo Mario y Sila.",
      "Tiberio y Cayo Graco.",
      "Julio César y Pompeyo.",
    ],
  },
  {
    question:
      "¿Cuál fue una característica clave del sistema de la Res Publica para evitar la concentración de autoridad?",
    correctAnswer: "Magistraturas anuales y colegiadas.",
    distractors: [
      "Un rey vitalicio y absoluto.",
      "Un senado con poder ilimitado.",
      "Un solo magistrado con autoridad suprema.",
    ],
  },
  {
    question: "¿Cuál fue la principal causa económica de la Lucha de Órdenes?",
    correctAnswer:
      "La esclavitud por deudas (nexum) y el acaparamiento patricio del ager publicus.",
    distractors: [
      "La falta de comercio con otras ciudades.",
      "La baja producción agrícola.",
      "La escasez de mano de obra esclava.",
    ],
  },
  {
    question:
      "¿Qué ley, en el contexto de la Lucha de Órdenes, permitió los matrimonios mixtos entre patricios y plebeyos?",
    correctAnswer: "Ley Canuleia.",
    distractors: [
      "Ley de las XII Tablas.",
      "Leyes Licinio-Sextias.",
      "Ley Hortensia.",
    ],
  },
  {
    question:
      "¿Cuál fue la primera 'huelga' plebeya, que llevó a la creación del Tribunado de la Plebe?",
    correctAnswer: "Secesión al Monte Sacro (494 a.C.).",
    distractors: [
      "La toma del Capitolio.",
      "La rebelión de los esclavos.",
      "La huelga de los artesanos.",
    ],
  },
  {
    question:
      "¿Qué evento, en 460 a.C., evidenció la tensión social antes de la codificación de la ley?",
    correctAnswer: "La toma del Capitolio por el sabino Apio Herdonio.",
    distractors: [
      "La derrota en la batalla de Cannas.",
      "La invasión de los galos.",
      "El exilio de Cicerón.",
    ],
  },
  {
    question:
      "¿Qué ley formalizó el fin del conflicto patricio-plebeyo y otorgó fuerza de ley a los plebiscitos para todo el pueblo?",
    correctAnswer: "Ley Hortensia (287 a.C.).",
    distractors: ["Ley Ovinia.", "Ley Canuleia.", "Leyes Licinio-Sextias."],
  },
  {
    question: "¿Qué resultado tuvo la Lucha de Órdenes?",
    correctAnswer: "La creación de una nueva élite: la nobilitas.",
    distractors: [
      "El establecimiento de una democracia plena.",
      "El ascenso exclusivo de los plebeyos al poder.",
      "La disolución del Senado romano.",
    ],
  },
  {
    question:
      "¿Cuál fue la característica principal de la Era de Quietud y Expansión (287-134 a.C.)?",
    correctAnswer: "Calma social interna y expansión externa masiva.",
    distractors: [
      "Conflictos internos constantes y estancamiento territorial.",
      "Democracia plena y reformas agrarias.",
      "Grandes obras de ingeniería y paz total.",
    ],
  },
  {
    question:
      "¿Qué satisfizo inicialmente el 'hambre de tierras' durante la Era de Quietud?",
    correctAnswer:
      "La expansión territorial en la península a través de colonias y distribución de tierras.",
    distractors: [
      "La prohibición de la esclavitud por deudas.",
      "El acceso plebeyo a todas las magistraturas.",
      "El comercio con las ciudades griegas.",
    ],
  },
  {
    question:
      "¿Qué conflictos fueron vitales para el control peninsular de Roma durante la Era de Quietud?",
    correctAnswer: "Guerras Samnitas (c. 343-290 a.C.).",
    distractors: [
      "Guerras Púnicas.",
      "Guerras Macedónicas.",
      "Guerras Serviles.",
    ],
  },
  {
    question:
      "¿Qué general cartaginés cruzó los Alpes con su ejército y elefantes durante la Segunda Guerra Púnica?",
    correctAnswer: "Aníbal.",
    distractors: ["Asdrúbal.", "Magón.", "Escipión."],
  },
  {
    question:
      "¿Cuál fue la derrota romana catastrófica mencionada en la Segunda Guerra Púnica?",
    correctAnswer: "Cannas.",
    distractors: ["Zama.", "Trasimeno.", "Trebia."],
  },
  {
    question:
      "¿Qué territorio obtuvo Roma el control, rico en metales y recursos, tras vencer en Zama?",
    correctAnswer: "Hispania.",
    distractors: ["Sicilia.", "Galia.", "Macedonia."],
  },
  {
    question:
      "¿Quién pronunció la frase 'Carthago delenda est' durante la Tercera Guerra Púnica?",
    correctAnswer: "Catón el Viejo.",
    distractors: ["Escipión el Africano.", "Aníbal.", "Julio César."],
  },
  {
    question: "¿Qué ocurrió con la ciudad de Cartago en el 146 a.C.?",
    correctAnswer: "Roma la arrasa.",
    distractors: [
      "Cartago se rinde y se convierte en provincia romana.",
      "Se firma un tratado de paz duradero.",
      "Se convierte en una ciudad aliada de Roma.",
    ],
  },
  {
    question:
      "¿Qué reinos helenísticos fueron sometidos por Roma durante la conquista del Mediterráneo Oriental?",
    correctAnswer: "Macedonia, Grecia, Pérgamo.",
    distractors: [
      "Egipto, Persia, India.",
      "Galia, Britania, Germania.",
      "Etruria, Lacio, Samnio.",
    ],
  },
  {
    question:
      "¿Cuál fue una consecuencia económica de la expansión romana que arruinó al pequeño campesino?",
    correctAnswer: "Creación de enormes latifundios trabajados por esclavos.",
    distractors: [
      "El aumento de los salarios agrícolas.",
      "La distribución equitativa de tierras.",
      "La importación masiva de grano.",
    ],
  },
  {
    question:
      "¿Qué nueva clase social rica, formada por comerciantes, banqueros y publicani, surge durante la Crisis de la República?",
    correctAnswer: "Los equites (orden ecuestre).",
    distractors: ["La nobilitas.", "Los proletarii.", "Los patricios."],
  },
  {
    question:
      "¿En qué se dividió la aristocracia romana durante la Crisis de la República?",
    correctAnswer: "Optimates y Populares.",
    distractors: [
      "Patricios y Plebeyos.",
      "Cónsules y Tribunos.",
      "Senadores y Censores.",
    ],
  },
  {
    question:
      "¿Qué facción aristocrática defendía el poder del Senado y la tradición (mos maiorum)?",
    correctAnswer: "Optimates.",
    distractors: ["Populares.", "Equites.", "Plebeyos."],
  },
  {
    question:
      "¿Qué facción aristocrática buscaba eludir el control senatorial y adquirir poder a través de las asambleas populares?",
    correctAnswer: "Populares.",
    distractors: ["Optimates.", "Nobilitas.", "Publicani."],
  },
  {
    question:
      "¿Quién fue el tribuno que intentó una reforma agraria para redistribuir el ager publicus?",
    correctAnswer: "Tiberio Graco.",
    distractors: ["Cayo Graco.", "Cayo Mario.", "Lucio Cornelio Sila."],
  },
  {
    question:
      "¿En qué guerra se evidenció la corrupción de la nobilitas, según el texto, antes del ascenso de Tiberio Graco?",
    correctAnswer: "Guerra de Yugurta (111-105 a.C.).",
    distractors: ["Primera Guerra Púnica.", "Guerra Social.", "Guerra Civil."],
  },
  {
    question:
      "¿Qué ley introdujo Cayo Graco sobre repartos de grano y la fundación de colonias?",
    correctAnswer:
      "Retomó y amplió el programa de su hermano con leyes sobre repartos de grano, la fundación de colonias y la concesión de nuevos poderes a los equites.",
    distractors: [
      "La ley de las XII Tablas.",
      "La Ley Canuleia.",
      "La Ley Hortensia.",
    ],
  },
  {
    question:
      "¿Qué tipo de ejército se creó bajo Cayo Mario, permitiendo el reclutamiento de proletarii?",
    correctAnswer: "Un ejército profesional y asalariado.",
    distractors: [
      "Un ejército basado solo en propietarios de tierras.",
      "Un ejército de voluntarios sin paga.",
      "Un ejército reclutado por sorteo.",
    ],
  },
  {
    question:
      "¿Quién fue el general que protagonizó la primera guerra civil al marchar sobre Roma y deponer a Mario?",
    correctAnswer: "Lucio Cornelio Sila.",
    distractors: ["Julio César.", "Pompeyo.", "Marco Antonio."],
  },
  {
    question:
      "¿Qué estableció Sila tras su victoria al nombrarse dictador con poderes ilimitados?",
    correctAnswer:
      "Las proscripciones (listas públicas de enemigos que podían ser asesinados impunemente).",
    distractors: [
      "Una reforma agraria que beneficiaba a los plebeyos.",
      "Un gobierno democrático basado en asambleas populares.",
      "Un período de paz duradera.",
    ],
  },
  {
    question:
      "¿Cuál fue la principal consecuencia de la reforma del ejército de Cayo Mario?",
    correctAnswer:
      "La lealtad de los soldados pasó a ser hacia el general que les pagaba.",
    distractors: [
      "Se fortaleció la autoridad del Senado sobre las legiones.",
      "El servicio militar volvió a ser exclusivo para los propietarios de tierras.",
      "Disminuyó el número de legiones disponibles para la defensa.",
    ],
  },
  {
    question:
      "¿Qué acto de Sila demostró que las legiones podían usarse como un arma política interna?",
    correctAnswer: "Su marcha sobre Roma.",
    distractors: [
      "Su victoria en la Guerra de Yugurta.",
      "Su establecimiento de las proscripciones.",
      "Su alianza con Pompeyo.",
    ],
  },
  {
    question:
      "¿Qué se rompió por primera vez en siglos con el asesinato de Tiberio Graco?",
    correctAnswer:
      "La violencia política se desataba en el corazón de Roma, rompiendo un tabú fundamental.",
    distractors: [
      "El sistema de la República.",
      "La unidad entre patricios y plebeyos.",
      "La alianza con los équites.",
    ],
  },
  {
    question:
      "¿Cómo se denominó el pacto privado ilegal entre Pompeyo, Craso y Julio César?",
    correctAnswer: "El Primer Triunvirato.",
    distractors: [
      "El Segundo Triunvirato.",
      "La Primera Guerra Civil.",
      "La Conspiración de Catilina.",
    ],
  },
  {
    question:
      "¿Quién fue el tribuno de la plebe que sirvió a los triunviros exiliando a sus oponentes como Cicerón y Catón?",
    correctAnswer: "Publio Clodio Pulcro.",
    distractors: ["Tiberio Graco.", "Cayo Graco.", "Marco Antonio."],
  },
  {
    question:
      "¿Qué provocó tal caos el asesinato de Publio Clodio Pulcro en 52 a.C.?",
    correctAnswer: "El Senado nombró a Pompeyo cónsul sin colega.",
    distractors: [
      "El estallido inmediato de la guerra civil.",
      "La disolución del Senado romano.",
      "La abolición del Tribunado de la Plebe.",
    ],
  },
  {
    question:
      "¿Qué río cruza Julio César, justificando su acción en la defensa de su dignitas y la potestad tribunicia?",
    correctAnswer: "El Rubicón.",
    distractors: ["El Tíber.", "El Po.", "El Danubio."],
  },
  {
    question:
      "¿Cuál fue la justificación de los senadores que asesinaron a Julio César?",
    correctAnswer: "Restaurar la libertad.",
    distractors: [
      "Obtener el poder para ellos mismos.",
      "Vengar la muerte de Pompeyo.",
      "Establecer una nueva monarquía.",
    ],
  },
  {
    question:
      "¿Qué argumentan historiadores como F. Pina Polo sobre el 'tiranicidio preventivo'?",
    correctAnswer:
      "Era un recurso ilegal y rupturista, contrario al mos maiorum.",
    distractors: [
      "Era un acto heroico y necesario para la República.",
      "Era un método común de cambio político en Roma.",
      "Estaba respaldado por la ley romana.",
    ],
  },
  {
    question: "¿Cuál fue la consecuencia inmediata del asesinato de César?",
    correctAnswer:
      "No restauró la República, sino que la hundió en nuevas guerras civiles.",
    distractors: [
      "Restauró de inmediato el poder del Senado.",
      "Estableció un período de paz duradera.",
      "Permitió la elección democrática de un nuevo líder.",
    ],
  },
  {
    question:
      "¿Quién fue el vencedor de las nuevas guerras civiles tras el asesinato de César?",
    correctAnswer: "Octavio (Augusto).",
    distractors: ["Marco Antonio.", "Lépido.", "Bruto."],
  },
  {
    question:
      "¿Qué institución fue creada por Rómulo, compuesta inicialmente por 100 patres?",
    correctAnswer: "El Senado.",
    distractors: [
      "Los Comicios Centuriados.",
      "El Concilio de la Plebe.",
      "El Tribunado de la Plebe.",
    ],
  },
  {
    question:
      "¿Qué rey reformó el calendario distinguiendo días fastos y nefastos?",
    correctAnswer: "Numa Pompilio.",
    distractors: ["Rómulo.", "Servio Tulio.", "Julio César."],
  },
  {
    question:
      "¿Qué ciudad fue destruida por Tulo Hostilio, resuelta por el combate entre Horacios y Curiacios?",
    correctAnswer: "Alba Longa.",
    distractors: ["Cartago.", "Cures.", "Ostia."],
  },
  {
    question:
      "¿Qué rey construyó el Puente Sublicio y la primera cárcel (Tullianum)?",
    correctAnswer: "Anco Marcio.",
    distractors: ["Tarquinio Prisco.", "Servio Tulio.", "Numa Pompilio."],
  },
  {
    question: "¿Qué obras urbanas importantes inicia Tarquinio Prisco?",
    correctAnswer: "La Cloaca Máxima y el Circo Máximo.",
    distractors: [
      "El Coliseo y el Panteón.",
      "Las Termas de Caracalla y el Foro de Trajano.",
      "El Acueducto de Claudio y la Vía Apia.",
    ],
  },
  {
    question:
      "¿Qué reforma de Servio Tulio debilitó el poder de las gentes patricias?",
    correctAnswer: "La reforma Serviana con criterio timocrático.",
    distractors: [
      "La creación del Senado.",
      "La concesión de la ciudadanía a todos los esclavos.",
      "La abolición de la esclavitud por deudas.",
    ],
  },
  {
    question:
      "¿Cuál fue la reacción de la élite patricia contra el poder tiránico de los Tarquinios?",
    correctAnswer:
      "Una rebelión aristocrática liderada por Junio Bruto y Colatino.",
    distractors: [
      "Una alianza con los plebeyos para derrocar al rey.",
      "Una solicitud de ayuda a las ciudades etruscas.",
      "Un intento de negociación con Tarquinio el Soberbio.",
    ],
  },
  {
    question:
      "¿Qué problema social persistía a pesar de la pacificación plebeya, evidenciado por la Segunda Guerra Púnica?",
    correctAnswer: "La reducción del número de ciudadanos en busca de tierras.",
    distractors: [
      "El aumento del poder de la aristocracia.",
      "La falta de oportunidades comerciales.",
      "La discriminación religiosa.",
    ],
  },
  {
    question:
      "¿Qué magistratura crearon los patricios en respuesta al acceso plebeyo al consulado por las Leyes Licinio-Sextias?",
    correctAnswer: "La pretura, de función judicial.",
    distractors: ["La censura.", "La edilidad.", "La cuestura."],
  },
  {
    question:
      "¿Cuál fue la principal diferencia entre Optimates y Populares en la Crisis de la República?",
    correctAnswer:
      "Los Optimates defendían el Senado, los Populares buscaban el apoyo popular y de los equites.",
    distractors: [
      "Los Optimates eran plebeyos, los Populares eran patricios.",
      "Los Optimates querían expandir Roma, los Populares no.",
      "Los Optimates eran monárquicos, los Populares eran republicanos.",
    ],
  },
  {
    question:
      "¿Qué personaje fue el primero de su familia en llegar al consulado, siendo un 'homo novus'?",
    correctAnswer: "Cayo Mario.",
    distractors: ["Lucio Cornelio Sila.", "Julio César.", "Pompeyo."],
  },
  {
    question:
      "¿Qué ley agraria de Cayo Flaminio (232 a.C.) buscaba una distribución de tierras en el Adriático, a la cual el Senado se opuso?",
    correctAnswer: "Ley agraria de Cayo Flaminio.",
    distractors: ["Leyes Licinio-Sextias.", "Ley Hortensia.", "Ley Canuleia."],
  },
  {
    question:
      "¿Cuál fue la primera provincia romana, resultado de la Primera Guerra Púnica?",
    correctAnswer: "Sicilia.",
    distractors: ["Hispania.", "Córcega.", "Cerdeña."],
  },
  {
    question:
      "¿Qué institución adquiere estabilidad y prestigio cuando la Ley Ovinia (fecha incierta) transfiere la selección de senadores a los censores?",
    correctAnswer: "El Senado.",
    distractors: [
      "Los Comicios Centuriados.",
      "El Tribunado de la Plebe.",
      "El Consulado.",
    ],
  },
  {
    question:
      "¿Qué leyenda explica el trazado del pomerium como un rito político?",
    correctAnswer: "Rómulo y Remo.",
    distractors: [
      "El Rapto de las Sabinas.",
      "El combate de Horacios y Curiacios.",
      "La fundación de Ostia.",
    ],
  },
  {
    question: "¿Qué tipo de conflicto sociopolítico fue la Lucha de Órdenes?",
    correctAnswer:
      "Un prolongado y feroz conflicto por la igualdad de derechos y el acceso al poder.",
    distractors: [
      "Una guerra civil entre generales rivales.",
      "Una revuelta de esclavos a gran escala.",
      "Un conflicto religioso entre diferentes cultos.",
    ],
  },
  {
    question:
      "¿Qué clase social se vio arruinada por la creación de latifundios trabajados por esclavos?",
    correctAnswer: "El pequeño campesino.",
    distractors: [
      "La aristocracia senatorial.",
      "Los equites.",
      "Los publicani.",
    ],
  },
  {
    question:
      "¿Qué término se usa para describir a los campesinos desposeídos que emigraron a Roma y dependían de la beneficencia?",
    correctAnswer: "Proletarii.",
    distractors: ["Nobilitas.", "Equites.", "Patricios."],
  },
  {
    question:
      "¿Qué práctica corrupta se convirtió en una fuente de enriquecimiento ilícito para la administración provincial?",
    correctAnswer:
      "La administración de las provincias se convirtió en una fuente de enriquecimiento ilícito y corrupción.",
    distractors: [
      "El comercio con naciones extranjeras.",
      "La construcción de obras públicas.",
      "La recaudación de impuestos directos.",
    ],
  },
  {
    question:
      "¿Qué facción utilizaba el Tribunado de la Plebe para proponer leyes de gran calado social?",
    correctAnswer: "Populares.",
    distractors: ["Optimates.", "Patricios.", "Equites."],
  },
  {
    question:
      "¿Qué evidencia la corrupción de la nobilitas y precede la reforma agraria de Tiberio Graco?",
    correctAnswer: "La Guerra de Yugurta (111-105 a.C.).",
    distractors: [
      "La Guerra de los Aliados.",
      "La rebelión de Espartaco.",
      "Las Guerras Mitridáticas.",
    ],
  },
  {
    question: "¿Qué poderes acumuló Julio César durante su dictadura?",
    correctAnswer: "Cónsul, dictador vitalicio.",
    distractors: [
      "Rey, emperador.",
      "Tribuno, censor.",
      "Pontífice máximo, pretor.",
    ],
  },
  {
    question:
      "¿Cuál fue el principal cambio político que se consolidó tras la Crisis de la República?",
    correctAnswer:
      "El poder real se había acumulado de forma irreversible en un único líder, el princeps.",
    distractors: [
      "El Senado recuperó su autoridad plena.",
      "Se estableció una democracia representativa.",
      "Se dividió Roma en varias repúblicas independientes.",
    ],
  },
  {
    question: "¿Qué se entiende por 'mos maiorum' defendido por los Optimates?",
    correctAnswer: "La tradición como la única forma legítima de gobierno.",
    distractors: [
      "La ley escrita como la única autoridad.",
      "El poder absoluto del dictador.",
      "La voluntad del pueblo expresada en asambleas.",
    ],
  },
  {
    question:
      "¿Qué reforma de Servio Tulio integró a los plebeyos ricos en la ciudadanía plena?",
    correctAnswer: "La reforma Serviana basada en el censo.",
    distractors: [
      "La Ley Hortensia.",
      "Las Leyes Licinio-Sextias.",
      "La Ley Canuleia.",
    ],
  },
  {
    question: "¿Cómo es descrito el gobierno de Tarquinio el Soberbio?",
    correctAnswer: "Despótico, violento y sin consultar al Senado.",
    distractors: [
      "Justo, moderado y consultivo.",
      "Débil, indeciso y dependiente del Senado.",
      "Reformista, popular y cercano al pueblo.",
    ],
  },
  {
    question:
      "¿Qué se inventó para rellenar el vacío cronológico entre la caída de Troya y la fundación de Roma?",
    correctAnswer: "Una dinastía de reyes en Alba Longa.",
    distractors: [
      "Un periodo de gobiernos provisionales.",
      "La existencia de una civilización pre-romana.",
      "Un conflicto continuo entre tribus.",
    ],
  },
  {
    question: "¿Qué explica el origen de la cueva del Lupercal?",
    correctAnswer: "La leyenda de Rómulo y Remo.",
    distractors: [
      "El Rapto de las Sabinas.",
      "La fundación de Ostia.",
      "Las reformas de Servio Tulio.",
    ],
  },
  {
    question: "¿Cuál fue el logro principal de Numa Pompilio?",
    correctAnswer: "Organizó la vida religiosa de Roma.",
    distractors: [
      "Conquistó Alba Longa.",
      "Construyó el Puente Sublicio.",
      "Expulsó a los Tarquinios.",
    ],
  },
  {
    question:
      "¿Qué rey introdujo insignias de poder etruscas como la silla curul y las fasces?",
    correctAnswer: "Tarquinio Prisco.",
    distractors: ["Rómulo.", "Servio Tulio.", "Tarquinio el Soberbio."],
  },
  {
    question:
      "¿Qué institución fue fortalecida por la Ley Ovinia al transferir la selección de senadores a los censores?",
    correctAnswer: "El Senado.",
    distractors: [
      "El Consulado.",
      "El Tribunado de la Plebe.",
      "Los Comicios Centuriados.",
    ],
  },
  {
    question:
      "¿Cuál fue la causa social de la Lucha de Órdenes relacionada con los matrimonios?",
    correctAnswer: "Prohibición de matrimonios mixtos (connubium).",
    distractors: [
      "El alto costo de los matrimonios.",
      "La dificultad para obtener el divorcio.",
      "La preferencia por los matrimonios entre familias ricas.",
    ],
  },
  {
    question:
      "¿Qué importante logro legal se obtuvo con la Ley de las XII Tablas?",
    correctAnswer: "El derecho se puso por escrito y se hizo público.",
    distractors: [
      "Se prohibió la esclavitud por deudas.",
      "Se estableció la igualdad de todos ante la ley.",
      "Se crearon los tribunales permanentes.",
    ],
  },
  {
    question: "¿Qué permitió la Ley Canuleia (445 a.C.)?",
    correctAnswer: "Permite los matrimonios mixtos.",
    distractors: [
      "El acceso plebeyo al consulado.",
      "La distribución de tierras a los plebeyos.",
      "La igualdad de voto en los comicios.",
    ],
  },
  {
    question:
      "¿Qué paquete de reformas clave incluyó el acceso plebeyo al consulado?",
    correctAnswer: "Leyes Licinio-Sextias (367 a.C.).",
    distractors: ["Ley de las XII Tablas.", "Ley Canuleia.", "Ley Hortensia."],
  },
  {
    question:
      "¿Qué conflicto, aunque no detallado, llevó a Roma a desarrollar una flota para competir con Cartago?",
    correctAnswer: "Primera Guerra Púnica.",
    distractors: [
      "Guerras Samnitas.",
      "Guerra Social.",
      "Guerras Macedónicas.",
    ],
  },
  {
    question:
      "¿Quién fue el dictador que estableció las proscripciones tras marchar sobre Roma?",
    correctAnswer: "Lucio Cornelio Sila.",
    distractors: ["Cayo Mario.", "Julio César.", "Pompeyo."],
  },
  {
    question:
      "¿Cuál fue la consecuencia social de la Crisis de la República, aparte de la crisis del campesinado?",
    correctAnswer: "Auge de los equites.",
    distractors: [
      "Desaparición de la esclavitud.",
      "Igualdad social para todos los ciudadanos.",
      "Fortalecimiento de la clase patricia.",
    ],
  },
  {
    question:
      "¿Qué institución fue creada por los plebeyos durante su secesión al Monte Sacro?",
    correctAnswer: "El Tribunado de la Plebe y el Concilio de la Plebe.",
    distractors: ["El Senado.", "El Consulado.", "La Pretura."],
  },
  {
    question:
      "¿Qué tipo de gobierno se estableció con la fundación de la Res Publica?",
    correctAnswer: "Un sistema basado en magistraturas anuales y colegiadas.",
    distractors: [
      "Una monarquía absoluta.",
      "Una tiranía militar.",
      "Una democracia directa.",
    ],
  },
  {
    question:
      "¿Cuál fue el principal cambio en la lealtad de los soldados tras la reforma de Cayo Mario?",
    correctAnswer:
      "Su lealtad ya no era hacia la República, sino hacia el general que les garantizaba el botín y una parcela de tierra al licenciarse.",
    distractors: [
      "Se mantuvieron fieles al Senado.",
      "Juraron lealtad a los dioses de Roma.",
      "Solo servían por un salario fijo del Estado.",
    ],
  },
  {
    question:
      "¿Cómo se describe el impacto del ejemplo de Sila sobre el poder personal y el uso del terror?",
    correctAnswer: "Sentó un precedente funesto.",
    distractors: [
      "Restauró la estabilidad política.",
      "Consolidó la autoridad del Senado.",
      "Marcó el inicio de una era de paz.",
    ],
  },
  {
    question:
      "¿Qué legalizó Publio Clodio Pulcro para usarlos como bandas armadas?",
    correctAnswer: "Los collegia.",
    distractors: ["Las legiones.", "Las cohortes.", "Los comicios."],
  },
  {
    question: "¿Qué ocurrió en los Idus de Marzo del 44 a.C.?",
    correctAnswer:
      "Un grupo de senadores (Bruto, Casio) asesina a Julio César.",
    distractors: [
      "Julio César se proclama emperador.",
      "Se firma un tratado de paz entre las facciones.",
      "Se inicia la Segunda Guerra Púnica.",
    ],
  },
  {
    question:
      "¿Cuál es la principal pregunta del debate historiográfico sobre el fin de la República?",
    correctAnswer: "¿La República 'cayó' o se 'transformó'?",
    distractors: [
      "¿Quién fue el verdadero fundador de Roma?",
      "¿Los reyes etruscos fueron figuras históricas o legendarias?",
      "¿Las guerras púnicas eran evitables?",
    ],
  },
  {
    question:
      "¿Qué se había vaciado de contenido en la República para el 44 a.C. debido a la lealtad de los ejércitos y el uso de la violencia?",
    correctAnswer: "Las instituciones.",
    distractors: ["Los templos.", "Los mercados.", "Las bibliotecas."],
  },
  {
    question:
      "¿Qué se mantuvo externamente en la República, a pesar de la acumulación de poder en un único líder?",
    correctAnswer: "Las formas externas (Senado, consulado).",
    distractors: [
      "La figura del rey.",
      "El sistema de la dictadura permanente.",
      "Las asambleas plebeyas.",
    ],
  },
  {
    question:
      "¿Qué nombre se le da al único líder que acumuló el poder real al final de la República?",
    correctAnswer: "El princeps.",
    distractors: ["El rey.", "El dictador.", "El cónsul."],
  },
  {
    question:
      "¿Qué origen épico se le dio a Roma a través de la conexión con Eneas?",
    correctAnswer: "El vínculo troyano.",
    distractors: [
      "El vínculo griego.",
      "El vínculo sabino.",
      "El vínculo latino.",
    ],
  },
  {
    question:
      "¿Qué era el 'pomerium' cuya leyenda de origen se explica con Rómulo y Remo?",
    correctAnswer: "Límite sagrado de la ciudad.",
    distractors: [
      "Lugar de asamblea.",
      "Río sagrado.",
      "Monte de la fundación.",
    ],
  },
  {
    question: "¿Qué era el 'nexum' que causó conflicto en la Lucha de Órdenes?",
    correctAnswer: "Esclavitud por deudas.",
    distractors: [
      "Impuesto sobre la tierra.",
      "Unidad militar romana.",
      "Tipo de magistratura.",
    ],
  },
  {
    question:
      "¿Qué eran las 'gentes' patricias cuyo poder se debilitó con la Reforma Serviana?",
    correctAnswer: "Linajes familiares.",
    distractors: [
      "Unidades militares.",
      "Asambleas populares.",
      "Clases sociales.",
    ],
  },
  {
    question:
      "¿Qué era el 'ager publicus' cuyo acaparamiento fue una causa de la Lucha de Órdenes?",
    correctAnswer: "Tierras públicas.",
    distractors: ["Propiedades privadas.", "Templos sagrados.", "Mercados."],
  },
  {
    question:
      "¿Cuál fue la respuesta de la aristocracia patricia a la demanda de igualdad plebeya?",
    correctAnswer:
      "La 'Serrata del Patriziato', convirtiéndose en una casta aún más cerrada.",
    distractors: [
      "Abrieron inmediatamente sus filas a los plebeyos.",
      "Crearon nuevas magistraturas para los plebeyos.",
      "Abandonaron Roma para fundar nuevas ciudades.",
    ],
  },
  {
    question:
      "¿Qué se estableció en 451-450 a.C. que puso fin al monopolio patricio de la interpretación legal?",
    correctAnswer: "Ley de las XII Tablas.",
    distractors: ["Ley Hortensia.", "Leyes Licinio-Sextias.", "Ley Canuleia."],
  },
  {
    question:
      "¿Qué magistratura fue creada por los patricios en respuesta a las Leyes Licinio-Sextias, para mantener su influencia?",
    correctAnswer: "La pretura.",
    distractors: ["La censura.", "La edilidad.", "La cuestura."],
  },
  {
    question:
      "¿Quién fue el rey que fundó el puerto de Ostia para asegurar el acceso al mar y a las salinas?",
    correctAnswer: "Anco Marcio.",
    distractors: ["Tarquinio Prisco.", "Servio Tulio.", "Numa Pompilio."],
  },
  {
    question:
      "¿Qué rey drena el valle del Foro y establece el espacio para el Circo Máximo?",
    correctAnswer: "Tarquinio Prisco.",
    distractors: ["Servio Tulio.", "Tarquinio el Soberbio.", "Anco Marcio."],
  },
  {
    question:
      "¿Qué rey introdujo las tribus territoriales (por domicilio, para impuestos)?",
    correctAnswer: "Servio Tulio.",
    distractors: ["Rómulo.", "Numa Pompilio.", "Tarquinio Prisco."],
  },
  {
    question:
      "¿Qué leyenda contrapone a Tulia con Lucrecia, arquetipos femeninos en la narración de Livio?",
    correctAnswer: "La violación de Lucrecia.",
    distractors: [
      "El Rapto de las Sabinas.",
      "La fundación de Alba Longa.",
      "El combate de Horacios y Curiacios.",
    ],
  },
  {
    question: "¿Qué fue la Reforma Serviana?",
    correctAnswer:
      "Reorganización de la sociedad con un criterio timocrático (basado en la riqueza) a través del censo.",
    distractors: [
      "Una reforma militar para fortalecer el ejército.",
      "Un plan de construcción de grandes obras públicas.",
      "Una reforma religiosa para crear nuevos cultos.",
    ],
  },
  {
    question:
      "¿Cuál fue el papel de los 'publicani' dentro de la orden ecuestre?",
    correctAnswer: "Recaudadores de impuestos.",
    distractors: ["Oficiales militares.", "Sacerdotes.", "Jueces."],
  },
  {
    question:
      "¿Quién fue acusado de aspirar a la tiranía y asesinado en una revuelta en el Capitolio?",
    correctAnswer: "Tiberio Graco.",
    distractors: ["Cayo Graco.", "Cayo Mario.", "Lucio Cornelio Sila."],
  },
  {
    question:
      "¿Qué evidencia la crisis del campesinado en la Crisis de la República?",
    correctAnswer: "La emigración como desposeídos (proletarii) a Roma.",
    distractors: [
      "El aumento de la producción agrícola.",
      "La expansión de sus propiedades.",
      "Su participación activa en el gobierno.",
    ],
  },
  {
    question: "¿Qué tipo de pacto fue el Primer Triunvirato?",
    correctAnswer:
      "Un pacto privado ilegal para controlar el Estado al margen del Senado.",
    distractors: [
      "Una alianza legal entre los cónsules y el Senado.",
      "Un tratado de paz entre Roma y sus enemigos.",
      "Una reforma constitucional para fortalecer la República.",
    ],
  },
  {
    question:
      "¿Qué reforma de César incluía el aumento del Senado a 900 miembros y la colonización en provincias?",
    correctAnswer: "Las impulsadas durante su dictadura.",
    distractors: [
      "Las impulsadas durante su consulado.",
      "Las impulsadas durante su tribunado.",
      "Las impulsadas durante su pretura.",
    ],
  },
  {
    question: "¿Cuál es la fecha tradicional de la fundación de Roma?",
    correctAnswer: "753 a.C.",
    distractors: ["1200 a.C.", "509 a.C.", "44 a.C."],
  },
  {
    question:
      "¿Qué historiador es mencionado en la periodización de la República?",
    correctAnswer: "P. A. Brunt.",
    distractors: ["Tito Livio.", "Dionisio de Halicarnaso.", "Cicerón."],
  },
  {
    question:
      "¿En qué se basaba la nueva nobilitas, que surgió del conflicto patricio-plebeyo?",
    correctAnswer: "Aristocracia patricio-plebeya de ricos y ex-magistrados.",
    distractors: [
      "Exclusivamente en el linaje patricia.",
      "En el servicio militar.",
      "En la cantidad de tierras poseídas.",
    ],
  },
  {
    question:
      "¿Qué fase inicial de la Era de Quietud aseguró el dominio de Roma sobre el Lacio?",
    correctAnswer: "Fases iniciales: Roma aseguró su dominio sobre el Lacio.",
    distractors: [
      "Las Guerras Púnicas.",
      "La conquista de la Magna Grecia.",
      "Las Guerras Samnitas.",
    ],
  },
  {
    question:
      "¿Qué conflicto, aunque no es una guerra púnica, se menciona como la Tercera Guerra Púnica?",
    correctAnswer: "La Tercera Guerra Púnica (149-146 a.C.)",
    distractors: [
      "La Primera Guerra Púnica.",
      "La Segunda Guerra Púnica.",
      "La Guerra de Yugurta.",
    ],
  },
  {
    question:
      "¿Qué término se usa para describir a un 'primero de su familia en llegar al consulado'?",
    correctAnswer: "Homo novus.",
    distractors: ["Princeps.", "Rex.", "Tiranus."],
  },
  {
    question:
      "¿Qué personaje es el arquetipo de la 'feroz y ambiciosa' hija de Servio Tulio?",
    correctAnswer: "Tulia.",
    distractors: ["Lucrecia.", "Tarpeya.", "Sabina."],
  },
  {
    question:
      "¿Qué acción de los hermanos Graco consistía en 'repartos de grano'?",
    correctAnswer:
      "Cayo Graco amplió el programa de su hermano con leyes sobre repartos de grano.",
    distractors: [
      "Tiberio Graco se enfocó solo en la reforma agraria.",
      "Mario distribuyó grano a sus soldados.",
      "Sila proscribió los repartos de grano.",
    ],
  },
  {
    question:
      "¿Qué tipo de violencia se desató en el corazón de Roma con el asesinato de Tiberio Graco?",
    correctAnswer: "Violencia política.",
    distractors: [
      "Violencia religiosa.",
      "Violencia criminal.",
      "Violencia familiar.",
    ],
  },
  {
    question:
      "¿Qué personaje es contrapuesto a la 'feroz y ambiciosa Tulia' en la tradición narrada por Livio?",
    correctAnswer: "La casta y virtuosa Lucrecia.",
    distractors: [
      "La guerrera Sabina.",
      "La traidora Tarpeya.",
      "La sabia Vesta.",
    ],
  },
  {
    question: "¿Qué sucedió con Craso en el Primer Triunvirato?",
    correctAnswer: "Murió.",
    distractors: [
      "Se convirtió en dictador.",
      "Fue exiliado.",
      "Se alió con el Senado.",
    ],
  },
  {
    question: "¿Qué justificación dio César al cruzar el Rubicón?",
    correctAnswer: "La defensa de la potestad tribunicia y su propia dignitas.",
    distractors: [
      "La conquista de nuevas tierras para Roma.",
      "La venganza por el asesinato de su aliado.",
      "El deseo de establecer una monarquía.",
    ],
  },
  {
    question:
      "¿Qué tipo de acto fue el 'tiranicidio preventivo' según F. Pina Polo?",
    correctAnswer: "Un recurso ilegal y rupturista.",
    distractors: [
      "Un acto legalmente reconocido.",
      "Una práctica común en la antigüedad.",
      "Una herramienta para la estabilidad política.",
    ],
  },
  {
    question:
      "¿Qué implica la 'profunda transformación' de la República hacia una nueva realidad política?",
    correctAnswer: "El paso al Imperio.",
    distractors: [
      "El retorno a la monarquía.",
      "La consolidación de la democracia.",
      "La fragmentación del Estado romano.",
    ],
  },
  {
    question: "¿En qué fecha se ubica el fin formal de la Lucha de Órdenes?",
    correctAnswer: "287 a.C.",
    distractors: ["509 a.C.", "133 a.C.", "44 a.C."],
  },
  {
    question:
      "¿Qué era el 'connubium' cuya prohibición fue una causa de la Lucha de Órdenes?",
    correctAnswer: "Matrimonios mixtos.",
    distractors: [
      "Derecho al voto.",
      "Derecho a la propiedad.",
      "Acceso a cargos públicos.",
    ],
  },
  {
    question: "¿Cuál fue el propósito principal de la Ley de las XII Tablas?",
    correctAnswer: "Hacer público el derecho y ponerlo por escrito.",
    distractors: [
      "Establecer la constitución de la República.",
      "Distribuir tierras a los plebeyos.",
      "Crear un nuevo sistema judicial.",
    ],
  },
  {
    question:
      "¿Cuál era la función principal de los censores en relación con el Senado, según la Ley Ovinia?",
    correctAnswer: "Seleccionar a los senadores.",
    distractors: [
      "Reclutar el ejército.",
      "Juzgar los crímenes.",
      "Administrar las finanzas.",
    ],
  },
  {
    question:
      "¿Qué general cartaginés fue derrotado por Roma en la batalla de Zama?",
    correctAnswer: "Aníbal.",
    distractors: ["Asdrúbal.", "Magón.", "Escipión."],
  },
  {
    question:
      "¿Cuál fue la motivación principal de Catón el Viejo al decir 'Carthago delenda est'?",
    correctAnswer: "Miedo a una posible recuperación cartaginesa.",
    distractors: [
      "Deseo de expandir el imperio romano.",
      "Venganza por las derrotas romanas anteriores.",
      "Interés en los recursos de Cartago.",
    ],
  },
  {
    question: "¿Quién fue el rey que organizó la vida religiosa en Roma?",
    correctAnswer: "Numa Pompilio.",
    distractors: ["Rómulo.", "Servio Tulio.", "Anco Marcio."],
  },
  {
    question:
      "¿Qué rey fue el 'segundo fundador' de Roma, conocido por sus reformas sociales y militares?",
    correctAnswer: "Servio Tulio.",
    distractors: ["Tarquinio Prisco.", "Tarquinio el Soberbio.", "Rómulo."],
  },
  {
    question: "¿Qué arquetipo femenino es Lucrecia en la narración de Livio?",
    correctAnswer: "La casta y virtuosa.",
    distractors: [
      "La ambiciosa y feroz.",
      "La traidora y astuta.",
      "La guerrera y valiente.",
    ],
  },
  {
    question:
      "¿Qué se entendía por 'tabú' en la violencia política en Roma, roto por el asesinato de Tiberio Graco?",
    correctAnswer:
      "Que la violencia política no se desataba en el corazón de Roma.",
    distractors: [
      "Que no se podía asesinar a un tribuno de la plebe.",
      "Que los senadores no podían participar en revueltas.",
      "Que el Capitolio era un lugar inviolable.",
    ],
  },
  {
    question:
      "¿Qué acción de Sila sentó un precedente funesto para la República?",
    correctAnswer: "Su ejemplo de poder personal y el uso del terror.",
    distractors: [
      "Su alianza con Pompeyo.",
      "Su reforma militar.",
      "Su abdicación como dictador.",
    ],
  },
  {
    question:
      "¿Qué magistratura era clave para los Populares para eludir el control senatorial?",
    correctAnswer: "El Tribunado de la Plebe.",
    distractors: ["El Consulado.", "La Censura.", "La Pretura."],
  },
  {
    question:
      "¿Qué grupo social concentró el capital proveniente de las guerras durante la expansión romana?",
    correctAnswer: "La aristocracia senatorial.",
    distractors: ["Los proletarii.", "Los campesinos.", "Los esclavos."],
  },
  {
    question:
      "¿Qué lugar sagrado, además de la cueva del Lupercal, se explica con la leyenda de Rómulo y Remo?",
    correctAnswer: "La Cabaña de Rómulo.",
    distractors: [
      "La Roca Tarpeya.",
      "El Comicio.",
      "El Templo de Júpiter Stator.",
    ],
  },
  {
    question:
      "¿Qué rito y concepto político, aparte del pomerium, explica la leyenda de Rómulo y Remo?",
    correctAnswer: "El fratricidio como acto fundacional del poder.",
    distractors: [
      "El rapto de las Sabinas.",
      "La elección del rey.",
      "La fundación del Senado.",
    ],
  },
  {
    question: "¿Qué acto de Tarpeya explica el origen de la Roca Tarpeya?",
    correctAnswer: "Su traición.",
    distractors: [
      "Su matrimonio con Rómulo.",
      "Su valentía en batalla.",
      "Su piedad religiosa.",
    ],
  },
  {
    question:
      "¿Quién fue el rey que en su reinado organizó la vida religiosa y fue un período de paz?",
    correctAnswer: "Numa Pompilio.",
    distractors: ["Rómulo.", "Tulo Hostilio.", "Anco Marcio."],
  },
  {
    question:
      "¿Qué obra construyó Anco Marcio además del puerto de Ostia y el Puente Sublicio?",
    correctAnswer: "La primera cárcel (el Tullianum).",
    distractors: [
      "La Cloaca Máxima.",
      "El Circo Máximo.",
      "El Templo de Júpiter.",
    ],
  },
  {
    question:
      "¿Qué dudas tienen los historiadores modernos sobre los reyes Tarquinios?",
    correctAnswer:
      "Si existieron dos reyes Tarquinios o si fue una única figura desdoblada.",
    distractors: [
      "Si eran etruscos o latinos.",
      "Si fueron tiranos o buenos gobernantes.",
      "Si realmente construyeron las obras atribuidas.",
    ],
  },
  {
    question:
      "¿Qué espacio urbano estableció Tarquinio Prisco en el valle del Foro, además de iniciar la Cloaca Máxima?",
    correctAnswer: "El espacio para el Circo Máximo.",
    distractors: ["El Senado.", "El Comicio.", "La Curia de Pompeyo."],
  },
  {
    question:
      "¿Qué impacto tuvo la Reforma Serviana en el poder de las gentes patricias?",
    correctAnswer:
      "Debilitó el poder de las gentes patricias basado en el linaje.",
    distractors: [
      "Fortaleció su poder.",
      "No tuvo impacto.",
      "Las eliminó por completo.",
    ],
  },
  {
    question:
      "¿Cuál fue la función principal de las tribus territoriales creadas por Servio Tulio?",
    correctAnswer: "Para impuestos (por domicilio).",
    distractors: [
      "Para voto en las curias.",
      "Para reclutamiento militar.",
      "Para la administración religiosa.",
    ],
  },
  {
    question:
      "¿Qué debate existe sobre la transición del fin de la monarquía a la República?",
    correctAnswer:
      "Si se pasó directamente a un consulado dual o si hubo una fase intermedia con un magistrado único (praetor maximus).",
    distractors: [
      "Si fue una transición pacífica o violenta.",
      "Si los plebeyos tuvieron participación.",
      "Si la monarquía fue realmente abolida.",
    ],
  },
  {
    question:
      "¿Qué significaba que el derecho patricio era 'oral y secreto' en el contexto de la Lucha de Órdenes?",
    correctAnswer:
      "Que los plebeyos estaban excluidos de su control e interpretación.",
    distractors: [
      "Que era un derecho sagrado y no podía ser escrito.",
      "Que solo se transmitía de forma verbal en el Senado.",
      "Que solo los sacerdotes lo conocían.",
    ],
  },
  {
    question:
      "¿Qué evento de 460 a.C. evidencia la tensión social antes de la Ley de las XII Tablas?",
    correctAnswer:
      "La toma del Capitolio por Apio Herdonio con exiliados y esclavos.",
    distractors: [
      "La secesión al Monte Sacro.",
      "Las Guerras Samnitas.",
      "La batalla de Cannas.",
    ],
  },
  {
    question:
      "¿Cuál fue uno de los límites establecidos por las Leyes Licinio-Sextias, además del acceso al consulado y el alivio de deudas?",
    correctAnswer: "Límite a la ocupación del ager publicus.",
    distractors: [
      "Límite a la construcción de templos.",
      "Límite al número de esclavos.",
      "Límite al comercio exterior.",
    ],
  },
  {
    question:
      "¿Cuál fue la fase inicial de la conquista de Italia que consolidó la influencia de Roma?",
    correctAnswer:
      "Aseguró su dominio sobre el Lacio para luego enfrentar a los etruscos al norte.",
    distractors: [
      "La conquista de la Magna Grecia.",
      "Las Guerras Samnitas.",
      "La invasión de la Galia Cisalpina.",
    ],
  },
  {
    question: "¿Qué propuso Cayo Flaminio con su ley agraria en 232 a.C.?",
    correctAnswer: "Una distribución de tierras en el Adriático.",
    distractors: [
      "La abolición de deudas.",
      "El acceso plebeyo a magistraturas.",
      "La construcción de nuevas colonias en Hispania.",
    ],
  },
  {
    question:
      "¿Qué consecuencia tuvo la ley agraria de Cayo Flaminio a pesar de la oposición del Senado?",
    correctAnswer: "Llevó a la gradual ocupación de la Galia Cisalpina.",
    distractors: [
      "Provocó una nueva guerra civil.",
      "Resultó en la expulsión de Cayo Flaminio.",
      "No tuvo ningún efecto.",
    ],
  },
  {
    question:
      "¿Qué se había superado, volviéndose una fuente de corrupción, durante la Crisis de la República, según el texto?",
    correctAnswer:
      "Las instituciones, convirtiendo la administración de las provincias en una fuente de enriquecimiento ilícito y corrupción.",
    distractors: ["El ejército.", "La religión.", "La economía agrícola."],
  },
  {
    question:
      "¿Cuál era el método de los Populares para adquirir poder, además de las asambleas populares y los equites?",
    correctAnswer:
      "Utilizar magistraturas como el Tribunado de la Plebe para proponer leyes de gran calado social.",
    distractors: [
      "La fuerza militar.",
      "La negociación con el Senado.",
      "La persuasión religiosa.",
    ],
  },
  {
    question: "¿Por qué Cayo Graco se hizo matar por un esclavo?",
    correctAnswer: "Acorralado por sus enemigos.",
    distractors: [
      "Por enfermedad.",
      "Por un accidente.",
      "Por decisión propia para evitar un juicio.",
    ],
  },
  {
    question: "¿Qué frase famosa pronunció Julio César al cruzar el Rubicón?",
    correctAnswer: "'Alea iacta est'.",
    distractors: [
      "'Veni, vidi, vici'.",
      "'Et tu, Brute?'.",
      "'Carthago delenda est'.",
    ],
  },
];

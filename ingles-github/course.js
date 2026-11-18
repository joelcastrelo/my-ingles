/* Curso original. Cada fila contiene una palabra o estructura con dos contextos. */
window.englishCourse = (() => {
  const vocabulary = [
    ['Viajes y turismo',
      ['boarding pass','tarjeta de embarque','Please show your ___ before entering the plane.','I downloaded my ___ to my phone.'],
      ['departure','salida','Our ___ is scheduled for seven in the morning.','The screens show the ___ time of each flight.'],
      ['arrival','llegada','Text me after your ___ in Rome.','The hotel needs to know our expected ___ time.'],
      ['destination','destino','What is your final ___ on this trip?','Our ___ is a small town on the coast.'],
      ['delay','retraso','There is a two-hour ___ because of fog.','The airline apologised for the long ___.'],
      ['refund','reembolso','I cancelled in time, so I should receive a full ___.','Please contact customer service to request a ___.'],
      ['insurance','seguro','Travel ___ may cover the cost of lost luggage.','Check your ___ policy before making a claim.'],
      ['itinerary','itinerario','Our ___ includes two days in Edinburgh.','I emailed the trip ___ to everyone in the group.'],
      ['sightseeing','visitas turísticas','We spent the afternoon ___ in the old town.','There is time for some ___ before dinner.'],
      ['currency','moneda','Which ___ do people use in Norway?','You can exchange foreign ___ at the bank.']],
    ['Empleo y economía',
      ['salary','sueldo','The job advertisement gives an annual ___ of £30,000.','They offered me a higher ___ after the interview.'],
      ['vacancy','puesto vacante','There is a ___ for an assistant in our department.','The company filled the ___ last week.'],
      ['application','solicitud','Please submit your job ___ before Friday.','I sent an ___ for the position yesterday.'],
      ['colleague','compañero de trabajo','A ___ from my team helped me with the report.','My new ___ sits at the desk next to mine.'],
      ['promotion','ascenso','She received a ___ and now manages the team.','The ___ comes with more responsibility.'],
      ['supplier','proveedor','Our ___ delivers fresh bread every morning.','We need a different ___ for office equipment.'],
      ['invoice','factura','Please pay the attached ___ within thirty days.','The ___ lists every item we ordered.'],
      ['profit','beneficio económico','After paying its costs, the shop made a small ___.','The company reinvested its ___ in new equipment.'],
      ['revenue','ingresos antes de descontar costes','Sales ___ increased, but higher costs reduced profit.','The business earns most of its ___ from subscriptions.'],
      ['workload','carga de trabajo','My ___ has grown since two colleagues left.','We hired an assistant to reduce the team’s ___.']],
    ['Problemas sociales',
      ['inequality','desigualdad','The report compares income ___ across regions.','Better access to education could reduce social ___.'],
      ['poverty','pobreza','The charity supports families living in ___.','Rising rents can push more people into ___.'],
      ['crime','delincuencia o delito','Street lighting can help people feel safer in areas with high ___.','The police are investigating the ___.'],
      ['witness','testigo','A ___ described what happened at the station.','The police asked the ___ to give a statement.'],
      ['fine','multa','He received a parking ___ for blocking the entrance.','You may have to pay a ___ if you travel without a ticket.'],
      ['charity','organización benéfica','The ___ collects clothes for local families.','She volunteers for a ___ at weekends.'],
      ['rights','derechos','Workers should know their legal ___.','The campaign aims to protect children’s ___.'],
      ['discrimination','discriminación','The policy aims to prevent age ___ at work.','The organisation investigates complaints of ___.'],
      ['community','comunidad','The local ___ organised a street clean-up.','The library provides a meeting space for the ___.'],
      ['volunteer','voluntario o colaborar sin cobrar','I work as a ___ at a food bank.','The event needs one more ___ to help at reception.']],
    ['Tecnología y comunicación',
      ['device','dispositivo','You can read the document on any mobile ___.','Please restart your ___ and try again.'],
      ['attachment','archivo adjunto','The email has an ___ containing the timetable.','I forgot to include the ___ with my CV.'],
      ['backup','copia de seguridad','Make a ___ of your files before updating the software.','I restored the document from yesterday’s ___.'],
      ['privacy','privacidad','Read the ___ settings before sharing your location.','The app gives users more control over their ___.'],
      ['connection','conexión','Our internet ___ is too slow for video calls.','I lost the ___ just before the meeting ended.'],
      ['update','actualización','Install the latest security ___ on your computer.','The software ___ fixes a problem with printing.'],
      ['download','descargar','You can ___ the timetable before your journey.','Please ___ the form and fill it in.'],
      ['upload','subir un archivo','Please ___ your CV to the application portal.','You can ___ a photo from your phone.'],
      ['browse','navegar o mirar','Visitors can ___ the online catalogue for free.','I like to ___ travel websites for ideas.'],
      ['reliable','fiable','We need a ___ connection for the interview.','The app is generally ___, but it sometimes freezes.']],
    ['Salud, deporte y estilo de vida',
      ['symptom','síntoma','A persistent cough can be a ___ of several illnesses.','Tell the doctor when you first noticed the ___.'],
      ['treatment','tratamiento','The doctor will explain the available ___ options.','She is receiving ___ for her injured shoulder.'],
      ['recovery','recuperación','He needs time for ___ after the operation.','The doctor expects a gradual ___.'],
      ['injury','lesión','A knee ___ stopped her from playing tennis.','He is back at work after a minor ___.'],
      ['balanced','equilibrado','A ___ diet includes a variety of foods.','She tries to maintain a ___ lifestyle.'],
      ['stamina','resistencia física','Long walks can help build your ___ over time.','The race requires strength and ___.'],
      ['wellbeing','bienestar','The programme focuses on employees’ mental ___.','Sleep is important for general ___.'],
      ['routine','rutina','A regular bedtime is part of my evening ___.','I am trying to establish an exercise ___.'],
      ['exhausted','agotado','I felt completely ___ after the overnight journey.','The runners were ___ at the finish line.'],
      ['recover','recuperarse','She needs a few days to ___ from the flu.','He hopes to ___ in time for the next match.']],
    ['Medioambiente y sostenibilidad',
      ['emissions','emisiones','The city wants to reduce transport ___.','Electricity generation can produce greenhouse gas ___.'],
      ['drought','sequía','The long ___ has damaged crops in the region.','Reservoir levels fell during the ___.'],
      ['flood','inundación','The ___ damaged homes near the river.','They built barriers to protect the village from a ___.'],
      ['habitat','hábitat','The wetland is an important ___ for birds.','Road building has reduced the animal’s natural ___.'],
      ['recycle','reciclar','Can we ___ these glass bottles here?','The office encourages staff to ___ paper.'],
      ['reusable','reutilizable','I take a ___ bag to the supermarket.','The café offers a discount for bringing a ___ cup.'],
      ['pollution','contaminación','Air ___ is a serious problem near busy roads.','The factory was fined for water ___.'],
      ['conserve','conservar y ahorrar recursos','Fixing leaks helps ___ water.','We should ___ energy by switching off unused lights.'],
      ['wildlife','fauna silvestre','The park protects local ___.','Visitors must avoid disturbing the ___.'],
      ['sustainable','sostenible','The company is looking for more ___ packaging.','They are developing a more ___ transport system.']],
    ['Educación y aprendizaje',
      ['assignment','trabajo o tarea asignada','Our next ___ is an essay about transport.','I submitted the ___ before the deadline.'],
      ['qualification','titulación o acreditación','The position requires a teaching ___.','She gained a professional ___ while working.'],
      ['tuition','enseñanza o matrícula en tuition fees','The university has increased its ___ fees.','The course price includes individual ___.'],
      ['scholarship','beca de mérito o ayuda para estudiar','She won a ___ to study abroad.','The ___ covers her course fees.'],
      ['lecture','clase expositiva o conferencia','The professor gave a ___ on renewable energy.','Students took notes during the ___.'],
      ['assessment','evaluación','The final ___ includes a presentation and a written task.','Continuous ___ counts towards the final grade.'],
      ['progress','progreso','Short daily practice helps me make steady ___.','The teacher checked our ___ at the end of the month.'],
      ['fluent','con fluidez','She is ___ in both English and Italian.','My aim is to become more ___ when speaking.'],
      ['accurate','preciso o correcto','Check that the dates in your application are ___.','The translation is clear and ___.'],
      ['confidence','confianza','Practising with a colleague helped build my ___.','I gained ___ after my first conversation abroad.']],
    ['Arte y cultura',
      ['performance','actuación','The final ___ starts at eight.','The audience enjoyed the band’s ___.'],
      ['venue','lugar de un evento','The concert ___ is near the station.','They changed the ___ because more space was needed.'],
      ['plot','trama','The film has an unusual ___ with several surprises.','I liked the characters, but the ___ was hard to follow.'],
      ['character','personaje','The main ___ moves to a different country.','The actor played a ___ based on a real explorer.'],
      ['heritage','patrimonio','The museum celebrates the region’s cultural ___.','The old buildings are part of our industrial ___.'],
      ['masterpiece','obra maestra','The gallery displays a ___ by a famous painter.','Many critics consider the novel a ___.'],
      ['sculpture','escultura','There is a stone ___ in the courtyard.','The artist spent a year working on the ___.'],
      ['rehearsal','ensayo escénico','The actors have a ___ before the show.','We watched part of the orchestra’s ___.'],
      ['review','reseña','I read a positive ___ of the exhibition.','She wrote a detailed ___ of the play.'],
      ['admission','entrada o acceso','___ to the museum is free on Sundays.','The ticket price includes ___ to the gardens.']],
    ['Ciencia e investigación',
      ['research','investigación','The team carried out ___ into battery storage.','More ___ is needed before drawing conclusions.'],
      ['finding','hallazgo o resultado','The most surprising ___ was the difference between the groups.','The team presented its main ___ at the conference.'],
      ['sample','muestra','They tested a ___ of water from the river.','The survey used a random ___ of adults.'],
      ['data','datos','The team collected ___ from five different sites.','We need more ___ to test the prediction.'],
      ['hypothesis','hipótesis','The experiment was designed to test the ___.','The results did not support our original ___.'],
      ['accurately','con precisión','The sensor measures temperature ___.','Record the results as ___ as possible.'],
      ['breakthrough','avance importante','The discovery was a major ___ in materials research.','Scientists hope the new method will lead to a ___.'],
      ['method','método','The researchers explained their testing ___.','We used the same ___ in both experiments.'],
      ['outcome','resultado','The final ___ was different from our prediction.','Several factors could influence the ___ of the trial.'],
      ['conduct','llevar a cabo','The university will ___ a survey of local residents.','We need permission to ___ the experiment.']],
    ['Alimentación y cocina',
      ['ingredient','ingrediente','Garlic is an important ___ in this sauce.','Check every ___ if you have a food allergy.'],
      ['allergy','alergia','Please tell the waiter if you have a food ___.','My sister has a severe nut ___.'],
      ['portion','ración','The ___ was too large for one person.','Could I have a smaller ___ of rice?'],
      ['starter','entrante','We ordered soup as a ___.','The ___ arrives before the main course.'],
      ['dessert','postre','Would you like fruit or ice cream for ___?','We shared a chocolate ___ after dinner.'],
      ['bake','hornear','___ the bread for thirty minutes.','You can ___ the potatoes instead of frying them.'],
      ['boil','hervir','___ the water before adding the pasta.','How long should I ___ these eggs?'],
      ['grill','hacer a la parrilla','We will ___ the vegetables outside.','You can ___ the fish for a few minutes on each side.'],
      ['leftovers','sobras','Put the ___ in the fridge after dinner.','We had yesterday’s ___ for lunch.'],
      ['spicy','picante','This curry is too ___ for me.','Could you recommend something less ___?']],
    ['Vida urbana y vivienda',
      ['landlord','propietario que alquila','Our ___ arranged for the boiler to be repaired.','The ___ collects the rent every month.'],
      ['tenant','inquilino','The ___ is responsible for keeping the flat clean.','The new ___ moves in on Saturday.'],
      ['deposit','fianza o depósito','We paid a ___ before moving into the flat.','The landlord returned our ___ when we left.'],
      ['commute','trayecto habitual al trabajo','My daily ___ takes forty minutes by train.','A shorter ___ would give me more free time.'],
      ['neighbourhood','barrio','We live in a quiet ___ outside the centre.','There are several cafés in the ___.'],
      ['facilities','instalaciones o servicios','The building has laundry ___ for residents.','The sports centre offers excellent ___.'],
      ['spacious','amplio','The flat is bright and ___, with three large rooms.','We need a more ___ office for the growing team.'],
      ['affordable','asequible','It is difficult to find ___ housing near the centre.','The council is planning more ___ homes.'],
      ['maintenance','mantenimiento','The lift is closed for routine ___.','The rent includes building ___.'],
      ['outskirts','afueras','The airport is on the ___ of the city.','They moved to a house on the ___.']]
  ];
  const grammar = [
    ['Tiempos verbales','Present simple y preguntas','Para hábitos usa presente simple. He/she/it añade -s. Para preguntar usa do/does y forma base.',
      ['Where ___ she work?','does','Where ___ your brother live?'],
      ['My colleague ___ (start) at nine every day.','starts','The morning shift ___ (start) at seven on weekdays.']],
    ['Tiempos verbales','Present continuous','Am/is/are + -ing muestra una acción en curso o un plan organizado. Los verbos de estado como know suelen ir en presente simple.',
      ['We ___ (prepare) the room right now.','are preparing','We ___ (discuss) the budget at the moment.'],
      ['She ___ (not work) today.','is not working/isn’t working/is not working/isn\'t working','She ___ (not work) this week.']],
    ['Tiempos verbales','Past simple','Para acciones terminadas usa pasado simple. Después de did o didn’t usa la forma base.',
      ['We ___ (buy) the tickets last night.','bought','We ___ (buy) a new printer yesterday.'],
      ['Did you ___ (go) to the conference?','go','Did they ___ (go) abroad last year?']],
    ['Tiempos verbales','Past continuous','Was/were + -ing describe el fondo de una historia. Una acción puntual puede interrumpir otra que estaba en curso.',
      ['She ___ (drive) when the storm started.','was driving','She ___ (drive) when I called.'],
      ['They ___ (have) lunch when the power went off.','were having','They ___ (have) a meeting when the alarm rang.']],
    ['Tiempos verbales','Present perfect y duración','Have/has + participio conecta pasado y presente. For indica duración. Since indica un punto de inicio.',
      ['I have known her ___ ten years.','for','We have lived here ___ six months.'],
      ['We have lived here ___ 2020.','since','She has worked here ___ last January.']],
    ['Tiempos verbales','Past perfect','Had + participio marca una acción anterior a otro momento pasado.',
      ['When we arrived, the guests ___ (leave). Usa past perfect.','had left','By the time I called, they ___ (leave). Usa past perfect.'],
      ['She could not enter because she ___ (lose) her key.','had lost','He could not open the door because he ___ (lose) the key.']],
    ['Tiempos verbales','Futuro y planes','Will se usa en decisiones al hablar, promesas y predicciones. Be going to expresa intenciones. El presente continuo puede indicar un plan acordado.',
      ['The phone is ringing. I ___ (answer) it. Usa will.','will answer/I\'ll answer','Someone is at the door. I ___ (answer) it. Usa will.'],
      ['This time tomorrow, we ___ (fly) over France. Usa futuro continuo.','will be flying','At ten tomorrow, we ___ (fly) to Madrid. Usa futuro continuo.']],
    ['Artículos y determinantes','Contables, incontables y cantidad','Many/few se usan con plurales contables. Much/little se usan con incontables. A few o a little indican que hay algo, aunque sea poco.',
      ['There are too ___ people in this room.','many','How ___ tickets do we need?'],
      ['There is very ___ time before the deadline.','little','We have very ___ information about the delay.']],
    ['Artículos y determinantes','A/an, the y generalizaciones','A/an introduce un singular contable. The identifica algo conocido o único en el contexto. En generalizaciones, los plurales suelen ir sin artículo.',
      ['She works at ___ university. Escribe a o an.','a','He is ___ European citizen. Escribe a o an.'],
      ['This is ___ only room available.','the','She is ___ best person for the role.']],
    ['Adjetivos y adverbios','Good, well, hard y hardly','Good describe nombres. Well suele describir cómo se hace algo. Hard significa con esfuerzo. Hardly significa casi no.',
      ['She speaks English very ___. Usa good o well.','well','The presentation went very ___. Usa good o well.'],
      ['I can ___ hear you. The connection is terrible. Usa hard o hardly.','hardly','We could ___ see the road in the fog. Usa hard o hardly.']],
    ['Comparativos y superlativos','Igualdad y grado','As + adjetivo + as compara igualdad. Puedes modificar un comparativo con much, far o a little.',
      ['This room is not as large ___ the other one.','as','The new office is as quiet ___ the old one.'],
      ['The more you practise, the ___ (easy) it gets.','easier','The more I use the app, the ___ (easy) it becomes.']],
    ['Verbos modales','Deducciones presentes y pasadas','Must indica una deducción firme. Can’t indica que algo parece imposible. Might expresa posibilidad. Para el pasado añade have + participio.',
      ['He is not answering. He might ___ (leave) his phone at home.','have left','She is offline. She might ___ (leave) her laptop at the office.'],
      ['It is impossible that he saw us. He can\'t ___ (see) us.','have seen','She was abroad, so she can\'t ___ (see) the accident.']],
    ['Gerundio e infinitivo','Remember, stop y try','Remember to do significa acordarse de hacer algo pendiente. Remember doing recuerda una experiencia. Try doing prueba un método y try to do intenta lograr algo.',
      ['Remember ___ (lock) the door when you leave.','to lock','Please remember ___ (lock) the office tonight.'],
      ['I remember ___ (meet) her at a conference last year.','meeting','He remembers ___ (meet) the director in Paris.']],
    ['Oraciones de relativo','Defining y non-defining','Una relativa identificativa define de quién hablamos. Una explicativa añade información entre comas. En explicativas usa who o which, sin that.',
      ['My laptop, ___ I bought last month, is broken.','which','The hotel, ___ opened last year, has a rooftop terrace.'],
      ['The man ___ car was stolen called the police.','whose','The guest ___ bag is missing is at reception.']],
    ['Voz pasiva','Modales y pasiva perfecta','La pasiva usa be + participio. Con modales usa modal + be + participio. En present perfect usa has/have been + participio.',
      ['The form must ___ (sign) before Friday.','be signed','The contract should ___ (sign) today.'],
      ['The tickets have already ___ (send).','been sent','The invitations have ___ (send) to all guests.']],
    ['Voz pasiva','Have something done','Have + objeto + participio expresa que encargas un servicio a otra persona.',
      ['I had my phone ___ (repair) yesterday.','repaired','She will have her laptop ___ (repair) tomorrow.'],
      ['We are having the office ___ (paint) this week.','painted','They had their kitchen ___ (paint) last month.']],
    ['Estilo indirecto','Peticiones y órdenes','Ask/tell + persona + to + verbo expresa una petición u orden. Para una orden negativa usa not to.',
      ['She asked me ___ (wait) outside.','to wait','He told us ___ (wait) in reception.'],
      ['He told me ___ (not touch) the equipment.','not to touch','The guide asked us ___ (not touch) the paintings.']],
    ['Condicionales','Unless y segundo condicional','Unless equivale normalmente a if not. Para una situación presente imaginada usa if + pasado y would + verbo.',
      ['We will miss the train ___ we leave now. Escribe unless o if.','unless','You will not improve ___ you practise. Escribe unless o if.'],
      ['If I ___ you, I would ask for help. Usa la forma formal de be.','were','If she ___ here, she could explain it. Usa la forma formal de be.']],
    ['Condicionales','Condicional mixto','Un hecho pasado imaginado puede tener un resultado presente. Combina if + past perfect con would + forma base.',
      ['If I had taken that job, I ___ (live) in London now.','would live/would be living','If we had moved last year, we ___ (live) near the coast now.'],
      ['If she had studied medicine, she ___ (be) a doctor now.','would be','If he had passed the exam, he ___ (be) qualified now.']],
    ['Inversión','Negativos y so/such','Tras ciertos adverbios negativos al principio, coloca el auxiliar antes del sujeto. Usa did con un pasado simple.',
      ['Rarely ___ we see such careful work. Escribe do o does.','do','Seldom ___ they arrive late. Escribe do o does.'],
      ['Not until noon ___ the guests arrive. Usa auxiliar de pasado.','did','Only after the meeting ___ she call me. Usa auxiliar de pasado.']]
  ];
  const usage = [
    ['Preposiciones','Adjetivo y preposición','Aprende cada combinación completa y reutilízala en una situación personal.',
      ['We are keen ___ trying the new course.','on','She is keen ___ learning Portuguese.'],
      ['She is proud ___ her team.','of','He was proud ___ his progress.'],
      ['This product is similar ___ the old one.','to','Your idea is similar ___ mine.'],
      ['I am worried ___ the delay.','about','They are worried ___ the price increase.']],
    ['Preposiciones','Verbo y preposición','La preposición forma parte de la combinación. Si después va otro verbo, suele llevar -ing.',
      ['I look forward ___ hearing from you.','to','We look forward ___ meeting you.'],
      ['They apologised ___ arriving late.','for','I apologised ___ the mistake.'],
      ['You can rely ___ our team.','on','We rely ___ public transport.'],
      ['This bag belongs ___ me.','to','Who does this ticket belong ___?']],
    ['Phrasal verbs','Movimientos y cambios','Turn down puede significar rechazar. Run out of significa quedarse sin algo. Cada expresión necesita contexto.',
      ['We have run ___ of paper.','out','I ran ___ of time during the exam.'],
      ['She turned ___ the job offer.','down','He turned ___ the invitation because he was busy.'],
      ['Please fill ___ this form.','in/out','Could you fill ___ your contact details?'],
      ['The meeting was called ___. It will not take place.','off','They called ___ the match because of snow.']],
    ['Combinaciones de palabras','Verbo y nombre','Elige el verbo que se combina de forma natural con el nombre.',
      ['We need to ___ an effort to arrive on time.','make','She will ___ an effort to attend.'],
      ['It is important to ___ attention to the instructions.','pay','Please ___ attention during the safety briefing.'],
      ['We could ___ time by booking online.','save','Taking the metro will ___ time.'],
      ['Do not ___ a promise you cannot keep.','make','He did not want to ___ a promise too soon.']],
    ['Formación de palabras','Sufijos de nombres','Las terminaciones -tion, -ment y -ness suelen crear sustantivos. Comprueba singular, plural y ortografía.',
      ['We need your ___ (PERMIT) to use the photo.','permission','She gave us ___ (PERMIT) to leave early.'],
      ['There has been a big ___ (IMPROVE) in service.','improvement','We noticed an ___ (IMPROVE) in his writing.'],
      ['Her ___ (KIND) made us feel welcome.','kindness','Thank you for your ___ (KIND).'],
      ['The final ___ (DECIDE) is yours.','decision','We made a ___ (DECIDE) yesterday.']],
    ['Formación de palabras','Prefijos y cambios de categoría','El hueco puede requerir el sentido negativo. Mira el contexto antes de añadir un prefijo.',
      ['It is ___ (POSSIBLE) to park here. There is no space.','impossible','Finishing in one minute is ___ (POSSIBLE). We need an hour.'],
      ['The answer was ___ (CORRECT), so I tried again.','incorrect','Two figures in the report were ___ (CORRECT).'],
      ['Please drive ___ (CARE) on the ice.','carefully','Check the details ___ (CARE) before paying.'],
      ['She explained it very ___ (CLEAR).','clearly','The signs are ___ (CLEAR) marked.']],
    ['Conectores y modismos','Contraste, causa y resultado','Although introduce una oración. Despite va seguido de un nombre o -ing. Therefore introduce un resultado.',
      ['___ the rain, we enjoyed the walk. Escribe despite o although.','despite','The flight left on time ___ the fog. Escribe despite o although.'],
      ['___ it was raining, we went out. Escribe despite o although.','although','___ she was tired, she helped us. Escribe despite o although.'],
      ['We were late ___ of the traffic.','because','The match was cancelled ___ of the storm.'],
      ['The train broke down. ___, we arrived late. Escribe therefore o although.','therefore','The shop was closed. ___, we ordered online. Escribe therefore o although.']],
    ['Expresiones fijas','Expresiones de uso frecuente','Practica el grupo completo para poder recuperarlo sin traducir palabra por palabra.',
      ['Please let me ___ if you need anything.','know','Let us ___ when you arrive.'],
      ['In ___ of price, this option is better.','terms','In ___ of location, the first hotel is ideal.'],
      ['I would ___ stay near the station. Escribe rather o prefer.','rather','We would ___ take the train. Escribe rather o prefer.'],
      ['You should take the weather into ___.','account','Please take the extra costs into ___.']]
  ];
  const items = [];
  const chapters = [];
  const make = (category, theme, level, row, explanation) => {
    const [prompt, answers, alternate] = row;
    const item = {category,theme,level,prompt,valid:answers.split('/'),explanation};
    item.alternatePrompt=alternate;
    return item;
  };
  for (const [theme,...rows] of vocabulary) {
    const examples=[];
    for (const [word,meaning,prompt,alternate] of rows) {
      items.push(make('Vocabulario',theme,'B1',[prompt,word,alternate],meaning));
      examples.push(word+' — '+meaning+'. '+prompt.replace('___',word));
    }
    chapters.push(['Vocabulario',theme+' · Ampliación','Aprende estas palabras dentro de frases. Elige tres, completa sus ejercicios y después crea tu propio ejemplo.',examples.join('\n'),'La misma palabra aparece en un segundo contexto al repasar un error.']);
  }
  for (const [category,groups] of [['Gramática',grammar],['Use of English',usage]]) {
    for (const [theme,title,rule,...rows] of groups) {
      const examples=[];
      for (const row of rows) {
        const item=make(category,theme,'B2',row,rule);
        item.lesson=title;
        item.theory=rule;
        items.push(item);
        examples.push(row[0].replace('___',row[1].split('/')[0]));
      }
      chapters.push([category,title,rule,examples.join('\n'),'Completa los huecos y explica con tus palabras por qué encaja la respuesta.']);
    }
  }
  const readings = [
    ['Viajes y turismo','B1','A late arrival',
      'Maya booked a small guesthouse for a work trip. Her train was due at six, but a signal failure delayed it by two hours. She emailed the owner, who replied that reception would close at eight. However, he could leave a key in a secure box beside the front door. Maya received a code and a photo of the entrance. When she arrived at half past eight, the street was dark, but the photo helped her find the right building. The next morning, the owner offered to keep her bag until her evening train. Maya had expected the delay to ruin her evening. In the end, sending one message had solved most of the problem.',
      [
        ['What caused the delay? Complete: A ___ failure.','signal','Busca la causa en la segunda frase.'],
        ['Where was the key? Complete: In a secure ___.','box','La respuesta se refiere al lugar donde se guarda la llave.'],
        ['What helped Maya find the guesthouse? Complete: The ___.','photo','Busca la ayuda visual que le enviaron.'],
        ['Why could Maya explore without carrying her bag? Complete: The owner offered to ___ it.','keep/store','Fíjate en lo que ofreció el dueño por la mañana.']
      ]],
    ['Trabajo','B1','A useful change',
      'Our team used to hold a meeting every Monday at nine. Staff who worked late on Sundays often struggled to arrive on time, and the meeting regularly began without them. Last month, we moved it to Wednesday afternoon and shortened it from an hour to twenty minutes. Everyone now sends a short update before the meeting. During the meeting, we discuss problems that need a decision rather than reading out every update. Some people worried that the shorter meeting would feel rushed. After four weeks, most staff said it was easier to prepare and more useful. The manager will ask for feedback again in two months before making the arrangement permanent.',
      [
        ['When is the meeting now? Complete: On ___ afternoon.','Wednesday','Identifica el nuevo día.'],
        ['How many minutes does the meeting last now?','20/twenty','Distingue la duración anterior de la actual.'],
        ['What must staff send beforehand? Complete: A short ___.','update','Busca lo que se prepara antes de asistir.'],
        ['Is the arrangement already permanent? Answer yes or no.','no','El gerente decidirá después de recoger más comentarios.']
      ]],
    ['Medioambiente','B2','The cup scheme',
      'A café near the station introduced reusable cups for takeaway drinks. Customers pay a small deposit, which they receive back when they return the cup. The owner initially expected commuters to welcome the idea immediately. Instead, many worried about having to carry an empty cup all day. The café then partnered with two nearby shops, allowing customers to return cups at several locations. Return rates rose, although some cups still disappear. The owner is cautious about calling the project a success. Producing each cup uses resources, so it has to be reused many times to justify the change. The next step is to collect data on how often each cup is used, rather than simply count how many people join the scheme.',
      [
        ['What payment is returned when a cup comes back? Complete: The ___.','deposit','Busca el dinero que se devuelve.'],
        ['What changed after other shops joined? Complete: Cup ___ rates rose.','return','Identifica la medida que hizo más fácil devolver vasos.'],
        ['How does the owner feel about declaring success? Complete: The owner is ___.','cautious','La actitud aparece expresada directamente.'],
        ['What must happen many times for a cup to justify its production? Complete: It must be ___.','reused','El texto compara los recursos de fabricación con el uso repetido.']
      ]],
    ['Educación','B2','Learning between shifts',
      'When Leon started an online English course, he watched several lessons every evening. He recognised the explanations the next day, but could rarely use the language in conversation. His tutor suggested reducing the number of new lessons and spending more time retrieving what he had already studied. Leon began answering short questions without looking at his notes. He made more mistakes than before, which initially felt discouraging. Yet after a few weeks, he could use several expressions during calls at work. He still watches new lessons, but now leaves time between them. His progress has also become easier to notice because he keeps brief recordings of the same speaking task each month.',
      [
        ['What could Leon rarely do at first? Complete: Use the language in ___.','conversation','Reconocer una explicación y usarla al hablar son resultados distintos.'],
        ['What did his tutor suggest reducing? Complete: The number of new ___.','lessons','Identifica qué debía reducir, además de qué debía aumentar.'],
        ['How did mistakes feel at first? Complete: ___.','discouraging','La reacción inicial aparece antes de la mejora.'],
        ['What does he keep each month to compare progress? Complete: Brief ___.','recordings','Busca cómo hace visible su progreso oral.']
      ]],
    ['Tecnología','B2','Choosing a booking app',
      'The city museum tested two booking apps. App A looked more attractive and offered detailed visitor statistics. App B had fewer features but worked well on older phones and slow connections. During the trial, staff found that several visitors abandoned App A before completing payment. Interviews suggested that the problem was the number of steps, rather than the price of admission. The museum chose App B, even though its reports required more work from staff. The director argued that a booking system should first help people book tickets. Extra analysis would be useful only if the system remained accessible. The museum plans to review the choice after six months, using completed bookings and visitor feedback.',
      [
        ['Which app did the museum choose? Write A or B.','b','Busca la decisión final.'],
        ['What caused visitors to abandon App A? Complete: Too many ___.','steps','Las entrevistas distinguen el problema del precio.'],
        ['Which app was easier to use on old phones? Write A or B.','b','Localiza la comparación de accesibilidad.'],
        ['What will accompany completed booking numbers in the review? Complete: Visitor ___.','feedback','La última frase menciona dos tipos de información.']
      ]],
    ['Vivienda','B2','The shared garden',
      'Residents of a block of flats wanted to turn an unused yard into a shared garden. Some imagined a quiet place to read, while others wanted somewhere for children to play. An early plan included a large seating area, but left little room for plants. Rather than vote on the plan immediately, the residents tested a temporary arrangement using borrowed benches and movable planters. After a month, they discovered that people used the space at different times and rarely disturbed one another. They also noticed that the sunniest corner became too hot in the afternoon. Their final design added shade there and kept the middle open. The trial cost little and revealed problems that the drawings had not shown.',
      [
        ['What did residents test before making the final design? Complete: A temporary ___.','arrangement','Busca lo que precedió al diseño final.'],
        ['Why was there little disturbance between users? Complete: They used it at different ___.','times','La explicación depende de cuándo se usaba el patio.'],
        ['What did they add to the hot corner? Complete: ___.','shade','Relaciona el calor de la tarde con la solución.'],
        ['Which approach did they choose first? A: a permanent build. B: a low-cost trial. Write A or B.','b','La prueba con material prestado ocurrió antes de la solución definitiva.']
      ]]
  ];
  for (const [theme,level,title,text,questions] of readings) {
    questions.forEach(([prompt,answers,explanation],index) => {
      const item=make('Reading',theme,level,[prompt,answers,prompt],explanation);
      item.passage=text;
      item.lesson=title+' · Pregunta '+(index+1);
      items.push(item);
    });
    chapters.push(['Reading',title,text,questions.map(q=>q[0]+' → '+q[1].split('/')[0]).join('\n'),'Lee primero el texto. Contesta sin mirar las soluciones y vuelve al fragmento que justifica cada respuesta.']);
  }
  const listening = [
    ['Viajes','The coach to Bath will leave from bay six at a quarter past ten. Please arrive ten minutes before departure.',
      '¿A qué hora sale el autocar? Usa cifras con dos puntos.', '10:15','A quarter past ten significa diez y cuarto.'],
    ['Viajes','Your room is on the third floor. Breakfast is served between seven and nine in the café next door.',
      '¿En qué planta está la habitación? Responde en inglés o con una cifra.','third/three/3','Escucha la planta, además del horario de desayuno.'],
    ['Trabajo','I can finish the first draft today, but I will need until Friday to check the figures. Please do not send it to the client before then.',
      '¿Qué día podrá terminar de comprobar las cifras? Responde en inglés.','Friday','El primer borrador y la revisión de cifras tienen plazos distintos.'],
    ['Trabajo','We need two volunteers for the morning shift and three for the afternoon. Please tell Sara which shift you prefer.',
      '¿Cuántos voluntarios necesitan por la tarde? Responde en inglés o con una cifra.','three/3','Escucha el número ligado a afternoon.'],
    ['Compras','The jacket was originally eighty pounds. It is now sixty, and delivery costs an extra five.',
      '¿Cuánto cuesta la chaqueta con envío? Usa cifras.','65','Suma el precio rebajado y el envío.'],
    ['Planes','I was going to book the restaurant for Saturday, but it is full. We can have a table on Sunday at half past seven.',
      '¿Qué día hay mesa disponible? Responde en inglés.','Sunday','El día inicial aparece antes del cambio.']
  ];
  for (const [theme,speech,prompt,answer,explanation] of listening) {
    items.push({...make('Listening',theme,'B1',[prompt,answer,prompt],explanation),speech});
  }
  const writing = [
    ['Email práctico','B1','Escribe a un alojamiento. Llegarás después del cierre de recepción. Indica la hora, pregunta cómo recoger la llave y pide confirmación.',
      ['Saluda e identifica tu reserva.','Explica la hora de llegada y pregunta por las llaves.','Pide confirmación y despídete.'],
      'My booking is under… · I expect to arrive at… · Could you let me know how…?',
      'Hello,\nI have a booking for Friday under the name Alex Ruiz. My train arrives at ten, so I expect to reach the hotel at about half past ten. Could you let me know how I can collect the key after reception closes? Please confirm whether a late arrival is possible.\nKind regards,\nAlex',
      ['Could you ___ whether a late arrival is possible?','confirm','Pedir confirmación.']],
    ['Email práctico','B1','Escribe a un compañero. Has terminado un borrador, necesitas que compruebe dos cifras y quieres recibir su respuesta antes del jueves.',
      ['Explica qué has terminado.','Pide una revisión concreta.','Indica el plazo y agradece la ayuda.'],
      'I have finished… · Could you check…? · I would need your reply by…',
      'Hi Maya,\nI have finished the draft of the monthly report. Could you check the sales figures for March and April? I would need your reply by Thursday so I can send the final version on Friday. Thanks for your help.\nAlex',
      ['Could you ___ the sales figures?','check','Comprobar información.']],
    ['Ensayo','B2','¿Deberían los centros urbanos limitar los coches? Trata la calidad del aire y las necesidades de quienes se desplazan al trabajo. Da tu opinión.',
      ['Presenta la propuesta y su finalidad.','Analiza aire y desplazamientos con ejemplos.','Propón una conclusión que tenga en cuenta ambos puntos.'],
      'Restricting traffic could… · One concern is… · A practical solution would be…',
      'Limiting cars in city centres could make streets cleaner and quieter. However, the effect on people who travel to work needs careful consideration.\nReducing traffic can improve air quality near busy roads and make walking more pleasant. This may also help local cafés and shops attract visitors.\nOn the other hand, some workers start before public transport runs, and others carry heavy equipment. A strict ban could make their journeys much harder.\nIn my view, restrictions should be introduced alongside reliable public transport and exceptions for people who need a vehicle. That would make the policy fairer while still reducing unnecessary traffic.',
      ['On the other ___, some workers need a car.','hand','Introduce otro punto de vista.']],
    ['Reseña','B2','Reseña una aplicación que hayas usado para estudiar. Describe una función útil, un inconveniente y para quién la recomendarías.',
      ['Presenta la aplicación y para qué la usaste.','Explica una ventaja con un ejemplo y un inconveniente.','Recomienda con una condición concreta.'],
      'The feature I used most was… · It would be better if… · It is particularly useful for…',
      'A useful way to use five minutes\nI tried a language app during my commute. The feature I used most was its review queue, which brought back words I had forgotten in new sentences. That helped me remember them at work.\nThe main weakness was the limited explanation after a wrong answer. It would be better if the app showed why an alternative was unsuitable.\nI would recommend it to busy learners who want a daily routine, especially if they also have opportunities to speak.',
      ['It would be ___ if the explanations were clearer.','better','Comparativo de good.']],
    ['Informe','B2','Informa sobre una prueba de trabajo remoto. Resume dos resultados y recomienda qué debería hacer la empresa después.',
      ['Explica el objetivo y la información consultada.','Presenta resultados positivos y dificultades.','Relaciona cada recomendación con un resultado.'],
      'The purpose of this report is… · Staff reported… · I recommend that…',
      'Remote work trial\nPurpose\nThis report summarises feedback from a four-week remote work trial.\nFindings\nMost staff reported fewer interruptions and shorter working days because they avoided commuting. However, new colleagues found it harder to get quick answers to questions.\nRecommendations\nI recommend keeping two remote days a week while offering new staff a regular support call. This would preserve the benefits and address the main difficulty identified during the trial.',
      ['Staff ___ fewer interruptions during the trial.','reported','Presentar lo que comunicó el equipo.']],
    ['Propuesta','B2','Propón una actividad de inglés en tu empresa. Incluye necesidades, funcionamiento, recursos y cómo evaluarías el resultado.',
      ['Explica una necesidad real.','Propón una actividad y los recursos necesarios.','Indica una prueba inicial y un criterio para evaluarla.'],
      'The aim would be to… · We would need… · We could evaluate the trial by…',
      'Short English practice sessions\nNeed\nOur reception team regularly answers questions from overseas visitors. Staff would benefit from practising common requests.\nPlan\nI propose a twenty-minute session each Wednesday. We would use short role-plays based on situations at the desk and share useful phrases afterwards. A meeting room and one volunteer to organise the prompts would be enough.\nEvaluation\nWe could try this for six weeks and ask staff which situations they feel more confident handling. Their feedback would help us choose the next topics.',
      ['We could ___ the trial by collecting feedback.','evaluate','Evaluar los resultados.']]
  ];
  for (const [theme,level,prompt,steps,phrases,model,warmup] of writing) {
    items.push({category:'Writing',theme,level,prompt,steps,phrases,model,warmup});
    chapters.push(['Writing',prompt,steps.join('\n'),phrases+'\n\n'+model,'Estos modelos muestran cómo desarrollar la consigna. La extensión de práctica es orientativa y puedes ampliarla.']);
  }
  const oral = [
    ['Viajes','Describe a trip you enjoyed. Explain where you went, what you did and why you liked it.','I went to… · While I was there,… · What I enjoyed most was…'],
    ['Trabajo','Explain a problem at work and how you solved it.','The problem was… · First, we… · As a result,…'],
    ['Opiniones','Would you prefer an online course or a face-to-face class? Give reasons and an example.','I would prefer… · One reason is… · For instance,…'],
    ['Negociar','Suggest an activity for a free afternoon with a colleague. Ask for their opinion and agree on a plan.','How about…? · Would you rather…? · Shall we agree on…?'],
    ['Comparar','Compare staying in a hotel with renting a flat during a work trip.','Both options… · Whereas… · It depends on…'],
    ['Aclarar','Ask someone to explain directions again. Check that you understood the route.','Could you repeat…? · So I need to… · Have I understood correctly?']
  ];
  for (const [theme,prompt,phrases] of oral) {
    items.push({category:'Speaking',theme,level:'B1',prompt,
      steps:['Da una primera respuesta directa.','Añade una razón y un ejemplo.','Repite tu respuesta mejorando una frase.'],
      phrases,model:'Ejemplo de comienzo que puedes adaptar: '+phrases.split(' · ')[0]+'. Añade tus propios datos y desarrolla la idea.'});
  }
  return {items,chapters};
})();

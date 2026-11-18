/* Explicaciones y ejemplos originales para consultar durante la práctica. */
(() => {
  const chapters = [
    ['Gramática','Presente simple y continuo',
      'Usa el presente simple para hábitos y situaciones estables. Añade -s con he, she e it. Para preguntar usa do o does seguido de la forma base. El continuo combina am/is/are + -ing y describe una acción en curso o una situación temporal.',
      'I check my email every morning. / She checks deliveries. / Do you work on Saturdays? / I am staying in London this week.',
      'She works, pero Does she work? Evita añadir -s después de does.'],
    ['Gramática','Pasado simple y continuo',
      'El pasado simple cuenta acciones terminadas. Los verbos regulares añaden -ed y los irregulares cambian de forma. El continuo combina was/were + -ing para mostrar una acción que estaba en curso.',
      'We booked a room yesterday. / Did you book online? / I was waiting when the manager called.',
      'Después de did usa la forma base. Did you go?'],
    ['Gramática','Present perfect y pasado perfecto',
      'Have/has + participio conecta el pasado con el presente. Usa since para un punto de inicio y for para una duración. Con un momento terminado como yesterday suele corresponder el pasado simple. Had + participio sitúa una acción antes de otra acción pasada.',
      'I have worked here for two years. / I started in 2024. / The train had left when we arrived.',
      'I have been working destaca la duración o la actividad en curso. Algunos verbos de estado, como know, suelen ir en la forma simple.'],
    ['Gramática','Futuro',
      'Will + forma base sirve para decisiones tomadas al hablar, promesas y predicciones. Be going to + forma base expresa una intención previa o una predicción basada en indicios. El presente continuo puede expresar un plan acordado.',
      'I will send it now. / We are going to rent a car. / I am meeting Ana at six.',
      'Después de will usa la forma base. Para poder hacer algo en el futuro usa will be able to.'],
    ['Gramática','Artículos y determinantes',
      'A/an introduce un elemento singular contable. The señala algo identificado por el contexto. A/an depende del sonido que viene después. Para hablar en general, los plurales y los incontables suelen ir sin artículo. Usa much con incontables y many con plurales contables.',
      'A hotel, an airport, a university. / The room we booked is small. / I need some advice. / How much luggage?',
      'Advice, information y luggage suelen ser incontables. Usa a piece of advice para contar una recomendación.'],
    ['Gramática','Adjetivos y adverbios',
      'El adjetivo describe un nombre o aparece tras be, feel o seem. Un adverbio puede indicar cómo se hace una acción. Muchos se forman con -ly. Los adjetivos en -ed suelen describir sentimientos y los terminados en -ing lo que provoca esos sentimientos.',
      'The instructions are clear. / She explained them clearly. / I was bored because the film was boring.',
      'Good es adjetivo y well suele ser adverbio. Fast sirve como adjetivo y adverbio.'],
    ['Gramática','Comparativos y superlativos',
      'Los adjetivos cortos suelen formar el comparativo con -er y el superlativo con -est. Muchos largos usan more y most. Usa than para introducir la comparación, as…as para igualdad y less para una cantidad o grado menor.',
      'This route is faster than the other one. / It is the most convenient option. / This room is as quiet as mine.',
      'Good cambia a better y best. Evita more cheaper.'],
    ['Gramática','Verbos modales',
      'Can, could, may, might, must y should van seguidos de la forma base. Can expresa capacidad o permiso. Could suaviza peticiones. Should sirve para aconsejar. Must y have to pueden expresar obligación. Must not prohíbe y do not have to indica ausencia de obligación.',
      'Could you print this? / You must not park here. / You do not have to pay in advance. / It might rain.',
      'Para deducir sobre el pasado usa modal + have + participio. She must have forgotten expresa una deducción firme.'],
    ['Gramática','Gerundio e infinitivo',
      'Después de enjoy, avoid y finish suele ir -ing. Después de decide, hope y want suele ir to + verbo. Después de una preposición, normalmente usa -ing. Algunos verbos cambian de significado según la forma.',
      'I enjoy travelling. / We decided to wait. / Thank you for helping. / I stopped to call means I paused another activity in order to call.',
      'I stopped calling significa que dejé de llamar. Aprende la combinación junto con el verbo.'],
    ['Gramática','Oraciones de relativo',
      'Who se refiere a personas, which a cosas y where a lugares. That puede sustituir a who o which en muchas relativas que identifican al nombre. En una relativa explicativa usa comas y who o which.',
      'The colleague who helped me is here. / This is the room that we booked. / Our office, which opened last year, is near the station.',
      'Puedes omitir el relativo si es objeto en una relativa identificativa. The room we booked.'],
    ['Gramática','Voz pasiva',
      'Forma la pasiva con be en el tiempo adecuado + participio. Úsala cuando importa qué ocurrió o quién recibió la acción. Añade by para indicar el agente si es necesario.',
      'The office is cleaned daily. / The tickets were sent yesterday. / Your request will be reviewed. / It must be signed.',
      'El verbo be concuerda con el sujeto. The rooms are cleaned.'],
    ['Gramática','Estilo indirecto',
      'Para contar lo que dijo alguien usa say o tell. Tell suele llevar una persona como objeto. Cuando el contexto lo exige, retrocede los tiempos verbales y ajusta pronombres y referencias temporales. Las preguntas indirectas siguen el orden sujeto + verbo.',
      'She told me she was busy. / He asked where I lived. / They asked if we could wait.',
      'Si la información sigue siendo válida, mantener el tiempo puede ser posible. Decide según el contexto.'],
    ['Gramática','Condicionales',
      'Para hechos generales usa if + presente, presente. Para un futuro posible usa if + presente, will + verbo. Para una situación presente imaginada usa if + pasado, would + verbo. Para un pasado alternativo usa if + had + participio, would have + participio.',
      'If it rains, we will stay inside. / If I had more time, I would travel. / If I had known, I would have called.',
      'Unless significa aproximadamente if not. En una condición futura normal evita will inmediatamente después de if.'],
    ['Gramática','Inversión',
      'Al comenzar una oración con ciertos adverbios negativos o restrictivos, invierte auxiliar y sujeto. Si hace falta, añade do, does o did. Es un recurso formal que conviene abordar después de dominar las preguntas y los tiempos.',
      'Never have I seen such a queue. / Only then did we understand the problem.',
      'Después de did usa la forma base. Only then did I realise…'],
    ['Use of English','Preposiciones dependientes',
      'Aprende la preposición con la palabra que la exige. Su elección no siempre coincide con el español. Después de una preposición, un verbo suele tomar -ing.',
      'Interested in learning. / Responsible for training. / Depend on the weather. / Good at explaining. / A solution to the problem.',
      'Convierte cada combinación en dos frases sobre tu vida y revisa la misma combinación otro día.'],
    ['Use of English','Phrasal verbs',
      'Un verbo y una partícula pueden formar una expresión con significado propio. Algunos permiten separar verbo y partícula. Con un pronombre como objeto, muchos separables lo sitúan entre ambos.',
      'Look up a word. / Look it up. / Put off a meeting. / Pick someone up. / Check in at a hotel.',
      'Aprende el significado, un ejemplo y cómo se coloca el objeto. No todos se pueden separar.'],
    ['Use of English','Formación de palabras',
      'Identifica si el hueco necesita un nombre, verbo, adjetivo o adverbio. Observa determinantes, preposiciones y verbos cercanos. Después considera sufijos, prefijos negativos, plurales y cambios ortográficos.',
      'Patient → patience. / Help → helpful → helpfully. / Possible → impossible. / Short → shorten.',
      'Después de a/an necesitas un nombre singular o un grupo nominal. Después de very suele ir un adjetivo o adverbio.'],
    ['Use of English','Collocations',
      'Son combinaciones habituales que conviene aprender juntas. Memorizar solo un verbo o un nombre puede llevar a traducir literalmente.',
      'Make a decision. / Take notes. / Meet a deadline. / Heavy rain. / Apply for a job.',
      'Guarda la expresión completa y crea una frase de trabajo o de viaje.'],
    ['Use of English','Conectores, expresiones e idioms',
      'Because introduce una causa. Although introduce un contraste dentro de una oración. However conecta ideas en contraste y suele separarse con puntuación. In addition añade información. Un idiom tiene un sentido que no se deduce siempre de sus palabras.',
      'Although it was late, we continued. / It was late. However, we continued. / As far as I know, the shop is open.',
      'Elige expresiones que encajen con la situación. A piece of cake es informal.'],
    ['Writing','Email y carta',
      'Antes de escribir identifica quién lo recibirá, para qué escribes y qué puntos debes cubrir. Organiza saludo, motivo, información o petición y despedida. El registro depende de la relación con el destinatario.',
      'Hello Sam, / I am writing to ask about… / Could you confirm whether…? / Thanks for your help. / Kind regards,',
      'En un mensaje formal explica la petición y da los datos necesarios. En uno informal puedes usar contracciones y un saludo cercano.'],
    ['Writing','Ensayo',
      'Presenta la cuestión sin desarrollarlo todo en la primera frase. Dedica cada párrafo central a una idea con una razón y un ejemplo. Termina respondiendo a la pregunta y mostrando cómo se sostiene tu conclusión.',
      'One advantage is… / For example,… / A possible drawback is… / On balance,…',
      'Comprueba que el ejemplo apoye la idea del párrafo y que la conclusión responda a la consigna.'],
    ['Writing','Reseña',
      'Indica qué reseñas y para quién podría ser útil. Comenta características concretas, explica cómo fue tu experiencia y ofrece una recomendación justificada.',
      'The location made it easy to… / The main drawback was… / I would recommend it to anyone who…',
      'Relaciona cada adjetivo con una prueba. Explica qué hizo que el servicio fuera bueno o malo.'],
    ['Writing','Informe',
      'Expón el objetivo, describe hallazgos y termina con recomendaciones derivadas de ellos. Los subtítulos ayudan a localizar información. Mantén un tono objetivo.',
      'Purpose / Findings / Recommendations. / The team reported that… / I recommend testing…',
      'Distingue lo observado de lo que propones cambiar y aporta ejemplos que respalden la recomendación.'],
    ['Writing','Propuesta',
      'Explica una necesidad y plantea una acción futura. Añade cómo se llevaría a cabo, qué recursos necesita y qué resultado esperas. Termina indicando el siguiente paso.',
      'I propose that we… / This would enable staff to… / We could begin with a trial.',
      'Comprueba que tu propuesta sea concreta. Quién hará qué, cuándo y con qué recursos.'],
    ['Reading','Idea principal y detalle',
      'Haz una primera lectura rápida para entender el propósito y el tema. Lee la pregunta y vuelve al fragmento que la responde. Busca reformulaciones, causas y contrastes.',
      'If the text says the ticket must be booked online, a question may refer to an advance reservation rather than repeat the same words.',
      'Una opción puede repetir palabras del texto y cambiar el sentido. Confirma la idea completa.'],
    ['Reading','Inferencias y actitud',
      'Una inferencia combina indicios del texto. Para la actitud del autor, observa valoraciones, reservas, ejemplos y lo que contrasta con however o although.',
      'She checked the timetable for the third time sugiere preocupación por el horario, si el contexto lo apoya.',
      'Elige la interpretación respaldada por el texto y evita añadir datos imaginados.'],
    ['Reading','Huecos y relacionar textos',
      'En un texto con frases retiradas, lee antes y después del hueco. Sigue pronombres, referencias y la secuencia temporal. Para relacionar personas con opciones, identifica todas las condiciones que pide cada persona.',
      'That change debe apuntar a un cambio anterior. Si alguien necesita una sala tranquila y wifi, busca una opción que cumpla ambos requisitos.',
      'Relee el párrafo completo con la frase elegida antes de darlo por terminado.'],
    ['Speaking','Responder y ampliar',
      'Da una respuesta directa, explica una razón y añade un ejemplo. Para ganar tiempo, usa una pausa breve o una frase natural. Si te falta una palabra, describe lo que quieres decir.',
      'I usually travel by train because… / For example, last week… / It is something you use to…',
      'Practica treinta segundos y luego vuelve a decirlo con una mejora.'],
    ['Speaking','Comparar y negociar',
      'Para comparar, menciona una semejanza y una diferencia relevante. Para decidir con otra persona, propone, justifica, pregunta su opinión y responde a lo que diga.',
      'Both options… / Whereas… / How about choosing…? / What do you think? / I see your point. We could also…',
      'Incluye al interlocutor y avanza hacia una decisión explicada.'],
    ['Listening','Escuchar con intención',
      'Antes del audio, identifica qué información necesitas, por ejemplo una fecha, un precio o una opinión. Escucha una vez para el sentido general y otra para el dato. Después consulta la transcripción y repite una frase corta.',
      'Tuesday was the original plan, but Thursday is now confirmed. La respuesta al nuevo día es Thursday.',
      'En este entrenador se usa la voz disponible en el navegador. La disponibilidad sin conexión depende de las voces instaladas.']
  ];
  chapters.push(...window.englishCourse.chapters);
  const root = document.getElementById('reference');
  const category = root.querySelector('select');
  const search = root.querySelector('input');
  const list = root.querySelector('[data-chapters]');
  const count = root.querySelector('[data-count]');
  const sources = {
    'Gramática':'grammar.html','Use of English':'use_of_english.html',
    Writing:'writing.html',Reading:'reading.html',Speaking:'speaking.html',
    Listening:'',Vocabulario:'vocabulario_c1.html'
  };
  const vocabRows = document.getElementById('english-bank').textContent.trim().split(/\r?\n/);
  let group;
  const topics = new Map();
  for (const row of vocabRows) {
    const cells = row.split('|');
    if (cells.length === 3 && /^(B1|B2\+?)$/.test(cells[2])) {
      group = cells[0] === 'Vocabulario' ? cells[1] : null;
      continue;
    }
    if (!group) continue;
    if (!topics.has(group)) topics.set(group, []);
    topics.get(group).push({sentence: cells[0], answer: cells[1].split('/')[0], meaning: cells[2]});
  }
  for (const [topic, entries] of topics) {
    chapters.push(['Vocabulario', topic,
      'Estas son las palabras incluidas en la práctica de este tema. Reutiliza cada una en una frase personal y comprueba su significado en contexto.',
      entries.map(entry => entry.answer + ' — ' + entry.meaning + '. ' + entry.sentence.replace('___', entry.answer)).join('\n'),
      'Consulta el enlace a Espikin para ampliar el vocabulario disponible.']);
  }
  for (const name of ['Todo', ...new Set(chapters.map(chapter=>chapter[0]))]) {
    category.add(new Option(name,name));
  }
  function render() {
    const term=search.value.toLocaleLowerCase('es').trim();
    const chosen=chapters.filter(chapter=>(category.value==='Todo'||chapter[0]===category.value) && chapter.join(' ').toLocaleLowerCase('es').includes(term));
    list.replaceChildren();
    count.textContent=chosen.length+' temas de consulta';
    for (const [section,title,explanation,examples,tip] of chosen) {
      const details=document.createElement('details');
      const summary=document.createElement('summary');
      summary.textContent=title+' · '+section;
      const content=document.createElement('div');
      content.className='reference-content';
      for(const [label,text] of [['Explicación',explanation],['Ejemplos',examples],['Para practicar',tip]]) {
        const heading=document.createElement('h3'); heading.textContent=label;
        const paragraph=document.createElement('p'); paragraph.textContent=text;
        content.append(heading,paragraph);
      }
      const link=document.createElement('a');
      link.href='https://espikin.es/'+sources[section]; link.target='_blank'; link.rel='noopener noreferrer';
      link.textContent='Ampliar en Espikin';
      const practise=document.createElement('button');
      practise.type='button'; practise.className='btn';
      practise.textContent='Practicar esta sección';
      practise.onclick=()=>{
        const match=window.englishCourse.items.find(item=>item.category===section && (item.lesson===title || item.prompt===title || item.lesson?.startsWith(title+' · Pregunta')));
        const theme=match?.theme || title.replace(' · Ampliación','');
        window.dispatchEvent(new CustomEvent('english:practice',{detail:{category:section,theme}}));
      };
      content.append(link,practise); details.append(summary,content); list.append(details);
    }
  }
  category.onchange=render; search.oninput=render; render();
})();

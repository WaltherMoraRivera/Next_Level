/* ══════════════════════════════════════════════════════════
   ENGINE.JS — Motor común de guías interactivas
   Ver PROPUESTA_REDISENO.md (Parte 4, 6 y 7).

   Uso desde una guía:
     <script src="../../shared/engine.js"></script>
     <script src="./data.js"></script>
     <script>Engine.init(GUIDE_DATA)</script>

   GUIDE_DATA = {
     id, subject, subjectLabel, subjectIcon, title, examRef,
     blocks: [ {type:'hook'|'goal'|'teach'|'guided-practice'|'quiz'|
                     'open'|'dnd-sequence'|'dnd-classify'|'challenge'|
                     'reflect'|'report', ...} ]
   }
   ══════════════════════════════════════════════════════════ */

const Engine = (function(){

  let DATA = null;
  let blockIndex = 0;
  let blockState = []; // estado mutable por bloque (respuestas, etc.)
  let hostEl = null;

  // ── Persistencia ──────────────────────────────────────────
  function storageKey(id){ return `progreso_${id}`; }

  function saveProgress(report){
    try{
      localStorage.setItem(storageKey(DATA.id), JSON.stringify({
        completado:true,
        total:report.total, max:report.max, pct:report.pct,
        skills:report.skills,
        fecha:new Date().toISOString()
      }));
    }catch(e){ /* localStorage no disponible: se ignora silenciosamente */ }
  }

  function getProgress(id){
    try{
      const raw = localStorage.getItem(storageKey(id));
      return raw ? JSON.parse(raw) : null;
    }catch(e){ return null; }
  }

  // ── Inicialización ────────────────────────────────────────
  function init(data){
    DATA = data;
    blockIndex = 0;
    blockState = data.blocks.map(()=>({}));
    hostEl = document.getElementById('app');
    document.documentElement.setAttribute('data-subject', data.subject);
    render();
  }

  function go(i){ blockIndex=i; render(); }
  function next(){ blockIndex++; render(); }

  function totalMinutes(){
    return DATA.blocks.reduce((s,b)=>s+(b.minutes||0),0);
  }

  // ── Header ────────────────────────────────────────────────
  function renderHeader(){
    const b = DATA.blocks[blockIndex];
    const dots = DATA.blocks.map((_,i)=>
      `<div class="g-dot ${i<blockIndex?'done':i===blockIndex?'active':''}"></div>`
    ).join('');
    return `
    <div class="g-header">
      <div class="g-badge">${DATA.subjectIcon||'📘'} ${(DATA.subjectLabel||DATA.subject).toUpperCase()}</div>
      <div class="g-dots">${dots}</div>
      <div class="g-pname">${phaseLabel(b.type)}</div>
      <div class="g-time">~${totalMinutes()} min</div>
    </div>`;
  }

  function phaseLabel(type){
    return ({
      hook:'🔥 Enganche', goal:'🎯 Objetivo', teach:'📖 Aprender',
      'guided-practice':'🧭 Práctica guiada', quiz:'🔍 Práctica independiente',
      open:'💬 Pensamiento crítico', 'dnd-sequence':'🗂️ Organización',
      'dnd-classify':'🗂️ Organización', challenge:'✨ Desafío',
      reflect:'🪞 Reflexión', report:'📊 Informe'
    })[type] || type;
  }

  // ── Render principal ──────────────────────────────────────
  function render(){
    const b = DATA.blocks[blockIndex];
    const fn = RENDERERS[b.type];
    hostEl.innerHTML = renderHeader() + (fn ? fn(b, blockIndex) : `<div class="card">Bloque desconocido: ${b.type}</div>`);
    window.scrollTo({top:0, behavior:'smooth'});
    if(b.type==='report') animateReport();
  }

  function nextBtn(label){
    return `<div class="btn-row"><button class="btn btn-p" onclick="Engine.next()">${label||'Continuar →'}</button></div>`;
  }

  // ══════════════════════════════════════════════════════════
  // RENDERERS POR TIPO DE BLOQUE
  // ══════════════════════════════════════════════════════════

  function rHook(b){
    const st = blockState[blockIndex];
    return `
    <div class="card">
      <div class="s-label">🔥 Enganche · ${b.minutes||3} min</div>
      <div class="s-title">${b.title||'Antes de empezar'}</div>
      <div class="s-body">
        <p style="font-size:17px;font-weight:700;color:var(--ink);line-height:1.55;background:var(--accent-light);border-radius:10px;padding:16px 18px;">
          ${b.prompt}
          ${b.subPrompt?`<br><span style="font-size:14px;font-weight:400;color:var(--ink-muted);">${b.subPrompt}</span>`:''}
        </p>
        ${b.reflection?`
        <div class="btn-row">
          <button class="btn btn-s" onclick="this.nextElementSibling.classList.add('on')">💡 Ver reflexión</button>
        </div>
        <div class="reveal">${b.reflection}</div>`:''}
      </div>
      ${nextBtn('Ir al objetivo de la sesión →')}
    </div>`;
  }

  function rGoal(b){
    return `
    <div class="card">
      <div class="s-label">🎯 Objetivo de la sesión · ${b.minutes||1} min</div>
      <div class="goal-banner">
        <div class="goal-icon">🎯</div>
        <div class="goal-text">${b.text}</div>
      </div>
      ${b.examRef?`<p class="s-hint" style="margin-top:10px;">📌 Referencia: ${b.examRef}</p>`:''}
      ${nextBtn('Comenzar →')}
    </div>`;
  }

  function rTeach(b){
    const st = blockState[blockIndex];
    if(!st.stage) st.stage='reading';

    if(st.stage==='reading'){
      return `
      <div class="card">
        <div class="s-label">📖 Aprender · ${b.minutes||9} min</div>
        <div class="s-title">${b.title}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px;">
          ${b.genre?`<span style="font-size:12.5px;color:var(--ink-muted);">Género: <strong style="color:var(--ink);">${b.genre}</strong></span>`:''}
          ${b.wordCount?`<span style="font-size:12.5px;color:var(--ink-muted);">${b.wordCount}</span>`:''}
        </div>
        ${b.vocab && b.vocab.length ? `
        <div style="background:var(--amber-light);border:1px solid var(--amber);border-radius:9px;padding:9px 13px;font-size:13px;color:var(--ink-mid);margin-bottom:14px;">
          📌 Las palabras <strong style="color:var(--accent);border-bottom:2px dotted var(--accent);">subrayadas</strong> se refuerzan justo después de leer.
        </div>`:''}
        <div class="rtext">
          ${b.html}
        </div>
        <div class="btn-row">
          <button class="btn btn-p" onclick="Engine._teachStage('vocab')">${b.vocab&&b.vocab.length?'Reforzar vocabulario →':'Continuar →'}</button>
        </div>
      </div>`;
    }

    // stage === 'vocab'
    const vi = st.vocI||0;
    const vocab = b.vocab||[];
    if(vocab.length===0){ Engine._teachStage('done'); return rTeach(b); }
    const v = vocab[vi];
    const vocA = st.vocA||(st.vocA=[]);
    const done = vocA[vi]!==undefined;
    const isOk = done && vocA[vi]===v.c;
    return `
    <div class="card">
      <div class="s-label">📚 Vocabulario en contexto</div>
      <div class="s-title">Antes de seguir, asegurémonos del significado</div>
      <div class="vdots">
        ${vocab.map((_,i)=>{
          let cls='';
          if(i<vi && vocA[i]!==undefined) cls = vocA[i]===vocab[i].c?'ok':'no';
          else if(i===vi) cls='cur';
          return `<div class="vdot ${cls}"></div>`;
        }).join('')}
      </div>
      <div class="qz-head">
        <span class="qz-ctr">Palabra ${vi+1} de ${vocab.length}</span>
        <div class="qz-bar-wrap"><div class="qz-bar" style="width:${Math.round(vi/vocab.length*100)}%"></div></div>
      </div>
      <div class="vcard">
        <div class="vcard-top"><span class="vword">${v.word}</span><span class="vctx">${v.ctx}</span></div>
        <div class="vbody">
          <p style="font-size:13.5px;color:var(--ink-muted);margin-bottom:9px;">¿Cuál crees que es el significado de <strong>"${v.word}"</strong>?</p>
          <div class="vopts">
            ${v.opts.map((o,i)=>{
              let cls='';
              if(done){ if(i===v.c) cls='ok'; else if(i===vocA[vi]) cls='no'; }
              return `<button class="vopt ${cls}" ${done?'disabled':''} onclick="Engine._vocAnswer(${i})">${o}</button>`;
            }).join('')}
          </div>
          <div class="vreveal ${done?'on':''}">
            <div class="qz-fb on ${isOk?'ok-fb':'no-fb'}" style="margin-top:10px;">
              ${isOk?'✅ ¡Correcto! Buen uso del contexto para deducir el significado.':'❌ No era esa. Aquí está la definición completa:'}
            </div>
            <div class="vgrid">
              <div class="vtag"><div class="vt-l">Significado</div><div class="vt-v">${v.def}</div></div>
              <div class="vtag"><div class="vt-l">Sinónimo</div><div class="vt-v">${v.syn}</div></div>
              <div class="vtag"><div class="vt-l">Antónimo</div><div class="vt-v">${v.ant}</div></div>
            </div>
            <div class="vex">${v.ex}</div>
          </div>
        </div>
      </div>
      <div class="btn-row">
        ${done?(vi<vocab.length-1
          ? `<button class="btn btn-p" onclick="Engine._vocNext()">Siguiente palabra →</button>`
          : `<button class="btn btn-p" onclick="Engine.next()">Continuar a la práctica →</button>`):''}
      </div>
    </div>`;
  }
  function _teachStage(stage){ blockState[blockIndex].stage=stage; render(); }
  function _vocAnswer(i){
    const st=blockState[blockIndex];
    st.vocA[st.vocI||0]=i;
    render();
  }
  function _vocNext(){
    const st=blockState[blockIndex];
    st.vocI=(st.vocI||0)+1;
    render();
  }

  function rQuizLike(b, isGuided){
    const st = blockState[blockIndex];
    const qi = st.qi||0;
    const ans = st.ans||(st.ans=[]);
    const q = b.questions[qi];
    const done = ans[qi]!==undefined;
    const isOk = done && ans[qi]===q.c;
    const hintShown = st.hintShown||(st.hintShown={});
    return `
    <div class="card">
      <div class="s-label">${isGuided?'🧭 Práctica guiada':'🔍 Práctica independiente'} · ${b.minutes||8} min</div>
      <div class="s-title">${b.title||(isGuided?'Practiquemos juntos, con apoyo disponible':'Ahora sin ayuda: demuestra lo aprendido')}</div>
      <div class="qz-head">
        <span class="qz-ctr">Pregunta ${qi+1} de ${b.questions.length}</span>
        <div class="qz-bar-wrap"><div class="qz-bar" style="width:${Math.round(qi/b.questions.length*100)}%"></div></div>
      </div>
      <p class="qz-q">${q.q}</p>
      <div class="qz-opts">
        ${q.opts.map((o,i)=>{
          let cls='';
          if(done){ if(i===q.c) cls='ok'; else if(i===ans[qi]) cls='no'; }
          return `<button class="qz-opt ${cls}" ${done?'disabled':''} onclick="Engine._quizAnswer(${i})">${o}</button>`;
        }).join('')}
      </div>
      ${isGuided && q.hint ? `
      <div class="hint-row">
        <button class="hint-btn ${hintShown[qi]?'used':''}" onclick="Engine._toggleHint(${qi})" ${done?'disabled':''}>💡 ${hintShown[qi]?'Pista mostrada':'Pedir una pista'}</button>
      </div>
      <div class="hint-box ${hintShown[qi]?'on':''}">${q.hint}</div>`:''}
      <div class="qz-fb ${done?'on':''} ${isOk?'ok-fb':'no-fb'}">${done?(isOk?q.fb_ok:q.fb_no):''}</div>
      <div class="btn-row">
        ${done?(qi<b.questions.length-1
          ? `<button class="btn btn-p" onclick="Engine._quizNext()">Siguiente pregunta →</button>`
          : `<button class="btn btn-p" onclick="Engine.next()">Continuar →</button>`):''}
      </div>
    </div>`;
  }
  function _quizAnswer(i){ const st=blockState[blockIndex]; st.ans[st.qi||0]=i; render(); }
  function _quizNext(){ const st=blockState[blockIndex]; st.qi=(st.qi||0)+1; render(); }
  function _toggleHint(qi){ const st=blockState[blockIndex]; st.hintShown[qi]=true; render(); }

  function rOpen(b){
    const st = blockState[blockIndex];
    return `
    <div class="card">
      <div class="s-label">💬 ${b.label||'Pensamiento crítico'} · ${b.minutes||6} min</div>
      <div class="s-title">${b.title||'¿Qué opinas tú?'}</div>
      <p style="font-size:13.5px;color:var(--ink-muted);margin-bottom:14px;">Esta sección no tiene una respuesta única correcta. Lo importante es que <strong style="color:var(--ink);">fundamentes tu opinión usando información de la guía</strong>.</p>
      <p class="oq">${b.question}</p>
      <textarea class="otxt" placeholder="${b.placeholder||'Escribe tu respuesta aquí...'}"></textarea>
      <div class="btn-row"><button class="btn btn-s" onclick="this.nextElementSibling.classList.add('on')">👁️ Ver respuesta modelo</button></div>
      <div class="omodel">
        <div class="omodel-box"><strong>📝 RESPUESTA MODELO</strong>${b.modelAnswer}</div>
        ${b.calloutTitle?`<div class="irony-box"><strong>${b.calloutTitle}</strong> ${b.calloutText}</div>`:''}
        <div class="seval">
          <span class="seval-l">¿Qué tan completa fue tu respuesta?</span>
          <button class="sbtn yes ${st.self==='yes'?'sel':''}" onclick="Engine._setSelf('yes')">✅ Muy completa</button>
          <button class="sbtn part ${st.self==='part'?'sel':''}" onclick="Engine._setSelf('part')">⚡ Parcial</button>
          <button class="sbtn no2 ${st.self==='no'?'sel':''}" onclick="Engine._setSelf('no')">❌ Me faltó argumentar</button>
        </div>
      </div>
      <div class="btn-row" style="margin-top:18px;">
        <button class="btn btn-p" onclick="Engine.next()" ${st.self===undefined?'disabled':''}>Continuar →</button>
      </div>
    </div>`;
  }
  function _setSelf(v){ blockState[blockIndex].self=v; render(); }

  function rDndSequence(b){
    const st = blockState[blockIndex];
    const n = b.items.length;
    const slots = st.slots || (st.slots = new Array(n).fill(null));
    const order = st.order || (st.order = b.order.slice());
    const checked = !!st.checked;
    return `
    <div class="card">
      <div class="s-label">🗂️ ${b.label||'Organización de la información'} · ${b.minutes||6} min</div>
      <div class="s-title">${b.title}</div>
      <div class="dnd-tip">✋ <strong>Instrucciones:</strong> ${b.instructions||'Arrastra cada tarjeta al espacio correcto. También puedes hacer clic en una tarjeta y luego en un espacio para colocarla.'}</div>
      <p class="dbank-lbl" style="margin-bottom:9px;">Orden correcto →</p>
      <div class="dnd-slots">
        ${slots.map((val,i)=>{
          const filled = val!==null;
          let cls=''; if(checked&&filled) cls = val===i?'ok':'no';
          return `
          <div class="dslot ${cls}" id="sl-${i}"
            ondragover="Engine._dOver(event,${i})" ondragleave="Engine._dLeave(event,${i})" ondrop="Engine._dDrop(event,${i})"
            onclick="Engine._slotClick(${i})">
            <div class="snum">${i+1}</div>
            <div class="scont">${filled?`<span>${b.items[val]}</span>`:`<span class="sempty">Arrastra o haz clic aquí…</span>`}</div>
            ${checked&&filled?`<span class="sicon">${val===i?'✅':'❌'}</span>`:''}
            ${filled&&!checked?`<button class="remove-btn" onclick="Engine._rmSlot(event,${i})">✕</button>`:''}
          </div>`;
        }).join('')}
      </div>
      <p class="dbank-lbl">Banco de elementos →</p>
      <div class="dbank">
        ${order.map(idx=>{
          const placed = slots.includes(idx);
          const isSel = st.sel===idx;
          return `
          <div class="ditem ${placed?'placed':''} ${isSel?'sel-item':''}" id="di-${idx}" draggable="true"
            ondragstart="Engine._dStart(event,${idx})" ondragend="Engine._dEnd()"
            onclick="Engine._itemClick(${idx})">${b.items[idx]}</div>`;
        }).join('')}
      </div>
      ${checked?`
      <div class="qz-fb on ${slots.every((v,i)=>v===i)?'ok-fb':'no-fb'}" style="margin-top:16px;">
        ${slots.every((v,i)=>v===i)
          ? '✅ ¡Perfecto! Ordenaste todos los elementos correctamente.'
          : `⚡ Algunos elementos estaban en el orden incorrecto. El orden correcto era:<br>${b.items.map((t,i)=>`${i+1}→ ${t}`).join('<br>')}`}
      </div>`:''}
      <div class="btn-row" style="margin-top:18px;">
        ${!checked
          ? `<button class="btn btn-p" onclick="Engine._checkDnd()" ${slots.includes(null)?'disabled':''}>Verificar orden ✓</button>`
          : `<button class="btn btn-p" onclick="Engine.next()">Continuar →</button>`}
      </div>
    </div>`;
  }

  function rDndClassify(b){
    const st = blockState[blockIndex];
    const placement = st.placement || (st.placement={});
    const order = st.order || (st.order = b.order.slice());
    const checked = !!st.checked;
    const colA = b.colA||{label:'Categoría A', key:'a'};
    const colB = b.colB||{label:'Categoría B', key:'b'};

    function renderPlaced(i){
      const it=b.items[i];
      let cls=''; let icon='';
      if(checked){
        const ok = placement[i]===it.cat;
        cls = ok?'ok':'no';
        icon = `<span class="cicon">${ok?'✅':'❌'}</span>`;
      } else {
        icon = `<button class="remove-btn" onclick="Engine._rmItem(event,${i})">✕</button>`;
      }
      return `<div class="citem-slot ${cls}">${checked?icon:''}<span style="flex:1;">${it.t}</span>${!checked?icon:''}</div>`;
    }
    function col(key,meta,cls){
      const idxs = b.items.map((_,i)=>i).filter(i=>placement[i]===key);
      return `
      <div class="class-col ${cls}" id="col-${key}"
        ondragover="Engine._cOver(event,'${key}')" ondragleave="Engine._cLeave(event,'${key}')" ondrop="Engine._cDrop(event,'${key}')"
        onclick="Engine._colClick('${key}')">
        <div class="class-col-head"><div class="cdot"></div>${meta.label}</div>
        <div class="class-items">
          ${idxs.map(renderPlaced).join('')}
          ${idxs.length===0?'<div class="empty-slot">Arrastra aquí…</div>':''}
        </div>
      </div>`;
    }
    const totalPlaced = Object.keys(placement).length;
    const correctCount = b.items.filter((it,i)=>placement[i]===it.cat).length;

    return `
    <div class="card">
      <div class="s-label">🗂️ ${b.label||'Organización de la información'} · ${b.minutes||6} min</div>
      <div class="s-title">${b.title}</div>
      <div class="dnd-tip">✋ <strong>Instrucciones:</strong> ${b.instructions}</div>
      <div class="class-cols">
        ${col('a',colA,'col-a')}
        ${col('b',colB,'col-b')}
      </div>
      <p class="dbank-lbl">Banco de ideas →</p>
      <div class="dbank">
        ${order.map(i=>{
          const placed = placement[i]!==undefined;
          const isSel = st.sel===i;
          return `<div class="ditem ${placed?'placed':''} ${isSel?'sel-item':''}" id="di-${i}" draggable="true"
            ondragstart="Engine._dStart(event,${i})" ondragend="Engine._dEnd()"
            onclick="Engine._itemClick(${i})">${b.items[i].t}</div>`;
        }).join('')}
      </div>
      ${checked?`
      <div class="qz-fb on ${correctCount===b.items.length?'ok-fb':'no-fb'}" style="margin-top:16px;">
        ${correctCount===b.items.length
          ? '✅ ¡Perfecto! Clasificaste todas las ideas correctamente.'
          : `⚡ Clasificaste correctamente ${correctCount} de ${b.items.length}.`}
      </div>`:''}
      <div class="btn-row" style="margin-top:18px;">
        ${!checked
          ? `<button class="btn btn-p" onclick="Engine._checkClassify()" ${totalPlaced<b.items.length?'disabled':''}>Verificar clasificación ✓</button>`
          : `<button class="btn btn-p" onclick="Engine.next()">Continuar →</button>`}
      </div>
    </div>`;
  }

  // ── Drag & drop handlers compartidos (secuencia + clasificación) ──
  let dragIdx=null;
  function _dStart(e,idx){
    dragIdx=idx; blockState[blockIndex].sel=null;
    e.dataTransfer.effectAllowed='move';
    setTimeout(()=>{const el=document.getElementById('di-'+idx); if(el) el.classList.add('dragging');},0);
  }
  function _dEnd(){
    if(dragIdx!==null){ const el=document.getElementById('di-'+dragIdx); if(el) el.classList.remove('dragging'); }
    dragIdx=null;
    document.querySelectorAll('.dslot,.class-col').forEach(s=>s.classList.remove('over'));
  }
  function _dOver(e,i){ e.preventDefault(); document.getElementById('sl-'+i).classList.add('over'); }
  function _dLeave(e,i){ document.getElementById('sl-'+i).classList.remove('over'); }
  function _dDrop(e,i){
    e.preventDefault();
    document.getElementById('sl-'+i).classList.remove('over');
    if(dragIdx===null) return;
    const st=blockState[blockIndex];
    const existing = st.slots[i];
    const prevSlot = st.slots.indexOf(dragIdx);
    if(prevSlot!==-1) st.slots[prevSlot]=existing;
    st.slots[i]=dragIdx;
    dragIdx=null; render();
  }
  function _itemClick(idx){
    const st=blockState[blockIndex];
    if(st.checked) return;
    st.sel = st.sel===idx?null:idx;
    render();
  }
  function _slotClick(i){
    const st=blockState[blockIndex];
    if(st.checked || st.sel==null) return;
    const existing = st.slots[i];
    const prev = st.slots.indexOf(st.sel);
    if(prev!==-1) st.slots[prev]=existing;
    st.slots[i]=st.sel; st.sel=null; render();
  }
  function _rmSlot(e,i){ e.stopPropagation(); blockState[blockIndex].slots[i]=null; render(); }
  function _checkDnd(){ blockState[blockIndex].checked=true; render(); }

  function _cOver(e,key){ e.preventDefault(); document.getElementById('col-'+key).classList.add('over'); }
  function _cLeave(e,key){ document.getElementById('col-'+key).classList.remove('over'); }
  function _cDrop(e,key){
    e.preventDefault();
    document.getElementById('col-'+key).classList.remove('over');
    if(dragIdx===null) return;
    blockState[blockIndex].placement[dragIdx]=key;
    dragIdx=null; render();
  }
  function _colClick(key){
    const st=blockState[blockIndex];
    if(st.checked || st.sel==null) return;
    st.placement[st.sel]=key; st.sel=null; render();
  }
  function _rmItem(e,i){ e.stopPropagation(); delete blockState[blockIndex].placement[i]; render(); }
  function _checkClassify(){ blockState[blockIndex].checked=true; render(); }

  function rChallenge(b){
    return `
    <div class="card">
      <div class="s-label">✨ Desafío de pensamiento · ${b.minutes||6} min</div>
      <div class="s-title">${b.title}</div>
      <p style="font-size:13.5px;color:var(--ink-muted);margin-bottom:14px;">${b.intro||''}</p>
      <p class="oq">${b.prompt}</p>
      ${b.hint?`<p class="s-hint" style="margin-bottom:14px;">${b.hint}</p>`:''}
      <textarea class="otxt" placeholder="${b.placeholder||'Escribe aquí tu respuesta...'}" style="min-height:140px;"></textarea>
      <div class="btn-row"><button class="btn btn-s" onclick="this.nextElementSibling.classList.add('on')">👁️ Ver ejemplo</button></div>
      <div class="omodel"><div class="omodel-box"><strong>📝 EJEMPLO</strong>${b.example}</div></div>
      ${nextBtn('Continuar →')}
    </div>`;
  }

  function rReflect(b){
    const st = blockState[blockIndex];
    const answered = st.done;
    return `
    <div class="card">
      <div class="s-label">🪞 Reflexión final · ${b.minutes||2} min</div>
      <div class="s-title">Un momento para pensar en tu aprendizaje</div>
      <div class="reflect-box">
        ${b.questions.map((q,i)=>`
          <div class="rq" style="margin-top:${i>0?'14px':'0'}">${q}</div>
          <textarea class="otxt" style="min-height:70px;" placeholder="Escribe brevemente..."></textarea>
        `).join('')}
      </div>
      <div class="btn-row">
        <button class="btn btn-p" onclick="Engine._reflectDone()">Ver mi informe final →</button>
      </div>
    </div>`;
  }
  function _reflectDone(){ blockState[blockIndex].done=true; next(); }

  // ══════════════════════════════════════════════════════════
  // PUNTAJE Y REPORTE
  // ══════════════════════════════════════════════════════════

  function computeReport(){
    const skills = {}; // tag -> {pts, max}
    function add(tag, pts, max){
      if(!tag) return;
      if(!skills[tag]) skills[tag]={pts:0,max:0};
      skills[tag].pts+=pts; skills[tag].max+=max;
    }

    DATA.blocks.forEach((b,i)=>{
      const st = blockState[i];
      if(b.type==='teach' && b.vocab && b.vocab.length){
        const vocA = st.vocA||[];
        const correct = vocA.filter((a,j)=>a===b.vocab[j].c).length;
        add('vocabulario', correct, b.vocab.length);
      }
      if(b.type==='quiz' || b.type==='guided-practice'){
        const ans = st.ans||[];
        const correct = ans.filter((a,j)=>a===b.questions[j].c).length;
        add(b.skillTag||b.type, correct*2, b.questions.length*2);
      }
      if(b.type==='open'){
        const pts = st.self==='yes'?2:st.self==='part'?1:0;
        add(b.skillTag||'argumentacion', pts, 2);
      }
      if(b.type==='dnd-sequence'){
        const slots = st.slots||[];
        const correctCount = slots.filter((v,j)=>v===j).length;
        const pct = correctCount/(b.items.length||1);
        const pts = pct===1?4:pct>=0.6?2:0;
        add(b.skillTag||'organizacion', pts, 4);
      }
      if(b.type==='dnd-classify'){
        const placement = st.placement||{};
        const correctCount = b.items.filter((it,j)=>placement[j]===it.cat).length;
        const pct = correctCount/(b.items.length||1);
        const pts = pct===1?4:pct>=0.6?2:0;
        add(b.skillTag||'organizacion', pts, 4);
      }
    });

    let total=0, max=0;
    Object.values(skills).forEach(s=>{ total+=s.pts; max+=s.max; });
    const pct = max>0 ? Math.round(total/max*100) : 0;

    const skillsPct = {};
    Object.entries(skills).forEach(([k,v])=>{ skillsPct[k]= v.max>0?Math.round(v.pts/v.max*100):0; });

    return {total, max, pct, skills:skillsPct};
  }

  const SKILL_LABELS = {
    literal:'Comprensión literal', inferencial:'Comprensión inferencial',
    vocabulario:'Vocabulario', organizacion:'Organización de la información',
    argumentacion:'Argumentación con evidencia', critica:'Pensamiento crítico'
  };

  function rReport(){
    const rep = computeReport();
    saveProgress(rep);
    const C = 2*Math.PI*45;
    const off = C-(rep.pct/100)*C;

    let emoji,msg,level;
    if(rep.pct>=85){ emoji='🏆'; msg='¡Excelente trabajo! Demostraste un dominio sólido en esta sesión.'; level='Avanzado'; }
    else if(rep.pct>=67){ emoji='⭐'; msg='¡Muy buen desempeño! Vas construyendo un dominio sólido.'; level='Intermedio alto'; }
    else if(rep.pct>=50){ emoji='📈'; msg='Buen intento. Tienes bases sólidas para seguir mejorando.'; level='Intermedio'; }
    else { emoji='💪'; msg='Sigue adelante. Cada guía te acerca más al dominio del tema.'; level='En desarrollo'; }

    const skillRows = Object.entries(rep.skills).map(([tag,pct])=>`
      <div class="skill-row">
        <div class="skill-row-top"><span class="skill-name">${SKILL_LABELS[tag]||tag}</span><span class="skill-pct">${pct}%</span></div>
        <div class="skill-bar-wrap"><div class="skill-bar-fill" style="width:${pct}%"></div></div>
      </div>`).join('');

    const strengths = Object.entries(rep.skills).filter(([,p])=>p>=70).map(([t])=>SKILL_LABELS[t]||t);
    const improve = Object.entries(rep.skills).filter(([,p])=>p<70).map(([t])=>SKILL_LABELS[t]||t);

    return `
    <div class="card">
      <div class="s-label">📊 Informe Final</div>
      <div class="s-title">${DATA.title}</div>
      <div class="ring-wrap">
        <svg viewBox="0 0 100 100">
          <circle class="ring-bg" cx="50" cy="50" r="45"/>
          <circle class="ring-fill" cx="50" cy="50" r="45" stroke-dasharray="${C}" stroke-dashoffset="${C}" id="ringFill" data-offset="${off}"/>
        </svg>
        <div class="ring-num">${rep.pct}%<span>${rep.total}/${rep.max} pts</span></div>
      </div>
      <p class="rep-msg">${emoji} ${msg}</p>
      <div class="rlevel"><div class="rl-l">Nivel estimado</div><div class="rl-v">${level}</div></div>

      <div class="s-label" style="margin-top:22px;">Dominio por habilidad</div>
      <div class="skill-list">${skillRows}</div>

      <div class="rep-grid">
        <div class="rcard rc-ok"><div class="rc-t">✅ Fortalezas</div><ul>${strengths.length?strengths.map(x=>`<li>${x}</li>`).join(''):'<li>Sigue practicando para desarrollarlas.</li>'}</ul></div>
        <div class="rcard rc-imp"><div class="rc-t">⚡ A seguir trabajando</div><ul>${improve.length?improve.map(x=>`<li>${x}</li>`).join(''):'<li>¡Excelente! No hay áreas críticas esta sesión.</li>'}</ul></div>
      </div>

      ${DATA.nextGuideHint?`
      <div class="rcard rc-nxt">
        <div class="rc-t">🚀 Próxima guía</div>
        <ul><li>${DATA.nextGuideHint}</li></ul>
      </div>`:''}

      <div style="text-align:center;margin-top:22px;">
        <button class="btn btn-s" onclick="Engine._restart()">🔁 Reiniciar guía</button>
      </div>
    </div>`;
  }

  function animateReport(){
    requestAnimationFrame(()=>{
      const el=document.getElementById('ringFill');
      if(!el) return;
      const off=parseFloat(el.dataset.offset);
      requestAnimationFrame(()=>{ el.style.strokeDashoffset=off; });
    });
  }

  function _restart(){
    blockIndex=0;
    blockState = DATA.blocks.map(()=>({}));
    render();
  }

  const RENDERERS = {
    hook:rHook, goal:rGoal, teach:rTeach,
    'guided-practice':(b)=>rQuizLike(b,true), quiz:(b)=>rQuizLike(b,false),
    open:rOpen, 'dnd-sequence':rDndSequence, 'dnd-classify':rDndClassify,
    challenge:rChallenge, reflect:rReflect, report:rReport
  };

  return {
    init, go, next,
    getProgress,
    _teachStage, _vocAnswer, _vocNext,
    _quizAnswer, _quizNext, _toggleHint,
    _setSelf,
    _dStart, _dEnd, _dOver, _dLeave, _dDrop, _itemClick, _slotClick, _rmSlot, _checkDnd,
    _cOver, _cLeave, _cDrop, _colClick, _rmItem, _checkClassify,
    _reflectDone, _restart
  };
})();

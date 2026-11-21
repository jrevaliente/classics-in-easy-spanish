/* Run before CSS. Synchronize the document, browser color-scheme hint and stored choice.
   The only-light keyword prevents browser Auto Dark Theme from recoloring our light design. */
(function(){
  'use strict';
  let saved=null;
  try{saved=localStorage.getItem('gciec-theme')}catch{}
  const initial=saved==='dark'||saved==='light'?saved:
    (typeof window.matchMedia==='function'&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  let current=initial;
  function apply(value,persist){
    current=value==='dark'?'dark':'light';
    const scheme=current==='dark'?'dark':'only light';
    const root=document.documentElement;
    root.dataset.theme=current;
    root.style.colorScheme=scheme;
    const meta=document.getElementById('theme-scheme');
    if(meta)meta.setAttribute('content',scheme);
    if(persist){try{localStorage.setItem('gciec-theme',current)}catch{}}
    return current;
  }
  window.GCIEC_THEME={get:()=>current,apply};
  apply(initial,false);
}());

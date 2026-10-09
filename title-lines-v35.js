(() => {
  const targets='main h1,main h2,main h3,main h4,main h5,main h6,.kicker,.hero-line,.home-pill > span:not(.pill-img),.era-next-label > span:not(.era-next-arrow),.libel-links a,.room-pill';
  function apply(){
    document.querySelectorAll(targets).forEach(title=>{
      if(!title.textContent.trim() || title.querySelector(':scope > .exhibition-title-line')) return;
      const line=document.createElement('span');
      line.className='exhibition-title-line';
      while(title.firstChild) line.appendChild(title.firstChild);
      title.appendChild(line);
      title.dataset.titleLine='';
    });
  }
  apply();
  // Language switches rebuild the page; put the same effect on the new titles.
  new MutationObserver(apply).observe(document.body,{childList:true,subtree:true});
})();

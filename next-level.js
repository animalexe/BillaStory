(() => {
  const root=document.body;
  const bar=document.querySelector('.progress');
  const glow=document.querySelector('.cursor-glow');
  const reveal=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting)item.target.classList.add('show')}),{threshold:.12});
  document.querySelectorAll('.next .reveal').forEach(el=>reveal.observe(el));
  const update=()=>{if(bar){const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%';}};
  addEventListener('scroll',update,{passive:true}); update();
  addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});
  document.querySelectorAll('.tilt').forEach(card=>{
    card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateX(${y*-5}deg) rotateY(${x*6}deg) translateY(-6px)`;});
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });
  document.querySelectorAll('[data-scroll]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.dataset.scroll);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}}));
  // Tiny ambient motion — no libraries, no audio autoplay.
  document.querySelectorAll('.hero-video,.cast-card video').forEach(v=>{v.addEventListener('loadeddata',()=>v.play().catch(()=>{}));});
})();

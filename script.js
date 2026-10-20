
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
document.querySelectorAll('.card,.stage-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1000px) rotateY(${x*-5}deg) rotateX(${y*5}deg) translateY(-5px)`;
  });
  card.addEventListener('pointerleave',()=>card.style.transform='');
});

const botFab=document.getElementById('botFab'),botPanel=document.getElementById('botPanel'),botClose=document.getElementById('botClose');
if(botFab){botFab.onclick=()=>botPanel.classList.toggle('open');botClose.onclick=()=>botPanel.classList.remove('open');}
const botMessages=document.getElementById('botMessages'),botForm=document.getElementById('botForm'),botInput=document.getElementById('botInput');
function botReply(q){const x=q.toLowerCase();if(x.includes('billu'))return 'Billu is the main hero — a brave, clever orange tabby in a red hoodie. 🐱';if(x.includes('location'))return 'The world has 12 locations: Bakery, Kitchen, Garden, Street, School, Hospital, Police Station, Park, Bank, Grocery Store, Fried Chicken and Pizza Restaurant.';if(x.includes('youtube'))return 'YouTube: @BillaStory11 — tap the YouTube button in the top bar. ▶️';if(x.includes('bubu'))return 'Bubu is Billu’s loyal, playful and protective best friend. 🐶';if(x.includes('momo'))return 'Momo is the mischievous, energetic troublemaker. 🐒';if(x.includes('micky'))return 'Micky is Momo’s clever, quick-thinking partner. 🐭';if(x.includes('leo'))return 'Leo is powerful, royal, calm and serious — the suit-wearing lion. 🦁';if(x.includes('bruno'))return 'Bruno is the gentle giant: innocent, kind and extremely powerful. 🐻';return 'I can help with Billu Story characters, locations and social links. Try “Who is Billu?” or “Show locations”.';}
function sendBot(q){if(!q)return;const u=document.createElement('div');u.className='bot-msg user';u.textContent=q;botMessages.appendChild(u);const b=document.createElement('div');b.className='bot-msg bot';b.textContent=botReply(q);botMessages.appendChild(b);botMessages.scrollTop=botMessages.scrollHeight;}
if(botForm){botForm.onsubmit=e=>{e.preventDefault();sendBot(botInput.value.trim());botInput.value='';};document.querySelectorAll('.bot-quick button').forEach(b=>b.onclick=()=>sendBot(b.dataset.q));}

const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);});}
const drop=document.querySelector('.nav-drop-btn');
const dropWrap=document.querySelector('.nav-dropdown');
if(drop&&dropWrap){drop.addEventListener('click',e=>{e.stopPropagation();const open=dropWrap.classList.toggle('open');drop.setAttribute('aria-expanded',open);});document.addEventListener('click',()=>{dropWrap.classList.remove('open');drop.setAttribute('aria-expanded','false');});}
document.querySelectorAll('.dropdown-panel a').forEach(a=>a.addEventListener('click',()=>{if(nav)nav.classList.remove('open');if(dropWrap)dropWrap.classList.remove('open');}));

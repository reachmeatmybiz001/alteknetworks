const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');

if(menuToggle && nav){
  menuToggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
}

const drop=document.querySelector('.nav-drop-btn');
const dropWrap=document.querySelector('.nav-dropdown');

if(drop && dropWrap){
  drop.addEventListener('click',e=>{
    e.stopPropagation();
    const open=dropWrap.classList.toggle('open');
    drop.setAttribute('aria-expanded',String(open));
  });

  document.addEventListener('click',()=>{
    dropWrap.classList.remove('open');
    drop.setAttribute('aria-expanded','false');
  });
}

document.querySelectorAll('.dropdown-panel a').forEach(link=>{
  link.addEventListener('click',()=>{
    if(nav) nav.classList.remove('open');
    if(dropWrap) dropWrap.classList.remove('open');
  });
});

/* Pre-select the service on the contact page when linked from a service card. */
const contactForm=document.querySelector('#contactForm');
if(contactForm){
  const params=new URLSearchParams(window.location.search);
  const requestedService=params.get('service');
  const serviceSelect=contactForm.querySelector('select[name="service"]');
  if(requestedService && serviceSelect){
    const option=[...serviceSelect.options].find(o=>o.value===requestedService);
    if(option) serviceSelect.value=requestedService;
  }

  contactForm.addEventListener('submit',event=>{
    event.preventDefault();

    const data=new FormData(contactForm);
    const name=(data.get('name')||'').toString().trim();
    const email=(data.get('email')||'').toString().trim();
    const organisation=(data.get('organisation')||'').toString().trim();
    const service=(data.get('service')||'').toString().trim();
    const requirement=(data.get('requirement')||'').toString().trim();

    const subject=encodeURIComponent(`Website enquiry — ${service}`);
    const body=encodeURIComponent(
`Hello AltekNetworks Team,

I would like to discuss an IT infrastructure requirement.

Full name: ${name}
Work email: ${email}
Organisation: ${organisation || 'Not provided'}
Service interest: ${service}

Requirement:
${requirement}

Regards,
${name}`
    );

    window.location.href=`mailto:support@alteknetworks.com?subject=${subject}&body=${body}`;

    const status=document.querySelector('#formStatus');
    if(status){
      status.textContent='Your email client should open with the enquiry details.';
    }
  });
}

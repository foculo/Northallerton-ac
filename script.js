document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#main-nav');
  if(toggle&&nav) toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);toggle.textContent=open?'Close':'Menu';});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const form=document.querySelector('#enquiry-form');
  if(form) form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const body=[`Name: ${data.get('name')}`,`Email: ${data.get('email')}`,`Telephone: ${data.get('phone')||'Not provided'}`,`Property type: ${data.get('property')}`,`Enquiry type: ${data.get('service')}`,'',String(data.get('message'))].join('\n');window.location.href=`mailto:info@northallertonac.co.uk?subject=${encodeURIComponent('Website enquiry: '+data.get('service'))}&body=${encodeURIComponent(body)}`;});
});

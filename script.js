// Mobile nav toggle + basic behaviors
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if(toggle){
    toggle.addEventListener('click', function(){
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '72px';
      nav.style.right = '18px';
      nav.style.background = '#fff';
      nav.style.padding = '12px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
    });
  }

  // Contact form mailto
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = this.name.value.trim(); var email = this.email.value.trim(); var phone = this.phone.value.trim();
      var service = this.service.value; var message = this.message.value.trim();
      if(!name || !email || !message){ alert('Please fill name, email and message.'); return; }
      var subject = encodeURIComponent('Quote request - Northallerton AC ('+service+')');
      var body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nPhone: '+phone+'\n\n'+message);
      window.location.href = 'mailto:hello@northallertonac.co.uk?subject='+subject+'&body='+body;
    });
  }
});

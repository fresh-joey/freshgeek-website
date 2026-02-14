document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  const year = new Date().getFullYear();
  ['year','yearService','yearPortfolio','yearAbout','yearContact'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // mobile nav
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', ()=> siteNav.classList.toggle('open'));
  }

  // progressive enhancement: add simple AJAX submit if Formspree is used
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      // if action points to formspree and Fetch is available, use ajax to avoid page reload
      const action = form.getAttribute('action') || '';
      if(action.includes('formspree.io') && window.fetch){
        e.preventDefault();
        const data = new FormData(form);
        fetch(action, {method:'POST', body: data, headers:{'Accept':'application/json'}})
          .then(res => res.json())
          .then(json => {
            alert('Thanks — I received your message.');
            form.reset();
          })
          .catch(err => {
            alert('Submission failed — please try again or email you@example.com');
          });
      }
    });
  }
});

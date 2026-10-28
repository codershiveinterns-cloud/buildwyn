// Buildwyn LLC — site script: menu, header state, reveals, year, contact form
(function () {
  var doc = document.documentElement;

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Header tightens after scrolling
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal sections as they enter the viewport (siblings stagger slightly)
  var groups = ['.section-head', '.tiles', '.grid', '.steps', '.facts', '.timeline', '.faq', '.service', '.prose', '.details', '.cta-band .wrap'];
  var targets = [];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (el.closest('.hero')) return;
      var kids = el.matches('.tiles, .grid, .steps, .facts, .timeline, .faq') ? el.children : [el];
      for (var i = 0; i < kids.length; i++) {
        var k = kids[i];
        if (k.classList.contains('reveal')) continue;
        k.classList.add('reveal');
        k.style.setProperty('--d', Math.min(i, 6));
        targets.push(k);
      }
    });
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in'); });
  }

  // Current year
  document.querySelectorAll('[data-year]').forEach(function (n) { n.textContent = new Date().getFullYear(); });

  // Contact form: opens the visitor's email app with the message pre-filled
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var subject = 'Project enquiry from ' + d.get('name') + (d.get('company') ? ' (' + d.get('company') + ')' : '');
      var body =
        'Name: ' + d.get('name') + '\n' +
        'Email: ' + d.get('email') + '\n' +
        'Company: ' + (d.get('company') || '-') + '\n' +
        'Service: ' + (d.get('service') || '-') + '\n' +
        'Budget: ' + (d.get('budget') || '-') + '\n' +
        'Timeline: ' + (d.get('timeline') || '-') + '\n\n' +
        d.get('message');
      window.location.href = 'mailto:hello@buildwyn.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var s = document.getElementById('form-status');
      if (s) s.classList.add('show');
    });
  }
})();

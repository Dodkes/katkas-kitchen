/* Katka's Kitchen — mobile navigation and footer year. No dependencies. */
(function () {
  'use strict';

  /* ---- mobile navigation ------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  var backdrop = document.querySelector('.nav-backdrop');

  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.setAttribute('data-open', String(open));
    document.body.setAttribute('data-nav', open ? 'open' : 'closed');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (backdrop) backdrop.addEventListener('click', function () { setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  if (nav) {
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  }

  /* ---- current year in the footer --------------------------------------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

})();

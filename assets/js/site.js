/* Katka's Kitchen — mobile nav + enquiry form. No dependencies. */
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

  /* ---- enquiry form ------------------------------------------------------
     Submits over fetch when an endpoint is configured, so the visitor stays
     on the page. Without JS the form still posts normally to form[action].   */
  var form = document.querySelector('form[data-enquiry]');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var submit = form.querySelector('button[type="submit"]');

  function say(state, msg) {
    if (!status) return;
    status.setAttribute('data-state', state);
    status.textContent = msg;
  }

  form.addEventListener('submit', function (e) {
    var action = form.getAttribute('action') || '';
    // Endpoint not wired up yet — let the mailto/GET fallback happen instead.
    if (action.indexOf('REPLACE_ME') !== -1 || !/^https?:/.test(action)) return;

    e.preventDefault();
    if (form.querySelector('.hp') && form.querySelector('.hp input').value) return; // spam bot
    submit.disabled = true;
    say('', '');
    say('ok', 'Sending your enquiry…');

    fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      form.reset();
      say('ok', 'Thank you — your enquiry is on its way. Katka will reply within one business day.');
    }).catch(function () {
      say('err', 'Sorry, something went wrong. Please email info@katkaskitchen.com.au or call 0491 570 006.');
    }).finally(function () {
      submit.disabled = false;
    });
  });
})();

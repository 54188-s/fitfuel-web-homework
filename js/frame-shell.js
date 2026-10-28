"use strict";
(() => {
  let open = false;
  const known = new Set('home account register user body metrics weight training library exercise strength cardio nutrition foods meals analysis about techniques contact'.split(' '));
  function fit() {
    const shell = document.getElementById('workspace');
    if (shell) shell.cols = innerWidth > 850 ? '224,*' : open ? '190,*' : '0,*';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('DOMContentLoaded', fit);
  window.addEventListener('message', event => {
    const localFile = location.protocol === 'file:';
    if (localFile ? event.origin !== 'null' : event.origin !== location.origin) return;
    if (![...document.querySelectorAll('frame')].some(frame => frame.contentWindow === event.source)) return;
    const data = event.data;
    if (!data || data.kind !== 'fitfuel-course') return;
    if (data.action === 'toggle') { open = !open; fit(); }
    if (data.action === 'navigate' && known.has(data.page)) {
      document.querySelector('frame[name="content"]').src = 'html/' + data.page + '.html';
      open = false;
      fit();
    }
    if (data.action === 'active' && known.has(data.page)) {
      document.querySelector('frame[name="navigation"]').contentWindow.postMessage(data, localFile ? '*' : location.origin);
      document.title = (data.title || 'FitFuel Pro') + ' · FitFuel Pro';
    }
  });
})();

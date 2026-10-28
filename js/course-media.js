"use strict";
(() => {
  // Browsing another clip never starts/stops a fitness record or writes user storage.
  const clips = [...document.querySelectorAll('video')];
  for (const clip of clips) {
    clip.addEventListener('play', () => {
      for (const other of clips) if (other !== clip && !other.paused) other.pause();
    });
    const showError = () => {
      const message = clip.closest('.course-media-film')?.querySelector('.course-media-error');
      if (message) message.hidden = false;
    };
    clip.addEventListener('error', showError);
    for (const source of clip.querySelectorAll('source')) source.addEventListener('error', showError);
    clip.addEventListener('loadeddata', () => {
      const message = clip.closest('.course-media-film')?.querySelector('.course-media-error');
      if (message) message.hidden = true;
    });
  }
  const pause = () => { for (const clip of clips) if (!clip.paused) clip.pause(); };
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  window.addEventListener('pagehide', pause);
})();

"use strict";
(() => {
  for (const video of document.querySelectorAll("video[data-hls-src]")) {
    const src=video.dataset.hlsSrc;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {video.src=src;continue;}
    if (!window.Hls?.isSupported()) {video.dispatchEvent(new Event("error"));continue;}
    const hls=new Hls({enableWorker:false,maxBufferLength:20,maxMaxBufferLength:40,backBufferLength:30});
    let retries=0;
    hls.on(Hls.Events.ERROR,(_event,data)=>{if(!data.fatal)return;if(retries++<2){if(data.type===Hls.ErrorTypes.NETWORK_ERROR)hls.startLoad();else if(data.type===Hls.ErrorTypes.MEDIA_ERROR)hls.recoverMediaError();else video.dispatchEvent(new Event("error"));}else video.dispatchEvent(new Event("error"));});
    hls.loadSource(src);hls.attachMedia(video);
    window.addEventListener("pagehide",()=>hls.destroy(),{once:true});
  }
})();

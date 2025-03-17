import{a as u,S as f,i as o}from"./assets/vendor-D-1act8A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="49327571-9bc10044c8ece8c1ec1b158e2",g="https://pixabay.com/api/";function d(t){return u.get(`${g}`,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const p=document.querySelector(".gallery");function m(t){p.innerHTML=t.map(({webformatURL:s,largeImageURL:a,tags:l,likes:e,views:r,comments:n,downloads:c})=>`
      <li class="gallery-item">
        <a href="${a}" class="gallery-link">
          <img src="${s}" alt="${l}" class="gallery-image" />
        </a>
        <div class="gallery-info">
          <div class="gallery-info-container">
            <span class="gallery-info-title">Likes</span>
            <span class="gallery-info-value">${e}</span>
          </div>
          <div class="gallery-info-container">
            <span class="gallery-info-title">Views</span>
            <span class="gallery-info-value">${r}</span>
          </div>
          <div class="gallery-info-container">
            <span class="gallery-info-title">Comments</span>
            <span class="gallery-info-value">${n}</span>
          </div>
          <div class="gallery-info-container">
            <span class="gallery-info-title">Downloads</span>
            <span class="gallery-info-value">${c}</span>
          </div>
        </div>
      </li>`).join(""),new f(".gallery a").refresh()}const h=document.querySelector(".form"),v=document.querySelector(".gallery"),i=document.querySelector(".loader");h.addEventListener("submit",function(t){t.preventDefault();const s=t.target.elements["search-text"].value.trim();if(!s){o.error({message:"Please enter a search query"});return}v.innerHTML="",i.style.display="block",d(s).then(a=>{if(i.style.display="none",a.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please, try again!"});return}m(a.hits)}).catch(a=>{i.style.display="none",o.error({title:"Error",message:"Something went wrong"})})});
//# sourceMappingURL=index.js.map

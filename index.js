import{a as q,S as B,i}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const M="49327571-9bc10044c8ece8c1ec1b158e2",P="https://pixabay.com/api/";async function y(o,t){try{return(await q.get(P,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(a){throw console.error(a.message),a}}const f=document.querySelector(".gallery"),g=document.querySelector(".load-more"),m=document.querySelector(".loader"),$=new B(".gallery a");function p(o){const t=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:r,views:n,comments:b,downloads:S})=>`
    <li class="gallery-item">
      <a href="${s}" class="gallery-link">
        <img src="${a}" alt="${e}" class="gallery-image" />
      </a>
      <div class="gallery-info">
        <div class="gallery-info-container">
          <span class="gallery-info-title">Likes</span>
          <span class="gallery-info-value">${r}</span>
        </div>
        <div class="gallery-info-container">
          <span class="gallery-info-title">Views</span>
          <span class="gallery-info-value">${n}</span>
        </div>
        <div class="gallery-info-container">
          <span class="gallery-info-title">Comments</span>
          <span class="gallery-info-value">${b}</span>
        </div>
        <div class="gallery-info-container">
          <span class="gallery-info-title">Downloads</span>
          <span class="gallery-info-value">${S}</span>
        </div>
      </div>
    </li>`).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function E(){f.innerHTML=""}function h(){m.style.display="block"}function v(){m.style.display="none"}function w(){g.style.visibility="visible"}function d(){g.style.visibility="hidden"}const u=document.querySelector(".form"),x=document.querySelector(".load-more");let c="",l=1;const L=15;u.addEventListener("submit",async function(o){if(o.preventDefault(),c=o.target.elements["search-text"].value.trim(),!c){i.error({message:"Please enter a search query"});return}l=1,E(),d(),h();try{const t=await y(c,l);if(!t.hits.length){i.error({message:"Sorry, no images found. Try again!"});return}p(t.hits),t.totalHits>L&&w()}catch{i.error({title:"Error",message:"Something went wrong"})}finally{v(),u.reset()}});x.addEventListener("click",async function(){l+=1,d(),h();try{const o=await y(c,l);p(o.hits);const t=Math.ceil(o.totalHits/L);l>=t?(d(),i.info({message:"You've reached the end of the results."})):w();const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2+48,behavior:"smooth"})}catch{i.error({title:"Error",message:"Something went wrong"})}finally{v()}});
//# sourceMappingURL=index.js.map

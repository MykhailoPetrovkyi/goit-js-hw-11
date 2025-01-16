import{S as y,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="48249953-c87d0f666d29b70f04b79c154",L="https://pixabay.com/api/",S=s=>{const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:1,per_page:9});return fetch(`${L}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{throw r})};let a;const f=document.querySelector(".gallery"),b=s=>{const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:m,downloads:h})=>`<li class="gallery-card">
          <a class="gallery-link" href="${n}">
            <img class="gallery-img" src="${r}" alt="${e}" />
          </a>
          <ul class="gallery-info">
            <li class="gallery-info-content">
              <p>Likes</p>
              <p>${t}</p>
            </li>
            <li class="gallery-info-content">
              <p>Views</p>
              <p>${i}</p>
            </li>
            <li class="gallery-info-content">
              <p>Comments</p>
              <p>${m}</p>
            </li>
            <li class="gallery-info-content">
              <p>Downloads</p>
              <p>${h}</p>
            </li>
          </ul>
        </li>`).join("");f.innerHTML=o,a?a.refresh():a=new y(".gallery-link",{captionsData:"alt",captionDelay:250})},c=()=>{f.innerHTML=""},g=document.querySelector(".search-form"),w=document.querySelector(".loader"),p=g.elements.search;g.addEventListener("submit",s=>{s.preventDefault();const o=p.value.trim();if(o===""){l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}S(o).then(r=>{if(u(!0),r.hits.length===0){p.value="",l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please enter the correct values!",position:"topRight"}),c();return}b(r.hits)}).catch(r=>{l.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}).finally(u(!1))});const u=s=>w.style.display=s?"none":"inline-block";
//# sourceMappingURL=index.js.map

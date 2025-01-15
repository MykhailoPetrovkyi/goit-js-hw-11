import{S as h,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="48249953-c87d0f666d29b70f04b79c154",d="https://pixabay.com/api/",L=s=>{const o=new URLSearchParams({key:y,q:s,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:1,per_page:9});return fetch(`${d}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{throw r})};let a;const u=document.querySelector(".gallery"),S=s=>{const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:g,downloads:m})=>`<li class="gallery-card">
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
              <p>${g}</p>
            </li>
            <li class="gallery-info-content">
              <p>Downloads</p>
              <p>${m}</p>
            </li>
          </ul>
        </li>`).join("");u.innerHTML=o,a?a.refresh():a=new h(".gallery-link",{captionsData:"alt",captionDelay:250})},b=()=>{u.innerHTML=""},f=document.querySelector(".search-form"),w=document.querySelector(".loader"),c=f.elements.search;f.addEventListener("submit",s=>{s.preventDefault();const o=c.value.trim();if(o===""){l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),b();return}L(o).then(r=>{if(p(!0),r.hits.length===0){c.value="",l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please enter the correct values!",position:"topRight"});return}S(r.hits)}).catch(r=>{l.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}).finally(p(!1))});const p=s=>w.style.display=s?"none":"inline-block";
//# sourceMappingURL=index.js.map

import{a as L,i as n,S as b}from"./assets/vendor-b2578120.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const E="43046447-8272f873c9098dbfa2cb53d4e",w="https://pixabay.com/api/";async function g(o,e,t){try{return(await L.get(w,{params:{key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:t}})).data}catch(i){throw console.error("Error fetching images:",i),i}}function f(o){if(o.length===0)n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const e=o.map(t=>`<li class="photos-block">
            <a class="photos-link" href="${t.largeImageURL}">
            <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="photo-data">
            <li class="photo-data-detail"><p><span class="info">Likes</span></br>${t.likes}</p></li>
            <li class="photo-data-detail"><p><span class="info">Views</span></br>${t.views}</p></li>
            <li class="photo-data-detail"><p><span class="info">Comments</span></br>${t.comments}</p></li>
            <li class="photo-data-detail"><p><span class="info">Downloads</span></br>${t.downloads}</p></li>
            </ul>
            </li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",e),S.refresh()}}const a={searchForm:document.querySelector(".search-form"),inputElement:document.querySelector(".search-input"),loader:document.querySelector(".loader"),load:document.querySelector(".load"),galleryList:document.querySelector(".gallery")},S=new b(".gallery a",{captionsData:"alt",captionDelay:250});let c,l=1;const p=15,h=document.querySelector(".loader"),y=()=>{h.classList.remove("hidden")},m=()=>{h.classList.add("hidden")};m();a.searchForm.addEventListener("submit",v);async function v(o){if(o.preventDefault(),c=a.inputElement.value.trim(),l=1,a.galleryList.innerHTML="",c===""){n.error({title:"Error",message:"Please enter a search term.",position:"topRight"}),d();return}q(),y();try{const e=await g(c,l,p),t=e.totalHits;if(e.hits.length===0){a.galleryList.innerHTML="",n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d();return}else f(e.hits),a.inputElement.value="",P();p*l>=t&&(d(),showEndOfCollectionMessage())}catch(e){console.error("Error fetching images:",e),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{m()}}a.load.addEventListener("click",async()=>{try{a.load&&(l+=1);const o=await g(c,l,p),e=o.totalHits;f(o.hits),y(),p*l>=e&&(d(),showEndOfCollectionMessage());const t=a.galleryList.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}catch(o){console.error("Error fetching more images:",o),n.error({title:"Error",message:`Error fetching more images: ${o}`})}finally{m()}});function q(){n.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function P(){a.load.style.display="block"}function d(){a.load.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map

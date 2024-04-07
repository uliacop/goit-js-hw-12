import{a as y,i as n,S as L}from"./assets/vendor-b2578120.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const b="43046447-8272f873c9098dbfa2cb53d4e",E="https://pixabay.com/api/";async function g(o,e,t){try{return(await y.get(E,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:t}})).data}catch(i){throw console.error("Error fetching images:",i),i}}function m(o){if(o.length===0)n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const e=o.map(t=>`<li class="photos-block">
            <a class="photos-link" href="${t.largeImageURL}">
            <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="photo-data">
            <li class="photo-data-detail"><p><span class="info">Likes</span></br>${t.likes}</p></li>
            <li class="photo-data-detail"><p><span class="info">Views</span></br>${t.views}</p></li>
            <li class="photo-data-detail"><p><span class="info">Comments</span></br>${t.comments}</p></li>
            <li class="photo-data-detail"><p><span class="info">Downloads</span></br>${t.downloads}</p></li>
            </ul>
            </li>`).join("");s.galleryList.insertAdjacentHTML("beforeend",e),w.refresh()}}const s={searchForm:document.querySelector(".search-form"),inputElement:document.querySelector(".search-input"),load:document.querySelector(".load"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")},w=new L(".gallery a",{captionsData:"alt",captionDelay:250});p();let d,l=1;const u=15;s.searchForm.addEventListener("submit",v);async function v(o){if(o.preventDefault(),d=s.inputElement.value.trim(),l=1,s.galleryList.innerHTML="",d===""){n.error({title:"Error",message:"Please enter a search term.",position:"topRight"}),c();return}P(),h();try{const e=await g(d,l,u),t=e.totalHits;if(e.hits.length===0){s.galleryList.innerHTML="",n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}else m(e.hits),s.inputElement.value="",S();u*l>=t&&(c(),showEndOfCollectionMessage())}catch(e){console.error("Error fetching images:",e),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{p()}}s.load.addEventListener("click",async()=>{try{s.load&&(l+=1);const o=await g(d,l,u),e=o.totalHits;m(o.hits),h(),u*l>=e&&(c(),showEndOfCollectionMessage());const t=s.galleryList.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}catch(o){console.error("Error fetching more images:",o),n.error({title:"Error",message:`Error fetching more images: ${o}`})}finally{p()}});function h(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}function S(){s.load.style.display="block"}function c(){s.load.style.display="none"}function P(){c(),n.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map

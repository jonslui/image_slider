(()=>{"use strict";function e(e,n){let s=0;for(t(n,s,!1);""!==e[s].style.display;)s+=1,t(n,s,!1);e[s].style.display="none",s===e.length-1?(e[0].style.display="",t(n,0,!0)):(e[s+1].style.display="",t(n,s+1,!0))}function t(e,t,n){e[t].innerHTML=!1===n?"○":"●"}!function(n,s){const l=document.createElement("div");l.setAttribute("class","sliderContainer");const a=document.createElement("div");a.setAttribute("class","imageContainer");const i=document.createElement("a");i.setAttribute("class","lastPhotoButton"),i.innerHTML="<";const c=document.createElement("a");c.setAttribute("class","nextPhotoButton"),c.innerHTML=">";const d=document.createElement("div");d.setAttribute("class","selectorContainer"),n.forEach(((e,t)=>function(e,t,n){const s=e[0],l=e[1],a=document.createElement("img");a.setAttribute("class","image"),a.setAttribute("alt",l),a.id=n,a.src=s,0!==n&&(a.style.display="none"),t.appendChild(a)}(e,a,t)));const o=l.getElementsByClassName("image");!function(e,t,n){for(let s=0;s<n;s+=1){const n=document.createElement("a");n.setAttribute("class","selector"),n.innerHTML="○",e.appendChild(n),n.addEventListener("click",(()=>{let e=0;for(;""!==t[e].style.display;)e+=1;n.innerHTML="●",t[e].style.display="none",t[s].style.display=""}))}}(d,o,n.length);const r=d.getElementsByClassName("selector");i.addEventListener("click",(()=>{!function(e,n){let s=0;for(t(n,s,!1);""!==e[s].style.display;)s+=1,t(n,s,!1);e[s].style.display="none",0===s?(e[e.length-1].style.display="",t(n,n.length-1,!0)):(e[s-1].style.display="",t(n,s-1,!0))}(o,r)})),c.addEventListener("click",(()=>{e(o,r)})),l.appendChild(a),l.appendChild(i),l.appendChild(d),l.appendChild(c),setInterval((()=>e(o)),5e3),s.appendChild(l)}([["images/cat.jpg","Cat"],["images/cat2.jpg","Cat 2"],["images/cat3.jpg","Cat 3"]],document.getElementById("content"))})();
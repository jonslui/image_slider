(()=>{"use strict";!function(t,e){const n=document.createElement("div");n.setAttribute("class","sliderContainer");const s=document.createElement("a");s.setAttribute("class","nextPhotoButton");const a=document.createElement("b");a.setAttribute("class","nextPhotoButton"),n.appendChild(s),[["images/cat.jpg","Cat"],["images/cat2.jpg","Cat 2"],["images/cat3.jpg","Cat 3"]].forEach(((t,e)=>function(t,e,n){const s=document.createElement("div");s.setAttribute("class","imageContainer");const a=t[0],l=t[1],i=document.createElement("img");i.setAttribute("class","image"),i.setAttribute("alt",l),i.id=n,i.src=a,0!==n&&(i.style.display="none"),s.appendChild(i),e.appendChild(s)}(t,n,e))),n.appendChild(a);const l=n.getElementsByClassName("image");s.addEventListener("click",(()=>{!function(t){let e=0;for(;""!==t[e].style.display;)e+=1;t[e].style.display="none",0===e?t[t.length-1].style.display="":t[e-1].style.display=""}(l)})),a.addEventListener("click",(()=>{!function(t){let e=0;for(;""!==t[e].style.display;)e+=1;t[e].style.display="none",e===t.length-1?t[0].style.display="":t[e+1].style.display=""}(l)})),e.appendChild(n)}(0,document.getElementById("content"))})();
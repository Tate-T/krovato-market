import"./assets/modulepreload-polyfill-3cfb730f.js";import"./assets/index-b86d4260.js";import"./assets/find-e2fc7644.js";import"./assets/header-bad951a5.js";const d=document.getElementById("filterBox"),n=document.getElementById("catalog");d.addEventListener("click",e=>{if(e.target.tagName==="A"){e.preventDefault();const r=e.target.textContent.trim();u(r)}});function u(e){const r=n.getElementsByClassName("catalog__item"),s=Array.from(r);s.sort((t,a)=>{var c,o;switch(e){case"За зростанням ціни":const l=parseFloat(t.getElementsByClassName("catalog__price")[0].textContent.replace(/\s+/g,"").replace("грн.","")),g=parseFloat(a.getElementsByClassName("catalog__price")[0].textContent.replace(/\s+/g,"").replace("грн.",""));return l-g;case"За спаданням ціни":const i=parseFloat(t.getElementsByClassName("catalog__price")[0].textContent.replace(/\s+/g,"").replace("грн.",""));return parseFloat(a.getElementsByClassName("catalog__price")[0].textContent.replace(/\s+/g,"").replace("грн.",""))-i;case"За рейтингом":const p=((c=t.getElementsByClassName("rating")[0])==null?void 0:c.textContent)||"0",m=((o=a.getElementsByClassName("rating")[0])==null?void 0:o.textContent)||"0";return parseInt(m)-parseInt(p);case"Новинки":const B=t.getAttribute("data-date")||"0",C=a.getAttribute("data-date")||"0";return new Date(C)-new Date(B);default:return 0}}),n.innerHTML="",s.forEach(t=>{n.appendChild(t)})}
//# sourceMappingURL=commonHelpers5.js.map

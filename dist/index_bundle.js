(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,'/* Resetting default styles for body */\nbody {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    text-align: center;\n    font-family: "Times New Roman";\n}\n\n/* Styling for the header */\nheader {\n    padding: 10px;\n    background: rgba(94, 92, 92, 0.2);\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Styling for the main content area */\n#content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n/* Styling for images */\nimg {\n    width: 280px;\n    height: 290px;\n    border-radius: 10px;\n}\n\n/* Styling for buttons */\nbutton {\n    border: none;\n    padding: 10px;\n    background: black;\n    color: white;\n    width: 80px;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n/* Hover effect for buttons */\nbutton:focus {\n    transition: 0.9s;\n    border: none;\n    border-bottom: 2px solid black;\n    border-bottom-right-radius: 20px;\n    background: white;\n    color: black;\n}\n.mealDescription {\n    font-weight:bold;\n}\n\n.aboutInfo, .service{\n    width:60%;\n    background: rgb(94, 92, 92);\n    color:white;\n    padding:20px;\n}\n\n.service {\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    gap:20px;\n    border-radius:10px;\n    width:50%;\n}\n\n\n\n',""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var m=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=()=>{let e=document.querySelector("#content");document.querySelector(".aboutInfo"),document.querySelector("#currentTitle").textContent="Welcome to Home",e.textContent="";const n=document.createElement("div");n.textContent="All days: 7am -7pm",n.classList.add("openingHours");const t=document.createElement("div");t.classList.add("service");const r=document.createElement("div");r.textContent="We are the best, The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",t.appendChild(n),t.appendChild(r),e.appendChild(t)};var n=t(72),r=t.n(n),o=t(825),a=t.n(o),i=t(659),c=t.n(i),s=t(56),u=t.n(s),d=t(540),l=t.n(d),m=t(113),p=t.n(m),f=t(208),g={};g.styleTagTransform=p(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),r()(f.A,g),f.A&&f.A.locals&&f.A.locals,e();const h=document.querySelector(".about"),v=document.querySelector(".menu"),y=document.querySelector(".home");function b(){document.querySelector(".star").style.display="none"}h.addEventListener("click",(function(){!function(){let e=document.querySelector("#content"),n=document.querySelector("#currentTitle");e.textContent="";const t=document.createElement("div");t.classList.add("aboutInfo"),t.textContent="Welcome to Your Off/On Restaurant! At our restaurant, \nwe pride ourselves on offering delicious meals inspired by diverse cultures and cuisines. \nWhile we're currently based on the internet, our commitment to providing \nexceptional dining experiences knows no bounds. Our team is dedicated to continuously \nimproving our menu to delight your taste buds every time you visit.",n.textContent="Welcome to Your Off/On Restaurant!",e.appendChild(t)}(),b()})),v.addEventListener("click",(function(){(()=>{let e=document.querySelector("#content"),n=document.querySelector("#currentTitle");e.textContent="",n.textContent="Indulge in Our Delicious Selections",[{name:"Chicken Salad",imgSrc:"/images/chickenSalad.avif"},{name:"Fish Butter Masala",imgSrc:"/images/fishButter.avif"},{name:"Salmon With Salad",imgSrc:"/images/salmonWithSalad.avif"},{name:"Special Egg With Vegetables and beef",imgSrc:"/images/specialEggWithVeg.avif"},{name:"Veggie Yogurt Bowl",imgSrc:"/images/vegYogurtBowl.avif"},{name:"Chicken Salad",imgSrc:"/images/chickenSalad.avif"},{name:"Fish Butter Masala",imgSrc:"/images/fishButter.avif"},{name:"Chicken Salad",imgSrc:"/images/chickenSalad.avif"},{name:"Fish Butter Masala",imgSrc:"/images/fishButter.avif"}].forEach((n=>{const t=document.createElement("div");t.classList.add("mealInfo"),t.innerHTML=`\n        <img src="${n.imgSrc}" alt="${n.name}" width="30%">\n        <p class = "mealDescription">${n.name}</p>`,e.appendChild(t)}))})(),b()})),y.addEventListener("click",e)})()})();
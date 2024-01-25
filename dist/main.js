(()=>{"use strict";var n={740:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,':root {\n  --main-green: #10894e;\n  --main-grey: #efefef;\n  --blue: #5271ff;\n}\n\nbody {\n  background-color: red;\n  min-height: 100vh;\n  margin: 0;\n}\n\n.main-content {\n  background-color: aliceblue;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(250px, 300px) 1fr;\n}\n\n/* NavBar */\n.navbar {\n  background-color: var(--main-green);\n  border: 2px solid black;\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n  /* min-width: 150px; */\n}\n\n.brand {\n  height: 90px;\n  background-color: #ffffff;\n  border-bottom: 2px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n.brand p {\n  display: inline;\n  vertical-align: middle;\n  font-size: 24px;\n}\n.brand img {\n  height: 26px;\n  width: 26px;\n  margin-top: 3px;\n}\n.nav-items {\n  flex: 1;\n  background-color: var(--main-green);\n  display: flex;\n  justify-content: center;\n}\n.nav-item-categories {\n  margin-top: 25px;\n  min-height: 450px;\n  height: 75%;\n  width: 85%;\n  /* border: 2px solid black; */\n  display: flex;\n  flex-direction: column;\n}\n.nav-tabs {\n  background-color: transparent;\n  flex: 1;\n  max-height: 280px;\n  padding-left: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.nav-tabs > :first-child {\n  /* margin-top: 20px; */\n  margin-top: 15%;\n}\n.button {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  text-align: inherit;\n  appearance: none;\n  font-size: 16px;\n  color: white;\n}\n.dropbtn {\n  background-color: black;\n  font-size: 20px;\n  font-weight: 600;\n  border: 2px solid black;\n  padding: 16px;\n  width: 90%;\n  min-width: 200px;\n  border-radius: 15px;\n  cursor: pointer;\n  text-align: left;\n  /* font-size: 16px; */\n  color: white;\n}\n.projects {\n  /* border: 2px solid pink; */\n  /* background-color: pink; */\n  background-color: transparent;\n  flex: 1;\n  position: relative;\n  display: inline-block;\n  /* padding-left: 25px; */\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  /* background-color: red; */\n  border: 2px solid black;\n  color: white;\n  width: 90%;\n  min-width: 196px;\n  border-radius: 0 0 15px 15px;\n  z-index: 1;\n}\n.dropdown-content a {\n  color: white;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-content a:hover {\n  background-color: #d88787;\n  /* background-color: transparent; */\n}\n.project-dropdown:hover .dropdown-content {\n  display: block; /* change this to .project-dropdown "click"*/\n}\n.project-dropdown:hover .dropbtn {\n  background-color: rgb(32, 29, 30);\n  border-radius: 15px 15px 0 0;\n}\n.project-dropdown a {\n  text-align: center;\n}\n\n/* MAIN CONTENT */\n.content {\n  background-color: var(--main-grey);\n  padding: 60px 80px 0 80px;\n  display: flex;\n  flex-direction: column;\n}\n.content-title {\n  width: 100%;\n  height: 100px;\n  /* background-color: #5271ff; */\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid black;\n}\n.content-title p {\n  font-size: 32px;\n}\n.content-add-task {\n  height: 100px;\n  /* background-color: aqua; */\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n}\n.add-task-btn {\n  border: none;\n  background-color: #5271ff;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 15px;\n  font-size: 18px;\n  cursor: pointer;\n}\n.content-tasks {\n  flex: 1;\n  /* background-color: #10894e; */\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n}\n.list-content {\n  width: 75%;\n  /* background-color: aqua; */\n  background-color: transparent;\n  min-width: 500px;\n}\n.add-list {\n  background-color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.list-item {\n  padding: 20px 20px;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  border-bottom: 1px solid var(--main-grey);\n}\n.list-item > div:nth-child(2) {\n  text-align: center;\n}\n.checkmark {\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  border: 2px solid var(--blue);\n  cursor: pointer;\n}\n.list-item-first {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n.list-item-first > p {\n  margin: 0;\n  font-size: 18px;\n}\n.yessir {\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n}\n.yessir > p {\n  font-size: 18px;\n  color: var(--blue);\n}\n.material-symbols-outlined.empty-star {\n  font-size: 24px;\n  color: rgb(184, 184, 175);\n  cursor: pointer;\n}\n.material-icons.marked {\n  color: rgb(0, 228, 179);\n  font-size: 24px;\n  cursor: pointer;\n}\n.material-icons::before {\n  content: "\\e3bc";\n  font-family: "Material Icons Outlined";\n  font-size: 24px;\n  color: black;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.completed {\n  background-color: red;\n  border: 2px solid red;\n}\n.delete-btn {\n  cursor: pointer;\n}\n/* TASK FORM POP-UP NEEDS STYLING */\n.item-form {\n  display: none;\n}\n.show-form {\n  display: block;\n}\n#listForm {\n  border: 2px solid black;\n  padding: 15px;\n}\n.inputField {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.inputField input {\n  margin-bottom: 5px;\n}\n.formButtons {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 5px;\n}\n#formBtn {\n  margin-bottom: 0;\n}\n\n.tabActive {\n  border-bottom: 2px solid white;\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(740),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals,t.p;const f=function(){return{getTitle:n=>(document.querySelector(".title").textContent=n,!0),getTaskList:()=>{const n=document.querySelector(".add-list");return console.log("grabbing-task"),n},getAddTaskBtn:()=>document.querySelector(".add-task-btn"),getForm:()=>document.querySelector("#listForm"),getCancelBtn:()=>document.querySelector(".listCancelBtn"),getSubmitBtn:()=>document.querySelector(".listSubmitBtn"),getAllTab:()=>document.querySelector(".button1"),getTodayTab:()=>document.querySelector(".button2"),getWeekTab:()=>document.querySelector(".button3"),getImportantTab:()=>document.querySelector(".button4"),getCompletedTab:()=>document.querySelector(".button5"),getProjectDropdownContent:()=>document.querySelector(".dropdown-content"),getProjectAddBtn:()=>document.querySelector(".addProject")}};function b(n){document.querySelector(".title").textContent=n}const x=function(){const n=document.querySelectorAll(".button");let e=f();const t=e.getAddTaskBtn(),o=e.getCancelBtn(),r=(e.getSubmitBtn(),e.getForm()),a=(e.getAllTab(),e.getTaskList()),i=e.getProjectDropdownContent();function c(n,e,t,o,r=!1,a=null){return{taskID:n,taskTitle:e,taskDetails:t,dueDate:o,isImportant:r,isCompleted:!1,projectName:a}}let s=0;const l=[],d=()=>document.querySelectorAll(".button");let p=d();function u(n,e=null){const t=n.taskTitle,o=document.querySelector(".add-list"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("p"),s=document.createElement("div"),d=(document.getElementById("listForm"),document.createElement("p")),p=document.createElement("span"),u=document.createElement("span");r.classList.add("list-item"),r.setAttribute("data-index",e),a.classList.add("list-item-first"),i.classList.add("checkmark"),s.classList.add("yessir"),p.classList.add("material-symbols-outlined"),p.classList.add("empty-star"),p.textContent="star",u.classList.add("material-symbols-outlined"),u.classList.add("delete-btn"),u.textContent="delete",c.textContent=n.taskTitle,d.textContent=n.dueDate,s.append(d,p,u),r.append(a,s),a.append(i,c),o.append(r),console.log("Ran addTaskContent function"),console.log(`addTaskContent This is the newly added stuff ${t}, ${e}`),!0===n.isImportant&&(p.classList.add("material-icons"),p.classList.add("marked"),console.log(n.taskTitle)),!0===n.isCompleted&&i.classList.add("completed"),p.addEventListener("click",(()=>{p.classList.toggle("material-icons"),p.classList.toggle("marked"),p.classList.contains("marked")?(l[e].isImportant=!0,console.log("is Important")):(l[e].isImportant=!1,console.log("Is not important"))})),i.addEventListener("click",(()=>{i.classList.toggle("completed"),i.classList.contains("completed")?l[e].isCompleted=!0:l[e].isCompleted=!1,console.log(l)})),u.addEventListener("click",(()=>{console.log("Calling Delete Button"),l.splice(e,1),console.log(l),C()}))}return p.forEach((e=>{e.addEventListener("click",(()=>{n.forEach((n=>{n.classList.remove("tabActive")})),b(e.textContent.toUpperCase()),e.classList.add("tabActive")}))})),t.addEventListener("click",(()=>{a.append(r),r.classList.toggle("show-form"),console.log("RUNNNING")})),r.addEventListener("submit",(n=>{n.preventDefault(),s+=1,console.log("Form Submitted");let e=document.getElementById("listInput").value,t=document.getElementById("listInputDetail").value,o=document.getElementById("listInputDate").value;console.log("This is the date",o);const a=c(s,e,t,o);l.push(a),r.reset(),r.classList.toggle("show-form"),console.log(l),u(a,l.length-1)})),o.addEventListener("click",(()=>{r.classList.toggle("show-form"),console.log(".show-form class removed"),r.reset()})),l.push(c(1,"Clean Room","runnning","2024-01-10")),l.push(c(2,"Buy Groceries","Costco","2024-01-11")),l.push(c(3,"Paint room","start with wall","2024-01-11")),l.push(c(2,"Oil Change","at pep boys","2024-01-15")),{getTasks:function(){return l},addTaskContent:u,newProject:function(){console.log(i);const n=i,e=document.querySelector(".addProject"),t=document.createElement("a"),o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id","projectTitle"),o.setAttribute("placeholder","New Project"),o.addEventListener("keydown",(function(e){if("Enter"===e.key){e.preventDefault();const r=o.value;""!==r.trim()&&(function(n){const e=i,t=document.createElement("a");t.setAttribute("class","button"),t.setAttribute("href","#"),t.textContent=n,e.insertBefore(t,document.querySelector(".addProject")),d(),p=d(),console.log(p)}(r),n.removeChild(t))}})),t.appendChild(o),n.insertBefore(t,e),console.log("Running newProject() function")}}}(),h=f(),k=h.getAllTab(),v=h.getTodayTab(),y=h.getWeekTab(),T=h.getImportantTab(),w=h.getCompletedTab(),L=h.getProjectAddBtn();function C(){h.getTaskList().innerHTML="";const n=x.getTasks();console.log("DISPLAY ALL",n),n.forEach(((n,e)=>{x.addTaskContent(n,e),console.log(e)}))}console.log(y),console.log("I AM THE TABS PAGE"),k.addEventListener("click",(()=>{C()})),document.addEventListener("DOMContentLoaded",(()=>{k.classList.add("tabActive"),b(k.textContent.toUpperCase()),C()})),v.addEventListener("click",(()=>{h.getTaskList().innerHTML="";const n=new Date;n.setUTCHours(0,0,0,0),x.getTasks().forEach((e=>{const t=new Date(e.dueDate);t.setUTCHours(0,0,0,0),console.log("currentDate:",n),console.log("taskDate:",t),t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear()&&x.addTaskContent(e)})),console.log("todayTab")})),y.addEventListener("click",(()=>{h.getTaskList().innerHTML="";const n=new Date;n.setDate(n.getDate()+7),x.getTasks().forEach((e=>{const t=new Date(e.dueDate);t>=n&&t<=n&&x.addTaskContent(e)})),console.log("next7DaysTab")})),console.log("Important Tab",T),T.addEventListener("click",(()=>{h.getTaskList().innerHTML="";const n=x.getTasks();console.log("Important clicked"),n.forEach(((n,e)=>{!0===n.isImportant&&x.addTaskContent(n,e)}))})),console.log("Completed tab"),w.addEventListener("click",(()=>{h.getTaskList().innerHTML="";const n=x.getTasks();console.log("Clicked on completed Tab"),n.forEach(((n,e)=>{!0===n.isCompleted&&(console.log(n.taskTitle),x.addTaskContent(n,e))}))})),console.log("Add project tab"),L.addEventListener("click",(()=>{console.log("AddProjectBtn"),x.newProject()}));const E=x.getTasks();console.log("MY ARRAY",E)})()})();
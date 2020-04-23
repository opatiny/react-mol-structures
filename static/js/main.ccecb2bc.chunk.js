(this["webpackJsonpreact-mol-structures"]=this["webpackJsonpreact-mol-structures"]||[]).push([[0],{34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),l=(n(39),n(6)),u=n(9),i=n(7);n(40);function s(){return r.a.createElement("div",{className:"aboutStyle"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"Structural isomers calculator app"),r.a.createElement("p",null,"Version: v1.0.0"),r.a.createElement("p",null,"This app only accepts organic molecules."),r.a.createElement("p",null,"We are aware that some of the results of the calculator are impossible isomers (for instance with azotes). This is caused by the tool used to generate them (M. M. Jaghoori et al., \u2018PMG: Multi-core metabolite identification\u2019, Electron. Notes Theor. Comput. Sci., vol. 299, pp. 53\u201360, 2013.)."),r.a.createElement("p",null,"Github repository:"," ",r.a.createElement("a",{className:"link",href:"https://github.com/opatiny/react-mol-structures"},"https://github.com/opatiny/react-mol-structures")))}var m=n(32);n(44);function p(e){return r.a.createElement("div",{className:"molStyle"},e.idCodes.map((function(e){return r.a.createElement("div",{key:e.idCode,style:d},r.a.createElement(m.a,{idcode:e.idCode,width:100,height:60}))})))}var d={background:"#f4f4f4",border:"1px solid #ccc",padding:"15px"};function f(e){switch(e.content){case"molecules":return r.a.createElement(p,{idCodes:e.idCodes});case"error":return r.a.createElement("p",{style:h},"ERROR: Invalid molecular formula");case"loading":return r.a.createElement("p",{style:E},"Loading...")}}var h={color:"red",fontSize:"20px",textAlign:"center",padding:"10px",fontWeight:"bold"},E={fontSize:"20px",textAlign:"center",padding:"10px",fontWeight:"bold"};function b(){return r.a.createElement("header",{style:g},r.a.createElement("h1",null,"Structural isomers calculator"),r.a.createElement(u.b,{style:v,to:"/react-mol-structures"},"Home")," ","|"," ",r.a.createElement(u.b,{style:v,to:"/react-mol-structures/about"},"About"))}var g={background:"#334",color:"#fff",textAlign:"center",padding:"10px"},v={color:"#fff",textDecoration:"none"},x=n(28);function y(e){var t=Object(a.useState)({input:""}),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setMF(c.input),o({input:""})},style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"input",style:{flex:"10",padding:"5px"},placeholder:"Enter a simple organic molecular formula ...",value:c.input,onChange:function(e){o(Object(x.a)({},e.target.name,e.target.value))}}),r.a.createElement("input",{type:"submit",value:"Submit",className:"button",style:{flex:"1"}}))}var w=n(33);function S(e){return r.a.createElement("div",{style:j},r.a.createElement("style",null,".mfTxtStyle {\n                font-weight: bold;\n                font-size: 20px;\n              }"),r.a.createElement(w.a,{className:"mfTxtStyle",mf:e.mf}))}var j={background:"#f4f4f4",padding:"10px",borderBottom:"1px solid #ccc ",textAlign:"center"},O=(n(61),n(17)),k=n.n(O),C=n(31);function A(){return(A=Object(C.a)(k.a.mark((function e(t){var n,a,r,c,o=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},a=n.maxResults,e.next=4,fetch("https://www.cheminfo.org/webservices/pmgJson?fields=idCode&mf=".concat(t),{headers:{"content-type":"application/x-www-form-urlencoded"},method:"GET"});case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c.slice(0,a));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("molecules"),m=Object(l.a)(o,2),p=m[0],d=m[1],h=Object(a.useState)([]),E=Object(l.a)(h,2),g=E[0],v=E[1];return Object(a.useEffect)((function(){n&&(d("loading"),function(e){return A.apply(this,arguments)}(n,d).then((function(e){v(e),d("molecules")})).catch((function(){return d("error")})))}),[n]),r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(i.a,{exact:!0,path:"/react-mol-structures",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{setMF:c}),r.a.createElement(S,{mf:n}),r.a.createElement(f,{content:p,idCodes:g}))}}),r.a.createElement(i.a,{path:"/react-mol-structures/about",component:s})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.ccecb2bc.chunk.js.map
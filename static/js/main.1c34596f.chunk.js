(this["webpackJsonponline-code-editor"]=this["webpackJsonponline-code-editor"]||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(7),i=n.n(o),s=(n(14),n(2)),r=n(9),l=n(8),u=(n(16),n(17),n(18),n(19),n(20),n(21),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),n=Object(s.a)(t,2),a=n[0],o=n[1],i=function(){o((function(e){return!e}))};return{isOpen:a,toggle:i}}),j=n(0),d=function(e){var t=e.displayName,n=e.language,c=e.value,a=e.onChange,o=u(!0),i=o.isOpen,s=o.toggle,d={lineWrapping:!0,lint:!0,mode:n,theme:"material",lineNumbers:!0},b=["editor-container"].concat(Object(r.a)(i?[]:["collapsed"])).join(" ");return Object(j.jsxs)("div",{className:b,children:[Object(j.jsxs)("div",{className:"editor-title",children:[t,Object(j.jsx)("button",{onClick:s,children:"O\\C"})]}),Object(j.jsx)(l.Controlled,{className:"code-mirror-wrapper",onBeforeChange:function(e,t,n){a(n)},value:c,options:d})]})},b=function(e,t){var n="online-code-editor-".concat(e),a=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),o=Object(s.a)(a,2),i=o[0],r=o[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,r]},g=(n(23),function(){var e=b("html",""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=b("css",""),i=Object(s.a)(o,2),r=i[0],l=i[1],u=b("js",""),g=Object(s.a)(u,2),p=g[0],O=g[1],f=Object(c.useState)(""),m=Object(s.a)(f,2),h=m[0],v=m[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){v("\n        <html>\n          <body>".concat(n,"</body>\n          <style>").concat(r,"</style>\n          <script>").concat(p,"<\/script>\n        </html>\n      "))}),250);return function(){clearTimeout(e)}}),[n,r,p]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"pane top-pane",children:[Object(j.jsx)(d,{language:"xml",displayName:"HTML",value:n,onChange:a}),Object(j.jsx)(d,{language:"css",displayName:"CSS",value:r,onChange:l}),Object(j.jsx)(d,{language:"javascript",displayName:"JS",value:p,onChange:O})]}),Object(j.jsx)("div",{className:"pane",children:Object(j.jsx)("iframe",{srcDoc:h,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[24,1,2]]]);
//# sourceMappingURL=main.1c34596f.chunk.js.map
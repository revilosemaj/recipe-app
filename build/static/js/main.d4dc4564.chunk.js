(this["webpackJsonpdog-search"]=this["webpackJsonpdog-search"]||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),i=c(15),r=c.n(i),o=c(29),j=c(10),b=c(5),d=c(86),l=c(87),u=c(88),h=c(85),p=c(84),O=c(89),x=c(83),g=c(90),m=c(80),f=c(25),w=c(91),v=c(33),S=c.n(v),y=c(32),k=c.n(y),I=c(14),C=c(58),N=c(81),E=c(82),L=c(31),R=c.n(L),A=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,height:"200px",width:"100%"}}})),T=function(e){var t=e.imgSrc,c=e.title,i=A(),r=Object(a.useState)(!1),o=Object(j.a)(r,2),b=o[0],d=o[1];return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)(N.a,{item:!0,xs:3,className:"shadow-drop-2-center",children:Object(n.jsxs)(C.a,{className:i.paper,children:[!b&&Object(n.jsx)(E.a,{style:{marginTop:"50px"},disableShrink:!0}),Object(n.jsx)("img",{src:t,alt:c,width:"100%",height:"100%",style:b?{display:"block"}:{display:"none"},onLoad:function(){return d(!0)}})]})})})},W=function(e){var t=A(),c=Object(a.useState)([]),s=Object(j.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(!1),b=Object(j.a)(o,2),d=b[0],l=b[1],u=Object(a.useState)(null),h=Object(j.a)(u,2),p=h[0],O=h[1],g=R.a.kebabCase(e.breed);return Object(a.useEffect)((function(){if(e.status){O(null),l(!1),r([]);fetch("https://dog.ceo/api/breed/"+g+"/images").then((function(e){return e.json()})).then((function(e){l(!0),"success"===e.status?r(Object(I.a)(e.message)):O(e)}),(function(e){l(!0),O(e)}))}}),[g,e.status]),p&&e.status?Object(n.jsx)(x.a,{maxWidth:!1,style:{textAlign:"center",marginTop:"50px"},children:Object(n.jsx)("p",{children:p.message})}):!d&&e.status?Object(n.jsx)(x.a,{maxWidth:!1,style:{textAlign:"center",marginTop:"50px"},children:Object(n.jsx)("p",{children:"Please wait while fetching . . . "})}):Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(N.a,{container:!0,spacing:1,children:Object(n.jsx)(N.a,{container:!0,item:!0,spacing:2,children:e.status&&i.map((function(e,t){return Object(n.jsx)(T,{imgSrc:e,title:g},t)}))})})})},B=Object(m.a)((function(e){return{inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",borderBottom:"2px solid #333"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(5),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})),D=function(e){var t=e.children,c=e.window,a=Object(p.a)({target:c?c():void 0});return Object(n.jsx)(g.a,{appear:!1,direction:"down",in:!a,children:t})},F=function(e){var t=B(),c=Object(a.useState)(""),i=Object(j.a)(c,2),r=i[0],b=i[1],p=Object(a.useState)(!1),g=Object(j.a)(p,2),m=g[0],f=g[1],v=Object(a.useState)(!1),y=Object(j.a)(v,2),I=y[0],C=y[1];return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(h.a,{}),Object(n.jsx)(D,Object(o.a)(Object(o.a)({},e),{},{children:Object(n.jsx)(d.a,{color:"default",children:Object(n.jsxs)(l.a,{children:[Object(n.jsxs)(u.a,{variant:"h6",children:[Object(n.jsx)(k.a,{})," Dog Search"]}),Object(n.jsx)("div",{className:t.search,children:Object(n.jsxs)("form",{onSubmit:function(e){C(!1),f(!1),f(r),C(!0),e.preventDefault()},children:[Object(n.jsx)("div",{className:t.searchIcon,children:Object(n.jsx)(S.a,{})}),Object(n.jsx)(w.a,{placeholder:"Enter breed...",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var t=e.target.value;b(t)},value:r})]})})]})})})),Object(n.jsx)(l.a,{}),Object(n.jsx)(x.a,{maxWidth:!1,children:Object(n.jsx)(O.a,{my:2,children:Object(n.jsx)(W,{breed:m,status:I})})})]})},J=(c(54),function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(F,{}),Object(n.jsx)(W,{})]})});r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.d4dc4564.chunk.js.map
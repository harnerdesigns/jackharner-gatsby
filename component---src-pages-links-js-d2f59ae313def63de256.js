"use strict";(self.webpackChunkjackharner_gatsby=self.webpackChunkjackharner_gatsby||[]).push([[793],{7648:function(e,t,a){var n=a(7294);a(7606);t.Z=function(e){var t=e.color,a=e.slim,r=e.wrapperHeight,i=e.svgWidth,l=e.numberPoints,o=void 0===l?15:l,c=e.style,s=(0,n.useRef)(),m=(0,n.useState)(""),u=m[0],f=m[1],h=(0,n.useState)(),d=h[0],p=h[1],g=(0,n.useState)(!1),v=g[0],E=g[1],b=(0,n.useState)(!1),y=b[0],w=b[1],k=(0,n.useState)({w:0,h:0}),x=k[0],N=k[1];(0,n.useEffect)((function(){var e,t=function(){E(!0)};if("complete"!==(null===(e=document)||void 0===e?void 0:e.readyState))return window.addEventListener("load",t),function(){return window.removeEventListener("load",t)};setTimeout((function(){t()}),100)}),[]),(0,n.useEffect)((function(){y||(f(Z(_(1))),p(Z(L(1))),w(!0))}),[y]);var L=function(){var e=[],t=o;N({w:1080,h:1080});for(var a=0;a<=t;a++)e.push({x:a*(1080/t),y:0});return e},_=function(){var e=[],t=o,a=1080;N({w:1080,h:a});for(var n=0;n<=t;n++){var r=a-(540*Math.random()+50);e.push({x:n*(1080/t),y:r})}return console.log({points:e}),e},Z=function(e){var t=1080;N({w:1080,h:t});var a="M "+e[0].x+" "+e[0].y,n=(e[1].x+e[0].x)/2,r=e[0].y,i={x:(e[1].x+e[0].x)/2,y:e[1].y};a+=" C "+n+" "+r+" "+i.x+" "+i.y+" "+e[1].x+" "+e[1].y;for(var l=1;l<e.length-1;l++){var o={x:(e[l+1].x+e[l].x)/2,y:e[l].y},c={x:(e[l+1].x+e[l].x)/2,y:e[l+1].y};a+=" C "+o.x+" "+o.y+" "+c.x+" "+c.y+" "+e[l+1].x+" "+e[l+1].y,o}return a+=" L 1080 "+t,a+=" L 0 1080 Z"};return n.createElement("div",{ref:s,id:"svgWrapper",className:a?"slim":"",style:Object.assign({},c,{height:r||""}),onClick:function(){E(!v)}},n.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 "+x.w+" "+x.h,style:{width:i||"",transition:"400ms"}},n.createElement("path",{id:"wave",d:v?u:d,fill:t,style:{transition:"all 1s cubic-bezier(0.190, 1.000, 0.220, 1.000)"}})))}},5232:function(e,t,a){var n=a(7294),r=a(7648);t.Z=function(e){var t=e.children,a=e.subtitle,i=void 0===a?"":a;return n.createElement("header",{className:"page-title slim pink"},n.createElement(r.Z,{color:"black",slim:!0}),n.createElement("h1",null,t),i&&n.createElement("h2",null,i))}},1652:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(7294),r=a(1082),i=a(4983),l=(a(4607),a(9618)),o=a(3557),c=function(e){e.siteTitle;return n.createElement(l.Z,{calcHeightOnResize:!0,upTolerance:50},n.createElement("header",{className:"main_head main_head--min"},n.createElement(r.Link,{to:"/",className:"logo"},n.createElement("img",{src:o.Z,alt:"Jack Harner Logo"}))))};c.defaultProps={siteTitle:""};var s=c,m=a(7606),u=a(3494),f=a(3847),h=a(4858),d=(a(4635),a(5285),a(9829),function(e){e.siteTitle;var t=e.footerCTA,a=void 0===t||t;return n.createElement("footer",{className:"slim main_footer"},a&&n.createElement(h.Z,null),n.createElement(g,null,n.createElement("section",{className:"copyright"},"© 2020 - 2022 Jack Harner |"," ",n.createElement("a",{href:"https://github.com/harnerdesigns/jackharner-gatsby"}," ","Built With Gatsby"))))});d.defaultProps={siteTitle:""};var p=d,g=u.default.div.withConfig({displayName:"footer-min__MenuGrid",componentId:"sc-1elrhc6-0"})(["display:grid;grid-template-columns:1fr;width:100%;@media ","{width:50%;}.main_nav{a{width:100%;}}"],f.A.laptopL),v=a(1421),E=function(e){var t=e.children,a=(e.footerCTA,{ImageGrid:v.Z});return n.createElement(i.Zo,{components:a},n.createElement("div",null,n.createElement(s,null),t,n.createElement(p,{footerCTA:!1})))},b=a(5232),y=a(1685),w=a.p+"static/quick-links-og-199f5343887752379619e6ab0313a510.png",k=function(e){e.data;return n.createElement(E,null,n.createElement(y.Z,{title:"Quick Links",image:w}),n.createElement(b.Z,null,"Quick Links"),n.createElement("section",{className:"slim black"},n.createElement(x,null,n.createElement(r.Link,{to:"/portfolio",className:"button button--large"},"See My Portfolio"),n.createElement(r.Link,{to:"/newsletter",className:"button button--large"},"Join My Newsletter"),n.createElement("a",{className:"button button--large",href:"https://livemusicforecast.com"},"Live Music Forecast"),n.createElement("a",{className:"button button--large",href:"https://whatsthatphobia.com"},"What's That Phobia?"))),n.createElement("section",{className:"socials socials--footer"},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/jackharner",className:"twitter"},n.createElement(m.G,{icon:["fab","twitter"]})),n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/jackharner",className:"instagram"},n.createElement(m.G,{icon:["fab","instagram"]}))))},x=u.default.div.withConfig({displayName:"links__LinksGrid",componentId:"sc-11qg30e-0"})(["width:100%;display:grid;grid-template-columns:1fr;grid-gap:2rem;max-width:900px;margin-bottom:2rem;.button{width:100%;}"])}}]);
//# sourceMappingURL=component---src-pages-links-js-d2f59ae313def63de256.js.map
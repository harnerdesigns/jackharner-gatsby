"use strict";(self.webpackChunkjackharner_gatsby=self.webpackChunkjackharner_gatsby||[]).push([[629],{7648:function(e,t,r){var a=r(7294);r(7814);t.Z=e=>{let{color:t,slim:r,wrapperHeight:n,svgWidth:l,numberPoints:i=15,style:c}=e;const o=(0,a.useRef)(),{0:s,1:m}=(0,a.useState)(""),{0:h,1:u}=(0,a.useState)(),{0:f,1:p}=(0,a.useState)(!1),{0:E,1:d}=(0,a.useState)(!1),{0:g,1:k}=(0,a.useState)({w:0,h:0});(0,a.useEffect)((()=>{var e;const t=()=>{p(!0)};if("complete"!==(null===(e=document)||void 0===e?void 0:e.readyState))return window.addEventListener("load",t),()=>window.removeEventListener("load",t);setTimeout((()=>{t()}),100)}),[]),(0,a.useEffect)((()=>{E||(m(y(v(1))),u(y(b(1))),d(!0))}),[E]);let b=()=>{var e=[],t=i;k({w:1080,h:1080});for(var r=0;r<=t;r++)e.push({x:r*(1080/t),y:0});return e},v=()=>{var e=[],t=i,r=1080;k({w:1080,h:r});for(var a=0;a<=t;a++){var n=r-(540*Math.random()+50);e.push({x:a*(1080/t),y:n})}return console.log({points:e}),e},y=e=>{var t=1080;k({w:1080,h:t});var r="M "+e[0].x+" "+e[0].y,a=(e[1].x+e[0].x)/2,n=e[0].y,l={x:(e[1].x+e[0].x)/2,y:e[1].y};r+=" C "+a+" "+n+" "+l.x+" "+l.y+" "+e[1].x+" "+e[1].y;for(var i=1;i<e.length-1;i++){var c={x:(e[i+1].x+e[i].x)/2,y:e[i].y},o={x:(e[i+1].x+e[i].x)/2,y:e[i+1].y};r+=" C "+c.x+" "+c.y+" "+o.x+" "+o.y+" "+e[i+1].x+" "+e[i+1].y,c}return r+=" L 1080 "+t,r+=" L 0 1080 Z"};return a.createElement("div",{ref:o,id:"svgWrapper",className:r?"slim":"",style:{...c,height:n||""},onClick:()=>{p(!f)}},a.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 "+g.w+" "+g.h,style:{width:l||"",transition:"400ms"}},a.createElement("path",{id:"wave",d:f?s:h,fill:t,style:{transition:"all 1s cubic-bezier(0.190, 1.000, 0.220, 1.000)"}})))}},9336:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(7294),n=r(3905),l=r(1883),i=(r(4607),r(1517)),c=r(4635),o=r(3557);const s=e=>{let{siteTitle:t}=e;return a.createElement(i.Z,{calcHeightOnResize:!0,upTolerance:50},a.createElement("header",{className:"main_head"},a.createElement(l.Link,{to:"/",className:"logo"},a.createElement("img",{src:o.Z,alt:"Jack Harner Logo"})),a.createElement(c.Z,null)))};s.defaultProps={siteTitle:""};var m=s,h=r(7814),u=r(2788),f=r(3847),p=r(4858);r(2961),r(9829);var E=e=>a.createElement(a.Fragment,null,a.createElement("nav",{className:"footer-nav"},a.createElement(d,{title:"Services",links:[{link:"/services/shopify",text:"Shopify",icon:["fab","shopify"]},{link:"/services/bigcommerce",text:"BigCommerce",icon:"shopping-cart"}]}),a.createElement(d,{title:"Projects",links:[{link:"/portfolio/",text:"All Projects",extraSettings:{partiallyActive:!1}},{link:"/portfolio/tags/e-commerce/",text:"E-Commerce",icon:"shopping-cart"},{link:"/portfolio/tags/wordpress/",text:"WordPress",icon:["fab","wordpress"]},{link:"/portfolio/tags/shopify/",text:"Shopify",icon:["fab","shopify"]}]}),a.createElement(d,{title:"Blog",links:[{link:"/blog/",text:"All Posts",extraSettings:{partiallyActive:!1}},{link:"/blog/tags/freelance/",text:"Freelance",icon:"bacon"},{link:"/blog/tags/wordpress/",text:"WordPress",icon:["fab","wordpress"]},{link:"/blog/tags/shopify/",text:"Shopify",icon:["fab","shopify"]},{link:"/blog/tags/big-commerce/",text:"BigCommerce",icon:"shopping-cart"}]}),a.createElement(d,{title:"Why Me?",links:[{link:"/why-me/",text:"I'll Tell You Why"},{link:"/testimonials/",text:"Testimonials"},{link:"/hire-me",text:"Hire Me"}]}),a.createElement(d,{title:"Other",links:[{link:"/newsletter",text:"Newsletter"},{link:"/affiliate",text:"Affiliate Links"},{link:"/uses",text:"Tools I Use"},{link:"/links",text:"Quick Links"}]})));const d=e=>{let{title:t,links:r}=e,n=r.map(((e,t)=>a.createElement(l.Link,Object.assign({},e.extraSettings,{key:t,to:e.link}),e.icon&&a.createElement(h.G,{icon:e.icon}),e.text)));return a.createElement("div",{className:"nav-footersubmenu__wrapper"},a.createElement("h4",null,t),r&&n&&a.createElement("div",{className:"nav-footersubmenu"},n))},g=e=>{let{siteTitle:t,footerCTA:r=!0}=e;return a.createElement("footer",{className:"slim main_footer"},r&&a.createElement(p.Z,null),a.createElement(b,null,a.createElement(E,null),a.createElement("section",{className:"socials socials--footer"},a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/jackharner",className:"twitter"},a.createElement(h.G,{icon:["fab","twitter"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://patreon.com/jackharner",className:"patreon"},a.createElement(h.G,{icon:["fab","patreon"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/jackharner",className:"instagram"},a.createElement(h.G,{icon:["fab","instagram"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/jackharner",className:"dribbble"},a.createElement(h.G,{icon:["fab","dribbble"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dev.to/jackharner",className:"devto"},a.createElement(h.G,{icon:["fab","dev"]})," "),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/harnerdesigns",className:"github"},a.createElement(h.G,{icon:["fab","github"]})," "),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.producthunt.com/@jackharner",className:"producthunt"},a.createElement(h.G,{icon:["fab","product-hunt"]}))),a.createElement("section",{className:"copyright"},"© 2015 - 2023 Jack Harner |"," ",a.createElement("a",{href:"https://github.com/harnerdesigns/jackharner-gatsby"}," ","Built With Gatsby"),a.createElement("br",null),"Denver, CO Freelance Web Developer & E-Commerce Consultant")))};g.defaultProps={siteTitle:""};var k=g;const b=u.default.div.withConfig({displayName:"footer__MenuGrid",componentId:"sc-16gro0t-0"})(["display:grid;grid-template-columns:1fr;width:100%;@media ","{width:50%;}.main_nav{a{width:100%;}}"],f.A.laptopL);var v=r(1421);var y=e=>{let{children:t,footerCTA:r,className:i}=e;const c=(0,l.useStaticQuery)("3649515864"),o={ImageGrid:v.Z};return a.createElement(n.Zo,{components:o},a.createElement("div",{className:i},a.createElement(m,{siteTitle:c.site.siteMetadata.title}),t,a.createElement(k,{footerCTA:r})))}},5232:function(e,t,r){var a=r(7294),n=r(7648);t.Z=e=>{let{children:t,subtitle:r=""}=e;return a.createElement("header",{className:"page-title slim pink"},a.createElement(n.Z,{color:"black",slim:!0}),a.createElement("h1",null,t),r&&a.createElement("h2",null,r))}},1861:function(e,t,r){var a=r(1883),n=r(7294);t.Z=()=>n.createElement("section",{className:"ready-to-go__wrapper half white grid grid--2 content--centered"},n.createElement("div",{className:"ready-to-go__block"},n.createElement(a.Link,{to:"/hire-me"}),n.createElement("h2",null,"Ready to go?"),n.createElement("h3",null,"« Let's Chat")),n.createElement("div",{className:"ready-to-go__block"},n.createElement(a.Link,{to:"/contact"}),n.createElement("h2",null,"Still Not Convinced?"),n.createElement("h3",null,"Let's Chat Anyway »")))},1113:function(e,t,r){r.r(t);var a=r(7294),n=r(1883),l=r(9336),i=r(5232),c=r(1293),o=r(1861);t.default=()=>a.createElement(l.Z,{footerCTA:!1,className:"service"},a.createElement(c.Z,{title:"Web Development & E-Commerce Services"}),a.createElement(i.Z,null,"Web Development & E-Commerce Services"),a.createElement("section",{className:"slim black content--centered"},a.createElement("div",{className:"grid",style:{alignItems:"center",justifyContent:"center"}},a.createElement("div",null,a.createElement("h2",null,"Need an extra hand with your E-Commerce Agency?"),a.createElement("h3",null,"Drop me in with your existing clients today! ",a.createElement(n.Link,{to:"/hire-me"},"Let's Chat »"))))),a.createElement(o.Z,null))}}]);
//# sourceMappingURL=component---src-pages-services-index-js-37cd7cf16d064d8f2a80.js.map
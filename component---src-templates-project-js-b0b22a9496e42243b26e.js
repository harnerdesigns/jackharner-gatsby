(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{GhMY:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _})),a.d(t,"pageQuery",(function(){return E}));var r=a("q1tI"),n=a.n(r),l=a("Bl7J"),o=a("vrFN"),c=a("IG+a"),i=a("LvDl"),s=a.n(i),m=a("Wbzz"),f=a("IP2g"),p=function(e){var t,a,r=e.post;e.index,e.small,e.nolink;return r.frontmatter.tags&&(t=r.frontmatter.tags.filter((function(e,t){return t<3})),a=n.a.createElement("div",{className:"tags"},n.a.createElement(f.a,{icon:"tag"})," ",t.map((function(e,a){var l="/portfolio/tags/"+s.a.kebabCase(e)+"/";return n.a.createElement(m.Link,{to:l},e,a<t.length-1?", ":t.length<r.frontmatter.tags.length?", + "+(r.frontmatter.tags.length-t.length):"")})))),n.a.createElement("header",{className:"project__header project--"+s.a.camelCase(r.frontmatter.title)+" "+(r.frontmatter.logo?"project__header--logo":"project__header--no-logo"),style:{background:r.frontmatter.color}},r.frontmatter.logo&&n.a.createElement("div",{className:"logo__wrapper"},n.a.createElement("img",{src:r.frontmatter.logo.publicURL,className:"logo",alt:r.frontmatter.title})),n.a.createElement("div",{className:"header__titles"},n.a.createElement(m.Link,{to:r.fields.slug},n.a.createElement("h2",{className:"project__title"},r.frontmatter.title)),null!=r.frontmatter.description?n.a.createElement("h4",{className:"project__description"},r.frontmatter.description):"",a))};p.defaultProps={post:{}};var d=p,g=a("iGL9"),u=a("m1xK"),h=a.n(u),b=a("tZYZ");function _(e){var t=e.data.markdownRemark,a=e.pageContext.related;return n.a.createElement(l.a,null,n.a.createElement(o.a,{title:t.frontmatter.title+" » "+t.frontmatter.description,description:t.frontmatter.title+" - "+t.frontmatter.description+" By Jack Harner.",image:t.frontmatter.logo?t.frontmatter.logo.publicURL:h.a}),n.a.createElement(d,{post:t}),t.fields.externalLink.includes("codepen")&&n.a.createElement("section",{className:"full black"},n.a.createElement("p",{className:"codepen","data-height":"100%","data-theme-id":"17675","data-default-tab":"result","data-user":"jackharner","data-slug-hash":"jPmKGe",style:{height:"100vh",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:" center",border:"2px solid",margin:" 1em 0",padding:"1em"},"data-pen-title":"OS X"},n.a.createElement("span",null,"See the Pen"," ",n.a.createElement("a",{href:"https://codepen.io/jackharner/pen/jPmKGe"},"OS X")," ","by Jack Harner (",n.a.createElement("a",{href:"https://codepen.io/jackharner"},"@jackharner"),") on"," ",n.a.createElement("a",{href:"https://codepen.io"},"CodePen"),"."))),n.a.createElement("section",{className:"half black"},n.a.createElement("main",{className:t.frontmatter.images&&t.frontmatter.images.length>0?"project__body":"project__body project__body--no-images"},t.frontmatter.images&&t.frontmatter.images.length>0?n.a.createElement("section",{className:"project__images"},t.frontmatter.images.map((function(e,t){return e?n.a.createElement(b.a,null,n.a.createElement("img",{src:e.childImageSharp.sizes.src,alt:""})):""}))):"",n.a.createElement("section",{className:"project__content"},t.fields.externalLink&&t.wordCount.words>100&&n.a.createElement(g.a,{label:t.fields.externalLinkLabel,href:t.fields.externalLink,size:"large"}),t.html&&n.a.createElement("div",{className:"project__text",dangerouslySetInnerHTML:{__html:t.html}}),t.fields.externalLink&&n.a.createElement(g.a,{label:t.fields.externalLinkLabel,href:t.fields.externalLink,size:"large"}))),n.a.createElement("nav",{className:"projectNavigation"},n.a.createElement("h3",null,"Related Projects"),n.a.createElement("ul",null,a.map((function(e,t){return n.a.createElement("li",null,n.a.createElement(c.a,{post:e,small:!0}))}))))))}var E="1138914832"},"IG+a":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("LvDl"),o=a.n(l),c=a("YF7I"),i=a("Wbzz"),s=a("IP2g"),m=function(e){var t=e.post,a=e.index,r=e.small,l=e.nolink;return n.a.createElement(i.Link,{to:l?"":t.fields.slug,className:"project__link project__link--"+a,"data-color":t.frontmatter.color,style:{background:t.frontmatter.color}},n.a.createElement("article",{className:"project__card project--"+o.a.camelCase(t.frontmatter.title)+(r?" project__card--small":"")},n.a.createElement("div",{className:"logo__wrapper"},t.frontmatter.logo&&n.a.createElement("img",{src:t.frontmatter.logo.publicURL,className:"logo",alt:t.frontmatter.title}),!t.frontmatter.logo&&n.a.createElement("h2",{className:"project__title"},t.frontmatter.title)),n.a.createElement("div",{className:"card__titles"},t.frontmatter.description&&n.a.createElement("h4",{className:"project__description"},t.frontmatter.description)),n.a.createElement("ul",{className:"project__tags"},t.frontmatter.tags.map((function(e,t){return n.a.createElement("li",{title:e},n.a.createElement(s.a,{fixedWidth:!0,icon:c.a[e]}),n.a.createElement("span",null,e))})))))};m.defaultProps={post:{}},t.a=m},YF7I:function(e,t,a){"use strict";t.a={Git:["fab","git-alt"],BigCommerce:"shopping-cart",Node:["fab","node-js"],HTML:["fab","html5"],Firefox:["fab","firefox-browser"],WordPress:["fab","wordpress"],React:["fab","react"],Twitter:["fab","twitter"],"Raspberry Pi":["fab","raspberry-pi"],Linux:["fab","linux"],"#DevDiscuss":["fab","dev"],JavaScript:["fab","js"],"Build Log":"tools",Automation:"cogs",Tutorial:"lightbulb","Open Source":"folder-open",Gatsby:"glass-martini-alt",PHP:["fab","php"],CSS:["fab","css3-alt"],CodePen:["fab","codepen"],Markdown:["fab","markdown"],Netlify:"project-diagram",AJAX:"cloud-download-alt","Life Hacks":"hammer","Material Design":"palette",Webpack:"box",Photography:"camera",Animation:"circle-notch",History:"calendar",Newsletter:"envelope",Python:["fab","python"],Shopify:["fab","shopify"],"E-Commerce":"shopping-bag","Code Snippets":"code",Writing:"pencil-alt","Non Profit":"tree",Cannabis:"cannabis",Career:"user-astronaut"}}}]);
//# sourceMappingURL=component---src-templates-project-js-b0b22a9496e42243b26e.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"5APo":function(e,t,a){"use strict";a.r(t),a.d(t,"tagPageQuery",(function(){return d}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),i=a("Wbzz"),l=a("Bl7J"),s=a("jk9A"),c=a("vrFN"),f=a("IP2g"),m=a("YF7I"),p=a("LvDl"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext.topTags,a=Object.keys(t).sort((function(e,a){return t[e]<t[a]}));return console.log(a),o.a.createElement(l.a,null,o.a.createElement("section",{className:"section"},o.a.createElement(c.a,{title:"Blog Tags"}),o.a.createElement(s.a,null,"Blog Tags"),o.a.createElement("main",{className:"page_body page_body--grid"},o.a.createElement("div",{className:"tag-grid"},a.map((function(a,r){var n="/blog/tags/"+p.kebabCase(a)+"/";return o.a.createElement(i.Link,{to:n,className:"tag__card"},o.a.createElement("h3",null,o.a.createElement(f.a,{fixedWidth:!0,icon:m.a[a]}),a)," ",o.a.createElement("h4",null,t[a]," Post",t[a]>1?"s":""),o.a.createElement("div",{className:"tag__post-preview"},e.filter((function(e){var t=e.node;return!!t.frontmatter.tags&&t.frontmatter.tags.includes(a)})).map((function(e,t){var a=e.node;return t<4?o.a.createElement("img",{src:a.frontmatter.featuredImage.childImageSharp.resize.src,alt:a.frontmatter.title+" | "+a.frontmatter.subtitle,title:a.frontmatter.title+" | "+a.frontmatter.subtitle}):""}))))}))))))},t}(o.a.Component);t.default=u;var d="3970401000"},YF7I:function(e,t,a){"use strict";t.a={Git:["fab","git-alt"],BigCommerce:"shopping-cart",Node:["fab","node-js"],HTML:["fab","html5"],Firefox:["fab","firefox-browser"],WordPress:["fab","wordpress"],React:["fab","react"],Twitter:["fab","twitter"],"Raspberry Pi":["fab","raspberry-pi"],Linux:["fab","linux"],"#DevDiscuss":["fab","dev"],JavaScript:["fab","js"],"Build Log":"tools",Automation:"cogs",Tutorial:"lightbulb","Open Source":"folder-open",Gatsby:"glass-martini-alt",PHP:["fab","php"],CSS:["fab","css3-alt"],CodePen:["fab","codepen"],Markdown:["fab","markdown"],Netlify:"project-diagram",AJAX:"cloud-download-alt","Life Hacks":"hammer","Material Design":"palette",Webpack:"box",Photography:"camera",Animation:"circle-notch",History:"calendar",Newsletter:"envelope",Python:["fab","python"],Shopify:["fab","shopify"],"E-Commerce":"shopping-bag","Code Snippets":"code",Writing:"pencil-alt","Non Profit":"tree",Cannabis:"cannabis",Career:"user-astronaut"}},jk9A:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=function(e){var t=e.children,a=e.subtitle,r=void 0===a?"":a;return n.a.createElement("header",{className:"page-title"},n.a.createElement("h1",null,t),r&&n.a.createElement("h2",null,r))}}}]);
//# sourceMappingURL=component---src-templates-tags-blog-tags-js-e2574a4a4b1f2ba82766.js.map
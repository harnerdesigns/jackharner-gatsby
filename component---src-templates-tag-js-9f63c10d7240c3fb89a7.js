"use strict";(self.webpackChunkjackharner_gatsby=self.webpackChunkjackharner_gatsby||[]).push([[969],{8681:function(e,t,l){var a=l(7294),n=l(1883),r=l(8482),o=l(7814);const s=l(6486);t.Z=e=>{let{topTags:t=[],postType:l=null,back:c=!1,exclude:i=null,limit:p=6}=e;const m="portfolio"===l?{single:"Project",plural:"Projects",type:"Project"}:{single:"Blog",plural:"Blog",type:"Blog"};return null!=i&&t.indexOf(i)>-1&&t.splice(t.indexOf(i),1),a.createElement("div",{className:"top-tags"},a.createElement("ul",null,c&&a.createElement("li",{className:"more-tags"},a.createElement(n.Link,{to:"/"+l,style:{margin:"0 auto 0 0.5em"}},a.createElement(o.G,{fixedWidth:!0,icon:"arrow-left"}),"Back to ",m.plural)),t&&t.map(((e,t)=>{const c="WordPress"===e?"/"+l+"/tags/wordpress/":"/"+l+"/tags/"+s.kebabCase(e)+"/";return t<p&&e!==i?a.createElement("li",{className:"top-tag",key:t},a.createElement(n.Link,{to:c},a.createElement(o.G,{fixedWidth:!0,icon:r.Z[e]}),e)):null})),a.createElement("li",{className:"more-tags"},a.createElement(n.Link,{to:"/"+l+"/tags"},a.createElement(o.G,{fixedWidth:!0,icon:"ellipsis-h"}),m.single," Tags"))))}},5232:function(e,t,l){var a=l(7294),n=l(7648);t.Z=e=>{let{children:t,subtitle:l=""}=e;return a.createElement("header",{className:"page-title slim pink"},a.createElement(n.Z,{color:"black",slim:!0}),a.createElement("h1",null,t),l&&a.createElement("h2",null,l))}},3450:function(e,t,l){l.r(t);var a=l(4578),n=l(7294),r=l(9336),o=l(4943),s=l(5232),c=l(6275),i=l(8681),p=l(1293);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){const e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext.tag,l=this.props.data.allMarkdownRemark.totalCount,a=this.props.pageContext.postType,m="portfolio"===a?{single:"Project",plural:"Projects",type:"Project"}:{single:"Blog Post",plural:"Blog Posts",type:"Blog"};let u=this.props.pageContext.topTags;u=Object.keys(u).sort((function(e,t){return u[e]<u[t]}));const g=n.createElement(n.Fragment,null,l," ",1===l?m.single:m.plural," Tagged ",t);return n.createElement(r.Z,null,n.createElement(p.Z,{title:t+" "+m.plural}),n.createElement(s.Z,null,g),n.createElement("section",{className:"slim black"},n.createElement(i.Z,{topTags:u,postType:a,back:!0,exclude:t,limit:5})),n.createElement("main",{className:"page_body page_body--grid"},n.createElement("div",{className:"blog"===a?"blog-posts":"projects"},e.filter((e=>e.node.frontmatter.title.length>0)).map(((e,t)=>{let{node:l}=e,r="portfolio"===a?n.createElement(c.Z,{post:l,index:t}):n.createElement(n.Fragment,null,n.createElement(o.Z,{post:l,index:t}));return n.createElement(n.Fragment,null,r)})))))},t}(n.Component);t.default=m}}]);
//# sourceMappingURL=component---src-templates-tag-js-9f63c10d7240c3fb89a7.js.map
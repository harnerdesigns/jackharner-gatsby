(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"IG+a":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("LvDl"),o=a.n(l),s=a("Wbzz"),c=function(e){var t=e.post,a=e.index,r=e.small,l=e.nolink;return n.a.createElement(s.Link,{to:l?"":t.fields.slug,className:"project__link project__link--"+a,"data-color":t.frontmatter.color,style:{background:t.frontmatter.color}},n.a.createElement("article",{className:"project__card project--"+o.a.camelCase(t.frontmatter.title)+(r?" project__card--small":"")},t.frontmatter.logo&&n.a.createElement("div",{className:"logo__wrapper"},n.a.createElement("img",{src:t.frontmatter.logo.publicURL,className:"logo",alt:t.frontmatter.title})),n.a.createElement("div",{className:"card__titles"},n.a.createElement("h2",{className:"project__title"},t.frontmatter.title),null!=t.frontmatter.description?n.a.createElement("h4",{className:"project__description"},t.frontmatter.description):"",n.a.createElement("ul",{className:"project__tags"},t.frontmatter.tags.map((function(e,t){return n.a.createElement("li",null,e)}))))))};c.defaultProps={post:{}},t.a=c},ccoC:function(e,t,a){"use strict";a.r(t),a.d(t,"tagPageQuery",(function(){return f}));var r=a("dI71"),n=a("q1tI"),l=a.n(n),o=a("TJpk"),s=a.n(o),c=a("Bl7J"),i=a("vSrt"),p=a("jk9A"),m=a("IG+a"),u=a("FoF7"),d=a("FfTN"),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext.tag,a=this.props.data.site.siteMetadata.title,r=this.props.data.allMarkdownRemark.totalCount,n=this.props.pageContext.postType,o="portfolio"===n?{single:"Project",plural:"Projects",type:"Project"}:{single:"Blog Post",plural:"Blog Posts",type:"Blog"},g=this.props.pageContext.topTags;g=Object.keys(g).sort((function(e,t){return g[e]<g[t]}));var f=r+" "+t+" "+(1===r?o.single:o.plural);return l.a.createElement(c.a,null,l.a.createElement("section",{className:"section"},l.a.createElement(s.a,{title:t+" "+o.plural+" | "+a}),l.a.createElement(p.a,null,f),l.a.createElement("main",{className:"page_body page_body--grid"},l.a.createElement(u.a,{topTags:g,postType:n,back:!0,exclude:t}),l.a.createElement("div",{className:"blog-posts"},e.filter((function(e){return e.node.frontmatter.title.length>0})).map((function(e,t){var a,r=e.node;(t+1)%6==0&&(a=l.a.createElement(d.a,{index:(t+1)/6}));var o="portfolio"===n?l.a.createElement(m.a,{post:r,index:t}):l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{post:r,index:t,large:(t+1)%5==0||0===t}),a);return l.a.createElement(l.a.Fragment,null,o)}))))))},t}(l.a.Component);t.default=g;var f="3348856353"}}]);
//# sourceMappingURL=component---src-templates-tag-js-64149460bdd7838fdc8c.js.map
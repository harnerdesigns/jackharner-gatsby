(self.webpackChunkjackharner_gatsby=self.webpackChunkjackharner_gatsby||[]).push([[611],{5489:function(e,t,r){"use strict";var a=r(7294);r(7606);t.Z=function(e){var t=e.color,r=e.slim,n=e.wrapperHeight,o=e.svgWidth,c=e.numberPoints,u=void 0===c?15:c,f=e.style,i=(0,a.useRef)(),l=(0,a.useState)(""),s=l[0],d=l[1],m=(0,a.useState)(!1),p=m[0],h=m[1],x=(0,a.useState)({w:0,h:0}),b=x[0],g=x[1];(0,a.useEffect)((function(){p||(d(E(v(1))),h(!0))}),[p]);var v=function(){var e=[],t=u,r=1080;g({w:1080,h:r});for(var a=0;a<=t;a++){var n=r-(540*Math.random()+50);e.push({x:a*(1080/t),y:n})}return console.log({points:e}),e},E=function(e){var t=1080;g({w:1080,h:t});var r="M "+e[0].x+" "+e[0].y,a=(e[1].x+e[0].x)/2,n=e[0].y,o={x:(e[1].x+e[0].x)/2,y:e[1].y};r+=" C "+a+" "+n+" "+o.x+" "+o.y+" "+e[1].x+" "+e[1].y;for(var c=1;c<e.length-1;c++){var u={x:(e[c+1].x+e[c].x)/2,y:e[c].y},f={x:(e[c+1].x+e[c].x)/2,y:e[c+1].y};r+=" C "+u.x+" "+u.y+" "+f.x+" "+f.y+" "+e[c+1].x+" "+e[c+1].y,u}return r+=" L 1080 1080",r+=" L 0 1080 Z"};return a.createElement("div",{ref:i,id:"svgWrapper",className:r?"slim":"",style:Object.assign({},f,{height:n||""})},a.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 "+b.w+" "+b.h,style:{width:o||""}},a.createElement("path",{id:"wave",d:s,fill:t})))}},4733:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(7294),n=r(4983),o=r(5444),c=(r(6491),r(9618)),u=r(4658),f=r(3557),i=function(e){e.siteTitle;return a.createElement(c.Z,{calcHeightOnResize:!0,upTolerance:50},a.createElement("header",{className:"main_head"},a.createElement(o.Link,{to:"/",className:"logo"},a.createElement("img",{src:f.Z,alt:"Jack Harner Logo"})),a.createElement(u.Z,null)))};i.defaultProps={siteTitle:""};var l=i,s=r(7606),d=r(9692),m=r(690),p=r(2732),h=r(134),x=function(e){e.siteTitle;var t=e.footerCTA,r=void 0===t||t;return a.createElement("footer",{className:"slim main_footer"},r&&a.createElement(p.Z,null),a.createElement(g,null,a.createElement(u.Z,null),a.createElement(h.Z,null),a.createElement("section",{className:"socials socials--footer"},a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/jackharner",className:"twitter"},a.createElement(s.G,{icon:["fab","twitter"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://patreon.com/jackharner",className:"patreon"},a.createElement(s.G,{icon:["fab","patreon"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/jackharner",className:"instagram"},a.createElement(s.G,{icon:["fab","instagram"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/jackharner",className:"dribbble"},a.createElement(s.G,{icon:["fab","dribbble"]})),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dev.to/jackharner",className:"devto"},a.createElement(s.G,{icon:["fab","dev"]})," "),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/harnerdesigns",className:"github"},a.createElement(s.G,{icon:["fab","github"]})," "),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.producthunt.com/@jackharner",className:"producthunt"},a.createElement(s.G,{icon:["fab","product-hunt"]}))),a.createElement("section",{className:"copyright"},"© 2020 - 2022 Jack Harner |"," ",a.createElement("a",{href:"https://github.com/harnerdesigns/jackharner-gatsby"}," ","Built With Gatsby"))))};x.defaultProps={siteTitle:""};var b=x,g=d.default.div.withConfig({displayName:"footer__MenuGrid",componentId:"sc-16gro0t-0"})(["display:grid;grid-template-columns:1fr;width:100%;@media ","{width:50%;}.main_nav{a{width:100%;}}"],m.A.laptopL),v=r(1500),E=r(1431),y=function(e){var t=e.children,r=e.footerCTA,c=(0,o.useStaticQuery)("3649515864"),u={ImageGrid:E.Z};return a.createElement(n.Zo,{components:u},a.createElement(v.ZP,null,a.createElement("div",null,a.createElement(l,{siteTitle:c.site.siteMetadata.title}),t,a.createElement(b,{footerCTA:r}))))}},6987:function(e,t,r){"use strict";var a=r(8929),n=r.n(a),o=r(7294),c=r(7943),u=r(5444),f=r(7606),i=function(e){var t=e.post,r=e.index,a=e.small,i=e.nolink;return o.createElement(u.Link,{to:i?"":t.fields.slug,className:"project__link project__link--"+r,"data-color":t.frontmatter.color,style:{background:t.frontmatter.color}},o.createElement("article",{className:"project__card project--"+n()(t.frontmatter.title)+(a?" project__card--small":"")},o.createElement("div",{className:"logo__wrapper"},t.frontmatter.logo&&o.createElement("img",{src:t.frontmatter.logo.publicURL,className:"logo",alt:t.frontmatter.title}),!t.frontmatter.logo&&o.createElement("h2",{className:"project__title"},t.frontmatter.title)),o.createElement("div",{className:"card__titles"},t.frontmatter.description&&o.createElement("h4",{className:"project__description"},t.frontmatter.description)),o.createElement("ul",{className:"project__tags"},t.frontmatter.tags.map((function(e,t){return t<3?o.createElement("li",{title:e},o.createElement(f.G,{fixedWidth:!0,icon:c.Z[e]}),o.createElement("span",null,e)):""})))))};i.defaultProps={post:{}},t.Z=i},7943:function(e,t){"use strict";t.Z={Git:["fab","git-alt"],BigCommerce:"shopping-cart",Node:["fab","node-js"],HTML:["fab","html5"],Firefox:["fab","firefox-browser"],WordPress:["fab","wordpress"],React:["fab","react"],Twitter:["fab","twitter"],"Raspberry Pi":["fab","raspberry-pi"],Linux:["fab","linux"],"#DevDiscuss":["fab","dev"],JavaScript:["fab","js"],"Build Log":"tools",Automation:"cogs",Tutorial:"lightbulb","Open Source":"folder-open",Gatsby:"glass-martini-alt",PHP:["fab","php"],CSS:["fab","css3-alt"],CodePen:["fab","codepen"],Markdown:["fab","markdown"],Netlify:"project-diagram",AJAX:"cloud-download-alt","Life Hacks":"hammer","Material Design":"palette",Webpack:"box",Photography:"camera",Animation:"circle-notch",History:"calendar",Newsletter:"envelope",Python:["fab","python"],Shopify:["fab","shopify"],"E-Commerce":"shopping-bag","Code Snippets":"code",Writing:"pencil-alt","Non Profit":"tree",Cannabis:"cannabis",Career:"user-astronaut",Freelance:"bacon",DigitalOcean:["fab","digital-ocean"]}},2663:function(e){e.exports=function(e,t,r,a){var n=-1,o=null==e?0:e.length;for(a&&o&&(r=e[++n]);++n<o;)r=t(r,e[n],n,e);return r}},4286:function(e){e.exports=function(e){return e.split("")}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},4259:function(e){e.exports=function(e,t,r){var a=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(r=r>n?n:r)<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(n);++a<n;)o[a]=e[a+t];return o}},180:function(e,t,r){var a=r(4259);e.exports=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:a(e,t,r)}},8882:function(e,t,r){var a=r(180),n=r(2689),o=r(3140),c=r(9833);e.exports=function(e){return function(t){t=c(t);var r=n(t)?o(t):void 0,u=r?r[0]:t.charAt(0),f=r?a(r,1).join(""):t.slice(1);return u[e]()+f}}},5393:function(e,t,r){var a=r(2663),n=r(3816),o=r(8748),c=RegExp("['’]","g");e.exports=function(e){return function(t){return a(o(n(t).replace(c,"")),e,"")}}},9389:function(e,t,r){var a=r(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},2689:function(e){var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},7215:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},3140:function(e,t,r){var a=r(4286),n=r(2689),o=r(676);e.exports=function(e){return n(e)?o(e):a(e)}},676:function(e){var t="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",n="[^\\ud800-\\udfff]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+a+")"+"?",f="[\\ufe0e\\ufe0f]?",i=f+u+("(?:\\u200d(?:"+[n,o,c].join("|")+")"+f+u+")*"),l="(?:"+[n+r+"?",r,o,c,t].join("|")+")",s=RegExp(a+"(?="+a+")|"+l+i,"g");e.exports=function(e){return e.match(s)||[]}},2757:function(e){var t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",c="\\d+",u="[\\u2700-\\u27bf]",f="["+r+"]",i="[^\\ud800-\\udfff"+n+c+t+r+a+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+a+"]",m="(?:"+f+"|"+i+")",p="(?:"+d+"|"+i+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",v=g+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,s].join("|")+")"+g+b+")*"),E="(?:"+[u,l,s].join("|")+")"+v,y=RegExp([d+"?"+f+"+"+h+"(?="+[o,d,"$"].join("|")+")",p+"+"+x+"(?="+[o,d+m,"$"].join("|")+")",d+"?"+m+"+"+h,d+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",c,E].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},8929:function(e,t,r){var a=r(8403),n=r(5393)((function(e,t,r){return t=t.toLowerCase(),e+(r?a(t):t)}));e.exports=n},8403:function(e,t,r){var a=r(9833),n=r(1700);e.exports=function(e){return n(a(e).toLowerCase())}},3816:function(e,t,r){var a=r(9389),n=r(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,c=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=n(e))&&e.replace(o,a).replace(c,"")}},1700:function(e,t,r){var a=r(8882)("toUpperCase");e.exports=a},8748:function(e,t,r){var a=r(9029),n=r(7215),o=r(9833),c=r(2757);e.exports=function(e,t,r){return e=o(e),void 0===(t=r?void 0:t)?n(e)?c(e):a(e):e.match(t)||[]}}}]);
//# sourceMappingURL=99f7df88b20b4960c5eb4155111e0ac1991626da-6d6cde058873b28dd77d.js.map
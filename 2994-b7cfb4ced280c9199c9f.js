"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[2994],{55713:function(e,a,n){var t=n(24994);a.A=void 0;var r=t(n(96540)),d=t(n(5556)),l=t(n(67967)),i=t(n(25642)),o=l.default.bind(i.default),m={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},s=function(e){var a=e.src,n=e.name,t=e.url,d=e.version,l=r.default.createElement("a",{className:o("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(d)},r.default.createElement("span",{className:o("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(d))),i=a?r.default.createElement("a",{className:o("badge"),href:a},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},l,i)};s.propTypes=m;a.A=s},82994:function(e,a,n){n.r(a),n.d(a,{default:function(){return s}});var t=n(58168),r=n(53986),d=(n(96540),n(36665)),l=n(50848),i=["components"],o={},m="wrapper";function s(e){var a=e.components,n=(0,r.A)(e,i);return(0,d.mdx)(m,(0,t.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(l.E,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"package-json-lint-rules"},"Package JSON Lint Rules"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Rule Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Severity Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"require-dependencies-declared-at-appropriate-level")),(0,d.mdx)("td",{parentName:"tr",align:null},"warn"),(0,d.mdx)("td",{parentName:"tr",align:null},"Notifies when there are dependencies declared at an inappropriate level. For example babel compilers and webpack should be devDependencies and not regular dependencies. Doesn't apply for devModule.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"require-no-hard-coded-dependency-versions")),(0,d.mdx)("td",{parentName:"tr",align:null},"error"),(0,d.mdx)("td",{parentName:"tr",align:null},"Prevents hard-coded dependencies from being specified in the package.json. Only applies for module and devModule.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"require-no-terra-base-peer-dependency-versions")),(0,d.mdx)("td",{parentName:"tr",align:null},"warn"),(0,d.mdx)("td",{parentName:"tr",align:null},"Notifies when using terra packages that require terra-base as a peerDependency.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"require-theme-context-versions")),(0,d.mdx)("td",{parentName:"tr",align:null},"warn"),(0,d.mdx)("td",{parentName:"tr",align:null},"Notifies when using terra packages that don't use terra-theme-context as a dependency.")))))}s.isMDXComponent=!0},50848:function(e,a,n){n.d(a,{E:function(){return d}});var t=n(96540),r=n(55713),d=function(e){var a=e.url;return t.createElement(r.A,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/package-json-lint",name:"@cerner/package-json-lint",version:"2.2.0",url:a})}},25642:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,a,n){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(null,arguments)}n.d(a,{A:function(){return t}})},53986:function(e,a,n){function t(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(a,{A:function(){return t}})}}]);
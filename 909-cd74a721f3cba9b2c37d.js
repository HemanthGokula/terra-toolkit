"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[909],{22863:function(e,n,a){var t=a(95318);n.Z=void 0;var r=t(a(67294)),l=t(a(45697)),s=t(a(47166)),o=t(a(17422)),c=s.default.bind(o.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var n=e.src,a=e.name,t=e.url,l=e.version,s=r.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},r.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(l))),o=n?r.default.createElement("a",{className:c("badge"),href:n},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},s,o)};d.propTypes=i;var u=d;n.Z=u},50909:function(e,n,a){a.r(n),a.d(n,{default:function(){return i}});var t=a(87462),r=a(44925),l=(a(67294),a(81254)),s=a(99825),o=["components"],c={};function i(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(s.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"package-json-lint"},"Package Json Lint"),(0,l.mdx)("p",null,"The package provide lint rules that can be used to flag problems that are present in a package.json."),(0,l.mdx)("h2",{id:"installation"},"Installation"),(0,l.mdx)("p",null,"To install the module:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install @cerner/package-json-lint --save-dev\nnpm install @cerner/package-json-lint-config-terra --save-dev\n")),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("h3",{id:"packagejson"},"package.json"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'  "package-json-lint": {\n    "extends": "./packages/package-json-lint-config-terra/package-json-lint.config.js",\n    "projectType": "devModule | module | application",\n  },\n')),(0,l.mdx)("h3",{id:"npm-script"},"npm script"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'"lint:package-json": "npm run terra -- package-json-lint",\n')))}i.isMDXComponent=!0},99825:function(e,n,a){a.d(n,{C:function(){return l}});var t=a(67294),r=a(22863),l=function(e){var n=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/package-json-lint",name:"@cerner/package-json-lint",version:"1.3.0",url:n})}},17422:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___3TKkX","badge-container":"Badges-module__badge-container___3rSlA","badge-name":"Badges-module__badge-name___2TY0-","badge-version":"Badges-module__badge-version___1uonX"}},87462:function(e,n,a){function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},t.apply(this,arguments)}a.d(n,{Z:function(){return t}})},44925:function(e,n,a){function t(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(n,{Z:function(){return t}})}}]);
"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[482],{43482:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});var r=a(87462),t=a(44925),o=(a(67294),a(81254)),p=["components"],l={};function m(e){var n=e.components,a=(0,t.Z)(e,p);return(0,o.mdx)("wrapper",(0,r.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"custom-property-namespace"},"custom-property-namespace"),(0,o.mdx)("p",null,"Requires custom properties defined within var functions to be prefixed with a namespace."),(0,o.mdx)("h2",{id:"options"},"Options"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"boolean"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")),(0,o.mdx)("p",null,"By default the rule will find the nearest package.json and extract the package name."),(0,o.mdx)("p",null,"The following patterns are considered violations:"),(0,o.mdx)("p",null,"Example of the nearest package.json"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "terra-example"\n}\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-css"},"/* Is not prefixed with the namespace. */\na {  color: var(--terra-color); }\n")),(0,o.mdx)("p",null,"The following patterns are ",(0,o.mdx)("em",{parentName:"p"},"not")," considered violations:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-css"},"/*          namespace ↓               */\na { color: var(--terra-example-color); }\n")),(0,o.mdx)("h2",{id:"optional-secondary-options"},"Optional secondary options"),(0,o.mdx)("h3",{id:"namespace"},(0,o.mdx)("inlineCode",{parentName:"h3"},"namespace")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"A custom namespace. If not specified the name in the nearest package.json will be used."),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  true,\n  {\n    "namespace": "terra-component"\n  }\n]\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-css"},"a { color: var(--terra-component-color); }\n")))}m.isMDXComponent=!0;var s=["components"],c={};function d(e){var n=e.components,a=(0,t.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(m,{mdxType:"Readme"}))}d.isMDXComponent=!0},87462:function(e,n,a){function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},r.apply(this,arguments)}a.d(n,{Z:function(){return r}})},44925:function(e,n,a){function r(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a.d(n,{Z:function(){return r}})}}]);
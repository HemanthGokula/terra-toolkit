"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[389],{12389:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t=r(87462),o=r(44925),i=(r(67294),r(81254)),a=["components"],d={};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"terra-functional-testing---version-2-upgrade-guide"},"Terra Functional Testing - Version 2 Upgrade Guide"),(0,i.mdx)("p",null,"The only change in this version is the upgrade to WebDriverIO v7. This should cause very little disruption to consuming projects."),(0,i.mdx)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.mdx)("h3",{id:"wdio-v6-to-v7"},"WDIO v6 to v7"),(0,i.mdx)("p",null,"A complete list of breaking changes can be found here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/webdriverio/webdriverio/blob/main/CHANGELOG.md#boom-breaking-change"},"WebdriverIO v7 Breaking Changes")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://webdriver.io/docs/v7-migration"},"WebdriverIO v6 to v7 Upgrade Guide"))),(0,i.mdx)("p",null,"If you are using ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cerner/terra-functional-testing")," along with it's ",(0,i.mdx)("inlineCode",{parentName:"p"},"wdio.config.js")," most of these changes should not apply."),(0,i.mdx)("h3",{id:"node-10-support-dropped"},"Node 10 support dropped"),(0,i.mdx)("p",null,"WDIO v7 updates to fibers v5 which drops support for Node 10. Node 12 and above are recommended."),(0,i.mdx)("h4",{id:"update-packagejson"},"Update package.json"),(0,i.mdx)("p",null,"You will need to update the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cerner/terra-functional-testing")," version in your ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'// package.json\n{\n  "devDependencies": {\n+   "@cerner/terra-functional-testing": "^2.0.0",\n-   "@cerner/terra-functional-testing": "^1.0.0"\n  }\n}\n')))}p.isMDXComponent=!0},87462:function(e,n,r){function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},t.apply(this,arguments)}r.d(n,{Z:function(){return t}})},44925:function(e,n,r){function t(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(n,{Z:function(){return t}})}}]);
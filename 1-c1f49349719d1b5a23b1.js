"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[1],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),o=d(n(47166)),i=d(n(50026)),a=d(n(66983)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=o.default.bind(a.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:l.default.string},h=function(e){var t=e.children,n=s(e,u),l=r.default.useContext(i.default),a=(0,o.default)(m(["button",l.className]),n.className);return r.default.createElement("button",c({},n,{type:"button",className:a,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;var v=h;t.default=v},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),o=u(n(47166)),i=u(n(50026)),a=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(a.default),c={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important"])},s=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,o=r.default.useContext(i.default);return r.default.createElement("div",{className:d("notice",n,o.className)},r.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"error"}(n))),r.default.createElement("div",{className:d("children")},r.default.Children.map(l,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};var m=s;t.default=m},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),l=c(n(45697)),o=c(n(94184)),i=c(n(47166)),a=c(n(50026)),u=c(n(42620)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=i.default.bind(u.default),p={title:l.default.string},_=function(e){var t=e.title,n=m(e,d),l=r.default.useContext(a.default),i=(0,o.default)(f(["placeholder",l.className]),n.className),u=f(["inner"]);return r.default.createElement("div",s({},n,{className:i}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:f("title")},t)))};_.propTypes=p,_.defaultProps={title:""};var h=_;t.default=h},34261:function(e,t,n){Object.defineProperty(t,"qX",{enumerable:!0,get:function(){return r.default}});var r=i(n(59278)),l=i(n(47306)),o=i(n(40996));function i(e){return e&&e.__esModule?e:{default:e}}},97001:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(87462),l=n(44925),o=(n(67294),n(81254)),i=n(34261),a=["components"],u={};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"selenium-docker-service"},"Selenium Docker Service"),(0,o.mdx)("p",null,"The selenium docker service initializes a containerized ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/docker-selenium"},"selenium docker")," environment for running functional ",(0,o.mdx)("a",{parentName:"p",href:"https://webdriver.io/"},"WebDriverIO")," tests."),(0,o.mdx)("p",null,"By default, the selenium grid will be deployed locally on the host machine running on port 4444. Google Chrome and Firefox are available on the docker container. Internet Explorer can be enable when using a remote selenium grid that has it available."),(0,o.mdx)("h2",{id:"options"},"Options"),(0,o.mdx)("p",null,"The selenium docker service options are configured via the ",(0,o.mdx)("a",{parentName:"p",href:"../about#options"},"test runner CLI options"),"."),(0,o.mdx)("h3",{id:"disableseleniumservice"},"disableSeleniumService"),(0,o.mdx)("p",null,"A flag to disable the selenium docker service for the test run."),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"bool")),(0,o.mdx)("p",null,"Required: ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")),(0,o.mdx)("p",null,"Default: ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)(i.qX,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,o.mdx)("p",null,"  The selenium docker service is disabled automatically by the test runner if a remote selenium grid is specified.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "test:wdio": "terra wdio --disableSeleniumService"\n}\n')),(0,o.mdx)("h3",{id:"seleniumversion"},"seleniumVersion"),(0,o.mdx)("p",null,"The docker selenium image version to run tests against. This option is configured via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"wdio.conf.js"),"."),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"Required: ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")),(0,o.mdx)("p",null,"Default: ",(0,o.mdx)("inlineCode",{parentName:"p"},"3.14.0-helium")),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nconst { config } = require('@cerner/terra-functional-testing');\n\nconfig.serviceOptions = {\n  seleniumVersion: '3.141.59-20210311',\n};\n\nexports.config = config;\n")))}d.isMDXComponent=!0},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___Z1IDo","orion-fusion-theme":"Button-module__orion-fusion-theme___2H0eq",button:"Button-module__button___mI85d","is-active":"Button-module__is-active___1LH4H"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___20mOZ","orion-fusion-theme":"Notice-module__orion-fusion-theme___3setk","ux-recommendation":"Notice-module__ux-recommendation___1OU4e",title:"Notice-module__title___2LVZT",caution:"Notice-module__caution___3h4iB",deprecation:"Notice-module__deprecation___2wOF8",accessory:"Notice-module__accessory___1LbML",maintenance:"Notice-module__maintenance___2onOS",important:"Notice-module__important___3Boyp",notice:"Notice-module__notice___2VYHe",children:"Notice-module__children___1VjGw"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___1DkTf","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___1qpjQ",placeholder:"Placeholder-module__placeholder___mbQvt",inner:"Placeholder-module__inner___e7m6y",title:"Placeholder-module__title___2Or-Q"}},87462:function(e,t,n){function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return r}})}}]);
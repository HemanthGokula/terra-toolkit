"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[924],{22863:function(e,a,n){var t=n(95318);a.Z=void 0;var r=t(n(67294)),l=t(n(45697)),d=t(n(47166)),i=t(n(17422)),m=d.default.bind(i.default),o={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var a=e.src,n=e.name,t=e.url,l=e.version,d=r.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(l))),i=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},d,i)};u.propTypes=o;var p=u;a.Z=p},10924:function(e,a,n){n.r(a),n.d(a,{default:function(){return s}});var t=n(87462),r=n(44925),l=(n(67294),n(81254)),d=n(87510),i=["components"],m={};function o(e){var a=e.components,n=(0,r.Z)(e,i);return(0,l.mdx)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"changelog"},"Changelog"),(0,l.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,l.mdx)("h2",{id:"250---september-28-2021"},"2.5.0 - (September 28, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added hard-coded dependency ",(0,l.mdx)("inlineCode",{parentName:"li"},"inquirer@8.1.3"),". As latest i.e. v8.1.4 is using a dependency which is supported by node 14.")))),(0,l.mdx)("h2",{id:"240---september-2-2021"},"2.4.0 - (September 2, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated to set screenshots using the viewport size instead of the browser's window size to maintain consistent screenshot dimensions in IE."),(0,l.mdx)("li",{parentName:"ul"},"Reverted the width of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"large")," viewport size from ",(0,l.mdx)("inlineCode",{parentName:"li"},"1020")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"1000"),".")))),(0,l.mdx)("h2",{id:"230---august-17-2021"},"2.3.0 - (August 17, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update fileReporter to accept outputDir config option")))),(0,l.mdx)("h2",{id:"220---august-13-2021"},"2.2.0 - (August 13, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added seleniumServiceUrl parameter for locating selenium service."),(0,l.mdx)("li",{parentName:"ul"},"Added port parameter for specifying port mapping for the selenium service or the external selenium grid.")))),(0,l.mdx)("h2",{id:"210---july-26-2021"},"2.1.0 - (July 26, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Run tests in all browsers provided by the ",(0,l.mdx)("inlineCode",{parentName:"li"},"BROWSERS")," env variable.")))),(0,l.mdx)("h2",{id:"200---july-16-2021"},"2.0.0 - (July 16, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Upgraded to wdio v7"),(0,l.mdx)("li",{parentName:"ul"},"Increased large viewport size to ",(0,l.mdx)("inlineCode",{parentName:"li"},"1020"))))),(0,l.mdx)("h2",{id:"1100---july-16-2021"},"1.10.0 - (July 16, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added a status check to provided ",(0,l.mdx)("inlineCode",{parentName:"li"},"gridUrl"),"s, allowing for better logging when a grid fails.")))),(0,l.mdx)("h2",{id:"190---june-18-2021"},"1.9.0 - (June 18, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated screenshot cleaning to match nested snapshot directories"),(0,l.mdx)("li",{parentName:"ul"},"Updated to size the test page to the viewport size instead of the browser's window size to correctly match the corresponding breakpoint. This change may affect the size of existing screenshots, particularly in IE and firefox. The affected screenshots may need to be regenerated."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added screenshot paths for each test result to the spec reporter")))),(0,l.mdx)("h2",{id:"180---june-8-2021"},"1.8.0 - (June 8, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added FileOutputReporter reporter that logs wdio test output to separate files based on locale, theme, and form-factor")))),(0,l.mdx)("h2",{id:"170---june-1-2021"},"1.7.0 - (June 1, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"cloudRegion")," namespace to screenshot directories - this is useful for full stack testing contexts that define a cloudRegion per test run."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated waitForSeleniumHubReady to accommodate Windows users.")))),(0,l.mdx)("h2",{id:"160---may-25-2021"},"1.6.0 - (May 25, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"ignoreScreenshotMismatch")," flag to disable test failure on snapshot mismatch."),(0,l.mdx)("li",{parentName:"ul"},"Added configuration to retrieve and unzip screenshots from registry.")))),(0,l.mdx)("h2",{id:"150---may-19-2021"},"1.5.0 - (May 19, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Removed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed lodash is array dependency in favor of Array.isArray.")))),(0,l.mdx)("h2",{id:"140---may-7-2021"},"1.4.0 - (May 7, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added useSeleniumStandaloneService option for using the standalone-chrome host instead of the selenium docker service when building in Jenkins."),(0,l.mdx)("li",{parentName:"ul"},"Added express-server CLI command. This is moved from @cerner/terra-open-source-scripts."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update node-resemble-js version to fix ",(0,l.mdx)("inlineCode",{parentName:"li"},"Stream not writable")," error.")))),(0,l.mdx)("h2",{id:"130---may-4-2021"},"1.3.0 - (May 4, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update specPath in BaseCompare to replace ",(0,l.mdx)("inlineCode",{parentName:"li"},"node_modules")," with ",(0,l.mdx)("inlineCode",{parentName:"li"},"tests/wdio"),".")))),(0,l.mdx)("h2",{id:"120---april-23-2021"},"1.2.0 - (April 23, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"diff"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"error"),", and ",(0,l.mdx)("inlineCode",{parentName:"li"},"latest")," folders in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"__snapshots__")," directory will be deleted before each test run.")))),(0,l.mdx)("h2",{id:"110---april-13-2021"},"1.1.0 - (April 13, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Error screenshot functionality."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Honor terra-theme.config.js file when no theme is specified in the test runner.")))),(0,l.mdx)("h2",{id:"105---march-31-2021"},"1.0.5 - (March 31, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed an issue in the spec reporter where the package name from scoped mono repos could result in an improper file path.")))),(0,l.mdx)("h2",{id:"104---march-29-2021"},"1.0.4 - (March 29, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed packageName in terra-functional-testing for output files"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added a main index file to export the wdio.conf.js configuration file"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Removed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed log message for out of range elements in screenshot because there are valid cases to have out of range elements.")))),(0,l.mdx)("h2",{id:"103---march-23-2021"},"1.0.3 - (March 23, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added describeTests helper to filter tests by form factors, locales, or themes"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Throw error with a more meaningful message when an invalid selector is used to capture screenshot."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fix endY/endX out of range error when selector element is larger than document size.")))),(0,l.mdx)("h2",{id:"102---march-9-2021"},"1.0.2 - (March 9, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fix seleniumVersion service option to be read from serviceOptions instead of launcherOptions")))),(0,l.mdx)("h2",{id:"101---march-1-2021"},"1.0.1 - (March 1, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Correctly pass theme as ",(0,l.mdx)("inlineCode",{parentName:"li"},"defaultTheme")," to webpack-config-terra to run tests in the correct theme.")))),(0,l.mdx)("h2",{id:"100---february-25-2021"},"1.0.0 - (February 25, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Initial stable release")))}o.isMDXComponent=!0;var u=["components"],p={};function s(e){var a=e.components,n=(0,r.Z)(e,u);return(0,l.mdx)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(d.C,{mdxType:"Badge"}),(0,l.mdx)(o,{mdxType:"ChangeLog"}))}s.isMDXComponent=!0},87510:function(e,a,n){n.d(a,{C:function(){return l}});var t=n(67294),r=n(22863),l=function(e){var a=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/terra-functional-testing",name:"@cerner/terra-functional-testing",version:"2.5.0",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___3TKkX","badge-container":"Badges-module__badge-container___3rSlA","badge-name":"Badges-module__badge-name___2TY0-","badge-version":"Badges-module__badge-version___1uonX"}},87462:function(e,a,n){function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}n.d(a,{Z:function(){return t}})},44925:function(e,a,n){function t(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(a,{Z:function(){return t}})}}]);
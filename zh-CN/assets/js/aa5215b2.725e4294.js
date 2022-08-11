"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6938],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=l(r),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,i(i({ref:e},u),{},{components:r})):n.createElement(h,i({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9894:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"What's SSE and how to use it",author:"xxchan",author_url:"https://github.com/xxchan",tags:["updates"]},c=void 0,l={permalink:"/zh-CN/blog/2021/04/27/sse",editUrl:"https://github.com/beyondstorage/site/edit/master/blog/2021-04-27-sse.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2021-04-27-sse.md",title:"What's SSE and how to use it",description:"Data protection includes protecting data while in transit (as it travels to and from the server) and at rest (while it is stored on disk). You can do the following to protect your data when using storage services",date:"2021-04-27T00:00:00.000Z",formattedDate:"2021 M04 27",tags:[{label:"updates",permalink:"/zh-CN/blog/tags/updates"}],readingTime:5.715,truncated:!0,authors:[{name:"xxchan",url:"https://github.com/xxchan"}],prevItem:{title:"2021-17 Weekly Report",permalink:"/zh-CN/blog/2021/04/30/weekly-report"},nextItem:{title:"2021-16 \u5468\u62a5",permalink:"/zh-CN/blog/2021/04/23/weekly-report"}},u={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Data protection includes protecting data while in transit (as it travels to and from the server) and at rest (while it is stored on disk). You can do the following to protect your data when using storage services: You can do the following to protect your data when using storage services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure Socket Layer/Transport Layer Security (SSL/TLS)"),": Protect data in transit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client-Side Encryption"),": You manage the encryption keys, encryption process, and related tools all yourself. This can protect data both in transit and at rest, and this is transparent to the server. This can protect data both in transit and at rest, and this is transparent to the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server-Side Encryption"),": Request the server to encrypt your data before it is persisted to disk.")),(0,a.kt)("p",null,"Recently, we ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/issues/523"},"implemented SSE support")," in ","[go-storage][]",", and let's talk about Server-Side Encryption (shorten to SSE) here."))}f.isMDXComponent=!0}}]);
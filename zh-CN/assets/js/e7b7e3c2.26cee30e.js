"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5358],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6054:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={},p=void 0,l={unversionedId:"operations/multiparter/write_multipart",id:"operations/multiparter/write_multipart",isDocsHomePage:!1,title:"write_multipart",description:"write_multipart is used to write data into parts.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/operations/multiparter/write_multipart.md",sourceDirName:"operations/multiparter",slug:"/operations/multiparter/write_multipart",permalink:"/zh-CN/docs/go-storage/operations/multiparter/write_multipart",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/multiparter/write_multipart.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1630043305,formattedLastUpdatedAt:"2021-8-27",frontMatter:{},sidebar:"docs",previous:{title:"list_multipart",permalink:"/zh-CN/docs/go-storage/operations/multiparter/list_multipart"},next:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/go-storage/operations/pager/index"}},s=[{value:"Behavior",id:"behavior",children:[]}],c={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"write_multipart")," is used to write data into parts."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When uploading a part, in addition to the upload ID, you must specify a part number. A part number uniquely identifies a part and its position in the object you are uploading. A part number uniquely identifies a part and its position in the object you are uploading.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Part number is zero-based. Part number is zero-based. For the current supported services, it can be any number from 0 to 9,999, inclusive.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Whenever upload a part, the service returns the part information in its response, usually includes an ETag value. For each part upload, you must record the part information. You must include these values in the subsequent request to complete the multipart upload. For each part upload, you must record the part information. You must include these values in the subsequent request to complete the multipart upload."))))}m.isMDXComponent=!0}}]);
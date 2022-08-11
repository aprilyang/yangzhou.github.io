"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2380],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9907:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={},l=void 0,s={unversionedId:"services/dropbox",id:"services/dropbox",isDocsHomePage:!1,title:"dropbox",description:"Dropbox",source:"@site/docs/go-storage/services/dropbox.md",sourceDirName:"services",slug:"/services/dropbox",permalink:"/yangzhou.github.io/docs/go-storage/services/dropbox",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/services/dropbox.md",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1627375258,formattedLastUpdatedAt:"7/27/2021",frontMatter:{},sidebar:"docs",previous:{title:"cos",permalink:"/yangzhou.github.io/docs/go-storage/services/cos"},next:{title:"fs",permalink:"/yangzhou.github.io/docs/go-storage/services/fs"}},c=[{value:"Project",id:"project",children:[]},{value:"Config",id:"config",children:[{value:"Storager",id:"storager",children:[]}]},{value:"Implementation",id:"implementation",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com"},"Dropbox")),(0,a.kt)("h2",{id:"project"},"Project"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-dropbox"},"https://github.com/beyondstorage/go-service-dropbox")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("h3",{id:"storager"},"Storager"),(0,a.kt)("h4",{id:"available-pairs"},"Available Pairs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/yangzhou.github.io/docs/go-storage/pairs/credential"},"credential")),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"only support ",(0,a.kt)("inlineCode",{parentName:"td"},"api_key")," protocol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/yangzhou.github.io/docs/go-storage/pairs/work_dir"},"work_dir")),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"work dir")))),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Init storager (see ",(0,a.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/index#how-to-initialize-a-servicerstorager"},"this page")," for details)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-dropbox/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nstore, err := services.NewStoragerFromString("dropbox:///<work_dir>?credential=hmac:<account_name>:<account_key>")\nif err != nil {\n    log.Fatalf("dropbox new service: %v", err)\n}\n')),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"This service implements following interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/storager/index"},"Storager"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/appender/index"},"Appender")))))}d.isMDXComponent=!0}}]);
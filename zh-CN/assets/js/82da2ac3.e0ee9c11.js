"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5565],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3016:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s=void 0,c={unversionedId:"services/kodo",id:"services/kodo",isDocsHomePage:!1,title:"kodo",description:"qiniu kodo",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/services/kodo.md",sourceDirName:"services",slug:"/services/kodo",permalink:"/yangzhou.github.io/zh-CN/docs/go-storage/services/kodo",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/services/kodo.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1630043305,formattedLastUpdatedAt:"2021-8-27",frontMatter:{},sidebar:"docs",previous:{title:"ipfs",permalink:"/yangzhou.github.io/zh-CN/docs/go-storage/services/ipfs"},next:{title:"minio",permalink:"/yangzhou.github.io/zh-CN/docs/go-storage/services/minio"}},p=[{value:"Project",id:"project",children:[]},{value:"Config",id:"config",children:[{value:"Servicer",id:"servicer",children:[]},{value:"Storager",id:"storager",children:[]}]},{value:"Implementation",id:"implementation",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.qiniu.com/products/kodo"},"qiniu kodo")),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-kodo"},"https://github.com/beyondstorage/go-service-kodo")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("h3",{id:"servicer"},"Servicer"),(0,o.kt)("h4",{id:"available-pairs"},"Available Pairs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/zh-CN/docs/go-storage/pairs/credential"},"credential")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"only support ",(0,o.kt)("inlineCode",{parentName:"td"},"hmac")," protocol")))),(0,o.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"Init servicer (see ",(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/zh-CN/docs/go-storage/operations/index#how-to-initialize-a-servicerstorager"},"this page")," for details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-cos/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nsrv, err := services.NewServicerFromString("cos://?credential=hmac:<account_name>:<account_key>")\nif err != nil {\n    log.Fatalf("cos new service: %v", err)\n}\n')),(0,o.kt)("h3",{id:"storager"},"Storager"),(0,o.kt)("h4",{id:"available-pairs-1"},"Available Pairs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/zh-CN/docs/go-storage/pairs/name"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"bucket name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/zh-CN/docs/go-storage/pairs/work_dir"},"work_dir")),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"work dir")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/zh-CN/docs/go-storage/pairs/endpoint"},"endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"specific domain to access this storager")))),(0,o.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,o.kt)("p",null,"Init storager (see ",(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/zh-CN/docs/go-storage/operations/index#how-to-initialize-a-servicerstorager"},"this page")," for details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-kodo/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nstore, err := services.NewStoragerFromString("kodo://<container_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&endpoint=http:<domain>")\nif err != nil {\n    log.Fatalf("kodo new service: %v", err)\n}\n')),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"This service implements following interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/zh-CN/docs/go-storage/operations/servicer/index"},"Servicer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/zh-CN/docs/go-storage/operations/storager/index"},"Storager")))))}d.isMDXComponent=!0}}]);
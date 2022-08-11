"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[772],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4037:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},p=void 0,s={unversionedId:"pairs/endpoint",id:"pairs/endpoint",isDocsHomePage:!1,title:"endpoint",description:"endpoint is used to carry endpoint that go-storage used to connect to service.",source:"@site/docs/go-storage/pairs/endpoint.md",sourceDirName:"pairs",slug:"/pairs/endpoint",permalink:"/yangzhou.github.io/docs/go-storage/pairs/endpoint",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/pairs/endpoint.md",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1621600161,formattedLastUpdatedAt:"5/21/2021",frontMatter:{},sidebar:"docs",previous:{title:"credential",permalink:"/yangzhou.github.io/docs/go-storage/pairs/credential"},next:{title:"expire",permalink:"/yangzhou.github.io/docs/go-storage/pairs/expire"}},u=[{value:"Supported Operation",id:"supported-operation",children:[]},{value:"Format",id:"format",children:[]},{value:"Valid Examples",id:"valid-examples",children:[]},{value:"Tips",id:"tips",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," is used to carry endpoint that go-storage used to connect to service."),(0,o.kt)("h2",{id:"supported-operation"},"Supported Operation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NewServicer"),(0,o.kt)("li",{parentName:"ul"},"NewStorager")),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," has three parts: ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"port"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"protocol")," is the protocl that services used, like ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"host")," is the host that service used, like ",(0,o.kt)("inlineCode",{parentName:"li"},"qingstor.com")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.0.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"port")," is the port that services used, like ",(0,o.kt)("inlineCode",{parentName:"li"},"433")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"80"),".")),(0,o.kt)("h2",{id:"valid-examples"},"Valid Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http:example.com:80")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https:example.com:433")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http:example.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https:example.com"))),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Port could be emit in following states",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"protocol is ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," and port is ",(0,o.kt)("inlineCode",{parentName:"li"},"80")),(0,o.kt)("li",{parentName:"ul"},"protocol is ",(0,o.kt)("inlineCode",{parentName:"li"},"https")," and port is ",(0,o.kt)("inlineCode",{parentName:"li"},"443"))))))}d.isMDXComponent=!0}}]);
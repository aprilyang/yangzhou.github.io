"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7530],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2306:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"\u4ecb\u7ecd",sidebar_position:1},l=void 0,p={unversionedId:"operations/index",id:"operations/index",isDocsHomePage:!1,title:"\u4ecb\u7ecd",description:"Operation means a single action that we can do on a storage service.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/operations/index.md",sourceDirName:"operations",slug:"/operations/index",permalink:"/zh-CN/docs/go-storage/operations/index",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/index.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1630895331,formattedLastUpdatedAt:"2021-9-6",sidebarPosition:1,frontMatter:{title:"\u4ecb\u7ecd",sidebar_position:1},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/go-storage/index"},next:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/go-storage/operations/servicer/index"}},c=[{value:"Servicer",id:"servicer",children:[]},{value:"Storager",id:"storager",children:[]},{value:"How to initialize a Servicer/Storager?",id:"how-to-initialize-a-servicerstorager",children:[{value:"Initialize directly with pairs",id:"initialize-directly-with-pairs",children:[]}]}],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Operation means a single action that we can do on a storage service."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(746).Z})),(0,i.kt)("h2",{id:"servicer"},"Servicer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/servicer/index"},"servicer")," is used to maintain the storage service."),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"Servicer")," to create/delete/get/list storages."),(0,i.kt)("h2",{id:"storager"},"Storager"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/storager/index"},"storager")," is the interface for storage service."),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"Storager")," to maintain objects."),(0,i.kt)("h2",{id:"how-to-initialize-a-servicerstorager"},"How to initialize a Servicer/Storager?"),(0,i.kt)("p",null,"We have connection string support."),(0,i.kt)("p",null,"The format of the connection string is (optional parts marked by squared brackets):"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<type>://[<name>][<work_dir>][?enable_feature1&...&enable_featureN&key1=value1&...&keyN=valueN]")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name: storage name, e.g., bucket name. MUST NOT contain / MUST NOT contain /"),(0,i.kt)("li",{parentName:"ul"},"work_dir: For object storage, it is prefix; for fs, it is directory path. MUST start with / for every storage services. MUST start with / for every storage services."),(0,i.kt)("li",{parentName:"ul"},"For the ",(0,i.kt)("inlineCode",{parentName:"li"},"enable_feature")," query string:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature")," is the feature name defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"toml"),", and the format SHOULD be exactly the same."))),(0,i.kt)("li",{parentName:"ul"},"For the ",(0,i.kt)("inlineCode",{parentName:"li"},"key=value")," pairs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"=value")," is missing, we just ignore the pair. But ",(0,i.kt)("inlineCode",{parentName:"li"},"key=")," means a pair with a blank value. But ",(0,i.kt)("inlineCode",{parentName:"li"},"key=")," means a pair with a blank value."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is the pair name defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"toml")," and the format SHOULD be exactly the same."),(0,i.kt)("li",{parentName:"ul"},"Or the ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is the default pair name prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"default_")," and followed by pair name described above."))),(0,i.kt)("li",{parentName:"ul"},"If there are multiple pairs with the same key, the first one will be picked.")),(0,i.kt)("p",null,"So a valid connection string could be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3://bucket_name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3://bucket_name/prefix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3://?credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3://bucket_name/prefix?credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3://bucket_name/prefix?enable_virtual_dir&credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com&default_storage_class=STANDARD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fs://")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fs:///tmp"))),(0,i.kt)("p",null,"For more details, take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/blob/master/rfcs/90-re-support-initialization-via-connection-string.md"},"GSP-90")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/blob/master/docs/rfcs/700-config-features-and-defaultpairs-via-connection-string.md"},"GSP-700"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To use a service, do not forget to import the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"go-service-*")," package so that the service can be registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," function."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-fs/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nstore, err := services.NewStoragerFromString("fs:///tmp")\n')),(0,i.kt)("h3",{id:"initialize-directly-with-pairs"},"Initialize directly with pairs"),(0,i.kt)("p",null,"Alternatively, you can initialize directly with pairs, if you want to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use a complex pair that connection string doesn't support yet or is not convenient to write by hand"),(0,i.kt)("li",{parentName:"ul"},"construct pairs from your config format without transforming into the connection string format"),(0,i.kt)("li",{parentName:"ul"},"reduce the overheads of parsing the connection string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-fs/v3"\n    "github.com/beyondstorage/go-storage/v4/pairs"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nstore, err := services.NewStorager("fs", pairs.WithWorkDir("/tmp"))\n')))}m.isMDXComponent=!0},746:function(e,t,n){t.Z=n.p+"assets/images/operations-9248dc1211834904c5c2f6c72640c4e5.png"}}]);
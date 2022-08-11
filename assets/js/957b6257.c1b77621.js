"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6900],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9147:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s=void 0,p={unversionedId:"services/cos",id:"services/cos",isDocsHomePage:!1,title:"cos",description:"Tencent Cloud Object Storage",source:"@site/docs/go-storage/services/cos.md",sourceDirName:"services",slug:"/services/cos",permalink:"/yangzhou.github.io/docs/go-storage/services/cos",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/services/cos.md",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1627375258,formattedLastUpdatedAt:"7/27/2021",frontMatter:{},sidebar:"docs",previous:{title:"bos",permalink:"/yangzhou.github.io/docs/go-storage/services/bos"},next:{title:"dropbox",permalink:"/yangzhou.github.io/docs/go-storage/services/dropbox"}},u=[{value:"Project",id:"project",children:[]},{value:"Config",id:"config",children:[{value:"Servicer",id:"servicer",children:[]},{value:"Storager",id:"storager",children:[]}]},{value:"Implementation",id:"implementation",children:[]},{value:"Pairs",id:"pairs",children:[{value:"Server-Side Encryption (SSE)",id:"server-side-encryption-sse",children:[]}]}],c={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/product/cos"},"Tencent Cloud Object Storage")),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-cos"},"https://github.com/beyondstorage/go-service-cos")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("h3",{id:"servicer"},"Servicer"),(0,o.kt)("h4",{id:"available-pairs"},"Available Pairs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/docs/go-storage/pairs/credential"},"credential")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"only support ",(0,o.kt)("inlineCode",{parentName:"td"},"hmac")," protocol")))),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Init servicer (see ",(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/index#how-to-initialize-a-servicerstorager"},"this page")," for details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-cos/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nsrv, err := services.NewServicerFromString("cos://?credential=hmac:<account_name>:<account_key>")\nif err != nil {\n    log.Fatalf("cos new service: %v", err)\n}\n')),(0,o.kt)("h3",{id:"storager"},"Storager"),(0,o.kt)("h4",{id:"available-pairs-1"},"Available Pairs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/docs/go-storage/pairs/name"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"bucket name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/docs/go-storage/pairs/work_dir"},"work_dir")),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"work dir")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/yangzhou.github.io/docs/go-storage/pairs/location"},"location")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"location")))),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,"Init storager (see ",(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/index#how-to-initialize-a-servicerstorager"},"this page")," for details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-cos/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nstore, err := services.NewStoragerFromString("cos://<container_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&location=<bucket_location>")\nif err != nil {\n    log.Fatalf("cos new service: %v", err)\n}\n')),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"This service implements following interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/servicer/index"},"Servicer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/storager/index"},"Storager"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/yangzhou.github.io/docs/go-storage/operations/multiparter/index"},"Multiparter")))),(0,o.kt)("h2",{id:"pairs"},"Pairs"),(0,o.kt)("h3",{id:"server-side-encryption-sse"},"Server-Side Encryption (SSE)"),(0,o.kt)("p",null,"COS supports three options for Server-Side Encryption:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server-Side Encryption with COS-Managed Keys (SSE-COS)"),(0,o.kt)("li",{parentName:"ul"},"Server-Side Encryption with Customer Master Keys (CMKs) Stored in Key Management Service (SSE-KMS)"),(0,o.kt)("li",{parentName:"ul"},"Server-Side Encryption with Customer-Provided Keys (SSE-C)")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/436/18145"},"https://cloud.tencent.com/document/product/436/18145")," for more details."),(0,o.kt)("h4",{id:"sse-cos"},"SSE-COS"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption")),(0,o.kt)("td",{parentName:"tr",align:null},"the encryption algorithm. It should be ",(0,o.kt)("inlineCode",{parentName:"td"},"AES256")," .")))),(0,o.kt)("h5",{id:"supported-operations"},"Supported Operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/multiparter/create_multipart"},"CreateMultipart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/storager/write"},"Write"))),(0,o.kt)("h4",{id:"sse-kms"},"SSE-KMS"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption")),(0,o.kt)("td",{parentName:"tr",align:null},"the server-side encryption algorithm used. It should be ",(0,o.kt)("inlineCode",{parentName:"td"},"cos/kms")," .")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-cos-kms-key-id")),(0,o.kt)("td",{parentName:"tr",align:null},"specify the ID of the customer managed CMK used to protect the data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-context")),(0,o.kt)("td",{parentName:"tr",align:null},"an optional set of key-value pairs that can contain additional contextual information about the data. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.")))),(0,o.kt)("h5",{id:"supported-operations-1"},"Supported Operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/multiparter/create_multipart"},"CreateMultipart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/storager/write"},"Write"))),(0,o.kt)("h4",{id:"sse-c"},"SSE-C"),(0,o.kt)("p",null,"Server-Side Encryption with Customer-Provided Keys"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-customer-algorithm")),(0,o.kt)("td",{parentName:"tr",align:null},'Use this header to specify the encryption algorithm. The header value must be "AES256".')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-customer-key")),(0,o.kt)("td",{parentName:"tr",align:null},"a 32-byte customer-provided AES256 key")))),(0,o.kt)("h5",{id:"supported-operations-2"},"Supported Operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/multiparter/create_multipart"},"CreateMultipart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/storager/read"},"Read")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/storager/stat"},"Stat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/yangzhou.github.io/docs/go-storage/operations/storager/write"},"Write"))))}d.isMDXComponent=!0}}]);
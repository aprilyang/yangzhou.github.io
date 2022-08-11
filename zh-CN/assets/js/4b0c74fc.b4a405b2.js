"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3812],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7047:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s=void 0,p={unversionedId:"services/s3",id:"services/s3",isDocsHomePage:!1,title:"s3",description:"Amazon S3",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/services/s3.md",sourceDirName:"services",slug:"/services/s3",permalink:"/zh-CN/docs/go-storage/services/s3",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/services/s3.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1630043305,formattedLastUpdatedAt:"2021-8-27",frontMatter:{},sidebar:"docs",previous:{title:"qingstor",permalink:"/zh-CN/docs/go-storage/services/qingstor"},next:{title:"storj",permalink:"/zh-CN/docs/go-storage/services/storj"}},d=[{value:"Project",id:"project",children:[]},{value:"Config",id:"config",children:[{value:"Servicer",id:"servicer",children:[]},{value:"Storager",id:"storager",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Pairs",id:"pairs",children:[{value:"Server-Side Encryption (SSE)",id:"server-side-encryption-sse",children:[]}]}],m={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-s3"},"https://github.com/beyondstorage/go-service-s3")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("h3",{id:"servicer"},"Servicer"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-CN/docs/go-storage/pairs/credential"},"credential")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"support ",(0,o.kt)("inlineCode",{parentName:"td"},"hmac")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"env")," protocol")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"force_path_style"),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"virtual hosting of buckets")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"disable_100_continue"),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"to disable the SDK adding the ",(0,o.kt)("inlineCode",{parentName:"td"},"Expect: 100-Continue")," header to PUT requests over 2MB of content")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"use_accelerate"),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"s3 accelerate feature")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"use_arn_region"),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"use the region specified in the ARN")))),(0,o.kt)("h3",{id:"storager"},"Storager"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-CN/docs/go-storage/pairs/name"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"bucket name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-CN/docs/go-storage/pairs/work_dir"},"work_dir")),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"work dir")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-CN/docs/go-storage/pairs/location"},"location")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"bucket location")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Init servicer (see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/index"},"this page")," for details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-s3/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nsrv, err := services.NewServicerFromString("s3://?credential=hmac:<account_name>:<account_key>")\n')),(0,o.kt)("p",null,"Init storager (see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/index"},"this page")," for details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "github.com/beyondstorage/go-service-s3/v3"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\nstore, err := services.NewStoragerFromString("s3://<container_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&location=<bucket_location>")\n')),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"This service implements following interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/servicer/index"},"Servicer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/storager/index"},"Storager"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/multiparter/index"},"Multiparter")))),(0,o.kt)("h2",{id:"pairs"},"Pairs"),(0,o.kt)("h3",{id:"server-side-encryption-sse"},"Server-Side Encryption (SSE)"),(0,o.kt)("p",null,"S3 supports three options for Server-Side Encryption:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)"),(0,o.kt)("li",{parentName:"ul"},"Server-Side Encryption with Customer Master Keys (CMKs) Stored in AWS Key Management Service (SSE-KMS)"),(0,o.kt)("li",{parentName:"ul"},"Server-Side Encryption with Customer-Provided Keys (SSE-C)")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html"},"https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html")," for more details."),(0,o.kt)("h4",{id:"sse-s3"},"SSE-S3"),(0,o.kt)("p",null,"Server-Side Encryption with Amazon S3-Management Keys"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption")),(0,o.kt)("td",{parentName:"tr",align:null},"the encryption algorithm. the encryption algorithm. should be ",(0,o.kt)("inlineCode",{parentName:"td"},"AES256"))))),(0,o.kt)("h5",{id:"supported-operations"},"Supported Operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/storager/write"},"Write")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/multiparter/create_multipart"},"CreateMultipart"))),(0,o.kt)("h4",{id:"sse-kms"},"SSE-KMS"),(0,o.kt)("p",null,"Server-Side Encryption with Customer Master Keys Stored in AWS Key Management Services"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption")),(0,o.kt)("td",{parentName:"tr",align:null},"the server-side encryption algorithm used when storing this object in Amazon. Should be ",(0,o.kt)("inlineCode",{parentName:"td"},"aws:kms"),". Should be ",(0,o.kt)("inlineCode",{parentName:"td"},"aws:kms"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-aws-kms-key-id")),(0,o.kt)("td",{parentName:"tr",align:null},"specify the ID of the customer managed CMK used to protect the data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-context")),(0,o.kt)("td",{parentName:"tr",align:null},"an optional set of key-value pairs that can contain additional contextual information about the data.The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-bucket-key-enabled")),(0,o.kt)("td",{parentName:"tr",align:null},"enable or disable an S3 Bucket Key at the object-level. enable or disable an S3 Bucket Key at the object-level. S3 Bucket Keys can reduce your AWS KMS request s3ts by decreasing the request traffic from Amazon S3 to AWS KMS.")))),(0,o.kt)("h5",{id:"supported-operations-1"},"Supported Operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/storager/write"},"Write")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/multiparter/create_multipart"},"CreateMultipart"))),(0,o.kt)("h4",{id:"sse-c"},"SSE-C"),(0,o.kt)("p",null,"Server-Side Encryption with Customer-Provided Keys"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-customer-algorithm")),(0,o.kt)("td",{parentName:"tr",align:null},'Use this header to specify the encryption algorithm. Use this header to specify the encryption algorithm. The header value must be "AES256".')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server-side-encryption-customer-key")),(0,o.kt)("td",{parentName:"tr",align:null},"a 32-byte customer-provided AES256 key")))),(0,o.kt)("h5",{id:"supported-operations-2"},"Supported Operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/storager/read"},"Read")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/storager/stat"},"Stat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/storager/write"},"Write")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/multiparter/create_multipart"},"CreateMultipart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/go-storage/operations/multiparter/write_multipart"},"WriteMultipart"))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3062],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,h=p["".concat(c,".").concat(y)]||p[y]||l[y]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9638:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"What's SSE and how to use it",author:"xxchan",author_url:"https://github.com/xxchan",tags:["updates"]},c=void 0,u={permalink:"/yangzhou.github.io/blog/2021/04/27/sse",editUrl:"https://github.com/beyondstorage/site/edit/master/blog/2021-04-27-sse.md",source:"@site/blog/2021-04-27-sse.md",title:"What's SSE and how to use it",description:"Data protection includes protecting data while in transit (as it travels to and from the server) and at rest (while it is stored on disk). You can do the following to protect your data when using storage services:",date:"2021-04-27T00:00:00.000Z",formattedDate:"April 27, 2021",tags:[{label:"updates",permalink:"/yangzhou.github.io/blog/tags/updates"}],readingTime:4,truncated:!0,authors:[{name:"xxchan",url:"https://github.com/xxchan"}],prevItem:{title:"2021-17 Weekly Report",permalink:"/yangzhou.github.io/blog/2021/04/30/weekly-report"},nextItem:{title:"2021-16 Weekly Report",permalink:"/yangzhou.github.io/blog/2021/04/23/weekly-report"}},d={authorsImageUrls:[void 0]},l=[{value:"What is SSE",id:"what-is-sse",children:[{value:"SSE with Keys Managed by Cloud Service Provider",id:"sse-with-keys-managed-by-cloud-service-provider",children:[]},{value:"SSE with Customer Master Keys (CMKs) Stored in Key Management Service (SSE-KMS)",id:"sse-with-customer-master-keys-cmks-stored-in-key-management-service-sse-kms",children:[]},{value:"SSE with Customer-Provided Keys (SSE-C)",id:"sse-with-customer-provided-keys-sse-c",children:[]}]},{value:"How to Use SSE in go-storage",id:"how-to-use-sse-in-go-storage",children:[]}],p={toc:l};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Data protection includes protecting data while in transit (as it travels to and from the server) and at rest (while it is stored on disk). You can do the following to protect your data when using storage services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure Socket Layer/Transport Layer Security (SSL/TLS)"),": Protect data in transit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client-Side Encryption"),": You manage the encryption keys, encryption process, and related tools all yourself. This can protect data both in transit and at rest, and this is transparent to the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server-Side Encryption"),": Request the server to encrypt your data before it is persisted to disk. ")),(0,a.kt)("p",null,"Recently, we ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/issues/523"},"implemented SSE support")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage"},"go-storage"),", and let's talk about Server-Side Encryption (shorten to SSE) here."),(0,a.kt)("h2",{id:"what-is-sse"},"What is SSE"),(0,a.kt)("p",null,"Generally, the server will use ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"AES-256"),", a symmetric-key algorithm, to encrypt your data. (Exceptionally, Aliyun Object Storage supports ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SM4_(cipher)"},"SM-4"),".) AES-256 uses a 32-byte binary key, and the same key is used in encryption and decryption. You have three mutually exclusive options, depending on how you choose to manage the encryption keys."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SSE with Keys Managed by Cloud Service Provider")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SSE with Customer Master Keys (CMKs) Stored in Key Management Service"),", often called SSE-KMS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SSE with Customer-Provided Keys"),", often called SSE-C")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: not all service providers provide all of the above.")),(0,a.kt)("h3",{id:"sse-with-keys-managed-by-cloud-service-provider"},"SSE with Keys Managed by Cloud Service Provider"),(0,a.kt)("p",null,"In this way, the server will manage the keys, and the encryption is transparent to you. Some service providers (e.g., Google Cloud Storage and Azure) set this as default behavior and require no setup or configuration (and no extra charge), so your data is protected silently at rest by SSE! The others require you to request SSE explicitly at the time of object creation by adding a header, or configure a bucket-level policy. Generally, reading an encrypted object requires no special configuration."),(0,a.kt)("h3",{id:"sse-with-customer-master-keys-cmks-stored-in-key-management-service-sse-kms"},"SSE with Customer Master Keys (CMKs) Stored in Key Management Service (SSE-KMS)"),(0,a.kt)("p",null,"In this way, you ask the service provider's Key Management Service to generate and store CMKs which can be managed by you (e.g., establishing and maintaining their key policies, enabling and disabling them). Then you can request SSE with the CMK (by specifying its key-id in the header) at the time of object creation, or configure a bucket-level policy. When reading an encrypted object, the client doesn't need to give the key-id, but must have access to the CMK. "),(0,a.kt)("h3",{id:"sse-with-customer-provided-keys-sse-c"},"SSE with Customer-Provided Keys (SSE-C)"),(0,a.kt)("p",null,"In this way, you create and store encryption keys yourself. Different from Client-Side Encryption, in SSE-C you send unencrypted data along with the encryption key to the server, and then the server uses the key to encrypt your data, but doesn't store the key. When reading an encrypted object, you will have to carry the encryption key again to let the server decrypt your data with the key. In other words, you manage the encryption keys, and the server manages the encryption process and related tools."),(0,a.kt)("h2",{id:"how-to-use-sse-in-go-storage"},"How to Use SSE in go-storage"),(0,a.kt)("p",null,"Since different services support different SSE options and have different behaviors, SSE-related pairs are considered system pairs. So you will have to check which options are provided for your specific service first. We listed supported options and related pairs in our service ",(0,a.kt)("a",{parentName:"p",href:"/docs/go-storage/services/index"},"docs"),". You'd better first choose the SSE option you want to use, and then ignore other pairs in case of being confused with the usage of the pairs."),(0,a.kt)("p",null,"We recommend using SSE with ",(0,a.kt)("a",{parentName:"p",href:"/docs/go-storage/pairs/index#default-pairs"},"DefaultPairs"),", where you only provide SSE-related options during ",(0,a.kt)("inlineCode",{parentName:"p"},"NewStorager")," and can write the same logic for different services. Take ",(0,a.kt)("a",{parentName:"p",href:"/docs/go-storage/services/s3#server-side-encryption-sse"},"s3")," for example. The code snippets come from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage-example"},"go-storage-example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func NewS3SseS3() (types.Storager, error) {\n    return s3.NewStorager(\n        append(S3Pairs(),\n            s3.WithDefaultStoragePairs(s3.DefaultStoragePairs{\n                Write: []types.Pair{\n                    // Required, must be AES256\n                    s3.WithServerSideEncryption(s3.ServerSideEncryptionAes256),\n                },\n            }))...,\n    )\n}\n\nfunc NewS3SseKms(keyId string, context map[string]string, bucketKeyEnabled bool) (types.Storager, error) {\n    ctx, _ := json.Marshal(context)\n\n    return s3.NewStorager(\n        append(S3Pairs(),\n            s3.WithDefaultStoragePairs(s3.DefaultStoragePairs{\n                Write: []types.Pair{\n                    // Required, must be aws:kms\n                    s3.WithServerSideEncryption(s3.ServerSideEncryptionAwsKms),\n                    // Required\n                    //\n                    // Example value: 1234abcd-12ab-34cd-56ef-1234567890ab\n                    s3.WithServerSideEncryptionAwsKmsKeyID(keyId),\n                    // Optional\n                    //\n                    // An encryption context is an optional set of key-value pairs that can contain additional contextual information about the data. https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#encryption-context\n                    s3.WithServerSideEncryptionContext(base64.StdEncoding.EncodeToString(ctx)),\n                    // Optional, S3 Bucket Key settings will be used if this is not specified.\n                    //\n                    // S3 Bucket Keys can reduce your AWS KMS request costs by decreasing the request traffic from Amazon S3 to AWS KMS. https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#sse-kms-bucket-keys\n                    s3.WithServerSideEncryptionBucketKeyEnabled(bucketKeyEnabled),\n                },\n            }))...,\n    )\n}\n\nfunc NewS3SseC(key []byte) (types.Storager, error) {\n    return s3.NewStorager(\n        append(S3Pairs(),\n            s3.WithDefaultStoragePairs(s3.DefaultStoragePairs{\n                Write: []types.Pair{\n                    // Required, must be AES256\n                    s3.WithServerSideEncryptionCustomerAlgorithm(s3.ServerSideEncryptionAes256),\n                    // Required, your AES-256 key, a 32-byte binary value\n                    s3.WithServerSideEncryptionCustomerKey(key),\n                },\n                // Now you have to provide customer key to read encrypted data\n                Read: []types.Pair{\n                    // Required, must be AES256\n                    s3.WithServerSideEncryptionCustomerAlgorithm(s3.ServerSideEncryptionAes256),\n                    // Required, your AES-256 key, a 32-byte binary value\n                    s3.WithServerSideEncryptionCustomerKey(key),\n                },\n            }))...,\n    )\n}\n")),(0,a.kt)("hr",null))}y.isMDXComponent=!0}}]);
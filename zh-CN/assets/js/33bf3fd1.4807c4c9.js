"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[447],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return g}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=a,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2454:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Handling Errors"},s=void 0,d={unversionedId:"internal/handling-errors",id:"internal/handling-errors",isDocsHomePage:!1,title:"Handling Errors",description:"go-storage returns errors that satisfy the Go error interface type. The most basic form of error handling looks similar to the following example",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/internal/handling-errors.md",sourceDirName:"internal",slug:"/internal/handling-errors",permalink:"/yangzhou.github.io/zh-CN/docs/go-storage/internal/handling-errors",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/internal/handling-errors.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1630043305,formattedLastUpdatedAt:"2021-8-27",frontMatter:{title:"Handling Errors"},sidebar:"docs",previous:{title:"Core Concept",permalink:"/yangzhou.github.io/zh-CN/docs/go-storage/internal/core-concept"},next:{title:"Implement Services",permalink:"/yangzhou.github.io/zh-CN/docs/go-storage/internal/implement-services"}},p=[{value:"Error Codes and Fine-grained Error Types",id:"error-codes-and-fine-grained-error-types",children:[{value:"Example of Using Error Codes and Fine-grained Error Types",id:"example-of-using-error-codes-and-fine-grained-error-types",children:[]},{value:"List of Global Error Codes",id:"list-of-global-error-codes",children:[]}]},{value:"Top-level Errors",id:"top-level-errors",children:[]}],c={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"go-storage")," returns errors that satisfy the Go ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," interface type. The most basic form of error handling looks similar to the following example: The most basic form of error handling looks similar to the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if err != nil {\n    log.Printf("error: %s", err.Error())\n    // Handle error\n    return\n}\n')),(0,o.kt)("p",null,"Of course, we can do more. Our goal is: Our goal is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Let users know where and why an error happens: rich contextual information"),(0,o.kt)("li",{parentName:"ul"},"Let users handle error gracefully: identifiable and unified error codes")),(0,o.kt)("h2",{id:"error-codes-and-fine-grained-error-types"},"Error Codes and Fine-grained Error Types"),(0,o.kt)("p",null,"Simply put, we defined a finite set of error codes and all errors returned by the public APIs of ",(0,o.kt)("inlineCode",{parentName:"p"},"go-storage")," will have an error code. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/errors/#Is"},"errors.Is")," to check the error code and handle the error correspondingly. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/errors/#Is"},"errors.Is")," to check the error code and handle the error correspondingly."),(0,o.kt)("p",null,"The error codes can be either globally shared by all services (defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/blob/master/services/error.go"},"go-storage/services/error.go"),"), or service-specific (defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"go-service-*/error.go"),")."),(0,o.kt)("p",null,"An error code can have a more fine-grained internal classification: it can have 0, 1 or more related error ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," types, which have fields carrying contextual information. And you can use ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/errors/#As"},"errors.As")," to handle them specially. And you can use ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/errors/#As"},"errors.As")," to handle them specially."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"errors.As(originErr, &targetErr)"),", the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"targetErr")," should be the ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," value type instead of pointer type."))),(0,o.kt)("h3",{id:"example-of-using-error-codes-and-fine-grained-error-types"},"Example of Using Error Codes and Fine-grained Error Types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    s3 "github.com/beyondstorage/go-service-s3"\n    "github.com/beyondstorage/go-storage/v4/pairs"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\n// ...\n\nstore, err := services.NewStorager("s3", \n    pairs.WithCredential(os.Getenv("STORAGE_S3_CREDENTIAL")),\n    pairs.WithEndpoint(os.Getenv("STORAGE_S3_ENDPOINT")),\n    // ...\nimport (\n    s3 "github.com/beyondstorage/go-service-s3"\n    "github.com/beyondstorage/go-storage/v4/pairs"\n    "github.com/beyondstorage/go-storage/v4/services"\n)\n\n// ...\n\nstore, err := services.NewStorager("s3", \n    pairs.WithCredential(os.Getenv("STORAGE_S3_CREDENTIAL")),\n    pairs.WithEndpoint(os.Getenv("STORAGE_S3_ENDPOINT")),\n    // ...\n)\nif err != nil {\n    if errors.Is(initErr, services.ErrServiceNotRegistered) {\n        // handle ErrServiceNotRegistered\n        return\n    }\n    // handle error\n    return\n}\n\nn, err := store.Read(path, &buf)\nif err != nil {\n    if errors.Is(err, services.ErrServiceInternal) {\n        // handle ErrServiceInternal\n        // (global error)\n        return\n    }\n    if errors.Is(err, services.ErrRequestThrottled) {\n        // handle ErrRequestThrottled\n        // (global error)\n        return\n    }\n    if errors.Is(err, services.ErrObjectNotExist) {\n        // handle ErrObjectNotExist \n        // (global error)\n        return\n    }\n    if errors.Is(err, s3.ErrServerSideEncryptionCustomerKeyInvalid) {\n        // handle ErrServerSideEncryptionCustomerKeyInvalid\n        // (s3-specific error)\n        return\n    }\n    if errors.Is(err, services.ErrRestrictionDissatisfied) {\n        // You can also using errors.As outside, without checking the error code\n        var e services.MetadataUnrecognizedError\n        if errors.As(err, &e) {\n            // handle MetadataUnrecognizedError\n            return\n        }\n        // handle ErrRestrictionDissatisfied\n        return\n    }\n    // handle error\n    return\n}\n')),(0,o.kt)("h3",{id:"list-of-global-error-codes"},"List of Global Error Codes"),(0,o.kt)("p",null,"There's a ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrUnexpected")," for uncovered cases."),(0,o.kt)("h4",{id:"client-side-errors"},"Client-side Errors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Fine-grained Error Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrCapabilityInsufficient")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MetadataUnrecognizedError"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"PairUnsupportedError"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrRestrictionDissatisfied")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PairRequiredError"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrServiceNotRegistered")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrObjectModeInvalid")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ObjectModeInvalidError"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrListModeInvalid")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ListModeInvalidError"))))),(0,o.kt)("h4",{id:"server-side-errors"},"Server-side Errors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Fine-grained Error Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrObjectNotExist")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrPermissionDenied")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrServiceInternal")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ErrRequestThrottled")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,o.kt)("h2",{id:"top-level-errors"},"Top-level Errors"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note: Usually using error codes and fine-grained error ",(0,o.kt)("inlineCode",{parentName:"p"},"struct"),"s is enough and you don't have to know the content in this section."))),(0,o.kt)("p",null,"Actually there's some top-level errors wrapping the error codes and fine-grained error types, and they are the actual error types returned in ",(0,o.kt)("inlineCode",{parentName:"p"},"go-storage"),". The figure below shows the structure: The figure below shows the structure:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/beyondstorage/specs/master/rfcs/47/new.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"InitError"),": returned by ",(0,o.kt)("inlineCode",{parentName:"li"},"NewServicer")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NewStorager")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ServiceError"),": returned by the methods of ",(0,o.kt)("inlineCode",{parentName:"li"},"Servicer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StorageError"),": returned by the methods of ",(0,o.kt)("inlineCode",{parentName:"li"},"Storager"))),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/errors/#As"},"errors.As")," to convert errors into top-level error types and retrieve the fields you are interested in, just like handling fine-grained error ",(0,o.kt)("inlineCode",{parentName:"p"},"struct"),"s."))}u.isMDXComponent=!0}}]);
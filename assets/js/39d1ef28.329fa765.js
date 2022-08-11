"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3661],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2050:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={title:"Introduction",sidebar_position:1},c=void 0,s={unversionedId:"operations/appender/index",id:"operations/appender/index",isDocsHomePage:!1,title:"Introduction",description:"Appender is used to maintain appendable objects.",source:"@site/docs/go-storage/operations/appender/index.md",sourceDirName:"operations/appender",slug:"/operations/appender/index",permalink:"/docs/go-storage/operations/appender/index",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/appender/index.md",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1621825216,formattedLastUpdatedAt:"5/24/2021",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"write",permalink:"/docs/go-storage/operations/storager/write"},next:{title:"commit_append",permalink:"/docs/go-storage/operations/appender/commit_append"}},d=[{value:"Workflow",id:"workflow",children:[]}],l={toc:d};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Appender")," is used to maintain appendable objects."),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/go-storage/operations/appender/create_append"},"create_append")," to create an appendable object."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/go-storage/operations/appender/write_append"},"write_append")," to write data into the object."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/go-storage/operations/appender/commit_append"},"commit_append")," to finish an append procedure."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/go-storage/operations/storager/read"},"read")," to read data from the object.")))}u.isMDXComponent=!0}}]);
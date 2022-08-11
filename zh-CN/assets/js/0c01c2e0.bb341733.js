"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6860],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8569:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={},i="profile",p={unversionedId:"commands/profile",id:"commands/profile",isDocsHomePage:!1,title:"profile",description:"BeyondCTL \u652f\u6301\u591a\u4e2a\u914d\u7f6e\u65b9\u6848\uff0c\u4ee5\u4fbf\u6211\u4eec\u80fd\u591f\u5728\u4e0d\u540c\u7684\u670d\u52a1\u4e4b\u95f4\u5feb\u901f\u5207\u6362\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-beyond-ctl/current/commands/profile.md",sourceDirName:"commands",slug:"/commands/profile",permalink:"/yangzhou.github.io/zh-CN/docs/beyond-ctl/commands/profile",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/beyond-ctl/commands/profile.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1630043305,formattedLastUpdatedAt:"2021-8-27",frontMatter:{},sidebar:"docs",previous:{title:"cp",permalink:"/yangzhou.github.io/zh-CN/docs/beyond-ctl/commands/cp"}},s=[{value:"\u6dfb\u52a0\u65b0\u914d\u7f6e\u6587\u4ef6",id:"\u6dfb\u52a0\u65b0\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u5217\u51fa\u914d\u7f6e\u6587\u4ef6",id:"\u5217\u51fa\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u5220\u9664\u914d\u7f6e\u6587\u4ef6",id:"\u5220\u9664\u914d\u7f6e\u6587\u4ef6",children:[]}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"profile"},"profile"),(0,a.kt)("p",null,"BeyondCTL \u652f\u6301\u591a\u4e2a\u914d\u7f6e\u65b9\u6848\uff0c\u4ee5\u4fbf\u6211\u4eec\u80fd\u591f\u5728\u4e0d\u540c\u7684\u670d\u52a1\u4e4b\u95f4\u5feb\u901f\u5207\u6362\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"NAME:\n   beyondctl profile - manage profile in config file\n\nUSAGE:\n   beyondctl profile command [command options] [arguments...]\n\nNAME:\n   beyondctl profile - manage profile in config file\n\nUSAGE:\n   beyondctl profile command [command options] [arguments...]\n\nCOMMANDS:\n   add      add profile [name] [connection_string]\n   list     list profiles\n   remove   remove profile [name]\n   help, h  Shows a list of commands or help for one command\n\nOPTIONS:\n   --help, -h  show help (default: false)\n")),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u65b0\u914d\u7f6e\u6587\u4ef6"},"\u6dfb\u52a0\u65b0\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"beyondctl profile add")," \u6765\u901a\u8fc7\u8fde\u63a5\u5b57\u7b26\u4e32\u6dfb\u52a0\u65b0\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"beyondctl profile add example s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u8fde\u63a5\u5b57\u7b26\u4e32\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/docs/go-storage/operations/index"},"\u8fde\u63a5\u5b57\u7b26\u4e32\u6587\u6863"),"\u3002")),(0,a.kt)("p",null,"\u6b64\u5916, BeyondCTL \u652f\u6301\u901a\u8fc7\u73af\u5883\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"BEYOND_CTL_PROFILE_<name>")," \u6dfb\u52a0\u4e34\u65f6\u914d\u7f6e\u6587\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"BEYOND_CTL_PROFILE_EXAMPLE=s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region> beyondctl cp test.mp4 example:/test.mp4\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u5c06\u4e0d\u4f1a\u88ab\u6301\u4e45\u5316\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u9002\u5408\u5728\u5bb9\u5668\u6216\u8005 CI/CD \u7684\u73af\u5883\u4e0b\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u5217\u51fa\u914d\u7f6e\u6587\u4ef6"},"\u5217\u51fa\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"beyondctl profile list")," \u6765\u5217\u51fa\u5df2\u7ecf\u6dfb\u52a0\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"beyondctl profile list\n")),(0,a.kt)("h2",{id:"\u5220\u9664\u914d\u7f6e\u6587\u4ef6"},"\u5220\u9664\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"beyondctl profile remove")," \u6765\u5220\u9664\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"beyondctl profile remove example\n")))}m.isMDXComponent=!0}}]);
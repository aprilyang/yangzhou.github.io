"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4536],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8573:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={},c=void 0,p={unversionedId:"comparison/rclone",id:"comparison/rclone",isDocsHomePage:!1,title:"rclone",description:"Rclone is a command-line program to sync files and directories to and from different cloud storage providers. rclone is built upon rclone/fs.Fs interface, and has up to 38 backend support.",source:"@site/docs/go-storage/comparison/rclone.md",sourceDirName:"comparison",slug:"/comparison/rclone",permalink:"/yangzhou.github.io/docs/go-storage/comparison/rclone",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/comparison/rclone.md",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1621942575,formattedLastUpdatedAt:"5/25/2021",frontMatter:{},sidebar:"docs",previous:{title:"Specs",permalink:"/yangzhou.github.io/docs/go-storage/internal/specs"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rclone/rclone"},"Rclone")," is a command-line program to sync files and directories to and from different cloud storage providers. rclone is built upon ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rclone/rclone/blob/master/fs/fs.go"},"rclone/fs.Fs")," interface, and has up to 38 backend support."),(0,a.kt)("p",null,"rclone has following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MD5/SHA-1 hashes checked at all times for file integrity"),(0,a.kt)("li",{parentName:"ul"},"Timestamps preserved on files"),(0,a.kt)("li",{parentName:"ul"},"Partial syncs supported on a whole file basis"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/commands/rclone_copy/"},"Copy")," mode to just copy new/changed files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/commands/rclone_sync/"},"Sync")," (one way) mode to make a directory identical"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/commands/rclone_check/"},"Check")," mode to check for file hash equality"),(0,a.kt)("li",{parentName:"ul"},"Can sync to and from network, e.g. two different cloud accounts"),(0,a.kt)("li",{parentName:"ul"},"Optional large file chunking (",(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/chunker/"},"Chunker"),")"),(0,a.kt)("li",{parentName:"ul"},"Optional transparent compression (",(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/compress/"},"Compress"),")"),(0,a.kt)("li",{parentName:"ul"},"Optional encryption (",(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/crypt/"},"Crypt"),")"),(0,a.kt)("li",{parentName:"ul"},"Optional cache (",(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/cache/"},"Cache"),")"),(0,a.kt)("li",{parentName:"ul"},"Optional FUSE mount (",(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/commands/rclone_mount/"},"rclone mount"),")"),(0,a.kt)("li",{parentName:"ul"},"Multi-threaded downloads to local disk"),(0,a.kt)("li",{parentName:"ul"},"Can ",(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/commands/rclone_serve/"},"serve")," local or remote files over HTTP/WebDav/FTP/SFTP/dlna")),(0,a.kt)("p",null,'rclone intends to be "rsync for cloud storage", but ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage"},"go-storage")," wants to build a storage abstraction beyond the existing storage services. It's a library instead of an application."),(0,a.kt)("p",null,"That means ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage"},"go-storage")," will focus on different features that rclone have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multipart support (S3 alike multipart support)"),(0,a.kt)("li",{parentName:"ul"},"Append support (append content to file tail)"),(0,a.kt)("li",{parentName:"ul"},"Page support (random write)"),(0,a.kt)("li",{parentName:"ul"},"Both Prefix and Dir ListMode support"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage"},"go-storage"),", developers can build applications like rclone without implementing all those backends by hand."))}m.isMDXComponent=!0}}]);
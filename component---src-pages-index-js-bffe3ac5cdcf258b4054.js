(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),g=n.n(a),i=n(146),I=n.n(i),C=n(141),r=n(163),o=n.n(r),c=C.a.img.attrs({src:o.a}).withConfig({displayName:"Logo",componentId:"sc-1r856fx-0"})(["padding:1em 0;width:",";margin-bottom:unset;"],function(e){return e.size||"50px"}),l=C.a.div.withConfig({displayName:"Logo__Box",componentId:"sc-1r856fx-1"})(["display:inline-block;padding:0;"]),A=function(e){var t=e.size;return g.a.createElement(l,null,g.a.createElement(c,{size:t}))},m=(n(144),C.a.header.withConfig({displayName:"Header",componentId:"sc-17jpdft-0"})(["background-color:#fff;border-bottom:1px solid #e6e6e6;height:80px;width:100%;z-index:999;"])),s=C.a.div.withConfig({displayName:"Header__Nav",componentId:"sc-17jpdft-1"})(["@media screen and (min-width:53.75em){display:inline-block;vertical-align:top;margin-left:30px;}"]),u=C.a.div.withConfig({displayName:"Header__NavContent",componentId:"sc-17jpdft-2"})(["margin-left:8.5298%;float:left;display:block;margin-right:2.35765%;width:82.94039%;"]),d=C.a.div.withConfig({displayName:"Header__NavWrapper",componentId:"sc-17jpdft-3"})(["max-width:68em;margin-left:auto;margin-right:auto;position:relative;z-index:9999;"]),p=C.a.div.withConfig({displayName:"Header__UL",componentId:"sc-17jpdft-4"})(["display:inline;margin:0;padding:0;"]),M=C.a.li.withConfig({displayName:"Header__LI",componentId:"sc-17jpdft-5"})(["background:transparent;display:inline;line-height:80px;text-decoration:none;width:auto;padding-right:30px;> a{text-decoration:none;color:rgba(0,0,0,0.7);display:inline-block;cursor:pointer;}"]),y=function(){return g.a.createElement(m,null,g.a.createElement(d,null,g.a.createElement(u,null,g.a.createElement(A,null),g.a.createElement(s,null,g.a.createElement(p,null,g.a.createElement(M,null,g.a.createElement("a",{href:"/"},"Home")),g.a.createElement(M,null,g.a.createElement("a",{href:"https://github.com/kiranps/screenshotit",target:"_blank"},"Documentation")),g.a.createElement(M,null,g.a.createElement("a",{href:"https://github.com/kiranps/screenshotit",target:"_blank"},"Fork on Github →")))))))},w=n(7),h=n.n(w),b=n(167),N=n.n(b),D=C.a.pre.withConfig({displayName:"Prism__PRE",componentId:"sc-101rz6m-0"})(["margin:0;padding:14px;"]),f=C.a.code.withConfig({displayName:"Prism__CODE",componentId:"sc-101rz6m-1"})(["font-size:14px;"]),L=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var n=t.prototype;return n.componentDidMount=function(){N.a.highlightAll()},n.render=function(){var e=this.props,t=e.children,n=e.language;return g.a.createElement(D,null,g.a.createElement(f,{className:"language-"+n},t))},t}(a.Component),j=C.a.section.withConfig({displayName:"ProjectIntro",componentId:"sc-14wfm5f-0"})(["display:block;text-align:center;margin-top:30px;width:580px;margin:0 auto;"]),z=C.a.h1.withConfig({displayName:"ProjectIntro__ProjectTitle",componentId:"sc-14wfm5f-1"})(["margin:10px 0  0 10px;"]),x=C.a.h3.withConfig({displayName:"ProjectIntro__ProjectDescription",componentId:"sc-14wfm5f-2"})(["font-size:20px;margin:0px 0  0 10px;"]),T=C.a.div.withConfig({displayName:"ProjectIntro__Label",componentId:"sc-14wfm5f-3"})(["margin:10px 0 0 0;font-size:13px;padding:0;color:#989898;font-weight:normal;text-align:left;"]),E=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){return g.a.createElement(j,null,g.a.createElement(A,{size:"200px"}),g.a.createElement(z,null,"ScreenshotIt"),g.a.createElement(x,null,"Take screenshot of current webpage using puppeteer"),g.a.createElement(T,null,"INSTALL"),g.a.createElement(L,{language:"shell"},"npm install --save screenshotit"),g.a.createElement(T,null,"EXAMPLE"),g.a.createElement(L,{language:"javascript"},'import screenshotit from "screenshotit";\n\nscreenshotit(options).then(function(image) {\n  // handle image\n})'),g.a.createElement(T,null,"OPTIONS"),g.a.createElement("table",null,g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",null,"name"),g.a.createElement("th",null,"value"),g.a.createElement("th",null,"description"))),g.a.createElement("tbody",null,g.a.createElement("tr",null,g.a.createElement("td",null,"puppeter"),g.a.createElement("td",null,"url"),g.a.createElement("td",null,"url of puppeter service")))))},t}(a.Component),Z=C.a.footer.withConfig({displayName:"Footer",componentId:"u5fcm7-0"})(["padding-bottom:10px;width:100%;bottom:0;text-align:center;font-size:13px;color:rgba(51,51,51,0.2);"]),v=function(){return g.a.createElement(Z,null,"Copyright © 2018 Kiran PS - Licensed under MIT.")};t.default=function(){return g.a.createElement("div",null,g.a.createElement(I.a,{title:"screenshotit - webpage screenshot library using puppeteer",meta:[{name:"description",content:"javascript library to take screenshot of webpage using puppeteer"},{name:"keywords",content:"screenshot, screencapture, javascript, library"}]}),g.a.createElement(y,null),g.a.createElement(E,null),g.a.createElement(v,null))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return s}),n.d(t,"StaticQueryContext",function(){return A}),n.d(t,"StaticQuery",function(){return m});var a=n(0),g=n.n(a),i=n(4),I=n.n(i),C=n(140),r=n.n(C);n.d(t,"Link",function(){return r.a}),n.d(t,"withPrefix",function(){return C.withPrefix}),n.d(t,"navigate",function(){return C.navigate}),n.d(t,"push",function(){return C.push}),n.d(t,"replace",function(){return C.replace}),n.d(t,"navigateTo",function(){return C.navigateTo});var o=n(145),c=n.n(o);n.d(t,"PageRenderer",function(){return c.a});var l=n(45);n.d(t,"parsePath",function(){return l.a});var A=g.a.createContext({}),m=function(e){return g.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):g.a.createElement("div",null,"Loading (StaticQuery)")})};function s(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:I.a.object,query:I.a.string.isRequired,render:I.a.func,children:I.a.func}},145:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},163:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNDMyMCIKICAgdmlld0JveD0iMCAwIDI1NiAyNTYiCiAgIGhlaWdodD0iMjU2IgogICB3aWR0aD0iMjU2Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzNDMyMiI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDM2IgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDM4IgogICAgICAgICBkPSJNIDAsNTIwIDUyMCw1MjAgNTIwLDAgMCwwIDAsNTIwIFoiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MzI1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTc5Ni4zNjIxOSkiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8ZwogICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMzYpIgogICAgICAgaWQ9ImczNCIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUwMDAxOCwwLDAsLTEuMjUwMDAxOCwtMTk3LjQ1MzUzLDEyNDkuODE1MSkiPgogICAgICA8ZwogICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjYuMDk4NiwyOTkuOTEyMSkiCiAgICAgICAgIGlkPSJnNDAiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgaWQ9InBhdGg0MiIKICAgICAgICAgICBzdHlsZT0iZmlsbDojNzlhYTRmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgIGQ9Im0gMCwwIGMgLTUuMjMzLC0xMi4yNjYgLTguMTM2LC0yNS43NTUgLTguMTM2LC0zOS45MTIgMCwtMjAuODk2IDYuMzIzLC00MC4zMzcgMTcuMTQyLC01Ni41MzEgTCA2NC43OCwwIDAsMCBaIiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OC40NTAyLDE5OC43NDUxKSIKICAgICAgICAgaWQ9Imc0NCI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDQ2IgogICAgICAgICAgIHN0eWxlPSJmaWxsOiMwMGFhZDk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgZD0ibSAwLDAgYyAxOC42MzYsLTI0Ljc0OCA0OC4yNTQsLTQwLjc4MyA4MS41NSwtNDAuNzgzIDIuMTc4LDAgNC4zMzMsMC4wOTIgNi40NzYsMC4yMjYgTCAzMi40MDIsNTYuMDI4IDAsMCBaIiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0NC43MTM5LDM2MC44ODk2KSIKICAgICAgICAgaWQ9Imc0OCI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDUwIgogICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmFmNDQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgZD0ibSAwLDAgYyAtMzMuNDY5LC01LjA1IC02MS42NDYsLTI2LjQyMSAtNzYuMTc0LC01NS43MTYgbCAxMDguNzQyLDAgTCAwLDAgWiIgLz4KICAgICAgPC9nPgogICAgICA8ZwogICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDEuMjM0NCwzMjEuNjU1OCkiCiAgICAgICAgIGlkPSJnNTIiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgaWQ9InBhdGg1NCIKICAgICAgICAgICBzdHlsZT0iZmlsbDojZjM4MzM3O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgIGQ9Im0gMCwwIGMgLTE4LjY1MywyNC41MTcgLTQ4LjEyMSw0MC4zODIgLTgxLjIzNCw0MC4zODIgLTMuMjM2LDAgLTYuNDMyLC0wLjE2OSAtOS41OTIsLTAuNDY1IEwgLTMzLjQwOSwtNTguMzA3IDAsMCBaIiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NC42MTMzLDMxNi45NzEyKSIKICAgICAgICAgaWQ9Imc1NiI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDU4IgogICAgICAgICAgIHN0eWxlPSJmaWxsOiNkYjRmNDQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgZD0ibSAwLDAgLTU1LjUxMiwtOTYuODg0IDY0LjgsMCBjIDUuMjMzLDEyLjI2NiA4LjEzNywyNS43NTcgOC4xMzcsMzkuOTEzIEMgMTcuNDI1LC0zNS44ODkgMTAuOTk3LC0xNi4yOCAwLDAiIC8+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcyLjI0MTIsMTU4LjcyMTcpIgogICAgICAgICBpZD0iZzYwIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIGlkPSJwYXRoNjIiCiAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhlNWQ5NjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICBkPSJtIDAsMCBjIDM0Ljc5Niw0LjE4MiA2NC4yNTMsMjUuOTI4IDc5LjIxOSw1Ni4xMDQgbCAtMTExLjUzMiwwIEwgMCwwIFoiIC8+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYwLDM3Mi4yMDE3KSIKICAgICAgICAgaWQ9Imc2NCIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},166:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),g=n.n(a),i=n(4),I=n.n(i),C=n(70),r=n(2),o=function(e){var t=e.location,n=r.default.getResourcesForPathnameSync(t.pathname);return g.a.createElement(C.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:I.a.shape({pathname:I.a.string.isRequired}).isRequired},t.default=o}}]);
//# sourceMappingURL=component---src-pages-index-js-bffe3ac5cdcf258b4054.js.map
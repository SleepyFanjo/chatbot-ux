(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),l=(a(19),a(1)),s=a(26),i=a(27),u=function(e){var t=e.openChat;return c.a.createElement("button",{onClick:t,"aria-label":"Open Chatbot",className:"ChatBubble--wrapper mdc-elevation-transition"},c.a.createElement("i",{className:"material-icons"},"question_answer"))},m=a(11),b=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(l.a)(a,2),o=r[0],s=r[1],i=Object(n.useRef)(null),u=Object(n.useRef)(o);Object(n.useEffect)(function(){u.current=o},[o]),Object(n.useEffect)(function(){console.log("expensive effect run");var e=function(e){"Enter"===e.code&&!1===e.shiftKey&&(s(""),t(u.current))},a=i.current;return a.addEventListener("keyup",e),function(){console.log("expensive effect clean"),a.removeEventListener("keyup",e)}},[t]);return c.a.createElement("textarea",{ref:i,className:"Chat--input",placeholder:"Write a message...",value:o,onChange:function(e){return s(e.target.value)}})},p=function(e){var t=e.messages;return c.a.createElement("div",{className:"Chat--content"},c.a.createElement("div",{className:"Chat--messages"},t.map(function(e,t){return c.a.createElement("div",{className:"Chat--message ".concat(e.type),key:t},c.a.createElement("span",null,e.content.split("\n").map(function(e,t){return c.a.createElement("span",{key:t},t>0?c.a.createElement("br",null):null,e)})))})))},f=function(e){var t=e.close;return c.a.createElement("div",{className:"Chat--top-bar",onClick:t},c.a.createElement("div",{className:"Chat--top-bar-title"},"Chatbot..."),c.a.createElement("div",{className:"Chat--top-bar-actions"},c.a.createElement("button",{"aria-label":"Close chat",className:"Chat--top-bar-close",onClick:t},c.a.createElement("i",{className:"material-icons"},"close"))))},E=function(e){var t=e.close,a=Object(n.useState)([{type:"bot",content:"Hello, how can I help ?"}]),r=Object(l.a)(a,2),o=r[0],s=r[1],i=Object(n.useCallback)(function(e){s(function(t){return[].concat(Object(m.a)(t),[{type:"user",content:e},{type:"bot",content:"Here will be some content from the API"}])})},[]);return c.a.createElement("div",{className:"Chat--wrapper"},c.a.createElement("div",{className:"Chat--bottom-bar"}),c.a.createElement(b,{onSubmit:i}),c.a.createElement(p,{messages:o}),c.a.createElement(f,{close:t}))},h=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),m=Object(l.a)(o,2),b=m[0],p=m[1];return Object(n.useEffect)(function(){!1===b&&setTimeout(function(){r(!0)},280)},[b]),c.a.createElement(s.a,null,a?c.a.createElement(i.a,{key:"window",timeout:{appear:280,enter:280,exit:0},classNames:"Chat--transition"},c.a.createElement(E,{close:function(){r(!1),p(!0)}})):null,b?c.a.createElement(i.a,{key:"bubble",timeout:{appear:0,enter:0,exit:280},classNames:"ChatBubble--transition"},c.a.createElement(u,{openChat:function(){p(!1)}})):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("react-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.69249a31.chunk.js.map
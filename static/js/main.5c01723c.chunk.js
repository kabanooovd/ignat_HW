(this["webpackJsonphw-ignat"]=this["webpackJsonphw-ignat"]||[]).push([[0],[,,,,function(e,t,a){e.exports={delBtn:"Affairs_delBtn__2rTr0",affair:"Affairs_affair__23ala",commonAffair:"Affairs_commonAffair__1WIpS",affairPriorityList:"Affairs_affairPriorityList__37W4A",priorityBtn:"Affairs_priorityBtn__dG7CL",priorityBtnStack:"Affairs_priorityBtnStack__XsBoZ",mappedAffairs:"Affairs_mappedAffairs__2v4Cb",affairContainer:"Affairs_affairContainer__2J8TZ"}},,function(e,t,a){e.exports={mainHeaders:"Header_mainHeaders__2aGVD",HW5:"Header_HW5__10ske",navLinks:"Header_navLinks__gLxPW",eachSingleLink:"Header_eachSingleLink__eLSIp",headerRemote:"Header_headerRemote__30BeY"}},,function(e,t,a){e.exports={all:"Message_all__17uYw",message:"Message_message__37nLh",ava:"Message_ava__21NFu",msgFrame:"Message_msgFrame__2wXM3",arrow:"Message_arrow__2KG9w",clock:"Message_clock__1Fqbp",userName:"Message_userName__3gcUM",msgContent:"Message_msgContent__1Nrrt"}},,,,,,function(e,t,a){e.exports={btn:"Greeting_btn__1Q11C",someClass:"Greeting_someClass__iqsiG",error:"Greeting_error__2NiVZ",errNotification:"Greeting_errNotification__1kuxt"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1ppvh",errorInput:"SuperInputText_errorInput__2Pucj",error:"SuperInputText_error__3rFAm"}},,,,,,function(e,t,a){e.exports={blue:"HW4_blue__2XWu6",column:"HW4_column__3ZWpk",testSpanError:"HW4_testSpanError__1_3EW"}},function(e,t,a){e.exports={default:"SuperButton_default__KTOSh",red:"SuperButton_red__2Ixq3"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2Tj-F",spanClassName:"SuperCheckbox_spanClassName__3KZDO"}},,,,function(e,t,a){e.exports={App:"App_App__3bf7W"}},,function(e,t,a){e.exports={ErrorPage:"Error404_ErrorPage__2XLVL"}},,,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(26),c=a.n(s),i=(a(36),a(27)),o=a.n(i),j=a(3),l=a(6),d=a.n(l),b=a(9),u=a(0),h=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:d.a.mainHeaders,children:[Object(u.jsx)("div",{className:d.a.HW5,children:"HW 5"}),Object(u.jsxs)("nav",{className:d.a.navLinks,children:[Object(u.jsx)(b.b,{to:"/pre-junior",className:d.a.eachSingleLink,children:"Pre-Junior"}),Object(u.jsx)(b.b,{to:"/junior",className:d.a.eachSingleLink,children:"Junior"}),Object(u.jsx)(b.b,{to:"/junior-plus",className:d.a.eachSingleLink,children:"Junior-plus"}),Object(u.jsx)("button",{onClick:e.headerMenuRemoteHandler,className:d.a.headerRemote})]})]})})};var m=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],s=function(){n(!a)};return a?Object(u.jsx)(h,{headerMenuRemoteHandler:s}):Object(u.jsxs)("div",{className:d.a.mainHeaders,children:[Object(u.jsx)("div",{className:d.a.HW5,children:"HW 5"}),Object(u.jsx)("span",{className:d.a.eachSingleLink}),Object(u.jsx)("button",{onClick:s,className:d.a.headerRemote})]})},O=a(2),x=a(8),f=a.n(x);var _=function(e){return Object(u.jsxs)("div",{className:f.a.all,children:[Object(u.jsx)("div",{className:f.a.message,children:Object(u.jsx)("div",{className:f.a.ava,children:Object(u.jsx)("img",{src:e.avatar,alt:""})})}),Object(u.jsxs)("div",{className:f.a.msgFrame,children:[Object(u.jsx)("div",{className:f.a.userName,children:Object(u.jsx)("b",{children:e.name})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:f.a.msgContent,children:e.message}),Object(u.jsx)("span",{className:f.a.clock,children:e.time})]}),Object(u.jsx)("div",{className:f.a.arrow})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Dimas",g="Hey, mate, im trying to do my best",N="22:00";var k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(_,{avatar:p,name:v,message:g,time:N}),Object(u.jsx)(_,{avatar:p,name:v,message:g,time:N}),Object(u.jsx)(_,{avatar:p,name:v,message:g,time:N}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},C=a(4),y=a.n(C);var S=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:y.a.affairContainer,children:[Object(u.jsx)("div",{className:y.a.affair,children:e.affair.name}),Object(u.jsx)("span",{className:y.a.delBtn,children:Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"DEL"})})]})})};var w=function(e){var t=e.data.map((function(t){return Object(u.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:y.a.affairPriorityList,children:[Object(u.jsx)("div",{className:y.a.mappedAffairs,children:t}),Object(u.jsxs)("div",{className:y.a.priorityBtnStack,children:[Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},className:y.a.priorityBtn,children:"ALL"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},className:y.a.priorityBtn,children:"HIGH"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},className:y.a.priorityBtn,children:"MIDDLE"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},className:y.a.priorityBtn,children:"LOW"})]})]})},A=a(44),H=[{_id:Object(A.a)(),name:"React",priority:"high"},{_id:Object(A.a)(),name:"anime",priority:"low"},{_id:Object(A.a)(),name:"games",priority:"low"},{_id:Object(A.a)(),name:"work",priority:"high"},{_id:Object(A.a)(),name:"travel",priority:"middle"}];var L=function(){var e=Object(r.useState)(H),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)("all"),c=Object(j.a)(s,2),i=c[0],o=c[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(a,i);return Object(u.jsxs)("div",{className:y.a.commonAffair,children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(w,{data:l,setFilter:o,deleteAffairCallback:function(e){n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},W=a(30),B=a(14),E=a.n(B),I=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.error,s=e.totalUsers,c=n?E.a.error:E.a.someClass;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:a,className:c,placeholder:"Insert your name"}),Object(u.jsx)("button",{onClick:r,className:E.a.btn,children:"add"}),Object(u.jsxs)("span",{children:[" People in Array - ",s]}),Object(u.jsx)("div",{children:Object(u.jsx)("b",{children:Object(u.jsx)("span",{className:E.a.errNotification,children:n})})})]})},P=function(e){e.users;var t=e.addUserCallback,a=Object(r.useState)(""),n=Object(j.a)(a,2),s=n[0],c=n[1],i=Object(r.useState)(""),o=Object(j.a)(i,2),l=o[0],d=o[1],b=Object(r.useState)(0),h=Object(j.a)(b,2),m=h[0],O=h[1];return Object(u.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;c(t)},addUser:function(){""!==s?(t(s),alert("Hello ".concat(s," !")),c(""),O(m+1),d("")):d("Error: insert your name please")},error:l,totalUsers:m})};var T=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return console.log(a),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(P,{users:a,addUserCallback:function(e){var t={_id:Object(A.a)(),name:e};n([].concat(Object(W.a)(a),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},F=a(10),M=a(11),G=a(15),J=a.n(G),R=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(J.a.error," ").concat(i||""),l="".concat(J.a.input," ").concat(s?J.a.errorInput:J.a.superInput," ").concat(c);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:l},o)),s&&Object(u.jsx)("span",{className:j,children:s})]})},U=a(21),D=a.n(U),K=a(22),Z=a.n(K),X=function(e){var t=e.red,a=e.className,r=Object(M.a)(e,["red","className"]),n="".concat(t?Z.a.red:Z.a.default," ").concat(a);return Object(u.jsx)("button",Object(F.a)({className:n},r))},q=a(23),V=a.n(q),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),s=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(V.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c},s)),n&&Object(u.jsx)("span",{className:V.a.spanClassName,children:n})]})};var Q=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],s=a?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),o=Object(j.a)(i,2),l=o[0],d=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:D.a.column,children:[Object(u.jsx)(R,{value:a,onChangeText:n,onEnter:c,error:s}),Object(u.jsx)(R,{className:D.a.blue}),Object(u.jsx)(X,{children:"default"}),Object(u.jsx)(X,{red:!0,onClick:c,children:"delete "}),Object(u.jsx)(X,{disabled:!0,children:"disabled"}),Object(u.jsx)(Y,{checked:l,onChangeChecked:d,children:"some text "}),Object(u.jsx)(Y,{checked:l,onChange:function(e){return d(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var $=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(k,{}),Object(u.jsx)(L,{}),Object(u.jsx)(T,{}),Object(u.jsx)(Q,{})]})},z=a(29),ee=a.n(z);var te=function(){return Object(u.jsxs)("div",{className:ee.a.ErrorPage,children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(u.jsx)("div",{children:"Please, chose an option from Header"})]})};var ae=function(){return Object(u.jsx)("div",{children:"Here is gona be tasks since 6-th lesson till 11th lesson when ill do it"})};var re=function(){return Object(u.jsx)("div",{children:"Here is gona be tasks since 12-th lesson till the end"})},ne="/pre-junior",se="/junior",ce="/junior-plus";var ie=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(O.d,{children:[Object(u.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(O.a,{to:ne})}}),Object(u.jsx)(O.b,{path:ne,exact:!0,render:function(){return Object(u.jsx)($,{})}}),Object(u.jsx)(O.b,{path:se,render:function(){return Object(u.jsx)(ae,{})}}),Object(u.jsx)(O.b,{path:ce,render:function(){return Object(u.jsx)(re,{})}}),"// add routes",Object(u.jsx)(O.b,{render:function(){return Object(u.jsx)(te,{})}})]})})};var oe=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(ie,{})]})})};var je=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.5c01723c.chunk.js.map
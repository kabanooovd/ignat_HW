(this["webpackJsonphw-ignat"]=this["webpackJsonphw-ignat"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={delBtn:"Affairs_delBtn__2rTr0",affair:"Affairs_affair__23ala",commonAffair:"Affairs_commonAffair__1WIpS",affairPriorityList:"Affairs_affairPriorityList__37W4A",priorityBtn:"Affairs_priorityBtn__dG7CL",priorityBtnStack:"Affairs_priorityBtnStack__XsBoZ",mappedAffairs:"Affairs_mappedAffairs__2v4Cb",affairContainer:"Affairs_affairContainer__2J8TZ"}},,,function(e,t,n){e.exports={mainHeaders:"Header_mainHeaders__2aGVD",HW5:"Header_HW5__10ske",navLinks:"Header_navLinks__gLxPW",eachSingleLink:"Header_eachSingleLink__eLSIp",active:"Header_active__R4Fgi",headerRemote:"Header_headerRemote__30BeY"}},function(e,t,n){e.exports={all:"Message_all__17uYw",message:"Message_message__37nLh",ava:"Message_ava__21NFu",msgFrame:"Message_msgFrame__2wXM3",arrow:"Message_arrow__2KG9w",clock:"Message_clock__1Fqbp",userName:"Message_userName__3gcUM",msgContent:"Message_msgContent__1Nrrt"}},,,function(e,t,n){e.exports={inputSpanEditContainer:"SuperEditableSpan_inputSpanEditContainer__3R3D6",spanClassName:"SuperEditableSpan_spanClassName__1Xvtf",inputClassName:"SuperEditableSpan_inputClassName__ues18",buttonContainer:"SuperEditableSpan_buttonContainer__2Ska2"}},,function(e,t,n){e.exports={MainInput:"SuperInputText_MainInput__2tney",input:"SuperInputText_input__3NdmP",superInput:"SuperInputText_superInput__1ppvh",errorInput:"SuperInputText_errorInput__2Pucj",error:"SuperInputText_error__3rFAm"}},function(e,t,n){e.exports={SuperDoubleRangeContainer:"HW11_SuperDoubleRangeContainer__1i_O6",valueStyle:"HW11_valueStyle__18xWI"}},,,,function(e,t,n){e.exports={btn:"Greeting_btn__1Q11C",someClass:"Greeting_someClass__iqsiG",error:"Greeting_error__2NiVZ",errNotification:"Greeting_errNotification__1kuxt"}},,,,function(e,t,n){e.exports={radioInput:"SuperRadio_radioInput__2PAvD",radio:"SuperRadio_radio__2AAkf",singleItem:"SuperRadio_singleItem__2Zn93"}},function(e,t,n){e.exports={EachPerson:"HW8_EachPerson__1239e"}},,,,,function(e,t,n){e.exports={default:"SuperButton_default__KTOSh",red:"SuperButton_red__2Ixq3"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2Tj-F",spanClassName:"SuperCheckbox_spanClassName__3KZDO"}},function(e,t,n){e.exports={ClockStyle:"Clock_ClockStyle__23_UF"}},,,function(e,t,n){e.exports={App:"App_App__3bf7W"}},function(e,t,n){e.exports={blue:"HW4_blue__2XWu6",column:"HW4_column__3ZWpk",testSpanError:"HW4_testSpanError__1_3EW"}},function(e,t,n){e.exports={ErrorPage:"Error404_ErrorPage__2XLVL"}},function(e,t,n){e.exports={select:"SuperSelect_select__2MMh4"}},function(e,t,n){e.exports={range:"SuperRange_range__fIZP5"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),i=(n(45),n(35)),o=n.n(i),j=n(9),l=n.n(j),u=n(11),b=n(0);var d=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:l.a.HW5,children:"HW 5"}),Object(b.jsx)("div",{className:l.a.mainHeaders,children:Object(b.jsxs)("nav",{className:l.a.navLinks,children:[Object(b.jsx)(u.b,{to:"/pre-junior",className:l.a.eachSingleLink,activeClassName:l.a.active,children:"Pre-Junior"}),Object(b.jsx)(u.b,{to:"/junior",className:l.a.eachSingleLink,activeClassName:l.a.active,children:"Junior"}),Object(b.jsx)(u.b,{to:"/junior-plus",className:l.a.eachSingleLink,activeClassName:l.a.active,children:"Junior-plus"}),Object(b.jsx)("button",{className:l.a.headerRemote})]})})]})},O=n(3),h=n(10),x=n.n(h);var m=function(e){return Object(b.jsxs)("div",{className:x.a.all,children:[Object(b.jsx)("div",{className:x.a.message,children:Object(b.jsx)("div",{className:x.a.ava,children:Object(b.jsx)("img",{src:e.avatar,alt:""})})}),Object(b.jsxs)("div",{className:x.a.msgFrame,children:[Object(b.jsx)("div",{className:x.a.userName,children:Object(b.jsx)("b",{children:e.name})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:x.a.msgContent,children:e.message}),Object(b.jsx)("span",{className:x.a.clock,children:e.time})]}),Object(b.jsx)("div",{className:x.a.arrow})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Dimas",v="Hey, mate, im trying to do my best",_="22:00";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(m,{avatar:p,name:f,message:v,time:_}),Object(b.jsx)(m,{avatar:p,name:f,message:v,time:_}),Object(b.jsx)(m,{avatar:p,name:f,message:v,time:_}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=n(2),N=n(6),k=n.n(N);var S=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:k.a.affairContainer,children:[Object(b.jsx)("div",{className:k.a.affair,children:e.affair.name}),Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:k.a.delBtn,children:"DEL"})]})})};var y=function(e){var t=e.data.map((function(t){return Object(b.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:k.a.affairPriorityList,children:[Object(b.jsx)("div",{className:k.a.mappedAffairs,children:t}),Object(b.jsxs)("div",{className:k.a.priorityBtnStack,children:[Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},className:k.a.priorityBtn,children:"ALL"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},className:k.a.priorityBtn,children:"HIGH"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},className:k.a.priorityBtn,children:"MIDDLE"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},className:k.a.priorityBtn,children:"LOW"})]})]})},w=n(54),E=[{_id:Object(w.a)(),name:"React",priority:"high"},{_id:Object(w.a)(),name:"anime",priority:"low"},{_id:Object(w.a)(),name:"games",priority:"low"},{_id:Object(w.a)(),name:"work",priority:"high"},{_id:Object(w.a)(),name:"travel",priority:"middle"}];var A=function(){var e=Object(a.useState)(E),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(C.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(b.jsxs)("div",{className:k.a.commonAffair,children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},I=n(14),H=n(20),L=n.n(H),M=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=c?L.a.error:L.a.someClass;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:s,placeholder:"Insert your name",onKeyPress:function(e){"Enter"===e.key&&a()}}),Object(b.jsx)("button",{onClick:a,className:L.a.btn,children:"add"}),Object(b.jsxs)("span",{children:[" People in Array - ",r]}),Object(b.jsx)("div",{children:Object(b.jsx)("b",{children:Object(b.jsx)("span",{className:L.a.errNotification,children:c})})})]})},P=function(e){e.users;var t=e.addUserCallback,n=Object(a.useState)(""),c=Object(C.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(C.a)(i,2),j=o[0],l=o[1],u=Object(a.useState)(0),d=Object(C.a)(u,2),O=d[0],h=d[1];return Object(b.jsx)(M,{name:r,setNameCallback:function(e){var t=e.currentTarget.value;s(t),l("")},addUser:function(){""!==r?(t(r),alert("Hello ".concat(r," !")),s(""),h(O+1),l("")):l("Error: insert your name please")},error:j,totalUsers:O})};var W=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(P,{users:n,addUserCallback:function(e){var t={_id:Object(w.a)(),name:e};c([].concat(Object(I.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},B=n(4),D=n(5),T=n(15),F=n.n(T),R=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(F.a.error," ").concat(i||""),l="".concat(F.a.input," ").concat(r?F.a.errorInput:F.a.superInput," ").concat(s);return Object(b.jsxs)("div",{className:F.a.MainInput,children:[Object(b.jsx)("input",Object(B.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(b.jsx)("span",{className:j,children:r})]})},G=n(36),J=n.n(G),V=n(30),U=n.n(V),Z=function(e){var t=e.red,n=e.className,a=Object(D.a)(e,["red","className"]),c="".concat(t?U.a.red:U.a.default," ").concat(n);return Object(b.jsx)("button",Object(B.a)({className:c},a))},K=n(31),X=n.n(K),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(D.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(B.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(b.jsx)("span",{className:X.a.spanClassName,children:c})]})};var Y=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:J.a.column,children:[Object(b.jsx)(R,{value:n,onChangeText:c,onEnter:s,error:r}),Object(b.jsx)(Z,{onClick:function(){c("")},children:"default"}),Object(b.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(Z,{disabled:!j,children:"disabled"}),Object(b.jsx)(q,{checked:j,onChangeChecked:l,children:"To disable button"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},z=n(13),Q=n.n(z),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(D.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,d=l.onDoubleClick,O=(l.className,Object(D.a)(l,["children","onDoubleClick","className"])),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",Q.a.spanClassName);return Object(b.jsx)("div",{className:Q.a.inputSpanEditContainer,children:o?Object(b.jsx)(R,Object(B.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()},className:Q.a.inputClassName},r)):Object(b.jsxs)("span",{children:["\u270e ",Object(b.jsx)("span",Object(B.a)(Object(B.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:h},O),{},{children:u||r.value}))]})})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)($,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsxs)("div",{className:Q.a.buttonContainer,children:[Object(b.jsx)(Z,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(b.jsx)(Z,{onClick:function(){var e=te("editable-span-value","");c(e)},children:"restore"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ae=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(A,{}),Object(b.jsx)(W,{}),Object(b.jsx)(Y,{}),Object(b.jsx)(ne,{})]})},ce=n(37),re=n.n(ce);var se=function(){return Object(b.jsxs)("div",{className:re.a.ErrorPage,children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(b.jsx)("div",{children:"Please, chose an option from Header"})]})},ie=n(38),oe=n.n(ie),je=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=Object(D.a)(e,["options","onChange","onChangeOption"]),c=null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsx)("option",{children:e},t)}));return Object(b.jsx)("h4",{children:Object(b.jsx)("select",Object(B.a)(Object(B.a)({onChange:function(e){var t=e.currentTarget.value;n(t)}},a),{},{className:oe.a.select,children:c}))})},le=n(24),ue=n.n(le),be=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=(e.onChange,e.onChangeOption),r=(Object(D.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var t=e.currentTarget.value;console.log(t),c(t)}),s=n?n.map((function(e,n){return Object(b.jsxs)("label",{className:ue.a.singleItem,children:[Object(b.jsx)("input",{type:t,checked:a===e,value:e,onChange:r,className:ue.a.radioInput}),e]},n)})):[];return Object(b.jsx)("div",{className:ue.a.radio,children:s})},de=["x","y","z"];var Oe=function(){var e=Object(a.useState)(de[0]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(je,{options:de,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(be,{name:"radio",options:de,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},he=n(25),xe=n.n(he),me=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(I.a)(e.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}))):"down"===t.payload?Object(I.a)(e.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:1}))):e;case"check":return Object(I.a)(e.filter((function(e){return e.age>=t.age})));default:return e}},pe=function(e){return{type:"sort",payload:e}},fe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ve=function(){var e=Object(a.useState)(fe),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:xe.a.EachPerson,children:[Object(b.jsx)("span",{className:xe.a.name,children:e.name}),Object(b.jsxs)("span",{className:xe.a.age,children:["  ",e.age]})]})},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",r,Object(b.jsxs)("div",{children:[Object(b.jsx)(Z,{onClick:function(){return c(me(fe,pe("up")))},children:"sort up"}),Object(b.jsx)(Z,{onClick:function(){return c(me(fe,pe("down")))},children:"sort down"}),Object(b.jsx)(Z,{onClick:function(){return c(me(fe,{type:"check",age:18}))},children:"check 18"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},_e=n(32),ge=n.n(_e);var Ce=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(C.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(C.a)(j,2),u=l[0],d=l[1],O=Object(a.useState)(!1),h=Object(C.a)(O,2),x=h[0],m=h[1],p=function(){clearInterval(n)},f=function(e){return e<10?"".concat(0,e):e},v="".concat(f(i.getHours())," : ").concat(f(i.getMinutes())," : ").concat(f(i.getSeconds())),_="".concat(f(i.getDate())," / ").concat(f(i.getMonth()+1)," / ").concat(f(i.getFullYear()));return Object(b.jsxs)("div",{className:ge.a.ClockStyle,children:[x?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!1)},onMouseLeave:function(){d(!0)},children:v}),!u&&Object(b.jsx)("div",{children:_})]}):Object(b.jsx)("div",{}),Object(b.jsxs)("div",{className:ge.a.ClockButtons,children:[Object(b.jsx)(Z,{onClick:function(){p();var e=window.setInterval((function(){o(new Date)}),1e3);c(e),m(!0)},children:"start"}),Object(b.jsx)(Z,{onClick:p,children:"stop"})]})]})};var Ne=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(Ce,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ke=n(19),Se={loading:!1},ye=function(e){return{type:"CHANGE-LOADING-MODE",loadingMode:e}},we=n.p+"static/media/greatSpinner.a8ff72a5.gif",Ee=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{src:we,style:{maxWidth:"40px"}})})};var Ae=function(){var e=Object(ke.b)(),t=Object(ke.c)((function(e){return e.loading})).loading;return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",t?Object(b.jsx)("div",{children:Object(b.jsx)(Ee,{})}):Object(b.jsx)("div",{children:Object(b.jsx)(Z,{onClick:function(){e(ye(t)),setTimeout((function(){e(ye(!t))}),3e3)},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Ie=n(33),He=Object(Ie.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-LOADING-MODE":return Object(B.a)(Object(B.a)({},e),{},{loading:!t.loadingMode});default:return e}}}),Le=Object(Ie.b)(He),Me=Le;window.store=Le;var Pe=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Oe,{}),Object(b.jsx)(ve,{}),Object(b.jsx)(Ne,{}),Object(b.jsx)(ke.a,{store:Me,children:Object(b.jsx)(Ae,{})})]})},We=n(39),Be=n.n(We),De=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(D.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(Be.a.range," ").concat(a||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(B.a)({style:{width:"200px"},type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r,value:c.initialVal},c))})},Te=(n(52),function(e){var t=e.min,n=e.max,c=e.value1,r=e.value2,s=e.setValue1,i=e.setValue2,o=Object(a.useRef)(t),j=Object(a.useRef)(n),l=Object(a.useRef)(null),u=Object(a.useCallback)((function(e){return Math.round((e-t)/(n-t)*100)}),[t,n]);return Object(a.useEffect)((function(){var e=u(c),t=u(j.current);l.current&&(l.current.style.left="".concat(e,"%"),l.current.style.width="".concat(t-e,"%"))}),[c,u]),Object(a.useEffect)((function(){var e=u(o.current),t=u(r);l.current&&(l.current.style.width="".concat(t-e,"%"))}),[r,u]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("input",{type:"range",min:t,max:n,value:c,onChange:function(e){var t=Math.min(Number(e.target.value),r-1);s(t),o.current=t},className:"thumb thumb--left"}),Object(b.jsx)("input",{type:"range",min:t,max:n,value:r,onChange:function(e){var t=Math.max(Number(e.target.value),c+1);i(t),j.current=t},className:"thumb thumb--right"}),Object(b.jsxs)("div",{className:"slider",children:[Object(b.jsx)("div",{className:"slider__track"}),Object(b.jsx)("div",{ref:l,className:"slider__range"})]})]})}),Fe=n(16),Re=n.n(Fe);var Ge=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(100),s=Object(C.a)(r,2),i=s[0],o=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{className:Re.a.SuperDoubleRangeContainer,children:[Object(b.jsx)("span",{className:Re.a.valueStyle,children:n}),Object(b.jsx)(De,{onChangeRange:c,initialVal:n})]}),Object(b.jsxs)("div",{className:Re.a.SuperDoubleRangeContainer,children:[Object(b.jsx)("span",{className:Re.a.valueStyle,children:n}),Object(b.jsx)(Te,{min:0,max:100,value1:n,value2:i,setValue1:c,setValue2:o}),Object(b.jsx)("span",{className:Re.a.valueStyle,children:i})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Je=function(){return Object(b.jsxs)("div",{children:["Here is gona be tasks since 11-th lesson till the end",Object(b.jsx)(Ge,{})]})},Ve="/pre-junior",Ue="/junior",Ze="/junior-plus";var Ke=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(O.a,{to:Ve})}}),Object(b.jsx)(O.b,{path:Ve,exact:!0,render:function(){return Object(b.jsx)(ae,{})}}),Object(b.jsx)(O.b,{path:Ue,render:function(){return Object(b.jsx)(Pe,{})}}),Object(b.jsx)(O.b,{path:Ze,render:function(){return Object(b.jsx)(Je,{})}}),"// add routes",Object(b.jsx)(O.b,{render:function(){return Object(b.jsx)(se,{})}})]})})};var Xe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(Ke,{})]})})};var qe=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(Xe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(qe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[53,1,2]]]);
//# sourceMappingURL=main.22d42b94.chunk.js.map
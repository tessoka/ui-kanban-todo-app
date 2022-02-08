(this["webpackJsonptodo-app-react-tessoka"]=this["webpackJsonptodo-app-react-tessoka"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(7),c=a.n(n),o=(a(12),a(3)),r=a(2),d=0,l=function(){return d++},u=a(0);var j=function(e){var t=e.dashLimit,a=e.onCreate;return console.log("dashLimit:"),console.log(t),Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)("button",{disabled:!0,className:"btn-disabled",children:"Reached maximum"}):Object(u.jsx)("button",{className:"btn-board-create",onClick:function(){var e={id:l(),dashName:"",tasks:[]};a(e)},children:"+ Create board"})})};var h=function(e){var t=e.dashboard,a=e.addTask;return Object(u.jsxs)("button",{className:"add-task",onClick:function(){return a(t)},children:[Object(u.jsx)("div",{className:"add-task-sign",children:"+"}),Object(u.jsx)("p",{children:"Add Task"})]})};var b=function(e){var t=e.dashboard,a=e.task,i=e.deleteTask,n=e.changePrio,c=(e.toggleDone,e.selectTask),o=Object(s.useState)(!1),d=Object(r.a)(o,2),l=d[0],j=d[1],h=Object(s.useState)(!1),b=Object(r.a)(h,2),k=b[0],p=b[1],O=Object(s.useRef)();return Object(u.jsxs)("div",{className:k?"task-card dragging":"task-card",draggable:!0,onDragStart:function(e){return console.log(t.id),console.log(a.id),console.log("dragged"),O.current={dashId:t.id,taskId:a.id},void setTimeout((function(){p(!0)}),0)},onDragEnd:function(e){p(!1)},children:[Object(u.jsxs)("div",{className:"card-top",children:[Object(u.jsx)("div",{className:"title-text",children:a.taskTitle}),Object(u.jsx)("div",{className:"card-top-x",onClick:function(e){i(e,t,a)},children:"x"})]}),Object(u.jsx)("div",{className:"card-mid",onClick:function(e){return function(e){j(!l),e.stopPropagation()}(e)},children:l?a.taskDetails:"Click for details..."}),Object(u.jsxs)("div",{className:"card-bot",children:[Object(u.jsxs)("div",{className:"task-prio prio-".concat(a.taskPriority),onClick:function(e){return n(e,a)},children:[a.taskPriority," priority"]}),Object(u.jsx)("div",{className:"task-edit",onClick:function(){return c(t,a)},children:Object(u.jsxs)("svg",{className:"edit-logo",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(u.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),Object(u.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})})]})]},a.id)};var k=function(e){var t=e.selectedTask,a=e.updTask,i=e.changePrio,n="";null!==t&&(n=t[1]);var c=Object(s.useState)(n.taskDetails),o=Object(r.a)(c,2),d=o[0],l=o[1],j=Object(s.useState)(n.taskTitle),h=Object(r.a)(j,2),b=h[0],k=h[1];return Object(u.jsxs)("div",{className:"task-details",children:[Object(u.jsxs)("div",{className:"details-header details",children:[Object(u.jsxs)("div",{className:"details-task-header",children:["TaskID: ",n.id]}),Object(u.jsx)("textarea",{className:"details-task-title",value:"Undefined"===b?"":b,placeholder:"Undefined"===b||""===b?"Undefined":"",onChange:function(e){return t=e.target.value,console.log("change task title was kicked off"),void k(t);var t}})]}),Object(u.jsxs)("div",{className:"details-top details",children:[Object(u.jsx)("h3",{children:"Details"}),Object(u.jsxs)("div",{className:"details-task-prio",children:["Priority:",Object(u.jsxs)("p",{className:"task-prio prio-".concat(n.taskPriority),onClick:function(e){return i(e,n)},children:[n.taskPriority," priority"]})]}),Object(u.jsx)("div",{className:"details-task-desc",children:"Description:"}),Object(u.jsx)("textarea",{type:"textarea",value:d,onChange:function(e){return t=e.target.value,void l(t);var t}})]}),Object(u.jsxs)("div",{className:"details-mid details",children:[Object(u.jsx)("h3",{children:"People"}),Object(u.jsx)("p",{className:"details-task-prio"}),Object(u.jsx)("p",{className:"details-task-prio"})]}),Object(u.jsxs)("div",{className:"details-bot details",children:[Object(u.jsx)("h3",{children:"Dates"}),Object(u.jsx)("div",{className:"details-task-dates"})]}),Object(u.jsx)("div",{className:"details-btn-box",children:Object(u.jsx)("button",{onClick:function(){return a(b,d)},children:"UPDATE"})})]})},p=0,O=function(){return p++};var g=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(null),c=Object(r.a)(n,2),d=(c[0],c[1]);Object(s.useEffect)((function(){i([{id:l(),dashName:"ToDo",tasks:[{id:O(),status:"pending",taskPriority:"high",taskTitle:"Some random text",taskDetails:"The detailed description of the specific task max 255 chars."},{id:O(),status:"progress",taskPriority:"low",taskTitle:"Do loundry",taskDetails:"Ever have that feeling where you're not sure if you're awake or dreaming?"},{id:O(),status:"pending",taskPriority:"med",taskTitle:"He who controls the Spice controls the Universe!",taskDetails:"Let's face it, this is not the worst thing you've caught me doing."}]},{id:l(),dashName:"In progress",tasks:[{id:O(),status:"done",taskPriority:"low",taskTitle:"Long live the emperor for two rows",taskDetails:"The detailed description of the specific task max 255 chars."},{id:O(),status:"pending",taskPriority:"low",taskTitle:"Doctor Who?",taskDetails:"The universe is big. It\u2019s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles."},{id:O(),status:"pending",taskPriority:"med",taskTitle:"Hello There",taskDetails:"May the force be with you, young padawan."},{id:O(),status:"pending",taskPriority:"high",taskTitle:"Why so serious?",taskDetails:"The detailed description of the specific task max 255 chars."}]}])}),[]),console.log(a);var p=Object(s.useState)(!1),g=Object(r.a)(p,2),m=g[0],f=g[1];Object(s.useEffect)((function(){a.length>=5&&f(!0)}),[a.length]);var x=function(e,t){var s=Object(o.a)(a);"pending"===t.status?t.status="progress":"progress"===t.status?t.status="done":t.status="pending",console.log("toogleDone function happened"),i(s),e.stopPropagation()},v=function(e){e.tasks.push({id:O(),status:"pending",taskPriority:"low",taskTitle:"Undefined",taskDetails:" "}),console.log("addTask function happened"),i(Object(o.a)(a))},N=function(e,t){"low"===t.taskPriority?t.taskPriority="med":"med"===t.taskPriority?t.taskPriority="high":t.taskPriority="low",console.log("changePrio function happened"),i(Object(o.a)(a)),e.stopPropagation()},T=function(e,t,s){t.tasks=t.tasks.filter((function(e){return e!==s})),console.log("deleteTask function happened"),w(null),i(Object(o.a)(a)),e.stopPropagation()},y=Object(s.useState)(null),P=Object(r.a)(y,2),D=P[0],w=P[1],C=Object(s.useState)(null),S=Object(r.a)(C,2),L=S[0],U=S[1],E=function(e,t){t.id===L?(B(!1),U(null)):(B(!0),w([e,t]),U(t.id))},I=Object(s.useState)(!1),A=Object(r.a)(I,2),M=A[0],B=A[1],H=Object(s.useState)(!0),W=Object(r.a)(H,2),F=W[0],J=W[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"dashboard-container",children:[Object(u.jsxs)("div",{className:"todo-container",children:[Object(u.jsxs)("div",{className:"header-box",children:[Object(u.jsx)("h1",{children:"The Kanban UI"}),Object(u.jsx)(j,{dashLimit:m,onCreate:function(e){console.log("updDashboard function happened"),i([].concat(Object(o.a)(a),[e]))}})]}),Object(u.jsx)("div",{className:"dashboard-box",children:a.map((function(e){return Object(u.jsxs)("div",{className:"board",onDragEnter:function(t){return function(e,t){console.log(t.id),console.log("entered drag"),d()}(0,e)},children:[Object(u.jsxs)("div",{className:"board-header",children:[Object(u.jsx)("input",{type:"text",name:"dashname",id:"dashname",onChange:function(t){return function(e,t){e.dashName=t.target.value,console.log("changeDashName function happened"),i(Object(o.a)(a))}(e,t)},value:""===e.dashName?"":e.dashName,placeholder:""===e.dashName?"Undefined":"",onFocus:function(){return J(!1)},onBlur:function(){return J(!0)}}),F&&Object(u.jsx)("div",{className:"board-delete",onClick:function(){return function(e){i(a.filter((function(t){return t!==e}))),f(!1)}(e)},children:"x"})]}),e.tasks.map((function(t){return Object(u.jsx)(b,{dashboard:e,task:t,deleteTask:T,changePrio:N,toggleDone:x,selectTask:E},t.id)})),Object(u.jsx)(h,{dashboard:e,addTask:v})]},e.id)}))})]}),M&&Object(u.jsx)(k,{selectedTask:D,updTask:function(e,t){D[1].taskTitle=e,D[1].taskDetails=t,i(Object(o.a)(a))},changePrio:N})]})})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.687d1878.chunk.js.map
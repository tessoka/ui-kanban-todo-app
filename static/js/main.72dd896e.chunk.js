(this["webpackJsonptodo-app-react-tessoka"]=this["webpackJsonptodo-app-react-tessoka"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(7),c=s.n(n),r=(s(12),s(3)),o=s(2),d=0,l=function(){return d++},u=s(0);var j=function(e){var t=e.onCreate;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"board-create",onClick:function(){var e={id:l(),dashName:"Undefined",tasks:[]};t(e)},children:"+ Create board"})})};var h=function(e){var t=e.dashboard,s=e.addTask;return Object(u.jsxs)("button",{className:"add-task",onClick:function(){return s(t)},children:[Object(u.jsx)("div",{className:"add-task-sign",children:"+"}),Object(u.jsx)("p",{children:"Add Task"})]})};var b=function(e){var t=e.dashboard,s=e.task,i=e.deleteTask,n=e.changePrio,c=e.toggleDone,r=e.selectTask,d=Object(a.useState)(!1),l=Object(o.a)(d,2),j=l[0],h=l[1];return Object(u.jsxs)("div",{className:"done"===s.status?"task-done task-card":"progress"===s.status?"task-progress task-card":"task-card",onDoubleClick:function(e){return c(e,s)},onClick:function(){return r(t,s)},children:[Object(u.jsxs)("div",{className:"card-top",children:[Object(u.jsx)("div",{className:"title-text",children:s.taskTitle}),Object(u.jsx)("div",{className:"card-top-x",onClick:function(e){i(e,t,s)},children:"x"})]}),Object(u.jsx)("div",{className:"card-mid",onClick:function(e){return function(e){h(!j),e.stopPropagation()}(e)},children:j?s.taskDetails:"Click for details..."}),Object(u.jsxs)("div",{className:"card-bot",children:[Object(u.jsxs)("div",{className:"task-prio prio-".concat(s.taskPriority),onClick:function(e){return n(e,s)},children:[s.taskPriority," priority"]}),Object(u.jsx)("div",{className:"task-assign",children:"Unassigned"})]})]},s.id)};var k=function(e){var t=e.selectedTask,s=e.updTask,i="";null!==t&&(i=t[1]);var n=Object(a.useState)(i.taskDetails),c=Object(o.a)(n,2),r=c[0],d=c[1],l=Object(a.useState)(i.taskTitle),j=Object(o.a)(l,2),h=j[0],b=j[1];return Object(u.jsxs)("div",{className:"task-details",children:[Object(u.jsxs)("div",{className:"details-header details",children:[Object(u.jsxs)("div",{className:"details-task-header",children:["TaskID: ",i.id]}),Object(u.jsx)("textarea",{className:"details-task-title",value:h,onChange:function(e){return t=e.target.value,void b(t);var t}})]}),Object(u.jsxs)("div",{className:"details-top details",children:[Object(u.jsx)("h3",{children:"Details"}),Object(u.jsxs)("div",{className:"details-task-prio",children:["Priority:",Object(u.jsxs)("p",{children:[i.taskPriority," priority"]})]}),Object(u.jsx)("div",{className:"details-task-desc",children:"Description:"}),Object(u.jsx)("textarea",{type:"textarea",value:r,onChange:function(e){return t=e.target.value,void d(t);var t}})]}),Object(u.jsxs)("div",{className:"details-mid details",children:[Object(u.jsx)("h3",{children:"People"}),Object(u.jsx)("p",{className:"details-task-prio"}),Object(u.jsx)("p",{className:"details-task-prio"})]}),Object(u.jsxs)("div",{className:"details-bot details",children:[Object(u.jsx)("h3",{children:"Dates"}),Object(u.jsx)("div",{className:"details-task-dates"})]}),Object(u.jsx)("div",{className:"details-btn-box",children:Object(u.jsx)("button",{onClick:function(){return s(h,r)},children:"UPDATE"})})]})},p=0,O=function(){return p++};var m=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),s=t[0],i=t[1];Object(a.useEffect)((function(){i([{id:l(),dashName:"Today",tasks:[{id:O(),status:"pending",taskPriority:"high",taskTitle:"Some random text",taskDetails:"The detailed description of the specific task max 255 chars."},{id:O(),status:"progress",taskPriority:"low",taskTitle:"Do loundry",taskDetails:"Ever have that feeling where you're not sure if you're awake or dreaming?"},{id:O(),status:"pending",taskPriority:"med",taskTitle:"He who controls the Spice controls the Universe!",taskDetails:"Let's face it, this is not the worst thing you've caught me doing."}]},{id:l(),dashName:"Tomorrow",tasks:[{id:O(),status:"done",taskPriority:"low",taskTitle:"Long live the emperor for two rows",taskDetails:"The detailed description of the specific task max 255 chars."},{id:O(),status:"pending",taskPriority:"low",taskTitle:"Doctor Who?",taskDetails:"The universe is big. It\u2019s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles."},{id:O(),status:"pending",taskPriority:"med",taskTitle:"Hello There",taskDetails:"May the force be with you, young padawan."},{id:O(),status:"pending",taskPriority:"high",taskTitle:"Why so serious?",taskDetails:"The detailed description of the specific task max 255 chars."}]}])}),[]),console.log(s);var n=function(e,t){var a=Object(r.a)(s);"pending"===t.status?t.status="progress":"progress"===t.status?t.status="done":t.status="pending",console.log("toogleDone function happened"),i(a),e.stopPropagation()},c=function(e){e.tasks.push({id:O(),status:"pending",taskPriority:"low",taskTitle:"Undefinded",taskDetails:" "}),console.log("addTask function happened"),i(Object(r.a)(s))},d=function(e,t){"low"===t.taskPriority?t.taskPriority="med":"med"===t.taskPriority?t.taskPriority="high":t.taskPriority="low",console.log("changePrio function happened"),i(Object(r.a)(s)),e.stopPropagation()},p=function(e,t,a){t.tasks=t.tasks.filter((function(e){return e!==a})),console.log("deleteTask function happened"),v(null),i(Object(r.a)(s)),e.stopPropagation()},m=Object(a.useState)(null),x=Object(o.a)(m,2),f=x[0],v=x[1],g=Object(a.useState)(null),N=Object(o.a)(g,2),T=N[0],y=N[1],P=function(e,t){t.id===T?(y(null),S(!1)):S(!0),v([e,t]),y(t.id)},D=Object(a.useState)(!1),w=Object(o.a)(D,2),C=w[0],S=w[1],U=Object(a.useState)(!0),A=Object(o.a)(U,2),E=A[0],B=A[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"dashboard-container",children:[Object(u.jsxs)("div",{className:"todo-container",children:[Object(u.jsxs)("div",{className:"header-box",children:[Object(u.jsx)("h1",{children:"To Do Board"}),Object(u.jsx)(j,{onCreate:function(e){console.log("updDashboard function happened"),i([].concat(Object(r.a)(s),[e]))}})]}),Object(u.jsx)("div",{className:"dashboard-box",children:s.map((function(e){return Object(u.jsxs)("div",{className:"board",children:[Object(u.jsxs)("div",{className:"board-header",children:[Object(u.jsx)("input",{type:"text",name:"dashname",id:"dashname",onChange:function(t){return function(e,t){e.dashName=t.target.value,console.log("changeDashName function happened"),i(Object(r.a)(s))}(e,t)},value:e.dashName,onFocus:function(){return B(!1)},onBlur:function(){return B(!0)}}),E&&Object(u.jsx)("div",{className:"board-delete",onClick:function(){return function(e){i(s.filter((function(t){return t!==e})))}(e)},children:"x"})]}),e.tasks.map((function(t){return Object(u.jsx)(b,{dashboard:e,task:t,deleteTask:p,changePrio:d,toggleDone:n,selectTask:P},t.id)})),Object(u.jsx)(h,{dashboard:e,addTask:c})]},e.id)}))})]}),C&&Object(u.jsx)(k,{selectedTask:f,updTask:function(e,t){f[1].taskTitle=e,f[1].taskDetails=t,i(Object(r.a)(s))}})]})})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.72dd896e.chunk.js.map
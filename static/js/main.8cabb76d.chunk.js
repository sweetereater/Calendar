(this.webpackJsonptest3=this.webpackJsonptest3||[]).push([[0],{12:function(t,e,a){t.exports={backdrop:"TaskRedactor_backdrop__1uOoe",taskRedactorContainer:"TaskRedactor_taskRedactorContainer__1vz1e",closingTaskRedactor:"TaskRedactor_closingTaskRedactor__3Umgl",taskInput:"TaskRedactor_taskInput__18Mky",taskContainer:"TaskRedactor_taskContainer__2Uhyk",taskButtons:"TaskRedactor_taskButtons__268fm",successOnEdit:"TaskRedactor_successOnEdit__25_bH"}},17:function(t,e,a){t.exports={dayContainer:"Day_dayContainer__2sceh",dateLink:"Day_dateLink__3OBUb",disabledDateLink:"Day_disabledDateLink__N2FXS",date:"Day_date__1ibu9",taskText:"Day_taskText__1aP2X",greenDot:"Day_greenDot__1o3_N"}},25:function(t,e,a){t.exports={taskItem:"TaskItem_taskItem__2s9KA",taskButtons:"TaskItem_taskButtons__15AvL"}},26:function(t,e,a){t.exports={notificationsContainer:"Notifications_notificationsContainer__O1Q79",notification:"Notifications_notification__3llCc",closeNotification:"Notifications_closeNotification__1iAg7"}},30:function(t,e,a){t.exports={gridTable:"MonthTable_gridTable__19vWq",weekDayName:"MonthTable_weekDayName__S88BT"}},34:function(t,e,a){t.exports={container:"Calendar_container__1jjYu"}},35:function(t,e,a){t.exports={datePanel:"DatePanel_datePanel__3xXDK"}},36:function(t,e,a){t.exports={select:"DateSelect_select__20BfG"}},43:function(t,e,a){},50:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(22),r=a.n(i),s=(a(43),a(13)),o=a(5),u=a(34),d=a.n(u),l=a(35),j=a.n(l),b=a(36),m=a.n(b),O=a(1);function f(t){var e=t.value,a=t.items,n=t.onChange;return Object(O.jsx)("select",{className:m.a.select,value:e,onChange:function(t){return n(Number(t.currentTarget.value))},children:a.map((function(t,e){return Object(O.jsx)("option",{value:t.number,children:t.title},e)}))})}var T=c.a.memo(f),k=a(4),p=a(2);function h(t,e){var a=[],n=new Date(t,e,1),c=n.getDay(),i=new Date(t,e+1,0).getDate();if(c>0)for(var r=new Date(t,e,0),s=r.getDate(),o=s-c+1;o<=s;o++)a.push({curMonth:r.getMonth(),date:o});for(var u=1;u<=i;u++)a.push({curMonth:n.getMonth(),date:u});if(a.length<42)for(var d=new Date(t,e+1,1).getMonth(),l=1;a.length<42;l++)a.push({curMonth:d,date:l});return a}var _="calendar/SET_YEAR",g="calendar/SET_MONTH",x=new Date,v=x.getFullYear(),y=x.getMonth(),N=x.getDate(),D=h(v,y),I=[{title:"2019",number:2019},{title:"2020",number:2020},{title:"2021",number:2021},{title:"2022",number:2022},{title:"2023",number:2023}],C=[{title:"Jan",number:0},{title:"Feb",number:1},{title:"Mar",number:2},{title:"Apr",number:3},{title:"May",number:4},{title:"Jun",number:5},{title:"Jul",number:6},{title:"Aug",number:7},{title:"Sep",number:8},{title:"Oct",number:9},{title:"Nov",number:10},{title:"Dec",number:11}],S={year:v,month:y,days:D,currentYear:v,currentMonth:y,currentDay:N},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(p.a)(Object(p.a)({},t),{},{year:e.payload,days:h(e.payload,t.month)});case g:return Object(p.a)(Object(p.a)({},t),{},{month:e.payload,days:h(t.year,e.payload)});default:return t}};var E=function(){var t=Object(k.c)((function(t){return t.calendarPage})),e=t.year,a=t.month,n=Object(k.b)();return Object(O.jsxs)("div",{className:j.a.datePanel,children:[Object(O.jsx)(T,{value:e,onChange:function(t){return n(function(t){return{type:_,payload:t}}(t))},items:I}),Object(O.jsx)(T,{value:a,onChange:function(t){return n(function(t){return{type:g,payload:t}}(t))},items:C})]})},w=a(30),A=a.n(w),R=a(17),P=a.n(R),F=a(16),L=a(15),K=a(54),J="tasks/CHANGE_NEW_TASK_TEXT",B="tasks/CHANGE_NEW_TASK_START_TIME",H="tasks/CHANGE_NEW_TASK_END_TIME",U="tasks/CHANGE_NEW_TASK_REMIND_TIME",W="tasks/CREATE_NEW_TASK",V="tasks/DELETE_TASK",Y="tasks/UPDATE_TASK",G="tasks/SHOW_SUCCESSFUL_PANEL",X="tasks/LOAD_TASKS_FROM_LC",Q={newTaskText:"",newTaskStartTime:"10:00",newTaskEndTime:"11:00",newTaskRemindTime:"00:00",tasks:{},isPanelVisible:!1},q=function(t){return t.sort((function(t,e){return t.startTime>e.startTime?1:-1}))},z=function(t){return{type:J,text:t}},Z=function(t){return{type:B,startTime:t}},$=function(t){return{type:H,endTime:t}},tt=function(t){return{type:U,remindTime:t}},et=function(t){return{type:G,visible:t}},at=function(t){return function(e){var a=localStorage.getItem(t);if(a){var n=JSON.parse(a);n.length>0&&e(function(t,e){return{type:X,date:t,tasks:e}}(t,n))}}},nt=function(t){return function(e,a){var n=a().tasksPage,c={id:Object(K.a)(),text:n.newTaskText,startTime:n.newTaskStartTime,endTime:n.newTaskEndTime,remindTime:n.newTaskRemindTime},i=localStorage.getItem(t);i=i?JSON.parse(i):[],localStorage.setItem(t,JSON.stringify([].concat(Object(L.a)(i),[c]))),e(function(t,e){return{type:W,date:t,newTask:e}}(t,c))}},ct=function(t,e){return function(a){var n=JSON.parse(localStorage.getItem(t)).filter((function(t){return t.id!==e}));localStorage.setItem(t,JSON.stringify(n)),a(function(t,e){return{type:V,date:t,id:e}}(t,e))}},it=function(t,e,a,n,c,i){return function(r){var s=JSON.parse(localStorage.getItem(t)).map((function(t){return t.id===e?Object(p.a)(Object(p.a)({},t),{},{text:a,startTime:n,endTime:c,remindTime:i}):t}));localStorage.setItem(t,JSON.stringify(s)),r(function(t,e,a,n,c,i){return{type:Y,date:t,id:e,payload:{text:a,startTime:n,endTime:c,remindTime:i}}}(t,e,a,n,c,i))}},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J:return Object(p.a)(Object(p.a)({},t),{},{newTaskText:e.text});case B:return Object(p.a)(Object(p.a)({},t),{},{newTaskStartTime:e.startTime});case H:return Object(p.a)(Object(p.a)({},t),{},{newTaskEndTime:e.endTime});case U:return Object(p.a)(Object(p.a)({},t),{},{newTaskRemindTime:e.remindTime});case W:var a=t.tasks[e.date]||[],n=q([].concat(Object(L.a)(a),[e.newTask]));return Object(p.a)(Object(p.a)({},t),{},{tasks:Object(p.a)(Object(p.a)({},t.tasks),{},Object(F.a)({},e.date,n))});case V:return Object(p.a)(Object(p.a)({},t),{},{tasks:Object(p.a)(Object(p.a)({},t.tasks),{},Object(F.a)({},e.date,t.tasks[e.date].filter((function(t){return t.id!==e.id}))))});case G:return Object(p.a)(Object(p.a)({},t),{},{isPanelVisible:e.visible});case Y:return Object(p.a)(Object(p.a)({},t),{},{tasks:Object(p.a)(Object(p.a)({},t.tasks),{},Object(F.a)({},e.date,q(t.tasks[e.date].map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),e.payload):t})))))});case X:return Object(p.a)(Object(p.a)({},t),{},{tasks:Object(p.a)(Object(p.a)({},t.tasks),{},Object(F.a)({},e.date,q(e.tasks)))});default:return t}};function st(t){var e=Object(k.b)(),a=Object(k.c)((function(t){return t.calendarPage})),c=a.year,i=a.month,r=(a.currentDay,t.data),o=r.curMonth,u=r.date,d="".concat(c,"-").concat(o,"-").concat(u),l=Object(k.c)((function(t){return t.tasksPage.tasks}))[d]||[];Object(n.useEffect)((function(){0===l.length&&e(at(d))}),[d]);var j="".concat(P.a.dayContainer),b="".concat(P.a.dateLink);o!==i&&(b+=" ".concat(P.a.disabledDateLink));return Object(O.jsx)("div",{className:j,children:Object(O.jsxs)(s.b,{onClick:function(t){return function(t,e){e!==i&&t.preventDefault()}(t,o)},className:b,to:"/date/".concat(d),children:[Object(O.jsxs)("span",{className:P.a.date,children:[" ",u," "]}),l.length>0&&l.slice(0,3).map((function(t){var e=t.text.length<8?t.text:t.text.slice(0,8)+"...";return Object(O.jsxs)("div",{className:P.a.taskText,children:[Object(O.jsx)("span",{className:P.a.greenDot}),Object(O.jsx)("span",{children:e})]},t.id)}))]})})}var ot=c.a.memo(st);var ut=function(){var t=Object(k.c)((function(t){return t.calendarPage.days}));return Object(O.jsxs)("div",{className:A.a.gridTable,children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((function(t,e){return Object(O.jsx)("div",{className:A.a.weekDayName,children:t},e)})),t.map((function(t,e){return Object(O.jsx)(ot,{data:t},e)}))]})};var dt=function(){return Object(O.jsxs)("div",{className:d.a.container,children:[Object(O.jsx)(E,{}),Object(O.jsx)(ut,{})]})},lt=a(14),jt=a(8),bt=a.n(jt),mt=a(53),Ot=a(25),ft=a.n(Ot);function Tt(t){var e=t.fullDate,a=t.taskData,n=a.id,c=a.text,i=a.startTime,r=a.endTime,o=Object(k.c)((function(t){return t.notificationsPage.timers})).filter((function(t){return t.taskId===n})),u=Object(k.b)();return Object(O.jsxs)("div",{className:ft.a.taskItem,children:[Object(O.jsxs)("div",{className:ft.a.taskInfo,children:[Object(O.jsx)("p",{children:c}),Object(O.jsxs)("p",{children:["c ",i," \u0434\u043e ",r]})]}),Object(O.jsxs)("div",{className:ft.a.taskButtons,children:[Object(O.jsx)(s.b,{to:"/date/".concat(e,"/edit/").concat(n),children:Object(O.jsx)("button",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(O.jsx)("button",{onClick:function(){return function(t,e){o&&o.forEach((function(t){return clearTimeout(t.timerId)})),u(ct(t,e))}(e,n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})}var kt=c.a.memo(Tt),pt=function(t){return t.split(":").map((function(t){return Number(t)}))},ht=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return 3600*t+60*e+a};var _t=Object(o.e)((function(t){var e=t.match.params.dateValue,a=e.split("-"),n=Object(lt.a)(a,3),c=n[0],i=n[1],r=n[2],o=Object(k.c)((function(t){return t.tasksPage})),u=o.tasks[e],d=o.newTaskText,l=o.newTaskStartTime,j=o.newTaskEndTime,b=o.newTaskRemindTime,m=o.isPanelVisible,f=C.find((function(t){return t.number===Number(i)})).title,T=Object(k.b)(),p=function(){var t=ht.apply(void 0,Object(L.a)(pt(l))),a=ht.apply(void 0,Object(L.a)(pt(j)));d&&a>t&&(T(nt(e)),T(z("")),T(Z("10:00")),T($("11:00")),T(tt("00:00")),T(et(!0)),setTimeout((function(){T(et(!1))}),1e3))};return Object(O.jsxs)("div",{className:bt.a.dateManagerContainer,children:[Object(O.jsxs)(s.b,{className:bt.a.closingDateManagerContainer,to:"/",children:[" ",Object(O.jsx)(mt.a,{})," "]}),Object(O.jsxs)("div",{className:bt.a.dateManager,children:[m&&Object(O.jsx)("div",{className:bt.a.successfullPanel,children:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e!"}),Object(O.jsxs)("h1",{className:bt.a.currentDate,children:[r," ",f," ",c]}),Object(O.jsxs)("div",{className:bt.a.tasks,onKeyDown:function(t){"Enter"===t.key&&p()},children:[Object(O.jsxs)("div",{className:bt.a.dataEntry,children:[Object(O.jsx)("input",{placeholder:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430",className:bt.a.taskInput,value:d,onChange:function(t){T(z(t.target.value))}}),Object(O.jsxs)("div",{className:bt.a.inputContainer,children:[Object(O.jsx)("label",{htmlFor:"startTime",children:" \u041d\u0430\u0447\u0430\u043b\u043e "}),Object(O.jsx)("input",{id:"startTime",className:bt.a.taskInput,value:l,onChange:function(t){T(Z(t.target.value))},type:"time"})]}),Object(O.jsxs)("div",{className:bt.a.inputContainer,children:[Object(O.jsx)("label",{htmlFor:"endTime",children:" \u041a\u043e\u043d\u0435\u0446 "}),Object(O.jsx)("input",{id:"endTime",className:bt.a.taskInput,value:j,onChange:function(t){T($(t.target.value))},type:"time"})]}),Object(O.jsxs)("div",{className:bt.a.inputContainer,children:[Object(O.jsx)("label",{htmlFor:"remindTime",children:" \u041d\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0437\u0430 "}),Object(O.jsx)("input",{id:"remindTime",className:bt.a.taskInput,value:b,onChange:function(t){T(tt(t.target.value))},type:"time"})]})]}),Object(O.jsx)("button",{onClick:p,className:bt.a.addNewTask,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0446\u0435\u043b\u0438:"}),u&&u.map((function(t){return Object(O.jsx)(kt,{fullDate:e,taskData:t},t.id)}))]})]})]})]})})),gt=a(12),xt=a.n(gt),vt="notifications/ADD_NOTIFICATION",yt="notifications/DELETE_NOTIFICATION",Nt="notifications/ADD_TIMER",Dt="notifications/UPDATE_TIMER",It={notifications:[],timers:[]},Ct=function(t){return function(e,a){var n=a().notificationsPage.timers,c=function(){var t=new Date,e=t.getHours(),a=t.getMinutes(),n=t.getSeconds();return ht(e,a,n)}();t.forEach((function(t){var a=n.filter((function(e){return e.taskId===t.id})),i=a.find((function(t){return"taskStart"===t.timerType})),r=a.find((function(t){return"taskRemind"===t.timerType})),s={id:t.id,text:t.text,startTime:t.startTime,endTime:t.endTime},o=pt(t.startTime),u=Object(lt.a)(o,2),d=u[0],l=u[1],j=ht(d,l);if(!r){var b=pt(t.remindTime),m=Object(lt.a)(b,2),O=m[0],f=m[1],T=ht(O,f),k=j-T-c;if(k>=0&&T){var h="taskRemind";e(St(t.id,Object(p.a)(Object(p.a)({},s),{},{noteType:h}),k,h))}}if(!i){var _=j-c;if(_>=0){var g="taskStart";e(St(t.id,Object(p.a)(Object(p.a)({},s),{},{noteType:g}),_,g))}}}))}},St=function(t,e,a,n){return function(c){var i=setTimeout((function(){var t;c((t=Object(p.a)(Object(p.a)({},e),{},{noteType:n}),{type:vt,payload:t}))}),1e3*a);c(function(t,e,a){return{type:Nt,taskId:t,timerId:e,timerType:a}}(t,i,n))}},Mt=function(t,e,a){return function(n){clearTimeout(e),n(function(t,e){return{type:Dt,taskId:t,timerType:e}}(t,a))}},Et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case vt:return Object(p.a)(Object(p.a)({},t),{},{notifications:[e.payload].concat(Object(L.a)(t.notifications))});case yt:return Object(p.a)(Object(p.a)({},t),{},{notifications:t.notifications.filter((function(t){return t.noteType+t.id!==e.noteType+e.id})),timers:t.timers.filter((function(t){return t.timerType+t.timerId!==e.noteType+e.id}))});case V:return Object(p.a)(Object(p.a)({},t),{},{notifications:t.notifications.filter((function(t){return t.id!==e.id})),timers:t.timers.filter((function(t){return t.taskId!==e.id}))});case Nt:return Object(p.a)(Object(p.a)({},t),{},{timers:[].concat(Object(L.a)(t.timers),[{taskId:e.taskId,timerId:e.timerId,timerType:e.timerType}])});case Dt:return Object(p.a)(Object(p.a)({},t),{},{timers:t.timers.filter((function(t){return t.timerType+t.taskId!==e.timerType+e.taskId}))});default:return t}};var wt=Object(o.e)((function(t){var e=t.match.params,a=e.dateValue,c=e.id,i=Object(k.c)((function(t){return t.tasksPage.tasks[a].find((function(t){return t.id===c}))})),r=Object(k.c)((function(t){return t.notificationsPage.timers})).filter((function(t){return t.taskId===c})),o=Object(k.b)(),u=Object(n.useState)(i.text),d=Object(lt.a)(u,2),l=d[0],j=d[1],b=Object(n.useState)(i.startTime),m=Object(lt.a)(b,2),f=m[0],T=m[1],p=Object(n.useState)(i.endTime),h=Object(lt.a)(p,2),_=h[0],g=h[1],x=Object(n.useState)(i.remindTime),v=Object(lt.a)(x,2),y=v[0],N=v[1],D=function(t,e){e(t.target.value)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:xt.a.backdrop}),Object(O.jsxs)("div",{className:xt.a.taskRedactorContainer,children:[Object(O.jsxs)(s.b,{to:"/date/".concat(a),className:xt.a.closingTaskRedactor,children:[" ",Object(O.jsx)(mt.a,{})," "]}),Object(O.jsx)("h1",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(O.jsx)("input",{className:xt.a.taskInput,value:l,onChange:function(t){return D(t,j)}}),Object(O.jsxs)("div",{className:xt.a.taskContainer,children:[Object(O.jsx)("label",{htmlFor:"changeStartTime",children:"\u041d\u0430\u0447\u0430\u043b\u043e"}),Object(O.jsx)("input",{id:"changeStartTime",className:xt.a.taskInput,value:f,onChange:function(t){return D(t,T)},type:"time"})]}),Object(O.jsxs)("div",{className:xt.a.taskContainer,children:[Object(O.jsx)("label",{htmlFor:"changeEndTime",children:"\u041a\u043e\u043d\u0435\u0446"}),Object(O.jsx)("input",{id:"changeEndTime",className:xt.a.taskInput,value:_,onChange:function(t){return D(t,g)},type:"time"})]}),Object(O.jsxs)("div",{className:xt.a.taskContainer,children:[Object(O.jsx)("label",{htmlFor:"changeRemindTime",children:"\u041d\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0437\u0430"}),Object(O.jsx)("input",{id:"changeRemindTime",className:xt.a.taskInput,value:y,onChange:function(t){return D(t,N)},type:"time"})]}),Object(O.jsx)(s.b,{className:xt.a.successOnEdit,onClick:function(){if(l&&f&&_&&o(it(a,c,l,f,_,y)),f!==i.startTime){var t=r.find((function(t){return"taskStart"===t.timerType}));t&&o(Mt(c,t.timerId,"taskStart"))}if(y!==i.remindTime){var e=r.find((function(t){return"taskRemind"===t.timerType}));e&&o(Mt(c,e.timerId,"taskRemind"))}},to:"/date/".concat(a),children:"OK"})]})]})})),At=a(26),Rt=a.n(At);var Pt=function(){var t=Object(k.c)((function(t){return t.notificationsPage.notifications})),e=Object(k.c)((function(t){return t.calendarPage})),a=e.currentYear,c=e.currentMonth,i=e.currentDay,r="".concat(a,"-").concat(c,"-").concat(i),s=Object(k.c)((function(t){return t.tasksPage.tasks}))[r]||[],o=Object(k.b)();return Object(n.useEffect)((function(){o(Ct(s))}),[s]),Object(O.jsx)("div",{className:Rt.a.notificationsContainer,children:t.length>0&&t.map((function(t){return Object(O.jsx)(Ft,{noteId:t.id,noteType:t.noteType,text:t.text,startTime:t.startTime,endTime:t.endTime},"".concat(t.noteType,"-").concat(t.id))}))})};function Ft(t){var e=Object(k.b)(),a="taskRemind"===t.noteType?"\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435":"\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435 \u043e \u043d\u0430\u0447\u0430\u043b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",n=function(a){var n,c;e((n=a,c=t.noteType,{type:yt,id:n,noteType:c}))};return Object(O.jsxs)("div",{className:Rt.a.notification,children:[Object(O.jsxs)("button",{onClick:function(){return n(t.noteId)},className:Rt.a.closeNotification,to:"/",children:[" ",Object(O.jsx)(mt.a,{})," "]}),Object(O.jsx)("h3",{children:a}),Object(O.jsxs)("p",{children:['\u0423 \u0432\u0430\u0441 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e "',t.text,'" \u0441 ',t.startTime," \u0434\u043e ",t.endTime]})]})}var Lt=function(){return Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(o.a,{path:"/",children:[Object(O.jsx)(dt,{}),Object(O.jsx)(Pt,{})]}),Object(O.jsx)(o.a,{path:"/date/:dateValue",children:Object(O.jsx)(_t,{})}),Object(O.jsx)(o.a,{path:"/date/:dateValue/edit/:id",children:Object(O.jsx)(wt,{})})]})})},Kt=a(27),Jt=a(38),Bt=Object(Kt.b)({calendarPage:M,tasksPage:rt,notificationsPage:Et}),Ht=Object(Kt.c)(Bt,Object(Kt.a)(Jt.a));r.a.render(Object(O.jsx)(k.a,{store:Ht,children:Object(O.jsx)(Lt,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={dateManagerContainer:"DateManager_dateManagerContainer__3QOmv",dateManager:"DateManager_dateManager__38OQq",dataManagerAppearance:"DateManager_dataManagerAppearance__1gcjD",successfullPanel:"DateManager_successfullPanel__24MrC",closingDateManagerContainer:"DateManager_closingDateManagerContainer__2NYdC",currentDate:"DateManager_currentDate__3T4-B",addNewTask:"DateManager_addNewTask__L7hMH",tasks:"DateManager_tasks__or5hu",inputContainer:"DateManager_inputContainer__vUM-K",taskInput:"DateManager_taskInput__2txvL"}}},[[50,1,2]]]);
//# sourceMappingURL=main.8cabb76d.chunk.js.map
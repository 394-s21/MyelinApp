(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return He}));var a=n(215),r=n.n(a),o=n(3),i=n.n(o),c=n(11),l=n.n(c),s=n(0),u=n.n(s),m=n(412),f=n(2),d=n(4),g=n(71),p=n(16),h=n(214),b=n(25),y=n(42);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={fontSize:16,marginLeft:10,marginRight:10},O={display:"flex",flexDirection:"row",alignItems:"flex-start",marginTop:20,paddingTop:5,paddingBottom:5,width:"100%",borderWidth:1,borderColor:"black",borderRadius:5},k=f.a.create({container:E(E({},O),{},{backgroundColor:"#fff"}),complete:E(E({},O),{},{backgroundColor:"gray"}),title:E(E({},v),{},{fontWeight:"500"}),dateDue:E(E({},v),{},{fontStyle:"italic"}),incompleteStatus:E(E({},v),{},{color:"red"}),completeStatus:E(E({},v),{},{color:"green"}),urgencyStatus:E(E({},v),{},{color:"red",fontSize:32}),urgencyView:E(E({},v),{},{flex:1,display:"flex",flexDirection:"column",alignItems:"flex-end"}),textView:E(E({},v),{},{flex:1,display:"flex",flexDirection:"column",width:"65%",color:"red"})}),S=function(e){var t=e.task,n=e.view;return u.a.createElement(b.a,{onPress:function(){return n(t)}},u.a.createElement(d.a,{style:"Complete"===t.status?k.complete:k.container},u.a.createElement(d.a,{style:k.textView},u.a.createElement(p.a,{style:k.title},t.title),u.a.createElement(p.a,{style:k.dateDue},"Due: ",t.dateDue)),u.a.createElement(d.a,{style:k.urgencyView},u.a.createElement(p.a,{style:k.urgencyStatus},1===t.urgency?"\u2757\ufe0f":""," "))))},x=f.a.create({container:{width:"85%",maxWidth:800}}),j=function(e){var t=e.tasks,n=e.view;return u.a.createElement(y.a,{style:x.container},t.map((function(e,t){return u.a.createElement(S,{key:t,task:e,view:n})})))},P=n(158);n(276),n(278);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}P.a.initializeApp({apiKey:"AIzaSyCfQWvGnwih9JFpyL0ypAswUMSdEyD8AdE",authDomain:"myelinapp-513fb.firebaseapp.com",databaseURL:"https://myelinapp-513fb-default-rtdb.firebaseio.com",projectId:"myelinapp-513fb",storageBucket:"myelinapp-513fb.appspot.com",messagingSenderId:"936159143445",appId:"1:936159143445:web:2b03711a46dc9022f9501c"});var B=f.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",marginTop:10},newTaskButton:{borderWidth:1,borderRadius:5,borderColor:"black",backgroundColor:"#c3a6ff",width:"85%",textAlign:"center",padding:5,maxWidth:800,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},title:{fontSize:22}}),D=function(e){var t=e.navigation,n=e.route.params.user.id,a=Object(s.useState)(null),r=l()(a,2),o=r[0],i=r[1];return Object(s.useEffect)((function(){var e=P.a.database().ref("users/"+n),t=function(e){e.val()&&i(function(e){var t=[];return Object.keys(e.tasks).map((function(n){var a=e.tasks[n];a.id=n,t.push(a)})),T(T({},e),{},{taskList:t})}(e.val()))};return e.on("value",t,(function(e){return console.log(e)})),function(){e.off("value",t)}}),[]),o?u.a.createElement(d.a,{style:B.container},u.a.createElement(b.a,{onPress:function(){return t.navigate("PrebuiltTaskScreen",{thisUser:o})},style:B.newTaskButton},u.a.createElement(p.a,{style:B.title},"Create new task")),u.a.createElement(j,{tasks:o.taskList,view:function(e){t.navigate("TaskDetailScreen",{task:e,thisUser:o})}})):u.a.createElement(d.a,{style:B.container},u.a.createElement(p.a,null,"Loading..."))},z=n(17),R=n.n(z),I=n(232);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=f.a.create({container:{flex:1,alignItems:"center",marginTop:20},statusContainer:{backgroundColor:"white",paddingTop:10,paddingBottom:10,paddingLeft:75,paddingRight:75,borderWidth:1,borderColor:"black",marginBottom:15},title:{fontSize:20,fontWeight:"500"},description:{fontSize:16,marginBottom:10},resource:{fontSize:16,marginBottom:10,color:"blue",textDecorationLine:"underline"},date:{fontSize:14,fontStyle:"italic",marginBottom:5},incompleteStatus:{fontSize:16,fontWeight:"bold",color:"red"},completeStatus:{fontSize:16,fontWeight:"bold",color:"green"},owner:{marginBottom:30},tempContainer:{flex:1,flexDirection:"row",width:"70%",maxWidth:800},bottomButtonContainer:{flex:1,flexDirection:"row"},completeButton:{backgroundColor:"white",textAlign:"center",shadowOffset:{width:1,height:1},shadowColor:"black",shadowOpacity:1,padding:10,margin:10,height:40},completeButtonText:{color:"black",fontSize:18},deleteButton:{backgroundColor:"red",textAlign:"center",shadowOffset:{width:1,height:1},shadowColor:"black",shadowOpacity:1,padding:10,margin:10,maxWidth:800,height:40},deleteButtonText:{color:"white",fontSize:18}}),L=function(e){var t=e.navigation,n=e.route,a=n.params.task,r=n.params.thisUser,o=r.id;function i(e){var n;return R.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:(n=A({},a)).status=e?"Complete":"Incomplete",P.a.database().ref("users/"+o+"/tasks/"+a.id).set(n).catch((function(e){setSubmitError(e.message)})),t.navigate("MainTasksScreen",{thisUser:r});case 4:case"end":return i.stop()}}),null,null,null,Promise)}return u.a.createElement(d.a,{style:M.container},u.a.createElement(p.a,{style:M.title},a.title),u.a.createElement(p.a,{style:M.date},"Created: ",a.dateCreated," | Due: ",a.dateDue),u.a.createElement(p.a,{style:M.owner},"- ",a.owner," -"),u.a.createElement(p.a,{style:M.description},a.description),""!=a.resources&&u.a.createElement(p.a,{style:M.resource,onPress:function(){return I.a.openURL(a.resources)}},a.resources),u.a.createElement(d.a,{style:M.statusContainer},u.a.createElement(p.a,{style:"Complete"===a.status?M.completeStatus:M.incompleteStatus},a.status)),u.a.createElement(g.a,{title:"Edit Task",onPress:function(){return t.navigate("EditTaskScreen",{task:a,thisUser:r})}}),u.a.createElement(g.a,{title:"View Message Board",onPress:function(){return t.navigate("ViewMessagesScreen",{task:a,thisUser:r})}}),"Complete"===a.status?u.a.createElement(b.a,{style:M.completeButton,onPress:function(){return i(!1)}},u.a.createElement(p.a,{style:M.completeButtonText},"Mark Task As Incomplete")):u.a.createElement(b.a,{style:M.completeButton,onPress:function(){return i(!0)}},u.a.createElement(p.a,{style:M.completeButtonText},"Mark Task As Complete")),u.a.createElement(b.a,{style:M.deleteButton,onPress:function(){return R.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:P.a.database().ref("users/"+o+"/tasks/"+a.id).remove().catch((function(e){setSubmitError(e.message)})),t.navigate("MainTasksScreen",{thisUser:r});case 2:case"end":return e.stop()}}),null,null,null,Promise)}},u.a.createElement(p.a,{style:M.deleteButtonText},"Delete Task")))},V=n(57),F=n(84),U=n(65);var N=n(30),_=n.n(N),G=n(15),J=n.n(G),q={primary:"lightblue",secondary:"#039be5",black:"#222222",white:"#ffffff",ghostWhite:"#f8f8ff",lightGrey:"#f9f9f9",mediumGrey:"#6e6869",red:"#fc5c65",lightPurple:"#c3a6ff"};function H(e){var t=e.error,n=e.visible;return t&&n?u.a.createElement(p.a,{style:K.errorText},t):null}var K=f.a.create({errorText:{marginLeft:15,color:q.red,fontSize:16,marginBottom:5,fontWeight:"600"}}),Q=n(48),Y=n(413),X=["leftIcon","width","rightIcon","handlePasswordVisibility"];function Z(e){var t=e.leftIcon,n=e.width,a=void 0===n?"100%":n,r=e.rightIcon,o=e.handlePasswordVisibility,i=J()(e,X);return u.a.createElement(d.a,{style:[$.container,{width:a}]},t&&u.a.createElement(Y.a,{name:t,size:20,color:q.mediumGrey,style:$.icon}),u.a.createElement(Q.a,_()({style:$.input,placeholderTextColor:q.mediumGrey},i)),r&&u.a.createElement(b.a,{onPress:o},u.a.createElement(Y.a,{name:r,size:20,color:q.mediumGrey,style:$.rightIconStyles})))}var $=f.a.create({container:{backgroundColor:q.lightGrey,borderRadius:25,flexDirection:"row",justifyContent:"center",padding:15,marginVertical:10},icon:{marginRight:10},input:{flex:1,width:"100%",fontSize:18,color:q.black},rightIconStyles:{alignSelf:"center",marginLeft:10}}),ee=["name","width"];var te=f.a.create({button:{borderWidth:1,borderRadius:5,borderColor:"black",textAlign:"center",padding:5,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},buttonText:{color:q.black,fontSize:18,fontWeight:"600",textTransform:"uppercase"}}),ne=n(127),ae=["name","title","onChange"];var re=f.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"},title:{color:q.white,fontSize:18,fontWeight:"600",marginRight:5}}),oe=function(e){return function(e){var t=e.children,n=e.initialValues,a=e.onSubmit,r=e.validationSchema;return u.a.createElement(U.a,{initialValues:n,validationSchema:r,onSubmit:a},(function(){return u.a.createElement(u.a.Fragment,null,t)}))}(e)};oe.Field=function(e){var t=e.name,n=e.width,a=J()(e,ee),r=Object(U.b)(),o=r.setFieldTouched,i=r.setFieldValue,c=r.values,l=r.errors,s=r.touched;return u.a.createElement(u.a.Fragment,null,u.a.createElement(Z,_()({value:c[t],onChangeText:function(e){return i(t,e)},onBlur:function(){return o(t)},width:n},a)),u.a.createElement(H,{error:l[t],visible:s[t]}))},oe.Button=function(e){var t=e.title,n=e.onPress,a=e.color,r=void 0===a?"lightPurple":a,o=Object(U.b)(),i=o.handleSubmit,c=o.values,l="function"===typeof t?t(c):t;return u.a.createElement(b.a,{style:[te.button,{backgroundColor:q[r]}],onPress:function(){n&&n(),i()}},u.a.createElement(p.a,{style:te.buttonText},l))},oe.ErrorMessage=H,oe.Switch=function(e){var t=e.name,n=e.title,a=e.onChange,r=void 0===a?function(e){return e}:a,o=J()(e,ae),i=Object(U.b)(),c=i.values,l=i.setFieldValue,s=c[t];return u.a.createElement(d.a,{style:re.container},u.a.createElement(p.a,{style:re.title},n),u.a.createElement(ne.a,_()({value:s,onValueChange:function(e){r(e),l(t,e)}},o)))};var ie=oe,ce={title:"",description:"",dateCreated:"",dateModified:"",dateDue:"",status:"Incomplete",owner:"",comments:"",notifications:"",resources:""};function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=f.a.create({addTaskButton:{borderWidth:1,borderRadius:5,borderColor:"black",backgroundColor:"#c3a6ff",textAlign:"center",padding:5,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},container:{flex:1,marginTop:10,marginLeft:"auto",marginRight:"auto",width:"90%"},h1_text:{fontSize:48,marginBottom:25,justifyContent:"center",textAlign:"center"},field:{padding:5,backgroundColor:"white",borderRadius:5,fontSize:18},fieldContainer:{marginTop:10,marginBottom:20},label:{fontWeight:"bold"},name:{fontSize:24,marginBottom:10,marginLeft:"auto",marginRight:"auto"},connectButton:{margin:30,padding:10,textAlign:"center",backgroundColor:"lightblue"},connectText:{fontSize:22,marginLeft:"auto",marginRight:"auto"},roleButton:{backgroundColor:"#2196F3",fontSize:16,width:250,padding:15,marginLeft:"auto",marginRight:"auto",justifyContent:"center",textAlign:"center"},buttonText:{fontSize:20,color:"black",textAlign:"center"}}),me=function(e){var t=e.navigation,n=e.route,a=Object(s.useState)(!1),r=l()(a,2),o=r[0],i=r[1],c=Object(s.useState)(""),m=l()(c,2),f=m[0],d=m[1],g=n.params.thisUser,h=g.id,y=n.params.prebuiltTask;return o?u.a.createElement(V.a,{style:ue.container},u.a.createElement(p.a,{style:ue.h1_text},"Task successfully created!"),u.a.createElement(b.a,{style:ue.addTaskButton,onPress:function(){return t.navigate("MainTasksScreen",{thisUser:g})}},u.a.createElement(p.a,{style:ue.buttonText},"Return to Home Screen"))):u.a.createElement(V.a,{style:ue.container},u.a.createElement(p.a,{label:"Name",style:ue.name},"Post a new task!"),u.a.createElement(F.a,null,u.a.createElement(ie,{initialValues:se(se({},ce),y),onSubmit:function(e){i(!0),function(e){var t,n;R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t=Date(),n=se(se({},e),{},{dateCreated:t,dateModified:t,status:"Incomplete",owner:h}),P.a.database().ref("users/"+h+"/tasks/"+Date.now()).set(n).catch((function(e){d(e.message)}));case 3:case"end":return a.stop()}}),null,null,null,Promise)}(e)}},u.a.createElement(ie.Field,{name:"title",placeholder:"Enter task name",autoCapitalize:"none"}),u.a.createElement(ie.Field,{name:"description",placeholder:"Enter task description",autoCapitalize:"none"}),u.a.createElement(ie.Field,{name:"dateDue",placeholder:"Enter due date for this task",autoCapitalize:"none"}),u.a.createElement(ie.Button,{title:"Add new task"}),u.a.createElement(ie.ErrorMessage,{error:f}))))};function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge={fontSize:16,marginLeft:10,marginRight:10},pe=f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"flex-start",justifyContent:"center",marginTop:20,paddingTop:5,paddingBottom:5,width:"100%",height:"10%",borderWidth:1,borderColor:"black",borderRadius:5},title:de(de({},ge),{},{fontWeight:"500",fontSize:24}),dateDue:de(de({},ge),{},{fontStyle:"italic"}),incompleteStatus:de(de({},ge),{},{color:"red"}),completeStatus:de(de({},ge),{},{color:"green"})}),he=function(e){var t=e.user,n=e.view;return u.a.createElement(b.a,{style:{height:60},onPress:function(){return n(t)}},u.a.createElement(d.a,{style:pe.container},u.a.createElement(p.a,{style:pe.title},t.patientInfo.name)))},be=f.a.create({container:{flex:1,alignItems:"center",marginTop:10},newTaskButton:{borderWidth:1,borderRadius:5,borderColor:"black",backgroundColor:"#c3a6ff",width:"85%",textAlign:"center",padding:5,maxWidth:800,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},title:{fontSize:22}}),ye=function(e){var t=e.navigation,n=function(e){t.navigate("MainTasksScreen",{user:e})},a=Object(s.useState)([]),r=l()(a,2),o=r[0],i=r[1];return Object(s.useEffect)((function(){var e=P.a.database().ref("users"),t=function(e){if(e.val()){var t=e.val();i(Object.keys(t).map((function(e){return t[e]})))}};return e.on("value",t,(function(e){return console.log(e)})),function(){return e.off("value",t)}}),[]),u.a.createElement(d.a,{style:be.container},o.map((function(e,t){return u.a.createElement(he,{key:t,user:e,view:n})})))},we={tasks:[{title:"I need a Handicap Vehicle Permit",description:"Please order or renew handicap vehicle permit."},{title:"I need a new blood glucose meter",description:"Please send a prescription for a new glucometer."},{title:"What is the best diet for me?",description:"Please give me information on the most appropriate diet for me."},{title:"I need help trimming my toenails.",description:"Please schedule me an appointment with podiatry."},{title:"What can I take for my seasonal allergies?",description:"Please send me a list of over-the-counter medications that are safe for me to take."}]};function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe={fontSize:16,marginLeft:10,marginRight:10},ke=f.a.create({container:{display:"flex",flexDirection:"row",backgroundColor:"#fff",alignItems:"flex-start",marginTop:20,paddingTop:5,paddingBottom:5,width:"100%",borderWidth:1,borderColor:"black",borderRadius:5},title:ve(ve({},Oe),{},{fontWeight:"500"}),dateDue:ve(ve({},Oe),{},{fontStyle:"italic"}),incompleteStatus:ve(ve({},Oe),{},{color:"red"}),completeStatus:ve(ve({},Oe),{},{color:"green"})}),Se=function(e){var t=e.prebuiltTask,n=e.view;return u.a.createElement(b.a,{style:{height:60},onPress:function(){return n(t)}},u.a.createElement(d.a,{style:ke.container},u.a.createElement(p.a,{style:ke.title},t.title)))},xe=f.a.create({container:{flex:1,alignItems:"center",marginTop:10},newTaskButton:{borderWidth:1,borderRadius:5,borderColor:"black",backgroundColor:"#c3a6ff",width:"85%",textAlign:"center",padding:5,maxWidth:800,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},title:{fontSize:22}}),je=function(e){var t=e.navigation,n=e.route,a=function(e){t.navigate("CreateTaskScreen",{thisUser:r,prebuiltTask:e})},r=n.params.thisUser;return u.a.createElement(d.a,{style:xe.container},u.a.createElement(b.a,{onPress:function(){return t.navigate("CreateTaskScreen",{thisUser:r})},style:xe.newTaskButton},u.a.createElement(p.a,{style:xe.title},"Create Blank Task")),u.a.createElement(d.a,{style:xe.container},we.tasks.map((function(e,t){return u.a.createElement(Se,{key:t,prebuiltTask:e,view:a})}))))};function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te=f.a.create({addTaskButton:{borderWidth:1,borderRadius:5,borderColor:"black",backgroundColor:"#c3a6ff",textAlign:"center",padding:5,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},container:{flex:1,marginTop:10,marginLeft:"auto",marginRight:"auto",width:"90%"},h1_text:{fontSize:48,marginBottom:25,justifyContent:"center",textAlign:"center"},field:{padding:5,backgroundColor:"white",borderRadius:5,fontSize:18},fieldContainer:{marginTop:10,marginBottom:20},label:{fontWeight:"bold"},name:{fontSize:24,marginBottom:10,marginLeft:"auto",marginRight:"auto"},connectButton:{margin:30,padding:10,textAlign:"center",backgroundColor:"lightblue"},connectText:{fontSize:22,marginLeft:"auto",marginRight:"auto"},roleButton:{backgroundColor:"#2196F3",fontSize:16,width:250,padding:15,marginLeft:"auto",marginRight:"auto",justifyContent:"center",textAlign:"center"},buttonText:{fontSize:20,color:"black",textAlign:"center"}}),Be=function(e){var t=e.navigation,n=e.route,a=Object(s.useState)(""),r=l()(a,2),o=r[0],i=r[1],c=n.params.task,m=n.params.thisUser,f=m.id;return u.a.createElement(V.a,{style:Te.container},u.a.createElement(p.a,{label:"Name",style:Te.name},"Task Edit Screen"),u.a.createElement(F.a,null,u.a.createElement(ie,{initialValues:Ce({},c),onSubmit:function(e){!function(e){var n;R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:n=Ce(Ce({},e),{},{dateModified:Date(),status:"Incomplete"}),P.a.database().ref("users/"+f+"/tasks/"+c.id).set(n).catch((function(e){i(e.message)})),t.navigate("TaskDetailScreen",{task:n,thisUser:m});case 3:case"end":return a.stop()}}),null,null,null,Promise)}(e)}},u.a.createElement(ie.Field,{name:"title",placeholder:"Enter task name",autoCapitalize:"none"}),u.a.createElement(ie.Field,{name:"description",placeholder:"Enter task description",autoCapitalize:"none"}),u.a.createElement(ie.Field,{name:"dateDue",placeholder:"Enter due date for this task",autoCapitalize:"none"}),u.a.createElement(ie.Button,{title:"Save changes"}),u.a.createElement(ie.ErrorMessage,{error:o}))))},De=n(56),ze=function(e){var t=e.message;return u.a.createElement(d.a,{style:Ie.fieldContainer},u.a.createElement(p.a,{style:Ie.fieldText},t))},Re=function(e){var t=e.messages;return u.a.createElement(y.a,null,t.length>0?t.map((function(e,t){return u.a.createElement(ze,{key:t,message:e})})):u.a.createElement(ze,{message:"No messages."}))},Ie=f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",paddingTop:30},userContainer:{flex:1,alignItems:"center"},fieldContainer:{borderWidth:1,borderRadius:5,padding:15,margin:5},fieldText:{marginBottom:10,fontWeight:"bold",fontSize:16},roleButton:{backgroundColor:"#2196F3",fontSize:16,margin:15,width:250,padding:15,textAlign:"center"},buttonText:{fontSize:20,color:"ghostwhite",textAlign:"center"}}),We=function(e){var t=e.navigation,n=e.route,a=n.params.task,r=n.params.thisUser,o=r.id,i=Object(s.useState)([]),c=l()(i,2),m=c[0],f=c[1];return Object(s.useEffect)((function(){var e=P.a.database().ref("users/"+o+"/tasks/"+a.id+"/comments"),t=function(e){if(e.val()){var t=e.val(),n=Object.values(t);f(n)}};return e.on("value",t,(function(e){return console.log(e)})),function(){return e.off("value",t)}}),[]),u.a.createElement(d.a,{style:Ie.container},u.a.createElement(d.a,null,u.a.createElement(Re,{messages:m})),u.a.createElement(g.a,{title:"New Message",onPress:function(){return t.navigate("CreateMessageScreen",{user:r,task:a})}}),u.a.createElement(De.a,{style:"auto"}))},Ae=f.a.create({container:{flex:1,marginTop:10,marginLeft:"auto",marginRight:"auto",width:"90%"},field:{padding:5,backgroundColor:"white",borderRadius:5,fontSize:18},fieldContainer:{marginTop:10,marginBottom:20},label:{fontWeight:"bold"},name:{fontSize:24,marginBottom:10,marginLeft:"auto",marginRight:"auto"},developerImage:{width:200,height:300,marginLeft:"auto",marginRight:"auto",marginBottom:10},connectButton:{margin:30,padding:10,textAlign:"center",backgroundColor:"lightblue"},connectText:{fontSize:22,marginLeft:"auto",marginRight:"auto"}}),Me=function(e){var t=e.navigation,n=e.route,a=Object(s.useState)(!1),r=l()(a,2),o=r[0],i=r[1],c=n.params.user,m=c.id,f=n.params.task;return u.a.createElement(V.a,{style:Ae.container},!o&&u.a.createElement(p.a,{label:"Name",style:Ae.name},"Post a message on this task"),o?u.a.createElement(d.a,null,u.a.createElement(p.a,{label:"Name",style:Ae.name},"Message succesfully posted!"),u.a.createElement(b.a,{style:Ae.connectButton,onPress:function(){t.navigate("ViewMessagesScreen",{thisUser:c,task:f})}},u.a.createElement(p.a,{style:Ae.connectText},"Return to message board"))):u.a.createElement(F.a,null,u.a.createElement(ie,{initialValues:{message:""},onSubmit:function(e){return function(e){var t;return R.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.message,P.a.database().ref("users/"+m+"/tasks/"+f.id+"/comments").child(Date.now()).set(t).catch((function(e){setSubmitError(e.message),console.log(e.message)})),i(!0);case 3:case"end":return n.stop()}}),null,null,null,Promise)}(e)}},u.a.createElement(ie.Field,{name:"message",leftIcon:"inbox",placeholder:"Enter message",autoCapitalize:"none",autoFocus:!0,multiline:!0,numberOfLines:20}),u.a.createElement(ie.Button,{title:"Send Message"}))))},Le=f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},userContainer:{flex:1,alignItems:"center"},h1_text:{fontSize:48,marginBottom:25},h3_text:{fontSize:24,textAlign:"center",marginBottom:20},h4_text:{fontSize:16,textAlign:"center",marginBottom:15},roleButton:{backgroundColor:"#2196F3",fontSize:16,margin:15,width:250,padding:15,textAlign:"center"},buttonText:{fontSize:20,color:"ghostwhite",textAlign:"center"}}),Ve=function(e){var t=e.navigation,n=Object(s.useState)({}),a=l()(n,2);a[0],a[1];return u.a.createElement(d.a,{style:Le.container},u.a.createElement(p.a,{h1:!0,style:Le.h1_text},"Welcome to Myelin!"),u.a.createElement(p.a,{h3:!0,style:Le.h3_text},"Are you a:"),u.a.createElement(d.a,null,u.a.createElement(b.a,{style:Le.roleButton,onPress:function(){t.navigate("RegisterScreen",{roles:{role:"careTeam"}})}},u.a.createElement(p.a,{style:Le.buttonText},"Care Team Member"))),u.a.createElement(d.a,null,u.a.createElement(b.a,{style:Le.roleButton,onPress:function(){t.navigate("RegisterScreen",{roles:{role:"patient"}})}},u.a.createElement(p.a,{style:Le.buttonText},"Patient/Caregiver"))),u.a.createElement(De.a,{style:"auto"}))},Fe=n(92),Ue=Fe.a().shape({email:Fe.c().required("Please enter a valid email").email().label("Email"),password:Fe.c().required().min(6,"Password must have at least 6 characters").label("Password"),confirm:Fe.c().oneOf([Fe.b("password"),null],"Confirmation password must match password")}),Ne=f.a.create({h1_text:{fontSize:48,marginBottom:25,textTransform:"capitalize"},container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"},field:{height:40,width:300,padding:5,backgroundColor:"white"},fieldContainer:{marginBottom:20,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},label:{fontWeight:"bold"}}),_e=function(e){var t=e.route,n=e.navigation,a=Object(s.useState)(""),r=l()(a,2),o=r[0],i=r[1];function c(e){var a,r;return R.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=e.email,r=e.password,i(null),o.prev=2,o.next=5,R.a.awrap(P.a.auth().signInWithEmailAndPassword(a,r));case 5:"careTeam"===t.params.roles.role?n.navigate("ViewPatientsScreen"):n.navigate("MainTasksScreen",{user:{id:"Chris"}}),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(2),i(o.t0.message);case 11:case"end":return o.stop()}}),null,null,[[2,8]],Promise)}function m(e){var a,r,o,c,l;return R.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return a=e.name,r=e.email,o=e.password,i(null),s.prev=2,s.next=5,R.a.awrap(P.a.auth().createUserWithEmailAndPassword(r,o));case 5:return c=s.sent,l=c.user,s.next=9,R.a.awrap(l.updateProfile({displayName:a}));case 9:"careTeam"===t.params.roles.role?n.navigate("ViewPatientsScreen"):n.navigate("MainTasksScreen",{user:l}),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(2),i(s.t0.message);case 15:case"end":return s.stop()}}),null,null,[[2,12]],Promise)}return u.a.createElement(V.a,{style:Ne.container},u.a.createElement(p.a,{style:Ne.h1_text},"Welcome ",t.params.roles.role,"s!"),u.a.createElement(y.a,null,u.a.createElement(ie,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:Ue,onSubmit:function(e){return R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.confirmPassword?m(e):c(e));case 1:case"end":return t.stop()}}),null,null,null,Promise)}},u.a.createElement(ie.Field,{name:"email",leftIcon:"email",placeholder:"Enter email",autoCapitalize:"none",keyboardType:"email-address",textContentType:"emailAddress"}),u.a.createElement(ie.Field,{name:"password",leftIcon:"lock",placeholder:"Enter password",autoCapitalize:"none",autoCorrect:!1,secureTextEntry:!0,textContentType:"password"}),u.a.createElement(ie.Field,{name:"confirmPassword",leftIcon:"lock",placeholder:"Confirm password",autoCapitalize:"none",autoCorrect:!1,secureTextEntry:!0,textContentType:"password"}),u.a.createElement(ie.Button,{title:function(e){return e.confirmPassword?"Register":"Login"}}),u.a.createElement(ie.ErrorMessage,{error:o,visible:!0}))))};function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Je=Object(m.a)(),qe=function(e){var t=e.navigation;return u.a.createElement(d.a,{style:{marginRight:10}},u.a.createElement(g.a,{title:"Logout",color:"#f28888",onPress:function(){P.a.auth().signOut(),t.navigate("AppViewScreen")}}))};function He(){var e=Object(s.useState)({role:"admin"}),t=l()(e,2),n=t[0],a=t[1],o=Object(s.useState)(),c=l()(o,2),m=c[0],f=c[1];return Object(s.useEffect)((function(){if(m&&m.uid){var e=P.a.database().ref("users").child(m.uid),t=function(e){a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({uid:m.uid},e.val()))};return e.on("value",t,(function(e){return alert(e)})),function(){e.off("value",t)}}a(null)}),[m]),Object(s.useEffect)((function(){P.a.auth().onAuthStateChanged((function(e){f(e)}))}),[]),u.a.createElement(h.a,null,u.a.createElement(Je.Navigator,{screenOptions:function(e){var t=e.navigation;return{headerStyle:{backgroundColor:"#610f94"},headerTintColor:"white",headerTitleStyle:{alignSelf:"center",fontWeight:"bold"},headerTitleContainerStyle:{left:0,right:0},headerRight:function(e){return r()(e),n?u.a.createElement(qe,{navigation:t}):u.a.createElement(p.a,null)}}}},u.a.createElement(Je.Screen,{name:"AppViewScreen",component:Ve,options:{title:"Choose App View"}}),u.a.createElement(Je.Screen,{name:"RegisterScreen",component:_e,options:{title:"Register"}}),u.a.createElement(Je.Screen,{name:"ViewPatientsScreen",component:ye,options:{title:"Your Patients"}}),u.a.createElement(Je.Screen,{name:"MainTasksScreen",component:D,options:{title:"Main Tasks"}}),u.a.createElement(Je.Screen,{name:"PrebuiltTaskScreen",component:je,options:{title:"Choose from Pre-Created Tasks"}}),u.a.createElement(Je.Screen,{name:"CreateTaskScreen",component:me,options:{title:"Create New Task"}}),u.a.createElement(Je.Screen,{name:"TaskDetailScreen",component:L,options:{title:"Task Details"}}),u.a.createElement(Je.Screen,{name:"ViewMessagesScreen",component:We,options:{title:"View Messages"}}),u.a.createElement(Je.Screen,{name:"EditTaskScreen",component:Be,options:{title:"Edit Task"}}),u.a.createElement(Je.Screen,{name:"CreateMessageScreen",component:Me,options:{title:"New message"}})))}f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},261:function(e,t,n){e.exports=n(405)}},[[261,1,2]]]);
//# sourceMappingURL=app.999e768e.chunk.js.map
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{191:function(e,t,a){"use strict";a.d(t,"a",(function(){return Y}));var n=a(0),r=a.n(n),o=a(254),i=a(3),l=a(159),c=a(16),s=a.n(c),d=a(23),u=a(5),m=a(40),h=[{id:"laura",patientInfo:{name:"Laura Chen",sex:"female",dob:"09/23/1958",pcp:"Dr John Doe",nextVisit:"05/25/2019",homePhone:"402-456-7890",mobilePhone:"(236) 561-6354",insurance:"Medicare",pharmacy:"CVS",careTeamMembers:["Dr. John Doe","Nurse Ted Smith","Social Worker Colleen Jones","Sister Sara Chen"]},tasks:[{title:"Follow up with Vascular surgery",description:"",dateCreated:"05/09/2021",dateDue:"05/30/2021",status:"Incomplete",owner:"Dr. John Doe",comments:"",notifications:""},{title:"Cardiology evaluation",description:"",dateCreated:"05/09/2021",dateDue:"06/09/2021",status:"Incomplete",owner:"Nurse Ted Smith",comments:"",notifications:""}]},{id:"lau",patientInfo:{name:"Lau Cheny",sex:"female",dob:"09/23/1958",pcp:"Dr John Doe",nextVisit:"05/25/2019",homePhone:"402-456-7890",mobilePhone:"(236) 561-6354",insurance:"Medicare",pharmacy:"CVS",careTeamMembers:["Dr. John Doe","Nurse Ted Smith","Social Worker Colleen Jones","Sister Sara Chen"]},tasks:[{title:"Follow up with Vascular surgery",description:"",dateCreated:"05/09/2021",dateDue:"05/30/2021",status:"Incomplete",owner:"Dr. John Doe",comments:"",notifications:""},{title:"Cardiology evaluation",description:"",dateCreated:"05/09/2021",dateDue:"06/09/2021",status:"Incomplete",owner:"Nurse Ted Smith",comments:"",notifications:""}]},{id:"Chris",patientInfo:{name:"Chris Chen",sex:"female",dob:"09/23/1958",pcp:"Dr John Doe",nextVisit:"05/25/2019",homePhone:"402-456-7890",mobilePhone:"(236) 561-6354",insurance:"Medicare",pharmacy:"CVS",careTeamMembers:["Dr. John Doe","Nurse Ted Smith","Social Worker Colleen Jones","Sister Sara Chen"]},tasks:[{title:"Follow up with Vascular surgery",description:"",dateCreated:"05/09/2021",dateDue:"05/30/2021",status:"Incomplete",owner:"Dr. John Doe",comments:"",notifications:""},{title:"Cardiology evaluation",description:"",dateCreated:"05/09/2021",dateDue:"06/09/2021",status:"Incomplete",owner:"Nurse Ted Smith",comments:"",notifications:""}]},{id:"ben",patientInfo:{name:"Ben Chen",sex:"male",dob:"09/23/1958",pcp:"Dr John Doe",nextVisit:"05/25/2019",homePhone:"402-456-7890",mobilePhone:"(236) 561-6354",insurance:"Medicare",pharmacy:"CVS",careTeamMembers:["Dr. John Doe","Nurse Ted Smith","Social Worker Colleen Jones","Sister Sara Chen"]},tasks:[{title:"Follow up with Vascular surgery",description:"",dateCreated:"05/09/2021",dateDue:"05/30/2021",status:"Incomplete",owner:"Dr. John Doe",comments:"",notifications:""},{title:"Cardiology evaluation",description:"",dateCreated:"05/09/2021",dateDue:"06/09/2021",status:"Incomplete",owner:"Nurse Ted Smith",comments:"",notifications:""}]},{id:"zad",patientInfo:{name:"Zaddeen Chen",sex:"female",dob:"09/23/1958",pcp:"Dr John Doe",nextVisit:"05/25/2019",homePhone:"402-456-7890",mobilePhone:"(236) 561-6354",insurance:"Medicare",pharmacy:"CVS",careTeamMembers:["Dr. John Doe","Nurse Ted Smith","Social Worker Colleen Jones","Sister Sara Chen"]},tasks:[{title:"Follow up with Vascular surgery",description:"",dateCreated:"05/09/2021",dateDue:"05/30/2021",status:"Incomplete",owner:"Dr. John Doe",comments:"",notifications:""},{title:"Cardiology evaluation",description:"",dateCreated:"05/09/2021",dateDue:"06/09/2021",status:"Incomplete",owner:"Nurse Ted Smith",comments:"",notifications:""}]}],f=a(47),g=a(2),p=a.n(g);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S={fontSize:16,marginLeft:10,marginRight:10},C=i.a.create({container:{flex:1,backgroundColor:"#fff",alignitems:"flex-start",justifyContent:"center",marginTop:20,paddingTop:5,paddingBottom:5,width:"100%",borderWidth:1,borderColor:"black",borderRadius:5},title:y(y({},S),{},{fontWeight:500}),dateDue:y(y({},S),{},{fontStyle:"italic"}),incompleteStatus:y(y({},S),{},{color:"red"}),completeStatus:y(y({},S),{},{color:"green"})}),w=function(e){var t=e.task,a=e.view;return r.a.createElement(m.a,{onPress:function(){return a(t)}},r.a.createElement(u.a,{style:C.container},r.a.createElement(d.a,{style:C.title},t.title),r.a.createElement(d.a,{style:C.dateDue},"Due: ",t.dateDue),r.a.createElement(d.a,{style:C.incompleteStatus},"Status: ",t.status)))},k=i.a.create({container:{width:"85%",maxWidth:800}}),D=function(e){var t=e.tasks,a=e.view;return r.a.createElement(f.a,{style:k.container},t.map((function(e,t){return r.a.createElement(w,{key:t,task:e,view:a})})))},E=i.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",marginTop:10},newTaskButton:{borderWidth:1,borderRadius:5,borderColor:"black",backgroundColor:"#c3a6ff",width:"85%",textAlign:"center",padding:5,maxWidth:800,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},title:{fontSize:22}}),v=function(e){var t=e.navigation,a=e.route,n=function(e){t.navigate("TaskDetailScreen",{task:e})},o=s()(h);return a&&void 0!=a.params&&"{}"!==JSON.stringify(a.params.newTask)&&o[0].tasks.push(a.params.newTask),r.a.createElement(u.a,{style:E.container},r.a.createElement(m.a,{onPress:function(){return t.navigate("CreateTaskScreen")},style:E.newTaskButton},r.a.createElement(d.a,{style:E.title},"Create new task")),o.map((function(e,t){return r.a.createElement(D,{key:t,tasks:e.tasks,view:n})})))},T=i.a.create({container:{flex:1,alignItems:"center",marginTop:20},statusContainer:{backgroundColor:"white",paddingTop:10,paddingBottom:10,paddingLeft:75,paddingRight:75,borderWidth:1,borderColor:"black"},title:{fontSize:20,fontWeight:500},description:{fontSize:16,marginBottom:10},date:{fontSize:14,fontStyle:"italic",marginBottom:5},incompleteStatus:{fontSize:16,fontWeight:"bold",color:"red"},completeStatus:{fontSize:16,fontWeight:"bold",color:"green"},owner:{marginBottom:30}}),x=function(e){e.navigation;var t=e.route.params.task;return r.a.createElement(u.a,{style:T.container},r.a.createElement(d.a,{style:T.title},t.title),r.a.createElement(d.a,{style:T.date},"Created: ",t.dateCreated," | Due: ",t.dateDue),r.a.createElement(d.a,{style:T.owner},"- ",t.owner," -"),r.a.createElement(d.a,{style:T.description},t.description),r.a.createElement(u.a,{style:T.statusContainer},r.a.createElement(d.a,{style:T.incompleteStatus},t.status)))},O=a(15),I=a.n(O),P=a(131),j=a(190),J=a(56);var V=a(26),z=a.n(V),W=a(13),B=a.n(W),R={primary:"lightblue",secondary:"#039be5",black:"#222222",white:"#ffffff",ghostWhite:"#f8f8ff",lightGrey:"#f9f9f9",mediumGrey:"#6e6869",red:"#fc5c65",lightPurple:"#c3a6ff"};function F(e){var t=e.error,a=e.visible;return t&&a?r.a.createElement(d.a,{style:M.errorText},t):null}var M=i.a.create({errorText:{marginLeft:15,color:R.red,fontSize:16,marginBottom:5,fontWeight:"600"}}),N=a(43),L=a(255);function A(e){var t=e.leftIcon,a=e.width,n=void 0===a?"100%":a,o=e.rightIcon,i=e.handlePasswordVisibility,l=B()(e,["leftIcon","width","rightIcon","handlePasswordVisibility"]);return r.a.createElement(u.a,{style:[G.container,{width:n}]},t&&r.a.createElement(L.a,{name:t,size:20,color:R.mediumGrey,style:G.icon}),r.a.createElement(N.a,z()({style:G.input,placeholderTextColor:R.mediumGrey},l)),o&&r.a.createElement(m.a,{onPress:i},r.a.createElement(L.a,{name:o,size:20,color:R.mediumGrey,style:G.rightIconStyles})))}var G=i.a.create({container:{backgroundColor:R.lightGrey,borderRadius:25,flexDirection:"row",justifyContent:"center",padding:15,marginVertical:10},icon:{marginRight:10},input:{flex:1,width:"100%",fontSize:18,color:R.black},rightIconStyles:{alignSelf:"center",marginLeft:10}});var _=i.a.create({button:{borderWidth:1,borderRadius:5,borderColor:"black",textAlign:"center",padding:5,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},buttonText:{color:R.black,fontSize:18,fontWeight:"600",textTransform:"uppercase"}}),H=a(103);var Z=i.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"},title:{color:R.white,fontSize:18,fontWeight:"600",marginRight:5}}),q=function(e){return function(e){var t=e.children,a=e.initialValues,n=e.onSubmit,o=e.validationSchema;return r.a.createElement(J.a,{initialValues:a,validationSchema:o,onSubmit:n},(function(){return r.a.createElement(r.a.Fragment,null,t)}))}(e)};q.Field=function(e){var t=e.name,a=e.width,n=B()(e,["name","width"]),o=Object(J.b)(),i=o.setFieldTouched,l=o.setFieldValue,c=o.values,s=o.errors,d=o.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,z()({value:c[t],onChangeText:function(e){return l(t,e)},onBlur:function(){return i(t)},width:a},n)),r.a.createElement(F,{error:s[t],visible:d[t]}))},q.Button=function(e){var t=e.title,a=e.onPress,n=e.color,o=void 0===n?"lightPurple":n,i=Object(J.b)(),l=i.handleSubmit,c=i.values,s="function"===typeof t?t(c):t;return r.a.createElement(m.a,{style:[_.button,{backgroundColor:R[o]}],onPress:function(){a&&a(),l()}},r.a.createElement(d.a,{style:_.buttonText},s))},q.ErrorMessage=F,q.Switch=function(e){var t=e.name,a=e.title,n=e.onChange,o=void 0===n?function(e){return e}:n,i=B()(e,["name","title","onChange"]),l=Object(J.b)(),c=l.values,s=l.setFieldValue,m=c[t];return r.a.createElement(u.a,{style:Z.container},r.a.createElement(d.a,{style:Z.title},a),r.a.createElement(H.a,z()({value:m,onValueChange:function(e){o(e),s(t,e)}},i)))};var K=q,Q=i.a.create({addTaskButton:{borderWidth:1,borderRadius:5,borderColor:"black",backgroundColor:"#c3a6ff",textAlign:"center",padding:5,shadowOffset:{width:2,height:2},shadowColor:"black",shadowOpacity:1},container:{flex:1,marginTop:10,marginLeft:"auto",marginRight:"auto",width:"90%"},h1_text:{fontSize:48,marginBottom:25,justifyContent:"center",textAlign:"center"},field:{padding:5,backgroundColor:"white",borderRadius:5,fontSize:18},fieldContainer:{marginTop:10,marginBottom:20},label:{fontWeight:"bold"},name:{fontSize:24,marginBottom:10,marginLeft:"auto",marginRight:"auto"},developerImage:{width:200,height:300,marginLeft:"auto",marginRight:"auto",marginBottom:10},connectButton:{margin:30,padding:10,textAlign:"center",backgroundColor:"lightblue"},connectText:{fontSize:22,marginLeft:"auto",marginRight:"auto"},roleButton:{backgroundColor:"#2196F3",fontSize:16,width:250,padding:15,marginLeft:"auto",marginRight:"auto",justifyContent:"center",textAlign:"center"},buttonText:{fontSize:20,color:"black",textAlign:"center"},developerImage:{width:200,height:200,marginLeft:"auto",marginRight:"auto",marginBottom:10}}),U=function(e){var t=e.navigation,a=Object(n.useState)(!1),o=I()(a,2),i=o[0],l=o[1],c=Object(n.useState)({}),s=I()(c,2),u=s[0],h=s[1];return i?r.a.createElement(P.a,{style:Q.container},r.a.createElement(d.a,{style:Q.h1_text},"Task successfully created!"),r.a.createElement(m.a,{style:Q.addTaskButton,onPress:function(){return t.navigate("MainTasksScreen",{newTask:u})}},r.a.createElement(d.a,{style:Q.buttonText},"Return to Home Screen"))):r.a.createElement(P.a,{style:Q.container},r.a.createElement(d.a,{label:"Name",style:Q.name},"Post a new task!"),r.a.createElement(j.a,null,r.a.createElement(K,{initialValues:{title:"",description:"",dateCreated:"",dateDue:"",status:"Incomplete",owner:"",comments:"",notifications:""},onSubmit:function(e){l(!0),function(e){h({title:e.title,description:e.description,dateCreated:"05/13/2021",dateDue:e.dateDue,status:"Incomplete",owner:"Dr. Jane Doe",comments:"",notifications:""})}(e)}},r.a.createElement(K.Field,{name:"title",placeholder:"Enter task name",autoCapitalize:"none"}),r.a.createElement(K.Field,{name:"description",placeholder:"Enter task description",autoCapitalize:"none"}),r.a.createElement(K.Field,{name:"dateDue",placeholder:"Enter due date for this task",autoCapitalize:"none"}),r.a.createElement(K.Button,{title:"Add new task"}))))},X=Object(o.a)();function Y(){return r.a.createElement(l.a,null,r.a.createElement(X.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#610f94"},headerTintColor:"white",headerTitleStyle:{alignSelf:"center",fontWeight:"bold"},headerTitleContainerStyle:{left:0}}},r.a.createElement(X.Screen,{name:"MainTasksScreen",component:v,options:{title:"Main Tasks"}}),r.a.createElement(X.Screen,{name:"CreateTaskScreen",component:U,options:{title:"Create New Task"}}),r.a.createElement(X.Screen,{name:"TaskDetailScreen",component:x,options:{title:"Task Details"}})))}i.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},201:function(e,t,a){e.exports=a(247)}},[[201,1,2]]]);
//# sourceMappingURL=app.a0d01d22.chunk.js.map
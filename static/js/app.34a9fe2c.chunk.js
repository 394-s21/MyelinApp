(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{147:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));a(197);var n=a(0),r=a.n(n),l=a(201),o=a(3),i=a(125),s=a(21),c=a(2),u=[{id:"laura",patientInfo:{name:"Laura Chen",sex:"female",dob:"09/23/1958",pcp:"Dr John Doe",nextVisit:"05/25/2019",homePhone:"402-456-7890",mobilePhone:"(236) 561-6354",insurance:"Medicare",pharmacy:"CVS",careTeamMembers:["Dr. John Doe","Nurse Ted Smith","Social Worker Colleen Jones","Sister Sara Chen"]},tasks:[{title:"Follow up with Vascular surgery",description:"",dateCreated:"05/09/2021",dateDue:"05/30/2021",status:"Incomplete",owner:"Dr. John Doe",comments:"",notifications:""},{title:"Cardiology evaluation",description:"",dateCreated:"05/09/2021",dateDue:"06/09/2021",status:"Incomplete",owner:"Nurse Ted Smith",comments:"",notifications:""}]}],m=a(93),f=function(e){var t=e.task,a=e.view;return r.a.createElement(m.a,{onPress:function(){return a(t)}},r.a.createElement(c.a,{style:d.container},r.a.createElement(s.a,{style:d.title},t.title),r.a.createElement(s.a,{style:d.dateDue},"Due: ",t.dateDue),r.a.createElement(s.a,{style:d.status},"Status: ",t.status)))},d=o.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"flex-start",justifyContent:"center",marginBottom:20,marginTop:10},title:{flex:1,backgroundColor:"#fff",alignItems:"flex-start",justifyContent:"center",fontSize:16},dateDue:{flex:1,backgroundColor:"#fff",alignItems:"flex-start",justifyContent:"center",fontSize:16},status:{flex:1,backgroundColor:"#fff",alignItems:"flex-start",justifyContent:"center",fontSize:16}}),k=a(46),p=function(e){var t=e.tasks,a=e.view;return r.a.createElement(k.a,null,t.map((function(e,t){return r.a.createElement(f,{key:t,task:e,view:a})})))},E=u,g=function(e){var t=e.navigation,a=function(e){t.navigate("TaskDetailScreen",{task:e})};return r.a.createElement(c.a,null,r.a.createElement(s.a,null,"MainTasksScreen"),E.map((function(e){return r.a.createElement(p,{tasks:e.tasks,view:a})})))},C=function(e){e.navigation;var t=e.route.params.task;return r.a.createElement(c.a,null,r.a.createElement(s.a,null,"Task Detail Screen"),r.a.createElement(s.a,null,t.title),r.a.createElement(s.a,null,t.description),r.a.createElement(s.a,null,t.dateCreated),r.a.createElement(s.a,null,t.dateDue),r.a.createElement(s.a,null,t.status),r.a.createElement(s.a,null,t.owner))},D=Object(l.a)();function S(){return r.a.createElement(i.a,null,r.a.createElement(D.Navigator,null,r.a.createElement(D.Screen,{name:"MainTasksScreen",component:g,options:{title:"Main Tasks"}}),r.a.createElement(D.Screen,{name:"TaskDetailScreen",component:C,options:{title:"Task Detail"}})))}o.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},157:function(e,t,a){e.exports=a(196)}},[[157,1,2]]]);
//# sourceMappingURL=app.34a9fe2c.chunk.js.map
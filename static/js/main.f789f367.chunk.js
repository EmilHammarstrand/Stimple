(this.webpackJsonpstimple=this.webpackJsonpstimple||[]).push([[0],{222:function(e,a,t){e.exports=t.p+"static/media/menu.d4115f4e.svg"},223:function(e,a,t){e.exports=t.p+"static/media/technology.008ed019.svg"},236:function(e,a,t){e.exports=t.p+"static/media/studentSample.508bdd72.jpg"},240:function(e,a,t){e.exports=t.p+"static/media/teacher.39c95d26.png"},249:function(e,a,t){e.exports=t.p+"static/media/graduated.bc84a30b.png"},263:function(e,a,t){e.exports=t(448)},268:function(e,a,t){},413:function(e,a,t){},448:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),l=t(42),s=t.n(l),o=(t(268),t(10)),u=t(222),i=t.n(u),m=t(223),d=t.n(m),E=t(449),g=t(463),v=t(468),p=t(59),b=t(15),f=t(34),h=t(20),j=t(30),N=Object(j.b)("menuOptions"),O=Object(j.b)("sideNavToggler"),C=Object(j.b)("loggedInAction"),k={changeMenu:N,sideNavToggler:O,LoggedIn:C},w=Object(j.c)({type:"menuOptions",status:"students",toggle:!1,loggedIn:"",showLogInScreen:!0},(n={},Object(f.a)(n,N,(function(e,a){return Object(h.a)(Object(h.a)({},e),{},{status:a.payload,toggle:!1})})),Object(f.a)(n,O,(function(e,a){return Object(h.a)(Object(h.a)({},e),{},{toggle:a.payload})})),Object(f.a)(n,C,(function(e,a){return Object(h.a)(Object(h.a)({},e),{},{loggedIn:a.payload,showLogInScreen:!1})})),n));function S(e){var a=e.username,t=Object(c.useState)(!1),n=Object(o.a)(t,2),l=n[0],s=n[1],u=r.a.createElement(E.a,{onClick:function(){return s(!0)},className:"logout-btn"},r.a.createElement("img",{src:d.a,alt:"logout"}));var m=Object(b.b)();return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("img",{onClick:function(){return m(k.sideNavToggler(!0))},className:"menu-btn rotate",src:i.a,alt:"menu"}),r.a.createElement("h1",null,"Stimple")),r.a.createElement("div",{className:"logged-in"},r.a.createElement("p",null,"Logged in as: ",a),r.a.createElement(g.a,{trigger:u,basic:!0,size:"small",open:l,onClose:function(){return s(!1)}},r.a.createElement(v.a,{icon:"log out",content:"You will be logged out, are you sure?"}),r.a.createElement(g.a.Content,null),r.a.createElement(g.a.Actions,null,r.a.createElement(E.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return s(!1)}},r.a.createElement(p.a,{name:"remove"})," No"),r.a.createElement(E.a,{color:"green",inverted:!0,onClick:function(){return s(!1),void window.location.reload()}},r.a.createElement(p.a,{name:"checkmark"})," Yes")))))}function y(e){e.username;return r.a.createElement("div",{className:"navbar-login"},r.a.createElement("h1",{className:"nav-login"},"Stimple"))}t(413),t(414);var D=t(466),A=t(252),I=t(236),M=t.n(I);function x(e){var a=e.username;return r.a.createElement("div",{className:"student-profile-container"},r.a.createElement(D.a,{raised:!0,className:"card"},r.a.createElement(A.a,{className:"image",src:M.a,wrapped:!0,ui:!1}),r.a.createElement(D.a.Content,null,r.a.createElement(D.a.Header,null,a),r.a.createElement(D.a.Meta,null,r.a.createElement("span",{className:"date"},"Joined in 2019")))))}function P(){var e={$rand:Math.floor(100*Math.random())+1};return r.a.createElement("div",{className:"stats-wrapper"},r.a.createElement("h2",null,"Total Progress"),r.a.createElement("div",{className:"set-size charts-container"},r.a.createElement("div",{style:e,className:"pie-wrapper progress-45 style-2"},r.a.createElement("span",{className:"label"},"45",r.a.createElement("span",{className:"smaller"},"%")),r.a.createElement("div",{className:"pie"},r.a.createElement("div",{className:"left-side half-circle"}),r.a.createElement("div",{className:"right-side half-circle"})),r.a.createElement("div",{className:"shadow"}))))}var _,R=t(27),T=t(459),L=Object(j.b)("addCourses"),H=Object(j.b)("currentCourse"),B=Object(j.b)("addAssig"),F=Object(j.b)("setCurrentCourse"),z=Object(j.b)("students"),G={addCourses:L,currentCourse:H,addAssig:B,setCurrentCourse:F,students:z},U=Object(j.c)({courses:[],currentCourseName:"",currentCourseData:[],currentID:"",Students:""},(_={},Object(f.a)(_,L,(function(e,a){return console.log("asfsaffaf",a.currentCourseData),Object(h.a)(Object(h.a)({},e),{},{courses:a.payload,currentCourseName:"Choose Course"})})),Object(f.a)(_,H,(function(e,a){return Object(h.a)(Object(h.a)({},e),{},{currentCourseName:a.payload.courseName,currentCourseData:a.payload.assignments,currentID:a.payload._id})})),Object(f.a)(_,B,(function(e,a){return console.log("PayLoad"+a.payload),a.payload.forEach((function(e){return console.log("Each ELEMENT",e)})),Object(h.a)(Object(h.a)({},e),{},{currentCourseData:a.payload})})),Object(f.a)(_,F,(function(e,a){return Object(h.a)(Object(h.a)({},e),{},{currentCourseName:a.payload})})),Object(f.a)(_,z,(function(e,a){return Object(h.a)(Object(h.a)({},e),{},{Students:a.payload})})),_)),J=t(28),W=t.n(J);function q(e){var a=e.sendData,t=e.sendCourses,n=Object(b.b)(),l=Object(c.useState)(0),s=Object(o.a)(l,2),u=(s[0],s[1],Object(c.useState)(0)),i=Object(o.a)(u,2);i[0],i[1];Object(c.useEffect)((function(){W.a.get("https://jsonbox.io/RP_DD_Coders_Student_Portal1").then((function(e){console.log("Api return",e),0!==e.data.length&&n(G.addCourses(Object(R.a)(e.data)))})).catch((function(e){return console.log("ERROR1 ---\x3e",e)}))}),[a]);var m=t.map((function(e){return r.a.createElement("div",{className:"course-comp",key:e.courseName},r.a.createElement("h2",null,e.courseName),r.a.createElement("p",{className:"assignment"},"Total assignments: ",e.assignments.length),r.a.createElement("div",{className:"low-items"},r.a.createElement(T.a,{className:"prog-bar",active:!0,percent:Math.floor(Math.random()*Math.floor(35*e.assignments.length)),indicating:!0})))}));return r.a.createElement("div",null,m)}var Y=t(467),V=t(81),$=t(460);function K(){var e=Object(b.c)((function(e){return e.courses.courses})),a=Object(c.useState)("Current"),t=Object(o.a)(a,2),n=t[0],l=t[1],s=Object(c.useState)("JavaScript1"),u=Object(o.a)(s,2),i=u[0],m=u[1],d=Object(c.useState)(""),E=Object(o.a)(d,2),g=E[0],v=E[1];function p(e,a){l(e),m(a)}var f=e.filter((function(e){return e.courseName.toLowerCase().match(g.toLowerCase())}));return r.a.createElement("div",{className:"student-overview-container"},r.a.createElement(Y.a,{attached:"top",tabular:!0},r.a.createElement(Y.a.Item,{as:"a",name:"Current",active:"Current"===n,onClick:function(){return p("Current","Current")}}," Current",r.a.createElement(V.a,{color:"yellow",floating:!0,circular:!0},"1")),r.a.createElement(Y.a.Item,{as:"a",name:"Completed",active:"Completed"===n,onClick:function(){return p("Completed","Completed")}}," Completed",r.a.createElement(V.a,{color:"teal",floating:!0,circular:!0},"3")),r.a.createElement(Y.a.Item,{as:"a",name:"Uncomplete",active:"Uncomplete"===n,onClick:function(){return p("Uncomplete","Uncomplete")}},"Incompleted",r.a.createElement(V.a,{color:"red",floating:!0,circular:!0},"22")),r.a.createElement(Y.a.Menu,{position:"right"},r.a.createElement(Y.a.Item,null,r.a.createElement($.a,{transparent:!0,icon:{name:"search",link:!0},placeholder:"Search courses..",value:g,onChange:function(e){return v(e.target.value)}})))),r.a.createElement("div",{className:"side-border"},r.a.createElement(q,{sendData:i,sendCourses:f})))}function X(){var e=Object(b.c)((function(e){return e.courses.courses}));return r.a.createElement("div",{class:"timetable"},r.a.createElement("div",{class:"week-names"},r.a.createElement("div",null,"monday"),r.a.createElement("div",null,"tuesday"),r.a.createElement("div",null,"wednesday"),r.a.createElement("div",null,"thursday"),r.a.createElement("div",null,"friday"),r.a.createElement("div",{class:"weekend"},"saturday"),r.a.createElement("div",{class:"weekend"},"sunday")),r.a.createElement("div",{class:"time-interval"},r.a.createElement("div",null,"8:00 - 10:00"),r.a.createElement("div",null,"10:00 - 12:00"),r.a.createElement("div",null,"12:00 - 14:00"),r.a.createElement("div",null,"14:00 - 16:00"),r.a.createElement("div",null,"16:00 - 18:00"),r.a.createElement("div",null,"18:00 - 20:00")),r.a.createElement("div",{class:"content"},r.a.createElement("div",null,r.a.createElement("div",{class:"accent-orange-gradient"},r.a.createElement("h4",null,e[0].courseName))),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",{class:"accent-green-gradient"},r.a.createElement("h4",null,e[1].courseName))),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",{class:"accent-cyan-gradient"},r.a.createElement("h4",null,e[2].courseName))),r.a.createElement("div",null),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",null,r.a.createElement("div",{class:"accent-pink-gradient"},r.a.createElement("h4",null,e[3].courseName))),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",{class:"accent-purple-gradient"},r.a.createElement("h4",null,e[4].courseName))),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",null,r.a.createElement("div",{class:"accent-purple-gradient"},r.a.createElement("h4",null,e[5].courseName))),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{class:"weekend"}),r.a.createElement("div",{class:"weekend"})))}function Q(e){var a=e.username,t=Object(b.c)((function(e){return e.menu.status})),n=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile-comp"},r.a.createElement(x,{username:a})),r.a.createElement("div",{className:"progress-comp"},r.a.createElement(P,null)),r.a.createElement("div",{className:"student-overview"},r.a.createElement(K,null)));return r.a.createElement("div",{className:"student-container"},"homeStudent"===t?r.a.createElement(X,null):n)}var Z=t(240),ee=t.n(Z);function ae(e){var a=e.username;return r.a.createElement("div",null,r.a.createElement("div",{className:"student-profile-container"},r.a.createElement(D.a,{raised:!0,className:"card"},r.a.createElement(A.a,{className:"image",src:ee.a,wrapped:!0,ui:!1}),r.a.createElement(D.a.Content,null,r.a.createElement(D.a.Header,null,a),r.a.createElement(D.a.Meta,null,r.a.createElement("span",{className:"date"},"Joined in 2019"))))))}var te=t(241);function ne(e){Object(te.a)(e);var a=Object(b.b)(),t=Object(c.useState)(!1),n=Object(o.a)(t,2),l=n[0],s=n[1],u=Object(c.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],E=["Alexander Colik","Alexander Risteski","Angelic Andersson","Mohamed Albushra","Bill Gates","Augustin Martinez","Emil Hammarstrand","Sweetroll Master","Robin Rakevik","Thor noobmaster","Henry hermique","Gudetama Egg","Stefan Mirovic","Daniel Nor","Hiro Hasamura","Hanzo Hattori","Genji Hattori","Jack Daniels","Kevin Lawrence","Snarbjorn Ingrarikesson","Riantea Talelian","Frasa Calol","Aicntar Elsinthar","Inkaanus Drago","Apple Pie","Lavender Breado","Xavier Pancake"].filter((function(e){return e.toLowerCase().match(m.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e,onClick:function(){return t=e,console.log(t),a(G.students(t)),void s(!1);var t}},e)}));var g=r.a.createElement("div",{id:"myDropdown",className:"dropdown-content"},r.a.createElement("input",{type:"text",icon:{name:"search",link:!0},placeholder:"Search Students...",value:m,onChange:function(e){return d(e.target.value)}}),r.a.createElement("div",{className:"drop-down-content"},r.a.createElement("div",{className:"student-list-container"},E)));return r.a.createElement("div",{className:"search-student-container"},r.a.createElement("div",{className:"dropdown "},r.a.createElement("button",{onClick:function(){return s(!l)},class:"dropbtn drop-student"},r.a.createElement("h3",null,"View Students",r.a.createElement(p.a,{name:"angle down"}))),l?g:null))}var ce=t(465);function re(){Object(c.useEffect)((function(){W.a.get(e).then((function(e){console.log("Api return",e),0!==e.data.length&&(e.data.forEach((function(e){console.log("element.assingments",e.assignments[0]),e.assignments.splice(0,1)})),a(G.addCourses(Object(R.a)(e.data))))})).catch((function(e){return console.log("ERROR1 ---\x3e",e)}))}),[]);var e="https://jsonbox.io/RP_DD_Coders_Student_Portal1",a=Object(b.b)(),t=Object(b.c)((function(e){return e.courses.courses})),n=Object(c.useState)(),l=Object(o.a)(n,2),s=(l[0],l[1],Object(c.useState)(40)),u=Object(o.a)(s,2),i=(u[0],u[1],Object(c.useState)(!1)),m=Object(o.a)(i,2),d=m[0],f=m[1],h=r.a.createElement(E.a,{onClick:function(){return f(!0)}},"Set Grade"),j=[{key:1,text:"IG",value:1},{key:2,text:"G",value:2},{key:3,text:"VG",value:3}];console.log("CK",t);var N=t.map((function(e){return r.a.createElement("div",{className:"course-comp",key:e.courseName},r.a.createElement("h2",null,e.courseName)," ",r.a.createElement("p",{className:"go-right"},"Total assignments: ",e.assignments.length),r.a.createElement("div",{className:"modal-grades"},r.a.createElement(g.a,{className:"modal-title",trigger:h,basic:!0,size:"small",open:d,onClose:function(){return f(!1)}},r.a.createElement(v.a,{icon:"tag",content:"JavaScript 1"}),r.a.createElement("hr",null),r.a.createElement(g.a.Content,null,r.a.createElement("div",{className:"item-grade"},r.a.createElement("div",{className:"grade"},r.a.createElement("p",null,"Assignment: ",e.assignments.assignName),r.a.createElement(ce.a,{options:j,selection:!0})),r.a.createElement("div",{className:"grade"},r.a.createElement("p",null,"Assignment 2"),r.a.createElement(ce.a,{clearable:!0,options:j,selection:!0})),r.a.createElement("div",{className:"grade"},r.a.createElement("p",null,"Assignment 3"),r.a.createElement(ce.a,{clearable:!0,options:j,selection:!0}))),r.a.createElement("div",{className:"final-grade"},r.a.createElement("p",null,"Final Grade"),r.a.createElement(ce.a,{clearable:!0,options:j,selection:!0}))),r.a.createElement(g.a.Actions,null,r.a.createElement(E.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return f(!1)}},r.a.createElement(p.a,{name:"remove"})," Cancel"),r.a.createElement(E.a,{color:"green",inverted:!0,onClick:function(){return f(!1)}},r.a.createElement(p.a,{name:"checkmark"})," Confirm")))),e.assignments.map((function(e,a){return r.a.createElement("div",{className:"sorted-assign"},r.a.createElement("p",null,"Assignment ",a+1," : ",r.a.createElement("h3",null,e.assigName)),r.a.createElement("p",null,"Deadline: ",r.a.createElement("h4",null,e.deadline)))})),r.a.createElement("div",{className:"low-items"},r.a.createElement(T.a,{className:"prog-bar",active:!0,percent:Math.floor(Math.random()*Math.floor(35*e.assignments.length)),indicating:!0})))}));return r.a.createElement("div",null,N)}function le(e){var a=e.copyComp2,t=Object(b.c)((function(e){return e.courses.Students}));return r.a.createElement("div",{className:"student-overview-container"},r.a.createElement("div",{className:"search-students"},r.a.createElement("div",{className:"focused-wrapper"},r.a.createElement("div",{className:"student-list-dissapear"},r.a.createElement("h1",null,t),a),r.a.createElement("div",{className:"side-border-teacher"},r.a.createElement(re,null)))))}function se(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.courses.currentCourseData})),t=Object(b.c)((function(e){return e.courses.currentID})),n=Object(b.c)((function(e){return e.courses.currentCourseName})),l=Object(b.c)((function(e){return e.courses.currentCourseData})),s=(Object(b.c)((function(e){return e.courses.courses})),Object(c.useState)(!1)),u=Object(o.a)(s,2),i=u[0],m=u[1],d=Object(c.useState)(!1),v=Object(o.a)(d,2),f=v[0],h=v[1],j=Object(c.useState)(""),N=Object(o.a)(j,2),O=N[0],C=N[1],k=Object(c.useState)(""),w=Object(o.a)(k,2),S=w[0],y=w[1],D=Object(c.useState)(""),A=Object(o.a)(D,2),I=A[0],M=A[1];function x(e){M(e)}Object(c.useEffect)((function(){m(!1),console.log("courses re-rendered")}),[i]);var P=Object(c.useState)(0),_=Object(o.a)(P,2),T=_[0],L=_[1],H=Object(R.a)(a);H.splice(0,1);var B=H.map((function(a,c){return r.a.createElement("div",{className:"courses-cards",key:a.assigName},r.a.createElement("div",{className:"upper-items"},r.a.createElement("h2",null,a.assigName)),r.a.createElement("div",{className:"lower-items"},r.a.createElement("p",null,"Deadline ",a.deadline),r.a.createElement("div",{className:"button-group"},r.a.createElement(g.a,{trigger:r.a.createElement(E.a,{className:"infoBtn"},r.a.createElement(p.a,{name:"info"}),"Detail"),centered:!1,closeIcon:!0},r.a.createElement(g.a.Header,null,a.assigName," Details:"),r.a.createElement(g.a.Content,null,r.a.createElement("p",{className:"assign-detail"},H[c].description),r.a.createElement("p",{className:"links"}," ","Links:",r.a.createElement("div",null,r.a.createElement("a",{href:"http://",target:"_blank",rel:"noopener noreferrer"},"PDF Link"))))),r.a.createElement(g.a,{trigger:r.a.createElement(E.a,{onClick:function(){return function(e,a,t,n){h(!0),y(a),C(e),x(t),L(n)}(H[c].assigName,H[c].description,H[c].deadline,c)}},"Editt"),centered:!1,open:f,onClose:function(){return h(!1)}},r.a.createElement(g.a.Header,null,"New Assignment:"),r.a.createElement(g.a.Content,null,r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,"Title:"),r.a.createElement($.a,{className:"input-title",transparent:!0,placeholder:"Search Students...",value:O,onChange:function(e){return C(e.target.value)}})),r.a.createElement("div",{className:"Desctiption"},r.a.createElement("h5",null,"Description:"),r.a.createElement("textarea",{value:S,onChange:function(e){return y(e.target.value)},id:"subject",name:"subject",placeholder:"Write something.."})),r.a.createElement("div",{className:"Deadline:"},r.a.createElement("h5",null,"Deadline:"),r.a.createElement("input",{type:"date",value:I,className:"date-style",onChange:function(e){return x(e.target.value)}})),r.a.createElement("div",{className:"button-group"},r.a.createElement(E.a,{onClick:function(){return function(){h(!1);var a={assigName:O,description:S,deadline:I},c=Object(R.a)(l);c.splice([T+1],1),c.push(a),W.a.put("https://jsonbox.io/RP_DD_Coders_Student_Portal1/"+t,{courseName:n,assignments:c}).then((function(a){console.log(a),m(!0),e(G.addAssig(c))})).catch((function(e){return console.log(e)}))}()},inverted:!0,color:"green",className:"confirmBtn"},r.a.createElement(p.a,{name:"checkmark"}),"Edit"),r.a.createElement(E.a,{onClick:function(){return h(!1)},className:"cancelBtn"},r.a.createElement(p.a,{name:"cancel"}),"Cancel")))),r.a.createElement(E.a,{color:"red",onClick:function(){return function(e,a,t,n,c,r){var l=Object(R.a)(t);l=l.filter((function(e){return e.assigName!==n.assigName})),W.a.put("https://jsonbox.io/RP_DD_Coders_Student_Portal1/"+e,{courseName:a,assignments:l}).then((function(e){console.log(e),r(!0),c(G.addAssig(l))})).catch((function(e){return console.log(e)}))}(t,n,l,a,e,m)}},"Delete"))))}));return r.a.createElement("div",null,B)}function oe(e){var a=e.copyComp,t=Object(b.b)(),n="https://jsonbox.io/RP_DD_Coders_Student_Portal1/",l=Object(c.useState)("2020-05-18"),s=Object(o.a)(l,2),u=s[0],i=s[1],m=Object(c.useState)(!1),d=Object(o.a)(m,2),v=d[0],f=d[1],h=Object(c.useState)(""),j=Object(o.a)(h,2),N=j[0],O=j[1],C=Object(c.useState)(""),k=Object(o.a)(C,2),w=k[0],S=k[1],y=Object(b.c)((function(e){return e.courses.currentCourseName})),D=Object(b.c)((function(e){return e.courses.currentCourseData})),A=Object(b.c)((function(e){return e.courses.currentID})),I=Object(c.useState)(!1),M=Object(o.a)(I,2),x=M[0],P=M[1];Object(c.useEffect)((function(){P(!1),console.log(x)}),[]);var _=r.a.createElement(E.a,{color:"blue",onClick:function(){return f(!0)},className:"addBtn"},r.a.createElement(p.a,{name:"add"}),"Add new Assignment"),T=r.a.createElement(g.a,{trigger:_,centered:!1,open:v,onClose:function(){return f(!1)}},r.a.createElement(g.a.Header,null,"New Assignment:"),r.a.createElement(g.a.Content,null,r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,"Title:"),r.a.createElement($.a,{className:"input-title",transparent:!0,placeholder:"Search Students...",value:N,onChange:function(e){return O(e.target.value)}})),r.a.createElement("div",{className:"Desctiption"},r.a.createElement("h5",null,"Description:"),r.a.createElement("textarea",{value:w,onChange:function(e){return S(e.target.value)},id:"subject",name:"subject",placeholder:"Write something.."})),r.a.createElement("div",{className:"Deadline:"},r.a.createElement("h5",null,"Deadline:"),r.a.createElement("input",{type:"date",value:u,className:"date-style",onChange:function(e){return function(e){i(e)}(e.target.value)}})),r.a.createElement("div",{className:"button-group"},r.a.createElement(E.a,{onClick:function(){return f(!1),L=Object(R.a)(D),console.log("idMaybe",L),L.push({assigName:N,description:w,deadline:u}),console.log("idMaybe1",L),console.log("scscscscscsc",A),void W.a.put(n+A,{courseName:y,assignments:L}).then((function(e){console.log(e),t(G.addAssig(L)),function(e,a,t){W.a.get(e).then((function(e){var n;console.log(e),(n=H).push.apply(n,Object(R.a)(e.data)),0!==e.data.length&&(a(G.addCourses(Object(R.a)(H))),a(G.setCurrentCourse(t))),H=[]})).catch((function(e){return console.log("ERROR1 ---\x3e",e)}))}(n,t,y)})).catch((function(e){return console.log("ERROR ---\x3e",e)}))},inverted:!0,color:"green",className:"confirmBtn"},r.a.createElement(p.a,{name:"checkmark"}),"Add"),r.a.createElement(E.a,{onClick:function(){return f(!1)},className:"cancelBtn"},r.a.createElement(p.a,{name:"cancel"}),"Cancel")))),L=[];var H=[];return r.a.createElement("div",{className:"view-courses"},r.a.createElement("div",{className:"course-info-up"},r.a.createElement("h1",null,y),a,r.a.createElement("div",{className:"course-infor-up-right"})),r.a.createElement("div",{className:"addAssign"}," ",T),r.a.createElement("div",{className:"course-list-container"},r.a.createElement(se,null)))}function ue(){var e="https://jsonbox.io/RP_DD_Coders_Student_Portal1",a=[{assigName:"",description:"",deadline:""}],t=Object(c.useState)(""),n=Object(o.a)(t,2),l=n[0],s=n[1],u=Object(c.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],v=Object(c.useState)(!1),f=Object(o.a)(v,2),h=f[0],j=f[1],N=Object(c.useState)(!1),O=Object(o.a)(N,2),C=O[0],k=O[1],w=Object(c.useState)(!1),S=Object(o.a)(w,2),y=S[0],D=S[1],A=Object(b.b)(),I=Object(b.c)((function(e){return e.courses.courses}));Object(c.useEffect)((function(){D(!1),console.log("currentArr",I),function(e,a,t){W.a.get(e).then((function(e){var t;console.log(e),(t=ie).push.apply(t,Object(R.a)(e.data)),0!==e.data.length&&a(G.addCourses(Object(R.a)(ie))),ie=[]})).catch((function(e){return console.log("ERROR1 ---\x3e",e)}))}(e,A)}),[y]);var M=I.filter((function(e){return e.courseName.toLowerCase().match(l.toLowerCase())})).map((function(e){return r.a.createElement("div",{className:"courseDiv",key:e._id,onClick:function(){return a=e,console.log(a.assignments),A(G.currentCourse(a)),void k(!1);var a}},e.courseName," ",r.a.createElement("button",{className:"delButtonCourse",onClick:function(){return function(e,a,t,n){W.a.delete("https://jsonbox.io/RP_DD_Coders_Student_Portal1/"+e).then((function(e){console.log(e),a(!0);var c=t;c.pop(),n(G.addCourses(c))})).catch((function(e){return console.log(e)}))}(e._id,D,A,I)}},"Delete"))}));var x=r.a.createElement(E.a,{onClick:function(){return j(!0)},color:"blue",className:"coursesAddBtn"},r.a.createElement(p.a,{name:"add"}),"Add new Course"),P=r.a.createElement(g.a,{trigger:x,centered:!1,open:h,onClose:function(){return j(!1)}},r.a.createElement(g.a.Header,null,"New Course:"),r.a.createElement(g.a.Content,null,r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,"Title:"),r.a.createElement($.a,{className:"input-title",transparent:!0,value:m,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"Desctiption"},r.a.createElement("h5",null,"Description:"),r.a.createElement("textarea",{id:"subject",name:"subject",placeholder:"Write something.."})),r.a.createElement("div",{className:"button-group"},r.a.createElement(E.a,{onClick:function(){return function(e,a,t,n,c,r,l){console.log("here!"),""!==a&&W.a.post(e,{courseName:a,assignments:t}).then((function(e){console.log(e),c(!0);var n=l;n.push({courseName:a,assignments:t}),r(G.addCourses(n))})).catch((function(e){return console.log("ERROR ---\x3e",e)}));n(!1)}(e,m,a,j,D,A,I)},inverted:!0,color:"green",className:"confirmBtn"},r.a.createElement(p.a,{name:"checkmark"}),"Add"),r.a.createElement(E.a,{onClick:function(){return j(!1)},className:"cancelBtn"},r.a.createElement(p.a,{name:"cancel"}),"Cancel")))),_=r.a.createElement("div",{id:"myDropdown",className:"dropdown-content"},r.a.createElement("input",{type:"text",icon:{name:"search",link:!0},placeholder:"Search Courses...",value:l,onChange:function(e){return s(e.target.value)}}),r.a.createElement("div",{className:"drop-down-content"},r.a.createElement("div",{className:"student-list-container"},M)),P);return r.a.createElement("div",{className:"search-student-container"},r.a.createElement("div",{class:"dropdown dropdown2"},r.a.createElement("button",{onClick:function(){return k(!C)},class:"dropbtn"},"Courses",r.a.createElement(p.a,{name:"angle down"})),C?_:null))}var ie=[];var me=t(249),de=t.n(me);function Ee(e){var a=e.username,t=r.a.createElement(ue,null),n=r.a.createElement(ne,null),c=Object(b.c)((function(e){return e.menu.status})),l=Object(b.c)((function(e){return e.courses.Students}));return r.a.createElement("div",null,r.a.createElement("div",{className:"student-container"},r.a.createElement("div",{className:"profile-comp"},r.a.createElement(ae,{username:a})),r.a.createElement("div",{className:"progress-comp"},r.a.createElement("div",null,r.a.createElement("img",{className:"student-photo",src:de.a,alt:"Studentimage"}),r.a.createElement("h3",null,l),r.a.createElement("br",null),r.a.createElement("span",null,"Phone: 123 123 12 12"),r.a.createElement("br",null),r.a.createElement("span",null,"E-mail: example@gmail.com"))),r.a.createElement("div",{className:"student-overview"},"students"===c?r.a.createElement(le,{copyComp2:n}):r.a.createElement(oe,{copyComp:t}))))}var ge=t(469),ve=t(462),pe=t(461),be=function(e){var a=e.setUsername,t=e.username,n=Object(b.b)(),l=Object(c.useState)(""),s=Object(o.a)(l,2),u=s[0],i=s[1],m=Object(c.useState)(""),d=Object(o.a)(m,2),v=d[0],f=d[1],h=Object(c.useState)(""),j=Object(o.a)(h,2),N=j[0],O=j[1],C=Object(c.useState)(!1),w=Object(o.a)(C,2),S=w[0],y=w[1],D=Object(c.useState)(!1),A=Object(o.a)(D,2),I=A[0],M=A[1],x=Object(c.useState)(!1),P=Object(o.a)(x,2),_=P[0],R=P[1],T=Object(c.useState)(!1),L=Object(o.a)(T,2),H=L[0],B=L[1],F=Object(c.useState)(!1),z=Object(o.a)(F,2),G=z[0],U=z[1],J=Object(c.useState)(!1),W=Object(o.a)(J,2),q=W[0],Y=W[1],V=Object(c.useState)(!1),$=Object(o.a)(V,2),K=$[0],X=$[1],Q=Object(c.useState)(3),Z=Object(o.a)(Q,2),ee=Z[0],ae=Z[1],te=r.a.createElement(E.a,{className:"sign-up-btn",content:"Sign up",icon:"signup",size:"big",onClick:function(){return y(!0)}}),ne=(new RegExp(/^.+@.+$/),function(e){f(e.target.value)}),ce=function(e){i(e.target.value)},re=function(e){a(e.target.value)},le=function(){return r.a.createElement("span",{className:"ErrorMsg"}," No whitespaces allowed! ")},se=function(){return r.a.createElement("span",{className:"ErrorMsg"}," Must be a valid email-adress! ")},oe=function(){return r.a.createElement("span",{className:"ErrorMsg"}," Wrong key, try again! Tries left: ",ee," ")},ue=function(){return r.a.createElement("span",{className:"ErrorMsg"}," You need to type a username! ")},ie=function(){return r.a.createElement("span",{className:"ErrorMsg"}," Password must be longer than 3 characters! ")},me=function(){return r.a.createElement("span",{className:"ErrorMsg"}," You must fill the required fields! ")};return r.a.createElement(ge.a,{placeholder:!0,className:"loginForm"},r.a.createElement(ve.a,null,r.a.createElement(ve.a.Input,{icon:"user",iconPosition:"left",label:"* Username",onChange:re}),H?r.a.createElement(ue,null):null,I?r.a.createElement(le,null):null,r.a.createElement(ve.a.Input,{icon:"lock",iconPosition:"left",label:"* Password",type:"password",onChange:ne}),G?r.a.createElement(ie,null):null,r.a.createElement(ve.a.Input,{icon:"lock",iconPosition:"left",label:"Teacher-key",onChange:ce}),q?r.a.createElement(oe,null):null,r.a.createElement(E.a,{className:"login-btn",content:"Login",onClick:function(){"a"===u&&!t.includes(" ")&&v.length>=3&&t?n(k.LoggedIn("Teacher")):v.length>=3&&t&&!t.includes(" ")&&!u?n(k.LoggedIn("Student")):t.includes(" ")?(M(!0),le()):t||v?t?v.length<=3?(U(!0),ie()):"a"!==u&&(console.log("ACTIVATED"),Y(!0),oe(),ae(ee-1),1==ee&&window.location.reload(!1)):(B(!0),ue()):(R(!0),me())},primary:!0}),_?r.a.createElement(me,null):null,r.a.createElement(pe.a,{horizontal:!0},"Or"),r.a.createElement(g.a,{trigger:te,basic:!0,size:"small",open:S,onClose:function(){return y(!1)}},r.a.createElement(g.a.Content,null,r.a.createElement("div",{className:"registerForm"},r.a.createElement(ve.a.Input,{className:"regForm",type:"email",placeholder:"Email...",icon:"mail",iconPosition:"left",onChange:function(e){O(e.target.value)}}),r.a.createElement("div",{className:"ErrorMsg"}," ",K?r.a.createElement(se,null):null," "),r.a.createElement(ve.a.Input,{className:"regForm",type:"text",placeholder:"Username...",required:!0,icon:"user",iconPosition:"left",onChange:re}),r.a.createElement("div",{className:"ErrorMsg"}," ",H?r.a.createElement(ue,null):null," "),r.a.createElement("div",{className:"ErrorMsg"}," ",I?r.a.createElement(le,null):null," "),r.a.createElement(ve.a.Input,{className:"regForm",type:"password",placeholder:"Password...",required:!0,icon:"lock",iconPosition:"left",onChange:ne}),r.a.createElement("div",{className:"ErrorMsg"},G?r.a.createElement(ie,null):null," "),r.a.createElement("label",{className:"regForm asd"},"To sign up as a Teacher you will need a key from your workplace!"),r.a.createElement(ve.a.Input,{className:"regForm",type:"text",placeholder:"Teacher key... (optional)",icon:"lock",iconPosition:"left",onChange:ce}))),r.a.createElement(g.a.Actions,{className:"asd"},r.a.createElement(E.a,{color:"green",inverted:!0,onClick:function(){"a"===u&&!t.includes(" ")&&v.length>=3&&t&&N.includes("@")?n(k.LoggedIn("Teacher")):v.length>=3&&t&&!t.includes(" ")&&N.includes("@")?n(k.LoggedIn("Student")):t.includes(" ")?(M(!0),le()):t||v||N?t?v.length<=3?(U(!0),ie()):N.includes("@")||(X(!0),se()):(B(!0),ue()):(R(!0),me())}},r.a.createElement(p.a,{name:"sign in"})," Sign up and Log in!")),r.a.createElement("div",{className:"ErrorMsg-All"}," ",_?r.a.createElement(me,null):null," "))))},fe=t(470);var he=function(){var e=Object(b.b)(),a=Object(c.useState)(""),t=Object(o.a)(a,2),n=t[0],l=t[1],s=Object(b.c)((function(e){return e.menu.toggle})),u=Object(b.c)((function(e){return e.menu.loggedIn})),i=Object(b.c)((function(e){return e.menu.showLogInScreen}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},i?r.a.createElement(y,null):r.a.createElement(S,{username:n})),r.a.createElement("main",null,i?r.a.createElement(be,{username:n,setUsername:l}):null,r.a.createElement(fe.a.Pushable,{as:ge.a},r.a.createElement(fe.a,{as:Y.a,animation:"slide along",icon:"labeled",inverted:!0,onHide:function(){return e(k.sideNavToggler(!1))},vertical:!0,visible:s,width:"thin"},"Teacher"===u?r.a.createElement("div",null,r.a.createElement(Y.a.Item,{onClick:function(){return e(k.changeMenu("students"))},as:"a"},r.a.createElement(p.a,{name:"user"}),"Students"),r.a.createElement(Y.a.Item,{onClick:function(){return e(k.changeMenu("courses"))},as:"a"},r.a.createElement(p.a,{name:"clipboard list"}),"Courses")):r.a.createElement("div",null,r.a.createElement(Y.a.Item,{as:"a",onClick:function(){return e(k.changeMenu("schedule"))}},r.a.createElement(p.a,{name:"home"}),"Home"),r.a.createElement(Y.a.Item,{onClick:function(){return e(k.changeMenu("homeStudent"))},as:"a"},r.a.createElement(p.a,{name:"calendar alternate outline"}),"Schedule"))),r.a.createElement(fe.a.Pusher,{dimmed:s},r.a.createElement(ge.a,{basic:!0},"Student"===u?r.a.createElement(Q,{username:n}):null,"Teacher"===u?r.a.createElement(Ee,{username:n}):null)))),r.a.createElement("footer",null,"Copyrights \xa92020"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=t(32),Ne=Object(je.c)({menu:w,courses:U}),Oe=Object(j.a)({reducer:Ne});s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,{store:Oe}," ",r.a.createElement(he,null)," ")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[263,1,2]]]);
//# sourceMappingURL=main.f789f367.chunk.js.map
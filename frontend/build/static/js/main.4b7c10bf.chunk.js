(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){e.exports={component:"Message_component__2j6Bo",pulse:"Message_pulse__2gXXH"}},137:function(e,t,a){e.exports={component:"RoomHeader_component__2UUqw"}},138:function(e,t,a){e.exports={component:"RoomList_component__3OPTO"}},139:function(e,t,a){e.exports={component:"EmptyChat_component__1MMYk",pulse:"EmptyChat_pulse__3Fit8"}},140:function(e,t,a){e.exports={component:"CreateMessageForm_component__31ION"}},141:function(e,t,a){e.exports={component:"Message_component__3Q88J",online:"Message_online__3SinQ"}},152:function(e,t,a){e.exports=a(348)},157:function(e,t,a){},182:function(e,t,a){},184:function(e,t,a){e.exports=a.p+"static/media/bagel.7f270546.png"},282:function(e,t,a){},284:function(e,t,a){e.exports=a.p+"static/media/tinder.4a1a44a7.png"},288:function(e,t,a){},297:function(e,t,a){},318:function(e,t,a){},345:function(e,t){},348:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=(a(157),a(8)),s=a(9),i=a(11),u=a(10),m=a(12),p=a(6),h=a(351),d=a(29),f=a(134),E=a(135),g=a(43),b=a(33),v=a.n(b),O=a(60),k=a(25),j=a.n(k),y={data:{isLoggedIn:!1,firstName:"",lastName:"",username:"",password:"",error:"",hackathons:[],githubUrl:"",description:"",age:69,imageUrl:"",likesMe:[],matched:[],used:[],matches:{},talkingTo:"Miguel"}},w=function(e){return{type:"GET_USER",user:e}},_=function(e){return{type:"LOGOUT_USER",user:e}},C=Object(d.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=e;switch(t.type){case"GET_USER":return console.log(a),console.log(Object(g.a)({},a,{data:t.user})),t.user;case"LOGOUT_USER":return console.log(t.user),t.user;case"POPULATE_MESSAGES":return a.data.matches=t.user,Object(g.a)({},a);case"CHANGE_CONVO":return a.data.talkingTo=t.user,Object(g.a)({},a);case"ADD_HACKATHON":return console.log(a.data),a.data.hackathons=t.user,Object(g.a)({},a);default:return e}}}),A=Object(E.composeWithDevTools)(Object(d.applyMiddleware)(f.a)),L=Object(d.createStore)(C,A),N=a(349),x=(a(182),Object(p.b)(function(e){return console.log(e),{isLoggedIn:e.user.data.isLoggedIn,username:e.user.data.username}},function(e){return{handleClick:function(){e(_({data:{isLoggedIn:!1}}))}}})(function(e){var t=e.handleClick,n=e.isLoggedIn;e.username;return r.a.createElement("div",{className:"header"},r.a.createElement("img",{id:"logo",src:a(184)}),r.a.createElement("nav",{className:"mainNav"},n?r.a.createElement("ul",{className:"nav-items"},r.a.createElement(N.a,{to:"/"}," Home "),r.a.createElement(N.a,{to:"/swipe"}," Swipe "),r.a.createElement(N.a,{to:"/messages"}," Messages "),r.a.createElement(N.a,{to:"/hackathons"}," Hackathons "),r.a.createElement("a",{href:"#",onClick:t},"Logout")):r.a.createElement("ul",{className:"nav-items"},r.a.createElement(N.a,{to:"/"},"Login"),r.a.createElement(N.a,{to:"/register"},"Register"))))})),M=a(352),S=a(350),T=a(353),U=a(54),H=a.n(U),R=a(53),D=a.n(R),I=a(55),P=a(30),z=a.n(P),B=a(31),F=a.n(B),G=a(32),W=a.n(G),K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",password:"",name:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleLogin,a=e.error;return r.a.createElement("div",{className:"card"},r.a.createElement("form",{onSubmit:t},r.a.createElement(D.a,{component:"p"},"Please Enter your login credentials."),r.a.createElement(z.a,null,r.a.createElement(F.a,{htmlFor:"username"}," Username "),r.a.createElement(W.a,{name:"username",type:"text"})),r.a.createElement("br",null),r.a.createElement(z.a,null,r.a.createElement(F.a,{htmlFor:"pass"}," Password "),r.a.createElement(W.a,{name:"password",type:"text"})),r.a.createElement("br",null),r.a.createElement(z.a,null,r.a.createElement(F.a,{htmlFor:"name"}," Name "),r.a.createElement(W.a,{name:"name",type:"text"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(H.a,{type:"submit",size:"small"},"Register"),a&&a.response&&r.a.createElement("div",null," ",a.response," ")))}}]),t}(r.a.Component),J=Object(p.b)(function(e){return{error:e.user.data.error}},function(e){return{handleLogin:function(t){t.preventDefault();var a=t.target.username.value,n=t.target.password.value;e(function(e,t){return function(){var a=Object(O.a)(v.a.mark(function a(n){var r;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("api/hackers/register",{username:e,password:t});case 3:r=a.sent,a.next=10;break;case 6:return a.prev=6,a.t0=a.catch(0),console.error(a.t0),a.abrupt("return",n(_({data:{isLoggedIn:!1,username:"",error:{response:"Invalid credentials please try again"}}})));case 10:try{n(w(r.data))}catch(c){console.error(c)}case 11:case"end":return a.stop()}},a,this,[[0,6]])}));return function(e){return a.apply(this,arguments)}}()}(a,n))}}})(Object(I.withStyles)({card:{maxWidth:345},media:{height:1e3}})(K)),Y=a(145),Q=a.n(Y),V=a(88),X=a.n(V),q=a(147),Z=a.n(q),$=a(146),ee=a.n($),te=(a(282),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleLogin,a=e.error;return r.a.createElement("div",{className:"card"},r.a.createElement("form",{onSubmit:t},r.a.createElement(D.a,{component:"p"},"Please Enter your login credentials."),r.a.createElement(z.a,null,r.a.createElement(F.a,{htmlFor:"username"}," Username "),r.a.createElement(W.a,{type:"text",name:"username"})),r.a.createElement("br",null),r.a.createElement(z.a,null,r.a.createElement(F.a,{htmlFor:"username"}," Password "),r.a.createElement(W.a,{type:"password",name:"password"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(H.a,{type:"submit",size:"small"},"Login"),a&&a.response&&r.a.createElement("div",null," ",a.response," ")))}}]),t}(r.a.Component)),ae=Object(p.b)(function(e){return{error:e.user.data.error}},function(e){return{handleLogin:function(t){t.preventDefault();var a=t.target.username.value,n=t.target.password.value;e(function(e,t){return function(){var a=Object(O.a)(v.a.mark(function a(n){var r;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("api/hackers/login",{username:e,password:t});case 3:r=a.sent,a.next=10;break;case 6:return a.prev=6,a.t0=a.catch(0),console.error(a.t0),a.abrupt("return",n(_({data:{isLoggedIn:!1,username:"",error:{response:"Invalid credentials please try again"}}})));case 10:try{n(w(r.data))}catch(c){console.error(c)}case 11:case"end":return a.stop()}},a,this,[[0,6]])}));return function(e){return a.apply(this,arguments)}}()}(a,n))}}})(Object(I.withStyles)({card:{maxWidth:345},media:{height:1e3}})(te)),ne=(a(284),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.username,a=e.imageUrl,n=e.email;e.hackathons;return r.a.createElement("div",{className:"profile"},r.a.createElement("p",null," Welcome back to CoffeeMeetsCode, ",t," "),r.a.createElement("h2",null," My Profile "),r.a.createElement("img",{src:a,width:"200",height:"200",alt:"Profile picture"}),r.a.createElement("h3",null," ",t,", ",21," "),r.a.createElement("h3",null," ",n," "),r.a.createElement("br",null),r.a.createElement("p",null," ","This is my \n                profile's description"," "),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Hackathons I'm interested in"),r.a.createElement("th",null,"My Teammates")),r.a.createElement("tr",null,r.a.createElement("td",null,"HACK HUNTER"),r.a.createElement("td",null,"I GOT NO FRIENDS"))))}}]),t}(n.Component)),re=Object(p.b)(function(e){return console.log(e),{username:e.user.data.username,imageUrl:e.user.data.imageUrl,email:e.user.data.email,hackathons:e.user.data.hackathons}})(ne),ce=a(89),oe=function(e){var t=e.hacker;return r.a.createElement("div",null,"Name: ",t.firstName," ",t.lastName," ",r.a.createElement("br",null),"Age: ",t.age," ",r.a.createElement("br",null),"Description: ",t.description," ",r.a.createElement("br",null),"Image: ",r.a.createElement("img",{src:t.imageUrl,alt:""}))},le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={other_hackers:[],other_hackers_user:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("api/hackers/allExcept/"+this.props.data.username).then(function(t){var a=t.data.map(function(e){return e.username});e.setState({other_hackers:t.data,other_hackers_user:a})})}},{key:"onSwipeLeft",value:function(e){j.a.post("api/hackers/swipedLeft",{user:this.props.data.username,swipedOn:e.username})}},{key:"onSwipeRight",value:function(e){j.a.post("api/hackers/swipedRight",{user:this.props.data.username,swipedOn:e.username})}},{key:"getEndCard",value:function(){return r.a.createElement("div",null,"You're out of hackers!")}},{key:"render",value:function(){var e=this,t=this.state.other_hackers.map(function(t){return r.a.createElement(ce.a,{key:t.username,data:t,onSwipeLeft:e.onSwipeLeft.bind(e),onSwipeRight:e.onSwipeRight.bind(e)},r.a.createElement(oe,{hacker:t}))});return r.a.createElement("div",null,"HERE R UR POSSIBLE SWIPEZ ",r.a.createElement("br",null),r.a.createElement(ce.b,{addEndCard:this.getEndCard.bind(this)},t))}}]),t}(n.Component),se=(a(288),a(136)),ie=a.n(se),ue=function(e){var t=e.data,a=void 0===t?{}:t;return r.a.createElement("header",{className:ie.a.component},r.a.createElement("img",{src:a.imageUrl||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",alt:a.name}),r.a.createElement("div",null,r.a.createElement("h3",null,a.firstName," ",a.lastName),r.a.createElement("h5",null,"@",a.username)))},me=a(137),pe=a.n(me),he=function(e){var t=e.roomName;return r.a.createElement("header",{className:pe.a.component},r.a.createElement("h1",null," ",t," "))},de=a(138),fe=a.n(de),Ee=Object(p.b)(function(e){return{matches:e.user.matches}},function(e){return{handlePopulate:function(e){}}})(function(e){var t=e.matches,a=void 0===t?{}:t;return r.a.createElement("ul",{className:fe.a.component},r.a.createElement("li",null," ",JSON.stringify(a)," "))}),ge=a(139),be=a.n(ge),ve=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:be.a.component},r.a.createElement("span",{role:"img","aria-label":"post"},r.a.createElement("svg",{viewBox:"0 0 59 80"},r.a.createElement("g",null,r.a.createElement("path",{d:"M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396"}),r.a.createElement("path",{d:"M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761"}),r.a.createElement("path",{d:"M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606"})))),r.a.createElement("p",null,"Go find a coding partner you lonely nerd.")))},Oe=a(140),ke=a.n(Oe),je=function(){return r.a.createElement("form",{className:ke.a.component,onSubmit:function(e){e.preventDefault(),0!==e.target[0].value.trim().length&&(e.target[0].value="")}},r.a.createElement("input",{placeholder:"Type a message.."}),r.a.createElement("button",{type:"submit"},r.a.createElement("svg",{id:"send",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))},ye=a(85),we=a.n(ye),_e=a(141),Ce=a.n(_e),Ae=function(e){var t=e.name,a=e.imageUrl,n=e.message;return r.a.createElement("li",{className:Ce.a.component},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("span",null,"".concat(t," | ").concat(function(e){var t=new Date(e),a=t.getMinutes();return"".concat(t.getHours(),":").concat(a<10?"0"+a:a)}(new Date))),r.a.createElement("p",null," ",n," "))},Le=(r.a.createElement("div",{className:we.a.empty},r.a.createElement("span",{role:"img","aria-label":"post"},"\ud83d\udcdd"),r.a.createElement("h2",null,"No Messages Yet"),r.a.createElement("p",null,"Be the first to post in this room or invite someone to join the room")),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={messages:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.matches[this.props.talkingTo])j.a.get("/api/hackers/matched/".concat(this.props.username)).then(function(t){var a=t.data;e.props.handleMessage(a)});else{var t=this.props.matches[this.props.talkingTo].messages;this.setState({messages:t})}}},{key:"render",value:function(){var e="Miguel Acero",t="https://www.argentum.org/wp-content/uploads/2018/12/blank-profile-picture-973460_6404.png",a="What's good cuzzz";return r.a.createElement("ul",{id:"messages",className:we.a.component},r.a.createElement("wrapper-",null,r.a.createElement(Ae,{name:e,imageUrl:t,message:a})),">")}}]),t}(r.a.Component)),Ne=Object(p.b)(function(e){return console.log(e),{username:e.user.data.username,matches:e.user.data.matches,talkingTo:e.user.data.talkingTo}},function(e){return{handleMessage:function(t){e({type:"POPULATE_MESSAGES",user:t})}}})(Le),xe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={talkingTo:"Miguel",messages:[],talkedTo:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.talkingTo;return r.a.createElement("main",{className:"messageBody"},r.a.createElement("aside",null,r.a.createElement(ue,{data:{username:"kaizenc",name:"Kaizen Castanos",firstName:"Kaizen",lastName:"Castanos",imageUrl:"https://avatars0.githubusercontent.com/u/8743619?s=460&v=4"}}),r.a.createElement(Ee,{matches:{}})),r.a.createElement("section",null,r.a.createElement(he,{roomName:e}),e?r.a.createElement("row-",null,r.a.createElement("col-",null,r.a.createElement(Ne,null),r.a.createElement(je,null),">")):r.a.createElement(ve,null)))}}]),t}(n.Component),Me=Object(p.b)(function(e){return{talkingTo:e.user.data.talkingTo}})(xe),Se=a(56),Te=a(26),Ue=a(24);function He(){var e=Object(Te.a)(["\n  font-size: ",";\n  font-size: ",";\n  opacity: ",";\n"]);return He=function(){return e},e}var Re=Ue.default.span(He(),function(e){return e.lead&&"1.2rem"},function(e){return e.small&&"0.9rem"},function(e){return e.muted&&"0.6"});function De(){var e=Object(Te.a)(["\n  display: block;\n  border-radius: 4px;\n  max-width: 100%;\n  height: auto;\n"]);return De=function(){return e},e}var Ie=Ue.default.img(De()),Pe=a(150);function ze(){var e=Object(Te.a)(["\n  padding: 0.75em 1em;\n  background-color: hsl(234, 100%, 74%);\n  border: 0;\n  border-radius: 4px;\n  color: hsl(234, 80%, 98%);\n  font-size: 1rem;\n  font-weight: bold;\n  width: ",";\n\n  &:hover {\n    background-color: hsl(234, 100%, 70%);\n  }\n\n  &:focus {\n    background-color: hsl(234, 100%, 64%);\n    outline-color: hsl(234, 100%, 86%);\n  }\n"]);return ze=function(){return e},e}var Be=Ue.default.button(ze(),function(e){return e.wide&&"100%"});Be.Map=function(e){return r.a.createElement(Be,e,r.a.createElement(Pe.a,null))};var Fe=Be;function Ge(){var e=Object(Te.a)(["\n  margin: 0 0 0.3rem;\n"]);return Ge=function(){return e},e}function We(){var e=Object(Te.a)(["\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px hsl(234, 20%, 80%);\n"]);return We=function(){return e},e}var Ke=Ue.default.div(We());Ke.Title=Ue.default.h3(Ge());var Je=Ke,Ye=Object(p.b)(function(e){return console.log(e.user.data.hackathons),{hackathons:e.user.data.hackathons,username:e.user.data.username}},function(e){return{handleHackathon:function(t,a){e(function(e,t){return function(){var a=Object(O.a)(v.a.mark(function a(n){var r;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("api/hackers/hackathon/add",{username:e,hackathonName:t.trim()});case 3:r=a.sent,a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.error(a.t0);case 9:try{n({type:"ADD_HACKATHON",user:r.data})}catch(c){console.error(c)}case 10:case"end":return a.stop()}},a,this,[[0,6]])}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(function(e){var t=e.name,a=e.url,n=e.startDate,c=e.endDate,o=e.location,l=(e.isHighSchool,e.imageUrl),s=e.hackathons,i=e.handleHackathon,u=e.username;return r.a.createElement(Je,null,r.a.createElement(Se.Composition,{template:"\nthumbnail\nheading\nactions\n",templateMd:"\nthumbnail heading\nthumbnail actions\n",templateLg:"\nthumbnail\nheading\nactions\n",templateColsMdOnly:"minmax(100px, 1fr) 1fr",padding:15,gutter:15,gutterLg:25},function(e){var m=e.Thumbnail,p=e.Heading,h=e.Actions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement("a",{href:a},r.a.createElement(Ie,{src:l,alt:t}))),r.a.createElement(p,null,r.a.createElement("a",{href:a},r.a.createElement("h3",null,t)),r.a.createElement(Re,{small:!0,muted:!0},o,r.a.createElement("br",null),"Starts on: ",n,r.a.createElement("br",null),"Ends on: ",c)),r.a.createElement(h,{flex:!0,align:"flex-end"},s?s.filter(function(e){return e.trim().toLowerCase().includes(t.trim().toLowerCase())}).length>0?r.a.createElement(Fe,{disabled:"true",wide:!0},"Already Registered"):r.a.createElement(Fe,{onClick:function(e){return i(u,t)},wide:!0},"Register"):r.a.createElement("div",null)))}))}),Qe=function(e){var t=e.data;return r.a.createElement(Se.Composition,{templateCols:"repeat(auto-fit, 250px)",templateColsMd:"repeat(2, 1fr)",templateColsLg:"repeat(auto-fit, minmax(250px, 1fr))",justifyContent:"center",gutter:16,gutterLg:16},t.map(function(e){return r.a.createElement(Ye,Object.assign({key:e.id},e))}))},Ve=(a(297),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).fetchHackathonData=function(e){var t=e.getYear()+1900,n=e.toISOString().substr(0,10);fetch("https://mlh-events.now.sh/na-"+t).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.filter(function(e){return e.startDate>n});a.setState({upcomingHackathons:t})}).catch(function(e){return console.error(e)})},a.state={upcomingHackathons:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=new Date;this.fetchHackathonData(e)}},{key:"render",value:function(){return console.log("Upcoming hackathons: ",this.state.upcomingHackathons),r.a.createElement("div",{className:"hackathonPage"},r.a.createElement("div",{className:"hackathons-container"},r.a.createElement("h1",null,"Hackathons"),r.a.createElement(Qe,{data:this.state.upcomingHackathons})))}}]),t}(n.Component)),Xe=Object(p.b)(function(e){return console.log(e),{hackathon:e.user.data.hackathons}},function(e){return{}})(Ve),qe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,n=t.username;return r.a.createElement("div",{className:"login-form"},a?r.a.createElement(M.a,null,r.a.createElement(S.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(re,Object.assign({},e,{username:n}))}}),r.a.createElement(S.a,{path:"/swipe",render:function(t){return r.a.createElement(le,Object.assign({},t,{data:e.props}))}}),r.a.createElement(S.a,{path:"/messages",render:function(e){return r.a.createElement(Me,Object.assign({},e,{username:n}))}}),r.a.createElement(S.a,{path:"/hackathons",render:function(e){return r.a.createElement(Xe,Object.assign({},e,{username:n}))}})):r.a.createElement("div",null,r.a.createElement("h1",null,"Login / Register"),r.a.createElement(Q.a,{id:"tabs",variant:"fullWidth",indicatorColor:"primary",textColor:"primary"},r.a.createElement(X.a,{label:"login",icon:r.a.createElement(ee.a,null),value:"login",component:N.a,to:"/"}),r.a.createElement(X.a,{label:"register",icon:r.a.createElement(Z.a,null),value:"register",component:N.a,to:"/register"})),r.a.createElement(M.a,null,r.a.createElement(S.a,{exact:!0,path:"/",component:ae}),r.a.createElement(S.a,{path:"/register",component:J}))))}}]),t}(n.Component),Ze=Object(T.a)(Object(p.b)(function(e){return console.log(e),e.user.data})(qe)),$e=(a(318),a(149)),et=a.n($e),tt=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){et()("localhost:"+Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT).emit("user_connect","Kaizen")}},{key:"render",value:function(){return r.a.createElement(p.a,{store:L},r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(Ze,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,a){e.exports={component:"MessageList_component__1tAFm",empty:"MessageList_empty__292s5"}}},[[152,2,1]]]);
//# sourceMappingURL=main.4b7c10bf.chunk.js.map
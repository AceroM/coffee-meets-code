(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,n){e.exports={component:"Message_component__2j6Bo",pulse:"Message_pulse__2gXXH"}},140:function(e,t,n){e.exports={component:"RoomHeader_component__2UUqw"}},141:function(e,t,n){e.exports={component:"RoomList_component__3OPTO"}},142:function(e,t,n){e.exports={component:"EmptyChat_component__1MMYk",pulse:"EmptyChat_pulse__3Fit8"}},143:function(e,t,n){e.exports={component:"CreateMessageForm_component__31ION"}},144:function(e,t,n){e.exports={component:"MessageList_component__1tAFm",empty:"MessageList_empty__292s5"}},145:function(e,t,n){e.exports={component:"Message_component__3Q88J",online:"Message_online__3SinQ"}},153:function(e,t,n){e.exports=n(350)},158:function(e,t,n){},183:function(e,t,n){},282:function(e,t,n){},284:function(e,t,n){},290:function(e,t,n){},320:function(e,t){},327:function(e,t,n){},348:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),l=n.n(c),o=(n(158),n(7)),s=n(8),i=n(10),u=n(9),m=n(11),p=n(5),d=n(353),h=n(32),f=n(135),g=n(136),b=n(44),E=n(33),v=n.n(E),k=n(61),O=n(26),j=n.n(O),x={data:{isLoggedIn:!1,firstName:"",lastName:"",username:"",password:"",error:"",hackathons:[],githubUrl:"",description:"",age:69,imageUrl:"",likesMe:[],matched:[],used:[],matches:{},talkingTo:"Mark"}},w=function(e){return{type:"GET_USER",user:e}},y=function(e){return{type:"LOGOUT_USER",user:e}},N=function(e){return{type:"CHANGE_TALKINGTO",user:e}},C=function(e){return{type:"CHANGE_CONVO",user:e}},_=Object(h.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=e;switch(t.type){case"GET_USER":case"LOGOUT_USER":return t.user;case"POPULATE_MESSAGES":return n.data.matches=t.user,Object(b.a)({},n);case"CHANGE_TALKINGTO":return n.data.talkingTo=t.user,Object(b.a)({},n);case"CHANGE_CONVO":return n.data.matches=t.user,Object(b.a)({},n);case"ADD_HACKATHON":return n.data.hackathons=t.user,Object(b.a)({},n);default:return e}}}),L=Object(g.composeWithDevTools)(Object(h.applyMiddleware)(f.a)),S=Object(h.createStore)(_,L),M=n(351),U=(n(183),Object(p.b)(function(e){return console.log(e),{isLoggedIn:e.user.data.isLoggedIn,username:e.user.data.username}},function(e){return{handleClick:function(){e(y({data:{isLoggedIn:!1}}))}}})(function(e){var t=e.handleClick,a=e.isLoggedIn;e.username;return r.a.createElement("div",{className:"header"},r.a.createElement("img",{id:"logo",src:n(85),alt:""}),r.a.createElement("nav",{className:"main-nav"},a?r.a.createElement("ul",{className:"nav-items"},r.a.createElement(M.a,{to:"/"}," Profile "),r.a.createElement(M.a,{to:"/swipe"}," Swipe "),r.a.createElement(M.a,{to:"/messages"}," Messages "),r.a.createElement(M.a,{to:"/hackathons"}," Hackathons "),r.a.createElement("a",{href:"#",onClick:t},"Logout")):r.a.createElement("ul",{className:"nav-items"},r.a.createElement(M.a,{to:"/"},"Login"),r.a.createElement(M.a,{to:"/register"},"Register"))))})),T=n(354),H=n(352),A=n(355),D=n(55),F=n.n(D),I=n(54),R=n.n(I),z=n(56),G=n(28),P=n.n(G),W=n(29),B=n.n(W),J=n(30),K=n.n(J),Q=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",password:"",name:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleLogin,n=e.error;return r.a.createElement("div",{className:"card"},r.a.createElement("form",{onSubmit:t},r.a.createElement(R.a,{component:"p"},"Please Enter your login credentials."),r.a.createElement(P.a,null,r.a.createElement(B.a,{htmlFor:"username"}," Username "),r.a.createElement(K.a,{name:"username",type:"text"})),r.a.createElement("br",null),r.a.createElement(P.a,null,r.a.createElement(B.a,{htmlFor:"pass"}," Password "),r.a.createElement(K.a,{name:"password",type:"text"})),r.a.createElement("br",null),r.a.createElement(P.a,null,r.a.createElement(B.a,{htmlFor:"firstName"}," First Name "),r.a.createElement(K.a,{name:"firstName",type:"text"})),r.a.createElement("br",null),r.a.createElement(P.a,null,r.a.createElement(B.a,{htmlFor:"lastName"}," Last Name "),r.a.createElement(K.a,{name:"lastName",type:"text"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(F.a,{type:"submit",size:"small"},"Register"),n&&n.response&&r.a.createElement("div",null," ",n.response," ")))}}]),t}(r.a.Component),Y=Object(p.b)(function(e){return{error:e.user.data.error}},function(e){return{handleLogin:function(t){t.preventDefault();var n=t.target.username.value,a=t.target.password.value,r=t.target.firstName.value,c=t.target.lastName.value;e(function(e,t,n,a){return function(){var r=Object(k.a)(v.a.mark(function r(c){var l;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.a.post("api/hackers/register",{username:e,password:t,firstName:n,lastName:a});case 3:l=r.sent,r.next=10;break;case 6:return r.prev=6,r.t0=r.catch(0),console.error(r.t0),r.abrupt("return",c(y({data:{isLoggedIn:!1,username:"",error:{response:"Invalid credentials please try again"}}})));case 10:try{c(w(l.data))}catch(o){console.error(o)}case 11:case"end":return r.stop()}},r,this,[[0,6]])}));return function(e){return r.apply(this,arguments)}}()}(n,a,r,c))}}})(Object(z.withStyles)({card:{maxWidth:345},media:{height:1e3}})(Q)),X=n(147),q=n.n(X),V=n(89),$=n.n(V),Z=n(149),ee=n.n(Z),te=n(148),ne=n.n(te),ae=(n(282),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleLogin,n=e.error;return r.a.createElement("div",{className:"card"},r.a.createElement("form",{onSubmit:t},r.a.createElement(R.a,{component:"p"},"Please Enter your login credentials."),r.a.createElement(P.a,null,r.a.createElement(B.a,{htmlFor:"username"}," Username "),r.a.createElement(K.a,{type:"text",name:"username"})),r.a.createElement("br",null),r.a.createElement(P.a,null,r.a.createElement(B.a,{htmlFor:"username"}," Password "),r.a.createElement(K.a,{type:"password",name:"password"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(F.a,{type:"submit",size:"small"},"Login"),n&&n.response&&r.a.createElement("div",null," ",n.response," ")))}}]),t}(r.a.Component)),re=Object(p.b)(function(e){return{error:e.user.data.error}},function(e){return{handleLogin:function(t){t.preventDefault();var n=t.target.username.value,a=t.target.password.value;e(function(e,t){return function(){var n=Object(k.a)(v.a.mark(function n(a){var r;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.post("api/hackers/login",{username:e,password:t});case 3:r=n.sent,n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",a(y({data:{isLoggedIn:!1,username:"",error:{response:"Invalid credentials please try again"}}})));case 10:try{a(w(r.data))}catch(c){console.error(c)}case 11:case"end":return n.stop()}},n,this,[[0,6]])}));return function(e){return n.apply(this,arguments)}}()}(n,a))}}})(Object(z.withStyles)({card:{maxWidth:345},media:{height:1e3}})(ae)),ce=(n(284),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.username,e.firstName),n=e.lastName,a=e.imageUrl,c=e.email,l=e.hackathons.map(function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:"hackathon"},e)," \xa0")});return r.a.createElement("div",{className:"profile"},r.a.createElement("h4",null," Welcome back to CoffeeMeetsCode, ",t," "),r.a.createElement("h3",null," My Profile "),r.a.createElement("br",null),r.a.createElement("div",{className:"pfp"},r.a.createElement("img",{src:a,width:"200",height:"200",alt:"Profile picture"})),r.a.createElement("h2",null," ",t," ",n," "),r.a.createElement("p",null,r.a.createElement("strong",null,"About: ")," ","Web Developer, UI/UX"," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Hobbies: ")," Read, out with friends, listen to music, draw and learn new things. "),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: ")," ",c," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Interested Hackathons: ")," ",l," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Skills: "),r.a.createElement("span",{class:"tags"},"html5")," \xa0",r.a.createElement("span",{class:"tags"},"css3")," \xa0",r.a.createElement("span",{class:"tags"},"javascript")," \xa0",r.a.createElement("span",{class:"tags"},"jquery")," \xa0",r.a.createElement("span",{class:"tags"},"reactJS")," \xa0",r.a.createElement("span",{class:"tags"},"express")," \xa0"),r.a.createElement("br",null))}}]),t}(a.Component)),le=Object(p.b)(function(e){return console.log(e),{username:e.user.data.username,firstName:e.user.data.firstName,lastName:e.user.data.lastName,imageUrl:e.user.data.imageUrl,email:e.user.data.email,hackathons:e.user.data.hackathons}})(ce),oe=n(90),se=n(19),ie=n(18);function ue(){var e=Object(se.a)(["\n  background: #158 url(https://images.unsplash.com/photo-1451191703739-5c2ad91bf6af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80) center no-repeat;\n  background-size: cover;\n  height: calc(100% + 40px);\n  margin: -20px;\n  position: relative;\n  width: calc(100% + 40px);\n  -webkit-filter: blur(10px);\n  -moz-filter: blur(10px);\n  filter: blur(10px);\n"]);return ue=function(){return e},e}function me(){var e=Object(se.a)(["\n  & {\n    background: rgba(255,255,255,0.8);\n  border: 1px solid rgba(255,255,255,0.5);\n  border-radius: 40px;\n  color: rgba(0,0,0,0.75);\n  display: block;\n  font-size: 1em;\n  font-weight: 400;\n  height: 44px;\n  letter-spacing: 5px;\n  line-height: 42px;\n  margin: 10px auto;\n  padding: 0;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n  vertical-align: middle;\n  width: 60%;\n  }\n  &:hover {\n    background: rgba(0,0,0,0.1);\n  border: 1px solid rgba(0,0,0,0.15);\n  }\n"]);return me=function(){return e},e}function pe(){var e=Object(se.a)(["\n  & {\n    background: rgba(0, 97, 145, 0.75);\n    bottom: 0;\n    color: #FFF;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    top: 380px;\n    width: inherit;\n  }\n  & ul {\n    display: flex;\n    font-size: 9px;\n    font-weight: 400;\n    height: 40px;\n    line-height: 40px;\n    padding: 20px 20px;\n  }\n  & li:first-child {\n    border: 0;\n  }\n  & li {\n    border-left: 2px solid rgba(255, 255, 255, .15);\n    font-family: 'Quicksand', sans-serif;\n    padding: 0 4px 0 6px;\n    width: 100%;\n  }\n  & a span {\n    color: #9CDFF5;\n    display: inline-block;\n    font-size: 14px;\n    padding: 0 4px 0 0;\n    vertical-align: middle;\n  }\n"]);return pe=function(){return e},e}function de(){var e=Object(se.a)(["\n  & {\n    background: rgba(0, 97, 145, 0.45);\n    color: #FFF;\n    height: 380px;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    top: 0;\n    width: inherit;\n  }\n  &:before {\n    border-right: solid 20px transparent;\n    border-left: solid 20px transparent;\n    border-top: solid 20px #f8d05d;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: -1;\n    content: \"\";\n    top: 100%;\n    left: 50%;\n    height: 0;\n    width: 0;\n  }\n  & img {\n    border: 5px solid #A1DCFF;\n    border-radius: 100%;\n    height: 140px;\n    margin: 4em auto 2.5em;\n    object-fit: cover;\n    width: 140px;\n  }\n  & h2 {\n    color: white;\n    display: inline-block;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 28px;\n    font-weight: 400;\n    letter-spacing: -2px;\n    margin: 0 auto;\n    padding: 0;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  }\n  & h4 {\n    color: rgba(255, 255, 255, 0.75);\n    display: block;\n    font-size: 15px;\n    margin: 0 auto;\n    padding: 5px 0 0;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n    text-transform: uppercase;\n  }\n"]);return de=function(){return e},e}function he(){var e=Object(se.a)(["\n  background: #383838;\n  font-family: 'Open Sans', sans-serif;\n  margin: 0;\n  padding: 0;\n  pointer-events: none;\n  box-shadow: 0 0 100px  rgba(0,0,0,0.25);\n  height: 560px;\n  margin: 2em auto 0;\n  width: 320px;\n  overflow: hidden;\n  position: relative;\n"]);return he=function(){return e},e}var fe=ie.default.div(he()),ge=ie.default.div(de()),be=ie.default.div(pe()),Ee=ie.default.a(me()),ve=ie.default.div(ue()),ke=function(e){var t=e.hacker;return r.a.createElement(fe,null,r.a.createElement(ve,null),r.a.createElement(ge,null,r.a.createElement("img",{src:t.imageUrl,alt:t.username}),r.a.createElement("h2",null," ",t.firstName," ",t.lastName," "),r.a.createElement("h4",null," ",t.description," ")),r.a.createElement(be,null,r.a.createElement("ul",null,t.hackathons?t.hackathons.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement("span",null,e)))}):r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement("span",null,"None :( "))))),r.a.createElement(Ee,null,"Super Like"))},Oe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={other_hackers:[],other_hackers_user:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("api/hackers/allExcept/"+this.props.data.username).then(function(t){var n=t.data.map(function(e){return e.username});e.setState({other_hackers:t.data,other_hackers_user:n})})}},{key:"onSwipeLeft",value:function(e){j.a.post("api/hackers/swipedLeft",{user:this.props.data.username,swipedOn:e.username}).then(function(e){return console.log(e)}).catch(function(e){return console.error(e)})}},{key:"onSwipeRight",value:function(e){j.a.post("api/hackers/swipedRight",{user:this.props.data.username,swipedOn:e.username}).then(function(e){return console.log(e)}).catch(function(e){return console.error(e)})}},{key:"getEndCard",value:function(){return r.a.createElement("div",null,"You're out of hackers!")}},{key:"render",value:function(){var e=this,t=this.state.other_hackers.map(function(t){return r.a.createElement(oe.a,{key:t.username,data:t,onSwipeLeft:e.onSwipeLeft.bind(e),onSwipeRight:e.onSwipeRight.bind(e)},r.a.createElement(ke,{hacker:t}))});return r.a.createElement("div",null,r.a.createElement(oe.b,{addEndCard:this.getEndCard.bind(this)},t))}}]),t}(a.Component),je=(n(290),n(139)),xe=n.n(je),we=Object(p.b)(function(e){return{username:e.user.data.username,firstName:e.user.data.firstName,lastName:e.user.data.lastName,imageUrl:e.user.data.imageUrl}})(function(e){var t=e.username,n=e.firstName,a=e.lastName,c=e.imageUrl;return r.a.createElement("header",{className:xe.a.component},r.a.createElement("img",{src:c,alt:t}),r.a.createElement("div",null,r.a.createElement("h3",null,n," ",a),r.a.createElement("h5",null,"@",t)))}),ye=n(140),Ne=n.n(ye),Ce=function(e){var t=e.roomName;return r.a.createElement("header",{className:Ne.a.component},r.a.createElement("h1",null," ",t," "))},_e=n(141),Le=n.n(_e),Se=n(40),Me=n.n(Se),Ue=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={matches:{}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.username,a=t.isLoggedIn,r=t.firstName,c=t.matches,l=t.loadChat;j.a.get("/api/hackers/matched/".concat(n)).then(function(t){var n=t.data,o=window.location.hostname;a&&Me()(o).emit("user_connect",r.toLowerCase());n.length>0?(n.forEach(function(e){var t=e.username;c[t]=[{name:t,message:"Hi",imageUrl:e.imageUrl}]}),e.setState({matches:c}),l(c)):e.setState({lonely:!0})})}},{key:"render",value:function(){var e=this.props.handleClick;return r.a.createElement("ul",{className:Le.a.component},0===Object.keys(this.state.matches).length?r.a.createElement("li",null," You got matched with nobody. YIKES "):Object.entries(this.state.matches).map(function(t){return r.a.createElement("li",{onClick:function(n){return e(t[0])}}," ",t[0],r.a.createElement("col-",null,r.a.createElement("span",null,t[1][0].message)))}))}}]),t}(r.a.Component),Te=Object(p.b)(function(e){return console.log(e.user.data.matches),{username:e.user.data.username,matches:e.user.data.matches,matched:e.user.data.matched,talkingTo:e.user.data.talkingTo}},function(e){return{loadChat:function(t){e(C(t))},handleClick:function(t){e(N(t))},handleTalking:function(t){e(N(t))}}})(Ue),He=n(142),Ae=n.n(He),De=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:Ae.a.component},r.a.createElement("span",{role:"img","aria-label":"post"},r.a.createElement("svg",{viewBox:"0 0 59 80"},r.a.createElement("g",null,r.a.createElement("path",{d:"M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396"}),r.a.createElement("path",{d:"M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761"}),r.a.createElement("path",{d:"M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606"})))),r.a.createElement("p",null,"Go find a coding partner you lonely nerd.")))},Fe=n(143),Ie=n.n(Fe),Re=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.firstName,e.imageUrl),n=e.username,a=e.matches,c=e.talkingTo,l=e.handleSubmit,o=e.handleTalking,s=Me()(window.location.hostname);return s.on("pm"+n,function(e,a,r){l(t,a,n,r,e)}),r.a.createElement("form",{className:Ie.a.component,onSubmit:function(e){e.preventDefault();var r=e.target[0].value.trim();0!==r.length&&(e.target[0].value="",s.emit("pm",r,n,c,a),l(t,n,c,a,r),o(c))}},r.a.createElement("input",{placeholder:"Type a message.."}),r.a.createElement("button",{type:"submit"},r.a.createElement("svg",{id:"send",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(r.a.Component),ze=Object(p.b)(function(e){return{imageUrl:e.user.data.imageUrl,username:e.user.data.username,firstName:e.user.data.firstName,matches:e.user.data.matches,talkingTo:e.user.data.talkingTo}},function(e){return{handleSubmit:function(t,n,a,r,c){e(function(e,t,n,a,r){return function(c){var l={message:r,imageUrl:e,name:t},o={};for(var s in a)s===n?o[t]=a[s]:o[s]=a[s];var i=o[t];i.unshift(l),o[t]=i,c(C(o))}}(t,n,a,r,c))},handleTalking:function(t){e(N(t))}}})(Re),Ge=n(144),Pe=n.n(Ge),We=n(145),Be=n.n(We),Je=function(e){var t=e.name,n=e.imageUrl,a=e.message;return r.a.createElement("li",{className:Be.a.component},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("span",null,"".concat(t," | ").concat(function(e){var t=new Date(e),n=t.getMinutes();return"".concat(t.getHours(),":").concat(n<10?"0"+n:n)}(new Date))),r.a.createElement("p",null," ",a," "))},Ke=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.matches,n=e.talkingTo,a=(e.firstName,t[n]);return r.a.createElement("ul",{id:"messages",className:Pe.a.component},r.a.createElement("wrapper-",null,a?a.map(function(e){return r.a.createElement(Je,{name:e.name,imageUrl:e.imageUrl,message:e.message})}):r.a.createElement("p",null,JSON.stringify(t))))}}]),t}(r.a.Component),Qe=Object(p.b)(function(e){return console.log(e),{username:e.user.data.username,firstName:e.user.data.firstName,matches:e.user.data.matches,talkingTo:e.user.data.talkingTo}},function(e){return{handleMessage:function(t){e({type:"POPULATE_MESSAGES",user:t})}}})(Ke),Ye=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={lonely:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.talkingTo;return r.a.createElement("main",{className:"messageBody"},r.a.createElement("aside",null,r.a.createElement(we,null),(this.state.lonely,r.a.createElement(Te,null))),r.a.createElement("section",null,r.a.createElement(Ce,{roomName:e}),e?r.a.createElement("row-",null,r.a.createElement("col-",null,r.a.createElement(Qe,null),r.a.createElement(ze,null))):r.a.createElement(De,null)))}}]),t}(a.Component),Xe=Object(p.b)(function(e){return console.log(e.user.data),{isLoggedIn:e.user.data.isLoggedIn,talkingTo:e.user.data.talkingTo,matched:e.user.data.matched,matches:e.user.data.matches,username:e.user.data.username,firstName:e.user.data.firstName}},function(e){return{loadChat:function(t){e(C(t))}}})(Ye),qe=n(57);function Ve(){var e=Object(se.a)(["\n  font-size: ",";\n  font-size: ",";\n  opacity: ",";\n"]);return Ve=function(){return e},e}var $e=ie.default.span(Ve(),function(e){return e.lead&&"1.2rem"},function(e){return e.small&&"0.9rem"},function(e){return e.muted&&"0.6"});function Ze(){var e=Object(se.a)(["\n  display: block;\n  border-radius: 4px;\n  max-width: 100%;\n  height: auto;\n"]);return Ze=function(){return e},e}var et=ie.default.img(Ze()),tt=n(151);function nt(){var e=Object(se.a)(["\n  padding: 0.75em 1em;\n  background-color: hsl(234, 100%, 74%);\n  border: 0;\n  border-radius: 4px;\n  color: hsl(234, 80%, 98%);\n  font-size: 1rem;\n  font-weight: bold;\n  width: ",";\n\n  &:hover {\n    background-color: hsl(234, 100%, 70%);\n  }\n\n  &:focus {\n    background-color: hsl(234, 100%, 64%);\n    outline-color: hsl(234, 100%, 86%);\n  }\n"]);return nt=function(){return e},e}var at=ie.default.button(nt(),function(e){return e.wide&&"100%"});at.Map=function(e){return r.a.createElement(at,e,r.a.createElement(tt.a,null))};var rt=at;function ct(){var e=Object(se.a)(["\n  margin: 0 0 0.3rem;\n"]);return ct=function(){return e},e}function lt(){var e=Object(se.a)(["\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px hsl(234, 20%, 80%);\n"]);return lt=function(){return e},e}var ot=ie.default.div(lt());ot.Title=ie.default.h3(ct());var st=ot,it=Object(p.b)(function(e){return console.log(e.user.data.hackathons),{hackathons:e.user.data.hackathons,username:e.user.data.username}},function(e){return{handleHackathon:function(t,n){e(function(e,t){return function(){var n=Object(k.a)(v.a.mark(function n(a){var r;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.post("api/hackers/hackathon/add",{username:e,hackathonName:t.trim()});case 3:r=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:try{a({type:"ADD_HACKATHON",user:r.data})}catch(c){console.error(c)}case 10:case"end":return n.stop()}},n,this,[[0,6]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(function(e){var t=e.name,n=e.url,a=e.startDate,c=e.endDate,l=e.location,o=(e.isHighSchool,e.imageUrl),s=e.hackathons,i=e.handleHackathon,u=e.username;return r.a.createElement(st,null,r.a.createElement(qe.Composition,{template:"\nthumbnail\nheading\nactions\n",templateMd:"\nthumbnail heading\nthumbnail actions\n",templateLg:"\nthumbnail\nheading\nactions\n",templateColsMdOnly:"minmax(100px, 1fr) 1fr",padding:15,gutter:15,gutterLg:25},function(e){var m=e.Thumbnail,p=e.Heading,d=e.Actions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement("a",{href:n},r.a.createElement(et,{src:o,alt:t}))),r.a.createElement(p,null,r.a.createElement("a",{href:n},r.a.createElement("h3",null,t)),r.a.createElement($e,{small:!0,muted:!0},l,r.a.createElement("br",null),"Starts on: ",a,r.a.createElement("br",null),"Ends on: ",c)),r.a.createElement(d,{flex:!0,align:"flex-end"},s?s.filter(function(e){return e.trim().toLowerCase().includes(t.trim().toLowerCase())}).length>0?r.a.createElement(rt,{disabled:"true",wide:!0},"Already Registered"):r.a.createElement(rt,{onClick:function(e){return i(u,t)},wide:!0},"Register"):r.a.createElement("div",null)))}))}),ut=function(e){var t=e.data;return r.a.createElement(qe.Composition,{templateCols:"repeat(auto-fit, 250px)",templateColsMd:"repeat(2, 1fr)",templateColsLg:"repeat(auto-fit, minmax(250px, 1fr))",justifyContent:"center",gutter:16,gutterLg:16},t.map(function(e){return r.a.createElement(it,Object.assign({key:e.id},e))}))},mt=(n(327),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).fetchHackathonData=function(e){var t=e.getYear()+1900,a=e.toISOString().substr(0,10);fetch("https://mlh-events.now.sh/na-"+t).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.filter(function(e){return e.startDate>a});n.setState({upcomingHackathons:t})}).catch(function(e){return console.error(e)})},n.state={upcomingHackathons:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=new Date;this.fetchHackathonData(e)}},{key:"render",value:function(){return console.log("Upcoming hackathons: ",this.state.upcomingHackathons),r.a.createElement("div",{className:"hackathonPage"},r.a.createElement("div",{className:"hackathons-container"},r.a.createElement("h1",null,"Hackathons"),r.a.createElement(ut,{data:this.state.upcomingHackathons})))}}]),t}(a.Component)),pt=Object(p.b)(function(e){return console.log(e),{hackathon:e.user.data.hackathons}},function(e){return{}})(mt),dt=n(85),ht=n.n(dt),ft=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.isLoggedIn,a=t.username;return r.a.createElement("div",{className:"login-form"},n?r.a.createElement(T.a,null,r.a.createElement(H.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(le,Object.assign({},e,{username:a}))}}),r.a.createElement(H.a,{path:"/swipe",render:function(t){return r.a.createElement(Oe,Object.assign({},t,{data:e.props}))}}),r.a.createElement(H.a,{path:"/messages",render:function(e){return r.a.createElement(Xe,Object.assign({},e,{username:a}))}}),r.a.createElement(H.a,{path:"/hackathons",render:function(e){return r.a.createElement(pt,Object.assign({},e,{username:a}))}})):r.a.createElement("div",null,r.a.createElement("div",{id:"logo2"},r.a.createElement("img",{style:{width:"40%",height:"40%"},src:ht.a})),r.a.createElement("h1",null,"Login / Register"),r.a.createElement(q.a,{id:"tabs",variant:"fullWidth",indicatorColor:"primary",textColor:"primary"},r.a.createElement($.a,{label:"login",icon:r.a.createElement(ne.a,null),value:"login",component:M.a,to:"/"}),r.a.createElement($.a,{label:"register",icon:r.a.createElement(ee.a,null),value:"register",component:M.a,to:"/register"})),r.a.createElement(T.a,null,r.a.createElement(H.a,{exact:!0,path:"/",component:re}),r.a.createElement(H.a,{path:"/register",component:Y}))))}}]),t}(a.Component),gt=Object(A.a)(Object(p.b)(function(e){return console.log(e),e.user.data})(ft)),bt=(n(348),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:S},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(gt,null))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(bt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,n){e.exports=n.p+"static/media/bagel.545c0a1a.png"}},[[153,2,1]]]);
//# sourceMappingURL=main.fe02633e.chunk.js.map
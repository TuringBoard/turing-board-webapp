(this["webpackJsonpturing-board-webapp"]=this["webpackJsonpturing-board-webapp"]||[]).push([[0],{13:function(e,t,a){e.exports={login:"Credentials_login__1sA7i",signup:"Credentials_signup__1HE_j",gap:"Credentials_gap__2YQwa",header:"Credentials_header__1_E3p",form:"Credentials_form__LOkW9",inputBox:"Credentials_inputBox__2M-Ee",inputBoxError:"Credentials_inputBoxError__2uUx2",submit:"Credentials_submit__22Z3V",footer:"Credentials_footer__2meDc",link:"Credentials_link__3vxD1",invalid:"Credentials_invalid__qFCLs"}},25:function(e,t,a){e.exports={backdrop:"Dashboard_backdrop__2TmH1",welcome:"Dashboard_welcome__2CmxV",message:"Dashboard_message__2np15",dashOptions:"Dashboard_dashOptions__1e5fe",dashOption:"Dashboard_dashOption__xhJfC",main:"Dashboard_main__8jmOV",logo:"Dashboard_logo__1hI8g",settings:"Dashboard_settings__1O1hO",navlink:"Dashboard_navlink__3pS-f"}},28:function(e,t,a){e.exports={backdrop:"Throttle_backdrop__kUlJx",gauge:"Throttle_gauge__1UATm",gaugeReading:"Throttle_gaugeReading__3kMUx",odo:"Throttle_odo__3CMLG",gaugeFooter:"Throttle_gaugeFooter__24f4b",throttle:"Throttle_throttle__3zRmt",welcome:"Throttle_welcome__25oS2",navlink:"Throttle_navlink__1RUTI",goback:"Throttle_goback__2FJbr"}},44:function(e,t,a){e.exports={logo:"LandingPage_logo__w1uvn",main:"LandingPage_main__2cNEO"}},52:function(e,t,a){e.exports={backdrop:"LandingBg_backdrop__27Gzp"}},54:function(e,t,a){e.exports={goback:"Settings_goback__35zEr"}},55:function(e,t,a){e.exports={backdrop:"Backdrop_backdrop__S-uL4"}},59:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(8),s=a.n(c),n=a(47),r=a.n(n),i=(a(59),a(12)),o=a(11),l=a(44),d=a.n(l),j=a(13),u=a.n(j),b=a(48),O=a(49),h=Object(O.a)({apiKey:"AIzaSyDNS6tW71-jOsGKOGrh6V5dQWTfZSS6tCI",authDomain:"turing-board.firebaseapp.com",projectId:"turing-board",storageBucket:"turing-board.appspot.com",messagingSenderId:"1008426809841",appId:"1:1008426809841:web:0e490af3b6046f64aeec50"}),p=Object(b.a)(h),x=a(35),m=a(27),g=a(6),f=s.a.createContext(),_=Object(m.d)(),v=function(){return Object(c.useContext)(f)},N=function(e){var t=e.children,a=Object(c.useState)(),s=Object(o.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(!1),d=Object(o.a)(l,2),j=d[0],u=d[1],b=Object(c.useState)(!1),O=Object(o.a)(b,2),h=O[0],v=O[1],N=Object(c.useState)(""),k=Object(o.a)(N,2),S=k[0],C=k[1],w=Object(c.useState)(!1),y=Object(o.a)(w,2),F=y[0],I=y[1],T=Object(i.f)();Object(c.useEffect)((function(){return p.onAuthStateChanged((function(e){e&&C(e.uid),r(e),I(!0)}))}),[]);var D={currentUser:n,isLoggedIn:F,signup:function(e,t,a,c){Object(x.a)(p,e,t).then((function(e){return Object(m.f)(Object(m.b)(_,"users",e.user.uid),{id:e.user.uid,firstName:a,lastName:c})})).catch((function(e){v(!1)})),v(!0)},login:function(e,t){Object(x.c)(p,e,t).catch((function(e){u(!1)})),u(!0)},logout:function(){Object(x.d)(p).then((function(){I(!1),T.push("/")})).catch((function(e){alert("An error occured: ",e)}))},loginSuccess:j,signupSuccess:h,uid:S};return Object(g.jsx)(f.Provider,{value:D,children:t})},k=function(e){var t=v(),a=t.login,s=t.loginSuccess,n=Object(c.useState)(!1),r=Object(o.a)(n,2),l=r[0],d=r[1],j=Object(c.useRef)(),b=Object(c.useRef)(),O=Object(i.f)();return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsxs)("div",{className:u.a.login,children:[Object(g.jsx)("div",{className:u.a.header,children:Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"SIGN IN"})})}),Object(g.jsx)("div",{className:u.a.form,children:Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{className:u.a.inputBox,type:"email",placeholder:"E-mail address",ref:j}),Object(g.jsx)("input",{className:u.a.inputBox,type:"password",placeholder:"Password",ref:b}),Object(g.jsx)("button",{className:u.a.submit,onClick:function(e){e.preventDefault(),d(!0),a(j.current.value,b.current.value),s&&O.push("/dashboard")},children:Object(g.jsx)("b",{children:"LOG IN"})})]})}),Object(g.jsxs)("div",{className:u.a.footer,children:[Object(g.jsx)("u",{onClick:function(){alert("This feature is currently under construction.")},children:"Forgot Password?"})," or ",Object(g.jsx)("u",{onClick:e.content,children:"Sign Up!"})]})]}),!s&&l&&Object(g.jsxs)("div",{className:u.a.invalid,children:["Invalid email address or password, ",Object(g.jsx)("br",{}),"please try again."]})]})},S=a.p+"static/media/Asset 2.c192d11c.png",C=a(52),w=a.n(C),y=function(){return Object(g.jsx)("div",{className:w.a.backdrop})},F=function(){var e=v(),t=e.signup,a=e.signupSuccess,s=Object(c.useState)(!1),n=Object(o.a)(s,2),r=n[0],l=n[1],d=Object(c.useState)(u.a.inputBox),j=Object(o.a)(d,2),b=j[0],O=j[1],h=Object(c.useRef)(),p=Object(c.useRef)(),x=Object(c.useRef)(),m=Object(c.useRef)(),f=Object(c.useRef)(),_=Object(i.f)();return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsxs)("div",{className:u.a.signup,children:[Object(g.jsx)("div",{className:u.a.header,children:Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Create new account"})})}),Object(g.jsxs)("div",{className:u.a.form,children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{className:u.a.inputBox,type:"text",placeholder:"First Name",ref:m}),Object(g.jsx)("input",{className:u.a.inputBox,type:"text",placeholder:"Last Name",ref:f}),Object(g.jsx)("div",{className:u.a.gap}),Object(g.jsx)("input",{className:u.a.inputBox,type:"email",placeholder:"E-mail Address",ref:h}),Object(g.jsx)("div",{className:u.a.gap}),Object(g.jsx)("input",{className:b,type:"password",placeholder:"Password",ref:p}),Object(g.jsx)("input",{className:b,type:"password",placeholder:"Confirm Password",ref:x}),Object(g.jsx)("div",{className:u.a.gap}),Object(g.jsx)("button",{className:u.a.submit,onClick:function(e){e.preventDefault(),l(!0),p.current.value===x.current.value&&""!==m.current.value&&""!==f.current.value?(O(u.a.inputBox),t(h.current.value,x.current.value,m.current.value,f.current.value),_.push("/dashboard")):null!==m.current.value&&null!==f.current.value?alert("First and Last names cannot be empty."):O(u.a.inputBoxError)},children:Object(g.jsx)("b",{children:"SIGN UP"})})]}),Object(g.jsx)("div",{className:u.a.footer,children:Object(g.jsx)("u",{onClick:function(){window.location.reload(!1)},children:"Already have an account?"})})]})]}),!a&&r&&Object(g.jsxs)("div",{className:u.a.invalid,children:["Something went wrong, ",Object(g.jsx)("br",{}),"please try again."]})]})},I=function(){var e=v().isLoggedIn,t=Object(i.f)();Object(c.useEffect)((function(){e&&t.push("/dashboard")}),[e,t]);var a=Object(c.useState)(Object(g.jsx)(k,{content:function(){r(Object(g.jsx)(F,{}))}})),s=Object(o.a)(a,2),n=s[0],r=s[1];return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(y,{}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:d.a.main,children:[Object(g.jsx)("img",{src:S,className:d.a.logo,alt:"logo"}),n]})})]})},T=a(28),D=a.n(T),E=a(53),B=a.n(E),R=(a(74),a(29)),L=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Array(30).fill("#FFFFFF");return Object(g.jsx)(c.Fragment,{children:Object(g.jsxs)("div",{style:{overflow:"hidden"},children:[Object(g.jsx)("div",{className:D.a.backdrop}),Object(g.jsxs)("div",{className:D.a.gauge,children:[Object(g.jsx)(B.a,{id:"speedometer",nrOfLevels:30,cornerRadius:3,percent:a/20,arcPadding:.021,arcWidth:.05,colors:n,formatTextValue:function(e){return""},className:D.a.gauge}),Object(g.jsxs)("p",{className:D.a.gaugeReading,children:[a," mph"]}),Object(g.jsx)("p",{className:D.a.odo,children:"Odometer"}),Object(g.jsxs)("div",{className:D.a.gaugeFooter,children:[Object(g.jsx)("div",{children:"\u2601\ufe0f \xa0 85 \xb0 F"}),Object(g.jsx)("div",{children:"TRIP: 0.0 mi"})]}),Object(g.jsx)("div",{className:D.a.throttle,children:Object(g.jsx)("input",{id:"throttle",type:"range",min:"-5",max:"18",step:"0.125",value:a,onChange:function(e){var t=e.target.value;t<0&&(t=0),s(t)},onTouchEnd:function(){s(0)}})})]}),Object(g.jsx)(R.b,{to:"/dashboard",className:D.a.navlink,children:Object(g.jsx)("div",{className:D.a.goback,children:"Dashboard"})})]})})},A=a(0),P=a.n(A),U=a(2),G=a(25),M=a.n(G),W=Object(m.d)(),J=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],n=v().uid,r=function(){alert("This feature is currently under construction.")};return Object(c.useEffect)((function(){function e(){return(e=Object(U.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(m.e)(Object(m.a)(W,"users"),Object(m.g)("id","==",n)),e.next=3,Object(m.c)(t);case 3:e.sent.forEach((function(e){s(e.data().firstName)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)("div",{className:M.a.backdrop}),Object(g.jsx)("img",{src:S,className:M.a.logo,alt:"logo"}),Object(g.jsxs)("div",{className:M.a.main,children:[Object(g.jsx)("div",{className:M.a.welcome,children:Object(g.jsxs)("p",{children:["Hello, ",a,"!"]})}),Object(g.jsx)("p",{className:M.a.message,children:"What would you like to do today?"}),Object(g.jsxs)("div",{className:M.a.dashOptions,children:[Object(g.jsx)("div",{tabIndex:"0",className:M.a.dashOption,onClick:r,children:"SUMMON BOARD"}),Object(g.jsx)("div",{tabIndex:"1",className:M.a.dashOption,onClick:r,children:"FOLLOW ME"}),Object(g.jsx)(R.b,{className:M.a.dashOption,to:"/throttle",children:Object(g.jsx)("div",{tabIndex:"2",children:"GO FOR A RIDE"})})]}),Object(g.jsx)(R.b,{className:M.a.navlink,to:"/settings",children:Object(g.jsx)("div",{className:M.a.settings,children:Object(g.jsx)("p",{children:"Manage Settings \u2699\ufe0f"})})})]})]})},V=a(43),z=a(54),H=a.n(z),K=a(55),Q=a.n(K),Z=function(){return Object(g.jsx)("div",{className:Q.a.backdrop})},q=function(){var e=v().logout;return Object(g.jsxs)(V.Fragment,{children:[Object(g.jsx)(Z,{}),Object(g.jsx)("div",{className:H.a.goback,onClick:function(){e()},children:"LOG OUT"})]})};var Y=function(){return Object(g.jsx)(N,{children:Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{path:"/",exact:!0,children:Object(g.jsx)(I,{})}),Object(g.jsx)(i.a,{path:"/signup",exact:!0,children:Object(g.jsx)(F,{})}),Object(g.jsx)(i.a,{path:"/dashboard",exact:!0,children:Object(g.jsx)(J,{})}),Object(g.jsx)(i.a,{path:"/throttle",exact:!0,children:Object(g.jsx)(L,{})}),Object(g.jsx)(i.a,{path:"/settings",exact:!0,children:Object(g.jsx)(q,{})})]})})};r.a.render(Object(g.jsx)(R.a,{children:Object(g.jsx)(Y,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.34b432ca.chunk.js.map
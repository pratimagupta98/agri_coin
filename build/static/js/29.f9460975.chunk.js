(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[29],{552:function(e,t,a){"use strict";e.exports=a(581)},556:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(6),l=a(179);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},572:function(e,t,a){"use strict";var n=a(0);t.a=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t}},575:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a(572);function o(e){var t=Object(r.a)(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},581:function(e,t,a){"use strict";a(134);var n=a(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var n,o={},i=null,u=null;for(n in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:i,ref:u,props:o,_owner:l.current}}t.jsx=i,t.jsxs=i},590:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));function n(e){return"".concat("data-rr-ui-").concat(e)}function r(e){return"".concat("rrUi").concat(e)}},591:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},592:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},598:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},673:function(e,t,a){"use strict";var n=a(7),r=a(12),o=a(182),l=a(16),c=a(0),s=a.n(c),i=a(3),u=a.n(i),m=a(77),p=a.n(m),f=a(54),d=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,l=e.className,c=e.close,i=e.cssModule,u=e.color,m=e.outline,b=e.size,h=e.tag,g=e.innerRef,v=Object(r.a)(e,d);c&&"undefined"===typeof v.children&&(v.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(m?"-outline":"")+"-"+u,y=Object(f.b)(p()(l,{close:c},c||"btn",c||E,!!b&&"btn-"+b,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);v.href&&"button"===h&&(h="a");var N=c?"Close":null;return s.a.createElement(h,Object(n.a)({type:"button"===h&&v.onClick?"button":void 0},v,{className:y,ref:g,onClick:this.onClick,"aria-label":a||N}))},t}(s.a.Component);h.propTypes=b,h.defaultProps={color:"secondary",tag:"button"},t.a=h},846:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(180),r=a(183),o=a(184),l=a(185),c=a(186),s=a(0),i=a.n(s),u=a(559),m=a.n(u),p=(a(179),a(588)),f=a(603),d=a(58),b=a.n(d),h=a(181),g=(a(556),a(673)),v=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).otpHandler=function(e){e.preventDefault(),console.log(o.state),b.a.post("http://35.154.86.59/api/user/verifyotp",{mobile:o.state.mobile,otp:o.state.otpnumber}).then((function(e){console.log(e),localStorage.setItem("auth-token",o.state.token),o.props.history.push({pathname:"/cart"})})).catch((function(e){console.log(e.response)}))},o.handlechange=function(e){e.preventDefault(),o.setState(Object(n.a)({},e.target.name,e.target.value))},o.loginHandler=function(e){e.preventDefault(),b.a.post("http://35.154.86.59/api/user/login",{mobile:NaN!=parseInt(o.state.email)?parseInt(o.state.email):"null",email:o.state.email,password:o.state.password}).then((function(e){console.log(e),localStorage.setItem("auth-token",e.data.token),o.props.history.push("/cart")})).catch((function(e){console.log(e),console.log(e.response)}))},o.changeHandler=function(e){e.preventDefault(),o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),o.setState({otp:!1}),b.a.post("http://35.154.86.59/api/user/signup",o.state).then((function(e){console.log(e),o.setState({token:e.data.token})})).catch((function(e){console.log(e.response)})),b.a.post("http://35.154.86.59/api/user/sendotp",{mobile:o.state.mobile}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},o.state={firstname:"",lastname:"",email:"",mobile:"",password:"",otp:!0,otpnumber:"",token:""},o}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state.otp),i.a.createElement(s.Fragment,null,i.a.createElement(m.a,null,i.a.createElement("title",null,"Buynaa | Login"),i.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),i.a.createElement(h.a,{headerTop:"visible"},i.a.createElement("div",{className:"login-register-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},i.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},this.state.otp?i.a.createElement("div",{className:"login-register-wrapper"},i.a.createElement(p.a.Container,{defaultActiveKey:"login"},i.a.createElement(f.a,{variant:"pills",className:"login-register-tab-list"},i.a.createElement(f.a.Item,null,i.a.createElement(f.a.Link,{eventKey:"login"},i.a.createElement("h4",null,"Login"))),i.a.createElement(f.a.Item,null,i.a.createElement(f.a.Link,{eventKey:"register"},i.a.createElement("h4",null,"Register")))),i.a.createElement(p.a.Content,null,i.a.createElement(p.a.Pane,{eventKey:"login"},i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement("form",{onSubmit:this.loginHandler},i.a.createElement("input",{type:"text",name:"email",placeholder:"Email / Mobile",value:this.state.email,onChange:this.handlechange}),i.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handlechange}),i.a.createElement("div",{className:"button-box"},i.a.createElement("div",{className:"login-toggle-btn"}),i.a.createElement("button",{type:"submit"},i.a.createElement("span",null,"Login"))))))),i.a.createElement(p.a.Pane,{eventKey:"register"},i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement("form",{className:"text-center",onSubmit:this.submitHandler,method:"post"},i.a.createElement("input",{type:"text",name:"firstname",placeholder:"Enter Your Firstname",value:this.state.firstname,onChange:this.changeHandler}),i.a.createElement("input",{type:"text",name:"lastname",placeholder:"Enter Your Lastname",value:this.state.lastname,onChange:this.changeHandler}),i.a.createElement("input",{type:"email",name:"email",placeholder:"Enter Your Email",value:this.state.email,onChange:this.changeHandler}),i.a.createElement("input",{type:"number",name:"mobile",placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),i.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler}),i.a.createElement("div",{className:"button-box"},i.a.createElement("button",{type:"submit"},i.a.createElement("span",null,"Register")))))))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement("form",{onSubmit:this.otpHandler},i.a.createElement("input",{type:"number",name:"otpnumber",placeholder:"OTP No",value:this.state.otpnumber,onChange:this.handlechange}),i.a.createElement("div",{className:"button-box"},i.a.createElement("div",{className:"login-toggle-btn"}),i.a.createElement(g.a,{type:"submit"},i.a.createElement("span",null,"Verify")))))))))))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=29.f9460975.chunk.js.map
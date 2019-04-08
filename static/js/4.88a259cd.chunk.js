(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(107),r=a.n(i);t.a=function(e){var t=null,a=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(r.a.Invalid),e.elementType){case"input":t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=l.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=l.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return l.a.createElement("div",{className:r.a.Input},l.a.createElement("label",{className:r.a.Label},e.label),t)}},107:function(e,t,a){e.exports={Input:"Input_Input__3f2gU",Label:"Input_Label__KbDJc",InputElement:"Input_InputElement__2njDr",Invalid:"Input_Invalid__27uTa"}},111:function(e,t,a){e.exports={Auth:"Auth_Auth__1nGzo"}},112:function(e,t,a){"use strict";a.r(t);var n=a(25),l=a(4),i=a(5),r=a(7),s=a(6),o=a(8),c=a(0),u=a.n(c),d=a(15),p=a(21),h=a(106),m=a(35),g=a(44),v=a(111),b=a.n(v),f=a(16),E=a(3),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},a.inputChangedHandler=function(e,t){var l=Object(E.b)(a.state.controls,Object(n.a)({},t,Object(E.b)(a.state.controls[t],{value:e.target.value,valid:Object(E.a)(e.target.value,a.state.controls[t].validation),touched:!0})));a.setState({controls:l})},a.handleFormSubmit=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.password.value,a.state.isSignUp)},a.switchAuthModeHandler=function(){a.setState(function(e){return{isSignUp:!e.isSignUp}})},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.isBuilding||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map(function(t){return u.a.createElement(h.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.elementConfig.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})});this.props.isLoading&&(n=u.a.createElement(g.a,null));var l=null;if(this.props.error)switch(this.props.error.message){case"INVALID_EMAIL":l=u.a.createElement("p",null,"Please use a valid email.");break;case"EMAIL_EXISTS":l=u.a.createElement("p",null,"Email already exists.");break;case"EMAIL_NOT_FOUND":l=u.a.createElement("p",null,"Email does not exist. Please try another email or register an account.");break;case"MISSING_PASSWORD":l=u.a.createElement("p",null,"Please include a password.");break;case"WEAK_PASSWORD : Password should be at least 6 characters":l=u.a.createElement("p",null,"Password should be at least 6 characters.");break;case"INVALID_PASSWORD":l=u.a.createElement("p",null,"Incorrect password. Please try again.");break;case"USER_DISABLED":l=u.a.createElement("p",null,"Your account has been suspensed. Please contact the administrator");break;default:l=u.a.createElement("p",null,this.props.error.message)}var i=this.state.isSignUp?u.a.createElement(m.a,{btnType:"Success"},"REGISTER"):u.a.createElement(m.a,{btnType:"Success"},"CONTINUE"),r=null;return this.props.isAuthenticated&&(r=u.a.createElement(p.a,{to:this.props.authRedirectPath})),u.a.createElement("div",{className:b.a.Auth},u.a.createElement("h2",null,this.state.isSignUp?"Register account":"Sign in"),r,u.a.createElement("div",{style:{fontWeight:"bold",color:"red"}},l),u.a.createElement("form",{onSubmit:this.handleFormSubmit},n,i),u.a.createElement(m.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignUp?"SIGN IN":"REGISTER"))}}]),t}(c.Component);t.default=Object(d.b)(function(e){return{isLoading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,isBuilding:e.burgerBuilder.isBuilding,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,a,n){return e(f.b(t,a,n))},onSetAuthRedirectPath:function(){return e(f.j("/"))}}})(S)}}]);
//# sourceMappingURL=4.88a259cd.chunk.js.map
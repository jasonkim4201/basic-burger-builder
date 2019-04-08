(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"l",function(){return c}),n.d(t,"m",function(){return u}),n.d(t,"k",function(){return s}),n.d(t,"j",function(){return l}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return E});var r="ADD_INGREDIENTS",a="REMOVE_INGREDIENTS",o="SET_INGREDIENTS",i="FETCH_FAILED_INGREDIENTS",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_FAILED",l="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAILED",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAILED",b="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(23),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isNum){n=/^\d+$/.test(e.trim())&&n}if(t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.trim())&&n}return n}},,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,,function(e,t,n){"use strict";var r=n(1),a=n(20),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://basic-burger-builder.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(23),s=function(e,t){return function(n){n({type:r.l}),a.a.post("/orders.json?auth=".concat(t),e).then(function(t){console.log(t.data),n(function(e,t){return{type:r.m,id:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.k,error:e}}(e))})}},l=function(){return{type:r.j}},d=function(e,t){return function(n){n({type:r.h});var o="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');a.a.get("/orders.json".concat(o)).then(function(e){var t,a=[];for(var o in e.data)console.log(o),a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){n(function(e){return{type:r.g,error:e}}(e))})}},p=n(34),m=n.n(p),h=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout(function(){t(f())},1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBkXrE0KP6pxhKiQYZChVq4n3WdtaCNegk";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBkXrE0KP6pxhKiQYZChVq4n3WdtaCNegk"),m.a.post(i,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))}).catch(function(e){a(function(e){return{type:r.b,error:e}}(e.response.data.error))})}},E=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userId");e(h(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return E}),n.d(t,"c",function(){return _})},,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__T6QlU",BreadTop:"BurgerIngredients_BreadTop__2srMU",Seeds1:"BurgerIngredients_Seeds1__1VoCH",Seeds2:"BurgerIngredients_Seeds2__25B8l",Meat:"BurgerIngredients_Meat__3P68N",Cheese:"BurgerIngredients_Cheese__3KfBz",Lettuce:"BurgerIngredients_Lettuce__2qGmx",Bacon:"BurgerIngredients_Bacon__2I5iK"}},,function(e,t,n){"use strict";var r=n(34),a=n.n(r).a.create({baseURL:"https://basic-burger-builder.firebaseio.com/"});t.a=a},,,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(68),i=n.n(o),c=n(69),u=n.n(c);t.a=function(e){return a.a.createElement("div",{className:i.a.CustomError},a.a.createElement("img",{src:u.a,alt:"Burger error"}),a.a.createElement("p",null,"Oh no! Something went horribly wrong!"),a.a.createElement("p",null,e.message))}},,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2STW0",Open:"SideDrawer_Open__2YY_a",Close:"SideDrawer_Close__2TYD9"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1vQIq",Label:"BuildControl_Label__2XaJ1",Less:"BuildControl_Less__3D2kD",More:"BuildControl_More__2kRfR"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(e){return e.show&&a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked})}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),s=n.n(u),l=n(65),d=n.n(l),p=n(10),m=n(32),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(m.a,{show:this.props.show,clicked:this.props.modalClosed}),s.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=h},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(43),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2BxJ2",DesktopOnly:"Toolbar_DesktopOnly__RbLgB"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2WVdA",active:"NavigationItem_active__3BAYe"}},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2xgJq",OrderButton:"BuildControls_OrderButton__1N-mZ",enable:"BuildControls_enable__2h2mH"}},function(e,t,n){e.exports={Button:"Button_Button__2l0wU",Success:"Button_Success__2a0yp",Danger:"Button_Danger__1D_lA"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(66),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),s=n.n(u),l=n(33),d=n(10),p=n(67),m=n.n(p);t.a=function(e,t){return function(n){function u(){var e,n;Object(r.a)(this,u);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(c)))).state={error:null},n.reqInterceptor=t.interceptors.request.use(function(e){return n.setState({error:null}),e}),n.resInterceptor=t.interceptors.response.use(function(e){return e},function(e){n.setState({error:e})}),n.errorConfirmedHandler=function(){n.setState({error:null})},n}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){var t=null;return this.state.error&&"Request failed with status code 401"===this.state.error.message&&(t=s.a.createElement(d.a,null,s.a.createElement("hr",null),s.a.createElement("img",{src:m.a,alt:"burger guard"}),s.a.createElement("strong",null,s.a.createElement("h3",null,"UNAUTHORIZED ACCESS")))),s.a.createElement(d.a,null,s.a.createElement(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},s.a.createElement("div",{style:{textAlign:"center"}},this.state.error&&this.state.error.message,t)),s.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,function(e,t,n){"use strict";var r=n(70),a=n(0),o=n.n(a),i=n(64),c=n.n(i),u=n(4),s=n(5),l=n(7),d=n(6),p=n(8),m=n(18),h=n.n(m),f=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"lettuce":e=o.a.createElement("div",{className:h.a.Lettuce});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;default:e=null}return e}}]),t}(a.Component),g=n(21);t.a=Object(g.f)(function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(f,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Start building that delicious burger!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))})},,,,function(e,t,n){e.exports={Content:"Layout_Content__3l4x8"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2omuf"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2rPAM"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1LrbO"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2aJZv"}},function(e,t,n){e.exports={Burger:"Burger_Burger__2QY4C"}},function(e,t,n){e.exports={Modal:"Modal_Modal__pb8hv"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1801S",load1:"Spinner_load1__1aNM3"}},function(e,t,n){e.exports=n.p+"static/media/burger-guard.bf6633d2.png"},function(e,t,n){e.exports={CustomError:"CustomError_CustomError__2Wfj2"}},function(e,t,n){e.exports=n.p+"static/media/kissclipart-cartoon-clipart-cheeseburger-veggie-burger-junk-fo-58c1153b58284680.40d3abbd.png"},,function(e,t,n){e.exports=n(105)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(54),i=n.n(o),c=n(19),u=n(15),s=n(22),l=n(56),d=(n(80),n(4)),p=n(5),m=n(7),h=n(6),f=n(8),g=n(21),b=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(f.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e&&a.a.createElement(e,this.props)}}]),n}(r.Component)},E=n(10),_=n(57),v=n.n(_),O=n(39),y=n.n(O),j=n(58),k=n.n(j),C=n(59),S=n.n(C),B=function(e){return a.a.createElement("div",{className:S.a.Logo,style:{height:e.height,marginBottom:e.marginBottom}}," ",a.a.createElement("img",{src:k.a,alt:"logo"}))},I=n(60),w=n.n(I),N=n(40),T=n.n(N),D=function(e){return a.a.createElement("li",{className:T.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:T.a.active},e.children))},A=function(e){return a.a.createElement("ul",{className:w.a.NavigationItems},a.a.createElement(D,{link:"/",exact:!0}," Burger Builder ")," ",e.isAuthenticated&&a.a.createElement(D,{link:"/orders"}," Orders "),e.isAuthenticated?a.a.createElement(D,{link:"/logout"},"Logout"):a.a.createElement(D,{link:"/sign-in"},"Sign in"))},L=n(62),R=n.n(L),x=function(e){return a.a.createElement("div",{className:R.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},H=function(e){return a.a.createElement("header",{className:y.a.Toolbar},a.a.createElement(x,{clicked:e.drawerToggleClicked}),a.a.createElement(B,{height:"80%"}),a.a.createElement("nav",{className:y.a.DesktopOnly},a.a.createElement(A,{isAuthenticated:e.isAuth})))},P=n(28),U=n.n(P),M=n(32),q=function(e){var t=[U.a.SideDrawer,U.a.Close];return e.open&&(t=[U.a.SideDrawer,U.a.Open]),a.a.createElement(E.a,null,a.a.createElement(M.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement(B,{height:"11%",marginBottom:"32px"})," ",a.a.createElement("nav",null,a.a.createElement(A,{isAuthenticated:e.isAuth}))))},z=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.SideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(E.a,null,a.a.createElement(H,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(q,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.SideDrawerClosedHandler}),a.a.createElement("main",{className:v.a.Content},this.props.children))}}]),t}(r.Component),F=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(z),G=n(23),Y=n(53),W=n(42),J=n.n(W),K=n(29),$=n.n(K),Q=function(e){return a.a.createElement("div",{className:$.a.BuildControl},a.a.createElement("div",{className:$.a.Label},e.label),a.a.createElement("button",{className:$.a.More,onClick:e.added},"More"),a.a.createElement("button",{className:$.a.Less,onClick:e.removed,disabled:e.disabled},"Less"))},V=[{label:"Bacon",type:"bacon"},{label:"Lettuce",type:"lettuce"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return a.a.createElement("div",{className:J.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))),V.map(function(t){return a.a.createElement(Q,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:J.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"ORDER":"SIGN IN TO ORDER"))},X=n(33),ee=n(35),te=function(e){var t=Object.keys(e.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return a.a.createElement(E.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"Contains the following toppings:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total: $",e.total.toFixed(2)))," ",a.a.createElement("p",null,"Proceed to checkout?"),a.a.createElement(ee.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"),a.a.createElement(ee.a,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"))},ne=n(20),re=n(44),ae=n(45),oe=n(26),ie=n(16),ce=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.updatePurchaseState=function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/sign-in"))},n.purchasedCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPutchase(),n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(G.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement(oe.a,null):a.a.createElement(re.a,null);return this.props.ings&&(r=a.a.createElement(E.a,null,a.a.createElement(Y.a,{ingredients:this.props.ings}),a.a.createElement(Z,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchaseable:this.updatePurchaseState(this.props.ings),price:this.props.price,ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),n=a.a.createElement(te,{ingredients:this.props.ings,purchaseCancelled:this.purchasedCancelHandler,purchaseContinued:this.purchaseContinueHandler,total:this.props.price})),a.a.createElement(E.a,null,a.a.createElement(X.a,{show:this.state.purchasing,modalClosed:this.purchasedCancelHandler},n),r)}}]),t}(r.Component),ue=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ie.a(t))},onIngredientRemoved:function(t){return e(ie.i(t))},onInitIngredients:function(){return e(ie.e())},onInitPutchase:function(){return e(ie.h())},onSetAuthRedirectPath:function(t){return e(ie.j(t))}}})(Object(ae.a)(ce,ne.a)),se=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),t}(r.Component),le=Object(u.b)(null,function(e){return{onLogout:function(){return e(ie.f())}}})(se),de=b(function(){return n.e(3).then(n.bind(null,113))}),pe=b(function(){return n.e(5).then(n.bind(null,114))}),me=b(function(){return n.e(4).then(n.bind(null,112))}),he=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/sign-in",component:me}),a.a.createElement(g.b,{exact:!0,path:"/",component:ue}),a.a.createElement(g.b,{render:function(){return a.a.createElement(oe.a,{message:"Page not found!"})}}));return this.props.isAuthenticated&&(e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/checkout",component:de})," ",a.a.createElement(g.b,{path:"/orders",component:pe}),a.a.createElement(g.b,{path:"/sign-in",component:me}),a.a.createElement(g.b,{path:"/logout",component:le}),a.a.createElement(g.b,{exact:!0,path:"/",component:ue}),a.a.createElement(g.a,{to:"/"}),a.a.createElement(g.b,{render:function(){return a.a.createElement(oe.a,{message:"Page not found!"})}}))),a.a.createElement("div",null,a.a.createElement(F,null,e))}}]),t}(r.Component),fe=Object(g.f)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(ie.c())}}})(he));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=n(25),be=n(1),Ee=n(3),_e={ingredients:null,totalPrice:5,error:!1,isBuilding:!1},ve={lettuce:.25,bacon:.75,cheese:.5,meat:1.25},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.a:return function(e,t){var n=Object(ge.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(Ee.b)(e.ingredients,n),totalPrice:e.totalPrice+ve[t.ingredientName],isBuilding:!0};return Object(Ee.b)(e,r)}(e,t);case be.n:return function(e,t){var n=Object(ge.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(Ee.b)(e.ingredients,n),totalPrice:e.totalPrice-ve[t.ingredientName],isBuilding:!0};return Object(Ee.b)(e,r)}(e,t);case be.p:return function(e,t){return Object(Ee.b)(e,{ingredients:{bacon:t.ingredients.bacon,lettuce:t.ingredients.lettuce,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:5,isBuilding:!1})}(e,t);case be.f:return function(e,t){return Object(Ee.b)(e,{error:!0})}(e);default:return e}},ye={orders:[],isLoading:!1,purchased:!1,error:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.j:return function(e,t){return Object(Ee.b)(e,{purchased:!1})}(e);case be.l:return function(e,t){return Object(Ee.b)(e,{isLoading:!0})}(e);case be.m:return function(e,t){var n=Object(Ee.b)(t.OrderData,{id:t.id});return Object(Ee.b)(e,{isLoading:!1,purchased:!0,orders:e.orders.concat(n)})}(e,t);case be.k:return function(e,t){return Object(Ee.b)(e,{isLoading:!1})}(e);case be.h:return function(e,t){return Object(Ee.b)(e,{isLoading:!0})}(e);case be.i:return function(e,t){return Object(Ee.b)(e,{orders:t.orders,isLoading:!1,error:!1})}(e,t);case be.g:return function(e,t){return Object(Ee.b)(e,{isLoading:!1,error:!0})}(e);default:return e}},ke={token:null,userId:null,error:null,isLoading:!1,authRedirectPath:"/"},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:return function(e,t){return Object(Ee.b)(e,{error:null,isLoading:!0})}(e);case be.e:return function(e,t){return Object(Ee.b)(e,{token:t.idToken,userId:t.userId,error:null,isLoading:!1})}(e,t);case be.b:return function(e,t){return Object(Ee.b)(e,{error:t.error,isLoading:!1})}(e,t);case be.c:return function(e,t){return Object(Ee.b)(e,{token:null,userId:null})}(e);case be.o:return function(e,t){return Object(Ee.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},Se=s.d,Be=Object(s.c)({burgerBuilder:Oe,order:je,auth:Ce}),Ie=Object(s.e)(Be,Se(Object(s.a)(l.a))),we=a.a.createElement(u.a,{store:Ie},a.a.createElement(c.a,{basename:"/basic-burger-builder/"},a.a.createElement(fe,null)));i.a.render(we,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[71,1,2]]]);
//# sourceMappingURL=main.7571682f.chunk.js.map
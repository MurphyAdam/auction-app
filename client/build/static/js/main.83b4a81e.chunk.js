(this.webpackJsonpauction=this.webpackJsonpauction||[]).push([[0],{131:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(11),r=n.n(c),o=(n(131),n(23)),s=n(15),l=n(199),d=n(108),u=n(222),j=n(232),b=Object(l.a)((function(){return Object(j.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{height:"100%",width:"100%"},"#root":{height:"100%",width:"100%"}}})})),p=function(){return b(),null},h=n(223),m=n(212),O=n(29),g=n(10),x=n(43),f=n(206),v=n(207),y=n(45),S=n(235),w=n(109),k=n(208),C=n(209),N=n(103),T=n.n(N),A=n(225),P=n(113),B=n(233),_=n(234),z=n(203),E=n(204),F=n(205),W=n(101),I=n.n(W),L=n(2),D=Object(l.a)((function(e){return{popover:{width:"240px",borderRadius:"1rem",padding:e.spacing(1,0),boxShadow:"rgb(0 0 0 / 31%) 0px 0px 1px 0px, rgb(0 0 0 / 25%) 0px 5px 8px -2px"},popoverElement:{padding:"0.5rem"},itemIcon:{paddingRight:"1.4rem",minWidth:"auto"},buttonTextTrans:{textTransform:"none"}}})),R=function(e){var t=Object(a.useRef)(null),n=D(),i=Object(a.useState)(!1),c=Object(g.a)(i,2),r=c[0],s=c[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(A.a,{component:P.a,onClick:function(){s(!0)},ref:t,sx:{alignItems:"center",display:"flex"},children:Object(L.jsx)(B.a,{sx:{height:32,width:32}})}),Object(L.jsxs)(_.a,{anchorEl:t.current,anchorOrigin:{horizontal:"center",vertical:"bottom"},getContentAnchorEl:null,keepMounted:!0,onClose:function(){s(!1)},open:r,classes:{paper:n.popover},children:[Object(L.jsx)(A.a,{sx:{p:2},className:n.popoverElement,children:Object(L.jsx)(y.a,{color:"textPrimary",variant:"subtitle2",children:"Majdi"})}),Object(L.jsx)(z.a,{}),Object(L.jsx)(A.a,{sx:{mt:2},className:n.popoverElement,children:Object(L.jsxs)(S.a,{component:o.b,to:"/settings",children:[Object(L.jsx)(E.a,{className:n.itemIcon,children:Object(L.jsx)(I.a,{fontSize:"small"})}),Object(L.jsx)(F.a,{primary:Object(L.jsx)(y.a,{color:"textPrimary",variant:"subtitle2",children:"Settings"})})]})})]})]})},M=n(66),q=n(79),U=n.n(q),H=n(102),K=n(68),V=n.n(K);var $="".concat(window.location.origin,"/api"),X=V.a.create({baseURL:$,xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFTOKEN",withCredentials:!0});X.CancelToken=V.a.CancelToken,X.isCancel=V.a.isCancel;X.interceptors.request.use((function(e){e.headers["X-CSRFTOKEN"]=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var i=n[a].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}("csrftoken");var t=function(){var e=localStorage.getItem("jwtKey");return e?{exists:!0,token:JSON.parse(e)}:{exists:!1,token:null}}();return e.headers.Authorization=t.exists?"Token ".concat(t.token):"",e})),X.interceptors.response.use((function(e){return e}),function(){var e=Object(H.a)(U.a.mark((function e(t){var n,a,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.response.status,[401,403].includes(n)){e.next=3;break}return e.abrupt("return",new Promise((function(e,n){n(t)})));case 3:if(401===n&&(delete X.defaults.headers.common.Authorization,localStorage.removeItem("jwtKey")),"/security/get-csrf/"!==t.config.url){e.next=6;break}return e.abrupt("return",new Promise((function(e,n){n(t)})));case 6:if(403!==n){e.next=8;break}return e.abrupt("return",new Promise((function(e,n){n(t)})));case 8:return e.prev=8,e.next=11,X.get("/security/get-csrf/");case 11:return a=e.sent,(i=t.config).headers["X-CSRFTOKEN"]=a.data.csrftoken,e.next=16,new Promise((function(e,t){X.request(i).then((function(t){e(t)})).catch((function(e){t(e)}))}));case 16:return e.abrupt("return",e.sent);case 19:e.prev=19,e.t0=e.catch(8),Promise.reject(e.t0);case 22:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(t){return e.apply(this,arguments)}}());var G=X,J=Object(a.createContext)(),Q=function(e){var t=e.children,n=Object(a.useState)(null),i=Object(g.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(null),s=Object(g.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)(!1),j=Object(g.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)({error:!1,message:null}),m=Object(g.a)(h,2),O=m[0],x=m[1],f=Object(a.useState)(!1),v=Object(g.a)(f,2),y=v[0],S=v[1],w={key:l,currentUser:c,isAuthenticated:b,isLoading:y,error:O,loginUser:function(e){var t;S(!0),(t=e,G.post("/auth/login/",Object(M.a)({},t))).then((function(e){return 200===e.status&&(r(e.data.user),d(e.data.key),p(!0)),e})).catch((function(e){x({error:!0,message:e})})).finally((function(){S(!1)}))}};return Object(L.jsx)(J.Provider,{value:w,children:t})},Y=function(){return Object(a.useContext)(J)},Z=Object(l.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(x.a)({color:e.palette.secondary.main,fontSize:17,textTransform:"none"},e.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(x.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(x.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),AppBarButton:{color:e.palette.secondary.main,textTransform:"none",fontWeight:"bold"}}})),ee=function(e){var t=Z(),n=Y(),i=n.isAuthenticated,c=n.currentUser,r=Object(a.useState)(null),s=Object(g.a)(r,2),l=s[0],d=s[1],u=Boolean(l),j=Object(L.jsxs)(w.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,PaperProps:{style:{minWidth:200}},onClose:function(){return d(null)},children:[Object(L.jsx)(S.a,{component:o.b,to:"/",children:"Products"},"mobile-products"),Object(L.jsx)(S.a,{component:o.b,to:"/settings",children:"Settings"},"mobile-settings")]});return Object(L.jsxs)("div",{className:t.grow,children:[Object(L.jsx)(f.a,{position:"fixed",color:"primary",children:Object(L.jsxs)(v.a,{variant:"dense",children:[Object(L.jsx)(y.a,{variant:"h4",noWrap:!0,children:Object(L.jsx)(k.a,{component:o.b,color:"secondary",variant:"text",className:t.title,to:"/",children:"AntiQ"})}),Object(L.jsx)("div",{className:t.grow}),Object(L.jsx)("div",{className:t.sectionDesktop,children:i?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(k.a,{color:"secondary",className:t.AppBarButton,children:c.username},"Contact"),Object(L.jsx)(R,{})]}):Object(L.jsx)(k.a,{color:"secondary",component:o.b,to:"/auth/signin",className:t.AppBarButton,children:"Sign-in"},"Sign-in")}),Object(L.jsx)("div",{className:t.sectionMobile,children:Object(L.jsx)(C.a,{"aria-label":"show more","aria-haspopup":"true",onClick:function(e){return d(e.currentTarget)},color:"inherit",children:Object(L.jsx)(T.a,{})},"show-more")})]})}),j]})},te=n(236),ne=n(228),ae=n(238),ie=n(215),ce=n(216),re=n(229),oe=n(163),se=n(210),le=n(211),de=n(6),ue=Object(l.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)},paddingTop:e.spacing(1)}}}));function je(e){var t=ue();return Object(L.jsx)(y.a,{align:e.align||"center",className:t.root,component:"div",children:Object(L.jsx)(se.a,{color:"secondary",size:30,thickness:5,disableShrink:!0})})}Object(de.a)({root:{height:10},bar:{borderRadius:20}})(le.a);var be=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,245))})),pe=Object(oe.a)((function(e){return{root:{padding:e.spacing(3),margin:e.spacing(0,4)},heading:{fontSize:e.spacing(4.5),padding:e.spacing(1,0)},filtersTypo:{padding:e.spacing(1,0),fontWeight:"bold",fontSize:e.spacing(2.2)},inputLabel:{paddingTop:e.spacing(4)}}}));var he=function(){var e=pe(),t=Object(s.g)(),n=Object(O.b)().enqueueSnackbar,c=Y().isAuthenticated,r=Object(a.useState)([]),o=Object(g.a)(r,2),l=o[0],d=o[1],u=Object(a.useState)([]),j=Object(g.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)("popular"),x=Object(g.a)(h,2),f=x[0],v=x[1],w=Object(a.useState)(8),k=Object(g.a)(w,2),C=k[0],N=k[1],T=Object(a.useState)(!1),P=Object(g.a)(T,2),B=P[0],_=P[1],z=Object(a.useState)(!1),E=Object(g.a)(z,2),F=E[0],W=E[1],I=Object(a.useState)(!1),D=Object(g.a)(I,2),R=D[0],M=D[1],q=Object(a.useState)(!1),U=Object(g.a)(q,2),H=U[0],K=U[1],V=Object(a.useCallback)((function(e){return t.push(e)}),[t]);Object(a.useEffect)((function(){c||V("/auth/signin")}),[c]);var $=function(){W(!0),M(!1),function(e){return G("/products",{params:e})}({arrange:f,min_bid:C}).then((function(e){console.log(e),d(e.data.results)})).catch((function(e){var t,a;console.log("error ",e),_(!0);var i="Could not load products. Please try again later.";(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.detail)&&(i=e.response.data.detail),n(i,{anchorOrigin:{horizontal:"left",vertical:"bottom"},variant:"warning"})})).finally((function(){W(!1),M(!0)}))},X=function(){K(!0),G("/categories").then((function(e){p(e.data.results)})).catch((function(e){var t,a,i="Could not load categories. Please try again later.";(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.detail)&&(i=e.response.data.detail),n(i,{anchorOrigin:{horizontal:"left",vertical:"bottom"},variant:"warning"})})).finally((function(){K(!1)}))};return Object(a.useEffect)((function(){X()}),[]),Object(a.useEffect)((function(){$()}),[f]),Object(L.jsx)("div",{className:e.root,children:Object(L.jsx)(A.a,{pt:3,children:Object(L.jsxs)(m.a,{container:!0,spacing:2,children:[Object(L.jsxs)(m.a,{item:!0,xs:12,md:3,children:[Object(L.jsx)(y.a,{className:e.filtersTypo,children:"Filters"}),Object(L.jsx)(te.a,{className:e.inputLabel,id:"Arrange-select-standard-label",children:"Arrange"}),Object(L.jsxs)(ne.a,{labelId:"Arrange-select-standard-label",id:"Arrange-select-standard",value:f,onChange:function(e){return v(e.target.value)},label:"Arrange",children:[Object(L.jsx)(S.a,{value:"popular",children:"Popular"}),Object(L.jsx)(S.a,{value:"latest",children:"Latest"}),Object(L.jsx)(S.a,{value:"old",children:"Old"})]}),Object(L.jsxs)(te.a,{className:e.inputLabel,id:"bid-standard-label",children:["Minimum bid ($",C,")"]}),Object(L.jsx)(ae.a,{defaultValue:8,value:C,onChange:function(e,t){return N(t)},classes:{colorSecondary:{color:"white"}},valueLabelDisplay:"auto"}),Object(L.jsx)(te.a,{className:e.inputLabel,id:"bid-standard-label",children:"Category"}),Object(L.jsxs)(ie.a,{children:[H&&Object(L.jsx)(y.a,{children:"Loading categories..."}),b.length>0?b.map((function(e){return Object(L.jsx)(ce.a,{control:Object(L.jsx)(re.a,{defaultChecked:!0}),label:e.name},e.id)})):Object(L.jsx)(ce.a,{disabled:!0,control:Object(L.jsx)(re.a,{defaultChecked:!0}),label:"No categories"},"nocat")]})]}),F&&Object(L.jsx)(m.a,{item:!0,xs:9,md:9,children:Object(L.jsx)(je,{})}),R&&!!B&&Object(L.jsx)(m.a,{item:!0,xs:9,md:9,children:Object(L.jsx)(y.a,{component:"p",variant:"body1",color:"secondary",align:"center",children:"Something went wrong."})}),l.map((function(e){return Object(L.jsx)(i.a.Suspense,{fallback:Object(L.jsx)(je,{}),children:Object(L.jsx)(be,{product:e},e.id)})}))]})})})},me=n(230),Oe=n(217),ge=Object(l.a)((function(e){return{image:{width:"100%",maxHeight:600},productTitle:{padding:e.spacing(2,0),fontSize:e.spacing(4),fontWeight:"bold",color:e.palette.secondary.main},bidButton:{margin:e.spacing(2,0)},paramName:{fontWeight:"bold"}}}));var xe=n(224),fe=n(226),ve=n(231),ye=n(218),Se=n(219),we=n(220),ke=n(221),Ce=n(201),Ne=i.a.forwardRef((function(e,t){return Object(L.jsx)(Ce.a,Object(M.a)({direction:"up",ref:t},e))}));function Te(e){var t,n=e.open,i=e.setOpen,c=e.product,r=e.minBid,o=e.autoBid,s=parseInt((null===(t=c.last_bid)||void 0===t?void 0:t.amount)?c.last_bid.amount:r)+1,l=Object(O.b)().enqueueSnackbar,d=Object(a.useState)(s),u=Object(g.a)(d,2),j=u[0],b=u[1],p=Object(a.useState)(!1),h=Object(g.a)(p,2),x=h[0],f=h[1];return Object(L.jsx)("div",{children:Object(L.jsxs)(ve.a,{open:n,onClose:function(){i(!1)},TransitionComponent:Ne,fullWidth:!0,maxWidth:"md",children:[Object(L.jsx)(ye.a,{id:"form-dialog-title",children:"Place Bid"}),Object(L.jsx)(z.a,{}),Object(L.jsxs)(Se.a,{children:[Object(L.jsxs)(we.a,{children:["Please place an amount larger than the previous Bid of ",s,", and be smaller than 9999999.999"]}),Object(L.jsx)(m.a,{container:!0,children:Object(L.jsx)(m.a,{item:!0,xs:7,children:Object(L.jsx)(me.a,{autoFocus:!0,margin:"dense",variant:"filled",id:"bid",label:"Bid Amount",type:"text",fullWidth:!0,value:j,onChange:function(e){var t=e.target.value;return b(t)}})})})]}),Object(L.jsx)(ke.a,{children:Object(L.jsx)(k.a,{onClick:function(){var e,t;return f(!0),j<r?(l("Bid must be larger than ".concat(r),{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"}),!1):j>9999999.999?(l("Bid must be smaller than 9999999.999",{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"}),!1):void(t={product_id:c.id,amount:j,version:null===(e=c.last_bid)||void 0===e?void 0:e.version,auto_bid:o},G.post("/bids",t)).then((function(e){var t="Your bid of $".concat(j," has been placed.");l(t,{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"}),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(e){var t="Could not place your bid. Please check your input.";e.response.data.message&&(t=e.response.data.message),l(t,{anchorOrigin:{horizontal:"left",vertical:"bottom"},variant:"error"})})).finally((function(){f(!1)}))},disabled:x||c.expired,variant:"outlined",color:"secondary",children:x?"Submitting...":"Submit Bid"})})]})})}var Ae=Object(l.a)((function(e){return{image:{width:"100%",maxHeight:600},productTitle:{padding:e.spacing(2,0),fontSize:e.spacing(4),fontWeight:"bold",color:e.palette.secondary.main},bidButton:{margin:e.spacing(2,0)}}}));function Pe(e){var t=e.product,n=Ae(),c=Object(a.useState)(null),r=Object(g.a)(c,2),o=r[0],s=r[1],l=Object(a.useState)(!1),d=Object(g.a)(l,2),u=d[0],j=d[1],b=Object(a.useState)(!1),p=Object(g.a)(b,2),h=p[0],O=p[1],x=Object(xe.a)({start:new Date(t.expires_in),end:new Date}),f=function(){var e=Object(fe.a)(x,{delimiter:", "});s(e)};return Object(a.useEffect)((function(){var e=setInterval(f,1e3);return function(){return clearInterval(e)}}),[o]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(m.a,{container:!0,spacing:2,children:[Object(L.jsx)(m.a,{item:!0,xs:12,md:7,children:Object(L.jsx)("img",{className:n.image,src:t.poster,alt:t.title})}),Object(L.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(L.jsxs)(A.a,{padding:2,children:[Object(L.jsx)(y.a,{component:"h1",className:n.productTitle,children:t.title}),Object(L.jsxs)(y.a,{variant:"body1",color:"secondary",children:["Minimum bid $",t.min_bid]}),Object(L.jsx)(y.a,{variant:"body1",style:{paddingTop:"1rem",fontWeight:"bold"},color:"secondary",children:"Details"}),Object(L.jsx)(y.a,{variant:"body2",style:{paddingTop:"1rem"},color:"secondary",children:t.description}),Object(L.jsx)(A.a,{padding:2,children:Object(L.jsxs)(m.a,{container:!0,spacing:2,children:[Object(L.jsx)(m.a,{item:!0,xs:6,children:Object(L.jsxs)(y.a,{children:["Last bid made",Object(L.jsx)("br",{}),(null===t||void 0===t?void 0:t.last_bid)?"$".concat(t.last_bid.amount):"None yet"]})}),Object(L.jsx)(m.a,{item:!0,xs:6,children:Object(L.jsxs)(y.a,{children:["Available Until",Object(L.jsx)("br",{}),t.expired?"[EXPIRED]":t.auction_started?o:Object(L.jsxs)(y.a,{variant:"caption",children:["[Auctio not opened yet]",Object(L.jsx)("br",{}),"Opens ",new Date(t.start_time).toDateString()]})]})})]})}),Object(L.jsx)(k.a,{variant:"contained",color:"secondary",disabled:t.expired,onClick:function(){return O(!0)},className:n.bidButton,fullWidth:!0,children:"Place a Bid"}),Object(L.jsx)(ie.a,{children:Object(L.jsx)(ce.a,{control:Object(L.jsx)(re.a,{defaultChecked:u,value:u,onChange:function(e){return j(e.target.checked)},disabled:t.expired}),label:"Activate the auto-bidding"})})]})})]}),h?Object(L.jsx)(i.a.Suspense,{fallback:Object(L.jsx)(je,{}),children:Object(L.jsx)(Te,{open:h,setOpen:O,product:t,autoBid:u,minBid:t.min_bid})}):null]})}var Be=n(104),_e=Object(l.a)((function(e){return{root:{padding:e.spacing(3)},mainFeaturedPost:{margin:e.spacing(1)},mainFeaturedPostContent:{padding:"".concat(e.spacing(4),"px")},mainGrid:{marginTop:e.spacing(3)},chip:{display:"flex",color:e.palette.common.white,justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},menuList:{display:"flex",justifyContent:"flex-end"},blogTitle:Object(x.a)({},e.breakpoints.down("sm"),{fontSize:"1.5rem !important"})}}));var ze=n(162),Ee=n(107),Fe=n.n(Ee),We=Object(l.a)((function(e){return{root:{padding:e.spacing(3),margin:e.spacing(0,4),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},paper:{margin:e.spacing(4,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Ie=[{path:"/auth/signin",name:"Sign in",component:function(e){var t;t="AntiQ - Login",window.document.title=t;var n=Object(s.g)(),i=We(),c=Object(O.b)().enqueueSnackbar,r=Object(a.useState)(""),o=Object(g.a)(r,2),l=o[0],d=o[1],u=Object(a.useState)(""),j=Object(g.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)(!1),x=Object(g.a)(h,2),f=x[0],v=x[1],S=Object(a.useCallback)((function(e){return n.push(e)}),[n]),w=Y(),C=w.isAuthenticated,N=w.isLoading,T=w.error,A=w.loginUser;Object(a.useEffect)((function(){C&&S("/")}),[C,S]);var P=l.length>=4&&b.length>=4;return Object(L.jsx)("div",{children:Object(L.jsx)(m.a,{container:!0,component:"main",className:i.root,children:Object(L.jsx)(m.a,{item:!0,xs:10,sm:8,md:10,component:ze.a,elevation:4,square:!0,children:Object(L.jsxs)("div",{className:i.paper,children:[Object(L.jsx)(B.a,{className:i.avatar,children:Object(L.jsx)(Fe.a,{})}),Object(L.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign in to AntiQ"}),Object(L.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(L.jsxs)(m.a,{container:!0,spacing:1,children:[Object(L.jsx)(m.a,{item:!0,xs:12,children:Object(L.jsx)(me.a,{variant:"standard",color:"secondary",margin:"normal",fullWidth:!0,id:"email",label:"Email",name:"email",value:l,onChange:function(e){var t=e.target.value;return d(t)},autoComplete:"email",autoFocus:!0})}),Object(L.jsx)(m.a,{item:!0,xs:12,children:Object(L.jsx)(me.a,{variant:"standard",color:"secondary",fullWidth:!0,name:"password",label:"Password",type:f?"text":"password",value:b,onChange:function(e){var t=e.target.value;return p(t)},id:"password",autoComplete:"current-password"})})]}),Object(L.jsx)(k.a,{type:"submit",fullWidth:!0,variant:"contained",onClick:function(e){e.preventDefault(),A({email:l,password:b}),T.error&&c("Could not sign-in.",{anchorOrigin:{horizontal:"left",vertical:"bottom"},variant:"error"})},disabled:!P||N,color:"secondary",className:i.submit,children:N?"Signing in...":"Sign in"}),Object(L.jsx)(m.a,{container:!0,children:Object(L.jsx)(m.a,{item:!0,xs:12,sm:8,md:12,children:Object(L.jsx)(y.a,{style:{color:"black"},onClick:function(){return v(!f)},variant:"body2",children:f?"Hide password":"Show password"})})})]})]})})})})}},{path:"/",name:"Home",component:he},{path:"/settings",name:"Settings",component:function(e){var t=ge(),n=Object(O.b)().enqueueSnackbar,i=Y(),c=i.isAuthenticated,r=i.currentUser,o=Object(s.g)(),l=Object(a.useState)(0),d=Object(g.a)(l,2),u=d[0],j=d[1],b=Object(a.useState)(0),p=Object(g.a)(b,2),h=p[0],x=p[1],f=Object(a.useState)(!1),v=Object(g.a)(f,2),S=v[0],w=v[1],C=Object(a.useCallback)((function(e){return o.push(e)}),[o]);return Object(a.useEffect)((function(){c?(j(r.max_bid_amount),x(r.bid_alert_trigger)):C("/auth/signin")}),[c,r]),Object(L.jsx)(m.a,{container:!0,spacing:2,children:Object(L.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(L.jsxs)(A.a,{padding:2,children:[Object(L.jsx)(y.a,{component:"h1",className:t.productTitle,children:"Configure the Auto-bidding"}),Object(L.jsx)(y.a,{variant:"body1",className:t.paramName,color:"secondary",children:"Maximum bid amount"}),Object(L.jsx)(y.a,{variant:"caption",color:"secondary",children:"This maximum amount will be split between all items where we have activated auto-bidding Be mindful of the concurrency issues with auto-bidding!"}),Object(L.jsx)(A.a,{pt:2,children:Object(L.jsx)(me.a,{value:u,variant:"filled",type:"number",name:"bidAmount",onChange:function(e){return j(e.target.value)},InputProps:{startAdornment:Object(L.jsx)(Oe.a,{position:"start",children:"$"})}})}),Object(L.jsx)("br",{}),Object(L.jsx)(y.a,{variant:"body1",className:t.paramName,color:"secondary",children:"Bid Alert notification"}),Object(L.jsx)(y.a,{variant:"caption",color:"secondary",children:"Get the notification about your reserved bids"}),(null===r||void 0===r?void 0:r.max_bid_amount_reached)&&Object(L.jsx)(y.a,{style:{color:"red"},children:"Maximum Bid Amount Reached. Please set a new limit or add funds."}),Object(L.jsx)(A.a,{pt:2,children:Object(L.jsx)(me.a,{value:h,variant:"filled",type:"number",name:"bidPercentAlert",onChange:function(e){return x(e.target.value)},InputProps:{endAdornment:Object(L.jsx)(Oe.a,{position:"end",children:"%"})}})}),Object(L.jsx)(k.a,{variant:"contained",color:"secondary",onClick:function(){var e;w(!0),(e={max_bid_amount:u,bid_alert_trigger_level:h,user_id:r.id},G.put("/users/".concat(e.user_id),e)).then((function(e){n("Settings updated successfully",{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"})})).catch((function(e){var t,a,i="Could not save settings. Please try again later.";(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)&&(i=e.response.data.message),n(i,{anchorOrigin:{horizontal:"left",vertical:"bottom"},variant:"error"})})).finally((function(){w(!1)}))},disabled:S,className:t.bidButton,fullWidth:!0,children:"Save"})]})})})}},{path:"/products/:slug",name:"View product",component:function(e){var t=_e(),n=Object(s.h)().slug,c=Object(O.b)().enqueueSnackbar,r=Object(a.useState)(null),o=Object(g.a)(r,2),l=o[0],d=o[1],u=Object(a.useState)(!1),j=Object(g.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)(!1),x=Object(g.a)(h,2),f=x[0],v=x[1],S=function(){v(!0),function(e){return G("/products/".concat(e))}(n).then((function(e){d(e.data)})).catch((function(e){var t;p(!0);var n="Could not load product. Please try again later.";(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)&&(n=e.response.data.detail),c(n,{anchorOrigin:{horizontal:"left",vertical:"bottom"},variant:"warning"})})).finally((function(){v(!1)}))};return Object(a.useEffect)((function(){S()}),[n]),Object(L.jsxs)("div",{className:t.root,children:[Object(L.jsxs)(Be.a,{children:[Object(L.jsxs)("title",{children:[" ",(null===l||void 0===l?void 0:l.title)||"View product"," "]}),Object(L.jsx)("meta",{name:"description",content:(null===l||void 0===l?void 0:l.short_description)||"View product"})]}),Object(L.jsxs)(m.a,{spacing:0,children:[f&&Object(L.jsx)(m.a,{item:!0,xs:9,md:9,children:Object(L.jsx)(je,{})}),!b&&f||l?!!l&&Object(L.jsx)(i.a.Fragment,{children:Object(L.jsx)(m.a,{item:!0,xs:12,md:12,children:Object(L.jsx)(Pe,{product:l})})}):Object(L.jsx)(m.a,{item:!0,xs:9,md:9,children:Object(L.jsx)(y.a,{align:"center",variant:"h5",children:"Product not found."})})]})]})}}],Le=(n(159),Object(l.a)((function(e){return{root:{margin:e.spacing(0),marginTop:"49px",marginBottom:e.spacing(0)}}}))),De=function(e){var t=Le(),n=Object(d.a)({palette:{type:"light",primary:{main:"#8ecae6"},secondary:{main:"#3f3356"},contrastThreshold:3,tonalOffset:.2},typography:{fontSize:14,fontFamily:'Young, Oxygen, "Roboto", "Helvetica", "Arial", sans-serif'},overrides:{MuiLink:{root:{textDecoration:"none"}}}});return Object(L.jsxs)(u.a,{theme:n,children:[Object(L.jsx)(h.a,{}),Object(L.jsx)(O.a,{dense:!0,maxSnack:3,children:Object(L.jsx)(Q,{children:Object(L.jsxs)(m.a,{component:"main",className:t.root,children:[Object(L.jsx)(p,{}),Object(L.jsx)(o.a,{children:Object(L.jsxs)(i.a.Fragment,{children:[Object(L.jsx)(ee,{}),Object(L.jsxs)(s.d,{children:[Ie.map((function(e){return Object(L.jsx)(s.b,{exact:!0,path:e.path,component:e.component},e.name)})),Object(L.jsx)(s.a,{from:"*",to:"/http-status/404"})]})]})})]})})})]})},Re=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,244)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(De,{})}),document.getElementById("root")),Re()}},[[160,1,2]]]);
//# sourceMappingURL=main.83b4a81e.chunk.js.map
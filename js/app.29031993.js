(function(e){function t(t){for(var r,a,o=t[0],u=t[1],d=t[2],l=0,m=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,a=1;a<s.length;a++){var u=s[a];0!==i[u]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},i={app:0},n=[];function a(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4cbfb4e0"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=i[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,r){s=i[e]=[t,r]}));t.push(s[2]=r);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=a(e);var d=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(l);var s=i[e];if(0!==s){if(s){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,s[1](d)}i[e]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="AnnataAssign/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=d;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1511:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user"},[s("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),s("md-button",{nativeOn:{click:function(t){return e.logOut()}}},[e._v("Logout")]),s("h1",[e._v("Welcome "+e._s(e.user.email)+" !!!")]),e.user.isAdmin?e._e():s("md-card",[s("md-card-header",[s("div",{staticClass:"md-title"},[e._v(e._s(e.user.name))]),s("div",{staticClass:"md-subhead"},[e._v(e._s(e.user.email))]),s("div",{staticClass:"md-subhead"},[e._v(e._s(e.user.jobTitle))])]),s("md-card-content",[s("div",{staticClass:"md-body-2"},[e._v("City :"+e._s(e.user.address.city))]),s("div",{staticClass:"md-body-2"},[e._v("State: "+e._s(e.user.address.state))]),s("div",{staticClass:"md-body-2"},[e._v("Country:"+e._s(e.user.address.country))])])],1),s("div",[e.user.isAdmin?s("md-table",{attrs:{"md-card":""}},[s("md-table-toolbar",[s("h1",{staticClass:"md-title"},[e._v("Users")])]),s("md-table-row",[s("md-table-head",[e._v("Name")]),s("md-table-head",[e._v("Email")]),s("md-table-head",[e._v("Job Title")]),s("md-table-head",[e._v("Company")]),s("md-table-head",[e._v("City")]),s("md-table-head",[e._v("State")]),s("md-table-head",[e._v("Country")]),s("md-table-head",[e._v("Actions")])],1),e._l(e.userList,(function(t,r){return s("md-table-row",{key:t.email},[s("md-table-cell",[e._v(e._s(t.name||"NA"))]),s("md-table-cell",[e._v(e._s(t.email||"NA"))]),s("md-table-cell",[e._v(e._s(t.company||"NA"))]),s("md-table-cell",[e._v(e._s(t.jobTitle||"NA"))]),s("md-table-cell",[e._v(e._s(t.address.city||"NA"))]),s("md-table-cell",[e._v(e._s(t.address.state||"NA"))]),s("md-table-cell",[e._v(e._s(t.address.country||"NA"))]),s("md-table-cell",[s("md-icon",{key:"1",staticClass:"fa fa-edit",nativeOn:{click:function(s){return e.editU(t,r)}}}),s("md-icon",{key:"2",staticClass:"fa fa-trash",nativeOn:{click:function(t){return e.deleteUser(r)}}})],1)],1)}))],2):e._e()],1),e.editUser?s("Registration",{attrs:{userDetails:e.editingUser,userIndex:e.userIndex,title:"Edit User",_id:e.userIndex,userEmail:e.userIndex},on:{cancelled:function(t){return e.cancel()},submitted:function(t){return e.saved()}}}):e._e(),s("md-dialog",{attrs:{"md-active":e.showDialog},on:{"update:mdActive":function(t){e.showDialog=t},"update:md-active":function(t){e.showDialog=t}}})],1)},i=[],n=s("6a53"),a={name:"user",data:function(){return{user:null,editUser:!1,userDetail:{},address:{},userList:this.$store.getters.getUsers,showDialog:!1,editingUser:{},userIndex:0}},components:{Registration:n["a"]},mounted:function(){this.user=this.$store.getters.getUser},methods:{submitted:function(e){console.log("val",e),e&&this.$router.push("about")},regSubmitted:function(e){e&&(alert("Registered"),this.login=!this.login)},deleteUser:function(e){this.$store.dispatch("deleteUser",e)},editU:function(e,t){console.log(">>>",e),this.editingUser=e,this.editUser=!0,this.userIndex=t,this.$store.dispatch("setId",t)},cancel:function(){this.editUser=!1},saved:function(){alert("Saved"),this.cancel()},logOut:function(){this.$store.dispatch("logout"),this.$router.push("/")}}},o=a,u=(s("db8b"),s("2877")),d=Object(u["a"])(o,r,i,!1,null,null,null);t["default"]=d.exports},"21bb":function(e,t,s){"use strict";var r=s("2dad"),i=s.n(r);i.a},"2dad":function(e,t,s){},"337a":function(e,t,s){},4360:function(e,t,s){"use strict";s("45fc"),s("a434");var r=s("ade3"),i=s("2b0e"),n=s("2f62"),a=s("43f9"),o=s.n(a),u=(s("51de"),s("e094"),s("1dce")),d=s.n(u);i["default"].use(d.a),i["default"].use(o.a),i["default"].use(n["a"]),t["a"]=new n["a"].Store({state:{_id:"",userList:[{name:"Admin",email:"admin@annatadesign.com",password:"admin",company:"Annata",jobTitle:"Admin",address:{city:"Bangalore",state:"Karnataka",country:"India"},isAdmin:!0},{name:"User",email:"user@annatadesign.com",password:"user",company:"Annata",jobTitle:"UI Developer",address:{city:"Bangalore",state:"Karnataka",country:"India"},isAdmin:!1},{name:"User2",email:"user2@annatadesign.com",password:"user",company:"Annata",jobTitle:"UI Developer",address:{city:"Bangalore",state:"Karnataka",country:"India"},isAdmin:!1},{name:"User3",email:"user3@annatadesign.com",password:"user",company:"Annata",jobTitle:"UI Developer",address:{city:"Bangalore",state:"Karnataka",country:"India"},isAdmin:!1},{name:"User4",email:"user4@annatadesign.com",password:"user",company:"Annata",jobTitle:"UI Developer",address:{city:"Bangalore",state:"Karnataka",country:"India"},isAdmin:!1},{name:"User5",email:"user5@annatadesign.com",password:"user",company:"Annata",jobTitle:"UI Developer",address:{city:"Bangalore",state:"Karnataka",country:"India"},isAdmin:!1}],status:"",isLoggedIn:"",user:{}},mutations:Object(r["a"])({auth_success:function(e,t){e.status=!0,e.user=t},auth_logOut:function(e){e.status=!1},auth_error:function(e){e.status=!1},addUser:function(e,t){e.userList.push(t)},editUser:function(e,t){e.userList[t.index]=t.user},deleteUser:function(e,t){e.userList.splice(t,1)},setId:function(e,t){console.log("Setting ID",t),e._id=t}},"setId",(function(e,t){console.log("Setting ID",t),e._id=t})),actions:{login:function(e,t){var s=e.commit,r={},i=this.state.userList.some((function(e){return e.email===t.email&&e.password===t.password&&(r=e)}));i?s("auth_success",r):s("auth_error")},logout:function(e){var t=e.commit;t("auth_logOut")},addUser:function(e,t){var s=e.commit;console.log(JSON.stringify(t)),s("addUser",t)},editUser:function(e,t){var s=e.commit;this.state.userList.some((function(e,r){e.email===t.email&&s("editUser",{user:t,index:r})}))},deleteUser:function(e,t){var s=e.commit;s("deleteUser",t)},setId:function(e,t){var s=e.commit;s("setId",t)}},modules:{},getters:{isLoggedIn:function(e){return e.status},getUsers:function(e){return e.userList},getUser:function(e){return e.user},getUserById:function(e){return null===e._id||""===e._id||void 0===e._id?{name:"",email:"",password:"",company:"",jobTitle:"",address:{city:"",state:"",country:""}}:(console.log(e.userList[e._id]),e.userList[e._id])},getId:function(e){return e._id}}})},"517b":function(e,t,s){"use strict";var r=s("337a"),i=s.n(r);i.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],a=(s("5c0b"),s("2877")),o={},u=Object(a["a"])(o,i,n,!1,null,null,null),d=u.exports,l=(s("d3b7"),s("8c4f")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("md-content",{staticClass:"md-elevation-3"},[r("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),e.login?r("Login",{on:{submitted:e.submitted}}):e._e(),e.login?e._e():r("Registration",{attrs:{title:"Registration"},on:{submitted:e.regSubmitted}}),e.login?r("a",{on:{click:function(t){e.login=!e.login}}},[e._v(" Register ")]):e._e(),e.login?e._e():r("a",{on:{click:function(t){e.login=!e.login}}},[e._v("Login")])],1)],1)},m=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Login")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("md-field",{class:{"md-invalid":e.$v.email.$invalid&&e.$v.email.$dirty}},[s("label",[e._v("Email")]),s("md-input",{attrs:{type:"email ",required:""},model:{value:e.$v.email.$model,callback:function(t){e.$set(e.$v.email,"$model",t)},expression:"$v.email.$model"}}),s("span",{staticClass:"md-error"},[e._v("There is an error")])],1),s("md-field",{class:{"md-invalid":e.$v.password.$invalid&&e.$v.password.$dirty}},[s("label",[e._v("Password")]),s("md-input",{attrs:{type:"password",required:""},model:{value:e.$v.password.$model,callback:function(t){e.$set(e.$v.password,"$model",t)},expression:"$v.password.$model"}}),s("span",{staticClass:"md-error"},[e._v("There is an error")])],1),s("md-button",{staticClass:"md-raised",attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v("Login")])],1)])},p=[],v=s("b5ae"),h={name:"Login",data:function(){return{email:"",password:""}},validations:{email:{email:v["email"],required:v["required"]},password:{required:v["required"]}},methods:{login:function(){this.$store.dispatch("login",{email:this.email,password:this.password}),this.$store.getters.isLoggedIn?(console.log(this.email,this.password,this.store),this.$emit("submitted",!0)):(console.log("Error"),alert("Wrong Credentials"))}}},b=h,g=Object(a["a"])(b,f,p,!1,null,null,null),y=g.exports,_=s("6a53"),$={name:"home",data:function(){return{login:!0}},components:{Login:y,Registration:_["a"]},methods:{submitted:function(e){console.log("val",e),e&&this.$router.push("user")},regSubmitted:function(e){e&&(alert("Registered"),this.login=!this.login)}}},w=$,U=(s("21bb"),Object(a["a"])(w,c,m,!1,null,null,null)),C=U.exports,I=(s("1511"),s("4360"));r["default"].use(l["a"]);var j=[{path:"/",name:"home",component:C,beforeEnter:function(e,t,s){s()}},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/user",name:"user",component:function(){return s.e("about").then(s.bind(null,"1511"))},beforeEnter:function(e,t,s){I["a"].getters.isLoggedIn?s():s(!1)}}],T=new l["a"]({routes:j}),x=T;r["default"].config.productionTip=!1,new r["default"]({router:x,store:I["a"],render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var r=s("9c0c"),i=s.n(r);i.a},"6a53":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v(e._s(e.title))]),s("form",{on:{submit:function(t){return t.preventDefault(),e.registration(t)}}},[s("md-field",{class:{"md-invalid":e.$v.user.name.$invalid&&e.$v.user.name.$dirty}},[s("label",[e._v("Name")]),s("md-input",{attrs:{type:"text "},on:{input:function(t){return e.setName(t)}},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),s("span",{staticClass:"md-error"},[e._v("There is an error")])],1),s("md-field",{class:{"md-invalid":e.$v.user.email.$invalid&&e.$v.user.email.$dirty}},[s("label",[e._v("Email")]),s("md-input",{attrs:{type:"email ",required:"",id:"user"},on:{input:function(t){return e.setEmail(t)}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("span",{staticClass:"md-error"},[e._v("There is an error")])],1),s("md-field",{class:{"md-invalid":e.$v.user.password.$invalid&&e.$v.user.password.$dirty}},[s("label",[e._v("Password")]),s("md-input",{attrs:{type:"password",required:"",id:"password"},on:{input:function(t){return e.setPassword(t)}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("span",{staticClass:"md-error"},[e._v("There is an error")])],1),s("md-field",{class:{"md-invalid":e.$v.user.company.$invalid&&e.$v.user.company.$dirty}},[s("label",[e._v("Company")]),s("md-input",{attrs:{required:""},on:{input:function(t){return e.setCompany(t)}},model:{value:e.user.company,callback:function(t){e.$set(e.user,"company",t)},expression:"user.company"}}),s("span",{staticClass:"md-error"},[e._v("There is an error")])],1),s("md-field",{class:{"md-invalid":e.$v.user.jobTitle.$invalid&&e.$v.user.jobTitle.$dirty}},[s("label",[e._v("Job Title")]),s("md-input",{attrs:{type:"text ",required:""},on:{input:function(t){return e.setJobTitle(t)}},model:{value:e.user.jobTitle,callback:function(t){e.$set(e.user,"jobTitle",t)},expression:"user.jobTitle"}}),s("span",{staticClass:"md-error"},[e._v("There is an error")])],1),s("div",{staticClass:"c-flex"},[e.editting?s("md-button",{staticClass:"md-raised",attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v("Save")]):e._e(),e.editting?e._e():s("md-button",{staticClass:"md-raised",attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v("Register")]),e.editting?s("md-button",{staticClass:"md-raised",attrs:{type:"button"},nativeOn:{click:function(t){return e.cancelClick()}}},[e._v("Cancel")]):e._e()],1)],1)])},i=[],n=(s("b0c0"),s("4360"),s("b5ae")),a={props:{_id:"",title:"",userDetails:{},userIndex:"",userEmail:""},name:"Login",data:function(){return{editting:!1,btnName:"",trialUser:this.$store.getters.getUserById}},validations:{user:{name:{required:n["required"]},email:{required:n["required"],email:n["email"]},password:{required:n["required"]},company:{required:n["required"]},jobTitle:{required:n["required"]},address:{city:{required:n["required"]},state:{required:n["required"]},country:{required:n["required"]}}}},mounted:function(){this.user=this.$store.getters.getId},computed:{user:{set:function(e){console.log("_Id",e),this.$store.dispatch("setId",e)},get:function(){return this.$store.getters.getUserById}}},beforeCreate:function(){},watch:{userDetails:function(e,t){this.trialUser=this.$store.getters.getUserById,console.log("Inside Watch")}},methods:{registration:function(){console.log("userIndex",this.userIndex),console.log("user",this.user),this.editting?this.$store.dispatch("editUser",{name:this.user.name,email:this.user.email,password:this.user.password,company:this.user.company,jobTitle:this.user.jobTitle,address:{city:this.user.address.city,state:this.user.address.state,country:this.user.address.country}},this.userIndex):this.$store.dispatch("addUser",{name:this.user.name,email:this.user.email,password:this.user.password,company:this.user.company,jobTitle:this.user.jobTitle,address:{city:this.user.address.city,state:this.user.address.state,country:this.user.address.country}}),this.$emit("submitted",!0)},cancelClick:function(){this.$emit("cancelled")},setName:function(e){this.user.name=e,this.$v.user.name.$touch()},setEmail:function(e){this.user.email=e,this.$v.user.email.$touch()},setPassword:function(e){this.user.password=e,this.$v.user.password.$touch()},setCountry:function(e){this.user.address.country=e,this.$v.user.address.country.$touch()},setCompany:function(e){this.user.company=e,this.$v.user.company.$touch()},setState:function(e){this.user.address.state=e,this.$v.user.address.state.$touch()},setCity:function(e){this.user.address.city=e,this.$v.user.address.city.$touch()},setJobTitle:function(e){this.user.jobTitle=e,this.$v.user.jobTitle.$touch()}}},o=a,u=(s("517b"),s("2877")),d=Object(u["a"])(o,r,i,!1,null,null,null);t["a"]=d.exports},"9c0c":function(e,t,s){},a553:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},db8b:function(e,t,s){"use strict";var r=s("a553"),i=s.n(r);i.a}});
//# sourceMappingURL=app.29031993.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,10,11,13,14],{22:function(t,e,s){},33:function(t,e,s){"use strict";var i=s(22);s.n(i).a},42:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-w:full sm:min-w:sm"},[t.error?s("alert",{attrs:{color:"red"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),s("div",[s("div",{staticClass:"text:white text:3/2"},[t._v("\n      Trakt\n      "),this.settings.accessToken&&this.settings.refreshToken?s("span",{staticClass:"inline-block rounded:full bg:green ml:1/4 p:1/3 align:middle"}):s("span",{staticClass:"inline-block rounded:full bg:red ml:1/4 p:1/3 align:middle"})]),t._v(" "),s("div",{staticClass:"text:grey-dark"},[t._v("Used to build the calendar.")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"my:3"},[t._v("2. Insert your client id and secret :")]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.clientID,expression:"settings.clientID"}],attrs:{id:"trakt_id",placeholder:"Your client ID"},domProps:{value:t.settings.clientID},on:{input:function(e){e.target.composing||t.$set(t.settings,"clientID",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"trakt_id"}},[t._v("Client ID")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.clientSecret,expression:"settings.clientSecret"}],attrs:{id:"trakt_secret",placeholder:"Your client secret"},domProps:{value:t.settings.clientSecret},on:{input:function(e){e.target.composing||t.$set(t.settings,"clientSecret",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"trakt_secret"}},[t._v("Client Secret")])]),t._v(" "),s("div",[t._v("3. Generate your access code :")]),t._v(" "),s("div",{staticClass:"flex flex:wrap justify:center mt:1"},[s("btn",{on:{click:function(e){t.generateDeviceTokenShow=!0}}},[t._v("Generate my access code")])],1)]),t._v(" "),t.generateDeviceTokenShow?s("generate-device-token",{on:{request:t.onRequest,close:function(e){t.generateDeviceTokenShow=!1}}}):t._e(),t._v(" "),t.checkDeviceTokenShow?s("check-device-token",{attrs:{request:t.request},on:{token:t.onToken,close:function(e){t.checkDeviceTokenShow=!1}}}):t._e()],1)};i._withStripped=!0;var n=s(2),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{show:!0},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"p:1"},[s("div",{staticClass:"text:3/2 text:center"},[t._v("Authentification code")]),t._v(" "),t.error?s("alert",{attrs:{color:"red"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),t.results?s("div",[s("div",{staticClass:"py:1 text:2 text:bold text:center"},[t._v("\n          "+t._s(t.results.user_code)+"\n        ")]),t._v(" "),s("div",{staticClass:"text:center"},[t._v("\n          1. Enter your code here :\n          "),s("a",{staticClass:"text:white underline",attrs:{href:t.results.verification_url,target:"_blank"}},[t._v("Verification")])]),t._v(" "),s("div",{staticClass:"text:center my:1"},[t._v('2. Click "It\'s done"')]),t._v(" "),s("div",{staticClass:"flex flex:wrap justify:end items:baseline mt:2"},[s("a",{staticClass:"cursor:pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("Cancel")]),t._v(" "),s("btn",{staticClass:"ml:1",on:{click:function(e){return t.$emit("request",t.results)}}},[t._v("It's done")])],1)]):t._e()],1)]},proxy:!0}])})};r._withStripped=!0;var o={computed:{message:function(){return this.$store.getters["webSocket/message"]}},data:function(){return{error:null,results:null}},created:function(){this.getDeviceCode()},watch:{message:function(t){if("trakt"===t.object)switch(this.error=null,t.method){case"getDeviceCode":t.error?this.error=t.error:this.results=Object.assign({},t.results)}}},methods:{getDeviceCode:function(){this.$store.commit("webSocket/send",{object:"trakt",method:"getDeviceCode"})}}},a=s(0),c=Object(a.a)(o,r,[],!1,null,null,null);c.options.__file="src/components/settings/GenerateDeviceToken.vue";var l=c.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{show:!0},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"p:1"},[s("div",{staticClass:"text:3/2 text:center"},[t._v("Check token")]),t._v(" "),t.error?s("alert",{attrs:{color:"red"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),s("loading",{staticClass:"mt:1",attrs:{"is-loading":t.isLoading}}),t._v(" "),s("div",{staticClass:"flex flex:wrap justify:end items:baseline mt:2"},[s("a",{staticClass:"cursor:pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("Cancel")]),t._v(" "),s("btn",{staticClass:"ml:1",on:{click:function(e){return t.check()}}},[t._v("Retry")])],1)],1)]},proxy:!0}])})};d._withStripped=!0;var u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoading?s("div",{staticClass:"relative block m:auto ripple"},[s("div",{staticClass:"absolute opacity:100 rounded:full border"}),t._v(" "),s("div",{staticClass:"absolute opacity:100 rounded:full border"})]):t._e(),t._v(" "),t.message?s("div",{staticClass:"text:center"},[t._v(t._s(t.message))]):t._e()])};u._withStripped=!0;var m={props:{isLoading:{type:Boolean,default:!1},message:{type:String}}},v=(s(33),Object(a.a)(m,u,[],!1,null,"efe9d588",null));v.options.__file="src/components/Loading.vue";var h={computed:{message:function(){return this.$store.getters["webSocket/message"]}},components:{Loading:v.exports},props:{request:{type:Object,required:!0}},data:function(){return{error:null,timer:null,isLoading:!1}},created:function(){this.check()},methods:{check:function(){var t=this;this.isLoading=!0,this.timer=setInterval((function(){t.$store.commit("webSocket/send",{object:"trakt",method:"checkDeviceAuthorization",params:{code:t.request.device_code}})}),1e3*this.request.interval),setTimeout((function(){clearInterval(t.timer),t.isLoading=!1}),1e3*this.request.expires_in)}},watch:{message:function(t){if("trakt"===t.object)switch(this.error=null,t.method){case"checkDeviceAuthorization":this.isLoading=!1,t.error?this.error=t.error:(clearInterval(this.timer),this.$emit("token",t.results))}}}},p=Object(a.a)(h,d,[],!1,null,null,null);p.options.__file="src/components/settings/CheckDeviceToken.vue";var f={name:"Trakt",computed:{message:function(){return this.$store.getters["webSocket/message"]}},components:{GenerateDeviceToken:l,CheckDeviceToken:p.exports},data:function(){return{error:null,settings:{},generateDeviceTokenShow:!1,checkDeviceTokenShow:!1,request:null}},created:function(){this.getAll()},watch:{"settings.clientID":function(){this.update()},"settings.clientSecret":function(){this.update()},message:function(t){if("trakt"===t.object)switch(this.error=null,t.method){case"getAll":case"update":t.error?this.error=t.error:(this.settings=Object.assign({},t.results),this.isValid());break;default:console.log(t.method)}}},methods:{onRequest:function(t){this.generateDeviceTokenShow=!1,this.checkDeviceTokenShow=!0,this.request=t,this.settings.code=t.device_code,this.update()},onToken:function(t){this.checkDeviceTokenShow=!1,this.settings.accessToken=t.access_token,this.settings.refreshToken=t.refresh_token,this.update()},getAll:function(){this.$store.commit("webSocket/send",{object:"trakt",method:"getAll"})},update:function(){Object(n.b)(this.settings)||this.$store.commit("webSocket/send",{object:"trakt",method:"update",params:this.settings})},isValid:function(){this.$emit("is-valid",this.settings.code&&this.settings.accessToken&&this.settings.refreshToken)}}},g=Object(a.a)(f,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my:3"},[this._v("\n      1. Create a new application on\n      "),e("a",{staticClass:"underline text:white",attrs:{target:"__blank",href:"https://trakt.tv/oauth/applications"}},[this._v("Trakt.tv")])])}],!1,null,null,null);g.options.__file="src/components/settings/trakt.vue";e.default=g.exports},43:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-w:full sm:min-w:sm"},[t.error?s("alert",{attrs:{color:"red"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),s("div",[s("div",{staticClass:"text:3/2"},[t._v("Directories")]),t._v(" "),s("div",{staticClass:"text:grey-dark"},[t._v("\n      Directories scan for transfert & subtitles.\n    ")]),t._v(" "),t.settings?s("form",[s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.from,expression:"settings.from"}],attrs:{id:"from",type:"text",readonly:"",placeholder:"Path to new download"},domProps:{value:t.settings.from},on:{click:function(e){t.openExplorerFrom=!0},input:function(e){e.target.composing||t.$set(t.settings,"from",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"from"}},[t._v("New download")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.to,expression:"settings.to"}],attrs:{id:"to",type:"text",readonly:"",placeholder:"Path to your existing shows"},domProps:{value:t.settings.to},on:{click:function(e){t.openExplorerTo=!0},input:function(e){e.target.composing||t.$set(t.settings,"to",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"to"}},[t._v("Existing tv shows")])])]):t._e()]),t._v(" "),t.openExplorerFrom?s("explorer",{on:{close:function(e){t.openExplorerFrom=!1},selected:t.fromSelected}}):t._e(),t._v(" "),t.openExplorerTo?s("explorer",{on:{close:function(e){t.openExplorerTo=!1},selected:t.toSelected}}):t._e()],1)};i._withStripped=!0;var n=s(2),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{size:"max-w:lg",show:!0},on:{close:function(e){return t.$emit("close")}},scopedSlots:t._u([{key:"content",fn:function(){return[t.error?s("alert",{attrs:{color:"red"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),s("div",{staticClass:"m:1 border rounded p:1"},[t._v(t._s(t.baseUrl))]),t._v(" "),s("div",{staticClass:"flex flex:col m:1"},[s("div",{staticClass:"hover:bg:grey-darkest cursor:pointer py:1/4 px:1/2 transition",on:{click:function(e){return t.previous()}}},[t._v("\n        ...\n      ")]),t._v(" "),t._l(t.directories,(function(e){return s("div",{key:e,staticClass:"hover:bg:grey-darkest cursor:pointer py:1/4 px:1/2 transition",on:{click:function(s){return t.getDirectories(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}))],2),t._v(" "),s("div",{staticClass:"flex flex:row-reverse items:baseline m:1"},[s("btn",{staticClass:"ml:1",on:{click:function(e){return t.$emit("selected",t.root)}}},[t._v("Save")]),t._v(" "),s("a",{staticClass:"cursor:pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])],1)]},proxy:!0}])})};r._withStripped=!0;var o={name:"Explorer",data:function(){return{error:null,directories:[],root:null}},computed:{message:function(){return this.$store.getters["webSocket/message"]},baseUrl:function(){return this.root?this.root:null}},created:function(){this.getRoot()},watch:{root:function(){this.getDirectories()},message:function(t){if("explorer"===t.object)switch(this.error=null,t.method){case"getRoot":t.error?this.error=t.error:this.root=t.results;break;case"getDirectories":t.error?this.error=t.error:this.directories=Object.assign({},t.results)}}},methods:{previous:function(){var t=this.root.split("/");t.length>2&&(t.splice(t.length-2,1),this.root=t.join("/"))},getRoot:function(){this.$store.commit("webSocket/send",{object:"explorer",method:"getRoot"})},getDirectories:function(t){t&&(this.root?this.root+="".concat(t,"/"):this.root=t),this.$store.commit("webSocket/send",{object:"explorer",method:"getDirectories",params:{root:this.root}})}}},a=s(0),c=Object(a.a)(o,r,[],!1,null,null,null);c.options.__file="src/components/Explorer.vue";var l={name:"directory",components:{Explorer:c.exports},computed:{message:function(){return this.$store.getters["webSocket/message"]}},data:function(){return{error:null,settings:null,openExplorerFrom:!1,openExplorerTo:!1}},created:function(){this.getAll()},watch:{message:function(t){if("directory"===t.object)switch(this.error=null,t.method){case"getAll":case"update":t.error?this.error=t.error:(this.settings=Object.assign({},t.results),this.isValid())}}},methods:{fromSelected:function(t){this.settings.from=t,this.openExplorerFrom=!1,this.update()},toSelected:function(t){this.settings.to=t,this.openExplorerTo=!1,this.update()},getAll:function(){this.$store.commit("webSocket/send",{object:"directory",method:"getAll"})},update:function(){Object(n.b)(this.settings)||this.$store.commit("webSocket/send",{object:"directory",method:"update",params:this.settings})},isValid:function(){this.$emit("is-valid",this.settings.from&&this.settings.to)}}},d=Object(a.a)(l,i,[],!1,null,null,null);d.options.__file="src/components/settings/directory.vue";e.default=d.exports},44:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-w:full sm:min-w:sm"},[s("div",{staticClass:"text:3/2"},[t._v("\n    Transmission\n    "),t.testOk?s("span",{staticClass:"inline-block rounded:full bg:green ml:1/4 p:1/3 align:middle"}):s("span",{staticClass:"inline-block rounded:full bg:red ml:1/4 p:1/3 align:middle"})]),t._v(" "),s("div",{staticClass:"text:grey-dark"},[t._v("\n    Needed to add magnetlink from The Pirate Bay.\n  ")]),t._v(" "),t.settings?s("form",[s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.host,expression:"settings.host"}],attrs:{id:"transmission_host",placeholder:"localhost"},domProps:{value:t.settings.host},on:{input:function(e){e.target.composing||t.$set(t.settings,"host",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"transmission_host"}},[t._v("Host")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.port,expression:"settings.port"}],attrs:{id:"transmission_port",type:"number",placeholder:"9091"},domProps:{value:t.settings.port},on:{input:function(e){e.target.composing||t.$set(t.settings,"port",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"transmission_port"}},[t._v("Port")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.username,expression:"settings.username"}],attrs:{id:"transmission_username",placeholder:"Eliot"},domProps:{value:t.settings.username},on:{input:function(e){e.target.composing||t.$set(t.settings,"username",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"transmission_username"}},[t._v("Username")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.encryptedPassword,expression:"encryptedPassword"}],attrs:{id:"transmission_password",type:"password",placeholder:"M3gA_Pa22w0rD!"},domProps:{value:t.encryptedPassword},on:{input:function(e){e.target.composing||(t.encryptedPassword=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"transmission_password"}},[t._v("Password")])])]):t._e()])};i._withStripped=!0;var n=s(2),r=s(26),o=s.n(r),a={computed:{message:function(){return this.$store.getters["webSocket/message"]},encryptedPassword:{get:function(){if(this.settings.password)try{return o.a.AES.decrypt(this.settings.password,"67d119bc-e8ae-45ff-8cf3-0fc876576a6a").toString(o.a.enc.Utf8)}catch(t){console.warn("[Transmission] Password cannot be decrypt : ".concat(t))}return null},set:function(t){t?this.$set(this.settings,"password",o.a.AES.encrypt(t,"67d119bc-e8ae-45ff-8cf3-0fc876576a6a").toString()):this.settings.password=""}}},data:function(){return{error:null,settings:null,testOk:null}},created:function(){this.getAll(),this.test()},watch:{"settings.host":function(){this.update(),this.test()},"settings.port":function(){this.update(),this.test()},"settings.username":function(){this.update(),this.test()},"settings.password":function(){this.update(),this.test()},message:function(t){if("transmission"===t.object)switch(this.error=null,t.method){case"getAll":case"update":t.error?this.error=t.error:this.settings=Object.assign({},t.results);break;case"sessionStats":t.error?(this.error=t.error,this.$emit("is-valid",!1)):(this.testOk=!0,this.$emit("is-valid",!0));break;default:console.log("Unknow method : ".concat(t.method))}}},methods:{getAll:function(){this.$store.commit("webSocket/send",{object:"transmission",method:"getAll"})},update:function(){Object(n.b)(this.settings)||this.$store.commit("webSocket/send",{object:"transmission",method:"update",params:this.settings})},test:function(){this.settings&&(this.testOk=null,this.$store.commit("webSocket/send",{object:"transmission",method:"sessionStats",params:{uuid:"67d119bc-e8ae-45ff-8cf3-0fc876576a6a"}}))}}},c=s(0),l=Object(c.a)(a,i,[],!1,null,null,null);l.options.__file="src/components/settings/transmission.vue";e.default=l.exports},45:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-w:full sm:min-w:sm"},[s("div",{staticClass:"text:white text:3/2"},[t._v("\n    Plex\n    "),t.isConnected?s("span",{staticClass:"inline-block rounded:full bg:green ml:1/4 p:1/3 align:middle"}):s("span",{staticClass:"inline-block rounded:full bg:red ml:1/4 p:1/3 align:middle"})]),t._v(" "),s("div",{staticClass:"text:grey-dark"},[t._v("\n    Used to get your collected and watched episodes.\n  ")]),t._v(" "),t.error?s("alert",{attrs:{color:"red"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),t.settings?s("div",[s("transition",{attrs:{name:"fade"}},[t.isConnected?s("div",{staticClass:"pt:2"},[t._v("\n        Connected as "+t._s(this.settings.username)+"\n        "),s("btn",{staticClass:"ml:1",on:{click:function(e){return t.reset()}}},[t._v("Signout")])],1):s("div",[s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.username,expression:"settings.username"}],attrs:{id:"plex_username",placeholder:"Eliot"},domProps:{value:t.settings.username},on:{input:function(e){e.target.composing||t.$set(t.settings,"username",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"plex_username"}},[t._v("Username")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.encryptedPassword,expression:"encryptedPassword"}],attrs:{id:"plex_password",type:"password",placeholder:"M3gA_Pa22w0rD!"},domProps:{value:t.encryptedPassword},on:{input:function(e){e.target.composing||(t.encryptedPassword=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"plex_password"}},[t._v("Password")])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.debouncing?s("div",[t._v("Connecting ...")]):t._e()])],1)]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.synchronizeAfterTransfert,expression:"settings.synchronizeAfterTransfert"}],attrs:{id:"synchronizeAfterTransfert",type:"checkbox"},domProps:{checked:Array.isArray(t.settings.synchronizeAfterTransfert)?t._i(t.settings.synchronizeAfterTransfert,null)>-1:t.settings.synchronizeAfterTransfert},on:{change:function(e){var s=t.settings.synchronizeAfterTransfert,i=e.target,n=!!i.checked;if(Array.isArray(s)){var r=t._i(s,null);i.checked?r<0&&t.$set(t.settings,"synchronizeAfterTransfert",s.concat([null])):r>-1&&t.$set(t.settings,"synchronizeAfterTransfert",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.settings,"synchronizeAfterTransfert",n)}}}),t._v(" "),s("label",{attrs:{for:"synchronizeAfterTransfert"}},[t._v("Synchronize after transfert")])])],1):t._e()],1)};i._withStripped=!0;var n=s(2),r=s(26),o=s.n(r),a={name:"Plex",computed:{message:function(){return this.$store.getters["webSocket/message"]},isConnected:function(){return this.settings&&this.settings.token},encryptedPassword:{get:function(){if(this.settings.password)try{return o.a.AES.decrypt(this.settings.password,"67d119bc-e8ae-45ff-8cf3-0fc876576a6a").toString(o.a.enc.Utf8)}catch(t){console.warn("[Plex] Password cannot be decrypt : ".concat(t))}return null},set:function(t){t?this.$set(this.settings,"password",o.a.AES.encrypt(t,"67d119bc-e8ae-45ff-8cf3-0fc876576a6a").toString()):this.settings.password=""}}},data:function(){return{error:null,settings:null,timeout:null,debouncing:!1}},created:function(){this.getAll()},watch:{isConnected:function(t){this.$emit("is-valid",t)},"settings.username":function(t,e){var s=this;this.update(),void 0!==e&&this.debounce((function(){s.signin()}),2e3)},"settings.password":function(t,e){var s=this;this.update(),void 0!==e&&this.debounce((function(){s.signin()}),2e3)},"settings.synchronizeAfterTransfert":function(){this.update()},message:function(t){if("plex"===t.object)switch(this.error=null,t.method){case"getAll":case"update":t.error?this.error=t.error:this.settings=Object.assign({},t.results);break;case"signin":t.error?this.$emit("is-valid",!1):this.getAll();break;default:console.log("Unknow method : ".concat(t.method))}}},methods:{debounce:function(t,e){var s=this;this.debouncing=!0,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.apply(s),s.debouncing=!1}),e)},reset:function(){this.settings.username=null,this.settings.password=null,this.settings.token=null,this.update()},getAll:function(){this.$store.commit("webSocket/send",{object:"plex",method:"getAll"})},update:function(){Object(n.b)(this.settings)||this.$store.commit("webSocket/send",{object:"plex",method:"update",params:this.settings})},signin:function(){this.settings&&this.settings.password&&this.settings.password.length>3&&this.$store.commit("webSocket/send",{object:"plex",method:"signin",params:{uuid:"67d119bc-e8ae-45ff-8cf3-0fc876576a6a"}})}}},c=s(0),l=Object(c.a)(a,i,[],!1,null,null,null);l.options.__file="src/components/settings/plex.vue";e.default=l.exports},46:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-w:full sm:min-w:sm"},[t.error?s("alert",{attrs:{color:"red"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),s("div",[s("div",{staticClass:"text:white text:3/2"},[t._v("Subtitles")]),t._v(" "),s("div",{staticClass:"text:grey-dark"},[t._v("Manage subtitles")]),t._v(" "),t.settings?s("form",[s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.languages,expression:"settings.languages"}],attrs:{id:"languages",type:"text",placeholder:"en, fr"},domProps:{value:t.settings.languages},on:{input:function(e){e.target.composing||t.$set(t.settings,"languages",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"languages"}},[t._v("Languages")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.daysOld,expression:"settings.daysOld"}],attrs:{id:"daysOld",type:"number",placeholder:"2"},domProps:{value:t.settings.daysOld},on:{input:function(e){e.target.composing||t.$set(t.settings,"daysOld",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"daysOld"}},[t._v("Days old for manual search")])]),t._v(" "),s("div",{staticClass:"relative my:3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.downloadAfterTransfert,expression:"settings.downloadAfterTransfert"}],attrs:{id:"downloadAfterTransfert",type:"checkbox"},domProps:{checked:Array.isArray(t.settings.downloadAfterTransfert)?t._i(t.settings.downloadAfterTransfert,null)>-1:t.settings.downloadAfterTransfert},on:{change:function(e){var s=t.settings.downloadAfterTransfert,i=e.target,n=!!i.checked;if(Array.isArray(s)){var r=t._i(s,null);i.checked?r<0&&t.$set(t.settings,"downloadAfterTransfert",s.concat([null])):r>-1&&t.$set(t.settings,"downloadAfterTransfert",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.settings,"downloadAfterTransfert",n)}}}),t._v(" "),s("label",{attrs:{for:"downloadAfterTransfert"}},[t._v("Download after transfert")])])]):t._e()])],1)};i._withStripped=!0;var n=s(2),r={computed:{message:function(){return this.$store.getters["webSocket/message"]}},data:function(){return{error:null,settings:null}},created:function(){this.getAll()},watch:{"settings.languages":function(){this.update()},"settings.downloadAfterTransfert":function(){this.update()},"settings.daysOld":function(){this.update()},message:function(t){if("subtitles"===t.object)switch(this.error=null,t.method){case"getAll":case"update":t.error?this.error=t.error:(this.settings=Object.assign({},t.results),this.isValid());break;default:console.log("Unknow method : ".concat(t.method))}}},methods:{getAll:function(){this.$store.commit("webSocket/send",{object:"subtitles",method:"getAll"})},update:function(){Object(n.b)(this.settings)||this.$store.commit("webSocket/send",{object:"subtitles",method:"update",params:this.settings})},isValid:function(){this.$emit("is-valid",this.settings.languages&&this.settings.languages.length>0)}}},o=s(0),a=Object(o.a)(r,i,[],!1,null,"7040a202",null);a.options.__file="src/components/settings/subtitles.vue";e.default=a.exports},77:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"max-w:md mx:auto"},[s("div",{staticClass:"fixed t:0 l:0 max-w:full bg:orange transition mb:2",staticStyle:{height:"2px"},style:t.width}),t._v(" "),s("transition",{attrs:{name:"slide:right",mode:"out-in"}},[1===t.step?s("div",{key:"1"},[s("directory",{on:{"is-valid":function(e){return t.isDirectoryValid=e}}})],1):t._e(),t._v(" "),2===t.step?s("div",{key:"2"},[s("subtitles",{on:{"is-valid":function(e){return t.isSubtitlesValid=e}}})],1):t._e(),t._v(" "),3===t.step?s("div",{key:"3"},[s("transmission",{on:{"is-valid":function(e){return t.isTransmissionValid=e}}})],1):t._e(),t._v(" "),4===t.step?s("div",{key:"4"},[s("plex",{on:{"is-valid":function(e){return t.isPlexValid=e}}})],1):t._e(),t._v(" "),5===t.step?s("div",{key:"5"},[s("trakt",{on:{"is-valid":function(e){return t.isTraktValid=e}}})],1):t._e()]),t._v(" "),s("div",{staticClass:"flex flex:wrap justify:end items:baseline"},[s("a",{staticClass:"cursor:pointer",on:{click:function(e){return t.previous()}}},[t._v("Previous")]),t._v(" "),s("a",{staticClass:"cursor:pointer ml:2",on:{click:function(e){return t.next()}}},[t._v("Skip")]),t._v(" "),s("transition",{attrs:{name:"slide:down"}},[t.isValid?s("btn",{staticClass:"ml:2",on:{click:function(e){return t.next()}}},[t._v("Next")]):t._e()],1)],1)],1)};i._withStripped=!0;var n=s(43),r=s(44),o=s(45),a=s(42),c=s(46),l={components:{Directory:n.default,Transmission:r.default,Plex:o.default,Trakt:a.default,Subtitles:c.default},computed:{width:function(){return"width: ".concat(this.step/this.steps*100,"%")},isValid:function(){switch(this.step){case 1:return this.isDirectoryValid;case 2:return this.isSubtitlesValid;case 3:return this.isTransmissionValid;case 4:return this.isPlexValid;case 5:return this.isTraktValid;default:return!1}}},data:function(){return{isDirectoryValid:!1,isSubtitlesValid:!1,isTransmissionValid:!1,isPlexValid:!1,isTraktValid:!1,step:1,steps:5}},methods:{previous:function(){this.step>1&&this.step--},next:function(){this.step===this.steps&&this.goToDashboard(),this.step<this.steps&&this.step++},goToDashboard:function(){localStorage.setItem("token","bordeaux"),this.$router.push("/").catch((function(t){console.warn(t)}))}},watch:{isTraktValid:function(t){t&&this.goToDashboard()}}},d=s(0),u=Object(d.a)(l,i,[],!1,null,null,null);u.options.__file="src/pages/Wizard.vue";e.default=u.exports}}]);
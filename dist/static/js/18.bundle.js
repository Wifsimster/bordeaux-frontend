(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{80:function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"p:1"},[e.error?t("alert",{attrs:{color:"red"}},[e._v(e._s(e.error))]):e._e(),e._v(" "),e.isLoading?t("loader",{attrs:{message:e.loadingMessage}}):e._e(),e._v(" "),e.isLoading?e._e():t("div",{staticClass:"flex flex:col"},[e.hasEpisodes?t("div",e._l(e.episodes,(function(s){return t("div",{key:s.file,staticClass:"flex flex:wrap"},[t("div",{staticClass:"flex:1"},[e._v(e._s(s.file))]),e._v(" "),t("div",{staticClass:"flex:1"},[s.loading?t("loader"):e._e(),e._v(" "),s.subtitle&&s.subtitle.file?t("div",[e._v(e._s(s.subtitle.file))]):e._e()],1)])})),0):e._e(),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hasNoEpisode?t("div",{staticClass:"text:center"},[e._v("No recent episode found :(")]):e._e()])],1),e._v(" "),e.isLoading?e._e():t("div",{staticClass:"flex w:full justify:center mt:1"},[t("btn",{staticClass:"mr:1",on:{click:function(s){return e.search()}}},[e._v("Scan new files")]),e._v(" "),e.hasEpisodes?t("btn",{on:{click:function(s){return e.run()}}},[e._v("Download subtitles")]):e._e()],1)],1)};i._withStripped=!0;var n={name:"subtitles",computed:{hasEpisodes:function(){return this.episodes&&this.episodes.length>0},hasNoEpisode:function(){return this.episodes&&0===this.episodes.length},message:function(){return this.$store.getters["webSocket/message"]}},data:function(){return{error:null,episodes:null,settings:null,results:null,isLoading:!1,loadingMessage:null}},created:function(){this.getAll()},watch:{message:function(e){var s=this;if("subtitles"===e.object)switch(e.method){case"getAll":e.error?this.error=e.error:this.settings=Object.assign({},e.results);break;case"search":this.isLoading=!1,e.error?this.error=e.error:this.episodes=e.results.map((function(e){return{file:e,subtitle:{}}}));break;case"getSubtitle":e.error?this.error=e.error:this.episodes.map((function(t,i){e.params.file===t.file&&s.$set(s.episodes,i,Object.assign(t,{loading:!1,subtitle:e.results.subtitle}))}))}}},methods:{getAll:function(){this.$store.commit("webSocket/send",{object:"subtitles",method:"getAll"})},search:function(){this.settings&&(this.episodes=null,this.isLoading=!0,this.loadingMessage="Searching recent episodes...",this.$store.commit("webSocket/send",{object:"subtitles",method:"search",params:{fileAge:this.settings.daysOld}}))},getSubtitle:function(e,s){this.$set(this.episodes,s,Object.assign(e,{loading:!0,subtitle:null})),this.$store.commit("webSocket/send",{object:"subtitles",method:"getSubtitle",params:{file:e.file}})},run:function(){var e=this;this.episodes&&this.episodes.map((function(s,t){e.getSubtitle(s,t)}))}}},o=t(0),r=Object(o.a)(n,i,[],!1,null,null,null);r.options.__file="src/pages/Subtitles.vue";s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{26:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s(21),r=s(20),o=s(18);function a(e,t){Object(o.a)(2,arguments);var s=Object(r.a)(e),a=Object(i.a)(t);return s.setDate(s.getDate()+a),s}},36:function(e,t,s){},37:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s(21),r=s(26),o=s(18);function a(e,t){Object(o.a)(2,arguments);var s=Object(i.a)(t);return Object(r.a)(e,-s)}},38:function(e,t,s){},39:function(e,t,s){"use strict";var i=s(20),r=s(18);function o(e){Object(r.a)(1,arguments);var t=Object(i.a)(e);return t.setHours(0,0,0,0),t}function a(e,t){Object(r.a)(2,arguments);var s=o(e),i=o(t);return s.getTime()===i.getTime()}s.d(t,"a",(function(){return a}))},73:function(e,t,s){"use strict";var i=s(36);s.n(i).a},74:function(e,t,s){"use strict";var i=s(38);s.n(i).a},75:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sm:p:1/2"},[e.error?s("alert",{attrs:{color:"red"}},[e._v(e._s(e.error))]):e._e(),e._v(" "),s("div",{staticClass:"sticky t:0 bg:black z:10 py:1/2"},[s("div",{staticClass:"flex justify:between"},[s("div",[s("a",{staticClass:"text:bold cursor:pointer m:1/2 py:1/2 px:3/4 text:3/2 hover:bg:grey-darkest rounded:full",on:{click:function(t){return e.previous()}}},[e._v("<")])]),e._v(" "),s("div",[s("btn",{on:{click:function(t){return e.today()}}},[e._v("Today")])],1),e._v(" "),s("div",[s("a",{staticClass:"text:bold cursor:pointer m:1/2 py:1/2 px:3/4 text:3/2 hover:bg:grey-darkest rounded:full",on:{click:function(t){return e.next()}}},[e._v(">")])])])]),e._v(" "),e.results?s("alert",[s("p",[e._v("Fichiers ajoutés à Transmission :")]),e._v(" "),s("ul",{staticClass:"list-reset pl:1 px:1/2"},e._l(e.message,(function(t){return s("li",{key:t.id},[e._v(e._s(t.name))])})),0)]):e._e(),e._v(" "),e.isLoading?s("loader"):e._e(),e._v(" "),s("transition",{attrs:{name:"slide-right"}},[e.episodes&&e.episodes.length>0?s("div",{},e._l(e.days,(function(t){return s("div",{key:e.format(t),staticClass:"w:full"},[s("div",{staticClass:"text:orange p:1/4 bg:grey-darkest"},[e._v(e._s(e.format(t)))]),e._v(" "),s("div",{staticClass:"responsive:6"},[e.getEpisodesFrom(t).length>0?e._l(e.getEpisodesFrom(t),(function(t){return s("div",{key:t.episode.ids.imdb,staticClass:"cursor:pointer",staticStyle:{"min-height":"75px"},on:{click:function(s){return e.open(t)}}},[t.images?s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.getImageSrc(t),expression:"getImageSrc(episode)"}],staticClass:"min-h:full w:full align:middle"}):e._e(),e._v(" "),s("div",{staticClass:"absolute t:0 flex w:full justify:end"},[e.hasBeenWatched(t)?s("div",{staticClass:"shadow:large bg:orange px:4/5 py:2/5 text:7/8 my:1/4"}):e._e(),e._v(" "),e.hasBeenCollected(t)?s("div",{staticClass:"shadow:large bg:green px:4/5 py:2/5 text:7/8 my:1/4"}):e._e()]),e._v(" "),s("div",{staticClass:"absolute b:0 l:0 p:1/2 w:full bg:smoke"},[s("div",{staticClass:"text:9/8 line-height:1 text:bold"},[e._v(e._s(t.show.title))]),e._v(" "),s("div",{staticClass:"text:9/8 truncate max-w:11/12"},[e._v(e._s(t.episode.season)+"x"+e._s(t.episode.number)+" "+e._s(t.episode.title))])])])})):[e._v("Nothing this day")]],2)])})),0):e._e()]),e._v(" "),s("episode-detail",{attrs:{show:e.hasSelectedEpisode,episode:e.selectedEpisode},on:{close:e.onClose}})],1)};i._withStripped=!0;var r=s(29),o=s(26),a=s(37),n=s(39),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("modal",{attrs:{size:"lg:max-w:lg",show:e.show},on:{close:function(t){return e.$emit("close")}},scopedSlots:e._u([{key:"content",fn:function(){return[e.detail?s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:e.getLazyContainer(),expression:"getLazyContainer()"}],staticClass:"relative w:full"},[s("img",{staticClass:"w:full align:middle rounded:t cover",attrs:{"data-src":e.getImageSrc()}}),e._v(" "),s("div",{staticClass:"absolute t:0 flex w:full justify:end"},[e.subtitle?s("div",{staticClass:"shadow bg:purple py:1/2 px:1/4 text:7/8 mx:1/2"},[e._v("\n          Subtitle\n        ")]):e._e(),e._v(" "),e.hasBeenCollected(e.episode)?s("div",{staticClass:"shadow bg:green py:1/2 px:1/4 text:7/8 mx:1/2"},[e._v("\n          Collected\n        ")]):e._e(),e._v(" "),e.hasBeenWatched()?s("div",{staticClass:"shadow bg:orange py:1/2 px:1/4 text:7/8 mx:1/2"},[e._v("\n          Watched\n        ")]):e._e(),e._v(" "),s("div",{staticClass:"shadow bg:orange py:1/2 px:1/4 text:7/8 mx:1/2"},[e._v("\n          "+e._s(e.detail.rating.toFixed(1))+"\n        ")]),e._v(" "),s("div",{staticClass:"shadow cursor:pointer line-height:1 text:2 p:1/2",on:{click:function(t){return e.$emit("close")}}},[e._v("\n          x\n        ")])]),e._v(" "),s("div",{staticClass:"absolute b:0 l:0 r:1 pl:1/2 w:full bg:smoke"},[s("div",{staticClass:"text:9/8 line-height:1 text:bold"},[e._v("\n          "+e._s(e.episode.show.title)+"\n        ")]),e._v(" "),s("div",{staticClass:"text:9/8 truncate max-w:11/12"},[s("span",{staticClass:"text:bold"},[e._v(e._s(e.episode.episode.season)+"x"+e._s(e.episode.episode.number))]),e._v("\n          "+e._s(e.episode.episode.title)+"\n        ")])])]):e._e(),e._v(" "),e.detail?s("div",[s("div",{staticClass:"flex flex:wrap justify:between"},[s("div",{staticClass:"p:1/2 sm:p:1"},[e._v(e._s(e.detail.runtime)+" mn")]),e._v(" "),s("div",{staticClass:"p:1/2 sm:p:1"},[e._v(e._s(e.getDate(e.detail.first_aired)))]),e._v(" "),s("div",{staticClass:"none sm:block sm:p:1"},[e._v(e._s(e.detail.votes)+" votes")])]),e._v(" "),s("div",{staticClass:"p:1/2 sm:p:1"},[e._v(e._s(e.detail.overview))]),e._v(" "),e.isLoading?s("loader",{attrs:{message:e.loadingMessage}}):e._e(),e._v(" "),e.error?s("alert",{attrs:{color:"red"}},[e._v(e._s(e.error))]):e._e(),e._v(" "),e.addedMessage?s("alert",{attrs:{color:"green"}},[e._v(e._s(e.addedMessage))]):e._e(),e._v(" "),s("div",{staticClass:"p:1/2 sm:p:1"},[e.tpbList?s("div",{staticClass:"overflow:auto"},[e.tpbList.length>0?s("table",{staticClass:"border:collapse max-h:xs table:fixed"},[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Quality")]),e._v(" "),s("th",{staticStyle:{"min-width":"100px"}},[s("i",{staticClass:"arrow p:1/5 mr:1/4 border:white inline-block"}),e._v(" "),s("span",{staticClass:"inline-block"},[e._v("Seeder")])]),e._v(" "),s("th",[e._v("Size")]),e._v(" "),s("th",[e._v("Uploaded")]),e._v(" "),s("th",[e._v("Download")])])]),e._v(" "),s("tbody",e._l(e.tpbList,(function(t){return s("tr",{key:t.name,class:{"bg:orange":t.progress,"hover:bg:grey-darker cursor:pointer":!t.progress},on:{click:function(s){return e.addTorentToTransmission(t.magnetLink)}}},[s("td",{staticClass:"inline-block truncate p:1/4",staticStyle:{"max-width":"450px"}},[e._v("\n                  "+e._s(t.name)+"\n                ")]),e._v(" "),s("td",{staticClass:"w:full text:center p:1/4",staticStyle:{"min-width":"50px"}},[t.quality?s("span",[e._v(e._s(t.quality))]):e._e()]),e._v(" "),s("td",{staticClass:"w:full text:center p:1/4",staticStyle:{"min-width":"50px"}},[t.seeder?s("span",[e._v(e._s(t.seeder))]):e._e()]),e._v(" "),s("td",{staticClass:"w:full text:center p:1/4",staticStyle:{"min-width":"125px"}},[t.size?s("span",[e._v(e._s(t.size))]):e._e()]),e._v(" "),s("td",{staticClass:"w:full text:center p:1/4",staticStyle:{"min-width":"100px"}},[t.uploaded?s("span",[e._v(e._s(t.uploaded))]):e._e()]),e._v(" "),s("td",{staticClass:"text:center"},[t.progress?s("span",[e._v(e._s(t.progress)+" %")]):e._e()])])})),0)]):s("div",{staticClass:"text:center"},[e._v("No results :(")])]):e._e()])],1):e._e()]},proxy:!0}])})};c._withStripped=!0;var d=s(35),l={components:{Modal:s(8).a},props:{episode:{type:Object},show:{type:Boolean,default:!1}},computed:{message:function(){return this.$store.getters["webSocket/message"]}},data:function(){return{error:null,detail:null,tpbList:[],isLoading:!1,loadingMessage:null,addedMessage:null,removedMessage:null,subtitle:!1}},watch:{show:function(){this.error=null,this.tpbList=null},episode:function(e){if(this.detail=null,e){this.getEpisode(),this.searchTorrents(),this.addedMessage=null;var t="".concat(this.episode.show.title,"/Season ").concat(this.episode.episode.season,"/").concat(this.episode.show.title," - ").concat(this.episode.episode.season,"x").concat(this.episode.episode.number);this.hasSubtitle(t)}},message:function(e){var t=this;switch(e.object){case"trakt":switch(e.method){case"getEpisode":e.error?this.error=e.error:this.detail=e.results}break;case"download":switch(e.method){case"searchEpisode":this.isLoading=!1,e.error?(console.error(e.error),502===e.error.code?this.error="The Pirate Bay is down !":this.error="The Pirate Bay is inacessible !"):(this.tpbList=e.results.filter((function(e){return e.seeder>0})),this.tpbList.length>0&&this.getActiveTorrents())}break;case"subtitles":switch(e.method){case"hasSubtitle":e.error?this.error=e.error:this.subtitle=e.results}break;case"transmission":switch(e.method){case"add":this.isLoading=!1,e.error?this.error=e.error:this.$store.dispatch("notification/add",{message:"".concat(e.results.name," added to Transmission ;)"),type:"success"});break;case"remove":this.isLoading=!1,e.error?this.error=e.error:(this.removedMessage="".concat(e.results.name," remove to Transmission ;)"),this.tpbList=null);break;case"active":if(e.error)this.error=e.error;else{var s=e.results.torrents;this.tpbList&&this.tpbList.map((function(e,i){s.map((function(s){var r=/magnet:\?xt=urn:btih:([0-9a-z]+)&dn/.exec(e.magnetLink),o=/magnet:\?xt=urn:btih:([0-9a-z]+)&dn/.exec(s.magnetLink);r[1]===o[1]&&t.$set(t.tpbList,i,Object.assign(e,{progress:parseInt(100*s.percentDone)}))}))}))}}}}},methods:{hasBeenWatched:function(){var e=this,t=this.$store.getters["trakt/watched"];if(t){var s=t.filter((function(t){return t.show.ids.trakt===e.episode.show.ids.trakt}))[0];if(s){var i=s.seasons.filter((function(t){return t.number===e.episode.episode.season}))[0];if(i)if(i.episodes.filter((function(t){return t.number===e.episode.episode.number}))[0])return!0}}return!1},hasBeenCollected:function(){var e=this,t=this.$store.getters["trakt/collected"];if(t){var s=t.filter((function(t){return t.show.ids.trakt===e.episode.show.ids.trakt}))[0];if(s){var i=s.seasons.filter((function(t){return t.number===e.episode.episode.season}))[0];if(i)if(i.episodes.filter((function(t){return t.number===e.episode.episode.number}))[0])return!0}}return!1},getDate:function(e){return Object(r.a)(Object(d.a)(e),"MM / dd / yyyy")},getLazyContainer:function(){if(this.episode.images)return{selector:"img",loading:"https://trakt.tv/assets/placeholders/thumb/fanart-96d5b92c25602cd5f5f8bc3d7fe1a249.png",error:"https://trakt.tv/assets/placeholders/thumb/fanart-96d5b92c25602cd5f5f8bc3d7fe1a249.png"}},getImageSrc:function(){if(this.episode.images)return"https://image.tmdb.org/t/p/original".concat(this.episode.images[0].file_path)},getEpisode:function(){this.$store.commit("webSocket/send",{object:"trakt",method:"getEpisode",params:{showId:this.episode.show.ids.trakt,season:this.episode.episode.season,episode:this.episode.episode.number}})},buildEpisodeName:function(){if(this.episode){var e=this.episode.episode.season<10?"0".concat(this.episode.episode.season):this.episode.episode.season,t=this.episode.episode.number<10?"0".concat(this.episode.episode.number):this.episode.episode.number;return"".concat(this.episode.show.title," S").concat(e,"E").concat(t)}},searchTorrents:function(){this.isLoading=!0,this.loadingMessage="Searchig trackers...",this.addedMessage=null,this.$store.commit("webSocket/send",{object:"download",method:"searchEpisode",params:{title:this.buildEpisodeName()}})},addTorentToTransmission:function(e){this.isLoading=!0,this.loadingMessage="Adding to Transmission...",this.$store.commit("webSocket/send",{object:"transmission",method:"add",params:{uuid:"67d119bc-e8ae-45ff-8cf3-0fc876576a6a",magnetLink:e}})},removeTorrentToTransmission:function(e){this.isLoading=!0,this.loadingMessage="Removing to Transmission...",this.$store.commit("webSocket/send",{object:"transmission",method:"remove",params:{uuid:"67d119bc-e8ae-45ff-8cf3-0fc876576a6a",id:e}})},getActiveTorrents:function(){this.$store.commit("webSocket/send",{object:"transmission",method:"active",params:{uuid:"67d119bc-e8ae-45ff-8cf3-0fc876576a6a"}})},hasSubtitle:function(e){this.$store.commit("webSocket/send",{object:"subtitles",method:"hasSubtitle",params:{file:e}})}}},u=(s(73),s(0)),h=Object(u.a)(l,c,[],!1,null,"4f87afa8",null);h.options.__file="src/components/EpisodeDetail.vue";var p={components:{EpisodeDetail:h.exports},computed:{message:function(){return this.$store.getters["webSocket/message"]}},data:function(){return{error:null,results:null,settings:null,isLoading:!1,episodes:null,currentDay:null,currentWeek:null,days:[],hasSelectedEpisode:!1,selectedEpisode:null}},created:function(){this.getTransmissionSettings(),this.currentDay=Object(a.a)(new Date,6),this.getWatched(),this.getCollected()},watch:{currentDay:function(){this.days=[];for(var e=0;e<7;e++)this.days.push(Object(o.a)(this.currentDay,e));this.getEpisodes()},message:function(e){if("transmission"===e.object)switch(e.method){case"getAll":e.error?this.error=e.error:this.settings=Object.assign({},e.results)}if("trakt"===e.object)switch(e.method){case"getEpisodes":e.error?this.error=e.error:this.episodes=e.results;break;case"getWatched":e.error?this.error=e.error:this.$store.dispatch("trakt/setWatched",e.results);break;case"getCollected":e.error?this.error=e.error:this.$store.dispatch("trakt/setCollected",e.results)}}},methods:{onClose:function(){this.hasSelectedEpisode=!1,this.selectedEpisode=null},hasBeenWatched:function(e){if(e){var t=this.$store.getters["trakt/watched"];if(t){var s=t.filter((function(t){return t.show.ids.trakt===e.show.ids.trakt}))[0];if(s){var i=s.seasons.filter((function(t){return t.number===e.episode.season}))[0];if(i)if(i.episodes.filter((function(t){return t.number===e.episode.number}))[0])return!0}}return!1}},hasBeenCollected:function(e){if(e){var t=this.$store.getters["trakt/collected"];if(t){var s=t.filter((function(t){return t.show.ids.trakt===e.show.ids.trakt}))[0];if(s){var i=s.seasons.filter((function(t){return t.number===e.episode.season}))[0];if(i)if(i.episodes.filter((function(t){return t.number===e.episode.number}))[0])return!0}}return!1}},open:function(e){this.hasSelectedEpisode=!0,this.selectedEpisode=e},previous:function(){this.episodes=null,this.currentDay=Object(a.a)(this.currentDay,7)},today:function(){this.episodes=null,this.currentDay=Object(a.a)(new Date,6)},next:function(){this.episodes=null,this.currentDay=Object(o.a)(this.currentDay,7)},getEpisodes:function(){this.$store.commit("webSocket/send",{object:"trakt",method:"getEpisodes",params:{startDate:Object(r.a)(this.currentDay,"yyyy-MM-dd"),days:"7"}})},getImageSrc:function(e){if(e.images)return{src:"https://image.tmdb.org/t/p/original".concat(e.images[0].file_path)}},getEpisodesFrom:function(e){if(this.episodes)return this.episodes.filter((function(t){return Object(n.a)(new Date(t.first_aired),e)}))},format:function(e){return Object(r.a)(e,"MM / dd / yyyy")},getTransmissionSettings:function(){this.$store.commit("webSocket/send",{object:"transmission",method:"getAll"})},searchEpisode:function(e){this.$store.commit("webSocket/send",{object:"download",method:"searchLatestEpisode",params:{title:e.show.title}})},addToTransmission:function(e,t){this.shows[t].isLoading=!0,this.$store.commit("webSocket/send",{object:"download",method:"addToTransmission",params:{magnetLink:e,settings:this.settings,show:this.shows[t]}})},getWatched:function(){this.$store.commit("webSocket/send",{object:"trakt",method:"getWatched"})},getCollected:function(){this.$store.commit("webSocket/send",{object:"trakt",method:"getCollected"})}}},m=(s(74),Object(u.a)(p,i,[],!1,null,"6fe9c4e2",null));m.options.__file="src/pages/Calendar.vue";t.default=m.exports}}]);
webpackJsonp([2],{10:function(t,e,n){function a(t){n(95)}var o=n(1)(n(52),n(296),a,null,null);t.exports=o.exports},19:function(t,e,n){function a(t){n(99)}var o=n(1)(n(50),n(300),a,null,null);t.exports=o.exports},20:function(t,e,n){function a(t){n(96)}var o=n(1)(n(51),n(297),a,null,null);t.exports=o.exports},22:function(t,e,n){"use strict";var a=n(3),o=n(302);a.a.use(o.a),e.a=new o.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Hello",component:n(286)},{path:"/ithappened",name:"ItHappened",component:n(19)},{path:"/wesolved",name:"WeSolved",component:n(290)},{path:"/webuilt",name:"WeBuilt",component:n(289)},{path:"/faq",name:"Faq",component:n(285)},{path:"/subscribe",name:"Subscribe",component:n(288)},{path:"/post/:id",name:"Publication",component:n(20)},{path:"/publish",name:"Publisher",component:n(287)}]})},23:function(t,e,n){"use strict";var a=n(3),o=n(306),i=n(305);a.a.use(o.a);var s=new o.a.Store({plugins:[n.i(i.a)()]});e.a={state:s}},24:function(t,e){},27:function(t,e,n){function a(t){n(91)}var o=n(1)(n(47),n(292),a,null,null);t.exports=o.exports},285:function(t,e,n){function a(t){n(93)}var o=n(1)(n(48),n(294),a,null,null);t.exports=o.exports},286:function(t,e,n){function a(t){n(98)}var o=n(1)(n(49),n(299),a,null,null);t.exports=o.exports},287:function(t,e,n){function a(t){n(97)}var o=n(1)(n(53),n(298),a,null,null);t.exports=o.exports},288:function(t,e,n){function a(t){n(92)}var o=n(1)(n(54),n(293),a,null,null);t.exports=o.exports},289:function(t,e,n){function a(t){n(90)}var o=n(1)(n(55),n(291),a,null,null);t.exports=o.exports},290:function(t,e,n){function a(t){n(94)}var o=n(1)(n(56),n(295),a,null,null);t.exports=o.exports},291:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"webuilt"}},[n("p",{staticClass:"headline"},[t._v("Show-off what you've built")]),t._v(" "),n("ul",{attrs:{id:"publication-list"}},t._l(t.articles,function(t){return n("div",[n("router-link",{attrs:{to:{name:"Publication",params:{id:t.id}}}},[n("publication-small",{attrs:{title:t.title,pub_date:t.pub_date,body:t.body,id:t.id}})],1)],1)}))])},staticRenderFns:[]}},292:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app",light:""}},[n("v-toolbar",{attrs:{color:"primary",height:"65"}},[n("v-toolbar-title",{staticClass:"display-1",attrs:{color:"primary",append:"",replace:"",to:"/"}},[t._v("devPub_")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("div",{staticClass:"buy-a-coffee"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Cookie",rel:"stylesheet"}}),n("a",{staticClass:"bmc-button",attrs:{target:"_blank",href:"https://www.buymeacoffee.com/XC37Kmu9o"}},[n("img",{attrs:{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Support devPub"}}),n("span",{staticStyle:{"margin-left":"5px"}},[t._v("Support devPub")])])])])],1),t._v(" "),n("v-card",{staticClass:"mt-5 pt-2",attrs:{flat:""}},[n("v-bottom-nav",{staticClass:"pt-2",attrs:{absolute:"",value:!0,active:t.e1,color:"transparent"},on:{"update:active":function(e){t.e1=e}}},[n("v-btn",{attrs:{flat:"",color:"secondary",value:"/home",append:"",replace:"",to:"/home"}},[n("span",{staticClass:"subheading"},[t._v("/home")]),t._v(" "),n("v-icon",[t._v("home")])],1),t._v(" "),n("v-btn",{attrs:{flat:"",color:"secondary",value:"/ithappened",append:"",replace:"",to:"/ithappened"}},[n("span",{staticClass:"subheading"},[t._v("/ithappened")]),t._v(" "),n("v-icon",[t._v("history")])],1),t._v(" "),n("v-btn",{attrs:{flat:"",color:"secondary",value:"/wesolved",append:"",replace:"",to:"/wesolved"}},[n("span",{staticClass:"subheading"},[t._v("/wesolved")]),t._v(" "),n("v-icon",[t._v("lightbulb_outline")])],1),t._v(" "),n("v-btn",{attrs:{flat:"",color:"secondary",value:"/webuilt",append:"",replace:"",to:"/webuilt"}},[n("span",{staticClass:"subheading"},[t._v("/webuilt")]),t._v(" "),n("v-icon",[t._v("build")])],1),t._v(" "),n("v-btn",{attrs:{flat:"",color:"secondary",value:"/publish",append:"",replace:"",to:"/publish"}},[n("span",{staticClass:"subheading"},[t._v("/share")]),t._v(" "),n("v-icon",[t._v("announcement")])],1)],1)],1),t._v(" "),n("main",[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{"after-enter":t.afterEnter}},[n("router-view",{key:t.$route.fullPath})],1)],1),t._v(" "),n("v-footer",{staticClass:"pa-3"},[n("v-spacer"),t._v(" "),n("div",[t._v("devPub_ © "+t._s((new Date).getFullYear()))])],1)],1)},staticRenderFns:[]}},293:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"subscribe"}},[n("h2",[t._v("Subscribe us")]),t._v(" "),n("p",[t._v("Do it!")])])}]}},294:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"faq"}},[n("h2",[t._v("Frequently Asked Questions")])])}]}},295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wesolved"}},[n("p",{staticClass:"headline"},[t._v("Yay you solved it! Now share with us how you did it")]),t._v(" "),n("ul",{attrs:{id:"publication-list"}},t._l(t.articles,function(t){return n("div",[n("router-link",{attrs:{to:{name:"Publication",params:{id:t.id}}}},[n("publication-small",{attrs:{title:t.title,pub_date:t.pub_date,body:t.body,id:t.id}})],1)],1)}))])},staticRenderFns:[]}},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("v-flex",{attrs:{xs12:""}},[n("v-card",{staticClass:"dark--text",attrs:{color:"white darken-2"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v(t._s(t.front.title))]),t._v(" "),n("div",[t._v(t._s(t.front.tldr))])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",dark:"",disabled:""}},[t._v(t._s(t.front.date))])],1)],1)],1)],1)},staticRenderFns:[]}},297:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("i",{staticClass:"material-icons go-back-arrow",on:{click:function(e){t.$router.go(-1)}}},[t._v("arrow_back")]),t._v(" "),n("div",{staticClass:"publication-title"},[n("b",[t._v(t._s(t.dataTitle))])]),t._v(" "),n("span",{staticClass:"date-span"},[t._v(t._s(t.dataPubDate))]),t._v(" "),n("div",{attrs:{id:"data-body"}}),t._v(" "),n("hr"),t._v(" "),n("ul",{staticClass:"comments-section"},t._l(t.comments,function(e){return n("div",[n("div",{staticClass:"single-comment"},[n("span",{staticClass:"comment-date"},[n("small",[t._v(t._s(e.comment_date))])]),t._v(" "),n("br"),t._v(" "),n("span",[t._v(t._s(e.body))])])])})),t._v(" "),n("div",{staticClass:"add-comment"},[n("v-layout",{attrs:{row:""}},[n("v-text-field",{attrs:{name:"input-7-4","full-width":"","multi-line":"","single-line":"",placeholder:"Insert your commment here"},model:{value:t.comment.body,callback:function(e){t.comment.body=e},expression:"comment.body"}})],1),t._v(" "),n("v-btn",{staticClass:"submit-button",attrs:{flat:"",color:"primary"},on:{click:t.pushComment}},[t._v("Submit comment")])],1)])},staticRenderFns:[]}},298:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-main"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[n("v-text-field",{ref:"title",attrs:{label:"The title of your post",counter:50,required:"",rules:[function(){return!!t.title||"This field is required"},function(t){return t.length<=50||"Max 50 characters"}],"error-messages":t.errorMessages},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("v-text-field",{ref:"tldr",attrs:{label:"A tl;dr of your post",counter:150,rules:[function(){return!!t.tldr||"This field is required"},function(t){return t.length<=150||"Max 150 characters"}],"error-messages":t.errorMessages},model:{value:t.tldr,callback:function(e){t.tldr=e},expression:"tldr"}}),t._v(" "),n("quill-editor",{ref:"content",attrs:{options:t.editorOption},on:{blur:function(e){t.onEditorBlur(e)},focus:function(e){t.onEditorFocus(e)},ready:function(e){t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("v-select",{ref:"selected",staticClass:"mt-3",attrs:{items:t.items,label:"Section",rules:[function(){return!!t.selected||"This field is required"}],required:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.formHasErrors?n("div",[n("v-alert",{attrs:{type:"error",value:!0}},[t._v("\n        Please, fill everything accordingly.\n      ")])],1):t._e(),t._v(" "),t.publicationSuccessful?n("div",[n("v-alert",{attrs:{type:"success",value:!0}},[t._v("\n        Publication submitted with success.\n      ")])],1):t._e()]),t._v(" "),n("v-flex",{attrs:{"text-xs-center":"","my-3":"",fixed:""}},[n("div",[n("v-btn",{staticClass:"post-publication-button",attrs:{large:"",color:"primary"},on:{click:t.submit}},[t._v("Submit publication")])],1)])],1)},staticRenderFns:[]}},299:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("h3",{staticClass:"display-3"},[t._v("Welcome to devPub_")]),t._v(" "),n("span",{staticClass:"subheading"},[t._v("devPub_ its a community of developers where each one can contribute with stories of the workspace, challenges that were solved or show-off stuff that you built.")]),t._v(" "),n("v-divider",{staticClass:"my-3"}),t._v(" "),n("div",{staticClass:"title mb-3"},[t._v("Leave your feedback or suggest new features on our "),n("a",{attrs:{href:"https://github.com/amaralDaniel/DevPub-frontend"}},[t._v("GitHub page")]),t._v(".")]),t._v(" "),n("div",{staticClass:"body-1 mb-3"},[t._v("Support devPub_ in the upper-right corner or by clicking "),n("a",{attrs:{href:"https://www.buymeacoffee.com/XC37Kmu9o"}},[t._v("here")]),t._v(".")]),n("div")],1)],1)],1)],1)},staticRenderFns:[]}},300:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ithappened"}},[t._m(0),t._v(" "),n("ul",{attrs:{id:"publication-list"}},t._l(t.articles,function(t){return n("div",[n("router-link",{attrs:{to:{name:"Publication",params:{id:t.id}}}},[n("publication-small",{attrs:{title:t.title,pub_date:t.pub_date,body:t.body,id:t.id}})],1)],1)}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"headline"},[t._v("When "),n("i",[t._v("that")]),t._v(" thing happened")])}]}},46:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),o=n(27),i=n.n(o),s=n(22),r=n(2),c=n.n(r),l=n(26),u=n.n(l),d=n(23),f=n(28),p=n.n(f),v=n(24),m=(n.n(v),n(25));a.a.config.productionTip=!1,a.a.use(u.a,c.a),a.a.use(p.a,{theme:{primary:"#8AEA92",secondary:"#33202A"}}),a.a.use(m.a),n.e(0).then(n.bind(null,89)),new a.a({el:"#app",router:s.a,store:d.a,axios:c.a,template:"<App/>",components:{App:i.a}})},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(20),o=n.n(a),i=n(19),s=n.n(i);e.default={name:"app",components:{Publication:o.a,ItHappened:s.a},data:function(){return{e1:"recent",active:null,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},methods:{next:function(){var t=parseInt(this.active);this.active=(t<2?t+1:0).toString()},afterEnter:function(t){console.log("Route entered")}},beforeRouteUpdate:function(t,e,n){var a=t.path.split("/").length,o=e.path.split("/").length;this.transitionName=a<o?"slide-right":"slide-left",n()}}},48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"faq",data:function(){return{}}}},49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},50:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),i=n(10),s=n.n(i);e.default={components:{PublicationSmall:s.a},data:function(){return{articles:[],page:1}},created:function(){this.fetchData()},activated:function(){console.log("activated"),this.fetchData()},methods:{fetchData:function(){var t=this;o.a.get("https://devpub.herokuapp.com/itHappened/posts").then(function(e){var n=e.data;t.articles=[];for(var a in n)n.hasOwnProperty(a)&&t.articles.push(n[a]);t.articles.reverse()}).catch(function(t){console.log(t)})}}}},51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),i=n(281),s=n.n(i);e.default={props:["id"],data:function(){return{dataTitle:"",dataBody:"",dataPubDate:"",dataId:this.$route.params.id,comments:[],comment:{body:"",comment_date:""}}},beforeRouteUpdate:function(t,e,n){this.dataId=t.params.id,n()},beforeCreate:function(){console.log("beforeCreate")},created:function(){console.log("created")},beforeMount:function(){console.log("beforeMount")},beforeUpdate:function(){console.log("beforeUpdate")},beforeDestroy:function(){console.log("beforeDestroy")},destroyed:function(){console.log("destroyed")},mounted:function(){var t=this;console.log(this.dataId),o.a.get("https://devpub.herokuapp.com/post/"+this.dataId).then(function(e){console.log(e);var n=e.data;t.dataTitle=n.title,t.dataPubDate=n.pub_date,t.dataBody=n.body;var a=s.a.parseHTML(n.body);s()("#data-body").append(a),t.getComments()}).catch(function(t){console.log(t)})},methods:{getComments:function(t){var e=this;o.a.get("http://127.0.0.1:5000/comment/"+this.dataId).then(function(t){var n=t.data;e.comments=[];for(var a in n)n.hasOwnProperty(a)&&e.comments.push(n[a]);e.showComments=!0})},pushComment:function(t){var e=this;""!==this.comment&&o.a.post("http://127.0.0.1:5000/comment",{body:this.comment.body,post_id:this.dataId}).then(function(t){e.comment.body="",e.getComments()}).catch(function(t){console.log(t)})}}}},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(284),o=n.n(a);e.default={components:{InfoCard:o.a},props:["title","pub_date","id"],data:function(){return{front:{date:this.pub_date,title:this.title,tldr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada orci at mauris tempor, ut venenatis nulla luctus. Duis vel gravida urna. Morbi sed ipsum risus. Pellentesque elementum fringilla elit, eget ultricies lorem fermentum vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sodales nunc in libero."}}}}},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(57),o=n.n(a),i=n(87),s=(n.n(i),n(88)),r=(n.n(s),n(86)),c=(n.n(r),n(101)),l=n.n(c),u=n(301),d=(n.n(u),n(2)),f=n.n(d);e.default={name:"Publisher",components:{quillEditor:u.quillEditor},data:function(){return{content:"<h2>hello, world!\n</h2>",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}]],syntax:{highlight:function(t){return l.a.highlightAuto(t).value}}}},selected:"",items:[{text:"itHappened"},{text:"weSolved"},{text:"weBuilt"}],title:"",tldr:"",errorMessages:[],formHasErrors:!1,publicationSuccessful:!1}},methods:{onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,n=t.html,a=t.text;console.log("editor change!",e,n,a),this.content=n},postPublication:function(){var t=this;f.a.post("https://devpub.herokuapp.com/post",{body:this.content,title:this.title,category:this.selected.text}).then(function(e){console.log("Submitted"),t.publicationSuccessful=!0,setTimeout(function(){console.log("set timeout"),t.publicationSuccessful=!1},5e3)}).catch(function(t){console.log(t)})},submit:function(){var t=this;this.formHasErrors=!1,o()(this.form).forEach(function(e){t.form[e]||(t.formHasErrors=!0)}),this.formHasErrors||(this.formHasErrors=!1,this.postPublication())}},computed:{editor:function(){return this.$refs.myQuillEditor.quill},form:function(){return{title:this.title,tldr:this.tldr,selected:this.selected,content:this.content}}},mounted:function(){console.log("this is current quill instance object",this.editor)},watch:{name:function(){this.errorMessages=[]}}}},54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"subscribe",data:function(){return{}}}},55:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),i=n(10),s=n.n(i);e.default={components:{PublicationSmall:s.a},data:function(){return{articles:[]}},created:function(){this.fetchData()},activated:function(){console.log("activated"),this.fetchData()},methods:{fetchData:function(){var t=this;o.a.get("https://devpub.herokuapp.com/weBuilt/posts").then(function(e){var n=e.data;t.articles=[];for(var a in n)n.hasOwnProperty(a)&&t.articles.push(n[a]);t.articles.reverse()}).catch(function(t){console.log(t)})}}}},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),i=n(10),s=n.n(i);e.default={name:"wesolved",components:{PublicationSmall:s.a},data:function(){return{articles:[]}},created:function(){this.fetchData()},activated:function(){console.log("activated"),this.fetchData()},methods:{fetchData:function(){var t=this;o.a.get("https://devpub.herokuapp.com/weSolved/posts").then(function(e){var n=e.data;t.articles=[];for(var a in n)n.hasOwnProperty(a)&&t.articles.push(n[a]);t.articles.reverse()}).catch(function(t){console.log(t)})}}}},86:function(t,e){},87:function(t,e){},88:function(t,e){},90:function(t,e){},91:function(t,e){},92:function(t,e){},93:function(t,e){},94:function(t,e){},95:function(t,e){},96:function(t,e){},97:function(t,e){},98:function(t,e){},99:function(t,e){}},[46]);
//# sourceMappingURL=app.88662f0642b2323b9d30.js.map
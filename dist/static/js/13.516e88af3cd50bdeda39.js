webpackJsonp([13],{"65jw":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("gm1x"),n={name:"sHunter",mounted:function(){this.getData(),this.getJobs()},data:function(){return{list:[],jobs:[]}},methods:{getData:function(){var t=this,s=this.$loading({lock:!0,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.1)",fullscreen:!1,target:this.$el.querySelector(".company-box")});Object(e.a)().then(function(a){s.close(),t.list=a.list}).catch(function(){s.close()})},getJobs:function(){var t=this,s=this.$loading({lock:!0,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.1)",fullscreen:!1,target:this.$el.querySelector(".job-box")});Object(e.d)().then(function(a){s.close(),t.jobs=a.list}).catch(function(){s.close()})}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"s-hunter clearfix"},[e("div",{staticClass:"fl"},[e("div",{staticClass:"title"},[e("router-link",{staticClass:"more",attrs:{tag:"a",to:"/"}},[e("img",{attrs:{src:a("kU18"),alt:"更多"}})])],1),t._v(" "),e("ul",{staticClass:"company-box clearfix"},t._l(t.list,function(s){return e("li",[e("div",{staticClass:"company-content"},[e("div",{staticClass:"hunt-for"},[t._v(t._s(s.job))]),t._v(" "),e("div",{staticClass:"company-name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"money"},[t._v(t._s(s.salary))]),t._v(" "),e("div",{staticClass:"area"},[t._v(t._s(s.place))])])])}))]),t._v(" "),e("div",{staticClass:"fr"},[e("div",{staticClass:"title"},[t._v("\n            热门职位\n            "),e("router-link",{staticClass:"more",attrs:{tag:"a",to:"/"}},[e("img",{attrs:{src:a("kU18"),alt:"更多"}})])],1),t._v(" "),e("ul",{staticClass:"job-box"},t._l(t.jobs,function(s){return e("li",[e("router-link",{attrs:{tag:"a",to:"/"}},[t._v(t._s(s.name))])],1)}))])])},staticRenderFns:[]};var c=a("VU/8")(n,i,!1,function(t){a("GA28")},"data-v-0c866878",null);s.default=c.exports},GA28:function(t,s){}});
//# sourceMappingURL=13.516e88af3cd50bdeda39.js.map
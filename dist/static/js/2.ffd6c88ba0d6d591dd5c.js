webpackJsonp([2],{"9zJI":function(s,t){},XtVV:function(s,t){},cRAu:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("gm1x"),_={name:"sTalentList",mounted:function(){this.getTalents()},data:function(){return{list:[]}},methods:{getTalents:function(){var s=this,t=this.$loading({lock:!0,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.1)",fullscreen:!1,target:this.$el.querySelector(".list")});Object(e.m)().then(function(a){t.close(),s.list=a.list}).catch(function(){t.close()})}}},i={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"s-talent-list"},[e("div",{staticClass:"title"},[e("router-link",{staticClass:"more",attrs:{tag:"a",to:"/"}},[e("img",{attrs:{src:a("kU18"),alt:"更多"}})])],1),s._v(" "),e("ul",{staticClass:"list"},s._l(s.list,function(t){return e("li",{staticClass:"list-li"},[e("div",{staticClass:"search_job_list"},[e("div",{staticClass:"part01 clearfix"},[e("div",{staticClass:"search_user_list_neme fl"},[e("router-link",{staticClass:" disc_per",attrs:{tag:"a",to:"/"}},[s._v(s._s(t.name))]),s._v(" "),e("span",{staticClass:"disc_user_mes"},[s._v(s._s(t.sex)+","+s._s(t.age)+"岁,")])],1),s._v(" "),e("div",{staticClass:"disc_time fr"},[s._v("更新时间："+s._s(t.updateTime))])]),s._v(" "),e("div",{staticClass:"company_det"},[e("span",{staticClass:"search_job_list_box_s"},[s._v("\n                        意向：\n                        "),e("span",{staticClass:"com_search_job_em"},[s._v(s._s(t.itention))])]),s._v(" "),e("span",{staticClass:"search_job_list_box_line"},[s._v("|")]),s._v(" "),e("span",{staticClass:"search_job_list_box_s"},[s._v("\n                        薪资：\n                        "),e("span",{staticClass:"com_search_job_em com_search_job_em_pay"},[s._v(s._s(t.salary))])]),s._v(" "),e("span",{staticClass:"search_job_list_box_line"},[s._v("|")]),s._v(" "),e("span",{staticClass:"search_job_list_box_s"},[s._v("\n                        经验：\n                        "),e("span",{staticClass:"com_search_job_em"},[s._v(s._s(t.experience))])]),s._v(" "),e("span",{staticClass:"search_job_list_box_line"},[s._v("|")]),s._v(" "),e("span",{staticClass:"search_job_list_box_s"},[s._v("\n                        学历：\n                        "),e("span",{staticClass:"com_search_job_em"},[s._v(s._s(t.education))])])])])])}))])},staticRenderFns:[]};var c=a("VU/8")(_,i,!1,function(s){a("XtVV"),a("9zJI")},"data-v-567940ed",null);t.default=c.exports}});
//# sourceMappingURL=2.ffd6c88ba0d6d591dd5c.js.map
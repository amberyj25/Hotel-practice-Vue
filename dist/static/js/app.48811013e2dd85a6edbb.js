webpackJsonp([1],{"5DeW":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),n=a("/ocq"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"li_img",attrs:{href:"##"},on:{click:function(e){return e.preventDefault(),t.updateUrl(t.item.id)}}},[a("img",{attrs:{src:t.item.imageUrl}})]),t._v(" "),a("a",{staticClass:"li_text",attrs:{href:"##"},on:{click:function(e){return e.preventDefault(),t.updateUrl(t.item.id)}}},[t._v(t._s(t.item.name))]),t._v(" "),a("p",[t._v("平日："+t._s(t.item.normalDayPrice)+"元 / 假日："+t._s(t.item.holidayPrice)+"元")])])},staticRenderFns:[]};var i={name:"App",components:{Rooms:a("VU/8")({name:"Rooms",props:["item"],methods:{updateUrl:function(t){this.$router.push("/SingleRoom/"+t)}}},o,!1,function(t){a("eOGu")},"data-v-40c3614e",null).exports},data:function(){return{rooms:""}},mounted:function(){var t=this;this.axios("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:{Authorization:"Bearer 7mVLFDwXZ7vbrKGVDJcRr9qXCjUjM8ZvPfQorXSY9jVnzYyYInJj07mIv2QE",accept:"application/json"}}).then(function(e){t.rooms=e.data.items})}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("div",{staticClass:"header_content"},[a("h1",[a("router-link",{attrs:{to:"/"}},[t._v("Happy Space")])],1),t._v(" "),a("nav",[a("router-link",{attrs:{to:"/About"}},[t._v("關於我們")]),t._v(" "),a("a",{attrs:{href:"#rooms_ul"}},[t._v("房型介紹")]),t._v(" "),a("router-link",{attrs:{to:"/Sale"}},[t._v("優惠活動")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1)])]),t._v(" "),a("main",[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"main_content"},[a("ul",{attrs:{id:"rooms_ul"}},t._l(t.rooms,function(e,r){return a("Rooms",{key:t.index,attrs:{item:e}})}),1)])])])},staticRenderFns:[]};var c=a("VU/8")(i,s,!1,function(t){a("SD5l")},"data-v-c80ea54e",null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("div",{staticClass:"header_content"},[a("h1",[a("router-link",{attrs:{to:{name:"App"}}},[t._v("Happy Space")])],1),t._v(" "),a("nav",[a("a",{attrs:{href:"##"}},[t._v("關於我們")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("房型介紹")]),t._v(" "),a("router-link",{attrs:{to:"/Sale"}},[t._v("優惠活動")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"room_img"},[e("img",{attrs:{src:a("UhZ1"),alt:"img"}})]),this._v(" "),e("div",{staticClass:"aboutus"},[e("h2",[this._v("About Us")]),this._v(" "),e("p",[this._v("A wonderful vacation on dream.\n  The beach with the breeze, enjoying the sunset in summer, and bathing the stars at midnight.\n  What an amazing thing when you wake up in the morning with the view formed the sky, the mountains and the ocean in front of you. You can totally relax yourself with the bright and tidy room, the astonishing scene, and our sweet service.\n  Faraway from the noist city right now.")])])])}]};var u=a("VU/8")({name:"about"},v,!1,function(t){a("PQ8W")},"data-v-4588785e",null).exports,m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("div",{staticClass:"header_content"},[a("h1",[a("router-link",{attrs:{to:{name:"App"}}},[t._v("Happy Space")])],1),t._v(" "),a("nav",[a("router-link",{attrs:{to:"/About"}},[t._v("關於我們")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("房型介紹")]),t._v(" "),a("a",{attrs:{href:"##"}},[t._v("優惠活動")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"room_img"},[e("img",{attrs:{src:a("ofUt"),alt:"img"}})]),this._v(" "),e("div",{staticClass:"aboutus"},[e("h2",[this._v("Sale")]),this._v(" "),e("p",[this._v("歡慶開幕")]),this._v(" "),e("p",[this._v("住一晚送一晚")])])])}]};var l=a("VU/8")({name:"Sale"},m,!1,function(t){a("msRJ")},"data-v-88de5e92",null).exports,_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("div",{staticClass:"header_content"},[a("h1",[a("router-link",{attrs:{to:{name:"App"}}},[t._v("Happy Space")])],1),t._v(" "),a("nav",[a("router-link",{attrs:{to:"/About"}},[t._v("關於我們")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("房型介紹")]),t._v(" "),a("router-link",{attrs:{to:"/Sale"}},[t._v("優惠活動")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1)])]),t._v(" "),a("main",[a("div",{staticClass:"room_img"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.room.imageUrl[2]}})]),t._v(" "),a("div",{staticClass:"another_img"},[a("img",{attrs:{src:t.room.imageUrl[0]}}),t._v(" "),a("img",{attrs:{src:t.room.imageUrl[1]}})])]),t._v(" "),a("div",{staticClass:"room_feature"},[a("h2",[t._v(t._s(t.room.name))]),t._v(" "),a("p",[t._v("房客人數限制："+t._s(t.room.descriptionShort.GuestMax))]),t._v(" "),a("p",[t._v("床型："+t._s(t.room.descriptionShort.Bed[0]))]),t._v(" "),a("p",[t._v("CheckIn的時間 : "+t._s(t.room.checkInAndOut.checkInEarly))]),t._v(" "),a("p",[t._v("CheckOut的時間 : "+t._s(t.room.checkInAndOut.checkOut)+" ")]),t._v(" "),a("p",{staticStyle:{"text-align":"justify"}},[t._v(t._s(t.room.description))])])])])},staticRenderFns:[]};var h=a("VU/8")({name:"singleRoom",data:function(){return{room:""}},mounted:function(){var t=this,e=this.$route.params.id;this.axios("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+e,{headers:{Authorization:"Bearer 7mVLFDwXZ7vbrKGVDJcRr9qXCjUjM8ZvPfQorXSY9jVnzYyYInJj07mIv2QE",accept:"application/json"}}).then(function(e){t.room=e.data.room[0]})}},_,!1,function(t){a("5DeW")},"data-v-4500b05a",null).exports;r.a.use(n.a);var p=new n.a({routes:[{path:"/",name:"App",component:c},{path:"/About",name:"About",component:u},{path:"/Sale",name:"Sale",component:l},{path:"/SingleRoom/:id",name:"SingleRoom",component:h}]}),d=a("mtWM"),f=a.n(d),g=a("Rf8U"),k=a.n(g);r.a.use(k.a,f.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:p,template:"<router-view></router-view>"})},PQ8W:function(t,e){},SD5l:function(t,e){},UhZ1:function(t,e,a){t.exports=a.p+"static/img/aboutimg.91a45d5.jpg"},eOGu:function(t,e){},msRJ:function(t,e){},ofUt:function(t,e,a){t.exports=a.p+"static/img/sale.3a47c7f.jpg"}},["NHnr"]);
//# sourceMappingURL=app.48811013e2dd85a6edbb.js.map
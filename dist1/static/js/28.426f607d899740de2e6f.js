webpackJsonp([28],{"./node_modules/babel-loader/lib/index.js!./src/modules/home/tch/kcgl/kcgl.js":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s("./src/modules/home/tch/home.menu.js"),a=s("./src/assets/imgs \\.(png|jpg)$");t.default={name:"czzx",data:function(){return{menu:l.a[3].children}},methods:{imgUrl:function(e){return a("./"+e)},navTo:function(e){this.$router.push(e)}}}},'./node_modules/vue-loader/lib/template-compiler.js?{"id":"data-v-74ebe8fe"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/modules/home/tch/kcgl/Kcgl.vue':function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"czzx"},[s("div",{staticClass:"breadcrumb-banner-area"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"breadcrumb-text"},[s("h1",{staticClass:"text-center"},[e._v("課程概覽")]),e._v(" "),s("div",{staticClass:"breadcrumb-bar"},[s("ul",{staticClass:"breadcrumb text-center"},[s("li",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.navTo("/tch/index")}}},[e._v("主頁")])]),e._v(" "),s("li",[e._v("課程概覽")])])])])])])])]),e._v(" "),s("div",{staticClass:"horizonal-nav-area"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("router-view")],1),e._v(" "),s("div",{staticClass:"col-xs-12"},[s("ul",{staticClass:"list-group"},e._l(e.menu,function(t){return s("li",{staticClass:"list-group-item",class:{active:t.path==e.$router.currentRoute.fullPath},on:{click:function(s){e.navTo(t.path)}}},[e._v(e._s(t.name))])}))])])])])])},staticRenderFns:[]}},"./src/modules/home/tch/kcgl/Kcgl.vue":function(e,t,s){var l=s("./node_modules/vue-loader/lib/component-normalizer.js")(s("./node_modules/babel-loader/lib/index.js!./src/modules/home/tch/kcgl/kcgl.js"),s('./node_modules/vue-loader/lib/template-compiler.js?{"id":"data-v-74ebe8fe"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/modules/home/tch/kcgl/Kcgl.vue'),null,null);e.exports=l.exports}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3929dcbd"],{"16a3":function(t,a,s){"use strict";var n=s("cd8c"),i=s.n(n);i.a},"262c":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("navbar")],1),t.carts.length?s("div",{staticClass:"row justify-content-center my-5"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"text-right mb-3"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:t.removeAllCartItem}},[s("i",{staticClass:"far fa-trash-alt"},[t._v("刪除所有品項")])])]),s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("table",{staticClass:"table"},[t._m(0),t.carts.length?s("tbody",t._l(t.carts,(function(a){return s("tr",{key:a.product.id},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.removeCartItem(a.product.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),s("td",{staticClass:"align-middle"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-outline-gold",attrs:{type:"button"},on:{click:function(s){return t.quantityUpdata(a.product.id,a.quantity+1)}}},[t._v("+")])]),s("input",{staticClass:"form-control text-center",attrs:{id:"inlineFormInputGroupUsername",type:"text"},domProps:{value:a.quantity},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.quantityUpdata(a.product.id,s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-gold",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(s){return t.quantityUpdata(a.product.id,a.quantity-1)}}},[t._v("-")])])])]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.product.price))])])})),0):t._e(),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.cartTotal))])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 ml-auto"},[s("router-link",{staticClass:"btn btn-gold btn-block mt-4",attrs:{to:"/order"}},[t._v(" 結帳去 ")])],1)])],1)]):s("div",{staticClass:"container h-100"},[s("div",{staticClass:"row p-5"},[s("div",{staticClass:"col-md-8 mx-auto text-center py-5"},[s("h3",{staticClass:"mb-5"},[t._v("您的購物車沒有商品唷，請回商品頁面選購吧～")]),s("router-link",{staticClass:"text-gold",attrs:{to:"/products"}},[s("i",{staticClass:"far fa-arrow-alt-circle-left text-gold"}),t._v(" 繼續購物 ")])],1)])]),s("myFooter")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",[t._v("刪除")]),s("th",[t._v("品名")]),s("th",{attrs:{width:"150px"}},[t._v("數量")]),s("th",[t._v("單位")]),s("th",[t._v("單價")])])}],e=(s("99af"),s("4160"),s("159b"),s("9062")),c=s.n(e),r=s("d178"),o=s("fd2d"),l={components:{Loading:c.a,navbar:r["a"],myFooter:o["a"]},data:function(){return{carts:[],cartTotal:0,isLoading:!1}},created:function(){var t=this;t.getCarts()},methods:{getCarts:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/shopping");t.axios.get(a).then((function(a){t.carts=a.data.data,t.cartTotalCal()})).catch((function(t){console.log(t.response)}))},quantityUpdata:function(t,a){if(!(a<=0)){var s=this,n="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/shopping");s.isLoading=!0,s.cartTotal=0;var i={product:t,quantity:a};s.axios.patch(n,i).then((function(t){s.isLoading=!1,s.getCarts()})).catch((function(t){console.log(t),s.isLoading=!1}))}},removeCartItem:function(t){var a=this,s="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/shopping/").concat(t);a.isLoading=!0,a.axios.delete(s).then((function(t){console.log(t),a.getCarts(),a.isLoading=!1})).catch((function(t){console.log(t.response),a.isLoading=!1}))},removeAllCartItem:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/shopping/all/product");t.isLoading=!0,t.axios.delete(a).then((function(a){t.isLoading=!1,t.cartTotal=0,t.getCarts()})).catch((function(a){console.log(a.response),t.isLoading=!1}))},cartTotalCal:function(){var t=this;t.cartTotal=0,t.carts.forEach((function(a){t.cartTotal+=a.product.price*a.quantity}))}}},u=l,d=s("2877"),p=Object(d["a"])(u,n,i,!1,null,null,null);a["default"]=p.exports},"99af":function(t,a,s){"use strict";var n=s("23e7"),i=s("d039"),e=s("e8b5"),c=s("861d"),r=s("7b0b"),o=s("50c4"),l=s("8418"),u=s("65f0"),d=s("1dde"),p=s("b622"),v=s("2d00"),f=p("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",b=v>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=d("concat"),C=function(t){if(!c(t))return!1;var a=t[f];return void 0!==a?!!a:e(t)},_=!b||!g;n({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,n,i,e,c=r(this),d=u(c,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(e=-1===a?c:arguments[a],C(e)){if(i=o(e.length),p+i>h)throw TypeError(m);for(s=0;s<i;s++,p++)s in e&&l(d,p,e[s])}else{if(p>=h)throw TypeError(m);l(d,p++,e)}return d.length=p,d}})},cd8c:function(t,a,s){},d178:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[t._m(0),t._m(1),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/about"}},[t._v("關於品牌")]),s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/products"}},[t._v("產品列表")]),s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/cart"}},[t._v("購物車")])],1)])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[s("img",{attrs:{width:"40px",src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg",alt:""}}),t._v(" CursiveFancy ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],e=(s("16a3"),s("2877")),c={},r=Object(e["a"])(c,n,i,!1,null,null,null);a["a"]=r.exports},fd2d:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"bg-main py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},[s("router-link",{staticClass:"text-white h4",attrs:{to:"/"}},[s("img",{attrs:{width:"50px",src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg",alt:""}})]),t._m(0)],1),t._m(1)])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"d-flex list-unstyled mb-0 h4"},[s("li",[s("a",{staticClass:"text-white mx-3",attrs:{href:"https://www.facebook.com/CursiveFancy",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook"})])]),s("li",[s("a",{staticClass:"text-white mx-3",attrs:{href:"https://www.instagram.com/cursivefancy_weiyan/",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram"})])]),s("li",[s("a",{staticClass:"text-white ml-3",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-line"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},[s("div",{staticClass:"mb-md-0 mb-1"},[s("p",{staticClass:"mb-0"},[t._v("service@mail.com")])]),s("p",{staticClass:"mb-0"},[t._v("© 2020 CursiveFancy. All rights reserved.")])])}],e=s("2877"),c={},r=Object(e["a"])(c,n,i,!1,null,null,null);a["a"]=r.exports}}]);
//# sourceMappingURL=chunk-3929dcbd.16edd362.js.map
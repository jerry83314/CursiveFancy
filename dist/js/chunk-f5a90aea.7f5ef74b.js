(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5a90aea"],{"16a3":function(t,a,s){"use strict";var e=s("cd8c"),r=s.n(e);r.a},3109:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("navbar")],1),s("div",{staticClass:"container mt-md-5 mt-3 mb-7"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("ul",{staticClass:"category"},[s("li",{staticClass:"p-3 bg-main"},[s("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.selectCategory("all")}}},[t._v("全部商品")])]),s("li",{staticClass:"p-3 bg-main"},[s("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.selectCategory("artWork")}}},[t._v("書法")])]),s("li",{staticClass:"p-3 bg-main"},[s("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.selectCategory("fan")}}},[t._v("扇子")])]),s("li",{staticClass:"p-3 bg-main"},[s("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.selectCategory("paperBoard")}}},[t._v("畫仙板")])])])]),s("div",{staticClass:"col-md-10"},[s("div",{staticClass:"row"},t._l(t.filterProducts,(function(a){return s("div",{key:a.id,staticClass:"col-md-4"},[s("div",{staticClass:"card mb-4 position-relative"},[s("router-link",{attrs:{to:"/product/"+a.id}},[s("img",{staticClass:"card-img-top rounded-0",attrs:{src:a.imageUrl[0],alt:"..."}})]),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"my-3 item__title"},[t._v(t._s(a.title))]),s("p",{staticClass:"text-muted mt-3"},[t._v(t._s(a.content))]),s("div",{staticClass:"d-flex justify-content-between mb-3"},[s("small",{staticClass:"mb-0"},[t._v(" 售價 : "),s("del",[t._v(t._s(a.origin_price))])]),s("p",{staticClass:"font-weight-bold mb-0"},[t._v("特價 : "+t._s(a.price))])])]),s("div",{staticClass:"card-footer d-flex"},[s("router-link",{staticClass:"btn btn-outline-main btn-sm",attrs:{to:"/product/"+a.id}},[t._v(" 查看更多 ")]),s("button",{staticClass:"btn btn-outline-gold btn-sm ml-auto",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(s){return t.addToCart(a)}}},[t.status.loadingItem===a.id?s("i",{staticClass:"spinner-border spinner-border-sm"}):t._e(),t._v(" 加到購物車 ")])],1)],1)])})),0)])])]),s("myFooter")],1)},r=[],i=(s("99af"),s("4160"),s("159b"),s("d178")),n=s("fd2d"),c={components:{navbar:i["a"],myFooter:n["a"]},data:function(){return{products:[],isLoading:!1,status:{loadingItem:""},filterProducts:[],category:"all"}},created:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/products");t.isLoading=!0,t.axios.get(a).then((function(a){t.products=a.data.data,t.filterProducts=a.data.data,t.isLoading=!1})).catch((function(a){console.log(a.response),t.isLoading=!1}))},methods:{addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/shopping");s.status.loadingItem=t.id,s.isLoading=!0;var r={product:t.id,quantity:a};s.axios.post(e,r).then((function(t){console.log(t),s.status.loadingItem="",s.isLoading=!1,s.$bus.$emit("message:push","加入成功","success")})).catch((function(t){console.log(t.response),s.status.loadingItem="",s.isLoading=!1,s.$bus.$emit("message:push","".concat(t.response.data.errors),"danger")}))},selectCategory:function(t){var a=this;switch(t){case"all":a.category="全部",a.filterProducts=a.products;break;case"paperBoard":a.filterProducts=[],a.category="畫仙板",a.products.forEach((function(t){t.category===a.category&&a.filterProducts.push(t)}));break;case"fan":a.filterProducts=[],a.category="扇子類",a.products.forEach((function(t){t.category===a.category&&a.filterProducts.push(t)}));break;case"artWork":a.filterProducts=[],a.category="書法類",a.products.forEach((function(t){t.category===a.category&&a.filterProducts.push(t)}));break}}}},o=c,l=(s("dc14"),s("2877")),u=Object(l["a"])(o,e,r,!1,null,null,null);a["default"]=u.exports},"99af":function(t,a,s){"use strict";var e=s("23e7"),r=s("d039"),i=s("e8b5"),n=s("861d"),c=s("7b0b"),o=s("50c4"),l=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),v=s("2d00"),m=f("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",b=v>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=d("concat"),C=function(t){if(!n(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},_=!b||!h;e({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,e,r,i,n=c(this),d=u(n,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(i=-1===a?n:arguments[a],C(i)){if(r=o(i.length),f+r>p)throw TypeError(g);for(s=0;s<r;s++,f++)s in i&&l(d,f,i[s])}else{if(f>=p)throw TypeError(g);l(d,f++,i)}return d.length=f,d}})},b6a4:function(t,a,s){},cd8c:function(t,a,s){},d178:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[t._m(0),t._m(1),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/about"}},[t._v("關於品牌")]),s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/products"}},[t._v("產品列表")]),s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/cart"}},[t._v("購物車")])],1)])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[s("img",{attrs:{width:"40px",src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg",alt:""}}),t._v(" CursiveFancy ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i=(s("16a3"),s("2877")),n={},c=Object(i["a"])(n,e,r,!1,null,null,null);a["a"]=c.exports},dc14:function(t,a,s){"use strict";var e=s("b6a4"),r=s.n(e);r.a},fd2d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"bg-main py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},[s("router-link",{staticClass:"text-white h4",attrs:{to:"/"}},[s("img",{attrs:{width:"50px",src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg",alt:""}})]),t._m(0)],1),t._m(1)])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"d-flex list-unstyled mb-0 h4"},[s("li",[s("a",{staticClass:"text-white mx-3",attrs:{href:"https://www.facebook.com/CursiveFancy",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook"})])]),s("li",[s("a",{staticClass:"text-white mx-3",attrs:{href:"https://www.instagram.com/cursivefancy_weiyan/",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram"})])]),s("li",[s("a",{staticClass:"text-white ml-3",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-line"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},[s("div",{staticClass:"mb-md-0 mb-1"},[s("p",{staticClass:"mb-0"},[t._v("service@mail.com")])]),s("p",{staticClass:"mb-0"},[t._v("© 2020 CursiveFancy. All rights reserved.")])])}],i=s("2877"),n={},c=Object(i["a"])(n,e,r,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-f5a90aea.7f5ef74b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-219a7f48"],{"16a3":function(t,a,e){"use strict";var s=e("cd8c"),r=e.n(s);r.a},"1dde":function(t,a,e){var s=e("d039"),r=e("b622"),o=e("2d00"),n=r("species");t.exports=function(t){return o>=51||!s((function(){var a=[],e=a.constructor={};return e[n]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),o=e("5c6c");t.exports=function(t,a,e){var n=s(a);n in t?r.f(t,n,o(0,e)):t[n]=e}},"8ebc":function(t,a,e){},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),o=e("e8b5"),n=e("861d"),i=e("7b0b"),l=e("50c4"),c=e("8418"),d=e("65f0"),u=e("1dde"),m=e("b622"),v=e("2d00"),f=m("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=v>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),_=u("concat"),C=function(t){if(!n(t))return!1;var a=t[f];return void 0!==a?!!a:o(t)},h=!g||!_;s({target:"Array",proto:!0,forced:h},{concat:function(t){var a,e,s,r,o,n=i(this),u=d(n,0),m=0;for(a=-1,s=arguments.length;a<s;a++)if(o=-1===a?n:arguments[a],C(o)){if(r=l(o.length),m+r>p)throw TypeError(b);for(e=0;e<r;e++,m++)e in o&&c(u,m,o[e])}else{if(m>=p)throw TypeError(b);c(u,m++,o)}return u.length=m,u}})},ad99:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("navbar")],1),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-md-8 mx-auto"},[e("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.submitForm(a)}}},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"姓名",id:"text"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:r,attrs:{type:"email",name:"Email",id:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required|integer"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"tel"}},[t._v("電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:r,attrs:{type:"tel",name:"電話",id:"tel"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:r,attrs:{type:"address",name:"地址",id:"address"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"payment"}},[t._v("付款方式")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",class:r,attrs:{id:"payment",name:"付款方式"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方式")]),e("option",[t._v("WebATM")]),e("option",[t._v("ATM")]),e("option",[t._v("Barcode")]),e("option",[t._v("Credit")]),e("option",[t._v("ApplePay")]),e("option",[t._v("GooglePay")])]),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("備註")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"message",id:"message",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s}},[t._v("送出")])],1)]}}])})],1)])]),e("myFooter"),e("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),t._m(2),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.backToHome}},[t._v("關閉")])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row my-5"},[e("div",{staticClass:"col-md-3 mx-auto text-center"},[e("h2",{staticClass:"formTitle text-gray mb-0"},[t._v("填寫資料")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("完成訂單")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-body"},[e("p",[t._v("恭喜你已完成訂單。")])])}],o=(e("99af"),e("d178")),n=e("fd2d"),i={components:{navbar:o["a"],myFooter:n["a"]},data:function(){return{form:{email:"",name:"",tel:"",address:"",message:"",payment:""}}},methods:{submitForm:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/orders");t.axios.post(a,t.form).then((function(t){console.log("success"),$("#orderModal").modal("show")})).catch((function(t){console.log(t.response),console.log("fail")}))},backToHome:function(){this.$router.push("/")}}},l=i,c=(e("e8c3"),e("2877")),d=Object(c["a"])(l,s,r,!1,null,"82426d5e",null);a["default"]=d.exports},cd8c:function(t,a,e){},d178:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[t._m(0),t._m(1),e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[e("div",{staticClass:"navbar-nav"},[e("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/about"}},[t._v("關於品牌")]),e("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/products"}},[t._v("產品列表")]),e("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/cart"}},[t._v("購物車")])],1)])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("img",{attrs:{width:"40px",src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg",alt:""}}),t._v(" CursiveFancy ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],o=(e("16a3"),e("2877")),n={},i=Object(o["a"])(n,s,r,!1,null,null,null);a["a"]=i.exports},e8c3:function(t,a,e){"use strict";var s=e("8ebc"),r=e.n(s);r.a},fd2d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bg-main py-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},[e("router-link",{staticClass:"text-white h4",attrs:{to:"/"}},[e("img",{attrs:{width:"50px",src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg",alt:""}})]),t._m(0)],1),t._m(1)])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"d-flex list-unstyled mb-0 h4"},[e("li",[e("a",{staticClass:"text-white mx-3",attrs:{href:"https://www.facebook.com/CursiveFancy",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook"})])]),e("li",[e("a",{staticClass:"text-white mx-3",attrs:{href:"https://www.instagram.com/cursivefancy_weiyan/",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])]),e("li",[e("a",{staticClass:"text-white ml-3",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-line"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},[e("div",{staticClass:"mb-md-0 mb-1"},[e("p",{staticClass:"mb-0"},[t._v("service@mail.com")])]),e("p",{staticClass:"mb-0"},[t._v("© 2020 CursiveFancy. All rights reserved.")])])}],o=e("2877"),n={},i=Object(o["a"])(n,s,r,!1,null,null,null);a["a"]=i.exports}}]);
//# sourceMappingURL=chunk-219a7f48.aac0af27.js.map
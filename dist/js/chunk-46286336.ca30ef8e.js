(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46286336"],{"057f":function(t,e,a){var n=a("fc6a"),r=a("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?s(t):r(n(t))}},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.changePageEvent(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,n){return a("li",{key:n,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePageEvent(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.changePageEvent(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},r=[],o={props:["pages"],methods:{changePageEvent:function(t){this.$emit("changepage",t),console.log(t)}}},i=o,s=a("2877"),c=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports},"4de4":function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").filter,o=a("1dde"),i=a("ae40"),s=o("filter"),c=i("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var n=a("428f"),r=a("5135"),o=a("e538"),i=a("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||i(e,t,{value:o.f(t)})}},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),o=a("e8b5"),i=a("861d"),s=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),g=f("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",m=p>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=d("concat"),y=function(t){if(!i(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},w=!m||!v;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,r,o,i=s(this),d=u(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],y(o)){if(r=c(o.length),f+r>b)throw TypeError(h);for(a=0;a<r;a++,f++)a in o&&l(d,f,o[a])}else{if(f>=b)throw TypeError(h);l(d,f++,o)}return d.length=f,d}})},a4d3:function(t,e,a){"use strict";var n=a("23e7"),r=a("da84"),o=a("d066"),i=a("c430"),s=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),f=a("e8b5"),p=a("861d"),g=a("825a"),b=a("7b0b"),h=a("fc6a"),m=a("c04e"),v=a("5c6c"),y=a("7c73"),w=a("df75"),O=a("241c"),_=a("057f"),C=a("7418"),P=a("06cf"),j=a("9bf2"),x=a("d1e7"),S=a("9112"),k=a("6eeb"),E=a("5692"),L=a("f772"),M=a("d012"),D=a("90e3"),I=a("b622"),$=a("e538"),F=a("746f"),N=a("d44e"),T=a("69f3"),A=a("b727").forEach,J=L("hidden"),z="Symbol",B="prototype",U=I("toPrimitive"),q=T.set,Q=T.getterFor(z),W=Object[B],G=r.Symbol,H=o("JSON","stringify"),K=P.f,R=j.f,V=_.f,X=x.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),at=E("wks"),nt=r.QObject,rt=!nt||!nt[B]||!nt[B].findChild,ot=s&&u((function(){return 7!=y(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,a){var n=K(W,e);n&&delete W[e],R(t,e,a),n&&t!==W&&R(W,e,n)}:R,it=function(t,e){var a=Y[t]=y(G[B]);return q(a,{type:z,tag:t,description:e}),s||(a.description=e),a},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,a){t===W&&ct(Z,e,a),g(t);var n=m(e,!0);return g(a),d(Y,n)?(a.enumerable?(d(t,J)&&t[J][n]&&(t[J][n]=!1),a=y(a,{enumerable:v(0,!1)})):(d(t,J)||R(t,J,v(1,{})),t[J][n]=!0),ot(t,n,a)):R(t,n,a)},lt=function(t,e){g(t);var a=h(e),n=w(a).concat(gt(a));return A(n,(function(e){s&&!dt.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=m(t,!0),a=X.call(this,e);return!(this===W&&d(Y,e)&&!d(Z,e))&&(!(a||!d(this,e)||!d(Y,e)||d(this,J)&&this[J][e])||a)},ft=function(t,e){var a=h(t),n=m(e,!0);if(a!==W||!d(Y,n)||d(Z,n)){var r=K(a,n);return!r||!d(Y,n)||d(a,J)&&a[J][n]||(r.enumerable=!0),r}},pt=function(t){var e=V(h(t)),a=[];return A(e,(function(t){d(Y,t)||d(M,t)||a.push(t)})),a},gt=function(t){var e=t===W,a=V(e?Z:h(t)),n=[];return A(a,(function(t){!d(Y,t)||e&&!d(W,t)||n.push(Y[t])})),n};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),a=function(t){this===W&&a.call(Z,t),d(this,J)&&d(this[J],e)&&(this[J][e]=!1),ot(this,e,v(1,t))};return s&&rt&&ot(W,e,{configurable:!0,set:a}),it(e,t)},k(G[B],"toString",(function(){return Q(this).tag})),k(G,"withoutSetter",(function(t){return it(D(t),t)})),x.f=dt,j.f=ct,P.f=ft,O.f=_.f=pt,C.f=gt,$.f=function(t){return it(I(t),t)},s&&(R(G[B],"description",{configurable:!0,get:function(){return Q(this).description}}),i||k(W,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),A(w(at),(function(t){F(t)})),n({target:z,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=G(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(b(t))}}),H){var bt=!c||u((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,a){var n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),r[1]=e,H.apply(null,r)}})}G[B][U]||S(G[B],U,G[B].valueOf),N(G,z),M[J]=!0},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),o=a("56ef"),i=a("fc6a"),s=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=i(t),r=s.f,l=o(n),u={},d=0;while(l.length>d)a=r(n,e=l[d++]),void 0!==a&&c(u,e,a);return u}})},dc28:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4",staticStyle:{"padding-right":"15px"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.createImg}},[t._v("新增圖片")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.storages,(function(e,n){return a("tr",{key:e.id},[a("td",[t._v(t._s(n+1))]),a("td",[a("img",{staticClass:"img-fluid",attrs:{src:e.path,alt:"",width:"100px"}})]),a("td",[a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return t.openModal(e)}}},[t._v("刪除")])])])})),0)]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[t._v("是否刪除該筆資料(刪除後將無法恢復)。")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delImg}},[t._v("確認刪除")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"uploadModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.filePath}}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片")]),a("input",{staticClass:"form-control",attrs:{type:"file",id:"file"},on:{change:t.uploadFile}})])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.doneUpload}},[t._v("確認")])])])])]),a("page-component",{attrs:{pages:t.pagination},on:{changepage:t.getImgStorage}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("#")]),a("td",[t._v("圖片縮圖")]),a("td",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title w-100 text-center",attrs:{id:"uploadModal"}},[t._v("圖片上傳")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(a("99af"),a("5530")),i=a("1799"),s=a("9062"),c=a.n(s),l={components:{pageComponent:i["a"],Loading:c.a},props:["token"],data:function(){return{storages:[],pagination:{},isLoading:!0,copyPrdouct:{},filePath:""}},created:function(){var t=this;t.getImgStorage()},methods:{getImgStorage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/storage?page=").concat(t);e.isLoading=!0,e.axios.defaults.headers.common.Authorization="Bearer ".concat(e.token),e.axios.get(a).then((function(t){e.storages=t.data.data,e.pagination=t.data.meta.pagination,e.isLoading=!1})).catch((function(t){console.log(t.response),e.isLoading=!1}))},openModal:function(t){var e=this;$("#delProductModal").modal("show"),e.copyPrdouct=Object(o["a"])({},t)},createImg:function(){$("#uploadModal").modal("show")},uploadFile:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/storage"),a=document.querySelector("#file").files[0],n=new FormData;n.append("file",a),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token),t.axios.post(e,n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),t.filePath=e.data.data.path})).catch((function(t){console.log(t.response)}))},doneUpload:function(){var t=this;t.filePath="",t.getImgStorage()},delImg:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/storage/").concat(t.copyPrdouct.id);t.isLoading=!0,t.axios.delete(e).then((function(e){t.isLoading=!1,$("#delProductModal").modal("hide"),t.getImgStorage()})).catch((function(e){console.log(e.response),t.isLoading=!1}))}}},u=l,d=a("2877"),f=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=f.exports},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),o=a("fc6a"),i=a("06cf").f,s=a("83ab"),c=r((function(){i(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e538:function(t,e,a){var n=a("b622");e.f=n}}]);
//# sourceMappingURL=chunk-46286336.ca30ef8e.js.map
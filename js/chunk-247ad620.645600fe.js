(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-247ad620"],{"24b2":function(t,e,i){"use strict";i("a9e3");var s=i("80d2"),n=i("2b0e");e["a"]=n["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(s["f"])(this.height),i=Object(s["f"])(this.minHeight),n=Object(s["f"])(this.minWidth),a=Object(s["f"])(this.maxHeight),r=Object(s["f"])(this.maxWidth),o=Object(s["f"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),a&&(t.maxHeight=a),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"36a7":function(t,e,i){},"7b8a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-section",{attrs:{id:"who-i-am"}},[s("abstract-1"),s("core-heading",[t._v("Who I am.")]),s("v-col",{attrs:{cols:"12",md:"7"}},[s("v-row",{attrs:{justify:"space-between"}},[s("v-col",{attrs:{cols:"12",md:"7"}},[s("core-text",{staticClass:"mb-0"},[s("p",{domProps:{textContent:t._s(t.schema.basics.summary)}}),s("div",[s("v-img",{staticClass:"ml-auto",attrs:{src:i("d6f5"),width:"150"}})],1)])],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-row",{attrs:{align:"center"}},[s("v-col",{staticClass:"text-uppercase primary--text font-weight-medium",attrs:{cols:"6"}},[s("div",{staticClass:"mb-3",domProps:{textContent:t._s("Location")}}),s("div",{staticClass:"mb-3",domProps:{textContent:t._s("Email")}}),s("div",{staticClass:"mb-3",domProps:{textContent:t._s("Phone")}}),s("div",{domProps:{textContent:t._s("Discord")}})]),s("v-col",{staticClass:"subheading text-no-wrap",attrs:{cols:"6"}},[s("div",{staticClass:"mb-3",domProps:{textContent:t._s("United States")}}),s("div",{staticClass:"mb-3 text-truncate",domProps:{textContent:t._s(t.schema.basics.email)}}),s("div",{staticClass:"mb-3",domProps:{textContent:t._s(t.schema.basics.phone)}}),s("div",[t._v("@j.smith#3992")])])],1)],1)],1)],1),s("v-col",{staticClass:"hidden-sm-and-down text-right text-uppercase",attrs:{cols:"5"}},[s("div",{staticClass:"display-1",domProps:{textContent:t._s(t.schema.basics.label)}}),s("span",{staticClass:"primary--text headline font-weight-light",domProps:{textContent:t._s(t.schema.basics.name)}})])],1)},n=[],a=(i("d3b7"),i("5530")),r=i("2f62"),o={name:"WhoIAm",components:{Abstract1:function(){return i.e("chunk-0cbec33b").then(i.bind(null,"1641"))}},computed:Object(a["a"])({},Object(r["b"])("app",["schema"]))},c=o,d=(i("fc3f"),i("2877")),h=i("6544"),l=i.n(h),m=i("62ad"),u=i("adda"),g=i("0fd9"),p=Object(d["a"])(c,s,n,!1,null,null,null);e["default"]=p.exports;l()(p,{VCol:m["a"],VImg:u["a"],VRow:g["a"]})},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";i("7db0");var s=i("53ca");function n(t,e){var i=e.modifiers||{},n=e.value,r="object"===Object(s["a"])(n)?n:{handler:n,options:{}},o=r.handler,c=r.options,d=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var n=Boolean(e.find((function(t){return t.isIntersecting})));o(e,s,n)}t._observe.init&&i.once?a(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:d},d.observe(t)}function a(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var r={inserted:n,unbind:a};e["a"]=r},a7b3:function(t,e,i){},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3");var s=i("53ca"),n=(i("8efc"),i("90a2")),a=(i("36a7"),i("24b2")),r=i("58df"),o=Object(r["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,d=i("7560"),h=i("d9f7"),l=i("d9bd"),m="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(c,d["a"]).extend({name:"v-img",directives:{intersect:n["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!m||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,a=t.naturalWidth;n||a?(e.naturalWidth=a,e.calculatedAspectRatio=a/n):null!=i&&!e.hasError&&setTimeout(s,i)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(h["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},d6f5:function(t,e,i){t.exports=i.p+"img/signature.0302022c.png"},fc3f:function(t,e,i){"use strict";i("a7b3")}}]);
//# sourceMappingURL=chunk-247ad620.645600fe.js.map
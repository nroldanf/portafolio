(function(e){function n(n){for(var a,c,o=n[0],s=n[1],u=n[2],d=0,l=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(n);while(l.length)l.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==r[o]&&(a=!1)}a&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},c={app:0},r={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"b4109fb8","chunk-4975b195":"d7e041ea","chunk-6c69369d":"f8105b73","chunk-29c6579a":"9d5c46df","chunk-2e01a174":"6c8fda72","chunk-7a14087e":"4334ccdd","chunk-c3bfdc0c":"8074152b","chunk-de6c34f4":"3067f7ce","chunk-17ca5f6c":"862edfe8","chunk-2429764d":"9317f98d","chunk-6a847538":"f9cab4b5","chunk-fd9493f2":"56e2c847","chunk-b887069c":"404603e5","chunk-cf811f88":"85b93c44","chunk-2d0c94cb":"9acd69ec","chunk-2dd51444":"cb2d5a19","chunk-8bb521f2":"70c44239","chunk-9096e05a":"18c17765","chunk-5b1b9fd8":"bd7b5db1","chunk-ea00e8c0":"34267e2f","chunk-65509f99":"f1dc1cc7","chunk-31e4c204":"c0a2f64a","chunk-75100de9":"d5c89da7"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-4975b195":1,"chunk-6c69369d":1,"chunk-29c6579a":1,"chunk-2e01a174":1,"chunk-7a14087e":1,"chunk-c3bfdc0c":1,"chunk-de6c34f4":1,"chunk-17ca5f6c":1,"chunk-2429764d":1,"chunk-6a847538":1,"chunk-fd9493f2":1,"chunk-b887069c":1,"chunk-cf811f88":1,"chunk-2dd51444":1,"chunk-8bb521f2":1,"chunk-9096e05a":1,"chunk-5b1b9fd8":1,"chunk-ea00e8c0":1,"chunk-65509f99":1,"chunk-75100de9":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-4975b195":"ca816c71","chunk-6c69369d":"f32bcadf","chunk-29c6579a":"d6b5874c","chunk-2e01a174":"761d14ec","chunk-7a14087e":"2bc344ec","chunk-c3bfdc0c":"d6b5874c","chunk-de6c34f4":"c2c12fa5","chunk-17ca5f6c":"8047aecf","chunk-2429764d":"0da1eaa6","chunk-6a847538":"3ef3fba4","chunk-fd9493f2":"71dfbc1b","chunk-b887069c":"01cab973","chunk-cf811f88":"bef36615","chunk-2d0c94cb":"31d6cfe0","chunk-2dd51444":"6c0fd51b","chunk-8bb521f2":"2c1ae29b","chunk-9096e05a":"c6412e94","chunk-5b1b9fd8":"26cdf99a","chunk-ea00e8c0":"f2dc8d48","chunk-65509f99":"94cce400","chunk-31e4c204":"31d6cfe0","chunk-75100de9":"d987913b"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===a||d===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete c[e],f.parentNode.removeChild(f),t(i)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var l=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/portafolio/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=d;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-col",{attrs:{cols:e.cols}},[t("h2",{staticClass:"font-weight-bold primary--text mb-4",class:e.$vuetify.breakpoint.mdAndUp?"display-2":"display-1"},[e._t("default")],2)])},r=[],i={name:"CoreHeading",props:{cols:{type:String,default:"12"}}},o=i,s=t("2877"),u=t("6544"),d=t.n(u),l=t("62ad"),f=Object(s["a"])(o,c,r,!1,null,null,null),h=f.exports;d()(f,{VCol:l["a"]});var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-row",e._b({staticClass:"pa-5 mx-0",staticStyle:{position:"relative"},attrs:{tag:"section"}},"v-row",e.$attrs,!1),[e._t("default")],2)},m=[],b={inheritAttrs:!1},k=b,g=t("0fd9"),v=Object(s["a"])(k,p,m,!1,null,null,null),y=v.exports;d()(v,{VRow:g["a"]});var w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",{staticClass:"primary--text title font-weight-light"},[e._t("default")],2)},S=[],C={},x=Object(s["a"])(C,w,S,!1,null,null,null),_=x.exports,A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"subheading mb-5"},[e._t("default")],2)},E=[],O={},P=Object(s["a"])(O,A,E,!1,null,null,null),j=P.exports;a["a"].component("core-heading",h),a["a"].component("core-section",y),a["a"].component("core-subheading",_),a["a"].component("core-text",j);var D=t("f309"),L=t("a722");a["a"].use(D["a"],{components:{VLayout:L["a"]}});var T=new D["a"]({theme:{dark:!0,themes:{dark:{primary:"#FFAA00",accent:"#FFD277"}}}}),M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("core-drawer"),t("v-content",{staticClass:"overflow-hidden"},[t("router-view")],1)],1)},B=[],I=(t("d3b7"),{components:{CoreDrawer:function(){return Promise.all([t.e("chunk-4975b195"),t.e("chunk-6c69369d")]).then(t.bind(null,"41c0"))}}}),N=I,W=(t("034f"),t("7496")),$=t("a75b"),R=Object(s["a"])(N,M,B,!1,null,null,null),J=R.exports;d()(R,{VApp:W["a"],VContent:$["a"]});var V=t("8c4f");a["a"].use(V["a"]);var F=new V["a"]({mode:"history",base:"/portafolio/",routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}}]});var U=F,q=(t("a15b"),t("d81d"),t("b0c0"),t("ac1f"),t("1276"),t("a5fe")),z={namespaced:!0,state:{schema:q,initials:q.basics.name.split(" ").map((function(e){return e.charAt(0)})).join("")}},G=t("2f62");a["a"].use(G["a"]);var H=new G["a"].Store({modules:{app:z}});a["a"].config.productionTip=!1,new a["a"]({router:U,store:H,vuetify:T,render:function(e){return e(J)}}).$mount("#app")},"85ec":function(e,n,t){},a5fe:function(e){e.exports=JSON.parse('{"basics":{"name":"Nicolás Roldán","label":"Data Scientist","picture":"","email":"nroldanfajardo@gmail.com","phone":"+573114508724","website":"http://johnsmith.com","summary":"I am a Biomedical Engineer passionate about Biomedical Signal Processing and Digital Image processing. I have a deep interest in software development, mainly in the field of Machine Learning and Deep Learning applied to industry.","location":{"address":"","postalCode":"","city":"Bogotá","countryCode":"CO","region":""},"profiles":[{"network":"LinkedIn","username":"Nicolás Roldán","url":"https://www.linkedin.com/in/nicolas-roldan-fajardo/"},{"network":"Github","username":"nroldanf","url":"https://github.com/nroldanf"}]},"work":[{"company":"Escuela Colombiana de Ingeniería Julio Garavito","position":"","website":"http://company.com","startDate":"2018-01-01","summary":"Biomedical Engineer specialized in biomedical image and signal processing. Peer tutor of biomedical signal and image processing."},{"company":"Work.r","position":"Data Scientist/Machine Learning Engineer","website":"http://workr.com.co","startDate":"2019-06-01","summary":"Building of ml-based services like Chatbots integrated with SOAP and REST services in WhatsApp and Web channels, information extraction of documents, automated technical state of router devices using computer vision, data driven messaging campaigns, recommendations systems and backend development for financial and telecommunications companies."}],"education":[{"institution":"Escuela Colombiana de Ingeniería Julio Garavito - Universidad del Rosario","area":"Biomedical Engineering","studyType":"Bachelor","startDate":"2014","endDate":"2019","gpa":"","courses":["Biomedical Image Processing","Advanced Image Processing","Statistical Signal Processing"]}],"skills":[{"name":"Scientific Programming","level":5,"keywords":["Python","Matlab"]},{"name":"Backend Development","level":4,"keywords":["Python","Node.js","Java"]},{"name":"DevOps","level":4,"keywords":["Serverless","Docker","AWS SAM","AWS Chalice"]}],"interests":[{"name":"AWS","keywords":["I have been using AWS extensively focused in the Machine Learning Services (Transcribe, Rekognition, Comprehend, Textract, Personalize, and others), REST API deployments with serverless arquitectures using Lambda, DynamoDB SQS, SNS and others, Sagemaker for labeling, training and deployment Sagemaker built-in algorithms for Object Detection, image classification and Text Classification. Today I hold the AWS Machine Learning Specialty Certification archieved in May of 2020 which certificates the demonstrated ability to build, train, tune, and deploy ML models using the AWS Cloud."]},{"name":"Data Science","keywords":["Practical knownledge of methods used for feature selection, dimensionality reduction, feature extraction, imbalanced classes handling. Use of data visualization skills to conduct a better analysis on the data. Manipulation of non-structured data like text and images in way that can be used for an ML algorithm."]},{"name":"Machine Learning and Deep Learning","keywords":["Experience with multiple libraries for machine learning and deep learning training using custom and pretrained models (scikit-learning, OpenCV, spaCy, Tensorflow)."]}]}')}});
//# sourceMappingURL=app.06b79a25.js.map
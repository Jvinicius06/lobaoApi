!function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([515,1]),n()}({511:function(e,t,n){},512:function(e,t,n){},515:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(59),c=n.n(o),i=n(224),l=n(11),u=n(62),s=n.n(u),f=n(44),p=n.n(f),m=n.p+"a535e283f52f456975078fd467f16142.png";var d=function(){return a.a.createElement(s.a,{style:{display:"flex",alignItems:"center",alignSelf:"center",padding:"30px",width:"100%",height:"auto"}},a.a.createElement(p.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{display:"flex",width:"400px"}},a.a.createElement("img",{src:m,height:"400px",alt:"Logo Floricultura Lobao"}),a.a.createElement(p.a,{header:"Floricultura Lobão"},a.a.createElement("p",null,a.a.createElement("small",null,"O propósito deste é mostrar o desenvolvimento de um sistema móvel para plataforma Android, com proposta dedicada exclusivamente para as vendas de uma floricultura, com o intuito de oferecer um serviço diferenciado conciliando as facilidades oferecidas pelo comercio eletrônico, e com base na dificuldade de vendas devido a pandemia da Covid-19, a ideia é apresentar um aplicativo confiável e eficaz para vendas serem facilitadas.")))))},h=n(43),y=n.n(h),b=n(222),v=n.n(b),g=n(221),E=n.n(g),w=n(27),S=n.n(w),k=n(64),O=n.n(k),x=n(18),j=n.n(x),P=n(125),_=n.n(P),C=n(19),R=n.n(C);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var a=M(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?F(e):t}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(c,e);var t,n,r,o=I(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={show:!1,msg:"",callback:function(){}},t.close=t.close.bind(F(t)),t.handleSubmit=t.handleSubmit.bind(F(t)),t.setShow=t.setShow.bind(F(t)),t.init=t.init.bind(F(t)),t}return t=c,(n=[{key:"setShow",value:function(e){this.setState({show:e})}},{key:"init",value:function(e,t){this.setState({show:!0,msg:e,callback:t})}},{key:"exec",value:function(e){(0,this.state.callback)(e),this.setState({show:!1,callback:function(){}})}},{key:"close",value:function(){this.exec(!1)}},{key:"handleSubmit",value:function(){this.exec(!0)}},{key:"render",value:function(){var e=this.state,t=e.show,n=e.msg;return a.a.createElement(R.a,{backdrop:"static",show:t,onHide:this.close,size:"xs"},a.a.createElement(R.a.Body,null,a.a.createElement(S.a,{icon:"remind",style:{color:"#ffb300",fontSize:24}}),"  ",n),a.a.createElement(R.a.Footer,null,a.a.createElement(j.a,{onClick:this.handleSubmit,appearance:"primary"},"Ok"),a.a.createElement(j.a,{onClick:this.close,appearance:"subtle"},"Cancel")))}}])&&T(t.prototype,n),r&&T(t,r),c}(a.a.Component);function L(e,t){var n=new FormData;return Object.entries(e).forEach((function(e){n.append(e[0],e[1])})),n.append("image",t),fetch("/item",{method:"POST",body:n})}var N=[{kind:"quant",tag:"Amount"},{kind:"price",tag:"Price"},{kind:"marks",tag:"Marks"},{kind:"descp",tag:"Description"},{kind:"_id",tag:"ID"}],V=function(e){var t=e.data,n=e.confirm,r=e.reload,o=t.image_path.substring(8),c=function(e){n.current.init("are you sure you want to delete this item from the database. the data will be lost and it will not be possible to recover it!",(function(t){t&&(!function(e){fetch("/item/".concat(e),{method:"DELETE"})}(e),r())}))};return a.a.createElement(p.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{display:"inline-block",width:340,margin:"15px 10px"}},a.a.createElement("img",{src:"imagem/".concat(o),height:"340",alt:t.name,style:{display:"block",marginLeft:"auto",marginRight:"auto"}}),a.a.createElement(p.a,{header:t.name},a.a.createElement(_.a,null,N.map((function(e){var n=t[e.kind]||"undefined";return a.a.createElement(_.a.Item,{key:n,index:n},"".concat(e.tag,": ").concat(n))}))),a.a.createElement(j.a,{onClick:function(){c(t._id)},style:{marginTop:"15px"},block:!0,appearance:"ghost",size:"lg"},"Delete")))},B=function(e){var t=e.data,n=e.reload,r=a.a.createRef();return a.a.createElement(y.a,{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}},a.a.createElement(q,{ref:r}),t.map((function(e){return a.a.createElement(V,{reload:n,data:e,confirm:r})})))},H=n(220),J=n.n(H),Q=n(218),W=n.n(Q),G=n(128),K=n.n(G),U=n(219),X=n.n(U),Y=n(61),Z=n.n(Y),$=n(214),ee=n.n($),te=n(217),ne=n.n(te),re=n(216),ae=n.n(re),oe=n(215),ce=n.n(oe),ie=n(127),le=n.n(ie);function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=he(e);if(t){var a=he(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return me(this,n)}}function me(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?de(e):t}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var be=le.a.Types,ve=be.NumberType,ge=be.StringType,Ee=le.a.Model({name:ge().isRequired("It is mandatory to fill in this field!!"),descp:ge().isRequired("It is mandatory to fill in this field!!"),quant:ve().min(1,"Quantity must be greater than 0!"),price:ve().min(0,"Quantity must be greater than 0!")});function we(e){var t=e.title;return a.a.createElement(j.a,{appearance:"ghost",size:"lg",type:"button",onClick:function(){(0,e.onClick)().then((function(){O.a.success("Success")})).catch((function(e){O.a.error(e)}))}},t)}var Se=function(e){var t,n=e.id,r=e.name,o=e.onChange;return a.a.createElement("input",{onChange:function(){return o(t)},ref:function(e){t=e},type:"file",id:n,name:r})},ke=function(e){var t=e.name,n=e.message,r=e.label,o=e.accepter,c=e.error;return a.a.createElement(ee.a,{className:c?"has-error":""},a.a.createElement(ce.a,null,r),a.a.createElement(ae.a,ye({name:t,accepter:o,errorMessage:c},e)),a.a.createElement(ne.a,null,n))},Oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(c,e);var t,n,r,o=pe(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={formValue:{name:"",price:0,descp:"",quant:0},formError:{},show:!1},t.handleSubmit=t.handleSubmit.bind(de(t)),t.setShow=t.setShow.bind(de(t)),t.form=a.a.createRef(),e.setShow(t.setShow),t}return t=c,(n=[{key:"setShow",value:function(e){var t=this.state.show;return void 0===e||null==e?t:(this.setState({show:e}),e)}},{key:"handleSubmit",value:function(){var e=this,t=this.props.onSend;return new Promise((function(n,r){var a=e.state.formValue;if(e.form.current.check())try{if(!a.image)throw new Error("No Image Set");L(a,a.image.files[0]||null).then((function(){n(),e.setShow(!1),t()})).catch((function(e){r(e)}))}catch(e){r(e.message)}else r("check the data!")}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.formError,r=t.formValue,o=t.show,c=this;return a.a.createElement(R.a,{show:o,onHide:this.close},a.a.createElement(R.a.Header,null,a.a.createElement(R.a.Title,null,"Add New Item")),a.a.createElement(R.a.Body,null,a.a.createElement(y.a,{style:{display:"flex",padding:"60px",alignItems:"center",justifyContent:"center"}},a.a.createElement(W.a,{style:{borderRadius:"10px",border:"1px solid #85d5dc",width:"400px",padding:"30px",display:"flex",flexDirection:"column",alignItems:"center"},ref:this.form,onChange:function(t){e.setState({formValue:t})},onCheck:function(t){e.setState({formError:t})},formValue:r,model:Ee},a.a.createElement(ke,{name:"name",label:"Product Name",accepter:Z.a,error:n.name}),a.a.createElement(ke,{name:"marks",label:"Marker",accepter:X.a,error:n.marks,style:{display:"inline-block",width:300},data:[{label:"Acessórios e decorações",value:"AD"},{label:"Arranjos e buques",value:"AB"},{label:"Cactos e Suculentas",value:"CS"},{label:"Flores e Platas naturais",value:"FP"},{label:"Ervas e Temperos",value:"ET"}]}),a.a.createElement(ke,{name:"quant",label:"Amount",accepter:K.a,error:n.quant}),a.a.createElement(ke,{name:"price",label:"Price",step:.01,accepter:K.a,error:n.price}),a.a.createElement(ke,{name:"descp",label:"Product description",accepter:Z.a,error:n.descp,rows:5,componentClass:"textarea"}),a.a.createElement(ke,{name:"image",label:"Product description",accepter:Se})))),a.a.createElement(R.a.Footer,{style:{padding:"10px"}},a.a.createElement(J.a,null,a.a.createElement(we,{onClick:this.handleSubmit,title:"Submit"}),a.a.createElement(j.a,{appearance:"ghost",size:"lg",onClick:function(){c.setShow(!1)}},"Cancel"))))}}])&&se(t.prototype,n),r&&se(t,r),c}(a.a.Component);function xe(e){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=De(e);if(t){var a=De(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Ce(this,n)}}function Ce(e,t){return!t||"object"!==xe(t)&&"function"!=typeof t?Re(e):t}function Re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function De(e){return(De=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(c,e);var t,n,r,o=_e(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={data:[]},t.getData=t.getData.bind(Re(t)),t}return t=c,(n=[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;fetch("/items").then((function(e){return e.json()})).then((function(t){e.setState({data:t})})).catch((function(e){return O.a.error(e)}))}},{key:"render",value:function(){var e=this,t=this.state.data;return a.a.createElement(s.a,null,a.a.createElement(E.a,{className:"rs-panel-shaded",style:{zIndex:999}},a.a.createElement(S.a,{icon:"dashboard",size:"lg",style:{verticalAlign:0}}),a.a.createElement("span",{style:{marginLeft:12,fontSize:18}},"Dashboard")),a.a.createElement(s.a,null,a.a.createElement(y.a,{style:{padding:"15px"}},a.a.createElement(v.a,{onClick:function(){e.setShow(!e.setShow())},style:{margin:"20px"},size:"lg",icon:a.a.createElement(S.a,{size:"lg",icon:"plus"}),appearance:"primary"}),a.a.createElement(B,{reload:this.getData,data:t}),a.a.createElement(Oe,{setShow:function(t){e.setShow=t},onSend:function(){e.getData()}}))))}}])&&je(t.prototype,n),r&&je(t,r),c}(a.a.Component);n(511),n(512);function ze(){return a.a.createElement(i.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/itens"},a.a.createElement(Te,null)),a.a.createElement(l.a,{path:"/"},a.a.createElement(d,null))))}c.a.render(a.a.createElement(ze,null),document.getElementById("root"))}});
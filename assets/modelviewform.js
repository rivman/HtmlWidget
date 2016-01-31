/**
*
*   ModelViewForm.js
*   Declarative MV Form building, rendering, localisation, validation 
*   @dependencies: jQuery, ModelView, ModelViewValidation, Xpresion (optional, for custom field expressions)
*   @version: 1.0.0
*
*   https://github.com/foo123/modelview.js
*   https://github.com/foo123/modelview-form.js
*
**/
!function(e,t,r,i,a){"use strict";function o(e){return"data-mvform-"+e}function l(e){return!!e&&e.length}function s(e,t){t=t||[];var r,i,a,n,l,s,d,f="";for((r=e.attr(o("selected-multiple")))?(e.removeAttr(o("selected-multiple")),r=r.split(",")):(r=e.attr(o("selected")))?e.removeAttr(o("selected")):r=e.val(),i=0,a=t.length;a>i;i++)n=t[i],O(n)?(l=n.key,s=n.value):(l=n,s=n),f+='<option value="'+l+'">'+s+"</option>";return d=e.children("optgroup"),d=d.length?d.eq(0):e,d.children("option:not(.default,.placeholder)").remove(),d.append(f),e.val(r),e}function d(e,r){var i=r.$view.$model,a=i.id+".",n=!1,l={};e.each(function(){var e,r,i,s,d=t(this),f=d.attr("name");f&&(e=H(f),a===e.slice(0,a.length)&&(e=e.slice(a.length),s=d.attr(o("ajax-options")),r=d.attr(o("key")),i=d.attr(o("ajax-key")),i||(i=r),i&&r&&s&&(l[r]={key:i,model_key:r,options:s,$el:d},n=!0)))}),n&&(i.on("change",function(e,t){var a,o;t.key&&l[N](t.key)&&(o=l[t.key],a={},a[o.key]=i.get(o.model_key),o.$el.addClass("mvform-progress"),r.trigger("before-ajax-options",o),y.doGET(o.options,a,function(e,t){s(o.$el,t||[]).removeClass("mvform-progress").trigger("change"),r.trigger("after-ajax-options",o)}))}),i.notify(w(l),"change"))}function f(e,t){if("function"==typeof e)return e;if(t){var r=z("^"+q(t)+"([\\.\\[].+)$");return function(t){var i,a=t[L](e);return a&&(i=a.match(r))?i[1]:null}}return function(t){return t[L](e)}}function u(e,r){return"function"==typeof e?e:!1!==r?function(r){var i=("value"===e?t(r).val():r[L](e))||"",o=(r[L]("type")||r.tagName||"").toLowerCase();return"file"===o?r.files.length?r.files:null:("checkbox"!==o&&"radio"!==o||r.checked)&&("select"!==o||i.length&&-1!==r.selectedIndex)&&("text"!==o&&"textarea"!==o||C(i).length)?i:a}:function(r){var i=("value"===e?t(r).val():r[L](e))||"",o=(r[L]("type")||r.tagName).toLowerCase();return"file"===o?r.files.length?r.files:null:"checkbox"!==o&&"radio"!==o||r.checked?i:a}}function c(e,r,i,a,s,d){a=f(a||"name",r.id),s=u(s||"value",!1),d=!0===d;for(var c=0,v=e.length;v>c;c++){var m,p,g,h,E,b,y,T,I,w,S,F,O,k,R,C,P,U,H,Y=e[c],q=(t(Y),!1);if(m=a(Y)){if(q=V.test(m),S=(Y[L]("type")||"")[A](),R="radio"===S||"checkbox"===S,C="file"===S,U=Y[D]("data-else"),P=U?Y[L]("data-else"):null,p=s(Y),null==p){if(!C&&(q||"checkbox"!==S||Y.checked||!U))continue;p=null}if(h=G(m),g=h.replace(B,""),y=p||"",T="",F=!!Y[L]("required"),O=!!Y[L](o("required")),Y[D]("id")||Y[L]("id",W(g.split(".").join("_"))),w=Y[L](o("type"))||S)switch(w=w[$]()){case"NUMBER":case"INTEGER":case"INT":r.types[g]=J.INT,y=J.INT(y)||0,T=0,R&&!q&&U&&(T=J.INT(P)||0);break;case"BOOLEAN":case"BOOL":r.types[g]=J.BOOL,y=J.BOOL(y)||!1,T=!y,R&&!q&&U&&(T=J.BOOL(P));break;case"EMAIL":case"URL":case"TEXT":case"STRING":case"STR":r.types[g]=J.STR,y=J.STR(y)||"",T="",R&&!q&&U&&(T=J.STR(P)||"");break;default:J[N](w)&&(r.types[g]=J[w],R&&!q&&U&&(T=J[w](P)))}for(q||((I=Y[L](o("validate")))||F||O||"email"===S||"url"===S||"datetime"===S||"date"===S||"time"===S)&&(I?(I=I[$](),"BETWEEN"===I?(H=[parseInt(Y[L](o("min")),10),parseInt(Y[L](o("max")),10)],isNaN(H[0])||isNaN(H[1])||(r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.BETWEEN(H[0],H[1],!1)):Q.BETWEEN(H[0],H[1],!1))):"GREATER_THAN"===I?(H=parseInt(Y[L](o("min")),10),isNaN(H)||(r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.GREATER_THAN(H,!0)):Q.GREATER_THAN(H,!0))):"LESS_THAN"===I?(H=parseInt(Y[L](o("max")),10),isNaN(H)||(r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.LESS_THAN(H,!0)):Q.LESS_THAN(H,!0))):"DATETIME"===I||"DATE"===I||"TIME"===I?(H=Y[L](o("format"))||"Y-m-d H:i:s",r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.DATETIME(H,i&&i.datetime?i.datetime:null)):Q.DATETIME(H,i&&i.datetime?i.datetime:null)):"FILESIZE"===I?(H=parseInt(Y[L](o("filesize")),10)||1048576,r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.FILESIZE(Y,H)):Q.FILESIZE(Y,H)):"FILETYPE"===I||"FILEMIMETYPE"===I?(H=Y[L](o("filetype")),r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.FILETYPE(Y,H)):Q.FILETYPE(Y,H)):Q[N](I)&&(r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q[I]):Q[I])):"email"===S?r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.EMAIL):Q.EMAIL:"url"===S?r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.URL):Q.URL:("datetime"===S||"date"===S||"time"===S)&&(H=Y[L](o("format"))||"Y-m-d H:i:s",r.validators[g]=r.validators[N](g)?r.validators[g].AND(Q.DATETIME(H,i&&i.datetime?i.datetime:null)):Q.DATETIME(H,i&&i.datetime?i.datetime:null)),Y[D](o("bind"))||Y[j](o("bind"),M({error:"error",change:"change"}))),F||O?(k=q?C?Q.MIN_FILES(Y,parseInt(Y[L](o("leastrequired")),10)||1):Q.MIN_ITEMS(parseInt(Y[L](o("leastrequired")),10)||1,l):C?Q.MIN_FILES(Y,1):Q.NOT_EMPTY,r.validators[g]=r.validators[N](g)?k.AND(r.validators[g]):k,r.validators[g].REQUIRED=1,F&&Y[x]("required"),Y[D](o("bind"))||Y[j](o("bind"),M({error:"error",change:"change"}))):q||"function"!=typeof r.validators[g]||r.validators[g].REQUIRED||(r.validators[g]=Q.EMPTY.OR(r.validators[g])),h=h.split("."),b=r.data;h.length;)if(E=h.shift(),h.length){if(b[N](E))!d&&_.test(h[0])&&b[E].length<=(n=parseInt(h[0],10))&&(b[E]=b[E].concat(new Array(n-b[E].length+1)));else if(q&&1===h.length){if(p instanceof FileList){b[E]=y;break}b[E]=[]}else b[E]=!d&&_.test(h[0])?new Array(parseInt(h[0],10)+1):{};b=b[E]}else q?b.push(y):b[E]=q||"checkbox"!==S||Y.checked||!U?y:T}}}function v(e,t,r,i){var a,o,n;if(i)if(k(t))if(V.test(i))for(o=0,n=t.length;n>o;o++)r(e,i,t[o]);else for(o=0,n=t.length;n>o;o++)v(e,t[o],r,i+"["+("object"==typeof t[o]?o:"")+"]");else if(t instanceof FileList)for(o=0,n=t.length;n>o;o++)r(e,i,t[o]);else if(t instanceof File||t instanceof Blob)r(e,i,t);else if(t&&"object"==typeof t)for(a in t)t[N](a)&&v(e,t[a],r,i+"["+a+"]");else r(e,i,t);else if(k(t))for(o=0,n=t.length;n>o;o++)r(e,t[o].name,t[o].value);else if(t instanceof FileList)for(o=0,n=t.length;n>o;o++)r(e,i,t[o]);else if(t instanceof File||t instanceof Blob)r(e,i,t);else if(t&&"object"==typeof t)for(a in t)t[N](a)&&v(e,t[a],r,a);return e}function m(e,t,r){"function"==typeof r&&(r=r()),r instanceof FileList||r instanceof File||r instanceof Blob||e.push(F(t)+"="+F(null==r?"":r))}function p(e,t,r){var i=v(t||[],e||{},m);return!0!==r&&(i=i.join("&").split("%20").join("+")),i}function g(e,t,r){if("function"==typeof r&&(r=r()),r instanceof FileList)for(var i=0,a=r.length;a>i;i++)e.append(t,r[i],r[i].name);else r instanceof File?e.append(t,r,r.name):e.append(t,null==r?"":r)}function h(e,t,r){return null==r&&"undefined"!=typeof FormData&&(r=FormData),r&&e instanceof r?e:v(t||new r,e||{},g)}function E(e){return M(e||{})}var b,y,T=Object.create,I="prototype",N="hasOwnProperty",$="toUpperCase",A="toLowerCase",w=Object.keys,S=Object[I].toString,L="getAttribute",j="setAttribute",D="hasAttribute",x="removeAttribute",M=JSON.stringify,F=(JSON.parse,encodeURIComponent),O=function(e){return"[object Object]"===S.call(e)},k=function(e){return"[object Array]"===S.call(e)},R=/^\s+|\s+$/g,C=String[I].trim?function(e){return e.trim()}:function(e){return e.replace(R,"")},_=/^\d+$/,P=/\[([^\]]*)\]/g,V=/\[\s*\]$/,U=/^\.+/g,B=/^\.+|\.+$/g,H=function(e){return e.replace(P,".$1").replace(B,"")},G=function(e){return e.replace(P,".$1").replace(U,"")},Y=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,q=function(e){return e.replace(Y,"\\$&")},z=function(e,t){return new RegExp(e,t||"")},J=r.Type.Cast,Q=r.Validation.Validate,W=r.UUID,X=r.Model;b=function(){var e=this;r.View.apply(e,arguments)},b[I]=T(r.View[I]),b[I].do_change=function(e,r){var i=t(r),a=o("proxy"),n=r[D](a)&&r[L](a);r.validity.valid||r.setCustomValidity(""),i.hasClass("mvform-error")&&i.removeClass("mvform-error"),n&&t(n).removeClass("mvform-error")},b[I].do_error=function(e,r){var i=t(r),a=o("proxy"),n=r[D](a)&&r[L](a);r.validity.valid||r.setCustomValidity(""),i.hasClass("mvform-error")||i.addClass("mvform-error"),n&&t(n).addClass("mvform-error")},y=e.ModelViewForm=function Z(e){var r=this;return r instanceof Z?(r.id=W("mvform"),r.$options=t.extend({submit:!0,upload:!1,ajax:!1,notify:!0,model:!1,livebind:!1,prefixed:!1,locale:{},Model:Z.Model,View:Z.View},e||{}),void r.initPubSub()):new Z(e)},y.VERSION="1.0.0",y.Model=X,y.View=b,y.doSubmit=function(r,i,a){return i=i||"json",!0===a?(r="POST",function(a,o,n){var l=function(e,t){"success"==t?n(!0,e):n(!1,e)};!o instanceof e.FormData&&(o=new e.FormData(o)),t.ajax({type:r,method:r,dataType:i,url:a,data:o||null,processData:!1,contentType:!1,success:l,error:l})}):function(a,o,n){var l=function(e,t){"success"==t?n(!0,e):n(!1,e)},s="undefined"!=typeof e.FormData&&o instanceof e.FormData;t.ajax({type:r,method:r,dataType:i,url:a,data:o||null,processData:!s,contentType:!s,success:l,error:l})}},y.doGET=y.doSubmit("GET","json"),y.doPOST=y.doSubmit("POST","json"),y.doUpload=y.doSubmit("POST","json",!0),y.Attr=o,y.getKey=f,y.getValue=u,y.toModel=c,y.toJSON=E,y.toFormData=h,y.toUrlEncoded=p,y[I]=r.Extend(T(Object[I]),r.PublishSubscribeInterface,{constructor:y,id:null,$form:null,$view:null,$options:null,dispose:function(){var e=this;return e.disposePubSub(),e.$form&&(e.$form.off("submit."+e.id),e.$form.modelview("dispose"),e.$form.removeClass("mvform")),e.$form=null,e.$view=null,e.$options=null,e.id=null,e},trigger:function(e,t,i){var a=this,o=r.PublishSubscribeInterface.trigger;return i=i||0,i>0?setTimeout(function(){o.call(a,e,t)},i):o.call(a,e,t),a},one:function(e,t){return this.on(e,t,!0)},dom:function(e){var r=this;return r.$form=t(e),r._render(),r},tpl:function(e,r){var i=this;return i.$form=t(e.innerHTML).appendTo(r),i._render(),i},serialize:function(){var e=this,t={};return t[e.$view.$model.id]=e.$view.$model.serialize(),t},validate:function(){{var e,t=this;t.$form,t.$options||{}}return t.trigger("before-validate"),e=t.$view.$model.validate(),t.trigger("after-validate",e),e},notify:function(e){var t,r,i=this,a=i.$form,n=o("error");return a&&a.length&&e&&e.length&&(i.$view.$model.notify(e,"error"),t=a.find("["+n+"]"),t.length&&(t.hide(),r=n+'="'+(i.$options.prefixed?i.$view.$model.id+".":""),a.find("["+r+e.join('"],['+r)+'"]').show())),i},_render:function(){var e,t=this,r=t.$options||{},i=r.Model||y.Model,a=r.View||y.View,n=t.$form,l={id:r.model?r.model:(e=n.attr(o("model")))?e:"model",data:{},types:{},validators:{},getters:{},setters:{},dependencies:{}};return n.addClass("mvform").prop("disabled",!1).attr("id",n[0].id||W("mvform")),t.trigger("before-render"),n.find("["+o("error")+"]").hide(),c(n.find("input,textarea,select"),l,r.locale),n.modelview({autoSync:!0,autobind:!0,livebind:!!r.livebind,isomorphic:!1,autovalidate:!1,bindAttribute:o("bind"),events:["change","error","click"],model:l,modelClass:i,viewClass:a}),t.$view=n.modelview("view"),d(n.find("select["+o("ajax-options")+"]"),t),r.submit&&n.on("submit."+t.id,function(e){var r,i,a=t.$options;return e.preventDefault(),e.stopPropagation(),n.find("["+o("error")+"]").hide(),r=t.validate(),r.isValid?a.ajax?(t.trigger("before-send",i=t.serialize()),i&&a.ajax&&(a.upload?y.doUpload(a.ajax,y.toFormData(i),function(e,r){t.trigger("after-send",{success:e,response:r})}):y.doPOST(a.ajax,i,function(e,r){t.trigger("after-send",{success:e,response:r})}))):t.trigger("submit",t.serialize()):a.notify&&t.notify(r.errors),!1}),t.trigger("after-render"),t}})}(window,jQuery,ModelView,"undefined"!=typeof Xpresion?Xpresion:null);
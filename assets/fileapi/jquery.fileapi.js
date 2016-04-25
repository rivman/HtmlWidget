/*! fileapi 2.0.1 - BSD | git://github.com/mailru/FileAPI.git */
(function(e,t){"use strict";var n=e.noop,i=!e.fn.prop,a=i?"attr":"prop",r="data-fileapi",o="data-fileapi-id",s=function(i,a){if(this.$el=i=e(i).on("change.fileapi",e.proxy(this,"_onSelect")),this.el=i[0],this._options={},this.options=a=e.extend({url:0,data:{},accept:0,multiple:!1,paramName:0,dataType:"json",duplicate:!1,chunkSize:0,chunkUploadRetry:3,maxSize:0,maxFiles:0,imageSize:0,sortFn:0,filterFn:0,autoUpload:!1,lang:{B:"bytes",KB:"KB",MB:"MB",GB:"GB",TB:"TB"},sizeFormat:"0.00",imageTransform:0,elements:{ctrl:{upload:'[data-fileapi="ctrl.upload"]',reset:'[data-fileapi="ctrl.reset"]',abort:'[data-fileapi="ctrl.abort"]'},empty:{show:'[data-fileapi="empty.show"]',hide:'[data-fileapi="empty.hide"]'},emptyQueue:{show:'[data-fileapi="emptyQueue.show"]',hide:'[data-fileapi="emptyQueue.hide"]'},active:{show:'[data-fileapi="active.show"]',hide:'[data-fileapi="active.hide"]'},size:'[data-fileapi="size"]',name:'[data-fileapi="name"]',progress:'[data-fileapi="progress"]',file:{tpl:'[data-fileapi="file.tpl"]',progress:'[data-fileapi="file.progress"]',active:{show:'[data-fileapi="active.show"]',hide:'[data-fileapi="active.hide"]'},preview:{el:0,get:0,width:0,height:0,processing:0}},dnd:{el:'[data-fileapi="dnd"]',hover:"dnd_hover"}},onDrop:n,onDropHover:n,onSelect:n,onUpload:n,onProgress:n,onComplete:n,onFileUpload:n,onFileProgress:n,onFileComplete:n},a),!a.url){var o=this.$el.attr("action")||this.$el.find("form").attr("action");o?a.url=o:this._throw("url — is not defined")}this.$files=this.elem("list"),this.itemTplFn=e.fn.fileapi.tpl(e("<div/>").append(this.elem("file.tpl")).html()),t.each(a,function(e,t){this._setOption(t,e)},this),this.$el.on("reset.fileapi",e.proxy(this,"_onReset")).on("submit.fileapi",e.proxy(this,"_onSubmit")).on("upload.fileapi progress.fileapi complete.fileapi",e.proxy(this,"_onUploadEvent")).on("fileupload.fileapi fileprogress.fileapi filecomplete.fileapi",e.proxy(this,"_onFileUploadEvent")).on("click","["+r+"]",e.proxy(this,"_onActionClick"));var s=a.elements.ctrl;s&&(s.reset&&this.$el.on("click.fileapi",s.reset,e.proxy(this,"_onReset")),s.upload&&this.$el.on("click.fileapi",s.upload,e.proxy(this,"_onSubmit"))),this.elem("dnd.el",!0).dnd(e.proxy(this,"_onDropHover"),e.proxy(this,"_onDrop")),this.$progress=this.elem("progress"),this._crop={},this._rotate={},this.files=[],this.uploaded=[],this.clear()};s.prototype={constructor:s,_throw:function(e){throw"jquery.fileapi: "+e},_getFiles:function(e,n){var i=this.options,a=i.maxSize,r=i.filterFn,o=t.getFiles(e),s={all:o,files:[],other:[],duplicate:i.duplicate?[]:this._extractDuplicateFiles(o)},l=i.imageSize,u=this;l||r?t.filterFiles(o,function(e,t){var n=!0;return t&&l&&(n=(!l.minWidth||t.width>=l.minWidth)&&(!l.minHeight||t.height>=l.minHeight)&&(!l.maxWidth||t.height<=l.maxWidth)&&(!l.maxHeight||t.height<=l.maxHeight)),n&&(!a||a>=e.size)&&(!r||r(e,t))},function(e,t){s.files=e,s.other=t,n.call(u,s)}):(t.each(o,function(e){s[!a||a>=e.size?"files":"other"].push(e)}),n.call(u,s))},_extractDuplicateFiles:function(e){for(var t,n=[],i=e.length,a=this.files;i--;)for(t=a.length;t--;)if(this._fileCompare(e[i],a[t])){n.push(e.splice(i,1));break}return n},_fileCompare:function(e,t){return e.size==t.size&&e.name==t.name},_getFormatedSize:function(e){var n=this.options,i="B";return e>=t.TB?e/=t[i="TB"]:e>=t.GB?e/=t[i="GB"]:e>=t.MB?e/=t[i="MB"]:e>=t.KB&&(e/=t[i="KB"]),n.sizeFormat.replace(/^\d+([^\d]+)(\d*)/,function(t,a,r){return e=e.toFixed(r.length),(e+"").replace(".",a)+" "+n.lang[i]})},_onSelect:function(t){this._getFiles(t,e.proxy(function(e){e.all.length&&this.emit("select",e)!==!1&&this.add(e.files)},this))},_onActionClick:function(n){var i=n.currentTarget,a=e.attr(i,r),s=e(i).closest("["+o+"]",this.$el),l=s.attr(o),u=!0;"remove"==a?(s.remove(),this.queue=t.filter(this.queue,function(e){return t.uid(e)!=l}),this.files=t.filter(this.files,function(e){return t.uid(e)!=l}),this._redraw()):/^rotate/.test(a)?this.rotate(l,/ccw/.test(a)?"-=90":"+=90"):u=!1,u&&n.preventDefault()},_onSubmit:function(e){this.upload(),e.preventDefault()},_onReset:function(e){this.clear(),e.preventDefault()},_onDrop:function(e){this._getFiles(e,function(e){this.emit("drop",e)!==!1&&this.add(e.files)})},_onDropHover:function(t,n){if(this.emit("dropHover",{state:t,event:n})!==!1){var i=this.option("elements.dnd.hover");i&&e(n.currentTarget).toggleClass(i,t)}},_getUploadEvent:function(t){var n=this.xhr,i={xhr:n,file:n.currentFile,files:n.files,widget:this};return e.extend(i,t)},_emitUploadEvent:function(e){var t=this._getUploadEvent();this.emit(e+"upload",t)},_emitProgressEvent:function(e,t){var n=this._getUploadEvent(t);this.emit(e+"progress",n)},_emitCompleteEvent:function(t,n){var i=this.xhr,a=this._getUploadEvent({error:n,status:i.status,statusText:i.statusText,result:i.responseText});"json"==this.options.dataType&&(a.result=e.parseJSON(a.result)),this.emit(t+"complete",a)},_onUploadEvent:function(e,t){var n=this,i=this.$progress,a=e.type;if("progress"==a)i.stop().animate({width:100*(t.loaded/t.total)+"%"},300);else if("upload"==a)i.width(0);else{var r=function(){i.dequeue(),n.clear()};this.xhr=null,this.active=!1,i.length?i.queue(r):r()}},_onFileUploadPrepare:function(n,i){var a=t.uid(n),r=this._rotate[a],o=this._crop[a];if(r||o){var s=i.imageTransform=i.imageTransform||{};e.isEmptyObject(s)||parseInt(s.maxWidth||s.minWidth||s.width,10)>0||s.type||s.quality?(s.crop=o,s.rotate=r):t.each(s,function(e){e.crop=o,e.rotate=r})}},_onFileUploadEvent:function(e,n){var i=this,a=e.type.substr(4),o=t.uid(n.file),s=this.fileElem(o),l=this._$fileprogress;if(this.__fileId!==o&&(this.__fileId=o,this._$fileprogress=l=s.find(this.option("elements.file.progress"))),"progress"==a)l.stop().animate({width:100*(n.loaded/n.total)+"%"},300);else if("upload"==a||"complete"==a){var u=function(){var e="elements.file."+a;"upload"==a&&(s.find("["+r+'="remove"]').hide(),l.width(0)),l.dequeue(),s.find(i.option(e+".show")).show(),s.find(i.option(e+".hide")).hide()};l.length?l.queue(u):u(),"complete"==a&&(this.uploaded.push(n.file),delete this._rotate[o])}},_redraw:function(){var n=!!this.active,i=this.files,r=!i.length&&!n,s=!this.queue.length&&!n,l=[],u=0,c=this.$files,f=c.children().length,d=this.option("elements.file.preview");t.each(i,function(n,i){var a=t.uid(n);if(l.push(n.name),u+=n.size,c.length&&!this.fileElem(a).length){var r=this.itemTplFn({$idx:f+i,uid:n.uid,name:n.name,type:n.type,size:n.size,sizeText:this._getFormatedSize(n.size)});c.append(e(r).attr(o,a)),d.el&&this._makeFilePreview(a,n,d)}},this),this.elem("name").text(l.join(", ")),this.elem("size").text(this._getFormatedSize(u)),this.__empty!==r&&(this.__empty=r,this.elem("empty.show").toggle(r),this.elem("empty.hide").toggle(!r)),this.__emptyQueue!==s&&(this.__emptyQueue=r,this.elem("emptyQueue.show").toggle(s),this.elem("emptyQueue.hide").toggle(!s)),this.__active!==n&&(this.__active=n,this.elem("active.show").toggle(n),this.elem("active.hide").toggle(!n),this.$(".js-fileapi-wrapper,:file")[n?"attr":"removeAttr"]("aria-disabled",n)[a]("disabled",n)),this.elem("ctrl.upload").add(this.elem("ctrl.reset"))[r||n?"attr":"removeAttr"]("aria-disabled",r||n)[a]("disabled",r||n)},_makeFilePreview:function(e,n,i,a){var r=this,o=a?r.$(i.el):r.fileElem(e).find(i.el);if(/^image/.test(n.type)){t.log("_makeFilePreview:",e,n);var s=t.Image(n),l=function(){s.get(function(t,a){r._crop[e]||(t?(i.get&&i.get(o,n),r.emit("filePreviewError",{error:t,file:n})):o.html(a))})};i.width&&s.preview(i.width,i.height),i.rotate&&s.rotate(i.rotate),i.processing?i.processing(n,s,l):l()}else i.get&&i.get(o,n)},emit:function(t,n){var i,a=this.options,r=e.Event(t);return r.widget=this,t=e.camelCase("on-"+t.replace(/(file)(upload)/,"$1-$2")),e.isFunction(a[t])&&(i=a[t].call(this.el,r,n)),i!==!1&&this.$el.triggerHandler(r,n)},add:function(e){if(e.length){var n=this.options,i=n.sortFn,a=n.elements.preview;i&&e.sort(i),a&&a.el&&t.each(e,function(e){this._makeFilePreview(t.uid(e),e,a,!0)},this),this.xhr&&this.xhr.append(e),this.queue=this.queue.concat(e),this.files=this.files.concat(e),this.options.autoUpload?this.upload():this._redraw()}},$:function(t,n){return"string"==typeof t&&(t=/^#/.test(t)?t:(n?e(n):this.$el).find(t)),e(t)},elem:function(t,n){var i=this.option("elements."+t);return void 0===i&&n&&(i=this.option("elements."+t.substr(0,t.lastIndexOf(".")))),this.$("string"!=e.type(i)&&e.isEmptyObject(i)?[]:i)},fileElem:function(e){return this.$("["+o+'="'+e+'"]')},option:function(n,i){if(void 0!==i&&e.isPlainObject(i))return t.each(i,function(e,t){this.option(n+"."+t,e)},this),this;var a,r,o=this.options,s=o[n],l=0;if(-1!=n.indexOf("."))for(s=o,n=n.split("."),a=n.length;a>l;l++){if(r=n[l],void 0!==i&&1===a-l){s[r]=i;break}void 0===s[r]&&(s[r]={}),s=s[r]}else void 0!==i&&(o[n]=i);return void 0!==i&&(this._setOption(n,i,this._options[n]),this._options[n]=i),void 0!==i?i:s},_setOption:function(e,t){switch(e){case"accept":case"multiple":case"paramName":"paramName"==e&&(e="name"),t&&this.$(":file")[a](e,t)}},serialize:function(){var t,n={};return this.$el.find(":input").each(function(i,a){(i=a.name)&&!a.disabled&&(a.checked||/select|textarea|input/i.test(a.nodeName)&&/checkbox|radio/i.test(a.type))&&(t=e(a).val(),void 0!==n[i]?(n[i].push||(n[i]=[n[i]]),n[i].push(t)):n[i]=t)}),n},upload:function(){if(!this.active){this.active=!0;var n=this.$el,i=this.options,a={},r={url:i.url,data:e.extend({},this.serialize(),i.data),files:a,chunkSize:0|i.chunkSize,chunkUploadRetry:0|i.chunkUploadRetry,prepare:e.proxy(this,"_onFileUploadPrepare"),imageTransform:i.imageTransform};a[n.find(":file").attr("name")||"files[]"]=this.queue,t.each(["upload","progress","complete"],function(t){r[t]=e.proxy(this,e.camelCase("_emit-"+t+"Event"),""),r["file"+t]=e.proxy(this,e.camelCase("_emit-"+t+"Event"),"file")},this),this.xhr=t.upload(r),this._redraw()}},crop:function(n,i){var a=t.uid(n),r=this.options,o=r.multiple?this.option("elements.file.preview"):r.elements.preview,s=(r.multiple?this.fileElem(a):this.$el).find(o&&o.el);s.length&&t.getInfo(n,e.proxy(function(a,r){if(!a){s.find("div>div").length||s.html(e("<div><div></div></div>").css(o).css("overflow","hidden")),this.__cropFile!==n&&(this.__cropFile=n,t.Image(n).get(function(t,n){s.find(">div>div").html(e(n).width("100%").height("100%"))},"exactFit"));var l=o.width/i.w,u=o.height/i.h;s.find(">div>div").css({width:Math.round(l*r.width),height:Math.round(u*r.height),marginLeft:-Math.round(l*i.x),marginTop:-Math.round(u*i.y)})}},this)),this._crop[a]=i},rotate:function(e,n){var i="object"==typeof e?t.uid(e):e,a=this.options,r=a.multiple?this.option("elements.file.preview"):a.elements.preview,o=(a.multiple?this.fileElem(i):this.$el).find(r&&r.el),s=this._rotate;/([+-])=/.test(n)?n=s[i]=(s[i]||0)+("+"==RegExp.$1?1:-1)*n.substr(2):s[i]=n,o.css({"-webkit-transform":"rotate("+n+"deg)","-moz-transform":"rotate("+n+"deg)",transform:"rotate("+n+"deg)"})},clear:function(){this.queue=[],this._redraw()},widget:function(){return this},destroy:function(){this.$el.off(".fileapi").removeData("fileapi")}},e.fn.fileapi=function(t,n){var i=this.data("fileapi");if(i){if("widget"===t)return i;if("string"==typeof t){var a,r=i[t];return e.isFunction(r)?a=r.call(i,n,arguments[2]):void 0===r&&(a=this.option(t,n)),void 0===a?this:a}}else this.data("fileapi",new s(this,t));return this},e.fn.fileapi.version="0.1.0",e.fn.fileapi.tpl=function(e){var t=0,n="__b+='";return e.replace(/(?:&lt;|<)%([-=])?([\s\S]+?)%(?:&gt;|>)|$/g,function(i,a,r,o){return n+=e.slice(t,o).replace(/[\r\n"']/g,function(e){return"\\"+e}),r&&(n+=a?"'+\n((__x=("+r+"))==null?'':"+("-"==a?"__esc(__x)":"__x")+")\n+'":"';\n"+r+"\n__b+='"),t=o+i.length,i}),Function("ctx","var __x,__b='',__esc=function(val){return typeof val=='string'?val.replace(/</g,'&lt;').replace(/\"/g,'&quot;'):val;};with(ctx||{}){\n"+n+"';\n}return __b;")},e.fn.cropper=function(n){var i=this,a=n.file;return"string"==typeof n?i.Jcrop(n):t.getInfo(a,function(r,o){var s=t.Image(a);n.maxSize&&s.resize(n.maxSize[0],n.maxSize[1],"max"),s.get(function(a,r){n.setSelect=n.setSelect||[0,0,r.width,r.height],t.each(["onSelect","onChange"],function(e,t){(t=n[e])&&(n[e]=function(e){var n=o.width/r.width,i=o.height/r.height;t({x:0|e.x*n+.5,y:0|e.y*i+.5,w:0|e.w*n+.5,h:0|e.h*i+.5})})}),i.css("lineHeight",0).html(e(r).css("margin",0)).trigger("resize").Jcrop("destroy").Jcrop(n)})}),i}})(jQuery,FileAPI);
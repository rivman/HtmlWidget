/**
*  HtmlWidget
*  html widgets used as (template) plugins and/or standalone, for PHP, Node/XPCOM/JS, Python
*
*  @dependencies: FontAwesome, SelectorListener, jQuery
*  @version: 0.8.9
*  https://github.com/foo123/HtmlWidget
*  https://github.com/foo123/components.css
*  https://github.com/foo123/responsive.css
*  https://github.com/foo123/jquery-ui-widgets
*  https://github.com/foo123/modelview-widgets
*  https://github.com/foo123/SelectorListener
*
**/
!function(e,t,a){"use strict";"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(function(e){return a()}):e[t]=a()}(this,"htmlwidget",function(e){"use strict";function t(e,t){var a,n,i,l,o,d,s,r;for("data:"===e.substr(0,5)?(-1<(r=e.indexOf(";base64,"))?(i=e.slice(5,r),e=e.slice(r+8),a=b(e)):(i=e.slice(5,r=e.indexOf(",")),e=e.slice(r+1),a=unescape(e)),null==t&&(t=i)):a=e,d=a.length,n=new Uint8Array(d),o=15&d,l=0;o>l;l++)n[l]=255&a.charCodeAt(l);for(l=o;d>l;l+=16)s=l,n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++),n[s]=255&a.charCodeAt(s++);return new Blob([n],{type:t})}function a(e,t,n,i,l){if(n=n||{},!e||!t)return n;i=!0===i;var o;null!=l?o="-":(l=e.attributes,o="data-"+t+"-");for(var d,s,r,c=o.length,u=0,p=l.length;p>u;u++)d=l[u].name,d.length>c&&o===d.slice(0,c)&&(d=d.slice(c),i&&(d=d.toLowerCase().replace(v,function(e,t,a){return a.toUpperCase()})),-1<(r=d.indexOf("-"))?(s=d.slice(0,r),n[s]=a(e,t,n[s]||{},i,[{name:d.slice(r),value:l[u].value}])):n[d]=l[u].value);return n}function n(e,t,a,i,l){if(a=a||{},!e||!t)return a;i=!0===i,l||(l="data-"+t+"-");for(var o,d,s=Object.keys(e),r=0,c=s.length;c>r;r++)o=s[r],d=e[o],i&&(o=o.replace(y,function(e,t,a){return t+"_"+a.toLowerCase()})),"object"==typeof d?a=n(d,t,a,l+o+"-",i):a[l+o]=d;return a}function i(t,a,n){var i=n&&n[s]?n[s]:null;r.fn[t]=function(n){var l,o="string"==typeof n?n:!1,d=f.call(arguments,1),s=this;return o?this.each(function(){var a,n=r.data(this,t);return"widget"===o?(s=n,!1):"instance"===o?(s=n?n.instance||n:n,!1):n?"dispose"===o||"destroy"===o?("function"==typeof n.dispose?n.dispose():"function"==typeof n.destroy?n.destroy():i&&("function"==typeof i.dispose?i.dispose.call(n):"function"==typeof i.destroy&&i.destroy.call(n)),n=null,r.removeData(this,t),!1):(l=n[o]||i&&i[o],"function"!=typeof l?!1:(a=l.apply(n,d),a!==n&&e!==a?(s=a&&a.jquery?s.pushStack(a.get()):a,!1):void 0)):!1}):(n=n||{},this.each(function(){var e=r.data(this,t);e?(l=e.options||i&&i.options,"function"==typeof l&&l.call(e,n)):(r.data(this,t,e=new a(this,n)),l=e.init||i&&i.init,"function"==typeof l&&l.call(e))})),s}}function l(e,t,a){if("undefined"!=typeof google.maps.Geocoder){geocoder=new google.maps.Geocoder;var n=a?{location:e}:{address:e};geocoder.geocode(n,function(e,a){t(google.maps.GeocoderStatus.OK==a?{location:e[0].geometry.location,address:e[0].formatted_address,address_components:e[0].address_components,partial_match:e[0].partial_match}:null,a,e)})}else t(null)}function o(e,t,a,n,i,o){var d,s,r={map:e,title:n,position:new google.maps.LatLng(t,a)};return d=new google.maps.Marker(r),i&&(s=new google.maps.InfoWindow({content:i}),google.maps.event.addListener(d,"click",function(){s.open(e,d)})),o.address&&l(o.address,function(e){e&&d.setPosition(e.location)}),d}function d(e,t){var a=!1,n=!0,i=e.document,l=i.documentElement,o=i.addEventListener,d=o?"addEventListener":"attachEvent",s=o?"removeEventListener":"detachEvent",r=o?"":"on",c=function(n){"readystatechange"==n.type&&"complete"!=i.readyState||(("load"==n.type?e:i)[s](r+n.type,c,!1),!a&&(a=!0)&&t.call(e,n.type||n))},u=function(){try{l.doScroll("left")}catch(e){return void setTimeout(u,50)}c("poll")};if("complete"==i.readyState)t.call(e,"lazy");else{if(!o&&l.doScroll){try{n=!e.frameElement}catch(p){}n&&u()}i[d](r+"DOMContentLoaded",c,!1),i[d](r+"readystatechange",c,!1),e[d](r+"load",c,!1)}}if("object"==typeof jQuery.htmlwidget)return jQuery.htmlwidget;var s="prototype",r=jQuery,c={VERSION:"0.8.9",widget:{},locale:{},_handle:{}},u="hasOwnProperty",p="getAttribute",m="hasAttribute",g="removeAttribute",f=Array[s].slice,w=(Object[s].toString,JSON.parse),h=JSON.stringify,b=atob,v=(btoa,/(_)([a-z])/g),y=/([a-z])([A-Z])/g,_=function(e){return parseInt(e||0,10)||0},k=function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&"FormData"in window&&"FileReader"in window}();c.dataOptions=a,c.optionsData=n,c.make=i,c.dispatch=function(e,t,a,n){var i;!1===n?(i=r.Event(e),null!=a&&(i.data=a),r(t).trigger(i)):document.createEvent?(i=document.createEvent("HTMLEvents"),i.initEvent(e,!0,!0),i.eventName=e,null!=a&&(i.data=a),t.dispatchEvent(i)):(i=document.createEventObject(),i.eventType=e,i.eventName=e,null!=a&&(i.data=a),t.fireEvent("on"+i.eventType,i))},c.resetFormElements=function(e){if(e.length){var t,a=r('<form style="display:none"></form>').appendTo("body");t=0,r(e).each(function(){var e="__ele_reset_proxy__"+ ++t;r(this).val("").replaceWith('<span id="'+e+'"></span>'),a.append(this)}),a.trigger("reset"),t=0,r(e).each(function(){var e="#__ele_reset_proxy__"+ ++t;r(e).replaceWith(this),r(this).triggerNative("reset")}),a.remove()}return e},r.fn.triggerNative=function(e,t){return this.each(function(){c.dispatch(e,this,t)}),this},r.fn.resetElement=function(){return c.resetFormElements(this),this},i("selectable",c.selectable=function L(e,t){var a=this;return a instanceof L?(a.init=function(){var n=r(e),i=e[p]("data-selectable-handle")||t.handle||".w-selectable-handle",l=t.selector||t.item;n.hasClass("w-selectable")||n.addClass("w-selectable"),n.on("click.selectable change.selectable",i,function(e){var t=this,n=r(this),i=(t.type||"").toLowerCase();"checkbox"===i||"radio"===i?(l&&(n=n.closest(l)),t.checked?(n.addClass("w-selected"),n.triggerNative("selected")):(n.removeClass("w-selected"),n.triggerNative("deselected"))):"click"===e.type&&(e.shiftKey||a.clear(),l&&(n=n.closest(l)),n.hasClass("w-selected")?(n.removeClass("w-selected"),n.triggerNative("deselected")):(n.addClass("w-selected"),n.triggerNative("selected")))})},a.selected=function(){return r(e).find(".w-selected")},a.clear=function(){r(e).find(".w-selected").removeClass("w-selected")},void(a.dispose=function(){r(e).off(".selectable")})):new L(e,t)}),i("removable",c.removable=function z(e,t){var a=this;return a instanceof z?(a.init=function(){var a=r(e),n=e[p]("data-removable-handle")||t.handle||".w-removable-handle",i=e[p]("data-removable-item")||t.selector||t.item,l=parseInt(e[p]("data-removable-animation")||t.animation||400,10);a.hasClass("w-removable")||a.addClass("w-removable"),a.on("click.removable",n,function(){var e=r(this);i&&(e=e.closest(i)),e.fadeOut(l,function(){e.triggerNative("removed"),e.remove()})})},void(a.dispose=function(){r(e).off(".removable")})):new z(e,t)}),i("delayable",c.delayable=function S(e,t){var a=this;return a instanceof S?(a.init=function(){var t=r(e);t.hasClass("w-delayed")||t.addClass("w-undelayed"),t.children(".w-delayable-overlay").length||t.append('<div class="w-delayable-overlay"><div class="w-spinner w-spinner-dots"></div></div>')},a.enable=function(){var t=r(e);t.hasClass("w-delayed")||t.addClass("w-delayed").removeClass("w-undelayed")},void(a.disable=function(){var t=r(e);t.hasClass("w-delayed")&&t.addClass("w-undelayed").removeClass("w-delayed")})):new S(e,t)}),i("disabable",c.disabable=function A(e,t){var a=this;return a instanceof A?(a.init=function(){var t=r(e);t.hasClass("w-disabled")||t.addClass("w-undisabled"),t.children(".w-disabable-overlay").length||t.append('<div class="w-disabable-overlay"></div>')},a.enable=function(){var t=r(e);t.hasClass("w-disabled")||t.addClass("w-disabled").removeClass("w-undisabled")},void(a.disable=function(){var t=r(e);t.hasClass("w-disabled")&&t.addClass("w-undisabled").removeClass("w-disabled")})):new A(e,t)}),i("sortable",c.sortable=function j(e,t){var a=this;return a instanceof j?(a.instance=null,a.init=function(){"function"==typeof Sortable&&(a.instance=Sortable.create(e,{sort:!0,disabled:!1,delay:parseInt(e[p]("data-sortable-delay")||t.delay||0,10),animation:parseInt(e[p]("data-sortable-animation")||t.animation||400,10),draggable:e[p]("data-sortable-item")||t.draggable||t.item||".w-sortable-item",handle:e[p]("data-sortable-handle")||t.handle||".w-sortable-handle"}))},void(a.dispose=function(){a.instance=null})):new j(e,t)}),i("template",c.template=function E(e,t){var a=this;return a instanceof E?(a.instance=null,a.init=function(){"function"==typeof Tao&&(a.instance=Tao(e,e[m]("data-tpl-key")?new RegExp(e[p]("data-tpl-key")):t.key||E.key,!(!e[p]("data-tpl-revivable")&&!t.revivable),e[p]("data-tpl-keyseparator")||t.keySeparator))},a.render=function(t,n){a.instance&&(a.instance(t),!0===n&&r(e).triggerNative("render"))},void(a.dispose=function(){a.instance&&a.instance.dispose(),a.instance=null})):new E(e,t)}),c.template.key=/\$\(([^\(\)]+)\)/,c.Tpl=c.Template=function M(e,t,a,n){return"function"==typeof Tao?Tao(e,t||M.key,a,n):void 0},c.Template.key=/\$\(([^\(\)]+)\)/g,i("suggest",c.suggest=function N(e,t){var a=this;return a instanceof N?(a.instance=null,a.init=function(){if("function"==typeof AutoComplete){var n=e[p]("data-suggest-ajax")||t.ajax||e[p]("data-ajax")||null,i=e[p]("data-suggest-data")||t.dataType||"json",l=e[p]("data-suggest-method")||t.method||"GET",o=e[p]("data-suggest-q")||e[p]("data-suggest-param")||t.q||t.param||"suggest",d=null;a.instance=new AutoComplete(e,{minChars:e[p]("data-suggest-min")||t.minChars||3,key:e[p]("data-suggest-key")||t.key||null,value:e[p]("data-suggest-value")||t.value||null,delay:e[p]("data-suggest-delay")||t.delay||150,cache:e[p]("data-suggest-cache")||3e5,noItems:e[p]("data-suggest-noitems")||t.noItems||"No Matches for <strong>{{term}}</strong>",menuClass:e[p]("data-suggest-class")||t.menuClass||"w-suggestions",source:function(t,a){var s=r(e),c=s.closest(".w-wrapper"),u={method:l,dataType:i,ajax:n,suggest:{}};if(u.suggest[o]=t,s.triggerNative("suggest",u),u.suggestions||u.list)a(u.suggestions||u.list);else if(u.ajax){c.addClass("__ajax__");try{d&&d.abort()}catch(p){}d=r.ajax({url:u.ajax,type:u.method,method:u.method,dataType:u.dataType,data:u.suggest,success:function(e){c.removeClass("__ajax__"),a(e)},error:function(){c.removeClass("__ajax__"),a([])}})}else a([])},onSelect:function(t,a,n,i,l,o){r(e).triggerNative("suggest-select",{q:a,item:n,key:l,value:o}).triggerNative("change")}})}},a.suggestions=function(e){a.instance&&(a.instance.suggestions=e)},void(a.dispose=function(){a.instance&&a.instance.dispose(),a.instance=null})):new N(e,t)}),i("dnd_uploadable",c.dnd_uploadable=function D(e,a){var n=this;return n instanceof D?(n.dispose=function(){var t=r(e);t.off(".dnd_uploadable"),t=null},void(n.init=function(){var n=r(e),i="undefined"!=typeof isMobile?isMobile.any:!1,l=n.find("input._w-dnd-uploader[type=file]"),o=!i&&n.hasClass("__with_thumbnail__"),d=!i&&(o||n.hasClass("__with_preview__")),s=_(l[0][m]("data-dnd-upload-filesize")?l[0][p]("data-dnd-upload-filesize"):a.filesize||1048576)||1048576,c=l[0][m]("data-dnd-upload-mimetype")?l[0][p]("data-dnd-upload-mimetype"):a.mimetype||null,u=_(l[0][m]("data-dnd-upload-preview")?l[0][p]("data-dnd-upload-preview"):a.preview||140)||140,g=function(e){var t=n.find("input._w-dnd-uploader[type=file]");t[0].files_dropped=null,t.resetElement(),!1!==e&&t.triggerNative("change")};c=c&&"string"==typeof c?new RegExp(".?("+c.replace(/\s/g,"").replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g,"\\$&").replace(/,/g,"|").split("/*").join("/.*")+")$","i"):null,n.addClass("__empty__"),n.on("click.dnd_uploadable",".w-dnd-upload-delete",function(e){return g(),setTimeout(function(){n.find(".w-dnd-upload-upload,.w-dnd-upload-delete").blur()},40),!1}).on("reset.dnd_uploadable","input._w-dnd-uploader[type=file]",function(e){var t=e.target;t.files_dropped=null,n.addClass("__empty__").find(".w-dnd-upload-preview,.w-dnd-upload-thumbnail").remove(),setTimeout(function(){n.find(".w-dnd-upload-upload,.w-dnd-upload-delete").blur(),r(t).triggerNative("change")},40)}).on("change.dnd_uploadable","input._w-dnd-uploader[type=file]",function(e){var a,i,l,p=e.target,m=p.files_dropped&&p.files_dropped.length?p.files_dropped:p.files&&p.files.length?p.files:null;if(setTimeout(function(){n.find(".w-dnd-upload-upload,.w-dnd-upload-delete").blur()},40),m&&m.length){for(n.removeClass("__empty__").find(".w-dnd-upload-preview,.w-dnd-upload-thumbnail").remove(),a=0,i=m.length;i>a;a++)if(s>0&&m[a].size>s||c&&!c.test(m[a].type))return void setTimeout(g,10);for(a=0,i=m.length;i>a;a++)(d||o)&&m[a].type.match("image")?!function(e,a){var i=new FileReader;i.addEventListener("load",function(i){var l=i.target.result,s=new Image;s.addEventListener("load",function(){setTimeout(function(){var i,c,m,g,f,w,h=s.width,b=s.height,v=e.name+" ("+e.type+")";if(u>=h?(c=u,i=Math.round(u*h/b)):(i=u,c=Math.round(u*b/h)),m=document.createElement("canvas"),g=m.getContext("2d"),m.width=i,m.height=c,g.drawImage(s,0,0,h,b,0,0,i,c),f=m.toDataURL("image/png"),d&&n.prepend('<img src="'+f+'" data-src-full="'+l+"\" class=\"w-dnd-upload-preview\" onclick=\"window.open(this.getAttribute('data-src-full'),'preview','scrollbars=yes,resizable=yes,width=600,height=400').focus();\" alt=\""+v+'" title="'+v+'" />'),o){if(w='<input type="file" data-alt-value="blob_attached" class="w-dnd-upload-thumbnail" style="display:none !important;"',p.name){var y=p.name.match(/(.*?)(\[([^\[\]]+)\])?(\[\s*\])?$/);w+=y[2]?' name="'+(y[1]+"["+y[3]+"_thumbnail]"+(y[4]?"["+a+"]":""))+'"':' name="'+(y[1]+"_thumbnail"+(y[4]?"["+a+"]":""))+'"'}w+=" />",n.append(w=r(w)),w[0].blob_attached=[t(f)]}},10)}),s.src=l}),i.readAsDataURL(e)}(m[a],a):(l=m[a].name+" ("+m[a].type+")",n.prepend('<span class="w-dnd-upload-preview" title="'+l+'">'+l+"</span>"))}else n.addClass("__empty__").find(".w-dnd-upload-preview,.w-dnd-upload-thumbnail").remove()}),k&&n.addClass("__dnd-upload__").on("drag.dnd_uploadable dragstart.dnd_uploadable dragend.dnd_uploadable dragover.dnd_uploadable dragenter.dnd_uploadable dragleave.dnd_uploadable drop.dnd_uploadable",function(e){e.preventDefault(),e.stopPropagation();var t=" "+e.type.toLowerCase()+" ";if(-1<" dragover dragenter ".indexOf(t)?n.addClass("__dragover__"):-1<" dragleave dragend drop ".indexOf(t)&&n.removeClass("__dragover__")," drop "===t){var a=e.originalEvent.dataTransfer.files,i=n.find("input._w-dnd-uploader[type=file]");a.length&&(i[0].files_dropped=a),i.triggerNative("change")}})})):new D(e,a)}),i("uploadable",c.uploadable=function O(e,t){var a=this;return a instanceof O?(a.dispose=function(){var t=r(e);t.off(".uploadable"),t=null},void(a.init=function(){var a=r(e),n=_(e[m]("data-upload-size")?e[p]("data-upload-size"):t.fileSizeMax||1048576)||1048576,i="image",l=e[m]("data-upload-dimensions")?e[p]("data-upload-dimensions").split("x").map(_):t.dimensions?t.dimensions.map(_):null,o=_(e[m]("data-upload-thumbnail")?e[p]("data-upload-thumbnail"):t.thumbnail||120)||120,d=e[m]("data-upload-size-msg")?e[p]("data-upload-size-msg"):t.maxFileSizeMsg||"File size exceeds maximum size limit!",s=e[m]("data-upload-type-msg")?e[p]("data-upload-type-msg"):t.fileTypeMsg||"File type not allowed!",c=e[m]("data-upload-dimensions-msg")?e[p]("data-upload-dimensions-msg"):t.dimensionsMsg||"File dimensions exceed allowed dimensions!";a.on("click.uploadable",".w-upload-thumbnail",function(e){var t=a.find("._w-data"),n=a[0].upload_data||(t.val()?w(t.val()):null);return n&&n.type.match("image")&&(a[0].upload_data||(a[0].upload_data=n),window.open(n.original?n.original:n.file,"preview_"+a[0].id,"scrollbars=yes,resizable=yes,width="+n.width+",height="+n.height).focus()),!1}).on("click.uploadable",".w-upload-delete",function(e){return a[0].upload_data=null,a.find("input._w-uploader[type=file]")[0].value="",a.find("img").attr("src",""),a.find("._w-data").val("").triggerNative("change"),!1}).on("change.uploadable","input._w-uploader[type=file]",function(e){var t,r=e.target,u=r.files[0]||null;return u?u.type.match(i)?u.size>n?(r.value="",setTimeout(function(){alert(d)},10),!1):(t=new FileReader,t.addEventListener("load",function(e){var t=e.target.result;if("image"==i){var n=new Image;n.addEventListener("load",function(){setTimeout(function(){var e,i,d,s,p,m=n.width,g=n.height;return l&&(m>l[0]||g>l[1])?(r.value="",a.triggerNative("upload-end"),setTimeout(function(){alert(c)},10),!1):(e=o,i=Math.round(o*g/m),d=document.createElement("canvas"),s=d.getContext("2d"),d.width=e,d.height=i,s.drawImage(n,0,0,m,g,0,0,e,i),p=d.toDataURL("image/png"),a[0].upload_data={name:u.name,type:u.type,size:u.size,file:t,thumb:p,width:m,height:g},a.find("img").attr("src",p),a.find("._w-data").val(h(a[0].upload_data)).triggerNative("change"),void a.triggerNative("upload-end"))},10)}),n.src=t}else setTimeout(function(){a[0].upload_data={name:u.name,type:u.type,size:u.size,file:t,thumb:"",width:0,height:0},a.find("img").attr("src",""),a.find("._w-data").val(h(a[0].upload_data)).triggerNative("change"),a.triggerNative("upload-end")},10);r.value=""}),a.triggerNative("upload-start"),void t.readAsDataURL(u)):(r.value="",setTimeout(function(){alert(s)},10),!1):!1})})):new O(e,t)}),i("datetimepicker",c.datetimepicker=function F(e,t){var a=this;return a instanceof F?(a.instance=null,a.init=function(){if("function"==typeof Pikadaytime){var n=e[p]("data-datepicker-format")||t.format||"Y-m-d H:i:s",i=(e[p]("data-datepicker-time")||"").toLowerCase(),l=(e[p]("data-datepicker-seconds")||"").toLowerCase(),o={field:e,showTime:i?"1"===i||"true"===i||"on"===i||"yes"===i:!!t.showTime,showSeconds:l?!("0"===l||"false"===l||"off"===l||"no"===l):!1!==t.showSeconds,encoder:F.encoder(n),decoder:F.decoder(n)};t.i18n&&(o.i18n=t.i18n),a.instance=new Pikadaytime(o)}},void(a.dispose=function(){a.instance&&a.instance.dispose(),a.instance=null})):new F(e,t)}),c.datetimepicker.encoder=function(e,t){return"function"==typeof DateX?(t=t||c.locale.DateX||DateX.defaultLocale,function(a){return DateX.format(a,e,t)}):function(e,t){return t._o.showTime?e.toString():e.toDateString()}},c.datetimepicker.decoder=function(e,t){if("function"==typeof DateX){t=t||c.locale.DateX||DateX.defaultLocale;var a=DateX.getParser(e,t);return function(e){return!!e&&a(e)}}return function(e){return new Date(Date.parse(e))}},i("colorpicker",c.colorpicker=function I(e,t){var a=this;return a instanceof I?(a.instance=null,a.init=function(){"function"==typeof ColorPicker&&(a.instance=new ColorPicker(e,{changeEvent:e[p]("data-colorpicker-change")||t.changeEvent||"change",input:e[m]("data-colorpicker-input")?r(e[p]("data-colorpicker-input"))[0]:t.input?r(t.input)[0]:null,format:e[p]("data-colorpicker-format")||t.format||"rgba",color:e[p]("data-colorpicker-color")||t.color,opacity:e[p]("data-colorpicker-opacity")||t.opacity}))},a.value=a.color=function(e,t){return a.instance?arguments.length?void a.instance.setColor(e,t):a.instance.getColor():void 0},void(a.dispose=function(){a.instance&&a.instance.dispose(),a.instance=null})):new I(e,t)}),i("areaselect",c.areaselect=function P(e,t){var a=this;return a instanceof P?(a.instance=null,a.init=function(){if("function"==typeof AreaSelect){var n=e[m]("data-areaselect-borders")?e[p]("data-areaselect-borders").toLowerCase():null;a.instance=new AreaSelect(e,{className:e[m]("data-areaselect-class")?e[p]("data-areaselect-class"):t.className||null,minWidth:e[m]("data-areaselect-min-width")?e[p]("data-areaselect-min-width"):t.minWidth||null,maxWidth:e[m]("data-areaselect-max-width")?e[p]("data-areaselect-max-width"):t.maxWidth||null,minHeight:e[m]("data-areaselect-min-height")?e[p]("data-areaselect-min-height"):t.minHeight||null,maxHeight:e[m]("data-areaselect-max-height")?e[p]("data-areaselect-max-height"):t.maxHeight||null,ratioXY:e[m]("data-areaselect-ratio-xy")?e[p]("data-areaselect-ratio-xy"):t.ratioXY||null,ratioYX:e[m]("data-areaselect-ratio-yx")?e[p]("data-areaselect-ratio-yx"):t.ratioYX||null,withBorders:n?"1"===n||"yes"===n||"true"===n||"on"===n:t.withBorders,onSelect:function(a,n){t.onSelect&&t.onSelect.call(this,a,n),r(e).triggerNative("areaselect",{selection:n})}})}},a.select=function(e){a.instance&&a.instance.select(e)},a.selection=function(){return a.instance?a.instance.getSelection():null},a.show=function(){a.instance&&a.instance.show()},a.hide=function(){a.instance&&a.instance.hide()},void(a.dispose=function(){a.instance&&a.instance.dispose(),a.instance=null})):new P(e,t)}),i("gmap3",c.gmap3=function W(e,t){function a(){n&&google.maps.event.addListenerOnce(n,"idle",function(){google.maps.event.trigger(n,"resize"),n.setCenter(new google.maps.LatLng(i,l)),d&&d.setPosition(new google.maps.LatLng(i,l))})}var n,i,l,d,s,c=this;return c instanceof W?(n=null,t=r.extend({type:"ROADMAP",markers:null,center:null,address:null,kml:null,responsive:!1},t||{}),c.dispose=function(){s&&r(window).off("resize.gmap3",a),n=null},c.init=function(){if("object"==typeof google&&"object"==typeof google.maps){var u=r(e),g=(e[p]("data-map-address")?e[p]("data-map-address"):null,e[m]("data-map-center")?e[p]("data-map-center").split(","):t.center||[0,0]),f=!!e[m]("data-map-center-marker")||!!t.centerMarker,w=_(e[p]("data-map-zoom")||t.zoom||6),h=e[p]("data-map-type")||t.type||"ROADMAP",b=[];if(i=parseFloat(g[0]||0,10),l=parseFloat(g[1]||0,10),f){var v={lat:i,lng:l,title:e[p]("title"),info:null};b.push(d=v)}u.children(".marker,.map-marker").each(function(){var e=this,t=e[p]("data-marker-position")?e[p]("data-marker-position").split(","):[0,0],a={address:e[p]("data-marker-address")?e[p]("data-marker-address"):null,lat:parseFloat(t[0]||0,10)||0,lng:parseFloat(t[1]||0,10)||0,title:e[p]("title"),info:e.innerHTML,clickable:!!e[p]("data-marker-clickable"),draggable:!!e[p]("data-marker-draggable"),visible:!!e[p]("data-marker-visible")};b.push(a)}),u.empty(),e[p]("data-map-markers")&&r(e[p]("data-map-markers")).each(function(){var e=this,t=e[p]("data-marker-position")?e[p]("data-marker-position").split(","):[0,0],a={address:e[p]("data-marker-address")?e[p]("data-marker-address"):null,lat:parseFloat(t[0]||0,10)||0,lng:parseFloat(t[1]||0,10)||0,title:e[p]("title"),info:e.innerHTML,clickable:!!e[p]("data-marker-clickable"),draggable:!!e[p]("data-marker-draggable"),visible:!!e[p]("data-marker-visible")};b.push(a)});var y,v,k=t.markers?t.markers.length:0;for(y=0;k>y;y++)v=t.markers[y],b.push(v);for(n=new google.maps.Map(e,{zoom:w,center:new google.maps.LatLng(i,l),mapTypeId:google.maps.MapTypeId[h]}),y=0,k=b.length;k>y;y++)v=b[y],d===v?d=o(n,v.lat,v.lng,v.title||"",v.info,v):o(n,v.lat,v.lng,v.title||"",v.info,v);b=null,s=!(!e[p]("data-map-responsive")&&!t.responsive),s&&r(window).on("resize.gmap3",a)}else setTimeout(function(){c.init()},100)},c.map=function(){return n},c.center=function(e){if(!arguments.length)return[i,l];if(n){i=parseFloat(e[0],10),l=parseFloat(e[1],10);var t=new google.maps.LatLng(i,l);n.setCenter(t),d&&d.setPosition(t)}},c.add_marker=function(e){return n&&e?o(n,e.lat,e.lng,e.title||"",e.info||null,e):void 0},c.remove_marker=function(e){e&&e.setMap(null)},c.add_markers=function(e){if(n&&e){for(var t=0;t<e.length;t++){var a=e[t];e[t]=o(n,a.lat,a.lng,a.title||"",a.info,a)}return e}},void(c.remove_markers=function(e){if(e)for(var t=0;t<e.length;t++)e[t].setMap(null)})):new W(e,t)}),c._handleDefault=function(e,t,a,n,i,l){l&&"function"==typeof window[l]?(n&&n(t,a),new window[l](t,a),i&&i(t,a)):"function"==typeof r.fn[e]&&(n&&n(t,a),r(t)[e](a),i&&i(t,a))},c._handle.datetimepicker=function(e,t,a,n,i){n&&n(t,a),a.i18n||!c.locale.Pikadaytime&&!c.locale.Pikaday||(a.i18n=c.locale.Pikadaytime||c.locale.Pikaday),r(t).datetimepicker(a),i&&i(t,a)},c._handle.rangeslider=function(e,t,a,n,i){"function"==typeof r.fn.rangeslider&&(n&&n(t,a),r(t).rangeslider({polyfill:!1,orientation:t[p]("data-range-orientation")||a.orientation||"horizontal"}),i&&i(t,a))},c._handle.menu=function(e,t,a,n,i){n&&n(t,a),r(t).find("li").each(function(){var e=r(this);e.children("ul").length&&e.addClass("w-submenu-item")}),i&&i(t,a)},c._handle.dropdown=function(e,t,a,n,i){var l=r(t);if(l.is("select")&&!l.parent().hasClass("w-dropdown")){n&&n(t,a),l.hasClass("w-widget")&&l.removeClass("w-widget"),l.hasClass("w-select")&&l.removeClass("w-select");var o="w-widget w-dropdown "+(t.className||""),d=l.attr("style")||"";l.attr("class","w-dropdown-select").attr("style","").wrap('<span class="'+o+'" style="'+d+'"></span>'),i&&i(t,a)}},c._handle.select2=function(e,t,a,n,i){if("function"==typeof r.fn.select2){n&&n(t,a);var l=r(t);l.select2(a),t[m]("w-tooltip")?l.prev(".select2-container").attr("w-tooltip",t[p]("w-tooltip")):t[m]("data-tooltip")?l.prev(".select2-container").attr("data-tooltip",t[p]("data-tooltip")):t[m]("title")&&l.prev(".select2-container").attr("title",t[p]("title")),i&&i(t,a)}},c._handle.datatable=function(e,t,a,n,i){if("function"==typeof r.fn.dataTable){n&&n(t,a);var l=r(t);!a.language&&c.locale.DataTables&&(a.language=c.locale.DataTables),l.dataTable(a);var o=l.closest(".dataTables_wrapper");if(t[m]("data-table-buttons")&&(new r.fn.dataTable.Buttons(l.DataTable(),{buttons:t[p]("data-table-buttons").split(",")}),o.find(".w-table-controls").eq(0).append(l.DataTable().buttons().container())),t[m]("data-table-controls"))o.find(".w-table-controls").eq(0).append(r(t[p]("data-table-controls")));else if(a.controls)if(a.controls.concat){var d,s,u=o.find(".w-table-controls").eq(0);for(d=0,s=a.controls.length;s>d;d++)u.append(r(a.controls[d]))}else o.find(".w-table-controls").eq(0).append(r(a.controls));o.addClass("w-table-wrapper");var g=(o.find(".dataTables_length select").htmlwidget("dropdown"),o.find(".dataTables_filter input").addClass("w-widget w-text")),f=g.closest("label").text();f&&g.attr("placeholder",f).attr("title",f),i&&i(t,a)}},c._handle.tinymce=function(e,t,a,n,i){if("undefined"!=typeof tinymce){n&&n(t,a);var l=null,o=null;c.locale.tinymce&&("object"!=typeof c.locale.tinymce.lang||a.i18n?"string"==typeof c.locale.tinymce.lang&&(l=c.locale.tinymce.lang):a.i18n=c.locale.tinymce.lang,null!=c.locale.tinymce.uri&&(o=c.locale.tinymce.uri)),a.i18n&&(l="custom_locale",o=null,tinymce.util.I18n.add("custom_locale",a.i18n));var d=parseInt(t[m]("data-tinymce-delayedinit")?t[p]("data-tinymce-delayedinit"):a.delayedInit||0,10),s=t[m]("data-tinymce-plugins")?t[p]("data-tinymce-plugins").split(","):a.plugins||["advlist autolink lists link image charmap preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","paste textcolor colorpicker textpattern imagetools placeholderalt"],r=t[m]("data-tinymce-toolbar")?t[p]("data-tinymce-toolbar").split(","):a.toolbar||["undo redo | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image code preview"],g=t[m]("data-tinymce-menubar")?t[p]("data-tinymce-menubar"):a.menubar||"file edit insert view format table tools";t[m]("data-tinymce-plugins-extra")?s=s.concat(t[p]("data-tinymce-plugins-extra").split(",")):a.plugins_extra&&(s=s.concat(a.plugins_extra)),t[m]("data-tinymce-toolbar-extra")?r=r.concat(t[p]("data-tinymce-toolbar-extra").split(",")):a.toolbar_extra&&(r=r.concat(a.toolbar_extra));var f=null;t[m]("data-tinymce-external-plugins")?f=w(t[p]("data-tinymce-external-plugins")):"object"==typeof a.external_plugins&&(f=a.external_plugins);var h={selector:"#"+t.id,theme:t[m]("data-tinymce-theme")?t[p]("data-tinymce-theme"):a.theme||"modern",skin:t[m]("data-tinymce-skin")?t[p]("data-tinymce-skin"):a.skin||"lightgray",directionality:t[m]("data-tinymce-dir")?t[p]("data-tinymce-dir"):a.directionality||"ltr",height:parseInt(t[m]("data-tinymce-height")?t[p]("data-tinymce-height"):a.height||500,10),plugins:s,toolbar:r,menubar:g,placeholder:t[m]("placeholder")?t[p]("placeholder"):a.placeholder||"",automatic_uploads:null!=a.automatic_uploads?a.automatic_uploads:!0,image_advtab:null!=a.image_advtab?a.image_advtab:!0,paste_data_images:null!=a.paste_data_images?a.paste_data_images:!0,browser_spellcheck:null!=a.browser_spellcheck?a.browser_spellcheck:!0,templates:null!=a.templates?a.templates:[],body_class:t[m]("data-tinymce-body-class")?t[p]("data-tinymce-body-class"):a.body_class||null,content_css:t[m]("data-tinymce-content-css")?t[p]("data-tinymce-content-css"):a.content_css||null,content_style:t[m]("data-tinymce-content-style")?t[p]("data-tinymce-content-style"):a.content_style||null};if(t[m]("data-tinymce-lang")?h.language=t[p]("data-tinymce-lang"):a.language?h.language=a.language:l&&(h.language=l),t[m]("data-tinymce-languri")?h.language_url=t[p]("data-tinymce-languri"):a.language_url?h.language_url=a.language_url:o&&(h.language_url=o),"object"==typeof a.options_extra)for(var b in a.options_extra)h[b]=a.options_extra[b];if("object"==typeof f)for(var v in f)f[u](v)&&tinymce.PluginManager.load(v,f[v]);var y=t[m]("data-tinymce-autosave")?t[p]("data-tinymce-autosave").toLowerCase():!!a.autosave;!0===y||"1"===y||"on"===y||"yes"===y||"true"===y?h.setup=function(e){e.on("init",function(){i&&i(t,a)}),e.on("change",function(){e.save(),c.dispatch("change",t)})}:i&&(h.setup=function(e){e.on("init",function(){i(t,a)})});var _=tinymce.get(t.id);_&&_.remove(),d>0?setTimeout(function(){tinymce.init(h)},d):tinymce.init(h)}},c._handle.syntax=function(e,t,a,n,i){if(r(t).hasClass("w-ace-editor")){if("undefined"==typeof ace)return;n&&n(t,a);var l=ace.edit(t[p]("data-ace-editor")),o=l.getSession();(t[m]("data-ace-theme")||a.theme)&&l.setTheme("ace/theme/"+(t[m]("data-ace-theme")?t[p]("data-ace-theme"):a.theme)),o.setMode("ace/mode/"+(t[m]("data-ace-mode")?t[p]("data-ace-mode"):a.mode||"html")),o.setTabSize(parseInt(t[m]("data-ace-indent")?t[p]("data-ace-indent"):a.indentUnit||4,10)),o.setUseWrapMode(null!=a.lineWrapping?!!a.lineWrapping:!1),l.setReadOnly(!!t.readOnly),l.setShowFoldWidgets(null!=a.foldGutter?!!a.foldGutter:!0),l.setValue(t.value,-1),i&&i(t,a)}else{if("function"!=typeof CodeMirror)return;n&&n(t,a),CodeMirror.fromTextArea(t,{mode:t[m]("data-cm-mode")?t[p]("data-cm-mode"):a.mode||"text/html",theme:t[m]("data-cm-theme")?t[p]("data-cm-theme"):a.theme||"default",readOnly:!!t.readOnly,lineWrapping:null!=a.lineWrapping?a.lineWrapping:!1,lineNumbers:null!=a.lineNumbers?a.lineNumbers:!0,indentUnit:parseInt(t[m]("data-cm-indent")?t[p]("data-cm-indent"):a.indentUnit||4,10),indentWithTabs:null!=a.indentWithTabs?a.indentWithTabs:!1,lint:null!=a.lint?a.lint:!1,foldGutter:null!=a.foldGutter?a.foldGutter:!0,gutters:null!=a.gutters?a.gutters:["CodeMirror-lint-markers","CodeMirror-linenumbers","CodeMirror-foldgutter"]}),i&&i(t,a)}},c._handle.c3=function(e,t,a,n,i){if("undefined"!=typeof c3){n&&n(t,a);c3.generate(a);i&&i(t,a)}},c._handle.vextab=function(e,t,a,n,i){if("undefined"!=typeof Vex&&"undefined"!=typeof Vex.Flow){n&&n(t,a);new Vex.Flow.TabDiv(t);i&&i(t,a)}},r.fn.htmlwidget=function(e,t){var a;if(t=t||{},c.widget[u](e)&&"function"==typeof c.widget[e])a=c.widget[e],this.each(function(){var n,i=this,l=null,o=null;n=i[m]("w-opts")&&"object"==typeof window[i[p]("w-opts")]?window[i[p]("w-opts")]:t,n["w-pre-init"]&&"function"==typeof window[n["w-pre-init"]]&&(l=window[n["w-pre-init"]]),n["w-post-init"]&&"function"==typeof window[n["w-post-init"]]&&(o=window[n["w-post-init"]]),a(e,i,n,l,o)});else{var n=null;switch(e){case"dnd-upload":case"dnd_upload":case"dnd-uploadable":e="dnd_uploadable";break;case"upload":e="uploadable";break;case"rearrangeable":e="sortable";break;case"templateable":e="template";break;case"date":case"datetime":case"datepicker":e="datetimepicker";break;case"color":case"colorselector":e="colorpicker";break;case"areaselectable":e="areaselect";break;case"map":case"gmap":case"gmap3":e="gmap3";break;case"autocomplete":case"autosuggest":case"suggest":e="suggest";break;case"range":e="rangeslider";break;case"select":e="select2";break;case"table":e="datatable";break;case"tageditor":case"tag-editor":e="tagEditor";break;case"wysiwyg-editor":e="tinymce";break;case"syntax-editor":e="syntax";break;case"graph":case"chart":e="c3";break;case"tab":case"tablature":case"vextab":e="vextab";break;case"packery":n="Packery";break;case"masonry":n="Masonry";break;case"isotope":n="Isotope"}a=c._handle[u](e)?c._handle[e]:c._handleDefault,
this.each(function(){var i,l=this,o=null,d=null;i=l[m]("w-opts")&&"object"==typeof window[l[p]("w-opts")]?window[l[p]("w-opts")]:t,"object"==typeof i["options_"+e]&&(i=i["options_"+e]),i["w-pre-init"]&&"function"==typeof window[i["w-pre-init"]]&&(o=window[i["w-pre-init"]]),i["w-post-init"]&&"function"==typeof window[i["w-post-init"]]&&(d=window[i["w-post-init"]]),a(e,l,i,o,d,n)})}return this},c.init=function(e,t,a){var n=r(e);!0===a&&(n.find("input[type=range].w-rangeslider").htmlwidget("range"),n.find(".w-dnd-upload").htmlwidget("dnd-upload"),n.find(".w-upload").htmlwidget("upload"),n.find(".w-suggest").htmlwidget("suggest"),n.find(".w-timer").htmlwidget("timer"),n.find(".w-date").htmlwidget("datetimepicker"),n.find(".w-color,.w-colorselector").htmlwidget("colorpicker"),n.find(".w-map").htmlwidget("map"),n.find(".w-select2").htmlwidget("select2"),n.find(".w-datatable").htmlwidget("datatable"),n.find(".w-syntax-editor.w-codemirror-editor,.w-syntax-editor.w-ace-editor").htmlwidget("syntax-editor"),n.find(".w-wysiwyg-editor").htmlwidget("wysiwyg-editor"),n.find(".w-chart").htmlwidget("chart")),!1!==t&&(n.is("input[type=range]")?n.htmlwidget("range"):n.hasClass("w-dnd-upload")?n.htmlwidget("dnd-upload"):n.hasClass("w-upload")?n.htmlwidget("upload"):n.hasClass("w-suggest")?n.htmlwidget("suggest"):n.hasClass("w-timer")?n.htmlwidget("timer"):n.hasClass("w-date")?n.htmlwidget("datetimepicker"):n.hasClass("w-color")||n.hasClass("w-colorselector")?n.htmlwidget("colorpicker"):n.hasClass("w-map")?n.htmlwidget("map"):n.hasClass("w-select2")?n.htmlwidget("select2"):n.hasClass("w-datatable")?n.htmlwidget("datatable"):n.hasClass("w-syntax-editor w-codemirror-editor")||n.hasClass("w-syntax-editor w-ace-editor")?n.htmlwidget("syntax-editor"):n.hasClass("w-wysiwyg-editor")?n.htmlwidget("wysiwyg-editor"):n.hasClass("w-chart")&&n.htmlwidget("chart"))},c.initialisable=function(e,t){t=t||window;var a=e[p]("w-init")||"",n=a.toLowerCase();"1"!==n&&"true"!==n&&"on"!==n&&"yes"!==n||(a="__htmlwidget_init__"),a&&"function"==typeof t[a]&&(e[g]("w-init"),t[a](e))},c.widgetize=function(e){var t=r(e);(t.hasClass("w-dropdown-menu")||t.hasClass("w-vertical-menu"))&&t.htmlwidget("menu"),t.hasClass("w-selectable")&&t.htmlwidget("selectable"),t.hasClass("w-removable")&&t.htmlwidget("removable"),t.hasClass("w-delayable")&&t.htmlwidget("delayable"),t.hasClass("w-disabable")&&t.htmlwidget("disabable"),t.hasClass("w-draggable")&&t.htmlwidget("draggable"),(t.hasClass("w-resizable")||t.hasClass("w-resisable"))&&t.htmlwidget("resizable"),(t.hasClass("w-sortable")||t.hasClass("w-rearrangeable"))&&t.htmlwidget("sortable"),t.hasClass("w-templateable")&&t.htmlwidget("template"),t.hasClass("w-areaselectable")&&t.htmlwidget("areaselect"),t.hasClass("w-vextab")&&t.htmlwidget("vextab")},c.tooltip=function(e){var t=r(e),a="",n=t.hasClass("tooltipstered");n?t.tooltipster("content",e[m]("w-tooltip")?e[p]("w-tooltip"):e[m]("data-tooltip")?'<i class="fa fa-info-circle"></i>&nbsp;&nbsp;'+e[p]("data-tooltip"):e[m]("title")?'<i class="fa fa-info-circle"></i>&nbsp;&nbsp;'+e[p]("title"):"").tooltipster("show"):(a=e[m]("w-tooltip")?e[p]("w-tooltip"):e[m]("data-tooltip")?e[p]("data-tooltip"):e[m]("title")?e[p]("title"):"",a.length?t.tooltipster({onlyOne:!0,autoClose:!0,contentAsHTML:!0,content:'<i class="fa fa-info-circle"></i>&nbsp;&nbsp;'+a,position:t.hasClass("tooltip-bottom")?"bottom":t.hasClass("tooltip-right")?"right":t.hasClass("tooltip-left")?"left":"top"}).tooltipster("show"):e[m]("title")&&e[g]("title"))},window.__htmlwidget_init__=function(e){c.init(e)};var C=!1,x=!1,T=[];return c.domReady=function(e){C||(C=!0,d(window,function(e){x=!0;for(var t=T;t.length;)t.shift()()})),x?setTimeout(e,10):T.push(e)},r(function(){"undefined"!=typeof SelectorListener&&SelectorListener.jquery(r),"undefined"!=typeof ModelView&&ModelView.jquery(r);var e=r(document.body),t=function(){c.initialisable(this)},a=function(){c.widgetize(this)},n=function(){c.tooltip(this)};e.find("[w-init]").each(t),e.find(".w-dropdown-menu,.w-vertical-menu,.w-templateable,.w-rearrangeable,.w-resizeable,.w-resiseable,.w-selectable,.w-removable,.w-delayable,.w-disabable,.w-sortable,.w-draggable,.w-areaselectable").each(a),"function"==typeof r.fn.onSelector&&e.onSelector("[w-init]::added",t).onSelector(".w-dropdown-menu::added,.w-vertical-menu::added,.w-templateable::added,.w-rearrangeable::added,.w-resizeable::added,.w-resiseable::added,.w-selectable::added,.w-removable::added,.w-delayable::added,.w-disabable::added,.w-sortable::added,.w-draggable::added,.w-areaselectable::added,.w-vextab::added",a).onSelector(":class-added(.w-dropdown-menu),:class-added(.w-vertical-menu),:class-added(.w-templateable),:class-added(.w-rearrangeable),:class-added(.w-resizeable),:class-added(.w-resiseable),:class-added(.w-selectable),:class-added(.w-removable),:class-added(.w-delayable),:class-added(.w-disabable),:class-added(.w-sortable),:class-added(.w-draggable),:class-added(.w-areaselectable),:class-added(.w-vextab)",a),"function"==typeof r.fn.tooltipster&&e.on("mouseenter.htmlwidget touchstart.htmlwidget","[w-tooltip],[data-tooltip],[title]",n),"function"==typeof r.fn.popr2&&e.popr2({selector:".w-popr",attribute:"data-popr",activate:"click"}),e.on("change.htmlwidget","input[type=file].w-file-input",function(){this.nextSibling.value=this.value}).on("click.htmlwidget","input[type=file].w-file-input+input.w-file",function(){return r(this.previousSibling).trigger("click"),!1}).on("click.htmlwidget","[href].w-open-window",function(e){e.preventDefault();var t=this,a=t.href,n=t[m]("data-window-options")?t[p]("data-window-options"):"resizable=yes,width=400,height=400";return setTimeout(function(){window.open(a,t.id||"new_win",n)},10),!1})}),r.htmlwidget=c});
!function(t){"use strict";t.ajaxPrefilter(function(t){return t.iframe?(t.originalURL=t.url,"iframe"):void 0}),t.ajaxTransport("iframe",function(e,a){function n(){d.each(function(e,a){var n=t(a);n.data("clone").replaceWith(n)}),i.remove(),o.one("load",function(){o.remove()}),o.attr("src","javascript:false;")}var i=null,o=null,r="iframe-"+t.now(),d=t(e.files).filter(":file:enabled"),l=null,u=null;return e.dataTypes.shift(),e.data=a.data,d.length?(i=t("<form enctype='multipart/form-data' method='post'></form>").hide().attr({action:e.originalURL,target:r}),"string"==typeof e.data&&e.data.length>0&&t.error("data must not be serialized"),t.each(e.data||{},function(e,a){t.isPlainObject(a)&&(e=a.name,a=a.value),t("<input type='hidden' />").attr({name:e,value:a}).appendTo(i)}),t("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(i),u=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+("*"!==e.dataTypes[0]?", */*; q=0.01":""):e.accepts["*"],t("<input type='hidden' name='X-HTTP-Accept'>").attr("value",u).appendTo(i),l=d.after(function(){var e=t(this),a=e.clone().prop("disabled",!0);return e.data("clone",a),a}).next(),d.appendTo(i),{send:function(e,a){o=t("<iframe src='javascript:false;' name='"+r+"' id='"+r+"' style='display:none'></iframe>"),o.one("load",function(){o.one("load",function(){var t=this.contentWindow?this.contentWindow.document:this.contentDocument?this.contentDocument:this.document,e=t.documentElement?t.documentElement:t.body,i=e.getElementsByTagName("textarea")[0],o=i&&i.getAttribute("data-type")||null,r=i&&i.getAttribute("data-status")||200,d=i&&i.getAttribute("data-statusText")||"OK",l={html:e.innerHTML,text:o?i.value:e?e.textContent||e.innerText:null};n(),a(r,d,l,o?"Content-Type: "+o:null)}),i[0].submit()}),t("body").append(i,o)},abort:function(){null!==o&&(o.unbind("load").attr("src","javascript:false;"),n())}}):void 0})}(jQuery);
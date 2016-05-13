/**
*  RT
*  unified client-side real-time communication using (xhr) polling / bosh / (web)sockets for Node/XPCOM/JS
*  RT BOSH Client
*
*  @version: 1.0.1
*  https://github.com/foo123/RT
*
**/
!function(e,n){"use strict";"undefined"!=typeof Components&&"object"==typeof Components.classes&&"object"==typeof Components.classesByID&&Components.utils&&"function"==typeof Components.utils["import"]?n(e.RT):"object"==typeof exports?n(require("./RT.js")):n(e.RT)&&"function"==typeof define&&define.amd&&define(function(){return e.RT})}(this,function(e){"use strict";var n="prototype",t=(Object[n].toString,e.Client[n]),$=e.Util,r=e.XHR;return e.Client.BOSH=function o(e){var n=this;return n instanceof o?(t.constructor.call(n,e),n.$cfg$.timeout=n.$cfg$.timeout||5e3,n.$send$=null,n.$recv$=null,n.$queue$=[],void(n.$mID$=0)):new o(e)},e.Client.Impl.bosh=e.Client.Impl["long-poll"]=e.Client.BOSH,e.Client.BOSH[n]=Object.create(t),e.Client.BOSH[n].constructor=e.Client.BOSH,e.Client.BOSH[n].$send$=null,e.Client.BOSH[n].$recv$=null,e.Client.BOSH[n].$queue$=null,e.Client.BOSH[n].$mID$=null,e.Client.BOSH[n].dispose=function(){var e=this;return e.$recv$&&(e.$recv$.abort().dispose(),e.$recv$=null),e.$send$&&(e.$send$.abort().dispose(),e.$send$=null),e.$queue$=null,e.$mID$=null,t.dispose.call(e)},e.Client.BOSH[n].abort=function(e){var n=this;return n.$recv$&&(n.$recv$.abort().dispose(),n.$recv$=null),n.$send$&&(n.$send$.abort().dispose(),n.$send$=null),t.abort.call(n,!0===e)},e.Client.BOSH[n].send=function(n){var t=this,o=function s(){var n="urlencoded"===t.$cfg$.contentType,o="xml"===t.$cfg$.contentType,i=t.$cfg$.charset?"charset="+String(t.$cfg$.charset):"charset=utf8",c=o?"text/xml":n?"application/x-www-form-urlencoded":"text/plain",l={Connection:"Keep-Alive","Content-Type":c+"; "+i,"X-RT--BOSH":"1","X-RT--Receive":"1","X-RT--mID":t.$mID$},u=t.$queue$.slice(),p=null,d=null;o?(l["X-RT--Send"]="1",d=u.join("")):n?(l["X-RT--Send"]="x-rt--payload",l["X-RT--Message"]=p=e.UUID("------_rt_msg_","_------"),d="x-rt--payload="+$.Url.encode(u.join(p))):(l["X-RT--Send"]="1",l["X-RT--Message"]=p=e.UUID("------_rt_msg_","_------"),d=u.join(p)),t.$send$=r.create({url:t.$cfg$.endpoint+(-1<t.$cfg$.endpoint.indexOf("?")?"&":"?")+"__nocache__="+(new Date).getTime(),timeout:t.$cfg$.timeout,method:"POST",responseType:"text",headers:l,onError:function(e){t.$send$=null,e===t.$recv$&&(t.$recv$=null),t.emit("error",e.statusText)},onTimeout:function(e){t.$send$=null,e===t.$recv$&&(t.$recv$=null),t.$queue$.length?setTimeout(s,100):t.$recv$||setTimeout(function(){t.$receive$()},100)},onComplete:function(e){var n=e.getResponseHeader("X-RT--Message"),$=e.getResponseHeader("X-RT--mID"),r=e.getResponseHeader("X-RT--Close"),o=e.getResponseHeader("X-RT--Error");if(t.$send$=null,e===t.$recv$&&(t.$recv$=null),o)return t.emit("error",o);if(r)return t.close();if($&&(t.$mID$=$),t.$queue$.splice(0,u.length),n){var i,c,l=(e.responseText||"").split(n);for(i=0,c=l.length;c>i;i++)t.emit("receive",l[i])}else e.responseText&&t.emit("receive",e.responseText);t.$queue$.length?setTimeout(s,100):t.$recv$||setTimeout(function(){t.$receive$()},100)}},d)};return t.$queue$.push(String(n)),t.$send$||setTimeout(o,0),t},e.Client.BOSH[n].$receive$=function(){var e=this;if(!e.$recv$){var n="urlencoded"===e.$cfg$.contentType,t="xml"===e.$cfg$.contentType,$=e.$cfg$.charset?"charset="+String(e.$cfg$.charset):"charset=utf8",o=t?"text/xml":n?"application/x-www-form-urlencoded":"text/plain",s={Connection:"Keep-Alive","Content-Type":o+"; "+$,"X-RT--BOSH":"1","X-RT--Receive":"1","X-RT--mID":e.$mID$};e.$recv$=r.create({url:e.$cfg$.endpoint+(-1<e.$cfg$.endpoint.indexOf("?")?"&":"?")+"__nocache__="+(new Date).getTime(),timeout:e.$cfg$.timeout,method:"POST",responseType:"text",headers:s,onError:function(n){e.$send$?(e.$recv$=e.$send$,e.$send$=null):e.$recv$=null,e.emit("error",n.statusText)},onTimeout:function(n){e.$send$?(e.$recv$=e.$send$,e.$send$=null):e.$recv$=null,e.$recv$||setTimeout(function(){e.$receive$()},100)},onComplete:function(n){var t=n.getResponseHeader("X-RT--Message"),$=n.getResponseHeader("X-RT--mID"),r=n.getResponseHeader("X-RT--Close"),o=n.getResponseHeader("X-RT--Error");if(e.$send$?(e.$recv$=e.$send$,e.$send$=null):e.$recv$=null,o)return e.emit("error",o);if(r)return e.close();if($&&(e.$mID$=$),t){var s,i,c=(n.responseText||"").split(t);for(s=0,i=c.length;i>s;s++)e.emit("receive",c[s])}else n.responseText&&e.emit("receive",n.responseText);e.$recv$||setTimeout(function(){e.$receive$()},100)}},null)}},e.Client.BOSH[n].listen=function(){var e=this;return setTimeout(function(){e.$receive$()},10),e.open()},e});
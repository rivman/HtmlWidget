/**
*  RT
*  unified client-side real-time communication using (xhr) polling / bosh / (web)sockets for Node/XPCOM/JS
*  RT WebSocket Client (w/ websocket shim)
*
*  @version: 1.0.1
*  https://github.com/foo123/RT
*
**/
!function(t,e){"use strict";"undefined"!=typeof Components&&"object"==typeof Components.classes&&"object"==typeof Components.classesByID&&Components.utils&&"function"==typeof Components.utils["import"]?e(t.RT):"object"==typeof exports?e(require("./RT.js")):e(t.RT)&&"function"==typeof define&&define.amd&&define(function(){return t.RT})}(this,function(t){"use strict";function e(t){var e,n,s=document.getElementsByTagName("scripts"),o=s[s.length-1].src.split("/").slice(0,-1).join("/"),i=document.getElementsByTagName("head")[0];window.swfobject||(e=document.createElement("script"),e.setAttribute("type","text/javascript"),e.setAttribute("language","javascript"),e.setAttribute("src",o+"/lib/ws/swfobject.js"),i.appendChild(e)),window.WEB_SOCKET_SWF_LOCATION=o+"/lib/ws/WebSocketMain.swf",window.WEB_SOCKET_FORCE_FLASH=!1,window.WEB_SOCKET_DEBUG=!1,n=document.createElement("script"),n.setAttribute("type","text/javascript"),n.setAttribute("language","javascript"),n.onload=n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onload=n.onreadystatechange=null,t&&t())},n.setAttribute("src",o+"/lib/ws/ws.js"),i.appendChild(n)}var n="prototype",s=(Object[n].toString,t.Client[n]),o=(t.Util,t.Platform.XPCOM||t.Platform.Node?null:window.WebSocket||window.MozWebSocket||window.WebkitWebSocket);if(t.Platform.XPCOM){var i=Components.classes,a=Components.interfaces,r=Components.utils,c=Components.results;r["import"]("resource://gre/modules/Services.jsm"),o=function(t,e){var n=this;e=n._e={},n.readyState=o.CONNECTING,n._ws=i["@mozilla.org/network/protocol;1?name=wss"].createInstance(a.nsIWebSocketChannel),n._ws.initLoadInfo(null,Services.scriptSecurityManager.getSystemPrincipal(),null,a.nsILoadInfo.SEC_ALLOW_CROSS_ORIGIN_DATA_IS_NULL,a.nsIContentPolicy.TYPE_WEBSOCKET),"string"==typeof e&&(e=[e]),e&&(n._ws.protocol=e.join("; ")),n._ws.asyncOpen(Services.io.newURI(t,null,null),null,0,n,null)},o.CONNECTING=0,o.OPEN=1,o.CLOSING=2,o.CLOSED=3,o.prototype={constructor:o,readyState:0,_ws:null,_e:null,addEventListener:function(t,e){this._e[t]=e},removeEventListener:function(t,e){!this._e[t]||null!=e&&e!==this._e[t]||delete this._e[t]},dispatchEvent:function(t,e){this._e[t]&&this._e[t]({event:t,data:e,target:this})},onStart:function(){var t=this;o.CONNECTING===t.readyState&&(t.readyState=o.OPEN,t.dispatchEvent("open"))},onStop:function(t,e){var n=this;o.CLOSING!==n.readyState&&o.OPEN!==n.readyState||(n.readyState=o.CLOSED,n.dispatchEvent(c.NS_OK===e||n._ws.CLOSE_NORMAL===e?"close":"error",{status:e}))},onServerClose:function(t,e,n){var s=this;o.OPEN===s.readyState&&(s.readyState=o.CLOSED,s.dispatchEvent("close",{status:e,statusTxt:n}))},onMessageAvailable:function(t,e){var n=this;o.OPEN===n.readyState&&n.dispatchEvent("message",e)},onBinaryMessageAvailable:function(t,e){var n=this;o.OPEN===n.readyState&&n.dispatchEvent("message",e)},send:function(t){var e=this;if(o.OPEN===e.readyState){try{e._ws.sendMsg(t)}catch(n){return!1}return!0}return!1},close:function(){var t=this;if(o.CLOSING!==t.readyState&&o.CLOSED!==t.readyState){t.readyState=o.CLOSING;try{t._ws.close(t._ws.CLOSE_NORMAL),t.readyState=o.CLOSED}catch(e){t.readyState=o.CLOSED}}}}}else t.Platform.Node?o=require("ws"):o||e(function(){o=window.WebSocket});return t.Client.WS=function l(t){var e=this;return e instanceof l?(s.constructor.call(e,t),void(e.$ws$=null)):new l(t)},t.Client.Impl.ws=t.Client.Impl.websocket=t.Client.Impl["web-socket"]=t.Client.WS,t.Client.WS[n]=Object.create(s),t.Client.WS[n].constructor=t.Client.WS,t.Client.WS[n].$ws$=null,t.Client.WS[n].dispose=function(){var t=this;return t.$ws$=null,s.dispose.call(t)},t.Client.WS[n].abort=function(){var t=this,e=t.$ws$;return e&&o.OPEN===e.readyState&&(e.close(),s.abort.call(t,!0)),t.$ws$=null,t},t.Client.WS[n].close=function(t){var e=this,n=e.$ws$;return n&&o.OPEN===n.readyState&&n.close(),s.close.call(e,t),e},t.Client.WS[n].send=function(t){var e=this,n=e.$ws$;return n&&o.OPEN===n.readyState&&n.send(String(t)),e},t.Client.WS[n].listen=function(){var e,n=this;return o||t.Platform.XPCOM||t.Platform.Node?(e=n.$ws$=new o(n.$cfg$.endpoint),e.addEventListener("open",function(t){n.open(t)}),e.addEventListener("close",function(t){n.close(t)}),e.addEventListener("error",function(t){n.emit("error",t)}),e.addEventListener("message",function(t){n.emit("receive",t.data)}),n):(setTimeout(function(){n.listen()},100),n)},t});
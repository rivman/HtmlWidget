/**
 * Replace jQuery's $.fn.ready() function with a mod exec
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @note    Should be placed directly after jQuery on the page
 */
 // https://gist.github.com/miguel-perez/476046a42d229251fec3
!function(n){"use strict";window.addOriginalEventListener=window.addEventListener,window.loadList=[],window.addEventListener=function(n,t,e){"load"===n&&window.loadList.push(t),window.addOriginalEventListener(n,t,e)},window.triggerLoad=function(n){if("function"==typeof window.onload){var t=window.onload;window.onload=null;try{t()}catch(e){throw e}}for(var d=0;d<window.loadList.length;d++)try{window.loadList[d]()}catch(e){throw e}!1!==n&&(window.loadList.length=0)},document.addOriginalEventListener=document.addEventListener,document.readyList=[],document.addEventListener=function(n,t,e){"DOMContentLoaded"===n&&document.readyList.push(t),document.addOriginalEventListener(n,t,e)},document.triggerReady=function(n){for(var t=0;t<document.readyList.length;t++)try{document.readyList[t]()}catch(e){throw e}!1!==n&&(document.readyList.length=0)},n.readyFn={list:[],register:function(t){n.readyFn.list.push(t)},execute:function(t,e){t=t||document;for(var d=0;d<n.readyFn.list.length;d++)try{n.readyFn.list[d].call(t,n)}catch(i){throw i}!1!==e&&(n.readyFn.list.length=0)},clear:function(){n.readyFn.list.length=0}},n.fn.jqReady=n.fn.ready,n.fn.ready=function(t){return n.readyFn.register(t),this},n(document).jqReady(function(){n.readyFn.execute(this,!0)})}(jQuery);
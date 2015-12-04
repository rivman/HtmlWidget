/**
* Pikadaytime
* https://github.com/foo123/Pikadaytime
* @version 2.0.0
*
* adapted from: 
* Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday, https://github.com/owenmead/Pikaday
**/
!function(e,t,n){"use strict";"object"==typeof exports?module.exports=n():"function"==typeof define&&define.amd?define(function(){return n()}):e[t]=n()}(this,"Pikadaytime",function(){"use strict";var e=!!window.addEventListener,t=window.document,n=window.setTimeout,a=function(t,n,a,o){e?t.addEventListener(n,a,!!o):t.attachEvent("on"+n,a)},o=function(t,n,a,o){e?t.removeEventListener(n,a,!!o):t.detachEvent("on"+n,a)},i=function(e,n,a){var o;t.createEvent?(o=t.createEvent("HTMLEvents"),o.initEvent(n,!0,!1),o=v(o,a),e.dispatchEvent(o)):t.createEventObject&&(o=t.createEventObject(),o=v(o,a),e.fireEvent("on"+n,o))},r=/^\s+|\s+$/g,s=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(r,"")},l=function(e,t){return e.classList?e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")},d=function(e,t){l(e,t)||(e.classList?e.classList.add(t):e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){e.classList?e.classList.remove(t):e.className=s((" "+e.className+" ").replace(" "+t+" "," "))},c=function(e){return null!=e&&"[object Array]"===toString.call(e)},f=function(e){return null!=e&&"[object Date]"===toString.call(e)&&!isNaN(e.getTime())},h=function(e){return 0===e%4&&0!==e%100||0===e%400},p=function(e,t){return[31,h(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},m=function(e,t){t?e.setMilliseconds(0):e.setHours(0,0,0,0)},g=function(e,t){return t._o.showTime?e.toString():e.toDateString()},_=function(e){return new Date(Date.parse(e))},v=function(e,t,n){var a,o;for(a in t)o=void 0!==e[a],o&&"object"==typeof t[a]&&void 0===t[a].nodeName?f(t[a])?n&&(e[a]=new Date(t[a].getTime())):c(t[a])?n&&(e[a]=t[a].slice(0)):e[a]=v({},t[a],n):(n||!o)&&(e[a]=t[a]);return e},y=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},D={field:null,bound:void 0,position:"bottom left",format:"Y-m-d H:i:s",defaultDate:null,setDefaultDate:!1,firstDay:0,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,numberOfMonths:1,showTime:!0,showSeconds:!0,mainCalendar:"left",container:void 0,i18n:{AM:"am",PM:"pm",previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},onSelect:null,onOpen:null,onClose:null,onDraw:null,encoder:!1,decoder:!1},w=function(e,t,n){return t+=e.firstDay,t>=7&&(t%=7),n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},b=function(e,t,n,a,o,i,r){if(r)return'<td class="is-empty"></td>';var s=[];return i&&s.push("is-disabled"),o&&s.push("is-today"),a&&s.push("is-selected"),'<td data-day="'+e+'" class="'+s.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+n+'" data-pika-month="'+t+'" data-pika-day="'+e+'">'+e+"</button></td>"},k=function(e,t,n){var a=new Date(n,0,1),o=Math.ceil(((new Date(n,t,e)-a)/864e5+a.getDay()+1)/7);return'<td class="pika-week">'+o+"</td>"},M=function(e,t){return"<tr>"+(t?e.reverse():e).join("")+"</tr>"},T=function(e){return"<tbody>"+e.join("")+"</tbody>"},x=function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;7>t;t++)n.push('<th scope="col"><abbr title="'+w(e,t)+'">'+w(e,t,!0)+"</abbr></th>");return"<thead>"+(e.isRTL?n.reverse():n).join("")+"</thead>"},S=function(e,t,n,a,o){var i,r,s,l,d,u=e._o,f=n===u.minYear,h=n===u.maxYear,p='<div class="pika-title">',m=!0,g=!0;for(s=[],i=0;12>i;i++)s.push('<option value="'+(n===o?i-t:12+i-t)+'"'+(i===a?" selected":"")+(f&&i<u.minMonth||h&&i>u.maxMonth?"disabled":"")+">"+u.i18n.months[i]+"</option>");for(l='<div class="pika-label">'+u.i18n.months[a]+'<select class="pika-select pika-select-month">'+s.join("")+"</select></div>",c(u.yearRange)?(i=u.yearRange[0],r=u.yearRange[1]+1):(i=n-u.yearRange,r=1+n+u.yearRange),s=[];r>i&&i<=u.maxYear;i++)i>=u.minYear&&s.push('<option value="'+i+'"'+(i===n?" selected":"")+">"+i+"</option>");return d='<div class="pika-label">'+n+u.yearSuffix+'<select class="pika-select pika-select-year">'+s.join("")+"</select></div>",p+=u.showMonthAfterYear?d+l:l+d,f&&(0===a||u.minMonth>=a)&&(m=!1),h&&(11===a||u.maxMonth<=a)&&(g=!1),0===t&&(p+='<button class="pika-prev'+(m?"":" is-disabled")+'" type="button">'+u.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(p+='<button class="pika-next'+(g?"":" is-disabled")+'" type="button">'+u.i18n.nextMonth+"</button>"),p+="</div>"},N=function(e,t){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+x(e)+T(t)+"</table>"},C=function(e,t,n,a){for(var o='<td><select class="pika-select '+n+'">',i=0;e>i;i++)o+='<option value="'+i+'" '+(i==t?"selected":"")+">"+a(i)+"</option>";return o+="</select></td>"},I=function(e){return(10>e?"0":"")+e},R=function(e,t,n,a){var o='<table cellpadding="0" cellspacing="0" class="pika-time"><tbody><tr>'+C(24,e,"pika-select-hour",!1!==a.hour24?I:function(e){return e%12+" "+(12>e?a.i18n.AM:a.i18n.PM)})+'<td><span class="pika-time-sep">:</span></td>'+C(60,t,"pika-select-minute",I)+'<td><span class="pika-time-sep">:</span></td>'+C(60,n,"pika-select-second",I)+"</tr></tbody></table>";return o},j=function(o){o=o||{};var i=this,r=i.config(o);i._t_update=!1,i._onMouseDown=function(e){if(i._v){e=e||window.event;var t=e.target||e.srcElement;if(t){if(!l(t,"is-disabled")){if(l(t,"pika-button")&&!l(t,"is-empty")){var a=new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"),r.showTime?i.el.querySelector(".pika-select-hour").selectedIndex:0,r.showTime?i.el.querySelector(".pika-select-minute").selectedIndex:0,r.showTime?i.el.querySelector(".pika-select-second").selectedIndex:0,0);return i.setDate(a),void(r.bound&&n(function(){i.hide(),r.field&&r.field.blur()},100))}l(t,"pika-prev")?i.prevMonth():l(t,"pika-next")&&i.nextMonth()}if(l(t,"pika-select"))i._c=!0;else{if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}}},i._onChange=function(e){e=e||window.event;var t=e.target||e.srcElement;t&&(l(t,"pika-select-month")?i.gotoMonth(t.value):l(t,"pika-select-year")?i.gotoYear(t.value):l(t,"pika-select-hour")?i.setTime(t.value):l(t,"pika-select-minute")?i.setTime(null,t.value):l(t,"pika-select-second")&&i.setTime(null,null,t.value))},i._onInputChange=function(e){var t;e.firedBy!==i&&(t=r.decoder(r.field.value,i),i.setDate(t),i._v||i.show())},i._onInputFocus=function(){i.show()},i._onInputClick=function(){i.show()},i._onInputBlur=function(){i._c||(i._b=n(function(){i.hide()},50)),i._c=!1},i._onClick=function(t){t=t||window.event;var n=t.target||t.srcElement,o=n;if(n){!e&&l(n,"pika-select")&&(n.onchange||(n.setAttribute("onchange","return;"),a(n,"change",i._onChange)));do if(l(o,"pika-single")||r.showTime&&l(o,"pika-time-container"))return;while(o=o.parentNode);i._v&&n!==r.trigger&&i.hide()}},i.el=t.createElement("div"),i.el.className="pika-single"+(r.isRTL?" is-rtl":""),a(i.el,"mousedown",i._onMouseDown,!0),a(i.el,"change",i._onChange),r.field&&(r.container?r.container.appendChild(i.el):r.bound?t.body.appendChild(i.el):r.field.parentNode.insertBefore(i.el,r.field.nextSibling),a(r.field,"change",i._onInputChange),r.defaultDate||(r.defaultDate=r.decoder(r.field.value,i),r.setDefaultDate=!0));var s=r.defaultDate;f(s)?r.setDefaultDate?i.setDate(s,!0):i.gotoDate(s):i.gotoDate(new Date),r.bound?(i.hide(),i.el.className+=" is-bound",a(r.trigger,"click",i._onInputClick),a(r.trigger,"focus",i._onInputFocus),a(r.trigger,"blur",i._onInputBlur)):i.show()};return j.VERSION="2.0.0",j.prototype={constructor:j,config:function(e){var t=this;t._o||(t._o=v({},D,!0));var n=v(t._o,e,!0);n.encoder&&"function"==typeof n.encoder||(n.encoder=g),n.decoder&&"function"==typeof n.decoder||(n.decoder=_),n.isRTL=!!n.isRTL,n.showTime=!!n.showTime,n.field=n.field&&n.field.nodeName?n.field:null,n.bound=!!(void 0!==n.bound?n.field&&n.bound:n.field),n.trigger=n.trigger&&n.trigger.nodeName?n.trigger:n.field;var a=parseInt(n.numberOfMonths||0,10)||1;if(n.numberOfMonths=a>4?4:a,f(n.minDate)||(n.minDate=!1),f(n.maxDate)||(n.maxDate=!1),n.minDate&&n.maxDate&&n.maxDate<n.minDate&&(n.maxDate=n.minDate=!1),n.minDate&&t.setMinDate(n.minDate),n.maxDate&&t.setMaxDate(n.maxDate),c(n.yearRange)){var o=(new Date).getFullYear()-10;n.yearRange[0]=parseInt(n.yearRange[0],10)||o,n.yearRange[1]=parseInt(n.yearRange[1],10)||o}else n.yearRange=Math.abs(parseInt(n.yearRange,10))||D.yearRange,n.yearRange>100&&(n.yearRange=100);return n},toString:function(){return f(this._d)?this._o.encoder(this._d,this):""},getDate:function(){return f(this._d)?new Date(this._d.getTime()):null},setTime:function(e,t,n){var a,o,i=this,r=i._o.showTime;i._t_update=!0,i._d?(a=i._d,null!=e&&(e=parseInt(e,10)||0,a.setHours(e),r&&(o=i.el.querySelector(".pika-select-hour"))&&(o.options[e].selected=!0)),null!=t&&(t=parseInt(t,10)||0,a.setMinutes(t),r&&(o=i.el.querySelector(".pika-select-minute"))&&(o.options[t].selected=!0)),null!=n&&(n=parseInt(n,10)||0,a.setSeconds(n),r&&(o=i.el.querySelector(".pika-select-second"))&&(o.options[n].selected=!0))):(a=new Date,a.setHours(null!=e?parseInt(e,10)||0:0,null!=t?parseInt(t,10)||0:0,null!=n?parseInt(n,10)||0:0,0),i.setDate(a))},setDate:function(e,t){var n=this;if("string"==typeof e&&(e=n._o.decoder(e,n)),f(e)||(e=null),n._t_update=!1,!e)return n._d=null,n._o.field&&(n._o.field.value="",i(n._o.field,"change",{firedBy:n})),n.draw();var a=n._o.minDate,o=n._o.maxDate;f(a)&&a>e?e=a:f(o)&&e>o&&(e=o),n._d=new Date(e.getTime()),m(n._d,n._o.showTime),n.gotoDate(n._d),n._o.field&&(n._o.field.value=n.toString(),i(n._o.field,"change",{firedBy:n})),t||"function"!=typeof n._o.onSelect||n._o.onSelect.call(n,n.getDate())},gotoDate:function(e){var t=this,n=!0;if(f(e)){if(e=new Date(e.getTime()),m(e),t.calendars){var a=new Date(t.calendars[0].year,t.calendars[0].month,1),o=new Date(t.calendars[t.calendars.length-1].year,t.calendars[t.calendars.length-1].month,1),i=e.getTime();o.setMonth(o.getMonth()+1),o.setDate(o.getDate()-1),n=i<a.getTime()||o.getTime()<i}n&&(t.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===t._o.mainCalendar&&(t.calendars[0].month+=1-t._o.numberOfMonths)),t.adjustCalendars()}},adjustCalendars:function(){var e=this;e.calendars[0]=y(e.calendars[0]);for(var t=1;t<e._o.numberOfMonths;t++)e.calendars[t]=y({month:e.calendars[0].month+t,year:e.calendars[0].year});e.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){var t=this;f(e)&&(m(e,t._o.showTime),t._o.minDate=e,t._o.minYear=e.getFullYear(),t._o.minMonth=e.getMonth())},setMaxDate:function(e){var t=this;f(e)&&(m(e,t._o.showTime),t._o.maxDate=e,t._o.maxYear=e.getFullYear(),t._o.maxMonth=e.getMonth())},draw:function(e){var t=this;if(t._v||e){var a=t._o,o=a.minYear,i=a.maxYear,r=a.minMonth,s=a.maxMonth,l=!!t._d,d="";t._y<=o&&(t._y=o,!isNaN(r)&&t._m<r&&(t._m=r)),t._y>=i&&(t._y=i,!isNaN(s)&&t._m>s&&(t._m=s));for(var u=0;u<a.numberOfMonths;u++)d+='<div class="pika-lendar">'+S(t,u,t.calendars[u].year,t.calendars[u].month,t.calendars[0].year)+t.render(t.calendars[u].year,t.calendars[u].month)+"</div>";a.showTime&&(d+='<div class="pika-time-container">'+R(l?t._d.getHours():0,l?t._d.getMinutes():0,l?t._d.getSeconds():0,a)+"</div>"),t.el.innerHTML=d,a.bound&&"hidden"!==a.field.type&&n(function(){a.trigger.focus()},1),"function"==typeof t._o.onDraw&&n(function(){t._o.onDraw.call(t)},0)}},adjustPosition:function(){var e=this;if(!e._o.container){var n,a,o,i=e._o.trigger,r=i,s=e.el.offsetWidth,l=e.el.offsetHeight,d=window.innerWidth||t.documentElement.clientWidth,u=window.innerHeight||t.documentElement.clientHeight,c=window.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop;if("function"==typeof i.getBoundingClientRect)o=i.getBoundingClientRect(),n=o.left+window.pageXOffset,a=o.bottom+window.pageYOffset;else for(n=r.offsetLeft,a=r.offsetTop+r.offsetHeight;r=r.offsetParent;)n+=r.offsetLeft,a+=r.offsetTop;(n+s>d||e._o.position.indexOf("right")>-1&&n-s+i.offsetWidth>0)&&(n=n-s+i.offsetWidth),(a+l>u+c||e._o.position.indexOf("top")>-1&&a-l-i.offsetHeight>0)&&(a=a-l-i.offsetHeight),e.el.style.cssText=["position: absolute","left: "+n+"px","top: "+a+"px"].join(";")}},render:function(e,t){var n=this,a=n._o,o=(!a.showTime,f(n._d)),i=o?new Date(n._d.getTime()):null,r=new Date,s=p(e,t),l=new Date(e,t,1).getDay(),d=[],u=[];m(r),o&&m(i),a.firstDay>0&&(l-=a.firstDay,0>l&&(l+=7));for(var c=s+l,h=c;h>7;)h-=7;c+=7-h;for(var g=0,_=0;c>g;g++){var v=new Date(e,t,1+(g-l)),y=a.minDate&&v<a.minDate||a.maxDate&&v>a.maxDate,D=o?v.getTime()===i.getTime():!1,w=v.getTime()===r.getTime(),T=l>g||g>=s+l;u.push(b(1+(g-l),t,e,D,w,y,T)),7===++_&&(a.showWeekNumber&&u.unshift(k(g-l,t,e)),d.push(M(u,a.isRTL)),u=[],_=0)}return N(a,d)},isVisible:function(){return this._v},show:function(){var e=this;e._v||(u(e.el,"is-hidden"),e._v=!0,e.draw(),e._o.bound&&(a(t,"click",e._onClick),e.adjustPosition()),"function"==typeof this._o.onOpen&&e._o.onOpen.call(e))},hide:function(){var e=this,n=e._v;!1!==n&&(e._o.bound&&o(t,"click",e._onClick),e.el.style.cssText="",d(e.el,"is-hidden"),e._v=!1,e._t_update&&(e._t_update=!1,e._o.field&&(e._o.field.value=e.toString(),i(e._o.field,"change",{firedBy:e})),"function"==typeof e._o.onSelect&&e._o.onSelect.call(e,e.getDate())),void 0!==n&&"function"==typeof e._o.onClose&&e._o.onClose.call(e))},dispose:function(){var e=this;e.hide(),o(e.el,"mousedown",e._onMouseDown,!0),o(e.el,"change",e._onChange),e._o.field&&(o(e._o.field,"change",e._onInputChange),e._o.bound&&(o(e._o.trigger,"click",e._onInputClick),o(e._o.trigger,"focus",e._onInputFocus),o(e._o.trigger,"blur",e._onInputBlur))),e.el.parentNode&&e.el.parentNode.removeChild(e.el)}},j});
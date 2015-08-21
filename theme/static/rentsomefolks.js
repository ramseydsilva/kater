/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

//     Backbone.js 1.2.1

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone',['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch(e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = [].slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.1';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Underscore methods to a Backbone class' prototype using a
  // particular attribute as the data argument
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], iteratee, context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], iteratee, defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`), reducing them by manipulating `memo`.
  // Passes a normalized single event name and callback, as well as any
  // optional `opts`.
  var eventsApi = function(iteratee, memo, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        memo = iteratee(memo, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        memo = iteratee(memo, names[i], callback, opts);
      }
    } else {
      memo = iteratee(memo, name, callback, opts);
    }
    return memo;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // An internal use `on` function, used to guard the `listening` argument from
  // the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to.
  Events.listenTo =  function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off =  function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening =  function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    // No events to consider.
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, it will be removed. When multiple events are
  // passed in using the space-separated syntax, the event will fire once for every
  // event you passed in, not once for a combination of all events
  Events.once =  function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce =  function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger =  function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.defaults({validate: true}, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      var removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : models.slice();
      var id, model, attrs, existing, sort;
      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;
      var orderChanged = false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (var i = 0; i < models.length; i++) {
        attrs = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(attrs)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge && attrs !== existing) {
            attrs = this._isModel(attrs) ? attrs.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (!model) continue;
        id = this.modelId(model.attributes);
        if (order && (model.isNew() || !modelMap[id])) {
          order.push(model);

          // Check to see if this is actually a new model at this index.
          orderChanged = orderChanged || !this.models[i] || model.cid !== this.models[i].cid;
        }

        modelMap[id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (var i = 0; i < this.length; i++) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || orderChanged) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (var i = 0; i < toAdd.length; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (var i = 0; i < orderedModels.length; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        var addOpts = at != null ? _.clone(options) : options;
        for (var i = 0; i < toAdd.length; i++) {
          if (at != null) addOpts.index = at + i;
          (model = toAdd[i]).trigger('add', model, this, addOpts);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      var matches = _.matches(attrs);
      return this[first ? 'find' : 'filter'](function(model) {
        return matches(model.attributes);
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    // Returns removed models, or false if nothing is removed.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed.length ? removed : false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 2,
      contains: 2, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3 };

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    if (!_[method]) return;
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window;
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

define('models/skill',[
    "backbone"
], function(Backbone) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function(options) {
            this.category = app.collections["category"].findWhere({id: this.attributes.parent});
            this.category.skills.push(this);
        }

    });

});

define('collections/skill',[
    "backbone",
    "../models/skill"
], function (Backbone, SkillModel) {
    "use strict";
    
    return Backbone.Collection.extend({
        model: SkillModel,
        url: '/api/skills'
    });

});
define('models/category',[
    "backbone",
    "../collections/skill"
], function(Backbone, SkillCollection) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function() {
            this.skills = [];
        }

    });

});

define('collections/category',[
    "backbone",
    "../models/category"
], function (Backbone, CategoryModel) {
    "use strict";
    return Backbone.Collection.extend({
        model: CategoryModel,
        url: '/api/categories'
    });

});

define('models/city',[
    "backbone"
], function(Backbone) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function() {
        }

    });

});

define('collections/city',[
    "backbone",
    "../models/city"
], function (Backbone, CityModel) {
    "use strict";
    return Backbone.Collection.extend({
        model: CityModel,
        url: '/api/cities'
    });

});

define('models/user',[
    "backbone"
], function(Backbone) {
    "use strict";
    
    return Backbone.Model.extend({

        initialize: function() {

        }

    });

});

/*!
 * jQuery Browser Plugin 0.0.7
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 19-05-2015
 */
/*global window: false */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('browser',['jquery'], function($) {
      factory($);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node-like environment
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function(jQuery) {
  "use strict";

  function uaMatch( ua ) {
    // If an UA is not provided, default to the current browser UA.
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    // IE12 disguises itself as Chrome, but adds a new Edge token.
    if ( browser.rv || browser.edge ) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }

  // Run the matching process, also assign the function to the returned object
  // for manual, jQuery-free use if desired
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;

  // Only assign to jQuery.browser if jQuery is loaded
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
}));
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

define("bootstrap", function(){});

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-touch-shiv-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return w("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransitions=function(){return G("transition")};for(var H in q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
define("modernizr", function(){});

//
// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction would be not to publish any  
// extension for browsers or native application
// without getting a permission first.
//

// People involved
//  - Balazs Galambosi (maintainer)   
//  - Michael Herf     (Pulse Algorithm)

(function($) {
    $.extend({
        webkitSmoothScroll: function(){
              
            // Scroll Variables (tweakable)
            var defaultOptions = {

                // Scrolling Core
                frameRate        : 120, // [Hz]
                animationTime    : 600, // [px]
                stepSize         : 135, // [px]

                // Pulse (less tweakable)
                // ratio of "tail" to "acceleration"
                pulseAlgorithm   : true,
                pulseScale       : 7,
                pulseNormalize   : 1,

                // Acceleration
                accelerationDelta : 20,  // 20
                accelerationMax   : 1,   // 1

                // Keyboard Settings
                keyboardSupport   : true,  // option
                arrowScroll       : 50,     // [px]

                // Other
                touchpadSupport   : true,
                fixedBackground   : true, 
                excluded          : ""    
            };

            var options = defaultOptions;


            // Other Variables
            var isExcluded = false;
            var isFrame = false;
            var direction = { x: 0, y: 0 };
            var initDone  = false;
            var root = document.documentElement;
            var activeElement;
            var observer;
            var deltaBuffer = [ 120, 120, 120 ];

            var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
                        pageup: 33, pagedown: 34, end: 35, home: 36 };


            /***********************************************
             * SETTINGS
             ***********************************************/

            var options = defaultOptions;


            /***********************************************
             * INITIALIZE
             ***********************************************/

            /**
             * Tests if smooth scrolling is allowed. Shuts down everything if not.
             */
            function initTest() {

                var disableKeyboard = false; 
                
                // disable keyboard support if anything above requested it
                if (disableKeyboard) {
                    removeEvent("keydown", keydown);
                }

                if (options.keyboardSupport && !disableKeyboard) {
                    addEvent("keydown", keydown);
                }
            }

            /**
             * Sets up scrolls array, determines if frames are involved.
             */
            function init() {
              
                if (!document.body) return;

                var body = document.body;
                var html = document.documentElement;
                var windowHeight = window.innerHeight; 
                var scrollHeight = body.scrollHeight;
                
                // check compat mode for root element
                root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
                activeElement = body;
                
                initTest();
                initDone = true;

                // Checks if this script is running in a frame
                if (top != self) {
                    isFrame = true;
                }

                /**
                 * This fixes a bug where the areas left and right to 
                 * the content does not trigger the onmousewheel event
                 * on some pages. e.g.: html, body { height: 100% }
                 */
                else if (scrollHeight > windowHeight &&
                        (body.offsetHeight <= windowHeight || 
                         html.offsetHeight <= windowHeight)) {

                    // DOMChange (throttle): fix height
                    var pending = false;
                    var refresh = function () {
                        if (!pending && html.scrollHeight != document.height) {
                            pending = true; // add a new pending action
                            setTimeout(function () {
                                html.style.height = document.height + 'px';
                                pending = false;
                            }, 500); // act rarely to stay fast
                        }
                    };
                    html.style.height = 'auto';
                    setTimeout(refresh, 10);

                    // clearfix
                    if (root.offsetHeight <= windowHeight) {
                        var underlay = document.createElement("div"); 	
                        underlay.style.clear = "both";
                        body.appendChild(underlay);
                    }
                }

                // disable fixed background
                if (!options.fixedBackground && !isExcluded) {
                    body.style.backgroundAttachment = "scroll";
                    html.style.backgroundAttachment = "scroll";
                }
            }


            /************************************************
             * SCROLLING 
             ************************************************/
             
            var que = [];
            var pending = false;
            var lastScroll = +new Date;

            /**
             * Pushes scroll actions to the scrolling queue.
             */
            function scrollArray(elem, left, top, delay) {
                
                delay || (delay = 1000);
                directionCheck(left, top);

                if (options.accelerationMax != 1) {
                    var now = +new Date;
                    var elapsed = now - lastScroll;
                    if (elapsed < options.accelerationDelta) {
                        var factor = (1 + (30 / elapsed)) / 2;
                        if (factor > 1) {
                            factor = Math.min(factor, options.accelerationMax);
                            left *= factor;
                            top  *= factor;
                        }
                    }
                    lastScroll = +new Date;
                }          
                
                // push a scroll command
                que.push({
                    x: left, 
                    y: top, 
                    lastX: (left < 0) ? 0.99 : -0.99,
                    lastY: (top  < 0) ? 0.99 : -0.99, 
                    start: +new Date
                });
                    
                // don't act if there's a pending queue
                if (pending) {
                    return;
                }  

                var scrollWindow = (elem === document.body);
                
                var step = function (time) {
                    
                    var now = +new Date;
                    var scrollX = 0;
                    var scrollY = 0; 
                
                    for (var i = 0; i < que.length; i++) {
                        
                        var item = que[i];
                        var elapsed  = now - item.start;
                        var finished = (elapsed >= options.animationTime);
                        
                        // scroll position: [0, 1]
                        var position = (finished) ? 1 : elapsed / options.animationTime;
                        
                        // easing [optional]
                        if (options.pulseAlgorithm) {
                            position = pulse(position);
                        }
                        
                        // only need the difference
                        var x = (item.x * position - item.lastX) >> 0;
                        var y = (item.y * position - item.lastY) >> 0;
                        
                        // add this to the total scrolling
                        scrollX += x;
                        scrollY += y;            
                        
                        // update last values
                        item.lastX += x;
                        item.lastY += y;
                    
                        // delete and step back if it's over
                        if (finished) {
                            que.splice(i, 1); i--;
                        }           
                    }

                    // scroll left and top
                    if (scrollWindow) {
                        window.scrollBy(scrollX, scrollY);
                    } 
                    else {
                        if (scrollX) elem.scrollLeft += scrollX;
                        if (scrollY) elem.scrollTop  += scrollY;                    
                    }
                    
                    // clean up if there's nothing left to do
                    if (!left && !top) {
                        que = [];
                    }
                    
                    if (que.length) { 
                        requestFrame(step, elem, (delay / options.frameRate + 1)); 
                    } else { 
                        pending = false;
                    }
                };
                
                // start a new queue of actions
                requestFrame(step, elem, 0);
                pending = true;
            }


            /***********************************************
             * EVENTS
             ***********************************************/

            /**
             * Mouse wheel handler.
             * @param {Object} event
             */
            function wheel(event) {

                if (!initDone) {
                    init();
                }
                
                var target = event.target;
                var overflowing = overflowingAncestor(target);
                
                // use default if there's no overflowing
                // element or default action is prevented    
                if (!overflowing || event.defaultPrevented ||
                    isNodeName(activeElement, "embed") ||
                   (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
                    return true;
                }

                var deltaX = event.wheelDeltaX || 0;
                var deltaY = event.wheelDeltaY || 0;
                
                // use wheelDelta if deltaX/Y is not available
                if (!deltaX && !deltaY) {
                    deltaY = event.wheelDelta || 0;
                }

                // check if it's a touchpad scroll that should be ignored
                if (!options.touchpadSupport && isTouchpad(deltaY)) {
                    return true;
                }

                // scale by step size
                // delta is 120 most of the time
                // synaptics seems to send 1 sometimes
                if (Math.abs(deltaX) > 1.2) {
                    deltaX *= options.stepSize / 120;
                }
                if (Math.abs(deltaY) > 1.2) {
                    deltaY *= options.stepSize / 120;
                }
                
                scrollArray(overflowing, -deltaX, -deltaY);
                event.preventDefault();
            }

            /**
             * Keydown event handler.
             * @param {Object} event
             */
            function keydown(event) {

                var target   = event.target;
                var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                              (event.shiftKey && event.keyCode !== key.spacebar);
                
                // do nothing if user is editing text
                // or using a modifier key (except shift)
                // or in a dropdown
                if ( /input|textarea|select|embed/i.test(target.nodeName) ||
                     target.isContentEditable || 
                     event.defaultPrevented   ||
                     modifier ) {
                  return true;
                }
                // spacebar should trigger button press
                if (isNodeName(target, "button") &&
                    event.keyCode === key.spacebar) {
                  return true;
                }
                
                var shift, x = 0, y = 0;
                var elem = overflowingAncestor(activeElement);
                var clientHeight = elem.clientHeight;

                if (elem == document.body) {
                    clientHeight = window.innerHeight;
                }

                switch (event.keyCode) {
                    case key.up:
                        y = -options.arrowScroll;
                        break;
                    case key.down:
                        y = options.arrowScroll;
                        break;         
                    case key.spacebar: // (+ shift)
                        shift = event.shiftKey ? 1 : -1;
                        y = -shift * clientHeight * 0.9;
                        break;
                    case key.pageup:
                        y = -clientHeight * 0.9;
                        break;
                    case key.pagedown:
                        y = clientHeight * 0.9;
                        break;
                    case key.home:
                        y = -elem.scrollTop;
                        break;
                    case key.end:
                        var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                        y = (damt > 0) ? damt+10 : 0;
                        break;
                    case key.left:
                        x = -options.arrowScroll;
                        break;
                    case key.right:
                        x = options.arrowScroll;
                        break;            
                    default:
                        return true; // a key we don't care about
                }

                scrollArray(elem, x, y);
                event.preventDefault();
            }

            /**
             * Mousedown event only for updating activeElement
             */
            function mousedown(event) {
                activeElement = event.target;
            }


            /***********************************************
             * OVERFLOW
             ***********************************************/
             
            var cache = {}; // cleared out every once in while
            setInterval(function () { cache = {}; }, 10 * 1000);

            var uniqueID = (function () {
                var i = 0;
                return function (el) {
                    return el.uniqueID || (el.uniqueID = i++);
                };
            })();

            function setCache(elems, overflowing) {
                for (var i = elems.length; i--;)
                    cache[uniqueID(elems[i])] = overflowing;
                return overflowing;
            }

            function overflowingAncestor(el) {
                var elems = [];
                var rootScrollHeight = root.scrollHeight;
                do {
                    var cached = cache[uniqueID(el)];
                    if (cached) {
                        return setCache(elems, cached);
                    }
                    elems.push(el);
                    if (rootScrollHeight === el.scrollHeight) {
                        if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                            return setCache(elems, document.body); // scrolling root in WebKit
                        }
                    } else if (el.clientHeight + 10 < el.scrollHeight) {
                        overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
                        if (overflow === "scroll" || overflow === "auto") {
                            return setCache(elems, el);
                        }
                    }
                } while (el = el.parentNode);
            }


            /***********************************************
             * HELPERS
             ***********************************************/

            function addEvent(type, fn, bubble) {
                window.addEventListener(type, fn, (bubble||false));
            }

            function removeEvent(type, fn, bubble) {
                window.removeEventListener(type, fn, (bubble||false));  
            }

            function isNodeName(el, tag) {
                return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
            }

            function directionCheck(x, y) {
                x = (x > 0) ? 1 : -1;
                y = (y > 0) ? 1 : -1;
                if (direction.x !== x || direction.y !== y) {
                    direction.x = x;
                    direction.y = y;
                    que = [];
                    lastScroll = 0;
                }
            }

            var deltaBufferTimer;

            function isTouchpad(deltaY) {
                if (!deltaY) return;
                deltaY = Math.abs(deltaY)
                deltaBuffer.push(deltaY);
                deltaBuffer.shift();
                clearTimeout(deltaBufferTimer);
                var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
                                    isDivisible(deltaBuffer[1], 120) &&
                                    isDivisible(deltaBuffer[2], 120));
                return !allDivisable;
            } 

            function isDivisible(n, divisor) {
                return (Math.floor(n / divisor) == n / divisor);
            }

            var requestFrame = (function () {
                  return  window.requestAnimationFrame       || 
                          window.webkitRequestAnimationFrame || 
                          function (callback, element, delay) {
                              window.setTimeout(callback, delay || (1000/60));
                          };
            })();


            /***********************************************
             * PULSE
             ***********************************************/
             
            /**
             * Viscous fluid with a pulse for part and decay for the rest.
             * - Applies a fixed force over an interval (a damped acceleration), and
             * - Lets the exponential bleed away the velocity over a longer interval
             * - Michael Herf, http://stereopsis.com/stopping/
             */
            function pulse_(x) {
                var val, start, expx;
                // test
                x = x * options.pulseScale;
                if (x < 1) { // acceleartion
                    val = x - (1 - Math.exp(-x));
                } else {     // tail
                    // the previous animation ended here:
                    start = Math.exp(-1);
                    // simple viscous drag
                    x -= 1;
                    expx = 1 - Math.exp(-x);
                    val = start + (expx * (1 - start));
                }
                return val * options.pulseNormalize;
            }

            function pulse(x) {
                if (x >= 1) return 1;
                if (x <= 0) return 0;

                if (options.pulseNormalize == 1) {
                    options.pulseNormalize /= pulse_(1);
                }
                return pulse_(x);
            }

            var isChrome = /chrome/i.test(window.navigator.userAgent);
            var wheelEvent = null;
            if ("onwheel" in document.createElement("div"))
            	wheelEvent = "wheel";
            else if ("onmousewheel" in document.createElement("div"))
            	wheelEvent = "mousewheel";

            if (wheelEvent && isChrome) {
            	addEvent(wheelEvent, wheel);
            	addEvent("mousedown", mousedown);
            	addEvent("load", init);
            }

        }
    });
})(jQuery);
define("smoothScroll", function(){});

//>>excludeStart('excludeRequireCss', pragmas.excludeRequireCss)
/*
 * css.normalize.js
 *
 * CSS Normalization
 *
 * CSS paths are normalized based on an optional basePath and the RequireJS config
 *
 * Usage:
 *   normalize(css, fromBasePath, toBasePath);
 *
 * css: the stylesheet content to normalize
 * fromBasePath: the absolute base path of the css relative to any root (but without ../ backtracking)
 * toBasePath: the absolute new base path of the css relative to the same root
 * 
 * Absolute dependencies are left untouched.
 *
 * Urls in the CSS are picked up by regular expressions.
 * These will catch all statements of the form:
 *
 * url(*)
 * url('*')
 * url("*")
 * 
 * @import '*'
 * @import "*"
 *
 * (and so also @import url(*) variations)
 *
 * For urls needing normalization
 *
 */

define('normalize',[],function() {
  
  // regular expression for removing double slashes
  // eg http://www.example.com//my///url/here -> http://www.example.com/my/url/here
  var slashes = /([^:])\/+/g
  var removeDoubleSlashes = function(uri) {
    return uri.replace(slashes, '$1/');
  }

  // given a relative URI, and two absolute base URIs, convert it from one base to another
  var protocolRegEx = /[^\:\/]*:\/\/([^\/])*/;
  var absUrlRegEx = /^(\/|data:)/;
  function convertURIBase(uri, fromBase, toBase) {
    if (uri.match(absUrlRegEx) || uri.match(protocolRegEx))
      return uri;
    uri = removeDoubleSlashes(uri);
    // if toBase specifies a protocol path, ensure this is the same protocol as fromBase, if not
    // use absolute path at fromBase
    var toBaseProtocol = toBase.match(protocolRegEx);
    var fromBaseProtocol = fromBase.match(protocolRegEx);
    if (fromBaseProtocol && (!toBaseProtocol || toBaseProtocol[1] != fromBaseProtocol[1] || toBaseProtocol[2] != fromBaseProtocol[2]))
      return absoluteURI(uri, fromBase);
    
    else {
      return relativeURI(absoluteURI(uri, fromBase), toBase);
    }
  };
  
  // given a relative URI, calculate the absolute URI
  function absoluteURI(uri, base) {
    if (uri.substr(0, 2) == './')
      uri = uri.substr(2);

    // absolute urls are left in tact
    if (uri.match(absUrlRegEx) || uri.match(protocolRegEx))
      return uri;
    
    var baseParts = base.split('/');
    var uriParts = uri.split('/');
    
    baseParts.pop();
    
    while (curPart = uriParts.shift())
      if (curPart == '..')
        baseParts.pop();
      else
        baseParts.push(curPart);
    
    return baseParts.join('/');
  };


  // given an absolute URI, calculate the relative URI
  function relativeURI(uri, base) {
    
    // reduce base and uri strings to just their difference string
    var baseParts = base.split('/');
    baseParts.pop();
    base = baseParts.join('/') + '/';
    i = 0;
    while (base.substr(i, 1) == uri.substr(i, 1))
      i++;
    while (base.substr(i, 1) != '/')
      i--;
    base = base.substr(i + 1);
    uri = uri.substr(i + 1);

    // each base folder difference is thus a backtrack
    baseParts = base.split('/');
    var uriParts = uri.split('/');
    out = '';
    while (baseParts.shift())
      out += '../';
    
    // finally add uri parts
    while (curPart = uriParts.shift())
      out += curPart + '/';
    
    return out.substr(0, out.length - 1);
  };
  
  var normalizeCSS = function(source, fromBase, toBase) {

    fromBase = removeDoubleSlashes(fromBase);
    toBase = removeDoubleSlashes(toBase);

    var urlRegEx = /@import\s*("([^"]*)"|'([^']*)')|url\s*\(\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/ig;
    var result, url, source;

    while (result = urlRegEx.exec(source)) {
      url = result[3] || result[2] || result[5] || result[6] || result[4];
      var newUrl;
      newUrl = convertURIBase(url, fromBase, toBase);
      var quoteLen = result[5] || result[6] ? 1 : 0;
      source = source.substr(0, urlRegEx.lastIndex - url.length - quoteLen - 1) + newUrl + source.substr(urlRegEx.lastIndex - quoteLen - 1);
      urlRegEx.lastIndex = urlRegEx.lastIndex + (newUrl.length - url.length);
    }
    
    return source;
  };
  
  normalizeCSS.convertURIBase = convertURIBase;
  normalizeCSS.absoluteURI = absoluteURI;
  normalizeCSS.relativeURI = relativeURI;
  
  return normalizeCSS;
});
//>>excludeEnd('excludeRequireCss');
/*
 * Require-CSS RequireJS css! loader plugin
 * 0.1.2
 * Guy Bedford 2013
 * MIT
 */

/*
 *
 * Usage:
 *  require(['css!./mycssFile']);
 *
 * Tested and working in (up to latest versions as of March 2013):
 * Android
 * iOS 6
 * IE 6 - 10
 * Chome 3 - 26
 * Firefox 3.5 - 19
 * Opera 10 - 12
 * 
 * browserling.com used for virtual testing environment
 *
 * Credit to B Cavalier & J Hann for the IE 6 - 9 method,
 * refined with help from Martin Cermak
 * 
 * Sources that helped along the way:
 * - https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
 * - http://www.phpied.com/when-is-a-stylesheet-really-loaded/
 * - https://github.com/cujojs/curl/blob/master/src/curl/plugin/css.js
 *
 */

define('require-css',[],function() {
//>>excludeStart('excludeRequireCss', pragmas.excludeRequireCss)
  if (typeof window == 'undefined')
    return { load: function(n, r, load){ load() } };

  var head = document.getElementsByTagName('head')[0];

  var engine = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/) || 0;

  // use <style> @import load method (IE < 9, Firefox < 18)
  var useImportLoad = false;
  
  // set to false for explicit <link> load checking when onload doesn't work perfectly (webkit)
  var useOnload = true;

  // trident / msie
  if (engine[1] || engine[7])
    useImportLoad = parseInt(engine[1]) < 6 || parseInt(engine[7]) <= 9;
  // webkit
  else if (engine[2])
    useOnload = false;
  // gecko
  else if (engine[4])
    useImportLoad = parseInt(engine[4]) < 18;
  
//>>excludeEnd('excludeRequireCss')
  //main api object
  var cssAPI = {};

//>>excludeStart('excludeRequireCss', pragmas.excludeRequireCss)
  cssAPI.pluginBuilder = './css-builder';

  // <style> @import load method
  var curStyle, curSheet;
  var createStyle = function () {
    curStyle = document.createElement('style');
    head.appendChild(curStyle);
    curSheet = curStyle.styleSheet || curStyle.sheet;
  }
  var ieCnt = 0;
  var ieLoads = [];
  var ieCurCallback;
  
  var createIeLoad = function(url) {
    ieCnt++;
    if (ieCnt == 32) {
      createStyle();
      ieCnt = 0;
    }
    curSheet.addImport(url);
    curStyle.onload = processIeLoad;
  }
  var processIeLoad = function() {
    ieCurCallback();
 
    var nextLoad = ieLoads.shift();
 
    if (!nextLoad) {
      ieCurCallback = null;
      return;
    }
 
    ieCurCallback = nextLoad[1];
    createIeLoad(nextLoad[0]);
  }
  var importLoad = function(url, callback) {
    if (!curSheet || !curSheet.addImport)
      createStyle();

    if (curSheet && curSheet.addImport) {
      // old IE
      if (ieCurCallback) {
        ieLoads.push([url, callback]);
      }
      else {
        createIeLoad(url);
        ieCurCallback = callback;
      }
    }
    else {
      // old Firefox
      curStyle.textContent = '@import "' + url + '";';

      var loadInterval = setInterval(function() {
        try {
          curStyle.sheet.cssRules;
          clearInterval(loadInterval);
          callback();
        } catch(e) {}
      }, 10);
    }
  }

  // <link> load method
  var linkLoad = function(url, callback) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    if (useOnload)
      link.onload = function() {
        link.onload = function() {};
        // for style dimensions queries, a short delay can still be necessary
        setTimeout(callback, 7);
      }
    else
      var loadInterval = setInterval(function() {
        for (var i = 0; i < document.styleSheets.length; i++) {
          var sheet = document.styleSheets[i];
          if (sheet.href == link.href) {
            clearInterval(loadInterval);
            return callback();
          }
        }
      }, 10);
    link.href = url;
    head.appendChild(link);
  }

//>>excludeEnd('excludeRequireCss')
  cssAPI.normalize = function(name, normalize) {
    if (name.substr(name.length - 4, 4) == '.css')
      name = name.substr(0, name.length - 4);

    return normalize(name);
  }

//>>excludeStart('excludeRequireCss', pragmas.excludeRequireCss)
  cssAPI.load = function(cssId, req, load, config) {

    (useImportLoad ? importLoad : linkLoad)(req.toUrl(cssId + '.css'), load);

  }

//>>excludeEnd('excludeRequireCss')
  return cssAPI;
});

define('require-css!bootstrap-css',[],function(){});

define('require-css!font-awesome-css',[],function(){});

define('require-css!fontello-css',[],function(){});

define('require-css!style-css',[],function(){});

define('require-css!custom-css',[],function(){});
define('template',[
    "jquery",
    "browser"    
], function($) {

	$(document).ready(function(){

		if ($('.boxed .fullscreen-bg').length>0) {
			$("body").addClass("transparent-page-wrapper");
		};

		$(window).load(function() {
			$("body").removeClass("no-trans");
		});
		// Enable Smooth Scroll only on Chrome and only on Win and Linux Systems
		var platform = navigator.platform.toLowerCase();
		if ((platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) && !Modernizr.touch) {
			if ($.browser.webkit) {
				$.webkitSmoothScroll();
			}
		};
		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		var delay=0, setTimeoutConst;
		if ((Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) || $("html.ie8").length>0) {
			$('.main-navigation:not(.onclick) .navbar-nav>li.dropdown, .main-navigation:not(.onclick) li.dropdown>ul>li.dropdown').hover(
			function(){
				var $this = $(this);
				setTimeoutConst = setTimeout(function(){
					$this.addClass('open').slideDown();
					$this.find('.dropdown-toggle').addClass('disabled');
				}, delay);

			},	function(){
				clearTimeout(setTimeoutConst );
				$(this).removeClass('open');
				$(this).find('.dropdown-toggle').removeClass('disabled');
			});
		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch || $(".main-navigation.onclick").length>0 ) {
			$('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			$(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			$(this).parent().toggleClass('open');
			});
		};

		//Transparent Header Calculations
		var timer_tr;
		if ($(".transparent-header").length>0) {
			$(window).load(function() {
				trHeaderHeight = $("header.header").outerHeight();
				$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
			});
			$(window).resize(function() {
				if ($(this).scrollTop()  < headerTopHeight + headerHeight -5) {
					trHeaderHeight = $("header.header").outerHeight();
					$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
				}
			});
			$(window).scroll(function() {
				if ($(this).scrollTop() == 0 ) {
					if(timer_tr) {
						window.clearTimeout(timer_tr);
					};
					timer_tr = window.setTimeout(function() {
						trHeaderHeight = $("header.header").outerHeight();
						$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
					}, 300);
				};
			});
		}

		if ($(".transparent-header .slideshow").length>0) {
			$(".header-container header.header").addClass("transparent-header-on");
		} else {
			$(".header-container header.header").removeClass("transparent-header-on");
		}

		//Full Width Slider with Transparent Header Calculations
		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0) {
			if (Modernizr.mq('only all and (max-width: 991px)')) {
				$("body").removeClass("transparent-header");
				$(".header-container header.header").removeClass("transparent-header-on");
				$(".tp-bannertimer").css("marginTop", "0px");
				$("body").addClass("slider-banner-fullwidth-big-height-removed");
			} else {
				$("body").addClass("transparent-header");
				$(".header-container header.header").addClass("transparent-header-on");
				$("body").removeClass("slider-banner-fullwidth-big-height-removed");
			}
		};

		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0 || $(".slider-banner-fullwidth-big-height-removed").length>0) {
			$(window).resize(function() {
				if (Modernizr.mq('only all and (max-width: 991px)')) {
					$("body").removeClass("transparent-header");
					$(".header-container header.header").removeClass("transparent-header-on");
					$(".tp-bannertimer").css("marginTop", "0px");
				} else {
					$("body").addClass("transparent-header");
					$(".header-container header.header").addClass("transparent-header-on");
				}
			});
		};

		//Revolution Slider
		if ($(".slider-banner-container").length>0) {

			$(".tp-bannertimer").show();

			$('body:not(.transparent-header) .slider-banner-container .slider-banner-fullscreen').show().revolution({
				delay:13000,
				startwidth:1140,
				startheight:520,
				fullWidth:"off",
				fullScreen:"on",
				fullScreenOffsetContainer: ".header-container",
				fullScreenOffset: "0",

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				spinner:"spinner2",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",
				hideTimerBar:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});
			$('.transparent-header .slider-banner-container .slider-banner-fullscreen').show().revolution({
				delay:8000,
				startwidth:1140,
				startheight:520,
				fullWidth:"off",
				fullScreen:"on",
				fullScreenOffsetContainer: ".header-top",
				fullScreenOffset: "",

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				spinner:"spinner2",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",
				hideTimerBar:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.slider-banner-container .slider-banner-fullwidth').show().revolution({
				delay:8000,
				startwidth:1140,
				startheight:450,

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner2",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.slider-banner-container .slider-banner-fullwidth-big-height').show().revolution({
				delay:8000,
				startwidth:1140,
				startheight:650,

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner2",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.banner.dark-bg .slider-banner-container .slider-banner-boxedwidth').show().revolution({
				delay:8000,
				startwidth:1140,
				startheight:450,

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				fullWidth:"off",

				spinner:"spinner2",
				shadow: 1,

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.banner.dark-bg .slider-banner-container .slider-banner-boxedwidth').show().revolution({
				delay:8000,
				startwidth:1140,
				startheight:450,

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				fullWidth:"off",

				spinner:"spinner2",
				shadow: 3,

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.banner:not(.dark-bg) .slider-banner-container .slider-banner-boxedwidth-stopped').show().revolution({
				delay:8000,
				startwidth:1140,
				startheight:450,

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				fullWidth:"off",

				spinner:"spinner2",
				shadow: 1,

				stopLoop:"off",
				stopAfterLoops:0,
				stopAtSlide:1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.banner.dark-bg .slider-banner-container .slider-banner-boxedwidth-stopped').show().revolution({
				delay:8000,
				startwidth:1140,
				startheight:450,

				navigationArrows:"solo",

				navigationStyle: "preview2",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,

				fullWidth:"off",

				spinner:"spinner2",
				shadow: 3,

				stopLoop:"off",
				stopAfterLoops:0,
				stopAtSlide:1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

		};

		//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$(".owl-carousel.carousel").owlCarousel({
				items: 4,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			$(".owl-carousel.carousel-autoplay").owlCarousel({
				items: 4,
				autoPlay: 5000,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			$(".owl-carousel.clients").owlCarousel({
				items: 6,
				autoPlay: true,
				pagination: false,
				itemsDesktopSmall: [992,4],
				itemsTablet: [768,4],
				itemsMobile: [479,3]
			});
			$(".owl-carousel.content-slider").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: false,
				navigationText: false,
				pagination: false
			});
			$(".owl-carousel.content-slider-with-controls").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-large-controls").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: true,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: true,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-controls-autoplay-hover-stop").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: true,
				pagination: true,
				stopOnHover: true
			});
		};

		// Fixed header
		//-----------------------------------------------
		headerTopHeight = $(".header-top").outerHeight(),
		headerHeight = $("header.header.fixed").outerHeight();
		$(window).resize(function() {
			if(($(this).scrollTop() < headerTopHeight + headerHeight -5 ) && ($(window).width() > 767)) {
				headerTopHeight = $(".header-top").outerHeight(),
				headerHeight = $("header.header.fixed").outerHeight();
			}
		});

		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)  && !($(".transparent-header .slideshow").length>0)) {
				if (($(this).scrollTop() > headerTopHeight + headerHeight)) {
					$("body").addClass("fixed-header-on");
					$(".header.fixed").addClass('animated object-visible fadeInDown');
					$(".header-container").css("paddingBottom", (headerHeight)+"px");
				} else {
					$("body").removeClass("fixed-header-on");
					$(".header-container").css("paddingBottom", (0)+"px");
					$(".header.fixed").removeClass('animated object-visible fadeInDown');
				}
			} else if ($(".header.fixed").length > 0) {
				if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
					$(".header.fixed").addClass('animated object-visible fadeInDown');
				} else {
					$("body").removeClass("fixed-header-on");
					$(".header.fixed").removeClass('animated object-visible fadeInDown');
				}
			};
		});

		// Charts
		//-----------------------------------------------
		if ($(".graph").length>0) {
			// Creates random numbers you don't need this for real graphs
			var randomScalingFactor = function(){ return Math.round(Math.random()*500)};

			if ($(".graph.line").length>0) {
				// Data for line charts
				var lineChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
					{
						label: "First dataset",
						fillColor : "rgba(188,188,188,0.2)",
						strokeColor : "rgba(188,188,188,1)",
						pointColor : "rgba(188,188,188,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(188,188,188,1)",
						data : [250,300,250,200,250,300,250]
					},
					{
						label: "Second dataset",
						fillColor : "rgba(126,187,205,0.2)",
						strokeColor : "rgba(126,187,205,1)",
						pointColor : "rgba(126,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(126,187,205,1)",
						data : [300,250,200,250,300,250,200]
					},
					{
						label: "Third dataset",
						fillColor : "rgba(98,187,205,0.2)",
						strokeColor : "rgba(98,187,205,1)",
						pointColor : "rgba(98,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(98,187,205,1)",
						data : [0,100,200,300,400,500,400]
					}
					]
				}

				// Line Charts Initialization
				$(window).load(function() {
					var ctx = document.getElementById("lines-graph").getContext("2d");
					window.newLine = new Chart(ctx).Line(lineChartData, {
						responsive: true,
						bezierCurve : false
					});
				});
			}
			if ($(".graph.bar").length>0) {
				// Data for bar charts
				var barChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
						{
							fillColor : "rgba(188,188,188,0.5)",
							strokeColor : "rgba(188,188,188,0.8)",
							highlightFill: "rgba(188,188,188,0.75)",
							highlightStroke: "rgba(188,188,188,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
						{
							fillColor : "rgba(168,187,205,0.5)",
							strokeColor : "rgba(168,187,205,0.8)",
							highlightFill : "rgba(168,187,205,0.75)",
							highlightStroke : "rgba(168,187,205,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						}
					]
				}

				// Bar Charts Initialization
				$(window).load(function() {
					var ctx = document.getElementById("bars-graph").getContext("2d");
					window.myBar = new Chart(ctx).Bar(barChartData, {
						responsive : true
					});
				});
			}
			if ($(".graph.pie").length>0) {
				// Data for pie chart
				var pieData = [
					{
						value: 120,
						color:"#09afdf",
						highlight: "#6BD5F4",
						label: "Blue"
					},
					{
						value: 120,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "Yellow"
					},
					{
						value: 120,
						color: "#4D5360",
						highlight: "#616774",
						label: "Dark Grey"
					}
				];

				// Pie Chart Initialization
				$(window).load(function() {
					var ctx = document.getElementById("pie-graph").getContext("2d");
					window.myPie = new Chart(ctx).Pie(pieData);
				});
			}
			if ($(".graph.doughnut").length>0) {
				// Data for doughnut chart
				var doughnutData = [
					{
						value: 120,
						color:"#09afdf",
						highlight: "#6BD5F4",
						label: "Blue"
					},
					{
						value: 120,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "Yellow"
					},
					{
						value: 120,
						color: "#4D5360",
						highlight: "#616774",
						label: "Dark Grey"
					}
				];

				// Doughnut Chart Initialization
				$(window).load(function() {
					var ctx = document.getElementById("doughnut-graph").getContext("2d");
					window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
				});
			}
		};

		// Magnific popup
		//-----------------------------------------------
		if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
			$(".popup-img").magnificPopup({
				type:"image",
				gallery: {
					enabled: true,
				}
			});
			$(".popup-img-single").magnificPopup({
				type:"image",
				gallery: {
					enabled: false,
				}
			});
			$('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				preloader: false,
				fixedContentPos: false
			});
		};

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					var waypoints = $(this).waypoint(function(direction) {
						var appearDelay = $(this.element).attr("data-effect-delay"),
						animatedObject = $(this.element);
						setTimeout(function() {
							animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
						}, appearDelay);
						this.destroy();
					},{
						offset: '90%'
					});
				} else {
					$(this).addClass('object-visible');
				}
			});
		};

		// Text Rotators
		//-----------------------------------------------
		if ($(".text-rotator").length>0) {
			$(".text-rotator").each(function() {
				var tr_animationEffect = $(this).attr("data-rotator-animation-effect");
				$(this).Morphext({
					animation: ""+tr_animationEffect+"", // Overrides default "bounceIn"
					separator: ",", // Overrides default ","
					speed: 3000 // Overrides default 2000
				});
			});
		};

		// Stats Count To
		//-----------------------------------------------
		if ($(".stats [data-to]").length>0) {
			$(".stats [data-to]").each(function() {
				var stat_item = $(this),
				offset = stat_item.offset().top;
				if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
					stat_item.addClass('counting');
					stat_item.countTo();
				};
				$(window).scroll(function() {
					if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
						stat_item.addClass('counting');
						stat_item.countTo();
					}
				});
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0 || $('.masonry-grid').length>0 || $('.masonry-grid-fitrows').length>0 || $('.isotope-container-fitrows').length>0) {
			$(window).load(function() {
				$('.masonry-grid').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'masonry'
				});
				$('.masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				$('.isotope-container-fitrows').fadeIn();
				var $container_fitrows = $('.isotope-container-fitrows').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'fitRows',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					$container_fitrows.isotope({ filter: filterValue });
					return false;
				});
			});
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				$('.tab-pane .masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
			});
		};

		// Animated Progress Bars
		//-----------------------------------------------
		if ($("[data-animate-width]").length>0) {
			$("[data-animate-width]").each(function() {
				if (Modernizr.touch || !Modernizr.csstransitions) {
					$(this).find("span").hide();
				};
				var waypoints = $(this).waypoint(function(direction) {
					$(this.element).animate({width: $(this.element).attr("data-animate-width")}, 800 );
					this.destroy();
					if (Modernizr.touch || !Modernizr.csstransitions) {
						$(this.element).find("span").show('slow');
					};
				},{
					offset: '90%'
				});
			});
		};

		// Animated Circular Progress Bars
		//-----------------------------------------------
		if ($(".knob").length>0) {

			$(".knob").knob();
			$(".knob").each(function() {
				var animateVal = $(this).attr("data-animate-value");
				$(this).animate({animatedVal: animateVal}, {
					duration: 2000,
					step: function() {
						$(this).val(Math.ceil(this.animatedVal)).trigger("change");
					}
				});
			});
		}

		//Video Background
		//-----------------------------------------------
		if($(".video-background").length>0) {
			var $video = $(".video-background");
			if (Modernizr.touch) {
				$(".video-background").vide({
					mp4: $video.find("source")[0].attributes.src.value,
					webm: $video.find("source")[1].attributes.src.value,
					poster: $video[0].attributes.poster.value,
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 100%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			} else {
				$(".video-background").vide({
					mp4: $video.find("source")[0].attributes.src.value,
					webm: $video.find("source")[1].attributes.src.value,
					poster: $video[0].attributes.poster.value,
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 100%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			};

		};
		if($(".video-background-banner").length>0) {
			if (Modernizr.touch) {
				$(".video-background-banner").vide({
					mp4: "videos/background-video-banner.mp4",
					webm: "videos/background-video-banner.webm",
					poster: "videos/video-fallback.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 50%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			} else {
				$(".video-background-banner").vide({
					mp4: "videos/background-video-banner.mp4",
					webm: "videos/background-video-banner.webm",
					poster: "videos/video-banner-poster.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 50%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			};
		};
		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();
			} else {
				$(".scrollToTop").fadeOut();
			}
		});

		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

		// Pricing tables popovers
		//-----------------------------------------------
		if ($(".pricing-tables").length>0) {
			$(".plan .pt-popover").popover({
				trigger: 'hover',
				container: 'body'
			});
		};

        // Contact forms validation
        //-----------------------------------------------
        if($("#contact-form").length>0) {
            $("#contact-form").validate({
                submitHandler: function(form, e) {
                    e.preventDefault();
                    $('.submit-button').button("loading");
                    $('#MessageNotSent').addClass("hidden");
                    $.ajax({
                        type: "POST",
                        url: form.attributes["action"].value,
                        data: $(form).serialize(),
                        dataType: "json",
                        accept: "application/json",
                        success: function (data) {
                            if (data.pk) {
                                $("#MessageSent").removeClass("hidden");
                                $("#MessageNotSent").addClass("hidden");
                                $(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
                                $("#contact-form .form-control").each(function() {
                                    $(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
                                });
                            } else {
                                $("#MessageNotSent").removeClass("hidden");
                                $("#MessageSent").addClass("hidden");
                            }
                        },
                        error: function(err, status, message) {
                            if (err.responseJSON) {
                                var validator = $('#contact-form').validate();
                                validator.showErrors(err.responseJSON);
                            } else {
                                $('#MessageNotSent').removeClass("hidden");
                            }
                            $('.submit-button').button("reset");
                        }
                    });
                },
                // debug: true,
                errorPlacement: function(error, element) {
                    error.insertBefore( element );
                },
                onkeyup: false,
                onclick: false,
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "Please specify your name",
                        minlength: "Your name must be longer than 2 characters"
                    },
                    email: {
                        required: "We need your email address to contact you",
                        email: "Please enter a valid email address e.g. name@domain.com"
                    },
                    subject: {
                        required: "Please enter a subject"
                    },
                    message: {
                        required: "Please enter a message",
                        minlength: "Your message must be longer than 10 characters"
                    }
                },
                errorElement: "span",
                highlight: function (element) {
                    $(element).parent().removeClass("has-success").addClass("has-error");
                    $(element).siblings("label").addClass("hide");
                },
                success: function (element) {
                    $(element).parent().removeClass("has-error").addClass("has-success");
                    $(element).siblings("label").removeClass("hide");
                }
            });

        };

		if($("#footer-form").length>0) {
			$("#footer-form").validate({
				submitHandler: function(form) {
					$('.submit-button').button("loading");
					$.ajax({
						type: "POST",
						url: form.attributes["url"].value,
						data: {
							"name": $("#footer-form #name2").val(),
							"email": $("#footer-form #email2").val(),
							"subject": "Message from contact form",
							"message": $("#footer-form #message2").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								$("#MessageSent2").removeClass("hidden");
								$("#MessageNotSent2").addClass("hidden");
								$(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								$("#footer-form .form-control").each(function() {
									$(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								$("#MessageNotSent2").removeClass("hidden");
								$("#MessageSent2").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name2: {
						required: true,
						minlength: 2
					},
					email2: {
						required: true,
						email: true
					},
					message2: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name2: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email2: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message2: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide");
				}
			});
		};

		if($("#sidebar-form").length>0) {

			$("#sidebar-form").validate({
				submitHandler: function(form) {
					$('.submit-button').button("loading");
					$.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": $("#sidebar-form #name3").val(),
							"email": $("#sidebar-form #email3").val(),
							"subject": "Message from FAQ page",
							"category": $("#sidebar-form #category").val(),
							"message": $("#sidebar-form #message3").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								$("#MessageSent3").removeClass("hidden");
								$("#MessageNotSent3").addClass("hidden");
								$(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								$("#sidebar-form .form-control").each(function() {
									$(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								$("#MessageNotSent3").removeClass("hidden");
								$("#MessageSent3").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name3: {
						required: true,
						minlength: 2
					},
					email3: {
						required: true,
						email: true
					},
					message3: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name3: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email3: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message3: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
				}
			});

		};

		if($("#rsvp").length>0) {
			$("#rsvp").validate({
				submitHandler: function(form) {
					$('.submit-button').button("loading");
					$.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": $("#rsvp #name").val(),
							"email": $("#rsvp #email").val(),
							"guests": $("#rsvp #guests").val(),
							"subject": "RSVP",
							"events": $("#rsvp #events").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								$("#MessageSent").removeClass("hidden");
								$("#MessageNotSent").addClass("hidden");
								$(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								$("#rsvp .form-control").each(function() {
									$(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								$("#MessageNotSent").removeClass("hidden");
								$("#MessageSent").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					guests: {
						required: true
					},
					events: {
						required: true
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide");
				}
			});
		};


		// Affix Menu
		//-----------------------------------------------
		if ($(".affix-menu").length>0) {
			setTimeout(function () {
				var $sideBar = $('.sidebar')

				$sideBar.affix({
					offset: {
						top: function () {
							var offsetTop = $sideBar.offset().top
							return (this.top = offsetTop - 65)
						},
						bottom: function () {
							var affixBottom = $(".footer").outerHeight(true) + $(".subfooter").outerHeight(true)
							if ($(".footer-top").length>0) {
								affixBottom = affixBottom + $(".footer-top").outerHeight(true)
							}
							return (this.bottom = affixBottom+50)
						}
					}
				})
			}, 100)
		}

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			if($(".fixed.header").length>0) {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			if(($(".header.fixed").length>0) && (Modernizr.mq('only all and (min-width: 768px)'))) {
				$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        var offset =  $("section")[0] == target[0] ? 77 : 64;
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top-offset
							}, 1000);
							return false;
						}
					}
				});
			} else {
				$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top
							}, 1000);
							return false;
						}
					}
				});
			}
		}

		// Offcanvas side navbar
		//-----------------------------------------------
		if ($("#offcanvas").length>0) {
			$('#offcanvas').offcanvas({
				canvas: "body",
				disableScrolling: false,
				toggle: false
			});
		};

		if ($("#offcanvas").length>0) {
			$('#offcanvas [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			$(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			$(this).parent().toggleClass('open');
			});
		};

		// Parallax section
		//-----------------------------------------------
		if (($(".parallax").length>0)  && !Modernizr.touch ){
			$(".parallax").parallax("50%", 0.2);
		};
		if (($(".parallax-2").length>0)  && !Modernizr.touch ){
			$(".parallax-2").parallax("50%", 0.2);
		};
		if (($(".parallax-3").length>0)  && !Modernizr.touch ){
			$(".parallax-3").parallax("50%", 0.2);
		};

		// Notify Plugin
		//-----------------------------------------------
		if (($(".main-navigation.onclick").length>0) && !Modernizr.touch ){
			$.notify({
				// options
				message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			});
		};
		if (!($(".main-navigation.animated").length>0) && !Modernizr.touch && $(".main-navigation").length>0){
			$.notify({
				// options
				message: 'The animations of main menu are disabled.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			});
		};
		if ($(".btn-alert").length>0){
			$(".btn-alert").on('click', function(event) {
				$.notify({
					// options
					message: 'Great! you have just created this message :-) you can configure this into the template.js file'
				},{
					// settings
					type: 'info',
					delay: 4000,
					offset : {
						y: 100,
						x: 20
					}
				});
				return false;
			});
		};

		// Remove Button
		//-----------------------------------------------
		$(".btn-remove").click(function() {
			$(this).closest(".remove-data").remove();
		});

		// Shipping Checkbox
		//-----------------------------------------------
		if ($("#shipping-info-check").is(':checked')) {
			$("#shipping-information").hide();
		}
		$("#shipping-info-check").change(function(){
			if ($(this).is(':checked')) {
				$("#shipping-information").slideToggle();
			} else {
				$("#shipping-information").slideToggle();
			}
		});

		// Full Width Image Overlay
		//-----------------------------------------------
		if ($(".full-image-overlay").length>0) {
			overlayHeight = $(".full-image-overlay").outerHeight();
			$(".full-image-overlay").css("marginTop",-overlayHeight/2);
		};

		//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
		//-----------------------------------------------
		$('.header-top .dropdown-menu input').click(function(e) {
			e.stopPropagation();
		});

	}); // End document ready

});
define('controller',[
    "jquery",
    "./collections/category",
    "./collections/skill",
    "./collections/city",
    "./models/user",
    "browser",
    "template"
], function($, CategoryCollection, SkillCollection, CityCollection, UserModel) {

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    $(document).ready(function() {

        if (navigator.geolocation) {
            var options = {enableHighAccuracy: false, maximumAge: 15000, timeout: 10000};
            //navigator.geolocation.getCurrentPosition(setLocation, function(){}, options);
        }

        var $h1_title = $("h1.title");
        var $h1_page_title = $("#pageTitle");
        var $posFixed = $('.posFixed');
        var $title = $("title");
        Event = function() {
            this.listeners = [];
            return this;
        };

        window.app = {
            views: {},
            user: new UserModel(),
            promises: {
                'mapLoaded': $.Deferred()
            },
            events: {},
            collections: {
                category: new CategoryCollection(),
                skill: new SkillCollection(),
                city: new CityCollection()
            },
            changeTitle: function(title) {
                return this.changePageTitle(title);
                $h1_title.text(title);
                $title.text(title + " - Rent some folks");
            },
            changePageTitle: function(title) {
                if (title) {
                    $h1_page_title.html('<h1>'+title+'</h1>');
                } else {
                    if (title===null) return;
                    $h1_page_title.html('');
                }
            }
        };

        app.promises.categoryLoaded = window.app.collections.category.fetch({
            success: function() {
                app.promises.skillLoaded = window.app.collections.skill.fetch();
            }
        });
        app.promises.cityLoaded = window.app.collections.city.fetch();
        
        app.user.fetch({
            url: '/api/users/current/',
            success: function(model) {
                require(["views/user"], function(UserView) {
                    app.views.user = new UserView({
                        el: document.getElementById("user")
                    });
                });
            }
        });
        
        function getATag(target) {
            if (target.tagName != "A") {
                return getATag(target.parentElement);
            }
            return target;
        };

        $("body").on("click", 'a.live', function(e) {
            e.preventDefault();
            e.target = getATag(e.target);
            app.router.navigate(e.target.getAttribute("href").substr(1), true);
        });

        $("body").on("click", 'a.back', function(e) {
            e.preventDefault();
            window.history.back();
        });

        $(window).scroll(function() {
            if (window.scrollY > 20) {
                $posFixed.css("top", 65);
            } else {
                $posFixed.css("top", "auto");
            }
        });

        require(["router"], function(AppRouter) {
            app.router = new AppRouter();
            Backbone.history.start({pushState: true})
        });

    });
});


(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('/*!\n * Bootstrap v3.3.4 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  select {\n    background: #fff !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: \'Glyphicons Halflings\';\n\n  src: url(\'../lib/bootstrap/fonts/glyphicons-halflings-regular.eot\');\n  src: url(\'../lib/bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix\') format(\'embedded-opentype\'), url(\'../lib/bootstrap/fonts/glyphicons-halflings-regular.woff2\') format(\'woff2\'), url(\'../lib/bootstrap/fonts/glyphicons-halflings-regular.woff\') format(\'woff\'), url(\'../lib/bootstrap/fonts/glyphicons-halflings-regular.ttf\') format(\'truetype\'), url(\'../lib/bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular\') format(\'svg\');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: \'Glyphicons Halflings\';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\2a\";\n}\n.glyphicon-plus:before {\n  content: \"\\2b\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n.glyphicon-cd:before {\n  content: \"\\e201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n.glyphicon-copy:before {\n  content: \"\\e205\";\n}\n.glyphicon-paste:before {\n  content: \"\\e206\";\n}\n.glyphicon-alert:before {\n  content: \"\\e209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n.glyphicon-king:before {\n  content: \"\\e211\";\n}\n.glyphicon-queen:before {\n  content: \"\\e212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n.glyphicon-knight:before {\n  content: \"\\e215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n.glyphicon-bed:before {\n  content: \"\\e219\";\n}\n.glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n.glyphicon-erase:before {\n  content: \"\\e221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n.glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n.glyphicon-btc:before {\n  content: \"\\e227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n.glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n.glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n.glyphicon-scale:before {\n  content: \"\\e230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n.glyphicon-education:before {\n  content: \"\\e233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n.glyphicon-oil:before {\n  content: \"\\e238\";\n}\n.glyphicon-grain:before {\n  content: \"\\e239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n.glyphicon-console:before {\n  content: \"\\e254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: \'\\2014 \\00A0\';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: \'\';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: \'\\00A0 \\2014\';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"] {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.form-group-sm .form-control {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.form-group-sm .form-control,\nselect[multiple].form-group-sm .form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.form-group-lg .form-control {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.form-group-lg .form-control,\nselect[multiple].form-group-lg .form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.333333px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  pointer-events: none;\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default.focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary.focus,\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success.focus,\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:hover,\n.btn-info:focus,\n.btn-info.focus,\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning.focus,\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger.focus,\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px solid;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\00a0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding: 30px 15px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding: 48px 0;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\na.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\na.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\na.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\na.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\na.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  min-height: 16.42857143px;\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.4;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000;\n            perspective: 1000;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#80000000\', endColorstr=\'#00000000\', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#00000000\', endColorstr=\'#80000000\', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: \'\\2039\';\n}\n.carousel-control .icon-next:before {\n  content: \'\\203a\';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n/*!\n *  Font Awesome 4.3.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: \'FontAwesome\';\n  src: url(\'../lib/fonts/font-awesome/fonts/fontawesome-webfont.eot?v=4.3.0\');\n  src: url(\'../lib/fonts/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0\') format(\'embedded-opentype\'), url(\'../lib/fonts/font-awesome/fonts/fontawesome-webfont.woff2?v=4.3.0\') format(\'woff2\'), url(\'../lib/fonts/font-awesome/fonts/fontawesome-webfont.woff?v=4.3.0\') format(\'woff\'), url(\'../lib/fonts/font-awesome/fonts/fontawesome-webfont.ttf?v=4.3.0\') format(\'truetype\'), url(\'../lib/fonts/font-awesome/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular\') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-genderless:before,\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n@font-face {\n  font-family: \'fontello\';\n  src: url(\'../lib/fonts/fontello/font/fontello.eot?46462644\');\n  src: url(\'../lib/fonts/fontello/font/fontello.eot?46462644#iefix\') format(\'embedded-opentype\'),\n       url(\'../lib/fonts/fontello/font/fontello.woff?46462644\') format(\'woff\'),\n       url(\'../lib/fonts/fontello/font/fontello.ttf?46462644\') format(\'truetype\'),\n       url(\'../lib/fonts/fontello/font/fontello.svg?46462644#fontello\') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: \'fontello\';\n    src: url(\'../lib/fonts/fontello/font/fontello.svg?46462644#fontello\') format(\'svg\');\n  }\n}\n*/\n \n [class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n \n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n \n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n     \n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n \n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n \n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n \n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n \n.icon-note:before { content: \'\\e800\'; } /* \'\' */\n.icon-note-beamed:before { content: \'\\e801\'; } /* \'\' */\n.icon-music:before { content: \'\\e802\'; } /* \'\' */\n.icon-search:before { content: \'\\e803\'; } /* \'\' */\n.icon-flashlight:before { content: \'\\e804\'; } /* \'\' */\n.icon-mail:before { content: \'\\e805\'; } /* \'\' */\n.icon-heart:before { content: \'\\e806\'; } /* \'\' */\n.icon-heart-empty:before { content: \'\\e807\'; } /* \'\' */\n.icon-star:before { content: \'\\e808\'; } /* \'\' */\n.icon-star-empty:before { content: \'\\e809\'; } /* \'\' */\n.icon-user:before { content: \'\\e80a\'; } /* \'\' */\n.icon-users:before { content: \'\\e80b\'; } /* \'\' */\n.icon-user-add:before { content: \'\\e80c\'; } /* \'\' */\n.icon-video:before { content: \'\\e80d\'; } /* \'\' */\n.icon-picture:before { content: \'\\e80e\'; } /* \'\' */\n.icon-camera:before { content: \'\\e80f\'; } /* \'\' */\n.icon-layout:before { content: \'\\e810\'; } /* \'\' */\n.icon-menu:before { content: \'\\e811\'; } /* \'\' */\n.icon-check:before { content: \'\\e812\'; } /* \'\' */\n.icon-cancel-circled:before { content: \'\\e813\'; } /* \'\' */\n.icon-cancel-squared:before { content: \'\\e814\'; } /* \'\' */\n.icon-plus:before { content: \'\\e815\'; } /* \'\' */\n.icon-plus-circled:before { content: \'\\e816\'; } /* \'\' */\n.icon-plus-squared:before { content: \'\\e817\'; } /* \'\' */\n.icon-minus:before { content: \'\\e818\'; } /* \'\' */\n.icon-minus-circled:before { content: \'\\e819\'; } /* \'\' */\n.icon-minus-squared:before { content: \'\\e81a\'; } /* \'\' */\n.icon-help:before { content: \'\\e81b\'; } /* \'\' */\n.icon-help-circled:before { content: \'\\e81c\'; } /* \'\' */\n.icon-info:before { content: \'\\e81d\'; } /* \'\' */\n.icon-info-circled:before { content: \'\\e81e\'; } /* \'\' */\n.icon-back:before { content: \'\\e81f\'; } /* \'\' */\n.icon-home:before { content: \'\\e820\'; } /* \'\' */\n.icon-link:before { content: \'\\e821\'; } /* \'\' */\n.icon-attach:before { content: \'\\e822\'; } /* \'\' */\n.icon-lock:before { content: \'\\e823\'; } /* \'\' */\n.icon-lock-open:before { content: \'\\e824\'; } /* \'\' */\n.icon-eye:before { content: \'\\e825\'; } /* \'\' */\n.icon-bookmark:before { content: \'\\e826\'; } /* \'\' */\n.icon-bookmarks:before { content: \'\\e827\'; } /* \'\' */\n.icon-flag:before { content: \'\\e828\'; } /* \'\' */\n.icon-thumbs-up:before { content: \'\\e829\'; } /* \'\' */\n.icon-thumbs-down:before { content: \'\\e82a\'; } /* \'\' */\n.icon-download:before { content: \'\\e82b\'; } /* \'\' */\n.icon-upload:before { content: \'\\e82c\'; } /* \'\' */\n.icon-upload-cloud:before { content: \'\\e82d\'; } /* \'\' */\n.icon-reply:before { content: \'\\e82e\'; } /* \'\' */\n.icon-reply-all:before { content: \'\\e82f\'; } /* \'\' */\n.icon-forward:before { content: \'\\e830\'; } /* \'\' */\n.icon-quote:before { content: \'\\e831\'; } /* \'\' */\n.icon-code:before { content: \'\\e832\'; } /* \'\' */\n.icon-export:before { content: \'\\e833\'; } /* \'\' */\n.icon-pencil:before { content: \'\\e834\'; } /* \'\' */\n.icon-feather:before { content: \'\\e835\'; } /* \'\' */\n.icon-print:before { content: \'\\e836\'; } /* \'\' */\n.icon-retweet:before { content: \'\\e837\'; } /* \'\' */\n.icon-keyboard:before { content: \'\\e838\'; } /* \'\' */\n.icon-chat:before { content: \'\\e839\'; } /* \'\' */\n.icon-bell:before { content: \'\\e83a\'; } /* \'\' */\n.icon-attention:before { content: \'\\e83b\'; } /* \'\' */\n.icon-alert:before { content: \'\\e83c\'; } /* \'\' */\n.icon-vcard:before { content: \'\\e83d\'; } /* \'\' */\n.icon-address:before { content: \'\\e83e\'; } /* \'\' */\n.icon-location:before { content: \'\\e83f\'; } /* \'\' */\n.icon-map:before { content: \'\\e840\'; } /* \'\' */\n.icon-direction:before { content: \'\\e841\'; } /* \'\' */\n.icon-compass:before { content: \'\\e842\'; } /* \'\' */\n.icon-cup:before { content: \'\\e843\'; } /* \'\' */\n.icon-trash:before { content: \'\\e844\'; } /* \'\' */\n.icon-doc:before { content: \'\\e845\'; } /* \'\' */\n.icon-docs:before { content: \'\\e846\'; } /* \'\' */\n.icon-doc-landscape:before { content: \'\\e847\'; } /* \'\' */\n.icon-doc-text:before { content: \'\\e848\'; } /* \'\' */\n.icon-doc-text-inv:before { content: \'\\e849\'; } /* \'\' */\n.icon-newspaper:before { content: \'\\e84a\'; } /* \'\' */\n.icon-book-open:before { content: \'\\e84b\'; } /* \'\' */\n.icon-folder:before { content: \'\\e84c\'; } /* \'\' */\n.icon-archive:before { content: \'\\e84d\'; } /* \'\' */\n.icon-box:before { content: \'\\e84e\'; } /* \'\' */\n.icon-rss:before { content: \'\\e84f\'; } /* \'\' */\n.icon-phone:before { content: \'\\e850\'; } /* \'\' */\n.icon-cog:before { content: \'\\e851\'; } /* \'\' */\n.icon-tools:before { content: \'\\e852\'; } /* \'\' */\n.icon-share:before { content: \'\\e853\'; } /* \'\' */\n.icon-shareable:before { content: \'\\e854\'; } /* \'\' */\n.icon-basket:before { content: \'\\e855\'; } /* \'\' */\n.icon-bag:before { content: \'\\e856\'; } /* \'\' */\n.icon-calendar:before { content: \'\\e857\'; } /* \'\' */\n.icon-login:before { content: \'\\e858\'; } /* \'\' */\n.icon-logout:before { content: \'\\e859\'; } /* \'\' */\n.icon-mic:before { content: \'\\e85a\'; } /* \'\' */\n.icon-mute:before { content: \'\\e85b\'; } /* \'\' */\n.icon-sound:before { content: \'\\e85c\'; } /* \'\' */\n.icon-volume:before { content: \'\\e85d\'; } /* \'\' */\n.icon-clock:before { content: \'\\e85e\'; } /* \'\' */\n.icon-lamp:before { content: \'\\e85f\'; } /* \'\' */\n.icon-light-down:before { content: \'\\e860\'; } /* \'\' */\n.icon-light-up:before { content: \'\\e861\'; } /* \'\' */\n.icon-adjust:before { content: \'\\e862\'; } /* \'\' */\n.icon-block:before { content: \'\\e863\'; } /* \'\' */\n.icon-resize-full:before { content: \'\\e864\'; } /* \'\' */\n.icon-resize-small:before { content: \'\\e865\'; } /* \'\' */\n.icon-popup:before { content: \'\\e866\'; } /* \'\' */\n.icon-publish:before { content: \'\\e867\'; } /* \'\' */\n.icon-window:before { content: \'\\e868\'; } /* \'\' */\n.icon-arrow-combo:before { content: \'\\e869\'; } /* \'\' */\n.icon-down-circled:before { content: \'\\e86a\'; } /* \'\' */\n.icon-left-circled:before { content: \'\\e86b\'; } /* \'\' */\n.icon-right-circled:before { content: \'\\e86c\'; } /* \'\' */\n.icon-up-circled:before { content: \'\\e86d\'; } /* \'\' */\n.icon-down-open:before { content: \'\\e86e\'; } /* \'\' */\n.icon-left-open:before { content: \'\\e86f\'; } /* \'\' */\n.icon-right-open:before { content: \'\\e870\'; } /* \'\' */\n.icon-up-open:before { content: \'\\e871\'; } /* \'\' */\n.icon-left-open-mini:before { content: \'\\e872\'; } /* \'\' */\n.icon-right-open-mini:before { content: \'\\e873\'; } /* \'\' */\n.icon-up-open-mini:before { content: \'\\e874\'; } /* \'\' */\n.icon-down-open-big:before { content: \'\\e875\'; } /* \'\' */\n.icon-left-open-big:before { content: \'\\e876\'; } /* \'\' */\n.icon-right-open-big:before { content: \'\\e877\'; } /* \'\' */\n.icon-up-open-big:before { content: \'\\e878\'; } /* \'\' */\n.icon-down:before { content: \'\\e879\'; } /* \'\' */\n.icon-left:before { content: \'\\e87a\'; } /* \'\' */\n.icon-right:before { content: \'\\e87b\'; } /* \'\' */\n.icon-up:before { content: \'\\e87c\'; } /* \'\' */\n.icon-down-dir:before { content: \'\\e87d\'; } /* \'\' */\n.icon-left-dir:before { content: \'\\e87e\'; } /* \'\' */\n.icon-right-dir:before { content: \'\\e87f\'; } /* \'\' */\n.icon-up-dir:before { content: \'\\e880\'; } /* \'\' */\n.icon-down-bold:before { content: \'\\e881\'; } /* \'\' */\n.icon-left-bold:before { content: \'\\e882\'; } /* \'\' */\n.icon-right-bold:before { content: \'\\e883\'; } /* \'\' */\n.icon-up-bold:before { content: \'\\e884\'; } /* \'\' */\n.icon-left-thin:before { content: \'\\e885\'; } /* \'\' */\n.icon-right-thin:before { content: \'\\e886\'; } /* \'\' */\n.icon-up-thin:before { content: \'\\e887\'; } /* \'\' */\n.icon-ccw:before { content: \'\\e888\'; } /* \'\' */\n.icon-cw:before { content: \'\\e889\'; } /* \'\' */\n.icon-arrows-ccw:before { content: \'\\e88a\'; } /* \'\' */\n.icon-level-down:before { content: \'\\e88b\'; } /* \'\' */\n.icon-level-up:before { content: \'\\e88c\'; } /* \'\' */\n.icon-shuffle:before { content: \'\\e88d\'; } /* \'\' */\n.icon-loop:before { content: \'\\e88e\'; } /* \'\' */\n.icon-switch:before { content: \'\\e88f\'; } /* \'\' */\n.icon-play:before { content: \'\\e890\'; } /* \'\' */\n.icon-stop:before { content: \'\\e891\'; } /* \'\' */\n.icon-pause:before { content: \'\\e892\'; } /* \'\' */\n.icon-record:before { content: \'\\e893\'; } /* \'\' */\n.icon-to-end:before { content: \'\\e894\'; } /* \'\' */\n.icon-to-start:before { content: \'\\e895\'; } /* \'\' */\n.icon-fast-forward:before { content: \'\\e896\'; } /* \'\' */\n.icon-fast-backward:before { content: \'\\e897\'; } /* \'\' */\n.icon-progress-1:before { content: \'\\e898\'; } /* \'\' */\n.icon-progress-2:before { content: \'\\e899\'; } /* \'\' */\n.icon-progress-3:before { content: \'\\e89a\'; } /* \'\' */\n.icon-target:before { content: \'\\e89b\'; } /* \'\' */\n.icon-palette:before { content: \'\\e89c\'; } /* \'\' */\n.icon-list:before { content: \'\\e89d\'; } /* \'\' */\n.icon-list-add:before { content: \'\\e89e\'; } /* \'\' */\n.icon-signal:before { content: \'\\e89f\'; } /* \'\' */\n.icon-trophy:before { content: \'\\e8a0\'; } /* \'\' */\n.icon-battery:before { content: \'\\e8a1\'; } /* \'\' */\n.icon-back-in-time:before { content: \'\\e8a2\'; } /* \'\' */\n.icon-monitor:before { content: \'\\e8a3\'; } /* \'\' */\n.icon-mobile:before { content: \'\\e8a4\'; } /* \'\' */\n.icon-network:before { content: \'\\e8a5\'; } /* \'\' */\n.icon-cd:before { content: \'\\e8a6\'; } /* \'\' */\n.icon-inbox:before { content: \'\\e8a7\'; } /* \'\' */\n.icon-install:before { content: \'\\e8a8\'; } /* \'\' */\n.icon-globe:before { content: \'\\e8a9\'; } /* \'\' */\n.icon-cloud:before { content: \'\\e8aa\'; } /* \'\' */\n.icon-flash:before { content: \'\\e8ab\'; } /* \'\' */\n.icon-moon:before { content: \'\\e8ac\'; } /* \'\' */\n.icon-flight:before { content: \'\\e8ad\'; } /* \'\' */\n.icon-paper-plane:before { content: \'\\e8ae\'; } /* \'\' */\n.icon-leaf:before { content: \'\\e8af\'; } /* \'\' */\n.icon-lifebuoy:before { content: \'\\e8b0\'; } /* \'\' */\n.icon-mouse:before { content: \'\\e8b1\'; } /* \'\' */\n.icon-briefcase:before { content: \'\\e8b2\'; } /* \'\' */\n.icon-suitcase:before { content: \'\\e8b3\'; } /* \'\' */\n.icon-dot:before { content: \'\\e8b4\'; } /* \'\' */\n.icon-dot-2:before { content: \'\\e8b5\'; } /* \'\' */\n.icon-dot-3:before { content: \'\\e8b6\'; } /* \'\' */\n.icon-brush:before { content: \'\\e8b7\'; } /* \'\' */\n.icon-magnet:before { content: \'\\e8b8\'; } /* \'\' */\n.icon-infinity:before { content: \'\\e8b9\'; } /* \'\' */\n.icon-erase:before { content: \'\\e8ba\'; } /* \'\' */\n.icon-chart-pie:before { content: \'\\e8bb\'; } /* \'\' */\n.icon-chart-line:before { content: \'\\e8bc\'; } /* \'\' */\n.icon-chart-bar:before { content: \'\\e8bd\'; } /* \'\' */\n.icon-tape:before { content: \'\\e8be\'; } /* \'\' */\n.icon-graduation-cap:before { content: \'\\e8bf\'; } /* \'\' */\n.icon-language:before { content: \'\\e8c0\'; } /* \'\' */\n.icon-ticket:before { content: \'\\e8c1\'; } /* \'\' */\n.icon-water:before { content: \'\\e8c2\'; } /* \'\' */\n.icon-droplet:before { content: \'\\e8c3\'; } /* \'\' */\n.icon-air:before { content: \'\\e8c4\'; } /* \'\' */\n.icon-credit-card:before { content: \'\\e8c5\'; } /* \'\' */\n.icon-floppy:before { content: \'\\e8c6\'; } /* \'\' */\n.icon-clipboard:before { content: \'\\e8c7\'; } /* \'\' */\n.icon-megaphone:before { content: \'\\e8c8\'; } /* \'\' */\n.icon-database:before { content: \'\\e8c9\'; } /* \'\' */\n.icon-drive:before { content: \'\\e8ca\'; } /* \'\' */\n.icon-bucket:before { content: \'\\e8cb\'; } /* \'\' */\n.icon-thermometer:before { content: \'\\e8cc\'; } /* \'\' */\n.icon-key:before { content: \'\\e8cd\'; } /* \'\' */\n.icon-flow-cascade:before { content: \'\\e8ce\'; } /* \'\' */\n.icon-flow-branch:before { content: \'\\e8cf\'; } /* \'\' */\n.icon-flow-tree:before { content: \'\\e8d0\'; } /* \'\' */\n.icon-flow-parallel:before { content: \'\\e8d1\'; } /* \'\' */\n.icon-rocket:before { content: \'\\e8d2\'; } /* \'\' */\n.icon-gauge:before { content: \'\\e8d3\'; } /* \'\' */\n.icon-traffic-cone:before { content: \'\\e8d4\'; } /* \'\' */\n.icon-cc:before { content: \'\\e8d5\'; } /* \'\' */\n.icon-cc-by:before { content: \'\\e8d6\'; } /* \'\' */\n.icon-cc-nc:before { content: \'\\e8d7\'; } /* \'\' */\n.icon-cc-nc-eu:before { content: \'\\e8d8\'; } /* \'\' */\n.icon-cc-nc-jp:before { content: \'\\e8d9\'; } /* \'\' */\n.icon-cc-sa:before { content: \'\\e8da\'; } /* \'\' */\n.icon-cc-nd:before { content: \'\\e8db\'; } /* \'\' */\n.icon-cc-pd:before { content: \'\\e8dc\'; } /* \'\' */\n.icon-cc-zero:before { content: \'\\e8dd\'; } /* \'\' */\n.icon-cc-share:before { content: \'\\e8de\'; } /* \'\' */\n.icon-cc-remix:before { content: \'\\e8df\'; } /* \'\' */\n.icon-github:before { content: \'\\e8e0\'; } /* \'\' */\n.icon-github-circled:before { content: \'\\e8e1\'; } /* \'\' */\n.icon-flickr:before { content: \'\\e8e2\'; } /* \'\' */\n.icon-flickr-circled:before { content: \'\\e8e3\'; } /* \'\' */\n.icon-vimeo-circled:before { content: \'\\e8e4\'; } /* \'\' */\n.icon-twitter:before { content: \'\\e8e5\'; } /* \'\' */\n.icon-twitter-circled:before { content: \'\\e8e6\'; } /* \'\' */\n.icon-facebook:before { content: \'\\e8e7\'; } /* \'\' */\n.icon-facebook-circled:before { content: \'\\e8e8\'; } /* \'\' */\n.icon-facebook-squared:before { content: \'\\e8e9\'; } /* \'\' */\n.icon-gplus:before { content: \'\\e8ea\'; } /* \'\' */\n.icon-gplus-circled:before { content: \'\\e8eb\'; } /* \'\' */\n.icon-pinterest:before { content: \'\\e8ec\'; } /* \'\' */\n.icon-pinterest-circled:before { content: \'\\e8ed\'; } /* \'\' */\n.icon-tumblr:before { content: \'\\e8ee\'; } /* \'\' */\n.icon-tumblr-circled:before { content: \'\\e8ef\'; } /* \'\' */\n.icon-linkedin:before { content: \'\\e8f0\'; } /* \'\' */\n.icon-linkedin-circled:before { content: \'\\e8f1\'; } /* \'\' */\n.icon-dribbble:before { content: \'\\e8f2\'; } /* \'\' */\n.icon-dribbble-circled:before { content: \'\\e8f3\'; } /* \'\' */\n.icon-stumbleupon:before { content: \'\\e8f4\'; } /* \'\' */\n.icon-stumbleupon-circled:before { content: \'\\e8f5\'; } /* \'\' */\n.icon-lastfm:before { content: \'\\e8f6\'; } /* \'\' */\n.icon-rdio:before { content: \'\\e8f7\'; } /* \'\' */\n.icon-rdio-circled:before { content: \'\\e8f8\'; } /* \'\' */\n.icon-spotify:before { content: \'\\e8f9\'; } /* \'\' */\n.icon-spotify-circled:before { content: \'\\e8fa\'; } /* \'\' */\n.icon-qq:before { content: \'\\e8fb\'; } /* \'\' */\n.icon-instagram:before { content: \'\\e8fc\'; } /* \'\' */\n.icon-dropbox:before { content: \'\\e8fd\'; } /* \'\' */\n.icon-evernote:before { content: \'\\e8fe\'; } /* \'\' */\n.icon-flattr:before { content: \'\\e8ff\'; } /* \'\' */\n.icon-skype:before { content: \'\\e900\'; } /* \'\' */\n.icon-skype-circled:before { content: \'\\e901\'; } /* \'\' */\n.icon-renren:before { content: \'\\e902\'; } /* \'\' */\n.icon-sina-weibo:before { content: \'\\e903\'; } /* \'\' */\n.icon-paypal:before { content: \'\\e904\'; } /* \'\' */\n.icon-picasa:before { content: \'\\e905\'; } /* \'\' */\n.icon-soundcloud:before { content: \'\\e906\'; } /* \'\' */\n.icon-mixi:before { content: \'\\e907\'; } /* \'\' */\n.icon-behance:before { content: \'\\e908\'; } /* \'\' */\n.icon-google-circles:before { content: \'\\e909\'; } /* \'\' */\n.icon-smashing:before { content: \'\\e90a\'; } /* \'\' */\n.icon-sweden:before { content: \'\\e90b\'; } /* \'\' */\n.icon-db-shape:before { content: \'\\e90c\'; } /* \'\' */\n.icon-logo-db:before { content: \'\\e90d\'; } /* \'\' */\n.icon-flow-line:before { content: \'\\e90e\'; } /* \'\' */\n.icon-vimeo:before { content: \'\\e90f\'; } /* \'\' */\n.icon-lastfm-circled:before { content: \'\\e910\'; } /* \'\' */\n.icon-vkontakte:before { content: \'\\e911\'; } /* \'\' */\n.icon-cancel:before { content: \'\\e912\'; } /* \'\' */\n.icon-tag:before { content: \'\\e913\'; } /* \'\' */\n.icon-comment:before { content: \'\\e914\'; } /* \'\' */\n.icon-book:before { content: \'\\e915\'; } /* \'\' */\n.icon-hourglass:before { content: \'\\e916\'; } /* \'\' */\n.icon-down-open-mini:before { content: \'\\e917\'; } /* \'\' */\n.icon-down-thin:before { content: \'\\e918\'; } /* \'\' */\n.icon-progress-0:before { content: \'\\e919\'; } /* \'\' */\n.icon-cloud-thunder:before { content: \'\\e91a\'; } /* \'\' */\n.icon-chart-area:before { content: \'\\e91b\'; } /* \'\' */\n.icon-music-outline:before { content: \'\\e91c\'; } /* \'\' */\n.icon-music-1:before { content: \'\\e91d\'; } /* \'\' */\n.icon-search-outline:before { content: \'\\e91e\'; } /* \'\' */\n.icon-search-1:before { content: \'\\e91f\'; } /* \'\' */\n.icon-mail-1:before { content: \'\\e920\'; } /* \'\' */\n.icon-heart-1:before { content: \'\\e921\'; } /* \'\' */\n.icon-heart-filled:before { content: \'\\e922\'; } /* \'\' */\n.icon-star-1:before { content: \'\\e923\'; } /* \'\' */\n.icon-star-filled:before { content: \'\\e924\'; } /* \'\' */\n.icon-user-outline:before { content: \'\\e925\'; } /* \'\' */\n.icon-user-1:before { content: \'\\e926\'; } /* \'\' */\n.icon-users-outline:before { content: \'\\e927\'; } /* \'\' */\n.icon-users-1:before { content: \'\\e928\'; } /* \'\' */\n.icon-user-add-outline:before { content: \'\\e929\'; } /* \'\' */\n.icon-user-add-1:before { content: \'\\e92a\'; } /* \'\' */\n.icon-user-delete-outline:before { content: \'\\e92b\'; } /* \'\' */\n.icon-user-delete:before { content: \'\\e92c\'; } /* \'\' */\n.icon-video-1:before { content: \'\\e92d\'; } /* \'\' */\n.icon-videocam-outline:before { content: \'\\e92e\'; } /* \'\' */\n.icon-videocam:before { content: \'\\e92f\'; } /* \'\' */\n.icon-picture-outline:before { content: \'\\e930\'; } /* \'\' */\n.icon-picture-1:before { content: \'\\e931\'; } /* \'\' */\n.icon-camera-outline:before { content: \'\\e932\'; } /* \'\' */\n.icon-camera-1:before { content: \'\\e933\'; } /* \'\' */\n.icon-th-outline:before { content: \'\\e934\'; } /* \'\' */\n.icon-th:before { content: \'\\e935\'; } /* \'\' */\n.icon-th-large-outline:before { content: \'\\e936\'; } /* \'\' */\n.icon-th-large:before { content: \'\\e937\'; } /* \'\' */\n.icon-th-list-outline:before { content: \'\\e938\'; } /* \'\' */\n.icon-th-list:before { content: \'\\e939\'; } /* \'\' */\n.icon-ok-outline:before { content: \'\\e93a\'; } /* \'\' */\n.icon-ok:before { content: \'\\e93b\'; } /* \'\' */\n.icon-cancel-outline:before { content: \'\\e93c\'; } /* \'\' */\n.icon-cancel-1:before { content: \'\\e93d\'; } /* \'\' */\n.icon-cancel-alt:before { content: \'\\e93e\'; } /* \'\' */\n.icon-cancel-alt-filled:before { content: \'\\e93f\'; } /* \'\' */\n.icon-cancel-circled-outline:before { content: \'\\e940\'; } /* \'\' */\n.icon-cancel-circled-1:before { content: \'\\e941\'; } /* \'\' */\n.icon-plus-outline:before { content: \'\\e942\'; } /* \'\' */\n.icon-plus-1:before { content: \'\\e943\'; } /* \'\' */\n.icon-minus-outline:before { content: \'\\e944\'; } /* \'\' */\n.icon-minus-1:before { content: \'\\e945\'; } /* \'\' */\n.icon-divide-outline:before { content: \'\\e946\'; } /* \'\' */\n.icon-divide:before { content: \'\\e947\'; } /* \'\' */\n.icon-eq-outline:before { content: \'\\e948\'; } /* \'\' */\n.icon-eq:before { content: \'\\e949\'; } /* \'\' */\n.icon-info-outline:before { content: \'\\e94a\'; } /* \'\' */\n.icon-info-1:before { content: \'\\e94b\'; } /* \'\' */\n.icon-home-outline:before { content: \'\\e94c\'; } /* \'\' */\n.icon-home-1:before { content: \'\\e94d\'; } /* \'\' */\n.icon-link-outline:before { content: \'\\e94e\'; } /* \'\' */\n.icon-link-1:before { content: \'\\e94f\'; } /* \'\' */\n.icon-attach-outline:before { content: \'\\e950\'; } /* \'\' */\n.icon-attach-1:before { content: \'\\e951\'; } /* \'\' */\n.icon-lock-1:before { content: \'\\e952\'; } /* \'\' */\n.icon-lock-filled:before { content: \'\\e953\'; } /* \'\' */\n.icon-lock-open-1:before { content: \'\\e954\'; } /* \'\' */\n.icon-lock-open-filled:before { content: \'\\e955\'; } /* \'\' */\n.icon-pin-outline:before { content: \'\\e956\'; } /* \'\' */\n.icon-pin:before { content: \'\\e957\'; } /* \'\' */\n.icon-eye-outline:before { content: \'\\e958\'; } /* \'\' */\n.icon-eye-1:before { content: \'\\e959\'; } /* \'\' */\n.icon-tag-1:before { content: \'\\e95a\'; } /* \'\' */\n.icon-tags:before { content: \'\\e95b\'; } /* \'\' */\n.icon-bookmark-1:before { content: \'\\e95c\'; } /* \'\' */\n.icon-flag-1:before { content: \'\\e95d\'; } /* \'\' */\n.icon-flag-filled:before { content: \'\\e95e\'; } /* \'\' */\n.icon-thumbs-up-1:before { content: \'\\e95f\'; } /* \'\' */\n.icon-thumbs-down-1:before { content: \'\\e960\'; } /* \'\' */\n.icon-download-outline:before { content: \'\\e961\'; } /* \'\' */\n.icon-download-1:before { content: \'\\e962\'; } /* \'\' */\n.icon-upload-outline:before { content: \'\\e963\'; } /* \'\' */\n.icon-upload-1:before { content: \'\\e964\'; } /* \'\' */\n.icon-upload-cloud-outline:before { content: \'\\e965\'; } /* \'\' */\n.icon-upload-cloud-1:before { content: \'\\e966\'; } /* \'\' */\n.icon-reply-outline:before { content: \'\\e967\'; } /* \'\' */\n.icon-reply-1:before { content: \'\\e968\'; } /* \'\' */\n.icon-forward-outline:before { content: \'\\e969\'; } /* \'\' */\n.icon-forward-1:before { content: \'\\e96a\'; } /* \'\' */\n.icon-code-outline:before { content: \'\\e96b\'; } /* \'\' */\n.icon-code-1:before { content: \'\\e96c\'; } /* \'\' */\n.icon-export-outline:before { content: \'\\e96d\'; } /* \'\' */\n.icon-export-1:before { content: \'\\e96e\'; } /* \'\' */\n.icon-pencil-1:before { content: \'\\e96f\'; } /* \'\' */\n.icon-pen:before { content: \'\\e970\'; } /* \'\' */\n.icon-feather-1:before { content: \'\\e971\'; } /* \'\' */\n.icon-edit:before { content: \'\\e972\'; } /* \'\' */\n.icon-print-1:before { content: \'\\e973\'; } /* \'\' */\n.icon-comment-1:before { content: \'\\e974\'; } /* \'\' */\n.icon-chat-1:before { content: \'\\e975\'; } /* \'\' */\n.icon-chat-alt:before { content: \'\\e976\'; } /* \'\' */\n.icon-bell-1:before { content: \'\\e977\'; } /* \'\' */\n.icon-attention-1:before { content: \'\\e978\'; } /* \'\' */\n.icon-attention-filled:before { content: \'\\e979\'; } /* \'\' */\n.icon-warning-empty:before { content: \'\\e97a\'; } /* \'\' */\n.icon-warning:before { content: \'\\e97b\'; } /* \'\' */\n.icon-contacts:before { content: \'\\e97c\'; } /* \'\' */\n.icon-vcard-1:before { content: \'\\e97d\'; } /* \'\' */\n.icon-address-1:before { content: \'\\e97e\'; } /* \'\' */\n.icon-location-outline:before { content: \'\\e97f\'; } /* \'\' */\n.icon-location-1:before { content: \'\\e980\'; } /* \'\' */\n.icon-map-1:before { content: \'\\e981\'; } /* \'\' */\n.icon-direction-outline:before { content: \'\\e982\'; } /* \'\' */\n.icon-direction-1:before { content: \'\\e983\'; } /* \'\' */\n.icon-compass-1:before { content: \'\\e984\'; } /* \'\' */\n.icon-trash-1:before { content: \'\\e985\'; } /* \'\' */\n.icon-doc-1:before { content: \'\\e986\'; } /* \'\' */\n.icon-doc-text-1:before { content: \'\\e987\'; } /* \'\' */\n.icon-doc-add:before { content: \'\\e988\'; } /* \'\' */\n.icon-doc-remove:before { content: \'\\e989\'; } /* \'\' */\n.icon-news:before { content: \'\\e98a\'; } /* \'\' */\n.icon-folder-1:before { content: \'\\e98b\'; } /* \'\' */\n.icon-folder-add:before { content: \'\\e98c\'; } /* \'\' */\n.icon-folder-delete:before { content: \'\\e98d\'; } /* \'\' */\n.icon-archive-1:before { content: \'\\e98e\'; } /* \'\' */\n.icon-box-1:before { content: \'\\e98f\'; } /* \'\' */\n.icon-rss-outline:before { content: \'\\e990\'; } /* \'\' */\n.icon-rss-1:before { content: \'\\e991\'; } /* \'\' */\n.icon-phone-outline:before { content: \'\\e992\'; } /* \'\' */\n.icon-phone-1:before { content: \'\\e993\'; } /* \'\' */\n.icon-menu-outline:before { content: \'\\e994\'; } /* \'\' */\n.icon-menu-1:before { content: \'\\e995\'; } /* \'\' */\n.icon-cog-outline:before { content: \'\\e996\'; } /* \'\' */\n.icon-cog-1:before { content: \'\\e997\'; } /* \'\' */\n.icon-wrench-outline:before { content: \'\\e998\'; } /* \'\' */\n.icon-wrench:before { content: \'\\e999\'; } /* \'\' */\n.icon-basket-1:before { content: \'\\e99a\'; } /* \'\' */\n.icon-calendar-outlilne:before { content: \'\\e99b\'; } /* \'\' */\n.icon-calendar-1:before { content: \'\\e99c\'; } /* \'\' */\n.icon-mic-outline:before { content: \'\\e99d\'; } /* \'\' */\n.icon-mic-1:before { content: \'\\e99e\'; } /* \'\' */\n.icon-volume-off:before { content: \'\\e99f\'; } /* \'\' */\n.icon-volume-low:before { content: \'\\e9a0\'; } /* \'\' */\n.icon-volume-middle:before { content: \'\\e9a1\'; } /* \'\' */\n.icon-volume-high:before { content: \'\\e9a2\'; } /* \'\' */\n.icon-headphones:before { content: \'\\e9a3\'; } /* \'\' */\n.icon-clock-1:before { content: \'\\e9a4\'; } /* \'\' */\n.icon-wristwatch:before { content: \'\\e9a5\'; } /* \'\' */\n.icon-stopwatch:before { content: \'\\e9a6\'; } /* \'\' */\n.icon-lightbulb:before { content: \'\\e9a7\'; } /* \'\' */\n.icon-block-outline:before { content: \'\\e9a8\'; } /* \'\' */\n.icon-block-1:before { content: \'\\e9a9\'; } /* \'\' */\n.icon-resize-full-outline:before { content: \'\\e9aa\'; } /* \'\' */\n.icon-resize-full-1:before { content: \'\\e9ab\'; } /* \'\' */\n.icon-resize-normal-outline:before { content: \'\\e9ac\'; } /* \'\' */\n.icon-resize-normal:before { content: \'\\e9ad\'; } /* \'\' */\n.icon-move-outline:before { content: \'\\e9ae\'; } /* \'\' */\n.icon-move:before { content: \'\\e9af\'; } /* \'\' */\n.icon-popup-1:before { content: \'\\e9b0\'; } /* \'\' */\n.icon-zoom-in-outline:before { content: \'\\e9b1\'; } /* \'\' */\n.icon-zoom-in:before { content: \'\\e9b2\'; } /* \'\' */\n.icon-zoom-out-outline:before { content: \'\\e9b3\'; } /* \'\' */\n.icon-zoom-out:before { content: \'\\e9b4\'; } /* \'\' */\n.icon-popup-2:before { content: \'\\e9b5\'; } /* \'\' */\n.icon-left-open-outline:before { content: \'\\e9b6\'; } /* \'\' */\n.icon-left-open-1:before { content: \'\\e9b7\'; } /* \'\' */\n.icon-right-open-outline:before { content: \'\\e9b8\'; } /* \'\' */\n.icon-right-open-1:before { content: \'\\e9b9\'; } /* \'\' */\n.icon-down-1:before { content: \'\\e9ba\'; } /* \'\' */\n.icon-left-1:before { content: \'\\e9bb\'; } /* \'\' */\n.icon-right-1:before { content: \'\\e9bc\'; } /* \'\' */\n.icon-up-1:before { content: \'\\e9bd\'; } /* \'\' */\n.icon-down-outline:before { content: \'\\e9be\'; } /* \'\' */\n.icon-left-outline:before { content: \'\\e9bf\'; } /* \'\' */\n.icon-right-outline:before { content: \'\\e9c0\'; } /* \'\' */\n.icon-up-outline:before { content: \'\\e9c1\'; } /* \'\' */\n.icon-down-small:before { content: \'\\e9c2\'; } /* \'\' */\n.icon-left-small:before { content: \'\\e9c3\'; } /* \'\' */\n.icon-right-small:before { content: \'\\e9c4\'; } /* \'\' */\n.icon-up-small:before { content: \'\\e9c5\'; } /* \'\' */\n.icon-cw-outline:before { content: \'\\e9c6\'; } /* \'\' */\n.icon-cw-1:before { content: \'\\e9c7\'; } /* \'\' */\n.icon-arrows-cw-outline:before { content: \'\\e9c8\'; } /* \'\' */\n.icon-arrows-cw:before { content: \'\\e9c9\'; } /* \'\' */\n.icon-loop-outline:before { content: \'\\e9ca\'; } /* \'\' */\n.icon-loop-1:before { content: \'\\e9cb\'; } /* \'\' */\n.icon-loop-alt-outline:before { content: \'\\e9cc\'; } /* \'\' */\n.icon-loop-alt:before { content: \'\\e9cd\'; } /* \'\' */\n.icon-shuffle-1:before { content: \'\\e9ce\'; } /* \'\' */\n.icon-play-outline:before { content: \'\\e9cf\'; } /* \'\' */\n.icon-play-1:before { content: \'\\e9d0\'; } /* \'\' */\n.icon-stop-outline:before { content: \'\\e9d1\'; } /* \'\' */\n.icon-stop-1:before { content: \'\\e9d2\'; } /* \'\' */\n.icon-pause-outline:before { content: \'\\e9d3\'; } /* \'\' */\n.icon-pause-1:before { content: \'\\e9d4\'; } /* \'\' */\n.icon-fast-fw-outline:before { content: \'\\e9d5\'; } /* \'\' */\n.icon-fast-fw:before { content: \'\\e9d6\'; } /* \'\' */\n.icon-rewind-outline:before { content: \'\\e9d7\'; } /* \'\' */\n.icon-rewind:before { content: \'\\e9d8\'; } /* \'\' */\n.icon-record-outline:before { content: \'\\e9d9\'; } /* \'\' */\n.icon-record-1:before { content: \'\\e9da\'; } /* \'\' */\n.icon-eject-outline:before { content: \'\\e9db\'; } /* \'\' */\n.icon-eject:before { content: \'\\e9dc\'; } /* \'\' */\n.icon-eject-alt-outline:before { content: \'\\e9dd\'; } /* \'\' */\n.icon-eject-alt:before { content: \'\\e9de\'; } /* \'\' */\n.icon-bat1:before { content: \'\\e9df\'; } /* \'\' */\n.icon-bat2:before { content: \'\\e9e0\'; } /* \'\' */\n.icon-bat3:before { content: \'\\e9e1\'; } /* \'\' */\n.icon-bat4:before { content: \'\\e9e2\'; } /* \'\' */\n.icon-bat-charge:before { content: \'\\e9e3\'; } /* \'\' */\n.icon-plug:before { content: \'\\e9e4\'; } /* \'\' */\n.icon-target-outline:before { content: \'\\e9e5\'; } /* \'\' */\n.icon-target-1:before { content: \'\\e9e6\'; } /* \'\' */\n.icon-wifi-outline:before { content: \'\\e9e7\'; } /* \'\' */\n.icon-wifi:before { content: \'\\e9e8\'; } /* \'\' */\n.icon-desktop:before { content: \'\\e9e9\'; } /* \'\' */\n.icon-laptop:before { content: \'\\e9ea\'; } /* \'\' */\n.icon-tablet:before { content: \'\\e9eb\'; } /* \'\' */\n.icon-mobile-1:before { content: \'\\e9ec\'; } /* \'\' */\n.icon-contrast:before { content: \'\\e9ed\'; } /* \'\' */\n.icon-globe-outline:before { content: \'\\e9ee\'; } /* \'\' */\n.icon-globe-1:before { content: \'\\e9ef\'; } /* \'\' */\n.icon-globe-alt-outline:before { content: \'\\e9f0\'; } /* \'\' */\n.icon-globe-alt:before { content: \'\\e9f1\'; } /* \'\' */\n.icon-sun:before { content: \'\\e9f2\'; } /* \'\' */\n.icon-sun-filled:before { content: \'\\e9f3\'; } /* \'\' */\n.icon-cloud-1:before { content: \'\\e9f4\'; } /* \'\' */\n.icon-flash-outline:before { content: \'\\e9f5\'; } /* \'\' */\n.icon-flash-1:before { content: \'\\e9f6\'; } /* \'\' */\n.icon-moon-1:before { content: \'\\e9f7\'; } /* \'\' */\n.icon-waves-outline:before { content: \'\\e9f8\'; } /* \'\' */\n.icon-waves:before { content: \'\\e9f9\'; } /* \'\' */\n.icon-rain:before { content: \'\\e9fa\'; } /* \'\' */\n.icon-cloud-sun:before { content: \'\\e9fb\'; } /* \'\' */\n.icon-drizzle:before { content: \'\\e9fc\'; } /* \'\' */\n.icon-snow:before { content: \'\\e9fd\'; } /* \'\' */\n.icon-cloud-flash:before { content: \'\\e9fe\'; } /* \'\' */\n.icon-cloud-wind:before { content: \'\\e9ff\'; } /* \'\' */\n.icon-wind:before { content: \'\\ea00\'; } /* \'\' */\n.icon-plane-outline:before { content: \'\\ea01\'; } /* \'\' */\n.icon-plane:before { content: \'\\ea02\'; } /* \'\' */\n.icon-leaf-1:before { content: \'\\ea03\'; } /* \'\' */\n.icon-lifebuoy-1:before { content: \'\\ea04\'; } /* \'\' */\n.icon-briefcase-1:before { content: \'\\ea05\'; } /* \'\' */\n.icon-brush-1:before { content: \'\\ea06\'; } /* \'\' */\n.icon-pipette:before { content: \'\\ea07\'; } /* \'\' */\n.icon-power-outline:before { content: \'\\ea08\'; } /* \'\' */\n.icon-power:before { content: \'\\ea09\'; } /* \'\' */\n.icon-check-outline:before { content: \'\\ea0a\'; } /* \'\' */\n.icon-check-1:before { content: \'\\ea0b\'; } /* \'\' */\n.icon-gift:before { content: \'\\ea0c\'; } /* \'\' */\n.icon-temperatire:before { content: \'\\ea0d\'; } /* \'\' */\n.icon-chart-outline:before { content: \'\\ea0e\'; } /* \'\' */\n.icon-chart:before { content: \'\\ea0f\'; } /* \'\' */\n.icon-chart-alt-outline:before { content: \'\\ea10\'; } /* \'\' */\n.icon-chart-alt:before { content: \'\\ea11\'; } /* \'\' */\n.icon-chart-bar-outline:before { content: \'\\ea12\'; } /* \'\' */\n.icon-chart-bar-1:before { content: \'\\ea13\'; } /* \'\' */\n.icon-chart-pie-outline:before { content: \'\\ea14\'; } /* \'\' */\n.icon-chart-pie-1:before { content: \'\\ea15\'; } /* \'\' */\n.icon-ticket-1:before { content: \'\\ea16\'; } /* \'\' */\n.icon-credit-card-1:before { content: \'\\ea17\'; } /* \'\' */\n.icon-clipboard-1:before { content: \'\\ea18\'; } /* \'\' */\n.icon-database-1:before { content: \'\\ea19\'; } /* \'\' */\n.icon-key-outline:before { content: \'\\ea1a\'; } /* \'\' */\n.icon-key-1:before { content: \'\\ea1b\'; } /* \'\' */\n.icon-flow-split:before { content: \'\\ea1c\'; } /* \'\' */\n.icon-flow-merge:before { content: \'\\ea1d\'; } /* \'\' */\n.icon-flow-parallel-1:before { content: \'\\ea1e\'; } /* \'\' */\n.icon-flow-cross:before { content: \'\\ea1f\'; } /* \'\' */\n.icon-certificate-outline:before { content: \'\\ea20\'; } /* \'\' */\n.icon-certificate:before { content: \'\\ea21\'; } /* \'\' */\n.icon-scissors-outline:before { content: \'\\ea22\'; } /* \'\' */\n.icon-scissors:before { content: \'\\ea23\'; } /* \'\' */\n.icon-flask:before { content: \'\\ea24\'; } /* \'\' */\n.icon-wine:before { content: \'\\ea25\'; } /* \'\' */\n.icon-coffee:before { content: \'\\ea26\'; } /* \'\' */\n.icon-beer:before { content: \'\\ea27\'; } /* \'\' */\n.icon-anchor-outline:before { content: \'\\ea28\'; } /* \'\' */\n.icon-anchor:before { content: \'\\ea29\'; } /* \'\' */\n.icon-puzzle-outline:before { content: \'\\ea2a\'; } /* \'\' */\n.icon-puzzle:before { content: \'\\ea2b\'; } /* \'\' */\n.icon-tree:before { content: \'\\ea2c\'; } /* \'\' */\n.icon-calculator:before { content: \'\\ea2d\'; } /* \'\' */\n.icon-infinity-outline:before { content: \'\\ea2e\'; } /* \'\' */\n.icon-infinity-1:before { content: \'\\ea2f\'; } /* \'\' */\n.icon-pi-outline:before { content: \'\\ea30\'; } /* \'\' */\n.icon-pi:before { content: \'\\ea31\'; } /* \'\' */\n.icon-at:before { content: \'\\ea32\'; } /* \'\' */\n.icon-at-circled:before { content: \'\\ea33\'; } /* \'\' */\n.icon-looped-square-outline:before { content: \'\\ea34\'; } /* \'\' */\n.icon-looped-square-interest:before { content: \'\\ea35\'; } /* \'\' */\n.icon-sort-alphabet-outline:before { content: \'\\ea36\'; } /* \'\' */\n.icon-sort-alphabet:before { content: \'\\ea37\'; } /* \'\' */\n.icon-sort-numeric-outline:before { content: \'\\ea38\'; } /* \'\' */\n.icon-sort-numeric:before { content: \'\\ea39\'; } /* \'\' */\n.icon-dribbble-circled-1:before { content: \'\\ea3a\'; } /* \'\' */\n.icon-dribbble-1:before { content: \'\\ea3b\'; } /* \'\' */\n.icon-facebook-circled-1:before { content: \'\\ea3c\'; } /* \'\' */\n.icon-facebook-1:before { content: \'\\ea3d\'; } /* \'\' */\n.icon-flickr-circled-1:before { content: \'\\ea3e\'; } /* \'\' */\n.icon-flickr-1:before { content: \'\\ea3f\'; } /* \'\' */\n.icon-github-circled-1:before { content: \'\\ea40\'; } /* \'\' */\n.icon-github-1:before { content: \'\\ea41\'; } /* \'\' */\n.icon-lastfm-circled-1:before { content: \'\\ea42\'; } /* \'\' */\n.icon-lastfm-1:before { content: \'\\ea43\'; } /* \'\' */\n.icon-linkedin-circled-1:before { content: \'\\ea44\'; } /* \'\' */\n.icon-linkedin-1:before { content: \'\\ea45\'; } /* \'\' */\n.icon-pinterest-circled-1:before { content: \'\\ea46\'; } /* \'\' */\n.icon-pinterest-1:before { content: \'\\ea47\'; } /* \'\' */\n.icon-skype-outline:before { content: \'\\ea48\'; } /* \'\' */\n.icon-skype-1:before { content: \'\\ea49\'; } /* \'\' */\n.icon-tumbler-circled:before { content: \'\\ea4a\'; } /* \'\' */\n.icon-tumbler:before { content: \'\\ea4b\'; } /* \'\' */\n.icon-twitter-circled-1:before { content: \'\\ea4c\'; } /* \'\' */\n.icon-twitter-1:before { content: \'\\ea4d\'; } /* \'\' */\n.icon-vimeo-circled-1:before { content: \'\\ea4e\'; } /* \'\' */\n.icon-vimeo-1:before { content: \'\\ea4f\'; } /* \'\' *//* Theme Name:The Project - Responsive Website Template\nAuthor:HtmlCoder\nAuthor URI:http://www.htmlcoder.me\nAuthor e-mail:htmlcoder.me@gmail.com\nVersion:1.0.0\nCreated:March 2015\nLicense URI:http://support.wrapbootstrap.com/\nFile Description:Main CSS file of the template */\n/* TABLE OF CONTENTS\n1) Typography\n2) Layout\n3) Sections\n4) Pages ( blog, about etc )\n5) Components\n6) Navigations\n7) Blocks/Widgets\n8) Main Slideshow\n9) Owl carousel\n* */\n/* 1 Typography\n----------------------------------------------------------------------------- */\n/*Fonts\n---------------------------------- */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.navbar .navbar-nav {\n  font-family: \'Raleway\', sans-serif;\n}\nbody {\n  font-family: \'Roboto\', sans-serif;\n}\n.logo-font {\n  font-family: \'Pacifico\', cursive, sans-serif;\n}\n/*Typography\n---------------------------------- */\nhtml {\n  height: 100%;\n}\nbody {\n  font-size: 15px;\n  line-height: 1.46666667;\n  color: #777777;\n  background-color: #ffffff;\n  font-weight: 300;\n}\nbody.canvas-sliding,\nbody.canvas-slid {\n  overflow-x: hidden;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #333333;\n  line-height: 1.2;\n}\nh1 a,\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  color: #333333;\n}\n.dark h1,\n.dark h2,\n.dark h3,\n.dark h4,\n.dark h5,\n.dark h6 {\n  color: #ffffff;\n}\n.dark h1 a,\n.dark h2 a,\n.dark h3 a,\n.dark h4 a,\n.dark h5 a,\n.dark h6 a {\n  color: #ffffff;\n}\n.dark .footer h1,\n.dark .footer h2,\n.dark .footer h3,\n.dark .footer h4,\n.dark .footer h5,\n.dark .footer h6 {\n  color: #999999;\n}\n.dark .footer h1 a,\n.dark .footer h2 a,\n.dark .footer h3 a,\n.dark .footer h4 a,\n.dark .footer h5 a,\n.dark .footer h6 a {\n  color: #999999;\n}\nh1 {\n  font-size: 33px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\nh1.logo-font {\n  text-transform: none;\n  font-weight: 300;\n  font-size: 50px;\n}\nh2 {\n  font-size: 28px;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\nh2.logo-font {\n  text-transform: none;\n}\nh3 {\n  font-size: 24px;\n}\nh4 {\n  font-size: 19px;\n}\nh5 {\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 700;\n}\nh6 {\n  font-size: 13px;\n  font-weight: 700;\n}\n/* Small devices (tablets, 768px and up) */\n@media screen and (min-width: 768px) {\n  .jumbotron h1 {\n    font-size: 130px;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media screen and (max-width: 767px) {\n  .jumbotron h1 {\n    font-size: 60px;\n  }\n}\n.page-title {\n  margin-top: 0;\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  h1, h2, h3, .title {\n    margin-top: 0;\n  }\n}\n.sidebar .title {\n  margin-top: 3px;\n}\np {\n  margin-bottom: 15px;\n}\np.large {\n  font-size: 18px;\n  line-height: 1.4;\n  margin-bottom: 30px;\n}\na {\n  color: #09afdf;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\na:hover {\n  color: #0c9ec7;\n}\na:focus,\na:active {\n  outline: none;\n  color: #0c9ec7;\n}\n.link-dark {\n  color: #333333;\n  text-decoration: none!important;\n}\n.link-dark:hover {\n  color: #333333;\n  text-decoration: underline!important;\n}\n.dark .footer .link-dark {\n  color: #777777;\n  text-decoration: none!important;\n}\n.dark .footer .link-dark:hover {\n  color: #777777;\n  text-decoration: underline!important;\n}\n.link-light {\n  color: #ffffff;\n  text-decoration: none!important;\n}\n.link-light:hover {\n  color: #ffffff;\n  text-decoration: underline!important;\n}\n.no-trans * {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -ms-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\nblockquote {\n  border-left: none;\n  display: inline-block;\n  margin: 20px auto 20px;\n  font-size: 16px;\n  position: relative;\n  padding: 10px 25px;\n}\nblockquote:after {\n  content: \"“\";\n  width: 25px;\n  height: 25px;\n  line-height: 36px;\n  font-size: 36px;\n  font-family: \'PT Serif\', serif;\n  position: absolute;\n  top: 12px;\n  left: 0px;\n  color: #cdcdcd;\n}\n.blockquote:before {\n  font-family: \'PT Serif\', serif;\n  content: \"“\";\n  font-size: 40px;\n}\nblockquote.inline {\n  padding: 0;\n}\nblockquote.inline p {\n  width: 60%;\n  display: inline-block;\n  margin: 0;\n}\nblockquote.inline footer {\n  width: 37%;\n  display: inline-block;\n  padding-left: 5px;\n}\nblockquote.inline:after {\n  top: 0;\n}\nmark,\n.mark {\n  background-color: #09afdf;\n  color: #ffffff;\n}\npre {\n  padding: 20px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  border-radius: 0px;\n}\n.text-muted {\n  color: #999999;\n}\n.text-default {\n  color: #09afdf;\n}\n.well {\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  border-radius: 0px;\n  background-color: #f3f3f3;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.dark hr {\n  border-color: #333333;\n}\n/* Lists\n---------------------------------- */\nul {\n  list-style: square;\n}\n.list-icons,\n.list {\n  list-style: none;\n  padding: 0;\n}\n.list-icons li,\n.list li {\n  padding: 5px 0;\n}\n.list-icons li i {\n  min-width: 25px;\n  text-align: center;\n}\n.list-inline {\n  margin-top: 9px;\n  margin-bottom: 8px;\n}\n.header-top .list-inline {\n  display: inline-block;\n}\n/* Medium desktop devices and tablets */\n@media (min-width: 992px) and (max-width: 1199px) {\n  .header-top .list-inline > li {\n    padding: 0;\n  }\n}\n/* Tables\n---------------------------------- */\n.table:not(.table-bordered) {\n  border-bottom: 2px solid #f3f3f3;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 1px solid #eaeaea;\n  background-color: #eaeaea;\n  color: #333333;\n  font-weight: 400;\n}\n.table.table-colored {\n  border-bottom-color: #09afdf;\n}\n.table-colored > thead > tr > th {\n  border-color: #09afdf;\n  background-color: #09afdf;\n  color: #fff;\n}\ntbody {\n  background-color: #ffffff;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px 15px;\n  border-top: 1px solid #f3f3f3;\n}\n.table-striped tbody {\n  background-color: #ffffff;\n}\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f5f5f5;\n}\n.table-striped.table > tbody > tr > td {\n  border-color: #e8e8e8;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border-color: #f3f3f3;\n}\n.dl-horizontal dd {\n  margin-bottom: 10px;\n}\n.table-hover > tbody > tr:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.dark .table:not(.table-bordered) {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.07);\n}\n.dark .table > tbody {\n  background-color: transparent;\n}\n.dark .table > tbody > tr > td {\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.dark .table > thead > tr > th {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  background-color: rgba(0, 0, 0, 0.15);\n  color: #f1f1f1;\n  font-weight: 400;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .dl-horizontal dd {\n    margin-left: 150px;\n  }\n  .dl-horizontal dt {\n    max-width: 120px;\n  }\n}\n/* 2 Layout\n----------------------------------------------------------------------------- */\n.page-wrapper {\n  background-color: #ffffff;\n}\n.header-top:not(.banner) {\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #d0d0d0;\n  padding: 4px 0;\n}\n.header-top.dark {\n  background-color: #2e3537;\n  border-bottom: 1px solid #252a2c;\n}\n.header-top.colored {\n  background-color: #09afdf;\n  border-bottom: 1px solid #09afdf;\n}\n.header {\n  border-top: 1px solid #ffffff;\n  border-bottom: 2px solid #f1f1f1;\n  background-color: #fcfcfc;\n}\n.header.dark {\n  background-color: #394245;\n  border-top-color: #394245;\n  border-bottom: none;\n}\n.header-top.dark + .header:not(.dark) {\n  border-top-color: #dddddd;\n}\n.header-top:not(.dark) + .header.dark {\n  border-top-color: #303030;\n}\n.header.header-small {\n  padding: 10px 0;\n}\n.dark .footer {\n  background-color: #222222;\n}\n.dark .subfooter {\n  background-color: #373737;\n  border-color: #454545;\n}\n/*Transparent Header*/\n.transparent-header .header-top {\n  z-index: 103;\n  position: relative;\n}\n.transparent-header header.header.transparent-header-on {\n  z-index: 22;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.92);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n  border-top-color: #a0a0a0;\n}\n.transparent-header .header-top.colored + header.header.transparent-header-on {\n  border-top-color: transparent;\n}\n.transparent-header header.header.dark.transparent-header-on {\n  background-color: rgba(57, 66, 69, 0.8);\n  border-top-color: rgba(37, 42, 44, 0.5);\n}\n.header-left {\n  padding: 12px 0 0 0;\n}\n.header-right {\n  position: relative;\n}\n.banner.parallax,\n.banner.light-translucent-bg,\n.banner.dark-translucent-bg,\n.banner.default-translucent-bg {\n  min-height: 250px;\n  padding-top: 60px;\n  padding-bottom: 20px;\n}\n.banner.video-background-banner {\n  min-height: 400px;\n  padding-top: 100px;\n}\n.main-container {\n  padding: 50px 0;\n}\n.block {\n  margin-bottom: 50px;\n}\n.section {\n  padding: 20px 0;\n}\n.footer-top {\n  padding: 20px 0;\n}\n.footer {\n  padding: 40px 0;\n  background-color: #fafafa;\n}\n.footer-content {\n  padding: 20px 0;\n}\n.subfooter {\n  background-color: #f5f5f5;\n  padding: 25px 0;\n  border-top: 1px solid #eaeaea;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .with-dropdown-buttons .navbar-default .navbar-collapse {\n    padding-right: 120px;\n  }\n  .with-dropdown-buttons .header-dropdown-buttons {\n    position: absolute;\n    top: 18px;\n    right: 0px;\n  }\n  /*Full width Header*/\n  header.full-width .with-dropdown-buttons .header-dropdown-buttons {\n    right: 15px;\n  }\n  /*Centered Logo Layout*/\n  .header.centered .header-left {\n    padding: 12px 0;\n  }\n  .header.centered .header-right {\n    text-align: center;\n  }\n  .header.centered .main-navigation .navbar-collapse.collapse {\n    display: inline-block !important;\n    vertical-align: top;\n  }\n  .header.centered .with-dropdown-buttons .navbar-default .navbar-collapse {\n    padding-right: 0px!important;\n  }\n  .header.centered .with-dropdown-buttons .header-dropdown-buttons {\n    position: relative;\n    top: 4px;\n    margin-left: 20px;\n    float: left;\n  }\n}\n/* Large and Medium devices (desktops, tablets less than 1199px) */\n@media (min-width: 768px) and (max-width: 1199px) {\n  .main-navigation.with-dropdown-buttons .navbar-default .navbar-collapse {\n    padding-right: 110px;\n  }\n}\n/* Medium desktop devices and tablets */\n@media (min-width: 768px) and (max-width: 991px) {\n  header.full-width .main-navigation.with-dropdown-buttons .navbar-default .navbar-collapse {\n    padding-right: 15px;\n  }\n}\n/* Medium devices (desktops, tablets less than 991px) */\n@media (max-width: 991px) {\n  .sidebar {\n    margin-top: 40px;\n  }\n  .footer-content {\n    padding: 10px 0;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  /*Transparent Header*/\n  .transparent-header .header-left {\n    padding: 12px 0 12px;\n  }\n  .transparent-header .header-right {\n    z-index: 21;\n  }\n  /*Full width Header*/\n  .header.full-width {\n    padding: 0 15px;\n  }\n  .header.full-width .header-left {\n    padding: 8px 0 0;\n  }\n}\n/* Boxed Layout\n---------------------------------- */\n.boxed .page-wrapper {\n  margin-right: auto;\n  margin-left: auto;\n  position: relative;\n  -webkit-box-shadow: 0px 0px 10px #cacaca;\n  box-shadow: 0px 0px 10px #cacaca;\n}\n.boxed.transparent-page-wrapper .page-wrapper {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.pattern-1 {\n  background-image: url(\"../lib/images/pattern-1.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-2 {\n  background-image: url(\"../lib/images/pattern-2.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-3 {\n  background-image: url(\"../lib/images/pattern-3.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-4 {\n  background-image: url(\"../lib/images/pattern-4.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-5 {\n  background-image: url(\"../lib/images/pattern-5.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-6 {\n  background-image: url(\"../lib/images/pattern-6.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-7 {\n  background-image: url(\"../lib/images/pattern-7.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-8 {\n  background-image: url(\"../lib/images/pattern-8.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-9 {\n  background-image: url(\"../lib/images/pattern-9.png\");\n  background-repeat: repeat;\n  background-position: 0 0;\n}\n.pattern-4 .page-wrapper,\n.pattern-5 .page-wrapper,\n.pattern-6 .page-wrapper,\n.pattern-7 .page-wrapper,\n.pattern-8 .page-wrapper,\n.pattern-9 .page-wrapper {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .boxed .page-wrapper {\n    width: 750px;\n  }\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .boxed .page-wrapper {\n    width: 970px;\n  }\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  .boxed .page-wrapper {\n    width: 1170px;\n  }\n}\n/*Backgrounds\n---------------------------------- */\n.background-img-1 {\n  background: url(\"../lib/images/background-img-1.jpg\") 50% 0px no-repeat;\n}\n.background-img-2 {\n  background: url(\"../lib/images/background-img-2.jpg\") 50% 0px no-repeat;\n}\n.background-img-3 {\n  background: url(\"../lib/images/background-img-3.jpg\") 50% 0px no-repeat;\n}\n.background-img-4 {\n  background: url(\"../lib/images/background-img-4.jpg\") 50% 0px no-repeat;\n}\n.background-img-5 {\n  background: url(\"../lib/images/background-img-5.jpg\") 50% 0px no-repeat;\n}\n.background-img-6 {\n  background: url(\"../lib/images/background-img-6.jpg\") 50% 0px no-repeat;\n}\n.background-img-7 {\n  background: url(\"../lib/images/background-img-7.jpg\") 50% 0px no-repeat;\n}\n.fullscreen-bg {\n  background: url(\"../lib/images/fullscreen-bg.jpg\") 50% 0px no-repeat;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n.boxed .fullscreen-bg {\n  background: none;\n}\n.white-bg {\n  background-color: #ffffff;\n}\n.light-gray-bg {\n  background-color: #fafafa;\n  border-top: 1px solid #f3f3f3;\n  border-bottom: 1px solid #f3f3f3;\n}\n.footer-top.light-gray-bg {\n  background-color: #f5f5f5;\n  border-top: 1px solid #eaeaea;\n  border-bottom: 1px solid #eaeaea;\n}\n.dark-bg {\n  background-color: #373737;\n  color: #cdcdcd;\n}\n.dark-bg + .dark-bg:not(.image-box):not(.full-image-container):not(.full-text-container):not(.full-width-section) {\n  background-color: #555555;\n}\n.dark-bg + .dark-bg + .dark-bg {\n  background-color: #373737;\n}\n.dark-bg h1,\n.dark-bg h2,\n.dark-bg h3,\n.dark-bg h4,\n.dark-bg h5,\n.dark-bg h6 {\n  color: #ffffff;\n}\n.dark-bg a:not(.btn) {\n  text-decoration: underline;\n  color: #cdcdcd;\n}\n.dark-bg a:not(.btn):hover {\n  text-decoration: none;\n  color: #cdcdcd;\n}\n.default-bg {\n  background-color: #09afdf;\n  color: #ffffff;\n}\n.default-bg h1,\n.default-bg h2,\n.default-bg h3,\n.default-bg h4,\n.default-bg h5,\n.default-bg h6 {\n  color: #ffffff;\n}\n.default-bg a:not(.btn) {\n  text-decoration: underline;\n  color: #ffffff;\n}\n.default-bg a:not(.btn):hover {\n  text-decoration: none;\n  color: #ffffff;\n}\n/*Translucent Backgrounds*/\n.no-touch .parallax,\n.no-touch .parallax-2,\n.no-touch .parallax-3,\n.no-touch .fixed-bg {\n  background-attachment: fixed;\n}\n.light-translucent-bg,\n.dark-translucent-bg,\n.default-translucent-bg,\n.two-col-translucent-bg {\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  background-position: 50% 0;\n  background-repeat: no-repeat;\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n}\n.light-translucent-bg:after,\n.dark-translucent-bg:after,\n.default-translucent-bg:after,\n.two-col-translucent-bg:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.light-translucent-bg > div,\n.dark-translucent-bg > div,\n.default-translucent-bg > div,\n.two-col-translucent-bg > div {\n  z-index: 3;\n  position: relative;\n}\n.light-translucent-bg {\n  color: #333;\n  border-bottom: 1px solid #dadada;\n  border-top: 1px solid #dadada;\n}\n.light-translucent-bg:after {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.light-translucent-bg.slight:after {\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.video-background.light-translucent-bg:after,\n.video-background-banner.light-translucent-bg:after {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.light-translucent-bg.hovered:hover:after {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.dark-translucent-bg:after {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.dark-translucent-bg.hovered:hover:after {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.dark-translucent-bg,\n.dark-translucent-bg h1,\n.dark-translucent-bg h2,\n.dark-translucent-bg h3,\n.dark-translucent-bg h4,\n.dark-translucent-bg h5,\n.dark-translucent-bg h6 {\n  color: #ffffff;\n}\n.dark-translucent-bg a:not(.btn) {\n  text-decoration: underline;\n  color: #ffffff;\n}\n.dark-translucent-bg a:not(.btn):hover {\n  text-decoration: none;\n  color: #ffffff;\n}\n.two-col-translucent-bg {\n  color: #333;\n}\n.two-col-translucent-bg:after {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .two-col-translucent-bg:after {\n    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0.5) 50%);\n    background: -webkit-gradient(left, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0.5) 50%);\n    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0.5) 50%);\n    background: -o-linear-gradient(left, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0.5) 50%);\n    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0.5) 50%);\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0.5) 50%);\n  }\n  .two-col-translucent-bg .container > .row > div + div,\n  .two-col-translucent-bg .container > .row > div + div h1,\n  .two-col-translucent-bg .container > .row > div + div h2,\n  .two-col-translucent-bg .container > .row > div + div h3,\n  .two-col-translucent-bg .container > .row > div + div h4,\n  .two-col-translucent-bg .container > .row > div + div h5,\n  .two-col-translucent-bg .container > .row > div + div h6 {\n    color: #ffffff;\n  }\n  .two-col-translucent-bg .container > .row > div + div a:not(.btn) {\n    text-decoration: underline;\n    color: #ffffff;\n  }\n  .two-col-translucent-bg .container > .row > div + div a:not(.btn):hover {\n    text-decoration: none;\n    color: #ffffff;\n  }\n}\n.default-translucent-bg:after {\n  background-color: rgba(9, 175, 223, 0.7);\n}\n.default-translucent-bg.hovered:hover:after {\n  background-color: rgba(9, 175, 223, 0.8);\n}\n.default-translucent-bg,\n.default-translucent-bg h1,\n.default-translucent-bg h2,\n.default-translucent-bg h3,\n.default-translucent-bg h4,\n.default-translucent-bg h5,\n.default-translucent-bg h6 {\n  color: #ffffff;\n}\n.default-translucent-bg a:not(.btn) {\n  text-decoration: underline;\n  color: #ffffff;\n}\n.default-translucent-bg a:not(.btn):hover {\n  text-decoration: none;\n  color: #ffffff;\n}\n.default-hovered {\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.default-hovered:hover:after,\n.default-hovered:hover {\n  background-color: #09afdf;\n}\n.light-gray-bg.default-hovered:hover * {\n  color: #ffffff;\n}\n/*Animated Backgrounds\n---------------------------------- */\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .animated-text h2 {\n    -webkit-transition: all 0.2s ease-in-out;\n    -o-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n  .animated-text h2 + h2 {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -webkit-transform: scale(1.15);\n    -moz-transform: scale(1.15);\n    -ms-transform: scale(1.15);\n    -o-transform: scale(1.15);\n    transform: scale(1.15);\n  }\n  .animated-text:hover h2 {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -webkit-transform: scale(0.85);\n    -moz-transform: scale(0.85);\n    -ms-transform: scale(0.85);\n    -o-transform: scale(0.85);\n    transform: scale(0.85);\n  }\n  .animated-text:hover h2 + h2 {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1);\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .animated-text h2 + h2 {\n    display: none;\n  }\n}\n/* Fixed navigation\n---------------------------------- */\n.fixed-header-on .header.fixed,\n.fixed-header-on header.header.transparent-header-on {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1006;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0);\n}\n.fixed-header-on .header.fixed:not(.dark) {\n  border-bottom: 1px solid #f1f1f1;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n.fixed-header-on .dark.header.fixed {\n  background-color: rgba(57, 66, 69, 0.95);\n}\n.fixed-header-on.boxed .header.fixed {\n  left: auto;\n}\n.fixed-header-on .header .logo {\n  margin: 0px 0 -5px 0;\n  display: none;\n}\n.fixed-header-on .header .logo img {\n  max-height: 30px;\n}\n.fixed-header-on .header .site-slogan,\n.fixed-header-on .header.centered .header-left {\n  display: none;\n}\n.fixed-header-on .header.fixed.animated {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .fixed-header-on.boxed .header.fixed {\n    width: 750px;\n  }\n  .fixed-header-on .header-left {\n    padding: 0;\n  }\n  .fixed-header-on .dark.header .dropdown-menu {\n    border: 1px solid #2e3537;\n  }\n  .fixed-header-on .main-navigation .navbar-nav > li > a {\n    padding-top: 21px!important;\n    padding-bottom: 21px!important;\n  }\n  .fixed-header-on .header:not(.centered) .main-navigation .navbar-nav > .dropdown > a:before {\n    top: 24px;\n  }\n  .fixed-header-on .header:not(.centered) .main-navigation.with-dropdown-buttons .header-dropdown-buttons {\n    top: 12px;\n  }\n  .fixed-header-on .header-dropdown-buttons .btn-group .dropdown-menu,\n  .fixed-header-on .dark .header-dropdown-buttons .btn-group .dropdown-menu {\n    margin-top: 11px;\n  }\n  /*Fixed Header Animations Duration*/\n  .fixed.header .main-navigation.animated .navbar-nav > li > a,\n  .header-left {\n    -webkit-transition: padding 0s linear, color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n    -o-transition: padding 0s linear, color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n    transition: padding 0s linear, color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n  }\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .fixed-header-on .header .logo,\n  .fixed-header-on .header .site-slogan {\n    display: block;\n  }\n  .fixed-header-on.boxed .header.fixed {\n    width: 970px;\n  }\n  .fixed-header-on .header-left {\n    padding: 7px 0 0 0;\n  }\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  .fixed-header-on.boxed .header.fixed {\n    width: 1170px;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  /* Fixed header position */\n  .header.fixed {\n    position: relative !important;\n    top: auto !important;\n  }\n  .header.fixed.transparent-header-on {\n    position: absolute!important;\n  }\n}\n/* Custom Grid\n---------------------------------- */\n.grid-space-20 {\n  margin-right: -10.5px;\n  margin-left: -10.5px;\n}\n.grid-space-20 .col-lg-6,\n.grid-space-20 .col-lg-4,\n.grid-space-20 .col-lg-3,\n.grid-space-20 .col-md-6,\n.grid-space-20 .col-md-4,\n.grid-space-20 .col-md-3,\n.grid-space-20 .col-sm-6,\n.grid-space-20 .col-sm-4,\n.grid-space-20 .col-sm-3,\n.grid-space-20 .col-xs-6,\n.grid-space-20 .col-xs-4,\n.grid-space-20 .col-xs-3 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.grid-space-10 {\n  margin-right: -6px;\n  margin-left: -6px;\n}\n.grid-space-10 .col-lg-6,\n.grid-space-10 .col-lg-4,\n.grid-space-10 .col-lg-3,\n.grid-space-10 .col-md-6,\n.grid-space-10 .col-md-4,\n.grid-space-10 .col-md-3,\n.grid-space-10 .col-sm-6,\n.grid-space-10 .col-sm-4,\n.grid-space-10 .col-sm-3,\n.grid-space-10 .col-xs-6,\n.grid-space-10 .col-xs-4,\n.grid-space-10 .col-xs-3 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.grid-space-0 {\n  margin-right: 0;\n  margin-left: 0;\n}\n.grid-space-0 .col-lg-6,\n.grid-space-0 .col-lg-4,\n.grid-space-0 .col-lg-3,\n.grid-space-0 .col-md-6,\n.grid-space-0 .col-md-4,\n.grid-space-0 .col-md-3,\n.grid-space-0 .col-sm-6,\n.grid-space-0 .col-sm-4,\n.grid-space-0 .col-sm-3,\n.grid-space-0 .col-xs-6,\n.grid-space-0 .col-xs-4,\n.grid-space-0 .col-xs-3 {\n  padding-left: 0;\n  padding-right: 0;\n}\n.grid-space-0 > div {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n/* Separators\n---------------------------------- */\n.separator {\n  width: 100%;\n  margin: 20px auto 15px;\n  position: relative;\n  height: 1px;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.separator:after {\n  height: 1px;\n  background: #e8e8e8;\n  background: -moz-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(35%, rgba(0, 0, 0, 0.09)), color-stop(70%, rgba(0, 0, 0, 0.09)), color-stop(100%, rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -o-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -ms-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.09) 70%, rgba(0, 0, 0, 0) 100%);\n  position: absolute;\n  bottom: -1px;\n  content: \"\";\n  width: 100%;\n  left: 0;\n}\n.dark-bg:not(.banner) .separator:after {\n  background: #505050;\n  background: -moz-linear-gradient(left, #373737 0%, #505050 35%, #505050 70%, #373737 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #373737), color-stop(35%, #505050), color-stop(70%, #505050), color-stop(100%, #373737));\n  background: -webkit-linear-gradient(left, #373737 0%, #505050 35%, #505050 70%, #373737 100%);\n  background: -o-linear-gradient(left, #373737 0%, #505050 35%, #505050 70%, #373737 100%);\n  background: -ms-linear-gradient(left, #373737 0%, #505050 35%, #505050 70%, #373737 100%);\n  background: linear-gradient(to right, #373737 0%, #505050 35%, #505050 70%, #373737 100%);\n}\n#footer.dark .separator:after {\n  background: #505050;\n  background: -moz-linear-gradient(left, #222222 0%, #505050 35%, #505050 70%, #222222 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #222222), color-stop(35%, #505050), color-stop(70%, #505050), color-stop(100%, #222222));\n  background: -webkit-linear-gradient(left, #222222 0%, #505050 35%, #505050 70%, #222222 100%);\n  background: -o-linear-gradient(left, #222222 0%, #505050 35%, #505050 70%, #222222 100%);\n  background: -ms-linear-gradient(left, #222222 0%, #505050 35%, #505050 70%, #222222 100%);\n  background: linear-gradient(to right, #222222 0%, #505050 35%, #505050 70%, #222222 100%);\n}\n.default-bg .separator:after,\n.dark-translucent-bg .separator:after,\n.default-translucent-bg .separator:after,\n.light.separator:after {\n  background: rgba(255, 255, 255, 0.5);\n  background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(35%, rgba(255, 255, 255, 0.5)), color-stop(70%, rgba(255, 255, 255, 0.5)), color-stop(100%, rgba(255, 255, 255, 0)));\n  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .two-col-translucent-bg .container > .row > div + div .separator:after {\n    background: rgba(255, 255, 255, 0.5);\n    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(35%, rgba(255, 255, 255, 0.5)), color-stop(70%, rgba(255, 255, 255, 0.5)), color-stop(100%, rgba(255, 255, 255, 0)));\n    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%);\n  }\n}\n.light-translucent-bg .separator:after,\n.two-col-translucent-bg .container > .row > div .separator:after,\n.dark.separator:after {\n  background: rgba(0, 0, 0, 0.5);\n  background: -moz-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 35%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(35%, rgba(0, 0, 0, 0.4)), color-stop(70%, rgba(0, 0, 0, 0.4)), color-stop(100%, rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 35%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -o-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 35%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -ms-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 35%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 35%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%);\n}\nh3 + .separator,\nh4 + .separator,\nh5 + .separator {\n  margin-top: 15px;\n}\n.separator-2,\n.separator-3 {\n  width: 100%;\n  margin-bottom: 15px;\n  position: relative;\n  height: 1px;\n}\n.separator-2:after {\n  height: 1px;\n  background: #d1d1d1;\n  background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0, 0, 0, 0.18)), color-stop(35%, rgba(0, 0, 0, 0.12)), color-stop(70%, rgba(0, 0, 0, 0.05)), color-stop(100%, rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -o-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -ms-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  position: absolute;\n  bottom: -1px;\n  left: 0px;\n  content: \"\";\n  width: 100%;\n}\n.dark-bg .separator-2:after {\n  background: #666666;\n  background: -moz-linear-gradient(left, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #666666), color-stop(35%, #555555), color-stop(70%, #444444), color-stop(100%, #373737));\n  background: -webkit-linear-gradient(left, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: -o-linear-gradient(left, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: -ms-linear-gradient(left, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: linear-gradient(to right, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n}\n#footer.dark .separator-2:after {\n  background: #444444;\n  background: -moz-linear-gradient(left, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #444444), color-stop(35%, #393939), color-stop(70%, #323232), color-stop(100%, #222222));\n  background: -webkit-linear-gradient(left, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: -o-linear-gradient(left, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: -ms-linear-gradient(left, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: linear-gradient(to right, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n}\n.light-translucent-bg .separator-2:after,\n.two-col-translucent-bg .container > .row > div .separator-2:after,\n.dark.separator-2:after {\n  background: rgba(0, 0, 0, 0.5);\n  background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0, 0, 0, 0.5)), color-stop(35%, rgba(232, 232, 232, 0.4)), color-stop(70%, rgba(232, 232, 232, 0.2)), color-stop(100%, rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -ms-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n}\n.default-bg .separator-2:after,\n.default-translucent-bg .separator-2:after,\n.dark-translucent-bg .separator-2:after,\n.light.separator-2:after {\n  background: rgba(255, 255, 255, 0.5);\n  background: -moz-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0.5)), color-stop(35%, rgba(232, 232, 232, 0.4)), color-stop(70%, rgba(232, 232, 232, 0.2)), color-stop(100%, rgba(255, 255, 255, 0)));\n  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -o-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -ms-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .two-col-translucent-bg .container > .row > div + div .separator-2:after {\n    background: rgba(255, 255, 255, 0.5);\n    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0.5)), color-stop(35%, rgba(232, 232, 232, 0.4)), color-stop(70%, rgba(232, 232, 232, 0.2)), color-stop(100%, rgba(255, 255, 255, 0)));\n    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -o-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  }\n}\n.separator-3:after {\n  height: 1px;\n  background: #d1d1d1;\n  background: -moz-linear-gradient(right, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -webkit-gradient(linear, right top, left top, color-stop(0%, rgba(0, 0, 0, 0.18)), color-stop(35%, rgba(0, 0, 0, 0.12)), color-stop(70%, rgba(0, 0, 0, 0.05)), color-stop(100%, rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -o-linear-gradient(right, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -ms-linear-gradient(right, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  position: absolute;\n  bottom: -1px;\n  left: 0px;\n  content: \"\";\n  width: 100%;\n}\n.dark-bg .separator-3:after {\n  background: #666666;\n  background: -moz-linear-gradient(right, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: -webkit-gradient(linear, right top, left top, color-stop(0%, #666666), color-stop(35%, #555555), color-stop(70%, #444444), color-stop(100%, #373737));\n  background: -webkit-linear-gradient(right, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: -o-linear-gradient(right, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: -ms-linear-gradient(right, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n  background: linear-gradient(to left, #666666 0%, #555555 35%, #444444 70%, #373737 100%);\n}\n#footer.dark .separator-3:after {\n  background: #444444;\n  background: -moz-linear-gradient(right, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: -webkit-gradient(linear, right top, left top, color-stop(0%, #444444), color-stop(35%, #393939), color-stop(70%, #323232), color-stop(100%, #222222));\n  background: -webkit-linear-gradient(right, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: -o-linear-gradient(right, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: -ms-linear-gradient(right, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n  background: linear-gradient(to left, #444444 0%, #393939 35%, #323232 70%, #222222 100%);\n}\n.light-translucent-bg .separator-3:after,\n.two-col-translucent-bg .container > .row > div .separator-3:after,\n.dark.separator-3:after {\n  background: rgba(0, 0, 0, 0.5);\n  background: -moz-linear-gradient(right, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -webkit-gradient(linear, right top, left top, color-stop(0%, rgba(0, 0, 0, 0.5)), color-stop(35%, rgba(232, 232, 232, 0.4)), color-stop(70%, rgba(232, 232, 232, 0.2)), color-stop(100%, rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -o-linear-gradient(right, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -ms-linear-gradient(right, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to left, rgba(0, 0, 0, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(0, 0, 0, 0) 100%);\n}\n.default-bg .separator-3:after,\n.default-translucent-bg .separator-3:after,\n.dark-translucent-bg .separator-3:after,\n.light.separator-3:after {\n  background: rgba(255, 255, 255, 0.5);\n  background: -moz-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -webkit-gradient(linear, right top, left top, color-stop(0%, rgba(255, 255, 255, 0.5)), color-stop(35%, rgba(232, 232, 232, 0.4)), color-stop(70%, rgba(232, 232, 232, 0.2)), color-stop(100%, rgba(255, 255, 255, 0)));\n  background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -o-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: -ms-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .two-col-translucent-bg .container > .row > div + div .separator-3:after {\n    background: rgba(255, 255, 255, 0.5);\n    background: -moz-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -webkit-gradient(linear, right top, left top, color-stop(0%, rgba(255, 255, 255, 0.5)), color-stop(35%, rgba(232, 232, 232, 0.4)), color-stop(70%, rgba(232, 232, 232, 0.2)), color-stop(100%, rgba(255, 255, 255, 0)));\n    background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -o-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: -ms-linear-gradient(right, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n    background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.4) 35%, rgba(232, 232, 232, 0.2) 70%, rgba(255, 255, 255, 0) 100%);\n  }\n}\n.footer-content .separator-2,\n.footer-content .separator-3 {\n  margin-bottom: 25px;\n}\n.object-non-visible {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.object-visible,\n.touch .object-non-visible {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important;\n}\n/* Targeting only Firefox for smoothest animations */\n@-moz-document url-prefix() {\n  .object-visible,\n  .touch .object-non-visible {\n    -webkit-transition: opacity 0.6s ease-in-out;\n    -moz-transition: opacity 0.6s ease-in-out;\n    -o-transition: opacity 0.6s ease-in-out;\n    -ms-transition: opacity 0.6s ease-in-out;\n    transition: opacity 0.6s ease-in-out;\n  }\n}\n/* Miscellaneous\n---------------------------------- */\n.pl-5 {\n  padding-left: 5px;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.pl-20 {\n  padding-left: 20px;\n}\n.pr-5 {\n  padding-right: 5px;\n}\n.pr-10 {\n  padding-right: 10px;\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.p-20 {\n  padding: 20px;\n}\n.p-30 {\n  padding: 30px;\n}\n.p-40 {\n  padding: 40px;\n}\n.ph-20 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.ph-30 {\n  padding-left: 30px;\n  padding-right: 30px;\n  .b bnm\n}\n.ph-40 {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.pv-20 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.pv-30 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.pv-40 {\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n.mt-5 {\n  margin-top: 5px;\n}\n.mb-5 {\n  margin-bottom: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.mb-10 {\n  margin-bottom: 10px;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.mb-20 {\n  margin-bottom: 20px;\n}\n.space-top {\n  padding-top: 20px;\n}\n.space-bottom {\n  padding-bottom: 20px;\n}\n.margin-clear {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.padding-top-clear {\n  padding-top: 0 !important;\n}\n.padding-bottom-clear {\n  padding-bottom: 0 !important;\n}\n.padding-ver-clear {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important;\n}\n.padding-hor-clear {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.border-bottom-clear {\n  border-bottom: none !important;\n}\n.border-top-clear {\n  border-top: none !important;\n}\n.border-clear {\n  border: none !important;\n}\n.circle {\n  -webkit-border-radius: 100%!important;\n  -moz-border-radius: 100%!important;\n  border-radius: 100%!important;\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .text-center-xs {\n    text-align: center;\n  }\n}\n/* 3 Sections\n----------------------------------------------------------------------------- */\n/*Header Top*/\n.header-top {\n  font-size: 12px;\n  color: #777777;\n  font-weight: 300;\n}\n.header-top.dark,\n.header-top.colored {\n  color: #ffffff;\n}\n.header-top.colored a {\n  color: #ffffff;\n  text-decoration: underline;\n}\n.header-top.colored a:hover {\n  text-decoration: none;\n}\n/* Medium desktop devices and tablets */\n@media (min-width: 992px) and (max-width: 1199px) {\n  .header-top {\n    font-size: 11px;\n  }\n}\n/*Header*/\n.header.dark {\n  color: #cacaca;\n}\n/*Footer*/\n.footer {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.footer h2.title {\n  font-size: 22px;\n  text-transform: none;\n  margin-bottom: 10px;\n}\n/*Subfooter*/\n.subfooter {\n  font-size: 14px;\n  line-height: 1.3;\n  color: #999999;\n}\n.subfooter p {\n  margin-bottom: 0;\n}\n/* 4 Pages\n----------------------------------------------------------------------------- */\n/* Blog pages\n---------------------------------- */\n.blogpost {\n  margin: 0 0 70px;\n}\n.blogpost header {\n  padding: 20px 10px 20px;\n}\n.blogpost header h2 {\n  text-transform: none;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.blogpost .post-info {\n  font-size: 12px;\n  color: #aaa;\n  font-weight: 400;\n}\n.blogpost .post-info > span {\n  margin-right: 5px;\n  display: inline-block;\n}\n.blogpost .post-info a {\n  color: #aaa;\n}\n.blogpost .blogpost-content {\n  padding: 0 10px 10px;\n}\n.blogpost .row .blogpost-content {\n  padding-bottom: 0;\n}\n.blogpost footer {\n  font-size: 12px;\n  padding: 10px;\n  color: #aaa;\n  border-top: 1px solid #eaeaea;\n}\n.blogpost .row + footer {\n  padding: 10px 0;\n}\n.blogpost.full {\n  margin-bottom: 30px;\n}\n.blogpost.full header {\n  padding: 0 0 15px 0;\n}\n.blogpost.full .blogpost-content {\n  padding: 0 0 5px;\n}\n.blogpost.full footer {\n  padding: 10px 0;\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .blogpost .row header {\n    padding-top: 0;\n  }\n  .blogpost .row + footer {\n    margin-top: 15px;\n  }\n}\n/* Comments\n---------------------------------- */\n#comments {\n  margin-top: 60px;\n}\n.comments h2.title {\n  margin-bottom: 40px;\n  padding-bottom: 10px;\n  position: relative;\n}\n.comments h2.title:after {\n  height: 1px;\n  background: #d1d1d1;\n  background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(0, 0, 0, 0.18)), color-stop(35%, rgba(0, 0, 0, 0.12)), color-stop(70%, rgba(0, 0, 0, 0.05)), color-stop(100%, rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -o-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: -ms-linear-gradient(left, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 35%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0) 100%);\n  position: absolute;\n  bottom: -1px;\n  left: 0px;\n  content: \"\";\n  width: 100%;\n}\n.comment {\n  font-size: 14px;\n}\n.comment .comment {\n  margin-left: 75px;\n}\n.comment h3 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.comment p {\n  margin-bottom: 10px;\n}\n.comment .btn-sm-link {\n  padding: 0;\n}\n.comment-avatar {\n  width: 50px;\n  float: left;\n  margin: 0 15px 0 0;\n}\n.comment-content {\n  border-bottom: 1px solid #f1f1f1;\n  margin-bottom: 40px;\n  clear: both;\n}\n.comment-meta {\n  margin-bottom: 15px;\n  color: #aaa;\n  font-size: 12px;\n}\n.comment-meta a {\n  color: #aaa;\n}\n.comment-meta a:hover {\n  text-decoration: underline;\n}\n/* Blog Masonry Grid\n---------------------------------- */\n.masonry-grid-item .blogpost footer {\n  padding-top: 0px;\n  border-top: none;\n}\n.masonry-grid-item .blogpost header h2 {\n  font-size: 22px;\n}\n/* Blog Timeline layout\n---------------------------------- */\n.timeline {\n  position: relative;\n  padding: 40px 0;\n  margin-top: 40px;\n}\n.timeline .blogpost footer {\n  padding-top: 0px;\n  border-top: none;\n}\n.timeline .blogpost header h2 {\n  font-size: 22px;\n}\n.timeline .timeline-item {\n  padding: 0 15px;\n}\n.timeline-date-label {\n  float: none;\n  clear: both;\n  display: block;\n  margin: 0px auto;\n  text-align: center;\n  margin-bottom: 80px;\n  line-height: 1;\n  width: 135px;\n  position: relative;\n  z-index: 2;\n  color: #ffffff;\n}\n.timeline-date-label:after {\n  background-color: #09afdf;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  height: 30px;\n  width: 100%;\n  position: absolute;\n  bottom: -8px;\n  z-index: -1;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .timeline .blogpost {\n    margin-bottom: 0;\n  }\n  .timeline:before {\n    background-color: #e8e8e8;\n    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 10%, rgba(0, 0, 0, 0.09) 90%, rgba(0, 0, 0, 0) 100%);\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(10%, rgba(0, 0, 0, 0.09)), color-stop(90%, rgba(0, 0, 0, 0.09)), color-stop(100%, rgba(0, 0, 0, 0)));\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 10%, rgba(0, 0, 0, 0.09) 90%, rgba(0, 0, 0, 0) 100%);\n    background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 10%, rgba(0, 0, 0, 0.09) 90%, rgba(0, 0, 0, 0) 100%);\n    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 10%, rgba(0, 0, 0, 0.09) 90%, rgba(0, 0, 0, 0) 100%);\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 10%, rgba(0, 0, 0, 0.09) 90%, rgba(0, 0, 0, 0) 100%);\n    width: 1px;\n    height: 100%;\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    display: block;\n    top: 0;\n  }\n  .timeline .timeline-item {\n    position: relative;\n    width: 50%;\n    padding-left: 0;\n    padding-right: 40px;\n    margin-bottom: 80px;\n    float: left;\n    clear: left;\n    z-index: 1;\n  }\n  .timeline .timeline-item.pull-right {\n    position: relative;\n    width: 50%;\n    padding-left: 40px;\n    padding-right: 0;\n    margin-top: 80px;\n    margin-bottom: 0;\n    float: right;\n    clear: right;\n  }\n  .timeline .timeline-item.pull-right + .timeline-date-label {\n    padding-top: 80px;\n  }\n  .timeline .timeline-item:after {\n    content: \"\";\n    font-family: \"FontAwesome\";\n    right: 0px;\n    background-color: #eaeaea;\n    left: auto;\n    position: absolute;\n    top: 20px;\n    z-index: -1;\n    width: 35px;\n    height: 1px;\n  }\n  .timeline .timeline-item:before {\n    content: \"\";\n    position: absolute;\n    background-color: #cdcdcd;\n    border: 1px solid #cdcdcd;\n    height: 7px;\n    width: 7px;\n    -webkit-border-radius: 100%;\n    -moz-border-radius: 100%;\n    border-radius: 100%;\n    top: 17px;\n    right: -4px;\n  }\n  .timeline .timeline-item.pull-right:after {\n    right: auto;\n    left: 0px;\n  }\n  .timeline .timeline-item.pull-right:before {\n    left: -3px;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .timeline .timeline-item.pull-right {\n    float: none !important;\n  }\n}\n/* Shop Pages\n---------------------------------- */\n/*Product Page*/\n.product.price {\n  font-size: 24px;\n  font-weight: 400;\n}\n.product.price del {\n  color: #cdcdcd;\n  font-size: 14px;\n}\n.product.element-list {\n  margin-top: 7px;\n}\n/*Dropdown Cart*/\n.header-dropdown-buttons .btn-group .dropdown-menu.cart {\n  padding: 0;\n  min-width: 350px;\n  font-size: 13px;\n}\n.header-dropdown-buttons .btn-group .dropdown-menu.cart table {\n  margin-bottom: 0;\n}\n.header-dropdown-buttons .btn-group .dropdown-menu.cart .panel-body {\n  padding: 0px 10px 0px;\n}\n.cart-count {\n  position: absolute;\n  top: -2px;\n  right: -3px;\n  line-height: 14px;\n  width: 14px;\n  height: 14px;\n  border-radius: 30%;\n  font-size: 10px;\n  text-shadow: none;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.dark .header-dropdown-buttons .cart-count {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #cdcdcd;\n}\n.dropdown.open .cart-count,\n.dropdown:hover .cart-count {\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.total-amount,\n.total-quantity {\n  font-size: 13px;\n}\n.cart .table > tbody > tr > td,\n.cart.table > tbody > tr > td {\n  vertical-align: inherit;\n}\n.cart .quantity {\n  width: 50px;\n  font-size: 11px;\n}\n.cart .product {\n  width: 220px;\n  font-size: 13px;\n}\n.cart .product .small {\n  display: block;\n  color: #999999;\n}\n/* Cart and Checkout pages\n---------------------------------- */\n.cart.table .price {\n  width: 18%;\n  font-size: 14px;\n}\n.cart.table .amount,\n.cart.table .remove,\n.cart.table .quantity {\n  width: 12%;\n}\n.cart.table .quantity input {\n  width: 60px;\n  padding: 6px;\n}\n.cart.table .product {\n  font-size: 15px;\n}\n.cart.table .product small {\n  font-size: 12px;\n  display: block;\n  color: #999999;\n}\n.cart.table .amount {\n  text-align: right;\n}\n.cart.table thead > tr > th {\n  font-size: 16px;\n}\n.cart.table .total-quantity,\n.cart.table .total-amount {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.cart.table .total-amount {\n  text-align: right;\n}\n.cart.table .btn-remove {\n  position: relative;\n  top: -5px;\n}\n.cart.table .form-group {\n  margin: 7px 0;\n}\n.table .information {\n  width: 80%;\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .cart.table thead > tr > th {\n    font-size: 14px;\n  }\n  .cart.table .amount,\n  .cart.table .price {\n    width: 12%;\n  }\n  .cart.table .remove,\n  .cart.table .quantity {\n    width: 8%;\n  }\n  .cart.table > thead > tr > th,\n  .cart.table > tbody > tr > th,\n  .cart.table > tfoot > tr > th,\n  .cart.table > thead > tr > td,\n  .cart.table > tbody > tr > td,\n  .cart.table > tfoot > tr > td {\n    padding: 8px 10px;\n  }\n}\n/* Extra small devices (phones, less than 480px) */\n@media (max-width: 480px) {\n  .cart.table > thead > tr > th,\n  .cart.table > tbody > tr > th,\n  .cart.table > tfoot > tr > th,\n  .cart.table > thead > tr > td,\n  .cart.table > tbody > tr > td,\n  .cart.table > tfoot > tr > td {\n    padding: 8px 7px;\n  }\n}\n/* About Us Pages\n---------------------------------- */\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .team-member {\n    max-width: 480px;\n    margin: 20px auto 20px !important;\n  }\n}\n/* Coming Soon Page\n---------------------------------- */\n.is-countdown {\n  border: 1px solid transparent;\n  background-color: transparent;\n}\n.countdown-row {\n  height: 0;\n  padding: 0;\n}\n.countdown-section {\n  text-align: center;\n  padding: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.2);\n  -webkit-border-radius: 5%;\n  -moz-border-radius: 5%;\n  border-radius: 5%;\n}\n.countdown-show4 .countdown-section {\n  width: 24%;\n  margin: 10px 0.5%;\n}\n.countdown-amount {\n  font-size: 36px;\n  font-weight: 700;\n  display: block;\n}\n.countdown-period {\n  display: block;\n  font-size: 28px;\n  line-height: 1.2;\n  margin-top: 15px;\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .countdown-amount {\n    font-size: 24px;\n  }\n  .countdown-period {\n    font-size: 18px;\n  }\n}\n/* Extra small devices (phones, less than 480px) */\n@media (max-width: 480px) {\n  .countdown-amount {\n    font-size: 18px;\n  }\n  .countdown-period {\n    font-size: 10px;\n  }\n}\n/* Pages Misc\n---------------------------------- */\n.icons-page i {\n  font-size: 20px;\n  width: 35px;\n  text-align: center;\n}\n.grid span {\n  padding: 5px 5px;\n  background-color: #666;\n  border: 1px solid #444;\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  color: #fff;\n}\n/* 5 Components\n----------------------------------------------------------------------------- */\n/* Buttons\n---------------------------------- */\n/*Buttons Color Variations*/\n.btn:focus {\n  color: inherit;\n}\n.btn {\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n/*Default Button*/\n.btn-default {\n  color: #ffffff;\n  background-color: #09afdf;\n  border-color: #0c9ec7;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default.focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #ffffff;\n  background-color: #0c9ec7;\n  border-color: #0c9ec7;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default {\n  background-color: #09afdf;\n  border-color: #0c9ec7;\n}\n.btn-default-transparent {\n  color: #777777;\n  background-color: transparent;\n  border-color: #09afdf;\n}\n.btn-default-transparent:hover,\n.btn-default-transparent:focus,\n.btn-default-transparent.focus,\n.btn-default-transparent:active,\n.btn-default-transparent.active,\n.open > .dropdown-toggle.btn-default-transparent {\n  color: #ffffff;\n  background-color: #0c9ec7;\n  border-color: #0781a4;\n}\n.dark-bg .btn-default-transparent {\n  color: #ffffff;\n}\n.default-bg .btn-default,\n.default-translucent-bg .btn-default,\n.default-bg .btn-default-transparent,\n.default-translucent-bg .btn-default-transparent {\n  color: #09afdf;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n.default-bg .btn-default:hover,\n.default-translucent-bg .btn-default:hover,\n.default-bg .btn-default:focus,\n.default-translucent-bg .btn-default:focus,\n.default-bg .btn-default.focus,\n.default-translucent-bg .btn-default.focus,\n.default-bg .btn-default:active,\n.default-translucent-bg .btn-default:active,\n.default-bg .btn-default.active,\n.default-translucent-bg .btn-default.active,\n.default-bg .open > .dropdown-toggle.btn-default,\n.default-translucent-bg .open > .dropdown-toggle.btn-default,\n.default-bg .btn-default-transparent:hover,\n.default-translucent-bg .btn-default-transparent:hover,\n.default-bg .btn-default-transparent:focus,\n.default-translucent-bg .btn-default-transparent:focus,\n.default-bg .btn-default-transparent.focus,\n.default-translucent-bg .btn-default-transparent.focus,\n.default-bg .btn-default-transparent:active,\n.default-translucent-bg .btn-default-transparent:active,\n.default-bg .btn-default-transparent.active,\n.default-translucent-bg .btn-default-transparent.active,\n.default-bg .open > .dropdown-toggle.btn-default-transparent,\n.default-translucent-bg .open > .dropdown-toggle.btn-default-transparent {\n  color: #ffffff;\n  background-color: transparent;\n  border-color: #ffffff;\n}\n.dark .btn-default {\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.dark .btn-default .badge {\n  color: rgba(0, 0, 0, 0.2);\n  background-color: #ffffff;\n}\n.dark .btn-default:hover,\n.dark .btn-default:focus,\n.dark .btn-default.focus,\n.dark .btn-default:active,\n.dark .btn-default.active,\n.dark .open > .dropdown-toggle.btn-default {\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.35);\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.colored .btn-default {\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-color: rgba(0, 0, 0, 0.01);\n}\n.colored .btn-default .badge {\n  color: rgba(0, 0, 0, 0.2);\n  background-color: #ffffff;\n}\n.colored .btn-default:hover,\n.colored .btn-default:focus,\n.colored .btn-default.focus,\n.colored .btn-default:active,\n.colored .btn-default.active,\n.colored .open > .dropdown-toggle.btn-default {\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-color: rgba(0, 0, 0, 0.02);\n}\n.default-hovered:hover .btn-default-transparent {\n  border-color: #ffffff;\n}\n/*White Button*/\n.btn-white {\n  color: #777777;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n.btn-white:hover,\n.btn-white:focus,\n.btn-white.focus,\n.btn-white:active,\n.btn-white.active,\n.open > .dropdown-toggle.btn-white {\n  color: #0c9ec7;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n/*Gray Button*/\n.btn-gray {\n  color: #333333;\n  background-color: #e1e1e1;\n  border-color: #d3d3d3;\n}\n.btn-gray:hover,\n.btn-gray:focus,\n.btn-gray.focus,\n.btn-gray:active,\n.btn-gray.active,\n.open > .dropdown-toggle.btn-gray {\n  color: #333333;\n  background-color: #cdcdcd;\n  border-color: #cdcdcd;\n}\n.btn-gray-transparent {\n  color: #333333;\n  background-color: transparent;\n  border-color: #777777;\n}\n.btn-gray-transparent:hover,\n.btn-gray-transparent:focus,\n.btn-gray-transparent.focus,\n.btn-gray-transparent:active,\n.btn-gray-transparent.active,\n.open > .dropdown-toggle.btn-gray-transparent {\n  color: #ffffff;\n  background-color: #333333;\n  border-color: #333333;\n}\n.dark-bg .btn-gray-transparent {\n  color: #ffffff;\n}\n.dark-bg .btn-gray-transparent:hover {\n  border-color: #ffffff;\n  color: #777777;\n  background-color: #ffffff;\n}\n.dark-translucent-bg .btn-gray-transparent,\n.default-translucent-bg .btn-gray-transparent,\n.default-bg .btn-gray-transparent {\n  border-color: #ffffff;\n  color: #ffffff;\n}\n.dark-translucent-bg .btn-gray-transparent:hover,\n.default-translucent-bg .btn-gray-transparent:hover,\n.default-bg .btn-gray-transparent:hover,\n.dark-translucent-bg .btn-gray-transparent:focus,\n.default-translucent-bg .btn-gray-transparent:focus,\n.default-bg .btn-gray-transparent:focus {\n  border-color: #ffffff;\n  color: #777777;\n  background-color: #ffffff;\n}\n.default-hovered:hover .btn-gray-transparent {\n  border-color: #ffffff;\n}\n.light-gray-bg.default-hovered:hover .btn-gray-transparent:hover {\n  border-color: #333333;\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .two-col-translucent-bg .container > .row > div + div .btn-gray-transparent {\n    border-color: #ffffff;\n    color: #ffffff;\n  }\n  .two-col-translucent-bg .container > .row > div + div .btn-gray-transparent:hover,\n  .two-col-translucent-bg .container > .row > div + div .btn-gray-transparent:focus {\n    border-color: #ffffff;\n    color: #777777;\n    background-color: #ffffff;\n  }\n}\n/*Dark Button*/\n.btn-dark {\n  color: #ffffff;\n  background-color: #373737;\n  border-color: #333333;\n}\n.btn-dark:hover,\n.btn-dark:focus,\n.btn-dark.focus,\n.btn-dark:active,\n.btn-dark.active,\n.open > .dropdown-toggle.btn-dark {\n  color: #ffffff;\n  background-color: #111111;\n  border-color: #111111;\n}\n.dark-bg .btn-dark {\n  color: #ffffff;\n  background-color: #222222;\n  border-color: #171717;\n}\n.dark-bg .btn-dark:hover,\n.dark-bg .btn-dark:focus,\n.dark-bg .btn-dark.focus,\n.dark-bg .btn-dark:active,\n.dark-bg .btn-dark.active,\n.dark-bg .open > .dropdown-toggle.btn-dark {\n  color: #ffffff;\n  background-color: #000000;\n  border-color: #000000;\n}\n/*Buttons Sizes*/\n.btn {\n  padding: 7px 20px;\n  font-size: 14px;\n  line-height: 1.46666667;\n  border-radius: 3px;\n  margin: 10px 0;\n}\n.btn-sm {\n  padding: 5px 15px;\n  font-size: 12px;\n  line-height: 1.46666667;\n  border-radius: 3px;\n  margin: 5px 0;\n}\n.btn-lg {\n  padding: 10px 25px;\n  font-size: 18px;\n  line-height: 1.46666667;\n  border-radius: 4px;\n  margin: 10px 0;\n}\n.btn-md-link {\n  padding: 7px 15px;\n  font-size: 14px;\n  line-height: 1.46666667;\n  border-radius: 0px;\n  margin: 10px 0;\n}\n.btn-sm-link {\n  padding: 5px 15px;\n  font-size: 12px;\n  line-height: 1.46666667;\n  border-radius: 0px;\n  margin: 5px 0;\n}\n.btn-lg-link {\n  padding: 10px 15px;\n  font-size: 18px;\n  line-height: 1.46666667;\n  border-radius: 0px;\n  margin: 10px 0;\n}\n.btn-remove {\n  font-size: 10px;\n  padding: 3px 15px;\n  min-width: 0;\n  margin: -5px 0 0 0;\n}\n/*Buttons with radius*/\n.radius-50 {\n  -webkit-border-radius: 25px;\n  -moz-border-radius: 25px;\n  border-radius: 25px;\n}\n/*Animated Buttons*/\n.btn-animated {\n  position: relative;\n  min-width: 0!important;\n  padding-right: 45px!important;\n}\n.btn-animated i {\n  -webkit-transition: right 0.2s ease-in-out;\n  -o-transition: right 0.2s ease-in-out;\n  transition: right 0.2s ease-in-out;\n  z-index: 3;\n  right: 17px;\n  position: absolute;\n  line-height: 34px;\n  top: 0;\n  min-width: 12px;\n}\n.btn-animated:after {\n  width: 35px;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  content: \"\";\n  top: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  right: 0px;\n  z-index: 2;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.btn-animated.radius-50:after {\n  -webkit-border-radius: 0 25px 25px 0;\n  -moz-border-radius: 0 25px 25px 0;\n  border-radius: 0 25px 25px 0;\n}\n.btn-animated.btn-gray-transparent:after {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.btn-animated:hover:after {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.btn-animated:hover i {\n  right: 11px;\n}\n.btn-animated.btn-sm {\n  padding-right: 35px!important;\n}\n.btn-animated.btn-sm:after {\n  width: 25px;\n}\n.btn-animated.btn-sm i {\n  right: 14px;\n  line-height: 28px;\n  min-width: 11px;\n}\n.btn-animated.btn-sm:hover i {\n  right: 7px;\n}\n.btn-animated.btn-lg {\n  padding-right: 60px!important;\n}\n.btn-animated.btn-lg:after {\n  width: 45px;\n}\n.btn-animated.btn-lg i {\n  right: 25px;\n  line-height: 48px;\n  min-width: 15px;\n}\n.btn-animated.btn-lg:hover i {\n  right: 15px;\n}\n/*Background Transition*/\n.btn-hvr {\n  -webkit-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn-hvr.radius-50 {\n  overflow: hidden;\n}\n.hvr-sweep-to-right:hover,\n.hvr-sweep-to-left:hover,\n.hvr-sweep-to-bottom:hover,\n.hvr-sweep-to-top:hover,\n.hvr-bounce-to-right:hover,\n.hvr-bounce-to-left:hover,\n.hvr-bounce-to-bottom:hover,\n.hvr-bounce-to-top:hover,\n.hvr-radial-out:hover,\n.hvr-rectangle-out:hover,\n.hvr-shutter-out-horizontal:hover,\n.hvr-shutter-out-vertical:hover {\n  background: transparent;\n}\n.hvr-radial-in,\n.hvr-rectangle-in,\n.hvr-shutter-in-horizontal,\n.hvr-shutter-in-vertical {\n  background: #0c9ec7;\n}\n.hvr-radial-in:hover,\n.hvr-rectangle-in:hover,\n.hvr-shutter-in-horizontal:hover,\n.hvr-shutter-in-vertical:hover {\n  background: #0c9ec7;\n}\n.hvr-radial-in:before,\n.hvr-rectangle-in:before,\n.hvr-shutter-in-horizontal:before,\n.hvr-shutter-in-vertical:before {\n  background: #ffffff;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.hvr-sweep-to-right:before,\n.hvr-sweep-to-left:before,\n.hvr-sweep-to-bottom:before,\n.hvr-sweep-to-top:before,\n.hvr-bounce-to-right:before,\n.hvr-bounce-to-left:before,\n.hvr-bounce-to-bottom:before,\n.hvr-bounce-to-top:before,\n.hvr-radial-out:before,\n.hvr-rectangle-out:before,\n.hvr-shutter-out-horizontal:before,\n.hvr-shutter-out-vertical:before {\n  background: #0c9ec7;\n}\n/*ie9*/\n.no-csstransitions .hvr-radial-in,\n.no-csstransitions .hvr-rectangle-in,\n.no-csstransitions .hvr-shutter-in-horizontal,\n.no-csstransitions .hvr-shutter-in-vertical {\n  background: transparent;\n}\n.no-csstransitions .hvr-sweep-to-right:hover,\n.no-csstransitions .hvr-sweep-to-left:hover,\n.no-csstransitions .hvr-sweep-to-bottom:hover,\n.no-csstransitions .hvr-sweep-to-top:hover,\n.no-csstransitions .hvr-bounce-to-right:hover,\n.no-csstransitions .hvr-bounce-to-left:hover,\n.no-csstransitions .hvr-bounce-to-bottom:hover,\n.no-csstransitions .hvr-bounce-to-top:hover,\n.no-csstransitions .hvr-radial-out:hover,\n.no-csstransitions .hvr-rectangle-out:hover,\n.no-csstransitions .hvr-shutter-out-horizontal:hover,\n.no-csstransitions .hvr-shutter-out-vertical:hover,\n.no-csstransitions .hvr-radial-in:hover,\n.no-csstransitions .hvr-rectangle-in:hover,\n.no-csstransitions .hvr-shutter-in-horizontal:hover,\n.no-csstransitions .hvr-shutter-in-vertical:hover {\n  background: #0c9ec7;\n}\n/* Tabs\n---------------------------------- */\n.nav-tabs.style-1 {\n  border-bottom: 1px solid #e1e1e1;\n  margin-bottom: 15px;\n}\n.nav-tabs.style-1 > li > a {\n  color: #333333;\n  margin-right: 0;\n  line-height: 1;\n  border: 1px solid transparent;\n  padding: 12px 15px 11px 15px;\n  -webkit-border-radius: 15px 15px 0 0;\n  -moz-border-radius: 15px 15px 0 0;\n  border-radius: 15px 15px 0 0;\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n  height: 40px;\n}\n.nav-tabs.style-1 > li > a:hover {\n  border-color: #222222!important;\n  background-color: #333333!important;\n  color: #ffffff;\n}\n.nav-tabs.style-1 > li > a:focus {\n  border-color: transparent;\n  background-color: transparent;\n}\n.nav-tabs.style-1 > li > a:after {\n  position: absolute;\n  right: -14px;\n  bottom: -1px;\n  content: \'\';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 31px 0 0 14px;\n  border-color: transparent transparent transparent transparent;\n}\n.nav-tabs.style-1 > li > a:before {\n  position: absolute;\n  left: -14px;\n  bottom: -1px;\n  content: \'\';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 31px 14px 0 0;\n  border-color: transparent transparent transparent transparent;\n}\n.nav-tabs.style-1 > li > a:hover:after {\n  border-color: transparent transparent transparent #333333;\n  border-width: 31px 0 0 14px;\n}\n.nav-tabs.style-1 > li > a:hover:before {\n  border-color: transparent #333333 transparent transparent;\n  border-width: 31px 14px 0 0;\n}\n.nav-tabs.style-1 > li.active > a {\n  background-color: #333333!important;\n}\n.nav-tabs.style-1 > li.active > a,\n.nav-tabs.style-1 > li.active > a:hover,\n.nav-tabs.style-1 > li.active > a:focus {\n  color: #ffffff;\n  cursor: default;\n  border-color: #222222;\n}\n.nav-tabs.style-1 > li.active > a:after {\n  border-color: transparent transparent transparent #333333;\n}\n.nav-tabs.style-1 > li.active > a:before {\n  border-color: transparent #333333 transparent transparent;\n}\n.nav-tabs.style-1 > li:first-child > a:before,\n.nav-tabs.style-1 > li:last-child > a:after {\n  border-width: 0 0 0 0;\n  border-color: transparent transparent transparent transparent;\n}\n.nav-tabs.style-1 + .tab-content > .tab-pane {\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.nav-tabs.style-2 {\n  border-bottom: 1px solid #f1f1f1;\n}\n.nav-tabs.style-2 > li > a {\n  color: #999999;\n}\n.nav-tabs.style-2 > li > a:hover {\n  color: #333333;\n  background-color: #fafafa!important;\n  border-color: #f1f1f1;\n  border-bottom-color: #fafafa!important;\n}\n.nav-tabs.style-2 > li > a:focus {\n  border-color: transparent;\n  background-color: transparent;\n}\n.nav-tabs.style-2 > li.active > a,\n.nav-tabs.style-2 > li.active > a:hover,\n.nav-tabs.style-2 > li.active > a:focus {\n  color: #333333;\n  cursor: default;\n  background-color: #fafafa;\n  border-color: #f1f1f1;\n  border-bottom-color: transparent;\n}\n.nav-tabs.style-2 + .tab-content > .tab-pane {\n  padding: 15px;\n  border: 1px solid #f1f1f1;\n  border-top: none;\n  background-color: #fafafa;\n}\n.nav-tabs.style-3 {\n  border-bottom: 1px solid #999999;\n  background-color: #999999;\n}\n.nav-tabs.style-3 > li > a {\n  color: #ffffff;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  margin: 0;\n}\n.nav-tabs.style-3 > li > a:hover {\n  color: #333333;\n  background-color: #fff!important;\n  border-color: #999999;\n  border-bottom-color: #fff!important;\n}\n.nav-tabs.style-3 > li > a:focus {\n  border-color: transparent;\n  background-color: transparent;\n}\n.nav-tabs.style-3 > li.active > a,\n.nav-tabs.style-3 > li.active > a:hover,\n.nav-tabs.style-3 > li.active > a:focus {\n  color: #333333;\n  cursor: default;\n  background-color: #fff;\n  border-color: #999999;\n  border-bottom-color: transparent;\n}\n.nav-tabs.style-3 + .tab-content > .tab-pane {\n  padding: 15px;\n  border: 1px solid #999999;\n  border-top: none;\n  background-color: #ffffff;\n}\n.nav-tabs.style-4 {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #333333;\n}\n.nav-tabs.style-4 > li > a {\n  color: #999999;\n}\n.nav-tabs.style-4 > li > a:hover {\n  color: #ffffff;\n  background-color: #333333 !important;\n  border-color: #333333;\n  border-bottom-color: #333333 !important;\n}\n.nav-tabs.style-4 > li > a:focus {\n  border-color: #333333;\n  background-color: #333333;\n}\n.nav-tabs.style-4 > li.active > a,\n.nav-tabs.style-4 > li.active > a:hover,\n.nav-tabs.style-4 > li.active > a:focus {\n  color: #ffffff;\n  cursor: default;\n  background-color: #333333;\n  border-color: #333333;\n  border-bottom-color: transparent;\n}\n/* Small devices (tablets, smartphones) */\n@media (min-width: 481px) and (max-width: 767px) {\n  .nav-tabs > li > a {\n    padding: 12px 10px;\n    font-size: 11px;\n    margin-right: 0;\n  }\n}\n/* Extra small devices (phones, less than 480px) */\n@media (max-width: 480px) {\n  .nav-tabs {\n    background-color: #eaeaea;\n    border-bottom: none!important;\n  }\n  .nav-tabs > li {\n    float: none;\n  }\n  .nav-tabs > li a {\n    color: #ffffff;\n    margin-right: 0;\n    -webkit-border-radius: 0px!important;\n    -moz-border-radius: 0px!important;\n    border-radius: 0px!important;\n  }\n  .nav-tabs.style-3 > li.active > a,\n  .nav-tabs.style-3 > li.active > a:hover,\n  .nav-tabs.style-3 > li.active > a:focus,\n  .nav-tabs.style-3 > li > a:hover,\n  .nav-tabs.style-3 > li > a:focus {\n    border-bottom: 1px solid #999999!important;\n  }\n  .nav-tabs.style-3 + .tab-content > .tab-pane {\n    border-top: 1px solid #999999;\n  }\n  .nav-tabs > li a:after,\n  .nav-tabs > li a:before {\n    border-color: transparent transparent transparent transparent!important;\n  }\n}\n/* vertical tabs */\n.vertical {\n  margin: 20px 0;\n}\n.vertical .nav-tabs,\n.vertical .tab-content {\n  display: table-cell;\n  margin: 0;\n  vertical-align: top;\n}\n.vertical .nav-tabs {\n  border-bottom-color: transparent;\n  background-color: #999999;\n}\n.vertical .nav-tabs > li {\n  float: none;\n}\n.vertical .nav-tabs > li a {\n  margin: 0;\n  padding: 10px 20px;\n  white-space: nowrap;\n  color: #ffffff;\n  border-bottom: 1px solid #919191;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.vertical .nav-tabs > li > a:hover,\n.vertical .nav-tabs > li > a:focus {\n  background-color: #fafafa;\n  border-right-color: transparent;\n  border-bottom: 1px solid #f1f1f1;\n  color: #777777;\n  z-index: 2;\n}\n.vertical .nav-tabs > li.active > a,\n.vertical .nav-tabs > li.active > a:hover,\n.vertical .nav-tabs > li.active > a:focus {\n  border: 1px solid #f1f1f1;\n  background-color: #fafafa;\n  border-right-color: transparent;\n  color: #777777;\n  z-index: 2;\n}\n.vertical.left .nav-tabs > li > a:hover,\n.vertical.left .nav-tabs > li > a:focus {\n  border-left-color: transparent;\n  border-right-color: #f1f1f1;\n}\n.vertical.left .nav-tabs > li.active > a,\n.vertical.left .nav-tabs > li.active > a:hover,\n.vertical.left .nav-tabs > li.active > a:focus {\n  border-right-color: #f1f1f1;\n  border-left-color: transparent;\n}\n.vertical .tab-content {\n  border: 1px solid #f1f1f1;\n  border-left: 1px solid #fafafa;\n  background-color: #fafafa;\n  left: -1px;\n  z-index: 1;\n  padding: 20px 30px;\n}\n.left.vertical .tab-content {\n  border-left-color: #f1f1f1;\n  border-right-color: transparent;\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .vertical .nav-tabs,\n  .vertical .tab-content {\n    display: block;\n  }\n  .vertical .nav-tabs > li a {\n    font-size: 15px;\n  }\n}\n/* Pager\n---------------------------------- */\nul.pagination,\nul.pager {\n  margin: 20px 0 40px;\n  text-align: left;\n}\nul.pagination li {\n  padding: 0;\n  margin: 0 5px 0 0;\n  border-bottom: none;\n  display: inline-block;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  border-radius: 0px;\n}\nul.pagination li > a,\n.pagination > li:first-child > a,\n.pagination > li:last-child > a,\nul.pager li > a {\n  text-align: center;\n  padding: 0;\n  height: 40px;\n  width: 40px;\n  border: 1px solid #777777;\n  line-height: 39px;\n  background-color: #777777;\n  color: #ffffff;\n  display: inline-block;\n  -webkit-border-radius: 100%;\n  -moz-border-radius: 100%;\n  border-radius: 100%;\n}\nul.pagination li > a:hover,\nul.pagination li > a:focus {\n  background-color: transparent;\n  color: #ffffff;\n  background-color: #0c9ec7;\n  border-color: #0c9ec7;\n}\nul.pagination li.active a,\n.pagination > .active > a:hover,\n.pagination > .active > a:focus {\n  color: #ffffff;\n  background-color: #09afdf;\n  border-color: #09afdf;\n}\n/* Breadcrumb\n---------------------------------- */\n.breadcrumb-container {\n  background-color: #f8f8f8;\n  border-bottom: 1px solid #f4f4f4;\n}\n.dark.breadcrumb-container {\n  background-color: #777777;\n  border-color: #333333;\n  color: #ffffff;\n}\n.breadcrumb {\n  background-color: transparent;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  margin-bottom: 0;\n  font-size: 12px;\n  padding-left: 0;\n}\n.breadcrumb > li + li:before {\n  font-family: \"FontAwesome\";\n  content: \"\\f101\";\n  font-size: 11px;\n  padding-left: 3px;\n}\n.banner .breadcrumb-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.85);\n  border-bottom-color: rgba(255, 255, 255, 0.1);\n}\n.banner .dark.breadcrumb-container {\n  background-color: rgba(57, 66, 69, 0.6);\n  border-bottom-color: rgba(119, 119, 119, 0.1);\n}\n.banner .breadcrumb > li a,\n.banner .breadcrumb > li i {\n  color: #000000;\n}\n.banner .breadcrumb > .active,\n.banner .breadcrumb > li + li:before {\n  color: #777777;\n}\n.dark .breadcrumb > li a,\n.dark .breadcrumb > li i,\n.dark .breadcrumb > .active,\n.dark .breadcrumb > li + li:before {\n  color: #ffffff;\n}\n.banner .breadcrumb > li a:hover {\n  color: #0c9ec7;\n}\n/* Nav pills\n---------------------------------- */\n.nav-pills:not(.nav-stacked) {\n  margin-bottom: 15px;\n}\n.text-center > .nav-pills {\n  display: inline-block;\n}\n.nav-pills > li > a {\n  border-radius: 0;\n  padding: 7px 10px;\n  border: 1px solid transparent;\n  color: #999999;\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus,\n.nav-pills > li > a:hover,\n.nav-pills > li > a:focus {\n  color: #777777;\n  background-color: transparent;\n  border-bottom: 1px solid #777777;\n}\n.nav-pills.style-2 > li > a {\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n}\n.nav-pills.style-2 > li.active > a,\n.nav-pills.style-2 > li.active > a:hover,\n.nav-pills.style-2 > li.active > a:focus,\n.nav-pills.style-2 > li > a:hover,\n.nav-pills.style-2 > li > a:focus {\n  color: #09afdf;\n  background-color: #fafafa;\n  border: 1px solid #eaeaea;\n}\n.nav-pills > li + li {\n  margin-left: 5px;\n}\n.nav-pills.nav-stacked > li + li {\n  margin-left: 0;\n}\n.nav-pills.nav-stacked > li > a {\n  padding: 5px 0px;\n  color: #777777;\n}\n.nav-pills.nav-stacked.list-style-icons > li > a {\n  padding: 4px 0px;\n}\n.nav-pills.nav-stacked > li.active > a,\n.nav-pills.nav-stacked > li.active > a:hover,\n.nav-pills.nav-stacked > li.active > a:focus,\n.nav-pills.nav-stacked > li > a:hover,\n.nav-pills.nav-stacked > li > a:focus {\n  color: #09afdf;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-pills.nav-stacked:not(.list-style-icons) > li > a:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f101\";\n  font-size: 12px;\n  position: absolute;\n  right: 15px;\n  top: 6px;\n  color: #d1d1d1;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.nav-pills > li.active > a:after {\n  color: #09afdf;\n}\n.nav-pills.nav-stacked:not(.list-style-icons) > li.active > a:hover:after,\n.nav-pills.nav-stacked:not(.list-style-icons) > li.active > a:focus:after,\n.nav-pills.nav-stacked:not(.list-style-icons) > li > a:hover:after,\n.nav-pills.nav-stacked:not(.list-style-icons) > li > a:focus:after {\n  color: #0c9ec7;\n  right: 10px;\n}\n.nav-pills.nav-stacked.list-style-icons > li > a > i {\n  padding-right: 10px;\n  font-size: 14px;\n  color: #cdcdcd;\n}\n.nav-pills.nav-stacked.list-style-icons > li.active > a > i,\n.nav-pills.nav-stacked.list-style-icons > li > a:hover > i,\n.nav-pills.nav-stacked.list-style-icons > li > a:focus > i {\n  color: #0c9ec7;\n}\n/* Process pills */\n.process .nav-pills > li + li {\n  margin-left: 40px;\n  position: relative;\n}\n.process .nav-pills > li + li:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f101\";\n  position: absolute;\n  top: 6px;\n  left: -24px;\n  width: 10px;\n  color: #cdcdcd;\n}\n/*footer*/\n.footer-content .nav-pills > li > a {\n  padding: 4px 0px;\n}\n.footer-content .nav-pills.nav-stacked > li > a:after {\n  top: 5px;\n}\n.dark .footer-content .nav-pills > li > a,\n.dark .footer-content .nav-pills > li.active > a,\n.dark .footer-content .nav-pills > li.active > a:focus,\n.dark .footer-content .nav-pills > li > a:focus {\n  color: #999999;\n}\n.dark .footer-content .nav-pills > li.active > a:hover,\n.dark .footer-content .nav-pills > li > a:hover {\n  color: #0c9ec7;\n}\n/* Collapse\n---------------------------------- */\n.panel-group .panel-default {\n  border-color: #eaeaea;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.panel-group .panel-heading {\n  padding: 0;\n}\n.panel-heading a {\n  font-weight: 400;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  text-decoration: none;\n  padding: 10px 40px 10px 15px;\n  color: inherit;\n}\n/*Style 1*/\n.collapse-style-1 .panel-heading {\n  background-color: #fafafa;\n}\n.collapse-style-1 .panel-heading a {\n  color: #999999;\n}\n.collapse-style-1 .panel-heading a:not(.collapsed) {\n  color: #777777;\n}\n.collapse-style-1 .panel-heading a:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f146\";\n  position: absolute;\n  right: 15px;\n  font-size: 14px;\n  font-weight: 300;\n  top: 50%;\n  line-height: 1;\n  margin-top: -7px;\n}\n.collapse-style-1 .panel-heading a.collapsed:after {\n  content: \"\\f0fe\";\n}\n.panel-heading a:hover {\n  text-decoration: none;\n}\n.panel-title a i {\n  font-size: 16px;\n}\n.collapse-style-1 .panel-body {\n  border-top: none!important;\n  background-color: #fafafa;\n  padding-top: 0;\n}\n/*Style 2*/\n.collapse-style-2 .panel {\n  border-color: transparent;\n}\n.collapse-style-2 .panel-heading {\n  background-color: transparent;\n}\n.collapse-style-2 .panel-heading a {\n  color: #ffffff;\n  background-color: #09afdf;\n}\n.collapse-style-2 .panel-heading a.collapsed {\n  background-color: #333333;\n}\n.collapse-style-2 .panel-heading a:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f106\";\n  position: absolute;\n  right: 15px;\n  font-size: 14px;\n  font-weight: 300;\n  top: 50%;\n  line-height: 1;\n  margin-top: -7px;\n}\n.collapse-style-2 .panel-heading a.collapsed:after {\n  content: \"\\f107\";\n}\n.panel-heading a:hover {\n  text-decoration: none;\n}\n.panel-title a i {\n  font-size: 16px;\n}\n.collapse-style-2 .panel-body {\n  border-top: none!important;\n  background-color: transparent;\n  padding: 15px 0;\n}\n.collapse-style-2 .panel-body.p-15 {\n  padding: 15px;\n}\n/*Style 3*/\n.collapse-style-3 .panel {\n  border-color: #999999;\n}\n.collapse-style-3 .panel-heading {\n  background-color: transparent;\n}\n.collapse-style-3 .panel-heading a {\n  color: #ffffff;\n  background-color: #999999;\n}\n.collapse-style-3 .panel-heading a.collapsed {\n  background-color: #999999;\n}\n.collapse-style-3 .panel-heading a:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f139\";\n  position: absolute;\n  right: 15px;\n  font-size: 12px;\n  font-weight: 300;\n  top: 50%;\n  line-height: 1;\n  margin-top: -7px;\n}\n.collapse-style-3 .panel-heading a.collapsed:after {\n  content: \"\\f13a\";\n}\n.panel-heading a:hover {\n  text-decoration: none;\n}\n.panel-title a i {\n  font-size: 16px;\n}\n.collapse-style-3 .panel-body {\n  border-top: none!important;\n  background-color: transparent;\n}\n/*Contextual Headings*/\n.collapse-contextual .panel-heading a:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f068\";\n  position: absolute;\n  right: 15px;\n  font-size: 10px;\n  font-weight: 300;\n  top: 50%;\n  line-height: 1;\n  margin-top: -6px;\n}\n.collapse-contextual .panel-heading a.collapsed:after {\n  content: \"\\f067\";\n}\n/*Content Collapse*/\n.btn[data-toggle=\"collapse\"] i:before {\n  font-size: 10px;\n  content: \"\\f068\";\n}\n.btn.collapsed[data-toggle=\"collapse\"] i:before {\n  content: \"\\f067\";\n}\n/* Progress bars\n---------------------------------- */\n.progress.style-1 {\n  margin-top: 25px;\n  background-color: #fafafa;\n  border: 1px solid #eaeaea;\n  height: 8px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  overflow: visible;\n  position: relative;\n}\n.progress.style-1 .progress-bar {\n  padding: 0;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 300;\n  margin-top: 0px;\n  height: 4px;\n  margin: 1px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  position: relative;\n}\n.progress.style-2 {\n  margin-bottom: 15px;\n  background-color: #fafafa;\n  border: 1px solid #eaeaea;\n  height: 20px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.progress.style-2 .progress-bar {\n  padding: 0;\n  text-align: left;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.progress.style-2 span {\n  font-size: 11px;\n  line-height: 1;\n  position: relative;\n  top: -2px;\n  left: 10px;\n}\n.progress-bar {\n  -webkit-transition: width 1.5s ease;\n  -o-transition: width 1.5s ease;\n  transition: width 1.5s ease;\n}\n.progress .label {\n  position: absolute;\n  top: -16px;\n  font-size: 11px;\n  color: #333333;\n  right: 10px;\n  font-weight: 400;\n  padding: 0;\n}\n.progress .text {\n  position: absolute;\n  font-size: 11px;\n  top: -17px;\n  left: 0;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #999999;\n}\n.progress.dark {\n  background-color: #cdcdcd;\n  border-color: #cdcdcd;\n}\n.progress.dark.style-1 {\n  border-color: #ffffff;\n}\n.dark .progress-striped .progress-bar,\n.dark .progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 75%, transparent 75%, transparent);\n}\n.progress-bar-white {\n  background-color: #ffffff;\n  color: #777777;\n}\n.progress-bar-default {\n  background-color: #09afdf;\n}\n.progress-bar-gray {\n  background-color: #999999;\n}\n.progress-bar-dark {\n  background-color: #333333;\n}\n.gray-bg .progress {\n  background-color: #ffffff;\n  -webkit-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);\n}\n/* Circular Progress Bars\n---------------------------------- */\n.knob-container {\n  margin: 10px;\n  position: relative;\n  display: inline-block;\n}\n.knob-container canvas {\n  width: 132px;\n  height: 132px;\n  margin: 0 auto;\n}\n.knob-text {\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  width: 100%;\n  margin-top: -14px;\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  .knob-container canvas {\n    width: 169px;\n    height: 169px;\n  }\n}\n/* Forms\n---------------------------------- */\nform {\n  margin: 20px 0;\n}\ntextarea {\n  resize: vertical;\n}\n.sidebar form {\n  margin: 5px 0 20px 0;\n}\n.form-control {\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  background: #ffffff;\n  height: 40px;\n  padding-right: 30px;\n  border-color: #e1e1e1;\n  color: #777777;\n  position: relative;\n  -webkit-appearance: none;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n}\n.form-control-lg {\n  height: 48px;\n}\n/* Small devices (tablets, phones 481px and up) */\n@media (min-width: 481px) {\n  .form-control-lg {\n    min-width: 350px;\n  }\n}\n.form-control:focus {\n  border-color: #999999;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n}\nselect.form-control {\n  padding-right: 5px;\n  -webkit-appearance: menulist;\n}\nselect[multiple].form-control {\n  -webkit-appearance: listbox;\n}\n.form-control::-moz-placeholder {\n  color: inherit;\n}\n.form-control:-ms-input-placeholder {\n  color: inherit;\n}\n.form-control::-webkit-input-placeholder {\n  color: inherit;\n}\n.input-group-addon {\n  background-color: #f1f1f1;\n  border-color: #e1e1e1;\n}\n.form-list > div {\n  padding: 7px 15px;\n  border-bottom: 1px solid #dddddd;\n  background-color: #f3f3f3;\n  margin: 6px 0;\n  display: block;\n}\nform label,\n.radio label,\n.checkbox label {\n  font-weight: 300;\n}\nfieldset {\n  padding: 10px 25px;\n  margin: 15px 0px;\n  border: 1px solid #dddddd;\n  background-color: #fafafa;\n}\nfieldset legend {\n  display: block;\n  width: auto;\n  padding: 3px 10px;\n  margin-bottom: 0;\n  font-size: 15px;\n  line-height: inherit;\n  color: #333;\n  border: 1px solid #ddd;\n  background-color: #ffffff;\n}\nfieldset .form-control,\nfieldset .form-control:focus {\n  webkit-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.12);\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.12);\n  border-color: #f3f3f3;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin-top: 5px;\n}\n/* forms with icons */\n.has-feedback label ~ .form-control-feedback {\n  top: 27px;\n}\n.form-control-feedback {\n  width: 40px;\n  height: 40px;\n  line-height: 42px !important;\n  top: 0;\n  color: #777777;\n}\n.form-control-lg + .form-control-feedback,\n.has-feedback label.sr-only ~ .form-control-lg + .form-control-feedback {\n  height: 48px;\n  top: 4px;\n}\n/* Disabled forms */\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n/* forms with icons */\n.form-control-feedback {\n  width: 40px;\n  height: 40px;\n  line-height: 40px !important;\n  top: 0;\n}\n/* Forms in all backgrounds */\n.dark-bg .form-control {\n  background-color: rgba(255, 255, 255, 0.15);\n  border-color: #353535;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8);\n  color: #cdcdcd;\n}\n.dark-bg .has-success .form-control:focus,\n.dark-bg .has-warning .form-control:focus,\n.dark-bg .has-error .form-control:focus {\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8);\n}\n.dark-bg .input-group-addon {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: #000;\n}\n.dark-bg .form-control:focus,\n.dark-bg .has-success .form-control:focus,\n.dark-bg .has-warning .form-control:focus,\n.dark-bg .has-error .form-control:focus {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.dark-bg .form-control-feedback {\n  color: #cdcdcd;\n}\n.default-bg .form-control {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-color: #0c9ec7;\n  -webkit-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.35);\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.35);\n  color: #ffffff;\n}\n.default-bg .has-success .form-control:focus,\n.default-bg .has-warning .form-control:focus,\n.default-bg .has-error .form-control:focus {\n  -webkit-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.35);\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.35);\n}\n.default-bg .input-group-addon {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-color: #0c9ec7;\n}\n.default-bg .form-control:focus {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.default-bg .form-control-feedback {\n  color: #ffffff;\n}\n.dark .form-control {\n  -webkit-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.6);\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.6);\n  color: #cccccc;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: #373737;\n}\n.dark .form-control:focus {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n.dark .form-control-feedback {\n  color: #cdcdcd;\n}\n.dark .footer-content .form-control {\n  border-color: #222222;\n}\n/* Validation states */\n.dark-bg .has-success .help-block,\n.dark-bg .has-success .control-label,\n.dark-bg .has-success .radio,\n.dark-bg .has-success .checkbox,\n.dark-bg .has-success .radio-inline,\n.dark-bg .has-success .checkbox-inline,\n.dark-bg .has-success.radio label,\n.dark-bg .has-success.checkbox label,\n.dark-bg .has-success.radio-inline label,\n.dark-bg .has-success.checkbox-inline label,\n.dark-bg .has-success .form-control-feedback {\n  color: #15c019;\n}\n.dark-bg .has-warning .help-block,\n.dark-bg .has-warning .control-label,\n.dark-bg .has-warning .radio,\n.dark-bg .has-warning .checkbox,\n.dark-bg .has-warning .radio-inline,\n.dark-bg .has-warning .checkbox-inline,\n.dark-bg .has-warning.radio label,\n.dark-bg .has-warning.checkbox label,\n.dark-bg .has-warning.radio-inline label,\n.dark-bg .has-warning.checkbox-inline label,\n.dark-bg .has-warning .form-control-feedback {\n  color: #e5af51;\n}\n.dark-bg .has-error .help-block,\n.dark-bg .has-error .control-label,\n.dark-bg .has-error .radio,\n.dark-bg .has-error .checkbox,\n.dark-bg .has-error .radio-inline,\n.dark-bg .has-error .checkbox-inline,\n.dark-bg .has-error.radio label,\n.dark-bg .has-error.checkbox label,\n.dark-bg .has-error.radio-inline label,\n.dark-bg .has-error.checkbox-inline label,\n.dark-bg .has-error .form-control-feedback {\n  color: #ef4f4c;\n}\n.has-success .form-control,\n.has-success .form-control:focus {\n  border-color: #3c763d;\n}\n.has-warning .form-control,\n.has-warning .form-control:focus {\n  border-color: #8a6d3b;\n}\n.has-error .form-control,\n.has-error .form-control:focus {\n  border-color: #a94442;\n}\n.default-bg .has-success .form-control,\n.default-bg .has-warning .form-control,\n.default-bg .has-error .form-control,\n.default-bg .has-success .form-control:focus,\n.default-bg .has-warning .form-control:focus,\n.default-bg .has-error .form-control:focus {\n  border-color: #fff;\n  color: #ffffff;\n}\n.default-bg .has-success .form-control-feedback,\n.default-bg .has-warning .form-control-feedback,\n.default-bg .has-error .form-control-feedback,\n.default-bg .has-success .control-label,\n.default-bg .has-warning .control-label,\n.default-bg .has-error .control-label {\n  color: #fff;\n}\n.has-success .form-control:focus,\n.has-warning .form-control:focus,\n.has-error .form-control:focus {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.has-error .error {\n  font-weight: 400;\n  margin-bottom: 5px;\n  display: block;\n}\n/*Sorting Filters*/\n.sorting-filters label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  text-align: left;\n}\n.sorting-filters form {\n  margin: 0;\n}\n.sorting-filters .form-inline .form-control {\n  width: 100%;\n}\n.sorting-filters .btn {\n  margin: 0;\n  min-width: 0;\n  width: 100%;\n}\n/* Small devices (tablets, smartphones) */\n@media (min-width: 768px) and (max-width: 991px) {\n  .sorting-filters .form-inline .form-group {\n    width: 18%;\n    margin-right: 1.2%;\n  }\n}\n/* Small devices (tablets, smartphones 768px and up) */\n@media (min-width: 768px) {\n  .sorting-filters .btn {\n    margin: 25px 0 0;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .sorting-filters .form-control {\n    margin: 0 0 5px;\n  }\n}\n/* Alerts\n---------------------------------- */\n.alert {\n  margin: 20px 0;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  border: none;\n}\n.alert-success {\n  color: #2a5f2b;\n  background-color: #bcdab0;\n}\n.alert-info {\n  color: #1a4e68;\n  background-color: #c6e8fa;\n}\n.alert-warning {\n  color: #72582b;\n  background-color: #f7f0ce;\n}\n.alert-icon {\n  padding-left: 70px;\n  position: relative;\n}\n.alert-icon i {\n  position: absolute;\n  font-size: 28px;\n  left: 21px;\n  top: 13px;\n  width: 30px;\n  text-align: center;\n}\n.close {\n  font-size: 28px;\n  font-weight: normal;\n  filter: alpha(opacity=40);\n  opacity: 0.4;\n}\n[data-notify=\"container\"] {\n  max-width: 400px;\n}\n[data-notify=\"progressbar\"] {\n  display: none;\n}\n/*Icons\n---------------------------------- */\n.icon {\n  display: inline-block;\n  text-align: center;\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #000;\n  font-size: 24px;\n  width: 60px;\n  height: 60px;\n  line-height: 58px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  border: 1px solid transparent;\n}\n.icons .icon {\n  margin: 0 5px 5px 0;\n}\n.icon i {\n  position: relative;\n  z-index: 1;\n}\n.icon.dark-bg {\n  background-color: rgba(66, 66, 66, 0.66);\n  color: #ffffff;\n}\n.icon.default-bg {\n  background-color: #09afdf;\n  color: #ffffff;\n}\n.icon.light-bg {\n  background-color: #fff;\n  color: #09afdf;\n}\n.icon.without-bg {\n  font-size: 36px;\n  line-height: 1;\n  color: inherit;\n  background-color: transparent;\n  height: 100%;\n}\n.icon.large {\n  font-size: 36px;\n  width: 100px;\n  height: 100px;\n  line-height: 97px;\n}\n.icon.small {\n  font-size: 18px;\n  width: 45px;\n  height: 45px;\n  line-height: 43px;\n}\n/*Feature Box\n---------------------------------- */\n.feature-box,\n.feature-box-2 {\n  margin-bottom: 30px;\n}\n.feature-box .title,\n.feature-box-2 .title {\n  margin-top: 0px;\n}\n/*style-1*/\n.feature-box h3 {\n  margin-top: 0;\n}\n.feature-box .icon {\n  margin-bottom: 10px;\n}\n.feature-box p {\n  clear: both;\n  margin-bottom: 15px;\n}\n.feature-box:not(.shadow):hover .icon {\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n}\n/*style-2*/\n.feature-box-2 {\n  position: relative;\n}\n.feature-box-2 .icon {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.feature-box-2 .icon.without-bg {\n  width: 0;\n  height: 0;\n}\n.feature-box-2.boxed {\n  border: 1px solid #f1f1f1;\n}\n.feature-box-2.boxed .icon {\n  left: 20px;\n  top: 20px;\n}\n.feature-box-2 .icon {\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.feature-box-2 .body {\n  margin-left: 62px;\n}\n.feature-box-2:hover .icon {\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n}\n.feature-box-2.right .body {\n  margin-right: 62px;\n  margin-left: 0px;\n  text-align: right;\n}\n.feature-box-2.right .icon {\n  left: auto;\n  right: 0px;\n}\n.feature-box-2.right .icon.without-bg {\n  right: 40px;\n}\n.feature-box-2.boxed.right .icon {\n  left: auto;\n  right: 20px;\n}\n.feature-box-2.boxed.right .icon.without-bg {\n  right: 60px;\n}\n/* Medium devices (desktops, tablets less than 991px) */\n@media (max-width: 991px) {\n  .feature-box-2:not(.boxed) {\n    padding-bottom: 0;\n  }\n}\n/*shadow*/\n.shadow,\n.shadow-narrow {\n  position: relative;\n  background-color: #ffffff;\n}\n.light-gray-bg.shadow,\n.light-gray-bg.shadow-narrow {\n  background-color: #fafafa;\n}\n.bordered {\n  border: 1px solid #f1f1f1;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.dark-bg .bordered {\n  border: 1px solid #555555;\n}\n.shadow *,\n.shadow-narrow * {\n  position: relative;\n  z-index: 3;\n}\n.shadow:before,\n.shadow-narrow:before {\n  position: absolute;\n  left: 0;\n  height: 60%;\n  bottom: 0;\n  width: 100%;\n  content: \"\";\n  background-color: #ffffff;\n  z-index: 2;\n}\n.light-gray-bg.shadow:before,\n.light-gray-bg.shadow-narrow:before {\n  background-color: #fafafa;\n}\n.shadow:after,\n.shadow-narrow:after {\n  content: \"\";\n  position: absolute;\n  height: 50%;\n  width: 96%;\n  left: 50%;\n  bottom: 2px;\n  margin-left: -48%;\n  -webkit-box-shadow: 0 5px 7px #999999;\n  box-shadow: 0 5px 7px #999999;\n  z-index: 1;\n  border-radius: 10%;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.shadow-narrow:after {\n  width: 90%;\n  margin-left: -45%;\n}\n.shadow:hover:after,\n.shadow-narrow:hover:after {\n  bottom: 10px;\n}\n/*Image box\n---------------------------------- */\n.owl-item .image-box {\n  margin-bottom: 20px;\n}\n.image-box .body {\n  padding: 15px;\n}\n.image-box .body h3 {\n  margin-top: 0;\n}\n.image-box .body p:last-child {\n  margin-bottom: 0;\n}\n.image-box.style-4 {\n  border: none;\n}\n.image-box.style-3-b {\n  display: block;\n  margin-bottom: 40px;\n}\n.image-box.style-3-b .body {\n  padding: 10px 0;\n}\n/* Medium devices (tablets, laptops, smartphones 768px and up) */\n@media (min-width: 768px) {\n  .image-box.style-3-b .body {\n    padding: 0;\n  }\n}\n/* Medium devices (desktops, tablets less than 991px) */\n@media (max-width: 991px) {\n  .image-box.style-4 {\n    margin-bottom: 30px;\n  }\n}\n/*Listing Items\n---------------------------------- */\n.listing-item .overlay-container .badge {\n  position: absolute;\n  border: 1px solid #09afdf;\n  background-color: rgba(255, 255, 255, 0.95);\n  color: #09afdf;\n  font-weight: 400;\n  padding: 4px;\n  top: 10px;\n  right: 10px;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n}\n.listing-item .body {\n  padding: 15px;\n}\n.listing-item .body h3 {\n  margin-top: 0;\n  font-size: 18px;\n  line-height: 1.4;\n}\n.listing-item .elements-list {\n  font-size: 12px;\n}\n.listing-item .price {\n  font-size: 18px;\n  margin-top: 1px;\n  display: inline-block;\n  font-weight: 400;\n}\n.listing-item .price del {\n  font-size: 12px;\n  color: #999999;\n}\n.listing-item .overlay-to-top {\n  padding: 10px 0!important;\n}\n.listing-item .overlay-to-top .btn-sm-link {\n  padding: 5px;\n}\n/*Modals\n---------------------------------- */\n.modal-content .modal-header {\n  background-color: #09afdf;\n}\n.modal-content .modal-title {\n  color: #ffffff;\n}\n.modal-open .page-wrapper {\n  -webkit-filter: blur(3px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 5px;\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  .modal-lg {\n    width: 1140px;\n  }\n}\n/*Images and Overlays\n---------------------------------- */\n.overlay-container {\n  position: relative;\n  display: block;\n  text-align: center;\n  overflow: hidden;\n}\n.overlay-bottom,\n.overlay-top {\n  position: absolute;\n  top: auto;\n  padding: 15px;\n  bottom: 0px;\n  left: 0;\n  right: 0px;\n  background-color: rgba(30, 30, 30, 0.5);\n  overflow: hidden;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-transition: all ease-in-out 0.25s;\n  -o-transition: all ease-in-out 0.25s;\n  transition: all ease-in-out 0.25s;\n  height: 0;\n  color: #ffffff;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.overlay-bottom.links,\n.overlay-to-top.links {\n  z-index: 11;\n}\n.overlay-to-top {\n  position: absolute;\n  top: auto;\n  padding: 10px;\n  bottom: -30px;\n  left: 0;\n  right: 0px;\n  background-color: rgba(30, 30, 30, 0.5);\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-transition: all ease-in-out 0.25s;\n  -o-transition: all ease-in-out 0.25s;\n  transition: all ease-in-out 0.25s;\n  color: #ffffff;\n}\n.overlay-top {\n  top: 0;\n}\n.overlay-visible .overlay-bottom,\n.overlay-visible .overlay-top {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  height: auto!important;\n  padding-bottom: 20px;\n}\n.overlay-visible.overlay-container:hover .overlay-bottom:not(.links),\n.overlay-visible.overlay-container:hover .overlay-top {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.overlay-top a,\n.overlay-bottom a,\n.overlay-to-top a {\n  color: #ffffff;\n}\n.overlay-container .text {\n  padding: 0 20px;\n  position: relative;\n}\n.overlay-container .text h3,\n.overlay-container .text h3 .small {\n  margin-top: 0;\n  color: #ffffff;\n}\n.overlay-container .text a:hover {\n  color: #ffffff;\n}\n.overlay-bottom .btn,\n.overlay-top .btn {\n  color: #ffffff;\n  border-color: #ffffff;\n  margin: 0;\n}\n.overlay-bottom .btn:hover,\n.overlay-top .btn:hover {\n  color: #777777;\n  background-color: #ffffff;\n}\n.overlay-container:hover .overlay-top,\n.overlay-container:hover .overlay-bottom,\n.image-box.style-2:hover .overlay-top,\n.image-box.style-2:hover .overlay-bottom {\n  height: 50%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.overlay-container:hover .overlay-to-top,\n.image-box:hover .overlay-to-top {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  bottom: 0;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.overlay-link {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  padding: 15px;\n  bottom: 0px;\n  left: 0;\n  right: 0px;\n  background-color: rgba(30, 30, 30, 0.5);\n  overflow: hidden;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-transition: all ease-in-out 0.25s;\n  -o-transition: all ease-in-out 0.25s;\n  transition: all ease-in-out 0.25s;\n  color: #ffffff;\n}\n.overlay-link i {\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ffffff;\n  -webkit-border-radius: 100%;\n  -moz-border-radius: 100%;\n  border-radius: 100%;\n  color: #ffffff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -40px 0 0 -40px;\n  font-size: 32px;\n  line-height: 80px;\n}\n.overlay-link i:hover {\n  background-color: #ffffff;\n  color: #777777;\n}\n.overlay-link.small i {\n  width: 25px;\n  height: 25px;\n  margin: -12.5px 0 0 -12.5px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.overlay-container:hover .overlay-link {\n  height: 100%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  .overlay-container .text {\n    top: 30%;\n  }\n}\n/* Extra small devices (phones, less than 480px) */\n@media (max-width: 480px) {\n  .overlay-container .text {\n    top: 30%;\n  }\n  .overlay-container .text p {\n    display: none;\n  }\n}\n/* Large and Medium devices (desktops, tablets less than 1199px) */\n@media (min-width: 480px) and (max-width: 1199px) {\n  .overlay-container:not(.overlay-visible) .overlay-top ~ .overlay-bottom {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n  .owl-item .overlay-container:hover .overlay-top {\n    height: 71%;\n  }\n  .owl-item .overlay-container:hover .overlay-bottom {\n    height: 29%;\n  }\n}\n/*Video Backgrounds\n---------------------------------- */\n.video-background,\n.video-background-banner {\n  position: relative;\n  overflow: hidden;\n}\n/* Responsive iframe\n---------------------------------- */\n.tp-caption .embed-responsive {\n  overflow: visible;\n}\n/* Audio wrapper\n---------------------------------- */\n.audio-wrapper iframe {\n  width: 100%;\n  border: none;\n  margin-bottom: 20px;\n}\n/* Jumbotron\n---------------------------------- */\n.jumbotron {\n  background-color: transparent;\n}\n/*Carousel\n---------------------------------- */\n.top.carousel-indicators {\n  bottom: auto;\n  top: 10px;\n}\n.bottom.carousel-indicators {\n  bottom: 10px;\n}\n.shadow .carousel-indicators {\n  position: absolute;\n  z-index: 4;\n}\n/* 6 Navigations\n----------------------------------------------------------------------------- */\n/* 6.1 Light Version\n----------------------------------------------------------------------------- */\n/* mobile menu */\n.navbar.navbar-default {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  margin: 10px 0 15px;\n  border-color: #ededed;\n  background-color: #fafafa;\n  font-weight: 400;\n}\n/* first level menu item */\n.navbar-default .navbar-nav > li > a {\n  color: #333333;\n  font-size: 16px;\n  padding: 10px 15px 10px 15px;\n  z-index: 102;\n  border: none;\n  border-bottom: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-left: 1px solid transparent;\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n}\n.main-navigation.animated .navbar-default .navbar-nav > li > a {\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.transparent-header .header:not(.dark) .navbar-nav > li:not(.active) > a {\n  color: #000000;\n}\n.navbar-default .navbar-nav > li.dropdown > a {\n  padding-right: 20px;\n}\n/* first level menu item on hover/focus */\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus,\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  background-color: transparent;\n  color: #09afdf;\n}\n.transparent-header .header:not(.dark) .navbar-nav > li.open > a,\n.transparent-header .header:not(.dark) .navbar-nav > li > a:hover,\n.transparent-header .header:not(.dark) .navbar-nav > li > a:focus {\n  color: #09afdf;\n}\n/* first level menu item when opened */\n.main-navigation .navbar-nav > .open > a,\n.main-navigation .navbar-nav > .open > a:hover,\n.main-navigation .navbar-nav > .open > a:focus,\n.main-navigation .navbar-nav > .dropdown > a:focus {\n  background-color: #ffffff;\n  color: #09afdf;\n  border-bottom-color: #ffffff;\n  border-right: 1px solid #f5f5f5;\n  border-left: 1px solid #f5f5f5;\n  z-index: 106;\n}\n/* first level active menu item when clicked */\n.main-navigation .navbar-nav > .open > a:active,\n.main-navigation .navbar-nav > .open.active > a:active {\n  -webkit-transition: all 0.1s ease-in-out;\n  -o-transition: all 0.1s ease-in-out;\n  transition: all 0.1s ease-in-out;\n}\n.main-navigation .navbar-nav > .open > a:active + ul,\n.main-navigation .navbar-nav > .open.active > a:active + ul {\n  display: none;\n}\n/* second level menu */\n.main-navigation .dropdown-menu {\n  z-index: 105;\n  top: 99.2%;\n}\n.header.centered .main-navigation .dropdown-menu {\n  top: 99%;\n}\n.dropdown-menu .divider {\n  background-color: #ededed;\n}\n.dropdown-menu {\n  min-width: 220px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  border-radius: 0px;\n  padding: 0;\n  margin: 0;\n  background-color: #ffffff;\n  -webkit-box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);\n  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f1f1f1;\n  z-index: 101;\n}\n/* second level menu item */\n.dropdown-menu > li > a {\n  padding: 10px 20px;\n  font-size: 14px;\n  color: #333333;\n  border-bottom: 1px solid #f7f7f7;\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n}\n/* second level menu item on focus/hover and when opened */\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus,\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus,\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus,\n.dropdown-menu .menu > .active > a,\n.dropdown-menu .menu > .active > a:hover,\n.dropdown-menu .menu > .active > a:focus {\n  background-color: #fcfcfc;\n  color: #0c9ec7;\n  border-color: #f7f7f7;\n}\n/* third level menu */\n.dropdown-menu .dropdown-menu {\n  top: -1px;\n  left: 100% !important;\n  right: auto;\n  border-top: 1px solid #f7f7f7;\n}\n.header.centered .dropdown-menu .dropdown-menu {\n  top: -1px;\n  left: 100% !important;\n}\nheader.full-width .dropdown-menu .dropdown-menu.to-left {\n  right: 100%!important;\n  left: auto!important;\n}\n/*Large Devices less than 1610px*/\n@media (max-width: 1610px) {\n  .dropdown-menu .dropdown-menu.to-left {\n    right: 100%!important;\n    left: auto!important;\n  }\n}\n/* Mega Menu \n------------------------------ */\n.mega-menu.dropdown {\n  position: static;\n}\n.mega-menu .dropdown-menu {\n  left: 0;\n  width: 100%;\n  padding: 20px 30px;\n}\n/* mega menu menu item */\n.mega-menu .menu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.mega-menu h4.title {\n  margin: 5px 0;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n.mega-menu .menu > li > a {\n  padding: 5px 0;\n  font-size: 14px;\n  color: #333333;\n  border-bottom: 1px solid #f7f7f7;\n  display: block;\n  -webkit-transition: none;\n  -o-transition: none;\n  transition: none;\n}\n.mega-menu .menu > li > a i,\n.dropdown-menu > li > a i {\n  padding-left: 5px;\n  font-size: 12px;\n  width: 20px;\n  position: relative;\n  top: -1px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  color: #cdcdcd;\n}\n.mega-menu .menu > li > a i.fa-circle-o,\n.dropdown-menu > li > a i.fa-circle-o {\n  font-size: 7px;\n  top: -3px;\n}\n.mega-menu .menu > li:last-child > a {\n  border-bottom: none!important;\n}\nheader:not(.dark) .mega-menu .menu > li > a:hover i,\nheader:not(.dark) .dropdown-menu > li > a:hover i,\nheader:not(.dark) .mega-menu .menu > li.active > a i,\nheader:not(.dark) .dropdown-menu > li.active > a i {\n  color: #09afdf;\n}\nheader .mega-menu .menu > li > a:hover i.fa-circle-o:before,\nheader .dropdown-menu > li > a:hover i.fa-circle-o:before,\nheader .mega-menu .menu > li.active > a i.fa-circle-o:before,\nheader .dropdown-menu > li.active > a i.fa-circle-o:before {\n  content: \"\\f111\";\n}\n/* mega menu menu item on focus/hover*/\n.mega-menu .menu > li > a:hover,\n.mega-menu .menu > li > a:focus {\n  background-color: #fcfcfc;\n  color: #0c9ec7;\n  border-color: #f7f7f7;\n  text-decoration: none;\n}\n/* Arrow for parent menu item \n------------------------------ */\n.dropdown > a:before {\n  font-family: \'FontAwesome\';\n  content: \"\\f107\";\n  position: absolute;\n  left: auto;\n  top: 31px;\n  right: 6px;\n  line-height: 1;\n  color: #d1d1d1;\n  font-size: 14px;\n}\n.header.centered .dropdown > a:before {\n  top: 18px;\n}\n.header:not(.dark) .active.dropdown > a:before,\n.header:not(.dark).centered .active.dropdown > a:before {\n  color: #09afdf;\n}\n.transparent-header .header:not(.dark) .dropdown:not(.open):not(.active) > a:before {\n  color: #777777;\n}\n.navbar-default .navbar-nav > .dropdown.open > a:before {\n  color: #eaeaea;\n}\n.transparent-header .header:not(.dark) .navbar-default .navbar-nav > .dropdown.open > a:before {\n  color: #09afdf;\n}\n.dropdown .dropdown > a:before,\n.header.centered .dropdown .dropdown > a:before {\n  content: \"\\f105\";\n  right: 10px;\n  top: 13px;\n  margin-left: 0;\n  visibility: visible;\n  color: #666;\n}\n.dropdown .dropdown.open > a:before,\n.header.centered:not(.dark) .dropdown .dropdown.open > a:before {\n  color: #09afdf;\n}\n/* Dropdown animations \n------------------------------ */\n.animated.main-navigation .navbar-nav .open .dropdown-menu,\n#offcanvas.animated .open .dropdown-menu,\n#offcanvas.animated .dropdown-menu .open .dropdown-menu {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: fadeInUpSmall;\n  animation-name: fadeInUpSmall;\n}\n.animated.main-navigation .dropdown-menu .open .dropdown-menu {\n  -webkit-animation-name: fadeInLeftSmall;\n  animation-name: fadeInLeftSmall;\n}\nheader.full-width .animated.main-navigation .dropdown-menu .open .dropdown-menu.to-left {\n  -webkit-animation-name: fadeInRightSmall;\n  animation-name: fadeInRightSmall;\n}\n/*Large Devices less than 1610px*/\n@media (max-width: 1610px) {\n  .animated.main-navigation .dropdown-menu .open .dropdown-menu.to-left {\n    -webkit-animation-name: fadeInRightSmall;\n    animation-name: fadeInRightSmall;\n  }\n}\n/* Mobile Menu\n------------------------------ */\n/* mobile menu toggle button on hover/focus */\n.navbar-default .navbar-toggle {\n  border-color: #ccc;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #fafafa;\n  border-color: #0c9ec7;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #ccc;\n}\n.navbar-default .navbar-toggle:hover .icon-bar,\n.navbar-default .navbar-toggle:focus .icon-bar {\n  background-color: #0c9ec7;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .main-navigation .navbar-nav.navbar-right:last-child {\n    margin-right: 0;\n  }\n  /* first level menu */\n  .navbar.navbar-default {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n  }\n  .navbar-default .navbar-nav > li > a {\n    padding: 28px 15px 27px 15px;\n  }\n  /*centered logo layout*/\n  .header.centered .navbar-default .navbar-nav > li > a {\n    padding-top: 15px!important;\n    padding-bottom: 15px!important;\n    border-top: 1px solid transparent;\n  }\n  .header.centered:not(.dark) .main-navigation .navbar-nav > .open > a,\n  .header.centered:not(.dark) .main-navigation .navbar-nav > .open > a:hover,\n  .header.centered:not(.dark) .main-navigation .navbar-nav > .open > a:focus,\n  .header.centered:not(.dark) .main-navigation .navbar-nav > .dropdown > a:focus {\n    border-top: 1px solid #f5f5f5;\n  }\n  /* mega menu */\n  header:not(.full-width):not(.centered) .with-dropdown-buttons .mega-menu:not(.narrow) .dropdown-menu {\n    left: 0px;\n    width: 720px;\n  }\n  /* layout fixes */\n  header:not(.full-width) .main-navigation .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  header:not(.full-width) .navbar-collapse {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n  header:not(.full-width) .main-navigation .navbar-right .dropdown-menu {\n    right: auto;\n    left: 0;\n  }\n  header:not(.full-width) .main-navigation .navbar-right > li:last-child > .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n}\n/* Medium desktop devices and tablets */\n@media (min-width: 768px) and (max-width: 1199px) {\n  .navbar-default .navbar-nav > li > a {\n    font-size: 15px;\n    padding: 28px 10px 27px 10px;\n  }\n}\n/* Medium devices (tablets landscape to portrait) */\n@media (min-width: 768px) and (max-width: 991px) {\n  .header:not(.full-width) .main-navigation .navbar-nav {\n    float: left !important;\n  }\n  body:not(.fixed-header-on) .header:not(.dark) .navbar-default .navbar-nav > li > a {\n    border-top: 1px solid transparent;\n  }\n  body:not(.fixed-header-on) .header:not(.dark) .main-navigation .navbar-nav > .open > a,\n  body:not(.fixed-header-on) .header:not(.dark) .main-navigation .navbar-nav > .open > a:hover,\n  body:not(.fixed-header-on) .header:not(.dark) .main-navigation .navbar-nav > .open > a:focus,\n  body:not(.fixed-header-on) .header:not(.dark) .main-navigation .navbar-nav > .dropdown > a:focus {\n    border-top: 1px solid #f5f5f5;\n  }\n}\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .col-md-3 + .col-md-9 .mega-menu:not(.narrow) .dropdown-menu {\n    left: -243px !important;\n    width: 940px!important;\n  }\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  /* first level menu item */\n  .main-navigation .navbar-nav > li {\n    margin: 0 0 0 10px;\n  }\n  .main-navigation .navbar-nav > li:first-child {\n    margin: 0;\n  }\n  .col-md-3 + .col-md-9 .mega-menu:not(.narrow) .dropdown-menu {\n    left: -293px !important;\n    width: 1140px!important;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  /* Mobile menu\n\t------------------------------ */\n  /* active item */\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #0c9ec7;\n    background-color: transparent;\n  }\n  /* first level item */\n  .navbar-default .navbar-nav > li > a {\n    border-bottom: 1px solid #f3f3f3;\n  }\n  .navbar-default .navbar-nav > li:last-child > a {\n    border-bottom: 1px solid transparent;\n  }\n  /* first level item hover and focus states */\n  .navbar-default .navbar-nav > li > a:hover,\n  .navbar-default .navbar-nav > li > a:focus,\n  .navbar-default .navbar-nav > .active > a,\n  .navbar-default .navbar-nav > .active > a:hover,\n  .navbar-default .navbar-nav > .active > a:focus {\n    color: #0c9ec7;\n    background-color: #fff;\n    border-bottom-color: transparent;\n  }\n  /* second level menu */\n  .navbar-default .navbar-nav .open .dropdown-menu {\n    background-color: #ffffff;\n  }\n  /* second level item */\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-default .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 12px 15px 12px 40px;\n    color: #333333;\n    border-color: #f9f9f9;\n  }\n  /* second level item on hover/focus */\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #0c9ec7;\n  }\n  /* third level item */\n  .navbar-nav .open .dropdown-menu .dropdown-menu > li > a {\n    padding-left: 60px;\n  }\n  /* four level item */\n  .navbar-nav .open .dropdown-menu .dropdown-menu .dropdown-menu > li > a {\n    padding-left: 80px;\n  }\n  /* Arrow for parent menu item */\n  .navbar-default .navbar-nav > .dropdown.open > a:before {\n    color: #09afdf;\n  }\n  .dropdown > a:before,\n  .header.centered .dropdown > a:before {\n    color: #999999;\n    top: 14px;\n    right: 32px;\n  }\n  .dropdown .dropdown > a:before,\n  .header.centered .dropdown .dropdown > a:before {\n    right: 36px;\n  }\n  /*Transparent Mobile menu*/\n  .transparent-header .main-navigation .navbar.navbar-default {\n    background-color: rgba(255, 255, 255, 0.9);\n    position: absolute;\n    width: 100%;\n  }\n}\n/* 6.2 Dark Version\n----------------------------------------------------------------------------- */\n/* first level menu item */\n.dark.header .navbar.navbar-default {\n  border-color: rgba(0, 0, 0, 0.3);\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.dark.header .navbar-default .navbar-nav > li > a {\n  color: #cccccc;\n  border-bottom: 1px solid transparent;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6);\n}\n.transparent-header .dark.header .navbar-nav > li > a {\n  color: #e1e1e1;\n}\n/* first level menu item on hover/focus */\n.dark.header .navbar-default .navbar-nav > li > a:hover,\n.dark.header .navbar-default .navbar-nav > li > a:focus,\n.dark.header .navbar-default .navbar-nav > .active > a,\n.dark.header .navbar-default .navbar-nav > .active > a:hover,\n.dark.header .navbar-default .navbar-nav > .active > a:focus {\n  background-color: transparent;\n  color: #ffffff;\n  border-right: 1px solid transparent;\n  border-left: 1px solid transparent;\n}\n.dark.header .navbar-default .navbar-nav > li > a:hover,\n.dark.header .navbar-default .navbar-nav > li > a:focus {\n  z-index: 106;\n}\n/* first level active menu item when opened */\n.dark.header .main-navigation .navbar-nav > .open > a,\n.dark.header .main-navigation .navbar-nav > .open > a:hover,\n.dark.header .main-navigation .navbar-nav > .open > a:focus,\n.dark.header .main-navigation .navbar-nav > .dropdown > a:focus {\n  background-color: rgba(0, 0, 0, 0.15);\n  color: #ffffff;\n  border-bottom-color: #2e3537;\n  border-right: 1px solid transparent;\n  border-left: 1px solid transparent;\n  z-index: 106;\n}\n/* second level menu item */\n.dark.header .dropdown-menu {\n  background-color: #2e3537;\n  border: 1px solid rgba(57, 66, 69, 0.8);\n  border-bottom: none;\n}\n.dark.header .mega-menu .dropdown-menu {\n  z-index: 103;\n}\n.dark.header .dropdown-menu .divider {\n  background-color: rgba(57, 66, 69, 0.8);\n}\n.dark.header .dropdown-menu > li > a,\n.dark.header .mega-menu .menu > li > a {\n  color: #cccccc;\n  border-bottom: 1px solid rgba(57, 66, 69, 0.8);\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.7);\n}\n.dark.header .mega-menu .menu > li > a:hover,\n.dark.header .mega-menu .menu > li > a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #ffffff;\n  border-color: rgba(57, 66, 69, 0.8);\n}\n.dark.header .dropdown-menu > li > a:hover,\n.dark.header .dropdown-menu > li > a:focus,\n.dark.header .nav .open > a,\n.dark.header .nav .open > a:hover,\n.dark.header .nav .open > a:focus,\n.dark.header .dropdown-menu > .active > a,\n.dark.header .dropdown-menu > .active > a:hover,\n.dark.header .dropdown-menu > .active > a:focus,\n.dark.header .dropdown-menu .menu > .active > a,\n.dark.header .dropdown-menu .menu > .active > a:hover,\n.dark.header .dropdown-menu .menu > .active > a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #ffffff;\n  border-color: rgba(57, 66, 69, 0.8);\n}\n.dark.header .dropdown .dropdown > a:before {\n  color: #cccccc;\n  top: 13px;\n}\n.dark.header .dropdown .dropdown.open > a:before {\n  color: #ffffff;\n}\n/* Mobile Menu\n------------------------------ */\n/*Dark mobile menu toggle button*/\n.dark .navbar-default .navbar-toggle {\n  border-color: rgba(0, 0, 0, 0.7);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.dark .navbar-default .navbar-toggle:hover,\n.dark .navbar-default .navbar-toggle:focus {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.dark .navbar-default .navbar-toggle .icon-bar {\n  background-color: #ccc;\n}\n.dark .navbar-default .navbar-toggle:hover .icon-bar,\n.dark .navbar-default .navbar-toggle:focus .icon-bar {\n  background-color: #ccc;\n}\n.dark .navbar-default .navbar-collapse,\n.dark .navbar-default .navbar-form {\n  border-color: #121212;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  /* first level menu item */\n  .dark.header .navbar.navbar-default {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  /*Dark Mobile menu*/\n  /* second level menu */\n  .dark .navbar-default .navbar-nav .open .dropdown-menu {\n    background-color: rgba(0, 0, 0, 0.2);\n    border: none;\n  }\n  /* second level item */\n  .dark .navbar-default .navbar-nav .open .dropdown-menu > li > a,\n  .dark .navbar-default .navbar-nav .open .dropdown-menu .dropdown-header {\n    color: #cccccc;\n    border-color: rgba(255, 255, 255, 0.08);\n  }\n  /* item on hover/focus */\n  .dark.header .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .dark.header .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus,\n  .dark.header .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .dark.header .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .dark.header .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus,\n  .dark.header .navbar-default .navbar-nav > li > a:hover,\n  .dark.header .navbar-default .navbar-nav > li > a:focus,\n  .dark.header .navbar-default .navbar-nav > .active > a,\n  .dark.header .navbar-default .navbar-nav > .active > a:hover,\n  .dark.header .navbar-default .navbar-nav > .active > a:focus {\n    color: #ffffff;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n  /* Arrow for parent menu item */\n  .dark .navbar-default .navbar-nav > .dropdown.open > a:before {\n    color: #ffffff;\n  }\n  .transparent-header .dark .main-navigation .navbar.navbar-default {\n    background-color: rgba(57, 66, 69, 0.9);\n    border-color: rgba(37, 42, 44, 0.5);\n  }\n}\n/* 6.3 Subfooter navigation\n----------------------------------------------------------------------------- */\n.subfooter .navbar {\n  margin: 0;\n  min-height: 0;\n  background: transparent;\n  border-color: transparent;\n}\n.subfooter .navbar-default .nav > li > a {\n  padding: 10px 10px;\n  text-transform: none;\n  line-height: 1;\n  font-size: 14px;\n  font-weight: 400;\n  color: #999999;\n}\n.subfooter .navbar-default .nav li:last-child a,\n.dark .subfooter .navbar-default .nav > li:last-child > a {\n  border: none;\n}\n.subfooter .navbar-default .nav > li > a:hover,\n.subfooter .navbar-default .nav > .active > a:hover,\n.subfooter .navbar-default .nav > .active > a:focus {\n  background-color: transparent;\n  text-decoration: underline;\n  color: #0c9ec7;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .subfooter .navbar-nav {\n    float: none;\n    margin: 15px 0;\n    text-align: center;\n  }\n  .subfooter .navbar-nav > li {\n    float: none;\n    padding: 5px 0;\n  }\n  .subfooter .navbar-default .nav > li > a {\n    padding: 0px 10px;\n  }\n}\n/* Medium devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n  .subfooter {\n    text-align: left;\n  }\n  .subfooter .navbar-nav {\n    float: right;\n    margin: 0;\n    text-align: left;\n  }\n  .subfooter .navbar-nav > li {\n    float: left;\n    padding: 0;\n    margin-top: 2px;\n  }\n  .dark .subfooter .navbar-default .nav > li > a {\n    border-right: 1px solid #333333;\n  }\n  .subfooter .navbar-default .nav > li > a {\n    border-right: 1px solid #cdcdcd;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  /* subfooter nav */\n  .subfooter .navbar-default .navbar-toggle:hover,\n  .subfooter .navbar-default .navbar-toggle:focus {\n    background-color: transparent;\n    border-color: #ddd;\n  }\n  .dark .subfooter .navbar-default .navbar-collapse {\n    border-color: #888;\n  }\n  .subfooter .navbar-default .navbar-collapse {\n    border-color: #000000;\n  }\n}\n/* 6.3 Offcanvas navigation\n----------------------------------------------------------------------------- */\n.offcanvas {\n  background-color: #f5f5f5;\n  border-color: #f1f1f1;\n}\n.offcanvas-toggle-left {\n  display: block;\n  padding: 0;\n  margin: 0;\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  top: 10px;\n  left: 10px;\n  z-index: 1031;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.85);\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.offcanvas-toggle-left:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f0c9\";\n  font-size: 22px;\n  line-height: 35px;\n  text-align: center;\n  color: #000000;\n}\n#offcanvas.in + .offcanvas-toggle-left:after {\n  content: \"\\f00d\";\n}\n.offcanvas-toggle-right {\n  display: block;\n  padding: 0;\n  margin: 0;\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  top: 10px;\n  right: 10px;\n  z-index: 1031;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.85);\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.offcanvas-toggle-right:after {\n  font-family: \"FontAwesome\";\n  content: \"\\f0c9\";\n  font-size: 22px;\n  line-height: 35px;\n  text-align: center;\n  color: #000000;\n}\n#offcanvas.in + .offcanvas-toggle-right:after {\n  content: \"\\f00d\";\n}\n/*First level menu items*/\n#offcanvas .navbar-nav > li,\n#offcanvas .navbar-nav {\n  float: none;\n  margin: 0;\n}\n#offcanvas .navbar-nav > li > a {\n  color: #333333;\n  border-bottom: 1px solid #eeeeee;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-weight: 300;\n}\n#offcanvas .navbar-nav > li:last-child > a {\n  border-bottom-color: transparent!important;\n}\n#offcanvas .nav .open > a,\n#offcanvas .nav .open > a:hover,\n#offcanvas .nav .open > a:focus,\n#offcanvas .nav > li > a:hover,\n#offcanvas .nav > li > a:focus,\n#offcanvas .navbar-nav > li.active > a {\n  color: #0c9ec7;\n  background-color: #ffffff;\n}\n/*Second level menu items*/\n#offcanvas .dropdown-menu {\n  position: static;\n  width: 100%;\n  float: none;\n  box-shadow: none;\n  border: none;\n  background-color: #ffffff;\n  margin: 0;\n}\n#offcanvas.offcanvas-right .dropdown-menu {\n  overflow: hidden;\n}\n#offcanvas .dropdown-menu > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-color: #f7f7f7;\n  font-weight: 300;\n  text-align: center;\n  background-color: #f8f8f8;\n}\n/*Third level menu items*/\n#offcanvas .dropdown-menu .dropdown-menu > li > a {\n  background-color: #fafafa;\n}\n/*Fourth level menu items*/\n#offcanvas .dropdown-menu .dropdown-menu .dropdown-menu > li > a {\n  background-color: #ffffff;\n}\n/*Nav arrows*/\n#offcanvas .dropdown > a:before {\n  right: 15px;\n  top: 13px;\n  color: #777777;\n}\n#offcanvas .dropdown.open > a:before {\n  color: #09afdf;\n}\n#offcanvas.offcanvas-right .dropdown > a:before {\n  right: auto;\n  left: 15px;\n  top: 13px;\n}\n#offcanvas .dropdown .dropdown > a:before {\n  content: \"\\f107\";\n}\n/* 7 Blocks/Widgets\n----------------------------------------------------------------------------- */\n/* Logo, Site Slogan\n---------------------------------- */\n#logo img {\n  -webkit-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n#logo img:hover {\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n}\n.header.centered #logo img {\n  margin: 0 auto;\n}\n#logo-footer {\n  margin-bottom: 20px;\n}\n.site-slogan {\n  color: #777777;\n  font-size: 11px;\n  padding: 3px 0 0;\n  font-weight: 300;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.offcanvas .logo {\n  margin: 20px 0 10px;\n}\n.offcanvas .logo img {\n  margin: 0 auto;\n}\n.offcanvas .site-slogan {\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: -10px;\n}\n.transparent-header .header:not(.dark) .site-slogan {\n  color: #000000;\n}\n.header.dark .site-slogan {\n  color: #cdcdcd;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.4);\n}\n.transparent-header .header.dark .site-slogan {\n  color: #f1f1f1;\n}\n/* Medium devices (tablets, phones) */\n@media (min-width: 992px) and (max-width: 1199px) {\n  .site-slogan {\n    font-size: 11px;\n  }\n}\n/* Small devices (tablets, phones less than 991px) */\n@media (max-width: 991px) {\n  header:not(.full-width) .logo img {\n    margin: 0 auto;\n  }\n  .site-slogan {\n    text-align: center;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .navbar-header #logo img {\n    max-height: 35px;\n    margin-left: 15px;\n  }\n}\n/* Social icons block\n---------------------------------- */\n.social-links {\n  list-style: none;\n  font-size: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n.social-links li {\n  display: inline-block;\n  margin: 0 2px 2px 0;\n}\n.social-links li a {\n  width: 40px;\n  height: 40px;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  border: 1px solid #e7e7e7;\n  color: #cdcdcd;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n}\n.social-links li a i {\n  line-height: 40px;\n}\n.social-links li a:hover {\n  background-color: transparent;\n  border-color: #0c9ec7;\n  color: #0c9ec7;\n}\n.social-links.animated-effect-1 li a {\n  -webkit-transition: color 0.4s;\n  -o-transition: color 0.4s;\n  transition: color 0.4s;\n  position: relative;\n  z-index: 1;\n}\n.social-links.animated-effect-1 li a:hover {\n  color: #ffffff!important;\n  -webkit-transition: color 0.3s;\n  -o-transition: color 0.3s;\n  transition: color 0.3s;\n}\n.social-links.animated-effect-1 li a:after {\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  content: \'\';\n  top: 0px;\n  left: 0px;\n  padding: 0px;\n  z-index: -1;\n  background-color: #09afdf;\n  -webkit-transition: -webkit-transform 0.4s, opacity 0.4s, background-color 0.4s;\n  -moz-transition: -moz-transform 0.4s, opacity 0.4s, background-color 0.4s;\n  transition: transform 0.4s, opacity 0.4s, background-color 0.4s;\n  -webkit-transform: scale(1.4);\n  -moz-transform: scale(1.4);\n  -ms-transform: scale(1.4);\n  -o-transform: scale(1.4);\n  transform: scale(1.4);\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.social-links.animated-effect-1 li a:hover:after {\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  -o-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  -webkit-transition: -webkit-transform 0s, opacity 0.3s, background-color 0.3s;\n  -moz-transition: -moz-transform 0s, opacity 0.3s, background-color 0.3s;\n  transition: transform 0s, opacity 0.3s, background-color 0.3s;\n}\n.social-links.animated-effect-1:not(.circle) li a:after {\n  -webkit-border-radius: 0%;\n  -moz-border-radius: 0%;\n  border-radius: 0%;\n}\n.default.social-links li a {\n  background-color: #09afdf;\n  border: 1px solid #0c9ec7;\n  color: #ffffff;\n}\n.default.social-links li a:hover {\n  background-color: #ffffff;\n  color: #777777;\n}\n.dark .social-links li a {\n  background-color: rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: #ffffff;\n}\n.dark.social-links li a {\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: #ffffff;\n}\n.dark.social-links li a:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.colored .social-links li a {\n  background-color: rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.01);\n  color: #ffffff;\n}\n.header-top .social-links {\n  margin: 0;\n  display: inline-block;\n  margin-top: 2px;\n}\n.footer-content .social-links li {\n  margin: 0 5px 5px 0;\n}\n.footer-content .social-links li a {\n  color: #777777;\n  background-color: transparent;\n  border-color: #777777;\n}\n.footer-content .social-links li a:hover {\n  color: #fff;\n  background-color: #777777;\n  border-color: #777777;\n}\n.social-links.small li a {\n  width: 30px;\n  height: 30px;\n  font-size: 14px;\n}\n.social-links.small li a i {\n  line-height: 29px;\n}\n.social-links.large li a {\n  width: 60px;\n  height: 60px;\n  font-size: 24px;\n}\n.social-links.large li a i {\n  line-height: 60px;\n}\n.social-links.square li a,\n.square {\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.social-links.circle li a {\n  -webkit-border-radius: 100%;\n  -moz-border-radius: 100%;\n  border-radius: 100%;\n}\n.social-links.animated-effect-1 li.twitter a:hover {\n  border-color: #55acee;\n}\n.social-links:not(.animated-effect-1) li.twitter a:hover,\n.colored.social-links li.twitter a,\n.social-links.animated-effect-1 li.twitter a:after,\n.btn.twitter {\n  background-color: #55acee;\n  border-color: #55acee;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.skype a:hover {\n  border-color: #00aff0;\n}\n.social-links:not(.animated-effect-1) li.skype a:hover,\n.colored.social-links li.skype a,\n.social-links.animated-effect-1 li.skype a:after,\n.btn.skype {\n  background-color: #00aff0;\n  border-color: #00aff0;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.linkedin a:hover {\n  border-color: #0976b4;\n}\n.social-links:not(.animated-effect-1) li.linkedin a:hover,\n.colored.social-links li.linkedin a,\n.social-links.animated-effect-1 li.linkedin a:after,\n.btn.linkedin {\n  background-color: #0976b4;\n  border-color: #0976b4;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.googleplus a:hover {\n  border-color: #dd4b39;\n}\n.social-links:not(.animated-effect-1) li.googleplus a:hover,\n.colored.social-links li.googleplus a,\n.social-links.animated-effect-1 li.googleplus a:after,\n.btn.googleplus {\n  background-color: #dd4b39;\n  border-color: #dd4b39;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.youtube a:hover {\n  border-color: #b31217;\n}\n.social-links:not(.animated-effect-1) li.youtube a:hover,\n.colored.social-links li.youtube a,\n.social-links.animated-effect-1 li.youtube a:after,\n.btn.youtube {\n  background-color: #b31217;\n  border-color: #b31217;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.flickr a:hover {\n  border-color: #ff0084;\n}\n.social-links:not(.animated-effect-1) li.flickr a:hover,\n.colored.social-links li.flickr a,\n.social-links.animated-effect-1 li.flickr a:after,\n.btn.flickr {\n  background-color: #ff0084;\n  border-color: #ff0084;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.facebook a:hover {\n  border-color: #3b5998;\n}\n.social-links:not(.animated-effect-1) li.facebook a:hover,\n.colored.social-links li.facebook a,\n.social-links.animated-effect-1 li.facebook a:after,\n.btn.facebook {\n  background-color: #3b5998;\n  border-color: #3b5998;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.pinterest a:hover {\n  border-color: #cb2027;\n}\n.social-links:not(.animated-effect-1) li.pinterest a:hover,\n.colored.social-links li.pinterest a,\n.social-links.animated-effect-1 li.pinterest a:after,\n.btn.pinterest {\n  background-color: #cb2027;\n  border-color: #cb2027;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.instagram a:hover {\n  border-color: #517fa4;\n}\n.social-links:not(.animated-effect-1) li.instagram a:hover,\n.colored.social-links li.instagram a,\n.social-links.animated-effect-1 li.instagram a:after,\n.btn.instagram {\n  background-color: #517fa4;\n  border-color: #517fa4;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.vimeo a:hover {\n  border-color: #aad450;\n}\n.social-links:not(.animated-effect-1) li.vimeo a:hover,\n.colored.social-links li.vimeo a,\n.social-links.animated-effect-1 li.vimeo a:after,\n.btn.vimeo {\n  background-color: #aad450;\n  border-color: #aad450;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.tumblr a:hover {\n  border-color: #32506d;\n}\n.social-links:not(.animated-effect-1) li.tumblr a:hover,\n.colored.social-links li.tumblr a,\n.social-links.animated-effect-1 li.tumblr a:after,\n.btn.tumblr {\n  background-color: #32506d;\n  border-color: #32506d;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.soundcloud a:hover {\n  border-color: #ff3a00;\n}\n.social-links:not(.animated-effect-1) li.soundcloud a:hover,\n.colored.social-links li.soundcloud a,\n.social-links.animated-effect-1 li.soundcloud a:after,\n.btn.soundcloud {\n  background-color: #ff3a00;\n  border-color: #ff3a00;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.foursquare a:hover {\n  border-color: #0072b1;\n}\n.social-links:not(.animated-effect-1) li.foursquare a:hover,\n.colored.social-links li.foursquare a,\n.social-links.animated-effect-1 li.foursquare a:after,\n.btn.foursquare {\n  background-color: #0072b1;\n  border-color: #0072b1;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.dribbble a:hover {\n  border-color: #ea4c89;\n}\n.social-links:not(.animated-effect-1) li.dribbble a:hover,\n.colored.social-links li.dribbble a,\n.social-links.animated-effect-1 li.dribbble a:after,\n.btn.dribbble {\n  background-color: #ea4c89;\n  border-color: #ea4c89;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.xing a:hover {\n  border-color: #126567;\n}\n.social-links:not(.animated-effect-1) li.xing a:hover,\n.colored.social-links li.xing a,\n.social-links.animated-effect-1 li.xing a:after,\n.btn.xing {\n  background-color: #126567;\n  border-color: #126567;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.behance a:hover {\n  border-color: #126567;\n}\n.social-links:not(.animated-effect-1) li.behance a:hover,\n.colored.social-links li.behance a,\n.social-links.animated-effect-1 li.behance a:after,\n.btn.behance {\n  background-color: #053eff;\n  border-color: #053eff;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.vine a:hover {\n  border-color: #126567;\n}\n.social-links:not(.animated-effect-1) li.vine a:hover,\n.colored.social-links li.vine a,\n.social-links.animated-effect-1 li.vine a:after,\n.btn.vine {\n  background-color: #00a478;\n  border-color: #00a478;\n  color: #fff;\n}\n.social-links.animated-effect-1 li.stumbleupon a:hover {\n  border-color: #126567;\n}\n.social-links:not(.animated-effect-1) li.stumbleupon a:hover,\n.colored.social-links li.stumbleupon a,\n.social-links.animated-effect-1 li.stumbleupon a:after,\n.btn.stumbleupon {\n  background-color: #f74425;\n  border-color: #f74425;\n  color: #fff;\n}\n.social-links .dropdown > button {\n  padding: 1px 15px 0px;\n  font-size: 16px;\n  color: #999999;\n  text-align: center;\n  min-width: 0;\n  margin: 0;\n  background-color: transparent;\n  -moz-box-shadow: none !important;\n  -o-box-shadow: none !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.social-links .dropdown > button i {\n  width: 15px;\n}\n.header-top:not(.dark) .social-links .dropdown.open > button > i:before {\n  color: #09afdf;\n}\n.header-top.colored .social-links .dropdown > button > i:before,\n.header-top.colored .social-links .dropdown.open > button > i:before {\n  color: #ffffff;\n}\n.header-top .social-links .dropdown.open > button > i:before {\n  content: \"\\f00d\";\n}\n.social-links .dropdown-menu {\n  z-index: 103;\n  padding: 5px;\n  min-width: 270px;\n  margin-top: 6px;\n  font-size: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: #f2f2f2;\n  border: 1px solid #D0D0D0;\n  border-top: none;\n}\n.social-links .dropdown-menu li a,\n.dark .social-links .dropdown-menu li a i,\n.colored .social-links .dropdown-menu li a i {\n  padding: 0;\n  line-height: 30px;\n  color: #ffffff;\n}\n.social-links .dropdown-menu li a i {\n  padding-left: 0;\n}\n.social-links .dropdown-menu li a:hover i {\n  color: #ffffff;\n}\n/*Header Dropdowns (search, cart etc)\n---------------------------------- */\n/*Header Dropdowns*/\n.transparent-header .header-dropdown-buttons .btn-group > .btn {\n  background-color: transparent;\n  border: 1px solid #999999;\n  color: #000000;\n}\n.header-dropdown-buttons .btn-group:first-child {\n  margin-right: 5px;\n}\n.header-dropdown-buttons .btn-group > .btn {\n  -webkit-border-radius: 100%;\n  -moz-border-radius: 100%;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  line-height: 38px;\n  text-align: center;\n  background-color: #f2f2f2;\n  border: 1px solid #e9e9e9;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  margin: 0;\n}\n.header-dropdown-buttons .btn-group > .btn:hover {\n  background-color: #09afdf;\n  color: #fff;\n  border-color: #0c9ec7;\n}\n.header-dropdown-buttons .btn-group .dropdown-menu {\n  z-index: 103;\n  padding: 20px;\n  min-width: 280px;\n  margin-top: 18px;\n  top: 100%;\n  border: none;\n  -webkit-border-radius: 0 0 5px 5px;\n  -moz-border-radius: 0 0 5px 5px;\n  border-radius: 0 0 5px 5px;\n}\n.header-dropdown-buttons .btn-group.open > .btn {\n  background-color: #09afdf;\n  color: #fff;\n  border-color: #0c9ec7;\n}\n.header.centered .header-dropdown-buttons .btn-group .dropdown-menu {\n  margin-top: 8px;\n}\n.dark .header-dropdown-buttons .btn-group > .btn,\n.colored .header-dropdown-buttons .btn-group > .btn {\n  background-color: rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.7);\n  color: #cdcdcd;\n}\n.dark .header-dropdown-buttons .btn-group > .btn:hover,\n.colored .header-dropdown-buttons .btn-group > .btn:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.25);\n}\n.dark .header-dropdown-buttons .btn-group.open > .btn,\n.colored .header-dropdown-buttons .btn-group.open > .btn {\n  background-color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.25);\n}\n.btn-group.open .dropdown-animation {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n/*Header Top Dropdowns*/\n.header-top-dropdown .dropdown-menu {\n  z-index: 103;\n  padding: 20px;\n  min-width: 280px;\n  margin-top: 6px;\n  border: 1px solid #D0D0D0;\n  border-top: none;\n  background: #f2f2f2;\n  font-weight: 400;\n  -webkit-border-radius: 0 0 5px 5px;\n  -moz-border-radius: 0 0 5px 5px;\n  border-radius: 0 0 5px 5px;\n}\n.header-top-dropdown .login-form ul {\n  padding-left: 0;\n  list-style-position: inside;\n  margin: 15px 0 10px;\n}\n.header-top-dropdown .login-form .social-links {\n  padding-left: 20px;\n  margin: 0;\n}\n.header-top-dropdown .login-form label {\n  font-weight: 400;\n}\n.dark.header-top .dropdown-menu {\n  border: 1px solid #252a2c;\n  border-top: none;\n  background: #2e3537;\n}\n.colored.header-top .dropdown-menu {\n  border: 1px solid #09afdf;\n  border-top: none;\n  background: #09afdf;\n}\n.search-box .form-group {\n  margin-bottom: 0;\n}\n/*Button Groups*/\n.header-top .btn-group {\n  margin: 3px 0 2px;\n}\n.header-top .btn-group .btn {\n  margin: 0;\n  text-decoration: none;\n}\n/* Extra small devices (phones, less than 480px) */\n@media (max-width: 480px) {\n  .header-top-dropdown .btn-group {\n    position: static;\n  }\n  .header-top-dropdown .dropdown-menu {\n    right: 15px!important;\n    margin-top: 5px;\n    width: 100%;\n  }\n}\n/*Dark Dropdowns\n---------------------------------- */\n.dark.btn-group .dropdown-menu {\n  background-color: #333333;\n  border: 1px solid #424242;\n  border-bottom: none;\n}\n.dark.btn-group .dropdown-menu .divider {\n  background-color: #505050;\n}\n.dark.btn-group .dropdown-menu > li > a,\n.dark.btn-group .mega-menu .menu > li > a {\n  color: #cccccc;\n  border-bottom: 1px solid #424242;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.7);\n}\n.dark.btn-group .dropdown-menu > li > a:hover,\n.dark.btn-group .dropdown-menu > li > a:focus,\n.dark.btn-group .nav .open > a,\n.dark.btn-group .nav .open > a:hover,\n.dark.btn-group .nav .open > a:focus,\n.dark.btn-group .dropdown-menu > .active > a,\n.dark.btn-group .dropdown-menu > .active > a:hover,\n.dark.btn-group .dropdown-menu > .active > a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #ffffff;\n  border-color: #424242;\n}\n.dark.btn-group .dropdown .dropdown > a:before {\n  color: #cccccc;\n  top: 13px;\n}\n.dark.btn-group .dropdown .dropdown.open > a:before {\n  color: #ffffff;\n}\n/* Login/Register Forms\n---------------------------------- */\n.form-block {\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n  width: 630px;\n}\n.form-block .social-links {\n  display: inline-block;\n  margin: 0 0 0 5px;\n}\n.form-block ul {\n  padding-left: 0;\n  list-style-position: inside;\n}\n.light-gray-bg.form-block h2,\n.light-gray-bg.form-block a,\n.light-gray-bg.form-block a:hover,\n.light-gray-bg.form-block {\n  color: #777777;\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .form-block {\n    width: 90%;\n  }\n}\n/* Latest tweets block\n---------------------------------- */\nul.tweets {\n  list-style: none;\n  padding: 0;\n}\nul.tweets li {\n  margin-bottom: 20px;\n  position: relative;\n  padding-left: 35px;\n}\nul.tweets li i {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  color: #777777;\n}\nul.tweets li p {\n  margin-bottom: 5px;\n}\nul.tweets li span {\n  font-size: 12px;\n  color: #777777;\n}\n/* Media \n---------------------------------- */\n.media {\n  margin-top: 0;\n  margin-bottom: 25px;\n}\n.media img {\n  max-width: none;\n}\n.footer-content .media img,\n.block .media img {\n  width: 60px;\n}\n.media-heading {\n  margin-bottom: 0;\n}\nh6.media-heading {\n  margin-bottom: 5px;\n}\n.media:hover .icon {\n  background-color: transparent;\n  color: #09afdf;\n  border: 1px solid #09afdf;\n}\n.dark-bg .media:hover .icon {\n  border-color: #cdcdcd;\n  color: #cdcdcd;\n}\n.media:hover .icon:after {\n  content: \"\";\n  border-color: transparent;\n}\n/* Testimonials\n---------------------------------- */\n.testimonial {\n  padding: 20px 0;\n}\n.testimonial blockquote {\n  margin: 0;\n}\n.testimonial .separator {\n  margin: 15px auto 5px;\n}\n.testimonial-image {\n  width: 90px;\n  margin: 0 auto;\n}\n.testimonial-info-1 {\n  font-size: 12px;\n}\n.testimonial-info-2 {\n  font-size: 12px;\n  font-weight: 400;\n}\n.testimonial h3 {\n  margin-bottom: 0;\n  margin-top: 15px;\n}\n.testimonial p {\n  margin-bottom: 15px;\n}\n/* Clients\n---------------------------------- */\n.clients-container {\n  text-align: center;\n}\n.clients {\n  margin: 10px auto;\n}\n.clients .client-image {\n  text-align: center;\n  width: 80px;\n  height: 80px;\n  margin: 5px;\n  display: inline-block;\n}\n.clients img {\n  margin: 0px auto;\n}\n/* Full Width Content\n---------------------------------- */\n.full-width-section {\n  position: relative;\n}\n.full-text-container {\n  position: absolute;\n  top: 30%;\n  padding: 20px 40px;\n  z-index: 2;\n}\n.full-image-overlay {\n  display: none;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  padding: 0 10%;\n  margin-top: -133px;\n  color: #ffffff;\n  z-index: 1;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s;\n}\n.full-image-overlay h3 {\n  color: #ffffff;\n}\n.to-right-block {\n  margin-left: auto;\n  display: block;\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  .full-width-section {\n    position: relative;\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n  }\n  .full-width-section.no-image {\n    min-height: 400px;\n  }\n  .full-image-container {\n    width: 50%;\n    display: table-cell;\n    position: relative;\n    overflow: hidden;\n  }\n  .full-image-overlay {\n    display: block;\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  .full-image-container:before {\n    content: \'\';\n    position: absolute;\n    top: 5%;\n    right: 0%;\n    width: 50%;\n    height: 90%;\n    background-color: rgba(55, 55, 55, 0.6);\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -webkit-transition: all 0.3s ease-in-out;\n    -o-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    -webkit-transition-delay: 0.3s;\n    transition-delay: 0.3s;\n  }\n  .full-text-container + .full-image-container:before {\n    right: auto;\n    left: 0;\n  }\n  .full-width-section:hover .full-image-container:before,\n  .full-width-section .full-image-container.hovered:before {\n    width: 90%;\n    right: 5%;\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s;\n  }\n  .full-width-section:hover .full-text-container + .full-image-container:before,\n  .full-width-section .full-text-container + .full-image-container.hovered:before {\n    right: auto;\n    left: 5%;\n  }\n  .full-width-section:hover .full-image-overlay,\n  .full-width-section .hovered .full-image-overlay {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -webkit-transition-delay: 0.3s;\n    transition-delay: 0.3s;\n  }\n  .full-text-container {\n    display: table-cell;\n    vertical-align: middle;\n    width: 50%;\n    padding: 0 50px;\n    position: static;\n  }\n  .full-text-container * {\n    max-width: 700px;\n  }\n  .full-text-container.left {\n    text-align: right;\n  }\n  .full-text-container.left * {\n    margin-left: auto;\n  }\n  .full-text-container p {\n    margin-bottom: 10px;\n  }\n}\n/* Large and Medium devices (desktops, tablets less than 1199px) */\n@media (max-width: 1199px) {\n  .no-image .full-text-container {\n    position: static;\n    display: block;\n  }\n  .full-width-section:not(.no-image) .full-text-container.dark-bg {\n    background-color: rgba(0, 0, 0, 0.8);\n    width: 100%;\n  }\n  .full-width-section:not(.no-image) .full-text-container.light-gray-bg {\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #000000;\n    border-top: none;\n    border-bottom: none;\n    width: 100%;\n  }\n  .full-width-section:not(.no-image) .full-text-container.default-bg {\n    background-color: rgba(9, 175, 223, 0.6);\n    width: 100%;\n  }\n  .full-width-section .to-right-block,\n  .full-width-section img {\n    margin: 0 auto;\n  }\n}\n/* Medium devices (desktops, tablets less than 991px) */\n@media (max-width: 991px) {\n  .full-width-section:not(.no-image) .full-text-container {\n    top: 0;\n    height: 100%;\n    padding: 0 20px;\n  }\n  .full-text-container h1 {\n    font-size: 28px;\n  }\n}\n/* Extra small devices (phones, less than 480px) */\n@media (max-width: 480px) {\n  .full-text-container {\n    position: static;\n    padding: 20px!important;\n  }\n}\n/* Call to action\n---------------------------------- */\n.call-to-action h1,\n.call-to-action a {\n  margin: 0;\n}\n.call-to-action p {\n  margin-bottom: 10px;\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .call-to-action .text-right {\n    text-align: left;\n  }\n}\n/* Counters\n---------------------------------- */\n.counter {\n  display: block;\n  font-size: 32px;\n  line-height: 1;\n}\n/* Pricing tables\n---------------------------------- */\n.pricing-tables {\n  margin: 60px 0 0;\n}\n.plan {\n  text-align: center;\n  margin-bottom: 40px !important;\n}\n.plan.round-corners .header {\n  -webkit-border-radius: 25px 25px 0 0;\n  -moz-border-radius: 25px 25px 0 0;\n  border-radius: 25px 25px 0 0;\n}\n.plan.round-corners ul li:last-child,\n.plan.round-corners ul {\n  -webkit-border-radius: 0 0 25px 25px;\n  -moz-border-radius: 0 0 25px 25px;\n  border-radius: 0 0 25px 25px;\n}\n.plan .header {\n  padding: 0;\n  margin: 0 -1px;\n  border: none;\n}\n.plan .header h3 {\n  font-size: 36px;\n  margin: 0;\n  line-height: 36px;\n  font-weight: 300;\n  padding: 15px 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-top: none;\n}\n.plan .header .price {\n  font-size: 28px;\n  padding: 8px 0 10px;\n  font-weight: 300;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  line-height: 1;\n  color: #ffffff;\n}\n.plan ul {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  list-style: none;\n}\n.plan ul li {\n  padding: 12px 0px;\n  font-size: 13px;\n  border-bottom: 1px solid #f3f3f3;\n  border-top: 1px solid #ffffff;\n  color: #333333;\n}\n.best-value.plan ul li {\n  padding: 15px 0;\n}\n.plan ul li a.pt-popover {\n  color: #000;\n  border-bottom: 1px dashed #000;\n  position: relative;\n}\n.plan ul li a.pt-popover:hover {\n  text-decoration: none;\n}\n.plan ul li a.pt-popover:after {\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  font-family: \"FontAwesome\";\n  content: \"\\f059\";\n  color: #ddd;\n  font-size: 12px;\n}\n.popover {\n  width: 250px;\n  font-size: 13px;\n  text-align: center;\n  border: none;\n}\n.popover-title {\n  background-color: #09afdf;\n  color: #ffffff;\n  text-shadow: none;\n  font-size: 13px;\n}\n.popover-content {\n  font-size: 12px;\n}\n.circle-head .plan .header {\n  padding: 0;\n  border: none;\n  width: 160px;\n  height: 160px;\n  border-radius: 100%;\n  margin: 20px auto;\n  padding: 10px 0;\n}\n.circle-head .plan .header h3 {\n  font-size: 26px;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding-top: 27px;\n}\n.circle-head .plan .header .price {\n  height: 80px;\n  border: none;\n  padding-top: 15px;\n  font-size: 22px;\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n}\n.stripped .plan ul {\n  -webkit-box-shadow: 0px -15px 32px 0px #cacaca inset;\n  -moz-box-shadow: 0px -15px 32px 0px #cacaca inset;\n  box-shadow: 0px -15px 32px 0px #cacaca inset;\n  background: #fdfdfd;\n}\n.stripped .plan ul li {\n  border: 1px solid #ececec;\n  border-top: none;\n  color: #666;\n}\n.stripped .plan ul li:nth-child(even) {\n  -webkit-box-shadow: 0px 0px 40px #e4e4e4 inset;\n  -moz-box-shadow: 0px 0px 40px #e4e4e4 inset;\n  box-shadow: 0px 0px 40px #e4e4e4 inset;\n  background: #ffffff;\n  border-right: 1px solid #e2e2e2;\n  border-bottom: 1px solid #e2e2e2;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  .best-value.plan {\n    top: -30px;\n    position: relative;\n    z-index: 2;\n  }\n}\n/* Google maps\n---------------------------------- */\n#map-canvas {\n  height: 400px;\n}\n#map-canvas.small {\n  height: 347px;\n}\n#collapseMap {\n  overflow: hidden;\n  height: 0;\n  -webkit-transition: height 0.3s ease-in-out;\n  -o-transition: height 0.3s ease-in-out;\n  transition: height 0.3s ease-in-out;\n}\n#collapseMap.in {\n  height: 450px;\n}\n.footer-content #map-canvas {\n  height: 300px;\n}\n#map-canvas img {\n  max-width: inherit;\n}\n/* Tags cloud block\n---------------------------------- */\n.tags-cloud {\n  font-size: 0;\n}\n.tag {\n  display: inline-block;\n  margin: 0 3px 3px 0;\n}\n.tag a {\n  padding: 3px 10px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  color: #ffffff;\n  display: block;\n  font-size: 11px;\n  background-color: #09afdf;\n  border: 1px solid #0c9ec7;\n}\n.tag a:hover {\n  color: #09afdf;\n  background-color: #ffffff;\n  border-color: #0c9ec7;\n  text-decoration: none;\n}\n.dark .tag a {\n  color: #777777;\n  background-color: transparent;\n  border: 1px solid #333333;\n}\n.dark .tag a:hover {\n  color: #ffffff;\n  background-color: #777777;\n  border-color: #777777;\n  text-decoration: none;\n}\n/* Credit Carts Block\n---------------------------------- */\n.icons-block i {\n  display: inline-block;\n  font-size: 30px;\n  color: #999999;\n}\n/* Isotope filtering\n---------------------------------- */\n.isotope-container {\n  display: none;\n}\n.isotope-container-fitrows {\n  display: none;\n}\n/* Small devices (tablets, phones less than 991px) */\n@media (max-width: 991px) {\n  .isotope-item,\n  .masonry-grid-item {\n    max-width: 100%;\n  }\n}\n/* Affix Menu\n---------------------------------- */\n.sidebar.affix {\n  position: static;\n}\n/* Show and affix the side nav when space allows it */\n/* Medium devices (desktops, tablets, 992px and up) */\n@media (min-width: 992px) {\n  .col-md-4 .sidebar.affix,\n  .col-md-4 .sidebar.affix-bottom {\n    width: 293px;\n  }\n  .col-md-3 .sidebar.affix,\n  .col-md-3 .sidebar.affix-bottom {\n    width: 213px;\n  }\n  .sidebar.affix {\n    position: fixed;\n    top: 20px;\n  }\n  .fixed-header-on .sidebar.affix {\n    top: 65px;\n  }\n  .sidebar.affix-bottom {\n    position: absolute;\n  }\n  .sidebar.affix-bottom .affix-menu,\n  .sidebar.affix .affix-menu {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .affix-menu {\n    padding-top: 20px;\n  }\n  h3.title ~ .affix-menu {\n    padding-top: 0px;\n  }\n}\n/* Large devices (Large desktops 1200px and up) */\n@media (min-width: 1200px) {\n  .col-md-4 .sidebar.affix,\n  .col-md-4 .sidebar.affix-bottom {\n    width: 390px;\n  }\n  .col-md-3 .sidebar.affix,\n  .col-md-3 .sidebar.affix-bottom {\n    width: 263px;\n  }\n}\n/* Scroll to top\n---------------------------------- */\n.scrollToTop {\n  color: #fff;\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1005;\n  display: none;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0);\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.scrollToTop i {\n  line-height: 50px;\n  font-size: 24px;\n}\n.scrollToTop:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .scrollToTop {\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n  .scrollToTop i {\n    line-height: 40px;\n    font-size: 20px;\n  }\n}\n/* 8 Main Slideshow\n----------------------------------------------------------------------------- */\n.slider-banner-container {\n  width: 100%;\n  position: relative;\n  padding: 0;\n}\n.slider-banner-fullscreen,\n.slider-banner-fullwidth {\n  width: 100%;\n  position: relative;\n}\n.slider-banner-container ul.slides {\n  display: none;\n}\n/*Spinner*/\n.tp-loader.spinner2 {\n  background-color: #999;\n}\n/*Captions*/\n.tp-caption {\n  z-index: 5;\n}\n.tp-caption a,\n.tp-caption a:hover {\n  color: #ffffff;\n}\n.tp-caption a.btn-gray,\n.tp-caption a.btn-gray:hover {\n  color: #333333;\n}\n.slideshow .dark-translucent-bg,\n.slideshow .light-translucent-bg {\n  border-top: none;\n  border-bottom: none;\n  position: absolute;\n  left: 0;\n  top: 0!important;\n  width: 100%;\n  height: 100%;\n}\n.slideshow .dark-translucent-bg {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.slideshow .light-translucent-bg {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.slideshow .dark-translucent-bg:after,\n.slideshow .light-translucent-bg:after {\n  background-color: transparent;\n}\n.xlarge_white {\n  font-size: 68px;\n  font-family: \'Raleway\', sans-serif;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 1.2;\n}\n.large_white {\n  font-size: 42px;\n  font-family: \'Raleway\', sans-serif;\n  color: #ffffff;\n  line-height: 1.2;\n}\n.medium_white {\n  font-size: 24px;\n  color: #ffffff;\n  font-weight: 300;\n}\n.small_white {\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: 300;\n}\n.xlarge_dark {\n  font-size: 68px;\n  font-family: \'Raleway\', sans-serif;\n  font-weight: 400;\n  color: #333;\n  line-height: 1.2;\n}\n.large_dark {\n  font-size: 42px;\n  font-family: \'Raleway\', sans-serif;\n  color: #333;\n  line-height: 1.2;\n}\n.tp-caption.medium_dark {\n  font-family: \'Roboto\', sans-serif;\n  font-size: 24px;\n  color: #333;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 1.4583;\n}\n.small_dark {\n  font-size: 16px;\n  color: #333;\n  font-weight: 400;\n}\n.tp-caption .separator,\n.tp-caption .separator-2,\n.tp-caption .separator-3 {\n  width: 500px;\n}\n.slider-banner-boxedwidth .tp-caption[data-x=\"left\"] {\n  margin-left: 20px!important;\n}\n.slider-banner-boxedwidth .tp-caption[data-x=\"right\"] {\n  margin-right: 20px!important;\n}\n/* Large and Medium devices (desktops, tablets less than 1199px) */\n@media (max-width: 1199px) {\n  .tp-caption[data-x=\"left\"] {\n    margin-left: 20px!important;\n  }\n  .tp-caption[data-x=\"right\"] {\n    margin-right: 20px!important;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .tp-caption .separator,\n  .tp-caption .separator-2,\n  .tp-caption .separator-3 {\n    width: 250px;\n  }\n}\n/*Slider Moving Button*/\n.tp-caption .btn.moving {\n  padding: 10px 0px 20px;\n}\n.tp-caption .btn.moving i {\n  display: block;\n  font-size: 24px;\n  line-height: 1px;\n  height: 10px;\n  color: #ffffff;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.tp-caption .btn.moving i + i {\n  opacity: 0.66;\n  filter: alpha(opacity=66);\n}\n.tp-caption .btn.moving i + i + i {\n  opacity: 0.33;\n  filter: alpha(opacity=33);\n}\n.moving i + i + i {\n  -webkit-animation: opacity_first 2s linear infinite;\n  animation: opacity_first 2s linear infinite;\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  -ms-transition: none !important;\n  transition: none !important;\n}\n.moving i + i {\n  -webkit-animation: opacity_second 2s linear infinite;\n  animation: opacity_second 2s linear infinite;\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  -ms-transition: none !important;\n  transition: none !important;\n}\n.moving > i {\n  -webkit-animation: opacity_third 2s linear infinite;\n  animation: opacity_third 2s linear infinite;\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  -ms-transition: none !important;\n  transition: none !important;\n}\n@-webkit-keyframes opacity_first {\n  0% {\n    opacity: 0.33;\n    filter: alpha(opacity=33);\n  }\n  24.91% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  49.833% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n}\n@keyframes opacity_first {\n  0% {\n    opacity: 0.33;\n    filter: alpha(opacity=33);\n  }\n  24.91% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  49.833% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n}\n@-webkit-keyframes opacity_second {\n  0% {\n    opacity: 0.66;\n    filter: alpha(opacity=66);\n  }\n  16.66% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  41.5833% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n}\n@keyframes opacity_second {\n  0% {\n    opacity: 0.66;\n    filter: alpha(opacity=66);\n  }\n  16.66% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  41.5833% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n}\n@-webkit-keyframes opacity_third {\n  0% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  33.33% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n}\n@keyframes opacity_third {\n  0% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  33.33% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .tp-caption .btn.moving {\n    position: absolute;\n    bottom: -100px;\n    left: 50%;\n    margin-left: -18px;\n  }\n}\n/*Nav Controls*/\n/*Prev/Next Nav Controls*/\n.tparrows.preview2 {\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #ffffff;\n  -webkit-border-radius: 0px 3px 3px 0;\n  -moz-border-radius: 0px 3px 3px 0;\n  border-radius: 0px 3px 3px 0;\n}\n.tp-rightarrow.preview2 {\n  -webkit-border-radius: 3px 0px 0px 3px;\n  -moz-border-radius: 3px 0px 0px 3px;\n  border-radius: 3px 0px 0px 3px;\n}\n.tparrows.preview2:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.tparrows.preview2:after {\n  content: \"\";\n}\n.tparrows.preview2:before {\n  font-family: \"fontello\";\n  content: \"\\e876\";\n  color: #ffffff;\n  font-size: 24px;\n  line-height: 60px;\n  left: 22px;\n  position: absolute;\n}\n.tp-rightarrow.preview2:before {\n  left: auto;\n  content: \"\\e877\";\n  right: 22px;\n}\n.tparrows.preview2 .tp-arr-titleholder {\n  color: #ffffff;\n  text-transform: none;\n  font-weight: 300;\n  font-family: \'Raleway\', sans-serif;\n}\n/* Small devices (tablets, phones 768px and Up) */\n@media (min-width: 768px) {\n  .tparrows.preview4 {\n    height: 200px;\n  }\n  .tparrows.preview4:after {\n    line-height: 200px;\n    height: 200px;\n  }\n  .tparrows.preview4 .tp-arr-imgholder {\n    height: 200px;\n  }\n  .tparrows.preview4 .tp-arr-imgholder2 {\n    height: 200px;\n  }\n}\n/* Medium devices (laptops, tablets, phones 991px and below) */\n@media (max-width: 991px) {\n  .tparrows.preview2:before {\n    font-size: 18px;\n    line-height: 40px;\n    left: 15px;\n  }\n  .tp-rightarrow.preview2:before {\n    left: auto;\n    right: 15px;\n  }\n}\n/* Medium devices (desktops, tablets less than 991px) */\n@media (min-width: 768px) and (max-width: 991px) {\n  .tparrows.preview2 {\n    min-width: 40px;\n    min-height: 40px;\n  }\n  .tparrows.preview2 .tp-arr-titleholder {\n    font-size: 12px;\n    line-height: 40px;\n    letter-spacing: 0px;\n  }\n  .tp-rightarrow.preview2 .tp-arr-titleholder {\n    right: 35px;\n  }\n  .tp-leftarrow.preview2 .tp-arr-titleholder {\n    left: 35px;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .tparrows.preview2:before {\n    font-size: 16px;\n    line-height: 30px;\n    left: 10px;\n  }\n  .tp-rightarrow.preview2:before {\n    left: auto;\n    right: 10px;\n  }\n}\n.tp-bullets.preview4 .bullet,\n.tp-bullets.preview2 .bullet {\n  background: rgba(0, 0, 0, 0.6) !important;\n  border: none!important;\n  width: 10px !important;\n  height: 10px !important;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-left: 1px!important;\n  margin-right: 1px!important;\n}\n.tp-bullets.preview4 .bullet:hover,\n.tp-bullets.preview4 .bullet.selected,\n.tp-bullets.preview2 .bullet:hover,\n.tp-bullets.preview2 .bullet.selected {\n  background: #000000 !important;\n  border: none!important;\n  width: 10px !important;\n  height: 10px !important;\n}\n.tp-bannertimer {\n  background-image: none;\n  background-color: rgba(9, 175, 223, 0.8);\n  z-index: 21;\n  display: none;\n  height: 2px;\n}\n/* Medium devices (netbooks, tablets, phones less than 991px) */\n@media (max-width: 991px) {\n  .slideshow .icon.large {\n    font-size: 24px;\n    width: 90px;\n    height: 90px;\n    line-height: 88px;\n  }\n  .slideshow .icon.small {\n    font-size: 15px;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n  }\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .slideshow .icon.large {\n    font-size: 18px;\n    width: 60px;\n    height: 60px;\n    line-height: 58px;\n  }\n}\n/* Extra small devices (phones, less than 480px) */\n@media (max-width: 480px) {\n  .slideshow .icon.large {\n    font-size: 18px;\n    width: 35px;\n    height: 35px;\n    line-height: 33px;\n  }\n}\n/* 9 Owl Carousel\n----------------------------------------------------------------------------- */\n.owl-carousel {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.container .owl-carousel {\n  cursor: default;\n  cursor: -moz-default;\n  cursor: -webkit-default;\n}\n.container .content-slider-with-large-controls,\n.container .content-slider-with-large-controls-autoplay {\n  margin-bottom: 50px;\n  border: 1px solid #f5f5f5;\n}\n/* Styling Next and Prev buttons */\n/*style-1*/\n.content-slider-with-controls .owl-buttons,\n.content-slider-with-controls-autoplay .owl-buttons {\n  width: 100%;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  margin-top: -15px;\n  z-index: 10;\n}\n.content-slider-with-controls .owl-buttons div,\n.content-slider-with-controls-autoplay .owl-buttons div {\n  display: inline-block;\n  font-size: 14px;\n  position: absolute;\n  text-transform: capitalize;\n  font-weight: 300;\n  color: transparent;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 5px 5px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.content-slider-with-controls .owl-buttons div:after,\n.content-slider-with-controls-autoplay .owl-buttons div:after {\n  font-family: \"FontAwesome\";\n  position: absolute;\n  font-size: 16px;\n  line-height: 1;\n  top: 50%;\n  margin-top: -8px;\n}\n.content-slider-with-controls .owl-buttons .owl-prev,\n.content-slider-with-controls-autoplay .owl-buttons .owl-prev {\n  left: 0;\n  padding-left: 0px;\n}\n.content-slider-with-controls .owl-buttons .owl-prev:hover,\n.content-slider-with-controls-autoplay .owl-buttons .owl-prev:hover {\n  padding-left: 25px;\n  padding-right: 10px;\n  color: #ffffff;\n}\n.content-slider-with-controls .owl-buttons .owl-prev:after,\n.content-slider-with-controls-autoplay .owl-buttons .owl-prev:after {\n  content: \"\\f104\";\n  left: 13px;\n  color: #ffffff;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.content-slider-with-controls .owl-buttons .owl-prev:hover:after,\n.content-slider-with-controls-autoplay .owl-buttons .owl-prev:hover:after {\n  left: 8px;\n}\n.content-slider-with-controls .owl-buttons .owl-next,\n.content-slider-with-controls-autoplay .owl-buttons .owl-next {\n  right: 0px;\n  left: auto;\n  padding-right: 0px;\n}\n.content-slider-with-controls .owl-buttons .owl-next:hover,\n.content-slider-with-controls-autoplay .owl-buttons .owl-next:hover {\n  padding-right: 25px;\n  padding-left: 10px;\n  color: #ffffff;\n}\n.content-slider-with-controls .owl-buttons .owl-next:after,\n.content-slider-with-controls-autoplay .owl-buttons .owl-next:after {\n  content: \"\\f105\";\n  right: 13px;\n  color: #ffffff;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.content-slider-with-controls .owl-buttons .owl-next:hover:after,\n.content-slider-with-controls-autoplay .owl-buttons .owl-next:hover:after {\n  right: 8px;\n}\n/*style-2*/\n.content-slider-with-large-controls .owl-buttons,\n.content-slider-with-large-controls-autoplay .owl-buttons {\n  width: 100%;\n  height: 0;\n  position: absolute;\n  top: 50%;\n}\n.container .content-slider-with-large-controls .owl-buttons,\n.container .content-slider-with-large-controls-autoplay .owl-buttons {\n  top: auto;\n  bottom: -10px;\n}\n.content-slider-with-large-controls .owl-buttons div,\n.content-slider-with-large-controls-autoplay .owl-buttons div {\n  display: inline-block;\n  font-size: 18px;\n  position: absolute;\n  text-transform: capitalize;\n  font-weight: 300;\n  color: #cdcdcd;\n}\n.content-slider-with-large-controls .owl-buttons div:after,\n.content-slider-with-large-controls-autoplay .owl-buttons div:after {\n  font-family: \"FontAwesome\";\n  position: absolute;\n  font-size: 16px;\n  line-height: 1;\n  top: 50%;\n  margin-top: -8px;\n}\n.content-slider-with-large-controls .owl-buttons .owl-prev,\n.content-slider-with-large-controls-autoplay .owl-buttons .owl-prev {\n  left: 0;\n  padding-left: 30px;\n}\n.content-slider-with-large-controls .owl-buttons .owl-prev:after,\n.content-slider-with-large-controls-autoplay .owl-buttons .owl-prev:after {\n  content: \"\\f104\";\n  left: 15px;\n  color: #09afdf;\n}\n.content-slider-with-large-controls .owl-buttons .owl-next,\n.content-slider-with-large-controls-autoplay .owl-buttons .owl-next {\n  right: 0px;\n  left: auto;\n  padding-right: 30px;\n}\n.content-slider-with-large-controls .owl-buttons .owl-next:after,\n.content-slider-with-large-controls-autoplay .owl-buttons .owl-next:after {\n  content: \"\\f105\";\n  right: 15px;\n  color: #09afdf;\n}\n.container .content-slider-with-large-controls .owl-buttons .owl-prev,\n.container .content-slider-with-large-controls-autoplay .owl-buttons .owl-prev {\n  padding-left: 15px;\n}\n.container .content-slider-with-large-controls .owl-buttons .owl-prev:after,\n.container .content-slider-with-large-controls-autoplay .owl-buttons .owl-prev:after {\n  left: 0px;\n}\n.container .content-slider-with-large-controls .owl-buttons .owl-next,\n.container .content-slider-with-large-controls-autoplay .owl-buttons .owl-next {\n  padding-right: 15px;\n}\n.container .content-slider-with-large-controls .owl-buttons .owl-next:after,\n.container .content-slider-with-large-controls-autoplay .owl-buttons .owl-next:after {\n  right: 0px;\n}\n/* Large and Medium devices (desktops, tablets less than 1199px) */\n@media (max-width: 1199px) {\n  .content-slider-with-large-controls .owl-buttons,\n  .content-slider-with-large-controls-autoplay .owl-buttons {\n    top: 98%;\n  }\n}\n.buttons-hide .owl-buttons {\n  display: none;\n}\n/* Styling Pagination*/\n.owl-pagination,\n.owl-pagination {\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n  z-index: 10;\n}\n.owl-controls .owl-page,\n.owl-controls .owl-page {\n  display: inline-block;\n  zoom: 1;\n}\n.owl-controls .owl-page span,\n.owl-controls .owl-page span {\n  display: block;\n  width: 9px;\n  height: 9px;\n  margin: 5px 3px;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  border-radius: 20px;\n  background: #ffffff;\n}\n.dark-controls .owl-controls .owl-page span,\n.dark-controls .owl-controls .owl-page span {\n  background: #333;\n}\n.owl-controls .owl-page.active span,\n.owl-controls.clickable .owl-page:hover span,\n.owl-controls .owl-page.active span,\n.owl-controls.clickable .owl-page:hover span {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n/* Small devices (tablets, phones less than 767px) */\n@media (max-width: 767px) {\n  .owl-controls .owl-page span,\n  .owl-controls .owl-page span {\n    background: #000000;\n  }\n}\n#logo * {\r\n    float: left;   \r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .navbar-header .header-left {\r\n        margin-top: -27px;\r\n    }\r\n}\r\n\r\n.logo-font {\r\n}\r\n\r\n#logo h3 {\r\n    font-size: 40px;\r\n}\r\n\r\n#logo h2 {\r\n    margin: 8px 0 0 4px;\r\n}\r\n\r\n\r\n#logo span {\r\n    font-size: 21px;\r\n    font-weight: 500;\r\n    margin: 10px 1px;\r\n}\r\n\r\n#logo_img, .fixed-header-on .header .logo img {\r\n    max-height: 65px;\r\n}\r\n\r\n#carousel-sidebar {\r\n    height: 500px;\r\n    overflow: hidden;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .header.fixed.animated {\r\n        position: fixed !important;\r\n        top: 0 !important;\r\n    }\r\n    .fixed-header-on .header .logo {\r\n        display: block;\r\n    }\r\n    .header .logo h3 {\r\n        margin: 0 10px;\r\n    }\r\n    .header .logo img {\r\n        margin-top: 5px !important;\r\n    }\r\n    #logo h3 {\r\n        font-size: 32px;\r\n        margin: 2px 0 0 10px;\r\n    }\r\n    #logo img {\r\n        width: 50px;\r\n    }\r\n}\r\n\r\n.navbar-collapse {\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.slides .sfb .circle {\r\n    margin-right: 10px;\r\n}\r\n\r\n#services ol {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.tools-box {\r\n    height: 125px;\r\n}\r\n\r\n.tools-box .overlay-top {\r\n    height: 100%;\r\n    z-index: 200;\r\n    overflow: visible;\r\n}\r\n\r\n.tools-box img {\r\n    max-height: 100px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.tools-box i {\r\n    font-size: 100px;\r\n}\r\n\r\n.tools-box .overlay-container a:hover {\r\n    text-decoration: none;\r\n    color: #517D89;\r\n}\r\n\r\n.plan ul.shadow {\r\n    height: 650px;\r\n    padding: 0 30px;\r\n}\r\n\r\n.plan ul.shadow li.package-item i {\r\n    margin-right: 5px;\r\n    color: #40E443;\r\n}\r\n\r\n.plan ul.shadow li.package-item {\r\n    text-align: left;\r\n}\r\n\r\n.pricing-tables {\r\n    margin: 0;\r\n}\r\n\r\n.plan .default-bg {\r\n    background-color: #51B875;\r\n    border-color: #51B875;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}\r\n\r\nbody.contact a.contact-btn {\r\n    display: none;\r\n}\r\n\r\n#site-name {\r\n    margin-top: 7px;\r\n}\r\n\r\n.main-container {\r\n    padding: 20px 0;\r\n}\r\n\r\n.close {\r\n    font-size: 24px;\r\n}\r\n\r\n.alert-square {\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    font-size: 17px;\r\n    font-weight: 400px;\r\n}\r\n\r\n.controls {\r\n  margin-top: 10px;\r\n  border: 1px solid transparent;\r\n  border-radius: 2px 0 0 2px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  height: 32px;\r\n  outline: none;\r\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#location {\r\n  background-color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  margin-left: 12px;\r\n  padding: 0 11px 0 13px;\r\n  text-overflow: ellipsis;\r\n  width: 300px;\r\n}\r\n\r\n#location:focus {\r\n  border-color: #4d90fe;\r\n}\r\n\r\n.pac-container {\r\n  font-family: Roboto;\r\n}\r\n\r\n#type-selector {\r\n  color: #fff;\r\n  background-color: #4d90fe;\r\n  padding: 5px 11px 0px 11px;\r\n}\r\n\r\n#type-selector label {\r\n  font-family: Roboto;\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n}\r\n\r\n.posFixed { position: fixed; }\r\n.title-container { width: inherit; }\r\n#center-container { min-height: 1000px; }\r\n#map-canvas { max-width: none; }\r\n#main-nav, #main-nav ul { list-style: none; padding: 0; margin: 0; font-size: 20px; font-weight: bold; }\r\n#main-back, #main-nav { margin-top: 71px; }\r\n#map { margin-top: 20px; }\r\n.control-label { text-align: left !important; }\r\n#main-nav a { text-decoration: none; }\r\n#greeting h4 { margin: 0; padding: 4px 0 0 0; }\r\n#main-nav a:hover { text-decoration: none; }\r\n#skill-list div, #category-list div { cursor: pointer; width: 25%; float: left; padding: 10px; border: 1px solid #C2C2C2; }\r\n#skill-list div.selected, #category-list div.selected { background-color: rgb(203, 236, 184); }\r\n#skill-list div:hover, #category-list div:hover { background-color: rgb(228, 249, 216); }\r\n#jobs-list { list-style: none; margin: 0; padding: 0; }\r\n.hideMap { height: 0; overflow: hidden; }\r\n.job-icon-container i { width: 25px; text-align: center; color: #912828; }\r\n.job-list-item { border: 1px solid black; margin: 10px 0; padding: 10px 20px; }\r\n.job-list-item:hover { background-color: #f7f7f7; }\r\n.ng-input-button-container input { width: 85%; display: inline-block; border-top-right-radius: 0; border-bottom-right-radius: 0; }\r\n.ng-button { width: 15%; }\r\n\r\n.pt-20 { padding-top: 20px; }\r\n.pt-10 { padding-top: 10px; }\r\n.mt-10 { margin-top: 10px; }\r\n.mt-20 { margin-top: 20px !important; }\r\n.mb-10 { margin-bottom: 10px; }\r\n.mr-10 { margin-right: 10px; }\r\n.mr-20 { margin-right: 20px; }\r\n.mr-40 { margin-right: 40px; }\r\n.pb-20 { padding-bottom: 20px; }\r\n.pr-10 { padding-right: 10px; }\r\n.pl-10 { padding-left: 10px; }\r\n.p-10 { padding: 10px; }\r\n.m-0 { margin: 0; }\r\n');

/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)
},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()
};
m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
},pushStack:function(a){var b=m.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a,b){return m.each(this,a,b)
},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(d.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(e=arguments[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c))
}}}return g
},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===m.type(a)
},isArray:Array.isArray||function(a){return"array"===m.type(a)
},isWindow:function(a){return null!=a&&a==a.window
},isNumeric:function(a){return !m.isArray(a)&&a-parseFloat(a)>=0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},isPlainObject:function(a){var b;
if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a)){return !1
}try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}if(k.ownLast){for(b in a){return j.call(a,b)
}}for(b in a){}return void 0===b||j.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);
if(c){if(g){for(;
f>e;
e++){if(d=b.apply(a[e],c),d===!1){break
}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break
}}}}else{if(g){for(;
f>e;
e++){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}}return a
},trim:function(a){return null==a?"":(a+"").replace(n,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
},inArray:function(a,b,c){var d;
if(b){if(g){return g.call(b,a,c)
}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;
d>c;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,b){var c=+b.length,d=0,e=a.length;
while(c>d){a[e++]=b[d++]
}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]
}}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];
if(h){for(;
g>f;
f++){d=b(a[f],f,c),null!=d&&i.push(d)
}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)
}}return e.apply([],i)
},guid:1,proxy:function(a,b){var c,e,f;
return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))
},e.guid=a.guid=a.guid||m.guid++,e):void 0
},now:function(){return +new Date
},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()
});
function r(a){var b=a.length,c=m.type(a);
return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0
},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;
c>b;
b++){if(this[b]===a){return b
}}return -1
},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
};
try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType
}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;
if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a){return d
}if(1!==(k=b.nodeType)&&9!==k){return[]
}if(p&&!e){if(f=_.exec(a)){if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode){return d
}if(h.id===j){return d.push(h),d
}}else{if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j){return d.push(h),d
}}}else{if(f[2]){return I.apply(d,b.getElementsByTagName(a)),d
}if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName){return I.apply(d,b.getElementsByClassName(j)),d
}}}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;
while(l--){o[l]=s+qb(o[l])
}w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")
}if(x){try{return I.apply(d,w.querySelectorAll(x)),d
}catch(y){}finally{r||b.removeAttribute("id")
}}}}return i(a.replace(R,"$1"),b,d,e)
}function gb(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function hb(a){return a[u]=!0,a
}function ib(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function jb(a,b){var c=a.split("|"),e=a.length;
while(e--){d.attrHandle[c[e]]=b
}}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function lb(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function mb(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a
}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;
return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()
},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()
})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length
}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")
}),ib(function(a){var b=e.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];
if(!f||!g){return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0
}if(f===g){return kb(a,b)
}c=a;
while(c=c.parentNode){h.unshift(c)
}c=b;
while(c=c.parentNode){i.unshift(c)
}while(h[d]===i[d]){d++
}return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0
},e):n
},fb.matches=function(a,b){return fb(a,null,null,b)
},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return fb(b,n,null,[a]).length>0
},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;
if(q){if(f){while(p){l=b;
while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];
break
}}}else{if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w){m=j[1]
}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b)){break
}}}}return m-=e,m===d||m%d===0&&m/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=K.call(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));
return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()
}
}),has:hb(function(a){return function(b){return fb(a,b).length>0
}
}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Z.test(a.nodeName)
},input:function(a){return Y.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:nb(function(){return[0]
}),last:nb(function(a,b){return[b-1]
}),eq:nb(function(a,b,c){return[0>c?c+b:c]
}),even:nb(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:nb(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=lb(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=mb(b)
}function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?fb.error(a):z(a,i).slice(0)
};
function qb(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f){return j[2]=h[2]
}if(i[d]=j,j[2]=a(b,c,g)){return !0
}}}}}
}function sb(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function tb(a,b,c){for(var d=0,e=b.length;
e>d;
d++){fb(a,b[d],c)
}return c
}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))
}return g
}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)
}})
}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b
},h,!0),l=rb(function(a){return K.call(b,a)>-1
},h,!0),m=[function(a,c,d){return !g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[rb(sb(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))
}m.push(c)
}}return sb(m)
}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||0.1,x=u.length;
for(k&&(j=g!==n&&g);
q!==x&&null!=(l=u[q]);
q++){if(e&&l){m=0;
while(o=a[m++]){if(o(l,g,h)){i.push(l);
break
}}k&&(w=v)
}c&&((l=!o&&l)&&p--,f&&r.push(l))
}if(p+=q,c&&q!==p){m=0;
while(o=b[m++]){o(r,s,g,h)
}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=G.call(i))
}}s=ub(s)
}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)
}return k&&(w=v,j=t),r
};
return c?hb(f):f
}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=wb(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,xb(e,d)),f.selector=a
}return f
},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=X.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a){return I.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ib(function(a){return null==a.getAttribute("disabled")
})||jb(L,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),fb
}(a);
m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;
var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;
function w(a,b,c){if(m.isFunction(b)){return m.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return m.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(v.test(b)){return m.filter(b,a,c)
}b=m.filter(b,a)
}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c
})
}m.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType
}))
},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;
if("string"!=typeof a){return this.pushStack(m(a).filter(function(){for(b=0;
e>b;
b++){if(m.contains(d[b],this)){return !0
}}}))
}for(b=0;
e>b;
b++){m.find(a,d[b],c)
}return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(w(this,a||[],!1))
},not:function(a){return this.pushStack(w(this,a||[],!0))
},is:function(a){return !!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length
}});
var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;
if(!a){return this
}if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||x).find(a):this.constructor(b).find(a)
}if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b)){for(c in b){m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2]){return x.find(a)
}this.length=1,this[0]=d
}return this.context=y,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))
};
A.prototype=m.fn,x=m(y);
var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};
m.extend({dir:function(a,b,c){var d=[],e=a[b];
while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c))){1===e.nodeType&&d.push(e),e=e[b]
}return d
},sibling:function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;
return this.filter(function(){for(b=0;
d>b;
b++){if(m.contains(this,c[b])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?m.unique(f):f)
},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function D(a,b){do{a=a[b]
}while(a&&1!==a.nodeType);
return a
}m.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return m.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)
},next:function(a){return D(a,"nextSibling")
},prev:function(a){return D(a,"previousSibling")
},nextAll:function(a){return m.dir(a,"nextSibling")
},prevAll:function(a){return m.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)
},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return m.sibling(a.firstChild)
},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)
}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)
}
});
var E=/\S+/g,F={};
function G(a){var b=F[a]={};
return m.each(a.match(E)||[],function(a,c){b[c]=!0
}),b
}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);
var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;
h&&e>f;
f++){if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;
break
}}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())
},k={add:function(){if(h){var d=h.length;
!function f(b){m.each(b,function(b,c){var d=m.type(c);
"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)
})
}(arguments),b?e=h.length:c&&(g=d,j(c))
}return this
},remove:function(){return h&&m.each(arguments,function(a,c){var d;
while((d=m.inArray(c,h,d))>-1){h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)
}}),this
},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)
},empty:function(){return h=[],e=0,this
},disable:function(){return h=i=c=void 0,this
},disabled:function(){return !h
},lock:function(){return i=void 0,c||k.disable(),this
},locked:function(){return !i
},fireWith:function(a,c){return !h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return k
},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?m.extend(a,d):d
}},e={};
return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);
e>b;
b++){c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var H;
m.fn.ready=function(a){return m.ready.promise().done(a),this
},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)
},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body){return setTimeout(m.ready)
}m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))
}}});
function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))
}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())
}m.ready.promise=function(b){if(!H){if(H=m.Deferred(),"complete"===y.readyState){setTimeout(m.ready)
}else{if(y.addEventListener){y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1)
}else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);
var c=!1;
try{c=null==a.frameElement&&y.documentElement
}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")
}catch(a){return setTimeout(e,50)
}I(),m.ready()
}}()
}}}return H.promise(b)
};
var K="undefined",L;
for(L in m(k)){break
}k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))
}),function(){var a=y.createElement("div");
if(null==k.deleteExpando){k.deleteExpando=!0;
try{delete a.test
}catch(b){k.deleteExpando=!1
}}a=null
}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
};
var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;
function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c
}catch(e){}m.data(a,b,c)
}else{c=void 0
}}return c
}function P(a){var b;
for(b in a){if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b){return !1
}}return !0
}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f
}}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
while(e--){delete d[b[e]]
}if(c?!P(d):!m.isEmptyObject(d)){return
}}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)
}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)
},data:function(a,b,c){return Q(a,b,c)
},removeData:function(a,b){return R(a,b)
},_data:function(a,b,c){return Q(a,b,c,!0)
},_removeData:function(a,b){return R(a,b,!0)
}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])))
}m._data(f,"parsedAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){m.data(this,a)
}):arguments.length>1?this.each(function(){m.data(this,a,b)
}):f?O(f,a,m.data(f,a)):void 0
},removeData:function(a){return this.each(function(){m.removeData(this,a)
})
}}),m.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)
})})
}}),m.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);
m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){m.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)
},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===m.type(c)){e=!0;
for(h in c){m.access(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},W=/^(?:checkbox|radio)$/i;
!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();
if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1
}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;
try{delete b.test
}catch(d){k.deleteExpando=!1
}}}(),function(){var b,c,d=y.createElement("div");
for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1)
}d=null
}();
var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;
function ab(){return !0
}function bb(){return !1
}function cb(){try{return y.activeElement
}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);
if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(E)||[""],h=b.length;
while(h--){f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0)
}a=null
}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);
if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;
while(j--){if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;
while(f--){g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g))
}i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])
}else{for(o in k){m.event.remove(a,o+b[j],c,d,!0)
}}}m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];
if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);
h;
h=h.parentNode){o.push(h),l=h
}l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)
}n=0;
while((h=o[n++])&&!b.isPropagationStopped()){b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault())
}if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;
try{d[p]()
}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)
}return b.result
}},dispatch:function(a){a=m.event.fix(a);
var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;
while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;
i!=this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;
h>f;
f++){d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d)
}e.length&&g.push({elem:i,handlers:e})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[m.expando]){return a
}var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;
while(b--){c=d[b],a[c]=f[c]
}return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus){try{return this.focus(),!1
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return m.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))
},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void (this[m.expando]=!0)):new m.Event(a,b)
},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;
c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0
}),m._data(c,"submitBubbles",!0))
})
},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")
}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)
}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)
})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;
X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)
}),m._data(b,"changeBubbles",!0))
})
},handle:function(a){var b=a.target;
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)
}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)
};
m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);
e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;
e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))
}}
}),m.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);
for(f in a){this.on(f,b,c,a[f],e)
}return this
}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=bb
}else{if(!d){return this
}}return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)
},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?m.event.trigger(a,b,c,!0):void 0
}});
function db(a){var b=eb.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));
rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;
function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;
if(!f){for(f=[],c=a.childNodes||a;
null!=(d=c[e]);
e++){!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b))
}}return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f
}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)
}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a
}function yb(a){var b=pb.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function zb(a,b){for(var c,d=0;
null!=(c=a[d]);
d++){m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))
}}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
e>d;
d++){m.event.add(b,c,h[c][d])
}}}g.data&&(g.data=m.extend({},g.data))
}}function Bb(a,b){var c,d,e;
if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);
for(d in e.events){m.removeEvent(b,d,e.handle)
}b.removeAttribute(m.expando)
}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);
if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a))){for(d=ub(f),h=ub(a),g=0;
null!=(e=h[g]);
++g){d[g]&&Bb(e,d[g])
}}if(b){if(c){for(h=h||ub(a),d=d||ub(f),g=0;
null!=(e=h[g]);
g++){Ab(e,d[g])
}}else{Ab(a,f)
}}return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;
n>q;
q++){if(f=a[q],f||0===f){if("object"===m.type(f)){m.merge(p,f.nodeType?[f]:f)
}else{if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];
while(e--){h=h.lastChild
}if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;
while(e--){m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)
}}m.merge(p,h.childNodes),h.textContent="";
while(h.firstChild){h.removeChild(h.firstChild)
}h=o.lastChild
}else{p.push(b.createTextNode(f))
}}}}h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;
while(f=p[q++]){if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;
while(f=h[e++]){ob.test(f.type||"")&&c.push(f)
}}}return h=null,o
},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;
null!=(d=a[h]);
h++){if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle)
}}j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))
}}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;
null!=(c=d[e]);
e++){b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c))
}return this
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&m.cleanData(ub(a,!1));
while(a.firstChild){a.removeChild(a.firstChild)
}a.options&&m.nodeName(a,"select")&&(a.options.length=0)
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)
})
},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0
}if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=e.apply([],a);
var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);
if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p)){return this.each(function(c){var d=n.eq(c);
q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)
})
}if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;
l>j;
j++){d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j)
}if(f){for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;
f>j;
j++){d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")))
}}i=c=null
}return this
}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;
h>=d;
d++){c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get())
}return this.pushStack(e)
}
});
var Cb,Db={};
function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");
return e.detach(),f
}function Fb(a){var b=y,c=Db[a];
return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c
}!function(){var a;
k.shrinkWrapBlocks=function(){if(null!=a){return a
}a=!1;
var b,c,d;
return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0
}
}();
var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;
a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""
}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
});
function Lb(a,b){return{get:function(){var c=a();
if(null!=c){return c?void delete this.get:(this.get=b).apply(this,arguments)
}}}
}!function(){var b,c,d,e,f,g,h;
if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g
},boxSizingReliable:function(){return null==f&&i(),f
},pixelPosition:function(){return null==e&&i(),e
},reliableMarginRight:function(){return null==h&&i(),h
}});
function i(){var b,c,d,i;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))
}}}(),m.swap=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
};
var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];
function Ub(a,b){if(b in a){return b
}var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;
while(e--){if(b=Tb[e]+c,b in a){return b
}}return d
}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}function Wb(a,b,c){var d=Pb.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)))
}return g
}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e)){return e
}d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"
}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;
if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]
}if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]=c
}catch(j){}}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);
return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f
}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)
}):Yb(a,b,d):void 0
},set:function(a,c,d){var e=d&&Ib(a);
return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)
}}
}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)
}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0
}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+T[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)
}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;
if(m.isArray(b)){for(d=Ib(a),e=b.length;
e>g;
g++){f[b[g]]=m.css(a,b[g],!1,d)
}return f
}return void 0!==c?m.style(a,b,c):m.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Vb(this,!0)
},hide:function(){return Vb(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()
})
}});
function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];
return a&&a.get?a.get(this):Zb.propHooks._default.get(this)
},run:function(a){var b,c=Zb.propHooks[this.prop];
return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this
}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},m.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},m.fx=Zb.prototype.init,m.fx.step={};
var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;
do{h=h||".5",g/=h,m.style(c.elem,a,g+f)
}while(h!==(h=c.cur()/d)&&1!==h&&--i)
}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};
function fc(){return setTimeout(function(){$b=void 0
}),$b=m.now()
}function gc(a,b){var c,d={height:a},e=0;
for(b=b?1:0;
4>e;
e+=2-b){c=T[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");
c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue
}q=!0
}o[d]=r&&r[d]||m.style(a,d)
}else{j=void 0
}}if(m.isEmptyObject(o)){"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j)
}else{r?"hidden" in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()
}),n.done(function(){var b;
m._removeData(a,"fxshow");
for(b in o){m.style(a,b,o[b])
}});
for(d in o){g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function jc(a,b){var c,d,e,f,g;
for(c in a){if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(jc(k,j.opts.specialEasing);
g>f;
f++){if(d=dc[f].call(j,a,k,j.opts)){return d
}}return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)
}},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)
}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};
return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)
},d
},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);
(e||m._data(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&cc.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}(b||!c)&&m.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;
for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];
m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)
}
}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;
for($b=m.now();
c<b.length;
c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)
}b.length||m.fx.stop(),$b=void 0
},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()
},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))
},m.fx.stop=function(){clearInterval(_b),_b=null
},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},function(){var a,b,c,d,e;
b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value
}();
var lc=/\r/g;
m.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=m.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""
})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)
}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");
return null!=b?b:m.trim(m.text(a))
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;
while(g--){if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0){try{d.selected=c=!0
}catch(h){d.scrollHeight
}}else{d.selected=!1
}}return c||(a.selectedIndex=-1),e
}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0
}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;
m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)
})
}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))
}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);
if(f&&1===a.nodeType){while(c=f[e++]){d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)
}}},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c
}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;
oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;
return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e
}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null
}
}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void (a.defaultValue=b):mc&&mc.set(a,b,c)
}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);
return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},oc.id=oc.name=oc.coords=function(a,b,c){var d;
return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);
return c&&c.specified?c.value:void 0
},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)
}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}
})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""
}});
var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;
m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})
}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");
return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1
}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}
}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this
}),k.enctype||(m.propFix.enctype="encoding");
var uc=/[\t\r\n\f]/g;
m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).addClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;
while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")
}g=m.trim(d),c.className!==g&&(c.className=g)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;
while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")
}}g=a?m.trim(d):"",c.className!==g&&(c.className=g)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")
}})
},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;
d>c;
c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0){return !0
}}return !1
}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});
var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
m.parseJSON=function(b){if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")
}var c,d=null,e=m.trim(b+"");
return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():m.error("Invalid JSON: "+b)
},m.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b){return null
}try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0
}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c
};
var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");
try{zc=location.href
}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href
}yc=Gc.exec(zc.toLowerCase())||[];
function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(E)||[];
if(m.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function Mc(a,b,c,d){var e={},f=a===Ic;
function g(h){var i;
return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};
for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])
}return c&&m.extend(!0,a,c),a
}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))
}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);
break
}}}if(i[0] in c){f=i[0]
}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break
}d||(d=g)
}f=f||d
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)
},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};
var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!j){j={};
while(b=Cc.exec(f)){j[b[1].toLowerCase()]=b[2]
}}b=j[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===t?f:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this
},overrideMimeType:function(a){return t||(k.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]
}}else{v.always(a[v.status])
}}return this
},abort:function(a){var b=a||u;
return i&&i.abort(b),x(0,b),this
}};
if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t){return v
}h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);
for(d in k.headers){v.setRequestHeader(d,k.headers[d])
}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()
}u="abort";
for(d in {success:1,error:1,complete:1}){v[d](k[d])
}if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")
},k.timeout));
try{t=1,i.send(r,x)
}catch(w){if(!(2>t)){throw w
}x(-1,w)
}}else{x(-1,"No Transport")
}function x(a,b,c,d){var j,r,s,u,w,x=b;
2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))
}return v
},getJSON:function(a,b,c){return m.get(a,b,c,"json")
},getScript:function(a,b){return m.get(a,void 0,b,"script")
}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})
}
}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)
}
}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},m.fn.extend({wrapAll:function(a){if(m.isFunction(a)){return this.each(function(b){m(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))
}:function(){var b=m(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=m.isFunction(a);
return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)
}).end()
}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))
},m.expr.filters.visible=function(a){return !m.expr.filters.hidden(a)
};
var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;
function Vc(a,b,c,d){var e;
if(m.isArray(b)){m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==m.type(b)){d(a,b)
}else{for(e in b){Vc(a+"["+e+"]",b[e],c,d)
}}}}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a)){m.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Vc(c,a[c],b,e)
}}return d.join("&").replace(Qc,"+")
},m.fn.extend({serialize:function(){return m.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");
return a?m.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))
}).map(function(a,b){var c=m(this).val();
return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}
}):{name:b.name,value:c.replace(Sc,"\r\n")}
}).get()
}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()
}:Zc;
var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();
a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc){Xc[a](void 0,!0)
}}),k.cors=!!Yc&&"withCredentials" in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;
return{send:function(c,d){var e,f=a.xhr(),g=++Wc;
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]
}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c){void 0!==c[e]&&f.setRequestHeader(e,c[e]+"")
}f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;
if(b&&(e||4===f.readyState)){if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e){4!==f.readyState&&f.abort()
}else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);
try{i=f.statusText
}catch(k){i=""
}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404
}}j&&d(h,i,j,f.getAllResponseHeaders())
},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()
},abort:function(){b&&b(void 0,!0)
}}
}});
function Zc(){try{return new a.XMLHttpRequest
}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a
}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;
return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))
},c.insertBefore(b,c.firstChild)
},abort:function(){b&&b.onload(void 0,!0)
}}
}});
var _c=[],ad=/(=)\?(?=&|$)|\?\?/;
m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;
return this[a]=!0,a
}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||y;
var d=u.exec(a),e=!c&&[];
return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))
};
var bd=m.fn.load;
m.fn.load=function(a,b,c){if("string"!=typeof a&&bd){return bd.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])
}),this
},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem
}).length
};
var cd=a.document.documentElement;
function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using" in b?b.using.call(a,n):l.css(n)
}},m.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)
})
}var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;
if(f){return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
}},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;
while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position")){a=a.offsetParent
}return a||cd
})
}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);
return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)
}
}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0
})
}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return V(this,function(b,c,d){var e;
return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),m.fn.size=function(){return this.length
},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m
});
var ed=a.jQuery,fd=a.$;
return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m
},typeof b===K&&(a.jQuery=a.$=m),m
});
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;
b.ui=b.ui||{};
b.extend(b.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
b.fn.extend({focus:(function(g){return function(h,i){return typeof h==="number"?this.each(function(){var j=this;
setTimeout(function(){b(j).focus();
if(i){i.call(j)
}},h)
}):g.apply(this,arguments)
}
})(b.fn.focus),scrollParent:function(){var g;
if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!g.length?b(document):g
},zIndex:function(j){if(j!==f){return this.css("zIndex",j)
}if(this.length){var h=b(this[0]),g,i;
while(h.length&&h[0]!==document){g=h.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);
if(!isNaN(i)&&i!==0){return i
}}h=h.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)
}})
},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")
}})
}});
function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();
if("area"===l){k=i.parentNode;
j=k.name;
if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false
}h=b("img[usemap=#"+j+"]")[0];
return !!h&&c(h)
}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)
}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().addBack().filter(function(){return b.css(this,"visibility")==="hidden"
}).length
}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)
}
}):function(j,h,g){return !!b.data(j,g[3])
},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))
},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);
return(h||g>=0)&&d(i,!h)
}});
if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};
function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;
if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0
}if(p){n-=parseFloat(b.css(o,"margin"+this))||0
}});
return n
}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)
}return this.each(function(){b(this).css(k,l(this,i)+"px")
})
};
b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)
}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")
})
}
})
}if(!b.fn.addBack){b.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}
}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))
}else{return g.call(this)
}}
})(b.fn.removeData)
}b.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
b.support.selectstart="onselectstart" in document.createElement("div");
b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;
for(g in l){k.plugins[g]=k.plugins[g]||[];
k.plugins[g].push([j,l[g]])
}},call:function(g,j,h){var k,l=g.plugins[j];
if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return
}for(k=0;
k<l.length;
k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)
}}}},hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false
}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;
if(j[g]>0){return true
}j[g]=1;
i=(j[g]>0);
j[g]=0;
return i
}})
})(jQuery);
(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;
b.cleanData=function(f){for(var g=0,h;
(h=f[g])!=null;
g++){try{b(h).triggerHandler("remove")
}catch(j){}}c(f)
};
b.widget=function(f,g,n){var k,l,i,m,h={},j=f.split(".")[0];
f=f.split(".")[1];
k=j+"-"+f;
if(!n){n=g;
g=b.Widget
}b.expr[":"][k.toLowerCase()]=function(o){return !!b.data(o,k)
};
b[j]=b[j]||{};
l=b[j][f];
i=b[j][f]=function(o,p){if(!this._createWidget){return new i(o,p)
}if(arguments.length){this._createWidget(o,p)
}};
b.extend(i,l,{version:n.version,_proto:b.extend({},n),_childConstructors:[]});
m=new g();
m.options=b.widget.extend({},m.options);
b.each(n,function(p,o){if(!b.isFunction(o)){h[p]=o;
return
}h[p]=(function(){var q=function(){return g.prototype[p].apply(this,arguments)
},r=function(t){return g.prototype[p].apply(this,t)
};
return function(){var v=this._super,t=this._superApply,u;
this._super=q;
this._superApply=r;
u=o.apply(this,arguments);
this._super=v;
this._superApply=t;
return u
}
})()
});
i.prototype=b.widget.extend(m,{widgetEventPrefix:l?m.widgetEventPrefix:f},h,{constructor:i,namespace:j,widgetName:f,widgetFullName:k});
if(l){b.each(l._childConstructors,function(p,q){var o=q.prototype;
b.widget(o.namespace+"."+o.widgetName,i,q._proto)
});
delete l._childConstructors
}else{g._childConstructors.push(i)
}b.widget.bridge(f,i)
};
b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;
for(;
j<f;
j++){for(h in g[j]){i=g[j][h];
if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)
}else{k[h]=i
}}}}return k
};
b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;
b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;
k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;
if(i){this.each(function(){var n,m=b.data(this,h);
if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")
}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")
}n=m[k].apply(m,j);
if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;
return false
}})
}else{this.each(function(){var m=b.data(this,h);
if(m){m.option(k||{})._init()
}else{b.data(this,h,new f(k,this))
}})
}return l
}
};
b.Widget=function(){};
b.Widget._childConstructors=[];
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];
this.element=b(g);
this.uuid=a++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);
this.bindings=b();
this.hoverable=b();
this.focusable=b();
if(g!==this){b.data(g,this.widgetFullName,this);
this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()
}}});
this.document=b(g.style?g.ownerDocument:g.document||g);
this.window=b(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:b.noop,widget:function(){return this.element
},option:function(j,k){var f=j,l,h,g;
if(arguments.length===0){return b.widget.extend({},this.options)
}if(typeof j==="string"){f={};
l=j.split(".");
j=l.shift();
if(l.length){h=f[j]=b.widget.extend({},this.options[j]);
for(g=0;
g<l.length-1;
g++){h[l[g]]=h[l[g]]||{};
h=h[l[g]]
}j=l.pop();
if(k===e){return h[j]===e?null:h[j]
}h[j]=k
}else{if(k===e){return this.options[j]===e?null:this.options[j]
}f[j]=k
}}this._setOptions(f);
return this
},_setOptions:function(f){var g;
for(g in f){this._setOption(g,f[g])
}return this
},_setOption:function(f,g){this.options[f]=g;
if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(i,h,g){var j,f=this;
if(typeof i!=="boolean"){g=h;
h=i;
i=false
}if(!g){g=h;
h=this.element;
j=this.widget()
}else{h=j=b(h);
this.bindings=this.bindings.add(h)
}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return
}return(typeof o==="string"?f[o]:o).apply(f,arguments)
}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++
}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];
if(k){j.delegate(k,l,m)
}else{h.bind(l,m)
}})
},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
g.unbind(f).undelegate(f)
},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)
}var f=this;
return setTimeout(g,h||0)
},_hoverable:function(f){this.hoverable=this.hoverable.add(f);
this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")
},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(f){this.focusable=this.focusable.add(f);
this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")
},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(f,g,h){var k,j,i=this.options[f];
h=h||{};
g=b.Event(g);
g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();
g.target=this.element[0];
j=g.originalEvent;
if(j){for(k in j){if(!(k in g)){g[k]=j[k]
}}}this.element.trigger(g,h);
return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())
}};
b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}
}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;
i=i||{};
if(typeof i==="number"){i={duration:i}
}k=!b.isEmptyObject(i);
i.complete=l;
if(i.delay){j.delay(i.delay)
}if(k&&b.effects&&b.effects.effect[h]){j[g](i)
}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)
}else{j.queue(function(m){b(this)[g]();
if(l){l.call(j[0])
}m()
})
}}}
})
})(jQuery);
(function(b,c){var a=false;
b(document).mouseup(function(){a=false
});
b.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;
this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)
}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");
e.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(f){if(a){return
}(this._mouseStarted&&this._mouseUp(f));
this._mouseDownEvent=f;
var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);
if(!g||d||!this._mouseCapture(f)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);
if(!this._mouseStarted){f.preventDefault();
return true
}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(h){return e._mouseMove(h)
};
this._mouseUpDelegate=function(h){return e._mouseUp(h)
};
b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
f.preventDefault();
a=true;
return true
},_mouseMove:function(d){if(b.ui.ie&&(!document.documentMode||document.documentMode<9)&&!d.button){return this._mouseUp(d)
}if(this._mouseStarted){this._mouseDrag(d);
return d.preventDefault()
}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);
(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))
}return !this._mouseStarted
},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(d)
}return false
},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(c){var d=this.options;
if(this.helper||d.disabled||a(c.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(c);
if(!this.handle){return false
}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(c){var d=this.options;
this.helper=this._createHelper(c);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));
this._setContainment();
if(this._trigger("start",c)===false){this._clear();
return false
}this._cacheHelperProportions();
if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
}this._mouseDrag(c,true);
if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)
}return true
},_mouseDrag:function(c,e){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!e){var d=this._uiHash();
if(this._trigger("drag",c,d)===false){this._mouseUp({});
return false
}this.position=d.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)
}return false
},_mouseStop:function(d){var c=this,e=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){e=a.ui.ddmanager.drop(this,d)
}if(this.dropped){e=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!a.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!e)||(this.options.revert==="valid"&&e)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,e))){a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(c._trigger("stop",d)!==false){c._clear()
}})
}else{if(this._trigger("stop",d)!==false){this._clear()
}}return false
},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)
}return a.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(c){return this.options.handle?!!a(c.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(d){var e=this.options,c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!c.parents("body").length){c.appendTo((e.appendTo==="parent"?this.element[0].parentNode:e.appendTo))
}if(c[0]!==this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c==="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){var c=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&a.ui.ie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var c=this.element.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e,g,d,f=this.options;
if(!f.containment){this.containment=null;
return
}if(f.containment==="window"){this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(f.containment==="document"){this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(f.containment.constructor===Array){this.containment=f.containment;
return
}if(f.containment==="parent"){f.containment=this.helper[0].parentNode
}g=a(f.containment);
d=g[0];
if(!d){return
}e=g.css("overflow")!=="hidden";
this.containment=[(parseInt(g.css("borderLeftWidth"),10)||0)+(parseInt(g.css("paddingLeft"),10)||0),(parseInt(g.css("borderTopWidth"),10)||0)+(parseInt(g.css("paddingTop"),10)||0),(e?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(g.css("borderRightWidth"),10)||0)-(parseInt(g.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(g.css("borderBottomWidth"),10)||0)-(parseInt(g.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=g
},_convertPositionTo:function(f,g){if(!g){g=this.position
}var e=f==="absolute"?1:-1,c=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:c.scrollTop(),left:c.scrollLeft()}
}return{top:(g.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*e)),left:(g.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*e))}
},_generatePosition:function(d){var c,i,j,f,e=this.options,k=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=d.pageX,g=d.pageY;
if(!this.offset.scroll){this.offset.scroll={top:k.scrollTop(),left:k.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){i=this.relative_container.offset();
c=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]
}else{c=this.containment
}if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left
}if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top
}if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left
}if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top
}}if(e.grid){j=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;
g=c?((j-this.offset.click.top>=c[1]||j-this.offset.click.top>c[3])?j:((j-this.offset.click.top>=c[1])?j-e.grid[1]:j+e.grid[1])):j;
f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;
h=c?((f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2])?f:((f-this.offset.click.left>=c[0])?f-e.grid[0]:f+e.grid[0])):f
}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(c,d,e){e=e||this._uiHash();
a.ui.plugin.call(this,c,[d,e]);
if(c==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,c,d,e)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("ui-draggable"),g=e.options,c=a.extend({},f,{item:e.element});
e.sortables=[];
a(g.connectToSortable).each(function(){var h=a.data(this,"ui-sortable");
if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();
h._trigger("activate",d,c)
}})
},stop:function(d,f){var e=a(this).data("ui-draggable"),c=a.extend({},f,{item:e.element});
a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
e.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(d);
this.instance.options.helper=this.instance.options._helper;
if(e.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",d,c)
}})
},drag:function(d,f){var e=a(this).data("ui-draggable"),c=this;
a.each(e.sortables,function(){var g=false,h=this;
this.instance.positionAbs=e.positionAbs;
this.instance.helperProportions=e.helperProportions;
this.instance.offset.click=e.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){g=true;
a.each(e.sortables,function(){this.instance.positionAbs=e.positionAbs;
this.instance.helperProportions=e.helperProportions;
this.instance.offset.click=e.offset.click;
if(this!==h&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(h.instance.element[0],this.instance.element[0])){g=false
}return g
})
}if(g){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return f.helper[0]
};
d.target=this.instance.currentItem[0];
this.instance._mouseCapture(d,true);
this.instance._mouseStart(d,true,true);
this.instance.offset.click.top=e.offset.click.top;
this.instance.offset.click.left=e.offset.click.left;
this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;
e._trigger("toSortable",d);
e.dropped=this.instance.element;
e.currentItem=e.element;
this.instance.fromOutside=e
}if(this.instance.currentItem){this.instance._mouseDrag(d)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",d,this.instance._uiHash(this.instance));
this.instance._mouseStop(d,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}e._trigger("fromSortable",d);
e.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(){var c=a("body"),d=a(this).data("ui-draggable").options;
if(c.css("cursor")){d._cursor=c.css("cursor")
}c.css("cursor",d.cursor)
},stop:function(){var c=a(this).data("ui-draggable").options;
if(c._cursor){a("body").css("cursor",c._cursor)
}}});
a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;
if(c.css("opacity")){f._opacity=c.css("opacity")
}c.css("opacity",f.opacity)
},stop:function(c,d){var e=a(this).data("ui-draggable").options;
if(e._opacity){a(d.helper).css("opacity",e._opacity)
}}});
a.ui.plugin.add("draggable","scroll",{start:function(){var c=a(this).data("ui-draggable");
if(c.scrollParent[0]!==document&&c.scrollParent[0].tagName!=="HTML"){c.overflowOffset=c.scrollParent.offset()
}},drag:function(e){var d=a(this).data("ui-draggable"),f=d.options,c=false;
if(d.scrollParent[0]!==document&&d.scrollParent[0].tagName!=="HTML"){if(!f.axis||f.axis!=="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+f.scrollSpeed
}else{if(e.pageY-d.overflowOffset.top<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-f.scrollSpeed
}}}if(!f.axis||f.axis!=="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+f.scrollSpeed
}else{if(e.pageX-d.overflowOffset.left<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-f.scrollSpeed
}}}}else{if(!f.axis||f.axis!=="x"){if(e.pageY-a(document).scrollTop()<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)
}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)
}}}if(!f.axis||f.axis!=="y"){if(e.pageX-a(document).scrollLeft()<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)
}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)
}}}}if(c!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)
}}});
a.ui.plugin.add("draggable","snap",{start:function(){var c=a(this).data("ui-draggable"),d=c.options;
c.snapElements=[];
a(d.snap.constructor!==String?(d.snap.items||":data(ui-draggable)"):d.snap).each(function(){var f=a(this),e=f.offset();
if(this!==c.element[0]){c.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:e.top,left:e.left})
}})
},drag:function(v,p){var c,A,j,k,u,n,m,B,w,h,g=a(this).data("ui-draggable"),q=g.options,z=q.snapTolerance,y=p.offset.left,x=y+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
for(w=g.snapElements.length-1;
w>=0;
w--){u=g.snapElements[w].left;
n=u+g.snapElements[w].width;
m=g.snapElements[w].top;
B=m+g.snapElements[w].height;
if(x<u-z||y>n+z||e<m-z||f>B+z||!a.contains(g.snapElements[w].item.ownerDocument,g.snapElements[w].item)){if(g.snapElements[w].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,v,a.extend(g._uiHash(),{snapItem:g.snapElements[w].item})))
}g.snapElements[w].snapping=false;
continue
}if(q.snapMode!=="inner"){c=Math.abs(m-e)<=z;
A=Math.abs(B-f)<=z;
j=Math.abs(u-x)<=z;
k=Math.abs(n-y)<=z;
if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top
}if(A){p.position.top=g._convertPositionTo("relative",{top:B,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:u-g.helperProportions.width}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left
}}h=(c||A||j||k);
if(q.snapMode!=="outer"){c=Math.abs(m-f)<=z;
A=Math.abs(B-e)<=z;
j=Math.abs(u-y)<=z;
k=Math.abs(n-x)<=z;
if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top
}if(A){p.position.top=g._convertPositionTo("relative",{top:B-g.helperProportions.height,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:u}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left
}}if(!g.snapElements[w].snapping&&(c||A||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,v,a.extend(g._uiHash(),{snapItem:g.snapElements[w].item})))
}g.snapElements[w].snapping=(c||A||j||k||h)
}}});
a.ui.plugin.add("draggable","stack",{start:function(){var c,e=this.data("ui-draggable").options,d=a.makeArray(a(e.stack)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||0)-(parseInt(a(f).css("zIndex"),10)||0)
});
if(!d.length){return
}c=parseInt(a(d[0]).css("zIndex"),10)||0;
a(d).each(function(f){a(this).css("zIndex",c+f)
});
this.css("zIndex",(c+d.length))
}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;
if(c.css("zIndex")){f._zIndex=c.css("zIndex")
}c.css("zIndex",f.zIndex)
},stop:function(c,d){var e=a(this).data("ui-draggable").options;
if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)
}}})
})(jQuery);
(function(b,c){function a(e,d,f){return(e>d)&&(e<(d+f))
}b.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e=this.options,d=e.accept;
this.isover=false;
this.isout=true;
this.accept=b.isFunction(d)?d:function(f){return f.is(d)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
b.ui.ddmanager.droppables[e.scope]=b.ui.ddmanager.droppables[e.scope]||[];
b.ui.ddmanager.droppables[e.scope].push(this);
(e.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var e=0,d=b.ui.ddmanager.droppables[this.options.scope];
for(;
e<d.length;
e++){if(d[e]===this){d.splice(e,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(d,e){if(d==="accept"){this.accept=b.isFunction(e)?e:function(f){return f.is(e)
}
}b.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(e){var d=b.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(d){this._trigger("activate",e,this.ui(d))
}},_deactivate:function(e){var d=b.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(d){this._trigger("deactivate",e,this.ui(d))
}},_over:function(e){var d=b.ui.ddmanager.current;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",e,this.ui(d))
}},_out:function(e){var d=b.ui.ddmanager.current;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",e,this.ui(d))
}},_drop:function(e,f){var d=f||b.ui.ddmanager.current,g=false;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var h=b.data(this,"ui-droppable");
if(h.options.greedy&&!h.options.disabled&&h.options.scope===d.options.scope&&h.accept.call(h.element[0],(d.currentItem||d.element))&&b.ui.intersect(d,b.extend(h,{offset:h.element.offset()}),h.options.tolerance)){g=true;
return false
}});
if(g){return false
}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",e,this.ui(d));
return this.element
}return false
},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}
}});
b.ui.intersect=function(q,j,o){if(!j.offset){return false
}var h,i,f=(q.positionAbs||q.position.absolute).left,e=f+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height,g=j.offset.left,d=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;
switch(o){case"fit":return(g<=f&&e<=d&&p<=n&&m<=k);
case"intersect":return(g<f+(q.helperProportions.width/2)&&e-(q.helperProportions.width/2)<d&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);
case"pointer":h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left);
i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top);
return a(i,p,j.proportions.height)&&a(h,g,j.proportions.width);
case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((f>=g&&f<=d)||(e>=g&&e<=d)||(f<g&&e>d));
default:return false
}};
b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(g,k){var f,e,d=b.ui.ddmanager.droppables[g.options.scope]||[],h=k?k.type:null,l=(g.currentItem||g.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(f=0;
f<d.length;
f++){if(d[f].options.disabled||(g&&!d[f].accept.call(d[f].element[0],(g.currentItem||g.element)))){continue
}for(e=0;
e<l.length;
e++){if(l[e]===d[f].element[0]){d[f].proportions.height=0;
continue droppablesLoop
}}d[f].visible=d[f].element.css("display")!=="none";
if(!d[f].visible){continue
}if(h==="mousedown"){d[f]._activate.call(d[f],k)
}d[f].offset=d[f].element.offset();
d[f].proportions={width:d[f].element[0].offsetWidth,height:d[f].element[0].offsetHeight}
}},drop:function(d,e){var f=false;
b.each((b.ui.ddmanager.droppables[d.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&b.ui.intersect(d,this,this.options.tolerance)){f=this._drop.call(this,e)||f
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(d.currentItem||d.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,e)
}});
return f
},dragStart:function(d,e){d.element.parentsUntil("body").bind("scroll.droppable",function(){if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}})
},drag:function(d,e){if(d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var i,g,f,h=b.ui.intersect(d,this,this.options.tolerance),j=!h&&this.isover?"isout":(h&&!this.isover?"isover":null);
if(!j){return
}if(this.options.greedy){g=this.options.scope;
f=this.element.parents(":data(ui-droppable)").filter(function(){return b.data(this,"ui-droppable").options.scope===g
});
if(f.length){i=b.data(f[0],"ui-droppable");
i.greedyChild=(j==="isover")
}}if(i&&j==="isover"){i.isover=false;
i.isout=true;
i._out.call(i,e)
}this[j]=true;
this[j==="isout"?"isover":"isout"]=false;
this[j==="isover"?"_over":"_out"].call(this,e);
if(i&&j==="isout"){i.isout=false;
i.isover=true;
i._over.call(i,e)
}})
},dragStop:function(d,e){d.element.parentsUntil("body").unbind("scroll.droppable");
if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}}}
})(jQuery);
(function(c,d){function b(e){return parseInt(e,10)||0
}function a(e){return !isNaN(parseInt(e,10))
}c.widget("ui.resizable",c.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var l,f,j,g,e,h=this,k=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}l=this.handles.split(",");
this.handles={};
for(f=0;
f<l.length;
f++){j=c.trim(l[f]);
e="ui-resizable-"+j;
g=c("<div class='ui-resizable-handle "+e+"'></div>");
g.css({zIndex:k.zIndex});
if("se"===j){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[j]=".ui-resizable-"+j;
this.element.append(g)
}}this._renderAxis=function(q){var n,o,m,p;
q=q||this.element;
for(n in this.handles){if(this.handles[n].constructor===String){this.handles[n]=c(this.handles[n],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){o=c(this.handles[n],this.element);
p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();
m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");
q.css(m,p);
this._proportionallyResize()
}if(!c(this.handles[n]).length){continue
}}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!h.resizing){if(this.className){g=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}h.axis=g&&g[1]?g[1]:"se"
}});
if(k.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return
}c(this).removeClass("ui-resizable-autohide");
h._handles.show()
}).mouseleave(function(){if(k.disabled){return
}if(!h.resizing){c(this).addClass("ui-resizable-autohide");
h._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var f,e=function(g){c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){e(this.element);
f=this.element;
this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);
f.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
e(this.originalElement);
return this
},_mouseCapture:function(g){var f,h,e=false;
for(f in this.handles){h=c(this.handles[f])[0];
if(h===g.target||c.contains(h,g.target)){e=true
}}return !this.options.disabled&&e
},_mouseStart:function(g){var k,h,j,i=this.options,f=this.element.position(),e=this.element;
this.resizing=true;
if((/absolute/).test(e.css("position"))){e.css({position:"absolute",top:e.css("top"),left:e.css("left")})
}else{if(e.is(".ui-draggable")){e.css({position:"absolute",top:f.top,left:f.left})
}}this._renderProxy();
k=b(this.helper.css("left"));
h=b(this.helper.css("top"));
if(i.containment){k+=c(i.containment).scrollLeft()||0;
h+=c(i.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:k,top:h};
this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalPosition={left:k,top:h};
this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};
this.originalMousePosition={left:g.pageX,top:g.pageY};
this.aspectRatio=(typeof i.aspectRatio==="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
j=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",j==="auto"?this.axis+"-resize":j);
e.addClass("ui-resizable-resizing");
this._propagate("start",g);
return true
},_mouseDrag:function(e){var k,g=this.helper,l={},i=this.originalMousePosition,m=this.axis,o=this.position.top,f=this.position.left,n=this.size.width,j=this.size.height,q=(e.pageX-i.left)||0,p=(e.pageY-i.top)||0,h=this._change[m];
if(!h){return false
}k=h.apply(this,[e,q,p]);
this._updateVirtualBoundaries(e.shiftKey);
if(this._aspectRatio||e.shiftKey){k=this._updateRatio(k,e)
}k=this._respectSize(k,e);
this._updateCache(k);
this._propagate("resize",e);
if(this.position.top!==o){l.top=this.position.top+"px"
}if(this.position.left!==f){l.left=this.position.left+"px"
}if(this.size.width!==n){l.width=this.size.width+"px"
}if(this.size.height!==j){l.height=this.size.height+"px"
}g.css(l);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!c.isEmptyObject(l)){this._trigger("resize",e,this.ui())
}return false
},_mouseStop:function(h){this.resizing=false;
var g,e,f,k,n,j,m,i=this.options,l=this;
if(this._helper){g=this._proportionallyResizeElements;
e=g.length&&(/textarea/i).test(g[0].nodeName);
f=e&&c.ui.hasScroll(g[0],"left")?0:l.sizeDiff.height;
k=e?0:l.sizeDiff.width;
n={width:(l.helper.width()-k),height:(l.helper.height()-f)};
j=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null;
m=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;
if(!i.animate){this.element.css(c.extend(n,{top:m,left:j}))
}l.helper.height(l.size.height);
l.helper.width(l.size.width);
if(this._helper&&!i.animate){this._proportionallyResize()
}}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",h);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(g){var i,h,f,k,e,j=this.options;
e={minWidth:a(j.minWidth)?j.minWidth:0,maxWidth:a(j.maxWidth)?j.maxWidth:Infinity,minHeight:a(j.minHeight)?j.minHeight:0,maxHeight:a(j.maxHeight)?j.maxHeight:Infinity};
if(this._aspectRatio||g){i=e.minHeight*this.aspectRatio;
f=e.minWidth/this.aspectRatio;
h=e.maxHeight*this.aspectRatio;
k=e.maxWidth/this.aspectRatio;
if(i>e.minWidth){e.minWidth=i
}if(f>e.minHeight){e.minHeight=f
}if(h<e.maxWidth){e.maxWidth=h
}if(k<e.maxHeight){e.maxHeight=k
}}this._vBoundaries=e
},_updateCache:function(e){this.offset=this.helper.offset();
if(a(e.left)){this.position.left=e.left
}if(a(e.top)){this.position.top=e.top
}if(a(e.height)){this.size.height=e.height
}if(a(e.width)){this.size.width=e.width
}},_updateRatio:function(g){var h=this.position,f=this.size,e=this.axis;
if(a(g.height)){g.width=(g.height*this.aspectRatio)
}else{if(a(g.width)){g.height=(g.width/this.aspectRatio)
}}if(e==="sw"){g.left=h.left+(f.width-g.width);
g.top=null
}if(e==="nw"){g.top=h.top+(f.height-g.height);
g.left=h.left+(f.width-g.width)
}return g
},_respectSize:function(j){var g=this._vBoundaries,m=this.axis,p=a(j.width)&&g.maxWidth&&(g.maxWidth<j.width),k=a(j.height)&&g.maxHeight&&(g.maxHeight<j.height),h=a(j.width)&&g.minWidth&&(g.minWidth>j.width),n=a(j.height)&&g.minHeight&&(g.minHeight>j.height),f=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,i=/sw|nw|w/.test(m),e=/nw|ne|n/.test(m);
if(h){j.width=g.minWidth
}if(n){j.height=g.minHeight
}if(p){j.width=g.maxWidth
}if(k){j.height=g.maxHeight
}if(h&&i){j.left=f-g.minWidth
}if(p&&i){j.left=f-g.maxWidth
}if(n&&e){j.top=l-g.minHeight
}if(k&&e){j.top=l-g.maxHeight
}if(!j.width&&!j.height&&!j.left&&j.top){j.top=null
}else{if(!j.width&&!j.height&&!j.top&&j.left){j.left=null
}}return j
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var h,f,l,e,k,g=this.helper||this.element;
for(h=0;
h<this._proportionallyResizeElements.length;
h++){k=this._proportionallyResizeElements[h];
if(!this.borderDif){this.borderDif=[];
l=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")];
e=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")];
for(f=0;
f<l.length;
f++){this.borderDif[f]=(parseInt(l[f],10)||0)+(parseInt(e[f],10)||0)
}}k.css({height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,width:(g.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var e=this.element,f=this.options;
this.elementOffset=e.offset();
if(this._helper){this.helper=this.helper||c("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++f.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(f,e){return{width:this.originalSize.width+e}
},w:function(g,e){var f=this.originalSize,h=this.originalPosition;
return{left:h.left+e,width:f.width-e}
},n:function(h,f,e){var g=this.originalSize,i=this.originalPosition;
return{top:i.top+e,height:g.height-e}
},s:function(g,f,e){return{height:this.originalSize.height+e}
},se:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},sw:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
},ne:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},nw:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
}},_propagate:function(f,e){c.ui.plugin.call(this,f,[e,this.ui()]);
(f!=="resize"&&this._trigger(f,e,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.ui.plugin.add("resizable","animate",{stop:function(h){var m=c(this).data("ui-resizable"),j=m.options,g=m._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:m.sizeDiff.height,l=e?0:m.sizeDiff.width,i={width:(m.size.width-l),height:(m.size.height-f)},k=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;
m.element.animate(c.extend(i,n&&k?{top:n,left:k}:{}),{duration:j.animateDuration,easing:j.animateEasing,step:function(){var o={width:parseInt(m.element.css("width"),10),height:parseInt(m.element.css("height"),10),top:parseInt(m.element.css("top"),10),left:parseInt(m.element.css("left"),10)};
if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})
}m._updateCache(o);
m._propagate("resize",h)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(){var m,g,q,e,l,h,r,n=c(this).data("ui-resizable"),k=n.options,j=n.element,f=k.containment,i=(f instanceof c)?f.get(0):(/parent/.test(f))?j.parent().get(0):f;
if(!i){return
}n.containerElement=c(i);
if(/document/.test(f)||f===document){n.containerOffset={left:0,top:0};
n.containerPosition={left:0,top:0};
n.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{m=c(i);
g=[];
c(["Top","Right","Left","Bottom"]).each(function(p,o){g[p]=b(m.css("padding"+o))
});
n.containerOffset=m.offset();
n.containerPosition=m.position();
n.containerSize={height:(m.innerHeight()-g[3]),width:(m.innerWidth()-g[1])};
q=n.containerOffset;
e=n.containerSize.height;
l=n.containerSize.width;
h=(c.ui.hasScroll(i,"left")?i.scrollWidth:l);
r=(c.ui.hasScroll(i)?i.scrollHeight:e);
n.parentData={element:i,left:q.left,top:q.top,width:h,height:r}
}},resize:function(f){var k,q,j,i,l=c(this).data("ui-resizable"),h=l.options,n=l.containerOffset,m=l.position,p=l._aspectRatio||f.shiftKey,e={top:0,left:0},g=l.containerElement;
if(g[0]!==document&&(/static/).test(g.css("position"))){e=n
}if(m.left<(l._helper?n.left:0)){l.size.width=l.size.width+(l._helper?(l.position.left-n.left):(l.position.left-e.left));
if(p){l.size.height=l.size.width/l.aspectRatio
}l.position.left=h.helper?n.left:0
}if(m.top<(l._helper?n.top:0)){l.size.height=l.size.height+(l._helper?(l.position.top-n.top):l.position.top);
if(p){l.size.width=l.size.height*l.aspectRatio
}l.position.top=l._helper?n.top:0
}l.offset.left=l.parentData.left+l.position.left;
l.offset.top=l.parentData.top+l.position.top;
k=Math.abs((l._helper?l.offset.left-e.left:(l.offset.left-e.left))+l.sizeDiff.width);
q=Math.abs((l._helper?l.offset.top-e.top:(l.offset.top-n.top))+l.sizeDiff.height);
j=l.containerElement.get(0)===l.element.parent().get(0);
i=/relative|absolute/.test(l.containerElement.css("position"));
if(j&&i){k-=l.parentData.left
}if(k+l.size.width>=l.parentData.width){l.size.width=l.parentData.width-k;
if(p){l.size.height=l.size.width/l.aspectRatio
}}if(q+l.size.height>=l.parentData.height){l.size.height=l.parentData.height-q;
if(p){l.size.width=l.size.height*l.aspectRatio
}}},stop:function(){var k=c(this).data("ui-resizable"),f=k.options,l=k.containerOffset,e=k.containerPosition,g=k.containerElement,i=c(k.helper),n=i.offset(),m=i.outerWidth()-k.sizeDiff.width,j=i.outerHeight()-k.sizeDiff.height;
if(k._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:n.left-e.left-l.left,width:m,height:j})
}if(k._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:n.left-e.left-l.left,width:m,height:j})
}}});
c.ui.plugin.add("resizable","alsoResize",{start:function(){var e=c(this).data("ui-resizable"),g=e.options,f=function(h){c(h).each(function(){var i=c(this);
i.data("ui-resizable-alsoresize",{width:parseInt(i.width(),10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10)})
})
};
if(typeof(g.alsoResize)==="object"&&!g.alsoResize.parentNode){if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];
f(g.alsoResize)
}else{c.each(g.alsoResize,function(h){f(h)
})
}}else{f(g.alsoResize)
}},resize:function(g,i){var f=c(this).data("ui-resizable"),j=f.options,h=f.originalSize,l=f.originalPosition,k={height:(f.size.height-h.height)||0,width:(f.size.width-h.width)||0,top:(f.position.top-l.top)||0,left:(f.position.left-l.left)||0},e=function(m,n){c(m).each(function(){var q=c(this),r=c(this).data("ui-resizable-alsoresize"),p={},o=n&&n.length?n:q.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(o,function(t,v){var u=(r[v]||0)+(k[v]||0);
if(u&&u>=0){p[v]=u||null
}});
q.css(p)
})
};
if(typeof(j.alsoResize)==="object"&&!j.alsoResize.nodeType){c.each(j.alsoResize,function(m,n){e(m,n)
})
}else{e(j.alsoResize)
}},stop:function(){c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","ghost",{start:function(){var f=c(this).data("ui-resizable"),g=f.options,e=f.size;
f.ghost=f.originalElement.clone();
f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost==="string"?g.ghost:"");
f.ghost.appendTo(f.helper)
},resize:function(){var e=c(this).data("ui-resizable");
if(e.ghost){e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})
}},stop:function(){var e=c(this).data("ui-resizable");
if(e.ghost&&e.helper){e.helper.get(0).removeChild(e.ghost.get(0))
}}});
c.ui.plugin.add("resizable","grid",{resize:function(){var r=c(this).data("ui-resizable"),i=r.options,t=r.size,k=r.originalSize,n=r.originalPosition,u=r.axis,f=typeof i.grid==="number"?[i.grid,i.grid]:i.grid,p=(f[0]||1),m=(f[1]||1),h=Math.round((t.width-k.width)/p)*p,g=Math.round((t.height-k.height)/m)*m,l=k.width+h,e=k.height+g,j=i.maxWidth&&(i.maxWidth<l),v=i.maxHeight&&(i.maxHeight<e),q=i.minWidth&&(i.minWidth>l),w=i.minHeight&&(i.minHeight>e);
i.grid=f;
if(q){l=l+p
}if(w){e=e+m
}if(j){l=l-p
}if(v){e=e-m
}if(/^(se|s|e)$/.test(u)){r.size.width=l;
r.size.height=e
}else{if(/^(ne)$/.test(u)){r.size.width=l;
r.size.height=e;
r.position.top=n.top-g
}else{if(/^(sw)$/.test(u)){r.size.width=l;
r.size.height=e;
r.position.left=n.left-h
}else{r.size.width=l;
r.size.height=e;
r.position.top=n.top-g;
r.position.left=n.left-h
}}}}})
})(jQuery);
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var d,c=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){d=a(c.options.filter,c.element[0]);
d.addClass("ui-selectee");
d.each(function(){var e=a(this),f=e.offset();
a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=d.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(e){var d=this,c=this.options;
this.opos=[e.pageX,e.pageY];
if(this.options.disabled){return
}this.selectees=a(c.filter,this.element[0]);
this._trigger("start",e);
a(c.appendTo).append(this.helper);
this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0});
if(c.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");
f.startselected=true;
if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
d._trigger("unselecting",e,{unselecting:f.element})
}});
a(e.target).parents().addBack().each(function(){var f,g=a.data(this,"selectable-item");
if(g){f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");
g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");
g.unselecting=!f;
g.selecting=f;
g.selected=f;
if(f){d._trigger("selecting",e,{selecting:g.element})
}else{d._trigger("unselecting",e,{unselecting:g.element})
}return false
}})
},_mouseDrag:function(j){this.dragged=true;
if(this.options.disabled){return
}var g,i=this,e=this.options,d=this.opos[0],h=this.opos[1],c=j.pageX,f=j.pageY;
if(d>c){g=c;
c=d;
d=g
}if(h>f){g=f;
f=h;
h=g
}this.helper.css({left:d,top:h,width:c-d,height:f-h});
this.selectees.each(function(){var k=a.data(this,"selectable-item"),l=false;
if(!k||k.element===i.element[0]){return
}if(e.tolerance==="touch"){l=(!(k.left>c||k.right<d||k.top>f||k.bottom<h))
}else{if(e.tolerance==="fit"){l=(k.left>d&&k.right<c&&k.top>h&&k.bottom<f)
}}if(l){if(k.selected){k.$element.removeClass("ui-selected");
k.selected=false
}if(k.unselecting){k.$element.removeClass("ui-unselecting");
k.unselecting=false
}if(!k.selecting){k.$element.addClass("ui-selecting");
k.selecting=true;
i._trigger("selecting",j,{selecting:k.element})
}}else{if(k.selecting){if((j.metaKey||j.ctrlKey)&&k.startselected){k.$element.removeClass("ui-selecting");
k.selecting=false;
k.$element.addClass("ui-selected");
k.selected=true
}else{k.$element.removeClass("ui-selecting");
k.selecting=false;
if(k.startselected){k.$element.addClass("ui-unselecting");
k.unselecting=true
}i._trigger("unselecting",j,{unselecting:k.element})
}}if(k.selected){if(!j.metaKey&&!j.ctrlKey&&!k.startselected){k.$element.removeClass("ui-selected");
k.selected=false;
k.$element.addClass("ui-unselecting");
k.unselecting=true;
i._trigger("unselecting",j,{unselecting:k.element})
}}}});
return false
},_mouseStop:function(d){var c=this;
this.dragged=false;
a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-unselecting");
e.unselecting=false;
e.startselected=false;
c._trigger("unselected",d,{unselected:e.element})
});
a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-selecting").addClass("ui-selected");
e.selecting=false;
e.selected=true;
e.startselected=true;
c._trigger("selected",d,{selected:e.element})
});
this._trigger("stop",d);
this.helper.remove();
return false
}})
})(jQuery);
(function(b,d){function a(f,e,g){return(f>e)&&(f<(e+g))
}function c(e){return(/left|right/).test(e.css("float"))||(/inline|table-cell/).test(e.css("display"))
}b.widget("ui.sortable",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?e.axis==="x"||c(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var e=this.items.length-1;
e>=0;
e--){this.items[e].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(e,f){if(e==="disabled"){this.options[e]=f;
this.widget().toggleClass("ui-sortable-disabled",!!f)
}else{b.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(g,h){var e=null,i=false,f=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(g);
b(g.target).parents().each(function(){if(b.data(this,f.widgetName+"-item")===f){e=b(this);
return false
}});
if(b.data(g.target,f.widgetName+"-item")===f){e=b(g.target)
}if(!e){return false
}if(this.options.handle&&!h){b(this.options.handle,e).find("*").addBack().each(function(){if(this===g.target){i=true
}});
if(!i){return false
}}this.currentItem=e;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(h,j,f){var g,e,k=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(h);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
b.extend(this.offset,{click:{left:h.pageX-this.offset.left,top:h.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(h);
this.originalPageX=h.pageX;
this.originalPageY=h.pageY;
(k.cursorAt&&this._adjustOffsetFromHelper(k.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(k.containment){this._setContainment()
}if(k.cursor&&k.cursor!=="auto"){e=this.document.find("body");
this.storedCursor=e.css("cursor");
e.css("cursor",k.cursor);
this.storedStylesheet=b("<style>*{ cursor: "+k.cursor+" !important; }</style>").appendTo(e)
}if(k.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",k.opacity)
}if(k.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",k.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",h,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!f){for(g=this.containers.length-1;
g>=0;
g--){this.containers[g]._trigger("activate",h,this._uiHash(this))
}}if(b.ui.ddmanager){b.ui.ddmanager.current=this
}if(b.ui.ddmanager&&!k.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,h)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(h);
return true
},_mouseDrag:function(j){var g,h,f,l,k=this.options,e=false;
this.position=this._generatePosition(j);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-j.pageY<k.scrollSensitivity){this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop+k.scrollSpeed
}else{if(j.pageY-this.overflowOffset.top<k.scrollSensitivity){this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop-k.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-j.pageX<k.scrollSensitivity){this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft+k.scrollSpeed
}else{if(j.pageX-this.overflowOffset.left<k.scrollSensitivity){this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft-k.scrollSpeed
}}}else{if(j.pageY-b(document).scrollTop()<k.scrollSensitivity){e=b(document).scrollTop(b(document).scrollTop()-k.scrollSpeed)
}else{if(b(window).height()-(j.pageY-b(document).scrollTop())<k.scrollSensitivity){e=b(document).scrollTop(b(document).scrollTop()+k.scrollSpeed)
}}if(j.pageX-b(document).scrollLeft()<k.scrollSensitivity){e=b(document).scrollLeft(b(document).scrollLeft()-k.scrollSpeed)
}else{if(b(window).width()-(j.pageX-b(document).scrollLeft())<k.scrollSensitivity){e=b(document).scrollLeft(b(document).scrollLeft()+k.scrollSpeed)
}}}if(e!==false&&b.ui.ddmanager&&!k.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,j)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(g=this.items.length-1;
g>=0;
g--){h=this.items[g];
f=h.item[0];
l=this._intersectsWithPointer(h);
if(!l){continue
}if(h.instance!==this.currentContainer){continue
}if(f!==this.currentItem[0]&&this.placeholder[l===1?"next":"prev"]()[0]!==f&&!b.contains(this.placeholder[0],f)&&(this.options.type==="semi-dynamic"?!b.contains(this.element[0],f):true)){this.direction=l===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(h)){this._rearrange(j,h)
}else{break
}this._trigger("change",j,this._uiHash());
break
}}this._contactContainers(j);
if(b.ui.ddmanager){b.ui.ddmanager.drag(this,j)
}this._trigger("sort",j,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(g,i){if(!g){return
}if(b.ui.ddmanager&&!this.options.dropBehaviour){b.ui.ddmanager.drop(this,g)
}if(this.options.revert){var f=this,j=this.placeholder.offset(),e=this.options.axis,h={};
if(!e||e==="x"){h.left=j.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!e||e==="y"){h.top=j.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
b(this.helper).animate(h,parseInt(this.options.revert,10)||500,function(){f._clear(g)
})
}else{this._clear(g,i)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var e=this.containers.length-1;
e>=0;
e--){this.containers[e]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,this._uiHash(this));
this.containers[e].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}b.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){b(this.domPosition.prev).after(this.currentItem)
}else{b(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(g){var e=this._getItemsAsjQuery(g&&g.connected),f=[];
g=g||{};
b(e).each(function(){var h=(b(g.item||this).attr(g.attribute||"id")||"").match(g.expression||(/(.+)[\-=_](.+)/));
if(h){f.push((g.key||h[1]+"[]")+"="+(g.key&&g.expression?h[1]:h[2]))
}});
if(!f.length&&g.key){f.push(g.key+"=")
}return f.join("&")
},toArray:function(g){var e=this._getItemsAsjQuery(g&&g.connected),f=[];
g=g||{};
e.each(function(){f.push(b(g.item||this).attr(g.attribute||"id")||"")
});
return f
},_intersectsWith:function(q){var g=this.positionAbs.left,f=g+this.helperProportions.width,o=this.positionAbs.top,n=o+this.helperProportions.height,h=q.left,e=h+q.width,u=q.top,m=u+q.height,v=this.offset.click.top,k=this.offset.click.left,j=(this.options.axis==="x")||((o+v)>u&&(o+v)<m),p=(this.options.axis==="y")||((g+k)>h&&(g+k)<e),i=j&&p;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>q[this.floating?"width":"height"])){return i
}else{return(h<g+(this.helperProportions.width/2)&&f-(this.helperProportions.width/2)<e&&u<o+(this.helperProportions.height/2)&&n-(this.helperProportions.height/2)<m)
}},_intersectsWithPointer:function(g){var h=(this.options.axis==="x")||a(this.positionAbs.top+this.offset.click.top,g.top,g.height),f=(this.options.axis==="y")||a(this.positionAbs.left+this.offset.click.left,g.left,g.width),j=h&&f,e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();
if(!j){return false
}return this.floating?(((i&&i==="right")||e==="down")?2:1):(e&&(e==="down"?2:1))
},_intersectsWithSides:function(h){var f=a(this.positionAbs.top+this.offset.click.top,h.top+(h.height/2),h.height),g=a(this.positionAbs.left+this.offset.click.left,h.left+(h.width/2),h.width),e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();
if(this.floating&&i){return((i==="right"&&g)||(i==="left"&&!g))
}else{return e&&((e==="down"&&f)||(e==="up"&&!f))
}},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;
return e!==0&&(e>0?"down":"up")
},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;
return e!==0&&(e>0?"right":"left")
},refresh:function(e){this._refreshItems(e);
this.refreshPositions();
return this
},_connectWith:function(){var e=this.options;
return e.connectWith.constructor===String?[e.connectWith]:e.connectWith
},_getItemsAsjQuery:function(l){var h,g,n,m,e=[],f=[],k=this._connectWith();
if(k&&l){for(h=k.length-1;
h>=0;
h--){n=b(k[h]);
for(g=n.length-1;
g>=0;
g--){m=b.data(n[g],this.widgetFullName);
if(m&&m!==this&&!m.options.disabled){f.push([b.isFunction(m.options.items)?m.options.items.call(m.element):b(m.options.items,m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),m])
}}}}f.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(h=f.length-1;
h>=0;
h--){f[h][0].each(function(){e.push(this)
})
}return b(e)
},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=b.grep(this.items,function(g){for(var f=0;
f<e.length;
f++){if(e[f]===g.item[0]){return false
}}return true
})
},_refreshItems:function(e){this.items=[];
this.containers=[this];
var k,g,p,l,o,f,r,q,m=this.items,h=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):b(this.options.items,this.element),this]],n=this._connectWith();
if(n&&this.ready){for(k=n.length-1;
k>=0;
k--){p=b(n[k]);
for(g=p.length-1;
g>=0;
g--){l=b.data(p[g],this.widgetFullName);
if(l&&l!==this&&!l.options.disabled){h.push([b.isFunction(l.options.items)?l.options.items.call(l.element[0],e,{item:this.currentItem}):b(l.options.items,l.element),l]);
this.containers.push(l)
}}}}for(k=h.length-1;
k>=0;
k--){o=h[k][1];
f=h[k][0];
for(g=0,q=f.length;
g<q;
g++){r=b(f[g]);
r.data(this.widgetName+"-item",o);
m.push({item:r,instance:o,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(e){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var g,h,f,j;
for(g=this.items.length-1;
g>=0;
g--){h=this.items[g];
if(h.instance!==this.currentContainer&&this.currentContainer&&h.item[0]!==this.currentItem[0]){continue
}f=this.options.toleranceElement?b(this.options.toleranceElement,h.item):h.item;
if(!e){h.width=f.outerWidth();
h.height=f.outerHeight()
}j=f.offset();
h.left=j.left;
h.top=j.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(g=this.containers.length-1;
g>=0;
g--){j=this.containers[g].element.offset();
this.containers[g].containerCache.left=j.left;
this.containers[g].containerCache.top=j.top;
this.containers[g].containerCache.width=this.containers[g].element.outerWidth();
this.containers[g].containerCache.height=this.containers[g].element.outerHeight()
}}return this
},_createPlaceholder:function(f){f=f||this;
var e,g=f.options;
if(!g.placeholder||g.placeholder.constructor===String){e=g.placeholder;
g.placeholder={element:function(){var i=f.currentItem[0].nodeName.toLowerCase(),h=b("<"+i+">",f.document[0]).addClass(e||f.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(i==="tr"){f.currentItem.children().each(function(){b("<td>&#160;</td>",f.document[0]).attr("colspan",b(this).attr("colspan")||1).appendTo(h)
})
}else{if(i==="img"){h.attr("src",f.currentItem.attr("src"))
}}if(!e){h.css("visibility","hidden")
}return h
},update:function(h,i){if(e&&!g.forcePlaceholderSize){return
}if(!i.height()){i.height(f.currentItem.innerHeight()-parseInt(f.currentItem.css("paddingTop")||0,10)-parseInt(f.currentItem.css("paddingBottom")||0,10))
}if(!i.width()){i.width(f.currentItem.innerWidth()-parseInt(f.currentItem.css("paddingLeft")||0,10)-parseInt(f.currentItem.css("paddingRight")||0,10))
}}}
}f.placeholder=b(g.placeholder.element.call(f.element,f.currentItem));
f.currentItem.after(f.placeholder);
g.placeholder.update(f,f.placeholder)
},_contactContainers:function(e){var l,h,p,m,n,r,f,t,k,o,g=null,q=null;
for(l=this.containers.length-1;
l>=0;
l--){if(b.contains(this.currentItem[0],this.containers[l].element[0])){continue
}if(this._intersectsWith(this.containers[l].containerCache)){if(g&&b.contains(this.containers[l].element[0],g.element[0])){continue
}g=this.containers[l];
q=l
}else{if(this.containers[l].containerCache.over){this.containers[l]._trigger("out",e,this._uiHash(this));
this.containers[l].containerCache.over=0
}}}if(!g){return
}if(this.containers.length===1){if(!this.containers[q].containerCache.over){this.containers[q]._trigger("over",e,this._uiHash(this));
this.containers[q].containerCache.over=1
}}else{p=10000;
m=null;
o=g.floating||c(this.currentItem);
n=o?"left":"top";
r=o?"width":"height";
f=this.positionAbs[n]+this.offset.click[n];
for(h=this.items.length-1;
h>=0;
h--){if(!b.contains(this.containers[q].element[0],this.items[h].item[0])){continue
}if(this.items[h].item[0]===this.currentItem[0]){continue
}if(o&&!a(this.positionAbs.top+this.offset.click.top,this.items[h].top,this.items[h].height)){continue
}t=this.items[h].item.offset()[n];
k=false;
if(Math.abs(t-f)>Math.abs(t+this.items[h][r]-f)){k=true;
t+=this.items[h][r]
}if(Math.abs(t-f)<p){p=Math.abs(t-f);
m=this.items[h];
this.direction=k?"up":"down"
}}if(!m&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[q]){return
}m?this._rearrange(e,m,null,true):this._rearrange(e,null,this.containers[q].element,true);
this._trigger("change",e,this._uiHash());
this.containers[q]._trigger("change",e,this._uiHash(this));
this.currentContainer=this.containers[q];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[q]._trigger("over",e,this._uiHash(this));
this.containers[q].containerCache.over=1
}},_createHelper:function(f){var g=this.options,e=b.isFunction(g.helper)?b(g.helper.apply(this.element[0],[f,this.currentItem])):(g.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!e.parents("body").length){b(g.appendTo!=="parent"?g.appendTo:this.currentItem[0].parentNode)[0].appendChild(e[0])
}if(e[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!e[0].style.width||g.forceHelperSize){e.width(this.currentItem.width())
}if(!e[0].style.height||g.forceHelperSize){e.height(this.currentItem.height())
}return e
},_adjustOffsetFromHelper:function(e){if(typeof e==="string"){e=e.split(" ")
}if(b.isArray(e)){e={left:+e[0],top:+e[1]||0}
}if("left" in e){this.offset.click.left=e.left+this.margins.left
}if("right" in e){this.offset.click.left=this.helperProportions.width-e.right+this.margins.left
}if("top" in e){this.offset.click.top=e.top+this.margins.top
}if("bottom" in e){this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var e=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft();
e.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&b.ui.ie)){e={top:0,left:0}
}return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var f,h,e,g=this.options;
if(g.containment==="parent"){g.containment=this.helper[0].parentNode
}if(g.containment==="document"||g.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(g.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(g.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(g.containment)){f=b(g.containment)[0];
h=b(g.containment).offset();
e=(b(f).css("overflow")!=="hidden");
this.containment=[h.left+(parseInt(b(f).css("borderLeftWidth"),10)||0)+(parseInt(b(f).css("paddingLeft"),10)||0)-this.margins.left,h.top+(parseInt(b(f).css("borderTopWidth"),10)||0)+(parseInt(b(f).css("paddingTop"),10)||0)-this.margins.top,h.left+(e?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(b(f).css("borderLeftWidth"),10)||0)-(parseInt(b(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,h.top+(e?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(b(f).css("borderTopWidth"),10)||0)-(parseInt(b(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(g,i){if(!i){i=this.position
}var f=g==="absolute"?1:-1,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(e[0].tagName);
return{top:(i.top+this.offset.relative.top*f+this.offset.parent.top*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(h?0:e.scrollTop()))*f)),left:(i.left+this.offset.relative.left*f+this.offset.parent.left*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*f))}
},_generatePosition:function(h){var j,i,k=this.options,g=h.pageX,f=h.pageY,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=(/(html|body)/i).test(e[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(h.pageX-this.offset.click.left<this.containment[0]){g=this.containment[0]+this.offset.click.left
}if(h.pageY-this.offset.click.top<this.containment[1]){f=this.containment[1]+this.offset.click.top
}if(h.pageX-this.offset.click.left>this.containment[2]){g=this.containment[2]+this.offset.click.left
}if(h.pageY-this.offset.click.top>this.containment[3]){f=this.containment[3]+this.offset.click.top
}}if(k.grid){j=this.originalPageY+Math.round((f-this.originalPageY)/k.grid[1])*k.grid[1];
f=this.containment?((j-this.offset.click.top>=this.containment[1]&&j-this.offset.click.top<=this.containment[3])?j:((j-this.offset.click.top>=this.containment[1])?j-k.grid[1]:j+k.grid[1])):j;
i=this.originalPageX+Math.round((g-this.originalPageX)/k.grid[0])*k.grid[0];
g=this.containment?((i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2])?i:((i-this.offset.click.left>=this.containment[0])?i-k.grid[0]:i+k.grid[0])):i
}}return{top:(f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(l?0:e.scrollTop())))),left:(g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():l?0:e.scrollLeft())))}
},_rearrange:function(j,h,f,g){f?f[0].appendChild(this.placeholder[0]):h.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?h.item[0]:h.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var e=this.counter;
this._delay(function(){if(e===this.counter){this.refreshPositions(!g)
}})
},_clear:function(f,g){this.reverting=false;
var e,h=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(e in this._storedCSS){if(this._storedCSS[e]==="auto"||this._storedCSS[e]==="static"){this._storedCSS[e]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!g){h.push(function(i){this._trigger("receive",i,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!g){h.push(function(i){this._trigger("update",i,this._uiHash())
})
}if(this!==this.currentContainer){if(!g){h.push(function(i){this._trigger("remove",i,this._uiHash())
});
h.push((function(i){return function(j){i._trigger("receive",j,this._uiHash(this))
}
}).call(this,this.currentContainer));
h.push((function(i){return function(j){i._trigger("update",j,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(e=this.containers.length-1;
e>=0;
e--){if(!g){h.push((function(i){return function(j){i._trigger("deactivate",j,this._uiHash(this))
}
}).call(this,this.containers[e]))
}if(this.containers[e].containerCache.over){h.push((function(i){return function(j){i._trigger("out",j,this._uiHash(this))
}
}).call(this,this.containers[e]));
this.containers[e].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!g){this._trigger("beforeStop",f,this._uiHash());
for(e=0;
e<h.length;
e++){h[e].call(this,f)
}this._trigger("stop",f,this._uiHash())
}this.fromOutside=false;
return false
}if(!g){this._trigger("beforeStop",f,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!g){for(e=0;
e<h.length;
e++){h[e].call(this,f)
}this._trigger("stop",f,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(b.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(e){var f=e||this;
return{helper:f.helper,placeholder:f.placeholder||b([]),position:f.position,originalPosition:f.originalPosition,offset:f.positionAbs,item:f.currentItem,sender:e?e.element:null}
}})
})(jQuery);
(function(a,c){var b="ui-effects-";
a.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(r,g){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",k=/^([\-+])=\s*(\d+\.?\d*)/,j=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1]*2.55,t[2]*2.55,t[3]*2.55,t[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]
}}],h=r.Color=function(u,v,t,w){return new r.Color.fn.parse(u,v,t,w)
},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},q={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},p=h.support={},e=r("<p>")[0],d,o=r.each;
e.style.cssText="background-color:rgba(1,1,1,.5)";
p.rgba=e.style.backgroundColor.indexOf("rgba")>-1;
o(m,function(t,u){u.cache="_"+t;
u.props.alpha={idx:3,type:"percent",def:1}
});
function l(u,w,v){var t=q[w.type]||{};
if(u==null){return(v||!w.def)?null:w.def
}u=t.floor?~~u:parseFloat(u);
if(isNaN(u)){return w.def
}if(t.mod){return(u+t.mod)%t.mod
}return 0>u?0:t.max<u?t.max:u
}function i(t){var v=h(),u=v._rgba=[];
t=t.toLowerCase();
o(j,function(A,B){var y,z=B.re.exec(t),x=z&&B.parse(z),w=B.space||"rgba";
if(x){y=v[w](x);
v[m[w].cache]=y[m[w].cache];
u=v._rgba=y._rgba;
return false
}});
if(u.length){if(u.join()==="0,0,0,0"){r.extend(u,d.transparent)
}return v
}return d[t]
}h.fn=r.extend(h.prototype,{parse:function(z,x,t,y){if(z===g){this._rgba=[null,null,null,null];
return this
}if(z.jquery||z.nodeType){z=r(z).css(x);
x=g
}var w=this,v=r.type(z),u=this._rgba=[];
if(x!==g){z=[z,x,t,y];
v="array"
}if(v==="string"){return this.parse(i(z)||d._default)
}if(v==="array"){o(m.rgba.props,function(A,B){u[B.idx]=l(z[B.idx],B)
});
return this
}if(v==="object"){if(z instanceof h){o(m,function(A,B){if(z[B.cache]){w[B.cache]=z[B.cache].slice()
}})
}else{o(m,function(B,C){var A=C.cache;
o(C.props,function(D,E){if(!w[A]&&C.to){if(D==="alpha"||z[D]==null){return
}w[A]=C.to(w._rgba)
}w[A][E.idx]=l(z[D],E,true)
});
if(w[A]&&r.inArray(null,w[A].slice(0,3))<0){w[A][3]=1;
if(C.from){w._rgba=C.from(w[A])
}}})
}return this
}},is:function(v){var t=h(v),w=true,u=this;
o(m,function(x,z){var A,y=t[z.cache];
if(y){A=u[z.cache]||z.to&&z.to(u._rgba)||[];
o(z.props,function(B,C){if(y[C.idx]!=null){w=(y[C.idx]===A[C.idx]);
return w
}})
}return w
});
return w
},_space:function(){var t=[],u=this;
o(m,function(v,w){if(u[w.cache]){t.push(v)
}});
return t.pop()
},transition:function(u,A){var v=h(u),w=v._space(),x=m[w],y=this.alpha()===0?h("transparent"):this,z=y[x.cache]||x.to(y._rgba),t=z.slice();
v=v[x.cache];
o(x.props,function(E,G){var D=G.idx,C=z[D],B=v[D],F=q[G.type]||{};
if(B===null){return
}if(C===null){t[D]=B
}else{if(F.mod){if(B-C>F.mod/2){C+=F.mod
}else{if(C-B>F.mod/2){C-=F.mod
}}}t[D]=l((B-C)*A+C,G)
}});
return this[w](t)
},blend:function(w){if(this._rgba[3]===1){return this
}var v=this._rgba.slice(),u=v.pop(),t=h(w)._rgba;
return h(r.map(v,function(x,y){return(1-u)*t[y]+u*x
}))
},toRgbaString:function(){var u="rgba(",t=r.map(this._rgba,function(w,x){return w==null?(x>2?1:0):w
});
if(t[3]===1){t.pop();
u="rgb("
}return u+t.join()+")"
},toHslaString:function(){var u="hsla(",t=r.map(this.hsla(),function(w,x){if(w==null){w=x>2?1:0
}if(x&&x<3){w=Math.round(w*100)+"%"
}return w
});
if(t[3]===1){t.pop();
u="hsl("
}return u+t.join()+")"
},toHexString:function(t){var u=this._rgba.slice(),v=u.pop();
if(t){u.push(~~(v*255))
}return"#"+r.map(u,function(w){w=(w||0).toString(16);
return w.length===1?"0"+w:w
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
h.fn.parse.prototype=h.fn;
function f(v,u,t){t=(t+1)%1;
if(t*6<1){return v+(u-v)*t*6
}if(t*2<1){return u
}if(t*3<2){return v+(u-v)*((2/3)-t)*6
}return v
}m.hsla.to=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]
}var t=v[0]/255,y=v[1]/255,z=v[2]/255,B=v[3],A=Math.max(t,y,z),w=Math.min(t,y,z),C=A-w,D=A+w,u=D*0.5,x,E;
if(w===A){x=0
}else{if(t===A){x=(60*(y-z)/C)+360
}else{if(y===A){x=(60*(z-t)/C)+120
}else{x=(60*(t-y)/C)+240
}}}if(C===0){E=0
}else{if(u<=0.5){E=C/D
}else{E=C/(2-D)
}}return[Math.round(x)%360,E,u,B==null?1:B]
};
m.hsla.from=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]
}var w=x[0]/360,v=x[1],u=x[2],t=x[3],y=u<=0.5?u*(1+v):u+v-u*v,z=2*u-y;
return[Math.round(f(z,y,w+(1/3))*255),Math.round(f(z,y,w)*255),Math.round(f(z,y,w-(1/3))*255),t]
};
o(m,function(u,w){var v=w.props,t=w.cache,y=w.to,x=w.from;
h.fn[u]=function(D){if(y&&!this[t]){this[t]=y(this._rgba)
}if(D===g){return this[t].slice()
}var A,C=r.type(D),z=(C==="array"||C==="object")?D:arguments,B=this[t].slice();
o(v,function(E,G){var F=z[C==="object"?E:G.idx];
if(F==null){F=B[G.idx]
}B[G.idx]=l(F,G)
});
if(x){A=h(x(B));
A[t]=B;
return A
}else{return h(B)
}};
o(v,function(z,A){if(h.fn[z]){return
}h.fn[z]=function(E){var G=r.type(E),D=(z==="alpha"?(this._hsla?"hsla":"rgba"):u),C=this[D](),F=C[A.idx],B;
if(G==="undefined"){return F
}if(G==="function"){E=E.call(this,F);
G=r.type(E)
}if(E==null&&A.empty){return this
}if(G==="string"){B=k.exec(E);
if(B){E=F+parseFloat(B[2])*(B[1]==="+"?1:-1)
}}C[A.idx]=E;
return this[D](C)
}
})
});
h.hook=function(u){var t=u.split(" ");
o(t,function(v,w){r.cssHooks[w]={set:function(A,B){var y,z,x="";
if(B!=="transparent"&&(r.type(B)!=="string"||(y=i(B)))){B=h(y||B);
if(!p.rgba&&B._rgba[3]!==1){z=w==="backgroundColor"?A.parentNode:A;
while((x===""||x==="transparent")&&z&&z.style){try{x=r.css(z,"backgroundColor");
z=z.parentNode
}catch(C){}}B=B.blend(x&&x!=="transparent"?x:"_default")
}B=B.toRgbaString()
}try{A.style[w]=B
}catch(C){}}};
r.fx.step[w]=function(x){if(!x.colorInit){x.start=h(x.elem,w);
x.end=h(x.end);
x.colorInit=true
}r.cssHooks[w].set(x.elem,x.start.transition(x.end,x.pos))
}
})
};
h.hook(n);
r.cssHooks.borderColor={expand:function(u){var t={};
o(["Top","Right","Bottom","Left"],function(w,v){t["border"+v+"Color"]=u
});
return t
}};
d=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,i){a.fx.step[i]=function(j){if(j.end!=="none"&&!j.setAttr||j.pos===1&&!j.setAttr){jQuery.style(j.elem,i,j.end);
j.setAttr=true
}}
});
function g(l){var i,h,j=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,k={};
if(j&&j.length&&j[0]&&j[j[0]]){h=j.length;
while(h--){i=j[h];
if(typeof j[i]==="string"){k[a.camelCase(i)]=j[i]
}}}else{for(i in j){if(typeof j[i]==="string"){k[i]=j[i]
}}}return k
}function d(h,j){var l={},i,k;
for(i in j){k=j[i];
if(h[i]!==k){if(!f[i]){if(a.fx.step[i]||!isNaN(parseFloat(k))){l[i]=k
}}}}return l
}if(!a.fn.addBack){a.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))
}
}a.effects.animateClass=function(h,i,l,k){var j=a.speed(i,l,k);
return this.queue(function(){var o=a(this),m=o.attr("class")||"",n,p=j.children?o.find("*").addBack():o;
p=p.map(function(){var q=a(this);
return{el:q,start:g(this)}
});
n=function(){a.each(e,function(q,r){if(h[r]){o[r+"Class"](h[r])
}})
};
n();
p=p.map(function(){this.end=g(this.el[0]);
this.diff=d(this.start,this.end);
return this
});
o.attr("class",m);
p=p.map(function(){var t=this,q=a.Deferred(),r=a.extend({},j,{queue:false,complete:function(){q.resolve(t)
}});
this.el.animate(this.diff,r);
return q.promise()
});
a.when.apply(a,p.get()).done(function(){n();
a.each(arguments,function(){var q=this.el;
a.each(this.diff,function(r){q.css(r,"")
})
});
j.complete.call(o[0])
})
})
};
a.fn.extend({addClass:(function(h){return function(j,i,l,k){return i?a.effects.animateClass.call(this,{add:j},i,l,k):h.apply(this,arguments)
}
})(a.fn.addClass),removeClass:(function(h){return function(j,i,l,k){return arguments.length>1?a.effects.animateClass.call(this,{remove:j},i,l,k):h.apply(this,arguments)
}
})(a.fn.removeClass),toggleClass:(function(h){return function(k,j,i,m,l){if(typeof j==="boolean"||j===c){if(!i){return h.apply(this,arguments)
}else{return a.effects.animateClass.call(this,(j?{add:k}:{remove:k}),i,m,l)
}}else{return a.effects.animateClass.call(this,{toggle:k},j,i,m)
}}
})(a.fn.toggleClass),switchClass:function(h,j,i,l,k){return a.effects.animateClass.call(this,{add:j,remove:h},i,l,k)
}})
})();
(function(){a.extend(a.effects,{version:"1.10.3",save:function(g,h){for(var f=0;
f<h.length;
f++){if(h[f]!==null){g.data(b+h[f],g[0].style[h[f]])
}}},restore:function(g,j){var h,f;
for(f=0;
f<j.length;
f++){if(j[f]!==null){h=g.data(b+j[f]);
if(h===c){h=""
}g.css(j[f],h)
}}},setMode:function(f,g){if(g==="toggle"){g=f.is(":hidden")?"show":"hide"
}return g
},getBaseline:function(g,h){var i,f;
switch(g[0]){case"top":i=0;
break;
case"middle":i=0.5;
break;
case"bottom":i=1;
break;
default:i=g[0]/h.height
}switch(g[1]){case"left":f=0;
break;
case"center":f=0.5;
break;
case"right":f=1;
break;
default:f=g[1]/h.width
}return{x:f,y:i}
},createWrapper:function(g){if(g.parent().is(".ui-effects-wrapper")){return g.parent()
}var h={width:g.outerWidth(true),height:g.outerHeight(true),"float":g.css("float")},k=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:g.width(),height:g.height()},j=document.activeElement;
try{j.id
}catch(i){j=document.body
}g.wrap(k);
if(g[0]===j||a.contains(g[0],j)){a(j).focus()
}k=g.parent();
if(g.css("position")==="static"){k.css({position:"relative"});
g.css({position:"relative"})
}else{a.extend(h,{position:g.css("position"),zIndex:g.css("z-index")});
a.each(["top","left","bottom","right"],function(l,m){h[m]=g.css(m);
if(isNaN(parseInt(h[m],10))){h[m]="auto"
}});
g.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}g.css(f);
return k.css(h).show()
},removeWrapper:function(f){var g=document.activeElement;
if(f.parent().is(".ui-effects-wrapper")){f.parent().replaceWith(f);
if(f[0]===g||a.contains(f[0],g)){a(g).focus()
}}return f
},setTransition:function(g,i,f,h){h=h||{};
a.each(i,function(k,j){var l=g.cssUnit(j);
if(l[0]>0){h[j]=l[0]*f+l[1]
}});
return h
}});
function d(g,f,h,i){if(a.isPlainObject(g)){f=g;
g=g.effect
}g={effect:g};
if(f==null){f={}
}if(a.isFunction(f)){i=f;
h=null;
f={}
}if(typeof f==="number"||a.fx.speeds[f]){i=h;
h=f;
f={}
}if(a.isFunction(h)){i=h;
h=null
}if(f){a.extend(g,f)
}h=h||f.duration;
g.duration=a.fx.off?0:typeof h==="number"?h:h in a.fx.speeds?a.fx.speeds[h]:a.fx.speeds._default;
g.complete=i||f.complete;
return g
}function e(f){if(!f||typeof f==="number"||a.fx.speeds[f]){return true
}if(typeof f==="string"&&!a.effects.effect[f]){return true
}if(a.isFunction(f)){return true
}if(typeof f==="object"&&!f.effect){return true
}return false
}a.fn.extend({effect:function(){var h=d.apply(this,arguments),j=h.mode,f=h.queue,g=a.effects.effect[h.effect];
if(a.fx.off||!g){if(j){return this[j](h.duration,h.complete)
}else{return this.each(function(){if(h.complete){h.complete.call(this)
}})
}}function i(m){var n=a(this),l=h.complete,o=h.mode;
function k(){if(a.isFunction(l)){l.call(n[0])
}if(a.isFunction(m)){m()
}}if(n.is(":hidden")?o==="hide":o==="show"){n[o]();
k()
}else{g.call(n[0],h,k)
}}return f===false?this.each(i):this.queue(f||"fx",i)
},show:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)
}else{var g=d.apply(this,arguments);
g.mode="show";
return this.effect.call(this,g)
}}
})(a.fn.show),hide:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)
}else{var g=d.apply(this,arguments);
g.mode="hide";
return this.effect.call(this,g)
}}
})(a.fn.hide),toggle:(function(f){return function(h){if(e(h)||typeof h==="boolean"){return f.apply(this,arguments)
}else{var g=d.apply(this,arguments);
g.mode="toggle";
return this.effect.call(this,g)
}}
})(a.fn.toggle),cssUnit:function(f){var g=this.css(f),h=[];
a.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]
}});
return h
}})
})();
(function(){var d={};
a.each(["Quad","Cubic","Quart","Quint","Expo"],function(f,e){d[e]=function(g){return Math.pow(g,f+2)
}
});
a.extend(d,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)
},Circ:function(e){return 1-Math.sqrt(1-e*e)
},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)
},Back:function(e){return e*e*(3*e-2)
},Bounce:function(g){var e,f=4;
while(g<((e=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((e*3-2)/22-g,2)
}});
a.each(d,function(f,e){a.easing["easeIn"+f]=e;
a.easing["easeOut"+f]=function(g){return 1-e(1-g)
};
a.easing["easeInOut"+f]=function(g){return g<0.5?e(g*2)/2:1-e(g*-2+2)/2
}
})
})()
})(jQuery);
(function(d,e){var b=0,c={},a={};
c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide";
a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show";
d.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var f=this.options;
this.prevShow=this.prevHide=d();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!f.collapsible&&(f.active===false||f.active==null)){f.active=0
}this._processPanels();
if(f.active<0){f.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?d():this.active.next(),content:!this.active.length?d():this.active.next()}
},_createIcons:function(){var f=this.options.icons;
if(f){d("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var f;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){f.css("height","")
}},_setOption:function(f,g){if(f==="active"){this._activate(g);
return
}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(g)
}this._super(f,g);
if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)
}if(f==="icons"){this._destroyIcons();
if(g){this._createIcons()
}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)
}},_keydown:function(i){if(i.altKey||i.ctrlKey){return
}var j=d.ui.keyCode,h=this.headers.length,f=this.headers.index(i.target),g=false;
switch(i.keyCode){case j.RIGHT:case j.DOWN:g=this.headers[(f+1)%h];
break;
case j.LEFT:case j.UP:g=this.headers[(f-1+h)%h];
break;
case j.SPACE:case j.ENTER:this._eventHandler(i);
break;
case j.HOME:g=this.headers[0];
break;
case j.END:g=this.headers[h-1];
break
}if(g){d(i.target).attr("tabIndex",-1);
d(g).attr("tabIndex",0);
g.focus();
i.preventDefault()
}},_panelKeyDown:function(f){if(f.keyCode===d.ui.keyCode.UP&&f.ctrlKey){d(f.currentTarget).prev().focus()
}},refresh:function(){var f=this.options;
this._processPanels();
if((f.active===false&&f.collapsible===true)||!this.headers.length){f.active=false;
this.active=d()
}else{if(f.active===false){this._activate(0)
}else{if(this.active.length&&!d.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){f.active=false;
this.active=d()
}else{this._activate(Math.max(0,f.active-1))
}}else{f.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var j,h=this.options,g=h.heightStyle,i=this.element.parent(),f=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b);
this.active=this._findActive(h.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(n){var o=d(this),m=o.attr("id"),k=o.next(),l=k.attr("id");
if(!m){m=f+"-header-"+n;
o.attr("id",m)
}if(!l){l=f+"-panel-"+n;
k.attr("id",l)
}o.attr("aria-controls",l);
k.attr("aria-labelledby",m)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})
}this._createIcons();
this._setupEvents(h.event);
if(g==="fill"){j=i.height();
this.element.siblings(":visible").each(function(){var l=d(this),k=l.css("position");
if(k==="absolute"||k==="fixed"){return
}j-=l.outerHeight(true)
});
this.headers.each(function(){j-=d(this).outerHeight(true)
});
this.headers.next().each(function(){d(this).height(Math.max(0,j-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{if(g==="auto"){j=0;
this.headers.next().each(function(){j=Math.max(j,d(this).css("height","").height())
}).height(j)
}}},_activate:function(f){var g=this._findActive(f)[0];
if(g===this.active[0]){return
}g=g||this.active[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:d.noop})
},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):d()
},_setupEvents:function(g){var f={keydown:"_keydown"};
if(g){d.each(g.split(" "),function(i,h){f[h]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,f);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(f){var n=this.options,i=this.active,j=d(f.currentTarget),l=j[0]===i[0],g=l&&n.collapsible,h=g?d():j.next(),k=i.next(),m={oldHeader:i,oldPanel:k,newHeader:g?d():j,newPanel:h};
f.preventDefault();
if((l&&!n.collapsible)||(this._trigger("beforeActivate",f,m)===false)){return
}n.active=g?false:this.headers.index(j);
this.active=l?d():j;
this._toggle(m);
i.removeClass("ui-accordion-header-active ui-state-active");
if(n.icons){i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)
}if(!l){j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(n.icons){j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)
}j.next().addClass("ui-accordion-content-active")
}},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=f;
this.prevHide=g;
if(this.options.animate){this._animate(f,g,h)
}else{g.hide();
f.show();
this._toggleComplete(h)
}g.attr({"aria-expanded":"false","aria-hidden":"true"});
g.prev().attr("aria-selected","false");
if(f.length&&g.length){g.prev().attr("tabIndex",-1)
}else{if(f.length){this.headers.filter(function(){return d(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(f,n,j){var m,l,i,k=this,o=0,p=f.length&&(!n.length||(f.index()<n.index())),h=this.options.animate||{},q=p&&h.down||h,g=function(){k._toggleComplete(j)
};
if(typeof q==="number"){i=q
}if(typeof q==="string"){l=q
}l=l||q.easing||h.easing;
i=i||q.duration||h.duration;
if(!n.length){return f.animate(a,i,l,g)
}if(!f.length){return n.animate(c,i,l,g)
}m=f.show().outerHeight();
n.animate(c,{duration:i,easing:l,step:function(r,t){t.now=Math.round(r)
}});
f.hide().animate(a,{duration:i,easing:l,complete:g,step:function(r,t){t.now=Math.round(r);
if(t.prop!=="height"){o+=t.now
}else{if(k.options.heightStyle!=="content"){t.now=Math.round(m-n.outerHeight()-o);
o=0
}}}})
},_toggleComplete:function(g){var f=g.oldPanel;
f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(f.length){f.parent()[0].className=f.parent()[0].className
}this._trigger("activate",null,g)
}})
})(jQuery);
(function(a,b){var c=0;
a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var f,d,g,i=this.element[0].nodeName.toLowerCase(),h=i==="textarea",e=i==="input";
this.isMultiLine=h?true:e?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[h||e?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(j){if(this.element.prop("readOnly")){f=true;
g=true;
d=true;
return
}f=false;
g=false;
d=false;
var k=a.ui.keyCode;
switch(j.keyCode){case k.PAGE_UP:f=true;
this._move("previousPage",j);
break;
case k.PAGE_DOWN:f=true;
this._move("nextPage",j);
break;
case k.UP:f=true;
this._keyEvent("previous",j);
break;
case k.DOWN:f=true;
this._keyEvent("next",j);
break;
case k.ENTER:case k.NUMPAD_ENTER:if(this.menu.active){f=true;
j.preventDefault();
this.menu.select(j)
}break;
case k.TAB:if(this.menu.active){this.menu.select(j)
}break;
case k.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(j);
j.preventDefault()
}break;
default:d=true;
this._searchTimeout(j);
break
}},keypress:function(j){if(f){f=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){j.preventDefault()
}return
}if(d){return
}var k=a.ui.keyCode;
switch(j.keyCode){case k.PAGE_UP:this._move("previousPage",j);
break;
case k.PAGE_DOWN:this._move("nextPage",j);
break;
case k.UP:this._keyEvent("previous",j);
break;
case k.DOWN:this._keyEvent("next",j);
break
}},input:function(j){if(g){g=false;
j.preventDefault();
return
}this._searchTimeout(j)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(j){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(j);
this._change(j)
}});
this._initSource();
this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(j){j.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var k=this.menu.element[0];
if(!a(j.target).closest(".ui-menu-item").length){this._delay(function(){var l=this;
this.document.one("mousedown",function(m){if(m.target!==l.element[0]&&m.target!==k&&!a.contains(k,m.target)){l.close()
}})
})
}},menufocus:function(k,l){if(this.isNewMenu){this.isNewMenu=false;
if(k.originalEvent&&/^mouse/.test(k.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){a(k.target).trigger(k.originalEvent)
});
return
}}var j=l.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",k,{item:j})){if(k.originalEvent&&/^key/.test(k.originalEvent.type)){this._value(j.value)
}}else{this.liveRegion.text(j.value)
}},menuselect:function(l,m){var k=m.item.data("ui-autocomplete-item"),j=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=j;
this._delay(function(){this.previous=j;
this.selectedItem=k
})
}if(false!==this._trigger("select",l,{item:k})){this._value(k.value)
}this.term=this._value();
this.close(l);
this.selectedItem=k
}});
this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(d,e){this._super(d,e);
if(d==="source"){this._initSource()
}if(d==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var d=this.options.appendTo;
if(d){d=d.jquery||d.nodeType?a(d):this.document.find(d).eq(0)
}if(!d){d=this.element.closest(".ui-front")
}if(!d.length){d=this.document[0].body
}return d
},_initSource:function(){var f,d,e=this;
if(a.isArray(this.options.source)){f=this.options.source;
this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))
}
}else{if(typeof this.options.source==="string"){d=this.options.source;
this.source=function(h,g){if(e.xhr){e.xhr.abort()
}e.xhr=a.ajax({url:d,data:h,dataType:"json",success:function(i){g(i)
},error:function(){g([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(d){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,d)
}},this.options.delay)
},search:function(e,d){e=e!=null?e:this._value();
this.term=this._value();
if(e.length<this.options.minLength){return this.close(d)
}if(this._trigger("search",d)===false){return
}return this._search(e)
},_search:function(d){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:d},this._response())
},_response:function(){var e=this,d=++c;
return function(f){if(d===c){e.__response(f)
}e.pending--;
if(!e.pending){e.element.removeClass("ui-autocomplete-loading")
}}
},__response:function(d){if(d){d=this._normalize(d)
}this._trigger("response",null,{content:d});
if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);
this._trigger("open")
}else{this._close()
}},close:function(d){this.cancelSearch=true;
this._close(d)
},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",d)
}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})
}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d
}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}
}return a.extend({label:e.label||e.value,value:e.value||e.label},e)
})
},_suggest:function(d){var e=this.menu.element.empty();
this._renderMenu(e,d);
this.isNewMenu=true;
this.menu.refresh();
e.show();
this._resizeMenu();
e.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var d=this.menu.element;
d.outerWidth(Math.max(d.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(e,d){var f=this;
a.each(d,function(g,h){f._renderItemData(e,h)
})
},_renderItemData:function(d,e){return this._renderItem(d,e).data("ui-autocomplete-item",e)
},_renderItem:function(d,e){return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);
return
}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);
this.menu.blur();
return
}this.menu[e](d)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);
d.preventDefault()
}}});
a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");
return a.grep(f,function(g){return e.test(g.label||g.value||g)
})
}});
a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(e){var d;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(e&&e.length){d=this.options.messages.results(e.length)
}else{d=this.options.messages.noResults
}this.liveRegion.text(d)
}})
}(jQuery));
(function(f,b){var k,e,a,h,i="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var l=f(this);
setTimeout(function(){l.find(":ui-button").button("refresh")
},1)
},d=function(m){var l=m.name,n=m.form,o=f([]);
if(l){l=l.replace(/'/g,"\\'");
if(n){o=f(n).find("[name='"+l+"']")
}else{o=f("[name='"+l+"']",m.ownerDocument).filter(function(){return !this.form
})
}}return o
};
f.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var o=this,m=this.options,p=this.type==="checkbox"||this.type==="radio",n=!p?"ui-state-active":"",l="ui-state-focus";
if(m.label===null){m.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(m.disabled){return
}if(this===k){f(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(m.disabled){return
}f(this).removeClass(n)
}).bind("click"+this.eventNamespace,function(q){if(m.disabled){q.preventDefault();
q.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(l)
}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(l)
});
if(p){this.element.bind("change"+this.eventNamespace,function(){if(h){return
}o.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(q){if(m.disabled){return
}h=false;
e=q.pageX;
a=q.pageY
}).bind("mouseup"+this.eventNamespace,function(q){if(m.disabled){return
}if(e!==q.pageX||a!==q.pageY){h=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false
}f(this).addClass("ui-state-active");
o.buttonElement.attr("aria-pressed","true");
var q=o.element[0];
d(q).not(q).map(function(){return f(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(m.disabled){return false
}f(this).addClass("ui-state-active");
k=this;
o.document.one("mouseup",function(){k=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(m.disabled){return false
}f(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(q){if(m.disabled){return false
}if(q.keyCode===f.ui.keyCode.SPACE||q.keyCode===f.ui.keyCode.ENTER){f(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){f(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(q){if(q.keyCode===f.ui.keyCode.SPACE){f(this).click()
}})
}}}this._setOption("disabled",m.disabled);
this._resetButton()
},_determineButtonType:function(){var l,n,m;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){l=this.element.parents().last();
n="label[for='"+this.element.attr("id")+"']";
this.buttonElement=l.find(n);
if(!this.buttonElement.length){l=l.length?l.siblings():this.element.siblings();
this.buttonElement=l.filter(n);
if(!this.buttonElement.length){this.buttonElement=l.find(n)
}}this.element.addClass("ui-helper-hidden-accessible");
m=this.element.is(":checked");
if(m){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",m)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(i+" "+c+" "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(l,m){this._super(l,m);
if(l==="disabled"){if(m){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return
}this._resetButton()
},refresh:function(){var l=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(l!==this.options.disabled){this._setOption("disabled",l)
}if(this.type==="radio"){d(this.element[0]).each(function(){if(f(this).is(":checked")){f(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var p=this.buttonElement.removeClass(g),n=f("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(),m=this.options.icons,l=m.primary&&m.secondary,o=[];
if(m.primary||m.secondary){if(this.options.text){o.push("ui-button-text-icon"+(l?"s":(m.primary?"-primary":"-secondary")))
}if(m.primary){p.prepend("<span class='ui-button-icon-primary ui-icon "+m.primary+"'></span>")
}if(m.secondary){p.append("<span class='ui-button-icon-secondary ui-icon "+m.secondary+"'></span>")
}if(!this.options.text){o.push(l?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){p.attr("title",f.trim(n))
}}}else{o.push("ui-button-text-only")
}p.addClass(o.join(" "))
}});
f.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(l,m){if(l==="disabled"){this.buttons.button("option",l,m)
}this._super(l,m)
},refresh:function(){var l=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(l?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(e,g){e.extend(e.ui,{datepicker:{version:"1.10.3"}});
var f="datepicker",c;
function b(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
e.extend(this._defaults,this.regional[""]);
this.dpDiv=d(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}e.extend(b.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(h){a(this._defaults,h||{});
return this
},_attachDatepicker:function(k,h){var l,j,i;
l=k.nodeName.toLowerCase();
j=(l==="div"||l==="span");
if(!k.id){this.uuid+=1;
k.id="dp"+this.uuid
}i=this._newInst(e(k),j);
i.settings=e.extend({},h||{});
if(l==="input"){this._connectDatepicker(k,i)
}else{if(j){this._inlineDatepicker(k,i)
}}},_newInst:function(i,h){var j=i[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:j,input:i,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:h,dpDiv:(!h?this.dpDiv:d(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(j,i){var h=e(j);
i.append=e([]);
i.trigger=e([]);
if(h.hasClass(this.markerClassName)){return
}this._attachments(h,i);
h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(i);
e.data(j,f,i);
if(i.settings.disabled){this._disableDatepicker(j)
}},_attachments:function(j,m){var i,l,h,n=this._get(m,"appendText"),k=this._get(m,"isRTL");
if(m.append){m.append.remove()
}if(n){m.append=e("<span class='"+this._appendClass+"'>"+n+"</span>");
j[k?"before":"after"](m.append)
}j.unbind("focus",this._showDatepicker);
if(m.trigger){m.trigger.remove()
}i=this._get(m,"showOn");
if(i==="focus"||i==="both"){j.focus(this._showDatepicker)
}if(i==="button"||i==="both"){l=this._get(m,"buttonText");
h=this._get(m,"buttonImage");
m.trigger=e(this._get(m,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:h,alt:l,title:l}):e("<button type='button'></button>").addClass(this._triggerClass).html(!h?l:e("<img/>").attr({src:h,alt:l,title:l})));
j[k?"before":"after"](m.trigger);
m.trigger.click(function(){if(e.datepicker._datepickerShowing&&e.datepicker._lastInput===j[0]){e.datepicker._hideDatepicker()
}else{if(e.datepicker._datepickerShowing&&e.datepicker._lastInput!==j[0]){e.datepicker._hideDatepicker();
e.datepicker._showDatepicker(j[0])
}else{e.datepicker._showDatepicker(j[0])
}}return false
})
}},_autoSize:function(o){if(this._get(o,"autoSize")&&!o.inline){var l,j,k,n,m=new Date(2009,12-1,20),h=this._get(o,"dateFormat");
if(h.match(/[DM]/)){l=function(i){j=0;
k=0;
for(n=0;
n<i.length;
n++){if(i[n].length>j){j=i[n].length;
k=n
}}return k
};
m.setMonth(l(this._get(o,(h.match(/MM/)?"monthNames":"monthNamesShort"))));
m.setDate(l(this._get(o,(h.match(/DD/)?"dayNames":"dayNamesShort")))+20-m.getDay())
}o.input.attr("size",this._formatDate(o,m).length)
}},_inlineDatepicker:function(i,h){var j=e(i);
if(j.hasClass(this.markerClassName)){return
}j.addClass(this.markerClassName).append(h.dpDiv);
e.data(i,f,h);
this._setDate(h,this._getDefaultDate(h),true);
this._updateDatepicker(h);
this._updateAlternate(h);
if(h.settings.disabled){this._disableDatepicker(i)
}h.dpDiv.css("display","block")
},_dialogDatepicker:function(o,i,m,j,n){var h,r,l,q,p,k=this._dialogInst;
if(!k){this.uuid+=1;
h="dp"+this.uuid;
this._dialogInput=e("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
e("body").append(this._dialogInput);
k=this._dialogInst=this._newInst(this._dialogInput,false);
k.settings={};
e.data(this._dialogInput[0],f,k)
}a(k.settings,j||{});
i=(i&&i.constructor===Date?this._formatDate(k,i):i);
this._dialogInput.val(i);
this._pos=(n?(n.length?n:[n.pageX,n.pageY]):null);
if(!this._pos){r=document.documentElement.clientWidth;
l=document.documentElement.clientHeight;
q=document.documentElement.scrollLeft||document.body.scrollLeft;
p=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(r/2)-100+q,(l/2)-150+p]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
k.settings.onSelect=m;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(e.blockUI){e.blockUI(this.dpDiv)
}e.data(this._dialogInput[0],f,k);
return this
},_destroyDatepicker:function(j){var k,h=e(j),i=e.data(j,f);
if(!h.hasClass(this.markerClassName)){return
}k=j.nodeName.toLowerCase();
e.removeData(j,f);
if(k==="input"){i.append.remove();
i.trigger.remove();
h.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(k==="div"||k==="span"){h.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(k){var l,j,h=e(k),i=e.data(k,f);
if(!h.hasClass(this.markerClassName)){return
}l=k.nodeName.toLowerCase();
if(l==="input"){k.disabled=false;
i.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(l==="div"||l==="span"){j=h.children("."+this._inlineClass);
j.children().removeClass("ui-state-disabled");
j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=e.map(this._disabledInputs,function(m){return(m===k?null:m)
})
},_disableDatepicker:function(k){var l,j,h=e(k),i=e.data(k,f);
if(!h.hasClass(this.markerClassName)){return
}l=k.nodeName.toLowerCase();
if(l==="input"){k.disabled=true;
i.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(l==="div"||l==="span"){j=h.children("."+this._inlineClass);
j.children().addClass("ui-state-disabled");
j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=e.map(this._disabledInputs,function(m){return(m===k?null:m)
});
this._disabledInputs[this._disabledInputs.length]=k
},_isDisabledDatepicker:function(j){if(!j){return false
}for(var h=0;
h<this._disabledInputs.length;
h++){if(this._disabledInputs[h]===j){return true
}}return false
},_getInst:function(i){try{return e.data(i,f)
}catch(h){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(n,i,m){var j,h,l,o,k=this._getInst(n);
if(arguments.length===2&&typeof i==="string"){return(i==="defaults"?e.extend({},e.datepicker._defaults):(k?(i==="all"?e.extend({},k.settings):this._get(k,i)):null))
}j=i||{};
if(typeof i==="string"){j={};
j[i]=m
}if(k){if(this._curInst===k){this._hideDatepicker()
}h=this._getDateDatepicker(n,true);
l=this._getMinMaxDate(k,"min");
o=this._getMinMaxDate(k,"max");
a(k.settings,j);
if(l!==null&&j.dateFormat!==g&&j.minDate===g){k.settings.minDate=this._formatDate(k,l)
}if(o!==null&&j.dateFormat!==g&&j.maxDate===g){k.settings.maxDate=this._formatDate(k,o)
}if("disabled" in j){if(j.disabled){this._disableDatepicker(n)
}else{this._enableDatepicker(n)
}}this._attachments(e(n),k);
this._autoSize(k);
this._setDate(k,h);
this._updateAlternate(k);
this._updateDatepicker(k)
}},_changeDatepicker:function(j,h,i){this._optionDatepicker(j,h,i)
},_refreshDatepicker:function(i){var h=this._getInst(i);
if(h){this._updateDatepicker(h)
}},_setDateDatepicker:function(j,h){var i=this._getInst(j);
if(i){this._setDate(i,h);
this._updateDatepicker(i);
this._updateAlternate(i)
}},_getDateDatepicker:function(j,h){var i=this._getInst(j);
if(i&&!i.inline){this._setDateFromField(i,h)
}return(i?this._getDate(i):null)
},_doKeyDown:function(k){var i,h,m,l=e.datepicker._getInst(k.target),n=true,j=l.dpDiv.is(".ui-datepicker-rtl");
l._keyEvent=true;
if(e.datepicker._datepickerShowing){switch(k.keyCode){case 9:e.datepicker._hideDatepicker();
n=false;
break;
case 13:m=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",l.dpDiv);
if(m[0]){e.datepicker._selectDay(k.target,l.selectedMonth,l.selectedYear,m[0])
}i=e.datepicker._get(l,"onSelect");
if(i){h=e.datepicker._formatDate(l);
i.apply((l.input?l.input[0]:null),[h,l])
}else{e.datepicker._hideDatepicker()
}return false;
case 27:e.datepicker._hideDatepicker();
break;
case 33:e.datepicker._adjustDate(k.target,(k.ctrlKey?-e.datepicker._get(l,"stepBigMonths"):-e.datepicker._get(l,"stepMonths")),"M");
break;
case 34:e.datepicker._adjustDate(k.target,(k.ctrlKey?+e.datepicker._get(l,"stepBigMonths"):+e.datepicker._get(l,"stepMonths")),"M");
break;
case 35:if(k.ctrlKey||k.metaKey){e.datepicker._clearDate(k.target)
}n=k.ctrlKey||k.metaKey;
break;
case 36:if(k.ctrlKey||k.metaKey){e.datepicker._gotoToday(k.target)
}n=k.ctrlKey||k.metaKey;
break;
case 37:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,(j?+1:-1),"D")
}n=k.ctrlKey||k.metaKey;
if(k.originalEvent.altKey){e.datepicker._adjustDate(k.target,(k.ctrlKey?-e.datepicker._get(l,"stepBigMonths"):-e.datepicker._get(l,"stepMonths")),"M")
}break;
case 38:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,-7,"D")
}n=k.ctrlKey||k.metaKey;
break;
case 39:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,(j?-1:+1),"D")
}n=k.ctrlKey||k.metaKey;
if(k.originalEvent.altKey){e.datepicker._adjustDate(k.target,(k.ctrlKey?+e.datepicker._get(l,"stepBigMonths"):+e.datepicker._get(l,"stepMonths")),"M")
}break;
case 40:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,+7,"D")
}n=k.ctrlKey||k.metaKey;
break;
default:n=false
}}else{if(k.keyCode===36&&k.ctrlKey){e.datepicker._showDatepicker(this)
}else{n=false
}}if(n){k.preventDefault();
k.stopPropagation()
}},_doKeyPress:function(j){var i,h,k=e.datepicker._getInst(j.target);
if(e.datepicker._get(k,"constrainInput")){i=e.datepicker._possibleChars(e.datepicker._get(k,"dateFormat"));
h=String.fromCharCode(j.charCode==null?j.keyCode:j.charCode);
return j.ctrlKey||j.metaKey||(h<" "||!i||i.indexOf(h)>-1)
}},_doKeyUp:function(j){var h,k=e.datepicker._getInst(j.target);
if(k.input.val()!==k.lastVal){try{h=e.datepicker.parseDate(e.datepicker._get(k,"dateFormat"),(k.input?k.input.val():null),e.datepicker._getFormatConfig(k));
if(h){e.datepicker._setDateFromField(k);
e.datepicker._updateAlternate(k);
e.datepicker._updateDatepicker(k)
}}catch(i){}}return true
},_showDatepicker:function(i){i=i.target||i;
if(i.nodeName.toLowerCase()!=="input"){i=e("input",i.parentNode)[0]
}if(e.datepicker._isDisabledDatepicker(i)||e.datepicker._lastInput===i){return
}var k,o,j,m,n,h,l;
k=e.datepicker._getInst(i);
if(e.datepicker._curInst&&e.datepicker._curInst!==k){e.datepicker._curInst.dpDiv.stop(true,true);
if(k&&e.datepicker._datepickerShowing){e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])
}}o=e.datepicker._get(k,"beforeShow");
j=o?o.apply(i,[i,k]):{};
if(j===false){return
}a(k.settings,j);
k.lastVal=null;
e.datepicker._lastInput=i;
e.datepicker._setDateFromField(k);
if(e.datepicker._inDialog){i.value=""
}if(!e.datepicker._pos){e.datepicker._pos=e.datepicker._findPos(i);
e.datepicker._pos[1]+=i.offsetHeight
}m=false;
e(i).parents().each(function(){m|=e(this).css("position")==="fixed";
return !m
});
n={left:e.datepicker._pos[0],top:e.datepicker._pos[1]};
e.datepicker._pos=null;
k.dpDiv.empty();
k.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
e.datepicker._updateDatepicker(k);
n=e.datepicker._checkOffset(k,n,m);
k.dpDiv.css({position:(e.datepicker._inDialog&&e.blockUI?"static":(m?"fixed":"absolute")),display:"none",left:n.left+"px",top:n.top+"px"});
if(!k.inline){h=e.datepicker._get(k,"showAnim");
l=e.datepicker._get(k,"duration");
k.dpDiv.zIndex(e(i).zIndex()+1);
e.datepicker._datepickerShowing=true;
if(e.effects&&e.effects.effect[h]){k.dpDiv.show(h,e.datepicker._get(k,"showOptions"),l)
}else{k.dpDiv[h||"show"](h?l:null)
}if(e.datepicker._shouldFocusInput(k)){k.input.focus()
}e.datepicker._curInst=k
}},_updateDatepicker:function(j){this.maxRows=4;
c=j;
j.dpDiv.empty().append(this._generateHTML(j));
this._attachHandlers(j);
j.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var l,h=this._getNumberOfMonths(j),k=h[1],i=17;
j.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(k>1){j.dpDiv.addClass("ui-datepicker-multi-"+k).css("width",(i*k)+"em")
}j.dpDiv[(h[0]!==1||h[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
j.dpDiv[(this._get(j,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(j===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(j)){j.input.focus()
}if(j.yearshtml){l=j.yearshtml;
setTimeout(function(){if(l===j.yearshtml&&j.yearshtml){j.dpDiv.find("select.ui-datepicker-year:first").replaceWith(j.yearshtml)
}l=j.yearshtml=null
},0)
}},_shouldFocusInput:function(h){return h.input&&h.input.is(":visible")&&!h.input.is(":disabled")&&!h.input.is(":focus")
},_checkOffset:function(m,k,j){var l=m.dpDiv.outerWidth(),p=m.dpDiv.outerHeight(),o=m.input?m.input.outerWidth():0,h=m.input?m.input.outerHeight():0,n=document.documentElement.clientWidth+(j?0:e(document).scrollLeft()),i=document.documentElement.clientHeight+(j?0:e(document).scrollTop());
k.left-=(this._get(m,"isRTL")?(l-o):0);
k.left-=(j&&k.left===m.input.offset().left)?e(document).scrollLeft():0;
k.top-=(j&&k.top===(m.input.offset().top+h))?e(document).scrollTop():0;
k.left-=Math.min(k.left,(k.left+l>n&&n>l)?Math.abs(k.left+l-n):0);
k.top-=Math.min(k.top,(k.top+p>i&&i>p)?Math.abs(p+h):0);
return k
},_findPos:function(k){var h,j=this._getInst(k),i=this._get(j,"isRTL");
while(k&&(k.type==="hidden"||k.nodeType!==1||e.expr.filters.hidden(k))){k=k[i?"previousSibling":"nextSibling"]
}h=e(k).offset();
return[h.left,h.top]
},_hideDatepicker:function(j){var i,m,l,h,k=this._curInst;
if(!k||(j&&k!==e.data(j,f))){return
}if(this._datepickerShowing){i=this._get(k,"showAnim");
m=this._get(k,"duration");
l=function(){e.datepicker._tidyDialog(k)
};
if(e.effects&&(e.effects.effect[i]||e.effects[i])){k.dpDiv.hide(i,e.datepicker._get(k,"showOptions"),m,l)
}else{k.dpDiv[(i==="slideDown"?"slideUp":(i==="fadeIn"?"fadeOut":"hide"))]((i?m:null),l)
}if(!i){l()
}this._datepickerShowing=false;
h=this._get(k,"onClose");
if(h){h.apply((k.input?k.input[0]:null),[(k.input?k.input.val():""),k])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(e.blockUI){e.unblockUI();
e("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(h){h.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(i){if(!e.datepicker._curInst){return
}var h=e(i.target),j=e.datepicker._getInst(h[0]);
if(((h[0].id!==e.datepicker._mainDivId&&h.parents("#"+e.datepicker._mainDivId).length===0&&!h.hasClass(e.datepicker.markerClassName)&&!h.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&!(e.datepicker._inDialog&&e.blockUI)))||(h.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==j)){e.datepicker._hideDatepicker()
}},_adjustDate:function(l,k,j){var i=e(l),h=this._getInst(i[0]);
if(this._isDisabledDatepicker(i[0])){return
}this._adjustInstDate(h,k+(j==="M"?this._get(h,"showCurrentAtPos"):0),j);
this._updateDatepicker(h)
},_gotoToday:function(k){var h,j=e(k),i=this._getInst(j[0]);
if(this._get(i,"gotoCurrent")&&i.currentDay){i.selectedDay=i.currentDay;
i.drawMonth=i.selectedMonth=i.currentMonth;
i.drawYear=i.selectedYear=i.currentYear
}else{h=new Date();
i.selectedDay=h.getDate();
i.drawMonth=i.selectedMonth=h.getMonth();
i.drawYear=i.selectedYear=h.getFullYear()
}this._notifyChange(i);
this._adjustDate(j)
},_selectMonthYear:function(l,h,k){var j=e(l),i=this._getInst(j[0]);
i["selected"+(k==="M"?"Month":"Year")]=i["draw"+(k==="M"?"Month":"Year")]=parseInt(h.options[h.selectedIndex].value,10);
this._notifyChange(i);
this._adjustDate(j)
},_selectDay:function(m,k,h,l){var i,j=e(m);
if(e(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(j[0])){return
}i=this._getInst(j[0]);
i.selectedDay=i.currentDay=e("a",l).html();
i.selectedMonth=i.currentMonth=k;
i.selectedYear=i.currentYear=h;
this._selectDate(m,this._formatDate(i,i.currentDay,i.currentMonth,i.currentYear))
},_clearDate:function(i){var h=e(i);
this._selectDate(h,"")
},_selectDate:function(l,h){var i,k=e(l),j=this._getInst(k[0]);
h=(h!=null?h:this._formatDate(j));
if(j.input){j.input.val(h)
}this._updateAlternate(j);
i=this._get(j,"onSelect");
if(i){i.apply((j.input?j.input[0]:null),[h,j])
}else{if(j.input){j.input.trigger("change")
}}if(j.inline){this._updateDatepicker(j)
}else{this._hideDatepicker();
this._lastInput=j.input[0];
if(typeof(j.input[0])!=="object"){j.input.focus()
}this._lastInput=null
}},_updateAlternate:function(l){var k,j,h,i=this._get(l,"altField");
if(i){k=this._get(l,"altFormat")||this._get(l,"dateFormat");
j=this._getDate(l);
h=this.formatDate(k,j,this._getFormatConfig(l));
e(i).each(function(){e(this).val(h)
})
}},noWeekends:function(i){var h=i.getDay();
return[(h>0&&h<6),""]
},iso8601Week:function(h){var i,j=new Date(h.getTime());
j.setDate(j.getDate()+4-(j.getDay()||7));
i=j.getTime();
j.setMonth(0);
j.setDate(1);
return Math.floor(Math.round((i-j)/86400000)/7)+1
},parseDate:function(y,t,A){if(y==null||t==null){throw"Invalid arguments"
}t=(typeof t==="object"?t.toString():t+"");
if(t===""){return null
}var k,v,i,z=0,n=(A?A.shortYearCutoff:null)||this._defaults.shortYearCutoff,j=(typeof n!=="string"?n:new Date().getFullYear()%100+parseInt(n,10)),q=(A?A.dayNamesShort:null)||this._defaults.dayNamesShort,C=(A?A.dayNames:null)||this._defaults.dayNames,h=(A?A.monthNamesShort:null)||this._defaults.monthNamesShort,l=(A?A.monthNames:null)||this._defaults.monthNames,m=-1,D=-1,x=-1,p=-1,w=false,B,r=function(F){var G=(k+1<y.length&&y.charAt(k+1)===F);
if(G){k++
}return G
},E=function(H){var F=r(H),I=(H==="@"?14:(H==="!"?20:(H==="y"&&F?4:(H==="o"?3:2)))),J=new RegExp("^\\d{1,"+I+"}"),G=t.substring(z).match(J);
if(!G){throw"Missing number at position "+z
}z+=G[0].length;
return parseInt(G[0],10)
},o=function(G,H,J){var F=-1,I=e.map(r(G)?J:H,function(L,K){return[[K,L]]
}).sort(function(L,K){return -(L[1].length-K[1].length)
});
e.each(I,function(L,M){var K=M[1];
if(t.substr(z,K.length).toLowerCase()===K.toLowerCase()){F=M[0];
z+=K.length;
return false
}});
if(F!==-1){return F+1
}else{throw"Unknown name at position "+z
}},u=function(){if(t.charAt(z)!==y.charAt(k)){throw"Unexpected literal at position "+z
}z++
};
for(k=0;
k<y.length;
k++){if(w){if(y.charAt(k)==="'"&&!r("'")){w=false
}else{u()
}}else{switch(y.charAt(k)){case"d":x=E("d");
break;
case"D":o("D",q,C);
break;
case"o":p=E("o");
break;
case"m":D=E("m");
break;
case"M":D=o("M",h,l);
break;
case"y":m=E("y");
break;
case"@":B=new Date(E("@"));
m=B.getFullYear();
D=B.getMonth()+1;
x=B.getDate();
break;
case"!":B=new Date((E("!")-this._ticksTo1970)/10000);
m=B.getFullYear();
D=B.getMonth()+1;
x=B.getDate();
break;
case"'":if(r("'")){u()
}else{w=true
}break;
default:u()
}}}if(z<t.length){i=t.substr(z);
if(!/^\s+/.test(i)){throw"Extra/unparsed characters found in date: "+i
}}if(m===-1){m=new Date().getFullYear()
}else{if(m<100){m+=new Date().getFullYear()-new Date().getFullYear()%100+(m<=j?0:-100)
}}if(p>-1){D=1;
x=p;
do{v=this._getDaysInMonth(m,D-1);
if(x<=v){break
}D++;
x-=v
}while(true)
}B=this._daylightSavingAdjust(new Date(m,D-1,x));
if(B.getFullYear()!==m||B.getMonth()+1!==D||B.getDate()!==x){throw"Invalid date"
}return B
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(q,k,l){if(!k){return""
}var t,u=(l?l.dayNamesShort:null)||this._defaults.dayNamesShort,i=(l?l.dayNames:null)||this._defaults.dayNames,o=(l?l.monthNamesShort:null)||this._defaults.monthNamesShort,m=(l?l.monthNames:null)||this._defaults.monthNames,r=function(v){var w=(t+1<q.length&&q.charAt(t+1)===v);
if(w){t++
}return w
},h=function(x,y,v){var w=""+y;
if(r(x)){while(w.length<v){w="0"+w
}}return w
},n=function(v,x,w,y){return(r(v)?y[x]:w[x])
},j="",p=false;
if(k){for(t=0;
t<q.length;
t++){if(p){if(q.charAt(t)==="'"&&!r("'")){p=false
}else{j+=q.charAt(t)
}}else{switch(q.charAt(t)){case"d":j+=h("d",k.getDate(),2);
break;
case"D":j+=n("D",k.getDay(),u,i);
break;
case"o":j+=h("o",Math.round((new Date(k.getFullYear(),k.getMonth(),k.getDate()).getTime()-new Date(k.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":j+=h("m",k.getMonth()+1,2);
break;
case"M":j+=n("M",k.getMonth(),o,m);
break;
case"y":j+=(r("y")?k.getFullYear():(k.getYear()%100<10?"0":"")+k.getYear()%100);
break;
case"@":j+=k.getTime();
break;
case"!":j+=k.getTime()*10000+this._ticksTo1970;
break;
case"'":if(r("'")){j+="'"
}else{p=true
}break;
default:j+=q.charAt(t)
}}}}return j
},_possibleChars:function(l){var k,j="",i=false,h=function(m){var n=(k+1<l.length&&l.charAt(k+1)===m);
if(n){k++
}return n
};
for(k=0;
k<l.length;
k++){if(i){if(l.charAt(k)==="'"&&!h("'")){i=false
}else{j+=l.charAt(k)
}}else{switch(l.charAt(k)){case"d":case"m":case"y":case"@":j+="0123456789";
break;
case"D":case"M":return null;
case"'":if(h("'")){j+="'"
}else{i=true
}break;
default:j+=l.charAt(k)
}}}return j
},_get:function(i,h){return i.settings[h]!==g?i.settings[h]:this._defaults[h]
},_setDateFromField:function(m,j){if(m.input.val()===m.lastVal){return
}var h=this._get(m,"dateFormat"),o=m.lastVal=m.input?m.input.val():null,n=this._getDefaultDate(m),i=n,k=this._getFormatConfig(m);
try{i=this.parseDate(h,o,k)||n
}catch(l){o=(j?"":o)
}m.selectedDay=i.getDate();
m.drawMonth=m.selectedMonth=i.getMonth();
m.drawYear=m.selectedYear=i.getFullYear();
m.currentDay=(o?i.getDate():0);
m.currentMonth=(o?i.getMonth():0);
m.currentYear=(o?i.getFullYear():0);
this._adjustInstDate(m)
},_getDefaultDate:function(h){return this._restrictMinMax(h,this._determineDate(h,this._get(h,"defaultDate"),new Date()))
},_determineDate:function(l,i,m){var k=function(o){var n=new Date();
n.setDate(n.getDate()+o);
return n
},j=function(v){try{return e.datepicker.parseDate(e.datepicker._get(l,"dateFormat"),v,e.datepicker._getFormatConfig(l))
}catch(u){}var o=(v.toLowerCase().match(/^c/)?e.datepicker._getDate(l):null)||new Date(),p=o.getFullYear(),t=o.getMonth(),n=o.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,q=r.exec(v);
while(q){switch(q[2]||"d"){case"d":case"D":n+=parseInt(q[1],10);
break;
case"w":case"W":n+=parseInt(q[1],10)*7;
break;
case"m":case"M":t+=parseInt(q[1],10);
n=Math.min(n,e.datepicker._getDaysInMonth(p,t));
break;
case"y":case"Y":p+=parseInt(q[1],10);
n=Math.min(n,e.datepicker._getDaysInMonth(p,t));
break
}q=r.exec(v)
}return new Date(p,t,n)
},h=(i==null||i===""?m:(typeof i==="string"?j(i):(typeof i==="number"?(isNaN(i)?m:k(i)):new Date(i.getTime()))));
h=(h&&h.toString()==="Invalid Date"?m:h);
if(h){h.setHours(0);
h.setMinutes(0);
h.setSeconds(0);
h.setMilliseconds(0)
}return this._daylightSavingAdjust(h)
},_daylightSavingAdjust:function(h){if(!h){return null
}h.setHours(h.getHours()>12?h.getHours()+2:0);
return h
},_setDate:function(n,k,m){var h=!k,j=n.selectedMonth,l=n.selectedYear,i=this._restrictMinMax(n,this._determineDate(n,k,new Date()));
n.selectedDay=n.currentDay=i.getDate();
n.drawMonth=n.selectedMonth=n.currentMonth=i.getMonth();
n.drawYear=n.selectedYear=n.currentYear=i.getFullYear();
if((j!==n.selectedMonth||l!==n.selectedYear)&&!m){this._notifyChange(n)
}this._adjustInstDate(n);
if(n.input){n.input.val(h?"":this._formatDate(n))
}},_getDate:function(i){var h=(!i.currentYear||(i.input&&i.input.val()==="")?null:this._daylightSavingAdjust(new Date(i.currentYear,i.currentMonth,i.currentDay)));
return h
},_attachHandlers:function(i){var h=this._get(i,"stepMonths"),j="#"+i.id.replace(/\\\\/g,"\\");
i.dpDiv.find("[data-handler]").map(function(){var k={prev:function(){e.datepicker._adjustDate(j,-h,"M")
},next:function(){e.datepicker._adjustDate(j,+h,"M")
},hide:function(){e.datepicker._hideDatepicker()
},today:function(){e.datepicker._gotoToday(j)
},selectDay:function(){e.datepicker._selectDay(j,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){e.datepicker._selectMonthYear(j,this,"M");
return false
},selectYear:function(){e.datepicker._selectMonthYear(j,this,"Y");
return false
}};
e(this).bind(this.getAttribute("data-event"),k[this.getAttribute("data-handler")])
})
},_generateHTML:function(Y){var B,A,T,L,l,ac,W,P,af,J,aj,t,v,u,i,ab,q,E,ae,R,ak,D,I,r,m,U,N,Q,O,p,G,w,X,aa,k,ad,ah,M,x,Z=new Date(),C=this._daylightSavingAdjust(new Date(Z.getFullYear(),Z.getMonth(),Z.getDate())),ag=this._get(Y,"isRTL"),ai=this._get(Y,"showButtonPanel"),S=this._get(Y,"hideIfNoPrevNext"),H=this._get(Y,"navigationAsDateFormat"),y=this._getNumberOfMonths(Y),o=this._get(Y,"showCurrentAtPos"),K=this._get(Y,"stepMonths"),F=(y[0]!==1||y[1]!==1),j=this._daylightSavingAdjust((!Y.currentDay?new Date(9999,9,9):new Date(Y.currentYear,Y.currentMonth,Y.currentDay))),n=this._getMinMaxDate(Y,"min"),z=this._getMinMaxDate(Y,"max"),h=Y.drawMonth-o,V=Y.drawYear;
if(h<0){h+=12;
V--
}if(z){B=this._daylightSavingAdjust(new Date(z.getFullYear(),z.getMonth()-(y[0]*y[1])+1,z.getDate()));
B=(n&&B<n?n:B);
while(this._daylightSavingAdjust(new Date(V,h,1))>B){h--;
if(h<0){h=11;
V--
}}}Y.drawMonth=h;
Y.drawYear=V;
A=this._get(Y,"prevText");
A=(!H?A:this.formatDate(A,this._daylightSavingAdjust(new Date(V,h-K,1)),this._getFormatConfig(Y)));
T=(this._canAdjustMonth(Y,-1,V,h)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+A+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"e":"w")+"'>"+A+"</span></a>":(S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+A+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"e":"w")+"'>"+A+"</span></a>"));
L=this._get(Y,"nextText");
L=(!H?L:this.formatDate(L,this._daylightSavingAdjust(new Date(V,h+K,1)),this._getFormatConfig(Y)));
l=(this._canAdjustMonth(Y,+1,V,h)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+L+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"w":"e")+"'>"+L+"</span></a>":(S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+L+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"w":"e")+"'>"+L+"</span></a>"));
ac=this._get(Y,"currentText");
W=(this._get(Y,"gotoCurrent")&&Y.currentDay?j:C);
ac=(!H?ac:this.formatDate(ac,W,this._getFormatConfig(Y)));
P=(!Y.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(Y,"closeText")+"</button>":"");
af=(ai)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ag?P:"")+(this._isInRange(Y,W)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+ac+"</button>":"")+(ag?"":P)+"</div>":"";
J=parseInt(this._get(Y,"firstDay"),10);
J=(isNaN(J)?0:J);
aj=this._get(Y,"showWeek");
t=this._get(Y,"dayNames");
v=this._get(Y,"dayNamesMin");
u=this._get(Y,"monthNames");
i=this._get(Y,"monthNamesShort");
ab=this._get(Y,"beforeShowDay");
q=this._get(Y,"showOtherMonths");
E=this._get(Y,"selectOtherMonths");
ae=this._getDefaultDate(Y);
R="";
ak;
for(D=0;
D<y[0];
D++){I="";
this.maxRows=4;
for(r=0;
r<y[1];
r++){m=this._daylightSavingAdjust(new Date(V,h,Y.selectedDay));
U=" ui-corner-all";
N="";
if(F){N+="<div class='ui-datepicker-group";
if(y[1]>1){switch(r){case 0:N+=" ui-datepicker-group-first";
U=" ui-corner-"+(ag?"right":"left");
break;
case y[1]-1:N+=" ui-datepicker-group-last";
U=" ui-corner-"+(ag?"left":"right");
break;
default:N+=" ui-datepicker-group-middle";
U="";
break
}}N+="'>"
}N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+U+"'>"+(/all|left/.test(U)&&D===0?(ag?l:T):"")+(/all|right/.test(U)&&D===0?(ag?T:l):"")+this._generateMonthYearHeader(Y,h,V,n,z,D>0||r>0,u,i)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
Q=(aj?"<th class='ui-datepicker-week-col'>"+this._get(Y,"weekHeader")+"</th>":"");
for(ak=0;
ak<7;
ak++){O=(ak+J)%7;
Q+="<th"+((ak+J+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+t[O]+"'>"+v[O]+"</span></th>"
}N+=Q+"</tr></thead><tbody>";
p=this._getDaysInMonth(V,h);
if(V===Y.selectedYear&&h===Y.selectedMonth){Y.selectedDay=Math.min(Y.selectedDay,p)
}G=(this._getFirstDayOfMonth(V,h)-J+7)%7;
w=Math.ceil((G+p)/7);
X=(F?this.maxRows>w?this.maxRows:w:w);
this.maxRows=X;
aa=this._daylightSavingAdjust(new Date(V,h,1-G));
for(k=0;
k<X;
k++){N+="<tr>";
ad=(!aj?"":"<td class='ui-datepicker-week-col'>"+this._get(Y,"calculateWeek")(aa)+"</td>");
for(ak=0;
ak<7;
ak++){ah=(ab?ab.apply((Y.input?Y.input[0]:null),[aa]):[true,""]);
M=(aa.getMonth()!==h);
x=(M&&!E)||!ah[0]||(n&&aa<n)||(z&&aa>z);
ad+="<td class='"+((ak+J+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+((aa.getTime()===m.getTime()&&h===Y.selectedMonth&&Y._keyEvent)||(ae.getTime()===aa.getTime()&&ae.getTime()===m.getTime())?" "+this._dayOverClass:"")+(x?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!q?"":" "+ah[1]+(aa.getTime()===j.getTime()?" "+this._currentClass:"")+(aa.getTime()===C.getTime()?" ui-datepicker-today":""))+"'"+((!M||q)&&ah[2]?" title='"+ah[2].replace(/'/g,"&#39;")+"'":"")+(x?"":" data-handler='selectDay' data-event='click' data-month='"+aa.getMonth()+"' data-year='"+aa.getFullYear()+"'")+">"+(M&&!q?"&#xa0;":(x?"<span class='ui-state-default'>"+aa.getDate()+"</span>":"<a class='ui-state-default"+(aa.getTime()===C.getTime()?" ui-state-highlight":"")+(aa.getTime()===j.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+aa.getDate()+"</a>"))+"</td>";
aa.setDate(aa.getDate()+1);
aa=this._daylightSavingAdjust(aa)
}N+=ad+"</tr>"
}h++;
if(h>11){h=0;
V++
}N+="</tbody></table>"+(F?"</div>"+((y[0]>0&&r===y[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
I+=N
}R+=I
}R+=af;
Y._keyEvent=false;
return R
},_generateMonthYearHeader:function(l,j,u,n,r,v,p,h){var z,i,A,x,m,w,t,o,k=this._get(l,"changeMonth"),B=this._get(l,"changeYear"),C=this._get(l,"showMonthAfterYear"),q="<div class='ui-datepicker-title'>",y="";
if(v||!k){y+="<span class='ui-datepicker-month'>"+p[j]+"</span>"
}else{z=(n&&n.getFullYear()===u);
i=(r&&r.getFullYear()===u);
y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(A=0;
A<12;
A++){if((!z||A>=n.getMonth())&&(!i||A<=r.getMonth())){y+="<option value='"+A+"'"+(A===j?" selected='selected'":"")+">"+h[A]+"</option>"
}}y+="</select>"
}if(!C){q+=y+(v||!(k&&B)?"&#xa0;":"")
}if(!l.yearshtml){l.yearshtml="";
if(v||!B){q+="<span class='ui-datepicker-year'>"+u+"</span>"
}else{x=this._get(l,"yearRange").split(":");
m=new Date().getFullYear();
w=function(E){var D=(E.match(/c[+\-].*/)?u+parseInt(E.substring(1),10):(E.match(/[+\-].*/)?m+parseInt(E,10):parseInt(E,10)));
return(isNaN(D)?m:D)
};
t=w(x[0]);
o=Math.max(t,w(x[1]||""));
t=(n?Math.max(t,n.getFullYear()):t);
o=(r?Math.min(o,r.getFullYear()):o);
l.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
t<=o;
t++){l.yearshtml+="<option value='"+t+"'"+(t===u?" selected='selected'":"")+">"+t+"</option>"
}l.yearshtml+="</select>";
q+=l.yearshtml;
l.yearshtml=null
}}q+=this._get(l,"yearSuffix");
if(C){q+=(v||!(k&&B)?"&#xa0;":"")+y
}q+="</div>";
return q
},_adjustInstDate:function(k,n,m){var j=k.drawYear+(m==="Y"?n:0),l=k.drawMonth+(m==="M"?n:0),h=Math.min(k.selectedDay,this._getDaysInMonth(j,l))+(m==="D"?n:0),i=this._restrictMinMax(k,this._daylightSavingAdjust(new Date(j,l,h)));
k.selectedDay=i.getDate();
k.drawMonth=k.selectedMonth=i.getMonth();
k.drawYear=k.selectedYear=i.getFullYear();
if(m==="M"||m==="Y"){this._notifyChange(k)
}},_restrictMinMax:function(k,i){var j=this._getMinMaxDate(k,"min"),l=this._getMinMaxDate(k,"max"),h=(j&&i<j?j:i);
return(l&&h>l?l:h)
},_notifyChange:function(i){var h=this._get(i,"onChangeMonthYear");
if(h){h.apply((i.input?i.input[0]:null),[i.selectedYear,i.selectedMonth+1,i])
}},_getNumberOfMonths:function(i){var h=this._get(i,"numberOfMonths");
return(h==null?[1,1]:(typeof h==="number"?[1,h]:h))
},_getMinMaxDate:function(i,h){return this._determineDate(i,this._get(i,h+"Date"),null)
},_getDaysInMonth:function(h,i){return 32-this._daylightSavingAdjust(new Date(h,i,32)).getDate()
},_getFirstDayOfMonth:function(h,i){return new Date(h,i,1).getDay()
},_canAdjustMonth:function(k,m,j,l){var h=this._getNumberOfMonths(k),i=this._daylightSavingAdjust(new Date(j,l+(m<0?m:h[0]*h[1]),1));
if(m<0){i.setDate(this._getDaysInMonth(i.getFullYear(),i.getMonth()))
}return this._isInRange(k,i)
},_isInRange:function(l,j){var i,o,k=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),p=null,m=null,n=this._get(l,"yearRange");
if(n){i=n.split(":");
o=new Date().getFullYear();
p=parseInt(i[0],10);
m=parseInt(i[1],10);
if(i[0].match(/[+\-].*/)){p+=o
}if(i[1].match(/[+\-].*/)){m+=o
}}return((!k||j.getTime()>=k.getTime())&&(!h||j.getTime()<=h.getTime())&&(!p||j.getFullYear()>=p)&&(!m||j.getFullYear()<=m))
},_getFormatConfig:function(h){var i=this._get(h,"shortYearCutoff");
i=(typeof i!=="string"?i:new Date().getFullYear()%100+parseInt(i,10));
return{shortYearCutoff:i,dayNamesShort:this._get(h,"dayNamesShort"),dayNames:this._get(h,"dayNames"),monthNamesShort:this._get(h,"monthNamesShort"),monthNames:this._get(h,"monthNames")}
},_formatDate:function(k,h,l,j){if(!h){k.currentDay=k.selectedDay;
k.currentMonth=k.selectedMonth;
k.currentYear=k.selectedYear
}var i=(h?(typeof h==="object"?h:this._daylightSavingAdjust(new Date(j,l,h))):this._daylightSavingAdjust(new Date(k.currentYear,k.currentMonth,k.currentDay)));
return this.formatDate(this._get(k,"dateFormat"),i,this._getFormatConfig(k))
}});
function d(i){var h="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return i.delegate(h,"mouseout",function(){e(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).removeClass("ui-datepicker-next-hover")
}}).delegate(h,"mouseover",function(){if(!e.datepicker._isDisabledDatepicker(c.inline?i.parent()[0]:c.input[0])){e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
e(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).addClass("ui-datepicker-next-hover")
}}})
}function a(j,i){e.extend(j,i);
for(var h in i){if(i[h]==null){j[h]=i[h]
}}return j
}e.fn.datepicker=function(i){if(!this.length){return this
}if(!e.datepicker.initialized){e(document).mousedown(e.datepicker._checkExternalClick);
e.datepicker.initialized=true
}if(e("#"+e.datepicker._mainDivId).length===0){e("body").append(e.datepicker.dpDiv)
}var h=Array.prototype.slice.call(arguments,1);
if(typeof i==="string"&&(i==="isDisabled"||i==="getDate"||i==="widget")){return e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this[0]].concat(h))
}if(i==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this[0]].concat(h))
}return this.each(function(){typeof i==="string"?e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this].concat(h)):e.datepicker._attachDatepicker(this,i)
})
};
e.datepicker=new b();
e.datepicker.initialized=false;
e.datepicker.uuid=new Date().getTime();
e.datepicker.version="1.10.3"
})(jQuery);
(function(c,d){var a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},b={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
c.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(f){var e=c(this).css(f).offset().top;
if(e<0){c(this).css("top",f.top-e)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&c.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&c.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var e=this.options.appendTo;
if(e&&(e.jquery||e.nodeType)){return c(e)
}return this.document.find(e||"body").eq(0)
},_destroy:function(){var f,e=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}f=e.parent.children().eq(e.index);
if(f.length&&f[0]!==this.element[0]){f.before(this.element)
}else{e.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:c.noop,enable:c.noop,close:function(f){var e=this;
if(!this._isOpen||this._trigger("beforeClose",f)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){c(this.document[0].activeElement).blur()
}this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",f)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(g,e){var f=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(f&&!e){this._trigger("focus",g)
}return f
},open:function(){var e=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=c(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){e._focusTabbable();
e._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var e=this.element.find("[autofocus]");
if(!e.length){e=this.element.find(":tabbable")
}if(!e.length){e=this.uiDialogButtonPane.find(":tabbable")
}if(!e.length){e=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!e.length){e=this.uiDialog
}e.eq(0).focus()
},_keepFocus:function(e){function f(){var h=this.document[0].activeElement,g=this.uiDialog[0]===h||c.contains(this.uiDialog[0],h);
if(!g){this._focusTabbable()
}}e.preventDefault();
f.call(this);
this._delay(f)
},_createWrapper:function(){this.uiDialog=c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(g){if(this.options.closeOnEscape&&!g.isDefaultPrevented()&&g.keyCode&&g.keyCode===c.ui.keyCode.ESCAPE){g.preventDefault();
this.close(g);
return
}if(g.keyCode!==c.ui.keyCode.TAB){return
}var f=this.uiDialog.find(":tabbable"),h=f.filter(":first"),e=f.filter(":last");
if((g.target===e[0]||g.target===this.uiDialog[0])&&!g.shiftKey){h.focus(1);
g.preventDefault()
}else{if((g.target===h[0]||g.target===this.uiDialog[0])&&g.shiftKey){e.focus(1);
g.preventDefault()
}}},mousedown:function(e){if(this._moveToTop(e)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var e;
this.uiDialogTitlebar=c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(f){if(!c(f.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=c("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(f){f.preventDefault();
this.close(f)
}});
e=c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(e);
this.uiDialog.attr({"aria-labelledby":e.attr("id")})
},_title:function(e){if(!this.options.title){e.html("&#160;")
}e.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var f=this,e=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(c.isEmptyObject(e)||(c.isArray(e)&&!e.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}c.each(e,function(g,h){var i,j;
h=c.isFunction(h)?{click:h,text:g}:h;
h=c.extend({type:"button"},h);
i=h.click;
h.click=function(){i.apply(f.element[0],arguments)
};
j={icons:h.icons,text:h.showText};
delete h.icons;
delete h.showText;
c("<button></button>",h).button(j).appendTo(f.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var g=this,f=this.options;
function e(h){return{position:h.position,offset:h.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(h,i){c(this).addClass("ui-dialog-dragging");
g._blockFrames();
g._trigger("dragStart",h,e(i))
},drag:function(h,i){g._trigger("drag",h,e(i))
},stop:function(h,i){f.position=[i.position.left-g.document.scrollLeft(),i.position.top-g.document.scrollTop()];
c(this).removeClass("ui-dialog-dragging");
g._unblockFrames();
g._trigger("dragStop",h,e(i))
}})
},_makeResizable:function(){var j=this,h=this.options,i=h.resizable,e=this.uiDialog.css("position"),g=typeof i==="string"?i:"n,e,s,w,se,sw,ne,nw";
function f(k){return{originalPosition:k.originalPosition,originalSize:k.originalSize,position:k.position,size:k.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:this._minHeight(),handles:g,start:function(k,l){c(this).addClass("ui-dialog-resizing");
j._blockFrames();
j._trigger("resizeStart",k,f(l))
},resize:function(k,l){j._trigger("resize",k,f(l))
},stop:function(k,l){h.height=c(this).height();
h.width=c(this).width();
c(this).removeClass("ui-dialog-resizing");
j._unblockFrames();
j._trigger("resizeStop",k,f(l))
}}).css("position",e)
},_minHeight:function(){var e=this.options;
return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)
},_position:function(){var e=this.uiDialog.is(":visible");
if(!e){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!e){this.uiDialog.hide()
}},_setOptions:function(g){var h=this,f=false,e={};
c.each(g,function(i,j){h._setOption(i,j);
if(i in a){f=true
}if(i in b){e[i]=j
}});
if(f){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",e)
}},_setOption:function(g,h){var f,i,e=this.uiDialog;
if(g==="dialogClass"){e.removeClass(this.options.dialogClass).addClass(h)
}if(g==="disabled"){return
}this._super(g,h);
if(g==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(g==="buttons"){this._createButtons()
}if(g==="closeText"){this.uiDialogTitlebarClose.button({label:""+h})
}if(g==="draggable"){f=e.is(":data(ui-draggable)");
if(f&&!h){e.draggable("destroy")
}if(!f&&h){this._makeDraggable()
}}if(g==="position"){this._position()
}if(g==="resizable"){i=e.is(":data(ui-resizable)");
if(i&&!h){e.resizable("destroy")
}if(i&&typeof h==="string"){e.resizable("option","handles",h)
}if(!i&&h!==false){this._makeResizable()
}}if(g==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var e,g,h,f=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(f.minWidth>f.width){f.width=f.minWidth
}e=this.uiDialog.css({height:"auto",width:f.width}).outerHeight();
g=Math.max(0,f.minHeight-e);
h=typeof f.maxHeight==="number"?Math.max(0,f.maxHeight-e):"none";
if(f.height==="auto"){this.element.css({minHeight:g,maxHeight:h,height:"auto"})
}else{this.element.height(Math.max(0,f.height-e))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=c(this);
return c("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(e){if(c(e.target).closest(".ui-dialog").length){return true
}return !!c(e.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var f=this,e=this.widgetFullName;
if(!c.ui.dialog.overlayInstances){this._delay(function(){if(c.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(g){if(!f._allowInteraction(g)){g.preventDefault();
c(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable()
}})
}})
}this.overlay=c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
c.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){c.ui.dialog.overlayInstances--;
if(!c.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")
}this.overlay.remove();
this.overlay=null
}}});
c.ui.dialog.overlayInstances=0;
if(c.uiBackCompat!==false){c.widget("ui.dialog",c.ui.dialog,{_position:function(){var f=this.options.position,g=[],h=[0,0],e;
if(f){if(typeof f==="string"||(typeof f==="object"&&"0" in f)){g=f.split?f.split(" "):[f[0],f[1]];
if(g.length===1){g[1]=g[0]
}c.each(["left","top"],function(k,j){if(+g[k]===g[k]){h[k]=g[k];
g[k]=j
}});
f={my:g[0]+(h[0]<0?h[0]:"+"+h[0])+" "+g[1]+(h[1]<0?h[1]:"+"+h[1]),at:g.join(" ")}
}f=c.extend({},c.ui.dialog.prototype.options.position,f)
}else{f=c.ui.dialog.prototype.options.position
}e=this.uiDialog.is(":visible");
if(!e){this.uiDialog.show()
}this.uiDialog.position(f);
if(!e){this.uiDialog.hide()
}}})
}}(jQuery));
(function(b,d){var a=/up|down|vertical/,c=/up|left|vertical|horizontal/;
b.effects.effect.blind=function(g,m){var h=b(this),q=["position","top","bottom","left","right","height","width"],n=b.effects.setMode(h,g.mode||"hide"),r=g.direction||"up",j=a.test(r),i=j?"height":"width",p=j?"top":"left",u=c.test(r),l={},t=n==="show",f,e,k;
if(h.parent().is(".ui-effects-wrapper")){b.effects.save(h.parent(),q)
}else{b.effects.save(h,q)
}h.show();
f=b.effects.createWrapper(h).css({overflow:"hidden"});
e=f[i]();
k=parseFloat(f.css(p))||0;
l[i]=t?e:0;
if(!u){h.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"});
l[p]=t?k:e+k
}if(t){f.css(i,0);
if(!u){f.css(p,k+e)
}}f.animate(l,{duration:g.duration,easing:g.easing,queue:false,complete:function(){if(n==="hide"){h.hide()
}b.effects.restore(h,q);
b.effects.removeWrapper(h);
m()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.bounce=function(m,l){var c=a(this),d=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(c,m.mode||"effect"),j=k==="hide",w=k==="show",x=m.direction||"up",e=m.distance,h=m.times||5,y=h*2+(w||j?1:0),v=m.duration/y,p=m.easing,f=(x==="up"||x==="down")?"top":"left",n=(x==="up"||x==="left"),u,g,t,q=c.queue(),r=q.length;
if(w||j){d.push("opacity")
}a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
if(!e){e=c[f==="top"?"outerHeight":"outerWidth"]()/3
}if(w){t={opacity:1};
t[f]=0;
c.css("opacity",0).css(f,n?-e*2:e*2).animate(t,v,p)
}if(j){e=e/Math.pow(2,h-1)
}t={};
t[f]=0;
for(u=0;
u<h;
u++){g={};
g[f]=(n?"-=":"+=")+e;
c.animate(g,v,p).animate(t,v,p);
e=j?e*2:e/2
}if(j){g={opacity:0};
g[f]=(n?"-=":"+=")+e;
c.animate(g,v,p)
}c.queue(function(){if(j){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
l()
});
if(r>1){q.splice.apply(q,[1,0].concat(q.splice(r,y+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.clip=function(f,i){var g=a(this),m=["position","top","bottom","left","right","height","width"],l=a.effects.setMode(g,f.mode||"hide"),p=l==="show",n=f.direction||"vertical",k=n==="vertical",q=k?"height":"width",j=k?"top":"left",h={},d,e,c;
a.effects.save(g,m);
g.show();
d=a.effects.createWrapper(g).css({overflow:"hidden"});
e=(g[0].tagName==="IMG")?d:g;
c=e[q]();
if(p){e.css(q,0);
e.css(j,c/2)
}h[q]=p?c:0;
h[j]=p?0:c/2;
e.animate(h,{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(!p){g.hide()
}a.effects.restore(g,m);
a.effects.removeWrapper(g);
i()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.drop=function(d,h){var e=a(this),j=["position","top","bottom","left","right","opacity","height","width"],i=a.effects.setMode(e,d.mode||"hide"),l=i==="show",k=d.direction||"left",f=(k==="up"||k==="down")?"top":"left",m=(k==="up"||k==="left")?"pos":"neg",g={opacity:l?1:0},c;
a.effects.save(e,j);
e.show();
a.effects.createWrapper(e);
c=d.distance||e[f==="top"?"outerHeight":"outerWidth"](true)/2;
if(l){e.css("opacity",0).css(f,m==="pos"?-c:c)
}g[f]=(l?(m==="pos"?"+=":"-="):(m==="pos"?"-=":"+="))+c;
e.animate(g,{queue:false,duration:d.duration,easing:d.easing,complete:function(){if(i==="hide"){e.hide()
}a.effects.restore(e,j);
a.effects.removeWrapper(e);
h()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.explode=function(t,r){var k=t.pieces?Math.round(Math.sqrt(t.pieces)):3,d=k,c=a(this),m=a.effects.setMode(c,t.mode||"hide"),x=m==="show",g=c.show().css("visibility","hidden").offset(),u=Math.ceil(c.outerWidth()/d),q=Math.ceil(c.outerHeight()/k),h=[],w,v,e,p,n,l;
function y(){h.push(this);
if(h.length===k*d){f()
}}for(w=0;
w<k;
w++){p=g.top+w*q;
l=w-(k-1)/2;
for(v=0;
v<d;
v++){e=g.left+v*u;
n=v-(d-1)/2;
c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-v*u,top:-w*q}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:u,height:q,left:e+(x?n*u:0),top:p+(x?l*q:0),opacity:x?0:1}).animate({left:e+(x?0:n*u),top:p+(x?0:l*q),opacity:x?1:0},t.duration||500,t.easing,y)
}}function f(){c.css({visibility:"visible"});
a(h).remove();
if(!x){c.hide()
}r()
}}
})(jQuery);
(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");
d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})
}
})(jQuery);
(function(a,b){a.effects.effect.fold=function(e,i){var f=a(this),n=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(f,e.mode||"hide"),r=k==="show",l=k==="hide",u=e.size||15,m=/([0-9]+)%/.exec(u),t=!!e.horizFirst,j=r!==t,g=j?["width","height"]:["height","width"],h=e.duration/2,d,c,q={},p={};
a.effects.save(f,n);
f.show();
d=a.effects.createWrapper(f).css({overflow:"hidden"});
c=j?[d.width(),d.height()]:[d.height(),d.width()];
if(m){u=parseInt(m[1],10)/100*c[l?0:1]
}if(r){d.css(t?{height:0,width:u}:{height:u,width:0})
}q[g[0]]=r?c[0]:u;
p[g[1]]=r?c[1]:0;
d.animate(q,h,e.easing).animate(p,h,e.easing,function(){if(l){f.hide()
}a.effects.restore(f,n);
a.effects.removeWrapper(f);
i()
})
}
})(jQuery);
(function(a,b){a.effects.effect.highlight=function(h,c){var e=a(this),d=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(e,h.mode||"show"),f={backgroundColor:e.css("backgroundColor")};
if(g==="hide"){f.opacity=0
}a.effects.save(e,d);
e.show().css({backgroundImage:"none",backgroundColor:h.color||"#ffff99"}).animate(f,{queue:false,duration:h.duration,easing:h.easing,complete:function(){if(g==="hide"){e.hide()
}a.effects.restore(e,d);
c()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.pulsate=function(c,g){var e=a(this),k=a.effects.setMode(e,c.mode||"show"),p=k==="show",l=k==="hide",q=(p||k==="hide"),m=((c.times||5)*2)+(q?1:0),f=c.duration/m,n=0,j=e.queue(),d=j.length,h;
if(p||!e.is(":visible")){e.css("opacity",0).show();
n=1
}for(h=1;
h<m;
h++){e.animate({opacity:n},f,c.easing);
n=1-n
}e.animate({opacity:n},f,c.easing);
e.queue(function(){if(l){e.hide()
}g()
});
if(d>1){j.splice.apply(j,[1,0].concat(j.splice(d,m+1)))
}e.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.puff=function(j,c){var h=a(this),i=a.effects.setMode(h,j.mode||"hide"),f=i==="hide",g=parseInt(j.percent,10)||150,e=g/100,d={height:h.height(),width:h.width(),outerHeight:h.outerHeight(),outerWidth:h.outerWidth()};
a.extend(j,{effect:"scale",queue:false,fade:true,mode:i,complete:c,percent:f?g:100,from:f?d:{height:d.height*e,width:d.width*e,outerHeight:d.outerHeight*e,outerWidth:d.outerWidth*e}});
h.effect(j)
};
a.effects.effect.scale=function(c,f){var d=a(this),l=a.extend(true,{},c),g=a.effects.setMode(d,c.mode||"effect"),h=parseInt(c.percent,10)||(parseInt(c.percent,10)===0?0:(g==="hide"?0:100)),j=c.direction||"both",k=c.origin,e={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},i={y:j!=="horizontal"?(h/100):1,x:j!=="vertical"?(h/100):1};
l.effect="size";
l.queue=false;
l.complete=f;
if(g!=="effect"){l.origin=k||["middle","center"];
l.restore=true
}l.from=c.from||(g==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);
l.to={height:e.height*i.y,width:e.width*i.x,outerHeight:e.outerHeight*i.y,outerWidth:e.outerWidth*i.x};
if(l.fade){if(g==="show"){l.from.opacity=0;
l.to.opacity=1
}if(g==="hide"){l.from.opacity=1;
l.to.opacity=0
}}d.effect(l)
};
a.effects.effect.size=function(l,k){var q,i,j,c=a(this),p=["position","top","bottom","left","right","width","height","overflow","opacity"],n=["position","top","bottom","left","right","overflow","opacity"],m=["width","height","overflow"],g=["fontSize"],t=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=a.effects.setMode(c,l.mode||"effect"),r=l.restore||h!=="effect",w=l.scale||"both",u=l.origin||["middle","center"],v=c.css("position"),e=r?p:n,f={height:0,width:0,outerHeight:0,outerWidth:0};
if(h==="show"){c.show()
}q={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};
if(l.mode==="toggle"&&h==="show"){c.from=l.to||f;
c.to=l.from||q
}else{c.from=l.from||(h==="show"?f:q);
c.to=l.to||(h==="hide"?f:q)
}j={from:{y:c.from.height/q.height,x:c.from.width/q.width},to:{y:c.to.height/q.height,x:c.to.width/q.width}};
if(w==="box"||w==="both"){if(j.from.y!==j.to.y){e=e.concat(t);
c.from=a.effects.setTransition(c,t,j.from.y,c.from);
c.to=a.effects.setTransition(c,t,j.to.y,c.to)
}if(j.from.x!==j.to.x){e=e.concat(d);
c.from=a.effects.setTransition(c,d,j.from.x,c.from);
c.to=a.effects.setTransition(c,d,j.to.x,c.to)
}}if(w==="content"||w==="both"){if(j.from.y!==j.to.y){e=e.concat(g).concat(m);
c.from=a.effects.setTransition(c,g,j.from.y,c.from);
c.to=a.effects.setTransition(c,g,j.to.y,c.to)
}}a.effects.save(c,e);
c.show();
a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);
if(u){i=a.effects.getBaseline(u,q);
c.from.top=(q.outerHeight-c.outerHeight())*i.y;
c.from.left=(q.outerWidth-c.outerWidth())*i.x;
c.to.top=(q.outerHeight-c.to.outerHeight)*i.y;
c.to.left=(q.outerWidth-c.to.outerWidth)*i.x
}c.css(c.from);
if(w==="content"||w==="both"){t=t.concat(["marginTop","marginBottom"]).concat(g);
d=d.concat(["marginLeft","marginRight"]);
m=p.concat(t).concat(d);
c.find("*[width]").each(function(){var x=a(this),o={height:x.height(),width:x.width(),outerHeight:x.outerHeight(),outerWidth:x.outerWidth()};
if(r){a.effects.save(x,m)
}x.from={height:o.height*j.from.y,width:o.width*j.from.x,outerHeight:o.outerHeight*j.from.y,outerWidth:o.outerWidth*j.from.x};
x.to={height:o.height*j.to.y,width:o.width*j.to.x,outerHeight:o.height*j.to.y,outerWidth:o.width*j.to.x};
if(j.from.y!==j.to.y){x.from=a.effects.setTransition(x,t,j.from.y,x.from);
x.to=a.effects.setTransition(x,t,j.to.y,x.to)
}if(j.from.x!==j.to.x){x.from=a.effects.setTransition(x,d,j.from.x,x.from);
x.to=a.effects.setTransition(x,d,j.to.x,x.to)
}x.css(x.from);
x.animate(x.to,l.duration,l.easing,function(){if(r){a.effects.restore(x,m)
}})
})
}c.animate(c.to,{queue:false,duration:l.duration,easing:l.easing,complete:function(){if(c.to.opacity===0){c.css("opacity",c.from.opacity)
}if(h==="hide"){c.hide()
}a.effects.restore(c,e);
if(!r){if(v==="static"){c.css({position:"relative",top:c.to.top,left:c.to.left})
}else{a.each(["top","left"],function(o,x){c.css(x,function(z,B){var A=parseInt(B,10),y=o?c.to.left:c.to.top;
if(B==="auto"){return y+"px"
}return A+y+"px"
})
})
}}a.effects.removeWrapper(c);
k()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.shake=function(l,k){var c=a(this),d=["position","top","bottom","left","right","height","width"],j=a.effects.setMode(c,l.mode||"effect"),v=l.direction||"left",e=l.distance||20,h=l.times||3,w=h*2+1,q=Math.round(l.duration/w),g=(v==="up"||v==="down")?"top":"left",f=(v==="up"||v==="left"),u={},t={},r={},p,m=c.queue(),n=m.length;
a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
u[g]=(f?"-=":"+=")+e;
t[g]=(f?"+=":"-=")+e*2;
r[g]=(f?"-=":"+=")+e*2;
c.animate(u,q,l.easing);
for(p=1;
p<h;
p++){c.animate(t,q,l.easing).animate(r,q,l.easing)
}c.animate(t,q,l.easing).animate(u,q/2,l.easing).queue(function(){if(j==="hide"){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
k()
});
if(n>1){m.splice.apply(m,[1,0].concat(m.splice(n,w+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.slide=function(e,i){var f=a(this),k=["position","top","bottom","left","right","width","height"],j=a.effects.setMode(f,e.mode||"show"),m=j==="show",l=e.direction||"left",g=(l==="up"||l==="down")?"top":"left",d=(l==="up"||l==="left"),c,h={};
a.effects.save(f,k);
f.show();
c=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);
a.effects.createWrapper(f).css({overflow:"hidden"});
if(m){f.css(g,d?(isNaN(c)?"-"+c:-c):c)
}h[g]=(m?(d?"+=":"-="):(d?"-=":"+="))+c;
f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(j==="hide"){f.hide()
}a.effects.restore(f,k);
a.effects.removeWrapper(f);
i()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.transfer=function(d,h){var f=a(this),k=a(d.to),n=k.css("position")==="fixed",j=a("body"),l=n?j.scrollTop():0,m=n?j.scrollLeft():0,c=k.offset(),g={top:c.top-l,left:c.left-m,height:k.innerHeight(),width:k.innerWidth()},i=f.offset(),e=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({top:i.top-l,left:i.left-m,height:f.innerHeight(),width:f.innerWidth(),position:n?"fixed":"absolute"}).animate(g,d.duration,d.easing,function(){e.remove();
h()
})
}
})(jQuery);
(function(a,b){a.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(c){if(this.options.disabled){c.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(c){c.preventDefault()
},"click .ui-state-disabled > a":function(c){c.preventDefault()
},"click .ui-menu-item:has(a)":function(c){var d=a(c.target).closest(".ui-menu-item");
if(!this.mouseHandled&&d.not(".ui-state-disabled").length){this.mouseHandled=true;
this.select(c);
if(d.has(".ui-menu").length){this.expand(c)
}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(c){var d=a(c.currentTarget);
d.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(c,d)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,c){var d=this.active||this.element.children(".ui-menu-item").eq(0);
if(!c){this.focus(e,d)
}},blur:function(c){this._delay(function(){if(!a.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(c)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(c){if(!a(c.target).closest(".ui-menu").length){this.collapseAll(c)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var c=a(this);
if(c.data("ui-menu-submenu-carat")){c.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(i){var d,h,j,g,f,c=true;
function e(k){return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(i.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(i);
break;
case a.ui.keyCode.PAGE_DOWN:this.nextPage(i);
break;
case a.ui.keyCode.HOME:this._move("first","first",i);
break;
case a.ui.keyCode.END:this._move("last","last",i);
break;
case a.ui.keyCode.UP:this.previous(i);
break;
case a.ui.keyCode.DOWN:this.next(i);
break;
case a.ui.keyCode.LEFT:this.collapse(i);
break;
case a.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(i)
}break;
case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(i);
break;
case a.ui.keyCode.ESCAPE:this.collapse(i);
break;
default:c=false;
h=this.previousFilter||"";
j=String.fromCharCode(i.keyCode);
g=false;
clearTimeout(this.filterTimer);
if(j===h){g=true
}else{j=h+j
}f=new RegExp("^"+e(j),"i");
d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())
});
d=g&&d.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):d;
if(!d.length){j=String.fromCharCode(i.keyCode);
f=new RegExp("^"+e(j),"i");
d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())
})
}if(d.length){this.focus(i,d);
if(d.length>1){this.previousFilter=j;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(c){i.preventDefault()
}},_activate:function(c){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(c)
}else{this.select(c)
}}},refresh:function(){var e,d=this.options.icons.submenu,c=this.element.find(this.options.menus);
c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var h=a(this),g=h.prev("a"),f=a("<span>").addClass("ui-menu-icon ui-icon "+d).data("ui-menu-submenu-carat",true);
g.attr("aria-haspopup","true").prepend(f);
h.attr("aria-labelledby",g.attr("id"))
});
e=c.add(this.element);
e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
e.children(":not(.ui-menu-item)").each(function(){var f=a(this);
if(!/[^\-\u2014\u2013\s]/.test(f.text())){f.addClass("ui-widget-content ui-menu-divider")
}});
e.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!a.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(c,d){if(c==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)
}this._super(c,d)
},focus:function(d,c){var f,e;
this.blur(d,d&&d.type==="focus");
this._scrollIntoView(c);
this.active=c.first();
e=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",e.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(d&&d.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}f=c.children(".ui-menu");
if(f.length&&(/^mouse/.test(d.type))){this._startOpening(f)
}this.activeMenu=c.parent();
this._trigger("focus",d,{item:c})
},_scrollIntoView:function(f){var i,e,g,c,d,h;
if(this._hasScroll()){i=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0;
e=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0;
g=f.offset().top-this.activeMenu.offset().top-i-e;
c=this.activeMenu.scrollTop();
d=this.activeMenu.height();
h=f.height();
if(g<0){this.activeMenu.scrollTop(c+g)
}else{if(g+h>d){this.activeMenu.scrollTop(c+g-d+h)
}}}},blur:function(d,c){if(!c){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",d,{item:this.active})
},_startOpening:function(c){clearTimeout(this.timer);
if(c.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(c)
},this.delay)
},_open:function(d){var c=a.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden","true");
d.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)
},collapseAll:function(d,c){clearTimeout(this.timer);
this.timer=this._delay(function(){var e=c?this.element:a(d&&d.target).closest(this.element.find(".ui-menu"));
if(!e.length){e=this.element
}this._close(e);
this.blur(d);
this.activeMenu=e
},this.delay)
},_close:function(c){if(!c){c=this.active?this.active.parent():this.element
}c.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(d){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(c&&c.length){this._close();
this.focus(d,c)
}},expand:function(d){var c=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(c&&c.length){this._open(c.parent());
this._delay(function(){this.focus(d,c)
})
}},next:function(c){this._move("next","first",c)
},previous:function(c){this._move("prev","last",c)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(f,d,e){var c;
if(this.active){if(f==="first"||f==="last"){c=this.active[f==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{c=this.active[f+"All"](".ui-menu-item").eq(0)
}}if(!c||!c.length||!this.active){c=this.activeMenu.children(".ui-menu-item")[d]()
}this.focus(e,c)
},nextPage:function(e){var d,f,c;
if(!this.active){this.next(e);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){f=this.active.offset().top;
c=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){d=a(this);
return d.offset().top-f-c<0
});
this.focus(e,d)
}else{this.focus(e,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(e){var d,f,c;
if(!this.active){this.next(e);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){f=this.active.offset().top;
c=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){d=a(this);
return d.offset().top-f+c>0
});
this.focus(e,d)
}else{this.focus(e,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(c){this.active=this.active||a(c.target).closest(".ui-menu-item");
var d={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(c,true)
}this._trigger("select",c,d)
}})
}(jQuery));
(function(e,c){e.ui=e.ui||{};
var j,k=Math.max,o=Math.abs,m=Math.round,d=/left|center|right/,h=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,b=/%$/,g=e.fn.position;
function n(r,q,p){return[parseFloat(r[0])*(b.test(r[0])?q/100:1),parseFloat(r[1])*(b.test(r[1])?p/100:1)]
}function i(p,q){return parseInt(e.css(p,q),10)||0
}function f(q){var p=q[0];
if(p.nodeType===9){return{width:q.width(),height:q.height(),offset:{top:0,left:0}}
}if(e.isWindow(p)){return{width:q.width(),height:q.height(),offset:{top:q.scrollTop(),left:q.scrollLeft()}}
}if(p.preventDefault){return{width:0,height:0,offset:{top:p.pageY,left:p.pageX}}
}return{width:q.outerWidth(),height:q.outerHeight(),offset:q.offset()}
}e.position={scrollbarWidth:function(){if(j!==c){return j
}var q,p,t=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=t.children()[0];
e("body").append(t);
q=r.offsetWidth;
t.css("overflow","scroll");
p=r.offsetWidth;
if(q===p){p=t[0].clientWidth
}t.remove();
return(j=q-p)
},getScrollInfo:function(u){var t=u.isWindow?"":u.element.css("overflow-x"),r=u.isWindow?"":u.element.css("overflow-y"),q=t==="scroll"||(t==="auto"&&u.width<u.element[0].scrollWidth),p=r==="scroll"||(r==="auto"&&u.height<u.element[0].scrollHeight);
return{width:p?e.position.scrollbarWidth():0,height:q?e.position.scrollbarWidth():0}
},getWithinInfo:function(q){var r=e(q||window),p=e.isWindow(r[0]);
return{element:r,isWindow:p,offset:r.offset()||{left:0,top:0},scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop(),width:p?r.width():r.outerWidth(),height:p?r.height():r.outerHeight()}
}};
e.fn.position=function(A){if(!A||!A.of){return g.apply(this,arguments)
}A=e.extend({},A);
var B,x,v,z,u,p,w=e(A.of),t=e.position.getWithinInfo(A.within),q=e.position.getScrollInfo(t),y=(A.collision||"flip").split(" "),r={};
p=f(w);
if(w[0].preventDefault){A.at="left top"
}x=p.width;
v=p.height;
z=p.offset;
u=e.extend({},z);
e.each(["my","at"],function(){var E=(A[this]||"").split(" "),D,C;
if(E.length===1){E=d.test(E[0])?E.concat(["center"]):h.test(E[0])?["center"].concat(E):["center","center"]
}E[0]=d.test(E[0])?E[0]:"center";
E[1]=h.test(E[1])?E[1]:"center";
D=a.exec(E[0]);
C=a.exec(E[1]);
r[this]=[D?D[0]:0,C?C[0]:0];
A[this]=[l.exec(E[0])[0],l.exec(E[1])[0]]
});
if(y.length===1){y[1]=y[0]
}if(A.at[0]==="right"){u.left+=x
}else{if(A.at[0]==="center"){u.left+=x/2
}}if(A.at[1]==="bottom"){u.top+=v
}else{if(A.at[1]==="center"){u.top+=v/2
}}B=n(r.at,x,v);
u.left+=B[0];
u.top+=B[1];
return this.each(function(){var D,M,F=e(this),H=F.outerWidth(),E=F.outerHeight(),G=i(this,"marginLeft"),C=i(this,"marginTop"),L=H+G+i(this,"marginRight")+q.width,K=E+C+i(this,"marginBottom")+q.height,I=e.extend({},u),J=n(r.my,F.outerWidth(),F.outerHeight());
if(A.my[0]==="right"){I.left-=H
}else{if(A.my[0]==="center"){I.left-=H/2
}}if(A.my[1]==="bottom"){I.top-=E
}else{if(A.my[1]==="center"){I.top-=E/2
}}I.left+=J[0];
I.top+=J[1];
if(!e.support.offsetFractions){I.left=m(I.left);
I.top=m(I.top)
}D={marginLeft:G,marginTop:C};
e.each(["left","top"],function(O,N){if(e.ui.position[y[O]]){e.ui.position[y[O]][N](I,{targetWidth:x,targetHeight:v,elemWidth:H,elemHeight:E,collisionPosition:D,collisionWidth:L,collisionHeight:K,offset:[B[0]+J[0],B[1]+J[1]],my:A.my,at:A.at,within:t,elem:F})
}});
if(A.using){M=function(Q){var S=z.left-I.left,P=S+x-H,R=z.top-I.top,O=R+v-E,N={target:{element:w,left:z.left,top:z.top,width:x,height:v},element:{element:F,left:I.left,top:I.top,width:H,height:E},horizontal:P<0?"left":S>0?"right":"center",vertical:O<0?"top":R>0?"bottom":"middle"};
if(x<H&&o(S+P)<x){N.horizontal="center"
}if(v<E&&o(R+O)<v){N.vertical="middle"
}if(k(o(S),o(P))>k(o(R),o(O))){N.important="horizontal"
}else{N.important="vertical"
}A.using.call(this,Q,N)
}
}F.offset(e.extend(I,{using:M}))
})
};
e.ui.position={fit:{left:function(u,t){var r=t.within,w=r.isWindow?r.scrollLeft:r.offset.left,y=r.width,v=u.left-t.collisionPosition.marginLeft,x=w-v,q=v+t.collisionWidth-y-w,p;
if(t.collisionWidth>y){if(x>0&&q<=0){p=u.left+x+t.collisionWidth-y-w;
u.left+=x-p
}else{if(q>0&&x<=0){u.left=w
}else{if(x>q){u.left=w+y-t.collisionWidth
}else{u.left=w
}}}}else{if(x>0){u.left+=x
}else{if(q>0){u.left-=q
}else{u.left=k(u.left-v,u.left)
}}}},top:function(t,r){var q=r.within,x=q.isWindow?q.scrollTop:q.offset.top,y=r.within.height,v=t.top-r.collisionPosition.marginTop,w=x-v,u=v+r.collisionHeight-y-x,p;
if(r.collisionHeight>y){if(w>0&&u<=0){p=t.top+w+r.collisionHeight-y-x;
t.top+=w-p
}else{if(u>0&&w<=0){t.top=x
}else{if(w>u){t.top=x+y-r.collisionHeight
}else{t.top=x
}}}}else{if(w>0){t.top+=w
}else{if(u>0){t.top-=u
}else{t.top=k(t.top-v,t.top)
}}}}},flip:{left:function(w,v){var u=v.within,A=u.offset.left+u.scrollLeft,D=u.width,r=u.isWindow?u.scrollLeft:u.offset.left,x=w.left-v.collisionPosition.marginLeft,B=x-r,q=x+v.collisionWidth-D-r,z=v.my[0]==="left"?-v.elemWidth:v.my[0]==="right"?v.elemWidth:0,C=v.at[0]==="left"?v.targetWidth:v.at[0]==="right"?-v.targetWidth:0,t=-2*v.offset[0],p,y;
if(B<0){p=w.left+z+C+t+v.collisionWidth-D-A;
if(p<0||p<o(B)){w.left+=z+C+t
}}else{if(q>0){y=w.left-v.collisionPosition.marginLeft+z+C+t-r;
if(y>0||o(y)<q){w.left+=z+C+t
}}}},top:function(v,u){var t=u.within,C=t.offset.top+t.scrollTop,D=t.height,p=t.isWindow?t.scrollTop:t.offset.top,x=v.top-u.collisionPosition.marginTop,z=x-p,w=x+u.collisionHeight-D-p,A=u.my[1]==="top",y=A?-u.elemHeight:u.my[1]==="bottom"?u.elemHeight:0,E=u.at[1]==="top"?u.targetHeight:u.at[1]==="bottom"?-u.targetHeight:0,r=-2*u.offset[1],B,q;
if(z<0){q=v.top+y+E+r+u.collisionHeight-D-C;
if((v.top+y+E+r)>z&&(q<0||q<o(z))){v.top+=y+E+r
}}else{if(w>0){B=v.top-u.collisionPosition.marginTop+y+E+r-p;
if((v.top+y+E+r)>w&&(B>0||o(B)<w)){v.top+=y+E+r
}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);
e.ui.position.fit.left.apply(this,arguments)
},top:function(){e.ui.position.flip.top.apply(this,arguments);
e.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var u,w,q,t,r,p=document.getElementsByTagName("body")[0],v=document.createElement("div");
u=document.createElement(p?"div":"body");
q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(p){e.extend(q,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(r in q){u.style[r]=q[r]
}u.appendChild(v);
w=p||document.documentElement;
w.insertBefore(u,w.firstChild);
v.style.cssText="position: absolute; left: 10.7432222px;";
t=e(v).offset().left;
e.support.offsetFractions=t>10&&t<11;
u.innerHTML="";
w.removeChild(u)
})()
}(jQuery));
(function(a,b){a.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(c){if(c===b){return this.options.value
}this.options.value=this._constrainedValue(c);
this._refreshValue()
},_constrainedValue:function(c){if(c===b){c=this.options.value
}this.indeterminate=c===false;
if(typeof c!=="number"){c=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,c))
},_setOptions:function(c){var d=c.value;
delete c.value;
this._super(c);
this.options.value=this._constrainedValue(d);
this._refreshValue()
},_setOption:function(c,d){if(c==="max"){d=Math.max(this.min,d)
}this._super(c,d)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var d=this.options.value,c=this._percentage();
this.valueDiv.toggle(this.indeterminate||d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":d});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==d){this.oldValue=d;
this._trigger("change")
}if(d===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(b,c){var a=5;
b.widget("ui.slider",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();
this._setOption("disabled",this.options.disabled);
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var g,d,e=this.options,j=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),h="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",f=[];
d=(e.values&&e.values.length)||1;
if(j.length>d){j.slice(d).remove();
j=j.slice(0,d)
}for(g=j.length;
g<d;
g++){f.push(h)
}this.handles=j.add(b(f.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(k){b(this).data("ui-slider-handle-index",k)
})
},_createRange:function(){var d=this.options,e="";
if(d.range){if(d.range===true){if(!d.values){d.values=[this._valueMin(),this._valueMin()]
}else{if(d.values.length&&d.values.length!==2){d.values=[d.values[0],d.values[0]]
}else{if(b.isArray(d.values)){d.values=d.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=b("<div></div>").appendTo(this.element);
e="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(e+((d.range==="min"||d.range==="max")?" ui-slider-range-"+d.range:""))
}else{this.range=b([])
}},_setupEvents:function(){var d=this.handles.add(this.range).filter("a");
this._off(d);
this._on(d,this._handleEvents);
this._hoverable(d);
this._focusable(d)
},_destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(f){var j,m,e,h,l,n,i,d,k=this,g=this.options;
if(g.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
j={x:f.pageX,y:f.pageY};
m=this._normValueFromMouse(j);
e=this._valueMax()-this._valueMin()+1;
this.handles.each(function(o){var p=Math.abs(m-k.values(o));
if((e>p)||(e===p&&(o===k._lastChangedValue||k.values(o)===g.min))){e=p;
h=b(this);
l=o
}});
n=this._start(f,l);
if(n===false){return false
}this._mouseSliding=true;
this._handleIndex=l;
h.addClass("ui-state-active").focus();
i=h.offset();
d=!b(f.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=d?{left:0,top:0}:{left:f.pageX-i.left-(h.width()/2),top:f.pageY-i.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(f,l,m)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(f){var d={x:f.pageX,y:f.pageY},e=this._normValueFromMouse(d);
this._slide(f,this._handleIndex,e);
return false
},_mouseStop:function(d){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(d,this._handleIndex);
this._change(d,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(e){var d,h,g,f,i;
if(this.orientation==="horizontal"){d=this.elementSize.width;
h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{d=this.elementSize.height;
h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}g=(h/d);
if(g>1){g=1
}if(g<0){g=0
}if(this.orientation==="vertical"){g=1-g
}f=this._valueMax()-this._valueMin();
i=this._valueMin()+g*f;
return this._trimAlignValue(i)
},_start:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}return this._trigger("start",f,d)
},_slide:function(h,g,f){var d,e,i;
if(this.options.values&&this.options.values.length){d=this.values(g?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){f=d
}if(f!==this.values(g)){e=this.values();
e[g]=f;
i=this._trigger("slide",h,{handle:this.handles[g],value:f,values:e});
d=this.values(g?0:1);
if(i!==false){this.values(g,f,true)
}}}else{if(f!==this.value()){i=this._trigger("slide",h,{handle:this.handles[g],value:f});
if(i!==false){this.value(f)
}}}},_stop:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._trigger("stop",f,d)
},_change:function(f,e){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._lastChangedValue=e;
this._trigger("change",f,d)
}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(e,h){var g,d,f;
if(arguments.length>1){this.options.values[e]=this._trimAlignValue(h);
this._refreshValue();
this._change(null,e);
return
}if(arguments.length){if(b.isArray(arguments[0])){g=this.options.values;
d=arguments[0];
for(f=0;
f<g.length;
f+=1){g[f]=this._trimAlignValue(d[f]);
this._change(null,f)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(e)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(e,f){var d,g=0;
if(e==="range"&&this.options.range===true){if(f==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(f==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(b.isArray(this.options.values)){g=this.options.values.length
}b.Widget.prototype._setOption.apply(this,arguments);
switch(e){case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(d=0;
d<g;
d+=1){this._change(null,d)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_value:function(){var d=this.options.value;
d=this._trimAlignValue(d);
return d
},_values:function(d){var g,f,e;
if(arguments.length){g=this.options.values[d];
g=this._trimAlignValue(g);
return g
}else{if(this.options.values&&this.options.values.length){f=this.options.values.slice();
for(e=0;
e<f.length;
e+=1){f[e]=this._trimAlignValue(f[e])
}return f
}else{return[]
}}},_trimAlignValue:function(g){if(g<=this._valueMin()){return this._valueMin()
}if(g>=this._valueMax()){return this._valueMax()
}var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;
if(Math.abs(f)*2>=d){e+=(f>0)?d:(-d)
}return parseFloat(e.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var i,h,l,j,m,g=this.options.range,f=this.options,k=this,e=(!this._animateOff)?f.animate:false,d={};
if(this.options.values&&this.options.values.length){this.handles.each(function(n){h=(k.values(n)-k._valueMin())/(k._valueMax()-k._valueMin())*100;
d[k.orientation==="horizontal"?"left":"bottom"]=h+"%";
b(this).stop(1,1)[e?"animate":"css"](d,f.animate);
if(k.options.range===true){if(k.orientation==="horizontal"){if(n===0){k.range.stop(1,1)[e?"animate":"css"]({left:h+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({width:(h-i)+"%"},{queue:false,duration:f.animate})
}}else{if(n===0){k.range.stop(1,1)[e?"animate":"css"]({bottom:(h)+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({height:(h-i)+"%"},{queue:false,duration:f.animate})
}}}i=h
})
}else{l=this.value();
j=this._valueMin();
m=this._valueMax();
h=(m!==j)?(l-j)/(m-j)*100:0;
d[this.orientation==="horizontal"?"left":"bottom"]=h+"%";
this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);
if(g==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-h)+"%"},{queue:false,duration:f.animate})
}if(g==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-h)+"%"},{queue:false,duration:f.animate})
}}},_handleEvents:{keydown:function(h){var i,f,e,g,d=b(h.target).data("ui-slider-handle-index");
switch(h.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:h.preventDefault();
if(!this._keySliding){this._keySliding=true;
b(h.target).addClass("ui-state-active");
i=this._start(h,d);
if(i===false){return
}}break
}g=this.options.step;
if(this.options.values&&this.options.values.length){f=e=this.values(d)
}else{f=e=this.value()
}switch(h.keyCode){case b.ui.keyCode.HOME:e=this._valueMin();
break;
case b.ui.keyCode.END:e=this._valueMax();
break;
case b.ui.keyCode.PAGE_UP:e=this._trimAlignValue(f+((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(f-((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(f===this._valueMax()){return
}e=this._trimAlignValue(f+g);
break;
case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(f===this._valueMin()){return
}e=this._trimAlignValue(f-g);
break
}this._slide(h,d,e)
},click:function(d){d.preventDefault()
},keyup:function(e){var d=b(e.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(e,d);
this._change(e,d);
b(e.target).removeClass("ui-state-active")
}}}})
}(jQuery));
(function(b){function a(c){return function(){var d=this.element.val();
c.apply(this,arguments);
this._refresh();
if(d!==this.element.val()){this._trigger("change")
}}
}b.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
this._value(this.element.val(),true);
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var c={},d=this.element;
b.each(["min","max","step"],function(e,f){var g=d.attr(f);
if(g!==undefined&&g.length){c[f]=g
}});
return c
},_events:{keydown:function(c){if(this._start(c)&&this._keydown(c)){c.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(c){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",c)
}},mousewheel:function(c,d){if(!d){return
}if(!this.spinning&&!this._start(c)){return false
}this._spin((d>0?1:-1)*this.options.step,c);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(c)
}},100);
c.preventDefault()
},"mousedown .ui-spinner-button":function(d){var c;
c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function e(){var f=this.element[0]===this.document[0].activeElement;
if(!f){this.element.focus();
this.previous=c;
this._delay(function(){this.previous=c
})
}}d.preventDefault();
e.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
e.call(this)
});
if(this._start(d)===false){return
}this._repeat(null,b(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){if(!b(c.currentTarget).hasClass("ui-state-active")){return
}if(this._start(c)===false){return false
}this._repeat(null,b(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(c.height()*0.5)&&c.height()>0){c.height(c.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(d){var c=this.options,e=b.ui.keyCode;
switch(d.keyCode){case e.UP:this._repeat(null,1,d);
return true;
case e.DOWN:this._repeat(null,-1,d);
return true;
case e.PAGE_UP:this._repeat(null,c.page,d);
return true;
case e.PAGE_DOWN:this._repeat(null,-c.page,d);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(c){if(!this.spinning&&this._trigger("start",c)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(d,c,e){d=d||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,c,e)
},d);
this._spin(c*this.options.step,e)
},_spin:function(d,c){var e=this.value()||0;
if(!this.counter){this.counter=1
}e=this._adjustValue(e+d*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",c,{value:e})!==false){this._value(e);
this.counter++
}},_increment:function(c){var d=this.options.incremental;
if(d){return b.isFunction(d)?d(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1)
}return 1
},_precision:function(){var c=this._precisionOf(this.options.step);
if(this.options.min!==null){c=Math.max(c,this._precisionOf(this.options.min))
}return c
},_precisionOf:function(d){var e=d.toString(),c=e.indexOf(".");
return c===-1?0:e.length-c-1
},_adjustValue:function(e){var d,f,c=this.options;
d=c.min!==null?c.min:0;
f=e-d;
f=Math.round(f/c.step)*c.step;
e=d+f;
e=parseFloat(e.toFixed(this._precision()));
if(c.max!==null&&e>c.max){return c.max
}if(c.min!==null&&e<c.min){return c.min
}return e
},_stop:function(c){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",c)
},_setOption:function(c,d){if(c==="culture"||c==="numberFormat"){var e=this._parse(this.element.val());
this.options[c]=d;
this.element.val(this._format(e));
return
}if(c==="max"||c==="min"||c==="step"){if(typeof d==="string"){d=this._parse(d)
}}if(c==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(d.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(d.down)
}this._super(c,d);
if(c==="disabled"){if(d){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:a(function(c){this._super(c);
this._value(this.element.val())
}),_parse:function(c){if(typeof c==="string"&&c!==""){c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c
}return c===""||isNaN(c)?null:c
},_format:function(c){if(c===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(e,c){var d;
if(e!==""){d=this._parse(e);
if(d!==null){if(!c){d=this._adjustValue(d)
}e=this._format(d)
}}this.element.val(e);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:a(function(c){this._stepUp(c)
}),_stepUp:function(c){if(this._start()){this._spin((c||1)*this.options.step);
this._stop()
}},stepDown:a(function(c){this._stepDown(c)
}),_stepDown:function(c){if(this._start()){this._spin((c||1)*-this.options.step);
this._stop()
}},pageUp:a(function(c){this._stepUp((c||1)*this.options.page)
}),pageDown:a(function(c){this._stepDown((c||1)*this.options.page)
}),value:function(c){if(!arguments.length){return this._parse(this.element.val())
}a(this._value).call(this,c)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(c,e){var a=0,f=/#.*$/;
function d(){return ++a
}function b(g){return g.hash.length>1&&decodeURIComponent(g.href.replace(f,""))===decodeURIComponent(location.href.replace(f,""))
}c.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var h=this,g=this.options;
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",g.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(i){if(c(this).is(".ui-state-disabled")){i.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(c(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
g.active=this._initialActive();
if(c.isArray(g.disabled)){g.disabled=c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"),function(i){return h.tabs.index(i)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(g.active)
}else{this.active=c()
}this._refresh();
if(this.active.length){this.load(g.active)
}},_initialActive:function(){var h=this.options.active,g=this.options.collapsible,i=location.hash.substring(1);
if(h===null){if(i){this.tabs.each(function(j,k){if(c(k).attr("aria-controls")===i){h=j;
return false
}})
}if(h===null){h=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(h===null||h===-1){h=this.tabs.length?0:false
}}if(h!==false){h=this.tabs.index(this.tabs.eq(h));
if(h===-1){h=g?false:0
}}if(!g&&h===false&&this.anchors.length){h=0
}return h
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?c():this._getPanelForTab(this.active)}
},_tabKeydown:function(i){var h=c(this.document[0].activeElement).closest("li"),g=this.tabs.index(h),j=true;
if(this._handlePageNav(i)){return
}switch(i.keyCode){case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:g++;
break;
case c.ui.keyCode.UP:case c.ui.keyCode.LEFT:j=false;
g--;
break;
case c.ui.keyCode.END:g=this.anchors.length-1;
break;
case c.ui.keyCode.HOME:g=0;
break;
case c.ui.keyCode.SPACE:i.preventDefault();
clearTimeout(this.activating);
this._activate(g);
return;
case c.ui.keyCode.ENTER:i.preventDefault();
clearTimeout(this.activating);
this._activate(g===this.options.active?false:g);
return;
default:return
}i.preventDefault();
clearTimeout(this.activating);
g=this._focusNextTab(g,j);
if(!i.ctrlKey){h.attr("aria-selected","false");
this.tabs.eq(g).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",g)
},this.delay)
}},_panelKeydown:function(g){if(this._handlePageNav(g)){return
}if(g.ctrlKey&&g.keyCode===c.ui.keyCode.UP){g.preventDefault();
this.active.focus()
}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(h,i){var g=this.tabs.length-1;
function j(){if(h>g){h=0
}if(h<0){h=g
}return h
}while(c.inArray(j(),this.options.disabled)!==-1){h=i?h+1:h-1
}return h
},_focusNextTab:function(g,h){g=this._findNextTab(g,h);
this.tabs.eq(g).focus();
return g
},_setOption:function(g,h){if(g==="active"){this._activate(h);
return
}if(g==="disabled"){this._setupDisabled(h);
return
}this._super(g,h);
if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);
if(!h&&this.options.active===false){this._activate(0)
}}if(g==="event"){this._setupEvents(h)
}if(g==="heightStyle"){this._setupHeightStyle(h)
}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+d()
},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");
h.disabled=c.map(g.filter(".ui-state-disabled"),function(i){return g.index(i)
});
this._processTabs();
if(h.active===false||!this.anchors.length){h.active=false;
this.active=c()
}else{if(this.active.length&&!c.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;
this.active=c()
}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))
}}else{h.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var g=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return c("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=c();
this.anchors.each(function(n,l){var h,j,m,k=c(l).uniqueId().attr("id"),o=c(l).closest("li"),p=o.attr("aria-controls");
if(b(l)){h=l.hash;
j=g.element.find(g._sanitizeSelector(h))
}else{m=g._tabId(o);
h="#"+m;
j=g.element.find(h);
if(!j.length){j=g._createPanel(m);
j.insertAfter(g.panels[n-1]||g.tablist)
}j.attr("aria-live","polite")
}if(j.length){g.panels=g.panels.add(j)
}if(p){o.data("ui-tabs-aria-controls",p)
}o.attr({"aria-controls":h.substring(1),"aria-labelledby":k});
j.attr("aria-labelledby",k)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)
},_createPanel:function(g){return c("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(j){if(c.isArray(j)){if(!j.length){j=false
}else{if(j.length===this.anchors.length){j=true
}}}for(var h=0,g;
(g=this.tabs[h]);
h++){if(j===true||c.inArray(h,j)!==-1){c(g).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=j
},_setupEvents:function(h){var g={click:function(i){i.preventDefault()
}};
if(h){c.each(h.split(" "),function(j,i){g[i]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,g);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(g){var i,h=this.element.parent();
if(g==="fill"){i=h.height();
i-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var k=c(this),j=k.css("position");
if(j==="absolute"||j==="fixed"){return
}i-=k.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){i-=c(this).outerHeight(true)
});
this.panels.each(function(){c(this).height(Math.max(0,i-c(this).innerHeight()+c(this).height()))
}).css("overflow","auto")
}else{if(g==="auto"){i=0;
this.panels.each(function(){i=Math.max(i,c(this).height("").height())
}).height(i)
}}},_eventHandler:function(g){var p=this.options,k=this.active,l=c(g.currentTarget),j=l.closest("li"),n=j[0]===k[0],h=n&&p.collapsible,i=h?c():this._getPanelForTab(j),m=!k.length?c():this._getPanelForTab(k),o={oldTab:k,oldPanel:m,newTab:h?c():j,newPanel:i};
g.preventDefault();
if(j.hasClass("ui-state-disabled")||j.hasClass("ui-tabs-loading")||this.running||(n&&!p.collapsible)||(this._trigger("beforeActivate",g,o)===false)){return
}p.active=h?false:this.tabs.index(j);
this.active=n?c():j;
if(this.xhr){this.xhr.abort()
}if(!m.length&&!i.length){c.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(i.length){this.load(this.tabs.index(j),g)
}this._toggle(g,o)
},_toggle:function(m,l){var k=this,g=l.newPanel,j=l.oldPanel;
this.running=true;
function i(){k.running=false;
k._trigger("activate",m,l)
}function h(){l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(g.length&&k.options.show){k._show(g,k.options.show,i)
}else{g.show();
i()
}}if(j.length&&this.options.hide){this._hide(j,this.options.hide,function(){l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
h()
})
}else{l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
j.hide();
h()
}j.attr({"aria-expanded":"false","aria-hidden":"true"});
l.oldTab.attr("aria-selected","false");
if(g.length&&j.length){l.oldTab.attr("tabIndex",-1)
}else{if(g.length){this.tabs.filter(function(){return c(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}g.attr({"aria-expanded":"true","aria-hidden":"false"});
l.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(h){var g,i=this._findActive(h);
if(i[0]===this.active[0]){return
}if(!i.length){i=this.active
}g=i.find(".ui-tabs-anchor")[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:c.noop})
},_findActive:function(g){return g===false?c():this.tabs.eq(g)
},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))
}return g
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(c.data(this,"ui-tabs-destroy")){c(this).remove()
}else{c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var g=c(this),h=g.data("ui-tabs-aria-controls");
if(h){g.attr("aria-controls",h).removeData("ui-tabs-aria-controls")
}else{g.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(g){var h=this.options.disabled;
if(h===false){return
}if(g===e){h=false
}else{g=this._getIndex(g);
if(c.isArray(h)){h=c.map(h,function(i){return i!==g?i:null
})
}else{h=c.map(this.tabs,function(i,j){return j!==g?j:null
})
}}this._setupDisabled(h)
},disable:function(g){var h=this.options.disabled;
if(h===true){return
}if(g===e){h=true
}else{g=this._getIndex(g);
if(c.inArray(g,h)!==-1){return
}if(c.isArray(h)){h=c.merge([g],h).sort()
}else{h=[g]
}}this._setupDisabled(h)
},load:function(i,m){i=this._getIndex(i);
var l=this,j=this.tabs.eq(i),h=j.find(".ui-tabs-anchor"),g=this._getPanelForTab(j),k={tab:j,panel:g};
if(b(h[0])){return
}this.xhr=c.ajax(this._ajaxSettings(h,m,k));
if(this.xhr&&this.xhr.statusText!=="canceled"){j.addClass("ui-tabs-loading");
g.attr("aria-busy","true");
this.xhr.success(function(n){setTimeout(function(){g.html(n);
l._trigger("load",m,k)
},1)
}).complete(function(o,n){setTimeout(function(){if(n==="abort"){l.panels.stop(false,true)
}j.removeClass("ui-tabs-loading");
g.removeAttr("aria-busy");
if(o===l.xhr){delete l.xhr
}},1)
})
}},_ajaxSettings:function(g,j,i){var h=this;
return{url:g.attr("href"),beforeSend:function(l,k){return h._trigger("beforeLoad",j,c.extend({jqXHR:l,ajaxSettings:k},i))
}}
},_getPanelForTab:function(g){var h=c(g).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+h))
}})
})(jQuery);
(function(d){var b=0;
function c(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);
e.push(g);
f.data("ui-tooltip-id",g).attr("aria-describedby",d.trim(e.join(" ")))
}function a(g){var h=g.data("ui-tooltip-id"),f=(g.attr("aria-describedby")||"").split(/\s+/),e=d.inArray(h,f);
if(e!==-1){f.splice(e,1)
}g.removeData("ui-tooltip-id");
f=d.trim(f.join(" "));
if(f){g.attr("aria-describedby",f)
}else{g.removeAttr("aria-describedby")
}}d.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=d(this).attr("title")||"";
return d("<a>").text(e).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(e,g){var f=this;
if(e==="disabled"){this[g?"_disable":"_enable"]();
this.options[e]=g;
return
}this._super(e,g);
if(e==="content"){d.each(this.tooltips,function(i,h){f._updateContent(h)
})
}},_disable:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true)
});
this.element.find(this.options.items).addBack().each(function(){var f=d(this);
if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=d(this);
if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))
}})
},open:function(f){var e=this,g=d(f?f.target:this.element).closest(this.options.items);
if(!g.length||g.data("ui-tooltip-id")){return
}if(g.attr("title")){g.data("ui-tooltip-title",g.attr("title"))
}g.data("ui-tooltip-open",true);
if(f&&f.type==="mouseover"){g.parents().each(function(){var i=d(this),h;
if(i.data("ui-tooltip-open")){h=d.Event("blur");
h.target=h.currentTarget=this;
e.close(h,true)
}if(i.attr("title")){i.uniqueId();
e.parents[this.id]={element:this,title:i.attr("title")};
i.attr("title","")
}})
}this._updateContent(g,f)
},_updateContent:function(j,i){var h,e=this.options.content,g=this,f=i?i.type:null;
if(typeof e==="string"){return this._open(i,j,e)
}h=e.call(j[0],function(k){if(!j.data("ui-tooltip-open")){return
}g._delay(function(){if(i){i.type=f
}this._open(i,j,k)
})
});
if(h){this._open(i,j,h)
}},_open:function(i,k,h){var j,g,f,l=d.extend({},this.options.position);
if(!h){return
}j=this._find(k);
if(j.length){j.find(".ui-tooltip-content").html(h);
return
}if(k.is("[title]")){if(i&&i.type==="mouseover"){k.attr("title","")
}else{k.removeAttr("title")
}}j=this._tooltip(k);
c(k,j.attr("id"));
j.find(".ui-tooltip-content").html(h);
function e(m){l.of=m;
if(j.is(":hidden")){return
}j.position(l)
}if(this.options.track&&i&&/^mouse/.test(i.type)){this._on(this.document,{mousemove:e});
e(i)
}else{j.position(d.extend({of:k},this.options.position))
}j.hide();
this._show(j,this.options.show);
if(this.options.show&&this.options.show.delay){f=this.delayedShow=setInterval(function(){if(j.is(":visible")){e(l.of);
clearInterval(f)
}},d.fx.interval)
}this._trigger("open",i,{tooltip:j});
g={keyup:function(m){if(m.keyCode===d.ui.keyCode.ESCAPE){var n=d.Event(m);
n.currentTarget=k[0];
this.close(n,true)
}},remove:function(){this._removeTooltip(j)
}};
if(!i||i.type==="mouseover"){g.mouseleave="close"
}if(!i||i.type==="focusin"){g.focusout="close"
}this._on(true,k,g)
},close:function(f){var e=this,h=d(f?f.currentTarget:this.element),g=this._find(h);
if(this.closing){return
}clearInterval(this.delayedShow);
if(h.data("ui-tooltip-title")){h.attr("title",h.data("ui-tooltip-title"))
}a(h);
g.stop(true);
this._hide(g,this.options.hide,function(){e._removeTooltip(d(this))
});
h.removeData("ui-tooltip-open");
this._off(h,"mouseleave focusout keyup");
if(h[0]!==this.element[0]){this._off(h,"remove")
}this._off(this.document,"mousemove");
if(f&&f.type==="mouseleave"){d.each(this.parents,function(j,i){d(i.element).attr("title",i.title);
delete e.parents[j]
})
}this.closing=true;
this._trigger("close",f,{tooltip:g});
this.closing=false
},_tooltip:function(e){var g="ui-tooltip-"+b++,f=d("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
d("<div>").addClass("ui-tooltip-content").appendTo(f);
f.appendTo(this.document[0].body);
this.tooltips[g]=e;
return f
},_find:function(e){var f=e.data("ui-tooltip-id");
return f?d("#"+f):d()
},_removeTooltip:function(e){e.remove();
delete this.tooltips[e.attr("id")]
},_destroy:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true);
d("#"+h).remove();
if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));
f.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
;
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(ah,O,Y){function U(b){var a=O.console;
ad[b]||(ad[b]=!0,ah.migrateWarnings.push(b),a&&a.warn&&!ah.migrateMute&&(a.warn("JQMIGRATE: "+b),ah.migrateTrace&&a.trace&&a.trace()))
}function al(d,b,c,f){if(Object.defineProperty){try{return Object.defineProperty(d,b,{configurable:!0,enumerable:!0,get:function(){return U(f),c
},set:function(a){U(f),c=a
}}),Y
}catch(e){}}ah._definePropertyBroken=!0,d[b]=c
}var ad={};
ah.migrateWarnings=[],!ah.migrateMute&&O.console&&O.console.log&&O.console.log("JQMIGRATE: Logging is active"),ah.migrateTrace===Y&&(ah.migrateTrace=!0),ah.migrateReset=function(){ad={},ah.migrateWarnings.length=0
},"BackCompat"===document.compatMode&&U("jQuery is not compatible with Quirks Mode");
var X=ah("<input/>",{size:1}).attr("size")&&ah.attrFn,P=ah.attr,L=ah.attrHooks.value&&ah.attrHooks.value.get||function(){return null
},aj=ah.attrHooks.value&&ah.attrHooks.value.set||function(){return Y
},aa=/^(?:input|button)$/i,ai=/^[238]$/,W=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,ag=/^(?:checked|selected)$/i;
al(ah,"attrFn",X||{},"jQuery.attrFn is deprecated"),ah.attr=function(f,b,e,d){var j=b.toLowerCase(),h=f&&f.nodeType;
return d&&(4>P.length&&U("jQuery.fn.attr( props, pass ) is deprecated"),f&&!ai.test(h)&&(X?b in X:ah.isFunction(ah.fn[b])))?ah(f)[b](e):("type"===b&&e!==Y&&aa.test(f.nodeName)&&f.parentNode&&U("Can't change the 'type' of an input or button in IE 6/7/8"),!ah.attrHooks[j]&&W.test(j)&&(ah.attrHooks[j]={get:function(k,l){var c,g=ah.prop(k,l);
return g===!0||"boolean"!=typeof g&&(c=k.getAttributeNode(l))&&c.nodeValue!==!1?l.toLowerCase():Y
},set:function(g,k,i){var c;
return k===!1?ah.removeAttr(g,i):(c=ah.propFix[i]||i,c in g&&(g[c]=!0),g.setAttribute(i,i.toLowerCase())),i
}},ag.test(j)&&U("jQuery.fn.attr('"+j+"') may use property instead of attribute")),P.call(ah,f,b,e))
},ah.attrHooks.value={get:function(b,a){var c=(b.nodeName||"").toLowerCase();
return"button"===c?L.apply(this,arguments):("input"!==c&&"option"!==c&&U("jQuery.fn.attr('value') no longer gets properties"),a in b?b.value:null)
},set:function(d,c){var b=(d.nodeName||"").toLowerCase();
return"button"===b?aj.apply(this,arguments):("input"!==b&&"option"!==b&&U("jQuery.fn.attr('value', val) no longer sets properties"),d.value=c,Y)
}};
var af,ae,K=ah.fn.init,Z=ah.parseJSON,F=/^([^<]*)(<[\w\W]+>)([^>]*)$/;
ah.fn.init=function(d,e,b){var c;
return d&&"string"==typeof d&&!ah.isPlainObject(e)&&(c=F.exec(ah.trim(d)))&&c[0]&&("<"!==d.charAt(0)&&U("$(html) HTML strings must start with '<' character"),c[3]&&U("$(html) HTML text after last tag is ignored"),"#"===c[0].charAt(0)&&(U("HTML string cannot start with a '#' character"),ah.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&(e=e.context),ah.parseHTML)?K.call(this,ah.parseHTML(c[2],e,!0),e,b):K.apply(this,arguments)
},ah.fn.init.prototype=ah.fn,ah.parseJSON=function(a){return a||null===a?Z.apply(this,arguments):(U("jQuery.parseJSON requires a valid JSON string"),null)
},ah.uaMatch=function(b){b=b.toLowerCase();
var a=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||0>b.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
},ah.browser||(af=ah.uaMatch(navigator.userAgent),ae={},af.browser&&(ae[af.browser]=!0,ae.version=af.version),ae.chrome?ae.webkit=!0:ae.webkit&&(ae.safari=!0),ah.browser=ae),al(ah,"browser",ah.browser,"jQuery.browser is deprecated"),ah.sub=function(){function a(c,d){return new a.fn.init(c,d)
}ah.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,c){return c&&c instanceof ah&&!(c instanceof a)&&(c=a(c)),ah.fn.init.call(this,d,c,b)
},a.fn.init.prototype=a.fn;
var b=a(document);
return U("jQuery.sub() is deprecated"),a
},ah.ajaxSetup({converters:{"text json":ah.parseJSON}});
var ak=ah.fn.data;
ah.fn.data=function(d){var b,c,e=this[0];
return !e||"events"!==d||1!==arguments.length||(b=ah.data(e,d),c=ah._data(e,d),b!==Y&&b!==c||c===Y)?ak.apply(this,arguments):(U("Use of jQuery.fn.data('events') is deprecated"),c)
};
var ac=/\/(java|ecma)script/i,J=ah.fn.andSelf||ah.fn.addBack;
ah.fn.andSelf=function(){return U("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),J.apply(this,arguments)
},ah.clean||(ah.clean=function(m,j,f,b){j=j||document,j=!j.nodeType&&j[0]||j,j=j.ownerDocument||j,U("jQuery.clean() is deprecated");
var n,k,h,e,g=[];
if(ah.merge(g,ah.buildFragment(m,j).childNodes),f){for(h=function(a){return !a.type||ac.test(a.type)?b?b.push(a.parentNode?a.parentNode.removeChild(a):a):f.appendChild(a):Y
},n=0;
null!=(k=g[n]);
n++){ah.nodeName(k,"script")&&h(k)||(f.appendChild(k),k.getElementsByTagName!==Y&&(e=ah.grep(ah.merge([],k.getElementsByTagName("script")),h),g.splice.apply(g,[n+1,0].concat(e)),n+=e.length))
}}return g
});
var B=ah.event.add,G=ah.event.remove,ab=ah.event.trigger,D=ah.fn.toggle,q=ah.fn.live,E=ah.fn.die,z="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",R=RegExp("\\b(?:"+z+")\\b"),I=/(?:^|\s)hover(\.\S+|)\b/,V=function(a){return"string"!=typeof a||ah.event.special.hover?a:(I.test(a)&&U("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),a&&a.replace(I,"mouseenter$1 mouseleave$1"))
};
ah.event.props&&"attrChange"!==ah.event.props[0]&&ah.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),ah.event.dispatch&&al(ah.event,"handle",ah.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),ah.event.add=function(f,d,g,b,c){f!==document&&R.test(d)&&U("AJAX events should be attached to document: "+d),B.call(this,f,V(d||""),g,b,c)
},ah.event.remove=function(f,c,g,d,b){G.call(this,f,V(c)||"",g,d,b)
},ah.fn.error=function(){var a=Array.prototype.slice.call(arguments,0);
return U("jQuery.fn.error() is deprecated"),a.splice(0,0,"error"),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this)
},ah.fn.toggle=function(d,g){if(!ah.isFunction(d)||!ah.isFunction(g)){return D.apply(this,arguments)
}U("jQuery.fn.toggle(handler, handler...) is deprecated");
var b=arguments,c=d.guid||ah.guid++,f=0,e=function(h){var a=(ah._data(this,"lastToggle"+d.guid)||0)%f;
return ah._data(this,"lastToggle"+d.guid,a+1),h.preventDefault(),b[a].apply(this,arguments)||!1
};
for(e.guid=c;
b.length>f;
){b[f++].guid=c
}return this.click(e)
},ah.fn.live=function(c,d,b){return U("jQuery.fn.live() is deprecated"),q?q.apply(this,arguments):(ah(this.context).on(c,this.selector,d,b),this)
},ah.fn.die=function(a,b){return U("jQuery.fn.die() is deprecated"),E?E.apply(this,arguments):(ah(this.context).off(a,this.selector||"**",b),this)
},ah.event.trigger=function(d,c,f,b){return f||R.test(d)||U("Global events are undocumented and deprecated"),ab.call(this,d,c,f||document,b)
},ah.each(z.split("|"),function(a,b){ah.event.special[b]={setup:function(){var c=this;
return c!==document&&(ah.event.add(document,b+"."+ah.guid,function(){ah.event.trigger(b,null,c,!0)
}),ah._data(this,b,ah.guid++)),!1
},teardown:function(){return this!==document&&ah.event.remove(document,b+"."+ah._data(this,b)),!1
}}
})
}(jQuery,window);
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports!=="undefined"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){var b=window.Slick||{};
b=(function(){var c=0;
function d(g,i){var f=this,h,e;
f.defaults={accessibility:true,adaptiveHeight:false,appendArrows:a(g),appendDots:a(g),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(k,j){return'<button type="button" data-role="none">'+(j+1)+"</button>"
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",fade:false,focusOnSelect:false,infinite:true,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:true,pauseOnDotsHover:false,responsive:null,rtl:false,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,variableWidth:false,vertical:false,waitForAnimate:true};
f.initials={animating:false,dragging:false,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false};
a.extend(f,f.initials);
f.activeBreakpoint=null;
f.animType=null;
f.animProp=null;
f.breakpoints=[];
f.breakpointSettings=[];
f.cssTransitions=false;
f.paused=false;
f.positionProp=null;
f.$slider=a(g);
f.$slidesCache=null;
f.transformType=null;
f.transitionType=null;
f.windowWidth=0;
f.windowTimer=null;
f.options=a.extend({},f.defaults,i);
f.originalSettings=f.options;
h=f.options.responsive||null;
if(h&&h.length>-1){for(e in h){if(h.hasOwnProperty(e)){f.breakpoints.push(h[e].breakpoint);
f.breakpointSettings[h[e].breakpoint]=h[e].settings
}}f.breakpoints.sort(function(k,j){return j-k
})
}f.autoPlay=a.proxy(f.autoPlay,f);
f.autoPlayClear=a.proxy(f.autoPlayClear,f);
f.changeSlide=a.proxy(f.changeSlide,f);
f.selectHandler=a.proxy(f.selectHandler,f);
f.setPosition=a.proxy(f.setPosition,f);
f.swipeHandler=a.proxy(f.swipeHandler,f);
f.dragHandler=a.proxy(f.dragHandler,f);
f.keyHandler=a.proxy(f.keyHandler,f);
f.autoPlayIterator=a.proxy(f.autoPlayIterator,f);
f.instanceUid=c++;
f.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
f.init()
}return d
}());
b.prototype.addSlide=function(c,e,f){var d=this;
if(typeof(e)==="boolean"){f=e;
e=null
}else{if(e<0||(e>=d.slideCount)){return false
}}d.unload();
if(typeof(e)==="number"){if(e===0&&d.$slides.length===0){a(c).appendTo(d.$slideTrack)
}else{if(f){a(c).insertBefore(d.$slides.eq(e))
}else{a(c).insertAfter(d.$slides.eq(e))
}}}else{if(f===true){a(c).prependTo(d.$slideTrack)
}else{a(c).appendTo(d.$slideTrack)
}}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slides.each(function(g,h){a(h).attr("index",g)
});
d.$slidesCache=d.$slides;
d.reinit()
};
b.prototype.animateSlide=function(g,f){var e={},d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.animate({height:c},d.options.speed)
}if(d.options.rtl===true&&d.options.vertical===false){g=-g
}if(d.transformsEnabled===false){if(d.options.vertical===false){d.$slideTrack.animate({left:g},d.options.speed,d.options.easing,f)
}else{d.$slideTrack.animate({top:g},d.options.speed,d.options.easing,f)
}}else{if(d.cssTransitions===false){a({animStart:d.currentLeft}).animate({animStart:g},{duration:d.options.speed,easing:d.options.easing,step:function(h){if(d.options.vertical===false){e[d.animType]="translate("+h+"px, 0px)";
d.$slideTrack.css(e)
}else{e[d.animType]="translate(0px,"+h+"px)";
d.$slideTrack.css(e)
}},complete:function(){if(f){f.call()
}}})
}else{d.applyTransition();
if(d.options.vertical===false){e[d.animType]="translate3d("+g+"px, 0px, 0px)"
}else{e[d.animType]="translate3d(0px,"+g+"px, 0px)"
}d.$slideTrack.css(e);
if(f){setTimeout(function(){d.disableTransition();
f.call()
},d.options.speed)
}}}};
b.prototype.asNavFor=function(e){var d=this,c=d.options.asNavFor!=null?a(d.options.asNavFor).getSlick():null;
if(c!=null){c.slideHandler(e,true)
}};
b.prototype.applyTransition=function(c){var d=this,e={};
if(d.options.fade===false){e[d.transitionType]=d.transformType+" "+d.options.speed+"ms "+d.options.cssEase
}else{e[d.transitionType]="opacity "+d.options.speed+"ms "+d.options.cssEase
}if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.autoPlay=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}if(c.slideCount>c.options.slidesToShow&&c.paused!==true){c.autoPlayTimer=setInterval(c.autoPlayIterator,c.options.autoplaySpeed)
}};
b.prototype.autoPlayClear=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}};
b.prototype.autoPlayIterator=function(){var c=this;
if(c.options.infinite===false){if(c.direction===1){if((c.currentSlide+1)===c.slideCount-1){c.direction=0
}c.slideHandler(c.currentSlide+c.options.slidesToScroll)
}else{if((c.currentSlide-1===0)){c.direction=1
}c.slideHandler(c.currentSlide-c.options.slidesToScroll)
}}else{c.slideHandler(c.currentSlide+c.options.slidesToScroll)
}};
b.prototype.buildArrows=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow=a(c.options.prevArrow);
c.$nextArrow=a(c.options.nextArrow);
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.appendTo(c.options.appendArrows)
}if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.appendTo(c.options.appendArrows)
}if(c.options.infinite!==true){c.$prevArrow.addClass("slick-disabled")
}}};
b.prototype.buildDots=function(){var d=this,e,c;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){c='<ul class="'+d.options.dotsClass+'">';
for(e=0;
e<=d.getDotCount();
e+=1){c+="<li>"+d.options.customPaging.call(this,d,e)+"</li>"
}c+="</ul>";
d.$dots=a(c).appendTo(d.options.appendDots);
d.$dots.find("li").first().addClass("slick-active")
}};
b.prototype.buildOut=function(){var c=this;
c.$slides=c.$slider.children(c.options.slide+":not(.slick-cloned)").addClass("slick-slide");
c.slideCount=c.$slides.length;
c.$slides.each(function(d,e){a(e).attr("index",d)
});
c.$slidesCache=c.$slides;
c.$slider.addClass("slick-slider");
c.$slideTrack=(c.slideCount===0)?a('<div class="slick-track"/>').appendTo(c.$slider):c.$slides.wrapAll('<div class="slick-track"/>').parent();
c.$list=c.$slideTrack.wrap('<div class="slick-list"/>').parent();
c.$slideTrack.css("opacity",0);
if(c.options.centerMode===true){c.options.slidesToScroll=1;
if(c.options.slidesToShow%2===0){c.options.slidesToShow=3
}}a("img[data-lazy]",c.$slider).not("[src]").addClass("slick-loading");
c.setupInfinite();
c.buildArrows();
c.buildDots();
c.updateDots();
if(c.options.accessibility===true){c.$list.prop("tabIndex",0)
}c.setSlideClasses(typeof this.currentSlide==="number"?this.currentSlide:0);
if(c.options.draggable===true){c.$list.addClass("draggable")
}};
b.prototype.checkResponsive=function(){var d=this,c,e;
if(d.originalSettings.responsive&&d.originalSettings.responsive.length>-1&&d.originalSettings.responsive!==null){e=null;
for(c in d.breakpoints){if(d.breakpoints.hasOwnProperty(c)){if(a(window).width()<d.breakpoints[c]){e=d.breakpoints[c]
}}}if(e!==null){if(d.activeBreakpoint!==null){if(e!==d.activeBreakpoint){d.activeBreakpoint=e;
d.options=a.extend({},d.options,d.breakpointSettings[e]);
d.refresh()
}}else{d.activeBreakpoint=e;
d.options=a.extend({},d.options,d.breakpointSettings[e]);
d.refresh()
}}else{if(d.activeBreakpoint!==null){d.activeBreakpoint=null;
d.options=a.extend({},d.options,d.originalSettings);
d.refresh()
}}}};
b.prototype.changeSlide=function(g){var e=this,c=a(g.target),i,f,h;
c.is("a")&&g.preventDefault();
h=(e.slideCount%e.options.slidesToScroll!==0);
i=h?0:(e.slideCount-e.currentSlide)%e.options.slidesToScroll;
switch(g.data.message){case"previous":f=i===0?e.options.slidesToScroll:e.options.slidesToShow-i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide-f)
}break;
case"next":f=i===0?e.options.slidesToScroll:i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide+f)
}break;
case"index":var d=g.data.index===0?0:g.data.index||a(g.target).parent().index()*e.options.slidesToScroll;
e.slideHandler(d);
default:return false
}};
b.prototype.destroy=function(){var c=this;
c.autoPlayClear();
c.touchObject={};
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow){c.$prevArrow.remove();
c.$nextArrow.remove()
}if(c.$slides.parent().hasClass("slick-track")){c.$slides.unwrap().unwrap()
}c.$slides.removeClass("slick-slide slick-active slick-visible").css("width","");
c.$slider.removeClass("slick-slider");
c.$slider.removeClass("slick-initialized");
c.$list.off(".slick");
a(window).off(".slick-"+c.instanceUid);
a(document).off(".slick-"+c.instanceUid)
};
b.prototype.disableTransition=function(c){var d=this,e={};
e[d.transitionType]="";
if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.fadeSlide=function(d,e,f){var c=this;
if(c.cssTransitions===false){c.$slides.eq(e).css({zIndex:1000});
c.$slides.eq(e).animate({opacity:1},c.options.speed,c.options.easing,f);
c.$slides.eq(d).animate({opacity:0},c.options.speed,c.options.easing)
}else{c.applyTransition(e);
c.applyTransition(d);
c.$slides.eq(e).css({opacity:1,zIndex:1000});
c.$slides.eq(d).css({opacity:0});
if(f){setTimeout(function(){c.disableTransition(e);
c.disableTransition(d);
f.call()
},c.options.speed)
}}};
b.prototype.filterSlides=function(d){var c=this;
if(d!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.filter(d).appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.getCurrent=function(){var c=this;
return c.currentSlide
};
b.prototype.getDotCount=function(){var c=this,f=0,e=0,g=0,d;
d=c.options.infinite===true?c.slideCount+c.options.slidesToShow-c.options.slidesToScroll:c.slideCount;
while(f<d){g++;
e+=c.options.slidesToScroll;
f=e+c.options.slidesToShow
}return g
};
b.prototype.getLeft=function(f){var d=this,i,e,c=0,h,g;
d.slideOffset=0;
e=d.$slides.first().outerHeight();
if(d.options.infinite===true){if(d.slideCount>d.options.slidesToShow){d.slideOffset=(d.slideWidth*d.options.slidesToShow)*-1;
c=(e*d.options.slidesToShow)*-1
}if(d.slideCount%d.options.slidesToScroll!==0){if(f+d.options.slidesToScroll>d.slideCount&&d.slideCount>d.options.slidesToShow){d.slideOffset=((d.slideCount%d.options.slidesToShow)*d.slideWidth)*-1;
c=((d.slideCount%d.options.slidesToShow)*e)*-1
}}}else{if(d.slideCount%d.options.slidesToShow!==0){if(f+d.options.slidesToScroll>d.slideCount&&d.slideCount>d.options.slidesToShow){d.slideOffset=(d.options.slidesToShow*d.slideWidth)-((d.slideCount%d.options.slidesToShow)*d.slideWidth);
c=((d.slideCount%d.options.slidesToShow)*e)
}}}if(d.slideCount<=d.options.slidesToShow){d.slideOffset=0;
c=0
}if(d.options.centerMode===true&&d.options.infinite===true){d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)-d.slideWidth
}else{if(d.options.centerMode===true){d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)
}}if(d.options.vertical===false){i=((f*d.slideWidth)*-1)+d.slideOffset
}else{i=((f*e)*-1)+c
}if(d.options.variableWidth===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow)
}i=g[0]?g[0].offsetLeft*-1:0;
if(d.options.centerMode===true){if(d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow+1)
}i=g[0]?g[0].offsetLeft*-1:0;
i+=(d.$list.width()-g.outerWidth())/2
}}return i
};
b.prototype.init=function(){var c=this;
if(!a(c.$slider).hasClass("slick-initialized")){a(c.$slider).addClass("slick-initialized");
c.buildOut();
c.setProps();
c.startLoad();
c.loadSlider();
c.initializeEvents();
c.checkResponsive()
}if(c.options.onInit!==null){c.options.onInit.call(this,c)
}};
b.prototype.initArrowEvents=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.on("click.slick",{message:"previous"},c.changeSlide);
c.$nextArrow.on("click.slick",{message:"next"},c.changeSlide)
}};
b.prototype.initDotEvents=function(){var c=this;
if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).on("click.slick",{message:"index"},c.changeSlide)
}if(c.options.dots===true&&c.options.pauseOnDotsHover===true&&c.options.autoplay===true){a("li",c.$dots).on("mouseenter.slick",c.autoPlayClear).on("mouseleave.slick",c.autoPlay)
}};
b.prototype.initializeEvents=function(){var c=this;
c.initArrowEvents();
c.initDotEvents();
c.$list.on("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler);
c.$list.on("touchmove.slick mousemove.slick",{action:"move"},c.swipeHandler);
c.$list.on("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler);
c.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler);
if(c.options.pauseOnHover===true&&c.options.autoplay===true){c.$list.on("mouseenter.slick",c.autoPlayClear);
c.$list.on("mouseleave.slick",c.autoPlay)
}if(c.options.accessibility===true){c.$list.on("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.options.slide,c.$slideTrack).on("click.slick",c.selectHandler)
}a(window).on("orientationchange.slick.slick-"+c.instanceUid,function(){c.checkResponsive();
c.setPosition()
});
a(window).on("resize.slick.slick-"+c.instanceUid,function(){if(a(window).width()!==c.windowWidth){clearTimeout(c.windowDelay);
c.windowDelay=window.setTimeout(function(){c.windowWidth=a(window).width();
c.checkResponsive();
c.setPosition()
},50)
}});
a(window).on("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).on("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.initUI=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.show();
c.$nextArrow.show()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.show()
}if(c.options.autoplay===true){c.autoPlay()
}};
b.prototype.keyHandler=function(d){var c=this;
if(d.keyCode===37){c.changeSlide({data:{message:"previous"}})
}else{if(d.keyCode===39){c.changeSlide({data:{message:"next"}})
}}};
b.prototype.lazyLoad=function(){var e=this,c,h,g,f;
function d(i){a("img[data-lazy]",i).each(function(){var j=a(this),k=a(this).attr("data-lazy");
j.load(function(){j.animate({opacity:1},200)
}).css({opacity:0}).attr("src",k).removeAttr("data-lazy").removeClass("slick-loading")
})
}if(e.options.centerMode===true){if(e.options.infinite===true){g=e.currentSlide+(e.options.slidesToShow/2+1);
f=g+e.options.slidesToShow+2
}else{g=Math.max(0,e.currentSlide-(e.options.slidesToShow/2+1));
f=2+(e.options.slidesToShow/2+1)+e.currentSlide
}}else{g=e.options.infinite?e.options.slidesToShow+e.currentSlide:e.currentSlide;
f=g+e.options.slidesToShow;
if(e.options.fade===true){if(g>0){g--
}if(f<=e.slideCount){f++
}}}c=e.$slider.find(".slick-slide").slice(g,f);
d(c);
if(e.slideCount<=e.options.slidesToShow){h=e.$slider.find(".slick-slide");
d(h)
}else{if(e.currentSlide>=e.slideCount-e.options.slidesToShow){h=e.$slider.find(".slick-cloned").slice(0,e.options.slidesToShow);
d(h)
}else{if(e.currentSlide===0){h=e.$slider.find(".slick-cloned").slice(e.options.slidesToShow*-1);
d(h)
}}}};
b.prototype.loadSlider=function(){var c=this;
c.setPosition();
c.$slideTrack.css({opacity:1});
c.$slider.removeClass("slick-loading");
c.initUI();
if(c.options.lazyLoad==="progressive"){c.progressiveLazyLoad()
}};
b.prototype.postSlide=function(d){var c=this;
if(c.options.onAfterChange!==null){c.options.onAfterChange.call(this,c,d)
}c.animating=false;
c.setPosition();
c.swipeLeft=null;
if(c.options.autoplay===true&&c.paused===false){c.autoPlay()
}};
b.prototype.progressiveLazyLoad=function(){var d=this,c,e;
c=a("img[data-lazy]").length;
if(c>0){e=a("img[data-lazy]",d.$slider).first();
e.attr("src",e.attr("data-lazy")).removeClass("slick-loading").load(function(){e.removeAttr("data-lazy");
d.progressiveLazyLoad()
}).error(function(){e.removeAttr("data-lazy");
d.progressiveLazyLoad()
})
}};
b.prototype.refresh=function(){var c=this,d=c.currentSlide;
c.destroy();
a.extend(c,c.initials);
c.currentSlide=d;
c.init()
};
b.prototype.reinit=function(){var c=this;
c.$slides=c.$slideTrack.children(c.options.slide).addClass("slick-slide");
c.slideCount=c.$slides.length;
if(c.currentSlide>=c.slideCount&&c.currentSlide!==0){c.currentSlide=c.currentSlide-c.options.slidesToScroll
}if(c.slideCount<=c.options.slidesToShow){c.currentSlide=0
}c.setProps();
c.setupInfinite();
c.buildArrows();
c.updateArrows();
c.initArrowEvents();
c.buildDots();
c.updateDots();
c.initDotEvents();
if(c.options.focusOnSelect===true){a(c.options.slide,c.$slideTrack).on("click.slick",c.selectHandler)
}c.setSlideClasses(0);
c.setPosition();
if(c.options.onReInit!==null){c.options.onReInit.call(this,c)
}};
b.prototype.removeSlide=function(d,e){var c=this;
if(typeof(d)==="boolean"){e=d;
d=e===true?0:c.slideCount-1
}else{d=e===true?--d:d
}if(c.slideCount<1||d<0||d>c.slideCount-1){return false
}c.unload();
c.$slideTrack.children(this.options.slide).eq(d).remove();
c.$slides=c.$slideTrack.children(this.options.slide);
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.append(c.$slides);
c.$slidesCache=c.$slides;
c.reinit()
};
b.prototype.setCSS=function(d){var e=this,f={},c,g;
if(e.options.rtl===true){d=-d
}c=e.positionProp=="left"?d+"px":"0px";
g=e.positionProp=="top"?d+"px":"0px";
f[e.positionProp]=d;
if(e.transformsEnabled===false){e.$slideTrack.css(f)
}else{f={};
if(e.cssTransitions===false){f[e.animType]="translate("+c+", "+g+")";
e.$slideTrack.css(f)
}else{f[e.animType]="translate3d("+c+", "+g+", 0px)";
e.$slideTrack.css(f)
}}};
b.prototype.setDimensions=function(){var c=this;
if(c.options.vertical===false){if(c.options.centerMode===true){c.$list.css({padding:("0px "+c.options.centerPadding)})
}}else{c.$list.height(c.$slides.first().outerHeight(true)*c.options.slidesToShow);
if(c.options.centerMode===true){c.$list.css({padding:(c.options.centerPadding+" 0px")})
}}c.listWidth=c.$list.width();
c.listHeight=c.$list.height();
if(c.options.vertical===false&&c.options.variableWidth===false){c.slideWidth=Math.ceil(c.listWidth/c.options.slidesToShow);
c.$slideTrack.width(Math.ceil((c.slideWidth*c.$slideTrack.children(".slick-slide").length)))
}else{if(c.options.variableWidth===true){c.slideWidth=0;
c.$slideTrack.children(".slick-slide").each(function(){c.slideWidth+=Math.ceil(a(this).outerWidth(true))
});
c.$slideTrack.width(Math.ceil(c.slideWidth)+1)
}else{c.slideWidth=Math.ceil(c.listWidth);
c.$slideTrack.height(Math.ceil((c.$slides.first().outerHeight(true)*c.$slideTrack.children(".slick-slide").length)))
}}var d=c.$slides.first().outerWidth(true)-c.$slides.first().width();
if(c.options.variableWidth===false){c.$slideTrack.children(".slick-slide").width(c.slideWidth-d)
}};
b.prototype.setFade=function(){var c=this,d;
c.$slides.each(function(e,f){d=(c.slideWidth*e)*-1;
a(f).css({position:"relative",left:d,top:0,zIndex:800,opacity:0})
});
c.$slides.eq(c.currentSlide).css({zIndex:900,opacity:1})
};
b.prototype.setHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.css("height",c)
}};
b.prototype.setPosition=function(){var c=this;
c.setDimensions();
c.setHeight();
if(c.options.fade===false){c.setCSS(c.getLeft(c.currentSlide))
}else{c.setFade()
}};
b.prototype.setProps=function(){var d=this,c=document.body.style;
d.positionProp=d.options.vertical===true?"top":"left";
if(d.positionProp==="top"){d.$slider.addClass("slick-vertical")
}else{d.$slider.removeClass("slick-vertical")
}if(c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.msTransition!==undefined){if(d.options.useCSS===true){d.cssTransitions=true
}}if(c.OTransform!==undefined){d.animType="OTransform";
d.transformType="-o-transform";
d.transitionType="OTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.MozTransform!==undefined){d.animType="MozTransform";
d.transformType="-moz-transform";
d.transitionType="MozTransition";
if(c.perspectiveProperty===undefined&&c.MozPerspective===undefined){d.animType=false
}}if(c.webkitTransform!==undefined){d.animType="webkitTransform";
d.transformType="-webkit-transform";
d.transitionType="webkitTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.msTransform!==undefined){d.animType="msTransform";
d.transformType="-ms-transform";
d.transitionType="msTransition";
if(c.msTransform===undefined){d.animType=false
}}if(c.transform!==undefined&&d.animType!==false){d.animType="transform";
d.transformType="transform";
d.transitionType="transition"
}d.transformsEnabled=(d.animType!==null&&d.animType!==false)
};
b.prototype.setSlideClasses=function(f){var e=this,c,d,h,g;
e.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center");
d=e.$slider.find(".slick-slide");
if(e.options.centerMode===true){c=Math.floor(e.options.slidesToShow/2);
if(e.options.infinite===true){if(f>=c&&f<=(e.slideCount-1)-c){e.$slides.slice(f-c,f+c+1).addClass("slick-active")
}else{h=e.options.slidesToShow+f;
d.slice(h-c+1,h+c+2).addClass("slick-active")
}if(f===0){d.eq(d.length-1-e.options.slidesToShow).addClass("slick-center")
}else{if(f===e.slideCount-1){d.eq(e.options.slidesToShow).addClass("slick-center")
}}}e.$slides.eq(f).addClass("slick-center")
}else{if(f>=0&&f<=(e.slideCount-e.options.slidesToShow)){e.$slides.slice(f,f+e.options.slidesToShow).addClass("slick-active")
}else{if(d.length<=e.options.slidesToShow){d.addClass("slick-active")
}else{g=e.slideCount%e.options.slidesToShow;
h=e.options.infinite===true?e.options.slidesToShow+f:f;
if(e.options.slidesToShow==e.options.slidesToScroll&&(e.slideCount-f)<e.options.slidesToShow){d.slice(h-(e.options.slidesToShow-g),h+g).addClass("slick-active")
}else{d.slice(h,h+e.options.slidesToShow).addClass("slick-active")
}}}}if(e.options.lazyLoad==="ondemand"){e.lazyLoad()
}};
b.prototype.setupInfinite=function(){var c=this,d,f,e;
if(c.options.fade===true||c.options.vertical===true){c.options.centerMode=false
}if(c.options.infinite===true&&c.options.fade===false){f=null;
if(c.slideCount>c.options.slidesToShow){if(c.options.centerMode===true){e=c.options.slidesToShow+1
}else{e=c.options.slidesToShow
}for(d=c.slideCount;
d>(c.slideCount-e);
d-=1){f=d-1;
a(c.$slides[f]).clone(true).attr("id","").attr("index",f-c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
}for(d=0;
d<e;
d+=1){f=d;
a(c.$slides[f]).clone(true).attr("id","").attr("index",f+c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
}c.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")
})
}}};
b.prototype.selectHandler=function(e){var d=this;
var c=parseInt(a(e.target).parents(".slick-slide").attr("index"));
if(!c){c=0
}if(d.slideCount<=d.options.slidesToShow){return
}d.slideHandler(c)
};
b.prototype.slideHandler=function(e,h){var c,k,g,i,d,f=null,j=this;
h=h||false;
if(j.animating===true&&j.options.waitForAnimate===true){return false
}if(h===false){j.asNavFor(e)
}c=e;
f=j.getLeft(c);
i=j.getLeft(j.currentSlide);
d=j.slideCount%j.options.slidesToScroll!==0?j.options.slidesToScroll:0;
j.currentLeft=j.swipeLeft===null?i:j.swipeLeft;
if(j.options.infinite===false&&j.options.centerMode===false&&(e<0||e>(j.slideCount-j.options.slidesToShow+d))){if(j.options.fade===false){c=j.currentSlide;
j.animateSlide(i,function(){j.postSlide(c)
})
}return false
}else{if(j.options.infinite===false&&j.options.centerMode===true&&(e<0||e>(j.slideCount-j.options.slidesToScroll))){if(j.options.fade===false){c=j.currentSlide;
j.animateSlide(i,function(){j.postSlide(c)
})
}return false
}}if(j.options.autoplay===true){clearInterval(j.autoPlayTimer)
}if(c<0){if(j.slideCount%j.options.slidesToScroll!==0){k=j.slideCount-(j.slideCount%j.options.slidesToScroll)
}else{k=j.slideCount+c
}}else{if(c>=j.slideCount){if(j.slideCount%j.options.slidesToScroll!==0){k=0
}else{k=c-j.slideCount
}}else{k=c
}}j.animating=true;
if(j.options.onBeforeChange!==null&&e!==j.currentSlide){j.options.onBeforeChange.call(this,j,j.currentSlide,k)
}g=j.currentSlide;
j.currentSlide=k;
j.setSlideClasses(j.currentSlide);
j.updateDots();
j.updateArrows();
if(j.options.fade===true){j.fadeSlide(g,k,function(){j.postSlide(k)
});
return false
}j.animateSlide(f,function(){j.postSlide(k)
})
};
b.prototype.startLoad=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.hide();
c.$nextArrow.hide()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.hide()
}c.$slider.addClass("slick-loading")
};
b.prototype.swipeDirection=function(){var c,f,e,g,d=this;
c=d.touchObject.startX-d.touchObject.curX;
f=d.touchObject.startY-d.touchObject.curY;
e=Math.atan2(f,c);
g=Math.round(e*180/Math.PI);
if(g<0){g=360-Math.abs(g)
}if((g<=45)&&(g>=0)){return"left"
}if((g<=360)&&(g>=315)){return"left"
}if((g>=135)&&(g<=225)){return"right"
}return"vertical"
};
b.prototype.swipeEnd=function(g){var f=this,c,d,e;
f.dragging=false;
if(f.touchObject.curX===undefined){return false
}if(f.touchObject.swipeLength>=f.touchObject.minSwipe){a(g.target).on("click.slick",function(h){h.stopImmediatePropagation();
h.stopPropagation();
h.preventDefault();
a(h.target).off("click.slick")
});
if(f.options.swipeToSlide===true){d=Math.round(f.touchObject.swipeLength/f.slideWidth);
c=d
}else{c=f.options.slidesToScroll
}switch(f.swipeDirection()){case"left":f.slideHandler(f.currentSlide+c);
f.touchObject={};
break;
case"right":f.slideHandler(f.currentSlide-c);
f.touchObject={};
break
}}else{if(f.touchObject.startX!==f.touchObject.curX){f.slideHandler(f.currentSlide);
f.touchObject={}
}}};
b.prototype.swipeHandler=function(d){var c=this;
if((c.options.swipe===false)||("ontouchend" in document&&c.options.swipe===false)){return
}else{if(c.options.draggable===false&&d.type.indexOf("mouse")!==-1){return
}}c.touchObject.fingerCount=d.originalEvent&&d.originalEvent.touches!==undefined?d.originalEvent.touches.length:1;
c.touchObject.minSwipe=c.listWidth/c.options.touchThreshold;
switch(d.data.action){case"start":c.swipeStart(d);
break;
case"move":c.swipeMove(d);
break;
case"end":c.swipeEnd(d);
break
}};
b.prototype.swipeMove=function(f){var e=this,g,d,c,h;
h=f.originalEvent!==undefined?f.originalEvent.touches:null;
g=e.getLeft(e.currentSlide);
if(!e.dragging||h&&h.length!==1){return false
}e.touchObject.curX=h!==undefined?h[0].pageX:f.clientX;
e.touchObject.curY=h!==undefined?h[0].pageY:f.clientY;
e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curX-e.touchObject.startX,2)));
d=e.swipeDirection();
if(d==="vertical"){return
}if(f.originalEvent!==undefined&&e.touchObject.swipeLength>4){f.preventDefault()
}c=e.touchObject.curX>e.touchObject.startX?1:-1;
if(e.options.vertical===false){e.swipeLeft=g+e.touchObject.swipeLength*c
}else{e.swipeLeft=g+(e.touchObject.swipeLength*(e.$list.height()/e.listWidth))*c
}if(e.options.fade===true||e.options.touchMove===false){return false
}if(e.animating===true){e.swipeLeft=null;
return false
}e.setCSS(e.swipeLeft)
};
b.prototype.swipeStart=function(d){var c=this,e;
if(c.touchObject.fingerCount!==1||c.slideCount<=c.options.slidesToShow){c.touchObject={};
return false
}if(d.originalEvent!==undefined&&d.originalEvent.touches!==undefined){e=d.originalEvent.touches[0]
}c.touchObject.startX=c.touchObject.curX=e!==undefined?e.pageX:d.clientX;
c.touchObject.startY=c.touchObject.curY=e!==undefined?e.pageY:d.clientY;
c.dragging=true
};
b.prototype.unfilterSlides=function(){var c=this;
if(c.$slidesCache!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow){c.$prevArrow.remove();
c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")
};
b.prototype.updateArrows=function(){var c=this;
if(c.options.arrows===true&&c.options.infinite!==true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.removeClass("slick-disabled");
c.$nextArrow.removeClass("slick-disabled");
if(c.currentSlide===0){c.$prevArrow.addClass("slick-disabled");
c.$nextArrow.removeClass("slick-disabled")
}else{if(c.currentSlide>=c.slideCount-c.options.slidesToShow){c.$nextArrow.addClass("slick-disabled");
c.$prevArrow.removeClass("slick-disabled")
}}}};
b.prototype.updateDots=function(){var c=this;
if(c.$dots!==null){c.$dots.find("li").removeClass("slick-active");
c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active")
}};
a.fn.slick=function(d){var c=this;
return c.each(function(e,f){f.slick=new b(f,d)
})
};
a.fn.slickAdd=function(c,f,e){var d=this;
return d.each(function(g,h){h.slick.addSlide(c,f,e)
})
};
a.fn.slickCurrentSlide=function(){var c=this;
return c.get(0).slick.getCurrent()
};
a.fn.slickFilter=function(d){var c=this;
return c.each(function(e,f){f.slick.filterSlides(d)
})
};
a.fn.slickGoTo=function(c){var d=this;
return d.each(function(e,f){f.slick.changeSlide({data:{message:"index",index:parseInt(c)}})
})
};
a.fn.slickNext=function(){var c=this;
return c.each(function(d,e){e.slick.changeSlide({data:{message:"next"}})
})
};
a.fn.slickPause=function(){var c=this;
return c.each(function(d,e){e.slick.autoPlayClear();
e.slick.paused=true
})
};
a.fn.slickPlay=function(){var c=this;
return c.each(function(d,e){e.slick.paused=false;
e.slick.autoPlay()
})
};
a.fn.slickPrev=function(){var c=this;
return c.each(function(d,e){e.slick.changeSlide({data:{message:"previous"}})
})
};
a.fn.slickRemove=function(d,e){var c=this;
return c.each(function(f,g){g.slick.removeSlide(d,e)
})
};
a.fn.slickGetOption=function(d){var c=this;
return c.get(0).slick.options[d]
};
a.fn.slickSetOption=function(e,f,d){var c=this;
return c.each(function(g,h){h.slick.options[e]=f;
if(d===true){h.slick.unload();
h.slick.reinit()
}})
};
a.fn.slickUnfilter=function(){var c=this;
return c.each(function(d,e){e.slick.unfilterSlides()
})
};
a.fn.unslick=function(){var c=this;
return c.each(function(d,e){if(e.slick){e.slick.destroy()
}})
};
a.fn.getSlick=function(){var d=null;
var c=this;
c.each(function(e,f){d=f.slick
});
return d
}
}));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,w){if(p!==undefined&&!f.isFunction(p)){w=f.extend({},b.defaults,w);
if(typeof w.expires==="number"){var r=w.expires,v=w.expires=new Date();
v.setTime(+v+r*86400000)
}return(document.cookie=[d(q),"=",h(p),w.expires?"; expires="+w.expires.toUTCString():"",w.path?"; path="+w.path:"",w.domain?"; domain="+w.domain:"",w.secure?"; secure":""].join(""))
}var x=q?undefined:{};
var u=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=u.length;
o<m;
o++){var n=u[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){x=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){x[j]=k
}}return x
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false
}f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.3.0
 */
(function(){function W(ar){return typeof ar==="function"||typeof ar==="object"&&ar!==null
}function O(ar){return typeof ar==="function"
}function M(ar){return typeof ar==="object"&&ar!==null
}var j;
if(!Array.isArray){j=function(ar){return Object.prototype.toString.call(ar)==="[object Array]"
}
}else{j=Array.isArray
}var x=j;
var z=0;
var an={}.toString;
var y;
var Y;
var Z=function V(at,ar){N[z]=at;
N[z+1]=ar;
z+=2;
if(z===2){if(Y){Y(X)
}else{J()
}}};
function F(ar){Y=ar
}function T(ar){Z=ar
}var ab=typeof window!=="undefined"?window:undefined;
var b=ab||{};
var af=b.MutationObserver||b.WebKitMutationObserver;
var u=typeof process!=="undefined"&&{}.toString.call(process)==="[object process]";
var g=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";
function ak(){var at=process.nextTick;
var ar=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
if(Array.isArray(ar)&&ar[1]==="0"&&ar[2]==="10"){at=setImmediate
}return function(){at(X)
}
}function D(){return function(){y(X)
}
}function H(){var au=0;
var ar=new af(X);
var at=document.createTextNode("");
ar.observe(at,{characterData:true});
return function(){at.data=au=++au%2
}
}function S(){var ar=new MessageChannel;
ar.port1.onmessage=X;
return function(){ar.port2.postMessage(0)
}
}function l(){return function(){setTimeout(X,1)
}
}var N=new Array(1000);
function X(){for(var at=0;
at<z;
at+=2){var au=N[at];
var ar=N[at+1];
au(ar);
N[at]=undefined;
N[at+1]=undefined
}z=0
}function I(){try{var at=require;
var ar=at("vertx");
y=ar.runOnLoop||ar.runOnContext;
return D()
}catch(au){return l()
}}var J;
if(u){J=ak()
}else{if(af){J=H()
}else{if(g){J=S()
}else{if(ab===undefined&&typeof require==="function"){J=I()
}else{J=l()
}}}}function P(){}var m=void 0;
var v=1;
var ao=2;
var K=new L;
function G(){return new TypeError("You cannot resolve a promise with itself")
}function t(){return new TypeError("A promises callback cannot return that same promise.")
}function C(at){try{return at.then
}catch(ar){K.error=ar;
return K
}}function ag(aw,au,at,ar){try{aw.call(au,at,ar)
}catch(av){return av
}}function d(au,ar,at){Z(function(ax){var aw=false;
var av=ag(at,ar,function(ay){if(aw){return
}aw=true;
if(ar!==ay){am(ax,ay)
}else{al(ax,ay)
}},function(ay){if(aw){return
}aw=true;
ae(ax,ay)
},"Settle: "+(ax._label||" unknown promise"));
if(!aw&&av){aw=true;
ae(ax,av)
}},au)
}function ah(at,ar){if(ar._state===v){al(at,ar._result)
}else{if(ar._state===ao){ae(at,ar._result)
}else{R(ar,undefined,function(au){am(at,au)
},function(au){ae(at,au)
})
}}}function r(au,ar){if(ar.constructor===au.constructor){ah(au,ar)
}else{var at=C(ar);
if(at===K){ae(au,K.error)
}else{if(at===undefined){al(au,ar)
}else{if(O(at)){d(au,ar,at)
}else{al(au,ar)
}}}}}function am(at,ar){if(at===ar){ae(at,G())
}else{if(W(ar)){r(at,ar)
}else{al(at,ar)
}}}function q(ar){if(ar._onerror){ar._onerror(ar._result)
}ai(ar)
}function al(at,ar){if(at._state!==m){return
}at._result=ar;
at._state=v;
if(at._subscribers.length!==0){Z(ai,at)
}}function ae(at,ar){if(at._state!==m){return
}at._state=ao;
at._result=ar;
Z(q,at)
}function R(ar,ax,aw,av){var au=ar._subscribers;
var at=au.length;
ar._onerror=null;
au[at]=ax;
au[at+v]=aw;
au[at+ao]=av;
if(at===0&&ar._state){Z(ai,ar)
}}function ai(aw){var av=aw._subscribers;
var ar=aw._state;
if(av.length===0){return
}var ay,ax,au=aw._result;
for(var at=0;
at<av.length;
at+=3){ay=av[at];
ax=av[at+ar];
if(ay){E(ar,ay,ax,au)
}else{ax(au)
}}aw._subscribers.length=0
}function L(){this.error=null
}var i=new L;
function aq(au,ar){try{return au(ar)
}catch(at){i.error=at;
return i
}}function E(ay,aA,ax,au){var ar=O(ax),aw,av,az,at;
if(ar){aw=aq(ax,au);
if(aw===i){at=true;
av=aw.error;
aw=null
}else{az=true
}if(aA===aw){ae(aA,t());
return
}}else{aw=au;
az=true
}if(aA._state!==m){}else{if(ar&&az){am(aA,aw)
}else{if(at){ae(aA,av)
}else{if(ay===v){al(aA,aw)
}else{if(ay===ao){ae(aA,aw)
}}}}}}function aj(aw,av){try{av(function ar(ax){am(aw,ax)
},function au(ax){ae(aw,ax)
})
}catch(at){ae(aw,at)
}}function p(at,ar){var au=this;
au._instanceConstructor=at;
au.promise=new at(P);
if(au._validateInput(ar)){au._input=ar;
au.length=ar.length;
au._remaining=ar.length;
au._init();
if(au.length===0){al(au.promise,au._result)
}else{au.length=au.length||0;
au._enumerate();
if(au._remaining===0){al(au.promise,au._result)
}}}else{ae(au.promise,au._validationError())
}}p.prototype._validateInput=function(ar){return x(ar)
};
p.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")
};
p.prototype._init=function(){this._result=new Array(this.length)
};
var aa=p;
p.prototype._enumerate=function(){var aw=this;
var au=aw.length;
var av=aw.promise;
var ar=aw._input;
for(var at=0;
av._state===m&&at<au;
at++){aw._eachEntry(ar[at],at)
}};
p.prototype._eachEntry=function(at,ar){var av=this;
var au=av._instanceConstructor;
if(M(at)){if(at.constructor===au&&at._state!==m){at._onerror=null;
av._settledAt(at._state,ar,at._result)
}else{av._willSettleAt(au.resolve(at),ar)
}}else{av._remaining--;
av._result[ar]=at
}};
p.prototype._settledAt=function(au,ar,at){var aw=this;
var av=aw.promise;
if(av._state===m){aw._remaining--;
if(au===ao){ae(av,at)
}else{aw._result[ar]=at
}}if(aw._remaining===0){al(av,aw._result)
}};
p.prototype._willSettleAt=function(at,ar){var au=this;
R(at,undefined,function(av){au._settledAt(v,ar,av)
},function(av){au._settledAt(ao,ar,av)
})
};
function o(ar){return new aa(this,ar).promise
}var e=o;
function a(ar){var ay=this;
var ax=new ay(P);
if(!x(ar)){ae(ax,new TypeError("You must pass an array to race."));
return ax
}var au=ar.length;
function aw(az){am(ax,az)
}function av(az){ae(ax,az)
}for(var at=0;
ax._state===m&&at<au;
at++){R(ay.resolve(ar[at]),undefined,aw,av)
}return ax
}var B=a;
function ac(ar){var au=this;
if(ar&&typeof ar==="object"&&ar.constructor===au){return ar
}var at=new au(P);
am(at,ar);
return at
}var Q=ac;
function w(ar){var au=this;
var at=new au(P);
ae(at,ar);
return at
}var ap=w;
var n=0;
function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}function h(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}var A=ad;
function ad(ar){this._id=n++;
this._state=undefined;
this._result=undefined;
this._subscribers=[];
if(P!==ar){if(!O(ar)){U()
}if(!(this instanceof ad)){h()
}aj(this,ar)
}}ad.all=e;
ad.race=B;
ad.resolve=Q;
ad.reject=ap;
ad._setScheduler=F;
ad._setAsap=T;
ad._asap=Z;
ad.prototype={constructor:ad,then:function(aw,av){var at=this;
var au=at._state;
if(au===v&&!aw||au===ao&&!av){return this
}var ay=new this.constructor(P);
var ar=at._result;
if(au){var ax=arguments[au-1];
Z(function(){E(au,ay,ax,ar)
})
}else{R(at,ay,aw,av)
}return ay
},"catch":function(ar){return this.then(null,ar)
}};
function c(){var ar;
if(typeof global!=="undefined"){ar=global
}else{if(typeof self!=="undefined"){ar=self
}else{try{ar=Function("return this")()
}catch(au){throw new Error("polyfill failed because global object is unavailable in this environment")
}}}var at=ar.Promise;
if(at&&Object.prototype.toString.call(at.resolve())==="[object Promise]"&&!at.cast){return
}ar.Promise=A
}var k=c;
var f={Promise:A,polyfill:k};
if(typeof define==="function"&&define.amd){define(function(){return f
})
}else{if(typeof module!=="undefined"&&module.exports){module.exports=f
}else{if(typeof this!=="undefined"){this["ES6Promise"]=f
}}}k()
}).call(this);
function customSelectDD(a){trDropdown(a)
}function customQtySelectDD(a){trDropdown(a)
}function customTwoTitleSelectDD(a){trDropdown(a)
}function trDropdown(c){if($(c).hasClass("trDD")||$(c).prop("tagName")!="SELECT"){return
}if($(c).hasClass("trMakeMega")){trMegaMenu(c);
return
}var f=$(c).find("option,optgroup").size();
var e=$(c).hasClass("hide");
var a=(typeof $(c).attr("id")!==undefined&&$(c).attr("id")!="");
var b=$("label[for='"+$(c).attr("id")+"']");
var d=8;
if($(c).data("size")){d=parseInt($(c).data("size"))
}$(c).addClass("hide").addClass("trDD").attr("size",(f>d?d:f));
$newDropdown=$('<div class="dropdownButton'+(e?" hide":"")+'"><button><div></div></button></div>');
if($(c).data("addClass")){$newDropdown.addClass($(c).data("addClass"))
}if(a&&b.length>0){$newDropdown.find("button").attr("aria-label",b.text())
}else{if($(c)[0].hasAttribute("data-title")){$newDropdown.find("button").attr("aria-label",$(c).attr("data-title"))
}}if($(c).is(":disabled")){$newDropdown.find("button").addClass("disabled").prop("disabled",true)
}$newDropdown.find("button").on("click touchstart",function(g){if(!$(this).hasClass("disabled")){$(this).parent().find("option").unbind("mouseenter mouseleave").parent().find("option:enabled").hover(function(){$(this).css({backgroundColor:"#333",color:"#fff"})
},function(){$(this).css({backgroundColor:"",color:""})
});
trDropdownErrorHide(this);
var h=8;
$selectDropdown=$(this).parent().find("select");
$selectDropdown.data("scrollTop",$(window).scrollTop());
if(g.type=="touchstart"){$selectDropdown.removeClass("hide").addClass("holdClick").dispatchEvent(g).focus()
}else{if($selectDropdown.data("size")){h=parseInt($selectDropdown.data("size"))
}f=$selectDropdown.find("option,optgroup").size();
$selectDropdown.attr("size",(f>h?h:f)).removeClass("hide").focus()
}}return false
}).keydown(function(g){if(g.which==40){g.preventDefault();
$(this).parent().find("select").removeClass("hide").focus()
}});
$(c).on("click",function(){if(!$(this).hasClass("holdClick")){closeDropdown(this)
}}).on("blur",function(g){$(window).scrollTop($(this).data("scrollTop"));
$(this).removeClass("holdClick");
closeDropdown(this)
}).keydown(function(g){if(g.which==27||g.which==13){$(this).removeClass("holdClick");
g.preventDefault();
closeDropdown(this)
}});
$(c).after($newDropdown);
$(c).detach().appendTo($newDropdown);
trDropdownUpdateText($(c))
}function closeDropdown(a){trDropdownUpdateText(a);
$select=$(a).closest(".dropdownButton").find("select");
if(!$select.hasClass("trMega")){$(a).parent().find("select").addClass("hide");
$(a).parent().find("button").focus()
}return false
}function trDropdownShow(a){$select=$(a).closest(".dropdownButton").find("select");
if($select.hasClass("trMega")){megaRebuildMenu($select)
}if($(a).hasClass("dropdownButton")){$(a).removeClass("hide")
}else{$(a).parent(".dropdownButton").removeClass("hide")
}return false
}function trDropdownHide(a){$select=$(a).closest(".dropdownButton").find("select");
if($select.hasClass("trMega")){$select.parent().find(".megaMenu").addClass("hide")
}else{if($(a).hasClass("dropdownButton")){$(a).addClass("hide")
}else{$(a).parent(".dropdownButton").addClass("hide")
}}return false
}function trDropdownEnable(a){$select=$(a).closest(".dropdownButton").find("select");
if($select.hasClass("trMega")){megaRebuildMenu($select)
}$(a).parent().find("select,button").removeClass("disabled");
$(a).parent().find("select,button").prop("disabled",false);
return false
}function trDropdownDisable(a){$(a).parent().find("select,button").addClass("disabled");
$(a).parent().find("select,button").prop("disabled",true);
return false
}function trDropdownErrorShow(a){$(a).parent().find("button").addClass("eleError");
return false
}function trDropdownErrorHide(a){$(a).parent().find("button").removeClass("eleError");
return false
}function trDropdownUpdateText(c){var g=$(c).parent().find("select");
var f=$(g).data("title");
if(typeof $(g).find(":selected").data("title")!="undefined"){f=$(g).find(":selected").data("title")
}var e=$(g).find(":selected").text();
if(e==""){var d=$(g).find("option").first();
if(typeof d!="undefined"){e=$(d).text()
}}e=e.replace(f,"");
var b=(typeof f==="undefined"?"":"<span>"+f+" </span>")+e;
var a=$(g).find(":selected").attr("class");
$(c).parent().find("button div").html(b).attr("class",(typeof a=="undefined"?"":a))
}$(document).ready(function(){$.each($("select:not(.ddDisabled):not(.trDD)"),function(a,b){trDropdown(b)
})
});
function drawMegaMenus(k,m){$options=$(m);
var h=$(k).val();
var n=(typeof $(k).data("skip-first")!==undefined&&$(k).data("skip-first")===true?true:false);
if($options.length<1){return""
}var j=$(),c=0+(n?1:0);
var d=$options.length-(n?1:0);
var g=($.isNumeric($(k).data("columns"))?$(k).data("columns"):(d<=10?1:(d<=20?2:(d<=45?3:(d<=80?4:5)))));
var l=(n?1:0);
for(var f=0;
f<g;
f++){if(c<d+(n?1:0)){l+=Math.ceil(d/g);
var a=$('<ul class="mega'+g+"Column col"+(f+1)+(f==g-1?" last":"")+'"></ul>');
for(;
c<l&&c<d+(n?1:0);
c++){var b=$($options[c]).val();
var e=$(m).eq(c).attr("disabled");
a.append('<li data-index="'+b+'"'+(typeof e!==typeof undefined?' class="mmDisabled"':"")+'><span class="'+(typeof e!==typeof undefined?"":"greyHover")+(b==h?" mmSelected":"")+'">'+$(m[c]).text()+"</span></li>")
}j=j.add(a)
}}return j
}function megaMenuAddOptionEvents(a){$(a).find("li:not(.mmDisabled)").on("click",function(){var b=$(this).closest("div.dropdownButton");
var c=$(this).closest("div.megaMenu").find("span.mmSelected").removeClass("mmSelected");
$(b).find("select").val($(this).data("index")).trigger("change");
$(this).find("span").addClass("mmSelected");
var c=$(b).find(".megaMenu");
if($(c).hasClass("hide")){$(c).removeClass("hide")
}else{$(c).addClass("hide")
}trDropdownUpdateText($(this).closest("div.megaMenu"))
})
}function buildMegaOptions(c){var g=$(c).attr("id");
var f=$(c).hasClass("makeRecentVehicle");
g=(typeof g!==typeof undefined&&g!==false?g:"");
var e=$();
if(g=="recent-vehicle"||f){var b=(typeof $(c).data("no-link")!==undefined&&$(c).data("no-link")===true?true:false);
$recentVehicles=$(c).find("optgroup[label='Recent Vehicles']");
$savedVehicles=$(c).find("optgroup[label='Saved Vehicles']");
if($savedVehicles.length>0){$options=$savedVehicles.find('option:not([value="xx"])');
var a=!b&&$options.length>5;
if(!b){$options=$options.slice(0,5)
}e=e.add("<strong>Saved Vehicle"+($options.length>1?"s":"")+"</strong><br>");
e=e.add(drawMegaMenus(c,$options));
if(a){e=e.add('<div class="viewAllSaved"><a href="/register/Vehicles.jsp">View All Saved Vehicles <span>&gt;</span></a></div>')
}if($recentVehicles.length>0){e=e.add('<div class="dividerCircle"><div class="dividerLine"></div></div>')
}}if($recentVehicles.length>0){$options=$recentVehicles.find('option:not([value="xx"])');
e=e.add("<strong>Recent Vehicle"+($options.length>1?"s":"")+"</strong><br>");
e=e.add(drawMegaMenus(c,$options))
}if($savedVehicles.length==0&&$recentVehicles.length==0){$options=$(c).find('option:not([value="xx"])');
$xxOption=$('#recent-vehicle option[value="xx"]');
if($xxOption.length==0){$xxOption=$('#Vehicle option[value="xx"]')
}var a=false;
if(!b&&$xxOption.length>0&&$xxOption.text().indexOf("Saved")>-1){if($options.length>5){a=true
}$options=$options.slice(0,5)
}if($xxOption.length>0){e=e.add("<strong>"+($xxOption.text().indexOf("Saved")>-1?"Saved":"Recent")+" Vehicle"+($options.length>1?"s":"")+"</strong><br>")
}e=e.add(drawMegaMenus(c,$options));
if(a){e=e.add('<div class="viewAllSaved"><a href="/register/Vehicles.jsp">View All Saved Vehicles <span>&gt;</span></a></div>')
}}}else{var d=$(c).find("option").not(":empty");
e=e.add(drawMegaMenus(c,d))
}return e
}function megaMenuResize(d){$container=$(d).closest(".dropdownButton");
$(d).css({height:"","margin-left":"","overflow-x":"","overflow-y":"","max-width":""});
var e=$(window).scrollTop(),j=$container.offset().top+$container.find("button").outerHeight(),k=(j-e),g=$(d).outerHeight(),b=$(d).outerHeight()-$(d).height(),p=$(document).width(),f=e+window.innerHeight,a=(p>$(window).width());
if(j+g+(a?$.position.scrollbarWidth():0)>f){var m=f-j-b-(a?$.position.scrollbarWidth():0)-6;
$(d).css({height:(m>200?m:200)+"px","overflow-x":"hidden","overflow-y":"auto"})
}var h=$(window).scrollLeft(),o=$container.offset().left-h,l=$(d).outerWidth(),n=p-$(window).width(),c=($(document).height()>$(window).height());
if(l>$(window).width()){$(d).css({"max-width":$(window).width()-10+"px","overflow-x":"auto"})
}l=$(d).outerWidth();
if((o+l)>$(window).width()){var i=$(window).width()-(o+l)-5;
$(d).css({"margin-left":i+"px"})
}}function megaRebuildMenu(a){$select=$(a);
if($select.hasClass("trMega")){$megaMenu=$select.closest(".dropdownButton").find(".megaMenu");
$megaMenu.html(buildMegaOptions($select));
megaMenuAddOptionEvents($megaMenu)
}}function trMegaMenu(d){if($(d).prop("tagName")!="SELECT"||$(d).hasClass("trMega")||$(d).hasClass("trDD")&&!$(d).hasClass("trMakeMega")){return
}$(d).removeClass("trMakeMega");
var e=$(d).hasClass("hide");
$(d).addClass("hide").addClass("trDD trMega");
if($(d).closest("div.dropdownButton").length<1){$newDropdown=$('<div class="dropdownButton'+(e?" hide":"")+'"></div>');
if($(d).data("addClass")){$newDropdown.addClass($(d).data("addClass"))
}$newDropdown.insertBefore(d);
$(d).detach().appendTo($newDropdown)
}else{$newDropdown=$(d).closest("div.dropdownButton");
$newDropdown.find("select").off("click blur keydown")
}$newButton=$("<button class='test'><div></div></button>");
if($(d).is(":disabled")){$newButton.addClass("disabled").prop("disabled",true)
}$newDropdown.find("button").remove();
$newButton.appendTo($newDropdown);
var b=$(d);
var c=$(d).attr("id");
var a=$(d).hasClass("makeRecentVehicle");
c=(typeof c!==typeof undefined&&c!==false?c:"");
if(a){c+=" recent-vehicle"
}$megaMenu=$('<div class="megaMenu hide'+(c!=""?" "+c:"")+($.isNumeric($(d).data("columns"))?" setColumn colcnt"+$(d).data("columns"):" dynamicColumn")+'"></div>').appendTo($newDropdown);
$megaMenu.append(buildMegaOptions(b));
megaMenuAddOptionEvents($megaMenu);
trDropdownUpdateText(d);
$newButton.on("click",function(){clearTimeout(this.delay);
var f=$(this).closest("div.dropdownButton").find(".megaMenu");
$("#vehicle-selector-popup .megaMenu").not(f).addClass("hide");
if($(f).hasClass("hide")){megaMenuResize(f);
$(f).removeClass("hide")
}else{$(f).addClass("hide")
}return false
});
$megaMenu.closest(".dropdownButton").on("mouseleave",function(){var f=$(this);
this.delay=setTimeout(function(){$(f).find(".megaMenu").addClass("hide")
},500);
return false
}).on("mouseenter",function(){clearTimeout(this.delay);
return false
})
}function addCommasTR(b){var a=new RegExp("(-?[0-9]+)([0-9]{3})");
while(a.test(b)){b=b.replace(a,"$1,$2")
}return b
}function changeTRTabs(h,b,a){var g=document.getElementById(h+"_"+a);
var e=document.getElementById(h+"_content_"+a);
$(g).addClass("current");
if(e!=null){e.style.display="block"
}for(var d=0;
d<b;
d++){if(d==(a-0)){continue
}var f=document.getElementById(h+"_"+d);
var c=document.getElementById(h+"_content_"+d);
if(f!=null){$(f).removeClass("current")
}if(c!=null){c.style.display="none"
}}}function changeTRTabsAndFocus(c,b,a){changeTRTabs(c,b,a);
document.getElementById("tr_tab_"+a).scrollIntoView(true)
}function checkLengthTR(d,c){var f=new String(c.value);
var a=f.length;
var e=(d-a);
if((d-a)<0){e=0;
c.value=c.value.substring(0,d)
}var b="("+addCommasTR(d+"")+" characters maximum, "+addCommasTR(e+"")+" remaining)";
document.getElementById(c.id+"_txtmsg").innerHTML=b
}function hideTRObject(a){var b=document.getElementById(a);
b.style.display="none";
if(navigator.userAgent.indexOf("Mac")!=-1&&(navigator.userAgent.indexOf("Safari/1")!=-1||navigator.userAgent.indexOf("Safari/2")!=-1||navigator.userAgent.indexOf("Safari/3")!=-1)){window.resizeTo(self.outerWidth+1,self.outerHeight);
window.resizeTo(self.outerWidth-1,self.outerHeight)
}}function hideTRObjectsByName(a){var c=document.getElementsByName(a);
for(var b=0;
b<c.length;
b++){c[b].style.display="none"
}if(navigator.userAgent.indexOf("Mac")!=-1&&(navigator.userAgent.indexOf("Safari/1")!=-1||navigator.userAgent.indexOf("Safari/2")!=-1||navigator.userAgent.indexOf("Safari/3")!=-1)){window.resizeTo(self.outerWidth+1,self.outerHeight);
window.resizeTo(self.outerWidth-1,self.outerHeight)
}}function openInfoBox(d,h,c,b,e,f,g){var a=$(".modalContainer")[0];
jQuery.data(a,"modalProperties",{width:c,height:b,"class":e,openEvent:f,closeEvent:g});
window.modal.call(d)
}function openDisabledBox(d,h,c,b,e,f,g){var a=$(".modalContainer")[0];
jQuery.data(a,"modalProperties",{width:c,height:b,"class":e,openEvent:f,closeEvent:g});
window.modal.disableClose(d)
}function openRequireBox(e,h,a,b,g,d,c,i){var f=$(".modalContainer")[0];
jQuery.data(f,"modalProperties",{width:a,height:b,"class":d,openEvent:c,closeEvent:i});
window.modal.require(e,g)
}function openOnceBox(e,h,a,b,g,d,c,i){var f=$(".modalContainer")[0];
jQuery.data(f,"modalProperties",{width:a,height:b,"class":d,openEvent:c,closeEvent:i});
window.modal.openOnce(e,g)
}function openFormInfoBox(h,g,c,b,d,e,f){var a=$(".modalContainer")[0];
jQuery.data(a,"modalProperties",{width:c,height:b,"class":d,openEvent:e,closeEvent:f});
window.modal.submitForm(h)
}function openInfoBoxAndCallFunction(myHref,myTitle,myWidth,myHeight,myFunction){var defaultWidth="405";
var boxHeight=myHeight;
var boxWidth=myWidth;
var windowHeight="575";
if(typeof(window.innerWidth)=="number"){windowHeight=window.innerHeight
}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){windowHeight=document.documentElement.clientHeight
}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){windowHeight=document.body.clientHeight
}}}if(myHeight=="default"||myHeight==""||myHeight==null){boxHeight=""
}if(myWidth=="default"||myWidth==""||myWidth==null){boxWidth=defaultWidth
}if(boxHeight!=""&&(windowHeight-20)<(boxHeight-0)){boxHeight=windowHeight-20
}if(boxHeight!=""&&boxWidth!=""){Modalbox.show(myHref,{title:myTitle,height:boxHeight,width:boxWidth,afterHide:function(){eval(myFunction)
}})
}else{if(boxWidth!=""){Modalbox.show(myHref,{title:myTitle,width:boxWidth,afterHide:function(){eval(myFunction)
}})
}else{Modalbox.show(myHref,{title:myTitle,onHide:function(){eval(myFunction)
}})
}}if(Modalbox.options.warningStyle==true){Modalbox.options.warningStyle=false;
Modalbox.options.overlayClose=true;
if(document.getElementById("MB_overlay")){document.getElementById("MB_overlay").observe("click",Modalbox.hideObserver)
}if(document.getElementById("MB_captionRed")){document.getElementById("MB_captionRed").id="MB_caption"
}if(document.getElementById("MB_headerRed")){document.getElementById("MB_headerRed").id="MB_header"
}if(document.getElementById("MB_closeRed")){document.getElementById("MB_closeRed").id="MB_close"
}if(document.getElementById("MB_close")){document.getElementById("MB_close").innerHTML="<span>&times;</span>"
}}}function openImageBox(f,h,b,i){if(!(b)){$("<img />").load(function(){var l=$(".modalContainer")[0];
var m=this.width+40;
var k=this.height+40;
var n=1000;
if(m>n){m=n
}if(k>n){k=n
}jQuery.data(l,"modalProperties",{width:m,height:k});
var j=document.createElement("DIV");
$(j).append(this);
window.modal.show(j)
}).attr("src",f)
}else{var g=$(".modalContainer")[0];
var e=document.createElement("IMG");
e.src=f;
var c=600,d=400;
if(b){c=b-0+40
}if(i){d=i-0+40
}jQuery.data(g,"modalProperties",{width:c,height:d});
var a=document.createElement("DIV");
a.appendChild(e);
window.modal.show($(a))
}}function openWarningBox(d,e,c,b){var a=$(".modalContainer")[0];
jQuery.data(a,"width",c);
jQuery.data(a,"height",b);
window.modal.call(d)
}function pointBulletDownTR(a,b){toggleVisibility(b);
if(document.getElementById(a).className!="openedup"){document.getElementById(a).className="openedup"
}else{document.getElementById(a).className=""
}}function redirectAndClosePopUp(a){if(opener){opener.location=a;
self.close();
return false
}else{return true
}}function showTRObject(a,c){var b=document.getElementById(a);
if(c){b.style.display="inline"
}else{b.style.display="block"
}if(navigator.userAgent.indexOf("Mac")!=-1&&(navigator.userAgent.indexOf("Safari/1")!=-1||navigator.userAgent.indexOf("Safari/2")!=-1||navigator.userAgent.indexOf("Safari/3")!=-1)){window.resizeTo(self.outerWidth+1,self.outerHeight);
window.resizeTo(self.outerWidth-1,self.outerHeight)
}}function showTRObjectsByName(a,d){var c=document.getElementsByName(a);
for(var b=0;
b<c.length;
b++){if(d){c[b].style.display="inline"
}else{c[b].style.display="block"
}}if(navigator.userAgent.indexOf("Mac")!=-1&&(navigator.userAgent.indexOf("Safari/1")!=-1||navigator.userAgent.indexOf("Safari/2")!=-1||navigator.userAgent.indexOf("Safari/3")!=-1)){window.resizeTo(self.outerWidth+1,self.outerHeight);
window.resizeTo(self.outerWidth-1,self.outerHeight)
}}function stopMultiSubmit(a,b){if(window.formSubmitted=="true"){return false
}window.formSubmitted="true";
if(document.getElementById(a)){hideTRObject(a);
showTRObject("loading",b)
}return true
}function toggleVisibility(a,b){if(document.getElementById(a).style.display=="none"){if(b){showTRObject(a,true)
}else{showTRObject(a)
}}else{hideTRObject(a)
}}function changeClass(c,b,a){document.getElementById(c).className=(document.getElementById(c).className==b)?a:b
}function sendIt(b){var a="mail";
if(b.getAttribute("who")!=null){a+="to:"+b.getAttribute("who");
if(b.getAttribute("dom")!=null){a+="@"+b.getAttribute("dom")
}else{a+="@tirerack.com"
}if(b.getAttribute("subject")!=null){a+="?subject="+b.getAttribute("subject")
}document.location.href=a
}return false
}function containsPOBox(a){var c=a.replace(/[^a-zA-Z0-9\s]*/g,"").replace(/\s/g," ").toUpperCase();
var b=new RegExp("(^|\\s)+(p|post)\\s*(o|office)\\s*(box)?\\s*\\d+","i");
return c.match(b)
}function validateZIP(c){var b=new String(c.value.replace(/ /g,""));
var a=b.length;
if((a>0&&!/^[a-zA-Z0-9]+$/.test(b))||a>6){return -1
}else{if(a==5&&/^\d+$/.test(b)){return 1
}else{if(a==6){return 1
}}}return 0
}function changeZipStatus(c){var b=document.getElementsByName("zip-code");
if(b!=null){for(var a=0;
a<b.length;
a++){if(c=="error"){b[a].className="zip-code zip-code-input eleError"
}else{if(c=="good"){b[a].className="zip-code zip-code-input success"
}else{b[a].className="zip-code zip-code-input"
}}}}var b=document.getElementsByName("zipCode");
if(b!=null){for(var a=0;
a<b.length;
a++){if(c=="error"){b[a].className="zipCode zip-code-input eleError"
}else{if(c=="good"){b[a].className="zipCode zip-code-input success"
}else{b[a].className="zipCode zip-code-input"
}}}}}function clearError(a){if(a&&a.className&&a.className.indexOf("eleError")>-1){a.className=a.className.replace("eleError","")
}}function addErrorClass(a){if(a){a.className+=" eleError"
}}function trSlideRight(c,d){var b=$(c).find(".slide").index($(c).find(".active"));
var a=$(c).find(".slide").length;
trSlide(c,b+1>=a?a-1:b+1,d)
}function trSlideLeft(b,c){var a=$(b).find(".slide").index($(b).find(".active"));
trSlide(b,a-1<0?0:a-1,c)
}function trSlide(c,a,e){if(!$(c).find(".slide:eq("+a+")").hasClass("active")){pauseVideos(c)
}$(e).find(" .red-dot").removeClass("red-dot").addClass("grey-dot");
$(e).find(" .dot-"+a).removeClass("grey-dot").addClass("red-dot");
var d=$(c).find(".slide:eq(0)").width();
var b=(d*a);
$(c).find(".slide").removeClass("active");
$(c).find(".slide:eq("+a+")").addClass("active");
$(c).animate({left:(b>0?"-"+b:0)+"px"},300)
}function pauseVideos(a){if(typeof element==="undefined"){a="body"
}if(typeof top.postMessage=="function"){$(a).find("iframe").each(function(){if(typeof this.contentWindow!="undefined"){this.contentWindow.postMessage("TR-Video:pause","*")
}})
}}function formatMoney(f){if(typeof f=="string"){f=f.replace(/,/g,"")
}f=f||0;
var d=2;
var g=",";
var a=".";
var c=f<0?"-":"",e=parseInt(f=Math.abs(+f||0).toFixed(d),10)+"",b=(b=e.length)>3?b%3:0;
return c+(b?e.substr(0,b)+g:"")+e.substr(b).replace(/(\d{3})(?=\d)/g,"$1"+g)+(d?a+Math.abs(f-e).toFixed(d).slice(2):"")
}function checkEnter(a){if(a.keyCode==13||a.which==13){(a.preventDefault)?a.preventDefault():event.returnValue=false;
return true
}return false
}function isValidEmail(a){var b=/^[a-zA-Z0-9!#$%&*+=^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&*+=^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
return(b.test(a.trim())===true)
}function checkInputField(d,a){var b=false;
if(!$(d).length){b=true
}else{var c=$(d).val().trim();
$(d).val(c);
if(a=="emailCheck"){b=!isValidEmail(c);
if(!b){$(d).attr("class","").addClass("eleGreenCheck")
}else{$(d).attr("class","").addClass("eleError")
}return
}else{if(a=="email"){b=!isValidEmail(c)
}else{if(a=="numeric"){b=$.isNumeric(c)
}else{if(a=="password"){b=!(c.length>3)
}else{b=!(c.length>0)
}}}}if(b){$(d).addClass("eleError")
}else{$(d).removeClass("eleError")
}}return b
}function removeCurrentTestTrackSelection(){$(".pointers").children().each(function(a){$(this).removeClass("current")
})
}function setTestTrackVideo(g,e,d,c,b){var f;
var a;
$(".panel .video-thumb").hide();
$(".panel .video-thumb img").hide();
if(g=="pointer4"){$("#video1").hide();
$("#video2").hide();
$("#video3").hide();
$("#video4").show();
$("#video4 .video-thumb").show();
f=b;
a="#video4"
}else{if(g=="pointer3"){$("#video1").hide();
$("#video2").hide();
$("#video3").show();
$("#video4").hide();
$("#video3 .video-thumb").show();
f=c;
a="#video3"
}else{if(g=="pointer2"){$("#video1").hide();
$("#video2").show();
$("#video3").hide();
$("#video4").hide();
$("#video2 .video-thumb").show();
f=d;
a="#video2"
}else{$("#video1").show();
$("#video2").hide();
$("#video3").hide();
$("#video4").hide();
$("#video1 .video-thumb").show();
f=e;
a="#video1"
}}}$.getJSON(webApplicationBaseURL+"/rest/v1/videoLookUp/id/"+f+"?to_desktop=true",function(h){if(h.status=="success"){$vidLocation=$(a);
$vidLocation.find("div.video-thumb").html('<img src="'+webApplicationBaseURL+h.data.video.ampimageURL+'" class="thumb" alt="Play Video" />');
$vidLocation.find("div.video-thumb").click(function(){openInfoBox(webApplicationBaseURL+"/videos/video_modalbox.jsp?video="+f,"","default")
})
}}).fail(function(){$vidLocation=$(a);
$vidLocation.find("div.video-thumb").html('<img alt="Beyond The Track" class="thumb" src="/content/dam/tirerack/desktop/css_elements/images/videothumb_testtrack.jpg">');
$vidLocation.find("div.video-thumb").click(function(){alert("Video Not Available")
});
console.log("Test Track - video display error")
})
}function findReplaceTextInDOM(c,d,a){var b;
if(c.nodeType===1){if(c=c.firstChild){do{b=c.nextSibling;
findReplaceTextInDOM(c,d,a)
}while(c=b)
}}else{if(c.nodeType===3){regEx=new RegExp(d,"g");
if(regEx.test($(c).text())){c.nodeValue=$(c).text().replace(regEx,a)
}}}}function emailValidation(b){$ele=$(b);
var a=$ele.val();
if(a.length==0){$ele.removeClass("eleError");
$ele.removeClass("emailSuccess")
}else{if(isValidEmail(a)){$ele.removeClass("eleError");
$ele.addClass("emailSuccess")
}else{$ele.removeClass("emailSuccess");
$ele.addClass("eleError")
}}}var tr_header=$("#header"),headerHeight=tr_header.height(),offset=0,lastPos=0,fillerDiv,trLoginLoaded=false;
$(document).ready(function(){$("#sli_search_1").focus(function(){if($(this).val()!=""){$("#sli_autocomplete").show()
}$(".search.ptp").addClass("hover");
$("html").on("click",b)
});
$("li.menu.item").hover(function(){$(".search.ptp").removeClass("hover");
setTimeout(function(){if($(".search.ptp .submenu").css("visibility")=="hidden"){$("#sli_search_1").blur()
}},550)
});
function b(d){if(!$(d.target).closest(".search.ptp").length){$(".search.ptp").removeClass("hover");
$("html").unbind("click",b)
}}$("#loginFormMenu").on("mouseleave",function(){$("li.acc .login ul input").blur()
});
$(document).on("click","checkbox",function(d){if(!$(this).hasClass("disabled")&&!$(this).parent().hasClass("disabled")){if($(this).hasClass("on")){$(this).removeClass("on").find('input[type="Checkbox"]').prop("checked",false).trigger("change");
$(this).addClass("off")
}else{$(this).removeClass("off");
$(this).addClass("on").find('input[type="Checkbox"]').prop("checked",true).trigger("change")
}}$(d.target).trigger("chk")
});
$("checkbox").each(function(){if($(this).parent().is("li")){$(this).parent().find("span.check-text, span.text").each(function(){$(this).on("click",function(){$(this).closest("li").find("checkbox").click();
return false
})
})
}});
$("textarea").each(function(){$(this).data("default",$(this).attr("placeholder"))
}).focusin(function(){$(this).attr("placeholder","")
}).focusout(function(){$(this).attr("placeholder",$(this).data("default"))
});
$("#submitLogin").on("click",function(d){d.preventDefault();
validateLogin()
});
if(typeof isCQpage!="undefined"&&isCQpage==true){if(window.sessionIsSet==true){getUserProfileData();
getCartDetails()
}else{$(window).on("sessionStarted",function(){getUserProfileData();
getCartDetails()
})
}}else{getUserProfileData();
getCartDetails()
}var a=0;
$(document).ajaxStop(function(){if(a==0){a=1
}});
$("#searchIcon").on("click",function(){$("#searchSub").submit()
});
$("#ebatesUpromiseFatWalletBanner").insertBefore("#header .parbase");
tr_header=$("#header");
headerHeight=tr_header.height();
offset=0;
lastPos=0;
tr_header.css("position","fixed");
if($("#ebatesUpromiseFatWalletBanner").length==0){fillerDiv='<div id="headerBackground"></div>'
}else{fillerDiv='<div id="headerBackground" style="height: 175px"></div>'
}$(fillerDiv).insertAfter(tr_header);
if(headerHeight<112){headerHeight=112
}headerScroll();
var c=0;
$("#header #pageLinks ul.menu > li .submenu").each(function(){if($(this).height()>c){c=$(this).height()
}});
$("#header #pageLinks ul.menu > li").on("touchstart",function(f){$("#header #pageLinks ul.menu.notouch").removeClass("notouch");
var d=$(this);
if(d.hasClass("hover")){f.stopPropagation();
return true
}else{$("#header #pageLinks ul.menu > li.hover").removeClass("hover");
d.addClass("hover");
if(d.hasClass("search")){setTimeout(function(){if($(".search.ptp .submenu").css("visibility")=="visible"){$("#sli_search_1").focus()
}},500)
}else{$("#sli_search_1").blur()
}f.preventDefault();
f.stopPropagation();
$("html").one("touchstart",function(g){$("#header #pageLinks ul.menu > li.hover").removeClass("hover");
$("#sli_search_1").blur()
})
}});
$(window).on("scroll",headerScroll);
$("#loginFormMenu").parents("li.acc").on("click",function(){if($(this).hasClass("loginHover")){$(this).removeClass("loginHover")
}else{$(this).addClass("loginHover")
}});
$("div.global-header").nextUntil("div.global-footer").on("click",function(){$("#loginFormMenu").parents("li.acc").removeClass("loginHover")
});
$("#pageLinks div.submenu").mouseenter(function(){$("#loginFormMenu").parents("li.acc").removeClass("loginHover")
});
$("#footer .footerBottom nav a").each(function(){if($(this).text().toLowerCase()==="terms of use"){}});
$("html").click(function(d){if($(d.target).closest("li.menu").length<1&&$(d.target).closest("li.search").length<1){$("#pageLinks ul.menu li").addClass("hideSubmenu")
}})
});
function toggleMainNav(a){$closestLIMenu=$("#pageLinks div.primary-nav"+a).closest("li.menu");
$("#pageLinks ul.menu li.menu").not($closestLIMenu).addClass("hideSubmenu");
$("#siteSearch").closest("li.search").addClass("hideSubmenu");
$closestLIMenu.toggleClass("hideSubmenu")
}function toggleSearchNav(){$("#pageLinks ul.menu li.menu").addClass("hideSubmenu");
$("#siteSearch").closest("li.search").toggleClass("hideSubmenu")
}function headerScroll(){var a=$(document).scrollTop(),c=a-lastPos;
if(offset+c>headerHeight){offset=headerHeight;
if($("#sli_search_1").is(":focus")){offset=0
}}else{if(a<=0){offset=0
}else{offset=offset+c;
if($("#sli_search_1").is(":focus")){offset=0
}}}if(offset<0){offset=0
}var b=offset;
if(b==headerHeight){b=1000
}if(navigator.userAgent.indexOf("Android")<0||navigator.userAgent.indexOf("Chrome")<0){tr_header.offset({left:0})
}tr_header.css("top",(-b)+"px");
lastPos=a;
$(document).trigger("headerScroll")
}function disableHeaderScroll(){tr_header.css("top","");
tr_header.css("left","");
tr_header.css("position","static");
$("#headerBackground").remove();
lastPos=0;
$(window).off("scroll",headerScroll)
}function enableHeaderScroll(){$(window).on("scroll",headerScroll);
setTimeout(function(){lastPos=$(document).scrollTop();
offset=$(document).scrollTop();
tr_header.css("top",(-$(document).scrollTop())+"px");
tr_header.css("left",$(document).scrollLeft());
tr_header.css("position","fixed");
if($("#headerBackground").length===0){$(fillerDiv).insertAfter(tr_header)
}},300)
}function newsLetterSignUp(a){if(isValidEmail(a)){openInfoBox("/mail/emailsignup_popup.jsp?s=F&email="+a,"",700,923)
}else{if(!($("#footerEmail").hasClass("eleError"))){addErrorClass(document.getElementById("footerEmail"));
$("#footerEmail").css("background-position","185% 10px")
}}return false
}function forgotEmailSubmit(a){if(a==="undefined"||a==null||a===""){$("#forgotemail").addClass("eleError");
return false
}if(isValidEmail(a)){$("#forgotPassword").submit();
return true
}else{$("#forgotemail").addClass("eleError");
return false
}}function checkEmailAddress(b){var c=false;
var a=document.getElementById(b);
if(a.value==""){c=true;
$(a).addClass("eleError")
}else{if(!isValidEmail(a.value)){c=true;
$(a).addClass("eleError")
}}if(!c){$(a).addClass("valid")
}return c
}function checkSameEmail(b,a){var d=$(document.getElementById(b));
var c=$(document.getElementById(a));
if(d!=null&&c!=null&&d.val()==c.val()){return true
}else{if(c.hasClass("valid")){c.addClass("eleError")
}return false
}}function checkEmailRegForm(){var b=false;
$("#errorListModal").slideUp("slow");
$("#emailModalError").hide();
$("#emailModalFormatError").hide();
$("#noSelectionModal").hide();
if(checkEmailAddress("email1Modal"," ")){b=true;
if($("#email1Modal").val()!=""){$("#emailModalFormatError").show()
}else{$("#emailModalError").show()
}}if((document.getElementById("inside_track")&&!document.getElementById("inside_track").checked)&&(document.getElementById("promo")&&!document.getElementById("promo").checked)&&(document.getElementById("tiretest")&&!document.getElementById("tiretest").checked)&&(document.getElementById("tiresurvey")&&!document.getElementById("tiresurvey").checked)){b=true;
$("#noSelectionModal").show()
}if(b){$("#errorListModal").slideDown("slow");
try{window.modal.resizeToContent()
}catch(a){}}return !b
}function sendEmailReg(){if(window.formSubmitted=="true"){return
}window.formSubmitted="true";
var a="/register/NewsletterSignUpServlet";
var d="";
var c=document.getElementById("emailReg").getElementsByTagName("INPUT");
for(var b=0;
b<c.length;
b++){if(c[b].name){if(c[b].type!="checkbox"||c[b].checked){d+="&";
d+=c[b].name+"="+c[b].value
}}}d+="&ajax=true&site=new";
$.ajax({url:a+"?"+d,type:"POST",success:function(g){window.formSubmitted="false";
try{window.modal.hide()
}catch(f){}var e={linkName:"Quick Newsletter Registration",eVar44:"email subscription",eVar45:"quick subscription",events:"event11,event17"};
linkTracking(e)
}})
}function selectAllNewsletters(){if(document.getElementById("inside_track")){document.getElementById("inside_track").checked=true;
var a=$("#inside_track_checkbox");
a.removeClass("off");
a.addClass("on").find('input[type="Checkbox"]').prop("checked",true).trigger("change")
}if(document.getElementById("promo")){document.getElementById("promo").checked=true;
var a=$("#promo_checkbox");
a.removeClass("off");
a.addClass("on").find('input[type="Checkbox"]').prop("checked",true).trigger("change")
}if(document.getElementById("tiretest")){document.getElementById("tiretest").checked=true;
var a=$("#tiretest_checkbox");
a.removeClass("off");
a.addClass("on").find('input[type="Checkbox"]').prop("checked",true).trigger("change")
}if(document.getElementById("tiresurvey")){document.getElementById("tiresurvey").checked=true;
var a=$("#tiresurvey_checkbox");
a.removeClass("off");
a.addClass("on").find('input[type="Checkbox"]').prop("checked",true).trigger("change")
}if(document.getElementById("wishlist")){document.getElementById("wishlist").checked=true;
var a=$("#wishlist_checkbox");
a.removeClass("off");
a.addClass("on").find('input[type="Checkbox"]').prop("checked",true).trigger("change")
}if(document.getElementById("savedvehicle")){document.getElementById("savedvehicle").checked=true;
var a=$("#savedvehicle_checkbox");
a.removeClass("off");
a.addClass("on").find('input[type="Checkbox"]').prop("checked",true).trigger("change")
}}function deselectAllNewsletters(){if(document.getElementById("inside_track")){document.getElementById("inside_track").checked=false;
var a=$("#inside_track_checkbox");
a.removeClass("on").find('input[type="Checkbox"]').prop("checked",false).trigger("change");
a.addClass("off")
}if(document.getElementById("promo")){document.getElementById("promo").checked=false;
var a=$("#promo_checkbox");
a.removeClass("on").find('input[type="Checkbox"]').prop("checked",false).trigger("change");
a.addClass("off")
}if(document.getElementById("tiretest")){document.getElementById("tiretest").checked=false;
var a=$("#tiretest_checkbox");
a.removeClass("on").find('input[type="Checkbox"]').prop("checked",false).trigger("change");
a.addClass("off")
}if(document.getElementById("tiresurvey")){document.getElementById("tiresurvey").checked=false;
var a=$("#tiresurvey_checkbox");
a.removeClass("on").find('input[type="Checkbox"]').prop("checked",false).trigger("change");
a.addClass("off")
}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(b){var a=this.length>>>0;
var c=Number(arguments[1])||0;
c=(c<0)?Math.ceil(c):Math.floor(c);
if(c<0){c+=a
}for(;
c<a;
c++){if(c in this&&this[c]===b){return c
}}return -1
}
}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}function isAEMPage(){return window.location.pathname&&window.location.pathname.indexOf("/content/tirerack/")==0
}function getUserProfileData(){var a=webApplicationBaseURL+"/rest/v1/UserProfileService/getUser?to_desktop=true";
$.ajax({type:"GET",url:a,dataType:"jsonp",contentType:"application/jsonp",success:function(c){if(c.status=="success"){if(c.data.loggedIn==false){$("#loginFormMenu").parents("li.acc").one("click",function(){$("#login").html('<iframe style="margin:0" scrolling="no" frameborder="0" width="245" height="300" src="'+webApplicationBaseURL+"/register/modalbox_login.jsp?secure="+(window.location.protocol.indexOf("https")>-1?"true":"false")+'"></iframe>')
}).on("click, touchstart",function(){if(typeof top.postMessage=="function"&&(typeof blogPage=="undefined"||!blogPage)){if(trLoginLoaded){$("#login iframe")[0].contentWindow.postMessage("TR-Action:loginFocus","*")
}}});
$(".authenticated").hide();
$(".unauthenticated").show()
}else{if(c.data.loggedIn==true){var d=c.data.name.toUpperCase();
var g=false;
while(getTextWidth(d,"14px gibsonsemibold")>90){d=d.substring(0,d.length-1);
g=true
}if(g){while(getTextWidth(d,"14px gibsonsemibold")>76){d=d.substring(0,d.length-1)
}d=d+"..."
}$(".unauthenticated").hide();
$("#userName").append(" "+d);
$("li.acc").css("max-width","155px");
$(".authenticated").show();
if(typeof lpTag!="undefined"){lpTag.sdes=lpTag.sdes||[];
lpTag.sdes.push({type:"ctmrinfo",info:{customerId:c.data.id,userName:c.data.name}});
lpTag.sdes.push({type:"personal",personal:{firstname:c.data.firstName,lastname:c.data.lastName,contacts:[{email:c.data.email,phone:c.data.phoneNumber}]}})
}}}if(typeof c.data.zipCode!="undefined"&&c.data.zipCode.trim()!=""){$(".zip-code-input").val(c.data.zipCode);
$("#getSessionZip").val(c.data.zipCode);
$(".zip-code-input").addClass("success");
$(".enterZipBtnFilter").prop("disabled",false);
var f=c.data.zipCode,e=$("#installerMap").val()
}if(typeof c.data.emarsysString!="undefined"&&isAEMPage()){var b=document.createElement("script");
b.innerHTML=c.data.emarsysString;
document.head.appendChild(b)
}if(isAEMPage()&&c.data.id!=null&&c.data.id!=""){s.visitor.setCustomerIDs({userid:{id:c.data.id,authState:c.data.email!=null&&c.data.email!=""?"1":"2"}})
}}},error:function(c,b){}})
}function getCartDetails(){var a=webApplicationBaseURL+"/rest/v1/cartService/getCartDetails?to_desktop=true";
$.ajax({type:"GET",url:a,dataType:"jsonp",contentType:"application/jsonp",success:function(b){if(b.status=="success"){$(".cart").find(".item-count").text(b.data.count)
}},error:function(c,b){}})
}function trackLogin(){var a={linkName:s.pageName+": authentication complete",eVar44:"authenticate",eVar45:"global",events:"event17,event18"};
linkTracking(a)
}function triggerEvent(a){$("body").trigger(a)
}function getTextWidth(i,b){if(!!document.createElement("canvas").getContext){var c=getTextWidth.canvas||(getTextWidth.canvas=document.createElement("canvas"));
var d=c.getContext("2d");
d.font=b;
var e=d.measureText(i);
return e.width
}else{var g=b||"12px arial",h=$("<div>"+i+"</div>").css({position:"absolute","float":"left","white-space":"nowrap",visibility:"hidden",font:g}).appendTo($("body")),a=h.width();
h.remove();
return a
}}function showWelcomeModal(){$(document).ready(function(){if($.cookie("welcome")!=1){openInfoBox("/content/tirerack/desktop/en/welcome-modal/FreeShippingModal.html?wcmmode=disabled","","default","default");
$.cookie("welcome","1",{expires:210,path:"/"})
}})
}var windowObjectReference;
var shareURL;
var shareTitle;
var shareImage;
var eafURL;
function eafPopup(f){var a="/mail/eaf_popup.jsp";
if(document.URL.indexOf("MiniWheelSearchServlet")>-1){var g=document.getElementById("WSLchangeColor").selectedIndex-2;
if(g!=null){a=a+"?vehicleColorIndex="+g
}}else{if(document.URL.indexOf("/tires.jsp")>-1){var d="";
try{var b=document.getElementById("cat-tabs");
for(var c=0;
c<b.childNodes.length;
c++){if(b.childNodes[c].childNodes.length>0&&b.childNodes[c].firstChild.className=="current"){d=b.childNodes[c].firstChild.rev
}}}catch(e){}a+="?URL="+(d?encodeURIComponent("tab="+d+"&"):"")+eafURL
}}openInfoBox(a,f,"default","default")
}function sharePage(c,f){var a=shareURL;
if(document.URL.indexOf("MiniWheelSearchServlet")>-1){var g=document.getElementById("WSLchangeColor").selectedIndex-2;
if(a.toString().substring(0,7)=="http%3A"){a=decodeURIComponent(a)
}if(a.toString().indexOf("vehicleColorIndex")>0){var b=a.toString().indexOf("&vehicleColorIndex");
var d=a.toString().substring(0,b);
var i=a.toString().length;
var e=a.toString().indexOf("&",b+1);
var h="";
if(e>b){h=a.toString().substring(e,i)
}a=d+h+"&vehicleColorIndex="+g
}else{a=a+"&vehicleColorIndex="+g
}a=encodeURIComponent(a);
f="ShareWheelsOnVehicle "
}linkShare(c,f);
if(c=="Facebook"){windowObjectReference=window.open("http://www.facebook.com/sharer.php?u="+a,"","toolbar=0,resizable=1,width=670,height=436,scrollbars=1")
}else{if(c=="Twitter"){windowObjectReference=window.open("http://twitter.com/share?url="+a+"&text="+encodeURIComponent($("<textarea />").html(decodeURIComponent(shareTitle.replace(/\+/g,"%20"))).text())+"&via=tirerack","","toolbar=0,resizable=1,height=440,width=620,scrollbars=1")
}else{if(c=="Google"){windowObjectReference=window.open("https://plus.google.com/share?url="+a,"","toolbar=0,resizable=1,height=670,width=620,scrollbars=1")
}else{if(c=="Pinterest"){windowObjectReference=window.open("http://www.pinterest.com/pin/create/button/?url="+a+"&description="+shareTitle+"&media="+shareImage,"","toolbar=0,resizable=1,height=700,width=800,scrollbars=1")
}}}}return false
}function linkShare(b,c){if(c=="video"){c="video"
}else{c="page"
}var a={linkName:"tr: "+c+" share: "+b.toLowerCase(),prop43:"social share",prop46:"event: social media interaction",eVar44:"social",eVar45:b.toLowerCase(),eVar46:"D=c46",events:"event17,event86"};
linkTracking(a,"prop9,products")
}function shareIt(e,d,b,c,a){shareURL=e;
shareTitle=d;
shareImage=b;
sharePage(c,a)
}function pageShareIt(b,a){shareURL=encodeURIComponent(jQuery("meta[property='og:url']").attr("content"));
shareTitle=encodeURIComponent(jQuery("meta[property='og:title']").attr("content"));
shareImage=encodeURIComponent(jQuery("meta[property='og:image']").attr("content"));
sharePage(b,a)
}function checkEAF(){var b="";
if(checkInputField($("#recipientName"))){b+="<li>Please enter recipient's name.</li>"
}var e=$("#userID").val().trim();
if(!(e.length>0)){$("#userID").addClass("eleError");
b+="<li>Please provide a valid recipient's email address (e.g., name@serviceprovider.com).</li>"
}else{$("#userID").removeClass("eleError");
var e=e.split(",");
if(e.length==1){if(checkInputField($("#userID"),"email")){b+="<li>Please provide a valid recipient's email address (e.g., name@serviceprovider.com).</li>"
}}else{var d=false;
for(var c=0;
c<e.length;
c++){if(!isValidEmail(e[c])){d=true;
$("#userID").addClass("eleError");
b+="<li>One or more recipient's email addresses entered are invalid.</li>";
break
}}if(!d){$("#userID").removeClass("eleError")
}}}if(checkInputField($("#senderName"))){b+="<li>Please enter your name.</li>"
}if(checkInputField($("#senderEmail"),"email")){b+="<li>Please provide a valid email address (e.g., name@serviceprovider.com).</li>"
}if(b==""){var f="";
if(typeof sProductsOnPage!="undefined"){f=sProductsOnPage
}var a={linkName:"tr: email a friend",prop37:"no eaf to self",prop43:"email a friend",prop46:"event: email a friend",eVar44:"social",eVar45:"email a friend",eVar46:"D=c46",events:"event5,event17",products:f};
if($("#userID").val().trim()===$("#senderEmail").val().trim()){a.prop37="eaf to self"
}linkTracking(a);
return true
}else{$("div.eafErrors").removeClass("hide").show();
$("#eafErrorsUL").empty().html(b)
}return false
}$(document).ready(function(){window.url={queryString:function(c,b){var d=new RegExp("(?:\\?|&)"+c+"=(.*?)(?=&|$)","gi"),e=[],a;
while((a=d.exec(b))!=null){e.push(a[1])
}return e
}};
window.modalDisableClose=false;
window.modal={loadModal:function(){$("body").find(".overlayBackground").remove();
$("body").append("<div class='overlayBackground'></div><div class='modalContainer'><div class='modalPop'><span class='closeButton'></span><div class='container'></div></div></div>");
$(".modalContainer").data("insideModal",false).on("mousedown",function(a){$(".modalContainer").data("insideModal",$(a.target).closest(".modalPop").length)
});
$(".modalContainer").on("click",function(a){if((a.originalEvent!==undefined&&!$(".modalContainer").data("insideModal")||a.originalEvent===undefined&&$(a.target).closest(".modalPop").length==0)&&!window.modalDisableClose){modal.hide()
}})
},call:function(a){var b=a;
$.ajax({url:b,type:"GET",dataType:"html",success:function(c){modal.show(c)
},failure:function(c,d){console.error(c,XHR)
}})
},require:function(a,b){if(typeof b==="undefined"){return
}if(trGetCookie(b)!=1){window.modal.disableClose(a)
}},disableClose:function(a){window.modalDisableClose=true;
$(".modalContainer .modalPop .closeButton").css("display","none");
window.modal.call(a)
},enableClose:function(){window.modalDisableClose=false;
$(".modalContainer .modalPop .closeButton").css("display","")
},openOnce:function(a,b){if(typeof b==="undefined"){return
}if(trGetCookie(b)!=1){window.modal.call(a)
}},submitForm:function(b){var a=$(b);
$.ajax({url:a.attr("action"),type:a.attr("method"),data:a.serialize(),dataType:"html",success:function(c){modal.show(c)
},failure:function(c,d){console.error(c,XHR)
}})
},show:function(c){$(".modalContainer").data("insideModal",false);
$("body").css({"overflow-y":"hidden"});
$(".overlayBackground").fadeTo("slow",0.6);
var a=jQuery.data($(".modalContainer")[0],"modalProperties");
var b=a["class"];
b=typeof b=="undefined"||b==""?"modalGreyBg":b;
var d=$(".modalContainer").find(".container");
d.attr("class","container");
if(b!="none"&&b!="clear"){d.addClass(b)
}d.html(c).promise().done(function(){$(".modalContainer").find(".container").find("select:not(.ddDisabled)").each(function(){trDropdown(this)
});
var g=jQuery.data($(".modalContainer")[0],"modalProperties");
$(".modalContainer").fadeIn("slow");
var f=$(".modalContainer").find(".modalPop").css({width:"auto",height:"auto",top:"auto",marginBottom:"auto",right:"auto",left:"auto",bottom:"auto"}).width();
if(f>900){f=500
}var h=(isNaN(g.width)||g.width==""?f:parseInt(g.width))+"px";
$(".modalContainer .modalPop").width(h);
var i=0;
$(".modalContainer").find(".modalPop").children(":not(.closeButton)").each(function(){i=i+parseInt($(this).outerHeight())
});
var e=(isNaN(g.height)||g.height==""?i:parseInt(g.height));
if($(".modalContainer .modalPop").find(".container").children("div").attr("data-bg")=="white"){$(".modalContainer .modalPop").addClass("bg-white")
}if(e>$(window).outerHeight()-150){$(".modalContainer .modalPop").height(e).width(h).css({top:"75px",marginBottom:"75px",right:0,left:0,height:e});
$(".modalContainer .modalPop #bottomFiller").remove();
$(".modalContainer .modalPop").append("<div id='bottomFiller' style='height: 75px'></div>")
}else{$(".modalContainer .modalPop").height(e).width(h).css({top:0,bottom:0,right:0,left:0,height:e});
$(".modalContainer .modalPop #bottomFiller").remove()
}if(typeof g.openEvent!="undefined"&&g.openEvent!=""){$(".modalContainer").trigger(g.openEvent)
}$(".modalContainer").trigger("modalLoad")
})
},changeHeight:function(c){var a=$(".modalContainer").find(".modalPop").height(),b=$(".modalContainer").find(".modalPop").width();
a=a+parseInt(c);
if(a>$(window).outerHeight()-150){$(".modalContainer .modalPop").height(a).width(b).css({top:"75px",marginBottom:"75px",bottom:"auto",right:0,left:0});
$(".modalContainer .modalPop #bottomFiller").remove();
$(".modalContainer .modalPop").append("<div id='bottomFiller' style='height: 75px'></div>")
}else{$(".modalContainer .modalPop").height(a).width(b).css({top:0,marginBottom:"auto",bottom:0,right:0,left:0});
$(".modalContainer .modalPop #bottomFiller").remove()
}if(document.getElementById("sFrame")){$("#sFrame").height(a)
}},resizeToContent:function(){var a=0;
var b=$(".modalContainer").find(".modalPop").width();
$(".modalContainer").find(".modalPop").children().each(function(){a=a+parseInt($(this).outerHeight())
});
if(a>$(window).outerHeight()-150){$(".modalContainer .modalPop").height(a).width(b).css({top:"75px",marginBottom:"75px",bottom:"auto",right:0,left:0});
$(".modalContainer .modalPop #bottomFiller").remove();
$(".modalContainer .modalPop").append("<div id='bottomFiller' style='height: 75px'></div>")
}else{$(".modalContainer .modalPop").height(a).width(b).css({top:0,marginBottom:"auto",bottom:0,right:0,left:0});
$(".modalContainer .modalPop #bottomFiller").remove()
}if(document.getElementById("sFrame")){$("#sFrame").height(a)
}},hideRequire:function(a){trSetCookie(a,"1",10*356);
window.modal.hide()
},hide:function(){window.modalDisableClose=false;
var a=jQuery.data($(".modalContainer")[0],"modalProperties");
if(typeof a!="undefined"&&typeof a.closeEvent!="undefined"&&a.closeEvent!=""){$(".modalContainer").trigger(a.closeEvent)
}$(".modalContainer").trigger("modalClose");
$("body").css({"overflow-y":"scroll","max-width":"","min-width":""});
$(".overlayBackground, .modalContainer").fadeOut("slow",function(){$(".modalPop").removeAttr("style");
$(".modalContainer .modalPop .closeButton").css("display","")
});
$(".modalContainer").find(".container").html("");
$(".modalContainer .modalPop").find("#bottomFiller").remove();
$(".modalContainer").trigger("modalAfterClose")
}};
(function(c,b){var d="foo",a="bar";
c.global=(function(){function e(){var f=this;
this.functionName=function(){};
this.init=function(){modal.loadModal();
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(k){var j=this.length>>>0;
var l=Number(arguments[1])||0;
l=(l<0)?Math.ceil(l):Math.floor(l);
if(l<0){l+=j
}for(;
l<j;
l++){if(l in this&&this[l]===k){return l
}}return -1
}
}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}$(document).mouseup(function(m){var k=$(".nUlScrollFix");
var j=$(".search.ptp");
var l=$(".search").find(".submenu");
if(j.has(m.target).length==0){if(l.hasClass("submenu-hidden")){}else{l.addClass("submenu-hidden")
}}if(k.has(m.target).length===0){if($(".ddWr ul").hasClass("exp")){$(".ddWr").find(".nUlScrollFix").hide();
$(".ddWr ul.exp").removeClass("exp");
$(".ddWr.enabled").removeClass("active")
}}});
$(document).on("mouseenter",".ptp",function(){if($(this).hasClass("search")){$(this).find(".submenu").removeClass("submenu-hidden");
$(this).find(".submenu").find("input").focus()
}else{$(".ptp.search").find(".submenu").addClass("submenu-hidden")
}});
$(document).on("mouseenter",".acc",function(){$(".ptp.search").find(".submenu").addClass("submenu-hidden")
});
$(document).on("keyup",".zipGlobalVal",function(){var m=$(this).val(),k=m.length,l=$(this),j=$(this).data("msg");
if(k>=5){$.ajax({type:"GET",url:"/rest/v1/zipCodeLookUp/"+m+"?to_desktop=true",cache:false,dataType:"json",async:false,success:function(n){if(n.status=="success"){l.parent().find(".errorMsg").remove();
l.removeClass("zipError").addClass("zipSuccess");
l.parent().find('input[type="submit"]').removeAttr("disabled").removeClass("dsbld");
l.parent().find('button[type="submit"]').removeAttr("disabled").removeClass("dsbld")
}else{l.parent().find(".errorMsg").remove();
l.removeClass("zipSuccess").addClass("zipError");
l.parent().find('input[type="submit"]').attr("disabled",true).addClass("dsbld");
l.parent().find('button[type="submit"]').attr("disabled",true).addClass("dsbld")
}}})
}else{l.parent().find(".errorMsg").remove();
l.removeClass("zipError").removeClass("zipSuccess");
l.parent().find('input[type="submit"]').attr("disabled",true).addClass("dsbld");
l.parent().find('button[type="submit"]').attr("disabled",true).addClass("dsbld")
}});
$(".show-pop").on("click",function(){var j=$(this).attr("data-pop");
if(/.html/i.test(j)){$.get(j,function(k){$("#modal-window .content a").before(k);
$("#modal-window").fadeIn("slow")
})
}else{$("#"+j).fadeIn("slow")
}});
$(".close-pop").on("click",function(){$(this).parents(".fullPagePopup").fadeOut("slow");
$("#modal-window .content").find(".modal-content").remove()
});
$(document).on("click",".modalContainer .modalPop .closeButton",function(){modal.hide()
});
$(".showAjaxPop").on("click",function(){var k=$(this).attr("data-ele"),j=$("#"+k),l=$(j).attr("data-url");
$.ajax({url:l,type:"GET",success:function(m){$(j).fadeIn("slow");
$(j).find(".content").append(m)
},failure:function(m,n){console.error(m,XHR)
}})
});
$(document).on("click touchstart","radiobutton",function(){if($(this).hasClass("disabled")){}else{var k=$(this).find("input[type='radio']").attr("name");
var j=$("radiobutton."+k);
$(j).removeClass("enabled");
$(j).find("input[type='radio']").prop("checked",false).removeClass("selected");
$(this).addClass("enabled");
$(this).find("input[type='radio']").prop("checked",true).addClass("selected")
}});
$(document).on("click",".custome-addbutton-title",function(){$(this).parent(".custome-addbutton").find(".custome-addbutton-fields").slideToggle();
$(this).parent(".custome-addbutton").find(".custome-addbutton-title").toggleClass("icon-add");
$(this).parent(".custome-addbutton").find(".custome-addbutton-title").toggleClass("icon-remove")
});
$(document).on("click","#submitZip",function(){var j=$("#zipForm").find('input[name="zip"]').val();
$.ajax({url:"/shippingquote/SetZip.jsp?zip="+j,type:"GET",dataType:"html",success:function(k){if(k.indexOf("shipquotetable")!=-1){i();
location.reload(true)
}else{if(k.indexOf("checkedAWarehouseTrue")!=-1){i();
location.reload(true)
}else{$("#shippingQuote").html(k).fadeIn()
}}},failure:function(k,l){console.error(k,XHR)
}})
});
function g(){var l=document.createElement("p");
l.style.width="100%";
l.style.height="200px";
var m=document.createElement("div");
m.style.position="absolute";
m.style.top="0px";
m.style.left="0px";
m.style.visibility="hidden";
m.style.width="200px";
m.style.height="150px";
m.style.overflow="hidden";
m.appendChild(l);
document.body.appendChild(m);
var k=l.offsetWidth;
m.style.overflow="scroll";
var j=l.offsetWidth;
if(k==j){j=m.clientWidth
}document.body.removeChild(m);
return(k-j)
}function i(){$("body").css("overflow-y","scroll");
$("body").css("min-width","100%").css("width","100%").css("margin-right","0");
$(".overlayBackground").fadeOut("slow",function(){});
$(".overlayContainer").hide();
$(".overlayContainer-fixed").hide();
$(".overlayContainer-fixed > .overlayContainer").unwrap()
}$(document).on("click",".hideOverlay",function(){i()
});
$(document).on("keyup",function(j){if(j.keyCode==27){i();
modal.hide()
}});
$("textarea").each(function(){$(this).data("default",$(this).attr("placeholder"))
}).focusin(function(){$(this).attr("placeholder","")
}).focusout(function(){$(this).attr("placeholder",$(this).data("default"))
});
$(".tooltip").each(function(){addToolTip(this)
});
$(".closeSignUp").on("click",function(){$(".overlayBackground").fadeOut("slow").remove();
$("#show-signup").fadeOut("slow")
});
$(document).on("click","#logoutlink",function(){if($(".authenticated").is(":visible")){$(".login").find('input[name="selection"]').val("");
$.ajax({type:"POST",url:""+domainName+"/register/LoginServlet",success:function(j){window.location.reload()
},error:function(l,k,j){}})
}});
function h(l,j){var k="/rest/v1/VehicleDataService/getRecentAndSavedVehicleSize?to_desktop=true";
$.ajax({type:"GET",url:k,dataType:"json",contentType:"application/json",success:function(m){if(m.status=="success"){$("#omniLoginCheck").val("1").trigger("change");
if(j){omniLoginSuccess()
}}},error:function(n,m){}})
}return this
};
return this.init()
}return new e()
}())
}(window.tirerack=window.tirerack||{}));
$(".tooltip").on("touchstart",function(a){$(this).tooltip("open")
});
$("html").on("touchend",function(a){if(!$(a.target).closest(".tooltip").length){$(".tooltip").tooltip("close")
}});
if(typeof isCQpage=="undefined"||!isCQpage||trGetCookie("sessionStarted")==1){window.sessionIsSet=true;
$(window).trigger("sessionStarted")
}$("input[name=email], input[type=email]").each(function(){emailValidation(this)
})
});
function addToolTip(a){$(a).tooltip({tooltipClass:$(this).prop("data-class"),position:{my:"left+15 center",at:"right center",using:function(b,c){$(this).css(b);
$("<div>").addClass("arrow").addClass(c.vertical).addClass(c.horizontal).appendTo(this)
}},content:function(){return $(this).prop("title")
}})
}(function(){if(!window.console){window.console={}
}var a=["log","info","warn","error","debug","trace","dir","group","groupCollapsed","groupEnd","time","timeEnd","profile","profileEnd","dirxml","assert","count","markTimeline","timeStamp","clear"];
for(var b=0;
b<a.length;
b++){if(!window.console[a[b]]){window.console[a[b]]=function(){}
}}})();
if(typeof top.postMessage=="function"&&(typeof blogPage=="undefined"||!blogPage)){window.onmessage=function(h){if(h.data&&typeof h.data=="string"){if(h.data.indexOf("TR:")==0){var i="proxyframe";
var b=frames[i];
var a=h.data.substring(3);
if(b){b.location.href=a
}else{if(a.indexOf("[iFrameSizer]")!=0){var c=document.createElement("iframe");
c.id=i;
c.name=i;
c.src=a;
c.style.display="none";
document.body.appendChild(c)
}}}else{if(h.data.indexOf("TR-Action:")==0){var g=h.data.substring(10);
if(g=="loginReady"){trLoginLoaded=true;
var f="";
try{f=":"+encodeURIComponent(window.location.href)
}catch(d){}if(f!=""){$("#login iframe")[0].contentWindow.postMessage("TR-Action:parentLocation"+f,"*")
}}}}}}
}function getScriptCached(a,b){jQuery.ajax({type:"GET",url:a,success:b,dataType:"script",cache:true})
}function trIsScrolledIntoView(c){if(typeof c!="object"||c.length==0){return
}var e=$(window).scrollTop();
var d=e+$(window).height();
var a=$(c).offset().top;
var b=a+$(c).outerHeight();
return((b<=d)&&(a>=e))
}function trSetCookie(b,f,c){var e=new Date();
e.setTime(e.getTime()+(c*24*60*60*1000));
var a="expires="+e.toUTCString();
document.cookie=b+"="+f+";"+a+";path=/;SameSite=None; Secure"
}function trGetCookie(d){var b=d+"=";
var f=decodeURIComponent(document.cookie);
var a=f.split(";");
for(var e=0;
e<a.length;
e++){var g=a[e];
while(g.charAt(0)==" "){g=g.substring(1)
}if(g.indexOf(b)==0){return g.substring(b.length,g.length)
}}return""
}function trRemoveCookie(a){document.cookie=a+"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
}if(trGetCookie("acceptTerms")!=1&&window.location.pathname!="/about/privacy.jsp"&&window.location.pathname!="/content/tirerack/desktop/en/customer_support/terms_of_use.html"&&(typeof blogPage=="undefined"||!blogPage)){$(document).ready(function(){$cookieAlert=$("<div />",{id:"cookieAlert"});
$closePolicy=$("<a />",{"class":"closeIcon",href:"#"}).append($("<span />",{"class":"visuallyhidden"}).text("Close Policy Alert"));
$closePolicy.on("click",function(){trSetCookie("acceptTerms","1",10*356);
$("#cookieAlert").remove();
return false
});
$cookieAlert.append($closePolicy).append('<p>We use cookies on this site to enhance your user experience. By clicking any link on this page you are giving your consent for us to use cookies. You can learn more about how we use cookies by reviewing our <a href="/about/privacy.jsp" target="_blank">Privacy Policy</a>.</p>');
$agreeButton=$("<button />").text("Agree");
$agreeButton.on("click",function(){trSetCookie("acceptTerms","1",10*356);
$("#cookieAlert").remove()
});
$cookieAlert.append($agreeButton);
$(document).find("body").prepend($cookieAlert);
$(document).on("click",function(){trSetCookie("acceptTerms","1",10*356);
$("#cookieAlert").remove()
})
})
}function getAffiliateCallNumber(){var d=getCookie("CallUs");
if(d!=undefined&&d!="undefined"){var c=d.split("|")[0];
if(c.length>0){return c
}}}function getCookie(a){var b="; "+document.cookie;
var c=b.split("; "+a+"=");
if(c.length==2){return c.pop().split(";").shift()
}}function pageAnalyticsFired(){return(function(){for(w_m in window){if(w_m.substring(0,4)=="s_i_"&&window[w_m].src){if(window[w_m].src.indexOf("/b/ss/")>=0){return !0
}}}})()
}function trFireAfterPageAnalytics(a){if(typeof window.pageCallIteration=="undefined"){window.pageCallIteration=0
}if(window.pageCallIteration<30&&!pageAnalyticsFired()){setTimeout(function(){window.pageCallIteration++;
trFireAfterPageAnalytics(a)
},100)
}else{a()
}}function linkTracking(d,c,b,a){trFireAfterPageAnalytics(function(){s=s_gi(s_account);
var e={};
if(d.nodeName){e=JSON.parse($(d).attr("data-tracking"))
}else{e=d
}c=c||"";
b=b||"o";
a=a||$.noop();
s.linkTrackVars="server,channel,hier1,prop6,prop42,prop43,prop49,prop60,eVar18,eVar42,eVar43,eVar48,eVar52,eVar60";
s.linkTrackEvents="None";
if(c.length>0){s.linkTrackVars=s.linkTrackVars+","+c
}s.eVar43="D=c43";
$.each(e,function(f,g){window.s[f]=g;
if(s.linkTrackVars.indexOf(f)<0){s.linkTrackVars=s.linkTrackVars+","+f
}if(f==="events"){s.linkTrackEvents=g
}});
if(b!=="d"&&b!=="e"){b="o"
}s.tl(true,b,s.linkName,null,a)
})
}function ltSetDynamicValues(b){var a=b.split(",");
$.each(a,function(c,e){var d=a[c].split(":")[0];
var f=a[c].split(":")[1];
window.s[d]=$("#"+f).val()
})
}function selectProductLT(b){resultsNum=resultsNum|"";
var a={linkName:s.pageName+": select product",prop3:b,prop43:"select product result",eVar51:"D=c3",events:"event54"};
linkTracking(a,"eVar3,eVar4,eVar5,eVar6,eVar35,eVar61,eVar62")
}function changeSortLT(b){b=b|$("#sortBy").val()|"unknown";
var a={linkName:s.pageName+": change sort: "+b,prop11:b,prop43:"change sort order"};
linkTracking(a,"eVar3,eVar4,eVar5,eVar6,eVar35")
}function updateFiltersLT(){var a=getListOfFilters();
var b={linkName:s.pageName+": apply filters",prop43:"apply filters",events:"event44",list1:a};
linkTracking(b,"eVar3,eVar4,eVar5,eVar6,eVar35")
}function getListOfFilters(){var a="";
if($("#sliderValue").val()<400){a="price: up to "+$("#sliderValue").val()
}$(".filter-t-sections ul li").each(function(){var b=$(this).find("span.text").text();
b=b.substring(0,(b.indexOf("("))).trim();
$(this).find("input").each(function(){if($(this).is(":checked")){var c=$(this).val();
if(a.length>0){a+=", "+b+": "+c
}else{a=b+": "+c
}}})
});
return a
}function addToCartLT(b,a,c){var d={linkName:s.pageName+": add to cart",prop43:"add to cart",prop46:"event: add to cart",eVar44:"product catalog",eVar45:"add to cart",eVar46:"D=c46",eVar63:b,eVar67:a,events:"event17",products:c};
linkTracking(d,"eVar3,eVar4,eVar5,eVar6,eVar35")
}$(document).ready(function(){$("#sms-save-settings-out").click(function(b){b.preventDefault();
var d=$(this);
d.prop("disabled",true);
d.text("Loading...");
var a=$("input[name='MobileNumber']").val().replace(/[^0-9]/g,"");
var c="noEmailOptOut=true&smsOptIn=N&smsPhone="+a;
$.ajax({url:"/rest/v1/SmsOptIn/OptInOut",data:c,dataType:"json",cache:false,success:function(e){if(e.data.updateSuccess==true){$(".failMsg").hide();
$(".successMsg").show()
}else{$(".successMsg").hide();
$(".failMsg").show()
}d.prop("disabled",false);
d.text("Unsubscribe")
},error:function(e){console.log(e);
d.prop("disabled",false);
d.text("Unsubscribe");
$(".successMsg").hide();
$(".failMsg").show()
}});
d.blur()
})
});
$(document).ready(function(){$(".toggle-password").click(function(){$(this).toggleClass("password_show password_hide");
var a=$($(this).data("toggle"));
if(a.attr("type")=="password"){setToTextInput(a)
}else{setToPasswordInput(a)
}});
$(window).on("beforeunload",function(){$(".toggle-password").addClass("password_show").removeClass("password_hide").each(function(){var a=$($(this).data("toggle"));
setToPasswordInput(a)
})
})
});
function setToPasswordInput(a){$ele=$(a);
$ele.clone().attr("type","password").insertAfter($ele).prev().remove()
}function setToTextInput(a){$ele=$(a);
$ele.clone().attr("type","text").insertAfter($ele).prev().remove()
};
//Browser Checks
isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
isFirefox = typeof InstallTrigger !== 'undefined';
isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
isIE = /*@cc_on!@*/false || !!document.documentMode;
isEdge = !isIE && !!window.StyleMedia;
isChrome = !!window.chrome && !!window.chrome.webstore;
isBlink = (isChrome || isOpera) && !!window.CSS;

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-touchevents-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],n=S[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,u,f,p="modernizr",c=i("div"),d=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:p+(r+1),c.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+p,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),l=t(c,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=f,x.offsetHeight):c.parentNode.removeChild(c),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?p(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function h(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function v(e,n,o,s){function a(){p&&(delete A.style,delete A.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=h(e,o);if(!r(l,"undefined"))return l}for(var p,c,d,m,v,g=["modernizr","tspan","samp"];!A.style&&g.length;)p=!0,A.modElem=i(g.shift()),A.style=A.modElem.style;for(d=e.length,c=0;d>c;c++)if(m=e[c],v=A.style[m],u(m,"-")&&(m=f(m)),A.style[m]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?m:!0;try{A.style[m]=o}catch(y){}if(A.style[m]!=v)return a(),"pfx"==n?m:!0}return a(),!1}function g(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,s):(a=(e+" "+j.join(i+" ")+i).split(" "),c(a,n,t))}function y(e,n,r){return g(e,t,t,n,r)}var C=[],S=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),b=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=b;var z=w.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){t=9===e.offsetTop})}return t});var P="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",P||T);var E="Moz O ms Webkit",j=w._config.usePrefixes?E.toLowerCase().split(" "):[];w._domPrefixes=j;var k=w._config.usePrefixes?E.split(" "):[];w._cssomPrefixes=k;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var A={style:N.elem.style};Modernizr._q.unshift(function(){delete A.style}),w.testAllProps=g,w.testAllProps=y,Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in x.style)){var t,r="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),o(),s(C),delete w.addTest,delete w.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);

        
function parallax(){
    var scrollTop = jQuery(this).scrollTop(),
        windowHeight = jQuery(this).outerHeight(),
        windowBottom = windowHeight + scrollTop;

    jQuery('.parallax-container').each(function () {

        var containerTop = jQuery(this).offset().top,
            containerHeight = jQuery(this).outerHeight(),
            parallaxElement = jQuery(this).children(".parallax-element"),
            scrollSpeed = parallaxElement.attr("data-scrollSpeed"),
            position = Math.round(((windowBottom - containerTop) - windowHeight) * scrollSpeed);

        if ((containerTop + containerHeight > scrollTop) && (containerTop < (scrollTop + windowHeight))) {
            if(isIE){
                parallaxElement.css({
                    "top" : "" + position + "px"
                });
            }else{
                parallaxElement.css({
                    "-webkit-transform": "translate3D(0, " + position + "px, 0)",
                    "-moz-transform": "translate3D(0, " + position + "px, 0)",
                    "-ms-transform": "translate3D(0, " + position + "px, 0)",
                    "-o-transform": "translate3D(0, " + position + "px, 0)",
                    "transform": "translate3D(0, " + position + "px, 0)"
                });
            }
        }
    });
}

//Sets parallax scrolling to supported browsers
if(!Modernizr.touch && Modernizr.csstransforms3d && !isEdge){
    jQuery(window).on('scroll', parallax);
}

//Sets background attachment to fixed on edge because edge doesn't support 
if(isEdge){
    jQuery('.parallax-element').css({
        "background-attachment" : "fixed"
    });
}

//Sets parallax image position on page reload
jQuery('.parallax-container').each(function(){
    var scrollTop = jQuery(window).scrollTop(),
        windowHeight = jQuery(this).outerHeight(),
        windowBottom = windowHeight + scrollTop;
        containerTop = jQuery(this).offset().top, 
        parallaxElement = jQuery(this).children(".parallax-element"),
        scrollSpeed = parallaxElement.attr("data-scrollSpeed"),
        position = Math.round(((windowBottom - containerTop) - windowHeight) * scrollSpeed);

    jQuery(this).ready(function(){
        if(scrollTop > containerTop){
            element.css({
                "-webkit-transform": "translate3D(0, " + position + "px, 0)",
                "-moz-transform": "translate3D(0, " + position + "px, 0)",
                "-ms-transform": "translate3D(0, " + position + "px, 0)",
                "-o-transform": "translate3D(0, " + position + "px, 0)",
                "transform": "translate3D(0, " + position + "px, 0)"
            });  
        }
    });
});

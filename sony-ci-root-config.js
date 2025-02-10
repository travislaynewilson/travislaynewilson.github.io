import*as e from"single-spa";const t=e;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s="undefined"!=typeof window;function l(e,t){if("object"!==n(t)||Array.isArray(t)||null===t)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function p(e,t){if("boolean"!=typeof t)throw Error("Invalid ".concat(e,": received ").concat(n(t),", but expected a boolean"))}function d(e,t,n,r){if(!r){var o=Object.keys(t),a=[];o.forEach((function(e){n.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function f(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||n&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(n?" non-blank":""," string"))}function h(e,t){if(f(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function v(e,t,r){if(!Array.isArray(t)&&("object"!==n(n(t))||"number"!==t.length))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];for(var c=0;c<t.length;c++)r.apply(void 0,[t[c],"".concat(e,"[").concat(c,"]")].concat(a))}function m(e,t){var n;return"/"===(n="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&n.length>1&&(n=n.slice(0,n.length-1)),n}function y(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}var g=Object.prototype.hasOwnProperty.call(t,"default")?Object.getOwnPropertyDescriptor(t,"default").value.pathToActiveWhen:t.pathToActiveWhen,b="undefined"!=typeof Symbol?Symbol():"@";function w(e,t){if(s)return e.getAttribute(t);var n=y(e.attrs,(function(e){return e.name===t.toLowerCase()}));return n?n.value:null}function E(e,t){return s?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function N(e,t,n){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var r={type:"application",name:w(e,"name")},o=w(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))r.loader=t.loaders[o];else if(s)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=w(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))r.error=t.errors[a];else if(s)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return O(e,r,t),[r]}if("route"===e.nodeName.toLowerCase()){var c={type:"route",routes:[]},u=w(e,"path");u&&(c.path=u),E(e,"default")&&(c.default=!0),E(e,"exact")&&(c.exact=!0),O(e,c,t);for(var l=0;l<e.childNodes.length;l++){var p;(p=c.routes).push.apply(p,i(N(e.childNodes[l],t,n)))}return[c]}if("redirect"===e.nodeName.toLowerCase())return n.redirects[m("/",w(e,"from"))]=m("/",w(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var f;(f=e.routes).push.apply(f,i(N(e.childNodes[d],t,n)))}}return[e]}if(e.childNodes){for(var h={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},v=0;v<e.childNodes.length;v++){var y;(y=h.routes).push.apply(y,i(N(e.childNodes[v],t,n)))}return[h]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function O(e,t,n){for(var r=(w(e,"props")||"").split(","),o=0;o<r.length;o++){var a=r[o].trim();if(0!==a.length)if(t.props||(t.props={}),n.props&&n.props.hasOwnProperty(a))t.props[a]=n.props[a];else{if(s)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=b}}}function A(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function P(e){var t=e.location,n=e.routes,r=e.parentContainer,o=e.previousSibling,a=e.shouldMount,i=e.applicationContainers;return n.forEach((function(e,n){if("application"===e.type){if(a){var c,u=L(e.name);i[e.name]?c=i[e.name]:document.getElementById(u)?c=document.getElementById(u):(c=document.createElement("div")).id=u,x(c,r,o),o=c}}else if("route"===e.type)o=P({location:t,routes:e.routes,parentContainer:r,previousSibling:o,shouldMount:a&&e.activeWhen(t),applicationContainers:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var s=e instanceof Node?e.cloneNode(!1):j(e);e.connectedNode=s}x(e.connectedNode,r,o),e.routes&&P({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,applicationContainers:i}),o=e.connectedNode}else(l=e.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete e.connectedNode;var l})),o}function C(e){for(var t=e.applicationName,n=e.location,r=e.routes,o=0;o<r.length;o++){var a=r[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(n)){var i=C({applicationName:t,location:n,routes:a.routes});if(i)return i}}else if(a.routes){var c=C({applicationName:t,location:n,routes:a.routes});if(c)return c}}}function x(e,t,n){var r=n?n.nextSibling:t.firstChild;r!==e&&t.insertBefore(e,r)}function L(e){return"single-spa-application:".concat(e)}function j(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(j(e))})),t}function S(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:location)["hash"===e.mode?"hash":"pathname"]}function W(e){try{return new URL(e)}catch(n){var t=document.createElement("a");return t.href=e,t}}function I(e){var n=[],r=(0,t.checkActivityFunctions)(e?W(e):location);return(0,t.getAppNames)().forEach((function(e){r.indexOf(e)<0&&n.push(e)})),n}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a(a({},e),t)}var M,D,H,R,k=function(e,t){if(e&&e.nodeName||"string"==typeof e){if(s&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),"string"==typeof e){if(!s)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(e=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));s&&e.isConnected&&e.parentNode.removeChild(e);var n={routes:[],redirects:{}};w(e,"mode")&&(n.mode=w(e,"mode")),w(e,"base")&&(n.base=w(e,"base")),w(e,"containerEl")&&(n.containerEl=w(e,"containerEl"));for(var r=0;r<e.childNodes.length;r++){var o;(o=n.routes).push.apply(o,i(N(e.childNodes[r],t,n)))}return n}(e,t)}else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){l("routesConfig",e);var t,n=e.disableWarnings;if(d("routesConfig",e,["mode","base","containerEl","routes","disableWarnings","redirects"],n),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(s&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,n){if(n.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(n.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(f("routesConfig.base",e.base),e.base=(0!==(t=e.base).indexOf("/")&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),t)):e.base="/",e.hasOwnProperty("redirects"))for(var r in l("routesConfig.redirects",e.redirects),e.redirects){var o=e.redirects[r];h("routesConfig.redirects key",r),h("routesConfig.redirects['".concat(r,"']"),o)}var a=s?window.location.pathname:"/",i="hash"===e.mode?a+"#":"";v("routesConfig.routes",e.routes,(function e(t,r,o){var a=o.parentPath,i=o.siblingActiveWhens,c=o.parentActiveWhen;if(l(r,t),"application"===t.type)d(r,t,["type","name","props","loader","error"],n),t.props&&l("".concat(r,".props"),t.props),f("".concat(r,".name"),t.name);else if("route"===t.type){d(r,t,["type","path","routes","props","default","exact"],n),t.hasOwnProperty("exact")&&p("".concat(r,".exact"),t.exact);var u,s=t.hasOwnProperty("path"),h=t.hasOwnProperty("default");if(s)f("".concat(r,".path"),t.path),u=m(a,t.path),t.activeWhen=g(u,t.exact),i.push(t.activeWhen);else{if(!h)throw Error("Invalid ".concat(r,": routes must have either a path or default property."));p("".concat(r,".default"),t.default),u=a,t.activeWhen=function(e,t){return function(n){return t(n)&&!e.some((function(e){return e(n)}))}}(i,c)}if(s&&h&&t.default)throw Error("Invalid ".concat(r,": cannot have both path and set default to true."));t.routes&&v("".concat(r,".routes"),t.routes,e,{parentPath:u,siblingActiveWhens:[],parentActiveWhen:t.activeWhen})}else{if("undefined"!=typeof Node&&t instanceof Node);else for(var y in t)"routes"!==y&&"attrs"!==y&&f("".concat(r,"['").concat(y,"']"),t[y],!1);t.routes&&v("".concat(r,".routes"),t.routes,e,{parentPath:a,siblingActiveWhens:i,parentActiveWhen:c})}}),{parentPath:i+e.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete e.disableWarnings}(e),e}('<single-spa-router>\n  \x3c!--\n\n    This is the single-spa Layout Definition for your microfrontends.\n    See https://single-spa.js.org/docs/layout-definition/ for more information.\n\n  --\x3e\n\n  \x3c!-- Example layouts you might find helpful:\n\n  <nav>\n    <application name="@org/navbar"></application>\n  </nav>\n  <route path="settings">\n    <application name="@org/settings"></application>\n  </route>\n\n  --\x3e\n\n  <main>\n    <route default>\n      <application name="@single-spa/welcome"></application>\n    </route>\n  </main>\n</single-spa-router>\n'),B=(D=(M={routes:k,loadApp:function(e){var t=e.name;return import(t)}}).routes,H=M.loadApp,function e(t,n,r,o){o.forEach((function(o){"application"===o.type?(t[o.name]||(t[o.name]=[]),t[o.name].push({activeWhen:n,props:T(r,o.props),loader:o.loader})):"route"===o.type?e(t,o.activeWhen,T(r,o.props),o.routes):o.routes&&e(t,n,r,o.routes)}))}(R={},(function(){return!0}),{},D.routes),Object.keys(R).map((function(e){var n=R[e];return{name:e,customProps:function(e,t){var r=y(n,(function(e){return e.activeWhen(t)}));return r?r.props:{}},activeWhen:n.map((function(e){return e.activeWhen})),app:function(){var r;s&&(r=y(n,(function(e){return e.activeWhen(window.location)})));var o=H({name:e});return r&&r.loader?function(e,n,r){return Promise.resolve().then((function(){var o,a=L(e),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var u="string"==typeof n.loader?A(n.loader):n.loader,s=(0,t.mountRootParcel)(u,{name:"application-loader:".concat(e),domElement:i});function l(){return s.unmount().then((function(){o&&o()}))}return Promise.all([s.mountPromise,r]).then((function(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(t.push(a.value),2!==t.length);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return t}}(t)||c(t,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();n[0];var r=n[1];return l().then((function(){return r}))}),(function(e){return l().then((function(){throw e}))}))}))}(e,r,o):o}}}))),U=function(e){var r=e.routes,o=e.active,a=void 0===o||o,i=!1,c={};if(!r)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(n(r)));var u=r.base.slice(0,r.base.length-1),l={isActive:function(){return i},activate:function(){i||(i=!0,s&&(window.addEventListener("single-spa:before-routing-event",d),window.addEventListener("single-spa:before-mount-routing-event",f),window.addEventListener("single-spa:routing-event",h),(0,t.addErrorHandler)(p),f()))},deactivate:function(){i&&(i=!1,s&&(window.removeEventListener("single-spa:before-routing-event",d),window.removeEventListener("single-spa:before-mount-routing-event",f),window.removeEventListener("single-spa:routing-event",h),(0,t.removeErrorHandler)(p)))}};return a&&l.activate(),l;function p(e){var n=C({applicationName:e.appOrParcelName,location:window.location,routes:r.routes});if(n&&n.error){var o=document.getElementById(L(n.name)),a="string"==typeof n.error?A(n.error):n.error;c[n.name]=(0,t.mountRootParcel)(a,{domElement:o})}setTimeout((function(){throw e}))}function d(e){var o=e.detail,a=o.cancelNavigation,i=o.newUrl,u=S(r,W(i)),s=function(e){var n=r.redirects[e];if(e===u){if(!a)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return a(),setTimeout((function(){(0,t.navigateToUrl)(n)})),{v:void 0}}};for(var l in r.redirects){var p=s(l);if("object"===n(p))return p.v}var d=[];I(i).forEach((function(e){c[e]&&(d.push(c[e].unmount()),delete c[e])})),d.length>0&&(a(),Promise.all(d).then((function(){(0,t.navigateToUrl)(i)})))}function f(){if(0===S(r).indexOf(u)){var e="string"==typeof r.containerEl?document.querySelector(r.containerEl):r.containerEl,n=(0,t.getMountedApps)().reduce((function(e,t){return e[t]=document.getElementById(L(t)),e}),{});P({location:window.location,routes:r.routes,parentContainer:e,shouldMount:!0,applicationContainers:n})}}function h(e){var t=e.detail,n=t.navigationIsCanceled,r=t.newUrl;n||I(r).forEach((function(e){var t=document.getElementById(L(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}}({routes:k,applications:B});B.forEach(t.registerApplication),U.activate(),(0,t.start)();
//# sourceMappingURL=sony-ci-root-config.js.map
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&p(x)}).observe(document,{childList:!0,subtree:!0});function u(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function p(m){if(m.ep)return;m.ep=!0;const h=u(m);fetch(m.href,h)}})();var Xs={exports:{}},Ur={},Zs={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function Gp(){if(hc)return ne;hc=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),x=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),R=Symbol.iterator;function _(v){return v===null||typeof v!="object"?null:(v=R&&v[R]||v["@@iterator"],typeof v=="function"?v:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,V={};function U(v,j,te){this.props=v,this.context=j,this.refs=V,this.updater=te||J}U.prototype.isReactComponent={},U.prototype.setState=function(v,j){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,j,"setState")},U.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function G(){}G.prototype=U.prototype;function W(v,j,te){this.props=v,this.context=j,this.refs=V,this.updater=te||J}var ee=W.prototype=new G;ee.constructor=W,Q(ee,U.prototype),ee.isPureReactComponent=!0;var de=Array.isArray,pe=Object.prototype.hasOwnProperty,we={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function Te(v,j,te){var re,ie={},se=null,fe=null;if(j!=null)for(re in j.ref!==void 0&&(fe=j.ref),j.key!==void 0&&(se=""+j.key),j)pe.call(j,re)&&!ke.hasOwnProperty(re)&&(ie[re]=j[re]);var ue=arguments.length-2;if(ue===1)ie.children=te;else if(1<ue){for(var ve=Array(ue),tt=0;tt<ue;tt++)ve[tt]=arguments[tt+2];ie.children=ve}if(v&&v.defaultProps)for(re in ue=v.defaultProps,ue)ie[re]===void 0&&(ie[re]=ue[re]);return{$$typeof:a,type:v,key:se,ref:fe,props:ie,_owner:we.current}}function He(v,j){return{$$typeof:a,type:v.type,key:j,ref:v.ref,props:v.props,_owner:v._owner}}function Ve(v){return typeof v=="object"&&v!==null&&v.$$typeof===a}function ln(v){var j={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(te){return j[te]})}var kt=/\/+/g;function et(v,j){return typeof v=="object"&&v!==null&&v.key!=null?ln(""+v.key):j.toString(36)}function mt(v,j,te,re,ie){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var fe=!1;if(v===null)fe=!0;else switch(se){case"string":case"number":fe=!0;break;case"object":switch(v.$$typeof){case a:case c:fe=!0}}if(fe)return fe=v,ie=ie(fe),v=re===""?"."+et(fe,0):re,de(ie)?(te="",v!=null&&(te=v.replace(kt,"$&/")+"/"),mt(ie,j,te,"",function(tt){return tt})):ie!=null&&(Ve(ie)&&(ie=He(ie,te+(!ie.key||fe&&fe.key===ie.key?"":(""+ie.key).replace(kt,"$&/")+"/")+v)),j.push(ie)),1;if(fe=0,re=re===""?".":re+":",de(v))for(var ue=0;ue<v.length;ue++){se=v[ue];var ve=re+et(se,ue);fe+=mt(se,j,te,ve,ie)}else if(ve=_(v),typeof ve=="function")for(v=ve.call(v),ue=0;!(se=v.next()).done;)se=se.value,ve=re+et(se,ue++),fe+=mt(se,j,te,ve,ie);else if(se==="object")throw j=String(v),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return fe}function Et(v,j,te){if(v==null)return v;var re=[],ie=0;return mt(v,re,"","",function(se){return j.call(te,se,ie++)}),re}function Qe(v){if(v._status===-1){var j=v._result;j=j(),j.then(function(te){(v._status===0||v._status===-1)&&(v._status=1,v._result=te)},function(te){(v._status===0||v._status===-1)&&(v._status=2,v._result=te)}),v._status===-1&&(v._status=0,v._result=j)}if(v._status===1)return v._result.default;throw v._result}var Ee={current:null},M={transition:null},X={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:M,ReactCurrentOwner:we};function O(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Et,forEach:function(v,j,te){Et(v,function(){j.apply(this,arguments)},te)},count:function(v){var j=0;return Et(v,function(){j++}),j},toArray:function(v){return Et(v,function(j){return j})||[]},only:function(v){if(!Ve(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ne.Component=U,ne.Fragment=u,ne.Profiler=m,ne.PureComponent=W,ne.StrictMode=p,ne.Suspense=S,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ne.act=O,ne.cloneElement=function(v,j,te){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var re=Q({},v.props),ie=v.key,se=v.ref,fe=v._owner;if(j!=null){if(j.ref!==void 0&&(se=j.ref,fe=we.current),j.key!==void 0&&(ie=""+j.key),v.type&&v.type.defaultProps)var ue=v.type.defaultProps;for(ve in j)pe.call(j,ve)&&!ke.hasOwnProperty(ve)&&(re[ve]=j[ve]===void 0&&ue!==void 0?ue[ve]:j[ve])}var ve=arguments.length-2;if(ve===1)re.children=te;else if(1<ve){ue=Array(ve);for(var tt=0;tt<ve;tt++)ue[tt]=arguments[tt+2];re.children=ue}return{$$typeof:a,type:v.type,key:ie,ref:se,props:re,_owner:fe}},ne.createContext=function(v){return v={$$typeof:x,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:h,_context:v},v.Consumer=v},ne.createElement=Te,ne.createFactory=function(v){var j=Te.bind(null,v);return j.type=v,j},ne.createRef=function(){return{current:null}},ne.forwardRef=function(v){return{$$typeof:E,render:v}},ne.isValidElement=Ve,ne.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:Qe}},ne.memo=function(v,j){return{$$typeof:b,type:v,compare:j===void 0?null:j}},ne.startTransition=function(v){var j=M.transition;M.transition={};try{v()}finally{M.transition=j}},ne.unstable_act=O,ne.useCallback=function(v,j){return Ee.current.useCallback(v,j)},ne.useContext=function(v){return Ee.current.useContext(v)},ne.useDebugValue=function(){},ne.useDeferredValue=function(v){return Ee.current.useDeferredValue(v)},ne.useEffect=function(v,j){return Ee.current.useEffect(v,j)},ne.useId=function(){return Ee.current.useId()},ne.useImperativeHandle=function(v,j,te){return Ee.current.useImperativeHandle(v,j,te)},ne.useInsertionEffect=function(v,j){return Ee.current.useInsertionEffect(v,j)},ne.useLayoutEffect=function(v,j){return Ee.current.useLayoutEffect(v,j)},ne.useMemo=function(v,j){return Ee.current.useMemo(v,j)},ne.useReducer=function(v,j,te){return Ee.current.useReducer(v,j,te)},ne.useRef=function(v){return Ee.current.useRef(v)},ne.useState=function(v){return Ee.current.useState(v)},ne.useSyncExternalStore=function(v,j,te){return Ee.current.useSyncExternalStore(v,j,te)},ne.useTransition=function(){return Ee.current.useTransition()},ne.version="18.3.1",ne}var gc;function pa(){return gc||(gc=1,Zs.exports=Gp()),Zs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function Yp(){if(vc)return Ur;vc=1;var a=pa(),c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function x(E,S,b){var T,R={},_=null,J=null;b!==void 0&&(_=""+b),S.key!==void 0&&(_=""+S.key),S.ref!==void 0&&(J=S.ref);for(T in S)p.call(S,T)&&!h.hasOwnProperty(T)&&(R[T]=S[T]);if(E&&E.defaultProps)for(T in S=E.defaultProps,S)R[T]===void 0&&(R[T]=S[T]);return{$$typeof:c,type:E,key:_,ref:J,props:R,_owner:m.current}}return Ur.Fragment=u,Ur.jsx=x,Ur.jsxs=x,Ur}var yc;function Kp(){return yc||(yc=1,Xs.exports=Yp()),Xs.exports}var s=Kp(),qo={},ea={exports:{}},Ze={},ta={exports:{}},na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function qp(){return xc||(xc=1,(function(a){function c(M,X){var O=M.length;M.push(X);e:for(;0<O;){var v=O-1>>>1,j=M[v];if(0<m(j,X))M[v]=X,M[O]=j,O=v;else break e}}function u(M){return M.length===0?null:M[0]}function p(M){if(M.length===0)return null;var X=M[0],O=M.pop();if(O!==X){M[0]=O;e:for(var v=0,j=M.length,te=j>>>1;v<te;){var re=2*(v+1)-1,ie=M[re],se=re+1,fe=M[se];if(0>m(ie,O))se<j&&0>m(fe,ie)?(M[v]=fe,M[se]=O,v=se):(M[v]=ie,M[re]=O,v=re);else if(se<j&&0>m(fe,O))M[v]=fe,M[se]=O,v=se;else break e}}return X}function m(M,X){var O=M.sortIndex-X.sortIndex;return O!==0?O:M.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var x=Date,E=x.now();a.unstable_now=function(){return x.now()-E}}var S=[],b=[],T=1,R=null,_=3,J=!1,Q=!1,V=!1,U=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(M){for(var X=u(b);X!==null;){if(X.callback===null)p(b);else if(X.startTime<=M)p(b),X.sortIndex=X.expirationTime,c(S,X);else break;X=u(b)}}function de(M){if(V=!1,ee(M),!Q)if(u(S)!==null)Q=!0,Qe(pe);else{var X=u(b);X!==null&&Ee(de,X.startTime-M)}}function pe(M,X){Q=!1,V&&(V=!1,G(Te),Te=-1),J=!0;var O=_;try{for(ee(X),R=u(S);R!==null&&(!(R.expirationTime>X)||M&&!ln());){var v=R.callback;if(typeof v=="function"){R.callback=null,_=R.priorityLevel;var j=v(R.expirationTime<=X);X=a.unstable_now(),typeof j=="function"?R.callback=j:R===u(S)&&p(S),ee(X)}else p(S);R=u(S)}if(R!==null)var te=!0;else{var re=u(b);re!==null&&Ee(de,re.startTime-X),te=!1}return te}finally{R=null,_=O,J=!1}}var we=!1,ke=null,Te=-1,He=5,Ve=-1;function ln(){return!(a.unstable_now()-Ve<He)}function kt(){if(ke!==null){var M=a.unstable_now();Ve=M;var X=!0;try{X=ke(!0,M)}finally{X?et():(we=!1,ke=null)}}else we=!1}var et;if(typeof W=="function")et=function(){W(kt)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Et=mt.port2;mt.port1.onmessage=kt,et=function(){Et.postMessage(null)}}else et=function(){U(kt,0)};function Qe(M){ke=M,we||(we=!0,et())}function Ee(M,X){Te=U(function(){M(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_continueExecution=function(){Q||J||(Q=!0,Qe(pe))},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return u(S)},a.unstable_next=function(M){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var O=_;_=X;try{return M()}finally{_=O}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(M,X){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var O=_;_=M;try{return X()}finally{_=O}},a.unstable_scheduleCallback=function(M,X,O){var v=a.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?v+O:v):O=v,M){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=O+j,M={id:T++,callback:X,priorityLevel:M,startTime:O,expirationTime:j,sortIndex:-1},O>v?(M.sortIndex=O,c(b,M),u(S)===null&&M===u(b)&&(V?(G(Te),Te=-1):V=!0,Ee(de,O-v))):(M.sortIndex=j,c(S,M),Q||J||(Q=!0,Qe(pe))),M},a.unstable_shouldYield=ln,a.unstable_wrapCallback=function(M){var X=_;return function(){var O=_;_=X;try{return M.apply(this,arguments)}finally{_=O}}}})(na)),na}var wc;function Xp(){return wc||(wc=1,ta.exports=qp()),ta.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc;function Zp(){if(Cc)return Ze;Cc=1;var a=pa(),c=Xp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function h(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(m[e]=t,e=0;e<t.length;e++)p.add(t[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},R={};function _(e){return S.call(R,e)?!0:S.call(T,e)?!1:b.test(e)?R[e]=!0:(T[e]=!0,!1)}function J(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,t,n,r){if(t===null||typeof t>"u"||J(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function V(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];U[t]=new V(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(G,W);U[t]=new V(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(G,W);U[t]=new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(G,W);U[t]=new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var o=U.hasOwnProperty(t)?U[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q(t,n,o,r)&&(n=null),r||o===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var de=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),we=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),ln=Symbol.for("react.context"),kt=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),M=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,v;function j(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var te=!1;function re(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var o=C.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,d=i.length-1;1<=l&&0<=d&&o[l]!==i[d];)d--;for(;1<=l&&0<=d;l--,d--)if(o[l]!==i[d]){if(l!==1||d!==1)do if(l--,d--,0>d||o[l]!==i[d]){var f=`
`+o[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=l&&0<=d);break}}}finally{te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?j(e):""}function ie(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case we:return"Portal";case He:return"Profiler";case Te:return"StrictMode";case et:return"Suspense";case mt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ln:return(e.displayName||"Context")+".Consumer";case Ve:return(e._context.displayName||"Context")+".Provider";case kt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Et:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tt(e){var t=ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=tt(e))}function Ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ve(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ka(e,t){t=t.checked,t!=null&&ee(e,"checked",t,!1)}function si(e,t){ka(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ea(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Kn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function ba(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ui(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ja(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,Na=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){Xc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function Ta(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function La(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ta(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Zc=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ci(e,t){if(t){if(Zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,kn=null,En=null;function Ia(e){if(e=wr(e)){if(typeof mi!="function")throw Error(u(280));var t=e.stateNode;t&&(t=po(t),mi(e.stateNode,e.type,t))}}function Da(e){kn?En?En.push(e):En=[e]:kn=e}function Aa(){if(kn){var e=kn,t=En;if(En=kn=null,Ia(e),t)for(e=0;e<t.length;e++)Ia(t[e])}}function Ua(e,t){return e(t)}function _a(){}var hi=!1;function Ma(e,t,n){if(hi)return e(t,n);hi=!0;try{return Ua(e,t,n)}finally{hi=!1,(kn!==null||En!==null)&&(_a(),Aa())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var gi=!1;if(E)try{var er={};Object.defineProperty(er,"passive",{get:function(){gi=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{gi=!1}function ed(e,t,n,r,o,i,l,d,f){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(N){this.onError(N)}}var tr=!1,Vr=null,$r=!1,vi=null,td={onError:function(e){tr=!0,Vr=e}};function nd(e,t,n,r,o,i,l,d,f){tr=!1,Vr=null,ed.apply(td,arguments)}function rd(e,t,n,r,o,i,l,d,f){if(nd.apply(this,arguments),tr){if(tr){var C=Vr;tr=!1,Vr=null}else throw Error(u(198));$r||($r=!0,vi=C)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fa(e){if(un(e)!==e)throw Error(u(188))}function od(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Fa(o),e;if(i===r)return Fa(o),t;i=i.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,d=o.child;d;){if(d===n){l=!0,n=o,r=i;break}if(d===r){l=!0,r=o,n=i;break}d=d.sibling}if(!l){for(d=i.child;d;){if(d===n){l=!0,n=i,r=o;break}if(d===r){l=!0,r=i,n=o;break}d=d.sibling}if(!l)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Oa(e){return e=od(e),e!==null?Ba(e):null}function Ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ba(e);if(t!==null)return t;e=e.sibling}return null}var Ha=c.unstable_scheduleCallback,Va=c.unstable_cancelCallback,id=c.unstable_shouldYield,sd=c.unstable_requestPaint,be=c.unstable_now,ad=c.unstable_getCurrentPriorityLevel,yi=c.unstable_ImmediatePriority,$a=c.unstable_UserBlockingPriority,Wr=c.unstable_NormalPriority,ld=c.unstable_LowPriority,Wa=c.unstable_IdlePriority,Jr=null,Rt=null;function ud(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Jr,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:pd,cd=Math.log,dd=Math.LN2;function pd(e){return e>>>=0,e===0?32:31-(cd(e)/dd|0)|0}var Qr=64,Gr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var d=l&~o;d!==0?r=nr(d):(i&=l,i!==0&&(r=nr(i)))}else l=n&~o,l!==0?r=nr(l):i!==0&&(r=nr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ht(i),d=1<<l,f=o[l];f===-1?((d&n)===0||(d&r)!==0)&&(o[l]=fd(d,t)):f<=t&&(e.expiredLanes|=d),i&=~d}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ja(){var e=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),e}function wi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ci(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function Qa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ga,Si,Ya,Ka,qa,ki=!1,Kr=[],Bt=null,Ht=null,Vt=null,or=new Map,ir=new Map,$t=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function sr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=wr(t),t!==null&&Si(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vd(e,t,n,r,o){switch(t){case"focusin":return Bt=sr(Bt,e,t,n,r,o),!0;case"dragenter":return Ht=sr(Ht,e,t,n,r,o),!0;case"mouseover":return Vt=sr(Vt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return or.set(i,sr(or.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ir.set(i,sr(ir.get(i)||null,e,t,n,r,o)),!0}return!1}function Za(e){var t=cn(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=za(n),t!==null){e.blockedOn=t,qa(e.priority,function(){Ya(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ri(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=wr(n),t!==null&&Si(t),e.blockedOn=n,!1;t.shift()}return!0}function el(e,t,n){qr(e)&&n.delete(t)}function yd(){ki=!1,Bt!==null&&qr(Bt)&&(Bt=null),Ht!==null&&qr(Ht)&&(Ht=null),Vt!==null&&qr(Vt)&&(Vt=null),or.forEach(el),ir.forEach(el)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,ki||(ki=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,yd)))}function lr(e){function t(o){return ar(o,e)}if(0<Kr.length){ar(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&ar(Bt,e),Ht!==null&&ar(Ht,e),Vt!==null&&ar(Vt,e),or.forEach(t),ir.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Za(n),n.blockedOn===null&&$t.shift()}var Rn=de.ReactCurrentBatchConfig,Xr=!0;function xd(e,t,n,r){var o=ce,i=Rn.transition;Rn.transition=null;try{ce=1,Ei(e,t,n,r)}finally{ce=o,Rn.transition=i}}function wd(e,t,n,r){var o=ce,i=Rn.transition;Rn.transition=null;try{ce=4,Ei(e,t,n,r)}finally{ce=o,Rn.transition=i}}function Ei(e,t,n,r){if(Xr){var o=Ri(e,t,n,r);if(o===null)Hi(e,t,r,Zr,n),Xa(e,r);else if(vd(o,e,t,n,r))r.stopPropagation();else if(Xa(e,r),t&4&&-1<gd.indexOf(e)){for(;o!==null;){var i=wr(o);if(i!==null&&Ga(i),i=Ri(e,t,n,r),i===null&&Hi(e,t,r,Zr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var Zr=null;function Ri(e,t,n,r){if(Zr=null,e=fi(r),e=cn(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=za(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function tl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ad()){case yi:return 1;case $a:return 4;case Wr:case ld:return 16;case Wa:return 536870912;default:return 16}default:return 16}}var Wt=null,bi=null,eo=null;function nl(){if(eo)return eo;var e,t=bi,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return eo=o.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function rl(){return!1}function nt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?no:rl,this.isPropagationStopped=rl,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=nt(bn),ur=O({},bn,{view:0,detail:0}),Cd=nt(ur),ji,Ni,cr,ro=O({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(ji=e.screenX-cr.screenX,Ni=e.screenY-cr.screenY):Ni=ji=0,cr=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),ol=nt(ro),Sd=O({},ro,{dataTransfer:0}),kd=nt(Sd),Ed=O({},ur,{relatedTarget:0}),Ti=nt(Ed),Rd=O({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),bd=nt(Rd),Pd=O({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=nt(Pd),Nd=O({},bn,{data:0}),il=nt(Nd),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Id[e])?!!t[e]:!1}function Li(){return Dd}var Ad=O({},ur,{key:function(e){if(e.key){var t=Td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Li,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ud=nt(Ad),_d=O({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sl=nt(_d),Md=O({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Li}),zd=nt(Md),Fd=O({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=nt(Fd),Bd=O({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=nt(Bd),Vd=[9,13,27,32],Ii=E&&"CompositionEvent"in window,dr=null;E&&"documentMode"in document&&(dr=document.documentMode);var $d=E&&"TextEvent"in window&&!dr,al=E&&(!Ii||dr&&8<dr&&11>=dr),ll=" ",ul=!1;function cl(e,t){switch(e){case"keyup":return Vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Wd(e,t){switch(e){case"compositionend":return dl(t);case"keypress":return t.which!==32?null:(ul=!0,ll);case"textInput":return e=t.data,e===ll&&ul?null:e;default:return null}}function Jd(e,t){if(Pn)return e==="compositionend"||!Ii&&cl(e,t)?(e=nl(),eo=bi=Wt=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return al&&t.locale!=="ko"?null:t.data;default:return null}}var Qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qd[e.type]:t==="textarea"}function fl(e,t,n,r){Da(r),t=lo(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,fr=null;function Gd(e){Ll(e,0)}function oo(e){var t=In(e);if(Ca(t))return e}function Yd(e,t){if(e==="change")return t}var ml=!1;if(E){var Di;if(E){var Ai="oninput"in document;if(!Ai){var hl=document.createElement("div");hl.setAttribute("oninput","return;"),Ai=typeof hl.oninput=="function"}Di=Ai}else Di=!1;ml=Di&&(!document.documentMode||9<document.documentMode)}function gl(){pr&&(pr.detachEvent("onpropertychange",vl),fr=pr=null)}function vl(e){if(e.propertyName==="value"&&oo(fr)){var t=[];fl(t,fr,e,fi(e)),Ma(Gd,t)}}function Kd(e,t,n){e==="focusin"?(gl(),pr=t,fr=n,pr.attachEvent("onpropertychange",vl)):e==="focusout"&&gl()}function qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(fr)}function Xd(e,t){if(e==="click")return oo(t)}function Zd(e,t){if(e==="input"||e==="change")return oo(t)}function ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:ep;function mr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!S.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function yl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xl(e,t){var n=yl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yl(n)}}function wl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cl(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tp(e){var t=Cl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wl(n.ownerDocument.documentElement,n)){if(r!==null&&Ui(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=xl(n,i);var l=xl(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=E&&"documentMode"in document&&11>=document.documentMode,jn=null,_i=null,hr=null,Mi=!1;function Sl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mi||jn==null||jn!==Br(r)||(r=jn,"selectionStart"in r&&Ui(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&mr(hr,r)||(hr=r,r=lo(_i,"onSelect"),0<r.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},zi={},kl={};E&&(kl=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function so(e){if(zi[e])return zi[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kl)return zi[e]=t[n];return e}var El=so("animationend"),Rl=so("animationiteration"),bl=so("animationstart"),Pl=so("transitionend"),jl=new Map,Nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){jl.set(e,t),h(t,[e])}for(var Fi=0;Fi<Nl.length;Fi++){var Oi=Nl[Fi],rp=Oi.toLowerCase(),op=Oi[0].toUpperCase()+Oi.slice(1);Jt(rp,"on"+op)}Jt(El,"onAnimationEnd"),Jt(Rl,"onAnimationIteration"),Jt(bl,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(Pl,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Tl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rd(r,t,void 0,e),e.currentTarget=null}function Ll(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var d=r[l],f=d.instance,C=d.currentTarget;if(d=d.listener,f!==i&&o.isPropagationStopped())break e;Tl(o,d,C),i=f}else for(l=0;l<r.length;l++){if(d=r[l],f=d.instance,C=d.currentTarget,d=d.listener,f!==i&&o.isPropagationStopped())break e;Tl(o,d,C),i=f}}}if($r)throw e=vi,$r=!1,vi=null,e}function he(e,t){var n=t[Gi];n===void 0&&(n=t[Gi]=new Set);var r=e+"__bubble";n.has(r)||(Il(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),Il(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[ao]){e[ao]=!0,p.forEach(function(n){n!=="selectionchange"&&(ip.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,Bi("selectionchange",!1,t))}}function Il(e,t,n,r){switch(tl(t)){case 1:var o=xd;break;case 4:o=wd;break;default:o=Ei}n=o.bind(null,t,n,e),o=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var d=r.stateNode.containerInfo;if(d===o||d.nodeType===8&&d.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;l=l.return}for(;d!==null;){if(l=cn(d),l===null)return;if(f=l.tag,f===5||f===6){r=i=l;continue e}d=d.parentNode}}r=r.return}Ma(function(){var C=i,N=fi(n),I=[];e:{var P=jl.get(e);if(P!==void 0){var z=Pi,B=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":z=Ud;break;case"focusin":B="focus",z=Ti;break;case"focusout":B="blur",z=Ti;break;case"beforeblur":case"afterblur":z=Ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=zd;break;case El:case Rl:case bl:z=bd;break;case Pl:z=Od;break;case"scroll":z=Cd;break;case"wheel":z=Hd;break;case"copy":case"cut":case"paste":z=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=sl}var H=(t&4)!==0,Pe=!H&&e==="scroll",y=H?P!==null?P+"Capture":null:P;H=[];for(var g=C,w;g!==null;){w=g;var D=w.stateNode;if(w.tag===5&&D!==null&&(w=D,y!==null&&(D=Zn(g,y),D!=null&&H.push(yr(g,D,w)))),Pe)break;g=g.return}0<H.length&&(P=new z(P,B,null,n,N),I.push({event:P,listeners:H}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",P&&n!==pi&&(B=n.relatedTarget||n.fromElement)&&(cn(B)||B[Lt]))break e;if((z||P)&&(P=N.window===N?N:(P=N.ownerDocument)?P.defaultView||P.parentWindow:window,z?(B=n.relatedTarget||n.toElement,z=C,B=B?cn(B):null,B!==null&&(Pe=un(B),B!==Pe||B.tag!==5&&B.tag!==6)&&(B=null)):(z=null,B=C),z!==B)){if(H=ol,D="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(H=sl,D="onPointerLeave",y="onPointerEnter",g="pointer"),Pe=z==null?P:In(z),w=B==null?P:In(B),P=new H(D,g+"leave",z,n,N),P.target=Pe,P.relatedTarget=w,D=null,cn(N)===C&&(H=new H(y,g+"enter",B,n,N),H.target=w,H.relatedTarget=Pe,D=H),Pe=D,z&&B)t:{for(H=z,y=B,g=0,w=H;w;w=Tn(w))g++;for(w=0,D=y;D;D=Tn(D))w++;for(;0<g-w;)H=Tn(H),g--;for(;0<w-g;)y=Tn(y),w--;for(;g--;){if(H===y||y!==null&&H===y.alternate)break t;H=Tn(H),y=Tn(y)}H=null}else H=null;z!==null&&Dl(I,P,z,H,!1),B!==null&&Pe!==null&&Dl(I,Pe,B,H,!0)}}e:{if(P=C?In(C):window,z=P.nodeName&&P.nodeName.toLowerCase(),z==="select"||z==="input"&&P.type==="file")var $=Yd;else if(pl(P))if(ml)$=Zd;else{$=qd;var Y=Kd}else(z=P.nodeName)&&z.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=Xd);if($&&($=$(e,C))){fl(I,$,n,N);break e}Y&&Y(e,P,C),e==="focusout"&&(Y=P._wrapperState)&&Y.controlled&&P.type==="number"&&ai(P,"number",P.value)}switch(Y=C?In(C):window,e){case"focusin":(pl(Y)||Y.contentEditable==="true")&&(jn=Y,_i=C,hr=null);break;case"focusout":hr=_i=jn=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,Sl(I,n,N);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Sl(I,n,N)}var K;if(Ii)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Pn?cl(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(al&&n.locale!=="ko"&&(Pn||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Pn&&(K=nl()):(Wt=N,bi="value"in Wt?Wt.value:Wt.textContent,Pn=!0)),Y=lo(C,Z),0<Y.length&&(Z=new il(Z,e,null,n,N),I.push({event:Z,listeners:Y}),K?Z.data=K:(K=dl(n),K!==null&&(Z.data=K)))),(K=$d?Wd(e,n):Jd(e,n))&&(C=lo(C,"onBeforeInput"),0<C.length&&(N=new il("onBeforeInput","beforeinput",null,n,N),I.push({event:N,listeners:C}),N.data=K))}Ll(I,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Zn(e,n),i!=null&&r.unshift(yr(e,i,o)),i=Zn(e,t),i!=null&&r.push(yr(e,i,o))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dl(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var d=n,f=d.alternate,C=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&C!==null&&(d=C,o?(f=Zn(n,i),f!=null&&l.unshift(yr(n,f,d))):o||(f=Zn(n,i),f!=null&&l.push(yr(n,f,d)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var sp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function Al(e){return(typeof e=="string"?e:""+e).replace(sp,`
`).replace(ap,"")}function uo(e,t,n){if(t=Al(t),Al(e)!==t&&n)throw Error(u(425))}function co(){}var Vi=null,$i=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,lp=typeof clearTimeout=="function"?clearTimeout:void 0,Ul=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof Ul<"u"?function(e){return Ul.resolve(null).then(e).catch(cp)}:Ji;function cp(e){setTimeout(function(){throw e})}function Qi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lr(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _l(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ln,xr="__reactProps$"+Ln,Lt="__reactContainer$"+Ln,Gi="__reactEvents$"+Ln,dp="__reactListeners$"+Ln,pp="__reactHandles$"+Ln;function cn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_l(e);e!==null;){if(n=e[bt])return n;e=_l(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[bt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function po(e){return e[xr]||null}var Yi=[],Dn=-1;function Gt(e){return{current:e}}function ge(e){0>Dn||(e.current=Yi[Dn],Yi[Dn]=null,Dn--)}function me(e,t){Dn++,Yi[Dn]=e.current,e.current=t}var Yt={},ze=Gt(Yt),Ge=Gt(!1),dn=Yt;function An(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function fo(){ge(Ge),ge(ze)}function Ml(e,t,n){if(ze.current!==Yt)throw Error(u(168));me(ze,t),me(Ge,n)}function zl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(u(108,fe(e)||"Unknown",o));return O({},n,r)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,dn=ze.current,me(ze,e),me(Ge,Ge.current),!0}function Fl(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=zl(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,ge(Ge),ge(ze),me(ze,e)):ge(Ge),me(Ge,n)}var It=null,ho=!1,Ki=!1;function Ol(e){It===null?It=[e]:It.push(e)}function fp(e){ho=!0,Ol(e)}function Kt(){if(!Ki&&It!==null){Ki=!0;var e=0,t=ce;try{var n=It;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,ho=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),Ha(yi,Kt),o}finally{ce=t,Ki=!1}}return null}var Un=[],_n=0,go=null,vo=0,at=[],lt=0,pn=null,Dt=1,At="";function fn(e,t){Un[_n++]=vo,Un[_n++]=go,go=e,vo=t}function Bl(e,t,n){at[lt++]=Dt,at[lt++]=At,at[lt++]=pn,pn=e;var r=Dt;e=At;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var i=32-ht(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Dt=1<<32-ht(t)+o|n<<o|r,At=i+e}else Dt=1<<i|n<<o|r,At=e}function qi(e){e.return!==null&&(fn(e,1),Bl(e,1,0))}function Xi(e){for(;e===go;)go=Un[--_n],Un[_n]=null,vo=Un[--_n],Un[_n]=null;for(;e===pn;)pn=at[--lt],at[lt]=null,At=at[--lt],at[lt]=null,Dt=at[--lt],at[lt]=null}var rt=null,ot=null,ye=!1,vt=null;function Hl(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,ot=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:Dt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,ot=null,!0):!1;default:return!1}}function Zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function es(e){if(ye){var t=ot;if(t){var n=t;if(!Vl(e,t)){if(Zi(e))throw Error(u(418));t=Qt(n.nextSibling);var r=rt;t&&Vl(e,t)?Hl(r,n):(e.flags=e.flags&-4097|2,ye=!1,rt=e)}}else{if(Zi(e))throw Error(u(418));e.flags=e.flags&-4097|2,ye=!1,rt=e}}}function $l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function yo(e){if(e!==rt)return!1;if(!ye)return $l(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=ot)){if(Zi(e))throw Wl(),Error(u(418));for(;t;)Hl(e,t),t=Qt(t.nextSibling)}if($l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=rt?Qt(e.stateNode.nextSibling):null;return!0}function Wl(){for(var e=ot;e;)e=Qt(e.nextSibling)}function Mn(){ot=rt=null,ye=!1}function ts(e){vt===null?vt=[e]:vt.push(e)}var mp=de.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var d=o.refs;l===null?delete d[i]:d[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jl(e){var t=e._init;return t(e._payload)}function Ql(e){function t(y,g){if(e){var w=y.deletions;w===null?(y.deletions=[g],y.flags|=16):w.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function o(y,g){return y=on(y,g),y.index=0,y.sibling=null,y}function i(y,g,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<g?(y.flags|=2,g):w):(y.flags|=2,g)):(y.flags|=1048576,g)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,g,w,D){return g===null||g.tag!==6?(g=Js(w,y.mode,D),g.return=y,g):(g=o(g,w),g.return=y,g)}function f(y,g,w,D){var $=w.type;return $===ke?N(y,g,w.props.children,D,w.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Qe&&Jl($)===g.type)?(D=o(g,w.props),D.ref=Cr(y,g,w),D.return=y,D):(D=Vo(w.type,w.key,w.props,null,y.mode,D),D.ref=Cr(y,g,w),D.return=y,D)}function C(y,g,w,D){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Qs(w,y.mode,D),g.return=y,g):(g=o(g,w.children||[]),g.return=y,g)}function N(y,g,w,D,$){return g===null||g.tag!==7?(g=Cn(w,y.mode,D,$),g.return=y,g):(g=o(g,w),g.return=y,g)}function I(y,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Js(""+g,y.mode,w),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pe:return w=Vo(g.type,g.key,g.props,null,y.mode,w),w.ref=Cr(y,null,g),w.return=y,w;case we:return g=Qs(g,y.mode,w),g.return=y,g;case Qe:var D=g._init;return I(y,D(g._payload),w)}if(Kn(g)||X(g))return g=Cn(g,y.mode,w,null),g.return=y,g;xo(y,g)}return null}function P(y,g,w,D){var $=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return $!==null?null:d(y,g,""+w,D);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pe:return w.key===$?f(y,g,w,D):null;case we:return w.key===$?C(y,g,w,D):null;case Qe:return $=w._init,P(y,g,$(w._payload),D)}if(Kn(w)||X(w))return $!==null?null:N(y,g,w,D,null);xo(y,w)}return null}function z(y,g,w,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return y=y.get(w)||null,d(g,y,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case pe:return y=y.get(D.key===null?w:D.key)||null,f(g,y,D,$);case we:return y=y.get(D.key===null?w:D.key)||null,C(g,y,D,$);case Qe:var Y=D._init;return z(y,g,w,Y(D._payload),$)}if(Kn(D)||X(D))return y=y.get(w)||null,N(g,y,D,$,null);xo(g,D)}return null}function B(y,g,w,D){for(var $=null,Y=null,K=g,Z=g=0,Ue=null;K!==null&&Z<w.length;Z++){K.index>Z?(Ue=K,K=null):Ue=K.sibling;var ae=P(y,K,w[Z],D);if(ae===null){K===null&&(K=Ue);break}e&&K&&ae.alternate===null&&t(y,K),g=i(ae,g,Z),Y===null?$=ae:Y.sibling=ae,Y=ae,K=Ue}if(Z===w.length)return n(y,K),ye&&fn(y,Z),$;if(K===null){for(;Z<w.length;Z++)K=I(y,w[Z],D),K!==null&&(g=i(K,g,Z),Y===null?$=K:Y.sibling=K,Y=K);return ye&&fn(y,Z),$}for(K=r(y,K);Z<w.length;Z++)Ue=z(K,y,Z,w[Z],D),Ue!==null&&(e&&Ue.alternate!==null&&K.delete(Ue.key===null?Z:Ue.key),g=i(Ue,g,Z),Y===null?$=Ue:Y.sibling=Ue,Y=Ue);return e&&K.forEach(function(sn){return t(y,sn)}),ye&&fn(y,Z),$}function H(y,g,w,D){var $=X(w);if(typeof $!="function")throw Error(u(150));if(w=$.call(w),w==null)throw Error(u(151));for(var Y=$=null,K=g,Z=g=0,Ue=null,ae=w.next();K!==null&&!ae.done;Z++,ae=w.next()){K.index>Z?(Ue=K,K=null):Ue=K.sibling;var sn=P(y,K,ae.value,D);if(sn===null){K===null&&(K=Ue);break}e&&K&&sn.alternate===null&&t(y,K),g=i(sn,g,Z),Y===null?$=sn:Y.sibling=sn,Y=sn,K=Ue}if(ae.done)return n(y,K),ye&&fn(y,Z),$;if(K===null){for(;!ae.done;Z++,ae=w.next())ae=I(y,ae.value,D),ae!==null&&(g=i(ae,g,Z),Y===null?$=ae:Y.sibling=ae,Y=ae);return ye&&fn(y,Z),$}for(K=r(y,K);!ae.done;Z++,ae=w.next())ae=z(K,y,Z,ae.value,D),ae!==null&&(e&&ae.alternate!==null&&K.delete(ae.key===null?Z:ae.key),g=i(ae,g,Z),Y===null?$=ae:Y.sibling=ae,Y=ae);return e&&K.forEach(function(Qp){return t(y,Qp)}),ye&&fn(y,Z),$}function Pe(y,g,w,D){if(typeof w=="object"&&w!==null&&w.type===ke&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case pe:e:{for(var $=w.key,Y=g;Y!==null;){if(Y.key===$){if($=w.type,$===ke){if(Y.tag===7){n(y,Y.sibling),g=o(Y,w.props.children),g.return=y,y=g;break e}}else if(Y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Qe&&Jl($)===Y.type){n(y,Y.sibling),g=o(Y,w.props),g.ref=Cr(y,Y,w),g.return=y,y=g;break e}n(y,Y);break}else t(y,Y);Y=Y.sibling}w.type===ke?(g=Cn(w.props.children,y.mode,D,w.key),g.return=y,y=g):(D=Vo(w.type,w.key,w.props,null,y.mode,D),D.ref=Cr(y,g,w),D.return=y,y=D)}return l(y);case we:e:{for(Y=w.key;g!==null;){if(g.key===Y)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(y,g.sibling),g=o(g,w.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Qs(w,y.mode,D),g.return=y,y=g}return l(y);case Qe:return Y=w._init,Pe(y,g,Y(w._payload),D)}if(Kn(w))return B(y,g,w,D);if(X(w))return H(y,g,w,D);xo(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(y,g.sibling),g=o(g,w),g.return=y,y=g):(n(y,g),g=Js(w,y.mode,D),g.return=y,y=g),l(y)):n(y,g)}return Pe}var zn=Ql(!0),Gl=Ql(!1),wo=Gt(null),Co=null,Fn=null,ns=null;function rs(){ns=Fn=Co=null}function os(e){var t=wo.current;ge(wo),e._currentValue=t}function is(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Co=e,ns=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(ns!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Co===null)throw Error(u(308));Fn=e,Co.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var mn=null;function ss(e){mn===null?mn=[e]:mn.push(e)}function Yl(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ss(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,ss(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function So(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ci(e,n)}}function ql(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var o=e.updateQueue;qt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var f=d,C=f.next;f.next=null,l===null?i=C:l.next=C,l=f;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==l&&(d===null?N.firstBaseUpdate=C:d.next=C,N.lastBaseUpdate=f))}if(i!==null){var I=o.baseState;l=0,N=C=f=null,d=i;do{var P=d.lane,z=d.eventTime;if((r&P)===P){N!==null&&(N=N.next={eventTime:z,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var B=e,H=d;switch(P=t,z=n,H.tag){case 1:if(B=H.payload,typeof B=="function"){I=B.call(z,I,P);break e}I=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=H.payload,P=typeof B=="function"?B.call(z,I,P):B,P==null)break e;I=O({},I,P);break e;case 2:qt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,P=o.effects,P===null?o.effects=[d]:P.push(d))}else z={eventTime:z,lane:P,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(C=N=z,f=I):N=N.next=z,l|=P;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;P=d,d=P.next,P.next=null,o.lastBaseUpdate=P,o.shared.pending=null}}while(!0);if(N===null&&(f=I),o.baseState=f,o.firstBaseUpdate=C,o.lastBaseUpdate=N,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=I}}function Xl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var Sr={},Pt=Gt(Sr),kr=Gt(Sr),Er=Gt(Sr);function hn(e){if(e===Sr)throw Error(u(174));return e}function ls(e,t){switch(me(Er,t),me(kr,e),me(Pt,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ui(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ui(t,e)}ge(Pt),me(Pt,t)}function Bn(){ge(Pt),ge(kr),ge(Er)}function Zl(e){hn(Er.current);var t=hn(Pt.current),n=ui(t,e.type);t!==n&&(me(kr,e),me(Pt,n))}function us(e){kr.current===e&&(ge(Pt),ge(kr))}var Ce=Gt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function ds(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Ro=de.ReactCurrentDispatcher,ps=de.ReactCurrentBatchConfig,gn=0,Se=null,Le=null,De=null,bo=!1,Rr=!1,br=0,hp=0;function Fe(){throw Error(u(321))}function fs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function ms(e,t,n,r,o,i){if(gn=i,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?xp:wp,e=n(r,o),Rr){i=0;do{if(Rr=!1,br=0,25<=i)throw Error(u(301));i+=1,De=Le=null,t.updateQueue=null,Ro.current=Cp,e=n(r,o)}while(Rr)}if(Ro.current=No,t=Le!==null&&Le.next!==null,gn=0,De=Le=Se=null,bo=!1,t)throw Error(u(300));return e}function hs(){var e=br!==0;return br=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Se.memoizedState=De=e:De=De.next=e,De}function ct(){if(Le===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=De===null?Se.memoizedState:De.next;if(t!==null)De=t,Le=e;else{if(e===null)throw Error(u(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},De===null?Se.memoizedState=De=e:De=De.next=e}return De}function Pr(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=ct(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var d=l=null,f=null,C=i;do{var N=C.lane;if((gn&N)===N)f!==null&&(f=f.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var I={lane:N,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};f===null?(d=f=I,l=r):f=f.next=I,Se.lanes|=N,vn|=N}C=C.next}while(C!==null&&C!==i);f===null?l=r:f.next=d,gt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Se.lanes|=i,vn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vs(e){var t=ct(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);gt(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function eu(){}function tu(e,t){var n=Se,r=ct(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ke=!0),r=r.queue,ys(ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,jr(9,ru.bind(null,n,r,o,t),void 0,null),Ae===null)throw Error(u(349));(gn&30)!==0||nu(n,t,o)}return o}function nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ru(e,t,n,r){t.value=n,t.getSnapshot=r,iu(t)&&su(e)}function ou(e,t,n){return n(function(){iu(t)&&su(e)})}function iu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function su(e){var t=Ut(e,1);t!==null&&Ct(t,e,1,-1)}function au(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=yp.bind(null,Se,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lu(){return ct().memoizedState}function Po(e,t,n,r){var o=jt();Se.flags|=e,o.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var o=ct();r=r===void 0?null:r;var i=void 0;if(Le!==null){var l=Le.memoizedState;if(i=l.destroy,r!==null&&fs(r,l.deps)){o.memoizedState=jr(t,n,i,r);return}}Se.flags|=e,o.memoizedState=jr(1|t,n,i,r)}function uu(e,t){return Po(8390656,8,e,t)}function ys(e,t){return jo(2048,8,e,t)}function cu(e,t){return jo(4,2,e,t)}function du(e,t){return jo(4,4,e,t)}function pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fu(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,pu.bind(null,t,e),n)}function xs(){}function mu(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hu(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gu(e,t,n){return(gn&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n):(gt(n,t)||(n=Ja(),Se.lanes|=n,vn|=n,e.baseState=!0),t)}function gp(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=ps.transition;ps.transition={};try{e(!1),t()}finally{ce=n,ps.transition=r}}function vu(){return ct().memoizedState}function vp(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yu(e))xu(t,n);else if(n=Yl(e,t,n,r),n!==null){var o=We();Ct(n,e,r,o),wu(n,t,r)}}function yp(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yu(e))xu(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,d=i(l,n);if(o.hasEagerState=!0,o.eagerState=d,gt(d,l)){var f=t.interleaved;f===null?(o.next=o,ss(t)):(o.next=f.next,f.next=o),t.interleaved=o;return}}catch{}finally{}n=Yl(e,t,o,r),n!==null&&(o=We(),Ct(n,e,r,o),wu(n,t,r))}}function yu(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function xu(e,t){Rr=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ci(e,n)}}var No={readContext:ut,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},xp={readContext:ut,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vp.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:xs,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=gp.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,o=jt();if(ye){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ae===null)throw Error(u(349));(gn&30)!==0||nu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,uu(ou.bind(null,r,i,e),[e]),r.flags|=2048,jr(9,ru.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jt(),t=Ae.identifierPrefix;if(ye){var n=At,r=Dt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wp={readContext:ut,useCallback:mu,useContext:ut,useEffect:ys,useImperativeHandle:fu,useInsertionEffect:cu,useLayoutEffect:du,useMemo:hu,useReducer:gs,useRef:lu,useState:function(){return gs(Pr)},useDebugValue:xs,useDeferredValue:function(e){var t=ct();return gu(t,Le.memoizedState,e)},useTransition:function(){var e=gs(Pr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:vu,unstable_isNewReconciler:!1},Cp={readContext:ut,useCallback:mu,useContext:ut,useEffect:ys,useImperativeHandle:fu,useInsertionEffect:cu,useLayoutEffect:du,useMemo:hu,useReducer:vs,useRef:lu,useState:function(){return vs(Pr)},useDebugValue:xs,useDeferredValue:function(e){var t=ct();return Le===null?t.memoizedState=e:gu(t,Le.memoizedState,e)},useTransition:function(){var e=vs(Pr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:vu,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),o=nn(e),i=_t(r,o);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(Ct(t,e,o,r),So(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),o=nn(e),i=_t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(Ct(t,e,o,r),So(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=nn(e),o=_t(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xt(e,o,r),t!==null&&(Ct(t,e,r,n),So(t,e,r))}};function Cu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(o,i):!0}function Su(e,t,n){var r=!1,o=Yt,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ye(t)?dn:ze.current,r=t.contextTypes,i=(r=r!=null)?An(e,o):Yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},as(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ye(t)?dn:ze.current,o.context=An(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ws(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&To.enqueueReplaceState(o,o.state,null),ko(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=ie(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ks(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sp=typeof WeakMap=="function"?WeakMap:Map;function Eu(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,zs=r),ks(e,t)},n}function Ru(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ks(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ks(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_p.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var kp=de.ReactCurrentOwner,Ke=!1;function $e(e,t,n,r){t.child=e===null?Gl(t,null,n,r):zn(t,e.child,n,r)}function Nu(e,t,n,r,o){n=n.render;var i=t.ref;return On(t,o),r=ms(e,t,n,r,i,o),n=hs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ye&&n&&qi(t),t.flags|=1,$e(e,t,r,o),t.child)}function Tu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Lu(e,t,i,r,o)):(e=Vo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(l,r)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function Lu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return Es(e,t,n,r,o)}function Iu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me($n,it),it|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me($n,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me($n,it),it|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,me($n,it),it|=r;return $e(e,t,o,n),t.child}function Du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,n,r,o){var i=Ye(n)?dn:ze.current;return i=An(t,i),On(t,o),n=ms(e,t,n,r,i,o),r=hs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ye&&r&&qi(t),t.flags|=1,$e(e,t,n,o),t.child)}function Au(e,t,n,r,o){if(Ye(n)){var i=!0;mo(t)}else i=!1;if(On(t,o),t.stateNode===null)Io(e,t),Su(t,n,r),Cs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,d=t.memoizedProps;l.props=d;var f=l.context,C=n.contextType;typeof C=="object"&&C!==null?C=ut(C):(C=Ye(n)?dn:ze.current,C=An(t,C));var N=n.getDerivedStateFromProps,I=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function";I||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==r||f!==C)&&ku(t,l,r,C),qt=!1;var P=t.memoizedState;l.state=P,ko(t,r,l,o),f=t.memoizedState,d!==r||P!==f||Ge.current||qt?(typeof N=="function"&&(ws(t,n,N,r),f=t.memoizedState),(d=qt||Cu(t,n,d,r,P,f,C))?(I||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),l.props=r,l.state=f,l.context=C,r=d):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Kl(e,t),d=t.memoizedProps,C=t.type===t.elementType?d:yt(t.type,d),l.props=C,I=t.pendingProps,P=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=ut(f):(f=Ye(n)?dn:ze.current,f=An(t,f));var z=n.getDerivedStateFromProps;(N=typeof z=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==I||P!==f)&&ku(t,l,r,f),qt=!1,P=t.memoizedState,l.state=P,ko(t,r,l,o);var B=t.memoizedState;d!==I||P!==B||Ge.current||qt?(typeof z=="function"&&(ws(t,n,z,r),B=t.memoizedState),(C=qt||Cu(t,n,C,r,P,B,f)||!1)?(N||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,B,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,B,f)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),l.props=r,l.state=B,l.context=f,r=C):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),r=!1)}return Rs(e,t,n,r,i,o)}function Rs(e,t,n,r,o,i){Du(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Fl(t,n,!1),Mt(e,t,i);r=t.stateNode,kp.current=t;var d=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=zn(t,e.child,null,i),t.child=zn(t,null,d,i)):$e(e,t,d,i),t.memoizedState=r.state,o&&Fl(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?Ml(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ml(e,t.context,!1),ls(e,t.containerInfo)}function _u(e,t,n,r,o){return Mn(),ts(o),t.flags|=256,$e(e,t,n,r),t.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,n){var r=t.pendingProps,o=Ce.current,i=!1,l=(t.flags&128)!==0,d;if((d=l)||(d=e!==null&&e.memoizedState===null?!1:(o&2)!==0),d?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(Ce,o&1),e===null)return es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=$o(l,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ps(n),t.memoizedState=bs,e):js(t,l));if(o=e.memoizedState,o!==null&&(d=o.dehydrated,d!==null))return Ep(e,t,l,r,d,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,d=o.sibling;var f={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=on(o,f),r.subtreeFlags=o.subtreeFlags&14680064),d!==null?i=on(d,i):(i=Cn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ps(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=bs,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function js(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&ts(r),zn(t,e.child,null,n),e=js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ep(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ss(Error(u(422))),Lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$o({mode:"visible",children:r.children},o,0,null),i=Cn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&zn(t,e.child,null,l),t.child.memoizedState=Ps(l),t.memoizedState=bs,i);if((t.mode&1)===0)return Lo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var d=r.dgst;return r=d,i=Error(u(419)),r=Ss(i,r,void 0),Lo(e,t,l,r)}if(d=(l&e.childLanes)!==0,Ke||d){if(r=Ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ut(e,o),Ct(r,e,o,-1))}return $s(),r=Ss(Error(u(421))),Lo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ot=Qt(o.nextSibling),rt=t,ye=!0,vt=null,e!==null&&(at[lt++]=Dt,at[lt++]=At,at[lt++]=pn,Dt=e.id,At=e.overflow,pn=t),t=js(t,r.children),t.flags|=4096,t)}function zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),is(e.return,t,n)}function Ns(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Fu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ns(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Eo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ns(t,!0,n,null,i);break;case"together":Ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rp(e,t,n){switch(t.tag){case 3:Uu(t),Mn();break;case 5:Zl(t);break;case 1:Ye(t.type)&&mo(t);break;case 4:ls(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;me(wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Mu(e,t,n):(me(Ce,Ce.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);me(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Fu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Iu(e,t,n)}return Mt(e,t,n)}var Ou,Ts,Bu,Hu;Ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ts=function(){},Bu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,hn(Pt.current);var i=null;switch(n){case"input":o=ii(e,o),r=ii(e,r),i=[];break;case"select":o=O({},o,{value:void 0}),r=O({},r,{value:void 0}),i=[];break;case"textarea":o=li(e,o),r=li(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=co)}ci(n,r);var l;n=null;for(C in o)if(!r.hasOwnProperty(C)&&o.hasOwnProperty(C)&&o[C]!=null)if(C==="style"){var d=o[C];for(l in d)d.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(m.hasOwnProperty(C)?i||(i=[]):(i=i||[]).push(C,null));for(C in r){var f=r[C];if(d=o?.[C],r.hasOwnProperty(C)&&f!==d&&(f!=null||d!=null))if(C==="style")if(d){for(l in d)!d.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&d[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(i||(i=[]),i.push(C,n)),n=f;else C==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(i=i||[]).push(C,f)):C==="children"?typeof f!="string"&&typeof f!="number"||(i=i||[]).push(C,""+f):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(m.hasOwnProperty(C)?(f!=null&&C==="onScroll"&&he("scroll",e),i||d===f||(i=[])):(i=i||[]).push(C,f))}n&&(i=i||[]).push("style",n);var C=i;(t.updateQueue=C)&&(t.flags|=4)}},Hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bp(e,t,n){var r=t.pendingProps;switch(Xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ye(t.type)&&fo(),Oe(t),null;case 3:return r=t.stateNode,Bn(),ge(Ge),ge(ze),ds(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vt!==null&&(Bs(vt),vt=null))),Ts(e,t),Oe(t),null;case 5:us(t);var o=hn(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Bu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Oe(t),null}if(e=hn(Pt.current),yo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[bt]=t,r[xr]=i,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(o=0;o<gr.length;o++)he(gr[o],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Sa(r,i),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},he("invalid",r);break;case"textarea":Ra(r,i),he("invalid",r)}ci(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var d=i[l];l==="children"?typeof d=="string"?r.textContent!==d&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,d,e),o=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,d,e),o=["children",""+d]):m.hasOwnProperty(l)&&d!=null&&l==="onScroll"&&he("scroll",r)}switch(n){case"input":Or(r),Ea(r,i,!0);break;case"textarea":Or(r),Pa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=co)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ja(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[bt]=t,e[xr]=r,Ou(e,t,!1,!1),t.stateNode=e;e:{switch(l=di(n,r),n){case"dialog":he("cancel",e),he("close",e),o=r;break;case"iframe":case"object":case"embed":he("load",e),o=r;break;case"video":case"audio":for(o=0;o<gr.length;o++)he(gr[o],e);o=r;break;case"source":he("error",e),o=r;break;case"img":case"image":case"link":he("error",e),he("load",e),o=r;break;case"details":he("toggle",e),o=r;break;case"input":Sa(e,r),o=ii(e,r),he("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=O({},r,{value:void 0}),he("invalid",e);break;case"textarea":Ra(e,r),o=li(e,r),he("invalid",e);break;default:o=r}ci(n,o),d=o;for(i in d)if(d.hasOwnProperty(i)){var f=d[i];i==="style"?La(e,f):i==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Na(e,f)):i==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&qn(e,f):typeof f=="number"&&qn(e,""+f):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(m.hasOwnProperty(i)?f!=null&&i==="onScroll"&&he("scroll",e):f!=null&&ee(e,i,f,l))}switch(n){case"input":Or(e),Ea(e,r,!1);break;case"textarea":Or(e),Pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=hn(Er.current),hn(Pt.current),yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(i=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ge(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&ot!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Wl(),Mn(),t.flags|=98560,i=!1;else if(i=yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[bt]=t}else Mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else vt!==null&&(Bs(vt),vt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Ie===0&&(Ie=3):$s())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Bn(),Ts(e,t),e===null&&vr(t.stateNode.containerInfo),Oe(t),null;case 10:return os(t.type._context),Oe(t),null;case 17:return Ye(t.type)&&fo(),Oe(t),null;case 19:if(ge(Ce),i=t.memoizedState,i===null)return Oe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Nr(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Eo(e),l!==null){for(t.flags|=128,Nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ce,Ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>Wn&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ye)return Oe(t),null}else 2*be()-i.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,n=Ce.current,me(Ce,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(it&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Pp(e,t){switch(Xi(t),t.tag){case 1:return Ye(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),ge(Ge),ge(ze),ds(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return us(t),null;case 13:if(ge(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(Ce),null;case 4:return Bn(),null;case 10:return os(t.type._context),null;case 22:case 23:return Vs(),null;case 24:return null;default:return null}}var Do=!1,Be=!1,jp=typeof WeakSet=="function"?WeakSet:Set,F=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Ls(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Vu=!1;function Np(e,t){if(Vi=Xr,e=Cl(),Ui(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,d=-1,f=-1,C=0,N=0,I=e,P=null;t:for(;;){for(var z;I!==n||o!==0&&I.nodeType!==3||(d=l+o),I!==i||r!==0&&I.nodeType!==3||(f=l+r),I.nodeType===3&&(l+=I.nodeValue.length),(z=I.firstChild)!==null;)P=I,I=z;for(;;){if(I===e)break t;if(P===n&&++C===o&&(d=l),P===i&&++N===r&&(f=l),(z=I.nextSibling)!==null)break;I=P,P=I.parentNode}I=z}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for($i={focusedElem:e,selectionRange:n},Xr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var H=B.memoizedProps,Pe=B.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?H:yt(t.type,H),Pe);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(D){Re(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return B=Vu,Vu=!1,B}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ls(t,n,i)}o=o.next}while(o!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $u(e){var t=e.alternate;t!==null&&(e.alternate=null,$u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[xr],delete t[Gi],delete t[dp],delete t[pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function Ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=co));else if(r!==4&&(e=e.child,e!==null))for(Ds(e,t,n),e=e.sibling;e!==null;)Ds(e,t,n),e=e.sibling}function As(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}var _e=null,xt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Jr,n)}catch{}switch(n.tag){case 5:Be||Vn(n,t);case 6:var r=_e,o=xt;_e=null,Zt(e,t,n),_e=r,xt=o,_e!==null&&(xt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(xt?(e=_e,n=n.stateNode,e.nodeType===8?Qi(e.parentNode,n):e.nodeType===1&&Qi(e,n),lr(e)):Qi(_e,n.stateNode));break;case 4:r=_e,o=xt,_e=n.stateNode.containerInfo,xt=!0,Zt(e,t,n),_e=r,xt=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Ls(n,t,l),o=o.next}while(o!==r)}Zt(e,t,n);break;case 1:if(!Be&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Re(n,t,d)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Zt(e,t,n),Be=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jp),t.forEach(function(r){var o=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,d=l;e:for(;d!==null;){switch(d.tag){case 5:_e=d.stateNode,xt=!1;break e;case 3:_e=d.stateNode.containerInfo,xt=!0;break e;case 4:_e=d.stateNode.containerInfo,xt=!0;break e}d=d.return}if(_e===null)throw Error(u(160));Qu(i,l,o),_e=null,xt=!1;var f=o.alternate;f!==null&&(f.return=null),o.return=null}catch(C){Re(o,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Nt(e),r&4){try{Tr(3,e,e.return),Ao(3,e)}catch(H){Re(e,e.return,H)}try{Tr(5,e,e.return)}catch(H){Re(e,e.return,H)}}break;case 1:wt(t,e),Nt(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(wt(t,e),Nt(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var o=e.stateNode;try{qn(o,"")}catch(H){Re(e,e.return,H)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&i.type==="radio"&&i.name!=null&&ka(o,i),di(d,l);var C=di(d,i);for(l=0;l<f.length;l+=2){var N=f[l],I=f[l+1];N==="style"?La(o,I):N==="dangerouslySetInnerHTML"?Na(o,I):N==="children"?qn(o,I):ee(o,N,I,C)}switch(d){case"input":si(o,i);break;case"textarea":ba(o,i);break;case"select":var P=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var z=i.value;z!=null?Sn(o,!!i.multiple,z,!1):P!==!!i.multiple&&(i.defaultValue!=null?Sn(o,!!i.multiple,i.defaultValue,!0):Sn(o,!!i.multiple,i.multiple?[]:"",!1))}o[xr]=i}catch(H){Re(e,e.return,H)}}break;case 6:if(wt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(H){Re(e,e.return,H)}}break;case 3:if(wt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(H){Re(e,e.return,H)}break;case 4:wt(t,e),Nt(e);break;case 13:wt(t,e),Nt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ms=be())),r&4&&Gu(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(C=Be)||N,wt(t,e),Be=C):wt(t,e),Nt(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!N&&(e.mode&1)!==0)for(F=e,N=e.child;N!==null;){for(I=F=N;F!==null;){switch(P=F,z=P.child,P.tag){case 0:case 11:case 14:case 15:Tr(4,P,P.return);break;case 1:Vn(P,P.return);var B=P.stateNode;if(typeof B.componentWillUnmount=="function"){r=P,n=P.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(H){Re(r,n,H)}}break;case 5:Vn(P,P.return);break;case 22:if(P.memoizedState!==null){Xu(I);continue}}z!==null?(z.return=P,F=z):Xu(I)}N=N.sibling}e:for(N=null,I=e;;){if(I.tag===5){if(N===null){N=I;try{o=I.stateNode,C?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(d=I.stateNode,f=I.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=Ta("display",l))}catch(H){Re(e,e.return,H)}}}else if(I.tag===6){if(N===null)try{I.stateNode.nodeValue=C?"":I.memoizedProps}catch(H){Re(e,e.return,H)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;N===I&&(N=null),I=I.return}N===I&&(N=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:wt(t,e),Nt(e),r&4&&Gu(e);break;case 21:break;default:wt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wu(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qn(o,""),r.flags&=-33);var i=Ju(e);As(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,d=Ju(e);Ds(e,d,l);break;default:throw Error(u(161))}}catch(f){Re(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,n){F=e,Ku(e)}function Ku(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Do;if(!l){var d=o.alternate,f=d!==null&&d.memoizedState!==null||Be;d=Do;var C=Be;if(Do=l,(Be=f)&&!C)for(F=o;F!==null;)l=F,f=l.child,l.tag===22&&l.memoizedState!==null?Zu(o):f!==null?(f.return=l,F=f):Zu(o);for(;i!==null;)F=i,Ku(i),i=i.sibling;F=o,Do=d,Be=C}qu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,F=i):qu(e)}}function qu(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xl(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xl(t,l,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var N=C.memoizedState;if(N!==null){var I=N.dehydrated;I!==null&&lr(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Be||t.flags&512&&Is(t)}catch(P){Re(t,t.return,P)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Xu(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Zu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(f){Re(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(f){Re(t,o,f)}}var i=t.return;try{Is(t)}catch(f){Re(t,i,f)}break;case 5:var l=t.return;try{Is(t)}catch(f){Re(t,l,f)}}}catch(f){Re(t,t.return,f)}if(t===e){F=null;break}var d=t.sibling;if(d!==null){d.return=t.return,F=d;break}F=t.return}}var Lp=Math.ceil,Uo=de.ReactCurrentDispatcher,Us=de.ReactCurrentOwner,dt=de.ReactCurrentBatchConfig,oe=0,Ae=null,Ne=null,Me=0,it=0,$n=Gt(0),Ie=0,Lr=null,vn=0,_o=0,_s=0,Ir=null,qe=null,Ms=0,Wn=1/0,zt=null,Mo=!1,zs=null,en=null,zo=!1,tn=null,Fo=0,Dr=0,Fs=null,Oo=-1,Bo=0;function We(){return(oe&6)!==0?be():Oo!==-1?Oo:Oo=be()}function nn(e){return(e.mode&1)===0?1:(oe&2)!==0&&Me!==0?Me&-Me:mp.transition!==null?(Bo===0&&(Bo=Ja()),Bo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:tl(e.type)),e)}function Ct(e,t,n,r){if(50<Dr)throw Dr=0,Fs=null,Error(u(185));rr(e,n,r),((oe&2)===0||e!==Ae)&&(e===Ae&&((oe&2)===0&&(_o|=n),Ie===4&&rn(e,Me)),Xe(e,r),n===1&&oe===0&&(t.mode&1)===0&&(Wn=be()+500,ho&&Kt()))}function Xe(e,t){var n=e.callbackNode;md(e,t);var r=Yr(e,e===Ae?Me:0);if(r===0)n!==null&&Va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Va(n),t===1)e.tag===0?fp(tc.bind(null,e)):Ol(tc.bind(null,e)),up(function(){(oe&6)===0&&Kt()}),n=null;else{switch(Qa(r)){case 1:n=yi;break;case 4:n=$a;break;case 16:n=Wr;break;case 536870912:n=Wa;break;default:n=Wr}n=uc(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Oo=-1,Bo=0,(oe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=Yr(e,e===Ae?Me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ho(e,r);else{t=r;var o=oe;oe|=2;var i=rc();(Ae!==e||Me!==t)&&(zt=null,Wn=be()+500,xn(e,t));do try{Ap();break}catch(d){nc(e,d)}while(!0);rs(),Uo.current=i,oe=o,Ne!==null?t=0:(Ae=null,Me=0,t=Ie)}if(t!==0){if(t===2&&(o=xi(e),o!==0&&(r=o,t=Os(e,o))),t===1)throw n=Lr,xn(e,0),rn(e,r),Xe(e,be()),n;if(t===6)rn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Ip(o)&&(t=Ho(e,r),t===2&&(i=xi(e),i!==0&&(r=i,t=Os(e,i))),t===1))throw n=Lr,xn(e,0),rn(e,r),Xe(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:wn(e,qe,zt);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=Ms+500-be(),10<t)){if(Yr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ji(wn.bind(null,e,qe,zt),t);break}wn(e,qe,zt);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ht(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lp(r/1960))-r,10<r){e.timeoutHandle=Ji(wn.bind(null,e,qe,zt),r);break}wn(e,qe,zt);break;case 5:wn(e,qe,zt);break;default:throw Error(u(329))}}}return Xe(e,be()),e.callbackNode===n?ec.bind(null,e):null}function Os(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Ho(e,t),e!==2&&(t=qe,qe=n,t!==null&&Bs(t)),e}function Bs(e){qe===null?qe=e:qe.push.apply(qe,e)}function Ip(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~_s,t&=~_o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if((oe&6)!==0)throw Error(u(327));Jn();var t=Yr(e,0);if((t&1)===0)return Xe(e,be()),null;var n=Ho(e,t);if(e.tag!==0&&n===2){var r=xi(e);r!==0&&(t=r,n=Os(e,r))}if(n===1)throw n=Lr,xn(e,0),rn(e,t),Xe(e,be()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,qe,zt),Xe(e,be()),null}function Hs(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Wn=be()+500,ho&&Kt())}}function yn(e){tn!==null&&tn.tag===0&&(oe&6)===0&&Jn();var t=oe;oe|=1;var n=dt.transition,r=ce;try{if(dt.transition=null,ce=1,e)return e()}finally{ce=r,dt.transition=n,oe=t,(oe&6)===0&&Kt()}}function Vs(){it=$n.current,ge($n)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lp(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Xi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:Bn(),ge(Ge),ge(ze),ds();break;case 5:us(r);break;case 4:Bn();break;case 13:ge(Ce);break;case 19:ge(Ce);break;case 10:os(r.type._context);break;case 22:case 23:Vs()}n=n.return}if(Ae=e,Ne=e=on(e.current,null),Me=it=t,Ie=0,Lr=null,_s=_o=vn=0,qe=Ir=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}mn=null}return e}function nc(e,t){do{var n=Ne;try{if(rs(),Ro.current=No,bo){for(var r=Se.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}bo=!1}if(gn=0,De=Le=Se=null,Rr=!1,br=0,Us.current=null,n===null||n.return===null){Ie=1,Lr=t,Ne=null;break}e:{var i=e,l=n.return,d=n,f=t;if(t=Me,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var C=f,N=d,I=N.tag;if((N.mode&1)===0&&(I===0||I===11||I===15)){var P=N.alternate;P?(N.updateQueue=P.updateQueue,N.memoizedState=P.memoizedState,N.lanes=P.lanes):(N.updateQueue=null,N.memoizedState=null)}var z=Pu(l);if(z!==null){z.flags&=-257,ju(z,l,d,i,t),z.mode&1&&bu(i,C,t),t=z,f=C;var B=t.updateQueue;if(B===null){var H=new Set;H.add(f),t.updateQueue=H}else B.add(f);break e}else{if((t&1)===0){bu(i,C,t),$s();break e}f=Error(u(426))}}else if(ye&&d.mode&1){var Pe=Pu(l);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),ju(Pe,l,d,i,t),ts(Hn(f,d));break e}}i=f=Hn(f,d),Ie!==4&&(Ie=2),Ir===null?Ir=[i]:Ir.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Eu(i,f,t);ql(i,y);break e;case 1:d=f;var g=i.type,w=i.stateNode;if((i.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(en===null||!en.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var D=Ru(i,d,t);ql(i,D);break e}}i=i.return}while(i!==null)}ic(n)}catch($){t=$,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function rc(){var e=Uo.current;return Uo.current=No,e===null?No:e}function $s(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||(vn&268435455)===0&&(_o&268435455)===0||rn(Ae,Me)}function Ho(e,t){var n=oe;oe|=2;var r=rc();(Ae!==e||Me!==t)&&(zt=null,xn(e,t));do try{Dp();break}catch(o){nc(e,o)}while(!0);if(rs(),oe=n,Uo.current=r,Ne!==null)throw Error(u(261));return Ae=null,Me=0,Ie}function Dp(){for(;Ne!==null;)oc(Ne)}function Ap(){for(;Ne!==null&&!id();)oc(Ne)}function oc(e){var t=lc(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?ic(e):Ne=t,Us.current=null}function ic(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=bp(n,t,it),n!==null){Ne=n;return}}else{if(n=Pp(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Ie===0&&(Ie=5)}function wn(e,t,n){var r=ce,o=dt.transition;try{dt.transition=null,ce=1,Up(e,t,n,r)}finally{dt.transition=o,ce=r}return null}function Up(e,t,n,r){do Jn();while(tn!==null);if((oe&6)!==0)throw Error(u(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hd(e,i),e===Ae&&(Ne=Ae=null,Me=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||zo||(zo=!0,uc(Wr,function(){return Jn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=dt.transition,dt.transition=null;var l=ce;ce=1;var d=oe;oe|=4,Us.current=null,Np(e,n),Yu(n,e),tp($i),Xr=!!Vi,$i=Vi=null,e.current=n,Tp(n),sd(),oe=d,ce=l,dt.transition=i}else e.current=n;if(zo&&(zo=!1,tn=e,Fo=o),i=e.pendingLanes,i===0&&(en=null),ud(n.stateNode),Xe(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mo)throw Mo=!1,e=zs,zs=null,e;return(Fo&1)!==0&&e.tag!==0&&Jn(),i=e.pendingLanes,(i&1)!==0?e===Fs?Dr++:(Dr=0,Fs=e):Dr=0,Kt(),null}function Jn(){if(tn!==null){var e=Qa(Fo),t=dt.transition,n=ce;try{if(dt.transition=null,ce=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Fo=0,(oe&6)!==0)throw Error(u(331));var o=oe;for(oe|=4,F=e.current;F!==null;){var i=F,l=i.child;if((F.flags&16)!==0){var d=i.deletions;if(d!==null){for(var f=0;f<d.length;f++){var C=d[f];for(F=C;F!==null;){var N=F;switch(N.tag){case 0:case 11:case 15:Tr(8,N,i)}var I=N.child;if(I!==null)I.return=N,F=I;else for(;F!==null;){N=F;var P=N.sibling,z=N.return;if($u(N),N===C){F=null;break}if(P!==null){P.return=z,F=P;break}F=z}}}var B=i.alternate;if(B!==null){var H=B.child;if(H!==null){B.child=null;do{var Pe=H.sibling;H.sibling=null,H=Pe}while(H!==null)}}F=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,F=l;else e:for(;F!==null;){if(i=F,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Tr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,F=y;break e}F=i.return}}var g=e.current;for(F=g;F!==null;){l=F;var w=l.child;if((l.subtreeFlags&2064)!==0&&w!==null)w.return=l,F=w;else e:for(l=g;F!==null;){if(d=F,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Ao(9,d)}}catch($){Re(d,d.return,$)}if(d===l){F=null;break e}var D=d.sibling;if(D!==null){D.return=d.return,F=D;break e}F=d.return}}if(oe=o,Kt(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Jr,e)}catch{}r=!0}return r}finally{ce=n,dt.transition=t}}return!1}function sc(e,t,n){t=Hn(n,t),t=Eu(e,t,1),e=Xt(e,t,1),t=We(),e!==null&&(rr(e,1,t),Xe(e,t))}function Re(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=Hn(n,e),e=Ru(t,e,1),t=Xt(t,e,1),e=We(),t!==null&&(rr(t,1,e),Xe(t,e));break}}t=t.return}}function _p(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Me&n)===n&&(Ie===4||Ie===3&&(Me&130023424)===Me&&500>be()-Ms?xn(e,0):_s|=n),Xe(e,t)}function ac(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var n=We();e=Ut(e,t),e!==null&&(rr(e,t,n),Xe(e,n))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ac(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),ac(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ke=!1,Rp(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,ye&&(t.flags&1048576)!==0&&Bl(t,vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var o=An(t,ze.current);On(t,n),o=ms(null,t,r,e,o,n);var i=hs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(i=!0,mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,as(t),o.updater=To,t.stateNode=o,o._reactInternals=t,Cs(t,r,e,n),t=Rs(null,t,r,!0,i,n)):(t.tag=0,ye&&i&&qi(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Op(r),e=yt(r,e),o){case 0:t=Es(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,yt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Es(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Au(e,t,r,o,n);case 3:e:{if(Uu(t),e===null)throw Error(u(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Kl(e,t),ko(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Hn(Error(u(423)),t),t=_u(e,t,r,n,o);break e}else if(r!==o){o=Hn(Error(u(424)),t),t=_u(e,t,r,n,o);break e}else for(ot=Qt(t.stateNode.containerInfo.firstChild),rt=t,ye=!0,vt=null,n=Gl(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===o){t=Mt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Zl(t),e===null&&es(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Wi(r,o)?l=null:i!==null&&Wi(r,i)&&(t.flags|=32),Du(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&es(t),null;case 13:return Mu(e,t,n);case 4:return ls(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Nu(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,me(wo,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===o.children&&!Ge.current){t=Mt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var d=i.dependencies;if(d!==null){l=i.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(i.tag===1){f=_t(-1,n&-n),f.tag=2;var C=i.updateQueue;if(C!==null){C=C.shared;var N=C.pending;N===null?f.next=f:(f.next=N.next,N.next=f),C.pending=f}}i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),is(i.return,n,t),d.lanes|=n;break}f=f.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(u(341));l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),is(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,On(t,n),o=ut(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=yt(r,t.pendingProps),o=yt(r.type,o),Tu(e,t,r,o,n);case 15:return Lu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Io(e,t),t.tag=1,Ye(r)?(e=!0,mo(t)):e=!1,On(t,n),Su(t,r,o),Cs(t,r,o,n),Rs(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return Iu(e,t,n)}throw Error(u(156,t.tag))};function uc(e,t){return Ha(e,t)}function Fp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new Fp(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kt)return 11;if(e===Et)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ke:return Cn(n.children,o,i,t);case Te:l=8,o|=8;break;case He:return e=pt(12,n,t,o|2),e.elementType=He,e.lanes=i,e;case et:return e=pt(13,n,t,o),e.elementType=et,e.lanes=i,e;case mt:return e=pt(19,n,t,o),e.elementType=mt,e.lanes=i,e;case Ee:return $o(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:l=10;break e;case ln:l=9;break e;case kt:l=11;break e;case Et:l=14;break e;case Qe:l=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=pt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Ee,e.lanes=n,e.stateNode={isHidden:!1},e}function Js(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Qs(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wi(0),this.expirationTimes=wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gs(e,t,n,r,o,i,l,d,f){return e=new Bp(e,t,n,d,f),t===1?(t=1,i===!0&&(t|=8)):t=0,i=pt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(i),e}function Hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cc(e){if(!e)return Yt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Ye(n))return zl(e,n,t)}return t}function dc(e,t,n,r,o,i,l,d,f){return e=Gs(n,r,!0,e,o,i,l,d,f),e.context=cc(null),n=e.current,r=We(),o=nn(n),i=_t(r,o),i.callback=t??null,Xt(n,i,o),e.current.lanes=o,rr(e,o,r),Xe(e,r),e}function Wo(e,t,n,r){var o=t.current,i=We(),l=nn(o);return n=cc(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(o,t,l),e!==null&&(Ct(e,o,l,i),So(e,o,l)),l}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){pc(e,t),(e=e.alternate)&&pc(e,t)}function Vp(){return null}var fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ks(e){this._internalRoot=e}Qo.prototype.render=Ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Wo(e,t,null,null)},Qo.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Wo(null,e,null,null)}),t[Lt]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ka();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Za(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function $p(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var C=Jo(l);i.call(C)}}var l=dc(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=l,e[Lt]=l.current,vr(e.nodeType===8?e.parentNode:e),yn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var d=r;r=function(){var C=Jo(f);d.call(C)}}var f=Gs(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=f,e[Lt]=f.current,vr(e.nodeType===8?e.parentNode:e),yn(function(){Wo(t,f,n,r)}),f}function Yo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var d=o;o=function(){var f=Jo(l);d.call(f)}}Wo(t,l,e,o)}else l=$p(n,t,e,o,r);return Jo(l)}Ga=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(Ci(t,n|1),Xe(t,be()),(oe&6)===0&&(Wn=be()+500,Kt()))}break;case 13:yn(function(){var r=Ut(e,1);if(r!==null){var o=We();Ct(r,e,1,o)}}),Ys(e,1)}},Si=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=We();Ct(t,e,134217728,n)}Ys(e,134217728)}},Ya=function(e){if(e.tag===13){var t=nn(e),n=Ut(e,t);if(n!==null){var r=We();Ct(n,e,t,r)}Ys(e,t)}},Ka=function(){return ce},qa=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}},mi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=po(r);if(!o)throw Error(u(90));Ca(r),si(r,o)}}}break;case"textarea":ba(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}},Ua=Hs,_a=yn;var Wp={usingClientEntryPoint:!1,Events:[wr,In,po,Da,Aa,Hs]},Ar={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jp={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oa(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||Vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Jr=Ko.inject(Jp),Rt=Ko}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp,Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(t))throw Error(u(200));return Hp(e,t,null,n)},Ze.createRoot=function(e,t){if(!qs(e))throw Error(u(299));var n=!1,r="",o=fc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gs(e,1,!1,null,null,n,!1,r,o),e[Lt]=t.current,vr(e.nodeType===8?e.parentNode:e),new Ks(t)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Oa(t),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return yn(e)},Ze.hydrate=function(e,t,n){if(!Go(t))throw Error(u(200));return Yo(null,e,t,!0,n)},Ze.hydrateRoot=function(e,t,n){if(!qs(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=fc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=dc(t,null,e,1,n??null,o,!1,i,l),e[Lt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qo(t)},Ze.render=function(e,t,n){if(!Go(t))throw Error(u(200));return Yo(null,e,t,!1,n)},Ze.unmountComponentAtNode=function(e){if(!Go(e))throw Error(u(40));return e._reactRootContainer?(yn(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},Ze.unstable_batchedUpdates=Hs,Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Yo(e,t,n,!1,r)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var Sc;function ef(){if(Sc)return ea.exports;Sc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),ea.exports=Zp(),ea.exports}var kc;function tf(){if(kc)return qo;kc=1;var a=ef();return qo.createRoot=a.createRoot,qo.hydrateRoot=a.hydrateRoot,qo}var nf=tf(),k=pa();/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ec="popstate";function rf(a={}){function c(p,m){let{pathname:h,search:x,hash:E}=p.location;return ua("",{pathname:h,search:x,hash:E},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function u(p,m){return typeof m=="string"?m:Mr(m)}return sf(c,u,null,a)}function xe(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function ft(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function of(){return Math.random().toString(36).substring(2,10)}function Rc(a,c){return{usr:a.state,key:a.key,idx:c}}function ua(a,c,u=null,p){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof c=="string"?Qn(c):c,state:u,key:c&&c.key||p||of()}}function Mr({pathname:a="/",search:c="",hash:u=""}){return c&&c!=="?"&&(a+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Qn(a){let c={};if(a){let u=a.indexOf("#");u>=0&&(c.hash=a.substring(u),a=a.substring(0,u));let p=a.indexOf("?");p>=0&&(c.search=a.substring(p),a=a.substring(0,p)),a&&(c.pathname=a)}return c}function sf(a,c,u,p={}){let{window:m=document.defaultView,v5Compat:h=!1}=p,x=m.history,E="POP",S=null,b=T();b==null&&(b=0,x.replaceState({...x.state,idx:b},""));function T(){return(x.state||{idx:null}).idx}function R(){E="POP";let U=T(),G=U==null?null:U-b;b=U,S&&S({action:E,location:V.location,delta:G})}function _(U,G){E="PUSH";let W=ua(V.location,U,G);b=T()+1;let ee=Rc(W,b),de=V.createHref(W);try{x.pushState(ee,"",de)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;m.location.assign(de)}h&&S&&S({action:E,location:V.location,delta:1})}function J(U,G){E="REPLACE";let W=ua(V.location,U,G);b=T();let ee=Rc(W,b),de=V.createHref(W);x.replaceState(ee,"",de),h&&S&&S({action:E,location:V.location,delta:0})}function Q(U){return af(U)}let V={get action(){return E},get location(){return a(m,x)},listen(U){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(Ec,R),S=U,()=>{m.removeEventListener(Ec,R),S=null}},createHref(U){return c(m,U)},createURL:Q,encodeLocation(U){let G=Q(U);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:_,replace:J,go(U){return x.go(U)}};return V}function af(a,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),xe(u,"No window.location.(origin|href) available to create URL");let p=typeof a=="string"?a:Mr(a);return p=p.replace(/ $/,"%20"),!c&&p.startsWith("//")&&(p=u+p),new URL(p,u)}function Lc(a,c,u="/"){return lf(a,c,u,!1)}function lf(a,c,u,p){let m=typeof c=="string"?Qn(c):c,h=Ot(m.pathname||"/",u);if(h==null)return null;let x=Ic(a);uf(x);let E=null;for(let S=0;E==null&&S<x.length;++S){let b=wf(h);E=yf(x[S],b,p)}return E}function Ic(a,c=[],u=[],p="",m=!1){let h=(x,E,S=m,b)=>{let T={relativePath:b===void 0?x.path||"":b,caseSensitive:x.caseSensitive===!0,childrenIndex:E,route:x};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(p)&&S)return;xe(T.relativePath.startsWith(p),`Absolute route path "${T.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(p.length)}let R=Ft([p,T.relativePath]),_=u.concat(T);x.children&&x.children.length>0&&(xe(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),Ic(x.children,c,_,R,S)),!(x.path==null&&!x.index)&&c.push({path:R,score:gf(R,x.index),routesMeta:_})};return a.forEach((x,E)=>{if(x.path===""||!x.path?.includes("?"))h(x,E);else for(let S of Dc(x.path))h(x,E,!0,S)}),c}function Dc(a){let c=a.split("/");if(c.length===0)return[];let[u,...p]=c,m=u.endsWith("?"),h=u.replace(/\?$/,"");if(p.length===0)return m?[h,""]:[h];let x=Dc(p.join("/")),E=[];return E.push(...x.map(S=>S===""?h:[h,S].join("/"))),m&&E.push(...x),E.map(S=>a.startsWith("/")&&S===""?"/":S)}function uf(a){a.sort((c,u)=>c.score!==u.score?u.score-c.score:vf(c.routesMeta.map(p=>p.childrenIndex),u.routesMeta.map(p=>p.childrenIndex)))}var cf=/^:[\w-]+$/,df=3,pf=2,ff=1,mf=10,hf=-2,bc=a=>a==="*";function gf(a,c){let u=a.split("/"),p=u.length;return u.some(bc)&&(p+=hf),c&&(p+=pf),u.filter(m=>!bc(m)).reduce((m,h)=>m+(cf.test(h)?df:h===""?ff:mf),p)}function vf(a,c){return a.length===c.length&&a.slice(0,-1).every((p,m)=>p===c[m])?a[a.length-1]-c[c.length-1]:0}function yf(a,c,u=!1){let{routesMeta:p}=a,m={},h="/",x=[];for(let E=0;E<p.length;++E){let S=p[E],b=E===p.length-1,T=h==="/"?c:c.slice(h.length)||"/",R=ni({path:S.relativePath,caseSensitive:S.caseSensitive,end:b},T),_=S.route;if(!R&&b&&u&&!p[p.length-1].route.index&&(R=ni({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},T)),!R)return null;Object.assign(m,R.params),x.push({params:m,pathname:Ft([h,R.pathname]),pathnameBase:Ef(Ft([h,R.pathnameBase])),route:_}),R.pathnameBase!=="/"&&(h=Ft([h,R.pathnameBase]))}return x}function ni(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,p]=xf(a.path,a.caseSensitive,a.end),m=c.match(u);if(!m)return null;let h=m[0],x=h.replace(/(.)\/+$/,"$1"),E=m.slice(1);return{params:p.reduce((b,{paramName:T,isOptional:R},_)=>{if(T==="*"){let Q=E[_]||"";x=h.slice(0,h.length-Q.length).replace(/(.)\/+$/,"$1")}const J=E[_];return R&&!J?b[T]=void 0:b[T]=(J||"").replace(/%2F/g,"/"),b},{}),pathname:h,pathnameBase:x,pattern:a}}function xf(a,c=!1,u=!0){ft(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let p=[],m="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,E,S)=>(p.push({paramName:E,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(p.push({paramName:"*"}),m+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?m+="\\/*$":a!==""&&a!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,c?void 0:"i"),p]}function wf(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return ft(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),a}}function Ot(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,p=a.charAt(u);return p&&p!=="/"?null:a.slice(u)||"/"}var Ac=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cf=a=>Ac.test(a);function Sf(a,c="/"){let{pathname:u,search:p="",hash:m=""}=typeof a=="string"?Qn(a):a,h;if(u)if(Cf(u))h=u;else{if(u.includes("//")){let x=u;u=u.replace(/\/\/+/g,"/"),ft(!1,`Pathnames cannot have embedded double slashes - normalizing ${x} -> ${u}`)}u.startsWith("/")?h=Pc(u.substring(1),"/"):h=Pc(u,c)}else h=c;return{pathname:h,search:Rf(p),hash:bf(m)}}function Pc(a,c){let u=c.replace(/\/+$/,"").split("/");return a.split("/").forEach(m=>{m===".."?u.length>1&&u.pop():m!=="."&&u.push(m)}),u.length>1?u.join("/"):"/"}function ra(a,c,u,p){return`Cannot include a '${a}' character in a manually specified \`to.${c}\` field [${JSON.stringify(p)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kf(a){return a.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function fa(a){let c=kf(a);return c.map((u,p)=>p===c.length-1?u.pathname:u.pathnameBase)}function ma(a,c,u,p=!1){let m;typeof a=="string"?m=Qn(a):(m={...a},xe(!m.pathname||!m.pathname.includes("?"),ra("?","pathname","search",m)),xe(!m.pathname||!m.pathname.includes("#"),ra("#","pathname","hash",m)),xe(!m.search||!m.search.includes("#"),ra("#","search","hash",m)));let h=a===""||m.pathname==="",x=h?"/":m.pathname,E;if(x==null)E=u;else{let R=c.length-1;if(!p&&x.startsWith("..")){let _=x.split("/");for(;_[0]==="..";)_.shift(),R-=1;m.pathname=_.join("/")}E=R>=0?c[R]:"/"}let S=Sf(m,E),b=x&&x!=="/"&&x.endsWith("/"),T=(h||x===".")&&u.endsWith("/");return!S.pathname.endsWith("/")&&(b||T)&&(S.pathname+="/"),S}var Ft=a=>a.join("/").replace(/\/\/+/g,"/"),Ef=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Rf=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,bf=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Pf=class{constructor(a,c,u,p=!1){this.status=a,this.statusText=c||"",this.internal=p,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function jf(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Nf(a){return a.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Uc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _c(a,c){let u=a;if(typeof u!="string"||!Ac.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let p=u,m=!1;if(Uc)try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=Ot(x.pathname,c);x.origin===h.origin&&E!=null?u=E+x.search+x.hash:m=!0}catch{ft(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:p,isExternal:m,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mc=["POST","PUT","PATCH","DELETE"];new Set(Mc);var Tf=["GET",...Mc];new Set(Tf);var Gn=k.createContext(null);Gn.displayName="DataRouter";var ri=k.createContext(null);ri.displayName="DataRouterState";var Lf=k.createContext(!1),zc=k.createContext({isTransitioning:!1});zc.displayName="ViewTransition";var If=k.createContext(new Map);If.displayName="Fetchers";var Df=k.createContext(null);Df.displayName="Await";var st=k.createContext(null);st.displayName="Navigation";var zr=k.createContext(null);zr.displayName="Location";var Tt=k.createContext({outlet:null,matches:[],isDataRoute:!1});Tt.displayName="Route";var ha=k.createContext(null);ha.displayName="RouteError";var Fc="REACT_ROUTER_ERROR",Af="REDIRECT",Uf="ROUTE_ERROR_RESPONSE";function _f(a){if(a.startsWith(`${Fc}:${Af}:{`))try{let c=JSON.parse(a.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Mf(a){if(a.startsWith(`${Fc}:${Uf}:{`))try{let c=JSON.parse(a.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Pf(c.status,c.statusText,c.data)}catch{}}function zf(a,{relative:c}={}){xe(Yn(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:p}=k.useContext(st),{hash:m,pathname:h,search:x}=Fr(a,{relative:c}),E=h;return u!=="/"&&(E=h==="/"?u:Ft([u,h])),p.createHref({pathname:E,search:x,hash:m})}function Yn(){return k.useContext(zr)!=null}function an(){return xe(Yn(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(zr).location}var Oc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bc(a){k.useContext(st).static||k.useLayoutEffect(a)}function Hc(){let{isDataRoute:a}=k.useContext(Tt);return a?qf():Ff()}function Ff(){xe(Yn(),"useNavigate() may be used only in the context of a <Router> component.");let a=k.useContext(Gn),{basename:c,navigator:u}=k.useContext(st),{matches:p}=k.useContext(Tt),{pathname:m}=an(),h=JSON.stringify(fa(p)),x=k.useRef(!1);return Bc(()=>{x.current=!0}),k.useCallback((S,b={})=>{if(ft(x.current,Oc),!x.current)return;if(typeof S=="number"){u.go(S);return}let T=ma(S,JSON.parse(h),m,b.relative==="path");a==null&&c!=="/"&&(T.pathname=T.pathname==="/"?c:Ft([c,T.pathname])),(b.replace?u.replace:u.push)(T,b.state,b)},[c,u,h,m,a])}k.createContext(null);function Fr(a,{relative:c}={}){let{matches:u}=k.useContext(Tt),{pathname:p}=an(),m=JSON.stringify(fa(u));return k.useMemo(()=>ma(a,JSON.parse(m),p,c==="path"),[a,m,p,c])}function Of(a,c){return Vc(a,c)}function Vc(a,c,u,p,m){xe(Yn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=k.useContext(st),{matches:x}=k.useContext(Tt),E=x[x.length-1],S=E?E.params:{},b=E?E.pathname:"/",T=E?E.pathnameBase:"/",R=E&&E.route;{let W=R&&R.path||"";Wc(b,!R||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let _=an(),J;if(c){let W=typeof c=="string"?Qn(c):c;xe(T==="/"||W.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${W.pathname}" was given in the \`location\` prop.`),J=W}else J=_;let Q=J.pathname||"/",V=Q;if(T!=="/"){let W=T.replace(/^\//,"").split("/");V="/"+Q.replace(/^\//,"").split("/").slice(W.length).join("/")}let U=Lc(a,{pathname:V});ft(R||U!=null,`No routes matched location "${J.pathname}${J.search}${J.hash}" `),ft(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${J.pathname}${J.search}${J.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Wf(U&&U.map(W=>Object.assign({},W,{params:Object.assign({},S,W.params),pathname:Ft([T,h.encodeLocation?h.encodeLocation(W.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?T:Ft([T,h.encodeLocation?h.encodeLocation(W.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathnameBase])})),x,u,p,m);return c&&G?k.createElement(zr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...J},navigationType:"POP"}},G):G}function Bf(){let a=Kf(),c=jf(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,p="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:p},h={padding:"2px 4px",backgroundColor:p},x=null;return console.error("Error handled by React Router default ErrorBoundary:",a),x=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:h},"ErrorBoundary")," or"," ",k.createElement("code",{style:h},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},c),u?k.createElement("pre",{style:m},u):null,x)}var Hf=k.createElement(Bf,null),$c=class extends k.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,c){return c.location!==a.location||c.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:c.error,location:c.location,revalidation:a.revalidation||c.revalidation}}componentDidCatch(a,c){this.props.onError?this.props.onError(a,c):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const u=Mf(a.digest);u&&(a=u)}let c=a!==void 0?k.createElement(Tt.Provider,{value:this.props.routeContext},k.createElement(ha.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?k.createElement(Vf,{error:a},c):c}};$c.contextType=Lf;var oa=new WeakMap;function Vf({children:a,error:c}){let{basename:u}=k.useContext(st);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let p=_f(c.digest);if(p){let m=oa.get(c);if(m)throw m;let h=_c(p.location,u);if(Uc&&!oa.get(c))if(h.isExternal||p.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:p.replace}));throw oa.set(c,x),x}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return a}function $f({routeContext:a,match:c,children:u}){let p=k.useContext(Gn);return p&&p.static&&p.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=c.route.id),k.createElement(Tt.Provider,{value:a},u)}function Wf(a,c=[],u=null,p=null,m=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let h=a,x=u?.errors;if(x!=null){let T=h.findIndex(R=>R.route.id&&x?.[R.route.id]!==void 0);xe(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),h=h.slice(0,Math.min(h.length,T+1))}let E=!1,S=-1;if(u)for(let T=0;T<h.length;T++){let R=h[T];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(S=T),R.route.id){let{loaderData:_,errors:J}=u,Q=R.route.loader&&!_.hasOwnProperty(R.route.id)&&(!J||J[R.route.id]===void 0);if(R.route.lazy||Q){E=!0,S>=0?h=h.slice(0,S+1):h=[h[0]];break}}}let b=u&&p?(T,R)=>{p(T,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Nf(u.matches),errorInfo:R})}:void 0;return h.reduceRight((T,R,_)=>{let J,Q=!1,V=null,U=null;u&&(J=x&&R.route.id?x[R.route.id]:void 0,V=R.route.errorElement||Hf,E&&(S<0&&_===0?(Wc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,U=null):S===_&&(Q=!0,U=R.route.hydrateFallbackElement||null)));let G=c.concat(h.slice(0,_+1)),W=()=>{let ee;return J?ee=V:Q?ee=U:R.route.Component?ee=k.createElement(R.route.Component,null):R.route.element?ee=R.route.element:ee=T,k.createElement($f,{match:R,routeContext:{outlet:T,matches:G,isDataRoute:u!=null},children:ee})};return u&&(R.route.ErrorBoundary||R.route.errorElement||_===0)?k.createElement($c,{location:u.location,revalidation:u.revalidation,component:V,error:J,children:W(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:b}):W()},null)}function ga(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jf(a){let c=k.useContext(Gn);return xe(c,ga(a)),c}function Qf(a){let c=k.useContext(ri);return xe(c,ga(a)),c}function Gf(a){let c=k.useContext(Tt);return xe(c,ga(a)),c}function va(a){let c=Gf(a),u=c.matches[c.matches.length-1];return xe(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function Yf(){return va("useRouteId")}function Kf(){let a=k.useContext(ha),c=Qf("useRouteError"),u=va("useRouteError");return a!==void 0?a:c.errors?.[u]}function qf(){let{router:a}=Jf("useNavigate"),c=va("useNavigate"),u=k.useRef(!1);return Bc(()=>{u.current=!0}),k.useCallback(async(m,h={})=>{ft(u.current,Oc),u.current&&(typeof m=="number"?await a.navigate(m):await a.navigate(m,{fromRouteId:c,...h}))},[a,c])}var jc={};function Wc(a,c,u){!c&&!jc[a]&&(jc[a]=!0,ft(!1,u))}k.memo(Xf);function Xf({routes:a,future:c,state:u,onError:p}){return Vc(a,void 0,u,p,c)}function Zf({to:a,replace:c,state:u,relative:p}){xe(Yn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=k.useContext(st);ft(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=k.useContext(Tt),{pathname:x}=an(),E=Hc(),S=ma(a,fa(h),x,p==="path"),b=JSON.stringify(S);return k.useEffect(()=>{E(JSON.parse(b),{replace:c,state:u,relative:p})},[E,b,p,c,u]),null}function Je(a){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function em({basename:a="/",children:c=null,location:u,navigationType:p="POP",navigator:m,static:h=!1,unstable_useTransitions:x}){xe(!Yn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=a.replace(/^\/*/,"/"),S=k.useMemo(()=>({basename:E,navigator:m,static:h,unstable_useTransitions:x,future:{}}),[E,m,h,x]);typeof u=="string"&&(u=Qn(u));let{pathname:b="/",search:T="",hash:R="",state:_=null,key:J="default"}=u,Q=k.useMemo(()=>{let V=Ot(b,E);return V==null?null:{location:{pathname:V,search:T,hash:R,state:_,key:J},navigationType:p}},[E,b,T,R,_,J,p]);return ft(Q!=null,`<Router basename="${E}"> is not able to match the URL "${b}${T}${R}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:k.createElement(st.Provider,{value:S},k.createElement(zr.Provider,{children:c,value:Q}))}function tm({children:a,location:c}){return Of(ca(a),c)}function ca(a,c=[]){let u=[];return k.Children.forEach(a,(p,m)=>{if(!k.isValidElement(p))return;let h=[...c,m];if(p.type===k.Fragment){u.push.apply(u,ca(p.props.children,h));return}xe(p.type===Je,`[${typeof p.type=="string"?p.type:p.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!p.props.index||!p.props.children,"An index route cannot have child routes.");let x={id:p.props.id||h.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,middleware:p.props.middleware,loader:p.props.loader,action:p.props.action,hydrateFallbackElement:p.props.hydrateFallbackElement,HydrateFallback:p.props.HydrateFallback,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.hasErrorBoundary===!0||p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(x.children=ca(p.props.children,h)),u.push(x)}),u}var Zo="get",ei="application/x-www-form-urlencoded";function oi(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function nm(a){return oi(a)&&a.tagName.toLowerCase()==="button"}function rm(a){return oi(a)&&a.tagName.toLowerCase()==="form"}function om(a){return oi(a)&&a.tagName.toLowerCase()==="input"}function im(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function sm(a,c){return a.button===0&&(!c||c==="_self")&&!im(a)}var Xo=null;function am(){if(Xo===null)try{new FormData(document.createElement("form"),0),Xo=!1}catch{Xo=!0}return Xo}var lm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ia(a){return a!=null&&!lm.has(a)?(ft(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ei}"`),null):a}function um(a,c){let u,p,m,h,x;if(rm(a)){let E=a.getAttribute("action");p=E?Ot(E,c):null,u=a.getAttribute("method")||Zo,m=ia(a.getAttribute("enctype"))||ei,h=new FormData(a)}else if(nm(a)||om(a)&&(a.type==="submit"||a.type==="image")){let E=a.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=a.getAttribute("formaction")||E.getAttribute("action");if(p=S?Ot(S,c):null,u=a.getAttribute("formmethod")||E.getAttribute("method")||Zo,m=ia(a.getAttribute("formenctype"))||ia(E.getAttribute("enctype"))||ei,h=new FormData(E,a),!am()){let{name:b,type:T,value:R}=a;if(T==="image"){let _=b?`${b}.`:"";h.append(`${_}x`,"0"),h.append(`${_}y`,"0")}else b&&h.append(b,R)}}else{if(oi(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Zo,p=null,m=ei,x=a}return h&&m==="text/plain"&&(x=h,h=void 0),{action:p,method:u.toLowerCase(),encType:m,formData:h,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ya(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function cm(a,c,u){let p=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return p.pathname==="/"?p.pathname=`_root.${u}`:c&&Ot(p.pathname,c)==="/"?p.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${u}`,p}async function dm(a,c){if(a.id in c)return c[a.id];try{let u=await import(a.module);return c[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pm(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function fm(a,c,u){let p=await Promise.all(a.map(async m=>{let h=c.routes[m.route.id];if(h){let x=await dm(h,u);return x.links?x.links():[]}return[]}));return vm(p.flat(1).filter(pm).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Nc(a,c,u,p,m,h){let x=(S,b)=>u[b]?S.route.id!==u[b].route.id:!0,E=(S,b)=>u[b].pathname!==S.pathname||u[b].route.path?.endsWith("*")&&u[b].params["*"]!==S.params["*"];return h==="assets"?c.filter((S,b)=>x(S,b)||E(S,b)):h==="data"?c.filter((S,b)=>{let T=p.routes[S.route.id];if(!T||!T.hasLoader)return!1;if(x(S,b)||E(S,b))return!0;if(S.route.shouldRevalidate){let R=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function mm(a,c,{includeHydrateFallback:u}={}){return hm(a.map(p=>{let m=c.routes[p.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),u&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function hm(a){return[...new Set(a)]}function gm(a){let c={},u=Object.keys(a).sort();for(let p of u)c[p]=a[p];return c}function vm(a,c){let u=new Set;return new Set(c),a.reduce((p,m)=>{let h=JSON.stringify(gm(m));return u.has(h)||(u.add(h),p.push({key:h,link:m})),p},[])}function Jc(){let a=k.useContext(Gn);return ya(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function ym(){let a=k.useContext(ri);return ya(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var xa=k.createContext(void 0);xa.displayName="FrameworkContext";function Qc(){let a=k.useContext(xa);return ya(a,"You must render this element inside a <HydratedRouter> element"),a}function xm(a,c){let u=k.useContext(xa),[p,m]=k.useState(!1),[h,x]=k.useState(!1),{onFocus:E,onBlur:S,onMouseEnter:b,onMouseLeave:T,onTouchStart:R}=c,_=k.useRef(null);k.useEffect(()=>{if(a==="render"&&x(!0),a==="viewport"){let V=G=>{G.forEach(W=>{x(W.isIntersecting)})},U=new IntersectionObserver(V,{threshold:.5});return _.current&&U.observe(_.current),()=>{U.disconnect()}}},[a]),k.useEffect(()=>{if(p){let V=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(V)}}},[p]);let J=()=>{m(!0)},Q=()=>{m(!1),x(!1)};return u?a!=="intent"?[h,_,{}]:[h,_,{onFocus:_r(E,J),onBlur:_r(S,Q),onMouseEnter:_r(b,J),onMouseLeave:_r(T,Q),onTouchStart:_r(R,J)}]:[!1,_,{}]}function _r(a,c){return u=>{a&&a(u),u.defaultPrevented||c(u)}}function wm({page:a,...c}){let{router:u}=Jc(),p=k.useMemo(()=>Lc(u.routes,a,u.basename),[u.routes,a,u.basename]);return p?k.createElement(Sm,{page:a,matches:p,...c}):null}function Cm(a){let{manifest:c,routeModules:u}=Qc(),[p,m]=k.useState([]);return k.useEffect(()=>{let h=!1;return fm(a,c,u).then(x=>{h||m(x)}),()=>{h=!0}},[a,c,u]),p}function Sm({page:a,matches:c,...u}){let p=an(),{manifest:m,routeModules:h}=Qc(),{basename:x}=Jc(),{loaderData:E,matches:S}=ym(),b=k.useMemo(()=>Nc(a,c,S,m,p,"data"),[a,c,S,m,p]),T=k.useMemo(()=>Nc(a,c,S,m,p,"assets"),[a,c,S,m,p]),R=k.useMemo(()=>{if(a===p.pathname+p.search+p.hash)return[];let Q=new Set,V=!1;if(c.forEach(G=>{let W=m.routes[G.route.id];!W||!W.hasLoader||(!b.some(ee=>ee.route.id===G.route.id)&&G.route.id in E&&h[G.route.id]?.shouldRevalidate||W.hasClientLoader?V=!0:Q.add(G.route.id))}),Q.size===0)return[];let U=cm(a,x,"data");return V&&Q.size>0&&U.searchParams.set("_routes",c.filter(G=>Q.has(G.route.id)).map(G=>G.route.id).join(",")),[U.pathname+U.search]},[x,E,p,m,b,c,a,h]),_=k.useMemo(()=>mm(T,m),[T,m]),J=Cm(T);return k.createElement(k.Fragment,null,R.map(Q=>k.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...u})),_.map(Q=>k.createElement("link",{key:Q,rel:"modulepreload",href:Q,...u})),J.map(({key:Q,link:V})=>k.createElement("link",{key:Q,nonce:u.nonce,...V})))}function km(...a){return c=>{a.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var Em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Em&&(window.__reactRouterVersion="7.11.0")}catch{}function Rm({basename:a,children:c,unstable_useTransitions:u,window:p}){let m=k.useRef();m.current==null&&(m.current=rf({window:p,v5Compat:!0}));let h=m.current,[x,E]=k.useState({action:h.action,location:h.location}),S=k.useCallback(b=>{u===!1?E(b):k.startTransition(()=>E(b))},[u]);return k.useLayoutEffect(()=>h.listen(S),[h,S]),k.createElement(em,{basename:a,children:c,location:x.location,navigationType:x.action,navigator:h,unstable_useTransitions:u})}var Gc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wa=k.forwardRef(function({onClick:c,discover:u="render",prefetch:p="none",relative:m,reloadDocument:h,replace:x,state:E,target:S,to:b,preventScrollReset:T,viewTransition:R,unstable_defaultShouldRevalidate:_,...J},Q){let{basename:V,unstable_useTransitions:U}=k.useContext(st),G=typeof b=="string"&&Gc.test(b),W=_c(b,V);b=W.to;let ee=zf(b,{relative:m}),[de,pe,we]=xm(p,J),ke=jm(b,{replace:x,state:E,target:S,preventScrollReset:T,relative:m,viewTransition:R,unstable_defaultShouldRevalidate:_,unstable_useTransitions:U});function Te(Ve){c&&c(Ve),Ve.defaultPrevented||ke(Ve)}let He=k.createElement("a",{...J,...we,href:W.absoluteURL||ee,onClick:W.isExternal||h?c:Te,ref:km(Q,pe),target:S,"data-discover":!G&&u==="render"?"true":void 0});return de&&!G?k.createElement(k.Fragment,null,He,k.createElement(wm,{page:ee})):He});wa.displayName="Link";var da=k.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:p="",end:m=!1,style:h,to:x,viewTransition:E,children:S,...b},T){let R=Fr(x,{relative:b.relative}),_=an(),J=k.useContext(ri),{navigator:Q,basename:V}=k.useContext(st),U=J!=null&&Dm(R)&&E===!0,G=Q.encodeLocation?Q.encodeLocation(R).pathname:R.pathname,W=_.pathname,ee=J&&J.navigation&&J.navigation.location?J.navigation.location.pathname:null;u||(W=W.toLowerCase(),ee=ee?ee.toLowerCase():null,G=G.toLowerCase()),ee&&V&&(ee=Ot(ee,V)||ee);const de=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let pe=W===G||!m&&W.startsWith(G)&&W.charAt(de)==="/",we=ee!=null&&(ee===G||!m&&ee.startsWith(G)&&ee.charAt(G.length)==="/"),ke={isActive:pe,isPending:we,isTransitioning:U},Te=pe?c:void 0,He;typeof p=="function"?He=p(ke):He=[p,pe?"active":null,we?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let Ve=typeof h=="function"?h(ke):h;return k.createElement(wa,{...b,"aria-current":Te,className:He,ref:T,style:Ve,to:x,viewTransition:E},typeof S=="function"?S(ke):S)});da.displayName="NavLink";var bm=k.forwardRef(({discover:a="render",fetcherKey:c,navigate:u,reloadDocument:p,replace:m,state:h,method:x=Zo,action:E,onSubmit:S,relative:b,preventScrollReset:T,viewTransition:R,unstable_defaultShouldRevalidate:_,...J},Q)=>{let{unstable_useTransitions:V}=k.useContext(st),U=Lm(),G=Im(E,{relative:b}),W=x.toLowerCase()==="get"?"get":"post",ee=typeof E=="string"&&Gc.test(E),de=pe=>{if(S&&S(pe),pe.defaultPrevented)return;pe.preventDefault();let we=pe.nativeEvent.submitter,ke=we?.getAttribute("formmethod")||x,Te=()=>U(we||pe.currentTarget,{fetcherKey:c,method:ke,navigate:u,replace:m,state:h,relative:b,preventScrollReset:T,viewTransition:R,unstable_defaultShouldRevalidate:_});V&&u!==!1?k.startTransition(()=>Te()):Te()};return k.createElement("form",{ref:Q,method:W,action:G,onSubmit:p?S:de,...J,"data-discover":!ee&&a==="render"?"true":void 0})});bm.displayName="Form";function Pm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yc(a){let c=k.useContext(Gn);return xe(c,Pm(a)),c}function jm(a,{target:c,replace:u,state:p,preventScrollReset:m,relative:h,viewTransition:x,unstable_defaultShouldRevalidate:E,unstable_useTransitions:S}={}){let b=Hc(),T=an(),R=Fr(a,{relative:h});return k.useCallback(_=>{if(sm(_,c)){_.preventDefault();let J=u!==void 0?u:Mr(T)===Mr(R),Q=()=>b(a,{replace:J,state:p,preventScrollReset:m,relative:h,viewTransition:x,unstable_defaultShouldRevalidate:E});S?k.startTransition(()=>Q()):Q()}},[T,b,R,u,p,c,a,m,h,x,E,S])}var Nm=0,Tm=()=>`__${String(++Nm)}__`;function Lm(){let{router:a}=Yc("useSubmit"),{basename:c}=k.useContext(st),u=Yf(),p=a.fetch,m=a.navigate;return k.useCallback(async(h,x={})=>{let{action:E,method:S,encType:b,formData:T,body:R}=um(h,c);if(x.navigate===!1){let _=x.fetcherKey||Tm();await p(_,u,x.action||E,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:T,body:R,formMethod:x.method||S,formEncType:x.encType||b,flushSync:x.flushSync})}else await m(x.action||E,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:T,body:R,formMethod:x.method||S,formEncType:x.encType||b,replace:x.replace,state:x.state,fromRouteId:u,flushSync:x.flushSync,viewTransition:x.viewTransition})},[p,m,c,u])}function Im(a,{relative:c}={}){let{basename:u}=k.useContext(st),p=k.useContext(Tt);xe(p,"useFormAction must be used inside a RouteContext");let[m]=p.matches.slice(-1),h={...Fr(a||".",{relative:c})},x=an();if(a==null){h.search=x.search;let E=new URLSearchParams(h.search),S=E.getAll("index");if(S.some(T=>T==="")){E.delete("index"),S.filter(R=>R).forEach(R=>E.append("index",R));let T=E.toString();h.search=T?`?${T}`:""}}return(!a||a===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:Ft([u,h.pathname])),Mr(h)}function Dm(a,{relative:c}={}){let u=k.useContext(zc);xe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:p}=Yc("useViewTransitionState"),m=Fr(a,{relative:c});if(!u.isTransitioning)return!1;let h=Ot(u.currentLocation.pathname,p)||u.currentLocation.pathname,x=Ot(u.nextLocation.pathname,p)||u.nextLocation.pathname;return ni(m.pathname,x)!=null||ni(m.pathname,h)!=null}const Kc=k.createContext(void 0);function Am({children:a}){const[c,u]=k.useState("dark");k.useEffect(()=>{const m=document.documentElement;c==="dark"?m.classList.add("dark"):m.classList.remove("dark")},[c]);const p=()=>{u(m=>m==="light"?"dark":"light")};return s.jsx(Kc.Provider,{value:{theme:c,toggleTheme:p},children:a})}function Um(){const a=k.useContext(Kc);if(a===void 0)throw new Error("useTheme must be used within a ThemeProvider");return a}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mm=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,u,p)=>p?p.toUpperCase():u.toLowerCase()),Tc=a=>{const c=Mm(a);return c.charAt(0).toUpperCase()+c.slice(1)},qc=(...a)=>a.filter((c,u,p)=>!!c&&c.trim()!==""&&p.indexOf(c)===u).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=k.forwardRef(({color:a="currentColor",size:c=24,strokeWidth:u=2,absoluteStrokeWidth:p,className:m="",children:h,iconNode:x,...E},S)=>k.createElement("svg",{ref:S,...zm,width:c,height:c,stroke:a,strokeWidth:p?Number(u)*24/Number(c):u,className:qc("lucide",m),...E},[...x.map(([b,T])=>k.createElement(b,T)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(a,c)=>{const u=k.forwardRef(({className:p,...m},h)=>k.createElement(Fm,{ref:h,iconNode:c,className:qc(`lucide-${_m(Tc(a))}`,`lucide-${a}`,p),...m}));return u.displayName=Tc(a),u};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],sa=St("award",Om);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ti=St("book-open",Bm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Vm=St("check",Hm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wm=St("circle",$m);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],aa=St("code",Jm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Gm=St("copy",Qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Km=St("house",Ym);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Xm=St("info",qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],eh=St("moon",Zm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],la=St("rocket",th);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],rh=St("sun",nh),oh=[{id:1,name:"React Fundamentals",color:"bg-green-500",path:"/level-1"},{id:2,name:"Props, State & Events",color:"bg-yellow-500",path:"/level-2"},{id:3,name:"Hooks & Lifecycle",color:"bg-orange-500",path:"/level-3"},{id:4,name:"Styling & Assets",color:"bg-blue-500",path:"/level-4"},{id:5,name:"Routing & Navigation",color:"bg-purple-500",path:"/level-5"},{id:6,name:"Forms & APIs",color:"bg-red-500",path:"/level-6"},{id:7,name:"State Management",color:"bg-amber-700",path:"/level-7"},{id:8,name:"Performance",color:"bg-gray-800",path:"/level-8"},{id:9,name:"Testing & Debugging",color:"bg-green-600",path:"/level-9"},{id:10,name:"Advanced Concepts",color:"bg-blue-600",path:"/level-10"},{id:11,name:"Deployment",color:"bg-purple-600",path:"/level-11"},{id:12,name:"Modern Ecosystem",color:"bg-red-600",path:"/level-12"}];function ih(){return s.jsx("aside",{className:"fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto",children:s.jsxs("nav",{className:"p-4",children:[s.jsxs(da,{to:"/",className:({isActive:a})=>`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${a?"bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400":"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:[s.jsx(Km,{className:"w-5 h-5"}),s.jsx("span",{children:"Dashboard"})]}),s.jsxs("div",{className:"mt-6",children:[s.jsx("h2",{className:"px-4 mb-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Learning Path"}),oh.map(a=>s.jsxs(da,{to:a.path,className:({isActive:c})=>`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${c?"bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400":"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:[s.jsx(Wm,{className:`w-3 h-3 ${a.color} rounded-full`}),s.jsxs("span",{className:"text-sm",children:["Level ",a.id,": ",a.name]})]},a.id))]})]})})}function sh(){const{theme:a,toggleTheme:c}=Um();return s.jsx("header",{className:"fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50",children:s.jsxs("div",{className:"flex items-center justify-between h-16 px-6",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(ti,{className:"w-8 h-8 text-blue-600 dark:text-blue-400 mr-3"}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl text-gray-900 dark:text-white",children:"React.js Learning Hub"}),s.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"From Basics to Production"})]})]}),s.jsx("button",{onClick:c,className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors","aria-label":"Toggle theme",children:a==="dark"?s.jsx(rh,{className:"w-5 h-5 text-yellow-500"}):s.jsx(eh,{className:"w-5 h-5 text-gray-700"})})]})})}const ah=[{id:1,title:"React Fundamentals",description:"Learn the basics: JSX, Components, and Virtual DOM",color:"bg-green-500",icon:ti},{id:2,title:"Props, State & Events",description:"Master data flow and user interactions",color:"bg-yellow-500",icon:aa},{id:3,title:"Hooks & Lifecycle",description:"Deep dive into React Hooks and component lifecycle",color:"bg-orange-500",icon:la},{id:4,title:"Styling & Assets",description:"Style your apps with CSS, Tailwind, and manage assets",color:"bg-blue-500",icon:sa},{id:5,title:"Routing & Navigation",description:"Build multi-page apps with React Router",color:"bg-purple-500",icon:ti},{id:6,title:"Forms & APIs",description:"Handle forms, validation, and API integration",color:"bg-red-500",icon:aa},{id:7,title:"State Management",description:"Context API, Redux, and advanced state patterns",color:"bg-amber-700",icon:la},{id:8,title:"Performance",description:"Optimize your React apps for production",color:"bg-gray-800",icon:sa},{id:9,title:"Testing & Debugging",description:"Test and debug React applications",color:"bg-green-600",icon:ti},{id:10,title:"Advanced Concepts",description:"HOCs, Render Props, and Authentication",color:"bg-blue-600",icon:aa},{id:11,title:"Deployment",description:"Deploy to production and optimize for SEO",color:"bg-purple-600",icon:la},{id:12,title:"Modern Ecosystem",description:"TypeScript, Next.js, and modern React",color:"bg-red-600",icon:sa}];function lh(){return s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white mb-2",children:"Welcome to React.js Learning Hub"}),s.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"A comprehensive guide from basics to production-ready applications"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:ah.map(a=>{const c=a.icon;return s.jsx(wa,{to:`/level-${a.id}`,className:"bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:`${a.color} p-3 rounded-lg`,children:s.jsx(c,{className:"w-6 h-6 text-white"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:["Level ",a.id]}),s.jsx("h3",{className:"text-lg text-gray-900 dark:text-white mb-2",children:a.title}),s.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:a.description})]})]})},a.id)})}),s.jsxs("div",{className:"mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6",children:[s.jsx("h2",{className:"text-xl text-gray-900 dark:text-white mb-3",children:"How to Use This Guide"}),s.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-600 dark:text-blue-400 mt-1",children:"•"}),s.jsx("span",{children:"Follow the levels sequentially for best learning experience"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-600 dark:text-blue-400 mt-1",children:"•"}),s.jsx("span",{children:"Each section includes definitions and code examples"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-600 dark:text-blue-400 mt-1",children:"•"}),s.jsx("span",{children:"Click the copy button on any code block to copy to clipboard"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-600 dark:text-blue-400 mt-1",children:"•"}),s.jsx("span",{children:"Practice the examples in your own projects"})]})]})]})]})}function le({title:a,children:c}){return s.jsxs("section",{className:"mb-12",children:[s.jsx("h2",{className:"text-2xl text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-blue-600 dark:border-blue-400",children:a}),s.jsx("div",{className:"space-y-4",children:c})]})}function A({title:a,children:c}){return s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-xl text-gray-800 dark:text-gray-200 mb-3",children:a}),s.jsx("div",{className:"space-y-3",children:c})]})}function q({children:a}){return s.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 rounded-r",children:s.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:a})})}function L({code:a,language:c="jsx",title:u}){const[p,m]=k.useState(!1),h=async()=>{await navigator.clipboard.writeText(a),m(!0),setTimeout(()=>m(!1),2e3)};return s.jsxs("div",{className:"my-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700",children:[u&&s.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700",children:s.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:u})}),s.jsxs("div",{className:"relative",children:[s.jsx("button",{onClick:h,className:"absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white rounded transition-colors",title:"Copy to clipboard",children:p?s.jsx(Vm,{className:"w-4 h-4"}):s.jsx(Gm,{className:"w-4 h-4"})}),s.jsx("pre",{className:"bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 overflow-x-auto",children:s.jsx("code",{className:"text-sm",children:a})})]})]})}function je({children:a,type:c="info"}){const u={info:"bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300",warning:"bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300",success:"bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300"};return s.jsx("div",{className:`border rounded-lg p-4 ${u[c]}`,children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx(Xm,{className:"w-5 h-5 flex-shrink-0 mt-0.5"}),s.jsx("div",{className:"text-sm",children:a})]})})}function uh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full mb-2",children:"Level 1"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"React Fundamentals"})]}),s.jsxs(le,{title:"1. What is React?",children:[s.jsx(q,{children:"React is a JavaScript library for building user interfaces. It lets you create reusable UI components that update efficiently when your data changes."}),s.jsx(A,{title:"Key Benefits",children:s.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Component-Based:"})," Build encapsulated, reusable components"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Declarative:"})," Describe what you want, React handles the how"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Fast Updates:"})," Virtual DOM ensures efficient rendering"]})]})}),s.jsx(L,{title:"Your First React Component",code:`function Welcome() {
  return <h1>Hello, React!</h1>;
}

// Use it in your app
function App() {
  return <Welcome />;
}`})]}),s.jsxs(le,{title:"2. JSX Basics",children:[s.jsx(q,{children:"JSX lets you write HTML-like code in JavaScript. It's not HTML - it's JavaScript that looks like HTML."}),s.jsx(L,{title:"JSX Examples",code:`// Variables in JSX
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;

// Expressions in JSX
const age = 25;
const message = <p>Next year you'll be {age + 1}</p>;

// Conditional rendering
const isLoggedIn = true;
const button = (
  <button>
    {isLoggedIn ? 'Logout' : 'Login'}
  </button>
);`}),s.jsxs(je,{type:"warning",children:["JSX must have one parent element. Use ",s.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-100 text-sm",children:"<>...</>"})," (Fragment) to wrap multiple elements without adding extra DOM nodes."]}),s.jsx(L,{title:"JSX Rules",code:`// ✅ Correct - Single parent
function Good() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}

// ❌ Wrong - Multiple parents
function Bad() {
  return (
    <h1>Title</h1>
    <p>Content</p>
  );
}`})]}),s.jsxs(le,{title:"3. Components",children:[s.jsx(q,{children:"Components are JavaScript functions that return JSX. They're the building blocks of React apps."}),s.jsx(L,{title:"Simple Component",code:`function Button() {
  return <button>Click Me</button>;
}

// Component with props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using components
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Button />
    </div>
  );
}`}),s.jsx(je,{children:"Component names must start with a capital letter. React treats lowercase names as HTML tags."}),s.jsxs(A,{title:"Props - Passing Data",children:[s.jsx(q,{children:"Props (properties) let you pass data from parent to child components."}),s.jsx(L,{title:"Props Example",code:`function UserCard({ name, age, job }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}

// Using the component
function App() {
  return (
    <UserCard 
      name="John Doe" 
      age={30} 
      job="Developer" 
    />
  );
}`})]}),s.jsx(A,{title:"Lists and Keys",children:s.jsx(L,{title:"Rendering Lists",code:`function TodoList() {
  const todos = ['Learn React', 'Build Project', 'Deploy App'];
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

// Better: Use unique IDs as keys
function UserList() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`})})]}),s.jsxs(le,{title:"4. Events",children:[s.jsx(q,{children:"React events are named using camelCase and you pass functions, not strings."}),s.jsx(L,{title:"Event Handling",code:`function Button() {
  function handleClick() {
    alert('Button clicked!');
  }
  
  return <button onClick={handleClick}>Click Me</button>;
}

// Inline handler
function Counter() {
  let count = 0;
  
  return (
    <button onClick={() => {
      count = count + 1;
      alert(\`Count: \${count}\`);
    }}>
      Click: {count}
    </button>
  );
}

// Event object
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}`})]}),s.jsxs(le,{title:"5. Project Setup",children:[s.jsx(A,{title:"Quick Start with Vite",children:s.jsx(L,{title:"Create New React App",code:`# Create new project
npm create vite@latest my-app -- --template react

# Navigate and install
cd my-app
npm install

# Start development server
npm run dev`})}),s.jsx(A,{title:"Basic File Structure",children:s.jsx(L,{title:"Essential Files",code:`my-app/
├── src/
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│   └── index.css       # Styles
├── index.html          # HTML template
└── package.json        # Dependencies`})})]}),s.jsxs(je,{type:"success",children:[s.jsx("strong",{children:"Level 1 Complete!"})," You now understand React basics, JSX, components, props, and events. Next: Learn about state and hooks in Level 2."]})]})}function ch(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-yellow-500 text-white text-sm rounded-full mb-2",children:"Level 2"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Props, State & Events"})]}),s.jsxs(le,{title:"1. Props",children:[s.jsx(q,{children:"Props (properties) are how you pass data from parent to child components. Think of them as function arguments."}),s.jsx(L,{title:"Props Example",code:`// Parent passes props
function App() {
  return (
    <UserCard 
      name="Alice" 
      age={25} 
      isOnline={true} 
    />
  );
}

// Child receives props
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      {props.isOnline && <span>🟢 Online</span>}
    </div>
  );
}

// Destructuring props (cleaner)
function UserCard({ name, age, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isOnline && <span>🟢 Online</span>}
    </div>
  );
}`}),s.jsx(je,{type:"warning",children:"Props are read-only! Never modify them inside a component."}),s.jsxs(A,{title:"Children Prop",children:[s.jsxs(q,{children:["The special ",s.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-100 text-sm",children:"children"})," prop lets you pass content between component tags."]}),s.jsx(L,{title:"Children Prop",code:`function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card title="My Card">
      <p>This is the content</p>
      <button>Click me</button>
    </Card>
  );
}`})]})]}),s.jsxs(le,{title:"2. State",children:[s.jsx(q,{children:"State is data that changes over time. When state changes, React re-renders the component."}),s.jsx(L,{title:"useState Hook",code:`import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}),s.jsx(je,{children:"Always use the setter function (setCount) to update state. Never modify state directly!"}),s.jsx(A,{title:"Multiple State Variables",children:s.jsx(L,{title:"Managing Multiple States",code:`function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [agreed, setAgreed] = useState(false);
  
  return (
    <form>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <label>
        <input 
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree
      </label>
    </form>
  );
}`})}),s.jsx(A,{title:"Object State",children:s.jsx(L,{title:"State as Object",code:`function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    age: 25,
    city: 'NYC'
  });
  
  // Update object state - must spread previous state
  const updateName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  };
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age} - {user.city}</p>
      <button onClick={() => updateName('Bob')}>
        Change Name
      </button>
    </div>
  );
}`})})]}),s.jsxs(le,{title:"3. Events",children:[s.jsx(q,{children:"React handles events similar to HTML, but with camelCase names and function references."}),s.jsx(L,{title:"Common Events",code:`function EventExamples() {
  const [text, setText] = useState('');
  
  // Click event
  const handleClick = () => {
    alert('Clicked!');
  };
  
  // Input change event
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  // Form submit event
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Submitted:', text);
  };
  
  // Mouse events
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      
      <input 
        value={text}
        onChange={handleChange}
        onFocus={() => console.log('Input focused')}
      />
      
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      
      <div onMouseEnter={handleMouseEnter}>
        Hover over me
      </div>
    </div>
  );
}`}),s.jsx(A,{title:"Passing Arguments to Event Handlers",children:s.jsx(L,{title:"Event Handler with Arguments",code:`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build App' }
  ]);
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}`})})]}),s.jsx(le,{title:"4. Practical Example",children:s.jsx(L,{title:"Complete Counter App",code:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      
      <div>
        <label>
          Step:
          <input 
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
      
      <div>
        <button onClick={decrement}>-{step}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+{step}</button>
      </div>
    </div>
  );
}

export default Counter;`})}),s.jsxs(je,{type:"success",children:[s.jsx("strong",{children:"Level 2 Complete!"})," You now understand props, state, and event handling - the core of React interactivity. Next: Learn about Hooks in Level 3."]})]})}function dh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-2",children:"Level 3"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Hooks & Lifecycle"})]}),s.jsxs(le,{title:"7. React Hooks (Core)",children:[s.jsxs(A,{title:"Rules of Hooks",children:[s.jsxs(je,{type:"warning",children:[s.jsx("strong",{children:"Two Golden Rules:"}),s.jsxs("ol",{className:"list-decimal list-inside mt-2 space-y-1",children:[s.jsx("li",{children:"Only call hooks at the top level (not inside loops, conditions, or nested functions)"}),s.jsx("li",{children:"Only call hooks from React function components or custom hooks"})]})]}),s.jsx(L,{title:"Hook Rules Examples",code:`import { useState, useEffect } from 'react';

function Component() {
  // ✅ Correct - Top level
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // ❌ Wrong - Inside condition
  if (count > 0) {
    const [temp, setTemp] = useState(0); // Error!
  }

  // ❌ Wrong - Inside loop
  for (let i = 0; i < 3; i++) {
    const [item, setItem] = useState(i); // Error!
  }

  // ✅ Correct - useEffect at top level
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return <div>{count}</div>;
}`})]}),s.jsxs(A,{title:"useState Hook",children:[s.jsx(q,{children:"useState is a Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it."}),s.jsx(L,{title:"useState Advanced Examples",code:`import { useState } from 'react';

function StateExamples() {
  // Basic state
  const [count, setCount] = useState(0);

  // State with different types
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  // State with function (lazy initialization)
  const [data, setData] = useState(() => {
    // Expensive computation runs only once
    const saved = localStorage.getItem('data');
    return saved ? JSON.parse(saved) : [];
  });

  // State with object
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false
  });

  // Updating object state
  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  // Array operations
  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id, newData) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, ...newData } : item)
    );
  };

  return <div>{/* UI */}</div>;
}`})]}),s.jsxs(A,{title:"useEffect Hook",children:[s.jsx(q,{children:"useEffect lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined."}),s.jsx(L,{title:"useEffect Basic Usage",code:`import { useState, useEffect } from 'react';

function EffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Effect runs after every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // Effect runs only once (on mount)
  useEffect(() => {
    console.log('Component mounted');
    // Good for: API calls, subscriptions, setup
  }, []); // Empty dependency array

  // Effect runs when count changes
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]); // Runs when count updates

  // Effect with multiple dependencies
  useEffect(() => {
    console.log(\`Count: \${count}, Name: \${name}\`);
  }, [count, name]); // Runs when either changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}`})]}),s.jsxs(A,{title:"useEffect Dependency Array",children:[s.jsx(je,{children:"The dependency array tells React when to re-run the effect. Missing dependencies can cause bugs!"}),s.jsx(L,{title:"Dependency Array Patterns",code:`import { useState, useEffect } from 'react';

function DependencyExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  // No dependency array - runs after every render
  useEffect(() => {
    console.log('Runs every render');
  });

  // Empty array [] - runs once on mount
  useEffect(() => {
    console.log('Runs once on mount');
    fetchInitialData();
  }, []);

  // With dependencies - runs when deps change
  useEffect(() => {
    if (count > 0) {
      saveCount(count);
    }
  }, [count]);

  // Multiple dependencies
  useEffect(() => {
    if (user) {
      logUserActivity(user, count);
    }
  }, [user, count]);

  // Function dependency (be careful!)
  const fetchData = () => {
    // fetch logic
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // This recreates every render!

  return <div>{count}</div>;
}

function fetchInitialData() {}
function saveCount(count) {}
function logUserActivity(user, count) {}`})]}),s.jsxs(A,{title:"Cleanup Functions",children:[s.jsx(q,{children:"Cleanup functions run before the component unmounts or before the effect runs again. They're used to clean up subscriptions, timers, or other side effects."}),s.jsx(L,{title:"Cleanup Examples",code:`import { useState, useEffect } from 'react';

function CleanupExample() {
  const [count, setCount] = useState(0);

  // Timer cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log('Timer cleared');
    };
  }, []);

  // Event listener cleanup
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Subscription cleanup
  useEffect(() => {
    const subscription = subscribeToData((data) => {
      console.log('New data:', data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Abort fetch on unmount
  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/data', { signal: controller.signal })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <div>Count: {count}</div>;
}

function subscribeToData(callback) {
  return { unsubscribe: () => {} };
}`})]}),s.jsxs(A,{title:"Multiple useEffect Hooks",children:[s.jsx(je,{type:"info",children:"You can use multiple useEffect hooks to separate concerns and organize your side effects logically."}),s.jsx(L,{title:"Multiple Effects Pattern",code:`import { useState, useEffect } from 'react';

function MultipleEffects({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [online, setOnline] = useState(false);

  // Effect 1: Fetch user data
  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, [userId]);

  // Effect 2: Fetch user posts
  useEffect(() => {
    if (user) {
      fetchPosts(user.id).then(data => setPosts(data));
    }
  }, [user]);

  // Effect 3: Subscribe to online status
  useEffect(() => {
    const subscription = subscribeToStatus(userId, setOnline);
    return () => subscription.unsubscribe();
  }, [userId]);

  // Effect 4: Update document title
  useEffect(() => {
    if (user) {
      document.title = \`\${user.name}'s Profile\`;
    }
  }, [user]);

  // Effect 5: Log analytics
  useEffect(() => {
    logPageView('profile', userId);
  }, [userId]);

  return <div>{/* UI */}</div>;
}

async function fetchUser(id) { return {}; }
async function fetchPosts(id) { return []; }
function subscribeToStatus(id, callback) {
  return { unsubscribe: () => {} };
}
function logPageView(page, id) {}`})]})]}),s.jsxs(le,{title:"8. Component Lifecycle (with Hooks)",children:[s.jsxs(A,{title:"Lifecycle Phases",children:[s.jsx(q,{children:"React components go through three lifecycle phases: Mounting (component created), Updating (component re-rendered), and Unmounting (component removed)."}),s.jsx(L,{title:"Lifecycle with Hooks",code:`import { useState, useEffect } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // MOUNTING - Runs once when component mounts
  useEffect(() => {
    console.log('✅ Component Mounted');
    
    // Cleanup runs on UNMOUNTING
    return () => {
      console.log('❌ Component Unmounted');
    };
  }, []);

  // UPDATING - Runs when count changes
  useEffect(() => {
    console.log('🔄 Component Updated - count changed:', count);
  }, [count]);

  // EVERY RENDER - Runs after every render
  useEffect(() => {
    console.log('🎨 Component Rendered');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Update
      </button>
    </div>
  );
}`})]}),s.jsx(A,{title:"Lifecycle Equivalents in Hooks",children:s.jsx(L,{title:"Class Component vs Hooks Lifecycle",code:`import { useState, useEffect } from 'react';

// CLASS COMPONENT LIFECYCLE (Old Way)
class OldComponent extends React.Component {
  componentDidMount() {
    // Runs once after first render
  }

  componentDidUpdate(prevProps, prevState) {
    // Runs after every update
  }

  componentWillUnmount() {
    // Runs before component unmounts
  }

  render() {
    return <div />;
  }
}

// FUNCTIONAL COMPONENT WITH HOOKS (Modern Way)
function ModernComponent({ userId }) {
  const [data, setData] = useState(null);

  // componentDidMount equivalent
  useEffect(() => {
    console.log('Mounted - fetch initial data');
    fetchData();
  }, []);

  // componentDidUpdate equivalent (when userId changes)
  useEffect(() => {
    console.log('Updated - userId changed');
    fetchData();
  }, [userId]);

  // componentWillUnmount equivalent
  useEffect(() => {
    return () => {
      console.log('Unmounting - cleanup');
    };
  }, []);

  // Combined: mount + update + unmount
  useEffect(() => {
    console.log('Mount or userId changed');
    fetchData();

    return () => {
      console.log('Cleanup before next effect or unmount');
    };
  }, [userId]);

  function fetchData() {
    // fetch logic
  }

  return <div>{data}</div>;
}`})})]}),s.jsxs(le,{title:"9. Additional Hooks",children:[s.jsxs(A,{title:"useRef Hook",children:[s.jsx(q,{children:"useRef returns a mutable ref object whose .current property persists across re-renders. It's useful for accessing DOM elements and storing mutable values that don't trigger re-renders."}),s.jsx(L,{title:"useRef Examples",code:`import { useRef, useEffect, useState } from 'react';

function RefExamples() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [renders, setRenders] = useState(0);

  // Access DOM element
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Store mutable value (doesn't cause re-render)
  useEffect(() => {
    countRef.current += 1;
    console.log('Render count:', countRef.current);
  });

  // Store previous value
  const prevValueRef = useRef();
  useEffect(() => {
    prevValueRef.current = renders;
  });

  // Store interval/timer ID
  const intervalRef = useRef(null);
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      
      <p>Renders: {renders}</p>
      <p>Previous renders: {prevValueRef.current}</p>
      <button onClick={() => setRenders(r => r + 1)}>
        Re-render
      </button>
      
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}`})]}),s.jsxs(A,{title:"useContext Hook",children:[s.jsx(q,{children:"useContext lets you subscribe to React context without introducing nesting. It accepts a context object and returns the current context value."}),s.jsx(L,{title:"useContext Example",code:`import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext('light');
const UserContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'John', role: 'admin' });

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <Toolbar />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  // Use context
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <button className={\`btn-\${theme}\`}>
      {user.name} - {theme} theme
    </button>
  );
}`})]}),s.jsxs(A,{title:"useMemo Hook",children:[s.jsx(q,{children:"useMemo memoizes expensive calculations and only recalculates when dependencies change. It helps optimize performance by avoiding unnecessary computations."}),s.jsx(L,{title:"useMemo Example",code:`import { useState, useMemo } from 'react';

function MemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Expensive calculation
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // ❌ Without useMemo - recalculates every render
  const result = expensiveCalculation(count);

  // ✅ With useMemo - only recalculates when count changes
  const memoizedResult = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // Memoize filtered list
  const expensiveItems = useMemo(() => {
    return items.filter(item => item.active)
                .sort((a, b) => a.price - b.price);
  }, [items]);

  return (
    <div>
      <p>Result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`})]}),s.jsxs(A,{title:"useCallback Hook",children:[s.jsx(q,{children:"useCallback returns a memoized callback function that only changes if dependencies change. It's useful for preventing unnecessary re-renders of child components."}),s.jsx(L,{title:"useCallback Example",code:`import { useState, useCallback, memo } from 'react';

function CallbackExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ Without useCallback - creates new function every render
  const handleClick = () => {
    console.log('Clicked');
  };

  // ✅ With useCallback - same function unless deps change
  const handleClickMemo = useCallback(() => {
    console.log('Clicked');
  }, []);

  // Callback with dependencies
  const handleDelete = useCallback((id) => {
    setItems(items.filter(item => item.id !== id));
  }, [items]);

  // Callback accessing state
  const increment = useCallback(() => {
    setCount(c => c + 1); // Use functional update
  }, []); // No dependencies needed!

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <ChildComponent onClick={handleClickMemo} />
    </div>
  );
}

// Memoized child component
const ChildComponent = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});`})]}),s.jsxs(A,{title:"Custom Hooks",children:[s.jsx(q,{children:'Custom Hooks are JavaScript functions whose names start with "use" and that may call other Hooks. They let you extract component logic into reusable functions.'}),s.jsx(L,{title:"Custom Hook Examples",code:`import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Using custom hooks
function MyComponent() {
  const { data, loading, error } = useFetch('/api/users');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width, height } = useWindowSize();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>Window: {width}x{height}</p>
      <p>Theme: {theme}</p>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}`})]})]}),s.jsx(je,{type:"success",children:"Level 3 completed! You've mastered React Hooks and component lifecycle. Continue to Level 4 to learn about styling and assets management."})]})}function ph(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full mb-2",children:"Level 4"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Styling & Assets"})]}),s.jsxs(le,{title:"10. Styling in React",children:[s.jsxs(A,{title:"Inline Styles",children:[s.jsx(q,{children:"Inline styles in React are specified as JavaScript objects with camelCased properties. They're applied directly to elements using the style prop."}),s.jsx(L,{title:"Inline Styles Example",code:`function InlineStylesExample() {
  // Style as object
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  // Dynamic styles
  const isActive = true;
  const dynamicStyle = {
    backgroundColor: isActive ? '#28a745' : '#dc3545',
    opacity: isActive ? 1 : 0.5
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello World</h1>
      <button style={buttonStyle}>Click Me</button>
      <div style={dynamicStyle}>Dynamic Div</div>
      
      {/* Inline object */}
      <p style={{ color: 'red', fontSize: '18px' }}>
        Red text
      </p>
    </div>
  );
}

// Note: Use camelCase for CSS properties
// background-color → backgroundColor
// font-size → fontSize
// z-index → zIndex`})]}),s.jsxs(A,{title:"CSS Files",children:[s.jsx(q,{children:"Traditional CSS files can be imported into React components. Styles are global by default."}),s.jsx(L,{title:"styles.css",code:`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.button.primary {
  background-color: #007bff;
}

.button.danger {
  background-color: #dc3545;
}`}),s.jsx(L,{title:"Component.tsx",code:`import './styles.css';

function Component() {
  return (
    <div className="container">
      <button className="button primary">Primary</button>
      <button className="button danger">Danger</button>
    </div>
  );
}`})]}),s.jsxs(A,{title:"CSS Modules",children:[s.jsx(q,{children:"CSS Modules provide locally scoped CSS by automatically generating unique class names. They prevent naming conflicts and keep styles modular."}),s.jsx(L,{title:"Button.module.css",code:`.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

.large {
  padding: 15px 30px;
  font-size: 18px;
}`}),s.jsx(L,{title:"Button.tsx",code:`import styles from './Button.module.css';

function Button({ variant = 'primary', size, children }) {
  // Combine multiple classes
  const buttonClasses = [
    styles.button,
    styles[variant],
    size === 'large' && styles.large
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
}

// Or use template literals
function AnotherButton() {
  const isPrimary = true;
  
  return (
    <button className={\`\${styles.button} \${isPrimary ? styles.primary : styles.secondary}\`}>
      Click Me
    </button>
  );
}`})]}),s.jsxs(A,{title:"Tailwind CSS",children:[s.jsx(q,{children:"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup."}),s.jsx(L,{title:"Tailwind CSS Example",code:`function TailwindExample() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Container with padding and max width */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Card with background, rounded corners, and shadow */}
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Heading
        </h1>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          This is a paragraph with some text.
        </p>
        
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded">Item 1</div>
          <div className="bg-green-100 p-4 rounded">Item 2</div>
          <div className="bg-red-100 p-4 rounded">Item 3</div>
        </div>
        
        {/* Button with hover and active states */}
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-6 py-2 rounded transition-colors">
          Click Me
        </button>
        
        {/* Conditional classes */}
        <div className={\`p-4 rounded \${isActive ? 'bg-green-500' : 'bg-gray-300'}\`}>
          Status: {isActive ? 'Active' : 'Inactive'}
        </div>
      </div>
    </div>
  );
}

// Responsive Design
function ResponsiveExample() {
  return (
    <div>
      {/* Mobile first: base = mobile, then sm, md, lg, xl */}
      <div className="text-sm md:text-base lg:text-lg xl:text-xl">
        Responsive text
      </div>
      
      <div className="hidden md:block">
        Hidden on mobile, visible on tablet+
      </div>
      
      <div className="block md:hidden">
        Visible on mobile, hidden on tablet+
      </div>
    </div>
  );
}`})]}),s.jsx(A,{title:"Conditional Styling",children:s.jsx(L,{title:"Conditional Styling Techniques",code:`import { useState } from 'react';

function ConditionalStyling() {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState('light');
  const [status, setStatus] = useState('success');

  return (
    <div>
      {/* Method 1: Ternary operator */}
      <button className={\`btn \${isActive ? 'active' : 'inactive'}\`}>
        Button
      </button>

      {/* Method 2: Logical AND */}
      <div className={\`card \${isActive && 'highlighted'}\`}>
        Card content
      </div>

      {/* Method 3: Template literals with multiple conditions */}
      <div className={\`
        container
        \${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}
        \${status === 'error' && 'border-red-500'}
      \`}>
        Content
      </div>

      {/* Method 4: Object-based (using classnames library pattern) */}
      <div className={[
        'base-class',
        isActive && 'active-class',
        theme === 'dark' && 'dark-class'
      ].filter(Boolean).join(' ')}>
        Element
      </div>

      {/* Method 5: Function to generate class names */}
      <div className={getButtonClasses(isActive, status)}>
        Button
      </div>
    </div>
  );
}

function getButtonClasses(active, status) {
  let classes = 'btn';
  if (active) classes += ' active';
  if (status === 'error') classes += ' error';
  if (status === 'success') classes += ' success';
  return classes;
}`})})]}),s.jsxs(le,{title:"11. Assets Management",children:[s.jsx(A,{title:"Images",children:s.jsx(L,{title:"Image Handling in React",code:`// Method 1: Import images (recommended for src/ folder)
import logo from './assets/logo.png';
import avatar from './assets/avatar.jpg';

function ImageExample() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <img src={avatar} alt="Avatar" width="100" />
    </div>
  );
}

// Method 2: Public folder (for static assets)
function PublicImages() {
  return (
    <div>
      {/* Files in public/ folder */}
      <img src="/images/hero.jpg" alt="Hero" />
      <img src="/favicon.ico" alt="Icon" />
    </div>
  );
}

// Method 3: Dynamic imports
function DynamicImages({ imageName }) {
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    import(\`./assets/\${imageName}.png\`)
      .then(img => setImage(img.default))
      .catch(err => console.error(err));
  }, [imageName]);
  
  return image ? <img src={image} alt={imageName} /> : null;
}

// Method 4: Background images
function BackgroundImage() {
  const bgStyle = {
    backgroundImage: \`url(\${logo})\`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px'
  };
  
  return <div style={bgStyle}>Content</div>;
}

// Responsive images
function ResponsiveImage() {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet="/images/large.jpg" />
      <source media="(min-width: 768px)" srcSet="/images/medium.jpg" />
      <img src="/images/small.jpg" alt="Responsive" />
    </picture>
  );
}`})}),s.jsx(A,{title:"Icons",children:s.jsx(L,{title:"Icon Libraries",code:`// Using lucide-react (recommended)
import { Home, User, Settings, Menu, X, ChevronRight } from 'lucide-react';

function IconExample() {
  return (
    <div>
      {/* Basic usage */}
      <Home />
      <User />
      <Settings />
      
      {/* With size */}
      <Home size={24} />
      <User size={32} />
      
      {/* With color */}
      <Home color="blue" />
      <Settings color="#ff0000" />
      
      {/* With stroke width */}
      <Menu strokeWidth={1.5} />
      
      {/* In buttons */}
      <button>
        <Home size={20} />
        <span>Home</span>
      </button>
      
      {/* With Tailwind classes */}
      <Home className="w-6 h-6 text-blue-500" />
      <User className="w-8 h-8 text-gray-700" />
    </div>
  );
}

// Custom SVG icons
function CustomSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" />
    </svg>
  );
}

// Icon component wrapper
function Icon({ name, size = 24, color = 'currentColor' }) {
  const icons = {
    home: Home,
    user: User,
    settings: Settings
  };
  
  const IconComponent = icons[name];
  return <IconComponent size={size} color={color} />;
}

// Usage: <Icon name="home" size={20} />`})}),s.jsxs(A,{title:"Fonts",children:[s.jsx(L,{title:"Custom Fonts",code:`/* In your CSS file (globals.css) */

/* Method 1: Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Method 2: Local fonts */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont-Regular.woff2') format('woff2'),
       url('/fonts/CustomFont-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.custom-font {
  font-family: 'CustomFont', sans-serif;
}

/* Tailwind config (if using Tailwind) */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        custom: ['CustomFont', 'sans-serif'],
      }
    }
  }
}`}),s.jsx(L,{title:"Font Usage in Components",code:`function FontExample() {
  return (
    <div>
      {/* Default font */}
      <p>This uses the default font</p>
      
      {/* Custom font via className */}
      <p className="font-custom">Custom font</p>
      
      {/* Inline style */}
      <p style={{ fontFamily: 'CustomFont, sans-serif' }}>
        Inline custom font
      </p>
      
      {/* Tailwind font utilities */}
      <p className="font-sans">Sans-serif font</p>
      <p className="font-serif">Serif font</p>
      <p className="font-mono">Monospace font</p>
    </div>
  );
}`})]}),s.jsxs(A,{title:"Public vs src Folder Usage",children:[s.jsxs(je,{type:"info",children:[s.jsx("strong",{children:"When to use each folder:"}),s.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"src/assets/"})," - Images, fonts, icons used in components (processed by bundler)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"public/"})," - Static files that need to be served as-is (not processed)"]})]})]}),s.jsx(L,{title:"Folder Structure & Usage",code:`project/
├── public/
│   ├── favicon.ico          # Browser tab icon
│   ├── robots.txt           # SEO file
│   ├── manifest.json        # PWA manifest
│   ├── images/
│   │   └── og-image.jpg     # Social media preview
│   └── fonts/
│       └── custom-font.woff # Custom fonts
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── hero.jpg
│   │   ├── icons/
│   │   │   └── custom-icon.svg
│   │   └── fonts/
│   │       └── local-font.woff2
│   └── components/
│       └── MyComponent.tsx

// Using assets from src/
import logo from './assets/images/logo.png';

function Component() {
  return <img src={logo} alt="Logo" />;
}

// Using assets from public/
function PublicAssets() {
  return (
    <div>
      <link rel="icon" href="/favicon.ico" />
      <img src="/images/og-image.jpg" alt="OG" />
    </div>
  );
}

// Dynamic public paths
function DynamicPublic({ imageName }) {
  return <img src={\`/images/\${imageName}.jpg\`} alt={imageName} />;
}

// ✅ Use src/ when:
// - Images imported in components
// - Need bundler optimization
// - Want hash names for caching

// ✅ Use public/ when:
// - Referenced in index.html
// - Need exact filename
// - External scripts/resources
// - Files used by tools (robots.txt, manifest.json)`})]})]}),s.jsx(je,{type:"success",children:"Level 4 completed! You now know how to style React applications and manage assets. Move on to Level 5 to learn about routing and navigation."})]})}function fh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-purple-500 text-white text-sm rounded-full mb-2",children:"Level 5"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Routing & Navigation"})]}),s.jsxs(le,{title:"12. React Router",children:[s.jsx(A,{title:"Installing React Router",children:s.jsx(L,{title:"Installation",code:`# Install React Router
npm install react-router-dom

# or with yarn
yarn add react-router-dom`})}),s.jsxs(A,{title:"BrowserRouter",children:[s.jsx(q,{children:"BrowserRouter uses the HTML5 history API to keep your UI in sync with the URL. It should wrap your entire app."}),s.jsx(L,{title:"Basic Setup",code:`import { BrowserRouter, Routes, Route } from 'react-router-dom';

// main.tsx or App.tsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}`})]}),s.jsxs(A,{title:"Routes & Route",children:[s.jsx(q,{children:"Routes acts as a container for all Route components. Each Route defines a path and the component to render when that path matches."}),s.jsx(L,{title:"Advanced Routes",code:`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Exact path */}
        <Route path="/" element={<Home />} />
        
        {/* Multiple routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Route with layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        
        {/* Catch-all route (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Layout component with Outlet
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}`})]}),s.jsxs(A,{title:"Link & NavLink",children:[s.jsx(q,{children:"Link creates navigation links without page reloads. NavLink is similar but adds styling capabilities for active links."}),s.jsx(L,{title:"Link and NavLink Examples",code:`import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Basic Link */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      
      {/* Link with state */}
      <Link 
        to="/profile" 
        state={{ from: 'navigation' }}
      >
        Profile
      </Link>
      
      {/* NavLink with active styling */}
      <NavLink
        to="/"
        className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Home
      </NavLink>
      
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Dashboard
      </NavLink>
      
      {/* NavLink with end prop (exact match) */}
      <NavLink to="/" end>
        Home
      </NavLink>
    </nav>
  );
}

// Practical Navigation Component
function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex gap-4 p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            \`px-3 py-2 rounded \${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}\`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            \`px-3 py-2 rounded \${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}\`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            \`px-3 py-2 rounded \${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}\`
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}`})]}),s.jsxs(A,{title:"useParams",children:[s.jsx(q,{children:"useParams hook returns an object of key/value pairs of URL parameters. Useful for dynamic routes."}),s.jsx(L,{title:"Dynamic Routes with useParams",code:`import { Routes, Route, useParams, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* Dynamic route with parameter */}
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/post/:postId" element={<Post />} />
      
      {/* Multiple parameters */}
      <Route path="/blog/:category/:slug" element={<BlogPost />} />
      
      {/* Optional parameter */}
      <Route path="/products/:category?" element={<Products />} />
    </Routes>
  );
}

// Using useParams
function UserProfile() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}

function BlogPost() {
  const { category, slug } = useParams();
  
  return (
    <div>
      <h1>{slug}</h1>
      <p>Category: {category}</p>
    </div>
  );
}

// Practical example with data fetching
function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(\`/api/posts/\${postId}\`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, [postId]);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// List with links to dynamic routes
function UserList() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={{\`/user/\${user.id}\`}}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}`})]}),s.jsxs(A,{title:"useNavigate",children:[s.jsx(q,{children:"useNavigate hook returns a function that lets you navigate programmatically, useful for redirects after actions like form submissions."}),s.jsx(L,{title:"Programmatic Navigation",code:`import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const success = await login(email, password);
    
    if (success) {
      // Navigate to dashboard
      navigate('/dashboard');
      
      // Navigate with replace (can't go back)
      // navigate('/dashboard', { replace: true });
      
      // Navigate with state
      // navigate('/dashboard', { state: { from: 'login' } });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Navigation examples
function NavigationExamples() {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Go to specific route */}
      <button onClick={() => navigate('/home')}>
        Go Home
      </button>
      
      {/* Go back */}
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
      
      {/* Go forward */}
      <button onClick={() => navigate(1)}>
        Go Forward
      </button>
      
      {/* Navigate with state */}
      <button onClick={() => 
        navigate('/profile', { state: { from: 'dashboard' } })
      }>
        View Profile
      </button>
      
      {/* Replace current entry */}
      <button onClick={() => 
        navigate('/success', { replace: true })
      }>
        Submit Form
      </button>
    </div>
  );
}

async function login(email, password) {
  // Mock login
  return true;
}`})]}),s.jsxs(A,{title:"Nested Routes",children:[s.jsx(q,{children:"Nested routes allow you to render routes inside other routes, creating hierarchical layouts and URL structures."}),s.jsx(L,{title:"Nested Routes Example",code:`import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Parent route with nested children */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

// Parent component with Outlet
function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="/dashboard/posts">Posts</Link>
        </nav>
      </aside>
      
      <main className="content">
        {/* Child routes render here */}
        <Outlet />
      </main>
    </div>
  );
}

function DashboardHome() {
  return <h1>Dashboard Home</h1>;
}

function Profile() {
  return <h1>User Profile</h1>;
}

function Settings() {
  return <h1>Settings</h1>;
}

// Nested children
function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <Outlet />
    </div>
  );
}

function PostList() {
  return <div>List of posts...</div>;
}

function PostDetail() {
  const { id } = useParams();
  return <div>Post {id} details...</div>;
}`})]}),s.jsxs(A,{title:"Protected Routes",children:[s.jsx(q,{children:"Protected routes restrict access to certain pages based on authentication or authorization status."}),s.jsx(L,{title:"Protected Route Implementation",code:`import { Navigate, Outlet } from 'react-router-dom';

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // Custom hook
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children ? children : <Outlet />;
}

// Role-based Protected Route
function RoleBasedRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return children ? children : <Outlet />;
}

// Usage in App
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      
      {/* Admin only routes */}
      <Route element={<RoleBasedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/users" element={<UserManagement />} />
      </Route>
      
      {/* Alternative: Direct wrapping */}
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

// Custom auth hook
function useAuth() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and get user
      setUser({ id: 1, role: 'user' });
    }
  }, []);
  
  return user;
}`})]}),s.jsx(A,{title:"404 Page Handling",children:s.jsx(L,{title:"404 Not Found Page",code:`import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// 404 Page Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

// Alternative with useNavigate
function NotFoundAlt() {
  const navigate = useNavigate();
  
  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}`})})]}),s.jsx(je,{type:"success",children:"Level 5 complete! You've mastered React Router and navigation. Continue to Level 6 to learn about forms, validation, and API integration."})]})}function mh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-red-500 text-white text-sm rounded-full mb-2",children:"Level 6"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Forms & APIs"})]}),s.jsxs(le,{title:"13. Forms in React",children:[s.jsxs(A,{title:"Controlled Forms",children:[s.jsx(q,{children:'Controlled forms are forms where form data is handled by React state. The React state becomes the "single source of truth" for form values.'}),s.jsx(L,{title:"Controlled Form Example",code:`import { useState } from 'react';

function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    country: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
      </div>

      <div>
        <label>
          <input
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleChange}
          />
          I agree to terms
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`})]}),s.jsx(A,{title:"Handling Multiple Inputs",children:s.jsx(L,{title:"Dynamic Form Handling",code:`import { useState } from 'react';

function MultiInputForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      zipCode: ''
    },
    hobbies: []
  });

  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Nested object handler
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      }
    }));
  };

  // Array handler (checkboxes)
  const handleHobbyChange = (hobby) => {
    setFormState(prev => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter(h => h !== hobby)
        : [...prev.hobbies, hobby]
    }));
  };

  return (
    <form>
      <input
        name="firstName"
        value={formState.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      
      <input
        name="lastName"
        value={formState.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      
      <input
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      
      <input
        name="street"
        value={formState.address.street}
        onChange={handleAddressChange}
        placeholder="Street"
      />
      
      <input
        name="city"
        value={formState.address.city}
        onChange={handleAddressChange}
        placeholder="City"
      />
      
      <label>
        <input
          type="checkbox"
          checked={formState.hobbies.includes('reading')}
          onChange={() => handleHobbyChange('reading')}
        />
        Reading
      </label>
      
      <label>
        <input
          type="checkbox"
          checked={formState.hobbies.includes('sports')}
          onChange={() => handleHobbyChange('sports')}
        />
        Sports
      </label>
    </form>
  );
}`})}),s.jsx(A,{title:"Form Submission",children:s.jsx(L,{title:"Form Submit Patterns",code:`import { useState } from 'react';

function FormSubmission() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setSuccess(true);
      console.log('Success:', data);
      
      // Reset form
      setFormData({ email: '', password: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Login successful!</div>}
      
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          email: e.target.value
        }))}
        disabled={loading}
      />
      
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          password: e.target.value
        }))}
        disabled={loading}
      />
      
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}`})}),s.jsx(A,{title:"Form Reset",children:s.jsx(L,{title:"Reset Form Methods",code:`import { useState } from 'react';

function FormReset() {
  const initialState = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    
    // Method 1: Reset to initial state
    setFormData(initialState);
  };

  const handleReset = () => {
    // Method 2: Manual reset
    setFormData(initialState);
  };

  const handleClear = (e) => {
    // Method 3: Use form reset
    e.target.form.reset();
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="reset" onClick={handleClear}>Clear</button>
    </form>
  );
}`})}),s.jsx(A,{title:"Validation Basics",children:s.jsx(L,{title:"Basic Form Validation",code:`import { useState } from 'react';

function FormValidation() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\\S+@\\S+\\.\\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;
      
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field was touched
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
      confirmPassword: true
    });
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid, submitting...');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </div>

      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <span className="error">{errors.password}</span>
        )}
      </div>

      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`})})]}),s.jsxs(le,{title:"14. Advanced Form Handling",children:[s.jsxs(A,{title:"React Hook Form",children:[s.jsx(q,{children:"React Hook Form is a performant, flexible library for handling forms with easy validation. It reduces re-renders and simplifies form logic."}),s.jsx(L,{title:"React Hook Form Basics",code:`import { useForm } from 'react-hook-form@7.55.0';

function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
  };

  // Watch specific field
  const watchPassword = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <input
          {...register('confirmPassword', {
            required: 'Please confirm password',
            validate: value =>
              value === watchPassword || 'Passwords do not match'
          })}
          type="password"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>

      <div>
        <input
          {...register('age', {
            required: 'Age is required',
            min: { value: 18, message: 'Must be 18+' },
            max: { value: 100, message: 'Must be under 100' }
          })}
          type="number"
          placeholder="Age"
        />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}`})]}),s.jsx(A,{title:"Advanced Validation",children:s.jsx(L,{title:"Custom Validation Rules",code:`import { useForm } from 'react-hook-form@7.55.0';

function AdvancedValidation() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Custom validation function
  const validateUsername = async (value) => {
    const response = await fetch(\`/api/check-username?username=\${value}\`);
    const data = await response.json();
    return data.available || 'Username already taken';
  };

  const validatePassword = (value) => {
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain uppercase letter';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password must contain lowercase letter';
    }
    if (!/[0-9]/.test(value)) {
      return 'Password must contain number';
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return 'Password must contain special character';
    }
    return true;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters'
            },
            validate: validateUsername
          })}
          placeholder="Username"
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            },
            validate: validatePassword
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <input
          {...register('website', {
            pattern: {
              value: /^https?:\\/\\/.+/,
              message: 'URL must start with http:// or https://'
            }
          })}
          placeholder="Website (optional)"
        />
        {errors.website && <span>{errors.website.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`})})]}),s.jsxs(le,{title:"15. API Integration",children:[s.jsxs(A,{title:"Fetch API",children:[s.jsx(q,{children:"The Fetch API provides a JavaScript interface for accessing and manipulating HTTP requests and responses."}),s.jsx(L,{title:"Fetch API Examples",code:`import { useState, useEffect } from 'react';

function FetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{JSON.stringify(data)}</div>;
}

// POST request
function PostExample() {
  const [response, setResponse] = useState(null);

  const createPost = async () => {
    try {
      const res = await fetch('https://api.example.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Post',
          body: 'Post content',
          userId: 1
        })
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={createPost}>Create Post</button>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
}`})]}),s.jsx(A,{title:"Async/Await",children:s.jsx(L,{title:"Async/Await Pattern",code:`import { useState, useEffect } from 'react';

function AsyncExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch with async/await
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.example.com/users');
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create user
  const createUser = async (userData) => {
    try {
      const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const newUser = await response.json();
      setUsers([...users, newUser]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update user
  const updateUser = async (id, userData) => {
    try {
      const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const updatedUser = await response.json();
      setUsers(users.map(user => 
        user.id === id ? updatedUser : user
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE'
      });

      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {users.map(user => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}`})}),s.jsx(A,{title:"Loading States",children:s.jsx(L,{title:"Handling Loading States",code:`import { useState, useEffect } from 'react';

function LoadingStates() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  // Success state with data
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Data loaded successfully</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Skeleton loading
function SkeletonLoading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="skeleton">
        <div className="skeleton-header"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    );
  }

  return <div>{/* Actual content */}</div>;
}`})})]}),s.jsx(je,{type:"success",children:"Level 6 completed! You've mastered forms, validation, and API integration. Move to Level 7 to learn about state management patterns."})]})}function hh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-amber-700 text-white text-sm rounded-full mb-2",children:"Level 7"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"State Management"})]}),s.jsxs(le,{title:"16. Lifting State Up",children:[s.jsxs(A,{title:"Parent-Child Communication",children:[s.jsx(q,{children:"Lifting state up means moving state to the closest common ancestor of components that need it. This allows multiple components to share and sync state."}),s.jsx(L,{title:"Lifting State Example",code:`import { useState } from 'react';

// ❌ Before: State in each component (not synced)
function BadExample() {
  return (
    <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
  );
}

// ✅ After: State lifted to parent (synced)
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setScale('c');
    setTemperature(temp);
  };

  const handleFahrenheitChange = (temp) => {
    setScale('f');
    setTemperature(temp);
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  return Math.round(output * 1000) / 1000;
}`})]}),s.jsxs(A,{title:"Prop Drilling",children:[s.jsx(q,{children:"Prop drilling is passing props through multiple component levels to reach a deeply nested component. While functional, it can become cumbersome."}),s.jsx(L,{title:"Prop Drilling Problem",code:`// ❌ Prop drilling through multiple levels
function App() {
  const [user, setUser] = useState({ name: 'John', role: 'admin' });

  return <Layout user={user} />;
}

function Layout({ user }) {
  return (
    <div>
      <Header user={user} />
      <Main user={user} />
    </div>
  );
}

function Header({ user }) {
  return <Navigation user={user} />;
}

function Navigation({ user }) {
  return <UserMenu user={user} />;
}

function UserMenu({ user }) {
  // Finally using user here!
  return <div>Welcome, {user.name}</div>;
}

// ✅ Solution 1: Context API (see next section)
// ✅ Solution 2: Component composition
function AppComposition() {
  const [user, setUser] = useState({ name: 'John', role: 'admin' });

  return (
    <Layout
      header={<Header user={user} />}
      main={<Main user={user} />}
    />
  );
}

function LayoutComposition({ header, main }) {
  return (
    <div>
      {header}
      {main}
    </div>
  );
}`})]})]}),s.jsxs(le,{title:"17. Context API",children:[s.jsxs(A,{title:"Creating Context",children:[s.jsx(q,{children:"Context provides a way to share values between components without explicitly passing props through every level of the tree."}),s.jsx(L,{title:"Context API Setup",code:`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext(null);
const ThemeContext = createContext('light');

// 2. Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin'
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Create custom hook for easy access
function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// 4. Wrap app with provider
function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
      <Footer />
    </UserProvider>
  );
}

// 5. Use context in any component
function Header() {
  const { user, logout } = useUser();

  return (
    <header>
      <span>Welcome, {user?.name}</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
}

function Main() {
  const { user } = useUser();

  if (!user) {
    return <div>Please log in</div>;
  }

  return <div>Dashboard for {user.name}</div>;
}`})]}),s.jsx(A,{title:"Multiple Contexts",children:s.jsx(L,{title:"Combining Multiple Contexts",code:`import { createContext, useContext, useState } from 'react';

// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // Login logic
    setUser({ name: 'John' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Language Context
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// App with multiple providers
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <Main />
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Or use a compound provider
function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Using multiple contexts
function Component() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={theme}>
      <p>{language === 'en' ? 'Hello' : 'Hola'}, {user?.name}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setLanguage('es')}>Español</button>
    </div>
  );
}`})}),s.jsx(A,{title:"Context Best Practices",children:s.jsx(L,{title:"Advanced Context Patterns",code:`import { createContext, useContext, useReducer } from 'react';

// Pattern 1: Context + Reducer for complex state
const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    items: state.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Pattern 2: Split context for performance
const UserStateContext = createContext();
const UserDispatchContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  return useContext(UserStateContext);
}

function useUserDispatch() {
  return useContext(UserDispatchContext);
}

// Usage
function UserProfile() {
  const user = useUserState(); // Only re-renders when user changes
  return <div>{user?.name}</div>;
}

function LoginButton() {
  const setUser = useUserDispatch(); // Never re-renders
  return <button onClick={() => setUser({ name: 'John' })}>Login</button>;
}`})})]}),s.jsx(je,{type:"success",children:"Level 7 completed! You've learned state management with Context API. For larger applications, continue to Level 8 for performance optimization techniques."})]})}function gh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-gray-800 text-white text-sm rounded-full mb-2",children:"Level 8"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Performance Optimization"})]}),s.jsxs(le,{title:"19. Performance Concepts",children:[s.jsxs(A,{title:"Re-rendering Issues",children:[s.jsx(q,{children:"React re-renders components when state or props change. Understanding and controlling re-renders is key to building performant applications."}),s.jsx(L,{title:"Understanding Re-renders",code:`import { useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  
  console.log('Parent rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      {/* ❌ Child re-renders even though it doesn't use count */}
      <ExpensiveChild />
    </div>
  );
}

function ExpensiveChild() {
  console.log('ExpensiveChild rendered');
  
  // Expensive calculation
  const result = Array.from({ length: 1000000 })
    .reduce((acc, _, i) => acc + i, 0);
  
  return <div>Result: {result}</div>;
}

// When to optimize:
// - Component renders frequently
// - Component has expensive computations
// - Large lists or trees
// - Complex UI components

// Common causes of unnecessary re-renders:
// 1. Parent component re-renders
// 2. Creating new objects/arrays in render
// 3. Inline function definitions
// 4. Context value changes`})]}),s.jsxs(A,{title:"React.memo",children:[s.jsx(q,{children:"React.memo is a higher-order component that memoizes a component, preventing re-renders if props haven't changed."}),s.jsx(L,{title:"React.memo Usage",code:`import { memo, useState } from 'react';

// ✅ Memoized component - only re-renders if props change
const ExpensiveComponent = memo(function ExpensiveComponent({ value }) {
  console.log('ExpensiveComponent rendered');
  
  const result = heavyCalculation(value);
  
  return <div>Result: {result}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      
      {/* ExpensiveComponent won't re-render when count changes */}
      <ExpensiveComponent value={value} />
      
      <button onClick={() => setValue(value + 1)}>
        Change Value
      </button>
    </div>
  );
}

// Custom comparison function
const UserCard = memo(
  function UserCard({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);

// When to use React.memo:
// ✅ Pure functional components
// ✅ Components that render often with same props
// ✅ Components with expensive rendering logic
// ❌ Components that always receive different props
// ❌ Very simple components (overhead not worth it)

function heavyCalculation(num) {
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += num;
  }
  return result;
}`})]}),s.jsxs(A,{title:"useMemo",children:[s.jsx(q,{children:"useMemo memoizes the result of an expensive calculation, only recalculating when dependencies change."}),s.jsx(L,{title:"useMemo Examples",code:`import { useState, useMemo } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ Without useMemo - recalculates every render
  const expensiveValue = expensiveCalculation(count);

  // ✅ With useMemo - only recalculates when count changes
  const memoizedValue = useMemo(() => {
    console.log('Calculating...');
    return expensiveCalculation(count);
  }, [count]);

  // Memoize filtered/sorted lists
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort((a, b) => a.price - b.price);
  }, [items]);

  // Memoize object creation
  const config = useMemo(() => ({
    theme: 'dark',
    locale: 'en',
    userId: count
  }), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Practical example: Search and filter
function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedProducts = useMemo(() => {
    console.log('Filtering and sorting...');
    
    let result = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

    return result;
  }, [products, searchTerm, sortBy]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
      {filteredAndSortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

function expensiveCalculation(num) {
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }
  return result;
}`})]}),s.jsxs(A,{title:"useCallback",children:[s.jsx(q,{children:"useCallback returns a memoized callback function that only changes if dependencies change. Useful for preventing unnecessary re-renders of child components."}),s.jsx(L,{title:"useCallback Examples",code:`import { useState, useCallback, memo } from 'react';

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ Without useCallback - creates new function every render
  const handleClick = () => {
    console.log('Clicked');
  };

  // ✅ With useCallback - same function unless deps change
  const handleClickMemo = useCallback(() => {
    console.log('Clicked');
  }, []);

  // Callback with dependencies
  const handleAddItem = useCallback((item) => {
    setItems(prevItems => [...prevItems, item]);
  }, []); // No dependencies needed with functional update

  // Callback accessing state
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Use functional update to avoid dependency

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedButton onClick={handleClickMemo} />
      <MemoizedButton onClick={handleIncrement} />
    </div>
  );
}

// Memoized child component
const MemoizedButton = memo(({ onClick, children }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>{children || 'Click me'}</button>;
});

// Practical example: Todo list
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter(t => !t.completed);
    if (filter === 'completed') return todos.filter(t => t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

const TodoInput = memo(({ onAdd }) => {
  const [text, setText] = useState('');
  
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => { onAdd(text); setText(''); }}>Add</button>
    </div>
  );
});

const TodoList = memo(({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
});

const TodoItem = memo(({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});`})]}),s.jsxs(A,{title:"Lazy Loading & Code Splitting",children:[s.jsx(q,{children:"Lazy loading and code splitting allow you to split your app into smaller chunks and load them on demand, improving initial load time."}),s.jsx(L,{title:"Lazy Loading with Suspense",code:`import { lazy, Suspense, useState } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Settings = lazy(() => import('./Settings'));

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentPage('profile')}>Profile</button>
        <button onClick={() => setCurrentPage('settings')}>Settings</button>
      </nav>

      <Suspense fallback={<LoadingSpinner />}>
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'profile' && <Profile />}
        {currentPage === 'settings' && <Settings />}
      </Suspense>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="spinner">
      <div className="spinner-icon"></div>
      <p>Loading...</p>
    </div>
  );
}

// Lazy loading with React Router
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function AppWithRouter() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

// Conditional lazy loading
function ConditionalLazy() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  const HeavyComponent = lazy(() => import('./HeavyComponent'));

  return (
    <div>
      <button onClick={() => setShowHeavyComponent(true)}>
        Load Component
      </button>

      {showHeavyComponent && (
        <Suspense fallback={<div>Loading heavy component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

// Preloading strategy
const AdminPanel = lazy(() => import('./AdminPanel'));

function preloadAdminPanel() {
  // Preload when user hovers over button
  import('./AdminPanel');
}

function NavBar() {
  return (
    <button
      onMouseEnter={preloadAdminPanel}
      onClick={() => navigate('/admin')}
    >
      Admin
    </button>
  );
}`})]})]}),s.jsx(je,{type:"success",children:"Level 8 complete! You've learned performance optimization techniques. Move to Level 9 to learn about testing and debugging React applications."})]})}function vh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-2",children:"Level 9"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Testing & Debugging"})]}),s.jsxs(le,{title:"20. Debugging React Apps",children:[s.jsxs(A,{title:"React Developer Tools",children:[s.jsx(q,{children:"React Developer Tools is a browser extension that allows you to inspect React component hierarchies, props, state, and hooks in the browser."}),s.jsx(L,{title:"Using React DevTools",code:`// Install React DevTools extension for your browser
// Chrome: https://chrome.google.com/webstore (search "React Developer Tools")
// Firefox: https://addons.mozilla.org/firefox/ (search "React Developer Tools")

// Features:
// 1. Components Tab
//    - View component tree
//    - Inspect props and state
//    - See hooks values
//    - Filter components

// 2. Profiler Tab
//    - Record rendering performance
//    - See which components re-render
//    - Identify performance bottlenecks

// Using DevTools Programmatically:
function DebugComponent() {
  const [count, setCount] = useState(0);

  // Add display name for better debugging
  DebugComponent.displayName = 'DebugComponent';

  // Log props in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Component Props:', { count });
    }
  }, [count]);

  return <div>Count: {count}</div>;
}

// Useful DevTools shortcuts:
// - Right-click on element → "Inspect React"
// - $r in console = currently selected component
// - Component name appears in DevTools tree`})]}),s.jsx(A,{title:"Console Debugging",children:s.jsx(L,{title:"Debugging Techniques",code:`import { useState, useEffect } from 'react';

function DebuggingExample() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 1. Console.log debugging
  console.log('Component rendered', { data, error });

  // 2. Conditional logging
  useEffect(() => {
    if (data) {
      console.log('Data loaded:', data);
    }
  }, [data]);

  // 3. Table logging for arrays/objects
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 }
  ];
  console.table(users);

  // 4. Grouping logs
  console.group('User Info');
  console.log('Name:', 'John');
  console.log('Age:', 25);
  console.groupEnd();

  // 5. Time measurement
  console.time('API Call');
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      console.timeEnd('API Call');
      setData(data);
    });

  // 6. Trace function calls
  function deepFunction() {
    console.trace('Function call stack');
  }

  // 7. Custom logging hook
  function useLogger(value, name) {
    useEffect(() => {
      console.log(\`[\${name}] changed:\`, value);
    }, [value, name]);
  }

  useLogger(data, 'data');

  // 8. Debugging state updates
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Before:', count);
    setCount(count + 1);
    console.log('After (still old):', count); // Still old value!
  };

  useEffect(() => {
    console.log('Count updated to:', count); // New value here
  }, [count]);

  // 9. Error boundaries for debugging
  return (
    <ErrorBoundary>
      <div>{data?.name}</div>
    </ErrorBoundary>
  );
}

// Custom debug component
function Debug({ data }) {
  if (process.env.NODE_ENV === 'development') {
    return (
      <pre style={{ background: '#f0f0f0', padding: '10px' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  }
  return null;
}`})}),s.jsxs(A,{title:"Error Boundaries",children:[s.jsx(q,{children:"Error Boundaries are React components that catch JavaScript errors in their child component tree, log errors, and display a fallback UI."}),s.jsx(L,{title:"Error Boundary Implementation",code:`import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Send to error tracking service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

// Component that might throw error
function BuggyComponent() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error('Crashed at 5!');
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Wrapped component
function SafeComponent() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`})]})]}),s.jsxs(le,{title:"21. Testing",children:[s.jsxs(A,{title:"Unit Testing with Jest",children:[s.jsx(q,{children:"Jest is a JavaScript testing framework that works great with React. It provides test runners, assertions, and mocking capabilities."}),s.jsx(L,{title:"Jest Test Examples",code:`// sum.js
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// sum.test.js
import { sum, multiply } from './sum';

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

// Testing objects and arrays
test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('array contains item', () => {
  const items = ['apple', 'banana', 'orange'];
  expect(items).toContain('banana');
  expect(items).toHaveLength(3);
});

// Testing truthiness
test('null is falsy', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeFalsy();
  expect(n).not.toBeTruthy();
});

// Testing numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Testing strings
test('string matching', () => {
  expect('team').not.toMatch(/I/);
  expect('Christoph').toMatch(/stop/);
});

// Async testing
test('fetches data successfully', async () => {
  const data = await fetchData();
  expect(data).toBe('data');
});

// Testing promises
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

async function fetchData() {
  return 'data';
}`})]}),s.jsxs(A,{title:"React Testing Library",children:[s.jsx(q,{children:"React Testing Library is a set of helpers that let you test React components without relying on implementation details. It encourages better testing practices."}),s.jsx(L,{title:"Component Testing",code:`import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

// Component to test
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Tests
describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test('increments count', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText(/increment/i);
    
    fireEvent.click(incrementBtn);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    
    fireEvent.click(incrementBtn);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
  });

  test('decrements count', () => {
    render(<Counter />);
    const decrementBtn = screen.getByText(/decrement/i);
    
    fireEvent.click(decrementBtn);
    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
  });

  test('resets count', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText(/increment/i);
    const resetBtn = screen.getByText(/reset/i);
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
    
    fireEvent.click(resetBtn);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});

// Testing form submission
function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

test('submits form with correct data', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const submitBtn = screen.getByText(/login/i);

  await userEvent.type(emailInput, 'test@example.com');
  await userEvent.type(passwordInput, 'password123');
  await userEvent.click(submitBtn);

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});

// Testing async operations
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

test('loads and displays user', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'John Doe' })
    })
  );

  render(<UserProfile userId={1} />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });

  expect(fetch).toHaveBeenCalledWith('/api/users/1');
});`})]}),s.jsx(A,{title:"Mocking APIs",children:s.jsx(L,{title:"API Mocking Strategies",code:`import { render, screen, waitFor } from '@testing-library/react';

// Mock fetch globally
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

// Component that fetches data
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Test successful API call
test('fetches and displays users', async () => {
  const mockUsers = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  fetch.mockResolvedValueOnce({
    json: async () => mockUsers
  });

  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/john/i)).toBeInTheDocument();
    expect(screen.getByText(/jane/i)).toBeInTheDocument();
  });
});

// Test API error
test('displays error message on fetch failure', async () => {
  fetch.mockRejectedValueOnce(new Error('API Error'));

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText(/error: api error/i)).toBeInTheDocument();
  });
});

// Mock module
jest.mock('./api', () => ({
  fetchUsers: jest.fn(() => Promise.resolve([
    { id: 1, name: 'John' }
  ]))
}));

// Mock axios
jest.mock('axios');
import axios from 'axios';

test('fetches data with axios', async () => {
  const mockData = { data: [{ id: 1, name: 'John' }] };
  axios.get.mockResolvedValue(mockData);

  // Test component that uses axios
  render(<Component />);

  await waitFor(() => {
    expect(screen.getByText(/john/i)).toBeInTheDocument();
  });
});`})})]}),s.jsx(je,{type:"success",children:"Level 9 complete! You've learned testing and debugging techniques. Continue to Level 10 for advanced React patterns and concepts."})]})}function yh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2",children:"Level 10"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Advanced Concepts"})]}),s.jsxs(le,{title:"22. Advanced Patterns",children:[s.jsxs(A,{title:"Higher Order Components (HOC)",children:[s.jsx(q,{children:"A Higher Order Component is a function that takes a component and returns a new component with additional props or functionality. It's a pattern for reusing component logic."}),s.jsx(L,{title:"HOC Examples",code:`import { useState, useEffect } from 'react';

// Basic HOC
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// HOC with data fetching
function withData(Component, url) {
  return function WithDataComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, []);

    return (
      <Component
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };
}

// HOC with authentication
function withAuth(Component) {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <Component {...props} />;
  };
}

// Using HOCs
function UserList({ data, loading, error }) {
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

const UserListWithLoading = withLoading(UserList);
const UserListWithData = withData(UserList, '/api/users');
const SecureUserList = withAuth(UserListWithData);

// Composing multiple HOCs
function compose(...hocs) {
  return (Component) => {
    return hocs.reduceRight((acc, hoc) => hoc(acc), Component);
  };
}

const EnhancedComponent = compose(
  withAuth,
  withLoading,
  withData('/api/users')
)(UserList);

// HOC with additional props
function withDimensions(Component) {
  return function WithDimensionsComponent(props) {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    useEffect(() => {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <Component {...props} dimensions={dimensions} />;
  };
}

function ResponsiveComponent({ dimensions }) {
  return (
    <div>
      Width: {dimensions.width}, Height: {dimensions.height}
    </div>
  );
}

const ResponsiveComponentWithDimensions = withDimensions(ResponsiveComponent);`})]}),s.jsxs(A,{title:"Render Props",children:[s.jsx(q,{children:"Render props is a technique for sharing code between components using a prop whose value is a function that returns a React element."}),s.jsx(L,{title:"Render Props Pattern",code:`import { useState, useEffect } from 'react';

// Mouse position tracker with render prop
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Usage
function App() {
  return (
    <div>
      <h1>Move your mouse</h1>
      <Mouse
        render={(position) => (
          <p>
            Mouse position: {position.x}, {position.y}
          </p>
        )}
      />
    </div>
  );
}

// Data fetcher with render prop
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading, error });
}

// Usage
function UserList() {
  return (
    <DataFetcher
      url="/api/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return (
          <ul>
            {data.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}

// Using children as render prop
function Toggle({ children }) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return children({ on, toggle });
}

// Usage
function App() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <button onClick={toggle}>
            {on ? 'ON' : 'OFF'}
          </button>
          {on && <p>The button is ON!</p>}
        </div>
      )}
    </Toggle>
  );
}

// Window size tracker
function WindowSize({ children }) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return children(size);
}

// Usage
function ResponsiveLayout() {
  return (
    <WindowSize>
      {(size) => (
        <div>
          {size.width < 768 ? (
            <MobileLayout />
          ) : (
            <DesktopLayout />
          )}
        </div>
      )}
    </WindowSize>
  );
}`})]}),s.jsxs(A,{title:"Compound Components",children:[s.jsx(q,{children:"Compound components is a pattern where components work together to form a cohesive UI, sharing implicit state without explicit props passing."}),s.jsx(L,{title:"Compound Components Pattern",code:`import { createContext, useContext, useState } from 'react';

// Tabs compound component
const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      className={\`tab \${activeTab === id ? 'active' : ''}\`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== id) return null;

  return <div className="tab-panel">{children}</div>;
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Usage
function App() {
  return (
    <Tabs defaultTab="home">
      <Tabs.List>
        <Tabs.Tab id="home">Home</Tabs.Tab>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel id="home">
        <h2>Home Content</h2>
      </Tabs.Panel>
      <Tabs.Panel id="profile">
        <h2>Profile Content</h2>
      </Tabs.Panel>
      <Tabs.Panel id="settings">
        <h2>Settings Content</h2>
      </Tabs.Panel>
    </Tabs>
  );
}

// Accordion compound component
const AccordionContext = createContext();

function Accordion({ children }) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ id, children }) {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const isOpen = openItems.includes(id);

  return (
    <div className="accordion-item">
      {typeof children === 'function' ? children({ isOpen, toggleItem: () => toggleItem(id) }) : children}
    </div>
  );
}

function AccordionHeader({ children, onClick }) {
  return (
    <div className="accordion-header" onClick={onClick}>
      {children}
    </div>
  );
}

function AccordionBody({ isOpen, children }) {
  if (!isOpen) return null;
  return <div className="accordion-body">{children}</div>;
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

// Usage
function FAQSection() {
  return (
    <Accordion>
      <Accordion.Item id="1">
        {({ isOpen, toggleItem }) => (
          <>
            <Accordion.Header onClick={toggleItem}>
              What is React?
            </Accordion.Header>
            <Accordion.Body isOpen={isOpen}>
              React is a JavaScript library for building user interfaces.
            </Accordion.Body>
          </>
        )}
      </Accordion.Item>
    </Accordion>
  );
}`})]})]}),s.jsxs(le,{title:"23. Authentication & Authorization",children:[s.jsx(A,{title:"Login & Signup Flow",children:s.jsx(L,{title:"Authentication Implementation",code:`import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Auth Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token).then(user => {
        setUser(user);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

// Login Component
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

// Signup Component
function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const result = await signup(formData);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      
      <input
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      
      <button type="submit">Sign Up</button>
    </form>
  );
}

async function verifyToken(token) {
  // Verify token with backend
  const response = await fetch('/api/verify', {
    headers: { Authorization: \`Bearer \${token}\` }
  });
  return response.json();
}`})}),s.jsx(A,{title:"Protected Routes",children:s.jsx(L,{title:"Role-Based Access Control",code:`import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Basic protected route
function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

// Role-based protected route
function RoleProtectedRoute({ allowedRoles }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

// App Routes
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Admin only routes */}
      <Route element={<RoleProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/users" element={<UserManagement />} />
      </Route>

      {/* Staff and Admin routes */}
      <Route element={<RoleProtectedRoute allowedRoles={['admin', 'staff']} />}>
        <Route path="/reports" element={<Reports />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}`})})]}),s.jsx(le,{title:"24. Environment & Config",children:s.jsx(A,{title:"Environment Variables",children:s.jsx(L,{title:"Using Environment Variables",code:`// .env file (root of project)
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here
VITE_APP_NAME=My React App
VITE_ENV=development

// .env.production
VITE_API_URL=https://prod-api.example.com
VITE_ENV=production

// .env.development
VITE_API_URL=http://localhost:3000/api
VITE_ENV=development

// Accessing in React (Vite)
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const APP_NAME = import.meta.env.VITE_APP_NAME;
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Config file
// src/config.js
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  appName: import.meta.env.VITE_APP_NAME,
  environment: import.meta.env.VITE_ENV,
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableChat: import.meta.env.VITE_ENABLE_CHAT === 'true'
  }
};

// Usage in components
import { config } from './config';

function App() {
  useEffect(() => {
    fetch(\`\${config.apiUrl}/data\`, {
      headers: {
        'Authorization': \`Bearer \${config.apiKey}\`
      }
    });
  }, []);

  return <div>{config.appName}</div>;
}

// Conditional features
function Analytics() {
  if (!config.features.enableAnalytics) {
    return null;
  }

  return <div>Analytics Component</div>;
}

// Environment-specific code
if (import.meta.env.DEV) {
  console.log('Development mode');
}

if (import.meta.env.PROD) {
  // Production-only code
}`})})}),s.jsx(je,{type:"success",children:"Level 10 completed! You've mastered advanced React patterns and authentication. Move to Level 11 to learn about deployment and production optimization."})]})}function xh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-2",children:"Level 11"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Production & Deployment"})]}),s.jsxs(le,{title:"25. Build & Deployment",children:[s.jsxs(A,{title:"Production Build",children:[s.jsx(q,{children:"A production build optimizes your React app for performance, including minification, bundling, and removing development-only code."}),s.jsx(L,{title:"Building for Production",code:`# Vite build command
npm run build

# Create React App build command
npm run build

# Build output (Vite)
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── index.html

# Build output (CRA)
build/
├── static/
│   ├── js/
│   ├── css/
│   └── media/
└── index.html

# Preview production build locally (Vite)
npm run preview

# Serve production build (CRA)
npm install -g serve
serve -s build

# Build with environment variables
VITE_API_URL=https://api.production.com npm run build

# Package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:staging": "vite build --mode staging",
    "build:production": "vite build --mode production",
    "preview": "vite preview",
    "analyze": "vite-bundle-visualizer"
  }
}`})]}),s.jsx(A,{title:"Deploying to Netlify",children:s.jsx(L,{title:"Netlify Deployment",code:`# Method 1: Drag and Drop
# 1. Run: npm run build
# 2. Drag the 'dist' or 'build' folder to Netlify

# Method 2: Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify
netlify init

# Deploy
netlify deploy --prod

# Method 3: Git Integration (Recommended)
# 1. Push code to GitHub/GitLab/Bitbucket
# 2. Connect repository in Netlify dashboard
# 3. Configure build settings

# netlify.toml (configuration file)
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"

# Environment variables in Netlify
# Dashboard → Site settings → Environment variables
# Add: VITE_API_URL, VITE_API_KEY, etc.

# Custom domain
# Dashboard → Domain settings → Add custom domain
# Configure DNS: Add CNAME record pointing to your-site.netlify.app`})}),s.jsx(A,{title:"Deploying to Vercel",children:s.jsx(L,{title:"Vercel Deployment",code:`# Method 1: Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod

# Method 2: Git Integration (Recommended)
# 1. Push to GitHub
# 2. Import project in Vercel dashboard
# 3. Auto-deploys on push

# vercel.json (configuration)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}

# Environment Variables
# Dashboard → Project Settings → Environment Variables
# Add variables for Production, Preview, Development

# Custom domain
# Dashboard → Domains → Add domain
# Configure DNS

# Performance optimizations (automatic in Vercel)
# - CDN distribution
# - Automatic HTTPS
# - Image optimization
# - Edge caching`})}),s.jsx(A,{title:"Deploying to Firebase",children:s.jsx(L,{title:"Firebase Hosting",code:`# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Select options:
# - Choose existing project or create new
# - Public directory: dist (or build)
# - Configure as SPA: Yes
# - Set up automatic builds: Optional

# firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}

# Build and deploy
npm run build
firebase deploy

# Deploy to specific project
firebase deploy --project production

# Deploy with custom message
firebase deploy -m "Version 2.0.0"

# Preview deployment
firebase hosting:channel:deploy preview

# Custom domain
# Firebase Console → Hosting → Connect domain
# Follow DNS configuration steps

# GitHub Actions for auto-deploy
# .github/workflows/deploy.yml
name: Deploy to Firebase
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '\${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '\${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id`})}),s.jsx(A,{title:"Other Deployment Options",children:s.jsx(L,{title:"Additional Platforms",code:`# GitHub Pages
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add to package.json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 3. Deploy
npm run deploy

# AWS S3 + CloudFront
# 1. Create S3 bucket
# 2. Enable static website hosting
# 3. Upload build files
aws s3 sync dist/ s3://your-bucket-name

# 4. Create CloudFront distribution
# 5. Configure custom domain

# Docker deployment
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Build and run
docker build -t my-react-app .
docker run -p 80:80 my-react-app

# Heroku
# 1. Install Heroku CLI
# 2. Create Procfile
web: npm start

# 3. Deploy
heroku create my-app
git push heroku main

# Render
# 1. Connect GitHub repository
# 2. Configure build settings:
#    - Build Command: npm run build
#    - Publish Directory: dist
# 3. Auto-deploys on push`})})]}),s.jsxs(le,{title:"26. SEO & Optimization",children:[s.jsxs(A,{title:"Meta Tags",children:[s.jsx(q,{children:"Meta tags provide metadata about your HTML document, important for SEO and social media sharing."}),s.jsx(L,{title:"Meta Tags in React",code:`// index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Basic Meta Tags -->
  <title>My React App - Best App Ever</title>
  <meta name="description" content="A comprehensive React application with amazing features" />
  <meta name="keywords" content="react, javascript, web app, tutorial" />
  <meta name="author" content="Your Name" />
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="My React App" />
  <meta property="og:description" content="A comprehensive React application" />
  <meta property="og:image" content="https://example.com/og-image.jpg" />
  <meta property="og:url" content="https://example.com" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="My React App" />
  <meta name="twitter:description" content="A comprehensive React application" />
  <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#000000" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"><\/script>
</body>
</html>

// Dynamic meta tags with React Helmet
import { Helmet } from 'react-helmet';

function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{product.name} - My Shop</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <link rel="canonical" href={\`https://example.com/products/\${product.id}\`} />
      </Helmet>
      
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </>
  );
}

// Using Helmet in different components
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - My React App</title>
        <meta name="description" content="Welcome to my React app" />
      </Helmet>
      <h1>Home Page</h1>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - My React App</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <h1>About Page</h1>
    </>
  );
}`})]}),s.jsx(A,{title:"Performance Best Practices",children:s.jsx(L,{title:"Production Optimizations",code:`// 1. Code Splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}

// 2. Image Optimization
function OptimizedImage({ src, alt }) {
  return (
    <picture>
      <source srcSet={\`\${src}.webp\`} type="image/webp" />
      <source srcSet={\`\${src}.jpg\`} type="image/jpeg" />
      <img
        src={\`\${src}.jpg\`}
        alt={alt}
        loading="lazy"
        width="800"
        height="600"
      />
    </picture>
  );
}

// 3. Minimize Re-renders
import { memo, useMemo, useCallback } from 'react';

const ExpensiveList = memo(function ExpensiveList({ items, onItemClick }) {
  return items.map(item => (
    <ExpensiveItem key={item.id} item={item} onClick={onItemClick} />
  ));
});

// 4. Virtualization for long lists
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// 5. Debounce expensive operations
import { useState, useCallback } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      // Expensive search operation
      searchAPI(value);
    }, 300),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return <input value={query} onChange={handleChange} />;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 6. Service Worker for caching
// vite-plugin-pwa configuration
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});

// 7. Analyze bundle size
// Run: npm run build -- --analyze
// Or use webpack-bundle-analyzer

// 8. Remove console.logs in production
if (import.meta.env.PROD) {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

// 9. Enable gzip compression (server config)
// Netlify: Automatic
// Nginx: gzip on;
// Apache: mod_deflate

// 10. Set proper cache headers
// Static assets: Cache for 1 year
// HTML: No cache or short cache

async function searchAPI(query) {
  // API call
}`})})]}),s.jsx(je,{type:"success",children:"Level 11 complete! You've learned how to deploy React apps to production and optimize for performance. Move to Level 12 for the modern React ecosystem including TypeScript and Next.js."})]})}function wh(){return s.jsxs("div",{className:"max-w-4xl",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-2",children:"Level 12"}),s.jsx("h1",{className:"text-3xl text-gray-900 dark:text-white",children:"Modern React Ecosystem"})]}),s.jsxs(le,{title:"27. TypeScript with React",children:[s.jsx(A,{title:"Setting Up TypeScript",children:s.jsx(L,{title:"TypeScript Setup",code:`# Create new Vite project with TypeScript
npm create vite@latest my-app -- --template react-ts

# Add TypeScript to existing project
npm install --save-dev typescript @types/react @types/react-dom

# tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`})}),s.jsxs(A,{title:"Typing Props & State",children:[s.jsx(q,{children:"TypeScript allows you to define types for props and state, catching errors at compile-time and improving developer experience."}),s.jsx(L,{title:"TypeScript Props Examples",code:`import { useState } from 'react';

// Props with interface
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

function Button({ text, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${variant}\`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Props with type
type UserCardProps = {
  user: {
    id: number;
    name: string;
    email: string;
    age?: number;
  };
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {user.age && <p>Age: {user.age}</p>}
      {onEdit && <button onClick={() => onEdit(user.id)}>Edit</button>}
      {onDelete && <button onClick={() => onDelete(user.id)}>Delete</button>}
    </div>
  );
}

// Children prop
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return <div className={className}>{children}</div>;
}

// State with TypeScript
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  return <div>{/* Component JSX */}</div>;
}

// Generic props
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
function App() {
  const users: User[] = [
    { id: 1, name: 'John', email: 'john@example.com' }
  ];

  return (
    <List
      items={users}
      renderItem={(user) => <span>{user.name}</span>}
    />
  );
}`})]}),s.jsx(A,{title:"Typing Hooks",children:s.jsx(L,{title:"TypeScript with React Hooks",code:`import { useState, useEffect, useContext, useRef, useReducer } from 'react';

// useState
function Counter() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  
  // With initial value inference
  const [items, setItems] = useState([1, 2, 3]); // inferred as number[]
  
  return <div>{count}</div>;
}

// useEffect
function DataFetcher() {
  const [data, setData] = useState<Data | null>(null);
  
  useEffect(() => {
    fetchData().then((result: Data) => {
      setData(result);
    });
  }, []);
  
  return <div>{data?.name}</div>;
}

// useContext
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// useRef
function InputComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      console.log('Timer expired');
    }, 1000);
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  return <input ref={inputRef} />;
}

// useReducer
type State = {
  count: number;
  error: string | null;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set_error'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'set_error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

// Custom hooks with TypeScript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  return <div>{theme}</div>;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Data {
  name: string;
}

async function fetchData(): Promise<Data> {
  return { name: 'Test' };
}`})}),s.jsx(A,{title:"Event Handlers & Forms",children:s.jsx(L,{title:"Typing Events",code:`import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';

function EventsExample() {
  const [value, setValue] = useState<string>('');

  // Input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Form submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };

  // Button click event
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked at:', e.clientX, e.clientY);
  };

  // Textarea change
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  // Select change
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <textarea onChange={handleTextareaChange} />
      <select onChange={handleSelectChange}>
        <option value="1">Option 1</option>
      </select>
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

// Generic event handler
type InputChangeHandler = ChangeEvent<HTMLInputElement>;
type ButtonClickHandler = MouseEvent<HTMLButtonElement>;

const handleInputChange: (e: InputChangeHandler) => void = (e) => {
  console.log(e.target.value);
};

// Form with TypeScript
interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitForm(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        name="remember"
        type="checkbox"
        checked={formData.remember}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

async function submitForm(data: FormData): Promise<void> {
  // Submit logic
}`})})]}),s.jsx(le,{title:"28. React + Backend Integration",children:s.jsx(A,{title:"API Integration Best Practices",children:s.jsx(L,{title:"Structured API Layer",code:`// api/client.ts - API client setup
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ApiClient {
  private baseURL: string;
  private headers: HeadersInit;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    };

    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: \`Bearer \${token}\`,
      };
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(\`API Error: \${response.statusText}\`);
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

// api/users.ts - API endpoints
interface User {
  id: number;
  name: string;
  email: string;
}

export const usersApi = {
  getAll: () => apiClient.get<User[]>('/users'),
  getById: (id: number) => apiClient.get<User>(\`/users/\${id}\`),
  create: (user: Omit<User, 'id'>) => apiClient.post<User>('/users', user),
  update: (id: number, user: Partial<User>) =>
    apiClient.put<User>(\`/users/\${id}\`, user),
  delete: (id: number) => apiClient.delete<void>(\`/users/\${id}\`),
};

// hooks/useUsers.ts - Custom hook for data fetching
import { useState, useEffect } from 'react';
import { usersApi } from '../api/users';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    usersApi
      .getAll()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const createUser = async (userData: Omit<User, 'id'>) => {
    const newUser = await usersApi.create(userData);
    setUsers([...users, newUser]);
  };

  const updateUser = async (id: number, userData: Partial<User>) => {
    const updated = await usersApi.update(id, userData);
    setUsers(users.map(u => (u.id === id ? updated : u)));
  };

  const deleteUser = async (id: number) => {
    await usersApi.delete(id);
    setUsers(users.filter(u => u.id !== id));
  };

  return {
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
  };
}

// Component usage
function UserList() {
  const { users, loading, error, deleteUser } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}`})})}),s.jsxs(le,{title:"29. Next Steps",children:[s.jsxs(A,{title:"Next.js Basics",children:[s.jsx(q,{children:"Next.js is a React framework that provides server-side rendering (SSR), static site generation (SSG), API routes, and many other production-ready features."}),s.jsx(L,{title:"Next.js Overview",code:`# Create Next.js app
npx create-next-app@latest my-app

# Project structure
my-app/
├── app/                  # App directory (Next.js 13+)
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/
│   │   └── page.tsx     # About page
│   └── api/
│       └── route.ts     # API route
├── public/              # Static files
├── components/          # React components
└── package.json

// app/page.tsx - Server Component (default)
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
    </div>
  );
}

// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Page</h1>;
}

// app/layout.tsx - Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// Client Component (with 'use client')
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// Data fetching in Server Component
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return <div>{data.title}</div>;
}

// Dynamic routes: app/posts/[id]/page.tsx
export default function PostPage({ params }: { params: { id: string } }) {
  return <h1>Post {params.id}</h1>;
}

// API route: app/api/users/route.ts
export async function GET() {
  const users = await fetchUsers();
  return Response.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const user = await createUser(data);
  return Response.json(user);
}

// Key Next.js features:
// ✅ File-based routing
// ✅ Server-side rendering (SSR)
// ✅ Static site generation (SSG)
// ✅ API routes
// ✅ Image optimization
// ✅ Built-in CSS support
// ✅ TypeScript support
// ✅ Fast refresh

async function fetchUsers() { return []; }
async function createUser(data: any) { return data; }`})]}),s.jsx(A,{title:"Server-Side Rendering (SSR)",children:s.jsx(L,{title:"SSR vs SSG vs CSR",code:`// SSR - Server-Side Rendering
// Page is rendered on the server for each request
// app/ssr-page/page.tsx
export const dynamic = 'force-dynamic';

async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store' // Don't cache
  });
  return res.json();
}

export default async function SSRPage() {
  const data = await getData();
  return <div>{data.content}</div>;
}

// SSG - Static Site Generation
// Page is generated at build time
// app/ssg-page/page.tsx
async function getStaticData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function SSGPage() {
  const data = await getStaticData();
  return <div>{data.content}</div>;
}

// ISR - Incremental Static Regeneration
// Regenerate page after a specific interval
export const revalidate = 60; // Revalidate every 60 seconds

async function getISRData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function ISRPage() {
  const data = await getISRData();
  return <div>{data.content}</div>;
}

// CSR - Client-Side Rendering
// Traditional React rendering
'use client';

import { useState, useEffect } from 'react';

export default function CSRPage() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  if (!data) return <div>Loading...</div>;
  return <div>{data.content}</div>;
}

// When to use each:
// SSR: Dynamic content, user-specific data, SEO important
// SSG: Static content, blog posts, marketing pages
// ISR: Semi-static content that changes occasionally
// CSR: Highly interactive apps, dashboards, authenticated pages`})}),s.jsx(A,{title:"Continue Learning",children:s.jsxs(je,{type:"info",children:[s.jsx("strong",{children:"Recommended Next Steps:"}),s.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[s.jsx("li",{children:"Build real projects to solidify your knowledge"}),s.jsx("li",{children:"Explore React libraries: React Query, Zustand, Jotai"}),s.jsx("li",{children:"Learn testing: Jest, React Testing Library, Cypress"}),s.jsx("li",{children:"Study design patterns and architecture"}),s.jsx("li",{children:"Contribute to open-source React projects"}),s.jsx("li",{children:"Learn Next.js 14+ App Router in depth"}),s.jsx("li",{children:"Explore React Native for mobile development"}),s.jsx("li",{children:"Study performance optimization techniques"}),s.jsx("li",{children:"Learn GraphQL with Apollo Client"}),s.jsx("li",{children:"Practice building full-stack applications"})]})]})})]}),s.jsxs(je,{type:"success",children:[s.jsx("strong",{children:"Congratulations! 🎉"}),s.jsx("p",{className:"mt-2",children:"You've completed all 12 levels of the React.js Learning Hub! You now have comprehensive knowledge from React basics to production deployment and modern ecosystem tools. Keep building, keep learning, and keep coding!"})]})]})}function Ch(){return s.jsx(Am,{children:s.jsx(Rm,{children:s.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[s.jsx(sh,{}),s.jsxs("div",{className:"flex",children:[s.jsx(ih,{}),s.jsx("main",{className:"flex-1 ml-64 p-8 mt-16",children:s.jsxs(tm,{children:[s.jsx(Je,{path:"/",element:s.jsx(lh,{})}),s.jsx(Je,{path:"/level-1",element:s.jsx(uh,{})}),s.jsx(Je,{path:"/level-2",element:s.jsx(ch,{})}),s.jsx(Je,{path:"/level-3",element:s.jsx(dh,{})}),s.jsx(Je,{path:"/level-4",element:s.jsx(ph,{})}),s.jsx(Je,{path:"/level-5",element:s.jsx(fh,{})}),s.jsx(Je,{path:"/level-6",element:s.jsx(mh,{})}),s.jsx(Je,{path:"/level-7",element:s.jsx(hh,{})}),s.jsx(Je,{path:"/level-8",element:s.jsx(gh,{})}),s.jsx(Je,{path:"/level-9",element:s.jsx(vh,{})}),s.jsx(Je,{path:"/level-10",element:s.jsx(yh,{})}),s.jsx(Je,{path:"/level-11",element:s.jsx(xh,{})}),s.jsx(Je,{path:"/level-12",element:s.jsx(wh,{})}),s.jsx(Je,{path:"*",element:s.jsx(Zf,{to:"/",replace:!0})})]})})]})]})})})}nf.createRoot(document.getElementById("root")).render(s.jsx(Ch,{}));

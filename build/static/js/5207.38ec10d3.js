"use strict";(self.webpackChunkssv_front=self.webpackChunkssv_front||[]).push([[5207],{15207:function(e,n,t){t.d(n,{V:function(){return ce},Z:function(){return se}});var r=t(4942),o=t(1413),i=t(29439),a=t(71002),u=t(72791),c=t(84304),s=t(88834),f=t(81694),v=t.n(f),l=t(14937);function d(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}var p,m,Z,E=(p=(0,l.Z)(),m="undefined"!=typeof window?window:{},Z={animationend:d("Animation","AnimationEnd"),transitionend:d("Transition","TransitionEnd")},p&&("AnimationEvent"in m||delete Z.animationend.animation,"TransitionEvent"in m||delete Z.transitionend.transition),Z),y={};if((0,l.Z)()){var h=document.createElement("div");y=h.style}var k={};function L(e){if(k[e])return k[e];var n=E[e];if(n)for(var t=Object.keys(n),r=t.length,o=0;o<r;o+=1){var i=t[o];if(Object.prototype.hasOwnProperty.call(n,i)&&i in y)return k[e]=n[i],k[e]}return""}var b=L("animationend"),A=L("transitionend"),g=!(!b||!A),C=b||"animationend",w=A||"transitionend";function R(e,n){return e?"object"===(0,a.Z)(e)?e[n.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))]:"".concat(e,"-").concat(n):null}var S="none",P="appear",N="enter",O="leave",T="none",j="prepare",V="start",M="active",D="end",z=t(98368),F=t(75314),H=(0,l.Z)()?u.useLayoutEffect:u.useEffect,I=[j,V,M,D];function K(e){return e===M||e===D}function _(e,n,t,a){var c=a.motionEnter,s=void 0===c||c,f=a.motionAppear,v=void 0===f||f,l=a.motionLeave,d=void 0===l||l,p=a.motionDeadline,m=a.motionLeaveImmediately,Z=a.onAppearPrepare,E=a.onEnterPrepare,y=a.onLeavePrepare,h=a.onAppearStart,k=a.onEnterStart,L=a.onLeaveStart,b=a.onAppearActive,A=a.onEnterActive,g=a.onLeaveActive,R=a.onAppearEnd,_=a.onEnterEnd,x=a.onLeaveEnd,U=a.onVisibleChanged,W=(0,z.Z)(),Y=(0,i.Z)(W,2),q=Y[0],B=Y[1],G=(0,z.Z)(S),J=(0,i.Z)(G,2),Q=J[0],X=J[1],$=(0,z.Z)(null),ee=(0,i.Z)($,2),ne=ee[0],te=ee[1],re=(0,u.useRef)(!1),oe=(0,u.useRef)(null);function ie(){return t()}var ae=(0,u.useRef)(!1);function ue(e){var n=ie();if(!e||e.deadline||e.target===n){var t,r=ae.current;Q===P&&r?t=null==R?void 0:R(n,e):Q===N&&r?t=null==_?void 0:_(n,e):Q===O&&r&&(t=null==x?void 0:x(n,e)),Q!==S&&r&&!1!==t&&(X(S,!0),te(null,!0))}}var ce=function(e){var n=(0,u.useRef)(),t=(0,u.useRef)(e);t.current=e;var r=u.useCallback((function(e){t.current(e)}),[]);function o(e){e&&(e.removeEventListener(w,r),e.removeEventListener(C,r))}return u.useEffect((function(){return function(){o(n.current)}}),[]),[function(e){n.current&&n.current!==e&&o(n.current),e&&e!==n.current&&(e.addEventListener(w,r),e.addEventListener(C,r),n.current=e)},o]}(ue),se=(0,i.Z)(ce,1)[0],fe=u.useMemo((function(){var e,n,t;switch(Q){case P:return e={},(0,r.Z)(e,j,Z),(0,r.Z)(e,V,h),(0,r.Z)(e,M,b),e;case N:return n={},(0,r.Z)(n,j,E),(0,r.Z)(n,V,k),(0,r.Z)(n,M,A),n;case O:return t={},(0,r.Z)(t,j,y),(0,r.Z)(t,V,L),(0,r.Z)(t,M,g),t;default:return{}}}),[Q]),ve=function(e,n){var t=(0,z.Z)(T),r=(0,i.Z)(t,2),o=r[0],a=r[1],c=function(){var e=u.useRef(null);function n(){F.Z.cancel(e.current)}return u.useEffect((function(){return function(){n()}}),[]),[function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;n();var i=(0,F.Z)((function(){o<=1?r({isCanceled:function(){return i!==e.current}}):t(r,o-1)}));e.current=i},n]}(),s=(0,i.Z)(c,2),f=s[0],v=s[1];return H((function(){if(o!==T&&o!==D){var e=I.indexOf(o),t=I[e+1],r=n(o);!1===r?a(t,!0):f((function(e){function n(){e.isCanceled()||a(t,!0)}!0===r?n():Promise.resolve(r).then(n)}))}}),[e,o]),u.useEffect((function(){return function(){v()}}),[]),[function(){a(j,!0)},o]}(Q,(function(e){if(e===j){var n=fe.prepare;return!!n&&n(ie())}var t;return pe in fe&&te((null===(t=fe[pe])||void 0===t?void 0:t.call(fe,ie(),null))||null),pe===M&&(se(ie()),p>0&&(clearTimeout(oe.current),oe.current=setTimeout((function(){ue({deadline:!0})}),p))),!0})),le=(0,i.Z)(ve,2),de=le[0],pe=le[1],me=K(pe);ae.current=me,H((function(){B(n);var t,r=re.current;re.current=!0,e&&(!r&&n&&v&&(t=P),r&&n&&s&&(t=N),(r&&!n&&d||!r&&m&&!n&&d)&&(t=O),t&&(X(t),de()))}),[n]),(0,u.useEffect)((function(){(Q===P&&!v||Q===N&&!s||Q===O&&!d)&&X(S)}),[v,s,d]),(0,u.useEffect)((function(){return function(){re.current=!1,clearTimeout(oe.current)}}),[]);var Ze=u.useRef(!1);(0,u.useEffect)((function(){q&&(Ze.current=!0),void 0!==q&&Q===S&&((Ze.current||q)&&(null==U||U(q)),Ze.current=!0)}),[q,Q]);var Ee=ne;return fe.prepare&&pe===V&&(Ee=(0,o.Z)({transition:"none"},Ee)),[Q,pe,Ee,null!=q?q:n]}var x=t(15671),U=t(43144),W=t(60136),Y=t(27277),q=function(e){(0,W.Z)(t,e);var n=(0,Y.Z)(t);function t(){return(0,x.Z)(this,t),n.apply(this,arguments)}return(0,U.Z)(t,[{key:"render",value:function(){return this.props.children}}]),t}(u.Component),B=q,G=function(e){var n=e;function t(e){return!(!e.motionName||!n)}"object"===(0,a.Z)(e)&&(n=e.transitionSupport);var f=u.forwardRef((function(e,n){var a=e.visible,f=void 0===a||a,l=e.removeOnLeave,d=void 0===l||l,p=e.forceRender,m=e.children,Z=e.motionName,E=e.leavedClassName,y=e.eventProps,h=t(e),k=(0,u.useRef)(),L=(0,u.useRef)(),b=_(h,f,(function(){try{return k.current instanceof HTMLElement?k.current:(0,c.Z)(L.current)}catch(e){return null}}),e),A=(0,i.Z)(b,4),g=A[0],C=A[1],w=A[2],P=A[3],N=u.useRef(P);P&&(N.current=!0);var O,T=u.useCallback((function(e){k.current=e,(0,s.mH)(n,e)}),[n]),M=(0,o.Z)((0,o.Z)({},y),{},{visible:f});if(m)if(g!==S&&t(e)){var D,z;C===j?z="prepare":K(C)?z="active":C===V&&(z="start"),O=m((0,o.Z)((0,o.Z)({},M),{},{className:v()(R(Z,g),(D={},(0,r.Z)(D,R(Z,"".concat(g,"-").concat(z)),z),(0,r.Z)(D,Z,"string"==typeof Z),D)),style:w}),T)}else O=P?m((0,o.Z)({},M),T):!d&&N.current?m((0,o.Z)((0,o.Z)({},M),{},{className:E}),T):p?m((0,o.Z)((0,o.Z)({},M),{},{style:{display:"none"}}),T):null;else O=null;return u.isValidElement(O)&&(0,s.Yr)(O)&&(O.ref||(O=u.cloneElement(O,{ref:T}))),u.createElement(B,{ref:L},O)}));return f.displayName="CSSMotion",f}(g),J=t(87462),Q=t(44925),X="add",$="keep",ee="remove",ne="removed";function te(e){var n;return n=e&&"object"===(0,a.Z)(e)&&"key"in e?e:{key:e},(0,o.Z)((0,o.Z)({},n),{},{key:String(n.key)})}function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(te)}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],r=0,i=n.length,a=re(e),u=re(n);a.forEach((function(e){for(var n=!1,a=r;a<i;a+=1){var c=u[a];if(c.key===e.key){r<a&&(t=t.concat(u.slice(r,a).map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{status:X})}))),r=a),t.push((0,o.Z)((0,o.Z)({},c),{},{status:$})),r+=1,n=!0;break}}n||t.push((0,o.Z)((0,o.Z)({},e),{},{status:ee}))})),r<i&&(t=t.concat(u.slice(r).map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{status:X})}))));var c={};t.forEach((function(e){var n=e.key;c[n]=(c[n]||0)+1}));var s=Object.keys(c).filter((function(e){return c[e]>1}));return s.forEach((function(e){(t=t.filter((function(n){var t=n.key,r=n.status;return t!==e||r!==ee}))).forEach((function(n){n.key===e&&(n.status=$)}))})),t}var ie=["component","children","onVisibleChanged","onAllRemoved"],ae=["status"],ue=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"],ce=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G,t=function(e){(0,W.Z)(r,e);var t=(0,Y.Z)(r);function r(){var e;(0,x.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={keyEntities:[]},e.removeKey=function(n){var t=e.state.keyEntities.map((function(e){return e.key!==n?e:(0,o.Z)((0,o.Z)({},e),{},{status:ne})}));return e.setState({keyEntities:t}),t.filter((function(e){return e.status!==ne})).length},e}return(0,U.Z)(r,[{key:"render",value:function(){var e=this,t=this.state.keyEntities,r=this.props,o=r.component,i=r.children,a=r.onVisibleChanged,c=r.onAllRemoved,s=(0,Q.Z)(r,ie),f=o||u.Fragment,v={};return ue.forEach((function(e){v[e]=s[e],delete s[e]})),delete s.keys,u.createElement(f,s,t.map((function(t){var r=t.status,o=(0,Q.Z)(t,ae),s=r===X||r===$;return u.createElement(n,(0,J.Z)({},v,{key:o.key,visible:s,eventProps:o,onVisibleChanged:function(n){null==a||a(n,{key:o.key}),n||0===e.removeKey(o.key)&&c&&c()}}),i)})))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=e.keys,r=n.keyEntities,o=re(t);return{keyEntities:oe(r,o).filter((function(e){var n=r.find((function(n){var t=n.key;return e.key===t}));return!n||n.status!==ne||e.status!==ee}))}}}]),r}(u.Component);return t.defaultProps={component:"div"},t}(g),se=G}}]);
//# sourceMappingURL=5207.38ec10d3.js.map
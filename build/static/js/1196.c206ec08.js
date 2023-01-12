"use strict";(self.webpackChunkssv_front=self.webpackChunkssv_front||[]).push([[1196],{31196:function(e,t,n){n.d(t,{Z:function(){return F}});var r=n(87462),i=n(4942),a=n(71002),u=n(29439),o=n(44925),c=n(72791),s=n(81694),l=n.n(s),f=n(11354),d=n(71605),v=n(88834),m=n(15671),g=n(43144);function h(){return"function"==typeof BigInt}function N(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),(t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(t="0".concat(t));var r=t||"0",i=r.split("."),a=i[0]||"0",u=i[1]||"0";"0"===a&&"0"===u&&(n=!1);var o=n?"-":"";return{negative:n,negativeStr:o,trimStr:r,integerStr:a,decimalStr:u,fullStr:"".concat(o).concat(r)}}function p(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function S(e){var t=String(e);if(p(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return(null==r?void 0:r[1])&&(n+=r[1].length),n}return t.includes(".")&&y(t)?t.length-t.indexOf(".")-1:0}function b(e){var t=String(e);if(p(e)){if(e>Number.MAX_SAFE_INTEGER)return String(h()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(h()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(S(t))}return N(t).fullStr}function y(e){return"number"==typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}function E(e){var t="number"==typeof e?b(e):N(e).fullStr;return t.includes(".")?N(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var I=function(){function e(t){(0,m.Z)(this,e),this.origin="",this.number=void 0,this.empty=void 0,(t||0===t)&&String(t).trim()?(this.origin=String(t),this.number=Number(t)):this.empty=!0}return(0,g.Z)(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=Number(t);if(Number.isNaN(n))return this;var r=this.number+n;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var i=Math.max(S(this.number),S(n));return new e(r.toFixed(i))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null==e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?this.isInvalidate()?"":b(this.number):this.origin}}]),e}(),k=function(){function e(t){if((0,m.Z)(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,(t||0===t)&&String(t).trim())if(this.origin=String(t),"-"!==t){var n=t;if(p(n)&&(n=Number(n)),y(n="string"==typeof n?n:b(n))){var r=N(n);this.negative=r.negative;var i=r.trimStr.split(".");this.integer=BigInt(i[0]);var a=i[1]||"0";this.decimal=BigInt(a),this.decimalLen=a.length}else this.nan=!0}else this.nan=!0;else this.empty=!0}return(0,g.Z)(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var t="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(t)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=new e(t);if(n.isInvalidate())return this;var r=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),i=N((this.alignDecimal(r)+n.alignDecimal(r)).toString()),a=i.negativeStr,u=i.trimStr,o="".concat(a).concat(u.padStart(r+1,"0"));return new e("".concat(o.slice(0,-r),".").concat(o.slice(-r)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null==e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?this.isInvalidate()?"":N("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function w(e){return h()?new k(e):new I(e)}function Z(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var i=N(e),a=i.negativeStr,u=i.integerStr,o=i.decimalStr,c="".concat(t).concat(o),s="".concat(a).concat(u);if(n>=0){var l=Number(o[n]);if(l>=5&&!r){var f=w(e).add("".concat(a,"0.").concat("0".repeat(n)).concat(10-l));return Z(f.toString(),t,n,r)}return 0===n?s:"".concat(s).concat(t).concat(o.padEnd(n,"0").slice(0,n))}return".0"===c?s:"".concat(s).concat(c)}var M=n(33786);function x(e){var t=e.prefixCls,n=e.upNode,a=e.downNode,u=e.upDisabled,o=e.downDisabled,s=e.onStep,f=c.useRef(),d=c.useRef();d.current=s;var v=function(e,t){e.preventDefault(),d.current(t),f.current=setTimeout((function e(){d.current(t),f.current=setTimeout(e,200)}),600)},m=function(){clearTimeout(f.current)};if(c.useEffect((function(){return m}),[]),(0,M.Z)())return null;var g="".concat(t,"-handler"),h=l()(g,"".concat(g,"-up"),(0,i.Z)({},"".concat(g,"-up-disabled"),u)),N=l()(g,"".concat(g,"-down"),(0,i.Z)({},"".concat(g,"-down-disabled"),o)),p={unselectable:"on",role:"button",onMouseUp:m,onMouseLeave:m};return c.createElement("div",{className:"".concat(g,"-wrap")},c.createElement("span",(0,r.Z)({},p,{onMouseDown:function(e){v(e,!0)},"aria-label":"Increase Value","aria-disabled":u,className:h}),n||c.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),c.createElement("span",(0,r.Z)({},p,{onMouseDown:function(e){v(e,!1)},"aria-label":"Decrease Value","aria-disabled":o,className:N}),a||c.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}var R=n(60632),D=n(75314),T=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],_=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},C=function(e){var t=w(e);return t.isInvalidate()?null:t},A=c.forwardRef((function(e,t){var n,s=e.prefixCls,m=void 0===s?"rc-input-number":s,g=e.className,h=e.style,N=e.min,p=e.max,I=e.step,k=void 0===I?1:I,M=e.defaultValue,A=e.value,F=e.disabled,q=e.readOnly,G=e.upHandler,$=e.downHandler,B=e.keyboard,O=e.controls,P=void 0===O||O,W=e.stringMode,H=e.parser,L=e.formatter,U=e.precision,V=e.decimalSeparator,X=e.onChange,K=e.onInput,Q=e.onPressEnter,j=e.onStep,z=(0,o.Z)(e,T),J="".concat(m,"-input"),Y=c.useRef(null),ee=c.useState(!1),te=(0,u.Z)(ee,2),ne=te[0],re=te[1],ie=c.useRef(!1),ae=c.useRef(!1),ue=c.useRef(!1),oe=c.useState((function(){return w(null!=A?A:M)})),ce=(0,u.Z)(oe,2),se=ce[0],le=ce[1],fe=c.useCallback((function(e,t){if(!t)return U>=0?U:Math.max(S(e),S(k))}),[U,k]),de=c.useCallback((function(e){var t=String(e);if(H)return H(t);var n=t;return V&&(n=n.replace(V,".")),n.replace(/[^\w.-]+/g,"")}),[H,V]),ve=c.useRef(""),me=c.useCallback((function(e,t){if(L)return L(e,{userTyping:t,input:String(ve.current)});var n="number"==typeof e?b(e):e;if(!t){var r=fe(n,t);y(n)&&(V||r>=0)&&(n=Z(n,V||".",r))}return n}),[L,fe,V]),ge=c.useState((function(){var e=null!=M?M:A;return se.isInvalidate()&&["string","number"].includes((0,a.Z)(e))?Number.isNaN(e)?"":e:me(se.toString(),!1)})),he=(0,u.Z)(ge,2),Ne=he[0],pe=he[1];function Se(e,t){pe(me(e.isInvalidate()?e.toString(!1):e.toString(!t),t))}ve.current=Ne;var be,ye,Ee,Ie,ke,we=c.useMemo((function(){return C(p)}),[p,U]),Ze=c.useMemo((function(){return C(N)}),[N,U]),Me=c.useMemo((function(){return!(!we||!se||se.isInvalidate())&&we.lessEquals(se)}),[we,se]),xe=c.useMemo((function(){return!(!Ze||!se||se.isInvalidate())&&se.lessEquals(Ze)}),[Ze,se]),Re=(be=Y.current,ye=ne,Ee=(0,c.useRef)(null),[function(){try{var e=be.selectionStart,t=be.selectionEnd,n=be.value,r=n.substring(0,e),i=n.substring(t);Ee.current={start:e,end:t,value:n,beforeTxt:r,afterTxt:i}}catch(e){}},function(){if(be&&Ee.current&&ye)try{var e=be.value,t=Ee.current,n=t.beforeTxt,r=t.afterTxt,i=t.start,a=e.length;if(e.endsWith(r))a=e.length-Ee.current.afterTxt.length;else if(e.startsWith(n))a=n.length;else{var u=n[i-1],o=e.indexOf(u,i-1);-1!==o&&(a=o+1)}be.setSelectionRange(a,a)}catch(e){(0,R.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(e.message))}}]),De=(0,u.Z)(Re,2),Te=De[0],_e=De[1],Ce=function(e){return we&&!e.lessEquals(we)?we:Ze&&!Ze.lessEquals(e)?Ze:null},Ae=function(e){return!Ce(e)},Fe=function(e,t){var n=e,r=Ae(n)||n.isEmpty();if(n.isEmpty()||t||(n=Ce(n)||n,r=!0),!q&&!F&&r){var i=n.toString(),a=fe(i,t);return a>=0&&(n=w(Z(i,".",a)),Ae(n)||(n=w(Z(i,".",a,!0)))),n.equals(se)||(void 0===A&&le(n),null==X||X(n.isEmpty()?null:_(W,n)),void 0===A&&Se(n,t)),n}return se},qe=(Ie=(0,c.useRef)(0),ke=function(){D.Z.cancel(Ie.current)},(0,c.useEffect)((function(){return ke}),[]),function(e){ke(),Ie.current=(0,D.Z)((function(){e()}))}),Ge=function e(t){if(Te(),pe(t),!ae.current){var n=w(de(t));n.isNaN()||Fe(n,!0)}null==K||K(t),qe((function(){var n=t;H||(n=t.replace(/。/g,".")),n!==t&&e(n)}))},$e=function(e){var t;if(!(e&&Me||!e&&xe)){ie.current=!1;var n=w(ue.current?E(k):k);e||(n=n.negate());var r=(se||w(0)).add(n.toString()),i=Fe(r,!1);null==j||j(_(W,i),{offset:ue.current?E(k):k,type:e?"up":"down"}),null===(t=Y.current)||void 0===t||t.focus()}},Be=function(e){var t=w(de(Ne)),n=t;n=t.isNaN()?se:Fe(t,e),void 0!==A?Se(se,!1):n.isNaN()||Se(n,!1)};return(0,d.o)((function(){se.isInvalidate()||Se(se,!1)}),[U]),(0,d.o)((function(){var e=w(A);le(e);var t=w(de(Ne));e.equals(t)&&ie.current&&!L||Se(e,ie.current)}),[A]),(0,d.o)((function(){L&&_e()}),[Ne]),c.createElement("div",{className:l()(m,g,(n={},(0,i.Z)(n,"".concat(m,"-focused"),ne),(0,i.Z)(n,"".concat(m,"-disabled"),F),(0,i.Z)(n,"".concat(m,"-readonly"),q),(0,i.Z)(n,"".concat(m,"-not-a-number"),se.isNaN()),(0,i.Z)(n,"".concat(m,"-out-of-range"),!se.isInvalidate()&&!Ae(se)),n)),style:h,onFocus:function(){re(!0)},onBlur:function(){Be(!1),re(!1),ie.current=!1},onKeyDown:function(e){var t=e.which,n=e.shiftKey;ie.current=!0,ue.current=!!n,t===f.Z.ENTER&&(ae.current||(ie.current=!1),Be(!1),null==Q||Q(e)),!1!==B&&!ae.current&&[f.Z.UP,f.Z.DOWN].includes(t)&&($e(f.Z.UP===t),e.preventDefault())},onKeyUp:function(){ie.current=!1,ue.current=!1},onCompositionStart:function(){ae.current=!0},onCompositionEnd:function(){ae.current=!1,Ge(Y.current.value)}},P&&c.createElement(x,{prefixCls:m,upNode:G,downNode:$,upDisabled:Me,downDisabled:xe,onStep:$e}),c.createElement("div",{className:"".concat(J,"-wrap")},c.createElement("input",(0,r.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":N,"aria-valuemax":p,"aria-valuenow":se.isInvalidate()?null:se.toString(),step:k},z,{ref:(0,v.sQ)(Y,t),className:J,value:Ne,onChange:function(e){Ge(e.target.value)},disabled:F,readOnly:q}))))}));A.displayName="InputNumber";var F=A}}]);
//# sourceMappingURL=1196.c206ec08.js.map
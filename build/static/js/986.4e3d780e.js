"use strict";(self.webpackChunkssv_front=self.webpackChunkssv_front||[]).push([[986],{90986:function(e,n,o){o.d(n,{E:function(){return N}});var t=o(71002),r=o(87462),a=o(4942),l=o(93433),c=o(29439),u=o(1413),i=o(44925),s=o(72791),d=o(81694),p=o.n(d),f=o(11354),v=o(33786),m=o(88834),h=o(49841),g=o(71605),w=o(46493),b=o(45230),y=o(76607),Z=o(46585),E=o(96686),C=o(66922),S=o(86250),x=o(38760),D=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],I=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function N(e){return"tags"===e||"multiple"===e}var R=s.forwardRef((function(e,n){var o,d,R=e.id,V=e.prefixCls,A=e.className,P=e.showSearch,M=e.tagRender,T=e.direction,O=e.omitDomProps,K=e.displayValues,k=e.onDisplayValuesChange,F=e.emptyOptions,W=e.notFoundContent,z=void 0===W?"Not Found":W,B=e.onClear,U=e.mode,L=e.disabled,_=e.loading,j=e.getInputElement,H=e.getRawInputElement,q=e.open,G=e.defaultOpen,J=e.onDropdownVisibleChange,Q=e.activeValue,X=e.onActiveValueChange,Y=e.activeDescendantId,$=e.searchValue,ee=e.onSearch,ne=e.onSearchSplit,oe=e.tokenSeparators,te=e.allowClear,re=e.showArrow,ae=e.inputIcon,le=e.clearIcon,ce=e.OptionList,ue=e.animation,ie=e.transitionName,se=e.dropdownStyle,de=e.dropdownClassName,pe=e.dropdownMatchSelectWidth,fe=e.dropdownRender,ve=e.dropdownAlign,me=e.placement,he=e.getPopupContainer,ge=e.showAction,we=void 0===ge?[]:ge,be=e.onFocus,ye=e.onBlur,Ze=e.onKeyUp,Ee=e.onKeyDown,Ce=e.onMouseDown,Se=(0,i.Z)(e,D),xe=N(U),De=(void 0!==P?P:xe)||"combobox"===U,Ie=(0,u.Z)({},Se);I.forEach((function(e){delete Ie[e]})),null==O||O.forEach((function(e){delete Ie[e]}));var Ne=s.useState(!1),Re=(0,c.Z)(Ne,2),Ve=Re[0],Ae=Re[1];s.useEffect((function(){Ae((0,v.Z)())}),[]);var Pe=s.useRef(null),Me=s.useRef(null),Te=s.useRef(null),Oe=s.useRef(null),Ke=s.useRef(null),ke=(0,E.Z)(),Fe=(0,c.Z)(ke,3),We=Fe[0],ze=Fe[1],Be=Fe[2];s.useImperativeHandle(n,(function(){var e,n;return{focus:null===(e=Oe.current)||void 0===e?void 0:e.focus,blur:null===(n=Oe.current)||void 0===n?void 0:n.blur,scrollTo:function(e){var n;return null===(n=Ke.current)||void 0===n?void 0:n.scrollTo(e)}}}));var Ue=s.useMemo((function(){var e;if("combobox"!==U)return $;var n=null===(e=K[0])||void 0===e?void 0:e.value;return"string"==typeof n||"number"==typeof n?String(n):""}),[$,U,K]),Le="combobox"===U&&"function"==typeof j&&j()||null,_e="function"==typeof H&&H(),je=(0,m.x1)(Me,null==_e||null===(o=_e.props)||void 0===o?void 0:o.ref),He=(0,h.Z)(void 0,{defaultValue:G,value:q}),qe=(0,c.Z)(He,2),Ge=qe[0],Je=qe[1],Qe=Ge,Xe=!z&&F;(L||Xe&&Qe&&"combobox"===U)&&(Qe=!1);var Ye=!Xe&&Qe,$e=s.useCallback((function(e){var n=void 0!==e?e:!Qe;Qe===n||L||(Je(n),null==J||J(n))}),[L,Qe,Je,J]),en=s.useMemo((function(){return(oe||[]).some((function(e){return["\n","\r\n"].includes(e)}))}),[oe]),nn=function(e,n,o){var t=!0,r=e;null==X||X(null);var a=o?null:(0,w.tE)(e,oe);return"combobox"!==U&&a&&(r="",null==ne||ne(a),$e(!1),t=!1),ee&&Ue!==r&&ee(r,{source:n?"typing":"effect"}),t};s.useEffect((function(){Qe||xe||"combobox"===U||nn("",!1,!1)}),[Qe]),s.useEffect((function(){Ge&&L&&Je(!1),L&&ze(!1)}),[L]);var on=(0,S.Z)(),tn=(0,c.Z)(on,2),rn=tn[0],an=tn[1],ln=s.useRef(!1),cn=[];s.useEffect((function(){return function(){cn.forEach((function(e){return clearTimeout(e)})),cn.splice(0,cn.length)}}),[]);var un,sn=s.useState(null),dn=(0,c.Z)(sn,2),pn=dn[0],fn=dn[1],vn=s.useState({}),mn=(0,c.Z)(vn,2)[1];(0,g.Z)((function(){if(Ye){var e,n=Math.ceil(null===(e=Pe.current)||void 0===e?void 0:e.offsetWidth);pn===n||Number.isNaN(n)||fn(n)}}),[Ye]),_e&&(un=function(e){$e(e)}),(0,Z.Z)((function(){var e;return[Pe.current,null===(e=Te.current)||void 0===e?void 0:e.getPopupElement()]}),Ye,$e,!!_e);var hn,gn,wn=s.useMemo((function(){return(0,u.Z)((0,u.Z)({},e),{},{notFoundContent:z,open:Qe,triggerOpen:Ye,id:R,showSearch:De,multiple:xe,toggleOpen:$e})}),[e,z,Ye,Qe,R,De,xe,$e]),bn=void 0!==re?re:_||!xe&&"combobox"!==U;bn&&(hn=s.createElement(C.Z,{className:p()("".concat(V,"-arrow"),(0,a.Z)({},"".concat(V,"-arrow-loading"),_)),customizeIcon:ae,customizeIconProps:{loading:_,searchValue:Ue,open:Qe,focused:We,showSearch:De}})),L||!te||!K.length&&!Ue||"combobox"===U&&""===Ue||(gn=s.createElement(C.Z,{className:"".concat(V,"-clear"),onMouseDown:function(){null==B||B(),k([],{type:"clear",values:K}),nn("",!1,!1)},customizeIcon:le},"×"));var yn,Zn=s.createElement(ce,{ref:Ke}),En=p()(V,A,(d={},(0,a.Z)(d,"".concat(V,"-focused"),We),(0,a.Z)(d,"".concat(V,"-multiple"),xe),(0,a.Z)(d,"".concat(V,"-single"),!xe),(0,a.Z)(d,"".concat(V,"-allow-clear"),te),(0,a.Z)(d,"".concat(V,"-show-arrow"),bn),(0,a.Z)(d,"".concat(V,"-disabled"),L),(0,a.Z)(d,"".concat(V,"-loading"),_),(0,a.Z)(d,"".concat(V,"-open"),Qe),(0,a.Z)(d,"".concat(V,"-customize-input"),Le),(0,a.Z)(d,"".concat(V,"-show-search"),De),d)),Cn=s.createElement(b.Z,{ref:Te,disabled:L,prefixCls:V,visible:Ye,popupElement:Zn,containerWidth:pn,animation:ue,transitionName:ie,dropdownStyle:se,dropdownClassName:de,direction:T,dropdownMatchSelectWidth:pe,dropdownRender:fe,dropdownAlign:ve,placement:me,getPopupContainer:he,empty:F,getTriggerDOMNode:function(){return Me.current},onPopupVisibleChange:un,onPopupMouseEnter:function(){mn({})}},_e?s.cloneElement(_e,{ref:je}):s.createElement(y.Z,(0,r.Z)({},e,{domRef:Me,prefixCls:V,inputElement:Le,ref:Oe,id:R,showSearch:De,mode:U,activeDescendantId:Y,tagRender:M,values:K,open:Qe,onToggleOpen:$e,activeValue:Q,searchValue:Ue,onSearch:nn,onSearchSubmit:function(e){e&&e.trim()&&ee(e,{source:"submit"})},onRemove:function(e){var n=K.filter((function(n){return n!==e}));k(n,{type:"remove",values:[e]})},tokenWithEnter:en})));return yn=_e?Cn:s.createElement("div",(0,r.Z)({className:En},Ie,{ref:Pe,onMouseDown:function(e){var n,o=e.target,t=null===(n=Te.current)||void 0===n?void 0:n.getPopupElement();if(t&&t.contains(o)){var r=setTimeout((function(){var e,n=cn.indexOf(r);-1!==n&&cn.splice(n,1),Be(),Ve||t.contains(document.activeElement)||null===(e=Oe.current)||void 0===e||e.focus()}));cn.push(r)}for(var a=arguments.length,l=new Array(a>1?a-1:0),c=1;c<a;c++)l[c-1]=arguments[c];null==Ce||Ce.apply(void 0,[e].concat(l))},onKeyDown:function(e){var n,o=rn(),t=e.which;if(t===f.Z.ENTER&&("combobox"!==U&&e.preventDefault(),Qe||$e(!0)),an(!!Ue),t===f.Z.BACKSPACE&&!o&&xe&&!Ue&&K.length){for(var r=(0,l.Z)(K),a=null,c=r.length-1;c>=0;c-=1){var u=r[c];if(!u.disabled){r.splice(c,1),a=u;break}}a&&k(r,{type:"remove",values:[a]})}for(var i=arguments.length,s=new Array(i>1?i-1:0),d=1;d<i;d++)s[d-1]=arguments[d];Qe&&Ke.current&&(n=Ke.current).onKeyDown.apply(n,[e].concat(s)),null==Ee||Ee.apply(void 0,[e].concat(s))},onKeyUp:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),t=1;t<n;t++)o[t-1]=arguments[t];var r;Qe&&Ke.current&&(r=Ke.current).onKeyUp.apply(r,[e].concat(o)),null==Ze||Ze.apply(void 0,[e].concat(o))},onFocus:function(){ze(!0),L||(be&&!ln.current&&be.apply(void 0,arguments),we.includes("focus")&&$e(!0)),ln.current=!0},onBlur:function(){ze(!1,(function(){ln.current=!1,$e(!1)})),L||(Ue&&("tags"===U?ee(Ue,{source:"submit"}):"multiple"===U&&ee("",{source:"blur"})),ye&&ye.apply(void 0,arguments))}}),We&&!Qe&&s.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(K.map((function(e){var n=e.label,o=e.value;return["number","string"].includes((0,t.Z)(n))?n:o})).join(", "))),Cn,hn,gn),s.createElement(x.r.Provider,{value:wn},yn)}));n.Z=R}}]);
//# sourceMappingURL=986.4e3d780e.js.map
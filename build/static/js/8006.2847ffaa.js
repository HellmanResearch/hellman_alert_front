"use strict";(self.webpackChunkssv_front=self.webpackChunkssv_front||[]).push([[8006],{88926:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(87462),r=n(4942),a=n(15671),i=n(43144),s=n(60136),c=n(27277),l=n(72791),u=n(54164),f=n(81694),p=n.n(f),d=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).closeTimer=null,e.close=function(t){t&&t.stopPropagation(),e.clearCloseTimer();var n=e.props,o=n.onClose,r=n.noticeKey;o&&o(r)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout((function(){e.close()}),1e3*e.props.duration))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.updateMark!==e.updateMark||this.props.visible!==e.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,i=t.closable,s=t.closeIcon,c=t.style,f=t.onClick,d=t.children,m=t.holder,v="".concat(n,"-notice"),h=Object.keys(this.props).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||(t[n]=e.props[n]),t}),{}),k=l.createElement("div",(0,o.Z)({className:p()(v,a,(0,r.Z)({},"".concat(v,"-closable"),i)),style:c,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:f},h),l.createElement("div",{className:"".concat(v,"-content")},d),i?l.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(v,"-close")},s||l.createElement("span",{className:"".concat(v,"-close-x")})):null);return m?u.createPortal(k,m):k}}]),n}(l.Component);d.defaultProps={onClose:function(){},duration:1.5}},4703:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var o=n(44925),r=n(87462),a=n(1413),i=n(15671),s=n(43144),c=n(60136),l=n(27277),u=n(72791),f=n(14699),p=n(81694),d=n.n(p),m=n(15207),v=n(88926),h=n(5081),k=["getContainer"],y=0,C=Date.now();function T(){var e=y;return y+=1,"rcNotification_".concat(C,"_").concat(e)}var b=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={notices:[]},e.hookRefs=new Map,e.add=function(t,n){var o=t.key||T(),r=(0,a.Z)((0,a.Z)({},t),{},{key:o}),i=e.props.maxCount;e.setState((function(e){var t=e.notices,a=t.map((function(e){return e.notice.key})).indexOf(o),s=t.concat();return-1!==a?s.splice(a,1,{notice:r,holderCallback:n}):(i&&t.length>=i&&(r.key=s[0].notice.key,r.updateMark=T(),r.userPassKey=o,s.shift()),s.push({notice:r,holderCallback:n})),{notices:s}}))},e.remove=function(t){e.setState((function(e){return{notices:e.notices.filter((function(e){var n=e.notice,o=n.key;return(n.userPassKey||o)!==t}))}}))},e.noticePropsMap={},e}return(0,s.Z)(n,[{key:"getTransitionName",value:function(){var e=this.props,t=e.prefixCls,n=e.animation,o=this.props.transitionName;return!o&&n&&(o="".concat(t,"-").concat(n)),o}},{key:"render",value:function(){var e=this,t=this.state.notices,n=this.props,o=n.prefixCls,i=n.className,s=n.closeIcon,c=n.style,l=[];return t.forEach((function(n,r){var i=n.notice,c=n.holderCallback,u=r===t.length-1?i.updateMark:void 0,f=i.key,p=i.userPassKey,d=(0,a.Z)((0,a.Z)((0,a.Z)({prefixCls:o,closeIcon:s},i),i.props),{},{key:f,noticeKey:p||f,updateMark:u,onClose:function(t){var n;e.remove(t),null===(n=i.onClose)||void 0===n||n.call(i)},onClick:i.onClick,children:i.content});l.push(f),e.noticePropsMap[f]={props:d,holderCallback:c}})),u.createElement("div",{className:d()(o,i),style:c},u.createElement(m.V,{keys:l,motionName:this.getTransitionName(),onVisibleChanged:function(t,n){var o=n.key;t||delete e.noticePropsMap[o]}},(function(t){var n=t.key,i=t.className,s=t.style,c=t.visible,l=e.noticePropsMap[n],f=l.props,p=l.holderCallback;return p?u.createElement("div",{key:n,className:d()(i,"".concat(o,"-hook-holder")),style:(0,a.Z)({},s),ref:function(t){void 0!==n&&(t?(e.hookRefs.set(n,t),p(t,f)):e.hookRefs.delete(n))}}):u.createElement(v.Z,(0,r.Z)({},f,{className:d()(i,null==f?void 0:f.className),style:(0,a.Z)((0,a.Z)({},s),null==f?void 0:f.style),visible:c}))})))}}]),n}(u.Component);b.newInstance=void 0,b.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},b.newInstance=function(e,t){var n=e||{},a=n.getContainer,i=(0,o.Z)(n,k),s=document.createElement("div");a?a().appendChild(s):document.body.appendChild(s);var c=!1;(0,f.s)(u.createElement(b,(0,r.Z)({},i,{ref:function(e){c||(c=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){(0,f.v)(s),s.parentNode&&s.parentNode.removeChild(s)},useNotification:function(){return(0,h.Z)(e)}}))}})),s)};var Z=b},5081:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(93433),r=n(87462),a=n(29439),i=n(72791),s=n(88926);function c(e){var t=i.useRef({}),n=i.useState([]),c=(0,a.Z)(n,2),l=c[0],u=c[1];return[function(n){var a=!0;e.add(n,(function(e,n){var c=n.key;if(e&&(!t.current[c]||a)){var l=i.createElement(s.Z,(0,r.Z)({},n,{holder:e}));t.current[c]=l,u((function(e){var t=e.findIndex((function(e){return e.key===n.key}));if(-1===t)return[].concat((0,o.Z)(e),[l]);var r=(0,o.Z)(e);return r[t]=l,r}))}a=!1}))},i.createElement(i.Fragment,null,l)]}},55842:function(e,t,n){var o=n(75263),r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(10434)),i=r(n(38416)),s=r(n(56690)),c=r(n(89728)),l=r(n(61655)),u=r(n(26389)),f=o(n(72791)),p=r(n(54164)),d=r(n(81694)),m=function(e){(0,l.default)(n,e);var t=(0,u.default)(n);function n(){var e;(0,s.default)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).closeTimer=null,e.close=function(t){t&&t.stopPropagation(),e.clearCloseTimer();var n=e.props,o=n.onClose,r=n.noticeKey;o&&o(r)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout((function(){e.close()}),1e3*e.props.duration))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return(0,c.default)(n,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.updateMark!==e.updateMark||this.props.visible!==e.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,o=t.className,r=t.closable,s=t.closeIcon,c=t.style,l=t.onClick,u=t.children,m=t.holder,v="".concat(n,"-notice"),h=Object.keys(this.props).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||(t[n]=e.props[n]),t}),{}),k=f.createElement("div",(0,a.default)({className:(0,d.default)(v,o,(0,i.default)({},"".concat(v,"-closable"),r)),style:c,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:l},h),f.createElement("div",{className:"".concat(v,"-content")},u),r?f.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(v,"-close")},s||f.createElement("span",{className:"".concat(v,"-close-x")})):null);return m?p.default.createPortal(k,m):k}}]),n}(f.Component);t.default=m,m.defaultProps={onClose:function(){},duration:1.5}},5400:function(e,t,n){var o=n(75263),r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=c.useRef({}),n=c.useState([]),o=(0,s.default)(n,2),r=o[0],u=o[1];return[function(n){var o=!0;e.add(n,(function(e,n){var r=n.key;if(e&&(!t.current[r]||o)){var s=c.createElement(l.default,(0,i.default)({},n,{holder:e}));t.current[r]=s,u((function(e){var t=e.findIndex((function(e){return e.key===n.key}));if(-1===t)return[].concat((0,a.default)(e),[s]);var o=(0,a.default)(e);return o[t]=s,o}))}o=!1}))},c.createElement(c.Fragment,null,r)]};var a=r(n(861)),i=r(n(10434)),s=r(n(27424)),c=o(n(72791)),l=r(n(55842))}}]);
//# sourceMappingURL=8006.2847ffaa.js.map
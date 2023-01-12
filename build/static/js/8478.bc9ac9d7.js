"use strict";(self.webpackChunkssv_front=self.webpackChunkssv_front||[]).push([[8478],{98478:function(t,e,r){var o=r(43497),n=r(76884),i=r(75784),s=r(5568),a=r(85363),h=r(43100),u=r(20857),p=r(97057),l="silent";function c(){h.sT(this.event)}var g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handler=null,e}return(0,o.ZT)(e,t),e.prototype.dispose=function(){},e.prototype.setCursor=function(){},e}(a.Z),f=function(t,e){this.x=t,this.y=e},v=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],d=new p.Z(0,0,0,0),y=function(t){function e(e,r,o,n,i){var a=t.call(this)||this;return a._hovered=new f(0,0),a.storage=e,a.painter=r,a.painterRoot=n,a._pointerSize=i,o=o||new g,a.proxy=null,a.setHandlerProxy(o),a._draggingMgr=new s.Z(a),a}return(0,o.ZT)(e,t),e.prototype.setHandlerProxy=function(t){this.proxy&&this.proxy.dispose(),t&&(n.S6(v,(function(e){t.on&&t.on(e,this[e],this)}),this),t.handler=this),this.proxy=t},e.prototype.mousemove=function(t){var e=t.zrX,r=t.zrY,o=w(this,e,r),n=this._hovered,i=n.target;i&&!i.__zr&&(i=(n=this.findHover(n.x,n.y)).target);var s=this._hovered=o?new f(e,r):this.findHover(e,r),a=s.target,h=this.proxy;h.setCursor&&h.setCursor(a?a.cursor:"default"),i&&a!==i&&this.dispatchToElement(n,"mouseout",t),this.dispatchToElement(s,"mousemove",t),a&&a!==i&&this.dispatchToElement(s,"mouseover",t)},e.prototype.mouseout=function(t){var e=t.zrEventControl;"only_globalout"!==e&&this.dispatchToElement(this._hovered,"mouseout",t),"no_globalout"!==e&&this.trigger("globalout",{type:"globalout",event:t})},e.prototype.resize=function(){this._hovered=new f(0,0)},e.prototype.dispatch=function(t,e){var r=this[t];r&&r.call(this,e)},e.prototype.dispose=function(){this.proxy.dispose(),this.storage=null,this.proxy=null,this.painter=null},e.prototype.setCursorStyle=function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},e.prototype.dispatchToElement=function(t,e,r){var o=(t=t||{}).target;if(!o||!o.silent){for(var n="on"+e,i=function(t,e,r){return{type:t,event:r,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:r.zrX,offsetY:r.zrY,gestureEvent:r.gestureEvent,pinchX:r.pinchX,pinchY:r.pinchY,pinchScale:r.pinchScale,wheelDelta:r.zrDelta,zrByTouch:r.zrByTouch,which:r.which,stop:c}}(e,t,r);o&&(o[n]&&(i.cancelBubble=!!o[n].call(o,i)),o.trigger(e,i),o=o.__hostTarget?o.__hostTarget:o.parent,!i.cancelBubble););i.cancelBubble||(this.trigger(e,i),this.painter&&this.painter.eachOtherLayer&&this.painter.eachOtherLayer((function(t){"function"==typeof t[n]&&t[n].call(t,i),t.trigger&&t.trigger(e,i)})))}},e.prototype.findHover=function(t,e,r){var o=this.storage.getDisplayList(),n=new f(t,e);if(_(o,n,t,e,r),this._pointerSize&&!n.target){for(var i=[],s=this._pointerSize,a=s/2,h=new p.Z(t-a,e-a,s,s),u=o.length-1;u>=0;u--){var l=o[u];l===r||l.ignore||l.ignoreCoarsePointer||l.parent&&l.parent.ignoreCoarsePointer||(d.copy(l.getBoundingRect()),l.transform&&d.applyTransform(l.transform),d.intersect(h)&&i.push(l))}if(i.length)for(var c=Math.PI/12,g=2*Math.PI,v=0;v<a;v+=4)for(var y=0;y<g;y+=c)if(_(i,n,t+v*Math.cos(y),e+v*Math.sin(y),r),n.target)return n}return n},e.prototype.processGesture=function(t,e){this._gestureMgr||(this._gestureMgr=new u.y);var r=this._gestureMgr;"start"===e&&r.clear();var o=r.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom);if("end"===e&&r.clear(),o){var n=o.type;t.gestureEvent=n;var i=new f;i.target=o.target,this.dispatchToElement(i,n,o.event)}},e}(a.Z);function m(t,e,r){if(t[t.rectHover?"rectContain":"contain"](e,r)){for(var o=t,n=void 0,i=!1;o;){if(o.ignoreClip&&(i=!0),!i){var s=o.getClipPath();if(s&&!s.contain(e,r))return!1;o.silent&&(n=!0)}o=o.__hostTarget||o.parent}return!n||l}return!1}function _(t,e,r,o,n){for(var i=t.length-1;i>=0;i--){var s=t[i],a=void 0;if(s!==n&&!s.ignore&&(a=m(s,r,o))&&(!e.topTarget&&(e.topTarget=s),a!==l)){e.target=s;break}}}function w(t,e,r){var o=t.painter;return e<0||e>o.getWidth()||r<0||r>o.getHeight()}n.S6(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],(function(t){y.prototype[t]=function(e){var r,o,n=e.zrX,s=e.zrY,a=w(this,n,s);if("mouseup"===t&&a||(o=(r=this.findHover(n,s)).target),"mousedown"===t)this._downEl=o,this._downPoint=[e.zrX,e.zrY],this._upEl=o;else if("mouseup"===t)this._upEl=o;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||i.TK(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(r,t,e)}})),e.Z=y}}]);
//# sourceMappingURL=8478.bc9ac9d7.js.map
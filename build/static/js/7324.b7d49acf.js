"use strict";(self.webpackChunkssv_front=self.webpackChunkssv_front||[]).push([[7324],{57324:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(76884),l=n(94060),o=n(75671),r=n(56114),s=n(52620),a=Math.PI;function h(e,t){t=t||{},i.ce(t,{text:"loading",textColor:"#000",fontSize:12,fontWeight:"normal",fontStyle:"normal",fontFamily:"sans-serif",maskColor:"rgba(255, 255, 255, 0.8)",showSpinner:!0,color:"#5470c6",spinnerRadius:10,lineWidth:5,zlevel:0});var n=new l.Z,h=new o.Z({style:{fill:t.maskColor},zlevel:t.zlevel,z:1e4});n.add(h);var d,f=new r.ZP({style:{text:t.text,fill:t.textColor,fontSize:t.fontSize,fontWeight:t.fontWeight,fontStyle:t.fontStyle,fontFamily:t.fontFamily},zlevel:t.zlevel,z:10001}),g=new o.Z({style:{fill:"none"},textContent:f,textConfig:{position:"right",distance:10},zlevel:t.zlevel,z:10001});return n.add(g),t.showSpinner&&((d=new s.Z({shape:{startAngle:-a/2,endAngle:-a/2+.1,r:t.spinnerRadius},style:{stroke:t.color,lineCap:"round",lineWidth:t.lineWidth},zlevel:t.zlevel,z:10001})).animateShape(!0).when(1e3,{endAngle:3*a/2}).start("circularInOut"),d.animateShape(!0).when(1e3,{startAngle:3*a/2}).delay(300).start("circularInOut"),n.add(d)),n.resize=function(){var n=f.getBoundingRect().width,i=t.showSpinner?t.spinnerRadius:0,l=(e.getWidth()-2*i-(t.showSpinner&&n?10:0)-n)/2-(t.showSpinner&&n?0:5+n/2)+(t.showSpinner?0:n/2)+(n?0:i),o=e.getHeight()/2;t.showSpinner&&d.setShape({cx:l,cy:o}),g.setShape({x:l-i,y:o-i,width:2*i,height:2*i}),h.setShape({x:0,y:0,width:e.getWidth(),height:e.getHeight()})},n.resize(),n}}}]);
//# sourceMappingURL=7324.b7d49acf.js.map
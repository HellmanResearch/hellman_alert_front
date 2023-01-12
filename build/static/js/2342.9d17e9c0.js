"use strict";(self.webpackChunkssv_front=self.webpackChunkssv_front||[]).push([[2342],{52342:function(t,e,a){a.d(e,{N:function(){return z}});var n=a(48609),o=a(14846),i=a(65737),r=a(75671),l=a(52320),u=a(60886),s=a(52037),d=a(8943),c=a(37890),y=a(76884),g=function(){this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.cpx1=0,this.cpy1=0,this.cpx2=0,this.cpy2=0,this.extent=0},h=function(t){function e(e){return t.call(this,e)||this}return(0,n.ZT)(e,t),e.prototype.getDefaultShape=function(){return new g},e.prototype.buildPath=function(t,e){var a=e.extent;t.moveTo(e.x1,e.y1),t.bezierCurveTo(e.cpx1,e.cpy1,e.cpx2,e.cpy2,e.x2,e.y2),"vertical"===e.orient?(t.lineTo(e.x2+a,e.y2),t.bezierCurveTo(e.cpx2+a,e.cpy2,e.cpx1+a,e.cpy1,e.x1+a,e.y1)):(t.lineTo(e.x2,e.y2+a),t.bezierCurveTo(e.cpx2,e.cpy2+a,e.cpx1,e.cpy1+a,e.x1,e.y1+a)),t.closePath()},e.prototype.highlight=function(){(0,u.fD)(this)},e.prototype.downplay=function(){(0,u.Mh)(this)},e}(o.ZP),f=function(t){function e(){var a=null!==t&&t.apply(this,arguments)||this;return a.type=e.type,a._focusAdjacencyDisabled=!1,a}return(0,n.ZT)(e,t),e.prototype.render=function(t,e,a){var n=this,o=t.getGraph(),s=this.group,g=t.layoutInfo,f=g.width,p=g.height,v=t.getData(),x=t.getData("edge"),L=t.get("orient");this._model=t,s.removeAll(),s.x=g.x,s.y=g.y,o.eachEdge((function(e){var a=new h,n=(0,c.A)(a);n.dataIndex=e.dataIndex,n.seriesIndex=t.seriesIndex,n.dataType="edge";var o,r,l,d,g,v,m,S,I=e.getModel(),E=I.getModel("lineStyle"),b=E.get("curveness"),w=e.node1.getLayout(),M=e.node1.getModel(),D=M.get("localX"),V=M.get("localY"),k=e.node2.getLayout(),T=e.node2.getModel(),N=T.get("localX"),A=T.get("localY"),G=e.getLayout();switch(a.shape.extent=Math.max(1,G.dy),a.shape.orient=L,"vertical"===L?(o=(null!=D?D*f:w.x)+G.sy,r=(null!=V?V*p:w.y)+w.dy,l=(null!=N?N*f:k.x)+G.ty,g=o,v=r*(1-b)+(d=null!=A?A*p:k.y)*b,m=l,S=r*b+d*(1-b)):(o=(null!=D?D*f:w.x)+w.dx,r=(null!=V?V*p:w.y)+G.sy,g=o*(1-b)+(l=null!=N?N*f:k.x)*b,v=r,m=o*b+l*(1-b),S=d=(null!=A?A*p:k.y)+G.ty),a.setShape({x1:o,y1:r,x2:l,y2:d,cpx1:g,cpy1:v,cpx2:m,cpy2:S}),a.useStyle(E.getItemStyle()),a.style.fill){case"source":a.style.fill=e.node1.getVisual("color"),a.style.decal=e.node1.getVisual("style").decal;break;case"target":a.style.fill=e.node2.getVisual("color"),a.style.decal=e.node2.getVisual("style").decal;break;case"gradient":var Z=e.node1.getVisual("color"),P=e.node2.getVisual("color");(0,y.HD)(Z)&&(0,y.HD)(P)&&(a.style.fill=new i.Z(0,0,+("horizontal"===L),+("vertical"===L),[{color:Z,offset:0},{color:P,offset:1}]))}var C=I.getModel("emphasis");(0,u.WO)(a,I,"lineStyle",(function(t){return t.getItemStyle()})),s.add(a),x.setItemGraphicEl(e.dataIndex,a);var j=C.get("focus");(0,u.k5)(a,"adjacency"===j?e.getAdjacentDataIndices():j,C.get("blurScope"),C.get("disabled")),(0,c.A)(a).dataType="edge"})),o.eachNode((function(e){var a=e.getLayout(),n=e.getModel(),o=n.get("localX"),i=n.get("localY"),l=n.getModel("emphasis"),y=new r.Z({shape:{x:null!=o?o*f:a.x,y:null!=i?i*p:a.y,width:a.dx,height:a.dy},style:n.getModel("itemStyle").getItemStyle(),z2:10});(0,d.ni)(y,(0,d.k3)(n),{labelFetcher:t,labelDataIndex:e.dataIndex,defaultText:e.id}),y.disableLabelAnimation=!0,y.setStyle("fill",e.getVisual("color")),y.setStyle("decal",e.getVisual("style").decal),(0,u.WO)(y,n),s.add(y),v.setItemGraphicEl(e.dataIndex,y),(0,c.A)(y).dataType="node";var g=l.get("focus");(0,u.k5)(y,"adjacency"===g?e.getAdjacentDataIndices():g,l.get("blurScope"),l.get("disabled"))})),v.eachItemGraphicEl((function(e,o){v.getItemModel(o).get("draggable")&&(e.drift=function(e,i){n._focusAdjacencyDisabled=!0,this.shape.x+=e,this.shape.y+=i,this.dirty(),a.dispatchAction({type:"dragNode",seriesId:t.id,dataIndex:v.getRawIndex(o),localX:this.shape.x/f,localY:this.shape.y/p})},e.ondragend=function(){n._focusAdjacencyDisabled=!1},e.draggable=!0,e.cursor="move")})),!this._data&&t.isAnimationEnabled()&&s.setClipPath(function(t,e,a){var n=new r.Z({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return l.KZ(n,{shape:{width:t.width+20}},e,(function(){s.removeClipPath()})),n}(s.getBoundingRect(),t)),this._data=t.getData()},e.prototype.dispose=function(){},e.type="sankey",e}(s.Z),p=f,v=a(80654),x=a(61588),L=a(43865),m=a(6865),S=function(t){function e(){var a=null!==t&&t.apply(this,arguments)||this;return a.type=e.type,a}return(0,n.ZT)(e,t),e.prototype.getInitialData=function(t,e){var a=t.edges||t.links,n=t.data||t.nodes,o=t.levels;this.levelModels=[];for(var i=this.levelModels,r=0;r<o.length;r++)null!=o[r].depth&&o[r].depth>=0&&(i[o[r].depth]=new L.Z(o[r],this,e));if(n&&a){var l=(0,x.Z)(n,a,this,!0,(function(t,e){t.wrapMethod("getItemModel",(function(t,e){var a=t.parentModel,n=a.getData().getItemLayout(e);if(n){var o=n.depth,i=a.levelModels[o];i&&(t.parentModel=i)}return t})),e.wrapMethod("getItemModel",(function(t,e){var a=t.parentModel,n=a.getGraph().getEdgeByIndex(e).node1.getLayout();if(n){var o=n.depth,i=a.levelModels[o];i&&(t.parentModel=i)}return t}))}));return l.data}},e.prototype.setNodePosition=function(t,e){var a=(this.option.data||this.option.nodes)[t];a.localX=e[0],a.localY=e[1]},e.prototype.getGraph=function(){return this.getData().graph},e.prototype.getEdgeData=function(){return this.getGraph().edgeData},e.prototype.formatTooltip=function(t,e,a){function n(t){return isNaN(t)||null==t}if("edge"===a){var o=this.getDataParams(t,a),i=o.data,r=o.value,l=i.source+" -- "+i.target;return(0,m.TX)("nameValue",{name:l,value:r,noValue:n(r)})}var u=this.getGraph().getNodeByIndex(t).getLayout().value,s=this.getDataParams(t,a).data.name;return(0,m.TX)("nameValue",{name:null!=s?s+"":null,value:u,noValue:n(u)})},e.prototype.optionUpdated=function(){},e.prototype.getDataParams=function(e,a){var n=t.prototype.getDataParams.call(this,e,a);if(null==n.value&&"node"===a){var o=this.getGraph().getNodeByIndex(e).getLayout().value;n.value=o}return n},e.type="series.sankey",e.defaultOption={z:2,coordinateSystem:"view",left:"5%",top:"5%",right:"20%",bottom:"5%",orient:"horizontal",nodeWidth:20,nodeGap:8,draggable:!0,layoutIterations:32,label:{show:!0,position:"right",fontSize:12},levels:[],nodeAlign:"justify",lineStyle:{color:"#314656",opacity:.2,curveness:.5},emphasis:{label:{show:!0},lineStyle:{opacity:.5}},select:{itemStyle:{borderColor:"#212121"}},animationEasing:"linear",animationDuration:1e3},e}(v.Z),I=S,E=a(72705),b=a(71169);function w(t,e){t.eachSeriesByType("sankey",(function(t){var a=t.get("nodeWidth"),n=t.get("nodeGap"),o=function(t,e){return E.ME(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}(t,e);t.layoutInfo=o;var i=o.width,r=o.height,l=t.getGraph(),u=l.nodes,s=l.edges;!function(t){y.S6(t,(function(t){var e=P(t.outEdges,Z),a=P(t.inEdges,Z),n=t.getValue()||0,o=Math.max(e,a,n);t.setLayout({value:o},!0)}))}(u),function(t,e,a,n,o,i,r,l,u){(function(t,e,a,n,o,i,r){for(var l=[],u=[],s=[],d=[],c=0,g=0;g<e.length;g++)l[g]=1;for(g=0;g<t.length;g++)u[g]=t[g].inEdges.length,0===u[g]&&s.push(t[g]);for(var h=-1;s.length;){for(var f=0;f<s.length;f++){var p=s[f],v=p.hostGraph.data.getRawDataItem(p.dataIndex),x=null!=v.depth&&v.depth>=0;x&&v.depth>h&&(h=v.depth),p.setLayout({depth:x?v.depth:c},!0),"vertical"===i?p.setLayout({dy:a},!0):p.setLayout({dx:a},!0);for(var L=0;L<p.outEdges.length;L++){var m=p.outEdges[L];l[e.indexOf(m)]=0;var S=m.node2;0==--u[t.indexOf(S)]&&d.indexOf(S)<0&&d.push(S)}}++c,s=d,d=[]}for(g=0;g<l.length;g++)if(1===l[g])throw new Error("Sankey is a DAG, the original data has cycle!");var I=h>c-1?h:c-1;r&&"left"!==r&&function(t,e,a,n){if("right"===e){for(var o=[],i=t,r=0;i.length;){for(var l=0;l<i.length;l++){var u=i[l];u.setLayout({skNodeHeight:r},!0);for(var s=0;s<u.inEdges.length;s++){var d=u.inEdges[s];o.indexOf(d.node1)<0&&o.push(d.node1)}}i=o,o=[],++r}y.S6(t,(function(t){M(t)||t.setLayout({depth:Math.max(0,n-t.getLayout().skNodeHeight)},!0)}))}else"justify"===e&&function(t,e){y.S6(t,(function(t){M(t)||t.outEdges.length||t.setLayout({depth:e},!0)}))}(t,n)}(t,r,0,I),function(t,e,a){y.S6(t,(function(t){var n=t.getLayout().depth*e;"vertical"===a?t.setLayout({y:n},!0):t.setLayout({x:n},!0)}))}(t,"vertical"===i?(o-a)/I:(n-a)/I,i)})(t,e,a,o,i,l,u),function(t,e,a,n,o,i,r){var l=function(t,e){var a=[],n="vertical"===e?"y":"x",o=(0,b.pv)(t,(function(t){return t.getLayout()[n]}));return o.keys.sort((function(t,e){return t-e})),y.S6(o.keys,(function(t){a.push(o.buckets.get(t))})),a}(t,r);(function(t,e,a,n,o,i){var r=1/0;y.S6(t,(function(t){var e=t.length,l=0;y.S6(t,(function(t){l+=t.getLayout().value}));var u="vertical"===i?(n-(e-1)*o)/l:(a-(e-1)*o)/l;u<r&&(r=u)})),y.S6(t,(function(t){y.S6(t,(function(t,e){var a=t.getLayout().value*r;"vertical"===i?(t.setLayout({x:e},!0),t.setLayout({dx:a},!0)):(t.setLayout({y:e},!0),t.setLayout({dy:a},!0))}))})),y.S6(e,(function(t){var e=+t.getValue()*r;t.setLayout({dy:e},!0)}))})(l,e,a,n,o,r),D(l,o,a,n,r);for(var u=1;i>0;i--)V(l,u*=.99,r),D(l,o,a,n,r),C(l,u,r),D(l,o,a,n,r)}(t,e,i,o,n,r,l),function(t,e){var a="vertical"===e?"x":"y";y.S6(t,(function(t){t.outEdges.sort((function(t,e){return t.node2.getLayout()[a]-e.node2.getLayout()[a]})),t.inEdges.sort((function(t,e){return t.node1.getLayout()[a]-e.node1.getLayout()[a]}))})),y.S6(t,(function(t){var e=0,a=0;y.S6(t.outEdges,(function(t){t.setLayout({sy:e},!0),e+=t.getLayout().dy})),y.S6(t.inEdges,(function(t){t.setLayout({ty:a},!0),a+=t.getLayout().dy}))}))}(t,l)}(u,s,a,n,i,r,0!==y.hX(u,(function(t){return 0===t.getLayout().value})).length?0:t.get("layoutIterations"),t.get("orient"),t.get("nodeAlign"))}))}function M(t){var e=t.hostGraph.data.getRawDataItem(t.dataIndex);return null!=e.depth&&e.depth>=0}function D(t,e,a,n,o){var i="vertical"===o?"x":"y";y.S6(t,(function(t){var r,l,u;t.sort((function(t,e){return t.getLayout()[i]-e.getLayout()[i]}));for(var s=0,d=t.length,c="vertical"===o?"dx":"dy",y=0;y<d;y++)(u=s-(l=t[y]).getLayout()[i])>0&&(r=l.getLayout()[i]+u,"vertical"===o?l.setLayout({x:r},!0):l.setLayout({y:r},!0)),s=l.getLayout()[i]+l.getLayout()[c]+e;if((u=s-e-("vertical"===o?n:a))>0)for(r=l.getLayout()[i]-u,"vertical"===o?l.setLayout({x:r},!0):l.setLayout({y:r},!0),s=r,y=d-2;y>=0;--y)(u=(l=t[y]).getLayout()[i]+l.getLayout()[c]+e-s)>0&&(r=l.getLayout()[i]-u,"vertical"===o?l.setLayout({x:r},!0):l.setLayout({y:r},!0)),s=l.getLayout()[i]}))}function V(t,e,a){y.S6(t.slice().reverse(),(function(t){y.S6(t,(function(t){if(t.outEdges.length){var n=P(t.outEdges,k,a)/P(t.outEdges,Z);if(isNaN(n)){var o=t.outEdges.length;n=o?P(t.outEdges,T,a)/o:0}if("vertical"===a){var i=t.getLayout().x+(n-G(t,a))*e;t.setLayout({x:i},!0)}else{var r=t.getLayout().y+(n-G(t,a))*e;t.setLayout({y:r},!0)}}}))}))}function k(t,e){return G(t.node2,e)*t.getValue()}function T(t,e){return G(t.node2,e)}function N(t,e){return G(t.node1,e)*t.getValue()}function A(t,e){return G(t.node1,e)}function G(t,e){return"vertical"===e?t.getLayout().x+t.getLayout().dx/2:t.getLayout().y+t.getLayout().dy/2}function Z(t){return t.getValue()}function P(t,e,a){for(var n=0,o=t.length,i=-1;++i<o;){var r=+e(t[i],a);isNaN(r)||(n+=r)}return n}function C(t,e,a){y.S6(t,(function(t){y.S6(t,(function(t){if(t.inEdges.length){var n=P(t.inEdges,N,a)/P(t.inEdges,Z);if(isNaN(n)){var o=t.inEdges.length;n=o?P(t.inEdges,A,a)/o:0}if("vertical"===a){var i=t.getLayout().x+(n-G(t,a))*e;t.setLayout({x:i},!0)}else{var r=t.getLayout().y+(n-G(t,a))*e;t.setLayout({y:r},!0)}}}))}))}var j=a(148);function X(t){t.eachSeriesByType("sankey",(function(t){var e=t.getGraph().nodes;if(e.length){var a=1/0,n=-1/0;y.S6(e,(function(t){var e=t.getLayout().value;e<a&&(a=e),e>n&&(n=e)})),y.S6(e,(function(e){var o=new j.Z({type:"color",mappingMethod:"linear",dataExtent:[a,n],visual:t.get("color")}).mapValueToVisual(e.getLayout().value),i=e.getModel().get(["itemStyle","color"]);null!=i?(e.setVisual("color",i),e.setVisual("style",{fill:i})):(e.setVisual("color",o),e.setVisual("style",{fill:o}))}))}}))}function z(t){t.registerChartView(p),t.registerSeriesModel(I),t.registerLayout(w),t.registerVisual(X),t.registerAction({type:"dragNode",event:"dragnode",update:"update"},(function(t,e){e.eachComponent({mainType:"series",subType:"sankey",query:t},(function(e){e.setNodePosition(t.dataIndex,[t.localX,t.localY])}))}))}}}]);
//# sourceMappingURL=2342.9d17e9c0.js.map
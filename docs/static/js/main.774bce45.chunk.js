(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/tetris-bg.4ae866dc.mp3"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(8),o=n.n(i),c=(n(15),n(0)),s=n(6),u=n(3),l=n(2),p=n(4);n(16);function h(e){var t=["pixel"];return e.isFilled&&t.push("pixel--filled"),r.a.createElement("div",{className:t.join(" ")})}h.defaultProps={isFilled:!1};var m=h;n(17);var f=function(e){var t=e.pixelMap.map.map((function(e,t){var n=e.map((function(e,n){return r.a.createElement(m,{key:"pixel-".concat(t,",").concat(n),isFilled:e})}));return r.a.createElement("div",{key:"row-".concat(t)},n)}));return r.a.createElement("div",{className:"grid"},t)},v=n(5),d=function e(){var t=this;if(Object(c.a)(this,e),this.clone=function(){var n=new e;return n.size=t.size,n.orientations=Object(v.a)(t.orientations),n.position=Object(v.a)(t.position),n.rotation=t.rotation,n},(this instanceof e?this.constructor:void 0)===e)throw new TypeError("Cannot construct Shape instances directly");this.size=0,this.orientations=null,this.position=[0,0],this.rotation=0},O=function(e){return e.orientations[e.rotation]},S=function(){function e(t,n){Object(c.a)(this,e),this.map=b(t,n),this.rows=t,this.cols=n}return Object(s.a)(e,[{key:"clone",value:function(){var t=new e(this.rows,this.cols);return t.map=this.map.map((function(e){return Object(v.a)(e)})),t}}]),e}(),b=function(e,t){return new Array(e).fill(new Array(t).fill(!1))},w=function(e,t){var n=t.clone(),a=O(e);return a.forEach((function(t,r){t.forEach((function(t,i){if(1===a[r][i]){var o=e.position[0]+i,c=e.position[1]+r;o>=0&&o<n.cols&&c>=0&&c<n.rows&&(n.map[c][o]=!0)}}))})),n},j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=2,e.orientations=[[[1,1],[1,1]]],e}return Object(p.a)(t,e),t}(d),M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=4,e.orientations=[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]],e}return Object(p.a)(t,e),t}(d),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[0,0,1],[0,0,1],[0,1,1]],[[1,0,0],[1,1,1],[0,0,0]],[[1,1,0],[1,0,0],[1,0,0]],[[1,1,1],[0,0,1],[0,0,0]]],e}return Object(p.a)(t,e),t}(d),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[1,0,0],[1,0,0],[1,1,0]],[[0,0,1],[1,1,1],[0,0,0]],[[0,1,1],[0,0,1],[0,0,1]],[[1,1,1],[1,0,0],[0,0,0]]],e}return Object(p.a)(t,e),t}(d),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]]],e}return Object(p.a)(t,e),t}(d),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],e}return Object(p.a)(t,e),t}(d),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]]],e}return Object(p.a)(t,e),t}(d),P={SQUARE:0,T:1,S:2,Z:3,BAR:4,L:5,FLIP_L:6},T=function(){var e=Object.keys(P).length;return function(e){switch(e){case P.SQUARE:return new j;case P.T:return new k;case P.S:return new x;case P.Z:return new y;case P.BAR:return new M;case P.L:return new g;case P.FLIP_L:return new E;default:return new M}}(Math.floor(Math.random()*e))},G={MOVE_DOWN:0,MOVE_LEFT:1,MOVE_RIGHT:2,ROTATE:3},L=function(){function e(t,n){Object(c.a)(this,e),this.currentShape=null,this.unclearedPixelMap=new S(t,n),this.isGameOver=!1}return Object(s.a)(e,[{key:"clone",value:function(){var t=new e;return t.currentShape=this.currentShape.clone(),t.unclearedPixelMap=this.unclearedPixelMap.clone(),t.isGameOver=this.isGameOver,t}}]),e}(),z=function(e,t){var n=new L(e,t);return n.currentShape=R(n.unclearedPixelMap),n},R=function(e){var t=T();return t.rotation=Math.floor(Math.random()*t.orientations.length),t.position=_(t,e),t},_=function(e,t){return[Math.floor((t.cols-e.size)/2),-e.size]},D=function(e,t){var n=t.clone();switch(e){case G.MOVE_DOWN:n.currentShape.position[1]+=1;break;case G.MOVE_LEFT:n.currentShape.position[0]-=1;break;case G.MOVE_RIGHT:n.currentShape.position[0]+=1;break;case G.ROTATE:n.currentShape.rotation=(n.currentShape.rotation+1)%n.currentShape.orientations.length}if(function(e,t){var n=O(e),a=!1;return n.forEach((function(r,i){r.forEach((function(r,o){if(1===n[i][o]){var c=e.position[0]+o,s=e.position[1]+i;if(s<0)return;if(s>=t.rows)return void(a=!0);if(c<0||c>=t.cols)return void(a=!0);!0===t.map[s][c]&&(a=!0)}}))})),a}(n.currentShape,n.unclearedPixelMap)){if(e!==G.MOVE_DOWN)return t;n.unclearedPixelMap=w(t.currentShape,n.unclearedPixelMap),n.unclearedPixelMap=function(e){var t=e.clone();return t.map=t.map.filter((function(e){return!e.reduce((function(e,t){return e&t}),!0)})),t.map=[].concat(Object(v.a)(b(t.rows-t.map.length,t.cols)),Object(v.a)(t.map)),t}(n.unclearedPixelMap),n.currentShape.position[1]<0?n.isGameOver=!0:n.currentShape=R(n.unclearedPixelMap)}return n},I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleKeyDown=function(e){switch(e.keyCode){case 32:case 38:n.rotateShape();break;case 37:n.moveShapeLeft();break;case 39:n.moveShapeRight();break;case 40:n.moveShapeDown()}},n.startNewGame=function(){var e=n.props,t=e.rows,a=e.cols,r=e.normalInterval;n.gameState=z(t,a),n.setState({pixelMap:w(n.gameState.currentShape,n.gameState.unclearedPixelMap)}),n.timer=setTimeout(n.doGameTick,r)},n.doGameTick=function(){if(n.gameState.isGameOver)alert("Game Over!"),n.startNewGame();else{var e=n.props,t=e.normalInterval,a=e.speedUpSpeed;n.moveShapeDown(),n.timer=setTimeout(n.doGameTick,t/(n.gameState.isSpeedUp?a:1))}},n.moveShapeDown=function(){n.gameState=D(G.MOVE_DOWN,n.gameState),n.setState({pixelMap:w(n.gameState.currentShape,n.gameState.unclearedPixelMap)})},n.moveShapeLeft=function(){n.gameState=D(G.MOVE_LEFT,n.gameState),n.setState({pixelMap:w(n.gameState.currentShape,n.gameState.unclearedPixelMap)})},n.moveShapeRight=function(){n.gameState=D(G.MOVE_RIGHT,n.gameState),n.setState({pixelMap:w(n.gameState.currentShape,n.gameState.unclearedPixelMap)})},n.rotateShape=function(){n.gameState=D(G.ROTATE,n.gameState),n.setState({pixelMap:w(n.gameState.currentShape,n.gameState.unclearedPixelMap)})},n.state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.startNewGame()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.state.pixelMap;return r.a.createElement("div",null,e&&r.a.createElement(f,{pixelMap:e}))}}]),t}(r.a.Component);I.defaultProps={rows:20,cols:10,normalInterval:400,speedUpSpeed:5};var N=I,V=n(9),A=n.n(V);n(18);var F=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(N,{rows:20,cols:10,normalInterval:400,speedUpSpeed:8}),r.a.createElement("audio",{src:A.a,type:"audio/mpeg",autoPlay:!0,loop:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.774bce45.chunk.js.map
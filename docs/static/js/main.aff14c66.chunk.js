(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/tetris-bg.4ae866dc.mp3"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),o=n.n(i),c=(n(15),n(0)),s=n(8),u=n(3),l=n(2),p=n(4);n(16);function h(e){var t=["pixel"];return e.isFilled&&t.push("pixel--filled"),r.a.createElement("div",{className:t.join(" ")})}h.defaultProps={isFilled:!1};var f=h;n(17);var m=function(e){var t=e.grid.map.map((function(e,t){var n=e.map((function(e,n){return r.a.createElement(f,{key:"pixel-".concat(t,",").concat(n),isFilled:e})}));return r.a.createElement("div",{key:"row-".concat(t)},n)}));return r.a.createElement("div",{className:"grid"},t)},d=n(5),v=function e(){if(Object(c.a)(this,e),(this instanceof e?this.constructor:void 0)===e)throw new TypeError("Cannot construct Shape instances directly");this.size=0,this.orientations=null,this.position=[0,0],this.rotation=0},O=function(e){return e.orientations[e.rotation]},S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=2,e.orientations=[[[1,1],[1,1]]],e}return Object(p.a)(t,e),t}(v),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=4,e.orientations=[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]],e}return Object(p.a)(t,e),t}(v),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[0,0,1],[0,0,1],[0,1,1]],[[1,0,0],[1,1,1],[0,0,0]],[[1,1,0],[1,0,0],[1,0,0]],[[1,1,1],[0,0,1],[0,0,0]]],e}return Object(p.a)(t,e),t}(v),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[1,0,0],[1,0,0],[1,1,0]],[[0,0,1],[1,1,1],[0,0,0]],[[0,1,1],[0,0,1],[0,0,1]],[[1,1,1],[1,0,0],[0,0,0]]],e}return Object(p.a)(t,e),t}(v),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]]],e}return Object(p.a)(t,e),t}(v),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],e}return Object(p.a)(t,e),t}(v),G=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).size=3,e.orientations=[[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]]],e}return Object(p.a)(t,e),t}(v),k={SQUARE:0,T:1,S:2,Z:3,BAR:4,L:5,FLIP_L:6},y=function(){var e=Object.keys(k).length;return function(e){switch(e){case k.SQUARE:return new S;case k.T:return new g;case k.S:return new E;case k.Z:return new G;case k.BAR:return new b;case k.L:return new j;case k.FLIP_L:return new w;default:return new b}}(Math.floor(Math.random()*e))},T=function(e,t){return{map:L(e,t),rows:e,cols:t}},M=function(e){var t=T(e.rows,e.cols);return t.map=e.map.map((function(e){return Object(d.a)(e)})),t},L=function(e,t){return new Array(e).fill(new Array(t).fill(!1))},R=function(e,t){var n=M(t),a=O(e);return a.forEach((function(t,r){t.forEach((function(t,i){if(1===a[r][i]){var o=e.position[0]+i,c=e.position[1]+r;o>=0&&o<n.cols&&c>=0&&c<n.rows&&(n.map[c][o]=!0)}}))})),n},_={MOVE_DOWN:0,MOVE_LEFT:1,MOVE_RIGHT:2,ROTATE:3},D=function(e,t){return{currentShape:I(t),unclearedGrid:T(e,t),displayGrid:T(e,t),isGameOver:!1}},z=function(e){var t=D(e.rows,e.cols);return t.currentShape=function(e){var t;switch(e.constructor.name){case"SquareShape":t=new S;break;case"TShape":t=new g;break;case"SShape":t=new E;break;case"ZShape":t=new G;break;case"BarShape":t=new b;break;case"LShape":t=new j;break;case"FlipLShape":t=new w;break;default:t=new b}return t.position=Object(d.a)(e.position),t.rotation=e.rotation,t}(e.currentShape),t.unclearedGrid=M(e.unclearedGrid),t.displayGrid=M(e.displayGrid),t.isGameOver=e.isGameOver,t},I=function(e){var t=y();return t.rotation=Math.floor(Math.random()*t.orientations.length),t.position=N(t,e),t},N=function(e,t){return[Math.floor((t-e.size)/2),-e.size]},V=function(e,t){var n=z(t);switch(e){case _.MOVE_DOWN:n.currentShape.position[1]+=1;break;case _.MOVE_LEFT:n.currentShape.position[0]-=1;break;case _.MOVE_RIGHT:n.currentShape.position[0]+=1;break;case _.ROTATE:n.currentShape.rotation=(n.currentShape.rotation+1)%n.currentShape.orientations.length}if(function(e,t){var n=O(e),a=!1;return n.forEach((function(r,i){r.forEach((function(r,o){if(1===n[i][o]){var c=e.position[0]+o,s=e.position[1]+i;if(s<0)return;if(s>=t.rows)return void(a=!0);if(c<0||c>=t.cols)return void(a=!0);!0===t.map[s][c]&&(a=!0)}}))})),a}(n.currentShape,n.unclearedGrid)){if(e!==_.MOVE_DOWN)return t;n.unclearedGrid=R(t.currentShape,n.unclearedGrid),n.unclearedGrid=function(e){var t=M(e);return t.map=t.map.filter((function(e){return!e.reduce((function(e,t){return e&t}),!0)})),t.map=[].concat(Object(d.a)(L(t.rows-t.map.length,t.cols)),Object(d.a)(t.map)),t}(n.unclearedGrid),n.currentShape.position[1]<0?n.isGameOver=!0:n.currentShape=I(n.unclearedGrid.cols)}return n.displayGrid=R(n.currentShape,n.unclearedGrid),n},A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleKeyDown=function(e){switch(e.keyCode){case 32:case 38:n.rotateShape();break;case 37:n.moveShapeLeft();break;case 39:n.moveShapeRight();break;case 40:n.moveShapeDown()}},n.startNewGame=function(){var e=n.props,t=e.rows,a=e.cols,r=e.normalInterval;n.gameState=D(t,a),n.setState(n.gameState),n.timer=setTimeout(n.doGameTick,r)},n.doGameTick=function(){if(n.gameState.isGameOver)alert("Game Over!"),n.startNewGame();else{var e=n.props,t=e.normalInterval,a=e.speedUpSpeed;n.moveShapeDown(),n.timer=setTimeout(n.doGameTick,t/(n.gameState.isSpeedUp?a:1))}},n.moveShapeDown=function(){n.gameState=V(_.MOVE_DOWN,n.gameState),n.setState(n.gameState)},n.moveShapeLeft=function(){n.gameState=V(_.MOVE_LEFT,n.gameState),n.setState(n.gameState)},n.moveShapeRight=function(){n.gameState=V(_.MOVE_RIGHT,n.gameState),n.setState(n.gameState)},n.rotateShape=function(){n.gameState=V(_.ROTATE,n.gameState),n.setState(n.gameState)},n.state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.startNewGame()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.state.displayGrid;return r.a.createElement("div",null,e&&r.a.createElement(m,{grid:e}))}}]),t}(r.a.Component);A.defaultProps={rows:20,cols:10,normalInterval:400,speedUpSpeed:5};var F=A,U=n(9),W=n.n(U);n(18);var x=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(F,{rows:20,cols:10,normalInterval:400,speedUpSpeed:8}),r.a.createElement("audio",{src:W.a,type:"audio/mpeg",autoPlay:!0,loop:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.aff14c66.chunk.js.map
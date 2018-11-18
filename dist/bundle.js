!function(e){var t={};function s(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=7)}([function(e,t){e.exports=class{constructor(){this.assets={skierCrash:"img/skier_crash.png",skierLeft:"img/skier_left.png",skierLeftDown:"img/skier_left_down.png",skierDown:"img/skier_down.png",skierRightDown:"img/skier_right_down.png",skierRight:"img/skier_right.png",tree:"img/tree_1.png",treeCluster:"img/tree_cluster.png",rock1:"img/rock_1.png",rock2:"img/rock_2.png"},this.loadedAssets={},this.obstacleTypes=["tree","treeCluster","rock1","rock2"],this.obstacles=[],this.gameWidth=0,this.gameHeight=0,this.skierDirection=5,this.skierMapX=0,this.skierMapY=0,this.skierSpeed=8,this.maxSkierSpeed=16,this.hits=0,this.totalNumberOfHits=3,this.paused=!1,this.pauseNotification="<h2 class='whiteColor'>Game Is Paused</h2>",this.speedColor="#111619",this.canvas,this.ctx}loadAssets(){let e=[];return _.each(this.assets,(t,s)=>{let i=new Image,a=new $.Deferred;i.onload=(()=>{i.width/=2,i.height/=2,this.loadedAssets[s]=i,a.resolve()}),i.src=t,e.push(a.promise())}),$.when.apply($,e)}}},function(e,t,s){
/*!
 * Extends Classes.
 *
 * Main entry file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 30/03/2017 NZDT
 */
e.exports=s(2)},function(e,t,s){
/*!
 * Extends Classes.
 *
 * Main application file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 30/03/2017 NZDT
 */
const i=s(3);e.exports=function(...e){const t=[];class s extends i{constructor(...i){super();for(const i of e){const e=Object.getOwnPropertyNames(i.prototype);for(const a of e)"constructor"===a?t.push(i.prototype.constructor):s.prototype[a]=i.prototype[a]}for(const e of t)Object.assign(s.prototype,new e(...i))}}return s}},function(e,t,s){
/*!
 * Method Missing.
 *
 * Application entry file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */
e.exports=s(4)},function(e,t,s){
/*!
 * Method Missing.
 *
 * Main application file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */
const i=s(5);e.exports=class{constructor(e){return i(this,e||"__call")}static static(e,t){return i(e,t||"__call")}}},function(e,t,s){
/*!
 * Method Missing.
 *
 * Main application entry.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */
const i=s(6);e.exports=function(e,t){return new Proxy(e,{get(e,s){if(Reflect.has(e,s))return Reflect.get(e,s);if("function"==typeof t)return function(...e){t.call(this,s,e)};if(Reflect.has(e,t))return function(...i){e[t].call(this,s,i)};throw new i(`${t}, use method '__call(method, args)' in your class to catch.`)}})}},function(e,t){e.exports=
/*!
 * Method Missing Error.
 *
 * Main application entry.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */
class extends Error{constructor(e){super(e),this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}},function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i);class r extends a.a{moveSkier(){switch(this.skierDirection){case 2:this.skierMapX-=Math.round(this.skierSpeed/1.4142),this.skierMapY+=Math.round(this.skierSpeed/1.4142),this.placeNewObstacle(this.skierDirection);break;case 3:this.skierMapY+=this.skierSpeed,this.placeNewObstacle(this.skierDirection);break;case 4:this.skierMapX+=this.skierSpeed/1.4142,this.skierMapY+=this.skierSpeed/1.4142,this.placeNewObstacle(this.skierDirection)}}getSkierAsset(){let e;switch(this.skierDirection){case 0:e="skierCrash";break;case 1:e="skierLeft";break;case 2:e="skierLeftDown";break;case 3:e="skierDown";break;case 4:e="skierRightDown";break;case 5:e="skierRight"}return e}drawSkier(){let e=this.getSkierAsset(),t=this.loadedAssets[e];if(void 0==t)return;let s=(this.gameWidth-t.width)/2,i=(this.gameHeight-t.height)/2;this.ctx.drawImage(t,s,i,t.width,t.height)}intersectRect(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}checkIfSkierHitObstacle(){let e=this.getSkierAsset(),t=this.loadedAssets[e];if(void 0==t)return;let s={left:this.skierMapX+this.gameWidth/2,right:this.skierMapX+t.width+this.gameWidth/2,top:this.skierMapY+t.height-5+this.gameHeight/2,bottom:this.skierMapY+t.height+this.gameHeight/2};_.find(this.obstacles,e=>{let t=this.loadedAssets[e.type],i={left:e.x,right:e.x+t.width,top:e.y+t.height-5,bottom:e.y+t.height};return this.intersectRect(s,i)})&&(0!=this.skierDirection&&(this.hits+=1),this.skierDirection=0)}setupKeyhandler(e){e.keydown(e=>{switch(e.which){case 37:1===this.skierDirection?(this.skierMapX-=this.skierSpeed,this.placeNewObstacle(this.skierDirection)):this.skierDirection--,e.preventDefault();break;case 39:5===this.skierDirection?(this.skierMapX+=this.skierSpeed,this.placeNewObstacle(this.skierDirection)):this.skierDirection++,e.preventDefault();break;case 38:1!==this.skierDirection&&5!==this.skierDirection||(this.skierMapY-=this.skierSpeed,this.placeNewObstacle(6)),e.preventDefault();break;case 40:this.skierDirection=3,e.preventDefault();break;case 32:!1===this.paused?this.paused=!0:this.paused=!1,e.preventDefault()}})}drawObstacles(){let e=[];_.each(this.obstacles,t=>{let s=this.loadedAssets[t.type],i=t.x-this.skierMapX-s.width/2,a=t.y-this.skierMapY-s.height/2;i<-100||i>this.gameWidth+50||a<-100||a>this.gameHeight+50||(this.ctx.drawImage(s,i,a,s.width,s.height),e.push(t))}),this.obstacles=e}placeInitialObstacles(){let e=Math.ceil(_.random(5,7)*(this.gameWidth/800)*(this.gameHeight/500)),t=this.gameWidth+50,s=this.gameHeight/2+100,i=this.gameHeight+50;for(let a=0;a<e;a++)this.placeRandomObstacle(-50,t,s,i);this.obstacles=_.sortBy(this.obstacles,e=>{let t=this.loadedAssets[e.type];return e.y+t.height})}placeNewObstacle(e){if(8!==_.random(1,8))return;let t=this.skierMapX,s=this.skierMapX+this.gameWidth,i=this.skierMapY,a=this.skierMapY+this.gameHeight;switch(e){case 1:this.placeRandomObstacle(t-50,t,i,a);break;case 2:this.placeRandomObstacle(t-50,t,i,a),this.placeRandomObstacle(t,s,a,a+50);break;case 3:this.placeRandomObstacle(t,s,a,a+50);break;case 4:this.placeRandomObstacle(s,s+50,i,a),this.placeRandomObstacle(t,s,a,a+50);break;case 5:this.placeRandomObstacle(s,s+50,i,a);break;case 6:this.placeRandomObstacle(t,s,i-50,i)}}placeRandomObstacle(e,t,s,i){let a=_.random(0,this.obstacleTypes.length-1),r=this.calculateOpenPosition(e,t,s,i);this.obstacles.push({type:this.obstacleTypes[a],x:r.x,y:r.y})}calculateOpenPosition(e,t,s,i){let a=_.random(e,t),r=_.random(s,i);return _.find(this.obstacles,e=>a>e.x-50&&a<e.x+50&&r>e.y-50&&r<e.y+50)?this.calculateOpenPosition(e,t,s,i):{x:a,y:r}}}const h=s(1);class n extends(h(a.a,r)){updateDashbord(){document.getElementById("distance").innerHTML=Math.ceil(this.skierMapY)+" meters",document.getElementById("speed").innerHTML=this.skierSpeed,document.getElementById("hits").innerHTML=this.hits}checkSpeedHasUpdated(){this.skierMapY>=5e3&&this.updateSpeed()}updateSpeed(){document.body.style.backgroundColor=this.speedColor,this.skierSpeed<this.maxSkierSpeed&&(this.skierSpeed+=1)}pauseGame(){document.getElementById("pause").innerHTML=this.pauseNotification,this.skierDirection=0}continueGame(){document.getElementById("pause").innerHTML=""}checkTotalHits(){this.hits===this.totalNumberOfHits&&this.gameOver()}gameOver(){throw $("#over").modal({backdrop:"static",keyboard:!1}),document.getElementById("score").innerHTML=Math.ceil(this.skierMapY),"game over"}}let o=new class{prepareGameCanvas(e){e.gameWidth=window.innerWidth,e.gameHeight=window.innerHeight,e.canvas=$("<canvas ></canvas>").attr("width",e.gameWidth*window.devicePixelRatio).attr("height",e.gameHeight*window.devicePixelRatio).css({width:e.gameWidth+"px",height:e.gameHeight+"px"}),$("body").append(e.canvas),e.ctx=e.canvas[0].getContext("2d")}clearGameCanvas(e){e.ctx.clearRect(0,0,e.gameWidth,e.gameHeight)}};(new class extends n{startGame(){this.initGame()}gameLoop(){!0===this.paused?this.pauseGame():this.continueGame(),this.updateDashbord(),this.checkSpeedHasUpdated(),this.checkTotalHits(),this.ctx.save(),this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio),o.clearGameCanvas(this),this.moveSkier(),this.checkIfSkierHitObstacle(),this.drawSkier(),this.drawObstacles(),this.ctx.restore(),requestAnimationFrame(this.gameLoop.bind(this))}initGame(){o.prepareGameCanvas(this),this.setupKeyhandler($(window)),this.loadAssets().then(()=>{this.placeInitialObstacles(),requestAnimationFrame(this.gameLoop.bind(this))})}}).startGame()}]);
//# sourceMappingURL=bundle.js.map
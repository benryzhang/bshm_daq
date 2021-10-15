<template>
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width:25%;height:50px;" />
      <!-- <dv-border-box-2 class='header-fixed-decoration' style="width:200px;height:50px;font-size:16px;">
            系统综合管理平台
          </dv-border-box-2> -->
      <div class="cc-title">通用数据采集综合展示平台</div>
      <div class="cc-right">
        <div class="cc-time" >{{nowTime}}</div>
        <!-- <button class="btn button button--tamaya button--round-s button--text-thick button--border-thin" data-text="进入综合管理平台"></button> -->
        <button class="btn button button--aylen button--border-medium button--inverted button--text-upper button--size-m" data-text="进入综合管理平台" @click="addRoutes"><span>进入综合管理平台</span></button>
          <!-- <div class="cc-system" >进入综合管理平台</div> -->
          
           </div>
      <!-- <dv-decoration-1 style="width:200px;height:50px;" /> -->

    </div>

    <!-- <div class="cc-details">
      <div>设备总数</div>
      <div class="card">2</div>
      <div class="card">1</div>
      <div class="card">3</div>
      <div class="card">7</div>
    </div> -->

    <div class="cc-main-container">

  <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler"></baidu-map>

<!-- <div class="GreenStatus" id='square'></div> -->
     
      
        </div>
        <div class="station-info">
          <!-- <div class="mh-time">{{nowTime}}</div> -->
        </div>
      </div>

      <!-- <LabelTag :config="labelConfig" /> -->
    <!-- </div> -->
  <!-- </div> -->


</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import cir from '@/assets/img/cir.gif'
export default {
        name: 'CenterCmp',
        components: {
            BaiduMap
        },
         data () {
            return {
                nowTime:'',
                center: {lng: 0, lat: 0},
                zoom: 3
            }
        },
        mounted() {
            this.nowTimes();
            //const { createData } = this
            this.createData();
            //setInterval(this.createData, 30000)
             //this.initMap();
        },
        
        methods: {
          addRoutes () {
            this.$router.push('/home')
          },
          // 定义自定义覆盖物的构造函数  
// SquareOverlay(center, length, color){
//     this._center = center;
//     this._length = length;
//     this._color = color;
// },

            
            handler ({BMap, map}) {
              // 继承API的BMap.Overlay
//                 this.SquareOverlay.prototype = new BMap.Overlay();
//                 this.SquareOverlay.prototype.initialize = function(map){
//     // 保存map对象实例
//     this._map = map;
//     // 创建div元素，作为自定义覆盖物的容器
//     var div = document.createElement("div");
//     div.style.position = "absolute";
//     // 可以根据参数设置元素外观
//     div.style.width = this._length + "px";
//     div.style.height = this._length + "px";
//     div.style.background = this._color;
//     // 将div添加到覆盖物容器中
//     map.getPanes().markerPane.appendChild(div);
//     // 保存div实例
//     this._div = div;
//     // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
//     // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
//     return div;
// },
// this.SquareOverlay.prototype.draw = function(){    
// // 根据地理坐标转换为像素坐标，并设置给容器    
//     var position = this._map.pointToOverlayPixel(this._center);    
//     this._div.style.left = position.x - this._length / 2 + "px";    
//     this._div.style.top = position.y - this._length / 2 + "px";    
// }

                //console.log(BMap, map)
                this.center.lng = 110.768412
                this.center.lat = 30.96115
                this.zoom = 12
                map.setMapStyleV2({styleId:'f3ac6c7453a08d04617e66a2d8a7bad9'});
                //map.addControl(new BMap.NavigationControl());    
                //map.addControl(new BMap.ScaleControl());    
                //map.addControl(new BMap.OverviewMapControl());    
                //map.addControl(new BMap.MapTypeControl());   
                //map.addControl(new BMap.ZoomControl());   
                // var zoomCtrl = new window.BMapGL.ZoomControl();  // 添加缩放控件
                // map.addControl(zoomCtrl);
                map.enableScrollWheelZoom(true);  //启用滚轮放大缩小，默认禁用
                var point = new BMap.Point(110.768412, 30.96115);    
                map.centerAndZoom(point, 15);   
  
                var marker = new BMap.Marker(point);  // 创建标注
                map.addOverlay(marker);       
            },
            timeFormate(timeStamp) {
                let year = new Date(timeStamp).getFullYear();
                let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
                let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
                let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
                let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
                let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
                const myDate = new Date()
                let week = myDate.getDay() // 星期
                let weekArr = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]

                
                //this.week = '星期' + '日一二三四五六'.charAt(myDate.getDay())
                this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss + ' ' + weekArr[week];
            },
            nowTimes(){
                    this.timeFormate(new Date());
                    setInterval(this.nowTimes,1000);
                    this.clear()
            },
            clear(){
                    clearInterval(this.nowTimes)
                    this.nowTimes = null;
            },
            createData () {
         
            },
            randomExtend (minNum, maxNum) {
                    if (arguments.length === 1) {
                        return parseInt(Math.random() * minNum + 1, 10)
                    } else {
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
                    }
            }
            
            

        }
    }
</script>

<style lang="less">
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  .el-button--primary{width: 180px;
    font-size: 30px;}
  .cc-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
  }
  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;
    .card {
      background-color: rgba(4,49,128,.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }
  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;
    width: 100%;
    height: 580px;
    // background-image: url(../../../assets/img/viewbg.png);
    .ccmc-middle {
      width: 50%;
      height: 90%;
      .active-ring-name {
        font-size: 20px !important;
      }
    }
    .ccmc-left, .ccmc-right {
      width: 25%;
      display: block;
      flex-direction: column;
      justify-content: center;
      font-size: 24px;
      span {
        font-size: 24px;
        font-weight: bold;
      }
      .station-info {
        height: 80px;
        display: block;
        align-items: center;
      }
    }
    .ccmc-left {
      align-items: flex-end;
      span {
        margin-left: 2px;
      }
    }
    .ccmc-right {
    //   align-items: flex-start;
      span {
        margin-right: 20px;
      }
    }
  }
  .label-tag {
    position: absolute;
    width: 500px;
    height: 30px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.cc-time{    line-height: 24px;font-size: 16px; color:#fff;padding-top:0px;}
.cc-right{width:43%;float: right;}
.cc-title{width:100%;text-align: center;}
.cc-system{width:100%;text-align: center;font-size: 16px; color:#fff;padding-top:10px;cursor: pointer;
 
	// width: 200px;
	// height: 100px;
	// color: #fff;
	// background-color: #6496c8;
	// border: none;
	// border-radius: 15px;
	// box-shadow: 0 10px #27496d;
}
.btn {
  //padding: 4.5em 0;
    // display: -webkit-flex;
    // display: -ms-flexbox;
    // display: flex;
    // -webkit-flex-wrap: wrap;
    // -ms-flex-wrap: wrap;
    // flex-wrap: wrap;
    // -webkit-justify-content: center;
    // justify-content: center;
    width:100%;
    display: block;

}
/* Box colors */
.bg-1 {
	background: #ECEFF1;
	color: #37474f;
}
.bg-2 {
	background: #7986cb;
	color: #ECEFF1;
}
.bg-3 {
	background: #37474f;
	color: #fff;
}

/* Common button styles */
.button {
	float: left;
	min-width: 150px;
	max-width: 250px;
	display: block;
	//margin: 1em;
	padding: 0.4em 0em;
	border: none;
	background: none;
	color: inherit;
	//vertical-align: middle;
	position: relative;
	z-index: 1;
	//-webkit-backface-visibility: hidden;
	-moz-osx-font-smoothing: grayscale;
  cursor: pointer;

}
.button:focus {
	outline: none;
}
.button > span {
	vertical-align: middle;
}

/* Text color adjustments (we could stick to the "inherit" but that does not work well in Safari) */
.bg-1 .button {
	color: #37474f;
	border-color: #37474f;
}
.bg-2 .button {
	color: #ECEFF1;
	border-color: #ECEFF1;
}
.bg-3 .button {
	color: #fff;
	border-color: #fff;
}

/* Sizes */
.button--size-s {
	font-size: 14px;
}
.button--size-m {
	font-size: 16px;
}
.button--size-l {
	font-size: 18px;
}

*:after,
*:before {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
/* Typography and Roundedness */
.button--text-upper {
	letter-spacing: 2px;
	text-transform: uppercase;
}
.button--text-thin {
	font-weight: 300;
}
.button--text-medium {
	font-weight: 500;
}
.button--text-thick {
	font-weight: 600;
}
.button--round-s {
	border-radius: 5px;
}
.button--round-m {
	border-radius: 15px;
}
.button--round-l {
	border-radius: 40px;
}

/* Borders */
.button--border-thin {
	border: 1px solid #fff;
}
.button--border-medium {
	border: 2px solid #fff;
}
.button--border-thick {
	border: 3px solid #fff;
}
/* Aylen */
.button.button--aylen {
	background: #fff;
	color: #37474f;
	overflow: hidden;
	-webkit-transition: color 0.3s;
	transition: color 0.3s;
}
.button--aylen.button--inverted {
	background: none;
	color: #fff;
}
.button--aylen::before,
.button--aylen::after {
	content: '';
	position: absolute;
	height: 100%;
	width: 100%;
	bottom: 100%;
	left: 0;
	z-index: -1;
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}
.button--aylen::before {
	background: #096dd9;
}
.button--aylen::after {
	background: #3f51b5;
}
.button--aylen:hover {
	color: #fff;
}
.button--aylen:hover::before,
.button--aylen:hover::after {
	-webkit-transform: translate3d(0, 100%, 0);
	transform: translate3d(0, 100%, 0);
}
.button--aylen:hover::after {
	-webkit-transition-delay: 0.175s;
	transition-delay: 0.175s;
}
/* Tamaya */
.button--tamaya {
	overflow: hidden;
	//color: #7986cb;
	//min-width: 100%;
}
.button--tamaya.button--inverted {
	color: #37474f;
	border-color: #37474f;
}
.button--tamaya::before,
.button--tamaya::after {
	content: attr(data-text);
	position: absolute;
	width: 100%;
	height: 50%;
	left: 0;
	background: #7986cb;
	color: #fff;
	overflow: hidden;
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--tamaya.button--inverted::before,
.button--tamaya.button--inverted::after {
	background: #fff;
	color: #37474f;
}
.button--tamaya::before {
	top: 0;
	padding-top: 1em;
}
.button--tamaya::after {
	bottom: 0;
	line-height: 0;
}
.button--tamaya > span {
	display: block;
	-webkit-transform: scale3d(0.2, 0.2, 1);
	transform: scale3d(0.2, 0.2, 1);
	opacity: 0;
	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
	transition: transform 0.3s, opacity 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--tamaya:hover::before {
	-webkit-transform: translate3d(0, -100%, 0);
	transform: translate3d(0, -100%, 0);
}
.button--tamaya:hover::after {
	-webkit-transform: translate3d(0, 100%, 0);
	transform: translate3d(0, 100%, 0);
}
.button--tamaya:hover > span {
	opacity: 1;
	-webkit-transform: scale3d(1, 1, 1);
	transform: scale3d(1, 1, 1);
}
// .btn-1 {
//   //color: #9c89f7;
// }
// .btn-1:hover {
//   -webkit-animation: halftone 1s forwards;
//           animation: halftone 1s forwards;
//   background: -webkit-radial-gradient(circle, #9c89f7 0.2em, rgba(0, 0, 0, 0) 0.25em) 0 0/1.25em 1.25em, -webkit-radial-gradient(circle, #9c89f7 0.2em, rgba(0, 0, 0, 0) 0.25em) 6.25em 6.25em/1.25em 1.25em;
//   background: radial-gradient(circle, #9c89f7 0.2em, rgba(0, 0, 0, 0) 0.25em) 0 0/1.25em 1.25em, radial-gradient(circle, #9c89f7 0.2em, rgba(0, 0, 0, 0) 0.25em) 6.25em 6.25em/1.25em 1.25em;
//   color: #e4f789;
// }
@-webkit-keyframes halftone {
  100% {
    background-size: 2.375em 2.375em, 0.1em 0.1em;
  }
}
@keyframes halftone {
  100% {
    background-size: 2.375em 2.375em, 0.1em 0.1em;
  }
}



.bm-view{width: 100%;height: 580px;}

.BMap_cpDctrl {
    display:none;
}
.anchorBL{
    display:none;
}
/* 红色小圆点 */
.BMap_Marker {
    width: 25px;
    height: 25px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: none!important ;
}

.BMap_Marker::before {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    // left: 50%;
    // top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    border-radius: 50%;
    animation: GreenDot 1.5s ease-out 0s infinite;
    background-color: rgba(255, 0, 0, 0.5);
}

@keyframes GreenDot {
    0% {
        transform: scale(0.5);
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}
</style>
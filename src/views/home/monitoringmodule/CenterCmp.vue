<template>
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width:25%;height:50px;" />
      <!-- <dv-border-box-2 class='header-fixed-decoration' style="width:200px;height:50px;font-size:16px;">
            系统综合管理平台
          </dv-border-box-2> -->
      <div class="cc-title">通用数据采集综合展示平台</div>
          <div class="cc-time" >{{nowTime}}</div>
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
.cc-time{    line-height: 44px;font-size: 16px; color:#fff;padding-top:20px;}
.cc-title{width:50%;text-align: center;}


.bm-view{width: 1004px;height: 580px;}

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
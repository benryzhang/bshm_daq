<template>
  <div id="data-view">
    <dv-full-screen-container>
      
      <!-- <div class="main-header">
        <div class="mh-left"></div>
        <div style="width:350px;height:60px;font-size:24px;text-align:center">通用信息采集展示平台</div>
        <div class="mh-right">
          <dv-border-box-9
            style="width: 160px; height: 50px; line-height: 50px; text-align:center;margin-left:0px;padding:0;float:left;font-size:16px"
          >
            系统综合管理平台
          </dv-border-box-9>
          <div class="mh-time">{{nowTime}}</div>
        </div>
      </div> -->
      <!-- <div id="top-header">
        <dv-decoration-8 class="header-left-decoration" />
        <dv-decoration-5 class="header-center-decoration" />
        <dv-decoration-8 class="header-right-decoration" :reverse="true" />
        <div class="center-title">数据采集综合展示平台</div> -->
        <!-- <div class="mh-right">
          <dv-border-box-2 class='header-fixed-decoration'>
            系统综合管理平台
          </dv-border-box-2>
        </div> -->
      <!-- </div> -->
      <!-- <div class="main-header">
        <div class="mh-left"></div>
        
        <div class="mh-middle">机电设备电子档案</div>
        <div class="mh-right">
          <dv-border-box-2
            style="width: 160px; height: 50px; line-height: 50px; text-align:center;margin-left:200px;"
          >
            系统综合管理台
          </dv-border-box-2>
        </div>
      </div> -->
      <!-- <dv-loading>Loading...</dv-loading> -->
      
      <div class="main-container">
        <div class="left-main-container">
          <dv-border-box-12 class="left-chart-container">
            <Left-Chart-1 />
            <Left-Chart-2 />
            <Left-Chart-3 />
            </dv-border-box-12>

            
            <!-- <Left-Chart-2 /> -->
            <!-- <Left-Chart-3 /> -->

          <!-- </dv-border-box-12> -->
        </div>
        <div class="right-main-container">
          <div class="rmc-top-container">
            <div class="rmctc-left-container">
            <dv-border-box-12 class="rmctc-left-container">

              <Center-Cmp />

            </dv-border-box-12>
             </div>
            <div class="rmctc-right-container">
              <dv-border-box-12 class="rmctc-right-container"> 

                <Right-Chart-1 />
                <Right-Chart-3 />


              </dv-border-box-12>

              <!-- <dv-border-box-4 class="rmctc-chart-2" :reverse="true">

                

              </dv-border-box-4> -->
            </div>
          </div>

          <dv-border-box-12 class="rmc-bottom-container">

            <Bottom-Charts />

          </dv-border-box-12>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
// import LeftChart1 from './LeftChart1'
 //import LeftChart2 from './LeftChart2'
// import LeftChart3 from './LeftChart3'
// import CenterCmp from './CenterCmp'
// import RightChart1 from './RightChart1'
// import RightChart2 from './RightChart2'
// import BottomCharts from './BottomCharts'
export default {
  name: 'DataView',
   components: {
  //   LeftChart1,
   //  LeftChart2,
  //   LeftChart3,
  //   CenterCmp,
  //   RightChart1,
  //   RightChart2,
  //   BottomCharts
   },
  data () {
    return {
      nowTime:''
    }
  },
  mounted() {
    this.nowTimes()
  },
  methods: {
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
    }
  }
}
</script>

<style>
#data-view {
	width: 100%;
	height: 100%;
  /* background-color: #030409; */
  background-image: url(../../assets/img/viewbg.png);
  background-size: cover;
	color: #fff
}

body {
	margin: 0;
	padding: 0
}

.dv-full-screen-container {
	background-size: 100% 100%;
	box-shadow: 0 0 3px #00f;
	display: flex;
	flex-direction: column
}

.main-header {
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end
}

.mh-left {
	/* font-size: 20px;*/
	color: #08e5ff; 
}

.mh-middle {
	font-size: 30px
}

.mh-left,.mh-right {
  width: 450px;
  
}

.main-container {
	height: calc(100% - 80px)
}

.border-box-content {
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	display: block
}

.left-chart-container {
	width: 22%;
	padding: 10px;
	box-sizing: border-box
}

.border-box-content {
	flex-direction: column
}

.left-main-container {
	width: 22%;
	box-sizing: border-box;
	display: block;
	float: left
}

.right-main-container {
	width: 78%;
	padding-left: 5px;
	box-sizing: border-box;
	display: block;
	float: left
}

.rmc-top-container {
	height: 65%;
	display: flex
}

.rmctc-left-container {
	width: 70%;
	display: flex
}

.rmctc-right-container {
	width: 30%;
  display: flex;
  padding-left: 5px;
}

.rmc-bottom-container {
	height: 35%;
	display: flex
}

.rmctc-chart-1,.rmctc-chart-2 {
	height: 50%;
	display: flex
}
/* 
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;}
  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 12px;
  }
  .header-left-decoration, .header-right-decoration {
    width: 25%;
    height: 60px;
  }
  .center-title {
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
.header-fixed-decoration{width: 120px; height: 50px; line-height: 50px; text-align:center;margin-left:200px;} */
.dv-border-box-9 .border-box-content{padding: 0;cursor: pointer;color:#08e5ff}
</style>
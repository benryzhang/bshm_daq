<template>
  <div class="left-chart-1">
    <!-- <div class="lc1-header">李四收费站</div> -->
    <div class="lc1-details">设备运行总数<span>12</span></div>
    <dv-charts class="lc1-chart" :option="option" />
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  data () {
    return {
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '光栅光纤解调仪', value: 2 },
              { name: 'GPS-GNSS接收机', value: 1 },
              { name: 'DQA数据采集模块', value: 1 },
              { name: '串口服务器', value: 7 },
              { name: 'VEH-交通荷载服务器', value: 1 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{value}（个）\n{name}',
              //formatter: '{percent}\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  .lc1-header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 10px;
  }
  .lc1-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }
  .lc1-chart {
    //height: calc(~"100% - 80px");
    height:300px
  }
}
</style>
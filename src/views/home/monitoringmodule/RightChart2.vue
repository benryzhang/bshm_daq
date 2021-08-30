<template>
  <div class="right-chart-2">
    <div class="rc2-header">设备类型预警统计</div>

    <div class="rc2-chart-container">
      <!-- <div class="left">
        <div class="number">267</div>
        <div>设备运行总数</div>
      </div> -->

      <dv-charts class="right" :option="option" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightChart2',
  data () {
    return {
       option : {
          title: {
            text: '设备类型预警统计'
          },
          style: {
               fill: 'rgba(0, 0, 0, 0)'
              },
          color: ["#67e0e3"],
          xAxis: {
            name: '第一周',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            color: '#fff',
            style: {
                stroke: '#fff',
                lineWidth: 1
              }
          },
          yAxis: {
            name: '销售额',
            data: 'value',
            color: '#fff',
            style: {
                stroke: '#fff',
                lineWidth: 1
              }
          },
          series: [
            {
              data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
              type: 'line'
            }
          ]
        }
    }
  }
}
</script>

<style lang="less">
.right-chart-2 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  .rc2-header {
       text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .rc2-chart-container {
    flex: 1;
    display: flex;
  }
  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
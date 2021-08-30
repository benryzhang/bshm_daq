<template>
  <div class="right-chart-1">
    <div class="rc1-header">传感器预警统计</div>
    <div class="rc1-details">传感器预警条数<span>430</span></div>
    <dv-capsule-chart class="rc1-chart" :config="config" />
    <dv-decoration-2 style="height:10px;" />
    <dv-decoration-3 style="height:20px;" />
    
  </div>
</template>

<script>
export default {
  name: 'rightChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: 'ACC',
            value: 167
          },
          {
            name: 'FSG',
            value: 67
          },
          {
            name: 'FGT',
            value: 123
          },
          {
            name: 'SHH',
            value: 55
          },
          {
            name: 'VEH',
            value: 55
          },
          {
            name: 'GPS',
            value: 51
          },
          {
            name: 'ACA',
            value: 98
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '条',
        showValue: true
      }
    }
  }
}
</script>

<style>
.right-chart-1 {
  width: 100%;
  height: 50%;
  display: flex;
 
  flex-direction: column;}
  .rc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .rc1-details {
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
  
  }
  /* .rc1-chart {
    flex: 1;
  } */
     .rc1-details span {
      color: #409EFF;
      font-weight: bold;
      font-size: 16px;
      margin-right: 20px;
    }

</style>
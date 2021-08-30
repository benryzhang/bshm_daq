<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['预警开始时间', '传感器', '监测值', '预警值'],
        data: [
          ['2019-07-01 19:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-02 17:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-03 16:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-04 15:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-05 14:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-06 13:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-07 12:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-08 11:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-09 10:25:00', 'GPS-G05-02', '23.2259mm', '20mm'],
          ['2019-07-10 09:25:00', 'GPS-G05-02', '23.2259mm', '20mm']
        ],
        index: false,
        columnWidth: [140, 100, 110,100],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  }
}
</script>

<style lang="less">
#scroll-board {
  width: 98%;
  box-sizing: border-box;
  margin-top: 10px;
  height: 320px;
  overflow: hidden;
}
</style>
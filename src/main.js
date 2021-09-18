import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/js/element.js'
import './assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import global from './assets/js/global.js'//引用全局变量文件
import VueParticles from 'vue-particles'

//import 'element-ui/lib/theme-chalk/display.css'
import animated from 'animate.css'
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)


import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '8LPl96uimMBx8O9MTjbTjVUEU6i4gDvj'
})

import edit from './views/equipment/edit.vue'
Vue.component('edit-page', edit)
import sensor from './views/sensor/edit.vue'
Vue.component('sensor-page', sensor)


Vue.component('LeftChart1', LeftChart1)
import LeftChart1 from './views/home/monitoringmodule/LeftChart1.vue'
Vue.component('LeftChart2', LeftChart2)
import LeftChart2 from './views/home/monitoringmodule/LeftChart2.vue'
Vue.component('LeftChart3', LeftChart3)
import LeftChart3 from './views/home/monitoringmodule/LeftChart3.vue'
Vue.component('RightChart1', RightChart1)
import RightChart1 from './views/home/monitoringmodule/RightChart1.vue'
Vue.component('RightChart2', RightChart2)
import RightChart2 from './views/home/monitoringmodule/RightChart2.vue'
Vue.component('RightChart3', RightChart3)
import RightChart3 from './views/home/monitoringmodule/RightChart3.vue'
Vue.component('CenterCmp', CenterCmp)
import CenterCmp from './views/home/monitoringmodule/CenterCmp.vue'
Vue.component('BottomCharts', BottomCharts)
import BottomCharts from './views/home/monitoringmodule/BottomCharts.vue'


import axios from 'axios'
import echarts from 'echarts'
import api from './api/api.js'
import http from './api/http.js'

import VueResource from 'vue-resource'



Vue.prototype.api = api;
Vue.prototype.http = http;
Vue.prototype.$axios = axios;
Vue.use(VueResource)
Vue.use(animated)
Vue.use(VueParticles)
Vue.prototype.GLOBAL = global//挂载到Vue实例上面
//Vue.prototype.particles = particles//挂载到Vue实例上面

Vue.prototype.$echarts = echarts

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


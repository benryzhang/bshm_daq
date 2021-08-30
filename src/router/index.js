import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/longin.vue'
import NotPermission from '../components/401.vue'

import index from '../components/common/index.vue'
import home from '../views/home/About.vue'
import dataview from '../views/home/About.vue'
import site from '../views/setup/site.vue'
import stored from '../views/setup/stored.vue'
import status from '../views/status/list.vue'
import equipment from '../views/equipment/list.vue'
import sensor from '../views/sensor/list.vue'


 //import welcome from '../components/welcome.vue'
// import detection from '../components/page/detection.vue'
// import standard from '../components/page/standard.vue'
// import user from '../components/page/user.vue'
// import warnvalue from '../components/page/warnvalue.vue'
// import dataprocessing from '../components/page/dataprocessing.vue'
// import report from '../components/page/report.vue'
// import cphsWarning from '../components/page/cphsWarning.vue'
// import bridge from '../components/gcgk/bridge.vue'
// import introduce from '../components/gcgk/introduce.vue'



Vue.use(VueRouter)
const routes = [
    {
      path: '/', /* 默认跳转到登录界面 */
      redirect: {path: '/login'},
    },
    {
      path: '/login', /* 登录界面 */
      name: 'login',
      meta:{title: ' 用户登录'},
      component: login/* ,hidden: true, // 自定义属性，在组件中可以通过 this.$route.hidden 获取值 */
    },
    {
      path: '/index', /* 系统首页 */
      name: 'index',
      meta:{title: '数据显示'},
      component: index
    },
    {
      path: '/dataview', /* 系统首页dataview */
      name: 'dataview',
      meta:{title: '大数据显示'},
      component: dataview
    },
    {
      path: '/index',
      name: 'index',
      meta:{title: '设备管理'},
      component: index,
      children: [{
        path: '/home',
        component: home
      },
      {
        path: '/site', /* 系统设置 */
        name: 'site',
        meta:{title: '系统设置'},
        component: site
      },
      {
        path: '/stored', /* 系统设置 */
        name: 'stored',
        meta:{title: '数据库分库存储'},
        component: stored
      },
      {
        path: '/status', /* 系统设置 */
        name: 'status',
        meta:{title: '状态信息'},
        component: status
      },
      {
        path: '/equipment', /* 系统设置 */
        name: 'equipment',
        meta:{title: '设备信息'},
        component: equipment
      },
      {
        path: '/sensor', /* 系统设置 */
        name: 'sensor',
        meta:{title: '传感器信息'},
        component: sensor
      },
      ] 
    },
    
    {
      path: "/401",
      component: NotPermission
    }
  ]



  const router = new VueRouter({
    mode: 'hash',
    //base: process.env.BASE_URL,
    routes
  })
  //路由导航守卫
router.beforeEach((to, from, next) => {

  const token = window.localStorage.getItem('JWT_TOKEN');
  if (to.path == '/login') {
    if(!token){
      return next();
    }else{
      return next({path: '/index'})
    }
  }

  if(to.path=='/401'){
	  return next();
  }

    //判断是否有访问该路径的权限
    //const urls =store.state.userInfo.url;
    //如果是管理员
    //if(store.state.userInfo.isAdmin){
     //  return next();
    //}else{
      //if(urls.indexOf(to.path) > -1){
        //则包含该元素
        window.sessionStorage.setItem("activePath", to.path);
        return next();
     // }else{
     //   return next("/401");
      //}


})
import store from '../store'//引入store


export default router


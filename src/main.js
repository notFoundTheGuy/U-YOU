// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
// import VueRouter from './router'
import VueRouter from 'vue-router'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入的页面
import homepage from './router/homepage.vue'
import user from './router/userCenter.vue'
import map from './router/map.vue'
import aboutUs from './router/aboutUs.vue'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
/* eslint-disable no-new */

//添加组件

//配置路由
var routes = [
  {
    path:'/',
    component: homepage,
  },
  {
    path: '/user',
    component: user,
  },
  {
    path: '/map',
    component: map,
  },
  {
    path: '/aboutUs',
    component:aboutUs
  }

];

// 生成路由实例
var router = new VueRouter({
  routes:routes
})
new Vue({
  el: '#app',
  // 把路由挂到vue上
  router,
  template: '<App/>',
  components: { App }
})
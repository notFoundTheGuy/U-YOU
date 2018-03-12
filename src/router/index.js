import Vue from 'vue'
import Router from 'vue-router'
import c0 from '@/components/routes/c0'
import c1 from '@/components/routes/c1'
import homepage from '../router/homepage.vue'
import user from '../router/userCenter.vue'
import map from '../router/map.vue'
import aboutUs from '../router/aboutUs.vue'

Vue.use(Router)
//配置路由
var routes = [
  {
    path: '/',
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
    component: aboutUs
  }

]
export default new Router({
  routes
})

import Vue from 'vue'
import Router from 'vue-router'
import c0 from '@/components/routes/c0'
import c1 from '@/components/routes/c1'

Vue.use(Router)
const routes = [
  {
    path: '/c0',
    name: 'c0',
    component: c0
  },
  {
    path: '/c1',
    name: 'c1',
    component: c1
  }
]
export default new Router({
  routes
})

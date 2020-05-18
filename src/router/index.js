import Vue from 'vue'
import Router from 'vue-router'
// 路由懒加载
const Index = () => import('views/Index.vue')
const List = () => import('views/List.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]
export default new Router({
  routes,
  mode: 'history'
})
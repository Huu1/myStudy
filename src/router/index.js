import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyForm from '../MyForm'
import Tree from '../MyTree'
import Crumb from '../MyCrumb'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: 'myform', name: 'myform', component: MyForm },
      { path: 'tree', name: 'tree', component: Tree },
      { path: 'crumb', name: 'crumb', component: Crumb },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

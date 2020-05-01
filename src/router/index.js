import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyForm from '../components/myForm/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: 'myform', name: 'myform', component: MyForm }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from './myRouter'
import myForm from '../myForm'
import home from '../../views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/myform', component: myForm },
        { path: '/', component: home }
    ]
})

export default router
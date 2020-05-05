import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from './store/myIndex'
// import router from './components/MyRouter'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

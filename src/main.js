import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 全局路由钩子设置
import "./permission.js";

// 自定义组件 设置按钮动态显示
import permission from "./directive/permission.js";
Vue.directive("permission", permission);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

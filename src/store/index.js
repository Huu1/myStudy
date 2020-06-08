import Vue from "vue";
import Vuex from "vuex";
import permission from "./modules/permission";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    permission,
    user,
  },
  getters: {
    roles: (state) => state.user.roles,
    permission_routes: (state) => state.permission.routes,
  },
});

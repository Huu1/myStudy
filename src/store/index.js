import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, num) {
      state.count += num
    }
  },
  actions: {
    asyncAdd({ commit }, val) {
      setTimeout(() => {
        commit('add', val)
      }, 1500);
    }
  },
  getters: {
    countNum(state) {
      return state.count + 10
    }
  },
  modules: {
  }
})

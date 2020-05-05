import Vue from 'vue'
import MVuex from '../MyVuex/myVuex'

Vue.use(MVuex)

export default new MVuex.Store({
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
      return new Promise(resolve => {
        setTimeout(() => {
          commit('add', val)
          resolve({ errno: 0, msg: '成功' })
        }, 2000)
      })
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

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: ''
  },
  getters: {
  },
  mutations: {
    updateProgress(state, newProgress) {
      state.progress = newProgress
    }
  },
  actions: {
  },
  modules: {
  }
})

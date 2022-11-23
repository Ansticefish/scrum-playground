import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: '0.5vw'
  },
  getters: {
  },
  mutations: {
    updateProgress(newProgress) {
      this.state.progress = newProgress
    }
  },
  actions: {
  },
  modules: {
  }
})

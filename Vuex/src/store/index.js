import { createStore } from 'vuex'
import message from './message'
import count from './count'

export default createStore({
  state() {
    return {
      msg: 'Hello Vue?!',
      count: 0
    }
  },
  getters: {},
  mutations: {},
  actions: {
    // context = > state, getters, commit, dispatch 가 존재한다.
  },
  modules: {
    message,
    count
  }
})
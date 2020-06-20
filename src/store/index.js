import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: 100,
    isLogin:false,
    currentuser:{},
    regkey: localStorage.getItem('regkey') ? localStorage.getItem('regkey') : ''
  },
  getters: {
    sum: state => {
      return state.num > 110 ? 0 : state.num
    },
    getLogin: state => state.isLogin,
    getCurrentuser: state => state.currentuser
  },
  mutations: {
    add(state, pload) {
      state.num += pload.n
      // setTimeout(() => {
      // }, 1000)
    },
    reduce(state, pload) {
      state.num -= pload.n
      // setTimeout(() => {
      // }, 1000)
    },
    changeLogin(state, user){
      state.regkey = user.regkey
      localStorage.setItem('regkey', user.regkey)
    },
    userStatus(state, user){
      if(user){
        state.currentuser = user;
        state.isLogoin = true
      }else{
        state.currentuser = null;
        state.isLogin = false
      }
    }
  },
  actions: {
    onous(content) {
      setTimeout(() => {
        content.commit('add', {
          n: 5
        })
      }, 1000);
    },
    asays(contents) {
      setTimeout(() => {
        contents.commit('reduce', {
          n: 5
        })
      }, 1000);
    },
    setUser({commit}, user){
      commit("userStatus", user)
    }
  }
})
export default store

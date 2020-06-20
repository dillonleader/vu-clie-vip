import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // num: 100,
    isLogin:false,
    regkey: localStorage.getItem('regkey') ? localStorage.getItem('regkey') : '',
    userinfo:{},
  },
  getters: {
    // sum: state => {
    //   return state.num > 110 ? 0 : state.num
    // },
    getCurrentuser: state => state.userinfo,
    getLogin: state => state.isLogin
  },
  mutations: {
    // add(state, pload) {
    //   state.num += pload.n
    //   // setTimeout(() => {
    //   // }, 1000)
    // },
    // reduce(state, pload) {
    //   state.num -= pload.n
    //   // setTimeout(() => {
    //   // }, 1000)
    // },
    
    userStatus(state, user){
      if(user){
        state.userinfo = user;
        this.state.isLogin =  !this.state.isLogin
      }
    },
    changeLogin(state, user){
      state.regkey == user
      localStorage.setItem('regkey', user)
    }
  },
  actions: {
    // onous(content) {
    //   setTimeout(() => {
    //     content.commit('add', {
    //       n: 5
    //     })
    //   }, 1000);
    // },
    // asays(contents) {
    //   setTimeout(() => {
    //     contents.commit('reduce', {
    //       n: 5
    //     })
    //   }, 1000);
    // }
  }
})
export default store

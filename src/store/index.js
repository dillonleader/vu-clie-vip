import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin:false,
    regkey: localStorage.getItem('regkey') ? localStorage.getItem('regkey') : '',
    userinfo:{},
  },
  getters: {
    getCurrentuser: state => state.userinfo,
    getLogin: state => state.isLogin
  },
  mutations: {
    
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
  }
})
export default store

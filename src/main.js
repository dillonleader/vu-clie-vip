import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/global.css";
import axios from 'axios'
import vueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
import $ from 'jquery'
Vue.use(vueAxios, axios)
Vue.prototype.$axios = axios
Vue.use(element)
Vue.use(Vuex)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost/'

axios.interceptors.request.use(config => {
    if (localStorage.getItem('regkey')) {
      config.headers.regkey = localStorage.getItem('regkey')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })



new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

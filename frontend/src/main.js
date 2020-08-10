import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

//axios configuration
Vue.prototype.$axios = axios.create({ baseURL: "http://localhost:9090" })

new Vue({
  router: VueRouter,
  vuetify,
  render: h => h(App),
}).$mount('#app')

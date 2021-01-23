import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AOS from 'aos'

import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init(),
    Vue.use(BootstrapVue),
    Vue.use(IconsPlugin)
  },
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'
import VueApexCharts from 'vue-apexcharts'
import { createProvider } from './vue-apollo'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueTypedJs,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')

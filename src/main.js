// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import Toastr from 'vue-toastr'
import 'vue-toastr/dist/vue-toastr.css'
import VuexStore from './store'
import { sync } from 'vuex-router-sync'

Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<div style="height: 100%;"><App/><vue-toastr ref="toastr"></vue-toastr></div>',
  components: {
    App,
    'vue-toastr': Toastr
  }
})

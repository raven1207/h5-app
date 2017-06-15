// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AccordionItem from '@nextindex/vue-simple-accordion'
import Vuerify from 'vuerify'
import VuerifyDirective from 'v-vuerify-next'
import Vuex from 'vuex'
import VueResource from 'vue-resource';
import store from './store'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(Vuerify)
Vue.use(VuerifyDirective)

// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  data: {
    showModal: false
  }
})

export default {
  components: {
    AccordionItem
  }
}

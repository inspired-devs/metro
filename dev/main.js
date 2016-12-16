import Vue from 'vue'
import Metrovue from 'metrovue'

Vue.use(Metrovue) // Install Quasar Framework

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(require('./App'))
})

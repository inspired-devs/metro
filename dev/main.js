import Vue from 'vue'
import Metrovue from 'metrovue'
import router from './router'

Vue.use(Metrovue) // Install Quasar Framework

// require('sass-loader!font-awesome/scss/font-awesome.scss')
// require('!url-loader!sass-loader!font-awesome/scss/font-awesome.scss')

require('../src/sass/metrovue.sass')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(require('./App'))
})

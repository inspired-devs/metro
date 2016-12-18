import Layout from './components/layout/Layout.vue'
import Level from './components/layout/Level.vue'
import Vmenu from './components/menus/V-menu.vue'
import Tmenu from './components/menus/T-menu.vue'

let Vue // bind on install

function registerComponents (_Vue) {
  ;[
    ['layout', Layout],
    ['v-menu', Vmenu],
    ['t-menu', Tmenu],
    ['level', Level]
  ].forEach(c => {
    _Vue.component('metrovue-' + c[0], c[1])
  })
}

export default function (_Vue) {
  if (Vue) {
    console.warn('Metrovue already installed in Vue.')
    return
  }

  Vue = _Vue

  registerComponents(_Vue)
}

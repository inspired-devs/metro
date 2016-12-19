require('lodash')

// Layouts
import Layout from './components/layout/Layout.vue'
import Level from './components/layout/Level.vue'

// Menus
import Vmenu from './components/menus/V-menu.vue'
import Tmenu from './components/menus/T-menu.vue'
import Sidebar from './components/menus/Sidebar.vue'

// controls
import Tabs from './components/controls/Tabs.vue'
import Card from './components/controls/Card.vue'
import Media from './components/controls/Media.vue'
import Message from './components/controls/Message.vue'
import Notify from './components/controls/Notify.vue'

// grid
import Tile from './components/grid/Tile.vue'
import Box from './components/grid/Box.vue'

let Vue // bind on install

function registerComponents (_Vue) {
  ;[
    ['layout', Layout],
    ['v-menu', Vmenu],
    ['t-menu', Tmenu],
    ['sidebar', Sidebar],
    ['level', Level],
    ['tabs', Tabs],
    ['card', Card],
    ['media', Media],
    ['message', Message],
    ['tile', Tile],
    ['box', Box],
    ['notify', Notify]
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

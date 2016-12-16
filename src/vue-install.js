import Layout from './components/layout/Layout.vue'

let Vue // bind on install

function registerComponents (_Vue) {
  ;[
    ['layout', Layout]
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

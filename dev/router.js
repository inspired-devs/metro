import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`./components/${component}.vue`)
}

let routes = [
  {path: '/', name: 'index', component: load('index')},
  {
    path: '/test-layout',
    name: 'layouts',
    component: load('test-layout/layout')
  },
  {
    path: '/css-components',
    name: 'cssComponents',
    component: load('css-components/Index'),
    children: [
      {
        path: 'grid',
        name: 'cssGrid',
        component: load('css-components/grid/Index'),
        children: [
          {path: '', component: load('css-components/grid/Tiles')},
          {path: 'columns', name: 'cssColumn', component: load('css-components/grid/Columns')},
          {path: 'tiles', name: 'cssGridTiles', component: load('css-components/grid/Tiles')}
        ]
      },
      {
        path: 'elements',
        name: 'cssElements',
        component: load('css-components/elements/Index'),
        children: [
          {path: '', component: load('css-components/elements/Box')},
          {path: 'box', name: 'cssElementsBox', component: load('css-components/elements/Box')},
          {path: 'button', name: 'cssElementsButton', component: load('css-components/elements/Button')}
        ]
      }
    ]
  }
]

export default new VueRouter({
  // mode: 'history',
  routes
})

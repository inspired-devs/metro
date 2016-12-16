export default function (Metrovue) {
  // auto install in standalone mode
  if (typeof window !== 'undefined' && window.Vue) {
    window.Metrovue = Metrovue
    window.Vue.use(Metrovue)
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$alert = function (text) {
      // eslint-disable-next-line no-undef
      M.toast({ html: text })
    }
    Vue.prototype.$error = function (text) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[Ошибка]: ${text}` })
    }
  }
}

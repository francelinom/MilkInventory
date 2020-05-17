import Vue from 'vue'
import Vuex from 'vuex'
import itens from './itens.module'
import stocks from './stock.module'
Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    modules: {
      itens,
      stocks
    },
    strict: process.env.DEV
  })

  return store
}

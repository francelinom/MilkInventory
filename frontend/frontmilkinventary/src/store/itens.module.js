import {
  ItemService
} from '../services/api.service'

export default {
  state: {
    list: [],
    createItem: []

  },
  mutations: {
    setItens (state, list) {
      state.list = list
    },
    setCreateItem (state, payload) {
      state.createItem = payload
    }
  },
  actions: {
    async getItens ({
      commit
    }) {
      console.log('GETITENS')
      const result = await ItemService.query()
      commit('setItens', result.data)
    },
    async createItem (context) {
      const {
        data
      } = await ItemService.query()
      context.commit('setCreateItem', data)
    }
  },
  getters: {
    itensFilted: state => {
      const data = new Date()
      const dataAtual = `${data.getFullYear()}-${data.getDay()}-${data.getDate()}`
      return state.list.filter(item => {
        return item.validity === dataAtual
      })
    }
  }
}

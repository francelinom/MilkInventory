import {
  ItemService
} from '../services/api.service'

export default {
  state: {
    list: []
  },
  mutations: {
    setItens (state, list) {
      state.list = list
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
    async createItem ({
      commit
    }, item) {
      try {
        console.log('CREATEITEM')
        const result = await ItemService.create(item)
        return result
      } catch (error) {
        console.log('Error ao criar item' + error)
      }
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

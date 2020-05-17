import {
  StockService
} from '../services/api.service'

export default {
  state: {
    list: [],
    listid: []
  },
  mutations: {
    setStocks (state, list) {
      state.list = list
    },
    setStocksId (state, listid) {
      state.listid = listid
    }
  },
  actions: {
    async getStocks ({
      commit
    }) {
      console.log('GETSTOCKS')
      const result = await StockService.query()
      commit('setStocksId', result.data)
    },
    async getUnityStock ({
      commit
    }, id) {
      console.log('GETUNITYSTOCKS')
      const result = await StockService.get(id)
      commit('setStocks', result.data)
    },
    async createStock ({
      commit
    }, stock) {
      try {
        console.log('CREATESTOCK')
        const result = await StockService.create(stock)
        return result
      } catch (error) {
        console.log('Error ao cria stock' + error)
      }
    }
  }
  // Fazer getters para comparar quantidade do stock com quantidade minima do item
}

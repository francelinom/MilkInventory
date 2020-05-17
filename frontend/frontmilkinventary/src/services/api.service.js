import http from '../boot/http'

const ApiService = {
  query (resource, params) {
    return http.get(resource, params).catch(error => {
      throw new Error(`[MilkService] ApiService erro ${error}`)
    })
  },

  get (resource, id) {
    return http.get(`/${resource}/${id}`).catch(error => {
      throw new Error(`[MilkService] ApiService erro ${error}`)
    })
  },

  post (resource, params) {
    return http.post(resource, params)
  },

  update (resource, id, params) {
    return http.put(`/${resource}`, params)
  },

  delete (resource, id) {
    return http.delete(`/${resource}/${id}`).catch(error => {
      throw new Error(`[MilkService] ApiService erro ${error}`)
    })
  }

}

export default ApiService

export const ItemService = {

  query (params) {
    return ApiService.query('itens', {
      params
    })
  },
  get (id) {
    return ApiService.get('itens', id)
  },
  create (params) {
    return ApiService.post('itens', params)
  },
  update (id, params) {
    return ApiService.update('itens', id, params)
  },
  delete (id) {
    return ApiService.delete('itens', id)
  }
}

export const StockService = {

  query (params) {
    return ApiService.query('stocks', {
      params
    })
  },
  get (id) {
    return ApiService.get('stocks', id)
  },
  create (params) {
    return ApiService.post('stocks', params)
  },
  update (id, params) {
    return ApiService.update('stocks', id, params)
  },
  delete (id) {
    return ApiService.delete('stocks', id)
  }
}

'use strict'

const Stock = use('App/Models/Stock')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with items
 */
class StockController {
  /**
   * Show a list of all items.
   * GET items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {

    const stocks = await Stock.all()

    return stocks

  }

  /**
   * Create/save a new item.
   * POST items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request}) {

    // const { id } = auth.user procedimento para quando tiver relacionamento com estoque
    const data = request.only([
      'qtyStock',
    ])
  
    const stock = await Stock.create({ ...data /* user_id: id */ })
  
    return stock

  }

  /**
   * Display a single item.
   * GET items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params}) {

    const stock = await Stock.findOrFail(params.id)

    await stock.load('itens')
  
    return stock

  }

  /**
   * Update item details.
   * PUT or PATCH items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request}) {

    const stock = await Stock.findOrFail(params.id)

    const data = request.only([
      'qtyStock'
    ])
  
    stock.merge(data)
  
    await stock.save()
  
    return stock

}

  /**
   * Delete a item with id.
   * DELETE items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params}) {

    const stock = await Stock.findOrFail(params.id)

    // Ver outros métodos para deletar

    await stock.delete()

  }
}

module.exports = StockController


'use strict'

const Item = use('App/Models/Item')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with items
 */
class ItemController {
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

    const itens = await Item.all()

    return itens

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
      'stock_id',
      'name',
      'brand',
      'unity',
      'qtyMinimun',
      'validity'
    ])
  
    const item = await Item.create({ ...data})
  
    return item

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

    const item = await Item.findOrFail(params.id)
  
    return item

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

    const item = await Item.findOrFail(params.id)

    const data = request.only([
      'stock_id',
      'name',
      'brand',
      'unity',
      'qtyMinimun',
      'validity'
    ])
  
    item.merge(data)
  
    await item.save()
  
    return item

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

    const item = await Item.findOrFail(params.id)

    // Ver outros métodos para deletar

    await item.delete()

  }
}

module.exports = ItemController

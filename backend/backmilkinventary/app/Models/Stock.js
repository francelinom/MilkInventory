'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Stock extends Model {

    itens () {
        return this.hasMany('App/Models/Item')
    }

}

module.exports = Stock

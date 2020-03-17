'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table
        .integer('stock_id')
        .unsigned()
        .references('id')
        .inTable('stocks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('brand').notNullable()
      table.string('unity').notNullable()
      table.decimal('qtyMinimun').notNullable()
      table.date('validity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema

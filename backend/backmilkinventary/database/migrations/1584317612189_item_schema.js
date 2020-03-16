'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      // Renomear para inglês
      table.increments()
      table.string('nome').notNullable()
      table.string('marca').notNullable()
      table.string('unidade').notNullable()
      table.decimal('qtdMinima').notNullable()
      table.date('validade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema

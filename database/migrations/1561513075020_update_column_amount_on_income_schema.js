'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UpdateColumnAmountOnIncomeSchema extends Schema {
  up () {
    this.alter('incomes', (table) => {
      table.float('amount', 12, 2).notNullable().alter();
    })
  }

  down () {
    this.alter('incomes', (table) => {
      table.float('amount', 8, 2).notNullable().alter();
    })
  }
}

module.exports = UpdateColumnAmountOnIncomeSchema;

'use strict';

const Schema = use('Schema');

class IncomeSchema extends Schema {
  up () {
    this.create('incomes', (table) => {
      table.increments();
      table.integer('wallet_id').unsigned();
      table.foreign('wallet_id').references('wallets.id');

      table.float('amount').notNullable();
      table.string('name', 100).notNullable();
      table.timestamp('created_at').defaultTo(this.fn.now());
    })
  }

  down () {
    this.drop('incomes')
  }
}

module.exports = IncomeSchema;

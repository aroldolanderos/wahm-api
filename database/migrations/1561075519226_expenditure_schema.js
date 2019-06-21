'use strict';

const Schema = use('Schema');

class ExpenditureSchema extends Schema {
  up () {
    this.create('expenditures', (table) => {
      table.increments();
      table.integer('wallet_id').unsigned();
      table.foreign('wallet_id').references('wallets.id');

      table.float('amount').notNullable();
      table.enum('expenditure_type', ['PRODUCT', 'SERVICE']).notNullable();
      table.string('name', 100).notNullable();
      table.integer('quantity').nullable();
      table.string('measure', 10).nullable();
      table.string('category', 50).notNullable();
      table.integer('level_need').notNullable();
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').nullable();
    })
  }

  down () {
    this.drop('expenditures')
  }
}

module.exports = ExpenditureSchema;

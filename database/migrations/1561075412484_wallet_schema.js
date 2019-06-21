'use strict';

const Schema = use('Schema');

class WalletSchema extends Schema {
  up () {
    this.create('wallets', (table) => {
      table.increments();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.float('available_balance').defaultTo(0);
      table.float('total_balance').defaultTo(0);
      table.float('amount_saved').defaultTo(0);
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').nullable();
    })
  }

  down () {
    this.drop('wallets')
  }
}

module.exports = WalletSchema;

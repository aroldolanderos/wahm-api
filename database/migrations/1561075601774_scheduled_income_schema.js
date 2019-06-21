'use strict';

const Schema = use('Schema');

class ScheduledIncomeSchema extends Schema {
  up () {
    this.create('scheduled_incomes', (table) => {
      table.increments();
      table.integer('wallet_id').unsigned();
      table.foreign('wallet_id').references('wallets.id');

      table.float('amount').notNullable();
      table.string('description', 250).nullable();
      table.integer('period').notNullable().comment('period on days reference');
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').nullable();
    })
  }

  down () {
    this.drop('scheduled_incomes')
  }
}

module.exports = ScheduledIncomeSchema;

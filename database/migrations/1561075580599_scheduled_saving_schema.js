'use strict';

const Schema = use('Schema');

class ScheduledSavingSchema extends Schema {
  up () {
    this.create('scheduled_savings', (table) => {
      table.increments();
      table.integer('wallet_id').unsigned();
      table.foreign('wallet_id').references('wallets.id');

      table.string('description', 250).nullable();
      table.float('starting_amount').notNullable();
      table.float('final_amount').nullable();
      table.float('rate_interest').nullable();
      table.integer('period').nullable().comment('period on days reference');
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').nullable();
    })
  }

  down () {
    this.drop('scheduled_savings')
  }
}

module.exports = ScheduledSavingSchema;

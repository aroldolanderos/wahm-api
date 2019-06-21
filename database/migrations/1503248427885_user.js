'use strict';

const Schema = use('Schema');

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('firstname', 80).notNullable();
      table.string('lastname', 80).notNullable();
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.string('country', 50).nullable();
      table.string('badge', 20).nullable();
      table.date('birthday').nullable();
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('updated_at').nullable();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema;

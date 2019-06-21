'use strict';

const Model = use('Model');

class Wallet extends Model {

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

  incomes() {
    return this.hasMany('App/Models/Income');
  }

  expenditures() {
    return this.hasMany('App/Models/Expenditures');
  }

  savings() {
    return this.hasMany('App/Models/Saving');
  }

  scheduledSavings() {
    return this.hasMany('App/Models/ScheduledSaving');
  }

  scheduledIncomes() {
    return this.hasMany('App/Models/ScheduledIncome');
  }
}

module.exports = Wallet;

'use strict';

const Model = use('Model');

class ScheduledSaving extends Model {

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  wallets() {
    return this.belongsToMany('App/Models/Wallet');
  }
}

module.exports = ScheduledSaving;
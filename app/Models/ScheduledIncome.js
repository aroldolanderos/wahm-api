'use strict';

const Model = use('Model');

class ScheduledIncome extends Model {

  static boot () {
    super.boot();

    this.addHook('beforeSave', async (savingInstance) => {
      savingInstance.created_at = new Date();
      savingInstance.updated_at = new Date();
    });
  }

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

module.exports = ScheduledIncome;

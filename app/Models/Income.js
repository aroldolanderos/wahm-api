'use strict';

const Model = use('Model');

class Income extends Model {

  static boot () {
    super.boot();

    this.addHook('beforeSave', async (incomeInstance) => {
      incomeInstance.created_at = new Date();
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

module.exports = Income;

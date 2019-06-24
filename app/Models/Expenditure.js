'use strict';

const Model = use('Model');

class Expenditure extends Model {

  static boot () {
    super.boot();

    this.addHook('beforeSave', async (expenditureInstance) => {
      expenditureInstance.created_at = new Date();
      expenditureInstance.updated_at = new Date();
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

module.exports = Expenditure;

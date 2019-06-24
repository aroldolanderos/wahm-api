'use strict'

const Hash = use('Hash');
const Model = use('Model');
const Wallet = use('App/Models/Wallet');

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    });

    this.addHook('afterCreate', async (userInstance) => {
      // create a wallet for the new user
      let wallet = new Wallet();
      userInstance.wallet().save(wallet);
    });
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  wallet() {
    return this.hasOne('App/Models/Wallet');
  }
}

module.exports = User

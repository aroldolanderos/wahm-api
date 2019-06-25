'use strict'

const Saving = use('App/Models/Saving');
const Wallet = use('App/Models/Wallet');

class SavingController {
  async all({ response, auth }) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const savings = await Saving.query()
      .where('wallet_id', '=', wallet.id)
      .fetch();

    return response.json({
      'data': savings,
      'message': 'List savings'
    });
  }

  async findOne({ response, params, auth }) {
    const savingId = params.id;
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const saving = await Saving.query()
      .where('wallet_id', '=', wallet.id)
      .where('id', '=', savingId)
      .fetch();

    return response.json({
      'data': saving,
      'message': 'Income saving!'
    });
  }

  async save({request, response, auth}) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const { amount, name } = request.all();

    const newSaving = new Saving();
    newSaving.wallet_id = wallet.id;
    newSaving.amount = amount;
    newSaving.name = name;
    await newSaving.save();

    return response.json({
      'data': newSaving,
      'message': 'Saving created!'
    });
  }
}

module.exports = SavingController;

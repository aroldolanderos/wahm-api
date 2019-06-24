'use strict'

const moment = require('moment');
const Expenditure = use('App/Models/Expenditure');
const Wallet = use('App/Models/Wallet');

class ExpenditureController {
  async all({ response, auth }) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const expenditures = await Expenditure.query()
      .where('wallet_id', '=', wallet.id)
      .fetch();

    return response.json({
      'data': expenditures,
      'message': 'List expenditures'
    });
  }

  async findOne({ response, params, auth }) {
    const expenditureId = params.id;
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const expenditure = await Expenditure.query()
      .where('wallet_id', '=', wallet.id)
      .where('id', '=', expenditureId)
      .fetch();

    return response.json({
      'data': expenditure,
      'message': 'Expenditure listed!'
    });
  }

  async save({request, response, auth}) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const newExpenditure = new Expenditure();
    newExpenditure.wallet_id = wallet.id;
    newExpenditure.amount = request.input('amount');;
    newExpenditure.name = request.input('name');;
    newExpenditure.quantity = request.input('quantity');;
    newExpenditure.measure = request.input('measure');;
    newExpenditure.category = request.input('category');;
    newExpenditure.level_need = request.input('level_need');;
    await newExpenditure.save();

    return response.json({
      'data': newExpenditure,
      'message': 'Expenditure created!'
    });
  }
}

module.exports = ExpenditureController

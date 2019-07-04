'use strict'

const moment = require('moment');
const Income = use('App/Models/Income');
const Wallet = use('App/Models/Wallet');
const Database = use('Database');

class IncomeController {
  async all({ response, auth }) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const incomes = await Income.query()
      .where('wallet_id', '=', wallet.id)
      .fetch();

    return response.json({
      'data': incomes,
      'message': 'List incomes'
    });
  }

  async findOne({ response, params, auth }) {
    const incomeId = params.id;
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const income = await Income.query()
      .where('wallet_id', '=', wallet.id)
      .where('id', '=', incomeId)
      .fetch();

    return response.json({
      'data': income,
      'message': 'Income listed!'
    });
  }

  async save({request, response, auth}) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);
    //
    const { amount, name } = request.all();

    const newIncome = new Income();
    newIncome.wallet_id = wallet.id;
    newIncome.amount = amount;
    newIncome.name = name;
    await newIncome.save();

    return response.json({
      'data': newIncome,
      'message': 'Income created!'
    });
  }

  async delete({response, params, auth}) {
    const incomeId = params.id;
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const income = await Income.query()
      .where('wallet_id', '=', wallet.id)
      .where('id', '=', incomeId)
      .delete();

    return response.json({
      'data': income,
      'message': 'Income deleted!'
    });
  }
}

module.exports = IncomeController;

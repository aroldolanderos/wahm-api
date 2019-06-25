'use strict'

const ScheduledIncome = use('App/Models/ScheduledIncome');
const Wallet = use('App/Models/Wallet');

class ScheduledIncomeController {
  async all({ response, auth }) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const scheduledIncomes = await ScheduledIncome.query()
      .where('wallet_id', '=', wallet.id)
      .fetch();

    return response.json({
      'data': scheduledIncomes,
      'message': 'List scheduled Incomes'
    });
  }

  async findOne({ response, params, auth }) {
    const scheduledIncomesId = params.id;
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const scheduledIncome = await ScheduledIncome.query()
      .where('wallet_id', '=', wallet.id)
      .where('id', '=', scheduledIncomesId)
      .fetch();

    return response.json({
      'data': scheduledIncomes,
      'message': 'scheduled Incomes listed!'
    });
  }

  async save({request, response, auth}) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const newScheduledIncome = new ScheduledIncome();
    newScheduledIncome.wallet_id = wallet.id;
    newScheduledIncome.description = request.input('description');
    newScheduledIncome.amount = request.input('amount');
    newScheduledIncome.period = request.input('period');
    await newScheduledIncome.save();

    return response.json({
      'data': newScheduledIncome,
      'message': 'Scheduled Saving created!'
    });
  }
}

module.exports = ScheduledIncomeController;

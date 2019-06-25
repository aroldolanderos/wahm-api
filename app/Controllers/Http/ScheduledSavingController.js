'use strict'

const ScheduledSaving = use('App/Models/ScheduledSaving');
const Wallet = use('App/Models/Wallet');

class ScheduledSavingController {
  async all({ response, auth }) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const scheduledSavings = await ScheduledSaving.query()
      .where('wallet_id', '=', wallet.id)
      .fetch();

    return response.json({
      'data': scheduledSavings,
      'message': 'List Scheduled Saving'
    });
  }

  async findOne({ response, params, auth }) {
    const scheduledSavingId = params.id;
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const scheduledSaving = await ScheduledSaving.query()
      .where('wallet_id', '=', wallet.id)
      .where('id', '=', scheduledSavingId)
      .fetch();

    return response.json({
      'data': scheduledSaving,
      'message': 'Scheduled Saving listed!'
    });
  }

  async save({request, response, auth}) {
    const user = await auth.getUser();
    const wallet = await Wallet.findBy('user_id', user.id);

    const newScheduledSSaving = new ScheduledSaving();
    newScheduledSSaving.wallet_id = wallet.id;
    newScheduledSSaving.description = request.input('description');
    newScheduledSSaving.starting_amount = request.input('starting_amount');
    newScheduledSSaving.final_amount = request.input('final_amount', null);
    newScheduledSSaving.rate_interest = request.input('rate_interest', null);
    newScheduledSSaving.period = request.input('period', null);
    await newScheduledSSaving.save();

    return response.json({
      'data': newScheduledSSaving,
      'message': 'Scheduled Saving created!'
    });
  }
}

module.exports = ScheduledSavingController

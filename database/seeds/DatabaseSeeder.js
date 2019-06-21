'use strict';

const Factory = use('Factory');

class DatabaseSeeder {
  async run () {

    const usersArray = await Factory.model('App/Models/User').createMany(1);

    usersArray.forEach(async (user) => {
      const wallet = await Factory.model('App/Models/Wallet').create({user_id: user.id});

      for(let i=1; i<=20; i++) {
        const income = await Factory.model('App/Models/Income').create({wallet_id: wallet.id});
        const expenditure = await Factory.model('App/Models/Expenditure').create({wallet_id: wallet.id, index: i});
      }

    });
  }
}

module.exports = DatabaseSeeder;


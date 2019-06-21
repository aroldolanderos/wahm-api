'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory');
const Hash = use('Hash');

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    firstname: faker.first(),
    lastname: faker.last(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    birthday: faker.birthday(),
    created_at: new Date(),
    updated_at: new Date()
  }
});


Factory.blueprint('App/Models/Wallet', async (faker, i, data) => {
  return {
    user_id: data.user_id,
    available_balance: faker.floating({ min: 0, max: 1000000 }),
    total_balance: faker.floating({ min: 0, max: 1000000, fixed: 0 }),
    amount_saved: faker.floating({ min: 0, max: 1000000, fixed: 0 }),
    created_at: new Date(),
    updated_at: new Date()
  }
});


Factory.blueprint('App/Models/Income', async (faker, i, data) => {
  return {
    wallet_id: data.wallet_id,
    amount: faker.floating({ min: 0, max: 100000, fixed: 0 }),
    name: faker.sentence({ words: 5 }),
    created_at: new Date()
  }
});


Factory.blueprint('App/Models/Expenditure', async (faker, i, data) => {
  return {
    wallet_id: data.wallet_id,
    amount: faker.floating({ min: 0, max: 100000, fixed: 0 }),
    expenditure_type: (data.index % 2 == 0) ? 'PRODUCT':'SERVICE',
    name: faker.sentence({ words: 5 }),
    category: faker.word(),
    quantity: (data.index % 2 == 0) ? faker.integer({ min: 1, max: 20 }) : null,
    measure: (data.index % 2 == 0) ? faker.word({ length: 2 }) : null,
    level_need: faker.integer({ min: 1, max: 10 }),
    created_at: new Date(),
    updated_at: new Date()
  }
});

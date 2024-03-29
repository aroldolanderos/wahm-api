'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')


Route.group(() => {
  Route.post('login', 'AuthController.login');
  Route.post('register', 'AuthController.register');
  Route.put('profile', 'AuthController.profile').middleware(['auth:jwt']);


  Route.resource('incomes', 'IncomeController')
    .middleware(['auth'])
    .apiOnly();

  Route.resource('expenditures', 'ExpenditureController')
    .middleware(['auth'])
    .apiOnly();

  // Route.get('expenditures/:id', 'ExpenditureController.findOne').middleware(['auth']);
  // Route.get('expenditures', 'ExpenditureController.all').middleware(['auth']);
  // Route.post('expenditures', 'ExpenditureController.save').middleware(['auth']);

  Route.get('savings/:id', 'SavingController.findOne').middleware(['auth']);
  Route.get('savings', 'SavingController.all').middleware(['auth']);
  Route.post('savings', 'SavingController.save').middleware(['auth']);

  Route.get('scheduled/savings/:id', 'ScheduledSavingController.findOne').middleware(['auth']);
  Route.get('scheduled/savings', 'ScheduledSavingController.all').middleware(['auth']);
  Route.post('scheduled/savings', 'ScheduledSavingController.save').middleware(['auth']);

  Route.get('scheduled/incomes/:id', 'ScheduledIncomeController.findOne').middleware(['auth']);
  Route.get('scheduled/incomes', 'ScheduledIncomeController.all').middleware(['auth']);
  Route.post('scheduled/incomes', 'ScheduledIncomeController.save').middleware(['auth']);

}).prefix('api/v1');

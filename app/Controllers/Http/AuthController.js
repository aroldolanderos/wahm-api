'use strict'

const User = use('App/Models/User');

class AuthController {
  async login({ request, response, auth }) {
    const { email, password } = request.all();
    const logged = await auth.attempt(email, password, true);
    return response.json(logged);
  }

  async register({ request, response}) {
    const userInstance = new User();
    const { user } = await request.all();

    userInstance.firstname = request.input('firstname');
    userInstance.lastname = request.input('lastname');
    userInstance.email = request.input('email');
    userInstance.password = request.input('password');

    await userInstance.save();

    return response.json(userInstance);
  }

  async profile(request, response, auth) {
    let user = await auth.getUser();
    const userInput = request.input('user');

    user.email = userInput.email;
    user.firstname = userInput.firstname;
    user.lastname = userInput.lastname;
    await user.save();

    const logged = await auth.generate(user, true);

    return response.json(logged);
  };
}

module.exports = AuthController

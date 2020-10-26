const services = require('../services').services;

module.exports = {
  async greeting(req, res) {
    try {
      const birthdayGreetingView = await services.BirthdayGreetingService.greeting();
      res.send(birthdayGreetingView);
    } catch (err) {
      console.log('error', err);
      throw error;
    }
  },

  async customizedGreeting(req, res) {
    try {
      const birthdayGreetingView = await services.BirthdayGreetingService.customizedGreetingByGender();
      console.log(birthdayGreetingView)
      res.send(birthdayGreetingView);
    } catch (err) {
      console.log('error', err);
      throw error;
    }
  }
}
const services = require('../services').services;
const CreateProfileRequest = require('../request/createProfileRequest')

module.exports = {
  async createProfile(req, res) {
    // console.log('body', req.body);
    try {
      const result = await services.ProfileService.createProfile(new CreateProfileRequest(req.body));
      // Should be a presenter!!
      console.log('result', result);
      res.send(result);
    } catch (err) {
      console.log('create error', err);
      throw error;
    }
  }
}
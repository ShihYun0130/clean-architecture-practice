const BirthdayGreetingService = require('./birthdayGreetingService');
const ProfileService = require('./profileService');
const ProfileRepository = require('../repository/ProfileRepository');

const services = {}

exports.services = services;

exports.init = (models) => {
  const profileRepository = new ProfileRepository(models.Profile)
  services.BirthdayGreetingService = new BirthdayGreetingService({ profileRepository });
  services.ProfileService = new ProfileService({ profileRepository });
  return services;
}
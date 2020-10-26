const BirthdayGreetingView = require('../viewModel/birthdayGreetingView');
const CustomizedBirthdayGreetingView = require('../viewModel/customizedBirthdayGreetingView');

module.exports = class BirthdayGreetingService {
  constructor({ profileRepository }) {
    this._profileRepository = profileRepository;
  }

  async greeting() {
    const birthdayProfileList = await this._profileRepository.getByCurrentDate();
    const birthdayGreetingView = birthdayProfileList.map(birthdayProfile => new BirthdayGreetingView(birthdayProfile));
    return birthdayGreetingView
  }

  async customizedGreetingByGender() {
    const birthdayProfiles = await this._profileRepository.getByCurrentDateAndGender();
    let customizedMessages = [];
    birthdayProfiles.forEach(profile => {
      customizedMessages.push({
        firstName: profile.firstName,
        discount: profile.getDiscountByGender(),
        recommendedItems: profile.getRecommendedItemsByGender()
      })
    })
    console.log('customizedMessageData:', customizedMessages)
    const birthdayGreetingView = customizedMessages.map(message => new CustomizedBirthdayGreetingView(message));
    return birthdayGreetingView
  }
}
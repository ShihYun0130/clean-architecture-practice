const BirthdayGreetingView = require('../viewModel/birthdayGreetingView');
const CustomizedBirthdayGreetingView = require('../viewModel/customizedBirthdayGreetingView');
const MessageEntity = require('../entity/messageEntity');
const CustomizedMessageEntity = require('../entity/customizedMessageEntity');

module.exports = class BirthdayGreetingService {
  constructor({ profileRepository }) {
    this._profileRepository = profileRepository;
  }

  async greeting() {
    const birthdayProfileList = await this._profileRepository.getByCurrentDate();
    const greetingMessages = birthdayProfileList.map(profile => new MessageEntity(profile))
    const birthdayGreetingView = greetingMessages.map(message => new BirthdayGreetingView(message));
    return birthdayGreetingView
  }

  async customizedGreetingByGender() {
    const birthdayProfiles = await this._profileRepository.getByCurrentDateAndGender();
    const customizedMessages = birthdayProfiles.map(profile =>
      new CustomizedMessageEntity(profile)
    )
    console.log('customizedMessageData:', customizedMessages)
    const birthdayGreetingView = customizedMessages.map(message => new CustomizedBirthdayGreetingView(message));
    return birthdayGreetingView
  }
}
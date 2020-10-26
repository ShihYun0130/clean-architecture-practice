module.exports = class CustomizedBirthdayGreetingView {
  constructor(message) {
    this.subject = 'Subject: Happy birthday!'
    this.content = `Happy birthday, dear ${message.firstName}!\nWe We offer special discount ${message.discount} off for the following items:\n${message.recommendedItems}`
  }
}
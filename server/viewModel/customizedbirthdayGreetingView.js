module.exports = class CustomizedBirthdayGreetingView {
  constructor(message) {
    this.subject = message.subject
    this.content = message.content
  }
}
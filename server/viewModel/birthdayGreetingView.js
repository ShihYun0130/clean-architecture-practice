module.exports = class BirthdayGreetingView {
  constructor(message) {
    this.subject = message.subject
    this.content = message.content
  }
}
module.exports = class BirthdayGreetingView {
  constructor(birthdayGreetingData) {
    this.subject = 'Subject: Happy birthday!'
    this.content = `Happy birthday, dear ${birthdayGreetingData.first_name}!`
  }
}
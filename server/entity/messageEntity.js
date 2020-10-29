module.exports = class MessageEntity {
  constructor(profile) {
    this.subject = 'Subject: Happy birthday!'
    this.content = `Happy birthday, dear ${profile.first_name}!`
  }
}
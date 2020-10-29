module.exports = class CustomizedProfileEntity {
  constructor(profile) {
    this.firstName = profile.first_name
    this.gender = profile.gender
    this.lastName = profile.lastName
    this.dateOfBirth = profile.date_of_birth
    this.email = profile.email
  }
}
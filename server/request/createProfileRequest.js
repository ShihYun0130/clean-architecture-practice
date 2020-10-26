module.exports = class CreateProfileRequest {
  constructor(data) {
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.gender = data.gender
    this.dateOfBirth = data.dateOfBirth
    this.email = data.email
  }
}
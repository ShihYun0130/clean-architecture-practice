const CustomizedProfileEntity = require('../entity/customizedProfileEntity')

module.exports = class ProfileRepository {
  constructor(profile) {
    this._profile = profile;
  }

  async createProfile(firstName, lastName, gender, dateOfBirth, email) {
    console.log('createProfile', firstName, lastName)
    const profileId = await this._profile.create({
      first_name: firstName,
      last_name: lastName,
      gender,
      date_of_birth: dateOfBirth,
      email
    })
    return profileId
  }

  async getByCurrentDate(date = new Date()) {
    const birthdayProfiles = await this._profile.aggregate([{
      "$project": {
        "first_name": 1,
        "date_of_birth": {
          "$dateFromParts": {
            'year': { "$year": date },
            'month': { "$month": '$date_of_birth' },
            'day': { "$dayOfMonth": '$date_of_birth' }
          }
        },
      }
    }, {
      "$match": {
        "$expr": {
          "$and": [
            { "$eq": [{ "$dayOfMonth": '$date_of_birth' }, { "$dayOfMonth": date }] },
            { "$eq": [{ "$month": '$date_of_birth' }, { "$month": date }] },
          ],
        },
      }
    }]);
    console.log('BirthdayList:', birthdayProfiles);
    return birthdayProfiles;
  }

  async getByCurrentDateAndGender() {
    const birthdayProfiles = await this.getByCurrentDate()
    const customizedMessages = birthdayProfiles.map(profile => new CustomizedProfileEntity(profile))
    console.log('customizedMessages:', customizedMessages)
    return customizedMessages
  }
}
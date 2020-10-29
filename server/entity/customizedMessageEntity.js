module.exports = class CustomizedMessageEntity {
  constructor(profile) {
    this.subject = 'Subject: Happy birthday!'
    this.content = `Happy birthday, dear ${profile.firstName}!\nWe We offer special discount ${this.getDiscountByGender(profile.gender)} off for the following items:\n${this.getRecommendedItemsByGender(profile.gender)}`
  }

  getDiscountByGender(gender) {
    return gender === 'female' ? '50%' : '20%'
  }

  getRecommendedItemsByGender(gender) {
    return gender === 'female' ? 'Cosmetic, LV Handbags' : 'White Wine, iPhone X'
  }
}
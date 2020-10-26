module.exports = class CustomizedBirthdayGreetingEntity {
  constructor(profile) {
    this.firstName = profile.first_name
    this.gender = profile.gender
  }

  getDiscountByGender() {
    return this.gender === 'female' ? '50%' : '20%'
  }

  getRecommendedItemsByGender() {
    return this.gender === 'female' ? 'Cosmetic, LV Handbags' : 'White Wine, iPhone X'
  }
}
const CustomizedProfileEntity = require('../server/entity/customizedProfileEntity')

describe('Given a profile,', () => {
  describe('When the gender of the profile is male,', () => {
    test('Then it should get 20% discount and White Wine, iPhone X in his recommendation list.', () => {
      const maleProfile = {
        first_name: 'Justin',
        last_name: 'Wen',
        gender: 'male'
      }
      const customizedProfileEntity = new CustomizedProfileEntity(maleProfile);
      const discountOfMaleProfile = customizedProfileEntity.getDiscountByGender();
      const recommendationOfMaleProfile = customizedProfileEntity.getRecommendedItemsByGender();
      expect(discountOfMaleProfile).toBe('20%');
      expect(recommendationOfMaleProfile).toBe('White Wine, iPhone X');
    })
  })

  describe('When the gender of the profile is female,', () => {
    test('Then it should get 50% discount and Cosmetic, LV Handbags in her recommendation list.', () => {
      const femaleProfile = {
        first_name: 'Rose',
        last_name: 'Lin',
        gender: 'female'
      }
      const customizedProfileEntity = new CustomizedProfileEntity(femaleProfile);
      const discountOfFemaleProfile = customizedProfileEntity.getDiscountByGender();
      const recommendationOfFemaleProfile = customizedProfileEntity.getRecommendedItemsByGender();
      expect(discountOfFemaleProfile).toBe('50%');
      expect(recommendationOfFemaleProfile).toBe('Cosmetic, LV Handbags');
    })
  })
})

module.exports = class ProfileService {
  constructor({ profileRepository }) {
    this._profileRepository = profileRepository;
  }

  async createProfile(createProfileRequest) {
    const profileId = await this._profileRepository.createProfile(
      createProfileRequest.firstName,
      createProfileRequest.lastName,
      createProfileRequest.gender,
      createProfileRequest.dateOfBirth,
      createProfileRequest.email)
    return profileId
  }
}
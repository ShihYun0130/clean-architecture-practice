module.exports = (mongoose, Schema) => {
  const ProfileSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    gender: { type: String },
    date_of_birth: { type: Date },
    email: { type: String }
  });

  const Profile = mongoose.model('profile', ProfileSchema);

  return Profile;
}
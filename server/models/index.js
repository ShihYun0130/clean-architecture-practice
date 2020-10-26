const mongoose = require('mongoose');
const { Schema } = mongoose;
const models = {};
exports.models = models;

exports.init = async () => {
  await mongoose.connect('mongodb+srv://shih:0000@cluster0.r6fey.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
  models.Profile = require('./profile')(mongoose, Schema);
  return models;
}
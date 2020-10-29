var express = require('express');
var router = express.Router();

const BirthdayGreetingController = require('../controllers/birthdayGreetingController');
const ProfileController = require('../controllers/profileController');

// version 1
router.get('/birthdayGreeting', BirthdayGreetingController.greeting);
router.post('/profile', ProfileController.createProfile);

// version 2
router.get('/v2/birthdayGreeting', BirthdayGreetingController.customizedGreeting)

module.exports = router;
var express = require('express');
var router = express.Router();

const BirthdayGreetingController = require('../controllers/birthdayGreetingController');
const ProfileController = require('../controllers/profileController');

// version 1
router.get('/birthdayGreeting', BirthdayGreetingController.greeting);
router.post('/profile', ProfileController.createProfile);

// version 2
router.get('/birthdayGreetingV2', BirthdayGreetingController.customizedGreeting)

module.exports = router;
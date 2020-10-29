#### Version 1: Simple Message
##### APIs
* Create profile:
```
router.post('/profile', ProfileController.createProfile)
```
* Get birthday greeting messages:
```
router.get('/birthdayGreeting', BirthdayGreetingController.greeting)
```

#### Version 2: Tailer-made Message for different gender
##### APIs
* Get birthday greeting messages V2:
```
router.get('/v2/birthdayGreetingV2', BirthdayGreetingController.customizedGreeting)
```
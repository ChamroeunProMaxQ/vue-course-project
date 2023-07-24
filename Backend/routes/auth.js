const express = require('express');
const router = express.Router();
const userServices = require('../services/user')

router.post('/sign-up', userServices.createUser );
router.post('/sign-in',userServices.getUser);

module.exports = router;
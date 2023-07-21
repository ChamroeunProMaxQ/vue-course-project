const express = require('express');
const router = express.Router();
const authServices = require('../services/auth');

router.post('/sign-up', authServices.signUp);

module.exports = router;
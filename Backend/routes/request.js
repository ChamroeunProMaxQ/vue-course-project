const express = require('express');
const router = express.Router();
const requestService = require('../services/request');

router.get('/', requestService.getRequests);
router.post('/', requestService.addRequest);

module.exports = router;
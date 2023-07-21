const express = require('express');
const router = express.Router();

const areasService = require('../services/areas');
router.get('/', areasService.getAreas);
router.get('/:id', areasService.getAreaById);

module.exports = router;
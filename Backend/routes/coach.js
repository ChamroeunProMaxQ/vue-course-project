const express = require('express');
const router = express.Router();
const coachService = require('../services/coach');
const isAuth = require('../middleware/isAuth');

router.get('/' ,coachService.getCoach);
router.get('/:id',coachService.getCoachById);
// router.post('/',coachService.createCoach);

module.exports = router;
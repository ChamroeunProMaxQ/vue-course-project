const express = require("express");
const router = express.Router();
const requestService = require("../services/request");
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, requestService.getRequests);
router.post("/", isAuth, requestService.addRequest);

module.exports = router;

const express = require('express');
const router = express.Router();
const usercontroller = require("../controller/user");
const ratelimitter = require("../middleware/api_throttler");

router.get("/", ratelimitter, usercontroller.getUser)






module.exports = router;
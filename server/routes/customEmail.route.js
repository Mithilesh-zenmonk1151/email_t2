const router = require('express').Router();
const {customEmailController}= require("../controller")

router.post('/customMail',   customEmailController.customMailService);

module.exports = router;
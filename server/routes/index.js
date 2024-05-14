
const router = require('express').Router();

router.use('/mail', require('./email.route'));
router.use('/custom', require('./customEmail.route'));
module.exports = router;
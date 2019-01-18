const router = require('express').Router();
module.exports = router;

router.use('/hackers', require('./Hacker'))
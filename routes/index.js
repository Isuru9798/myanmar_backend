const router = require('express').Router();

router.use('/authentication', require('./auth.routes'));

module.exports = router;
const router = require('express').Router();
const authController = require('../controllers/authentication/auth.controller');

router.post("/register",authController.register);

module.exports = router;
const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/authentication/auth.controller');

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/protect", passport.authenticate('jwt', { session: false }), authController.protect);

module.exports = router;
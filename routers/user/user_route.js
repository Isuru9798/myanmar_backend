const router = require('express').Router();

router.get("/users", (req, res) => {
    res.send("user test success");
})

module.exports = router;
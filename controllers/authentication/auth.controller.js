const mongoose = require('mongoose');
const { env } = require("process");

exports.register = async (req, res) => {
    console.log(env.DRIVER);
}


const mongoose = require('mongoose');
const { env } = require("process");

const LoginSchema = new mongoose.Schema({
    login_email: {
        type: String,
        required: true
    },
    login_email_verify: {
        type: Boolean,
        default: false
    },
    login_mobile: {
        type: String,
        required: true
    },
    login_mobile_verify: {
        type: Boolean,
        default: false
    },
    login_password: {
        type: String,
        required: true
    },
    login_type: {
        type: String,
        required: true
    },
    user_status: {
        type: Boolean,
        default: true
    },
    user_status_string: {
        type: String,
        default: env.DRIVER
    },
})


module.exports = mongoose.model('Login', LoginSchema);
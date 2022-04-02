const mongoose = require('mongoose');
const status = require("../config/status_enums");
const Address = require('./address.model');

const UserSchema = new mongoose.Schema({
    user_first_name: {
        type: String,
        required: true
    },
    user_last_name: {
        type: String,
        required: true
    },
    user_address: Address,
    user_image: {
        type: String,
        required: true
    },
    user_status: {
        type: Boolean,
        default: true
    },
    user_status_string: {
        type: String,
        default: status.PENDING
    },
}, {
    timeseries: true
});

module.exports = mongoose.model('User', UserSchema);
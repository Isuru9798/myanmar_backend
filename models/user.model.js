const mongoose = require('mongoose');
const addressModel = require('./address.model');

const UserSchema = new mongoose.Schema({
    user_first_name: {
        type: String,
        required: true
    },
    user_last_name: {
        type: String,
        required: true
    },
    user_address: {
        type: addressModel,
        required: true
    },
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
        default: daysEnum.friday
    },
})

module.exports = mongoose.model('User', UserSchema);
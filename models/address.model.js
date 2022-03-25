const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    address_line_1: {
        type: String,
        required: true
    },
    address_line_2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Address', AddressSchema);
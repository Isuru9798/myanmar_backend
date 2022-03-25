const Address = {
    address_line_1: {
        type: String,
        required: true
    },
    address_line_2: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}

module.exports = Address;
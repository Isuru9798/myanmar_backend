const { env } = require("process");
const UserModel = require("../../models/user.model")
const Address = require("../../models/address.model");

exports.register = async (req, res) => {
    const address = {
        address_line_1: "address line 1",
        address_line_2: "address line 2",
        district: "district",
        city: "city"
    };
    const user = new UserModel({
        user_first_name: 'isuru',
        user_last_name: 'ruwantha',
        user_address: address,
        user_image: 'image',
        user_status: true,
        user_status_string: env.PENDING
    });
    user.save().then(user => {
        res.status(200).send({
            success: true,
            message: "user register success!",
            data: user
        })
    }).catch(err => {
        res.status(500).send({
            success: false,
            message: "user register un-success!"
        })
    })
}


const userModel = require("../../models/user.model")
const status = require("../../config/status_enums");
const loginModel = require("../../models/login.model");
const { hashSync } = require("bcrypt");
const login_types = require("../../config/roles_enum");
const { compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = require("../../config/key");

exports.register = async (req, res) => {
    const address = {
        address_line_1: req.body.user.user_address.address_line_1,
        address_line_2: req.body.user.user_address.address_line_2,
        district: req.body.user.user_address.district,
        city: req.body.user.user_address.city
    };
    const user = new userModel({
        user_first_name: req.body.user.user_first_name,
        user_last_name: req.body.user.user_last_name,
        user_address: address,
        user_image: req.body.user.user_image,
        user_status: true,
        user_status_string: status.PENDING
    });
    // console.log(user);
    let userExist = await loginModel.findOne({ login_email: req.body.login.login_email, login_status_string: { $ne: status.DEACTIVE } });
    if (userExist) {
        return res.status(400).send({
            status: false,
            message: "That user already exisits!"
        })
    } else {
        user.save().then(user => {
            const login = new loginModel({
                login_email: req.body.login.login_email,
                login_email_verify: false,
                login_mobile: req.body.login.login_mobile,
                login_mobile_verify: false,
                login_password: hashSync(req.body.login.login_password, 10),
                login_type: (req.body.login.login_type).trim(),
                login_status: true,
                login_status_string: status.PENDING,
                UsersId: user._id
            });
            login.save().then(login => {
                return res.status(200).send({
                    status: true,
                    message: "user register success!",
                    data: user
                });
            }).catch(err => {
                return res.status(500).send({
                    status: false,
                    message: "user register un-success!"
                })
            });
        }).catch(err => {
            console.log(err);
            return res.status(500).send({
                status: false,
                message: "user register un-success!"
            })
        })
    }
}
exports.login = async (req, res) => {
    loginModel.findOne({ login_email: req.body.login_email, login_status_string: { $ne: status.DEACTIVE } }).then(login => {
        if (!login) {
            return res.status(401).send({
                status: false,
                message: "User not found!"
            });
        }
        if (!compareSync(req.body.login_password, login.login_password)) {
            return res.status(401).send({
                status: false,
                message: "Password Incorrect!"
            });
        }
        const payload = {
            login_email: login.login_email,
            login_type: login.login_type,
            id: login._id,
        }
        const token = jwt.sign(payload, key, { expiresIn: "1d" });

        userModel.findById(login.UsersId).then(user => {
            return res.status(200).send({
                status: true,
                message: "User Login Success",
                token: "Bearer " + token,
                data: user
            });
        });
    });
}

exports.protect = async (req, res) => {
    return res.status(401).send({
        status: false,
        message: "User not found!"
    });
}
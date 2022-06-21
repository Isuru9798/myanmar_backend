const mongoose = require("mongoose");
const { env } = require("process");

const MONGO_URL = 'mongodb+srv://dbIsuru:dbisuru@myanmar.3cqc2dc.mongodb.net/taxi_db';

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("successfully connected to database")
    })
    .catch((err) => {
        console.log(err);
    });
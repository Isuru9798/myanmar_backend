const mongoose = require("mongoose");
const { env } = require("process");

mongoose.connect(env.MONGO_URL)
    .then(() => {
        console.log("successfully connected to database")
    })
    .catch((err) => {
        console.log(err);
    });
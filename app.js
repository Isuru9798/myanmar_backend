const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { env } = require("process");

// routes
const user = require("./routers/user/user_route");

dotenv.config();

mongoose.connect(env.MONGO_URL)
    .then(() => {
        console.log("successfully connected to database")
    })
    .catch((err) => {
        console.log(err);
    });
app.use(express.json())
app.use('/user', user);

app.listen(env.PORT || 8080, () => {
    console.log("backend server running");
})
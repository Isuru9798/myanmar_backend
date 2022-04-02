const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require('passport');

const { env } = require("process");
dotenv.config();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(express.json());
app.use(passport.initialize());
app.use(cors(corsOptions));

require('./config/database');
require('./config/passport');

// route
app.use(require('./routes/index'));

app.listen(env.PORT || 3000, () => {
    console.log("backend server running");
})
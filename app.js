const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { env } = require("process");
const cors = require("cors");
dotenv.config();
require('./config/database');


app.use(express.json());

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

// route
app.use(require('./routes/index'));

app.listen(env.PORT || 8080, () => {
    console.log("backend server running");
})
require('dotenv');
const express = require("express");
const router = require('./router');
const cors = require("cors");
const corsOptions = require('./config/corsOptions.js');

const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;


connectDB();

const app = express();

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Hello, it's pu-backend");
})

app.use(express.json());

app.use("/",router);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });


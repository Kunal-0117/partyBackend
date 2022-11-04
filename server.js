require('dotenv');
const express = require("express");
const router = require('./router');
const cors = require("cors");
const corsOptions = require('./config/corsOptions.js');

const PORT = process.env.PORT || 3500;

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


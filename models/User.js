const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScehma = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('User', userScehma);

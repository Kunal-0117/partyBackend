const express = require("express")
const router = express.Router();
const fs = require('fs');

const dataPath = './database/database.json'

const saveData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData);
}

const getData = () => {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
}

router.post('/', (req, res) => {
    console.log(req.body);
    let existingData = getData();
    if (existingData[req.body.email]) {
        res.json({ success: 1, ...existingData[req.body.email] });
        return;
    }
    existingData[req.body.email] = {
        name: req.body.name,
        timeStamp: req.body.timeStamp
    }

    saveData(existingData);
    res.json({ success: 2, ...existingData[req.body.email] })
})

module.exports = router;
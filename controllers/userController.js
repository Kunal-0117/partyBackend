const Model = require("../models/User");

const userController = {};

userController.create = async (req, res) => {
    try {
        if (!req?.body?.email) {
            res.json({ success: -1, message: "There was an error" });
            return;
        }
        const find = await Model.findOne({ email: req.body.email });
        if (find) {
            res.json({ success: 1, message: "Already registered", ...find["_doc"] })
            return;
        }
        const result = await Model.create(req.body);
        res.json({ success: 2, message: "Create successfully", ...req.body });


    } catch (error) {
        res.json({ success: -1, message: "There was an error" });

    }
}

module.exports = userController;

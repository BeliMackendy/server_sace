const programme = require("../Models/programme");

exports.all = async(req, res) => {
    await programme.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

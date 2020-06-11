const niveau = require("../Models/niveau");

exports.all = async(req, res) => {
    await niveau.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

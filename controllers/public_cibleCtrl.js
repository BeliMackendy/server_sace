const public_cible = require("../Models/public_cible");

exports.all = async(req, res) => {
    await public_cible.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

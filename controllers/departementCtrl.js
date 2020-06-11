const departement = require("../Models/departement");

exports.all = async(req, res) => {
    await departement.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};


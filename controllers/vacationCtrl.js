const vacation = require("../Models/vacation");

exports.all = async(req, res) => {
    await vacation.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

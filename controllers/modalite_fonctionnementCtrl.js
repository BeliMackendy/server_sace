const modalite_fonctionnement = require("../Models/modalite_fonctionnement");

exports.all = async (req, res) => {
  await modalite_fonctionnement.all((err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

const categorie = require("../Models/categorie");

exports.all = async (req, res) => {
  await categorie.all((err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

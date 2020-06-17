const categorie = require("../Models/categorie");

exports.all = async (req, res) => {
  await categorie.all((err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

exports.select_sous_categorie = async (req, res) => {
  const { Id_categorie } = req.body;

  const c = {
    Id_categorie: Id_categorie,
  };
  await categorie.select_sous_categorie(c, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

exports.select_sous_souscategorie = async (req, res) => {
  const { id_souscategorie } = req.body;

  const c = {
    id_souscategorie: id_souscategorie,
  };
  await categorie.select_sous_souscategorie(c, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

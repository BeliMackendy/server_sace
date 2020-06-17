const db = require("./database");

exports.all = async (result) => {
  await db.query("Select * From categorie", (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

exports.select_sous_categorie = async (c, result) => {
  await db.query(
    "SELECT * FROM sous_categorie where Id_categorie = ?",
    c.Id_categorie,
    (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    }
  );
};

exports.select_sous_souscategorie = async (c, result) => {
  await db.query(
    "SELECT * FROM sous_souscategorie where id_souscategorie = ?",
    c.id_souscategorie,
    (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    }
  );
};
const db = require("./database");

exports.Insert = async (newentreprise, result) => {
  console.log(newentreprise);
  await db.query(
    "INSERT INTO entreprise_individuelle set ?",
    newentreprise,
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};

exports.select_byInstitution = async (Institution, result) => { 
    await db.query(
      "SELECT * FROM entreprise_individuelle where id_institution = ?",
      Institution.id_institution,
      (err, res) => {
        if (err) result(null, err);
        else result(null, res);
      }
    );
  };
const db = require("./database");

exports.all = async (result) => {
  await db.query("Select * From district", (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

exports.select_district_departement = async (departement, result) => { 
  await db.query(
    "SELECT * FROM district where CodeDir = ?",
    departement.Code_Direction,
    (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    }
  );
};

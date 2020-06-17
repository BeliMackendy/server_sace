const db = require("./database");

exports.Insert = async (newdemande, result) => {
  // console.log(newdemande);
  await db.query("INSERT INTO institution set ?", newdemande, (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};

exports.Update = async (newdemande, result) => {  
  await db.query(
    "UPDATE institution set adresse = ?, tel = ?, email = ?, categorie = ?, type_categorie = ?, niveau = ?, vacation = ?, modalite= ?, programme = ?, type_programme = ?, affiliation= ?, institution_affiliation= ?, cible = ? where Id_institution =?",
    [
      newdemande.adresse,
      newdemande.tel,
      newdemande.email,
      newdemande.categorie,
      newdemande.type_categorie,
      newdemande.niveau,
      newdemande.vacation,
      newdemande.modalite,
      newdemande.programme,
      newdemande.type_programme,
      newdemande.affiliation,
      newdemande.institution_affiliation,
      newdemande.cible,
      newdemande.Id_institution,
    ],
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};

exports.selectInstitutionUser = async (institution_, result) => {
  await db.query(
    "Select * From institution where user = ?",
    institution_.user,
    (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    }
  );
};

const institutionModels = require("../Models/institution");

exports.Insert = async (req, res) => {
  const {
    denomination,
    adresse,
    tel,
    email,
    dde,
    commune,
    section_communale,
    bds,
    biz,
    categorie,
    typecategorie,
    niveau,
    vacation,
    modalite,
    programme,
    typeprogramme,
    affiliation,
    institution_affiliation,
    cible,
    user,
  } = req.body;

  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;

  const demande = {
    denomination: denomination,
    adresse: adresse,
    tel: tel,
    email: email,
    dde: dde,
    commune: commune,
    section_communale: section_communale,
    bds: bds,
    biz: biz,
    categorie: categorie,
    type_categorie: typecategorie,
    niveau: niveau,
    vacation: vacation,
    modalite_fonctionnement: modalite,
    programme: programme,
    type_programme: typeprogramme,
    affiliation: affiliation,
    institution_affiliation: institution_affiliation,
    cible: cible,
    date_demande: today,
    user: user,
  };

  await institutionModels.Insert(demande, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
};

exports.Update = async (req, res) => {
  const {
    Id_institution,
    adresse,
    tel,
    email,
    categorie,
    type_categorie,
    niveau,
    vacation,
    modalite,
    programme,
    type_programme,
    affiliation,
    institution_affiliation,
    cible,
  } = req.body;  

  const demande = {
    Id_institution: Id_institution,
    adresse: adresse,
    tel: tel,
    email: email,
    categorie: categorie,
    type_categorie: type_categorie,
    niveau: niveau,
    vacation: vacation,
    modalite: modalite,
    programme: programme,
    type_programme: type_programme,
    affiliation: affiliation,
    institution_affiliation: institution_affiliation,
    cible: cible,
  }; 

  await institutionModels.Update(demande, (err, result) => {
    if (err) console.log(err);
    res.json(demande);
  });
};

exports.selectInstitutionUser = async (req, res) => {
  const { user } = req.body;

  const institution_ = {
    user: user,
  };
  await institutionModels.selectInstitutionUser(institution_, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.send(result);
  });
};

const e_nomscollectifs = require("../Models/e_nomscollectifs");
var fs = require("fs");
const path = require("path");

const save_image = (id, image) => {
  fs.mkdirSync(`./uploads/${id}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  image.mv(`./uploads/${id}/${image.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }    
  });
};

exports.Insert = async (req, res) => {
  const { id, denomination, nature } = req.body;
  // console.log(req.body);
  const { acte_constitutif, reconnaissance, copie_p_identite } = req.files;
  // console.log(req.files);

  

  const acte_constitutif_path = `/uploads/${id}/${acte_constitutif.name}`;
  const reconnaissance_path = `/uploads/${id}/${reconnaissance.name}`;
  const copie_p_identite_path = `/uploads/${id}/${copie_p_identite.name}`;

  const newentreprise = {
    id_institution: id,
    denomination: denomination,
    nature: nature,
    acte_constitutif: acte_constitutif_path,
    reconnaissance: reconnaissance_path,
    copie_p_identite: copie_p_identite_path,
  };  

  await e_nomscollectifs.Insert(newentreprise, (err, result) => {
    if (err) console.log(err);
    else {
      save_image(id, acte_constitutif);
      save_image(id, reconnaissance);
      save_image(id, copie_p_identite);      

      res.json(newentreprise);
    }
  });
};

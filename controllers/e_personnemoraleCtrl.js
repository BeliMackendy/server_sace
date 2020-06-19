const e_personnemorale = require("../Models/e_personnemorale");
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
  console.log(req.body);
  const { reconnaissance, quitus_patente } = req.files;
    
  const reconnaissance_path = `/uploads/${id}/${reconnaissance.name}`;
  const quitus_patente_path = `/uploads/${id}/${quitus_patente.name}`;
  
  const newentreprise = {
    id_institution: id,
    denomination: denomination,
    nature: nature,
    reconnaissance: reconnaissance_path,
    quitus_patente: quitus_patente_path,
  };

  await e_personnemorale.Insert(newentreprise, (err, result) => {
    if (err) console.log(err);
    else {      
      save_image(id, reconnaissance);
      save_image(id, quitus_patente);      

      res.json(newentreprise);
    }
  });
};

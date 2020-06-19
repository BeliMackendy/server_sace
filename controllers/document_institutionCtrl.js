const document_institution = require("../Models/document_institution");
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
  const { id} = req.body;
  
  const {   
    lettre_demande,
    titre_propriete,
    photos,
    autorisation_mairie,
    projet_ecole,
  } = req.files;

  const lettre_demande_path = `/uploads/${id}/${lettre_demande.name}`;
  const titre_propriete_path = `/uploads/${id}/${titre_propriete.name}`;
  const photos_path = `/uploads/${id}/${photos.name}`;
  const autorisation_path = `/uploads/${id}/${autorisation_mairie.name}`;
  const projet_ecole_path = `/uploads/${id}/${projet_ecole.name}`;  

  const newdocument = {
    id_institution: id,    
    lettre_demande: lettre_demande_path,
    titre_propriete: titre_propriete_path,
    photos: photos_path,
    autorisation_mairie: autorisation_path,
    projet_ecole: projet_ecole_path,
  };

  await document_institution.Insert(newdocument, (err, result) => {
    if (err) console.log(err);
    else {
      save_image(id, lettre_demande);
      save_image(id, titre_propriete);
      save_image(id, photos);
      save_image(id, autorisation_mairie); 
      save_image(id, projet_ecole); 

      res.json(newdocument);
    }
  });
};

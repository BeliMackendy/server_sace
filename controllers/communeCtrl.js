const commune = require("../Models/commune");

exports.all = async (req, res) => {
  await commune.all((err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

// exports.select_commune_arrondissement = async (req, res) => {
//   const { Code_Arrondissement } = req.body;

//   const arrondissement = {
//     Code_Arrondissement: Code_Arrondissement,
//   };
//   console.log(arrondissement);
//   await commune.select_commune_arrondissement(arrondissement, (err, result) => {
//     if (err) {
//       console.log(`Error: ${err}`);
//     }
//     res.json(result);
//   });
// };
exports.select_commune_departement = async (req, res) => {
    const { Code_Direction } = req.body;
  
    const departement = {
        Code_Direction: Code_Direction,
    };
    await commune.select_commune_departement(departement, (err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      }
      res.json(result);
    });
  };

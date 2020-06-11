const arrondissement = require("../Models/arrondissement");

exports.all = async (req, res) => {
  await arrondissement.all((err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

// exports.select_arrondissement_departement = async(req, res) => {
//     const { Code_Direction } = req.body;

//     const departement = {
//         Code_Direction: Code_Direction,
//     };
//     await arrondissement.select_arrondissement_departement(departement, (err, result) => {
//         if (err) {
//             console.log(`Error: ${err}`);
//         }
//         res.json(result);
//     });
// };


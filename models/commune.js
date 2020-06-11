const db = require("./database");

exports.all = async(result) => {
    await db.query("Select * From commune", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

// exports.select_commune_arrondissement = async(arrondissement,result) => {
//     await db.query(
//         "SELECT * FROM commune where Code_Arrondissement = ?",
//         arrondissement.Code_Arrondissement,
//         (err, res) => {
//             if (err) result(null, err);
//             else result(null, res);
//         }
//     );
// };

// exports.select_commune_departement = async(departement,result) => {
//     await db.query(
//         "SELECT * FROM commune where Code_Direction = ?",
//         departement.Code_Direction,
//         (err, res) => {
//             if (err) result(null, err);
//             else result(null, res);
//         }
//     );
// };


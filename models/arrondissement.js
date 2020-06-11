const db = require("./database");

exports.all = async(result) => {
    await db.query("Select * From arrondissement", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

// exports.select_arrondissement_departement = async(departement,result) => {
//     await db.query(
//         "SELECT * FROM arrondissement where Code_Direction = ?",
//         departement.Code_Direction,
//         (err, res) => {
//             if (err) result(null, err);
//             else result(null, res);
//         }
//     );
// };


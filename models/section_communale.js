const db = require("./database");

exports.all = async (result) => {
  await db.query("Select * From section_communale", (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

// exports.select_sec_communale_commune = async(commune,result) => {
//     await db.query(
//         "SELECT * FROM section_communale where CodeCom = ?",
//         commune.Code_Com,
//         (err, res) => {
//             if (err) result(null, err);
//             else result(null, res);
//         }
//     );
// };


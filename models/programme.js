const db = require("./database");

exports.all = async(result) => {
    await db.query("Select * From programme", (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    });
};

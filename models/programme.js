const db = require("./database");

exports.all = async(result) => {
    await db.query("Select * From programme", (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    });
};

exports.select_programme_menfp = async (prog, result) => {
  await db.query(
    "SELECT * FROM programme_menfp where programme = ?",
    prog.programme_,
    (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    }
  );
};
exports.select_programme_etranger = async (prog, result) => {
  await db.query(
    "SELECT * FROM programme_etranger where programme = ?",
    prog.programme_,
    (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    }
  );
};

const connect = require("./database");

exports.Insert = async (newdocuments, result) => {
  console.log(newdocuments);
  await connect.query(
    "INSERT INTO documents_soumettre set ?",
    newdocuments,
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};

const db = require("./database");

exports.AddUser = async (newUser, result) => {
  await db.query("Insert Into Users set ?", newUser, (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};

exports.Authentication = async (user, result) => {
  await db.query(
    "SELECT * FROM users where email = ?", user.email,(err, res) => {
      if (err) result(null, err);
      else result(null, res);
    });
};

exports.SelectMe = async (user, result) => {
  await db.query("SELECT * FROM users where id = ?", user.id, (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

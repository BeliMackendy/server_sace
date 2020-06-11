const users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

exports.AddUser = async (req, res) => {
  const { nom, prenom, tel, email, password, role } = req.body;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const passwordhash = await bcrypt.hash(password, salt);

  const newUser = {
    nom: nom,
    prenom: prenom,
    tel: tel,
    email: email,
    password: passwordhash,
    role: role,
  };

  await users.AddUser(newUser, (err, result) => {
    if (err) {
      res.status(404).send(err);
      return;
    }
    const token = jwt.sign({ id: result.id }, config.get("jwtPrivateKey"));
    res.header("x-auth-token", token).send({ token });
  });
};

exports.Authentication = async (req, res) => {
  const { email, password } = req.body;

  const user = {
    email: email,
  };

  await users.Authentication(user, async (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }

    if (result.length == 0)
      return res.status(404).send("Email ou Password non correct");

    const validationPassword = await bcrypt.compare(
      password,
      result[0].password
    );

    if (!validationPassword)
      return res.status(404).send("Email ou Password non correct");
    const token = jwt.sign({ id: result[0].id }, config.get("jwtPrivateKey"));

    res.json({ token });
  });
};

exports.SelectMe = async (req, res) => {
  const id = req.user.id;
  const user = {
    id: id,
  };
  await users.SelectMe(user, async (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

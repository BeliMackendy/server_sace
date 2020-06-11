const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function Authorisation(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Accès refusé. Aucun jeton fourni");

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Jeton invalide");
  }
};

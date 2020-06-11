const express = require("express");
const router = express.Router();
const arrondissementCtrl = require("../Controllers/arrondissementCtrl");

router.get("/arrondissement", arrondissementCtrl.all);

module.exports = router;
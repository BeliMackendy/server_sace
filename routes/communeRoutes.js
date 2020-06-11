const express = require("express");
const router = express.Router();
const communeCtrl = require("../Controllers/communeCtrl");

router.get("/commune", communeCtrl.all);
router.post("/commune_departement", communeCtrl.select_commune_departement);

module.exports = router;
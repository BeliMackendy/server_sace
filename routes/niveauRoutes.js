const express = require("express");
const router = express.Router();
const niveauCtrl = require("../Controllers/niveauCtrl");
router.get("/niveau", niveauCtrl.all);

module.exports = router;
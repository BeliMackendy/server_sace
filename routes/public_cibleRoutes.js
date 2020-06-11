const express = require("express");
const router = express.Router();
const public_cibleCtrl = require("../Controllers/public_cibleCtrl");
router.get("/public_cible", public_cibleCtrl.all);

module.exports = router;
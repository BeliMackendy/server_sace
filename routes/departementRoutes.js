const express = require("express");
const router = express.Router();
const departementCtrl = require("../Controllers/departementCtrl");
router.get("/departement", departementCtrl.all);

module.exports = router;
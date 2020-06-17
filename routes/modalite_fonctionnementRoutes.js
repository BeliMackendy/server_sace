const express = require("express");
const router = express.Router();
const modalite_fonctionnementCtrl = require("../Controllers/modalite_fonctionnementCtrl");
router.get("/modalite", modalite_fonctionnementCtrl.all);

module.exports = router;

const express = require("express");
const router = express.Router();
const categorieCtrl = require("../Controllers/categorieCtrl");
router.get("/categorie", categorieCtrl.all);
module.exports = router;

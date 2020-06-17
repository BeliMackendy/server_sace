const express = require("express");
const router = express.Router();
const categorieCtrl = require("../Controllers/categorieCtrl");
router.get("/categorie", categorieCtrl.all);
router.post("/souscategorie", categorieCtrl.select_sous_categorie);
router.post("/sous_souscategorie", categorieCtrl.select_sous_souscategorie);
module.exports = router;

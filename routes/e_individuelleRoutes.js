const express = require("express");
const router = express.Router();
const e_individuelleCtrl = require("../Controllers/e_individuelleCtrl");
router.post("/e_individuelle", e_individuelleCtrl.Insert);
router.post("/e_individuelle_select_byInstitution", e_individuelleCtrl.select_byInstitution);
module.exports = router;

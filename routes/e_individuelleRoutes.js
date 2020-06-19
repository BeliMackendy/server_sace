const express = require("express");
const router = express.Router();
const e_individuelleCtrl = require("../Controllers/e_individuelleCtrl");
router.post("/e_individuelle", e_individuelleCtrl.Insert);
module.exports = router;

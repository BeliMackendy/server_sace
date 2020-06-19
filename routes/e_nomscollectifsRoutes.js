const express = require("express");
const router = express.Router();
const e_nomscollectifsCtrl = require("../Controllers/e_nomscollectifsCtrl");
router.post("/e_nomscollectifs", e_nomscollectifsCtrl.Insert);
module.exports = router;

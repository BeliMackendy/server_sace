const express = require("express");
const router = express.Router();
const programmeCtrl = require("../Controllers/programmeCtrl");
router.get("/programme", programmeCtrl.all);

module.exports = router;
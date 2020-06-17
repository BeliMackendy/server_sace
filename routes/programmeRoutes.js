const express = require("express");
const router = express.Router();
const programmeCtrl = require("../Controllers/programmeCtrl");
router.get("/programme", programmeCtrl.all);
router.post("/programme_menfp", programmeCtrl.select_programme_menfp);
router.post("/programme_etranger", programmeCtrl.select_programme_etranger);

module.exports = router;
const express = require("express");
const router = express.Router();
const districtCtrl = require("../Controllers/districtCtrl");

router.get("/district", districtCtrl.all);

module.exports = router;
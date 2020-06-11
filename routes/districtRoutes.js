const express = require("express");
const router = express.Router();
const districtCtrl = require("../Controllers/districtCtrl");

router.get("/district", districtCtrl.all);
router.post("/district_departement", districtCtrl.select_district_departement);

module.exports = router;
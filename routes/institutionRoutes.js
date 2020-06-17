const express = require("express");
const router = express.Router();
const institutionCtrl = require("../Controllers/institutionCtrl");
router.post("/ouverture", institutionCtrl.Insert);
router.post("/selectInstitutionUser", institutionCtrl.selectInstitutionUser);
router.post("/institutionUpdate", institutionCtrl.Update);
module.exports = router;

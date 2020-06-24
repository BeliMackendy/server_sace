const express = require("express");
const router = express.Router();
const e_personnemoraleCtrl = require("../Controllers/e_personnemoraleCtrl");
router.post("/e_personnemorale", e_personnemoraleCtrl.Insert);
router.post("/e_personnemorale_select_byInstitution", e_personnemoraleCtrl.select_byInstitution);
module.exports = router;

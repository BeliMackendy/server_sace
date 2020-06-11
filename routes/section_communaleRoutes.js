const express = require("express");
const router = express.Router();
const section_communaleCtrl = require("../Controllers/section_communaleCtrl");

router.get("/section_communale", section_communaleCtrl.all);
router.post("/section_communale_commune", section_communaleCtrl.select_sec_communale_commune);

module.exports = router;

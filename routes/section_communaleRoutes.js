const express = require("express");
const router = express.Router();
const section_communaleCtrl = require("../Controllers/section_communaleCtrl");

router.get("/section_communale", section_communaleCtrl.all);

module.exports = router;

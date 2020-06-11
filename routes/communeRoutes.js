const express = require("express");
const router = express.Router();
const communeCtrl = require("../Controllers/communeCtrl");

router.get("/commune", communeCtrl.all);

module.exports = router;
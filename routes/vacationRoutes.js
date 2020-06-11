const express = require("express");
const router = express.Router();
const vacationCtrl = require("../Controllers/vacationCtrl");
router.get("/vacation", vacationCtrl.all);

module.exports = router;
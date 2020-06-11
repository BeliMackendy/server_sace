const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/usersCtrl");
const Auth = require("../middleware/Authorisation");

router.post("/addUser", usersCtrl.AddUser);
router.post("/authUser", usersCtrl.Authentication);
router.get("/me",Auth, usersCtrl.SelectMe);

module.exports = router;

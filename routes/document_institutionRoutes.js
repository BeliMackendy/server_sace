const express = require("express");
const router = express.Router();
const document_institutionCtrl = require("../Controllers/document_institutionCtrl");
router.post("/documents_soumettre", document_institutionCtrl.Insert);
module.exports = router;

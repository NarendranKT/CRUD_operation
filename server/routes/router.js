const express = require("express");
const router = express.Router();
const { AddDetails, GetDetails, UpdateDetails,  Search, DeleteDetails} = require('../controller/companyController')

// Create Company details
router.post("/addDetails", AddDetails);

// Get Company Details
router.get("/", GetDetails);

// Update Company Details
router.put("/UpdateDetails/:id", UpdateDetails);

// Get One Detail
router.get("/search/:id", Search);

// Delete Detail
router.delete("/DeleteDetails/:id", DeleteDetails);

module.exports = router;
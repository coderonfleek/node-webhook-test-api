const express = require("express");
const Utility = require("./utility");

const router = express.Router();

router.get("/", function (req, res) {
    res.send("API is running");
})

router.post("/ingest", function (req, res) {

    
})

module.exports = router;
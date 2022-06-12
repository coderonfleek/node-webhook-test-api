const express = require("express");
const Utility = require("./utility");

const router = express.Router();

router.get("/", function (req, res) {
    res.send("Welcome to the To do list API");
})

router.post("/ingest", function (req, res) {

    
})

module.exports = router;
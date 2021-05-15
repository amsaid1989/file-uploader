const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "views/index.html"));
});

module.exports = router;

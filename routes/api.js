const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });

router.use(upload.single("upfile"));

router.post("/fileanalyse", (req, res) => {
    const file = req.file;

    res.json({
        name: file.originalname,
        type: file.mimetype,
        size: file.size,
    });
});

module.exports = router;

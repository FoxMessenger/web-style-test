const express = require("express");
const router = new express.Router();

Console.log("api.js file loaded")

router.get("/dashboard", (req, res) => {
    res.status(200).json({
        message: "Welcome to your FLYE Dashboard"
    });
});

module.exports = router;
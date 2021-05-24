var express = require("express");
const { BandwidthLimitExceeded } = require("http-errors");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;

const express = require("express");
const { generateShortUrl, getAllUrls } = require("../controllers/url");
const router = express.Router();
router.get("/api/url", getAllUrls);
router.post("/api/url/shorten", generateShortUrl);

module.exports = router;

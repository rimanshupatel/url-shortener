const express = require("express");
const { generateShortUrl, getAllUrls } = require("../controllers/url");
const router = express.Router();
router.get("/url", getAllUrls);
router.post("/", generateShortUrl);

module.exports = router;

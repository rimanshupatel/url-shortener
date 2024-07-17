const shortid = require("shortid");
const URL = require("../models/url");

async function generateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const id = shortid();

  await URL.create({
    shortId: id,
    originalUrls: body.url,
    visitHistory: [],
  });

  console.log(body);
  return res.status(201).json({ short: id });
}

module.exports = {
  generateShortUrl,
};
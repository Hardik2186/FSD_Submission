const express = require("express");
const router = express.Router();

// Home route: Render index.ejs file
router.get("/", (req, res) => {
  res.render("index");  // Looks for views/index.ejs
});

module.exports = router;

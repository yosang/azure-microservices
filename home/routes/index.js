const router = require("express").Router();

router.get("/", (_, res) => {
  res.render("index", { title: "home" });
});

module.exports = router;

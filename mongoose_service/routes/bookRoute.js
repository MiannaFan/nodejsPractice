const express = require("express");
const { getBookList } = require("../controllers/novelController");
const router = express.Router();

router.get("/getBookList", async (req, res) => {
  const result = await getBookList();
  res.send(result);
});

module.exports = router;

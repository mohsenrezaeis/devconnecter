const express = require("express");
const router = express.Router();

//@Route    Get api/posts/test
//@desc     Tests route profile
//access    Public
router.get("/test", (req, res) => {
  res.json({
    msg: "posts works."
  });
});

module.exports = router;

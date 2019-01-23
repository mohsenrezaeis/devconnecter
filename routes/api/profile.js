const express = require("express");
const router = express.Router();

//@Route    Get api/profile/test
//@desc     Tests route profile
//access    Public
router.get("/test", (req, res) => {
  res.json({
    msg: "profile works."
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();

//@Route    Get api/users/test
//@desc     Tests route users
//access    Public
router.get("/test", (req, res) => {
  res.json({
    msg: "users works."
  });
});

module.exports = router;

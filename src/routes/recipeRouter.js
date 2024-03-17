const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const myHeaders = {
    Cookie:
      "__cf_bm=AUJ8kCt2EpkBG04tX2_wLyjDHi5v6i4c8v23VDysnlc-1710658359-1.0.1.1-lBLUwzEWgdP_PWHeYBqO9cv8rjJrc1m.nxF77LGHc5lJCn5vVuFIv8nlmkqC6Ga0B.WQXRYXa_gxJ5GTs3tBFw",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const body = new URLSearchParams({
    action: "open_ai",
    data: req.body.data,
  }).toString();

  const axiosConfig = {
    headers: myHeaders,
  };

  try {
    const response = await axios.post(
      "https://letsfoodie.com/wp-admin/admin-ajax.php",
      body,
      axiosConfig
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error fetching recipe");
  }
});

module.exports = router;

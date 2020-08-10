const express = require("express");
const router = express.Router();

const feedController = require("../../controllers/feed");

//get all feeds
router.route("/feeds").get(feedController.getFeeds);

module.exports = router;

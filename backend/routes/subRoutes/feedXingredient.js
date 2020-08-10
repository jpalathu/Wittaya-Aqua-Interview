const express = require("express");
const router = express.Router();

const feedXingredientController = require("../../controllers/feedXingredient");

//get all ingredients under a specific feed
router.route("/feed/:feed_id/ingredients").get(feedXingredientController.getIngredientsByFeedId);

module.exports = router;

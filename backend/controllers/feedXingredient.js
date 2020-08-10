const feedXingredientMiddleware = require("../middlewares/feedXingredient");

//gets all ingredients by a specific id
const getIngredientsByFeedId = async (req, res, next) => {
  try {
    let data = await feedXingredientMiddleware.getIngredientsByFeedId(res.locals.trx, { feed_id: req.params.feed_id });
    await res.locals.trx.commit();
    res.status(200).send(data);
  } catch (err) {
    next(err)
  }
};

module.exports = {
    getIngredientsByFeedId
}
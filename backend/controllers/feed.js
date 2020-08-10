const feedMiddleware = require("../middlewares/feed");

//gets all feeds
const getFeeds = async (req, res, next) => {
  try {
    let data = await feedMiddleware.getFeeds(res.locals.trx, {});
    await res.locals.trx.commit();
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getFeeds,
};

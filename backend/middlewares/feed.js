//gets all feeds and orders by name in ascending order
const getFeeds = async (trx, params) => {
    var data = await trx
      .select()
      .orderBy("name", "asc")
      .where(params)
      .from("feed");
    return data;
  };

  module.exports = {
    getFeeds
  }
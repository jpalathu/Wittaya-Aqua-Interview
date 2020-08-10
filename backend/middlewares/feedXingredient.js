//gets all ingredients under a specific feed_id and joins it with ingredient table to get ingredient details
const getIngredientsByFeedId = async (trx, params) => {
  var data = await trx
    .select("feedXingredient.quantity", "ingredient.name as ingredient_name", "ingredient.crude_protein","ingredient.crude_lipids", "ingredient.crude_fibre", "ingredient.moisture", "ingredient.ash")
    .where(params)
    .from("feedXingredient")
    .leftJoin("ingredient", "ingredient.ingredient_id", "feedXingredient.ingredient_id");
  return data;
};

module.exports = {
  getIngredientsByFeedId
};

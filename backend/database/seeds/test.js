const feedData = require("./subSeeds/feed");
const ingredientData = require("./subSeeds/ingredient");
const feedXingredientData = require("./subSeeds/feedXingredient");

exports.seed = async (knex) => {
    await knex("feedXingredient").del();
    await knex("feed").del();
    await knex("ingredient").del();

    await knex("feed").insert(feedData);
    await knex("ingredient").insert(ingredientData);
    await knex("feedXingredient").insert(feedXingredientData);
}
  
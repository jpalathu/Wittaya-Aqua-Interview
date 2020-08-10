exports.up = function (knex) {
  return knex.schema.createTable("feed", function (table) {
    table.uuid("feed_id").notNullable().primary();
    table.string("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("feed");
};

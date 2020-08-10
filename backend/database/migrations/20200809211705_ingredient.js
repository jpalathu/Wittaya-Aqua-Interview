exports.up = function (knex) {
  return knex.schema.createTable("ingredient", function (table) {
    table.uuid("ingredient_id").notNullable().primary();
    table.string("name").notNullable();
    table.float("crude_protein").unsigned().notNullable();
    table.float("crude_lipids").unsigned().notNullable();
    table.float("crude_fibre").unsigned().notNullable();
    table.float("moisture").unsigned().notNullable();
    table.float("ash").unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingredient");
};

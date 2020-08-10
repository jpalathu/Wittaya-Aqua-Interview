exports.up = async (knex) => {
    return knex.schema.createTable("feedXingredient", function (table) {
        table.primary(['ingredient_id', 'feed_id']);
        table.uuid('ingredient_id').notNullable();
        table
            .foreign('ingredient_id')
            .references('ingredient_id')
            .inTable('ingredient');
        table.uuid('feed_id').notNullable();
        table
            .foreign('feed_id')
            .references('feed_id')
            .inTable('feed');
        table.integer('quantity').unsigned().notNullable();
    });
};

exports.down = async (knex) => {
    return knex.schema.dropTable("feedXingredient");
};
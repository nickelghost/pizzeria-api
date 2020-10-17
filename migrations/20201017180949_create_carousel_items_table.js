exports.up = function (knex) {
  return knex.schema.createTable('carouselItems', function (table) {
    table.uuid('id').notNullable();
    table.string('title').notNullable();
    table.string('description');
    table.string('pictureUrl').notNullable();
    table.string('destinationUrl');
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('carouselItems');
};

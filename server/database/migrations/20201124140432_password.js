exports.up = knex => knex.schema.createTable('senha', table => {
    table.increments('id');
    table.text('senha');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('senha');
exports.up = knex => knex.schema.createTable('pedido', (table) => {
    table.increments('id');
    table.text('pedido').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('pedido');
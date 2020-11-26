exports.up = knex => knex.schema.createTable('facebook_user', (table) => {
    table.increments('id');
    table.text('userId');
    table.text('name');
    table.text('profile_pic');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('facebook_user');
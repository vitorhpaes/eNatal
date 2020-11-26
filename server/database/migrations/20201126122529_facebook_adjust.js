exports.up = knex => knex.schema.table('facebook_user', table => table.text('email')).then(result => {
    return knex.schema.table('pedido', table => table.integer('facebook_user_id')
        .unsigned().index()
        .references('id').inTable('facebook_user')).then(result => result)
}).catch(e => {
    throw e;
});

exports.down = function (knex) {
    knex.schema.table('facebook_user', table => table.dropColumn('email'));
    knex.schema.table('pedido', table => table.dropColumn('facebook_user_id'));
};
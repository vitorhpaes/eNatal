
exports.up = knex => knex.schema.table('pedido', table => {
    table.text('nome');
    table.text('endereco');
});

exports.down = knex => knex.schema.table('pedido', table => {
    table.dropColumn('nome');
    table.dropColumn('endereco');
})

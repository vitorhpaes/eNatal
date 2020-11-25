
exports.up = knex => knex.schema.table('pedido', table => table.text('contato'));

exports.down = knex => knex.schema.table('pedido', table => table.dropColumn('contato'));


exports.up = knex => knex.schema.table('pedido', table => table.boolean('status'));

exports.down = knex => knex.schema.table('pedido', table => table.dropColumn('status'));

module.exports = {
    development: {
        client: "mysql2",
        connection: {
            database: "christmas",
            user: "root",
            password: ""
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/database/migrations`,
        },
        seeds: {
            directory: `${__dirname}/database/seeds`,
        }
    },
}   
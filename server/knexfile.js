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
    production: {
        client: "mysql2",
        connection: {
            database: "christmas",
            user: "admin_christmas",
            password: "admin151617"
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
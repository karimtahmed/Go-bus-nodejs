exports.openConnection = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'mahmoud2001',
            database: 'go_bus'
        }
    });

    return knex
}
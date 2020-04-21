const knex = require("knex");
const configuration = require("../../knexfile");

// const config = process.env.NODE_ENV === 'development'
//     ? configuration.development
//     : configuration.production

const connection = knex(configuration.development);

module.exports = connection;
const Sequelize = require('sequelize');
//const database = new Sequelize("postgres://localhost/cmc");

module.exports = new Sequelize('cmc', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
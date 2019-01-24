const db = require('./db');
const Hacker = require('./Hacker');

module.exports = {
  db, Hacker
}

/**
const Sequelize = require("sequelize");
const url = process.env.DATABASE_url ? process.env.DATABASE_url : "postgres://localhost/coffee_meets_code"
const db = new Sequelize(url);

module.exports = db;

or

module.exports = new Sequelize('coffee_meets_code', process.env.PGUSER, process.env.PGPASSWORD, {
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
**/

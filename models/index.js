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
**/

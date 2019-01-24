const Sequelize = require("sequelize");
const url = process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://localhost/coffee_meets_code"
const db = new Sequelize(url);

module.exports = db;
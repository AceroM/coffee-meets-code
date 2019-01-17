const db = require('../config/database');

//const Users = require('./Users');
//const Hats = require('./Hats');

//Users.hasMany(Hats, {foreignKey: 'userId'});
//Hats.belongsTo(Users, {foreignKey: 'userId'});

// Hats.sync()
//     .then(() => console.log("Hats synced!"))
//     .catch((err) => console.error(err));

// Users.sync()
//     .then(() => console.log("Users synced!"))
//     .catch((err) => console.error(err));

module.exports = { db };
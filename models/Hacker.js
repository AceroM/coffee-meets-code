const db = require("./db");
const Sequelize = require("sequelize");

const Hacker = db.define("hacker", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  passHash: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.argentum.org/wp-content/uploads/2018/12/blank-profile-picture-973460_6404.png" 
  },
  githubUrl: {
    type: Sequelize.STRING,
    validate:{
      isUrl: true,
    }
  },
  hackathons: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  likesMe: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  matched: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  used: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  }
});

module.exports = Hacker;
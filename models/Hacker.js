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
    }, 
    defaultValue: "Joe"
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }, 
    defaultValue: "Schmoe"
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    },
    defaultValue: "fake@email.com"
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 3000,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.argentum.org/wp-content/uploads/2018/12/blank-profile-picture-973460_6404.png" 
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "just ur regular hacker lol"
  },
  githubUrl: {
    type: Sequelize.STRING,
    defaultValue: "github.com/kaizenc",
    validate:{
      isUrl: true,
    }
  },
  hackathons: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  likesMe: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
  matched: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
  used: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  }
});

module.exports = Hacker;
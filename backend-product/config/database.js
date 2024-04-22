const Sequelize = require("sequelize");

const db = new Sequelize("auth_db", "phpmyadmin", "bismillah", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;

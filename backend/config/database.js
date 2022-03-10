const { Sequelize } = require('sequelize');

const db = new Sequelize('mern_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
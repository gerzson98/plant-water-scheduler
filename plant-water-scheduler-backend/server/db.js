'use strict'
const { Sequelize } = require('sequelize');
const { database } = require('../config/app.config');
const sequelize = new Sequelize(database.DB, database.USER, database.PASS, {
  host: database.HOST,
  dialect: database.DIALECT
});

module.exports = sequelize

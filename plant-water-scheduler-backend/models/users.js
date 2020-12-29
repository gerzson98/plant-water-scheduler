'use strict'

const db = require('../server/db')
const { DataTypes } = require('sequelize')
/**
 * @typedef Users
 */
const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deletedFl: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
})

module.exports = Users
'use strict'

const db = require('../server/db')
const { DataTypes } = require('sequelize')
/**
 * @typedef Groups
 */
const Groups = db.define('groups', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  allowedUsers: {
    type: DataTypes.STRING
  }
})

module.exports = Groups
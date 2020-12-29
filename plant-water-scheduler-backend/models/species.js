'use strict'

const db = require('../server/db')
const { DataTypes } = require('sequelize')
/**
 * @typedef Plants
 */
const Plants = db.define('species', {
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
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  waterRequirement: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  wateringTime: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  otherInformation: {
    type: DataTypes.JSON,
    allowNull: false
  },
})

module.exports = Species
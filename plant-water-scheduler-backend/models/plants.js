'use strict'

const db = require('../server/db')
const { DataTypes } = require('sequelize')
/**
 * @typedef Plants
 */
const Plants = db.define('plants', {
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
  nickName: {
    type: DataTypes.STRING,
    allowNull: true
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
  lastTimeWatered: {
    type: DataTypes.DATE,
    allowNull: true
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  otherInformation: {
    type: DataTypes.JSON,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
})

module.exports = Plants
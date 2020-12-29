'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        uniqe: true
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        uniqe: true
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      deletedFl: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: DataTypes.DATE,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
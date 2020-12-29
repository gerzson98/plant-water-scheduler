'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plants', {
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
      otherInformation: {
        type: DataTypes.JSON,
        allowNull: false
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: DataTypes.DATE,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plants')
  }
}
'use strict'

const db = require('../server/db')
const Plants = require("../models/plants")



class PlantsFunctions {
   /**
   * @description Creates Plant at plants table by parameters
   * @param {Object} params
   * @return {Promise<any>}
   */
  async createPlant(params) {
    if (!params || Array.isArray(params) || typeof params !== 'object')
      throw new Error('Invalid parameter object in createPlant')
    await db.transaction(async (t) => {
      await Plants.create(params, { transaction: t })
    })
  }

  async getPlantById(plantId) {
    if (!plantId)
      throw new Error('Missing or incorrect parameter plantId | PlantFunctions.getPlantById')
    const result = await Plants.findOne({ 
      where: {
        id: plantId
      }
     })
  }

  async getPlantsByGroup(groupId) {
    if (!groupId)
    throw new Error('Missing or invalid groupId | PlantFunctions.getPlantsByGroup')
    const result = await Plants.findAll({
      where: {
        id: groupId
      }
    })
    return result
  }

  async getAllPlants() {
    const result = await Plants.findAll()
    return result
  }
   /**
   * @description Updates a plant where id matches
   * @param {Number} id 
   * @param {Object} params
   * @return {Promise<any>}
   */
  async updatePlant(plantId, params) {
    if (!plantId || typeof params !== 'object' || Array.isArray(params))
      throw new Error('Missing or incorrect parameter plantId or params @param {Object}')
    await db.transaction(async (t) => {
      Plants.update(params, {
        transaction: t, where: {id: plantId}
      })
    })
  }

  async deletePlant(plantId) {
    if (!plantId)
      throw new Error('Missing or invalid param plantId | PlantFunctions.deletePlant')
    await db.transaction(async (t) => {
      await Plants.destroy({
        where: {
          id: plantId
        }
      })
    })
  }

}

module.exports = PlantsFunctions
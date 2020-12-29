'use strict'

const db = require('../server/db')
const Plants = require("../models/plants")



class PlantsFunctions {
   /**
   * @description Creates Plant at plants table by parameters
   * @param {Object} params
   * @return {Promise<any>}
   */
  createPlant(params) {
    if (!params || Array.isArray(params) || typeof params !== 'object')
      throw new Error('Invalid parameter object in createPlant')
    await db.transaction(async (t) => {
      await Plants.create(params, { transaction: t })
    })
  }
}

module.exports = PlantsFunctions
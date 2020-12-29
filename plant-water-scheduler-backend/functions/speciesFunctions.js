'use strict'

const db = require('../server/db')
const Species = require('../models/species')

/**
 * @typedef SpeciesFunctions
 */
class SpeciesFunctions {
   /**
   * @description Returns all species
   * @return {Promise<any>}
   */
  async getAllSpecies() {
    const result = await Species.findAll()
    return result
  }

  async getSpeciesById(speciesId) {
    const result = await Species.findOne({
      where: {
        id: speciesId
      }
    })
    return result
  }

  async createSpecies(params) {
    if (params !== 'object' || Array.isArray(params))
      throw new Error('Missing or incorrect parameter params | SpeciesFunctions.createSpecies')
    await db.transaction(async (t) => {
      await Species.create(params, {
        transaction: t
      })
    })
  }

  async updateSpecies(speciesId, params) {
    if (!speciesId || params !== 'object' || Array.isArray(params))
      throw new Error('Missing or incorrect parameter speciesId or params | SpeciesFunctions.updateSpecies')
    await db.transaction(async (t) => {
      await Species.update(params, {
        where: {
          id: speciesId
        }
      })
    })
  }

  async deleteSpecies(speciesId) {
    if (typeof speciesId !== 'number')
      throw new Error('Invalid parameter type. Valids are: speciesId {Number} or speciesName {String} | SpeciesFunctions.deleteSpecies')
    await db.transaction(async (t) => {
      await Species.destroy({
        where: {
          id: speciesId
        }
      })
    })
  }

}

exports.SpeciesFunctions = SpeciesFunctions
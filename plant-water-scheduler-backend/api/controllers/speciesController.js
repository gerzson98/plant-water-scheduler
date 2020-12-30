'use strict'

const asyncHelper = require('../middlewares/async')
const SpeciesService = require('../../services/functionService')
const ErrorResponse = require('../middlewares/ErrorResponse')


exports.getAllSpecies = asyncHelper((request, response, next) => {
  try {
    const result = await SpeciesService.getAllSpecies()
    response.status(200).json({
      speciesList: result
    })
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.updateSpecies = asyncHelper((request, response, next) => {
  const species = request.body.species
  if (typeof species !== 'object' || Array.isArray(species) || typeof species.id !== 'number') {
    const message = 'Missing or incorrect request property species | speciesController.updateSpecies'
    next(new ErrorResponse(message, 500))
  }
  try {
    await SpeciesService.updateSpecies(species.id, species)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.createSpecies = asyncHelper((request, response, next) => {
  const species = request.body.species
  if (typeof species !== 'object' || Array.isArray(species)) {
    const message = 'Missing or incorrect request property species | speciesController.createSpecies'
    next(new ErrorResponse(message, 500))
  }
  try {
    await SpeciesService.createSpecies(species)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.deleteSpecies = asyncHelper((request, response, next) => {
  const speciesId = request.body.species.id
  if (typeof speciesId !== 'number') {
    const message = 'Missing or incorrect request property species.id | speciesController.deleteSpecies'
    next(new ErrorResponse(message, 500))
  }
  try {
    await SpeciesService.deleteSpecies(speciesId)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

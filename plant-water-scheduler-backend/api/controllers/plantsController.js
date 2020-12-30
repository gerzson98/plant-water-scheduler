'use strict'

const asyncHelper = require('../middlewares/async')
const PlantsService = require('../../services/functionService')
const ErrorResponse = require('../middlewares/ErrorResponse')


exports.getAll = asyncHelper((request, response, next) => {
  try {
    const result = await PlantsService.getAllPlants()
    response.status(200).json({
      plantList: result
    })
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.getByGroupId = asyncHelper((request, response, next) => {
  const id = request.body.groupId
  if (typeof id !== 'number') {
    const message = 'Missing or incorrect groupId | plantsController.getByGroupId'
    next(new ErrorResponse(message, 500))
  }
  try {
   const result = await PlantsService.getPlantsByGroup(id)
   response.status(200).json(result) 
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.updatePlant = asyncHelper((request, response, next) => {
  const plant = request.body.plant
  try {
    await PlantsService.updatePlant(plant.id, plant)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.createPlant = asyncHelper((request, response, next) => {
  try {
    const plant = request.body.plant
    await PlantsService.createPlant(plant)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.deletePlant = asyncHelper((request, response, next) => {
  try {
    const plantId = request.body.plant.id
    await PlantsService.deletePlant(plantId)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

'use strict'

const asyncHelper = require('../middlewares/async')
const PlantsService = require('../../services/functionService')
const ErrorResponse = require('../middlewares/ErrorResponse')


exports.getAllPlants = asyncHelper((request, response, next) => {
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
    const message = 'Missing or incorrect request property groupId | plantsController.getByGroupId'
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
  if (typeof plant !== 'object' || Array.isArray(plant) || typeof plant.id !== 'number') {
    const message = 'Missing or incorrect request property plant | plantsController.updatePlant'
    next(new ErrorResponse(message, 500))
  }
  try {
    await PlantsService.updatePlant(plant.id, plant)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.createPlant = asyncHelper((request, response, next) => {
  const plant = request.body.plant
  if (typeof plant !== 'object' || Array.isArray(plant)) {
    const message = 'Missing or incorrect request property plant | plantsController.createPlant'
    next(new ErrorResponse(message, 500))
  }
  try {
    await PlantsService.createPlant(plant)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.deletePlant = asyncHelper((request, response, next) => {
  const plantId = request.body.plant.id
  if (typeof plantId !== 'number') {
    const message = 'Missing or incorrect request property plant.id | plantsController.deletePlant'
    next(new ErrorResponse(message, 500))
  }
  try {
    await PlantsService.deletePlant(plantId)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

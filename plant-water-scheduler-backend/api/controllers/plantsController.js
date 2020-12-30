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
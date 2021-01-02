'use strict'

const asyncHelper = require('../middlewares/async')
const GroupService = require('../../services/functionService')
const ErrorResponse = require('../middlewares/ErrorResponse')


exports.getGroupById = asyncHelper((request, response, next) => {
  const id = request.body.groupId
  if (typeof id !== 'number') {
    const message = 'Missing or incorrect request property groupId | groupController.getGroupById'
    next(new ErrorResponse(message, 500))
  }
  try {
    const result = await GroupService.getGroupById(id)
    response.status(200).json(result)
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.getGroupByUserId = asyncHelper((request, response, next) => {
  const id = request.body.userId
  if (typeof id !== 'number') {
    const message = 'Missing or incorrect request property userId | groupController.getGroupByUserId'
    next(new ErrorResponse(message, 500))
  }
  try {
    const result = await GroupService.getGroupByUserId(id)
    response.status(200).json(result)
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.updateGroup = asyncHelper((request, response, next) => {
  const group = request.body.group
  if (typeof group.id !== 'number') {
    const message = 'Missing or incorrect request property group | groupController.updateGroup'
    next(new ErrorResponse(message, 500))
  }
  try {
    await GroupService.updateGroup(group.id, group)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.creategroup = asyncHelper((request, response, next) => {
  const group = request.body.group
  if (typeof group !== 'object' || Array.isArray(group)) {
    const message = 'Missing or incorrect request property group | groupController.creategroup'
    next(new ErrorResponse(message, 500))
  }
  try {
    await GroupService.creategroup(group)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

exports.deleteGroup = asyncHelper((request, response, next) => {
  const groupId = request.body.group.id
  if (typeof groupId !== 'number') {
    const message = 'Missing or incorrect request property group.id | groupController.deleteGroup'
    next(new ErrorResponse(message, 500))
  }
  try {
    await GroupService.deleteGroup(groupId)
    response.status(200).json({})
  } catch (error) {
    next(new ErrorResponse(error.message, 500))
  }
})

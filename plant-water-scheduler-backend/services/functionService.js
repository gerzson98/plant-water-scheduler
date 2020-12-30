'use strict'

const HomeFunctions = require('../functions/homeFunctions')
const GroupFunctions = require('../functions/groupFunctions')
const PlantsFunctions = require('../functions/plantsFunctions')
const SpeciesFunctions = require('../functions/speciesFunctions')
const UserFunctions = require('../functions/userFunctions')

/** @typedef GroupFunctions*/
const GroupService = new GroupFunctions()
/** @typedef HomeFunctions*/
const HomeService = new HomeFunctions()
/** @typedef PlantsFunctions*/
const PlantsService = new PlantsFunctions()
/** @typedef SpeciesFunctions*/
const SpeciesService = new SpeciesFunctions()
/** @typedef UserFunctions*/
const UserService = new UserFunctions()

module.exports = {
  GroupService,
  HomeService,
  PlantsService,
  SpeciesService,
  UserService
}
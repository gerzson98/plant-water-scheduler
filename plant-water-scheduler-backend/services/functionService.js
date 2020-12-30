'use strict'

const HomeFunctions = require("../functions/homeFunctions")
const GroupFunctions = require("../functions/groupFunctions")

/** @typedef GroupFunctions*/
const GroupService = new GroupFunctions()
/** @typedef HomeFunctions*/
const HomeService = new HomeFunctions()
/** @typedef PlantFunctions*/
const PlantService = new PlantFunctions()
/** @typedef SpeciesFunctions*/
const SpeciesService = new SpeciesFunctions()
/** @typedef UserFunctions*/
const UserService = new UserFunctions()

module.exports = {
  GroupService,
  HomeService,
  PlantService,
  SpeciesService,
  UserService
}
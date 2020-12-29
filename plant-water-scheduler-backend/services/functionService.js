'use strict'

const HomeFunctions = require("../functions/homeFunctions")
const GroupFunctions = require("../functions/groupFunctions")

/** @typedef GroupFunctions*/
const GroupService = new GroupFunctions()
const HomeService = new HomeFunctions()

module.exports = {
  GroupService
}
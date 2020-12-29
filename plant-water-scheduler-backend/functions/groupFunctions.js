'use strict'

const db = require('../server/db')
const Groups = require('../models/groups')

class GroupFunctions {
  async GetGroupsByUserId(userId) {
    const result = await Groups.findAll({ where: { createdBy: userId } })
    return result
  }
}

module.exports = GroupFunctions
'use strict'

const db = require('../server/db')
const Users = require('../models/users')

/**
 * @typedef UserFunctions
 * @description This class contains functions which are related to app
 * functionality
 */
class HomeFunctions {
  /**
   * @description Return a user by email
   * @param {String} email 
   */
  async login(email) {
    if (!email)
      throw new Error('Missing parameter @param {String} email | UserFunctions.HomeFunctions')
    const user = await Users.findOne({ where: { email } })
    return user
  }
}

module.exports = HomeFunctions
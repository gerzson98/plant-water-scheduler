'use strict'

const bcrypt = require('bcrypt')
const db = require('../server/db')
const Users = require('../models/users')

/**
 * @typedef UserFunctions
 * @description This instance contains the CRUD functions which realted with
 * users table
 */
class UserFunctions {
  /**
   * @description Returns all active user
   * @return {Promise<any>}
   */
  async GetAllUser() {
    const result = await Users.findAll()
    return result
  }
  /**
  * @description Returns a row from database with the given id
  * @param {Number} userId
  * @return {Promise<any>}
  */
  async GetUserById(userId) {
    if (!userId)
      throw new Error('Missing parameter @param {Number} userId | UserFunctions.GetUserById')
    const result = await Users.findByPk(userId)
    return result
  }

  async CreateUser(userData) {
    if (!userData || typeof userData !== 'object' || Array.isArray(userData))
      throw new Error('Missing or incorrect parameter @param {Object} userData | UserFunctions.CreateUser')
    await db.transaction(async (t) => {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(userData.password, salt)
      userData.password = hash
      await Users.create(userData, { transaction: t })
    })
  }
  /**
   * @description Updates a user where id can matched
   * @param {Number} id 
   * @param {Object} params
   * @return {Promise<any>}
   */
  async UpdateUser(userId, params) {
    if (!userId || !params || typeof params !== 'object' || Array.isArray(params))
      throw new Error('Missing or incorect parameter @param {Number} userId or @param {Object} params | UserFunctions.UpdateUser')
    await db.transaction(async (t) => {
      await Users.update(params, {
        transaction: t, where: { id: userId }
      })
    })
  }
  /**
* @description Deletes row on the given id in users table
* @param {Number} userId
* @return {Promise<any>}
*/
  async DeleteUser(userId) {
    if (!userId)
      throw new Error('Missing parameter @param {Number} userId | ActivityFunctions.DeleteActivity')
    await db.transaction(async (t) => {
      await Users.destroy({
        where: { id: userId }
      }, { transaction: t })
    })
  }
  /**
  * @description Truncate users table
  * @return {Promise<any>}
  */
  async TruncateUsers() {
    await db.transaction(async (t) => {
      await Users.destroy({
        truncate: true
      }, { transaction: t })
    })
  }
}

module.exports = UserFunctions
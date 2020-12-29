'use strict'

const db = require('../server/db')
const Groups = require('../models/groups')
const { transaction } = require('../server/db')

/**
 * @typedef GroupFunctions
 */

class GroupFunctions {
  async getGroupById(groupId) {
    if (!groupId)
      throw new Error('Missing or incorrect parameter groupId | GroupFunctions.getGroupById')
    const result = await Groups.findOne({
      where: {
        id: groupId
      }
    })
    return result
  }
   /**
   * @description Gets user by userId
   * @param {Number} id 
   * @return {Promise<any>}
   */
  async getGroupsByUserId(userId) {
    if (!userId) 
      throw new Error('Missing parameter @param {Number} userId | GroupFunctions.getGroupsByUserId') 
    const result = await Groups.findAll({ where: { createdBy: userId } })
    return result
  }
   /**
   * @description Gets all groups
   * @return {Promise<any>}
   */
  async getAllGroups() {
    const result = await Groups.findAll()
    return result
  }

  createGroup(params) {
    if (!params || typeof params !== 'object')
      throw new Error('Missing or incorrect parameters | GroupFunctions.createGroup')
    await db.transaction(async (t) => {
      await Groups.create(params, {
        transaction: t
      })
    })
  }
  
   /**
   * @description Updates allowed users list.
   * @param {Number}
   * @param {Object} params
   * @return {Promise<any>}
   */
  async updateGroup(groupId, params) {
    if (!groupId || params !== 'object' || Array.isArray(params))
      throw new Error('Missing or incorect parameter  | GroupFunctions.updateGroup')
    await db.transaction(async (t) => {
      await Groups.update(params, {
        where: { id: groupId }
      }, { transaction: t })
    })
  }

  async deleteGroup(groupId) {
    if (!groupId)
      throw new Error('Missing parameter groupId | GroupFunctions.deleteGroup')
    await db.transaction(async (t) => {
      await Groups.destroy({
        where: { id: groupId }
      }, { transaction: t })
    })
  }

}

module.exports = GroupFunctions
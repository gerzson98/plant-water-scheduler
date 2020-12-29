'use strict'

const db = require('../server/db')
const Groups = require('../models/groups')
const { transaction } = require('../server/db')

class GroupFunctions {
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

  createGroup(groupName, userId, alowedUsers, ) {

  }
   /**
   * @description Updates allowed users list.
   * @param {Number}
   * @param {Array<Number>}
   * @return {Promise<any>}
   */
  updateAllowedUsers(groupId, userIds) {
    if (!groupId || userIds[0] === undefined)
      throw new Error('Missing or incorect parameter @param {Number} userId or @param {Array<Number>} userIds | GroupFunctions.updateAllowedUsers')
    const allowedUsers = userIds.join(';')
    await db.transaction(async (t) => {
      await Groups.update({ allowedUsers }, {
        transaction: t, where: { id: groupId }
      })
    })
  }

}

module.exports = GroupFunctions
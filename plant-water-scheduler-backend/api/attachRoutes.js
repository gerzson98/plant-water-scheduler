'use strict'

const { ErrorResponse } = require("./middlewares/ErrorResponse")
/**
 * @description attachRoutes is a simple wrapper function for easier route handling
 * @param {Object} app
 * @return {Object}
 */
function attachRoutes(app) {
  /** 404 */
  app.use((error, request, response, next) => {
    next(new ErrorResponse(error.message, error.status || 500))
  })
  return app
}

exports.attachRoutes = attachRoutes

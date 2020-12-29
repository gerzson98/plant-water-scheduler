'use strict'
/**
 * @typedef ErrorResponse
 * @description Basic error response class
 */
class ErrorResponse extends Error {
  /**
   * @param {String} message 
   * @param {Number} status 
   */
  constructor(message, status) {
    super(message)
    this.status = status
    Error.captureStackTrace(this, this.constructor)
  }
}

exports.ErrorResponse = ErrorResponse
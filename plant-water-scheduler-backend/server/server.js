'use strict'

const cors = require('cors')
const morgan = require('morgan')
const sequelize = require('./db')
const express = require('express')
const { server } = require('../config/app.config')
const { attachRoutes } = require('../api/attachRoutes')

const app = express()
const port = server.PORT

app.use(cors())
app.use(express.json())
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['response-time'](req, res) + ' ms'
  ].join(' | ')
}))

async function StartUp() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1)
  }
  attachRoutes(app).listen(port, () => {
    console.log(`Server is running in ${server.NODE_ENV} mode on port ${port}`)
  })
  process.on('unhandledRejection', (error, promise) => {
    console.error(`Error: ${error.message}`)
  })
}

StartUp()
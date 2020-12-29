module.exports = {
  server: {
    NODE_ENV: 'development',
    PORT: 3010
  },
  database: {
    HOST: 'localhost',
    USER: 'root',
    PASS: 'root',
    DIALECT: 'mysql',
    DB: 'plantwaterscheduler'
  },
  auth: {
    JWT_Secret: 'dsUY1fHu69dHge8bt'
  }
}
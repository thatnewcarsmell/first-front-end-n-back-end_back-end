// require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'g102_classmates',
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

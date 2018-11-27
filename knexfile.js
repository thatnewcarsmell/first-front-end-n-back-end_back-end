// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/g102_classmates'
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'g102_classmates',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL',
  }

};

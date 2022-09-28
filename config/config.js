require('dotenv').config()
module.exports = {
  development: {
    database: 'stox_tckr',
    dialect: 'postgres'
  },
  test: {
    database: 'stok_tckr_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

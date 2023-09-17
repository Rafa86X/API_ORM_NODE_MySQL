require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "dialectModule":  require('mysql2'),
    "dialectOptions":{
      "ssl": {
        "rejectUnauthorized": true
      }
    },
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "dialectModule": require('mysql2'),
    "dialectOptions":{
      "ssl": {
        "rejectUnauthorized": true
      }
    }
  }
}

const setting = require('./setting');

module.exports = {
  "development": {
    "username": setting.USER_NAME,
    "password": setting.PASSWORD,
    "database": setting.DATABASE,
    "host": setting.HOST,
    "dialect": setting.DIALECT,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
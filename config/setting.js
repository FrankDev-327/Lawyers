require('dotenv').config();

module.exports = {
    USER_NAME:process.env.USER_NAME,
    PASSWORD:process.env.PASSWORD,
    DATABASE:process.env.DATABASE,
    HOST:process.env.HOST,
    DIALECT:process.env.DIALECT,
    SECRET_KEY:process.env.SECRET_KEY,
    PORT: process.env.PORT
}
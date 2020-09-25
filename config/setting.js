require('dotenv').config();

module.exports = {
    USER_NAME:process.env.USER_NAME,
    PASSWORD:process.env.PASSWORD,
    DATABASE:process.env.DATABASE,
    HOST:process.env.HOST,
    DIALECT:process.env.DIALECT,
    SECRET_KEY_LAWYER:process.env.SECRET_KEY_LAWYER,
    SECRET_KEY_CLIENT:process.env.SECRET_KEY_CLIENT,
    PORT: process.env.PORT
}
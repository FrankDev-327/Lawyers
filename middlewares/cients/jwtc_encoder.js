'use strict';

const setting = require('../../config/setting');
const jwt = require('jwt-simple');
const moment = require('moment');

exports.endocerFunc = async (objClient) => {
    var pl = {
        id:objClient.id,
        nameClient: objClient.nameClient,
        lastNameClient: objClient.lastNameClient,
        cellphoneClient: objClient.cellphoneClient,
        emailClient: objClient.emailClient,
        identiferClient: objClient.identiferClient,
        iat: moment().unix(),
        exp: moment().add(30, 'day').unix
    }
    return jwt.encode(pl, setting.SECRET_KEY_CLIENT);
}
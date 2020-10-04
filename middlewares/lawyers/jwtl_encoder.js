'use strict';

const setting = require('../../config/setting');
const jwt = require('jwt-simple');
const moment = require('moment');

exports.lawyerToken = async (objLawyer) => {
    const pl = {
        id: objLawyer.id,
        name: objLawyer.name,
        lastName: objLawyer.STRING,
        cellphohe: objLawyer.lastName,
        email: objLawyer.email,
        idCategory: objLawyer.idCategory,
        identify: objLawyer.STRING,
        iat: moment().unix(),
        exp: moment().add(30, 'day').unix
    }
    return jwt.encode(pl, setting.SECRET_KEY_LAWYER);
}
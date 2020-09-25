'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const setting = require('../../config/setting');

exports.authLawyer = async (req, res, next) => {
    if (!req.headers.authorization)
        return res.status(403).json({
            message: 'Esta peticion no tiene la cabecera de autenticacion'
        });
    try {
        var token = req.headers.authorization.replace(/['"]+/g, '');
        pl = jwt.decode(token, setting.SECRET_KEY_LAWYER);
        if (pl.exp <= moment().unix) {
            return res.status(403).json({
                message: 'El token ha expirado'
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(403).json({
            message: 'token no valido'
        });
    }
    req.lawyer = pl;
    next();
}
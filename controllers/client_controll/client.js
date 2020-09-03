'use strict';

const models = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPass(pass) {
    try {
        return await bcrypt.hash(pass, saltRounds);
    } catch (error) {
        console.log(error)
    }
}

async function comparePass(lawyer_pass, encrypt_pass) {
    try {
        return await bcrypt.compare(lawyer_pass, encrypt_pass)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createInfoClients: async (req, res) => {
        try {
            var params = req.body;
            var setCreate = {
                nameClient: params.nameClient,
                type: params.type,
                lastNameClient: params.lastNameClient,
                cellphoneClient: params.cellphoneClient,
                emailClient: params.emailClient,
                passwordClient: await hashPass(params.passwordClient),
            }
            var info = await models.Clients.create(setCreate);

            if (info !== null) {
                return res.status(200).json({
                    info,
                    code: 'CLIENT_200',
                    msg: 'Sus datos han sido registrados.'
                });
            }

            return res.status(200).json({
                code: 'CLIENT_403',
                msg: 'Algo pasó al registrar su infomación. Pruebe de nuevo.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_500',
                error: error.message
            });
        }
    },
    updateInfoClients: async (req, res) => {
        try {
            var id = req.params.id;
            var params = req.body;
            var setWhere = {
                plain: true,
                returning: true,
                where: {
                    id: id
                }
            }
            var setUpdate = {
                nameClient: params.nameClient,
                type: params.type,
                lastNameClient: params.lastNameClient,
                cellphoneClient: params.cellphoneClient,
                emailClient: params.emailClient,
                passwordClient: await hashPass(params.passwordClient)
            }
            var info = await models.Clients.update(setUpdate, setWhere)
                .then((info) => {
                    return {
                        info: info[1],
                        code: 'CLIENT_200',
                        msg: 'Sus datos han sido actuaizados.'
                    }
                })
                .catch((error) => {
                    return {
                        code: 'CLIENT_403',
                        msg: error.message,
                    }
                });

            return res.status(200).json(info);
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_500',
                error: error.message
            });
        }
    },
    loginClient: async (req, res) => {
        try {
            var params = req.body;
            var email = params.email;
            var pass = params.passwordClient;
            var setWhere = {
                where: {
                    email: email
                }
            }
            var info = await models.Clients.findOne(setWhere);
            if (info !== null) {
                var _pass = await comparePass(pass, info.passwordClient);
                if (_pass) {
                    return res.status(200).json({
                        info,
                        code: 'CLIENT_200',
                        msg: 'Ha iniciado sesión.'
                    });
                }
                return res.status(200).json({
                    code: 'CLIENT_403',
                    msg: 'Contraseña incorrecta.'
                });
            }
            return res.status(200).json({
                code: 'CLIENT_404',
                msg: 'El correo no existe.'
            });
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_500',
                error: error.message
            });
        }
    },
    viewInfoClient: async (req, res) => {
        try {
            var _id = req.params.id;
            var setWhere = {
                where: {
                    id: _id
                }
            }
            var info = await models.Clients.findOne(setWhere);
            if (info !== null) {
                return res.status(200).json({
                    info,
                    code: 'CLIENT_200',
                    msg: 'Información personal.'
                });
            }

            return res.status(200).json({
                code: 'CLIENT_403',
                msg: 'No hay registros asociados.'
            });
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_500',
                error: error.message
            });
        }
    }
}
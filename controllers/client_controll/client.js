'use strict';

const models = require('../../models');

module.exports = {
    createInfoClients: async (req, res) => {
        try {
            var params = req.body;
            var info = await models.Clients.create(params);

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
                lastNameClient: params.lastNameClient,
                cellphoneClient: params.cellphoneClient,
                emailClient: params.emailClient,
                passwordClient: params.passwordClient
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
    }
}
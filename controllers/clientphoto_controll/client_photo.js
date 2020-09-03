'use strict';

const models = require('../../models');

module.exports = {
    createProfileClients: async (req, res) => {
        try {
            var params = req.body;
            var setCreate = {
                clientId: params.clientId,
                clientPhoto: params.clientPhoto
            }
            var info = await models.ClientsProfile.create(setCreate);
            if (info !== null) {
                return res.status(200).json({
                    info,
                    code: 'CLIENT_PHOTO_200',
                    msg: 'Sus datos han sido registrados.'
                });
            }

            return res.status(200).json({
                code: 'CLIENT_PHOTO_403',
                msg: 'Algo pasó al registrar su foto de perfil. Pruebe de nuevo.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_PHOTO_500',
                error: error.message
            });
        }
    },
    displayProfileClients: async (req, res) => {
        try {
            var clientId = req.params.id;
            var setWhere = {
                where: {
                    clientId: clientId
                }
            }
            var info = await models.ClientsProfile.findOne(setWhere);
            if (info !== null) {
                return res.status(200).json({
                    info,
                    code: 'CLIENT_PHOTO_200',
                });
            }

            return res.status(200).json({
                code: 'CLIENT_PHOTO_403',
                msg: 'Algo pasó al registrar su foto de perfil. Pruebe de nuevo.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_PHOTO_500',
                error: error.message
            });
        }
    },
    updateProfileClients: async (req, res) => {
        try {
            var clientId = req.params.id;
            var setWhere = {
                plain: true,
                returning: true,
                where: {
                    id: clientId
                }
            }
            var setUpdate = {
                clientPhoto: req.body.clientPhoto
            }
            var info = await models.ClientsProfile.update(setUpdate, setWhere)
                .then((info) => {
                    return {
                        info: info[1],
                        code: 'CLIENT_PHOTO_200',
                        msg: 'Sus foto de perfil han sido actualizado.'
                    }
                })
                .catch((error) => {
                    console.log(error)
                    return {
                        code: 'CLIENT_PHOTO_403',
                        msg: 'Algo pasó al actualizar su foto de perfil. Pruebe de nuevo.'
                    }
                });
            return res.status(200).json(info);
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_PHOTO_500',
                error: error.message
            });
        }
    },
    //para el admin
    listsPhotoProfileClient: async (req, res) => {
        try {
            var info = await models.ClientsProfile.findAll();

            if (info !== null && info.length > 0) {
                return res.status(200).json({
                    info,
                    code: 'CLIENT_PHOTO_200',
                });
            }

            return res.status(200).json({
                code: 'CLIENT_PHOTO_403',
                msg: 'Algo pasó al mostrar el perfil.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'CLIENT_PHOTO_500',
                error: error.message
            });
        }
    }
}
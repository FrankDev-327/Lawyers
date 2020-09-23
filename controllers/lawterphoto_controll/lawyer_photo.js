'use strict';

const models = require('../../models');

module.exports = {
    createPhotoProfileLaweyer: async (req, res) => {
        try {
            var setCreate = {
                lawyerId: req.lawyer.id,
                lawyer_photo: req.body.lawyer_photo
            }
            var info = await models.LawyerProfile.create(setCreate);
            if (info !== null) {
                return res.status(200).json({
                    info,
                    code: 'LAWYER_PHOTO_200',
                    msg: 'Sus datos han sido registrados.'
                });
            }

            return res.status(200).json({
                code: 'LAWYER_PHOTO_403',
                msg: 'Algo pasó al registrar su infomación. Pruebe de nuevo.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'LAWYER_PHOTO_500',
                error: error.message
            });
        }
    },
    displayPhotoProfileLawyer: async (req, res) => {
        try {
            var lawyerId = req.lawyer.id;
            var setWhere = {
                attributes: {
                    exclude: ['id']
                },
                where: {
                    lawyerId: lawyerId
                }
            }
            var info = await models.LawyerProfile.findOne(setWhere);
            if (info !== null) {
                return res.status(200).json({
                    info,
                    code: 'LAWYER_PHOTO_200',
                });
            }

            return res.status(200).json({
                code: 'LAWYER_PHOTO_403',
                msg: 'Algo pasó al mostrar el perfil.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'LAWYER_PHOTO_500',
                error: error.message
            });
        }
    },
    updatePhotoProfileLawyer: async (req, res) => {
        try {
            var lawyerId = req.lawyer.id;
            var setWhere = {
                plain: true,
                returning: true,
                where: {
                    lawyerId: lawyerId
                }
            }
            var setUpdate = {
                lawyer_photo: req.body.lawyer_photo
            }
            var info = await models.LawyerProfile.update(setUpdate, setWhere)
                .then((info) => {
                    return {
                        info: info[1],
                        code: 'LAWYER_PHOTO_200',
                        msg: 'Sus foto de perfil han sido actualizado.'
                    }
                })
                .catch((error) => {
                    console.log(error)
                    return {
                        code: 'LAWYER_403',
                        msg: 'Algo pasó al actualizar su foto de perfil. Pruebe de nuevo.'
                    }
                });
            return res.status(200).json(info);
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'LAWYER_PHOTO_500',
                error: error.message
            });
        }
    },//to use by admin
    listsPhotoProfileLawyer: async (req, res) => {
        try {
            var info = await models.LawyerProfile.findAll({});

            if (info !== null && info.length > 0) {
                return res.status(200).json({
                    info,
                    code: 'LAWYER_PHOTO_200',
                });
            }

            return res.status(200).json({
                code: 'LAWYER_PHOTO_403',
                msg: 'Algo pasó al mostrar el perfil.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'LAWYER_PHOTO_500',
                error: error.message
            });
        }
    }
}
'use strict';

const models = require('../../models');

module.exports = {
    createPhotoProfileLaweyer: async (req, res) => {
        try {
            var info = await models.LawyerProfile.create(req.body);
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
            var lawyerId = req.params.id;
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
    }
}
'use strict';

const models = require('../../models');

module.exports = {
    binnacleCaseCreate: async (req, res) => {
        try {
            var params = req.body;
            var setCreate = {
                comments: params.comments,
                caseId: params.id,
            }
            var info = await models.BinnacleCases.create(setCreate);
            if (info !== null) {
                return res.status(200).json({
                    info,
                    code: 'BNL_CASE_200',
                    msg: 'Comentario agregado.'
                })
            }
            return res.status(200).json({
                code: 'BNL_CASE_403',
                msg: 'Comentario no pudo ser agregado.'
            })
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'BNL_CASE_500',
                error: error.message
            });
        }
    },
    binnacleCaseLists: async (req, res) => {
        try {
            var _caseId = req.params.id;
            var setWhere = {
                where: {
                    caseId: _caseId
                }
            }
            var info = await models.BinnacleCases.findAll(setWhere);
            if (info.length > 0) {
                return res.status(200).json({
                    info,
                    code: 'BNL_CASE_200',
                    msg: 'Comentarios.'
                });
            }
            return res.status(200).json({
                code: 'BNL_CASE_404',
                msg: 'Error al mostrar el seguimiento del caso.'
            });
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'BNL_CASE_500',
                error: error.message
            });
        }
    },
    binnacleCaseUpdate: async (req, res) => {
        try {
            var params = req.body;
            var idBnl = req.params.id;
            var setUpdate = {
                comments: params.comments,
            };
            var setWhere = {
                plain: true,
                returning: true,
                where: {
                    id: idBnl
                }
            };
            var info = await models.BinnacleCases.update(setUpdate, setWhere);
            if (info !== null && info.length > 0) {
                return res.status(200).json({
                    info,
                    code: 'BNL_CASE_200',
                    msg: 'Comentario actualizado.'
                });
            }
            return res.status(200).json({
                info,
                code: 'BNL_CASE_200',
                msg: 'Comentario no se pudo actualizar.'
            });

        } catch (error) {
            console.log(error);
            return res.status(200).json({
                code: 'BNL_CASE_500',
                error: error.message
            });
        }
    }
}
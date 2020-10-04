'use strict';

const INITIAL_STAGE = 1;
const INITIAL_SATUS = true;
const models = require('../../models');

module.exports = {
   createAcceptLawyerCase: async (req, res) => {
      try {
         var _lawyerId = req.lawyer.id;
         var params = req.body;
         var setCreate = {
            lawyerId: _lawyerId,
            nameClient: params.nameClient,
            identiferClient: params.identiferClient,
            speciality: params.speciality,
            statusCase: INITIAL_SATUS,
            email: params.email,
            cellphone: params.cellphone,
            matters: params.matters,
            stage: INITIAL_STAGE,
            stagesName: params.stagesName
         };

         var info = await models.LawerCases.create(setCreate);
         if (info !== null) {
            return res.status(200).json({
               info,
               code: 'LAWYER_CASE_200',
               msg: 'Los datos han sido registrados.'
            });
         }

         return res.status(200).json({
            code: 'LAWYER_CASE_403',
            msg: 'Algo pasó al registrar la infomación. Pruebe de nuevo.'
         });
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_CASE_500',
            error: error.message
         });
      }
   },
   updateLawerCases: async (req, res) => {
      try {
         var params = req.body;
         var _id = req.params.id;
         var setWhere = {
            plain: true,
            returning: true,
            where: {
               id: _id
            }
         }

         var setUpdate = {
            nameClient: params.nameClient,
            identiferClient: params.identiferClient,
            speciality: params.speciality,
            statusCase: true,
            email: params.email,
            cellphone: params.cellphone,
            matters: params.matters,
            stage: params.stage,
            stagesName: params.stagesName
         };
         var info = await models.LawerCases.update(setUpdate, setWhere)
            .then((info) => {
               return {
                  info: info[1],
                  code: 'LAWYER_CASE_200',
                  msg: 'Caso actualizado.'
               }
            })
            .catch((err) => {
               return {
                  code: 'LAWYER_CASE_403',
                  msg: 'No se actualizó el caso.'
               }
            });
         return res.status(200).json(info);
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_CASE_500',
            error: error.message
         });
      }
   },
   listsLawyerCases: async (req, res) => {
      try {
         var _lawyerId = req.lawyer.id;
         var setWhere = {
            where: {
               lawyerId: _lawyerId
            }
         }
         var info = await models.LawerCases.findAll(setWhere);
         if (info.length > 0) {
            return res.status(200).json({
               info,
               code: 'LAWYER_CASE_200',
               msg: 'Casos aceptados.'
            });
         }

         return res.status(200).json({
            code: 'LAWYER_CASE_403',
            msg: 'Algo pasó al mostrar la infomación. Intente de nuevo.'
         });
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_CASE_500',
            error: error.message
         });
      }
   },
   showDetailLawyerCase: async (req, res) => {
      try {
         var idCase = req.params.id;
         var setWhere = {
            where: {
               id: idCase
            }
         }
         var info = await models.LawerCases.findOne(setWhere);
         if (info !== null) {
            return res.status(200).json({
               info,
               code: 'LAWYER_CASE_200',
               msg: 'Detalles el caso.'
            });
         }

         return res.status(200).json({
            code: 'LAWYER_CASE_403',
            msg: 'Algo pasó al mostrar los detalles. Pruebe de nuevo.'
         });

      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_CASE_500',
            error: error.message
         });
      }
   },
   closeLawyerCase: async (req, res) => {
      try {
         var idCase = req.params.id;
         var setWhere = {
            plain: true,
            returning: true,
            where: {
               id: idCase
            }
         };

         var setUpdate = {
            statusCase: true
         };

         var info = await models.LawerCases.update(setUpdate, setWhere);
         if (info !== null) {
            return res.status(200).json({
               info,
               code: 'LAWYER_CASE_200',
               msg: 'Caso concluido.'
            });
         }

         return res.status(200).json({
            code: 'LAWYER_CASE_403',
            msg: 'Algo pasó al cerrar el caso. Pruebe de nuevo.'
         });

      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_CASE_500',
            error: error.message
         });
      }
   }
}
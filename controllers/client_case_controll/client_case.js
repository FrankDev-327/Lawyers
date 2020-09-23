'use strict';

const models = require('../../models');

module.exports = {
   //solo para el cliente.
   createMattersCases: async (req, res) => {
      try {
         var idClient = req.objUsr.identiferClient;
         var params = req.body;
         var setCreate = {
            nameClient: params.nameClient,
            identiferClient: idClient,
            email: params.email,
            cellphone:params.cellphone,
            speciality: params.speciality,
            lawyerId: params.lawyerId,
            matters: params.matters,
            status: true
         }
         var info = await models.ClientCase.create(setCreate);

         if (info !== null) {
            return res.status(200).json({
               info,
               code: 'CLIENT_CASE_200',
               msg: 'Sus datos han sido registrados.'
            });
         }

         return res.status(200).json({
            code: 'CLIENT_CASE_403',
            msg: 'Algo pasó al registrar su infomación. Pruebe de nuevo.'
         });
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'CLIENT_CASE_500',
            error: error.message
         });
      }
   },//tocado por el abogado
   statusChangeCases: async (req, res) => {
      try {
         var params = req.body;
         var id = req.params.id;
         var setWhere = {
            where: {
               id: id
            }
         };
         var seUpdate = {
            status: params.status
         };

         var info = await models.ClientCase.update(seUpdate, setWhere);
         if (info !== null && info.length > 0) {
            return res.status(200).json({
               code: 'CLIENT_CASE_200',
               msg: 'Caso rechazado.'
            });
         }

         return res.status(200).json({
            code: 'CLIENT_CASE_403',
            msg: 'Algo pasó al rechazar el caso. Intente de nuevo.'
         });

      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'CLIENT_CASE_500',
            error: error.message
         });
      }
   },
   rejectOrAcceptListsCases: async (req, res) => {
      try {
         //valor que debe ser tomado del payload
         var idClient = req.objUsr.identiferClient;
         var setWhere = {
            where: {
               identiferClient: idClient
            }
         }
         var info = await models.ClientCase.findAll(setWhere);
         if (info.length > 0) {
            return res.status(200).json({
               info,
               code: 'CLIENT_CASE_200',
               msg: 'Información de sus casos.'
            });
         }
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'CLIENT_CASE_500',
            error: error.message
         });
      }
   }
}
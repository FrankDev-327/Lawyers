'use strict';

const models = require('../../models');

module.exports = {
   //only to the clients.
   createSubjectsCases: async (req, res) => {
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
            subjects: params.subjects,
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
   },
   //this method will be used for the lawyer.
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
         //value that must be taken from the payload.
         var idClient = req.objUsr.identiferClient;
         var setWhere = {
            where: {
               status: false,
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
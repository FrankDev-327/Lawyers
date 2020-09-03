'use strict';

const models = require('../../models');

module.exports = {
   lawyerCreateInfo: async (req, res) => {
      try {
         var params = req.body;
         var setCreate = {
            name: params.name,
            lastName: params.lastName,
            cellphohe: params.cellphohe,
            identify: params.identify,
            email: params.email,
            password: params.password,
            idCategory: parseInt(params.idCategory),
            address: params.address
         }
         var info = await models.Lawyers.create(setCreate);
         if (info !== null) {
            return res.status(200).json({
               info,
               code: 'LAWYER_200',
               msg: 'Sus datos han sido registrados.'
            });
         }

         return res.status(200).json({
            code: 'LAWYER_403',
            msg: 'Algo pasó al registrar su infomación. Pruebe de nuevo.'
         });
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_500',
            error: error.message
         });
      }
   },
   lawyerUpdateInfo: async (req, res) => {
      try {
         var idLw = req.params.id;
         var seWhere = {
            plain: true,
            returning: true,
            where: {
               id: idLw
            }
         }
         var setUpdate = {
            /*name: params.name,
            lastName: params.lastName,*/
            cellphohe: params.cellphohe,
            password: params.password,
            email: params.email,
            idCategory: parseInt(params.idCategory),
            address: params.address
         };
         var info = await models.Lawyers.update(setUpdate, seWhere)
            .then((info) => {
               return {
                  info: info[1],
                  code: 'LAWYER_200',
                  msg: 'Sus datos han sido actualizado.'
               }
            })
            .catch((error) => {
               console.log(error)
               return {
                  code: 'LAWYER_403',
                  msg: 'Algo pasó al actualizar su infomación. Pruebe de nuevo.'
               }
            });
         return res.status(200).json(info);
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_500',
            error: error.message
         });
      }
   },
   lawyerInfoList: async (req, res) => {
      try {
         var info = await models.Lawyers.findAll();
         if (info !== null && info.length > 0) {
            return res.status(200).json({
               info,
               code: 'LAWYER_200',
               msg: 'Sus datos han sido registrados.'
            });
         }

         return res.status(200).json({
            code: 'LAWYER_403',
            msg: 'Algo pasó al mostrar la infomación. Pruebe de nuevo.'
         });
      } catch (error) {
         console.log(error);
         return res.status(200).json({
            code: 'LAWYER_500',
            error: error.message
         });
      }
   }
}
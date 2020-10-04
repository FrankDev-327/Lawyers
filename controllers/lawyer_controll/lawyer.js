'use strict';

const models = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { encoderLawyer } = require('../../middlewares/index')

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
   lawyerCreateInfo: async (req, res) => {
      try {
         var params = req.body;
         var setCreate = {
            name: params.name,
            lastName: params.lastName,
            cellphohe: params.cellphohe,
            identify: params.identify,
            email: params.email,
            password: await hashPass(params.password),
            description: params.description,
            bio: params.bio,
            resume: params.resume,
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
            cellphohe: params.cellphohe,
            bio: params.bio,
            password: params.password,
            email: params.email,
            password: await hashPass(params.password),
            description: params.description,
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
   lawyerInfoView: async (req, res) => {
      try {
         var _id = req.params.id;
         var setWhere = {
            where: {
               id: _id
            }
         }
         var info = await models.Lawyers.findOne(setWhere);
         if (info !== null) {
            return res.status(200).json({
               info,
               code: 'LAWYER_200',
               msg: 'Información personal.'
            });
         }

         return res.status(200).json({
            code: 'LAWYER_403',
            msg: 'Algo pasó al mostrar su infomación. Pruebe de nuevo.'
         });
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
   },
   lawyerLogin: async (req, res) => {
      try {
         var params = req.body;
         var pass = params.password;
         var email = params.email;
         var setWhere = {
            where: {
               email: email
            }
         }

         var info = await models.Lawyers.findOne(setWhere);
         if (info !== null) {
            var dataLawyer = await comparePass(pass, info.password);
            if (dataLawyer) {
               let token = await encoderLawyer.lawyerToken(dataLawyer);
               return res.status(200).json({
                  token:token,
                  info:dataLawyer,
                  code: 'LAWYER_200',
                  msg: 'Ha iniciado sesión.'
               });
            }
            return res.status(200).json({
               code: 'LAWYER_403',
               msg: 'Contraseña incorrecta.'
            });
         }
         return res.status(200).json({
            code: 'LAWYER_404',
            msg: 'El correo no existe.'
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
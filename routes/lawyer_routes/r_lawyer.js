'use strict';

const express = require('express');
const route = express.Router();
const {
    decoderLawyer
} = require('../../middlewares/index')
const {
    LawyerControll
} = require('../../controllers/index')

route.post('/lawyer-create/', decoderLawyer.authLawyer, LawyerControll.lawyerCreateInfo);
route.post('/lawyer-login/', decoderLawyer.authLawyer, LawyerControll.lawyerLogin);
route.put('/lawyer-update/:id', decoderLawyer.authLawyer, LawyerControll.lawyerUpdateInfo);
route.get('/lawyer-list/', decoderLawyer.authLawyer, LawyerControll.lawyerInfoList);
route.get('/lawyer-view/:id', decoderLawyer.authLawyer, LawyerControll.lawyerInfoView);

module.exports = route;
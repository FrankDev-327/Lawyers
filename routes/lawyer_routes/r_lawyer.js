'use strict';

const express = require('express');
const route = express.Router()
const { LawyerControll } = require('../../controllers/index')

route.post('/lawyer-create/', LawyerControll.lawyerCreateInfo);
route.post('/lawyer-login/', LawyerControll.lawyerLogin);
route.put('/lawyer-update/:id', LawyerControll.lawyerUpdateInfo);
route.get('/lawyer-list/', LawyerControll.lawyerInfoList);

module.exports = route;

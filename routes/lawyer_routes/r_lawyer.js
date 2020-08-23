'use strict';

const express = require('express');
const route = express.Router()
const { LawyerControll } = require('../../controllers/index')

route.post('/lawyer-create/', LawyerControll.lawyerCreateInfo);

module.exports = route;

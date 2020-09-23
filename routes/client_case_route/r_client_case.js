'use strict';

const express = require('express');
const route = express.Router()
const { ClientCaseControll } = require('../../controllers/index')

route.post('/client-case-create/', ClientCaseControll.createMattersCases);
route.put('/client-case-reject/:id', ClientCaseControll.statusChangeCases);
route.get('/client-case-list/', ClientCaseControll.rejectOrAcceptListsCases);

module.exports = route;

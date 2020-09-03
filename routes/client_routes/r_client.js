'use strict';

const express = require('express');
const route = express.Router()
const { ClientControll } = require('../../controllers/index')

route.post('/client-create/', ClientControll.createInfoClients);
route.post('/client-login/', ClientControll.loginClient);
route.put('/client-update/:id', ClientControll.updateInfoClients);
route.get('/client-check/:id', ClientControll.viewInfoClient);

module.exports = route;

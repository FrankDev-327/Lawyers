'use strict';

const express = require('express');
const route = express.Router()
const { ClientPhotoControll } = require('../../controllers/index')

route.post('/client-photo-create/', ClientPhotoControll.createProfileClients);
route.put('/client-photo-update/:id', ClientPhotoControll.updateProfileClients);
route.get('/client-photo-view/:id', ClientPhotoControll.displayProfileClients);
route.get('/client-photo-lists/', ClientPhotoControll.listsPhotoProfileLawyer); //para el admin

module.exports = route;

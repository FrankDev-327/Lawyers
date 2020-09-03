'use strict';

const express = require('express');
const route = express.Router()
const { LawyerPhotoControll } = require('../../controllers/index')

route.post('/lawyer-photo-create/', LawyerPhotoControll.createPhotoProfileLaweyer);
route.put('/lawyer-photo-update/:id', LawyerPhotoControll.updatePhotoProfileLawyer);
route.get('/lawyer-photo-view/:id', LawyerPhotoControll.displayPhotoProfileLawyer);
route.get('/lawyer-photo-lists/', LawyerPhotoControll.listsPhotoProfileLawyer);

module.exports = route;

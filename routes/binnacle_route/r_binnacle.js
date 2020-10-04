'use strict';

const express = require('express');
const route = express.Router();
const {
    decoderClient,
    decoderLawyer
} = require('../../middlewares/index')
const {
    BinnacleControll
} = require('../../controllers/index')

route.post('/logbook-create/', decoderClient.authClient, decoderLawyer.authLawyer, BinnacleControll.binnacleCaseCreate);
route.get('/logbook-lists/:id', decoderClient.authClient, decoderLawyer.authLawyer, BinnacleControll.binnacleCaseLists);
route.put('/logbook-update/:id', decoderClient.authClient, decoderLawyer.authLawyer, BinnacleControll.binnacleCaseUpdate);

module.exports = route;
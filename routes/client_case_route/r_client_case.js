'use strict';

const express = require('express');
const route = express.Router()
const {
    ClientCaseControll
} = require('../../controllers/index');
const {
    decoderClient,
    decoderLawyer
} = require('../../middlewares/index')

route.post('/client-case-create/', decoderClient.authClient, ClientCaseControll.createSubjectsCases);

//it's will be used for the lawyer.
route.put('/client-case-reject/:id', decoderLawyer.authLawyer, ClientCaseControll.statusChangeCases);
route.get('/client-case-list/', decoderClient.authClient, ClientCaseControll.rejectOrAcceptListsCases);

module.exports = route;
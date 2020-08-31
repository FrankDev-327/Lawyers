'use strict';

const express = require('express');
const route = express.Router()
const { CategoryControll } = require('../../controllers/index')

route.post('/category-create/', CategoryControll.categoryCreate);
route.get('/category-lists/', CategoryControll.categoryLists);

module.exports = route;

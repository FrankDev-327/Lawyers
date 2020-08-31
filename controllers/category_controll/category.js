'use strict';

const models = require('../../models');

async function categoryCreate(req, res) {
    try {
        var info = await models.Categories.create(req.body);
        if (info !== null) {
            return res.status(200).json({
                info,
                code: 'CAT_200',
                msg: 'El dato ha sido creado con éxito.'
            });
        }

        return res.status(200).json({
            code: 'CAT_403',
            msg: 'Algo pasó al registrar su infomación. Pruebe de nuevo.'
        });
    } catch (error) {
        console.log(error);
    }
}

async function categoryLists(req, res) {
    try {
        var info = await models.Categories.findAll();
        if (info !== null && info.length > 0) {
            return res.status(200).json({
                info,
                code: 'CAT_200',
                msg: 'Listado de categorías.'
            });
        }

        return res.status(200).json({
            code: 'CAT_403',
            msg: 'Algo pasó al mostrar las categorías.'
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    categoryCreate,
    categoryLists,

}
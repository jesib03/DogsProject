const { Router } = require('express');

const getDogs = require('../handlers/getDogs');
const getDogsByName = require('../handlers/getDogsByName');
const getDogsById = require('../handlers/getDogsById');
const deleteDog = require('../handlers/deleteDog');
const createDog = require('../handlers/createDog');
const { validate, validateName } = require('../middlewares/middlewares');


const dogsRouter = Router();

dogsRouter.get('/', getDogs);
dogsRouter.get('/name/', getDogsByName);
dogsRouter.get('/:id', getDogsById);
dogsRouter.delete('/:id', deleteDog);
dogsRouter.post('/', validate,  createDog);


module.exports = dogsRouter;
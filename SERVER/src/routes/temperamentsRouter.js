const { Router } = require('express');

const getTemperaments = require('../handlers/getTemperaments');

const temperamentsRouter = Router();


temperamentsRouter.get('/', getTemperaments);

module.exports = temperamentsRouter;
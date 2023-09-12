const { Dog, Temperament } = require('../../db');

const addNewDog = async ({name, image, weight, height, life_expectancy, temperaments}) => {
    const temperamentIds = await Temperament.findAll({
        where: {
          name: temperaments,
        },
        attributes: ['id'],
      });
    const newDog = await Dog.create({ name, image, weight, height, life_expectancy });
    await newDog.addTemperament(temperamentIds);
    return newDog;
}
    


module.exports = addNewDog;
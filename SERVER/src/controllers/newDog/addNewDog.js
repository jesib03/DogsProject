const { Dog } = require('../../db');

const addNewDog = async ({name, image, weight, height, life_expectancy, temperaments}) => {
    const newDog = await Dog.create({ name, image, weight, height, life_expectancy });
    newDog.addTemperament(temperaments);
    return newDog;
}
    


module.exports = addNewDog;
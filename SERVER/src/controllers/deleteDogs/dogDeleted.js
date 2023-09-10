const { Dog } = require('../../db')

const dogDeleted = async (id) => {
    const dog = await Dog.findByPk(id);
    if (!dog) {
        throw new Error('Dog not found');
    } else {
        await dog.destroy();
        return dog;
    }
}

module.exports = dogDeleted;
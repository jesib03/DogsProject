const { Temperament } = require('../../db');

const keptTemperamentsInDB = async (name) => {
    
        const [temperament, created] = await Temperament.findOrCreate({
          where: { name: name },
          defaults: { name: name },
        });
        return created ? 'Temperament created' : 'Temperament already exists'
      
}

module.exports = keptTemperamentsInDB;
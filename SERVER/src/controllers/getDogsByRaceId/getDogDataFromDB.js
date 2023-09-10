const { Dog, Temperament } = require("../../db");

const getDogDataFromDB = async (id) => {
    
        const dogFromDataBase = await Dog.findByPk(id, {
            include: {
              model: Temperament,
              attributes: ["name"],
              through: {
                attributes: [],
              },
            },
          });
          return !dogFromDataBase ? 'Error fetching data from database' : dogFromDataBase;
   
} 

module.exports = getDogDataFromDB;
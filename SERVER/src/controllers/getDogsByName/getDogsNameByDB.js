const { Sequelize } = require("sequelize");
const { Dog } = require("../../db");

const getDogsNameByDB = async (name) => {

        const dogs = await Dog.findAll({
            where: {
                name: {
                    [Sequelize.Op.iLike]: `%${name}%`
                }
            }
        })
        return !dogs ? 'Error fetching name from database' : dogs;

};

module.exports = getDogsNameByDB;
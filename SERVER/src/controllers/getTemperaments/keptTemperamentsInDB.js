const { Temperament } = require("../../db");

const keptTemperamentsInDB = async (temperament) => {
  const temperamentsCreated = await Temperament.bulkCreate(
    temperament.map((name) => ({ name })),
    { ignoreDuplicates: true }
  );

  return `Temperaments created: ${temperamentsCreated.length}`;
};

module.exports = keptTemperamentsInDB;

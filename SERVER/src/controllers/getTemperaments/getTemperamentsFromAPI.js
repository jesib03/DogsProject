const axios = require("axios");
require("dotenv").config();

const { URL, API_KEY } = process.env;

const getTemperamentsFromAPI = async () => {
  const response = await axios(`${URL}?api_key=${API_KEY}`);
  const dogData = response.data;

  const temperamentsArray = [];
  // Itera a través de los datos de perros y extrae los temperamentos de cada perro
  dogData.forEach((dog) => {
    const dogTemperament = dog.temperament;

    if (dogTemperament) {
      // Divide los temperamentos en un array y elimina los espacios en blanco
      const temperaments = dogTemperament.split(",").map((t) => t.trim());
      // Agrega los temperamentos al array principal
      temperamentsArray.push(...temperaments);
    }
  });
  // Elimina duplicados y valores nulos del array de temperamentos utilizando un conjunto (Set)
  const uniqueTemperaments = [...new Set(temperamentsArray.filter(Boolean))];

  return uniqueTemperaments;
};

module.exports = getTemperamentsFromAPI;

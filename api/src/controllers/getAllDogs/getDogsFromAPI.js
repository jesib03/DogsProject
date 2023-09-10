const axios = require("axios");
require("dotenv").config();

const { URL, API_KEY } = process.env;

const cleanData = (array) =>
  array.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      temperament: dog.temperament,
      height: dog.height.metric,
      weight: dog.weight.metric,
      lifeSpan: dog.life_span,
      origin: dog.origin,
      created: false,
    };
  });

const getDogsFromAPI = async () => {
  const allDogs = await axios(`${URL}?api_key=${API_KEY}`);
  const showDogs = allDogs.data;
  const apiDogs = cleanData(showDogs);
  return !apiDogs ? "Error from API" : apiDogs;
};

module.exports = getDogsFromAPI;

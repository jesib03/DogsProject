const axios = require("axios");
require("dotenv").config();

const { URL, API_KEY } = process.env;

const getDogsNameByAPI = async (name) => {

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

    const dogsData = await axios(`${URL}?api_key=${API_KEY}`);
    const dogsNameData = dogsData.data;

    const dogsNames = dogsNameData.filter((dog) => {
      return dog.name.toLowerCase().includes(name.toLowerCase());
    });
    const apiDogs = cleanData(dogsNames);
    return !apiDogs ? "Error fetching name from API" : apiDogs;
};

module.exports = getDogsNameByAPI;

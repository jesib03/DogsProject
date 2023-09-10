const axios = require("axios");
require("dotenv").config();

const { URL, API_KEY } = process.env;

const getDogDataFromApi = async (id) => {
  const dogsByApi = await axios(`${URL}?api_key=${API_KEY}`);
  const dogsByApiId = dogsByApi.data;

  const dogFromApi = dogsByApiId.find((dog) => dog.id == id);
  const cleanDogFromAPI = {
    id: dogFromApi.id,
    name: dogFromApi.name,
    image: dogFromApi.image.url,
    temperament: dogFromApi.temperament,
    height: dogFromApi.height.metric,
    weight: dogFromApi.weight.metric,
    lifeSpan: dogFromApi.life_span,
    origin: dogFromApi.origin,
  };
  return !cleanDogFromAPI ? "Error fetching data from API" : cleanDogFromAPI;
};

module.exports = getDogDataFromApi;

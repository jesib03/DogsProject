const axios = require("axios");
require("dotenv").config();

const { URL, API_KEY } = process.env;

const getTemperamentsFromAPI = async () => {
    
        const response = await axios(`${URL}?api_key=${API_KEY}`);
        const dataTemperaments = response.data.map(t => t.temperament)
        const temperamentString = dataTemperaments.join(","); // Aqui se transforma el array de temperamentos en un string separado por comas   
        const temperamentsArray = temperamentString.split(","); // Aqui se transforma el string en un array separado por comas
        // Elimino duplicados y valores nulos del array de temperamentos utilizando
        //  un conjunto (Set). Este array resultante contendrá los temperamentos únicos y válidos.
        const uniqueTemperaments = [
          ...new Set(temperamentsArray.filter((item) => item !== null)),
        ];
        return !uniqueTemperaments ? 'Error fetching temperaments from API' : uniqueTemperaments; 
}


module.exports = getTemperamentsFromAPI;
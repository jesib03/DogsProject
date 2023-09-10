const getTemperamentsFromAPI = require("../controllers/getTemperaments/getTemperamentsFromAPI");
const keptTemperamentsInDB = require("../controllers/getTemperaments/keptTemperamentsInDB");

const getTemperaments = async (req, res) => {
  try {
    const apiTemperaments = await getTemperamentsFromAPI();

    if (apiTemperaments) {
      const promises = apiTemperaments.map(async (name) => {
        if (name) {
          await keptTemperamentsInDB(name);
        }
      });
      // Espero a que todas las promesas se completen antes de continuar.
      await Promise.all(promises);

      return res.status(200).json(apiTemperaments);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTemperaments;

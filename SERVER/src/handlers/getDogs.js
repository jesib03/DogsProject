const getDogsFromAPI = require("../controllers/getAllDogs/getDogsFromAPI");
const getDogsFromDB = require("../controllers/getAllDogs/getDogsFromDB");

const getDogs = async (req, res) => {
  try {
    const apiDogs = await getDogsFromAPI();
    const dbDogs = await getDogsFromDB();

    const combinedDogs = [...apiDogs, ...dbDogs];
    return res.status(200).json(combinedDogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = getDogs;

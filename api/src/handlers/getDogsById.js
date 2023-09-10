const getDogDataFromApi = require("../controllers/getDogsByRaceId/getDogDataFromApi");
const getDogDataFromDB = require("../controllers/getDogsByRaceId/getDogDataFromDB");

const getDogsById = async (req, res) => {
  
  const { id } = req.params;

  try {
    if (isNaN(id)) {
      const dogFromDB = await getDogDataFromDB(id);
      if (dogFromDB) res.status(200).json(dogFromDB);
    } else {
      const dogFromApi = await getDogDataFromApi(id);
      if (dogFromApi) res.status(200).json(dogFromApi);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getDogsById;


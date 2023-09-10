const getDogsNameByDB = require("../controllers/getDogsByName/getDogsNameByDB");
const getDogsNameByAPI = require("../controllers/getDogsByName/getDogsNameByApi");

const getDogsByName = async (req, res) => {
  const { name } = req.query;

  try {
    const dogsNameByDB = await getDogsNameByDB(name);

    if (dogsNameByDB && dogsNameByDB.length > 0) {
      return res.status(200).json(dogsNameByDB);
    } else {
      const dogsNameByAPI = await getDogsNameByAPI(name);
  
      if (dogsNameByAPI && dogsNameByAPI.length > 0) {
        return res.status(200).json(dogsNameByAPI);
      }
    } 
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = getDogsByName;

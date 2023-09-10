const addNewDog = require("../controllers/newDog/addNewDog");

const createDog = async (req, res) => {
  const { name, image, weight, height, life_expectancy, temperaments } =
  req.body;
  try {
     await addNewDog({name, image, weight, height, life_expectancy, temperaments});
      return res.status(201).json('Dog created succesfully');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createDog;

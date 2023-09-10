const validate = (req, res, next) => {
  const { name, image, weight, height, life_expectancy, temperaments } =
    req.body;
  if (
    !name ||
    !image ||
    !weight ||
    !height ||
    !life_expectancy ||
    !temperaments
  ) {
    return res.status(400).json({
      message: "Missing data",
    });
  }
  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== "string" || name.length < 3) {
    return res.status(400).json({
      message: "Invalid name",
    });
  }
  next();
};

module.exports = {
  validate,
  validateName,
}

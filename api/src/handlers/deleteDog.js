const dogDeleted = require('../controllers/deleteDogs/dogDeleted')

const deleteDog = async (req, res) => {
    const { id } = req.params;
    try {
        const dog = await dogDeleted(id);
        return res.status(200).send(`Dog ${dog.name} deleted`);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = deleteDog;
const getConnection = require('../db');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const [locations] = await connection.query('SELECT * FROM Location');
        res.status(200).send({ locations });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
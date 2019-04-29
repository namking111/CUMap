const getConnection = require('../db');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const [buildings] = await connection.query('SELECT B.Landmark_id, Bld_name, Latitude, Longitude FROM Building B JOIN Position P ON B.Landmark_id = P.Landmark_id');
        // console.log("from back building",buildings);
        res.status(200).send(buildings);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
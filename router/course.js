const getConnection = require('../db');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const [courseidname] = await connection.query('SELECT DISTINCT CONCAT(course_id, " ", course_name) AS idname FROM Subject');
        res.status(200).send(courseidname);



    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
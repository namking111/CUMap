const getConnection = require('../db');
const router = require('express').Router();

// router.get('/', async (req, res) => {
//     try {
//         const connection = await getConnection();
//         const [locations] = await connection.query('SELECT * FROM Landmark');
//         // console.log(locations[0].Landmark_id);
//         res.status(200).send(locations);
//         res.json(locations);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

router.get('/atm', async (req, res) => {
    try {
        const connection = await getConnection();
        const [atms] = await connection.query('SELECT Bank_name, Latitude, Longitude FROM ATM A JOIN Position P ON A.Landmark_id = P.Landmark_id');
        res.send(atms);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/canteen', async (req, res) => {
    try {
        const connection = await getConnection();
        const [canteens] = await connection.query('SELECT Canteen_name, Latitude, Longitude FROM Canteen C JOIN Position P ON C.Landmark_id = P.Landmark_id');
        res.status(200).send(canteens);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/museum', async (req, res) => {
    try {
        const connection = await getConnection();
        const [museums] = await connection.query('SELECT Museum_name, Latitude, Longitude FROM Museum M JOIN Position P ON M.Landmark_id = P.Landmark_id');
        res.status(200).send(museums);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/coffeeshop', async (req, res) => {
    try {
        const connection = await getConnection();
        const [coffeeshops] = await connection.query('SELECT Coffee_shop_name, Latitude, Longitude FROM Coffee_shop C JOIN Position P ON C.Landmark_id = P.Landmark_id');
        res.status(200).send(coffeeshops);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/copyprint', async (req, res) => {
    try {
        const connection = await getConnection();
        const [copyprints] = await connection.query('SELECT Copy_Print_shop_name, Latitude, Longitude FROM Copy_Print_shop C JOIN Position P ON C.Landmark_id = P.Landmark_id');
        res.status(200).send(copyprints);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/vending_machine', async (req, res) => {
    try {
        const connection = await getConnection();
        const [vendms] = await connection.query('SELECT Vending_Machine_type, Latitude, Longitude FROM Vending_Machine V JOIN Position P ON V.Landmark_id = P.Landmark_id');
        res.status(200).send(vendms);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/library', async (req, res) => {
    try {
        const connection = await getConnection();
        const [libraries] = await connection.query('SELECT Library_name, Latitude, Longitude FROM Library L JOIN Position P ON L.Landmark_id = P.Landmark_id');
        res.status(200).send(libraries);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get('/CU_Pop_Bus', async (req, res) => {
    try {
        const connection = await getConnection();
        const [CU_Pop_Bus] = await connection.query('SELECT CU_Bus_Station, Latitude, Longitude FROM CU_Pop_Bus B JOIN Position P ON B.Station_id = P.Station_id;');
        res.status(200).send(CU_Pop_Bus);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/CU_Bike', async (req, res) => {
    try {
        const connection = await getConnection();
        const [CU_Bike] = await connection.query('SELECT CU_Bike_Station, Latitude, Longitude FROM CU_Bike B JOIN Position P ON B.Station_id = P.Station_id;');
        res.status(200).send(CU_Bike);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/HAMO', async (req, res) => {
    try {
        const connection = await getConnection();
        const [HAMO] = await connection.query('SELECT HAMO_Station, Latitude, Longitude FROM HAMO B JOIN Position P ON B.Station_id = P.Station_id;');
        res.status(200).send(HAMO);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/Muvmi', async (req, res) => {
    try {
        const connection = await getConnection();
        const [Muvmi] = await connection.query('SELECT Muvmi_Station, Latitude, Longitude FROM Muvmi B JOIN Position P ON B.Station_id = P.Station_id;');
        res.status(200).send(Muvmi);
    } catch (error) {
        res.status(500).send(error);
    }
});



module.exports = router;
const getConnection = require('../db');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        //const [courseidname] = await connection.query('SELECT DISTINCT CONCAT(course_id, " ", course_name) AS idname FROM Subject');
        // so much ok for profabbrv const [courseinfo] = await connection.query('SELECT DISTINCT CONCAT(Subject.course_id, " ", Subject.course_name) AS idname,Teach.Prof_abbrv,Subject.course_id,Subject.section FROM Subject, Teach WHERE Subject.course_id=Teach.course_id AND Subject.section=Teach.section')
        const [courseinfo] = await connection.query('SELECT Subject.course_id,Subject.course_name,CONCAT(Subject.course_id, " ", Subject.course_name, " section ",Subject.section) AS idnamesec, Subject.section, Professor.Prof_Name, Schedule.Day, CONCAT(Schedule.Start,"-",Schedule.End) AS ctime, Located_In.floor, Located_In.room_number, Building.bld_name, Faculty.faculty_name FROM Subject, Teach, Schedule, Located_In, Professor, Building, Faculty WHERE Subject.course_id=Teach.course_id AND Subject.section=Teach.section AND Subject.course_id = Schedule.course_id AND Subject.section = Schedule.section AND Subject.course_id=Located_In.course_id AND Subject.section = Located_In.section AND Professor.Prof_abbrv = Teach.Prof_abbrv AND Building.Landmark_id=Located_In.Landmark_id AND Building.faculty_id=Faculty.faculty_id order by Subject.course_id asc, Subject.section asc')
        // const [profabbr] = await connection.query('SELECT prof_abbrv FROM Teach, Subject')
        //'SELECT DISTINCT CONCAT(course_id, " ", course_name) AS idname,course_id,teach FROM Subject,Teach WHERE teach.course_id=subject.course_id'
        // ok 'SELECT DISTINCT CONCAT(course_id, " ", course_name) AS idname FROM Subject'
        // ok res.status(200).send(courseidname);
        res.status(200).send(courseinfo);


    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/count', async (req, res) => {
    try {
        const connection = await getConnection();
        const [coursecounter] = await connection.query('SELECT count(*) as countcrssec,course_id, section, concat(course_id," ",section) as crsec FROM Schedule group by course_id asc, section order by Schedule.course_id asc, Schedule.section asc')
        res.status(200).send(coursecounter);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/courseidnamesecdist', async (req, res) => {
    try {
        const connection = await getConnection();
        const [cidname] = await connection.query('SELECT distinct concat(course_id," ",course_name, " section ",section) as idnamesecdist,course_id, section FROM Subject order by Subject.course_id asc, Subject.section asc')
        res.status(200).send(cidname);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;

/*105 entries of 120 ...
SELECT Subject.course_id,CONCAT(Subject.course_id, " ", Subject.course_name) AS idname,Subject.section, Professor.Prof_Name, Schedule.Day, CONCAT(Schedule.Start,"-",Schedule.End) AS ctime, Located_In.floor, Located_In.room_number, Building.bld_name, Faculty.faculty_name
FROM Subject, Teach, Schedule, Located_In, Professor, Building, Faculty
WHERE Subject.course_id=Teach.course_id AND Subject.section=Teach.section AND Subject.course_id = Schedule.course_id AND Subject.section = Schedule.section AND Subject.course_id=Located_In.course_id AND Subject.section = Located_In.section AND Professor.Prof_abbrv = Teach.Prof_abbrv AND Building.Landmark_id=Located_In.Landmark_id AND Building.faculty_id=Faculty.faculty_id
order by Subject.course_id, Subject.section
*/
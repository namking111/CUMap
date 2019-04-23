const mysql = require('mysql2/promise');
const secret = require('./secret');

module.exports = async () => {
    return await mysql.createConnection({
        host: secret.mySqlHost,
        database: secret.mySqlDatabase,
        user: secret.mySqlUser,
        password: secret.mySqlPassword,
    });
};
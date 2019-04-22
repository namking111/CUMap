// MYSQL_DATABASE=db
// MYSQL_USER=backend
// MYSQL_PASSWORD=password
// MYSQL_HOST=localhost

if (!process.env.MYSQL_DATABASE) {
    throw new Error('Environment MYSQL_DATABASE not found');
}
if (!process.env.MYSQL_USER) {
    throw new Error('Environment MYSQL_USER not found');
}
if (!process.env.MYSQL_PASSWORD) {
    throw new Error('Environment MYSQL_PASSWORD not found');
}
if (!process.env.MYSQL_HOST) {
    throw new Error('Environment MYSQL_HOST not found');
}

module.exports = {
    mySqlDatabase: process.env.MYSQL_DATABASE,
    mySqlUser: process.env.MYSQL_USER,
    mySqlPassword: process.env.MYSQL_PASSWORD,
    mySqlHost: process.env.MYSQL_HOST,
}

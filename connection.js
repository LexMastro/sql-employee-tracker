const mysql = require('mysql2/promise');


async function connect() {

    // Connect to database
    const db = await mysql.createConnection(
        {
            host: 'localhost',
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: 'employee_db'
        }
    );

    // connect to mysql
    console.log('MySQL Connected!')
    return db;

}


module.exports = {
    connect,
}

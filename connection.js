const mysql = require('mysql2/promise');


async function connect() {

    // Connect to database
    const db = await mysql.createConnection(
        {
            host: 'localhost',
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: 'employee_db',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        }
    );

    // connect to mysql
    console.log('Connected to the Employee_db Database!')
    return db;
}

module.exports = {
    connect
}

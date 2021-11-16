const { connect } = require("../connection");

async function viewDepartments() {
    const db = await connect();
    const result = await db.execute("SELECT * from `employee_db`.`department`");
    // only getting the rows
    return result[0];

}

async function viewEmployees() {
    const db = await connect();
    const result = await db.execute("SELECT * from `employee_db`.`employee`");
    // only getting the rows
    return result[0];

}

async function addNewEmployee() {
    const db = await connect();
    const result = await db.execute("INSERT INTO employee SET ?");
    // only getting the rows
    return result[0];

}



module.exports = {
    viewDepartments, viewEmployees, addNewEmployee,
}

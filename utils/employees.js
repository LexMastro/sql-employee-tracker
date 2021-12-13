const { connect } = require("../connection");
const consoleTable = require("console.table");

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

async function viewRoles() {
    const db = await connect();
    const result = await db.execute("SELECT * from `employee_db`.`role`");
    // only getting the rows
    return result[0];

}

async function addNewEmployee() {
    const db = await connect();
    const result = await db.execute("INSERT INTO employee SET ?");
    // only getting the rows
    return result[0];

}

async function selectEmployees() {
    const db = await connect()
    const result = await db.execute("SELECT employee.id, employee.first_name, employee.last_name, employee_role.title, department.name AS department,employee_role.salary, CONCAT(manager.first_name,' ',manager.last_name) AS Manager FROM employee employee LEFT JOIN employee manager ON employee.manager_id = manager.id INNER JOIN employee_role ON employee.role_id=employee_role.id INNER JOIN department ON employee_role.department_id=department.id ORDER By last_name");
    return result[0];
}



module.exports = {
    viewDepartments, viewEmployees, addNewEmployee, viewRoles, selectEmployees
}


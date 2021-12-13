require('dotenv').config()
const inquirer = require('inquirer');
const { connect } = require('./connection');
const { viewDepartments, viewEmployees } = require('./utils/employees');

const operation = {
    "View all Employees": async () => console.table(await viewEmployees()),
    "Add new Employee": () => { },
    "Update Employee Role": () => { },
    "View all Roles": () => { },
    "Add Role": () => { },
    "View all Departments": async () => console.table(await viewDepartments()),
    "Add Department": () => { },
    "Quit": () => { process.exit() },
}


const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: "What would you like to do?",
            loop: true,
            choices: Object.keys(operation),
            validate: (value) => { if (value !== "") { return true } else { return 'Please choose an option' } }
        },
    ]).then(async (response) => {
        await operation[response.start]()
        return promptQuestions()
    })
}

//         {
//             type: "input",
//             name: "department",
//             message: "What is the name of the department?",
//             validate: (value) => { if (value !== "") { return true } else { return 'Please enter department name' } }
//         },
//         {
//             type: "input",
//             name: "manager",
//             message: "What is the managers name?",
//             validate: (value) => { if (value !== "") { return true } else { return 'Please enter managers name' } }
//         },
//         {
//             type: "input",
//             name: "employee",
//             message: "What is the employees first name?",
//             validate: (value) => { if (value !== "") { return true } else { return 'Please enter employees name' } }
//         },
//         {
//             type: "input",
//             name: "employee",
//             message: "What is the employees last name?",
//             validate: (value) => { if (value !== "") { return true } else { return 'Please enter employees name' } }
//         },
//         {
//             type: "list",
//             name: "role",
//             message: "Enter employee role",
//             choices: [
//                 "Graphic Designer",
//                 "Web Developer",
//                 "Software Engineer",
//                 "Sales Manager",
//             ],
//             validate: (value) => { if (value !== "") { return true } else { return 'Please choose a role' } }
//         },

//     ])
// }




promptQuestions()
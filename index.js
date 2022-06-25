const {mainMenu, questions} = require('./questions');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./config/connection');

function allChoices() {
    inquirer.prompt(mainMenu)
    .then(answers => {
        console.log(answers)
        switch(answers.mainMenu) {
            case 'View all departments':
                viewAllDep()
            break; 
            case 'View all roles':
                viewAllRoles()
            break;
            case 'View all employees':
                viewAllEmployees()
            break;
            case 'Add a department':
                addDep()
            break;
            case 'Add a role':
                addRole()
            break;
            case 'Add an employee':
                addEmployee()
            break;
            case 'Update an employee role':
                updateEmployee()
            break;
        }

    })

}

function viewAllDep() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
      });
}

function viewAllRoles() {}

function viewAllEmployees() {}

function addDep() {}

function addRoleSalary(){}

function addRoleDep(){}

function addRole() {}

function firstName() {}

function lastName() {}

function newEmployeeRole() {}

function newEmployeeManager() {}

function addEmployee() {}

function updateEmployee() {}

allChoices()
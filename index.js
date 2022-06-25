const questions = require('./questions');
const db = require('./config/connection');
const consoleTable = require('console.table');
const inquirer = require('inquirer');

function allChoices() {
    inquirer.prompt(mainMenu)
    .then(answers => {
        console.log(answers)
        let choice = ''
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

function viewAllDep() {}

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
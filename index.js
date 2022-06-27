const {mainMenu, departmentQuestions, roleQuestions, employeeQuestions} = require('./questions');
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
            case 'Update an employee':
                updateEmployee()
            break;
            case 'Exit':
                process.exit(0)
            break;
        }

    })

}

function viewAllDep() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log('\n');
        console.table(results);
      });
      allChoices()
}

function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.log('\n');
        console.table(results);
      });
      allChoices()
}

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log('\n');
        console.table(results);
        console.log(results);
      });
    allChoices()
}

function addDep() {
    inquirer.prompt(departmentQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO department(name) VALUES ('${answers.addDep}')`, function (err, results) {
            console.log('\n');
            console.log(`${answers.addDep} added to list of departments`)
          });
        allChoices()
    })
}

function addRole() {
    inquirer.prompt(roleQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO role(title, salary, department_id) VALUES ('${answers.addRoleName}', ${answers.addRoleSalary},${answers.addRoleDep})`, function (err, results){
            console.log(`\n`);
            console.log(`${answers.addRoleName} added to list of roles`)
        });
        allChoices()
    })
}

function addEmployee() {
    inquirer.prompt(employeeQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${answers.first_name}', '${answers.last_name}',${answers.newEmployeeRole},${answers.newEmployeeManager})`, function (err, results){
            console.log(`\n`);
            console.log(err);
            console.log(`${answers.first_name} ${answers.last_name} added to list of employees`)
        })
        allChoices()
    })
}

function updateEmployee() {
    var employees 
    db.query('SELECT * FROM employee', function (err, results) {
        console.log('\n');
        console.log(err);
        console.table(results);
        employees = results;
        const promptChoices = []
        for(let i = 0; i < employees.length; i++) {
          console.log(employees[i].first_name)
          promptChoices.push(employees[i].first_name)
        }
        console.log(promptChoices)
        const updateEmployeePrompt= [
          {
              type:'list',
              message:'Which employee would you like to update?',
              choices: promptChoices,
              name:'updateEmployeePrompt'
          }
          
        ]
      inquirer.prompt(updateEmployeePrompt)
      .then(answers => {
          console.log(answers)
          db.query(`UPDATE employee SET(employee_id WHERE ('first_name= ${answers.first_name}')`, function (err, results){
              console.log(`\n`);
              console.log(`${answers.first_name} ${answers.last_name} added to list of employees`)
          })
      })
      });
}
//UPDATE employee SET WHERE

allChoices()
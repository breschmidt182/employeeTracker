const mainMenu = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee'],
        name:'mainMenu'
    },
]

const departmentQuestions = [
    {
        type:'input',
        message:'What is the name of the department you want to add?',
        name:'addDep'
    }
]

const roleQuestions = [
    {
        type:'input',
        message:'What is the name of the role you would like to add?',
        name:'addRoleName'
    },
    {
        type:'input',
        message:'What is the salary for this role?',
        name:'addRoleSalary'
    },
    {
        type:'input',
        message:'What department will this role be a part of? Must have department id.',
        name:'addRoleDep'
    }
]

const employeeQuestions = [
    {
        type:'input',
        message:'What is the FIRST name of the employee you would like to add?',
        name:'first_name'
    },
    {
        type:'input',
        message:'What is the LAST name of the employee you would like to add?',
        name:'last_name'
    },
    {
        type:'input',
        message:'What role will this employee have?',
        name:'newEmployeeRole'
    },
    {
        type:'input',
        message:'Who will the manager be for this employee?',
        name:'newEmployeeManager'
    }
]



module.exports = {mainMenu, departmentQuestions, roleQuestions, employeeQuestions}
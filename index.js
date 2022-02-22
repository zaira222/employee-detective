const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./db/connection');
const fs = require('fs');

const promptCompany = () => {
    console.log(`
    ===================
    EMPLOYEE DETECTIVE
    ===================
    `);
    return inquirer.prompt ([
        {
        type: 'list',
        name: 'options',
        message: 'What would you like to do? (Required)',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add A Role',  'Add an Employee', 'Update Employee Role', 'Done', 'Menu' ],
        }
    ])
    .then(answer => {
        if(answer.options === "View All Departments") {
            return promptDepartment();
        } else if (answer.options === "View All Roles") {
            return promptRoles();
        } else if (answer.options === "View All Employees") {
            return promptEmployees();
        } else if (answer.options === "Add a Department") {
            return promptAddDept();
        } else if (answer.options === "Add A Role") {
            return promptAddRole();
        } else if (answer.options === "Add an Employee") {
            return promptAddEmployee();
        } else if (answer.options === "Update Employee Role") {
            return promptUpdateRole();
    }     else if (answer.options === "Done") {
            return promptDone();
    } else if (answer.options === "Menu") {
        return promptCompany();
    }
    
})
}


const promptDepartment = () => {
    console.log(`
    =====================
    View All Departments
    =====================
    `);
    return inquirer.prompt ([
        {

        }

])
};

const promptRoles = () => {
    console.log(`
    ===================
    View All Roles
    ===================
    `);
    return inquirer.prompt ([
        {

        }
    ])
}

const promptEmployees = () => {
    console.log(`
    ===================
    View All Employees
    ===================
    `);
    return inquirer.prompt ([
        {

        }
    ])
}


const promptAddDept = () => {
    console.log(`
    ===================
    Add  A Department
    ===================
    `);
    return inquirer.prompt ([
        {

        }
    ])
}

const promptAddRole = () => {
    console.log(`
    ===================
    ADD A Role
    ===================
    `);
    return inquirer.prompt ([
        {

        }
    ])
}

const promptAddEmployee = () => {
    console.log(`
    ===================
    Add an Employee
    ===================
    `);
    return inquirer.prompt ([
        {

        }
    ])
}

const promptUpdateRole = () => {
    console.log(`
    ===================
    Update Employee Role
    ===================
    `);
    return inquirer.prompt ([
        {

        }
    ])
}

const promptDone = () => {
    console.log(`
    ===================
    Done
    ===================
    `);
    return inquirer.prompt ([
        {

        }
    ])
}

function companies() {
    promptCompany()
    .then(answers => {
        writeToFile(answers);
    });
}

companies()

db.connect(err => {
    console.log('success')
});



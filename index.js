const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const fs = require('fs');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'WD4Rainnow99!',
    database: 'employee_detective'
  });

connection.connect(function(err) {
    if(err) throw err;
    console.log('connected!');


    companies();
});


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
        
        } else if (answer.options === "Menu") {
            return promptCompany();
        }
    
})
}


const promptDepartment = () => {
          connection.query("SELECT * FROM `department` WHERE `id` = `id` AND `name`=`name`", 
          function (err, results, fields) {
              console.log(results);
              console.log(fields);
            console.table('added to the database', results),
                     promptCompany()
          
        }) 
       
    } 
  

const promptRoles = () => {
        connection.query("SELECT * FROM `role` WHERE `id` = `id` AND `title`=`title` AND `department_id` = `department_id` AND `salary` = `salary`", 
        function (err, results, fields) {
            console.log(results);
            console.log(fields);
          console.table('added to the database', results),
                   promptCompany()
  })
}


const promptEmployees = () => {
    connection.query("SELECT * FROM `employee` WHERE `id` = `id` AND `first_name`=`first_name` AND `last_name` = `last_name` AND `role_id` = `role_id` AND `manager_id` = `manager_id`", 
    function (err, results, fields) {
        console.log(results);
        console.log(fields);
      console.table('added to the database', results),
               promptCompany()
  })
} 




const promptAddDept = () => {
    console.log(`
    ===================
    Add  A Department
    ===================
    `);
    connection.query("SELECT * FROM department", 
    function (err, result, fields)
    {
    return inquirer.prompt ([
                {
                type: 'input',
                name: 'Department',
                message: 'What is the name of the Department? (Required)',
                validate: DepartmentInput => {
                    if(DepartmentInput) {
                        return true;
                    } else {
                        console.log('Enter departments name.');
                        return false;
                    }
                }

        },
    ]).then(function (answers) {
        console.log(answers);
        connection.query(
        'SELECT * FROM department WHERE department.name=?', [answers.Department], function (err, results)
        { 
            if(err) throw err;
       console.table('added to the database', results),
                promptCompany()
        }
        )
    })
})
}


const promptAddRole = () => {
    console.log(`
    ===================
    ADD A Role
    ===================
    `);
    employee =  []
    connection.query("SELECT * FROM role", 
    function (err, result, fields)
    {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'Role',
            message: 'What is the name of the role? (Required)',
            validate: RoleInput => {
                if(RoleInput) {
                    return true;
                } else {
                    console.log('Enter role name.');
                    return false;
                }
            }

    },
    {
        type: 'input',
        name: 'Salary',
        message: 'What is the salary of the role? (Required)',
        validate: SalaryInput => {
            if(SalaryInput) {
                return true;
            } else {
                console.log('Enter salary amount.')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'dept',
        message: 'Which department does the role belong to?',
        choices: ['Finance', 'Sales', 'Marketing', 'Production', 'Engineer', 'HR', 'Accounting', 'Loss Prevention']
    }
]).then(function (answers) {
    console.log(answers);
    var sql = "SELECT * FROM role WHERE role.title = ?, role.salary = ?, role.department_id = ? INSERT WHERE 'answers.title', 'answers.salary', 'answers.dept'";
    var inserts = ['answers.title', 'answers.salary', 'answers.dept'];
    sql = mysql.format(sql, inserts);
    console.table('added to the database', answers, inserts);
    promptCompany()
})
    })
}
const promptAddEmployee = () => {
    console.log(`
    ===================
    Add an Employee
    ===================
    `);
    employee = []
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees first name?',

        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employees last name?',
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What is the employees role?',
            choices: ['Finance Lead', 'Sales Associate', 'Marketing Specialist', 'Production Lead', 'Engineer Senior', 'Assistant HR', 'Bookeeping', 'Security'],
        },
        {
           type: 'list',
           name: 'manager',
           message: 'Who is the employees manager?',
           choices: ['None', 'Jose Torres', 'Tom Beth', 'Tracy Robin', 'Jocey Marlo', 'Mario Smit', 'Joe Can', 'Lauren Thompson', 'Camila Roberts'],
        }
        
    ]).then(function (answers) {
        console.log(answers);
        var employee = "SELECT * FROM employee WHERE employee.first_name = ? , employee.last_name = ?, employee.role_id = ?, employee.manager_id";
        var inserts = ['answers.first_name', 'answers.last_name', 'answers.employeeRole', 'answers.manager'];
        employee = mysql.format(employee, inserts);
        console.table('added to database', answers);
        promptCompany()
    })
}

const promptUpdateRole = () => {
    console.log(`
    ===================
    Update Employee Role
    ===================
    `);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'name',
            message: 'Which employee do you want to update?',
            choices: ['Ruby Santiago', 'Maria Lopez', 'Makeyla Johnson', 'Junior Winx', 'Marko Del', 'Jackie Lawrence', 'Marta Robinson', 'Alex True']
        },
        {
            type: 'list',
            name: 'newRole',
            message: 'Which role do you want to assign the selected employee?',
            choices: ['Finance Lead', 'Sales Associare', 'Marketing Specialist', 'Production Lead', 'Engineer Senior', 'Assistant HR', 'Bookeeping', 'Security']
        }
    ]).then(function (answers) {
        console.log(answers);
        var sql = "SELECT * FROM employee WHERE employee.name = ?, employee.role_id = ?";
        var inserts = ['answers.name', 'answers.role_id'];
        sql = mysql.format(sql,inserts);
        console.log('added to the database', answers);
        promptCompany()
    })
}

function companies() {
    promptCompany()
    .then(answers => {
        (answers);
    });
}






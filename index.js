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

            console.table('added to the database', results),
                     promptCompany()
          
        }) 
       
    } 
  

const promptRoles = () => {      
        connection.query("SELECT * FROM `role` WHERE `id` = `id` AND `title`=`title` AND `department_id` = `department_id` AND `salary` = `salary`",
        function (err, results, fields) {
          console.table('added to the database', results ),
                   promptCompany()
  })
}


const promptEmployees = () => {
    connection.query("SELECT * FROM `employee`  WHERE `id` = `id` AND `first_name`=`first_name` AND `last_name` = `last_name` AND `role_id` = `role_id` AND `manager_id` = `manager_id` ",
    function (err, results, fields) {
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
        connection.query('INSERT INTO department SET ?', {
        name: answers.Department
        }, 
        function (error, results,fields) {
            if(error) throw error;
        
            console.log(results.insertId);
                promptCompany()
        })
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
        message: 'Which department does the role belong to 1= Finance Lead, 2 = Sales Associate, 3 = Marketing Specialist, 4 = Production Lead, 5 = Engineer Senior, 6 = Assistant HR, 7 = Bookeeping, 8 = Security?',
        choices: ['1', '2', '3', '4', '5', '6', '7', '8']
    }
]).then(function (answers) {
    console.log(answers);
    connection.query('INSERT INTO role SET ? ', {
        title: answers.Role,
    salary: answers.Salary,
    department_id: answers.dept 
    }, 
    function (error, results,fields) {
        if(error) throw error;
    
        console.log(results.insertId);
            promptCompany()
    })
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
            message: 'What is the employees role 1 = Finance, 2 = Sales, 3 = Marketing, 4 = Production, 5 =  Engineer,6 =  HR, 7 = Accounting, 8 = Loss Prevention?',
            choices: ['1', '2', '3', '4', '5', '6', '7', '8'],
        },
        {
           type: 'list',
           name: 'manager',
           message: 'Who is the employees manager 1 = None, 2 = Jose Torres, 3 = Tom Beth, 4 = Tracy Robin, 5 = Jocey Marlo, 6 = Mario Smit, 7 = Joe Can, 8 = Lauren Thompson, 9 = Camila Roberts?',
           choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        }
        
    ]).then(function (answers) {
        console.log(answers);
        connection.query('INSERT INTO employee SET ?', {
        first_name: answers.first_name,
        last_name: answers.last_name,
        role_id: answers.employeeRole,
        manager_id: answers.manager
        }, 
        function (error, results,fields) {
            if(error) throw error;
        
            console.log(results.insertId);
                promptCompany()
        })
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
        connection.query('INSERT INTO employee SET ?', {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.employeeRole,
            }, 
            function (error, results,fields) {
                if(error) throw error;
            
                console.log(results.insertId);
        console.log('added to the database', answers);
        promptCompany()
    })
})
}

function companies() {
    promptCompany()
    .then(answers => {
        (answers);
    });
}






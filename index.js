const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const fs = require('fs');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'WD4Rainnow99!',
    database: 'employee_detective'
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
        } else if (answer.options === "Done") {
            return promptDone();
        } else if (answer.options === "Menu") {
            return promptCompany();
    }
    
})
}


const promptDepartment = () => {
          connection.query(" SHOW TABLE * FROM department", function (err, result, fields)
          {
          const department = cTable.getTable([
              {
                  id: 1,
                  name:'Finance'
              },
              {
                  id: 2,
                  name: 'Sales'

              },
              {
                  id: 3,
                  name: 'Marketing'
              },
              {
                  id: 4,
                  name: 'Production'
              },
              {
                  id: 5,
                  name: 'Engineer'

              },
              {
                id: 6,
                name: 'HR'
              },
              {
                id: 7,
                name: 'Accounting'
              },
              {
                  id: 8,
                  name: 'Loss Prevention'
              }
          ])
          console.log(department);
           promptCompany();
        }) 
       
    } 
  

const promptRoles = () => {
    connection.query(" SHOW TABLE * FROM roles AND SELECT * department", function (err, result, fields)
    {
    const roles = cTable.getTable([
        {
            id: 1,
            title: 'Finance Lead',
            department: 'Finance',
            salary: 90000,
            
        },
        {
            id: 2,
            title:  'Sales Associate',
            department: 'Sales',
            salary: 30000,
            
            

        },
        {
            id: 3,
            title:  'Marketing Specialist',
            department: 'Marketing',
            salary: 70000,
            
            
        },
        {
            id: 4,
            title:  'Production Lead',
            department: 'Production',
            salary: 100000,
            
        },
        {
            id: 5,
            title:  'Engineer Senior',
            department: 'Engineer',
            salary: 110000,
            

        },
        {
            id: 6,
            title:  'Assistant HR',
            department: 'HR',
            salary: 50000,
            
        },
        {
            id: 7,
            title:  'Bookkeeping',
            department: 'Accounting',
            salary: 60000,
           
        },
        {
            id: 8,
            title: 'Security' ,
            department: 'Loss Prevention',
            salary: 60000,
            
        }
    ])
    console.log(roles);
    promptCompany();
  })
}


const promptEmployees = () => {
    connection.query("SHOW TABLE * FROM employee", function (err, result, fields)
    {
    const employee = cTable.getTable([
        {
            id: 1,
            first_name: 'Ruby',
            last_name: 'Santiago',
            title: 'Finance Lead',
            department: 'Finance',
            salary: 90000,
            manager: 'Jose Torres'
            
        },
        {
            id: 2,
            first_name: 'Maria',
            last_name: 'Lopez',
            title:  'Sales Associate',
            department: 'Sales',
            salary: 30000,
            manager: 'Tom Beth'
            
            

        },
        {
            id: 3,
            first_name: 'Makeyla',
            last_name: 'Johnson',
            title:  'Marketing Specialist',
            department: 'Marketing',
            salary: 70000,
            manager: 'Tracy Robin'
            
            
        },
        {
            id: 4,
            first_name: 'Junior',
            last_name: 'Winx',
            title:  'Production Lead',
            department: 'Production',
            salary: 100000,
            manager: 'Jocey Marlo',
            
        },
        {
            id: 5,
            first_name: 'Marko',
            last_name: 'Del',
            title:  'Engineer Senior',
            department: 'Engineer',
            salary: 110000,
            manager: 'Mario Smit',
            

        },
        {
            id: 6,
            first_name: 'Jackie',
            last_name: 'Lawrence',
            title:  'Assistant HR',
            department: 'HR',
            salary: 50000,
            manager: 'Joe Can',
            
        },
        {
            id: 7,
            first_name: 'Marta',
            last_name: 'Robinson',
            title:  'Bookkeeping',
            department: 'Accounting',
            salary: 60000,
            manager: 'Lauren Thompson',
           
        },
        {
            id: 8,
            first_name: 'Alex',
            last_name: 'True',
            title: 'Security' ,
            department: 'Loss Prevention',
            salary: 60000,
            manager: 'Camila Roberts',
            
        }
    ])
    console.log(employee);
    promptCompany();
  })
} 



const promptAddDept = () => {
    console.log(`
    ===================
    Add  A Department
    ===================
    `);
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
    ]).then(function () {
        connection.query('SELECT * FROM department WHERE `name`  INSERT INTO department',
        function (err, results, fields) {
            console.log(results);
            console.log(fields);
            promptCompany();
           
        })
    })
}

const promptAddRole = () => {
    console.log(`
    ===================
    ADD A Role
    ===================
    `);
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
]).then(function () {
    connection.query('SELECT * FROM role WHERE title and `salary` INSERT INTO `title` and `salary`',
    function (err, results, fields) {
        console.log(results);
        console.log(fields);
        promptCompany();
       
    })
})
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
        (answers);
    });
}

companies()

connection.connect(err => {
    console.log('success')
});



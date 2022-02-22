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
    connection.query(" SHOW TABLE * FROM employee", function (err, result, fields)
    {
    const employee = cTable.getTable([
        {
            id: 1,
            first_name:
            last_name:
            title: 'Finance Lead',
            department: 'Finance',
            salary: 90000,
            manager:
            
        },
        {
            id: 2,
            first_name:
            last_name:
            title:  'Sales Associate',
            department: 'Sales',
            salary: 30000,
            manager:
            
            

        },
        {
            id: 3,
            first_name:
            last_name:
            title:  'Marketing Specialist',
            department: 'Marketing',
            salary: 70000,
            manager:
            
            
        },
        {
            id: 4,
            first_name:
            last_name:
            title:  'Production Lead',
            department: 'Production',
            salary: 100000,
            manager:
            
        },
        {
            id: 5,
            first_name:
            last_name:
            title:  'Engineer Senior',
            department: 'Engineer',
            salary: 110000,
            manager:
            

        },
        {
            id: 6,
            first_name:
            last_name:
            title:  'Assistant HR',
            department: 'HR',
            salary: 50000,
            manager:
            
        },
        {
            id: 7,
            first_name:
            last_name:
            title:  'Bookkeeping',
            department: 'Accounting',
            salary: 60000,
            manager:
           
        },
        {
            id: 8,
            first_name:
            last_name:
            title: 'Security' ,
            department: 'Loss Prevention',
            salary: 60000,
            manager:
            
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
        (answers);
    });
}

companies()

connection.connect(err => {
    console.log('success')
});



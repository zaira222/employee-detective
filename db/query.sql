SELECT department.*, department.id AS department_id
FROM department 
RIGHT JOIN role ON role.department_id = department.id;



SELECT role.*, employee.id AS role_id
FROM role
LEFT JOIN employee ON employee.role_id = role.id ;



 SELECT m.id,
    m.manager_id
    FROM
    employee my
    LEFT JOIN
    employee m ON m.id = m.manager_id;

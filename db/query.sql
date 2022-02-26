SELECT department.*, role.department_id AS department_id
FROM department 
RIGHT JOIN role ON department.id = role.department_id;



SELECT role.*, employee.role_id AS role_id
FROM role
LEFT JOIN employee ON role.id = role_id;



 SELECT my.id,
    me.manager_id
    FROM
    employee my
    LEFT JOIN
    employee me ON my.id = me.manager_id;

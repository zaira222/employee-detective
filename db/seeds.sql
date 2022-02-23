 INSERT INTO department (id, name)
    VALUES
    (1, 'Finance'),
    (2, 'Sales'),
    (3, 'Marketing'),
    (4, 'Production'),
    (5, 'Engineer'),
    (6, 'HR'),
    (7, 'Accounting'),
    (8, 'Loss Prevention');

INSERT INTO role (id, title, department_id, salary)
    VALUES
    (1, 'Finance Lead', 1, 90000),
    (2, 'Sales Associate', 2, 30000),
    (3, 'Marketing Specialist', 3, 70000),
    (4, 'Production Lead', 4, 100000),
    (5, 'Engineer Senior', 5, 110000),
    (6, 'Assitant HR', 6, 50000),
    (7, 'Bookeeping', 7, 60000),
    (8, 'Security', 8, 60000);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES
    (1, 'Ruby', 'Santiago', 1 ,  1),
    (2, 'Maria', 'Lopez', 2 , 2),
    (3, 'Makeyla', 'Johnson', 3 , 3),
    (4, 'Junior', 'Winx', 4 , 4),
    (5, 'Marko', 'Del', 5 , 5),
    (6, 'Jackie', 'Lawrence', 6 , 6),
    (7, 'Marta', 'Robinson', 7 , 7),
    (8, 'Alex', 'True', 8 , 8);

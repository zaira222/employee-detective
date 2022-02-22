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
    (1, 'Finance Lead', 'Finance', 90000),
    (2, 'Sales Associate', 'Sales', 30000),
    (3, 'Marketing Specialist', 'Marketing', 70000),
    (4, 'Production Lead', 'Production', 100000),
    (5, 'Engineer Senior', 'Engineer', 110000),
    (6, 'Assitant HR', 'HR', 50000),
    (7, 'Bookeeping', 'Accounting', 60000),
    (8, 'Security', 'Loss Prevention', 60000);


INSERT INTO employee (id, first_name, last_name, title, department, salary, manager)
    VALUES
    (1, 'Ruby', 'Santiago', 'Finance Lead', 'Finance', 90000, 'Jose Torres'),
    (2, 'Maria', 'Lopez', 'Sales Associate', 'Sales', 30000, 'Tom Beth'),
    (3, 'Makeyla', 'Johnson', 'Marketing Specialist', 'Marketing', 70000, 'Tracy Robin'),
    (4, 'Junior', 'Winx', 'Production Lead', 'Production', 100000, 'Jocey Marlo'),
    (5, 'Marko', 'Del', 'Engineer Senior', 'Engineer', 110000, 'Mario Smit'),
    (6, 'Jackie', 'Lawrence', 'Assitant HR', 'HR', 50000, 'Joe Can'),
    (7, 'Marta', 'Robinson', 'Bookeeping', 'Accounting', 60000, 'Lauren Thompson'),
    (8, 'Alex', 'True', 'Security', 'Loss Prevention', 60000, 'Camila Roberts');

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

INSERT INTO roles (id, title, department_id, salary)
    VALUES
    (1, 'Finance Lead', 'Finance', 90000),
    (2, 'Sales Associate', 'Sales', 30000),
    (3, 'Marketing Specialist', 'Marketing', 70000),
    (4, 'Production Lead', 'Production', 100000),
    (5, 'Engineer Senior', 'Engineer', 110000),
    (6, 'Assitant HR', 'HR', 50000),
    (7, 'Bookeeping', 'Accounting', 60000),
    (8, 'Security', 'Loss Prevention', 60000);
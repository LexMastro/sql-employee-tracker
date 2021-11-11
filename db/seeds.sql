INSERT INTO department (id, name)
VALUES (1, "Designer",),
       (2, "Web Developer"),
       (3, "Engineer"),
       (4, "Sales");

INSERT INTO employee_role (id, title, department, salary)
VALUES (1, "Graphic Designer", 1, "80000"),
       (2, "Full Stack Developer", 2, "100000"),
       (3, "Software Engineer", 3, "120000"),
       (4, "Sales Manager", 4, "90000");
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Alexis", "Mastro", 1, 1),
       (2, "Full Stack Developer", 2, NULL),
       (3, "Software Engineer", 3, NULL,
       (4, "Sales Manager", 4, 2);
       
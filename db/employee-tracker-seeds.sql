USE employee_trackerDB;
 
-- DEPARTMENT SEEDS --
INSERT INTO department (name)
VALUES ("Management"), ("Sales"), ("Accounting"), ("Human Resources"), ("Reception"), ("Customer Relations"), ("Temp Employee");

-- ROLE SEEDS --
INSERT INTO role (title, salary, department_id)
VALUES ('Regional Manager', 60000.00, 1), ('Assistant (to the) Regional Manager', 68000.00, 2) ('Salesperson', 65000.00, 3), 
('Lead Accountant', 70000.00, 4), ('Accountant', 60000.00, 5),('Receptionist', 40000.00, 6), ('Quality Control', 45000.00, 7), 
('Supplier Relations', 45000.00, 8), ('Human Resources', 65000.00, 9), ('Customer Relations Specialist', 42000.00, 10), ('Temp', 38000.00, 11);

-- EMPLOYEE SEEDS --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Dwight", "Schrute", 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jim", "Halpert", 3), ("Stanley", "Hudson", 3), ("Phyllis", "Lapin", 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Angela", "Martin", 4), ("Oscar", "Gutierrez", 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kevin", "Malone", 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Pam", "Beasley", 6), ("Erin", "Hannon", 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Creed", "Bratton", 7);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Meredith", "Palmer", 8);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Toby", "Flenderson", 9);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kelly", "Kapoor", 10);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ryan", "Howard", 11);




USE employee_trackerDB;
 
-- DEPARTMENT SEEDS --
INSERT INTO department (name)
VALUES ("Management"), ("Sales"), ("Accounting"), ("Human Resources"), ("Reception"), ("Customer Relations"), ("Temp Employee");

-- ROLE SEEDS --
INSERT INTO role (title, salary, department_id)
VALUES ('Regional Manager', 60000.00, 1), ('Assistant to the Regional Manager', 68000.00, 2), ('Salesperson', 65000.00, 2), 
('Lead Accountant', 70000.00, 3), ('Accountant', 60000.00, 3),('Receptionist', 40000.00, 5), ('Quality Control', 45000.00, 6), 
('Supplier Relations', 45000.00, 6), ('Human Resources', 65000.00, 4), ('Customer Relations Specialist', 42000.00, 6), ('Temp', 38000.00, 7);

-- EMPLOYEE SEEDS --
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Michael", "Scott", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwight", "Schrute", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 3, 1), ("Stanley", "Hudson", 3, 1), ("Phyllis", "Lapin", 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Angela", "Martin", 4, 1), ("Oscar", "Gutierrez", 4, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Malone", 5, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Pam", "Beasley", 6, 1), ("Erin", "Hannon", 6, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Creed", "Bratton", 7, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Meredith", "Palmer", 8, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Toby", "Flenderson", 9, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kelly", "Kapoor", 10, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryan", "Howard", 11, 1);




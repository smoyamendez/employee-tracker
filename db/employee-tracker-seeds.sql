-- CREATING DEPARTMENT TABLE --
CREATE TABLE department (
    -- CREATE ID COLUMN --
    id INT NOT NULL AUTO_INCREMENT,
    -- MAKES NAME COLUMN --
    name VARCHAR(30) NOT NULL,
    -- MAKES ID PRIMARY KEY --
    PRIMARY KEY (id)
);

-- CREATING ROLE TABLE --
CREATE TABLE role (
     -- CREATE ID COLUMN --
    id INT NOT NULL AUTO_INCREMENT,
    -- CREATE TITLE COLUMN --
    title VARCHAR(30) NOT NULL,
    -- CREATE SALARY COLUMN --
    salary DECIMAL (65,2) NOT NULL,
    -- CREATE DEPARTMENT ID --
    department_id INT NOT NULL,
    -- MAKES ID PRIMARY KEY --
    PRIMARY KEY (id),
    -- MAKES DEPARTMENT_ID FOREIGN KEY --
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- CREATING EMPLOYEE TABLE --
CREATE TABLE employee (
    -- CREATE ID COLUMN --
    id INT NOT NULL AUTO_INCREMENT,
    -- CREATE FIRST_NAME COLUMN --
    first_name VARCHAR(30) NOT NULL,
    -- CREATE LAST_NAME COLUMN --
    last_name VARCHAR(30) NOT NULL,
    -- CREATE ROLE_ID COLUMN --
    role_id INT NOT NULL,
    -- CREATE MANAGER_ID COLUMN --
    manager_id INT,
     -- MAKES ID PRIMARY KEY --
    PRIMARY KEY (id),
    -- MAKES ROLE_ID FOREIGN KEY --
    FOREIGN KEY (role_id) REFERENCES role(id),
    -- MAKES MANAGER_ID FOREIGN KEY --
    -- FIXME: may need to be role(id) --
    FOREIGN KEY (manager_id) REFERENCES employee(id) 
);
 

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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwight", "Schrute", 2);


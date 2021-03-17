// DEPENDENCIES
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  // Database connection
  database: "employee_trackerDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  startPrompt();
});

function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "WHAT WOULD YOU LIKE TO DO?",
        name: "start",
        choices: [
          "VIEW ALL EMPLOYEES",
          "VIEW ALL ROLES",
          "VIEW ALL DEPARTMENTS",
          "ADD EMPLOYEE",
          "ADD ROLE",
          "ADD DEPARTMENT",
          "UPDATE EMPLOYEE ROLE",
          "EXIT",
        ],
      },
    ])
    .then(function (res) {
      switch (res.start) {
        case "VIEW ALL EMPLOYEES":
          viewEmpAll();
          break;
        case "VIEW ALL ROLES":
          viewEmpRole();
          break;
        case "VIEW ALL DEPARTMENTS":
          viewEmpDept();
          break;
        case "ADD EMPLOYEE":
          addEmp();
          break;
        case "ADD ROLE":
          addRole();
          break;
        case "ADD DEPARTMENT":
          addDept();
          break;
        case "UPDATE EMPLOYEE ROLE":
          updateEmpRole();
          break;
        case "EXIT":
          return connection.end();
      }
    });
}

const viewEmpAll = () => {
  // TODO: CONCAT MANAGER AT THE END OF IT
  connection.query("SELECT * FROM employee", (err, empAll) => {
    if (err) throw err;
    console.table(empAll);
    startPrompt();
  });
};

const viewEmpRole = () => {
  connection.query("SELECT * FROM role", (err, empRole) => {
    if (err) throw err;
    console.table(empRole);
    startPrompt();
  });
};

const viewEmpDept = () => {
  connection.query("SELECT * FROM department", (err, empDept) => {
    if (err) throw err;
    console.table(empDept);
    startPrompt();
  });
};

// INSERT INTO
const addEmp = () => {
  connection.query("SELECT * FROM role", (err, roles) => {
    const availableRoles = roles.map((role) => {
      return { name: role.title, value: role.id };
    });
    connection.query("SELECT * FROM employee", (err, managers) => {
      const currentManagers = managers.map((manager) => {
        return {
          name: `${manager.first_name} ${manager.last_name}`,
          value: manager.id,
        };
      });

      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "WHAT IS EMPLOYEE'S FIRST NAME?",
          },
          {
            type: "input",
            name: "last_name",
            message: "WHAT IS EMPLOYEE'S LAST NAME?",
          },
          {
            type: "list",
            name: "role_id",
            message: "WHAT IS EMPLOYEE'S ROLE?",
            choices: availableRoles,
          },
          {
            type: "list",
            name: "manager_id",
            message: "WHO IS EMPLOYEE'S MANAGER?",
            choices: currentManagers,
          },
        ])
        .then(function (choices) {
          connection.query("INSERT INTO employee SET ?", choices, (err) => {
            if (err) return console.log(err);
            console.log("New employee added");
            startPrompt();
          });
        });
    });
  });
};

function addRole() {
  connection.query("SELECT * FROM department", (err, departments) => {
    const currentDepartments = departments.map((department) => {
      return {
        name: `${department.name}`,
        value: department.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the role title?",
        },

        {
          type: "input",
          name: "salary",
          message: "What is the role salary?",
        },

        {
          type: "list",
          name: "department_id",
          message: "What is the department id?",
          choices: currentDepartments,
        },
      ])
      .then((choices) => {
        connection.query("INSERT INTO role SET ?", choices, (err) => {
          if (err) return console.log(err);
          console.log("New role added");
          startPrompt();
        });
      });
  });
}

function addDept() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the department name?"
        }

    ])
    .then((choices) => {
        connection.query("INSERT INTO department SET ?", choices, (err) => {
            if (err) return console.log (err);
            console.log ("New department added");
            startPrompt();
        });
    });
}

function updateEmpRole() {
    connection.query("SELECT * FROM employee", (err, employees) => {
        const currentEmployees = employees.map((employee) => {
          return { name: `${employee.first_name} ${employee.last_name}`, value: employee.id };
        });
        connection.query("SELECT * FROM role", (err, roles) => {
          const roleOptions = roles.map((role) => {
            return {
              name: role.title,
              value: role.id,
            };
          });
    
          inquirer
            .prompt([
              {
                type: "list",
                name: "id",
                message: "CHOOSE EMPLOYEE:",
                choices: currentEmployees
              },
              {
                type: "list",
                name: "role_id",
                message: "CHOOSE NEW ROLE:",
                choices: roleOptions
              },
            ])
            .then(function (choices) {
                console.log(choices)
              connection.query("UPDATE employee SET role_id = ? WHERE id = ?", choices.id, choices.role_id, (err) => {
                if (err) return console.log(err);
                console.log("Employee role updated");
                startPrompt();
              });
            });
        });
      });
}

function exitPrompt() {
  process.exit();
}

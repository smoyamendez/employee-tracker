// DEPENDENCIES
const mysql = require('mysql');
const inquirer = require('inquirer');

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
    // Your password
    password: '',
    // Database connection
    database: 'employee_trackerDB',
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
                    "VIEW EMPLOYEES BY ROLE",
                    "VIEW EMPLOYEES BY DEPARTMENT",
                    "ADD EMPLOYEE",
                    "ADD ROLE",
                    "ADD DEPARTMENT",
                    "UPDATE EMPLOYEE ROLE",
                    "EXIT"
                ]
            }
        ])
        .then(function (res) {
            switch (res.start) {
                case "VIEW ALL EMPLOYEES":
                    viewEmpAll();
                    break;
                case "VIEW EMPLOYEES BY ROLE":
                    viewEmpRole();
                    break;
                case "VIEW EMPLOYEES BY DEPARTMENT":
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
                    exitPrompt();
                    break;
            }
        })
}

const viewEmpAll = () => {
    // TODO: CONCAT MANAGER AT THE END OF IT
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompt();
    })
}

const viewEmpRole = () => {
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompt();
    })
}

const viewEmpDept = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompt();
    })
}

// for addEmp() role choices
const roleChoices = () => {
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        res.map((role) => {
            return {name: role.title, value: role.id}
        });
    })
}

// for addEmp() manager choices
const managerChoices = () => {
    const query = connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        res.map(({title}));
    })
    return query;
}

const addEmp = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'WHAT IS EMPLOYEE\'S FIRST NAME?'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'WHAT IS EMPLOYEE\'S LAST NAME?'
                },
                {
                    type: 'list',
                    name: 'title',
                    message: 'WHAT IS EMPLOYEE\'S ROLE?',
                    choices: roleChoices()
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: 'WHO IS EMPLOYEE\'S MANAGER?',
                    choices: managerChoices()
                },
            ])
            // TAKE CHOICES FROM PROMPTS & INSERT INTO employee SET ? (fname,lname,managerid,roleid)
            .then (function(choices) {
                connection
            })
    })
}



function addRole() {

}

function addDept() {

}

function updateEmpRole() {

}

function exitPrompt() {
    connection.end();
    process.exit();
}
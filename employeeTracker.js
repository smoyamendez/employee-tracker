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

function viewEmpAll() {
    // CONCAT MANAGER AT THE END OF IT
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name"), 
    function (err, res) {
        if (err) throw err
        console.table(res)
        startPrompt();
    }
}
function viewEmpRole() {

}
function viewEmpDept() {

}
function addEmp() {

}
function addDept() {

}
function updateEmpRole() {

}
function exitPrompt() {
    connection.end();
    process.exit();
}
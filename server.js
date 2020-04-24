var mysql = require('mysql2');
var inquirer = require('inquirer');
var db = require('./config/db');
var Questions = require('./lib/questions');
var getEmployees = require('./lib/getEmployees');
var getOneEmployee = require('./lib/getOneEmployee');

function runCMS() {
    inquirer.prompt(initQuestions)
        .then(choice => {
            // console.log(choice);
            if (choice.action === 'add') { addCMS() }
            if (choice.action === 'update') { updateCMS() }
            else { viewCMS() }
        });
}

function viewCMS() {
    inquirer.prompt(viewQuestions)
        .then(choice => {
            if (choice.action === 'allEmployees') { getEmployees() }
            if (choice.action === 'oneEmployee') { getOneEmployee(choice.id) }
            if (choice.action === 'role') {getRoles()}
            if (choice.action === 'department') {getDepartments()}
        });
}






runCMS();
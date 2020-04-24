viewQuestions = ([
    {
        type: 'list',
        name: 'action',
        message: 'What would you ike to view?',
        choices: [
            {value: 'allEmployees', name: 'All Employees'},
            {value: 'oneEmployee', name: 'One Employee'},
            {value: 'role', name: 'Roles'},
            {value: 'depmartment', name: 'Departments'}
        ]
    },
    {
        when: (answers) => answers.action === "oneEmployee",
        type: 'input',
        name: 'id',
        message: 'Enter or Paste the Employee id to get'
    }
]);

module.exports = viewQuestions;
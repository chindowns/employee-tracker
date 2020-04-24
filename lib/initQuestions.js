initQuestions = ([
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            { value: 'view', name: 'View Employee Records' },
            { value: 'add', name: 'Add Employee, Department, or Role' },
            { value: 'update', name: 'Update Employee' },
            { value: 'delete', name:' Delete Employee, Department, or Role'}
        ]
    }
]);

module.exports = initQuestions;
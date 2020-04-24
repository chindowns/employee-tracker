var db = require('../config/db');

function getEmployees() {
    db.employee.findAll({
        include: [{
            model: db.role,
            include: {
                model: db.department
            }
        },
        {
            model: db.employee,
            as: 'manager_id'
        }]
    })
        .then((results) => {
            // console.log(results);
            results.forEach(employee => {

                console.log(`
Employee ID: ${employee.dataValues.id}
Name:  ${employee.dataValues.first_name} ${employee.dataValues.last_name} 
Title:  ${employee.role.title}
Salary: $ ${(employee.role.salary).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
Manager: ${employee.manager_id.dataValues.first_name} ${employee.manager_id.dataValues.last_name}
Department: ${employee.role.department.name}`)

            });
        });
}

module.exports = getEmployees;
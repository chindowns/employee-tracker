var Sequelize = require('sequelize');
var sequelize = require('../config/connection');

module.exports = (sequelize, Sequelize) => {
    var Employee = sequelize.define(
        'employee',
        {
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            role_id: Sequelize.INTEGER,
            // manager_id: Sequelize.INTEGER
        },
        {
            underscored: true
        }
    );
    return Employee;
}
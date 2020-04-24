var Sequelize = require('sequelize');
var sequelize = require('../config/connection');

module.exports = (sequelize, Sequelize) => {
    var Employee;
    Department = sequelize.define(
        'department',
        {
            name: Sequelize.STRING,
        }
    );
    return Department;
}
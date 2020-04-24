var Sequelize = require('sequelize');
var sequelize = require('../config/connection');

module.exports = (sequelize, Sequelize) => {
    var Role = sequelize.define(
        'role',
        {
            title: Sequelize.STRING,
            salary: Sequelize.DECIMAL,
            department_id: Sequelize.INTEGER
        },
        {
            underscored: true
        }
    );
    return Role;
}

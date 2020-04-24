var Sequelize = require('sequelize');
var sequelize = require('./connection');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.department = require('../models/department.js')(sequelize, Sequelize);
db.employee = require('../models/employee.js')(sequelize, Sequelize);
db.role = require('../models/role.js')(sequelize, Sequelize);

// Relations
db.role.belongsTo(db.department);
db.department.hasMany(db.role, {foreignKey: 'id'});
db.employee.belongsTo(db.role);
db.role.hasMany(db.employee, {foreignKey: 'id'});
db.employee.hasOne(db.employee, {foreignKey: 'id', as: 'manager_id'});


// Exports the connection for other files to use
module.exports = db;
const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    Name: String,
    Location: String,
    Position: String,
    Salary: Number
});

const EmployeeData = mongoose.model ( 'employee',EmployeeSchema);

module.exports = EmployeeData;
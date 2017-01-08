'use strict';
const Factory = require('./factory');
const Employee = require('./employee');


class EmployeeFactory extends Factory{
  static create(name){
    super.create(name);
    return new Employee(name);
  }
}

module.exports = EmployeeFactory;

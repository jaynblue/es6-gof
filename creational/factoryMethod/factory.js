'use strict';
const Employee = require('./employee');
const FullTime = require('./fulltime');
const PartTime = require('./parttime');
const Temporary = require('./temporary');
const Contractor = require('./contractor');

class Factory {
  static createEmployee(type){
    let employee;
    switch (type) {
      case 'fulltime':
        employee = new FullTime(type);
        break;
      case 'parttime':
        employee = new PartTime(type);
        break;
      case 'temporary':
        employee = new Temporary(type);
        break;
      case 'contractor':
        employee = new Contractor(type);
        break;
      default:
        employee = new Employee(type);
        break;
    }
    return employee;
  }
}

module.exports = Factory;

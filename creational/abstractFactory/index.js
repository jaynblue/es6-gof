'use strict';
const EmployeeFactory = require('./employeeFactory');
const VendorFactory = require('./vendorFactory');

class AbstractFactoryRunner{
  static run(){
    var employee = EmployeeFactory.create('Zequinha');
    var vendor = VendorFactory.create('Cida');
    employee.say();
    vendor.say();
  }
}

module.exports = AbstractFactoryRunner;

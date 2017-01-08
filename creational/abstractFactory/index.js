'use strict';
const EmployeeFactory = require('./employeeFactory');
const VendorFactory = require('./vendorFactory');
var employee = EmployeeFactory.create('Zequinha');
var vendor = VendorFactory.create('Cida');
employee.say();
vendor.say();

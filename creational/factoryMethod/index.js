'use strict';

const Factory = require('./factory');

const types = ['fulltime', 'parttime', 'temporary', 'contractor', 'another'];
const employees = [];

for(let type of types){
  employees.push(Factory.createEmployee(type));
}

for(let employee of employees){
  employee.say();
}

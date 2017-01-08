'use strict';

const Factory = require('./factory');

const types = ['fulltime', 'parttime', 'temporary', 'contractor', 'another'];
const employees = [];

class FactoryMethodRunner{
  static run(){
    for(let type of types){
      employees.push(Factory.createEmployee(type));
    }

    for(let employee of employees){
      employee.say();
    }
  }
}

module.exports = FactoryMethodRunner;

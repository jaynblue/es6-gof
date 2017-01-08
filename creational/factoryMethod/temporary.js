'use strict';
const Employee = require('./employee');
class Temporary extends Employee{
  constructor(type){
    super(type)
    this.hourly = '$10';
  }
}

module.exports = Temporary;

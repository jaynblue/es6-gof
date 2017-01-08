'use strict';
const Employee = require('./employee');
class Contractor extends Employee{
  constructor(type){
    super(type)
    this.hourly = '$15';
  }
}

module.exports = Contractor;

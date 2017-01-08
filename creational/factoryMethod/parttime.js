'use strict';
const Employee = require('./employee');
class PartTime extends Employee{
  constructor(type){
    super(type)
    this.hourly = '$11';
  }
}

module.exports = PartTime;

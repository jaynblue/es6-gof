'use strict';
const Employee = require('./employee');
class FullTime extends Employee{
  constructor(type){
    super(type);
    this.hourly = '$12';
  }
}

module.exports = FullTime;

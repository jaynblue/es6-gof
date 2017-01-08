'use strict'
class Employee{
  constructor(type){
    this.type = type;
    this.hourly = 'unknown';
  }

  say(){
    console.log(`${this.type}: rate ${this.hourly}/hour`);
  }
}

module.exports = Employee

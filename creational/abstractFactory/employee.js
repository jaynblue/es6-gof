'use strict'
const Person = require('./person');

class Employee extends Person{
  constructor(name){
    super(name)
  }

  say(){
    super.say('Employee')
  }
}

module.exports = Employee

'use strict'
const Person = require('./person');

class Vendor extends Person{
  constructor(name){
    super(name)
  }

  say(){
    super.say('Vendor')
  }
}

module.exports = Vendor

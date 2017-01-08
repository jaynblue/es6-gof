'use strict'
const Auto = require('./auto');

class Car extends Auto{
  constructor(){
    super()
  }

  addParts(){ 
    this.doors = 2;
  }
}

module.exports = Car

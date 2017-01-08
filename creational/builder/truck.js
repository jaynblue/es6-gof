'use strict'
const Auto = require('./auto');

class Truck extends Auto{
  constructor(){
    super()
  }

  addParts(){
    this.doors = 4;
  }
}

module.exports = Truck

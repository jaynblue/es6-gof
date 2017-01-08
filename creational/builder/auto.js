'use strict'
class Auto{
  constructor(){
    this.doors = 0;
  }

  say(){
    console.log(`Hi! I'm a ${this.doors}-doors car`)
  }
}

module.exports = Auto;

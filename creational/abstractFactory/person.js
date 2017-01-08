'use strict'
class Person{
  constructor(name){
    this.name = name;
  }

  say(who){
    console.log(`Hi! I'm a ${who} ${this.name}`)
  }
}

module.exports = Person;

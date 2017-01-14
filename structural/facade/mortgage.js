'use strict'
const Bank = require('./bank');
const Credit = require('./credit');
const Background = require('./background');

const person = Symbol();

class Mortgage{
  constructor(name){
    this[person] = name;
  }

  applyFor(value){
    let result = 'approved';
    if(! (Bank.verify(this[person], value) || Credit.get(this[person]) || Background.check(this[person]) )){
      result = 'denied';
    }
    return `${this[person]} has been ${result} for a ${value} mortgage`;
  }
}

module.exports = Mortgage;

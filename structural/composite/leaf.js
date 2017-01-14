'use strict';

const number = Symbol();

class Leaf{
  constructor(value){
    this[number] = value
  }

  get value(){
    return this[number];
  }
}

module.exports = Leaf;

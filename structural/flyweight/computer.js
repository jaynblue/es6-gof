'use strict';
const FlyweightFactory = require('./flyweightFactory');

class Computer{
  constructor(make, model, processor, memory, tag){
    this.flyweight = FlyweightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
  }

  get make(){
    return this.flyweight.make;
  }
}

module.exports = Computer;

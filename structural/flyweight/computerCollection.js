'use strict';
const Computer = require('./computer');


class ComputerCollection{
  constructor(){
    this.computers = [];
    this.count = 0;
  }

  add(make, model, processor, memory, tag){
    this.computers[Symbol.for(tag)] = new Computer(make, model, processor, memory, tag);
    this.count++;
    return this.get(tag);
  }

  get(tag){
    return this.computers[Symbol.for(tag)];
  }

  getCount(){
    return this.count;
  }
}

module.exports = ComputerCollection;

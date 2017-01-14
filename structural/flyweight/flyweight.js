'use strict';

class Flyweight{
  constructor(make, model, processor){
    this.make = make;
    this.model = model;
    this.processor = processor;
  }
}

module.exports = Flyweight;

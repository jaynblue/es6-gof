'use strict';
const Flyweight = require('./flyweight');

let flyweights = {};

class FlyweightFactory{
  static get(make, model, processor){
    let index = Symbol.for(make+model);
    flyweights[index] = flyweights[index] || new Flyweight(make, model, processor);
    return flyweights[index];
  }
}

module.exports = FlyweightFactory;

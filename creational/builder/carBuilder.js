'use strict';
const Builder = require('./builder');
const Car = require('./car');


class CarBuilder extends Builder{
  constructor(){
    super();
  }

  step1(){
    super.step1();
    this.auto = new Car();
  }

  step2(){
    super.step2();
    this.auto.addParts();
  }

}

module.exports = CarBuilder;
